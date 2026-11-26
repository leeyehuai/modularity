/* 应用逻辑：路由 / 渲染 / 搜索 / 主题 / 目录 */
(function () {
  'use strict';

  var FN = window.FNCommunity || null;

  /* 合并内置文章 + 本机用户文章（用户文章按更新时间优先） */
  function buildPosts() {
    var builtin = (window.POSTS || []).slice();
    var user = FN ? FN.loadPosts() : [];
    return builtin.concat(user).sort(function (a, b) {
      var ta = (a.updatedAt || 0), tb = (b.updatedAt || 0);
      if (tb !== ta) return tb - ta;
      return a.date < b.date ? 1 : -1;
    });
  }

  var POSTS = buildPosts();

  var el = {
    view: document.getElementById('view'),
    nav: document.getElementById('sidebarNav'),
    postCount: document.getElementById('postCount'),
    search: document.getElementById('searchInput'),
    themeBtn: document.getElementById('themeBtn'),
    menuBtn: document.getElementById('menuBtn'),
    sidebar: document.getElementById('sidebar'),
    scrim: document.getElementById('scrim'),
    progress: document.getElementById('progressBar'),
    footerBuild: document.getElementById('footerBuild')
  };

  var state = { tag: '全部', q: '', major: '' };
  /* 门类（一级分类）：工科 / 英语 / 数学 / 编程语言。
     文章按 post.major 归入对应门类；未标注 major 的文章按其 category 兜底归类。 */
  var MAJORS = ['工科', '英语', '数学', '编程语言'];
  function majorOf(p) {
    if (p.major && MAJORS.indexOf(p.major) !== -1) return p.major;
    /* 兜底：根据原 category 推断门类 */
    var c = p.category || '';
    if (c === '电力电子' || c === '电力系统' || c === '电气工程') return '工科';
    if (c === '英语' || c === 'English') return '英语';
    if (c === '数学') return '数学';
    return '编程语言';
  }
  var tocLinks = [];
  var headings = [];
  var ticking = false;

  /* ---------------- utils ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function bySlug(slug) {
    for (var i = 0; i < POSTS.length; i++) if (POSTS[i].slug === slug) return POSTS[i];
    return null;
  }
  function refreshPosts() { POSTS = buildPosts(); }

  /* 权限：远端模式下 Worker 已返回 isMine；降级模式下按本机笔名判断 */
  function isMine(post) {
    if (!post || !post.isUserPost) return false;
    if (typeof post.isMine === 'boolean') return post.isMine;   /* 远端 */
    var me = FN ? FN.getProfile() : null;                        /* 降级 */
    return !!(me && post.author && me.name === post.author);
  }
  function indexOfPost(slug) {
    for (var i = 0; i < POSTS.length; i++) if (POSTS[i].slug === slug) return i;
    return -1;
  }
  function allTags(major) {
    var set = [];
    POSTS.forEach(function (p) {
      if (major && majorOf(p) !== major) return;
      p.tags.forEach(function (t) { if (set.indexOf(t) === -1) set.push(t); });
    });
    return set;
  }
  var DATE_FMT = { year: 'numeric', month: '2-digit', day: '2-digit' };
  function fmtDate(d) {
    try {
      return new Date(d + 'T00:00:00').toLocaleDateString('zh-CN', DATE_FMT).replace(/\//g, '-');
    } catch (e) { return d; }
  }

  /* ---------------- theme ---------------- */
  /* 三态循环：日间(light) → 夜间(dark) → 护眼(eye) → 日间(light) */
  var THEME_ORDER = ['light', 'dark', 'eye'];
  var THEME_LABEL = { light: '日间模式', dark: '夜间模式', eye: '护眼模式' };

  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    try { localStorage.setItem('fn-theme', mode); } catch (e) {}
    updateThemeBtn();
  }

  function updateThemeBtn() {
    var mode = document.documentElement.getAttribute('data-theme') || 'light';
    if (!el.themeBtn) return;
    el.themeBtn.title = THEME_LABEL[mode] || mode;
    el.themeBtn.setAttribute('aria-label', '当前：' + (THEME_LABEL[mode] || mode) + '，点击切换');
    /* 图标：日间显示太阳 / 夜间显示月亮 / 护眼显示眼睛（CSS 默认全部隐藏，这里用内联 display 强制显示当前一个） */
    var sun = el.themeBtn.querySelector('.i-sun');
    var moon = el.themeBtn.querySelector('.i-moon');
    var eye = el.themeBtn.querySelector('.i-eye');
    if (sun) sun.style.display = mode === 'light' ? 'block' : 'none';
    if (moon) moon.style.display = mode === 'dark' ? 'block' : 'none';
    if (eye) eye.style.display = mode === 'eye' ? 'block' : 'none';
  }

  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('fn-theme'); } catch (e) {}
    if (saved && THEME_LABEL[saved]) { setTheme(saved); return; }
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  /* ---------------- sidebar ---------------- */
  function renderSidebar(activeSlug) {
    /* 按门类（major）分组：工科 / 英语 / 数学 / 编程语言 */
    var groups = {};
    MAJORS.forEach(function (m) { groups[m] = []; });
    POSTS.forEach(function (p) {
      var m = majorOf(p);
      if (!groups[m]) groups[m] = [];
      groups[m].push(p);
    });

    var html = '<div class="sidebar-group"><div class="sidebar-title">导航</div>' +
      '<a class="nav-item' + (!activeSlug ? ' active' : '') + '" href="#/">' +
      '<span class="idx">§</span>文章首页</a>' +
      '<a class="nav-item' + (activeSlug === '__about' ? ' active' : '') + '" href="#/about">' +
      '<span class="idx">?</span>关于本站</a></div>';

    MAJORS.forEach(function (m) {
      var list = groups[m] || [];
      if (!list.length) {
        /* 空门类仍保留入口，便于后续新增 */
        html += '<div class="sidebar-group"><div class="sidebar-title">' + esc(m) + '</div>' +
          '<div class="sidebar-empty">暂无笔记</div></div>';
        return;
      }
      html += '<div class="sidebar-group"><div class="sidebar-title">' + esc(m) + '</div>';
      list.forEach(function (p, i) {
        var active = p.slug === activeSlug ? ' active' : '';
        html += '<a class="nav-item' + active + '" href="#/post/' + esc(p.slug) + '" title="' + esc(p.title) + '">' +
          '<span class="idx">' + String(i + 1).padStart(2, '0') + '</span>' +
          '<span>' + esc(p.title) + '</span></a>';
      });
      html += '</div>';
    });

    el.nav.innerHTML = html;
    el.postCount.textContent = String(POSTS.length);
  }

  /* ---------------- home ---------------- */
  function matches(p) {
    if (state.tag !== '全部' && p.tags.indexOf(state.tag) === -1) return false;
    if (state.major && majorOf(p) !== state.major) return false;
    var q = state.q.trim().toLowerCase();
    if (!q) return true;
    return (p.title + ' ' + p.desc + ' ' + p.category + ' ' + p.tags.join(' ')).toLowerCase().indexOf(q) !== -1;
  }

  function renderHome(keepScroll) {
    renderSidebar(null);

    /* 标签池：按当前门类筛选，非本门类的标签不出现 */
    var scopedTags = allTags(state.major || null);
    var tags = ['全部'].concat(scopedTags);
    /* 若当前选中标签不在本门类内（例如刚切换门类），自动回退到「全部」 */
    if (state.tag !== '全部' && scopedTags.indexOf(state.tag) === -1) state.tag = '全部';
    var list = POSTS.filter(matches);
    var featured = list[0] || null;

    var html = '';
    html += '<section class="hero hero-split">' +
      '<div class="hero-text">' +
      '<span class="hero-eyebrow">MODULARITY</span>' +
      '<h1>把笔记写成<br>可查的资产</h1>' +
      '<p>这里记录了 CSS 布局、JavaScript 原理、HTTP 缓存、TypeScript 与工程化实践中的关键结论。每篇都尽量给出可运行的代码，而不是概念堆砌。</p>' +
      '<div class="hero-stats">' +
      '<div><b>' + (state.major ? list.length : POSTS.length) + '</b><span>篇笔记</span></div>' +
      '<div><b>' + scopedTags.length + '</b><span>个标签</span></div>' +
      '<div><b>' + POSTS.reduce(function (n, p) { return n + p.minutes; }, 0) + '</b><span>分钟阅读量</span></div>' +
      '</div></div>' +
      '<div class="hero-code" aria-hidden="true">' +
      '<div class="code-window">' +
      '<div class="cw-bar"><span></span><span></span><span></span><em>layout.css</em></div>' +
      '<pre class="cw-body"><code><span class="cw-k">.grid</span> {' + '\n' +
      '  <span class="cw-p">display</span>: <span class="cw-v">grid</span>;' + '\n' +
      '  <span class="cw-p">grid-template</span>: <span class="cw-v">1fr auto</span>;' + '\n' +
      '  <span class="cw-p">gap</span>: <span class="cw-v">24px</span>;' + '\n' +
      '}' + '\n' +
      '<span class="cw-c">/* 踩过的坑，写成手记 */</span><span class="cw-caret">▍</span></code></pre>' +
      '</div>' +
      '</div></section>';

    /* 分类入口宫格：按门类（major）展示 4 大分类 */
    var cats = MAJORS.slice();
    html += '<div class="cat-grid">' + cats.map(function (c, i) {
      var n = POSTS.filter(function (p) { return majorOf(p) === c; }).length;
      return '<button class="cat-tile' + (state.major === c ? ' on' : '') + '" type="button" data-cattile="' + esc(c) + '">' +
        '<span class="cat-idx">0' + (i + 1) + '</span>' +
        '<b>' + esc(c) + '</b><span>' + n + ' 篇笔记</span></button>';
    }).join('') + '</div>';

    var sectionTitle = state.q ? '搜索结果'
      : (state.major ? (state.major + ' · ' + (state.tag === '全部' ? '全部文章' : '#' + state.tag))
                     : (state.tag === '全部' ? '全部文章' : '#' + state.tag));
    html += '<div class="section-head"><h2>' + sectionTitle + '</h2>' +
      '<span class="hint">' + list.length + ' / ' + (state.major ? POSTS.filter(function (p){return majorOf(p)===state.major;}).length : POSTS.length) + ' 篇</span></div>';

    /* 标签筛选栏：仅在选定门类（点过分类）或按标签筛选时出现；
       回到分类前的默认视图（无门类、无标签）时不显示标签 */
    if (state.major || state.tag !== '全部') {
      html += '<div class="filters">' + tags.map(function (t) {
        var on = state.tag === t ? ' on' : '';
        var label = t === '全部' ? '全部' : '#' + t;
        return '<button class="chip' + on + '" type="button" data-tag="' + esc(t) + '">' + esc(label) + '</button>';
      }).join('') + '</div>';
    }

    if (!list.length) {
      html += '<div class="empty">没有找到匹配的文章。<br><b>试试换个关键词，或点击「全部」重置筛选。</b></div>';
    } else {
      /* 第一篇：头条大图卡（仅在无筛选时突出） */
      if (!state.q && state.tag === '全部' && !state.major && featured) {
        var p = featured;
        html += '<a class="post-card post-card-featured" href="#/post/' + esc(p.slug) + '">' +
          '<div class="card-top">' +
          '<span class="cat-badge">★ 最新发布 · ' + esc(majorOf(p)) + ' / ' + esc(p.category) + '</span>' +
          '<span class="card-meta">' + fmtDate(p.date) + '</span>' +
          '</div>' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<p>' + esc(p.desc) + '</p>' +
          '<div class="card-foot"><span>' + p.tags.slice(0, 3).map(function (t) { return '#' + esc(t); }).join(' ') + '</span>' +
          '<span class="arrow">阅读全文 →</span></div>' +
          '</a>';
      }
      var rest = (!state.q && state.tag === '全部' && !state.major) ? list.slice(1) : list;
      if (rest.length) {
        html += '<div class="post-grid">' + rest.map(function (p) {
          return '<a class="post-card" href="#/post/' + esc(p.slug) + '">' +
            '<div class="card-top">' +
            '<span class="cat-badge">' + esc(majorOf(p)) + ' · ' + esc(p.category) + '</span>' +
            '<span class="card-meta">' + fmtDate(p.date) + '</span>' +
            '</div>' +
            '<h3>' + esc(p.title) + '</h3>' +
            '<p>' + esc(p.desc) + '</p>' +
            '<div class="card-foot"><span>' + p.tags.slice(0, 2).map(function (t) { return '#' + esc(t); }).join(' ') + '</span>' +
            '<span class="arrow">→</span></div>' +
            '</a>';
        }).join('') + '</div>';
      }
    }

    el.view.innerHTML = html;
    el.view.querySelectorAll('.chip').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.tag = btn.getAttribute('data-tag');
        renderHome(true);
      });
    });
    el.view.querySelectorAll('[data-cattile]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var m = btn.getAttribute('data-cattile');
        /* 再点一次同门类即取消筛选 */
        state.major = (state.major === m) ? '' : m;
        state.tag = '全部';
        state.q = '';
        el.search.value = '';
        renderHome(true);
      });
    });
    observeEntries();
    document.title = 'MODULARITY · 模块笔记';
    if (!keepScroll) resetScroll();
  }

  /* 滚动轻微入场动画 */
  var entryObserver = null;
  function observeEntries() {
    if (entryObserver) { entryObserver.disconnect(); entryObserver = null; }
    if (!('IntersectionObserver' in window)) return;
    entryObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in-view');
          entryObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.08 });
    el.view.querySelectorAll('.cat-tile, .post-card, .cat-grid').forEach(function (n, i) {
      n.style.transitionDelay = (Math.min(i, 8) * 40) + 'ms';
      n.classList.add('reveal');
      entryObserver.observe(n);
    });
  }

  /* ---------------- article ---------------- */
  function renderArticle(slug) {
    var post = bySlug(slug);
    if (!post) return renderNotFound();

    renderSidebar(slug);
    var idx = indexOfPost(slug);
    var prev = POSTS[idx + 1] || null;
    var next = POSTS[idx - 1] || null;

    var html = '<div class="article-layout"><article>' +
      '<div class="breadcrumb"><a href="#/">首页</a><span class="sep">/</span>' +
      '<a href="#/" data-cat="' + esc(majorOf(post)) + '">' + esc(majorOf(post)) + '</a>' +
      '<span class="sep">/</span><span>' + esc(post.category) + '</span></div>' +
      '<header class="article-head">' +
      '<span class="cat-badge">' + esc(majorOf(post)) + ' · ' + esc(post.category) + '</span>' +
      '<h1>' + esc(post.title) + '</h1>' +
      '<div class="article-meta"><span>' + fmtDate(post.date) + '</span>' +
      '<span class="dot"></span><span>' + post.minutes + ' 分钟阅读</span>' +
      (post.author ? '<span class="dot"></span><span class="author-chip">✍ ' + esc(post.author) + (isMine(post) ? '（我）' : '') + '</span>' : '') +
      '</div>' +
      '<div class="tag-row">' + post.tags.map(function (t) {
        return '<a class="tag" href="#/" data-taglink="' + esc(t) + '">#' + esc(t) + '</a>';
      }).join('') + '</div>' +
      (isMine(post)
        ? '<div class="owner-bar"><span class="owner-note">本文由你发布，可随时继续编辑并自动保存更新</span>' +
          '<button type="button" class="btn primary sm" id="editMine">编辑我的文章</button></div>'
        : (post.isUserPost ? '<div class="owner-bar readonly"><span class="owner-note">本站既定内容只读，仅作者本人可修改</span></div>' : '')) +
      '</header>' +
      '<div class="prose" id="prose">' + post.content + '</div>' +
      (post.attachments && post.attachments.length
        ? '<div class="attach-block"><h3>附件下载（' + post.attachments.length + '）</h3><div class="attach-list">' +
          post.attachments.map(function (f) {
            return '<a class="attach-item" href="' + f.dataUrl + '" download="' + esc(f.name) + '">' +
              '<span class="attach-name">' + esc(f.name) + '</span>' +
              '<span class="attach-size">' + esc(f.type || 'file') + '</span></a>';
          }).join('') + '</div></div>'
        : '');

    html += '<nav class="pager">';
    html += prev
      ? '<a href="#/post/' + esc(prev.slug) + '"><span class="dir">← 上一篇</span><span class="ttl">' + esc(prev.title) + '</span></a>'
      : '<a href="#/"><span class="dir">← 返回</span><span class="ttl">文章首页</span></a>';
    html += next
      ? '<a class="next" href="#/post/' + esc(next.slug) + '"><span class="dir">下一篇 →</span><span class="ttl">' + esc(next.title) + '</span></a>'
      : '<a class="next" href="#/"><span class="dir">目录 →</span><span class="ttl">浏览全部笔记</span></a>';
    html += '</nav></article><aside class="toc" id="toc" aria-label="本页目录"></aside></div>';

    el.view.innerHTML = html;

    var editBtn = document.getElementById('editMine');
    if (editBtn && FN) {
      editBtn.addEventListener('click', function () {
        FN.openEditor({
          post: post,
          onSaved: function (result) {
            refreshPosts();
            if (result === 'deleted') { location.hash = '#/'; }
            else { route(); }
          }
        });
      });
    }

    resetScroll();
    var prose = document.getElementById('prose');
    if (prose) enhanceCode(prose);
    buildToc(prose);
    document.title = post.title + ' · 模块笔记';
    updateProgress();
  }

  function buildToc(prose) {
    var toc = document.getElementById('toc');
    var list = prose.querySelectorAll('h2, h3');
    if (!list.length) { if (toc) toc.remove(); return; }

    var html = '<div class="toc-title">本页目录</div>';
    headings = [];
    tocLinks = [];
    Array.prototype.forEach.call(list, function (h, i) {
      var id = 'sec-' + (i + 1);
      h.id = id;
      headings.push(h);
      html += '<a href="#/post/' + currentSlug() + '" data-target="' + id + '" class="' + (h.tagName === 'H3' ? 'lv3' : 'lv2') + '">' +
        esc(h.textContent) + '</a>';
    });
    toc.innerHTML = html;

    tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a'));
    tocLinks.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(a.getAttribute('data-target'));
        if (target) {
          window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 82, behavior: 'smooth' });
          a.classList.add('active');
          setTimeout(function () { highlightToc(); }, 600);
        }
      });
    });
  }

  function currentSlug() {
    var m = location.hash.match(/^#\/post\/(.+)$/);
    return m ? m[1] : '';
  }

  function highlightToc() {
    if (!headings.length) return;
    var y = window.pageYOffset + 110;
    var active = headings[0];
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].offsetTop <= y) active = headings[i];
    }
    tocLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-target') === active.id);
    });
  }

  function enhanceCode(root) {
    var codes = root.querySelectorAll('pre > code');
    Array.prototype.forEach.call(codes, function (code) {
      var pre = code.parentNode;
      var lang = (code.className.match(/language-([\w-]+)/) || [])[1] || 'text';
      var raw = code.textContent;
      code.innerHTML = window.highlightCode(raw, lang);

      var block = document.createElement('div');
      block.className = 'code-block';
      pre.parentNode.insertBefore(block, pre);

      var head = document.createElement('div');
      head.className = 'code-head';
      head.innerHTML = '<span class="code-lang">' + esc(lang) + '</span>';

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-btn';
      btn.textContent = '复制';
      btn.addEventListener('click', function () {
        var done = function () {
          btn.textContent = '已复制';
          btn.classList.add('done');
          setTimeout(function () { btn.textContent = '复制'; btn.classList.remove('done'); }, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(raw).then(done, done);
        } else {
          var ta = document.createElement('textarea');
          ta.value = raw;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch (e) {}
          ta.remove();
          done();
        }
      });

      head.appendChild(btn);
      block.appendChild(head);
      block.appendChild(pre);
    });
  }

  /* ---------------- about ---------------- */
  function renderAbout() {
    renderSidebar('__about');
    var html = '<div class="article-layout"><article>' +
      '<div class="breadcrumb"><a href="#/">首页</a><span class="sep">/</span><span>关于本站</span></div>' +
      '<header class="article-head"><span class="cat-badge">About</span>' +
      '<h1>关于「模块笔记」</h1>' +
      '<div class="article-meta"><span>一个纯静态的写作站点</span><span class="dot"></span>' +
      '<span>' + POSTS.length + ' 篇笔记</span></div></header>' +
      '<div class="prose">' +
      '<p>这是一个不依赖任何框架与构建工具的静态站点：HTML 负责骨架，CSS 负责版式，原生 JavaScript 负责路由与渲染。全部逻辑都在浏览器里完成，部署时只需要上传静态文件。</p>' +
      '<h2>技术实现</h2>' +
      '<ul>' +
      '<li><strong>路由</strong>：基于 location.hash 的前端路由，刷新与直接分享链接都能正确打开；</li>' +
      '<li><strong>渲染</strong>：文章按「一篇一模块」存放于 assets/js/posts/，进入详情页时动态生成目录与代码高亮；</li>' +
      '<li><strong>高亮</strong>：内置轻量语法着色器，支持 JS / TS / CSS / HTML / Bash，无需外部 CDN；</li>' +
      '<li><strong>主题</strong>：浅色与深色主题一键切换，选择结果保存在本地。</li>' +
      '</ul>' +
      '<h2>目录结构</h2>' +
      '<pre><code class="language-bash">site/\n├── index.html\n├── 404.html\n└── assets/\n    ├── css/style.css\n    └── js/\n        ├── posts.js          # 注册入口\n        ├── posts/            # 每篇文章一个模块\n        │   ├── power-system-analysis-review.js\n        │   ├── power-electronics-review.js\n        │   └── ...\n        ├── highlight.js      # 语法高亮\n        └── app.js            # 路由与渲染</code></pre>' +
      '<h2>怎么写新文章</h2>' +
      '<p>在 assets/js/posts/ 下新建一个模块，用 <code>window.POSTS.push({ ... })</code> 注册文章，并在 index.html 中引入该脚本。每篇文章独立成文件，便于单独检查与修改。代码块使用 <code>&lt;pre&gt;&lt;code class="language-xx"&gt;</code> 包裹，页面会自动生成语法高亮与复制按钮。</p>' +
      '<h2>关于内容</h2>' +
      '<p>所有笔记都来自实际项目中的问题记录，结论力求可验证。如果某篇内容与你的实践不一致，欢迎以代码和现象为准。</p>' +
      '<blockquote><p>写文档最好的时机，是刚把一个坑填完的时候。</p></blockquote>' +
      '</div></article><aside class="toc"></aside></div>';
    el.view.innerHTML = html;
    enhanceCode(el.view.querySelector('.prose'));
    document.title = '关于本站 · 模块笔记';
    resetScroll();
  }

  /* ---------------- not found ---------------- */
  function renderNotFound() {
    renderSidebar(null);
    el.view.innerHTML = '<div class="empty" style="margin-top:24px">' +
      '<div style="font-size:44px;font-weight:800;letter-spacing:-.04em;color:var(--text);margin-bottom:6px">404</div>' +
      '页面不存在或已被移动。<br><b><a href="#/">返回文章首页</a></b></div>';
    document.title = '404 · 模块笔记';
    resetScroll();
  }

  /* ---------------- scroll ---------------- */
  function resetScroll() {
    window.scrollTo(0, 0);
    el.progress.style.width = '0%';
    tocLinks = [];
    headings = [];
  }

  function updateProgress() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? (window.pageYOffset / h) * 100 : 0;
    el.progress.style.width = Math.max(0, Math.min(100, p)) + '%';
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateProgress();
      highlightToc();
      ticking = false;
    });
  }

  /* ---------------- router ---------------- */
  function route() {
    var hash = location.hash.replace(/^#/, '') || '/';
    closeMenu();
    if (hash === '/' || hash === '') return renderHome();
    if (hash === '/about') return renderAbout();
    var m = hash.match(/^\/post\/(.+)$/);
    if (m) return renderArticle(decodeURIComponent(m[1]));
    return renderNotFound();
  }

  /* ---------------- menu ---------------- */
  function openMenu() {
    el.sidebar.classList.add('open');
    el.scrim.hidden = false;
    requestAnimationFrame(function () { el.scrim.classList.add('show'); });
    el.menuBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    el.sidebar.classList.remove('open');
    el.scrim.classList.remove('show');
    el.menuBtn.setAttribute('aria-expanded', 'false');
    setTimeout(function () { if (!el.sidebar.classList.contains('open')) el.scrim.hidden = true; }, 240);
  }

  /* ---------------- events ---------------- */
  el.themeBtn.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') || 'light';
    var idx = THEME_ORDER.indexOf(cur);
    var next = THEME_ORDER[(idx + 1) % THEME_ORDER.length];
    setTheme(next);
  });

  var writeBtn = document.getElementById('writeBtn');
  if (writeBtn && FN) {
    writeBtn.addEventListener('click', function () {
      /* 远端模式下未登录 → 先弹登录框 */
      if (FN.isRemote() && !FN.isLoggedIn()) {
        FN.openAuthModal('login', function () {
          refreshPosts();
          route();
          refreshAuthUI();
          FN.openEditor({ onSaved: function () { refreshPosts(); route(); } });
        });
        return;
      }
      FN.openEditor({
        onSaved: function () {
          refreshPosts();
          route();
        }
      });
    });
  }

  /* 「我的编辑」入口：列出当前用户的全部文章，可修改或删除 */
  var mineBtn = document.getElementById('mineBtn');
  if (mineBtn && FN) {
    mineBtn.addEventListener('click', function () {
      if (FN.isRemote() && !FN.isLoggedIn()) {
        FN.openAuthModal('login', function () {
          refreshPosts();
          route();
          refreshAuthUI();
          openMyEditsModal();
        });
        return;
      }
      openMyEditsModal();
    });
  }

  function myPosts() {
    return POSTS.filter(function (p) { return isMine(p); });
  }

  function openMyEditsModal() {
    refreshPosts();
    var mask = document.createElement('div');
    mask.className = 'ed-mask';
    var list = myPosts();

    function esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
      });
    }

    function renderList() {
      list = myPosts();
      var bodyBox = mask.querySelector('#myBody');
      if (!bodyBox) return;
      if (!list.length) {
        bodyBox.innerHTML = '<div class="my-empty">还没有你发布的文章。<br><b>点击顶栏「＋ 写文章」即可创建第一篇。</b></div>';
        return;
      }
      bodyBox.innerHTML = '<div class="my-list">' + list.map(function (p, i) {
        var date = p.date || (p.updatedAt ? new Date(p.updatedAt).toLocaleDateString('zh-CN') : '');
        var major = (MAJORS.indexOf(p.major) !== -1) ? p.major : '编程语言';
        return '<div class="my-item" data-idx="' + i + '">' +
          '  <div class="my-main">' +
          '    <div class="my-title">' + esc(p.title || '(未命名)') + '</div>' +
          '    <div class="my-meta">' + esc(major) + ' · ' + esc(p.category || '原创') + ' · ' + esc(date) + '</div>' +
          '  </div>' +
          '  <div class="my-actions">' +
          '    <button type="button" class="btn ghost sm" data-act="view">查看</button>' +
          '    <button type="button" class="btn ghost sm" data-act="edit">编辑/保存</button>' +
          '    <button type="button" class="btn ghost danger sm" data-act="del">删除</button>' +
          '  </div>' +
          '</div>';
      }).join('') + '</div>';
    }

    mask.innerHTML =
      '<div class="ed-modal my-modal">' +
      '  <div class="ed-head"><b>我的编辑</b>' +
      '    <button type="button" class="ed-x">×</button></div>' +
      '  <div class="ed-body" id="myBody">' +
      '  </div>' +
      '  <div class="ed-foot"><span class="ed-save-state" id="myState">' +
      '    共 ' + list.length + ' 篇 · 保存或删除后列表自动刷新</span>' +
      '  <span class="ed-actions"><button type="button" class="btn ghost" id="myClose">关闭</button>' +
      '  <button type="button" class="btn primary" id="myNew">＋ 新建一篇</button>' +
      '  </span></div></div>';

    document.body.appendChild(mask);
    var close = function () { mask.remove(); };
    mask.querySelector('.ed-x').addEventListener('click', close);
    mask.querySelector('#myClose').addEventListener('click', close);
    mask.querySelector('#myNew').addEventListener('click', function () {
      close();
      FN.openEditor({
        onSaved: function () { refreshPosts(); route(); }
      });
    });

    mask.querySelector('#myBody').addEventListener('click', function (e) {
      var itemBtn = e.target.closest ? e.target.closest('.my-item [data-act]') : null;
      if (!itemBtn) return;
      var itemEl = e.target.closest('.my-item');
      if (!itemEl) return;
      var idx = Number(itemEl.getAttribute('data-idx'));
      var post = list[idx];
      if (!post) return;
      var act = itemBtn.getAttribute('data-act');
      if (act === 'view') {
        close();
        location.hash = '#/post/' + encodeURIComponent(post.slug);
      } else if (act === 'edit') {
        close();
        FN.openEditor({
          post: post,
          onSaved: function (result) {
            refreshPosts();
            if (result === 'deleted') { route(); }
            else { setTimeout(openMyEditsModal, 0); }
          }
        });
      } else if (act === 'del') {
        if (!window.confirm('确定删除《' + (post.title || '') + '》？此操作不可恢复。')) return;
        FN.removePost(post).then(function () {
          refreshPosts();
          renderList();
          route();
          var stateI = mask.querySelector('#myState');
          if (stateI) stateI.textContent = '已删除 · 剩余 ' + myPosts().length + ' 篇';
        });
      }
    });

    renderList();
  }
  el.menuBtn.addEventListener('click', function () {
    el.sidebar.classList.contains('open') ? closeMenu() : openMenu();
  });
  el.scrim.addEventListener('click', closeMenu);

  var searchTimer = null;
  el.search.addEventListener('input', function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () {
      state.q = el.search.value;
      var hash = location.hash.replace(/^#/, '') || '/';
      if (hash !== '/' && hash !== '') {
        location.hash = '#/';
      } else {
        renderHome(true);
      }
    }, 130);
  });
  el.search.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      el.search.value = '';
      state.q = '';
      renderHome(true);
      el.search.blur();
    }
  });

  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    if (e.key === '/' && tag !== 'input' && tag !== 'textarea') {
      e.preventDefault();
      if (window.innerWidth <= 720) return;
      el.search.focus();
      el.search.select();
    }
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var catA = e.target.closest('[data-cat]');
    var tagA = e.target.closest('[data-taglink]');
    var node = catA || tagA;
    if (node) {
      e.preventDefault();
      if (catA) {
        /* 门类：点击面包屑中的 major，回到首页并按门类筛选 */
        state.major = catA.getAttribute('data-cat');
        state.tag = '全部';
      } else {
        /* 点击文章内标签：跨门类搜索该标签，重置门类筛选 */
        state.major = '';
        state.tag = node.getAttribute('data-taglink');
      }
      state.q = '';
      el.search.value = '';
      var hash = location.hash.replace(/^#/, '') || '/';
      if (hash === '/' || hash === '') renderHome();
      else location.hash = '#/';
      return;
    }
    /* 点击空白处：若当前正按门类筛选，则退回分类前的默认视图（不显示标签栏） */
    if (state.major && !e.target.closest('.cat-tile') && !e.target.closest('a,button,input,select,textarea,label,header,aside,nav,footer')) {
      state.major = '';
      state.tag = '全部';
      var hash2 = location.hash.replace(/^#/, '') || '/';
      if (hash2 === '/' || hash2 === '') renderHome();
    }
  });

  window.addEventListener('hashchange', route);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) closeMenu();
    updateProgress();
  });

  /* ---------------- boot ---------------- */
  function refreshAuthUI() {
    var btn = document.getElementById('authBtn');
    if (!btn || !FN) return;
    if (FN.isLoggedIn()) {
      btn.innerHTML = '👤 ' + FN.currentName();
      /* 左键单击 → 弹出菜单（设置 / 退出登录）；双击 → 直接打开个人中心 */
      btn.onclick = function (e) {
        openUserMenu(e.clientX, e.clientY);
      };
      btn.ondblclick = function (e) { e.preventDefault(); openProfileModal(); };
      btn.oncontextmenu = function (e) {
        e.preventDefault();
        openUserMenu(e.clientX, e.clientY);
      };
    } else {
      btn.innerHTML = '登录 / 注册';
      btn.onclick = function () {
        FN.openAuthModal('login', function () {
          refreshPosts();
          route();
          refreshAuthUI();
        });
      };
      btn.ondblclick = null;
      btn.oncontextmenu = null;
    }
  }

  /* 右键菜单 */
  var userMenuEl = null;
  function closeUserMenu() {
    if (userMenuEl) { userMenuEl.remove(); userMenuEl = null; }
    document.removeEventListener('click', closeUserMenu);
    document.removeEventListener('scroll', closeUserMenu);
  }
  function openUserMenu(x, y) {
    closeUserMenu();
    var menu = document.createElement('div');
    menu.className = 'user-menu';
    menu.innerHTML =
      '<button type="button" data-act="settings">⚙ 设置</button>' +
      '<button type="button" data-act="logout">↪ 退出登录</button>';
    menu.style.left = Math.min(x, window.innerWidth - 180) + 'px';
    menu.style.top = Math.min(y, window.innerHeight - 110) + 'px';
    document.body.appendChild(menu);
    userMenuEl = menu;
    setTimeout(function () {
      document.addEventListener('click', closeUserMenu);
      document.addEventListener('scroll', closeUserMenu);
    }, 0);
    menu.addEventListener('click', function (e) {
      var act = e.target.getAttribute('data-act');
      closeUserMenu();
      if (act === 'settings') openProfileModal();
      else if (act === 'logout') {
        FN.logout();
        refreshPosts();
        route();
        refreshAuthUI();
      }
    });
  }

  /* 个人中心弹窗 */
  function openProfileModal() {
    var mask = document.createElement('div');
    mask.className = 'ed-mask';
    var data = FN.getProfileData();
    var email = FN.currentEmail() || '';
    var nick = FN.currentName() || '';

    function esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
      });
    }

    mask.innerHTML =
      '<div class="ed-modal auth-modal">' +
      '  <div class="ed-head"><b>个人中心</b><button type="button" class="ed-x">×</button></div>' +
      '  <div class="ed-body">' +
      '    <div class="pf-row"><span class="pf-label">邮箱（保密）</span><span class="pf-value">' + esc(email) + '</span></div>' +
      '    <div class="pf-row"><span class="pf-label">当前昵称</span><span class="pf-value" id="pfCurNick">' + esc(nick) + '</span></div>' +
      '    <label class="ed-label">性别</label>' +
      '    <select class="ed-input" id="pfGender">' +
      '      <option value="">未设置</option>' +
      '      <option value="男"' + (data.gender === '男' ? ' selected' : '') + '>男</option>' +
      '      <option value="女"' + (data.gender === '女' ? ' selected' : '') + '>女</option>' +
      '      <option value="保密"' + (data.gender === '保密' ? ' selected' : '') + '>保密</option>' +
      '    </select>' +
      '    <label class="ed-label">星座</label>' +
      '    <select class="ed-input" id="pfZodiac">' +
      '      <option value="">未设置</option>' +
      ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'].map(function (z) {
        return '<option value="' + z + '"' + (data.zodiac === z ? ' selected' : '') + '>' + z + '</option>';
      }).join('') +
      '    </select>' +
      '    <label class="ed-label">偏好 <span class="ed-hint">（喜欢的技术方向，如 CSS / JS / 网络）</span></label>' +
      '    <input class="ed-input" id="pfPref" maxlength="30" placeholder="选填" value="' + esc(data.preference || '') + '">' +
      '    <hr class="pf-divider">' +
      '    <label class="ed-label">修改昵称</label>' +
      '    <input class="ed-input" id="pfNewNick" maxlength="24" placeholder="输入新昵称（2-24 位）">' +
      '    <label class="ed-label">修改密码 <span class="ed-hint">（先填旧密码）</span></label>' +
      '    <input class="ed-input" id="pfOldPwd" type="password" maxlength="64" placeholder="当前密码" autocomplete="current-password">' +
      '    <input class="ed-input" id="pfNewPwd" type="password" maxlength="64" placeholder="新密码（至少 6 位）" autocomplete="new-password">' +
      '    <input class="ed-input" id="pfNewPwd2" type="password" maxlength="64" placeholder="确认新密码" autocomplete="new-password">' +
      '    <div class="ed-save-state" id="pfState"></div>' +
      '  </div>' +
      '  <div class="ed-foot"><span></span><span class="ed-actions">' +
      '    <button type="button" class="btn ghost" id="pfClose">关闭</button>' +
      '    <button type="button" class="btn primary" id="pfSave">确认并保存</button>' +
      '  </span></div></div>';

    document.body.appendChild(mask);
    var $ = function (s) { return mask.querySelector(s); };
    var close = function () { mask.remove(); };
    var stateI = $('#pfState');

    $('.ed-x').addEventListener('click', close);
    $('#pfClose').addEventListener('click', close);
    $('#pfSave').addEventListener('click', async function () {
      try {
        /* 1. 保存个人信息 */
        FN.saveProfileData({
          gender: $('#pfGender').value,
          zodiac: $('#pfZodiac').value,
          preference: $('#pfPref').value.trim()
        });
        /* 2. 修改昵称（如填了新昵称） */
        var newNick = $('#pfNewNick').value.trim();
        if (newNick && newNick !== nick) {
          FN.changeNickname(newNick);
          $('#pfCurNick').textContent = newNick;
          nick = newNick;
          refreshAuthUI();
        }
        /* 3. 修改密码（如填了旧密码） */
        var oldPwd = $('#pfOldPwd').value;
        var newPwd = $('#pfNewPwd').value;
        var newPwd2 = $('#pfNewPwd2').value;
        if (oldPwd || newPwd || newPwd2) {
          if (!oldPwd) throw new Error('请输入当前密码');
          if (newPwd.length < 6) throw new Error('新密码至少 6 位');
          if (newPwd !== newPwd2) throw new Error('两次输入的新密码不一致');
          await FN.changePassword(oldPwd, newPwd);
        }
        stateI.textContent = '✓ 已保存，点击 × 关闭';
      } catch (e) {
        stateI.textContent = '⚠ ' + e.message;
      }
    });
  }

  initTheme();
  route();

  /* 异步拉取远端文章，完成后刷新一次 */
  if (FN && FN.refreshPosts) {
    FN.refreshPosts().then(function () {
      refreshPosts();
      route();
      refreshAuthUI();
      el.footerBuild.textContent = (FN.isRemote() ? '☁ ' : '◇ ') + 'v2.0 · ' + POSTS.length + ' notes';
    });
  }
  refreshAuthUI();
  el.footerBuild.textContent = 'v2.0 · ' + POSTS.length + ' notes';
})();
