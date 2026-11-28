/* 启动封面编排 v7 —— 每次浏览器会话只播一次
 * ---------------------------------------------------------------
 * 规则：
 *   - 会话内首次打开 index.html        → 播一次封面，播完后 sessionStorage 打标
 *   - 登录/注册成功 ?from=auth        → 已播过，直接进主界面（不再播）
 *   - 只读模式 ?guest=1               → 已播过，直接进主界面（不再播）
 *   - 会话内刷新/F5                    → 已播过，直接进主界面（不再播）
 *   - 关闭浏览器标签/窗口后重新打开   → sessionStorage 清空，重新播一次
 * --------------------------------------------------------------- */
(function () {
  'use strict';

  var SPLASH_KEY = 'fn-splash-shown';

  /* 判断本会话是否已经播过封面 */
  function alreadyShown() {
    try {
      return sessionStorage.getItem(SPLASH_KEY) === '1';
    } catch (e) { return false; }
  }

  /* 标记本会话已播过封面 */
  function markShown() {
    try { sessionStorage.setItem(SPLASH_KEY, '1'); } catch (e) {}
  }

  /* 静默移除封面元素（不播视频） */
  function removeSplashSilently() {
    var el = document.getElementById('splash');
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  /* —— 会话内已播过：所有情况都直接跳过 —— */
  if (alreadyShown()) {
    removeSplashSilently();
    return;
  }

  /* —— 本会话首次播封面 —— */
  var splash = document.getElementById('splash');
  if (!splash) return;

  var video = document.getElementById('splashVideo');

  function readSession() {
    try {
      var token = localStorage.getItem('fn-token') || '';
      var name = localStorage.getItem('fn-name') || '';
      return !!(token && name);
    } catch (e) { return false; }
  }

  function dismiss() {
    markShown(); /* 播完打标，会话内不再播 */
    splash.classList.add('splash-out');
    setTimeout(function () {
      if (splash.parentNode) splash.parentNode.removeChild(splash);
    }, 500);
  }

  function route() {
    splash.classList.add('splash-settled');
    setTimeout(function () {
      if (/[?&]guest=1/.test(location.search)) {
        dismiss();
        return;
      }
      if (!readSession()) {
        /* 未登录：直接跳 auth.html（封面层不淡出） */
        markShown(); /* 跳转也算播过，auth.html 登录成功跳回来不再播 */
        window.location.replace('auth.html');
        return;
      }
      dismiss();
    }, 900);
  }

  if (video) {
    video.addEventListener('ended', function onEnded() {
      video.removeEventListener('ended', onEnded);
      route();
    });
    video.addEventListener('loadedmetadata', function () {
      video.playbackRate = 2.2;
      var p = video.play();
      if (p && p.catch) p.catch(function () {
        video.muted = true;
        video.play().catch(function () {});
      });
    });
    /* 兜底：4 秒后无论视频状态都分流 */
    setTimeout(route, 4000);
  } else {
    setTimeout(route, 1200);
  }
})();
