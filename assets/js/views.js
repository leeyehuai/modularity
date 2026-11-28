/* 浏览计数表 —— 纯 localStorage 持久化，键 fn-views：{ slug: count }
   - getViews(slug)：读取某篇文章的阅读数（默认 0）
   - incrViews(slug)：阅读数 +1，返回最新值；同一 session 内同一篇文章只计一次（防刷）
   - topPosts(list, n)：按阅读数降序取前 n，并列时按发布日期兜底 */
window.FNViews = (function () {
  'use strict';
  var LS_KEY = 'fn-views';
  var SESSION_KEY = 'fn-views-session';

  function load() {
    try {
      var obj = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
      return (obj && typeof obj === 'object') ? obj : {};
    } catch (e) { return {}; }
  }

  function save(obj) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(obj)); } catch (e) {}
  }

  function getViews(slug) {
    var n = load()[slug];
    return (typeof n === 'number' && isFinite(n) && n > 0) ? Math.floor(n) : 0;
  }

  function incrViews(slug) {
    if (!slug) return 0;
    /* 同一浏览器会话内，重复打开同一篇文章不重复计数 */
    try {
      var seen = JSON.parse(sessionStorage.getItem(SESSION_KEY) || '[]');
      if (Array.isArray(seen) && seen.indexOf(slug) !== -1) return getViews(slug);
      seen.push(slug);
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(seen));
    } catch (e) {}

    var obj = load();
    obj[slug] = (obj[slug] || 0) + 1;
    save(obj);
    return obj[slug];
  }

  /* 榜单：按阅读数降序，取前 n；阅读数相同时日期新者靠前 */
  function topPosts(list, n) {
    return (list || [])
      .slice()
      .sort(function (a, b) {
        var va = getViews(a.slug), vb = getViews(b.slug);
        if (vb !== va) return vb - va;
        return (b.date || '') < (a.date || '') ? 1 : -1;
      })
      .slice(0, n || 3);
  }

  /* 大数字格式化：1234 → 1.2k，保留中文习惯的整数字 */
  function fmt(n) {
    n = Math.floor(n || 0);
    if (n >= 10000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(n);
  }

  return { getViews: getViews, incrViews: incrViews, topPosts: topPosts, fmt: fmt };
})();
