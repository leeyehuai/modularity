/* ==========================================================================
   批注系统 v1.0 —— 文章批注 + 临时笔记
   --------------------------------------------------------------------------
   功能：
     · 钢笔（红 / 黄 / 蓝）自由手绘
     · 文字批注（楷书 / 隶书 / 黑体 / 汉仪正圆）
     · 荧光笔（红 / 橙 / 黄 / 绿 / 青 / 蓝 / 紫）
     · 橡皮擦（删除批注）
     · 临时笔记（仅当前用户可见，自动保存）
   存储：
     localStorage 按 slug + 用户名隔离，刷新后自动还原
   挂载：
     window.Annotation.attach(slug, proseEl) 在文章渲染完成后调用
   ========================================================================== */
(function () {
  'use strict';

  /* ---------------- 常量 ---------------- */
  var PENS = [
    { id: 'pen-red',    name: '红钢笔', color: '#e74c3c', width: 2.5 },
    { id: 'pen-yellow', name: '黄钢笔', color: '#d4a017', width: 2.5 },
    { id: 'pen-blue',   name: '蓝钢笔', color: '#3b5bdb', width: 2.5 },
    { id: 'pen-black',  name: '黑钢笔', color: '#171c24', width: 2.5 }
  ];

  var TEXT_COLORS = [
    { id: 'txt-red',    name: '红', color: '#e74c3c' },
    { id: 'txt-blue',   name: '蓝', color: '#3b5bdb' },
    { id: 'txt-green',  name: '绿', color: '#27ae60' },
    { id: 'txt-purple', name: '紫', color: '#8e44ad' },
    { id: 'txt-black',  name: '黑', color: '#171c24' }
  ];

  var FONTS = [
    { id: 'font-kaiti',  name: '楷书',   family: 'KaiTi, STKaiti, "KaiTi_GB2312", "DFKai-SB", "TW-Kai", serif' },
    { id: 'font-lishu',  name: '隶书',   family: 'LiSu, "隶书", "STLiti", "TW-Li", serif' },
    { id: 'font-heiti',  name: '黑体',   family: 'SimHei, "黑体", "STHeiti", "Microsoft YaHei", sans-serif' },
    { id: 'font-hyzy',   name: '汉仪正圆', family: '"HYZhengYuan-55W", "汉仪正圆-55W", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif' }
  ];

  var HIGHLIGHTERS = [
    { id: 'hl-red',    name: '红', color: 'rgba(231, 76, 60, 0.32)', hex: '#e74c3c' },
    { id: 'hl-orange', name: '橙', color: 'rgba(230, 126, 34, 0.32)', hex: '#e67e22' },
    { id: 'hl-yellow', name: '黄', color: 'rgba(241, 196, 15, 0.35)', hex: '#f1c40f' },
    { id: 'hl-green',  name: '绿', color: 'rgba(39, 174, 96, 0.30)',  hex: '#27ae60' },
    { id: 'hl-cyan',   name: '青', color: 'rgba(26, 188, 156, 0.30)', hex: '#1abc9c' },
    { id: 'hl-blue',   name: '蓝', color: 'rgba(59, 91, 219, 0.28)',  hex: '#3b5bdb' },
    { id: 'hl-purple', name: '紫', color: 'rgba(142, 68, 173, 0.30)', hex: '#8e44ad' }
  ];

  /* ---------------- 状态 ---------------- */
  var state = {
    slug: '',
    prose: null,
    layer: null,        // 批注层容器
    svg: null,          // SVG 绘图区
    textBox: null,      // 文字批注容器
    toolbar: null,      // 工具栏 DOM
    panel: null,        // 临时笔记面板 DOM
    annotations: [],   // 已保存的批注列表
    activeTool: null,   // 当前选中的工具 id
    activeColorIdx: 0,  // 当前颜色索引
    activeFontIdx: 0,   // 当前字体索引
    strokeWidth: 2.5,       // 钢笔笔画粗细（由滑动条控制）
    highlighterWidth: 7.5,   // 荧光笔粗细（独立，起始为钢笔3倍）
    minimized: false,   // 工具栏是否最小化
    drawing: false,    // 是否正在绘制
    currentPath: null,  // 当前正在绘制的 SVG path
    currentPoints: [], // 当前路径的点
    tempNoteOpen: false
  };

  /* ---------------- 工具函数 ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function userId() {
    /* 取当前用户名做隔离；未登录则用 'guest' */
    try {
      var name = localStorage.getItem('fn-name') || '';
      return name || 'guest';
    } catch (e) { return 'guest'; }
  }

  function storageKey(kind) {
    /* kind: 'anno' | 'temp' */
    return 'fn-' + kind + '-' + state.slug + '-' + userId();
  }

  function loadAnnotations() {
    try {
      var arr = JSON.parse(localStorage.getItem(storageKey('anno')) || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }

  function saveAnnotations() {
    try {
      localStorage.setItem(storageKey('anno'), JSON.stringify(state.annotations));
    } catch (e) {}
  }

  function loadTempNotes() {
    try {
      var arr = JSON.parse(localStorage.getItem('fn-temp-' + userId()) || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }

  function saveTempNotes(notes) {
    try {
      localStorage.setItem('fn-temp-' + userId(), JSON.stringify(notes));
    } catch (e) {}
  }

  function genId() {
    return 'a-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6);
  }

  /* 获取指针位置相对于 prose 内容区的坐标 */
  function getPos(e) {
    var rect = state.prose.getBoundingClientRect();
    var cx = (e.touches && e.touches[0]) ? e.touches[0] : e;
    return {
      x: cx.clientX - rect.left + state.prose.scrollLeft,
      y: cx.clientY - rect.top + state.prose.scrollTop
    };
  }

  /* ---------------- 渲染批注 ---------------- */
  function clearLayer() {
    if (state.svg) state.svg.innerHTML = '';
    if (state.svgHl) state.svgHl.innerHTML = '';
    if (state.textBox) state.textBox.innerHTML = '';
  }

  function renderAll() {
    clearLayer();
    state.annotations.forEach(renderOne);
  }

  function renderOne(anno) {
    if (anno.type === 'pen' || anno.type === 'highlighter') {
      renderStroke(anno);
    } else if (anno.type === 'text') {
      renderText(anno);
    }
  }

  function renderStroke(anno) {
    var d = anno.data.points.map(function (p, i) {
      return (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1);
    }).join(' ');
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', anno.data.color);
    path.setAttribute('stroke-width', anno.data.width);
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('data-id', anno.id);
    path.style.pointerEvents = 'stroke';
    path.style.cursor = 'pointer';
    /* 荧光笔渲染到下层（正文下方），钢笔渲染到上层 */
    var targetSvg = (anno.type === 'highlighter') ? state.svgHl : state.svg;
    if (targetSvg) targetSvg.appendChild(path);
  }

  function renderText(anno) {
    var div = document.createElement('div');
    div.className = 'anno-text-item';
    div.setAttribute('data-id', anno.id);
    div.style.left = anno.x + 'px';
    div.style.top = anno.y + 'px';
    div.style.fontFamily = anno.data.font;
    div.style.color = anno.data.color;
    div.style.fontSize = (anno.data.fontSize || 18) + 'px';
    div.textContent = anno.data.text;
    div.title = '拖动移动 · 双击删除';

    /* 拖拽移动 */
    var dragging = false;
    var dragOffset = { x: 0, y: 0 };

    div.addEventListener('pointerdown', function (e) {
      /* 双击删除优先：双击时不进入拖拽 */
      if (e.detail === 2) return;
      dragging = true;
      div.setPointerCapture(e.pointerId);
      var rect = div.getBoundingClientRect();
      dragOffset.x = e.clientX - rect.left;
      dragOffset.y = e.clientY - rect.top;
      e.preventDefault();
      e.stopPropagation();
    });

    div.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      e.preventDefault();
      var proseRect = state.prose.getBoundingClientRect();
      var newX = e.clientX - proseRect.left - dragOffset.x;
      var newY = e.clientY - proseRect.top - dragOffset.y;
      div.style.left = newX + 'px';
      div.style.top = newY + 'px';
    });

    div.addEventListener('pointerup', function (e) {
      if (!dragging) return;
      dragging = false;
      div.releasePointerCapture(e.pointerId);
      /* 保存新位置 */
      anno.x = parseFloat(div.style.left) || 0;
      anno.y = parseFloat(div.style.top) || 0;
      saveAnnotations();
    });

    /* 双击删除 */
    div.addEventListener('dblclick', function (e) {
      e.stopPropagation();
      if (!window.confirm('删除这条文字批注？')) return;
      deleteAnno(anno.id);
    });

    state.textBox.appendChild(div);
  }

  function deleteAnno(id) {
    state.annotations = state.annotations.filter(function (a) { return a.id !== id; });
    saveAnnotations();
    renderAll();
  }

  /* ---------------- 工具栏 ---------------- */
  function buildToolbar() {
    var bar = document.createElement('div');
    bar.className = 'anno-toolbar';
    bar.id = 'annoToolbar';
    bar.innerHTML =
      '<div class="anno-tb-head">' +
      '  <span class="anno-tb-title">✏ 批注工具</span>' +
      '  <button type="button" class="anno-tb-btn anno-min-btn" data-tool="minimize" title="最小化">─</button>' +
      '</div>' +
      '<div class="anno-tb-body">' +
      '  <div class="anno-tb-row">' +
      '    <span class="anno-tb-label">钢笔</span>' +
      PENS.map(function (p, i) {
        return '<button type="button" class="anno-tb-btn anno-color-dot" data-tool="' + p.id + '" title="' + p.name + '" style="background:' + p.color + '"></button>';
      }).join('') +
      '  </div>' +
      '  <div class="anno-tb-row">' +
      '    <span class="anno-tb-label">荧光</span>' +
      HIGHLIGHTERS.map(function (h) {
        return '<button type="button" class="anno-tb-btn anno-color-dot" data-tool="' + h.id + '" title="' + h.name + '" style="background:' + h.hex + ';opacity:0.6"></button>';
      }).join('') +
      '  </div>' +
      '  <div class="anno-tb-row">' +
      '    <span class="anno-tb-label">文字</span>' +
      FONTS.map(function (f) {
        return '<button type="button" class="anno-tb-btn anno-font-btn" data-tool="' + f.id + '" data-font="' + f.id + '" title="' + f.name + '" style="font-family:' + f.family + '">' + f.name + '</button>';
      }).join('') +
      '  </div>' +
      '  <div class="anno-tb-row anno-tb-width-row">' +
      '    <span class="anno-tb-label">粗细</span>' +
      '    <input type="range" class="anno-width-slider" min="1" max="10" step="0.5" value="2.5" title="拖动调节笔画粗细">' +
      '    <span class="anno-width-val">2.5px</span>' +
      '  </div>' +
      '  <div class="anno-tb-row anno-tb-width-row anno-tb-hlwidth-row" style="display:none">' +
      '    <span class="anno-tb-label">荧光粗</span>' +
      '    <input type="range" class="anno-hlwidth-slider" min="3" max="20" step="0.5" value="7.5" title="拖动调节荧光笔粗细">' +
      '    <span class="anno-hlwidth-val">7.5px</span>' +
      '  </div>' +
      '  <div class="anno-tb-row">' +
      '    <button type="button" class="anno-tb-btn anno-action" data-tool="eraser" title="橡皮擦">🧽 擦除</button>' +
      '    <button type="button" class="anno-tb-btn anno-action" data-tool="none" title="退出批注模式">✕ 完成</button>' +
      '    <button type="button" class="anno-tb-btn anno-action anno-temp-btn" data-tool="tempnote" title="临时笔记">📝 临时笔记</button>' +
      '    <button type="button" class="anno-tb-btn anno-action anno-clear-btn" data-tool="clearall" title="清空本文所有批注">🗑 清空</button>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(bar);
    state.toolbar = bar;

    /* 滑动条事件 */
    var slider = bar.querySelector('.anno-width-slider');
    var valLabel = bar.querySelector('.anno-width-val');
    slider.addEventListener('input', function () {
      state.strokeWidth = Number(slider.value) || 2.5;
      valLabel.textContent = state.strokeWidth.toFixed(1) + 'px';
    });

    var hlSlider = bar.querySelector('.anno-hlwidth-slider');
    var hlValLabel = bar.querySelector('.anno-hlwidth-val');
    hlSlider.addEventListener('input', function () {
      state.highlighterWidth = Number(hlSlider.value) || 7.5;
      hlValLabel.textContent = state.highlighterWidth.toFixed(1) + 'px';
    });

    bar.addEventListener('click', function (e) {
      /* 最小化按钮 */
      var minBtn = e.target.closest('[data-tool="minimize"]');
      if (minBtn) {
        toggleMinimize();
        return;
      }

      var btn = e.target.closest('[data-tool]');
      if (!btn) return;
      var tool = btn.getAttribute('data-tool');

      if (tool === 'clearall') {
        if (!state.annotations.length) return;
        if (!window.confirm('确定清空本文（' + state.annotations.length + '条）所有批注？此操作不可恢复。')) return;
        state.annotations = [];
        saveAnnotations();
        renderAll();
        return;
      }
      if (tool === 'tempnote') {
        toggleTempPanel();
        return;
      }
      if (tool === 'none') {
        handleFinish();
        return;
      }
      setActiveTool(tool);
    });
  }

  /* 点击"完成"：询问是否保存，是则保留批注，否则清空 */
  function handleFinish() {
    /* 临时笔记面板未关闭时先关闭（避免遮挡） */
    closeTempPanel();

    /* 没有任何批注直接退出 */
    if (!state.annotations.length) {
      setActiveTool(null);
      return;
    }

    var msg = '是否保存本次批注的更改？\n\n' +
      '· 点击「是」：保存所有批注，下次进入仍可继续编辑\n' +
      '· 点击「否」：退出批注模式，保留当前批注不做更改';

    var save = window.confirm(msg);
    if (save) {
      /* 是：已在每次绘制时实时保存，无需额外操作 */
      setActiveTool(null);
    } else {
      /* 否：保持原样退出，不清空已有批注 */
      setActiveTool(null);
    }
  }

  function toggleMinimize() {
    state.minimized = !state.minimized;
    if (!state.toolbar) return;
    var body = state.toolbar.querySelector('.anno-tb-body');
    var minBtn = state.toolbar.querySelector('.anno-min-btn');
    if (state.minimized) {
      if (body) body.style.display = 'none';
      if (minBtn) minBtn.textContent = '▢';
    } else {
      if (body) body.style.display = '';
      if (minBtn) minBtn.textContent = '─';
    }
  }

  function setActiveTool(toolId) {
    state.activeTool = toolId;
    /* 高亮当前按钮 */
    if (state.toolbar) {
      state.toolbar.querySelectorAll('.anno-tb-btn').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-tool') === toolId);
      });
      /* 根据工具类型显示对应粗细滑动条 */
      var hlRow = state.toolbar.querySelector('.anno-tb-hlwidth-row');
      var penRow = state.toolbar.querySelector('.anno-tb-width-row:not(.anno-tb-hlwidth-row)');
      var isHl = toolId && toolId.indexOf('hl-') === 0;
      if (hlRow) hlRow.style.display = isHl ? '' : 'none';
      if (penRow) penRow.style.display = isHl ? 'none' : '';
    }
    /* 切换 prose 指针样式 */
    if (!state.prose) return;
    if (!toolId) {
      state.prose.style.cursor = '';
      state.prose.classList.remove('anno-drawing-mode');
      return;
    }
    state.prose.classList.add('anno-drawing-mode');
    if (toolId === 'eraser') {
      state.prose.style.cursor = 'crosshair';
    } else if (toolId && toolId.indexOf('font-') === 0) {
      state.prose.style.cursor = 'text';
    } else {
      state.prose.style.cursor = 'crosshair';
    }
  }

  /* ---------------- 绘图交互 ---------------- */
  function onPointerDown(e) {
    var tool = state.activeTool;
    if (!tool) return;

    /* 橡皮擦模式：点击已有批注则删除 */
    if (tool === 'eraser') {
      var hit = e.target.closest('[data-id]');
      if (hit) {
        var id = hit.getAttribute('data-id');
        if (id) deleteAnno(id);
      }
      return;
    }

    /* 文字批注模式：弹出输入框 */
    if (tool.indexOf('font-') === 0) {
      var pos = getPos(e);
      openTextDialog(pos, tool);
      return;
    }

    /* 钢笔 / 荧光笔：开始绘制 */
    var penDef = findPen(tool);
    var hlDef = findHighlighter(tool);
    var strokeDef = penDef || hlDef;
    if (!strokeDef) return;

    e.preventDefault();
    state.drawing = true;
    state.currentPoints = [];
    var p = getPos(e);
    state.currentPoints.push([p.x, p.y]);

    /* 创建临时 path */
    var isHighlighter = !!hlDef;
    var curWidth = isHighlighter ? state.highlighterWidth : state.strokeWidth;
    state.currentPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    state.currentPath.setAttribute('fill', 'none');
    state.currentPath.setAttribute('stroke', strokeDef.color);
    state.currentPath.setAttribute('stroke-width', curWidth);
    state.currentPath.setAttribute('stroke-linecap', 'round');
    state.currentPath.setAttribute('stroke-linejoin', 'round');
    /* 荧光笔画到下层 SVG，钢笔画到上层 SVG */
    var targetSvg = isHighlighter ? state.svgHl : state.svg;
    if (targetSvg) targetSvg.appendChild(state.currentPath);
  }

  function onPointerMove(e) {
    if (!state.drawing || !state.currentPath) return;
    e.preventDefault();
    var p = getPos(e);
    state.currentPoints.push([p.x, p.y]);
    var d = state.currentPoints.map(function (pt, i) {
      return (i === 0 ? 'M' : 'L') + pt[0].toFixed(1) + ',' + pt[1].toFixed(1);
    }).join(' ');
    state.currentPath.setAttribute('d', d);
  }

  function onPointerUp(e) {
    if (!state.drawing) return;
    e.preventDefault();
    state.drawing = false;

    var tool = state.activeTool;
    var penDef = findPen(tool);
    var hlDef = findHighlighter(tool);
    var strokeDef = penDef || hlDef;
    if (!strokeDef) { state.currentPath = null; return; }

    /* 太短的点（< 3px）视为误触，不保存 */
    if (state.currentPoints.length < 2) {
      if (state.currentPath) state.currentPath.remove();
      state.currentPath = null;
      state.currentPoints = [];
      return;
    }

    var anno = {
      id: genId(),
      type: penDef ? 'pen' : 'highlighter',
      x: 0, y: 0,
      data: {
        points: state.currentPoints,
        color: strokeDef.color,
        width: penDef ? state.strokeWidth : state.highlighterWidth
      },
      createdAt: Date.now()
    };
    state.annotations.push(anno);
    saveAnnotations();
    /* 把临时 path 转成正式渲染（其实已经在 svg 里了，只需补上 data-id） */
    if (state.currentPath) {
      state.currentPath.setAttribute('data-id', anno.id);
      state.currentPath.style.pointerEvents = 'stroke';
      state.currentPath.style.cursor = 'pointer';
    }
    state.currentPath = null;
    state.currentPoints = [];
  }

  function findPen(toolId) {
    for (var i = 0; i < PENS.length; i++) if (PENS[i].id === toolId) return PENS[i];
    return null;
  }
  function findHighlighter(toolId) {
    for (var i = 0; i < HIGHLIGHTERS.length; i++) if (HIGHLIGHTERS[i].id === toolId) return HIGHLIGHTERS[i];
    return null;
  }
  function findFont(fontId) {
    for (var i = 0; i < FONTS.length; i++) if (FONTS[i].id === fontId) return FONTS[i];
    return null;
  }

  /* ---------------- 文字批注弹窗 ---------------- */
  function openTextDialog(pos, fontToolId) {
    var fontDef = findFont(fontToolId) || FONTS[0];
    var mask = document.createElement('div');
    mask.className = 'anno-text-mask';
    mask.innerHTML =
      '<div class="anno-text-dialog">' +
      '  <div class="atd-head"><b>添加文字批注</b><span class="atd-close">×</span></div>' +
      '  <textarea class="atd-input" rows="3" placeholder="输入批注文字…" autofocus></textarea>' +
      '  <div class="atd-row"><span class="atd-label">字体</span>' +
      FONTS.map(function (f) {
        return '<button type="button" class="atd-font-btn' + (f.id === fontDef.id ? ' on' : '') + '" data-font="' + f.id + '" style="font-family:' + f.family + '">' + f.name + '</button>';
      }).join('') +
      '</div>' +
      '  <div class="atd-row"><span class="atd-label">颜色</span>' +
      TEXT_COLORS.map(function (c) {
        return '<button type="button" class="atd-color-dot" data-color="' + c.color + '" title="' + c.name + '" style="background:' + c.color + '"></button>';
      }).join('') +
      '</div>' +
      '  <div class="atd-row"><span class="atd-label">字号</span>' +
      '<input type="range" class="atd-size" min="14" max="32" value="18"></div>' +
      '  <div class="atd-foot"><button type="button" class="btn ghost atd-cancel">取消</button>' +
      '<button type="button" class="btn primary atd-ok">添加</button></div>' +
      '</div>';
    document.body.appendChild(mask);

    var input = mask.querySelector('.atd-input');
    var sizeRange = mask.querySelector('.atd-size');
    var selFont = fontDef;
    var selColor = TEXT_COLORS[0].color;

    /* 字体切换 */
    mask.querySelectorAll('.atd-font-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        mask.querySelectorAll('.atd-font-btn').forEach(function (b) { b.classList.remove('on'); });
        btn.classList.add('on');
        selFont = findFont(btn.getAttribute('data-font')) || FONTS[0];
      });
    });
    /* 颜色切换 */
    mask.querySelectorAll('.atd-color-dot').forEach(function (btn) {
      btn.addEventListener('click', function () {
        mask.querySelectorAll('.atd-color-dot').forEach(function (b) { b.classList.remove('on'); });
        btn.classList.add('on');
        selColor = btn.getAttribute('data-color');
      });
    });

    var close = function () { mask.remove(); };
    mask.querySelector('.atd-close').addEventListener('click', close);
    mask.querySelector('.atd-cancel').addEventListener('click', close);
    mask.addEventListener('mousedown', function (e) { if (e.target === mask) close(); });

    var ok = function () {
      var text = input.value.trim();
      if (!text) { close(); setActiveTool(null); return; }
      var anno = {
        id: genId(),
        type: 'text',
        x: pos.x, y: pos.y,
        data: {
          text: text,
          font: selFont.family,
          color: selColor,
          fontSize: Number(sizeRange.value) || 18
        },
        createdAt: Date.now()
      };
      state.annotations.push(anno);
      saveAnnotations();
      renderOne(anno);
      close();
      /* 创建完成后退出文字模式，避免后续点击批注文字时再次弹出输入框 */
      setActiveTool(null);
    };
    mask.querySelector('.atd-ok').addEventListener('click', ok);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) ok();
    });
    setTimeout(function () { input.focus(); }, 50);
  }

  /* ---------------- 临时笔记面板 ---------------- */
  function toggleTempPanel() {
    if (state.tempNoteOpen) { closeTempPanel(); return; }
    openTempPanel();
  }

  function openTempPanel() {
    closeTempPanel(); /* 先移除旧面板，防止叠加 */
    state.tempNoteOpen = true;
    var panel = document.createElement('div');
    panel.className = 'anno-temp-panel';
    var notes = loadTempNotes();
    /* 当前文章的笔记 */
    var myNotes = notes.filter(function (n) { return n.slug === state.slug; });
    panel.innerHTML =
      '<div class="atp-head"><b>📝 临时笔记</b>' +
      '<span class="atp-hint">仅你可见 · 自动保存</span>' +
      '<span class="atp-close">×</span></div>' +
      '<div class="atp-body">' +
      (myNotes.length
        ? myNotes.map(function (n) {
            var d = new Date(n.updatedAt || n.createdAt);
            var dateStr = (d.getMonth() + 1) + '/' + d.getDate() + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
            return '<div class="atp-note" data-id="' + n.id + '">' +
              '<div class="atp-note-meta">' + dateStr +
              '  <button type="button" class="atp-note-del" data-del="' + n.id + '">删除</button></div>' +
              '<div class="atp-note-content">' + esc(n.content) + '</div>' +
              '</div>';
          }).join('')
        : '<div class="atp-empty">还没有本文的临时笔记。<br>在下方输入框写点什么吧～</div>') +
      '</div>' +
      '<div class="atp-editor">' +
      '<textarea class="atp-input" placeholder="为这篇笔记写点临时想法（自动保存）…" rows="4"></textarea>' +
      '</div>';
    document.body.appendChild(panel);
    state.panel = panel;

    var close = function () { closeTempPanel(); };
    panel.querySelector('.atp-close').addEventListener('click', close);

    /* 删除单条笔记 */
    panel.querySelector('.atp-body').addEventListener('click', function (e) {
      var delBtn = e.target.closest('[data-del]');
      if (!delBtn) return;
      var id = delBtn.getAttribute('data-del');
      var all = loadTempNotes();
      all = all.filter(function (n) { return n.id !== id; });
      saveTempNotes(all);
      closeTempPanel(); /* 先移除旧面板 */
      openTempPanel();  /* 重新打开刷新 */
    });

    /* 自动保存（防抖 800ms） */
    var input = panel.querySelector('.atp-input');
    var timer = null;
    var statusEl = null;
    input.addEventListener('input', function () {
      clearTimeout(timer);
      if (!statusEl) {
        statusEl = document.createElement('div');
        statusEl.className = 'atp-save-status';
        panel.querySelector('.atp-editor').appendChild(statusEl);
      }
      statusEl.textContent = '正在输入…';
      timer = setTimeout(function () {
        var all = loadTempNotes();
        all.push({
          id: genId(),
          slug: state.slug,
          content: input.value,
          createdAt: Date.now(),
          updatedAt: Date.now()
        });
        saveTempNotes(all);
        statusEl.textContent = '✓ 已保存 ' + new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
        input.value = '';
      }, 800);
    });
  }

  function closeTempPanel() {
    state.tempNoteOpen = false;
    if (state.panel) { state.panel.remove(); state.panel = null; }
  }

  /* ---------------- 挂载 / 卸载 ---------------- */
  function attach(slug, proseEl) {
    detach(); /* 先清旧的 */
    if (!slug || !proseEl) return;
    state.slug = slug;
    state.prose = proseEl;
    state.annotations = loadAnnotations();

    /* prose 需要相对定位，批注层才能对齐 */
    proseEl.style.position = 'relative';

    /* 创建批注层：荧光笔在正文下方，钢笔+文字在上方 */
    var layer = document.createElement('div');
    layer.className = 'anno-layer';
    layer.innerHTML =
      '<svg class="anno-svg anno-svg-hl" xmlns="http://www.w3.org/2000/svg"></svg>' +
      '<svg class="anno-svg anno-svg-pen" xmlns="http://www.w3.org/2000/svg"></svg>' +
      '<div class="anno-textbox"></div>';
    proseEl.appendChild(layer);
    state.layer = layer;
    state.svgHl = layer.querySelector('.anno-svg-hl');
    state.svg = layer.querySelector('.anno-svg-pen');
    state.textBox = layer.querySelector('.anno-textbox');

    renderAll();
    buildToolbar();

    /* 绑定指针事件 */
    proseEl.addEventListener('pointerdown', onPointerDown);
    proseEl.addEventListener('pointermove', onPointerMove);
    proseEl.addEventListener('pointerup', onPointerUp);
    proseEl.addEventListener('pointerleave', onPointerUp);
  }

  function detach() {
    if (state.layer) { state.layer.remove(); state.layer = null; }
    if (state.toolbar) { state.toolbar.remove(); state.toolbar = null; }
    closeTempPanel();
    if (state.prose) {
      state.prose.removeEventListener('pointerdown', onPointerDown);
      state.prose.removeEventListener('pointermove', onPointerMove);
      state.prose.removeEventListener('pointerup', onPointerUp);
      state.prose.removeEventListener('pointerleave', onPointerUp);
      state.prose.style.cursor = '';
      state.prose.classList.remove('anno-drawing-mode');
      state.prose = null;
    }
    state.slug = '';
    state.annotations = [];
    state.activeTool = null;
  }

  /* 暴露给外部 */
  window.Annotation = {
    attach: attach,
    detach: detach
  };
})();
