/* ============================================================
   <granado-chart-line>
   Gráfico de LINHAS (SVG, Light DOM) — mesma ideia do
   <granado-chart-bar>. Suporta linha, área, área empilhada e
   área empilhada 100%, com legenda, grade, tooltip, rótulos,
   pontos, animação, meta global e exportação PNG/CSV.

   ── Atributos / propriedades
     data        - JSON array de objetos (em JS use .data). Ex.:
                   [{ month:'Jan', sales:120 }, { month:'Fev', sales:180 }]
                   Categorias (x-field) repetidas são SOMADAS.
     type        - 'line' (default) | 'area' | 'stacked' | 'stacked100'
     x-field     - chave do eixo de categorias. Em JS .xField
     y-fields    - array de séries (em JS .yFields). Cada série:
                     { field, label?, color?, formatter?(v)->str,
                       tooltipFormatter?(ctx)->html|string(JS), sort?,
                       opacity?, lineWidth?, dashed?, showDots?, smooth?, area? }
     x2-field    - 2º agrupador (série p/ formato longo). Em JS .x2Field
     overall-target - meta única (linha de referência). Em JS .overallTarget
     title, show-legend, show-grid, show-values, show-tooltip,
     animated, show-export, export-position, height, width
                   — iguais ao <granado-chart-bar>.

   ── Evento
     "point-click" -> detail {
                        index, category, series, field, value, color,
                        categoryValues, selected }
     Ao clicar num ponto, a série fica destacada e as demais esmaecem;
     clicar de novo na mesma série volta tudo ao normal (toggle).

   ── Exportação (métodos JS)
     el.exportPNG(filename?, scale?)   // imagem .png (com título + legenda)
     el.exportCSV(filename?)           // dados em tabela (.csv, ; + BOM)

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-chart-line.js"></script>
   <script>
     var c = document.querySelector('granado-chart-line');
     c.xField = 'month';
     c.yFields = [{ field:'sales', label:'Vendas' }];
     c.data = [{ month:'Jan', sales:120 }, { month:'Fev', sales:180 }];
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-chart-line')) {
  // Paleta categórica GRANADO (validada em dataviz sobre #FDFAF1), ordem fixa.
  const PALETTE = ['#1F7A3D', '#2F6FB0', '#9A7520', '#B5342F', '#7A5CA8', '#C8A85A'];
  const SURFACE = '#FDFAF1';
  const GRID = '#E7DFC7';
  const AXIS = '#BFB172';
  const TEXT = '#1A1A1A';
  const TEXT2 = '#555555';
  const TEXT3 = '#8A8575';
  const FONT = "'Poppins',sans-serif";
  const MONO = "'Arial',Helvetica,sans-serif";
  const NF = new Intl.NumberFormat('pt-BR');
  let UID = 0;

  class GranadoChartLine extends HTMLElement {
    static get observedAttributes() {
      return ['data', 'type', 'x-field', 'y-fields', 'x2-field', 'overall-target', 'title', 'show-legend', 'show-grid', 'show-values', 'show-tooltip', 'animated', 'show-export', 'export-position', 'height', 'width'];
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      ['data', 'yFields'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });
      if (typeof ResizeObserver !== 'undefined') {
        this._ro = new ResizeObserver(() => { const w = this.clientWidth; if (w && w !== this._lastW) this._render(); });
        this._ro.observe(this);
      }
      this._render();
    }
    disconnectedCallback() { if (this._ro) { this._ro.disconnect(); this._ro = null; } this._removeTip(); }
    attributeChangedCallback(name) {
      if (name === 'data') this._dataArr = null;
      if (name === 'y-fields') this._yArr = null;
      if (name === 'overall-target') this._otSet = false;
      if (['data', 'y-fields', 'x-field', 'x2-field', 'type'].indexOf(name) !== -1) this._selected = null;
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get data() { if (this._dataArr && Array.isArray(this._dataArr)) return this._dataArr; return this._parseArr(this.getAttribute('data')); }
    set data(v) { if (typeof v === 'string') { this.setAttribute('data', v); this._dataArr = null; } else { this._dataArr = Array.isArray(v) ? v : []; } this._selected = null; if (this.isConnected) this._render(); }
    get yFields() { if (this._yArr && Array.isArray(this._yArr)) return this._yArr; return this._parseArr(this.getAttribute('y-fields')); }
    set yFields(v) { if (typeof v === 'string') { this.setAttribute('y-fields', v); this._yArr = null; } else { this._yArr = Array.isArray(v) ? v : []; } this._selected = null; if (this.isConnected) this._render(); }

    get type() { return this.getAttribute('type') || 'line'; }
    set type(v) { this.setAttribute('type', String(v)); }
    get xField() { return this.getAttribute('x-field') || ''; }
    set xField(v) { this.setAttribute('x-field', String(v)); }
    get x2Field() { return this.getAttribute('x2-field') || ''; }
    set x2Field(v) { this.setAttribute('x2-field', String(v)); }

    get overallTarget() { if (this._otSet) return this._ot; const s = this.getAttribute('overall-target'); if (s == null || s === '') return null; try { return JSON.parse(s); } catch (e) { return s; } }
    set overallTarget(v) { if (typeof v === 'string') { this.setAttribute('overall-target', v); this._otSet = false; } else { this._ot = v; this._otSet = true; } if (this.isConnected) this._render(); }

    get showLegend() { return this.getAttribute('show-legend') !== 'false'; }
    set showLegend(v) { this.setAttribute('show-legend', v ? 'true' : 'false'); }
    get showGrid() { return this.getAttribute('show-grid') !== 'false'; }
    set showGrid(v) { this.setAttribute('show-grid', v ? 'true' : 'false'); }
    get showValues() { return this.getAttribute('show-values') === 'true'; }
    set showValues(v) { this.setAttribute('show-values', v ? 'true' : 'false'); }
    get showTooltip() { return this.getAttribute('show-tooltip') !== 'false'; }
    set showTooltip(v) { this.setAttribute('show-tooltip', v ? 'true' : 'false'); }
    get animated() { return this.getAttribute('animated') !== 'false'; }
    set animated(v) { this.setAttribute('animated', v ? 'true' : 'false'); }
    get showExport() { return this.getAttribute('show-export') !== 'false'; }
    set showExport(v) { this.setAttribute('show-export', v ? 'true' : 'false'); }
    get exportPosition() { const p = (this.getAttribute('export-position') || '').toLowerCase(); return ['top-right', 'top-left', 'bottom-right', 'bottom-left'].indexOf(p) !== -1 ? p : 'top-right'; }
    set exportPosition(v) { this.setAttribute('export-position', String(v)); }
    get height() { return Math.max(120, parseInt(this.getAttribute('height'), 10) || 320); }
    set height(v) { this.setAttribute('height', String(v)); }

    // ------------------------------------------------------------
    // Utils
    // ------------------------------------------------------------
    _parseArr(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch])); }
    _num(v) { const n = Number(v); return isFinite(n) ? n : 0; }
    _sumBy(data, xf, cat, field) { let s = 0; for (let i = 0; i < data.length; i++) { if (String(data[i][xf]) === cat) s += this._num(data[i][field]); } return s; }
    _fmt(v, yf) { if (yf && typeof yf.formatter === 'function') { try { return String(yf.formatter(v)); } catch (e) { /* */ } } return NF.format(v); }
    _widthPx() { const w = this.getAttribute('width'); if (w != null && /^\d+$/.test(String(w).trim())) return parseInt(w, 10); return Math.max(240, this.clientWidth || 640); }
    _niceMax(v) { if (v <= 0) return 1; const exp = Math.floor(Math.log(v) / Math.LN10); const mag = Math.pow(10, exp); const f = v / mag; const nice = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10; return nice * mag; }
    _targets() {
      const raw = this.overallTarget; if (raw == null || raw === '') return [];
      const arr = Array.isArray(raw) ? raw : [raw];
      return arr.map((t) => { if (t == null) return null; if (typeof t === 'number' || typeof t === 'string') { const v = Number(t); return isFinite(v) ? { value: v } : null; } if (typeof t === 'object' && t.value != null && isFinite(Number(t.value))) return t; return null; }).filter(Boolean);
    }

    // ------------------------------------------------------------
    // Modelo
    // ------------------------------------------------------------
    _model() {
      const data = this.data || [];
      const xf = this.xField, type = this.type, gf = this.x2Field;
      let yFields = (this.yFields || []).slice();
      const cats = [];
      data.forEach((r) => { const k = String(r[xf]); if (cats.indexOf(k) === -1) cats.push(k); });

      let series = [];
      if (gf) {
        const vf = (yFields[0] && yFields[0].field) || 'value';
        const groups = [];
        data.forEach((r) => { const g = String(r[gf]); if (groups.indexOf(g) === -1) groups.push(g); });
        series = groups.map((g) => ({ key: g, label: g, values: cats.map((c) => { let s = 0; data.forEach((r) => { if (String(r[xf]) === c && String(r[gf]) === g) s += this._num(r[vf]); }); return s; }) }));
      } else {
        yFields.sort((a, b) => (a.sort == null ? 0 : a.sort) - (b.sort == null ? 0 : b.sort));
        series = yFields.map((yf) => ({
          key: yf.field, label: yf.label || yf.field, color: yf.color, opacity: yf.opacity,
          lineWidth: yf.lineWidth, dashed: yf.dashed, showDots: yf.showDots, smooth: yf.smooth, area: yf.area,
          formatter: yf.formatter, tooltipFormatter: yf.tooltipFormatter, yf: yf,
          values: cats.map((c) => this._sumBy(data, xf, c, yf.field))
        }));
      }
      series.forEach((s, i) => { if (!s.color) s.color = PALETTE[i % PALETTE.length]; });
      return { cats, series, type };
    }

    _domain(cats, series, type) {
      if (type === 'stacked100') return { min: 0, max: 100 };
      let max = 0, min = 0;
      if (type === 'stacked') { cats.forEach((c, ci) => { let sum = 0; series.forEach((s) => { sum += this._num(s.values[ci]); }); if (sum > max) max = sum; }); }
      else { series.forEach((s) => (s.values || []).forEach((v) => { const n = this._num(v); if (n > max) max = n; if (n < min) min = n; })); }
      this._targets().forEach((t) => { const v = this._num(t.value); if (v > max) max = v; if (v < min) min = v; });
      const niceMax = this._niceMax(max || 1);
      const niceMin = min < 0 ? -this._niceMax(-min) : 0;
      return { min: niceMin, max: niceMax };
    }
    _ticks(min, max) { const out = []; const steps = 4; const step = ((max - min) || 1) / steps; for (let i = 0; i <= steps; i++) out.push(min + step * i); return out; }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------
    _render() {
      const W = this._widthPx(), H = this.height;
      this._lastW = this.clientWidth;
      const model = this._model();
      const cats = model.cats, series = model.series, type = model.type;

      const title = this.getAttribute('title') || '';
      const titleHTML = title ? `<div style="font:700 14px/1.3 ${FONT};color:#0F3319;margin-bottom:8px">${this._esc(title)}</div>` : '';
      const multi = series.length > 1;
      const legendHTML = (this.showLegend && multi)
        ? `<div style="display:flex;flex-wrap:wrap;gap:10px 16px;margin-top:10px;justify-content:center">` +
            series.map((s) => `<span style="display:inline-flex;align-items:center;gap:6px;font:600 11px/1.4 ${FONT};color:${TEXT2}"><span style="width:14px;height:3px;border-radius:2px;background:${s.color};flex-shrink:0"></span>${this._esc(s.label)}</span>`).join('') +
          `</div>` : '';

      const svg = (cats.length && series.length)
        ? this._svg(W, H, cats, series, type)
        : `<div style="height:${H}px;display:flex;align-items:center;justify-content:center;border:1px dashed ${AXIS};border-radius:10px;color:${TEXT3};font:12px/1.5 ${FONT}">Sem dados para exibir. Defina data, x-field e y-fields.</div>`;

      const expBtn = `background:#FDFAF1;border:1px solid ${AXIS};border-radius:6px;padding:3px 8px;cursor:pointer;font:700 10px/1.4 ${FONT};color:${TEXT2}`;
      const ep = this.exportPosition;
      const expPos = (ep.indexOf('bottom') === 0 ? 'bottom:6px;' : 'top:6px;') + (ep.indexOf('left') !== -1 ? 'left:6px;' : 'right:6px;');
      const exportHTML = this.showExport
        ? `<div style="position:absolute;${expPos}display:flex;gap:6px;z-index:4">` +
            `<button type="button" data-exp="png" title="Baixar imagem PNG" style="${expBtn}">⬇ PNG</button>` +
            `<button type="button" data-exp="csv" title="Baixar dados (CSV)" style="${expBtn}">⬇ CSV</button>` +
          `</div>` : '';

      this.innerHTML =
        `<div style="width:100%;box-sizing:border-box;font-family:${FONT};color:${TEXT}">` +
          titleHTML +
          `<div data-role="plot" style="position:relative;width:100%">${svg}${exportHTML}</div>` +
          legendHTML +
        `</div>`;

      this._bind(cats, series, type);
      if (this.animated) this._animate();
      this._applySelection();
    }

    _svg(W, H, cats, series, type) {
      const mTop = 10, mRight = 14, mLeft = 48, mBottom = 34;
      const pw = Math.max(10, W - mLeft - mRight), ph = Math.max(10, H - mTop - mBottom);
      const dom = this._domain(cats, series, type);
      const vMin = dom.min, vMax = dom.max;
      const ticks = this._ticks(vMin, vMax);
      const vp = (v) => mTop + ph - ((v - vMin) / (vMax - vMin || 1)) * ph;
      const n = cats.length;
      const band = pw / n;
      const xc = (ci) => mLeft + (n === 1 ? pw / 2 : ci * band + band / 2);

      // grade + eixo
      let gfx = '';
      if (this.showGrid) {
        ticks.forEach((tk) => { const y = vp(tk); gfx += `<line x1="${mLeft}" y1="${y}" x2="${mLeft + pw}" y2="${y}" stroke="${GRID}" stroke-width="1"/><text x="${mLeft - 8}" y="${y + 3}" text-anchor="end" font-family="${MONO}" font-size="10" fill="${TEXT3}">${NF.format(tk)}</text>`; });
      }
      const base0 = vp(vMin < 0 && vMax > 0 ? 0 : vMin);
      gfx += `<line x1="${mLeft}" y1="${base0}" x2="${mLeft + pw}" y2="${base0}" stroke="${AXIS}" stroke-width="1.5"/>`;

      // rótulos de categoria
      let catLbl = '';
      cats.forEach((cat, ci) => { catLbl += `<text x="${xc(ci).toFixed(1)}" y="${(mTop + ph + 16)}" text-anchor="middle" font-family="${FONT}" font-size="10.5" fill="${TEXT2}">${this._esc(this._trunc(cat, band))}</text>`; });

      // pontos por série (com empilhamento se preciso)
      const stacked = (type === 'stacked' || type === 'stacked100');
      const areaMode = (type === 'area' || stacked);
      const cum = cats.map(() => (vMin < 0 ? 0 : vMin));   // base acumulada por categoria
      const marks = [];   // pontos (hover/click)
      let areasSvg = '', linesSvg = '', dotsSvg = '', hitSvg = '', valsSvg = '';

      series.forEach((s, si) => {
        const isArea = areaMode || s.area;
        const color = s.color;
        const op = (s.opacity != null) ? s.opacity : 1;
        const lw = (s.lineWidth != null) ? s.lineWidth : 2.5;
        const dash = s.dashed ? ' stroke-dasharray="6 4"' : '';
        const top = [], baseLine = [];
        cats.forEach((cat, ci) => {
          let val = this._num(s.values[ci]);
          let shown = val, y, yBase;
          if (stacked) {
            const total = type === 'stacked100' ? (series.reduce((a, ss) => a + this._num(ss.values[ci]), 0) || 1) : 1;
            const add = type === 'stacked100' ? (val / total) * 100 : val;
            const b = cum[ci]; const t = b + add; cum[ci] = t;
            yBase = vp(b); y = vp(t); shown = type === 'stacked100' ? add : val;
          } else { y = vp(val); yBase = base0; }
          const x = xc(ci);
          top.push({ x: x, y: y }); baseLine.push({ x: x, y: yBase });
          marks.push({ x: x, y: y, sIdx: si, catIdx: ci, color: color, value: val, shown: shown, label: this._fmt(val, s.yf), tip: this._tip(s, cat, val, ci, type === 'stacked100' ? shown : null) });
        });

        const topD = s.smooth ? this._smooth(top) : this._poly(top);
        if (isArea) {
          const baseD = s.smooth ? this._smooth(baseLine.slice().reverse()) : this._poly(baseLine.slice().reverse());
          const areaD = topD + ' L ' + baseLine[baseLine.length - 1].x.toFixed(1) + ' ' + baseLine[baseLine.length - 1].y.toFixed(1) + ' ' + baseD.replace(/^M/, 'L') + ' Z';
          areasSvg += `<path data-role="serie" data-si="${si}" d="${areaD}" fill="${color}" fill-opacity="${(stacked ? 0.85 : 0.18) * op}" stroke="none"></path>`;
        }
        linesSvg += `<path data-role="serie" data-si="${si}" d="${topD}" fill="none" stroke="${color}" stroke-opacity="${op}" stroke-width="${lw}"${dash} stroke-linecap="round" stroke-linejoin="round"></path>`;
        // pontos visíveis
        if (s.showDots !== false) {
          top.forEach((p) => { dotsSvg += `<circle data-role="serie" data-si="${si}" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.4" fill="#FDFAF1" stroke="${color}" stroke-opacity="${op}" stroke-width="2"></circle>`; });
        }
      });

      // hit targets + rótulos de valor
      marks.forEach((m, i) => {
        hitSvg += `<circle data-role="pt" data-i="${i}" cx="${m.x.toFixed(1)}" cy="${m.y.toFixed(1)}" r="11" fill="transparent" style="cursor:pointer"></circle>`;
      });
      if (this.showValues) {
        marks.forEach((m) => { valsSvg += `<text x="${m.x.toFixed(1)}" y="${(m.y - 8).toFixed(1)}" text-anchor="middle" font-family="${MONO}" font-size="10" fill="${TEXT2}">${this._esc(m.label)}</text>`; });
      }

      const tgt = this._targetsSvg(vp, mLeft, pw);

      this._marks = marks;
      // grupo animável (clip-reveal) contém áreas/linhas/pontos
      const uid = 'gcl' + (++UID);
      const clip = this.animated ? `clip-path="url(#${uid})"` : '';
      const defs = this.animated ? `<defs><clipPath id="${uid}"><rect data-role="reveal" x="${mLeft}" y="0" width="${pw}" height="${H}"></rect></clipPath></defs>` : '';

      return `<svg data-role="svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="display:block;width:100%;height:${H}px;overflow:visible">` +
        defs + gfx + catLbl +
        `<g ${clip}>` + areasSvg + linesSvg + dotsSvg + `</g>` +
        tgt + valsSvg + hitSvg +
        `</svg>`;
    }

    _poly(pts) { return pts.map((p, i) => (i === 0 ? 'M ' : 'L ') + p.x.toFixed(1) + ' ' + p.y.toFixed(1)).join(' '); }
    _smooth(pts) {
      if (pts.length < 3) return this._poly(pts);
      let d = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
        const c1x = p1.x + (p2.x - p0.x) / 6, c1y = p1.y + (p2.y - p0.y) / 6;
        const c2x = p2.x - (p3.x - p1.x) / 6, c2y = p2.y - (p3.y - p1.y) / 6;
        d += ' C ' + c1x.toFixed(1) + ' ' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ' ' + p2.x.toFixed(1) + ' ' + p2.y.toFixed(1);
      }
      return d;
    }
    _trunc(s, band) { const max = Math.max(3, Math.floor(band / 6.5)); s = String(s); return s.length > max ? s.slice(0, max - 1) + '…' : s; }

    _targetsSvg(vp, mLeft, pw) {
      const ts = this._targets(); if (!ts.length) return ''; let out = '';
      ts.forEach((t) => {
        const v = this._num(t.value), color = t.color || '#8C1A1A';
        const dash = (t.dashed === false) ? '' : ' stroke-dasharray="6 4"';
        const y = vp(v);
        out += `<line x1="${mLeft}" y1="${y.toFixed(1)}" x2="${(mLeft + pw).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${color}" stroke-width="2"${dash}/>`;
        if (t.showValue !== false) out += `<text x="${(mLeft + pw - 3).toFixed(1)}" y="${(y - 4).toFixed(1)}" text-anchor="end" font-family="${FONT}" font-size="10" font-weight="700" fill="${color}">${this._esc(t.label != null ? t.label : NF.format(v))}</text>`;
      });
      return out;
    }

    _tip(s, cat, val, ci, pct) {
      if (typeof s.tooltipFormatter === 'function') { try { return String(s.tooltipFormatter({ category: cat, series: s.label, field: s.yf ? s.yf.field : s.key, value: val, percent: pct, index: ci })); } catch (e) { /* */ } }
      if (typeof s.tooltipFormatter === 'string' && s.tooltipFormatter) { try { return String(new Function('ctx', 'return (' + s.tooltipFormatter + ')')({ category: cat, series: s.label, value: val, percent: pct, index: ci })); } catch (e) { /* */ } }
      const pctStr = (pct != null) ? ` <span style="color:${TEXT3}">(${pct.toFixed(pct < 10 ? 1 : 0)}%)</span>` : '';
      return `<div style="font-weight:700;margin-bottom:2px">${this._esc(cat)}</div><span style="display:inline-flex;align-items:center;gap:6px"><span style="width:9px;height:9px;border-radius:2px;background:${s.color}"></span>${this._esc(s.label)}: <b>${this._esc(this._fmt(val, s.yf))}</b>${pctStr}</span>`;
    }

    // ------------------------------------------------------------
    // Interação
    // ------------------------------------------------------------
    _bind(cats, series, type) {
      const self = this;
      const plot = this.querySelector('[data-role="plot"]');
      this.querySelectorAll('[data-exp]').forEach((b) => {
        b.addEventListener('click', function () { const base = (self.getAttribute('title') || 'grafico').replace(/[^\w\-]+/g, '_').slice(0, 60) || 'grafico'; if (b.getAttribute('data-exp') === 'png') self.exportPNG(base); else self.exportCSV(base); });
      });
      this.querySelectorAll('[data-role="pt"]').forEach((el) => {
        el.addEventListener('mouseenter', function () { if (self.showTooltip) self._showTip(el, plot); });
        el.addEventListener('mousemove', function (ev) { if (self.showTooltip) self._moveTip(ev, plot); });
        el.addEventListener('mouseleave', function () { self._removeTip(); });
        el.addEventListener('click', function () {
          const i = parseInt(el.getAttribute('data-i'), 10) || 0;
          const m = (self._marks || [])[i]; if (!m) return;
          const s = series[m.sIdx] || {};
          const catValues = {}; series.forEach(function (ss) { if (ss.values) catValues[ss.label] = self._num(ss.values[m.catIdx]); });
          self._selected = (self._selected === m.sIdx) ? null : m.sIdx;
          self._applySelection();
          const detail = { index: i, category: cats[m.catIdx], series: s.label, field: s.yf ? s.yf.field : s.key, value: self._num(s.values ? s.values[m.catIdx] : m.value), color: m.color, categoryValues: catValues, selected: (self._selected === m.sIdx) };
          self.dispatchEvent(new CustomEvent('point-click', { bubbles: true, composed: true, detail: detail }));
        });
      });
    }

    _applySelection() {
      const sel = this._selected;
      this.querySelectorAll('[data-role="serie"]').forEach((el) => {
        const si = parseInt(el.getAttribute('data-si'), 10);
        const dim = (sel != null && sel !== si);
        el.style.transition = 'opacity .2s ease';
        el.style.opacity = dim ? '0.18' : '1';
      });
    }

    _showTip(el, plot) {
      this._removeTip();
      const i = parseInt(el.getAttribute('data-i'), 10) || 0;
      const m = (this._marks || [])[i]; if (!m || !plot) return;
      const tip = document.createElement('div');
      tip.setAttribute('data-role', 'tip');
      tip.style.cssText = `position:absolute;z-index:5;pointer-events:none;background:#0F3319;color:#fff;border-radius:8px;padding:8px 10px;font:11px/1.4 ${FONT};box-shadow:0 6px 20px rgba(15,51,25,.28);max-width:220px;transform:translate(-50%,-112%)`;
      tip.innerHTML = m.tip || '';
      plot.appendChild(tip); this._tipEl = tip;
      tip.style.left = m.x + 'px'; tip.style.top = m.y + 'px';
    }
    _moveTip(ev, plot) { if (!this._tipEl || !plot) return; const rect = plot.getBoundingClientRect(); this._tipEl.style.left = (ev.clientX - rect.left) + 'px'; this._tipEl.style.top = (ev.clientY - rect.top - 10) + 'px'; }
    _removeTip() { if (this._tipEl && this._tipEl.parentNode) this._tipEl.parentNode.removeChild(this._tipEl); this._tipEl = null; }

    // ------------------------------------------------------------
    // Exportação
    // ------------------------------------------------------------
    _buildExportSVG() {
      const svg = this.querySelector('svg[data-role="svg"]'); if (!svg) return null;
      const W = parseFloat(svg.getAttribute('width')) || 640, H = parseFloat(svg.getAttribute('height')) || 320;
      const title = this.getAttribute('title') || '';
      const series = this._model().series || [];
      const legend = (this.showLegend && series.length > 1) ? series : [];
      const titleH = title ? 26 : 6, legendH = legend.length ? 26 : 6, total = H + titleH + legendH;
      const inner = svg.innerHTML;
      let out = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${total}" viewBox="0 0 ${W} ${total}" font-family="${FONT}"><rect x="0" y="0" width="${W}" height="${total}" fill="${SURFACE}"/>`;
      if (title) out += `<text x="0" y="18" font-size="14" font-weight="700" fill="#0F3319">${this._esc(title)}</text>`;
      out += `<g transform="translate(0,${titleH})">${inner}</g>`;
      if (legend.length) {
        const items = legend.map((s) => ({ s: s, w: 20 + String(s.label).length * 6.2 + 14 }));
        const totalW = items.reduce((a, it) => a + it.w, 0); let lx = Math.max(4, (W - totalW) / 2); const ly = H + titleH + 16;
        items.forEach((it) => { out += `<rect x="${lx}" y="${ly - 5}" width="14" height="3" rx="1.5" fill="${it.s.color}"/><text x="${lx + 18}" y="${ly}" font-size="11" font-weight="600" fill="${TEXT2}">${this._esc(it.s.label)}</text>`; lx += it.w; });
      }
      out += `</svg>`; return { svg: out, W: W, H: total };
    }
    _download(url, name, revoke) { const a = document.createElement('a'); a.href = url; a.download = name; a.style.display = 'none'; document.body.appendChild(a); a.click(); setTimeout(function () { if (a.parentNode) a.parentNode.removeChild(a); if (revoke) URL.revokeObjectURL(url); }, 0); }
    exportPNG(filename, scale) {
      const built = this._buildExportSVG(); if (!built) return; scale = scale || 2; const self = this;
      const src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(built.svg)));
      const img = new Image();
      img.onload = function () { const cv = document.createElement('canvas'); cv.width = Math.round(built.W * scale); cv.height = Math.round(built.H * scale); const ctx = cv.getContext('2d'); ctx.setTransform(scale, 0, 0, scale, 0, 0); ctx.drawImage(img, 0, 0, built.W, built.H); cv.toBlob(function (blob) { if (blob) self._download(URL.createObjectURL(blob), (filename || 'grafico') + '.png', true); }, 'image/png'); };
      img.onerror = function () { /* */ }; img.src = src;
    }
    _tableModel() {
      const m = this._model(); const cats = m.cats, series = m.series; const xname = this.xField || 'Categoria';
      return { headers: [xname].concat(series.map((s) => s.label)), rows: cats.map((c, ci) => [c].concat(series.map((s) => this._num(s.values[ci])))) };
    }
    exportCSV(filename) {
      const t = this._tableModel();
      const esc = (v) => { let s = String(v == null ? '' : v); if (/[";\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"'; return s; };
      const lines = [t.headers.map(esc).join(';')].concat(t.rows.map((r) => r.map(esc).join(';')));
      const csv = '﻿' + lines.join('\r\n');
      this._download(URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })), (filename || 'grafico') + '.csv', true);
    }

    _animate() {
      const rev = this.querySelector('[data-role="reveal"]'); if (!rev) return;
      const full = rev.getAttribute('width');
      rev.setAttribute('width', '0');
      rev.style.transition = 'width .6s cubic-bezier(.22,1,.36,1)';
      void this.offsetWidth;
      requestAnimationFrame(() => { rev.setAttribute('width', full); });
    }
  }

  customElements.define('granado-chart-line', GranadoChartLine);
  window.GranadoChartLine = GranadoChartLine;
}
