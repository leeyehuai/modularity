/* 启动封面编排 v3
 * ---------------------------------------------------------------
 * 统一流程（所有用户一致，不再对已登录用户秒退）：
 *   打开 index.html
 *     ↓
 *   动态生成星尘背景 → 播放完整「极光 + 星尘 + 四方块靠拢 + 流光标题」动画（≈3.6s）
 *     ↓
 *   静态停留 2 秒
 *     ↓
 *   判断状态：
 *     - 已登录（有 token 且有昵称）        → 淡出封面，直接进主界面
 *     - 游客模式（URL 带 ?guest=1）        → 淡出封面，只读浏览主界面
 *     - 未登录（且非游客）                → 整页跳转到 auth.html 登录/注册页
 *     ↓
 *   在 auth.html 登录/注册成功后跳回 index.html
 *     → splash 再播一遍完整动画（约 5.6s）→ 已登录 → 淡出 → 主界面
 * --------------------------------------------------------------- */
(function () {
  'use strict';

  var splash = document.getElementById('splash');
  if (!splash) return;

  /* ---- 动态生成星尘 ---- */
  var starsBox = document.getElementById('splashStars');
  if (starsBox) {
    var frag = document.createDocumentFragment();
    var STAR_COUNT = 60;
    for (var i = 0; i < STAR_COUNT; i++) {
      var s = document.createElement('i');
      var size = (Math.random() * 2 + 1).toFixed(1);
      s.style.left = (Math.random() * 100).toFixed(2) + '%';
      s.style.top = (Math.random() * 100).toFixed(2) + '%';
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.animationDuration = (Math.random() * 4 + 3).toFixed(2) + 's';
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
      frag.appendChild(s);
    }
    starsBox.appendChild(frag);
  }

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
    }, 850);
  }

  /* 动画全部结束时间 ≈ 0.35(飞入延迟) + 0.9(飞入) + 2.35(最后一个字浮现延迟) ≈ 3.6s
     这里取 3.6s 作为「动画结束」点，再静态停留 2 秒后分流 */
  var ANIM_END = 3600;
  var SETTLE_HOLD = 2000;

  setTimeout(function () {
    splash.classList.add('splash-settled');
  }, ANIM_END);

  setTimeout(function () {
    /* 游客模式（?guest=1）：留在主界面只读浏览，不跳登录页 */
    if (/[?&]guest=1/.test(location.search)) {
      dismiss();
      return;
    }
    /* 此时仍未登录 → 跳到独立登录/注册页 */
    if (!readSession()) {
      window.location.replace('auth.html');
      return;
    }
    dismiss();
  }, ANIM_END + SETTLE_HOLD);
})();
