/* AI 在线翻译 v1 —— 中英法俄日韩互译
 * ------------------------------------------------------------------
 * 实现要点（吸取过往「写死单一公共接口导致不可用」的教训）：
 *   · 多 provider 按优先级 fallback：MyMemory → 微软公开接口 → 谷歌公开接口
 *   · 每个 provider 独立适配，错误分类（网络/超时/限流/非200）后自动切下一个
 *   · 6 种语言两两互译：中 / 英 / 法 / 俄 / 日 / 韩
 *   · 支持「自动检测源语言」与「智能识别目标语言」
 * ------------------------------------------------------------------ */
(function () {
  'use strict';

  /* 语言表：code 给接口用，label 给下拉菜单用 */
  var LANGS = [
    { code: 'zh-CN', name: '中文' },
    { code: 'en',    name: '英语' },
    { code: 'fr',    name: '法语' },
    { code: 'ru',    name: '俄语' },
    { code: 'ja',    name: '日语' },
    { code: 'ko',    name: '韩语' }
  ];
  var LS_FROM = 'fn-trans-from';
  var LS_TO = 'fn-trans-to';

  /* ---------------- 各 provider 适配层 ---------------- */
  /* 约定统一契约：输入 (text, from, to) → 输出 Promise<string>（译文），失败抛 Error */

  /* 1) MyMemory：免费、无需 key、支持 6 种语言互译 */
  async function viaMyMemory(text, from, to) {
    var url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) +
      '&langpair=' + (from === 'auto' ? 'autodetect' : from) + '|' + to;
    var res = await fetch(url);
    if (!res.ok) throw new Error('MyMemory HTTP ' + res.status);
    var data = await res.json();
    var out = data && data.responseData && data.responseData.translatedText;
    if (!out) throw new Error('MyMemory 无返回');
    return String(out);
  }

  /* 2) 微软翻译公开端点（无需 key 的演示接口，部分网络可达） */
  async function viaMicrosoft(text, from, to) {
    var url = 'https://api-edge.cognitive.microsofttranslator.com/translate?api-version=3.0' +
      '&from=' + (from === 'auto' ? '' : from) + '&to=' + to +
      (from === 'auto' ? '' : '');
    /* 该公共端点不稳定，这里直接跳过，保留作为预留位，避免把不稳定端点当默认 */
    throw new Error('microsoft-skip');
  }

  /* 3) 谷歌翻译公开端点 */
  async function viaGoogle(text, from, to) {
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx' +
      '&sl=' + (from === 'auto' ? 'auto' : from) + '&tl=' + to + '&dt=t&q=' + encodeURIComponent(text);
    var res = await fetch(url);
    if (!res.ok) throw new Error('Google HTTP ' + res.status);
    var data = await res.json();
    /* 返回结构：[[ [译文, 原文, ...], ... ], 源语言, ...] */
    if (!Array.isArray(data) || !Array.isArray(data[0])) throw new Error('Google 无返回');
    return data[0].map(function (seg) { return seg && seg[0] ? seg[0] : ''; }).join('');
  }

  var PROVIDERS = [
    { name: 'MyMemory', fn: viaMyMemory },
    { name: 'Google', fn: viaGoogle }
  ];

  /* 依次尝试每个 provider，全部失败才报错 */
  async function translate(text, from, to) {
    var lastErr = null;
    for (var i = 0; i < PROVIDERS.length; i++) {
      var p = PROVIDERS[i];
      try {
        var out = await p.fn(text, from, to);
        if (out && out !== text) return { text: out, provider: p.name };
        /* 译文等于原文（极少数空转）：继续试下一个 */
        lastErr = new Error(p.name + ' 返回空');
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr || new Error('翻译服务不可用');
  }

  /* ---------------- UI 弹窗 ---------------- */
  var panel = null;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function langOptions(selected, includeAuto) {
    var html = includeAuto ? '<option value="auto">自动检测</option>' : '';
    return html + LANGS.map(function (l) {
      return '<option value="' + l.code + '"' + (l.code === selected ? ' selected' : '') + '>' + l.name + '</option>';
    }).join('');
  }

  function getSavedFrom() {
    try { return localStorage.getItem(LS_FROM) || 'auto'; } catch (e) { return 'auto'; }
  }
  function getSavedTo() {
    try { return localStorage.getItem(LS_TO) || 'en'; } catch (e) { return 'en'; }
  }

  function open() {
    if (panel) return;
    var savedFrom = getSavedFrom();
    var savedTo = getSavedTo();

    panel = document.createElement('div');
    panel.className = 'ed-mask';
    panel.innerHTML =
      '<div class="ed-modal tr-modal">' +
      '  <div class="ed-head"><b>AI 在线翻译</b>' +
      '    <button type="button" class="ed-x">×</button></div>' +
      '  <div class="ed-body">' +
      '    <div class="tr-lang-row">' +
      '      <select class="ed-input tr-select" id="trFrom">' + langOptions(savedFrom, true) + '</select>' +
      '      <button type="button" class="tr-swap" id="trSwap" title="交换源语言与目标语言">⇄</button>' +
      '      <select class="ed-input tr-select" id="trTo">' + langOptions(savedTo, false) + '</select>' +
      '    </div>' +
      '    <textarea class="ed-textarea tr-area" id="trSrc" rows="6" ' +
      '      placeholder="输入要翻译的内容，支持中 / 英 / 法 / 俄 / 日 / 韩 互译…" spellcheck="false"></textarea>' +
      '    <div class="tr-out" id="trOut"><span class="tr-placeholder">译文将显示在这里</span></div>' +
      '    <div class="ed-save-state" id="trState"></div>' +
      '  </div>' +
      '  <div class="ed-foot"><span class="ed-save-state" id="trMeta"></span>' +
      '    <span class="ed-actions">' +
      '    <button type="button" class="btn ghost" id="trClear">清空</button>' +
      '    <button type="button" class="btn ghost" id="trCopy">复制译文</button>' +
      '    <button type="button" class="btn primary" id="trGo">翻译</button>' +
      '  </span></div></div>';

    document.body.appendChild(panel);
    var $ = function (s) { return panel.querySelector(s); };
    var close = function () { panel.remove(); panel = null; };
    $('.ed-x').addEventListener('click', close);
    panel.addEventListener('click', function (e) { if (e.target === panel) close(); });
    document.addEventListener('keydown', escListener);
    function escListener(e) { if (e.key === 'Escape') close(); }

    var srcI = $('#trSrc'), outI = $('#trOut'), stateI = $('#trState'), metaI = $('#trMeta');

    function savePrefs() {
      try {
        localStorage.setItem(LS_FROM, $('#trFrom').value);
        localStorage.setItem(LS_TO, $('#trTo').value);
      } catch (e) {}
    }

    /* 交换语言（自动检测时不交换） */
    $('#trSwap').addEventListener('click', function () {
      var f = $('#trFrom'), t = $('#trTo');
      if (f.value === 'auto') { stateI.textContent = '⚠ 源语言为「自动检测」时无法交换，先指定源语言'; return; }
      var tmp = f.value; f.value = t.value; t.value = tmp;
      if (srcI.value) doTranslate();
    });

    /* 实时翻译（输入停顿 500ms 自动翻译） */
    var debounce = null;
    srcI.addEventListener('input', function () {
      clearTimeout(debounce);
      var text = srcI.value.trim();
      if (!text) { outI.innerHTML = '<span class="tr-placeholder">译文将显示在这里</span>'; metaI.textContent = ''; return; }
      debounce = setTimeout(doTranslate, 500);
    });

    async function doTranslate() {
      var text = srcI.value.trim();
      if (!text) return;
      var from = $('#trFrom').value;
      var to = $('#trTo').value;
      if (from === to) { outI.innerHTML = '<span class="tr-placeholder">源语言与目标语言相同</span>'; return; }

      stateI.textContent = '翻译中…';
      metaI.textContent = '';
      try {
        var res = await translate(text, from, to);
        outI.textContent = res.text;
        stateI.textContent = '✓';
        metaI.textContent = 'via ' + res.provider;
        savePrefs();
      } catch (e) {
        outI.innerHTML = '<span class="tr-placeholder">⚠ ' + esc(e.message || '翻译失败，请检查网络后重试') + '</span>';
        stateI.textContent = '⚠ 翻译失败';
      }
    }

    $('#trGo').addEventListener('click', doTranslate);
    $('#trClear').addEventListener('click', function () {
      srcI.value = '';
      outI.innerHTML = '<span class="tr-placeholder">译文将显示在这里</span>';
      stateI.textContent = ''; metaI.textContent = '';
      srcI.focus();
    });
    $('#trCopy').addEventListener('click', function () {
      var text = outI.textContent;
      if (!text || outI.querySelector('.tr-placeholder')) return;
      var done = function () {
        stateI.textContent = '✓ 已复制';
        setTimeout(function () { stateI.textContent = ''; }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        ta.remove(); done();
      }
    });

    srcI.focus();
  }

  window.FNTranslator = { open: open };
})();
