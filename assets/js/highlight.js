/* Lightweight, dependency-free syntax highlighter for the notes site.
   Supports: js / ts / json / bash / css / html / text */
(function () {
  'use strict';

  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) { return ESC[c]; });
  }
  function span(cls, text) {
    return '<span class="' + cls + '">' + esc(text) + '</span>';
  }

  var KEYWORDS = {
    js: ('const let var function return if else for while do switch case default break continue ' +
      'new class extends super this typeof instanceof in of async await try catch finally throw ' +
      'import export from delete void yield static get set null undefined true false').split(' '),
    ts: ('const let var function return if else for while do switch case default break continue ' +
      'new class extends super this typeof instanceof in of async await try catch finally throw ' +
      'import export from delete void yield static get set null undefined true false ' +
      'interface type enum implements declare namespace readonly public private protected abstract ' +
      'as is keyof infer satisfies never unknown any string number boolean object').split(' '),
    json: ['true', 'false', 'null'],
    bash: ('cd ls pwd echo export unset if then else elif fi for do done while case esac function ' +
      'return source exit set git npm node pnpm npx curl mkdir rm cp mv cat grep').split(' ')
  };

  function buildRe(cfg) {
    var parts = [];
    // 1 comment
    parts.push('(' + cfg.comment + ')');
    // 2 string
    parts.push('("(?:[^"\\\\\\n]|\\\\.)*"|\'(?:[^\'\\\\\\n]|\\\\.)*\'|`(?:[^`\\\\]|\\\\.)*`)');
    // 3 number
    parts.push('\\b(?:0[xX][\\da-fA-F]+|\\d+(?:\\.\\d+)?)\\b');
    // 4 keyword
    parts.push('\\b(?:' + cfg.keywords.join('|') + ')\\b');
    // 5 function call
    parts.push('[A-Za-z_$][\\w$]*(?=\\s*\\()');
    return new RegExp(parts.join('|'), 'g');
  }

  function runGeneric(code, cfg) {
    var re = buildRe(cfg);
    var out = '';
    var last = 0;
    var m;
    while ((m = re.exec(code))) {
      out += esc(code.slice(last, m.index));
      var text = m[0];
      if (m[1] != null) out += span('tok-com', text);
      else if (m[2] != null) out += span('tok-str', text);
      else if (/^(?:0[xX][\da-fA-F]+|\d)/.test(text)) out += span('tok-num', text);
      else if (cfg.keywordSet[text]) out += span('tok-kw', text);
      else out += span('tok-fn', text);
      last = re.lastIndex;
    }
    return out + esc(code.slice(last));
  }

  function makeGeneric(lang) {
    var cfg = {
      comment: lang === 'bash' ? '#[^\\n]*' : '\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/',
      keywords: KEYWORDS[lang] || KEYWORDS.js,
      keywordSet: {}
    };
    cfg.keywords.forEach(function (k) { cfg.keywordSet[k] = true; });
    return function (code) { return runGeneric(code, cfg); };
  }

  /* ---------- CSS ---------- */
  function highlightCss(code) {
    var re = /\/\*[\s\S]*?\*\/|"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|@[\w-]+|#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|%|s|ms|fr|vh|vw|dvh|ch|deg)?\b|[A-Za-z-]+(?=\s*[:(])/g;
    var out = '';
    var last = 0;
    var depth = 0;
    var m;
    while ((m = re.exec(code))) {
      var gap = code.slice(last, m.index);
      out += esc(gap);
      depth += count(gap, '{') - count(gap, '}');
      var text = m[0];
      var cls;
      if (text.slice(0, 2) === '/*') cls = 'tok-com';
      else if (text[0] === '"' || text[0] === "'") cls = 'tok-str';
      else if (text[0] === '@') cls = 'tok-at';
      else if (text[0] === '#') cls = 'tok-num';
      else if (/^\d/.test(text)) cls = 'tok-num';
      else {
        var rest = code.slice(re.lastIndex);
        if (/^\s*:/.test(rest) && depth > 0) cls = 'tok-prop';
        else if (/^\s*\(/.test(rest)) cls = 'tok-fn';
        else if (/^\s*[,{]/.test(rest)) cls = 'tok-sel';
        else cls = 'tok-kw';
      }
      out += span(cls, text);
      last = re.lastIndex;
    }
    var tail = code.slice(last);
    out += esc(tail);
    return out;
  }

  function count(str, ch) {
    var n = 0;
    for (var i = 0; i < str.length; i++) if (str[i] === ch) n++;
    return n;
  }

  /* ---------- HTML ---------- */
  function highlightHtml(code) {
    var text = esc(code);
    var re = /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?)([\w-]+)|("(?:[^"]*)"|'(?:[^']*)')|([\w-]+)(?=\s*=)/g;
    var out = '';
    var last = 0;
    var m;
    while ((m = re.exec(text))) {
      out += text.slice(last, m.index);
      if (m[1] != null) out += '<span class="tok-com">' + m[1] + '</span>';
      else if (m[3] != null) out += m[2] + '<span class="tok-tag">' + m[3] + '</span>';
      else if (m[4] != null) out += '<span class="tok-str">' + m[4] + '</span>';
      else out += '<span class="tok-attr">' + m[5] + '</span>';
      last = re.lastIndex;
    }
    return out + text.slice(last);
  }

  var generic = {
    js: makeGeneric('js'),
    ts: makeGeneric('ts'),
    json: makeGeneric('json'),
    bash: makeGeneric('bash'),
    sh: makeGeneric('bash'),
    shell: makeGeneric('bash')
  };

  window.highlightCode = function (code, lang) {
    var key = String(lang || '').toLowerCase();
    try {
      if (key === 'css') return highlightCss(code);
      if (key === 'html' || key === 'xml' || key === 'svg') return highlightHtml(code);
      if (generic[key]) return generic[key](code);
    } catch (e) {
      return esc(code);
    }
    return esc(code);
  };
})();
