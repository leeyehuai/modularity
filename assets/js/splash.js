/* 启动封面编排 v6 —— 直接播放视频，播完后分流
 * ---------------------------------------------------------------
 * 打开 index.html
 *   ↓
 * 播放 splash.mp4（约 8s），静音自动播放
 *   ↓
 * 视频播完 → 静态停留 2 秒
 *   ↓
 * 判断状态：
 *   - 已登录              → 淡出封面，进主界面
 *   - 游客（?guest=1）    → 淡出封面，只读主界面
 *   - 未登录              → 跳 auth.html
 * --------------------------------------------------------------- */
(function () {
  'use strict';

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
        /* 未登录：不淡出封面，直接在封面层上跳转 auth.html，
           避免主界面先露脸、跳转后又跳走的“卡一下主界面”闪烁 */
        window.location.replace('auth.html');
        return;
      }
      dismiss();
    }, 900);
  }

  /* 优先监听视频播完事件；兜底时间 = 目标 3.6s（8s 视频 × 2.2x 加速），留 0.4s 余量 */
  var VIDEO_DURATION_FALLBACK = 4000;
  var settled = false;
  function onEnded() {
    if (settled) return;
    settled = true;
    route();
  }

  if (video) {
    video.addEventListener('ended', onEnded);
    video.addEventListener('loadedmetadata', function () {
      /* 2.2x 加速播放：8s 视频压缩到约 3.6s，翻书动作更利落自然 */
      video.playbackRate = 2.2;
      /* 浏览器自动播放尝试 */
      var p = video.play();
      if (p && p.catch) p.catch(function () {
        /* 自动播放被拦：再试一次静音播放 */
        video.muted = true;
        video.play().catch(function () {});
      });
    });
    /* 兜底：4 秒后无论视频状态都分流 */
    setTimeout(onEnded, VIDEO_DURATION_FALLBACK);
  } else {
    setTimeout(route, 1200);
  }

  /* 从 auth.html 登录成功回来（?from=auth）：跳过播放，直接淡出 */
  if (/[?&]from=auth/.test(location.search)) {
    setTimeout(dismiss, 500);
  }
})();
