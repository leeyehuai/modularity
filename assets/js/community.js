/* 社区模块 v2 —— 对接 Cloudflare Worker（跨设备多用户）
 * ------------------------------------------------------------------
 * 数据流向：
 *   浏览器 ──HTTPS──> Worker ──> GitHub Issues（文章库）
 *   注册/登录 → Worker 校验 → 签发 session token（存 localStorage）
 *   发文/改文/删文 → Worker 鉴权（只能改自己 user:<name> label 的 issue）
 *
 * 兼容降级：
 *   若未配置 API_BASE（或请求失败），自动回退到本机 localStorage 模式，
 *   保证离线/未部署时站点仍可本地演示。
 * ------------------------------------------------------------------ */
(function () {
  'use strict';

  /* ★ 你的 Worker 地址 */
  var API_BASE = 'https://notes-api.3229573185.workers.dev';

  var LS_TOKEN = 'fn-token';
  var LS_NAME = 'fn-name';
  var LS_POSTS_LOCAL = 'fn-user-posts';   /* 降级模式用 */
  var LS_ACCOUNTS = 'fn-accounts';        /* 降级模式：本地用户表（密码哈希保存，任何人无法得知明文） */
  var LS_REMEMBER = 'fn-remember';        /* 自动登录（记住邮箱） */
  var LS_AUTO = 'fn-auto-login';          /* 是否已勾选自动登录 */
  var LS_PROFILE = 'fn-profile-data';      /* 个人信息：性别/星座/偏好 */

  var state = {
    token: localStorage.getItem(LS_TOKEN) || '',
    name: localStorage.getItem(LS_NAME) || '',
    email: localStorage.getItem(LS_REMEMBER) || '',
    remotePosts: [],       /* 从 Worker 拉来的文章 */
    usingRemote: false
  };

  /* ---------------- 验证码（服务端签发，答案不下发） ----------------
   * 从 Worker GET /api/captcha 拉 SVG 图 + X-Captcha-Id 响应头。
   * 返回 { url, id }：url 直接塞进 <img src>，id 随注册/登录一起提交。 */
  var captchaCache = { url: '', id: '' };
  async function fetchCaptcha() {
    if (!API_BASE) return null;
    try {
      var res = await fetch(API_BASE + '/api/captcha', { headers: {} });
      var id = res.headers.get('X-Captcha-Id') || '';
      var blob = await res.blob();
      /* 旧的 objectURL 释放，防止内存堆积 */
      if (captchaCache.url) URL.revokeObjectURL(captchaCache.url);
      captchaCache = { url: URL.createObjectURL(blob), id: id };
      return captchaCache;
    } catch (e) {
      return null;
    }
  }

  /* ---------------- 本地身份（降级 + 缓存） ---------------- */
  function getProfile() {
    if (state.name) return { name: state.name };
    try {
      var p = JSON.parse(localStorage.getItem('fn-profile') || 'null');
      if (p && p.name) return p;
    } catch (e) {}
    return null;
  }
  function setProfile(name) {
    state.name = name;
    localStorage.setItem(LS_NAME, name);
    try { localStorage.setItem('fn-profile', JSON.stringify({ name: name, since: Date.now() })); } catch (e) {}
  }
  function logout() {
    state.token = '';
    state.name = '';
    state.email = '';
    localStorage.removeItem(LS_TOKEN);
    localStorage.removeItem(LS_NAME);
    localStorage.removeItem('fn-profile');
    localStorage.removeItem(LS_REMEMBER);
    localStorage.removeItem(LS_AUTO);
  }

  function authHeaders() {
    return state.token ? { 'Authorization': 'Bearer ' + state.token } : {};
  }

  /* ---------------- 本地密码哈希（降级模式：保存账号密码，但只存哈希，无法反查明文） ---------------- */
  function localAccounts() {
    try {
      var arr = JSON.parse(localStorage.getItem(LS_ACCOUNTS) || '[]');
      if (Array.isArray(arr)) return arr;
    } catch (e) {}
    return [];
  }
  function saveLocalAccounts(arr) {
    try { localStorage.setItem(LS_ACCOUNTS, JSON.stringify(arr)); } catch (e) {}
  }
  async function hashLocal(str) {
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('fn-salt::' + str));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }
  async function localRegister(email, password, nickname) {
    var accounts = localAccounts();
    var key = email.toLowerCase();
    if (accounts.some(function (a) { return a.email === key; })) throw new Error('该邮箱已注册，直接登录即可');
    if (nickname && accounts.some(function (a) { return a.nickname === nickname; })) throw new Error('该昵称已被占用');
    accounts.push({
      email: key,
      nickname: nickname || email.split('@')[0],
      ph: await hashLocal(key + '::' + password),
      since: Date.now()
    });
    saveLocalAccounts(accounts);
  }

  /* 支持用「邮箱」或「昵称」登录本地账号表 */
  async function localLogin(account, password) {
    var accounts = localAccounts();
    var key = account.trim().toLowerCase();
    var hit = accounts.find(function (a) {
      return a.email === key || a.nickname.toLowerCase() === key;
    });
    if (!hit) throw new Error('该账号尚未注册');
    if (hit.ph !== await hashLocal(hit.email + '::' + password)) throw new Error('密码错误');
    return hit;
  }

  /* 忘记密码：校验账号 + 邮箱是否匹配，再更新密码哈希 */
  async function localResetPassword(account, email, newPassword) {
    var accounts = localAccounts();
    var key = account.trim().toLowerCase();
    var ekey = email.trim().toLowerCase();
    var hit = accounts.find(function (a) {
      return a.email === key || a.nickname.toLowerCase() === key;
    });
    if (!hit) throw new Error('该账号不存在');
    if (hit.email !== ekey) throw new Error('邮箱与账号不匹配');
    hit.ph = await hashLocal(hit.email + '::' + newPassword);
    saveLocalAccounts(accounts);
  }

  /* 当前登录账号对象（本地表） */
  function currentAccount() {
    var email = (state.email || '').toLowerCase();
    if (!email) return null;
    return localAccounts().find(function (a) { return a.email === email; }) || null;
  }

  /* 修改密码：校验旧密码；改完保持当前会话不退出 */
  async function changePassword(oldPwd, newPwd) {
    var hit = currentAccount();
    if (!hit) throw new Error('当前未登录');
    if (hit.ph !== await hashLocal(hit.email + '::' + oldPwd)) throw new Error('旧密码错误');
    hit.ph = await hashLocal(hit.email + '::' + newPwd);
    saveLocalAccounts(localAccounts());
    /* 改密后不强制登出，当前会话继续有效；下次登录用新密码 */
  }

  /* 修改昵称：本地表 + 全局 profile 同步 */
  function changeNickname(nickname) {
    if (!nickname || nickname.length < 2 || nickname.length > 24) throw new Error('昵称需为 2-24 位');
    var hit = currentAccount();
    if (!hit) throw new Error('当前未登录');
    var accounts = localAccounts();
    var dup = accounts.find(function (a) {
      return a.email !== hit.email && a.nickname.toLowerCase() === nickname.toLowerCase();
    });
    if (dup) throw new Error('该昵称已被占用');
    hit.nickname = nickname;
    saveLocalAccounts(accounts);
    state.name = nickname;
    localStorage.setItem(LS_NAME, nickname);
    setProfile(nickname);
  }

  /* 个人信息：性别 / 星座 / 偏好 */
  function getProfileData() {
    var email = (state.email || '').toLowerCase();
    try {
      var all = JSON.parse(localStorage.getItem(LS_PROFILE) || '{}');
      return all[email] || { gender: '', zodiac: '', preference: '' };
    } catch (e) { return { gender: '', zodiac: '', preference: '' }; }
  }
  function saveProfileData(data) {
    var email = (state.email || '').toLowerCase();
    if (!email) return;
    var all = {};
    try { all = JSON.parse(localStorage.getItem(LS_PROFILE) || '{}'); } catch (e) {}
    all[email] = data;
    try { localStorage.setItem(LS_PROFILE, JSON.stringify(all)); } catch (e) {}
  }

  /* ---------------- 远端 API ---------------- */
  async function api(path, options) {
    if (!API_BASE) throw new Error('no-api');
    var res;
    try {
      res = await fetch(API_BASE + path, {
        headers: Object.assign({ 'Content-Type': 'application/json' }, authHeaders(), (options.headers || {})),
        method: options.method || 'GET',
        body: options.body ? JSON.stringify(options.body) : undefined
      });
    } catch (netErr) {
      /* 网络层失败（Worker 连不上 / DNS / CORS）：打标记，供调用方区分「离线降级」 */
      var ne = new Error('network-error');
      ne.network = true;
      throw ne;
    }
    var data = await res.json().catch(function () { return {}; });
    if (!res.ok) throw new Error(data.error || ('HTTP ' + res.status));
    return data;
  }

  /* 统一落库：登录/注册成功后调用 */
  function applySession(name, email, token, remember) {
    state.token = token;
    state.name = name;
    state.email = (email || '').toLowerCase();
    localStorage.setItem(LS_TOKEN, token);
    localStorage.setItem(LS_NAME, name);
    setProfile(name);
    if (remember) {
      localStorage.setItem(LS_REMEMBER, state.email);
      localStorage.setItem(LS_AUTO, '1');
    } else {
      localStorage.removeItem(LS_REMEMBER);
      localStorage.removeItem(LS_AUTO);
    }
  }

  /* 连通性探测：判断 Worker 是否可达。
     远端可达时优先用远端账号/发文；不可达才降级到本地。 */
  async function pingRemote() {
    if (!API_BASE) return false;
    try {
      await api('/api/posts');
      state.usingRemote = true;
      return true;
    } catch (e) {
      state.usingRemote = false;
      return false;
    }
  }

  async function register(nickname, email, password, remember, captcha) {
    var name = nickname || email.split('@')[0];
    var remoteOk = await pingRemote();

    /* 远端优先：注册请求先打到 Worker */
    if (remoteOk) {
      try {
        var body = { username: name, password: password };
        /* 远端 Worker 强制验证码（captcha = { id, code }） */
        if (captcha && captcha.id) {
          body.captchaId = captcha.id;
          body.captchaCode = captcha.code;
        }
        var data = await api('/api/register', { method: 'POST', body: body });
        /* 远端注册成功 → 顺手把本地账号表也写一份做离线兜底 */
        try { await localRegister(email, password, name); } catch (e) {}
        applySession(data.username, email, data.token, remember);
        return data;
      } catch (e) {
        /* 只有「Worker 连不上」（no-api / network-error）才允许本地降级注册；
           其余一切（昵称占用 / 验证码错 / 限流 / 业务拒绝）都抛给用户。 */
        if (!(e && (e.network || e.message === 'no-api'))) throw e;
        /* 走到这里 = 远端不可达，允许本地降级 */
      }
    }

    /* 远端不可达：本地落库 */
    await localRegister(email, password, name);
    var hit = await localLogin(email, password);
    applySession(hit.nickname, hit.email, 'local-' + Date.now(), remember);
    return { username: state.name };
  }

  async function login(account, password, remember, captcha) {
    var acc = account.trim();
    var remoteOk = await pingRemote();

    /* 远端优先：远端通就用远端校验，保证跨设备同账号一致 */
    if (remoteOk) {
      try {
        var body = { username: acc, password: password };
        if (captcha && captcha.id) {
          body.captchaId = captcha.id;
          body.captchaCode = captcha.code;
        }
        var data = await api('/api/login', { method: 'POST', body: body });
        /* 远端登录成功 → 本地账号表同步一份（首次跨设备时可能本地没有） */
        try {
          var localHit = localAccounts().find(function (a) {
            return a.email === acc.toLowerCase() || a.nickname.toLowerCase() === acc.toLowerCase();
          });
          if (!localHit) {
            /* 本地没账号时，用远端返回的昵称补一份；密码哈希留待用户下次本地登录时校验 */
            var emailKey = acc.indexOf('@') !== -1 ? acc.toLowerCase() : (acc + '@remote.local');
            var arr = localAccounts();
            arr.push({
              email: emailKey,
              nickname: data.username,
              ph: await hashLocal(emailKey + '::' + password),
              since: Date.now()
            });
            saveLocalAccounts(arr);
          }
        } catch (e) {}
        applySession(data.username, acc, data.token, remember);
        return data;
      } catch (e) {
        /* 只有「Worker 连不上」（no-api / network-error）才允许降级到本地登录；
           其余一切（账号密码错 / 验证码错 / 限流 / 业务拒绝）都抛给用户，绝不降级。 */
        if (!(e && (e.network || e.message === 'no-api'))) throw e;
        /* 走到这里 = 远端不可达，允许本地降级 */
      }
    }

    /* 远端不可达或临时网络错：回退到本地账号表 */
    var hit = await localLogin(acc, password);
    applySession(hit.nickname, hit.email, 'local-' + Date.now(), remember);
    return { username: hit.nickname };
  }

  /* 忘记密码：本地降级模式下直接重置 */
  async function resetPassword(account, email, newPassword) {
    await localResetPassword(account, email, newPassword);
  }

  /* 拉取远端文章；失败则回退到本机 localStorage */
  async function refreshPosts() {
    if (!API_BASE) {
      state.usingRemote = false;
      state.remotePosts = [];
      return loadLocalPosts();
    }
    try {
      var data = await api('/api/posts');
      state.usingRemote = true;
      state.remotePosts = data.posts || [];
      if (data.me) { state.name = data.me; localStorage.setItem(LS_NAME, data.me); }
      return state.remotePosts;
    } catch (e) {
      state.usingRemote = false;
      state.remotePosts = [];
      return loadLocalPosts();
    }
  }

  /* ---------------- 版本探测（跨设备同步确认） ----------------
   * pollVersion({ onStaticChange, onPostsChange, interval })
   *   onStaticChange(staticCommit): 静态网站 commit 变化 → 建议整页刷新
   *   onPostsChange(postsMaxAt):   文章库最新更新时间变化 → 仅刷新文章列表
   * 首次调用只记录基准值，不触发回调（避免刚打开页面就弹出"已更新"）。
   */
  var versionTimer = null;
  async function fetchVersion() {
    if (!API_BASE) return null;
    try { return await api('/api/version'); } catch (e) { return null; }
  }
  function pollVersion(opts) {
    opts = opts || {};
    var interval = (opts.interval || 30) * 1000;
    var base = null;
    async function tick() {
      var v = await fetchVersion();
      if (!v) return;
      if (!base) { base = v; return; }
      if (v.staticCommit && base.staticCommit && v.staticCommit !== base.staticCommit) {
        base = v;
        if (opts.onStaticChange) opts.onStaticChange(v.staticCommit);
        return; /* 静态变了，整页刷新优先，不再处理文章 */
      }
      if (v.postsMaxAt && base.postsMaxAt && v.postsMaxAt !== base.postsMaxAt) {
        base = v;
        if (opts.onPostsChange) opts.onPostsChange(v.postsMaxAt);
      }
    }
    if (versionTimer) clearInterval(versionTimer);
    tick();
    versionTimer = setInterval(tick, interval);
  }
  function stopPollVersion() {
    if (versionTimer) { clearInterval(versionTimer); versionTimer = null; }
  }

  /* ---------------- 本机降级存储 ---------------- */
  function loadLocalPosts() {
    try {
      var arr = JSON.parse(localStorage.getItem(LS_POSTS_LOCAL) || '[]');
      if (Array.isArray(arr)) return arr;
    } catch (e) {}
    return [];
  }
  function saveLocalPosts(arr) {
    try { localStorage.setItem(LS_POSTS_LOCAL, JSON.stringify(arr)); } catch (e) {}
  }
  function upsertLocal(post) {
    var arr = loadLocalPosts();
    var i = arr.findIndex(function (p) { return p.slug === post.slug; });
    post.updatedAt = Date.now();
    if (i === -1) arr.unshift(post); else arr[i] = post;
    saveLocalPosts(arr);
    return post;
  }
  function deleteLocal(slug) {
    saveLocalPosts(loadLocalPosts().filter(function (p) { return p.slug !== slug; }));
  }

  /* ---------------- 统一的发文/改文/删文 ---------------- */
  async function savePost(post) {
    /* 发文前先探测远端：远端通就走远端，避免「本地登录的账号发不出云端」。
       没 token 时也不勉强走远端（避免被 401 拦）。 */
    var remoteOk = await pingRemote();
    if (remoteOk && (!state.token || state.token.indexOf('local-') === 0)) {
      /* 远端通但当前是本地会话：抛特定错误，由编辑器弹窗引导用户重新登远端 */
      throw new Error('remote-auth-needed');
    }
    if (remoteOk && state.token && state.token.indexOf('local-') !== 0) {
      if (post.issueNumber) {
        await api('/api/posts/' + post.issueNumber, { method: 'PUT', body: {
          title: post.title, content: post.rawHtml || post.content,
          category: post.category, major: post.major, tags: post.tags
        }});
      } else {
        var created = await api('/api/posts', { method: 'POST', body: {
          title: post.title, content: post.rawHtml || post.content,
          category: post.category, major: post.major, tags: post.tags
        }});
        post.slug = created.slug;
        post.issueNumber = created.issueNumber;
      }
      post.isUserPost = true;
      post.isMine = true;
      post.author = state.name;
      /* 补上 date 字段，避免前端显示 Invalid Date */
      if (!post.date) {
        var d = new Date();
        post.date = d.getFullYear() + '-' +
          String(d.getMonth() + 1).padStart(2, '0') + '-' +
          String(d.getDate()).padStart(2, '0');
      }
      /* 立即把刚发的文章写入本地缓存列表，不用等 refreshPosts 回来 */
      upsertRemoteCache(post);
      await refreshPosts();
      return post;
    }
    /* 降级：写本机 */
    if (!post.slug) post.slug = 'u-' + Date.now().toString(36);
    post.isUserPost = true;
    upsertLocal(post);
    return post;
  }

  /* 在远端文章缓存里立即插入/更新刚发的文章，保证「我的编辑」第一时间看到 */
  function upsertRemoteCache(post) {
    if (!state.usingRemote) return;
    var i = state.remotePosts.findIndex(function (p) { return p.slug === post.slug; });
    post.updatedAt = Date.now();
    if (i === -1) state.remotePosts.unshift(post); else state.remotePosts[i] = post;
  }

  async function removePost(post) {
    var remoteOk = await pingRemote();
    if (remoteOk && state.token && state.token.indexOf('local-') !== 0 && post.issueNumber) {
      await api('/api/posts/' + post.issueNumber, { method: 'DELETE' });
      /* 立即从远端缓存移除，不用等 refreshPosts */
      state.remotePosts = state.remotePosts.filter(function (p) { return p.slug !== post.slug; });
      await refreshPosts();
      return;
    }
    deleteLocal(post.slug);
  }

  /* ---------------- 编辑器弹窗（含登录/注册） ---------------- */
  var EMAIL_RE = /^[\w.+-]+@[\w-]+(\.[\w-]+)+$/;

  /* 验证码行模板：用 <img> 加载 Worker 签发的 SVG，答案不在前端出现 */
  function captchaRowHtml() {
    return '' +
      '    <label class="ed-label">人机验证 * <span class="ed-hint">（输入右图数字，点击图片可刷新）</span></label>' +
      '    <div class="cap-row">' +
      '      <input class="ed-input cap-input" id="auCap" inputmode="numeric" maxlength="4" placeholder="4 位数字" autocomplete="off">' +
      '      <img class="cap-img" id="auCapImg" title="点击刷新" alt="验证码" style="width:100px;height:40px;border-radius:8px;cursor:pointer;background:rgba(111,135,245,.08)">' +
      '    </div>';
  }

  function openAuthModal(mode, onDone) {
    var mask = document.createElement('div');
    mask.className = 'ed-mask';
    /* 当前验证码的签名 id（由 Worker 签发，随注册/登录一起提交） */
    var captchaState = { id: '' };

    /* 拉取验证码图并填充到 <img>，同时记下 captchaId */
    async function refreshCaptcha() {
      var img = mask.querySelector('#auCapImg');
      var data = await fetchCaptcha();
      if (data && img) {
        img.src = data.url;
        captchaState.id = data.id;
      }
    }

    function renderBody(innerMode, presetEmail) {
      if (innerMode === 'register') {
        return '' +
          '    <label class="ed-label">邮箱 *</label>' +
          '    <input class="ed-input" id="auEmail" type="email" maxlength="64" placeholder="用于登录，保密不公开" autocomplete="email">' +
          '    <label class="ed-label">昵称 *</label>' +
          '    <input class="ed-input" id="auNick" maxlength="24" placeholder="2-24 位中英文/数字">' +
          '    <label class="ed-label">密码 *</label>' +
          '    <input class="ed-input" id="auPwd" type="password" maxlength="64" placeholder="至少 6 位" autocomplete="new-password">' +
          '    <label class="ed-label">确认密码 *</label>' +
          '    <input class="ed-input" id="auPwd2" type="password" maxlength="64" placeholder="再次输入密码" autocomplete="new-password">' +
          captchaRowHtml() +
          '    <label class="cap-check"><input type="checkbox" id="auRemember"> 自动登录（下次进入网站免输入）</label>' +
          '    <div class="ed-save-state" id="auState"></div>';
      }
      if (innerMode === 'forgot') {
        return '' +
          '    <label class="ed-label">账号 * <span class="ed-hint">（注册时的邮箱或昵称）</span></label>' +
          '    <input class="ed-input" id="auAccount" maxlength="64" placeholder="输入邮箱或昵称" autocomplete="username" value="' + esc(presetEmail || '') + '">' +
          '    <label class="ed-label">绑定邮箱 *</label>' +
          '    <input class="ed-input" id="auEmail" type="email" maxlength="64" placeholder="输入注册时使用的邮箱" autocomplete="email">' +
          captchaRowHtml() +
          '    <label class="ed-label">新密码 *</label>' +
          '    <input class="ed-input" id="auPwd" type="password" maxlength="64" placeholder="至少 6 位" autocomplete="new-password">' +
          '    <label class="ed-label">确认新密码 *</label>' +
          '    <input class="ed-input" id="auPwd2" type="password" maxlength="64" placeholder="再次输入新密码" autocomplete="new-password">' +
          '    <div class="ed-save-state" id="auState"></div>';
      }
      /* login */
      return '' +
        '    <label class="ed-label">账号 * <span class="ed-hint">（邮箱或昵称）</span></label>' +
        '    <input class="ed-input" id="auAccount" maxlength="64" placeholder="输入邮箱或昵称" autocomplete="username" value="' + esc(presetEmail || '') + '">' +
        '    <label class="ed-label">密码 *</label>' +
        '    <input class="ed-input" id="auPwd" type="password" maxlength="64" placeholder="输入密码" autocomplete="current-password">' +
        captchaRowHtml() +
        '    <label class="cap-check"><input type="checkbox" id="auRemember"' + (presetEmail ? ' checked' : '') + '> 自动登录（下次进入网站免输入）</label>' +
        '    <div class="ed-save-state" id="auState"></div>' +
        '    <div class="auth-switch">' +
        '      <a href="javascript:;" id="auGoForgot">忘记密码？</a>' +
        '　还没有账号？<a href="javascript:;" id="auGoReg">未登录？先注册账号！</a>' +
        '    </div>';
    }

    function render(innerMode) {
      var title = innerMode === 'login' ? '登录'
        : innerMode === 'register' ? '注册新账号'
        : '找回密码';
      var okText = innerMode === 'login' ? '登录'
        : innerMode === 'register' ? '注册并登录'
        : '重置密码';
      mask.innerHTML =
        '<div class="ed-modal auth-modal">' +
        '  <div class="ed-head"><b>' + title + '</b>' +
        '    <button type="button" class="ed-x">×</button></div>' +
        '  <div class="ed-body">' + renderBody(innerMode, state.email) + '</div>' +
        '  <div class="ed-foot"><span></span><span class="ed-actions">' +
        (innerMode !== 'login'
          ? '<button type="button" class="btn ghost" id="auBackLogin">返回登录</button>'
          : '<button type="button" class="btn ghost" id="auCancel">取消</button>') +
        '    <button type="button" class="btn primary" id="auOk">' + okText + '</button>' +
        '  </span></div></div>';

      var $ = function (s) { return mask.querySelector(s); };
      var close = function () { mask.remove(); };

      $('.ed-x').addEventListener('click', close);

      /* 返回登录 / 取消 */
      var backBtn = innerMode === 'login' ? $('#auCancel') : $('#auBackLogin');
      if (backBtn) backBtn.addEventListener('click', function () { render('login'); });

      /* 登录页：跳转注册 / 忘记密码（切换模式时重新拉验证码图） */
      if (innerMode === 'login') {
        var goReg = $('#auGoReg');
        if (goReg) goReg.addEventListener('click', function () { render('register'); });
        var goForgot = $('#auGoForgot');
        if (goForgot) goForgot.addEventListener('click', function () { render('forgot'); });

        $('#auOk').addEventListener('click', async function () {
          var account = $('#auAccount').value.trim();
          var pwd = $('#auPwd').value;
          var cap = $('#auCap').value.trim();
          var stateI = $('#auState');
          if (!account) { stateI.textContent = '⚠ 请输入邮箱或昵称'; return; }
          if (!pwd) { stateI.textContent = '⚠ 请输入密码'; return; }
          if (!cap) { stateI.textContent = '⚠ 请输入右侧验证码'; return; }
          stateI.textContent = '登录中…';
          try {
            await login(account, pwd, $('#auRemember').checked, { id: captchaState.id, code: cap });
            close();
            if (onDone) onDone(true);
          } catch (e) {
            /* 验证码错/限流时自动刷新验证码图，方便用户重试 */
            if (e && e.message && (e.message.indexOf('验证码') !== -1 || e.message.indexOf('频繁') !== -1)) {
              refreshCaptcha();
              $('#auCap').value = '';
            }
            stateI.textContent = '⚠ ' + e.message;
          }
        });
      } else if (innerMode === 'register') {
        var capImg = $('#auCapImg');
        capImg.addEventListener('click', function () { refreshCaptcha(); });
        $('#auOk').addEventListener('click', async function () {
          var email = $('#auEmail').value.trim();
          var nick = $('#auNick').value.trim();
          var pwd = $('#auPwd').value;
          var pwd2 = $('#auPwd2').value;
          var cap = $('#auCap').value.trim();
          var stateI = $('#auState');
          if (!EMAIL_RE.test(email)) { stateI.textContent = '⚠ 请输入正确的邮箱地址'; return; }
          if (nick.length < 2 || nick.length > 24) { stateI.textContent = '⚠ 昵称需为 2-24 位'; return; }
          if (pwd.length < 6) { stateI.textContent = '⚠ 密码至少 6 位'; return; }
          if (pwd !== pwd2) { stateI.textContent = '⚠ 两次输入的密码不一致'; return; }
          if (!cap) { stateI.textContent = '⚠ 请输入右侧验证码'; return; }
          stateI.textContent = '注册中…';
          try {
            await register(nick, email, pwd, $('#auRemember').checked, { id: captchaState.id, code: cap });
            close();
            if (onDone) onDone(true);
          } catch (e) {
            if (e && e.message && (e.message.indexOf('验证码') !== -1 || e.message.indexOf('频繁') !== -1)) {
              refreshCaptcha();
              $('#auCap').value = '';
            }
            stateI.textContent = '⚠ ' + e.message;
          }
        });
      } else {
        /* forgot */
        var capImgF = $('#auCapImg');
        capImgF.addEventListener('click', function () { refreshCaptcha(); });
        $('#auOk').addEventListener('click', async function () {
          var account = $('#auAccount').value.trim();
          var email = $('#auEmail').value.trim();
          var pwd = $('#auPwd').value;
          var pwd2 = $('#auPwd2').value;
          var cap = $('#auCap').value.trim();
          var stateI = $('#auState');
          if (!account) { stateI.textContent = '⚠ 请输入账号（邮箱或昵称）'; return; }
          if (!EMAIL_RE.test(email)) { stateI.textContent = '⚠ 请输入正确的邮箱地址'; return; }
          if (cap !== captcha) { stateI.textContent = '⚠ 验证码不正确，点击图片可刷新'; return; }
          if (pwd.length < 6) { stateI.textContent = '⚠ 新密码至少 6 位'; return; }
          if (pwd !== pwd2) { stateI.textContent = '⚠ 两次输入的新密码不一致'; return; }
          stateI.textContent = '提交中…';
          try {
            await resetPassword(account, email, pwd);
            stateI.textContent = '✓ 密码已重置，即将返回登录';
            setTimeout(function () {
              render('login');
              if (onDone) onDone(false);
            }, 700);
          } catch (e) {
            stateI.textContent = '⚠ ' + e.message;
          }
        });
      }

      /* 每次渲染完，拉一张新的服务端验证码图 */
      refreshCaptcha();
    }

    function esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
      });
    }

    document.body.appendChild(mask);
    render(mode === 'register' ? 'register' : 'login');
  }

  function openEditor(opts) {
    opts = opts || {};
    var existing = opts.post || null;
    var profile = getProfile();

    if (!state.usingRemote && !profile) {
      /* 远端模式但未登录：先弹登录 */
      openAuthModal('login', function (ok) {
        if (ok) openEditor(opts);
      });
      return;
    }

    var mask = document.createElement('div');
    mask.className = 'ed-mask';
    mask.innerHTML =
      '<div class="ed-modal">' +
      '  <div class="ed-head"><b>' + (existing ? '编辑我的文章' : '发布新文章') + '</b>' +
      '    <button type="button" class="ed-x">×</button></div>' +
      '  <div class="ed-body">' +
      '    <div class="ed-row"><div><label class="ed-label">作者</label>' +
      '      <input class="ed-input" id="edName" readonly value="' + esc(profile ? profile.name : '') + '"></div>' +
      '    <div><label class="ed-label">门类</label>' +
      '      <select class="ed-input" id="edMajor">' +
      ['工科','英语','数学','编程语言'].map(function (m) {
        return '<option value="' + m + '">' + m + '</option>';
      }).join('') +
      '      </select></div>' +
      '    <div><label class="ed-label">子分类</label>' +
      '      <input class="ed-input" id="edCat" maxlength="12" placeholder="原创"></div></div>' +
      '    <label class="ed-label">标题 *</label>' +
      '    <input class="ed-input" id="edTitle" maxlength="80" placeholder="给文章起个标题">' +
      '    <label class="ed-label">标签 <span class="ed-hint">（# 开头输入，回车 / 空格添加，最多 3 个）</span></label>' +
      '    <div class="ed-tag-input" id="edTagInput">' +
      '      <input class="ed-tag-field" id="edTagField" type="text" maxlength="16" placeholder="#标签" autocomplete="off">' +
      '    </div>' +
      '    <label class="ed-label">正文 <span class="ed-hint">支持 HTML：&lt;h2&gt;、&lt;p&gt;、&lt;pre&gt;&lt;code class="language-js"&gt;</span></label>' +
      '    <textarea class="ed-textarea" id="edBody" rows="14" placeholder="图文、代码、学习笔记…"></textarea>' +
      '    <label class="ed-label">附件（本机保存为 dataURL，远端模式下附件暂不入库）</label>' +
      '    <input type="file" id="edFile" multiple>' +
      '    <div class="ed-filelist" id="edFileList"></div>' +
      '  </div>' +
      '  <div class="ed-foot">' +
      '    <span class="ed-save-state" id="edState">' + (state.usingRemote ? '将发布到云端（GitHub Issues）' : '离线模式：仅保存在本机浏览器') + '</span>' +
      '    <span class="ed-actions">' +
      (existing ? '<button type="button" class="btn ghost danger" id="edDel">删除</button>' : '') +
      '    <button type="button" class="btn ghost" id="edCancel">取消</button>' +
      '    <button type="button" class="btn primary" id="edSave">发布 / 更新</button>' +
      '  </span></div></div>';
    document.body.appendChild(mask);

    var $ = function (s) { return mask.querySelector(s); };
    var nameI = $('#edName'), titleI = $('#edTitle'), catI = $('#edCat'), majorI = $('#edMajor'),
        bodyI = $('#edBody'), fileI = $('#edFile'), listBox = $('#edFileList'), stateI = $('#edState');

    var attachments = [];
    if (existing) {
      titleI.value = existing.title || '';
      catI.value = existing.category || '';
      if (existing.major && majorI.querySelector('option[value="' + existing.major + '"]')) {
        majorI.value = existing.major;
      }
      bodyI.value = existing.rawHtml != null ? existing.rawHtml : (existing.content || '');
      attachments = existing.attachments || [];
    }

    function esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
      });
    }

    /* ---------------- 标签输入栏（# 开头，回车/空格添加，最多 3 个） ---------------- */
    var tagInputBox = $('#edTagInput');
    var tagField = $('#edTagField');
    var selectedTags = [];          /* 已添加的标签（不含 # 前缀），最多 3 个 */
    var MAX_TAGS = 3;

    function renderTagInput() {
      /* 已添加的标签作为前置 chip 插入到输入框前 */
      var chipsHtml = selectedTags.map(function (t, i) {
        return '<span class="ed-tag-chip on" data-i="' + i + '">#' + esc(t) +
          '<button type="button" class="ed-tag-rm" data-i="' + i + '" aria-label="删除">×</button></span>';
      }).join('');
      var count = '<span class="ed-tags-count">' + selectedTags.length + ' / ' + MAX_TAGS + '</span>';
      tagInputBox.innerHTML = chipsHtml +
        '<input class="ed-tag-field" id="edTagField" type="text" maxlength="16" placeholder="' +
        (selectedTags.length >= MAX_TAGS ? '已达上限（最多 ' + MAX_TAGS + ' 个）' : '#标签') +
        '" autocomplete="off">' + count;
      tagField = tagInputBox.querySelector('#edTagField');
      if (tagField) tagField.focus();
    }

    function addTag(raw) {
      var t = String(raw || '').trim().replace(/^#+/, '').trim();
      if (!t) return;
      if (t.length > 16) { stateI.textContent = '⚠ 标签不超过 16 字'; return; }
      if (selectedTags.indexOf(t) !== -1) { stateI.textContent = '⚠ 标签「#' + t + '」已存在'; return; }
      if (selectedTags.length >= MAX_TAGS) {
        stateI.textContent = '⚠ 最多 ' + MAX_TAGS + ' 个标签，先删除一个再加';
        return;
      }
      selectedTags.push(t);
      stateI.textContent = '';
      renderTagInput();
    }

    /* 输入：回车 / 空格 / 逗号 → 添加标签 */
    tagInputBox.addEventListener('keydown', function (e) {
      var f = e.target;
      if (f.tagName !== 'INPUT') return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === '，' || e.key === ',') {
        e.preventDefault();
        addTag(f.value);
        f.value = '';
        return;
      }
      /* 退格且输入框为空 → 删最后一个标签 */
      if (e.key === 'Backspace' && !f.value && selectedTags.length) {
        selectedTags.pop();
        renderTagInput();
      }
    });
    /* 失焦时若输入框还有内容则直接添加 */
    tagInputBox.addEventListener('focusout', function (e) {
      var f = e.target;
      if (f && f.tagName === 'INPUT' && f.value.trim()) {
        addTag(f.value);
      }
    });
    /* 点击 × 删除标签 */
    tagInputBox.addEventListener('click', function (e) {
      var rm = e.target.closest ? e.target.closest('.ed-tag-rm') : null;
      if (!rm) return;
      selectedTags.splice(Number(rm.getAttribute('data-i')), 1);
      renderTagInput();
    });

    /* 编辑已有文章：把已有标签预置进去 */
    if (existing && existing.tags && existing.tags.length) {
      selectedTags = existing.tags.slice(0, MAX_TAGS);
    }
    renderTagInput();

    fileI.addEventListener('change', function () {
      Array.prototype.slice.call(fileI.files || []).forEach(function (f) {
        var reader = new FileReader();
        reader.onload = function () {
          attachments.push({ name: f.name, size: f.size, type: f.type, dataUrl: reader.result });
          listBox.innerHTML = attachments.map(function (a, i) {
            return '<div class="ed-file"><span class="ed-file-name">' + esc(a.name) + '</span>' +
              '<button type="button" data-i="' + i + '" class="ed-file-rm">移除</button></div>';
          }).join('');
        };
        reader.readAsDataURL(f);
      });
      fileI.value = '';
    });
    listBox.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.ed-file-rm') : null;
      if (!btn) return;
      attachments.splice(Number(btn.getAttribute('data-i')), 1);
      listBox.dispatchEvent(new Event('refresh'));
    });
    listBox.addEventListener('refresh', function () {
      listBox.innerHTML = attachments.map(function (a, i) {
        return '<div class="ed-file"><span class="ed-file-name">' + esc(a.name) + '</span>' +
          '<button type="button" data-i="' + i + '" class="ed-file-rm">移除</button></div>';
      }).join('');
    });

    var close = function () { mask.remove(); };
    $('.ed-x').addEventListener('click', close);
    $('#edCancel').addEventListener('click', close);

    var delBtn = $('#edDel');
    if (delBtn) delBtn.addEventListener('click', async function () {
      if (!existing) return;
      if (!window.confirm('确定删除《' + existing.title + '》？')) return;
      await removePost(existing);
      close();
      if (opts.onSaved) opts.onSaved('deleted');
    });

    $('#edSave').addEventListener('click', async function () {
      var title = titleI.value.trim();
      var body = bodyI.value.trim();
      if (!title) { stateI.textContent = '请填写标题'; return; }
      if (!body) { stateI.textContent = '正文不能为空'; return; }

      var post = existing || {};
      post.title = title;
      post.major = majorI.value || '编程语言';
      post.category = catI.value.trim() || '原创';
      /* 标签：取用户选中的（最多 3 个）；若未选任何标签，则兜底用子分类 */
      post.tags = selectedTags.length ? selectedTags.slice(0, MAX_TAGS) : [post.category];
      post.rawHtml = body;
      post.content = body;
      post.attachments = attachments;
      post.author = nameI.value.trim();
      post.minutes = Math.max(1, Math.round(body.length / 320));

      stateI.textContent = '保存中…';
      try {
        await savePost(post);
        stateI.textContent = '已保存 ✓';
        setTimeout(function () { close(); if (opts.onSaved) opts.onSaved(post.slug); }, 300);
      } catch (e) {
        if (e && e.message === 'remote-auth-needed') {
          stateI.textContent = '⚠ 远端已连接，请用云端账号重新登录后再发布';
          /* 关掉当前编辑器，弹登录窗；登录成功后自动把刚才填的内容重新打开编辑器 */
          close();
          var lastPost = post;
          openAuthModal('login', function () {
            openEditor({ post: lastPost, onSaved: opts.onSaved });
          });
          return;
        }
        stateI.textContent = '⚠ ' + (e && e.message ? e.message : e);
      }
    });

    titleI.focus();
  }

  /* ---------------- 对外接口 ---------------- */
  window.FNCommunity = {
    getProfile: getProfile,
    setProfile: setProfile,
    logout: logout,
    isLoggedIn: function () { return !!(state.token && state.name); },
    currentName: function () { return state.name; },
    currentEmail: function () { return state.email; },
    isRemote: function () { return state.usingRemote; },
    isAutoLogin: function () {
      return localStorage.getItem(LS_AUTO) === '1' && !!(state.token && state.name);
    },
    refreshPosts: refreshPosts,
    loadPosts: function () { return state.usingRemote ? state.remotePosts : loadLocalPosts(); },
    login: login,
    register: register,
    savePost: savePost,
    removePost: removePost,
    openEditor: openEditor,
    openAuthModal: openAuthModal,
    setApiBase: function (url) { API_BASE = url || ''; },
    fetchVersion: fetchVersion,
    pollVersion: pollVersion,
    stopPollVersion: stopPollVersion,
    /* 个人中心相关 */
    getProfileData: getProfileData,
    saveProfileData: saveProfileData,
    changeNickname: changeNickname,
    changePassword: changePassword
  };
})();
