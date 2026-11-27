/* 网页内置浏览器 v1 —— 在页面内打开搜索
 * ------------------------------------------------------------------
 * 「浏览器」按钮 → 打开一个全屏面板：
 *   · 地址栏输入关键词 / 网址，回车即在内嵌 iframe 中加载
 *   · 支持 Bing / 百度 / 搜狗 / 360 四个搜索引擎（均允许被 iframe 嵌入）
 *   · 前进 / 后退 / 刷新 / 新开窗口（内置浏览器无法控制的页面时备用）
 * ------------------------------------------------------------------ */
(function () {
  'use strict';

  /* 搜索引擎注册表：name = 面板上显示的名字；home = 首页地址；search(q) = 搜索地址 */
  var ENGINES = [
    { key: 'baidu',  name: '百度',   home: 'https://www.baidu.com/',           search: function (q) { return 'https://www.baidu.com/s?wd=' + encodeURIComponent(q); } },
    { key: 'sogou',  name: '搜狗',   home: 'https://www.sogou.com/',           search: function (q) { return 'https://www.sogou.com/web?query=' + encodeURIComponent(q); } }
  ];

  var LS_ENGINE = 'fn-browser-engine';

  var panel = null;        /* 当前打开的面板（同一时刻只允许一个） */
  var history = [];         /* 浏览历史（地址栈） */
  var historyIdx = -1;      /* 当前在历史栈中的位置 */
  var currentUrl = '';

  function getEngine() {
    var saved = null;
    try { saved = localStorage.getItem(LS_ENGINE); } catch (e) {}
    for (var i = 0; i < ENGINES.length; i++) if (ENGINES[i].key === saved) return ENGINES[i];
    return ENGINES[0];
  }

  function setEngine(eng) {
    try { localStorage.setItem(LS_ENGINE, eng.key); } catch (e) {}
  }

  /* 判断输入是「裸网址」（如 example.com、www.a.com/p）还是「搜索词」 */
  function isUrl(input) {
    var s = input.trim();
    if (/^https?:\/\//i.test(s)) return true;
    /* 含空格、中文等基本字符 → 一定是搜索词；看起来像域名的（含一个点 + 字母数字）→ 按网址处理 */
    if (/\s/.test(s)) return false;
    if (/[一-龥]/.test(s)) return false;
    if (/^[\w-]+(\.[\w-]+)+(\/.*)?$/.test(s)) return true;
    return false;
  }

  function resolveUrl(input, engine) {
    var s = input.trim();
    if (!s) return engine.home;
    if (isUrl(s)) return /^https?:\/\//i.test(s) ? s : 'https://' + s;
    return engine.search(s);
  }

  function pushHistory(url) {
    /* 前进分支（用户点过后退又输入新地址）：截掉被废弃的尾巴 */
    if (historyIdx < history.length - 1) history = history.slice(0, historyIdx + 1);
    history.push(url);
    historyIdx = history.length - 1;
  }

  function render() {
    if (!panel) return;
    var backBtn = panel.querySelector('#brBack');
    var fwdBtn = panel.querySelector('#brForward');
    if (backBtn) backBtn.disabled = historyIdx <= 0;
    if (fwdBtn) fwdBtn.disabled = historyIdx >= history.length - 1;
  }

  function navigate(url, opts) {
    opts = opts || {};
    currentUrl = url;
    var frame = panel.querySelector('#brFrame');
    if (frame) {
      frame.src = url;
      frame.setAttribute('data-fail', 'pending');
      showFrameState('loading');
    }
    if (!opts.noPush) pushHistory(url);
    var addr = panel.querySelector('#brAddr');
    if (addr) addr.value = url;
    render();
  }

  function showFrameState(kind, msg) {
    var layer = panel.querySelector('#brState');
    if (!layer) return;
    if (kind === 'ok') { layer.hidden = true; return; }
    layer.hidden = false;
    var txt = '';
    if (kind === 'loading') txt = '正在加载…';
    else if (kind === 'blocked') txt = (msg || '') + '该网站拒绝在内嵌窗口中打开（安全策略限制）。';
    else txt = '加载失败，请检查网络后重试。';
    layer.innerHTML = '<div class="br-state-card">' +
      '<div class="br-state-ico">' + (kind === 'loading' ? '◌' : kind === 'blocked' ? '⊘' : '⚠') + '</div>' +
      '<p>' + txt + '</p>' +
      (kind === 'loading'
        ? ''
        : '<button type="button" class="btn primary sm" id="brOpenExt">在新窗口打开</button>') +
      '</div>';
    var extBtn = layer.querySelector('#brOpenExt');
    if (extBtn) extBtn.addEventListener('click', function () {
      window.open(currentUrl, '_blank', 'noopener');
    });
  }

  /* 无法可靠侦测「被 X-Frame-Options 拦截」的真实错误（跨域），
     这里做折中：iframe 加载完成后若 2.5s 内仍显示 pending 且 frame 看似空白，则提示可能被拦截。 */
  function watchFrameLoad() {
    var frame = panel.querySelector('#brFrame');
    if (!frame) return;
    frame.onload = function () {
      var layer = panel.querySelector('#brState');
      if (layer && !layer.hidden) {
        /* 页面正常加载完成；某些被拦截的页 frame.onload 也不会触发，这里仅清掉 loading */
        var stillLoading = layer.querySelector('button') == null;
        if (stillLoading) showFrameState('ok');
      }
    };
  }

  function open() {
    if (panel) return;   /* 已打开则不重复创建 */
    var eng = getEngine();

    panel = document.createElement('div');
    panel.className = 'br-mask';
    panel.innerHTML =
      '<div class="br-panel" role="dialog" aria-label="内置浏览器">' +
      '  <div class="br-bar">' +
      '    <button type="button" class="br-nav-btn" id="brBack" title="后退" disabled>‹</button>' +
      '    <button type="button" class="br-nav-btn" id="brForward" title="前进" disabled>›</button>' +
      '    <button type="button" class="br-nav-btn" id="brReload" title="刷新">⟳</button>' +
      '    <div class="br-engines" id="brEngines">' +
           ENGINES.map(function (e) {
             return '<button type="button" class="br-eng' + (e.key === eng.key ? ' on' : '') + '" data-eng="' + e.key + '">' + e.name + '</button>';
           }).join('') +
      '    </div>' +
      '    <form class="br-form" id="brForm">' +
      '      <input class="br-addr" id="brAddr" type="text" enterkeyhint="search" ' +
      '        placeholder="输入关键词搜索，或直接输入网址…" autocomplete="off" spellcheck="false">' +
      '      <button type="submit" class="br-go">搜索</button>' +
      '    </form>' +
      '    <button type="button" class="br-nav-btn" id="brNew" title="在新窗口打开当前页">↗</button>' +
      '    <button type="button" class="br-close" id="brClose" title="关闭">×</button>' +
      '  </div>' +
      '  <div class="br-stage">' +
      '    <div class="br-state" id="brState" hidden="hidden"></div>' +
      '    <iframe class="br-frame" id="brFrame" title="搜索结果" referrerpolicy="no-referrer" ' +
      '      sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-modals"></iframe>' +
      '  </div>' +
      '</div>';

    document.body.appendChild(panel);

    var $ = function (s) { return panel.querySelector(s); };
    var addr = $('#brAddr');

    function close() {
      if (panel) { panel.remove(); panel = null; }
    }

    /* 关闭 */
    $('#brClose').addEventListener('click', close);
    panel.addEventListener('click', function (e) {
      if (e.target === panel) close();
    });
    document.addEventListener('keydown', panelEsc);
    function panelEsc(e) { if (e.key === 'Escape') close(); }

    /* 引擎切换 */
    $('#brEngines').addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-eng]') : null;
      if (!btn) return;
      ENGINES.forEach(function (x) {
        var b = panel.querySelector('[data-eng="' + x.key + '"]');
        if (b) b.classList.toggle('on', x.key === btn.getAttribute('data-eng'));
      });
      var next = getEngineByKey(btn.getAttribute('data-eng'));
      setEngine(next);
      history = [];
      historyIdx = -1;
      navigate(next.home);
    });

    function getEngineByKey(key) {
      for (var i = 0; i < ENGINES.length; i++) if (ENGINES[i].key === key) return ENGINES[i];
      return ENGINES[0];
    }

    /* 地址栏提交：搜索或打开网址 */
    $('#brForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var input = addr.value;
      if (!input.trim()) return;
      navigate(resolveUrl(input, getEngine()));
    });

    /* 前进 / 后退 / 刷新 / 新窗口 */
    $('#brBack').addEventListener('click', function () {
      if (historyIdx <= 0) return;
      historyIdx--;
      currentUrl = history[historyIdx];
      var frame = $('#brFrame');
      if (frame) frame.src = currentUrl;
      addr.value = currentUrl;
      render();
    });
    $('#brForward').addEventListener('click', function () {
      if (historyIdx >= history.length - 1) return;
      historyIdx++;
      currentUrl = history[historyIdx];
      var frame = $('#brFrame');
      if (frame) frame.src = currentUrl;
      addr.value = currentUrl;
      render();
    });
    $('#brReload').addEventListener('click', function () {
      var frame = $('#brFrame');
      if (frame && currentUrl) { frame.src = currentUrl; showFrameState('loading'); }
    });
    $('#brNew').addEventListener('click', function () {
      if (currentUrl) window.open(currentUrl, '_blank', 'noopener');
    });

    watchFrameLoad();
    navigate(eng.home);
    addr.focus();
  }

  window.FNBrowser = { open: open };
})();
