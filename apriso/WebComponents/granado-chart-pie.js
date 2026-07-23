/* ============================================================
   <granado-chart-pie>
   Gráfico de PIZZA (SVG, Light DOM) — mesma ideia dos
   <granado-chart-bar> / <granado-chart-line>. Suporta pizza,
   rosca (donut) e semicírculo, com legenda, tooltip, rótulos
   de %, animação, seleção no clique e exportação PNG/CSV.

   ── Atributos / propriedades
     data         - JSON array de objetos (em JS use .data). Ex.:
                    [{ sala:'A', total:120 }, { sala:'B', total:80 }]
                    Rótulos (x-field) repetidos são SOMADOS.
     type         - 'pie' (default) | 'donut' | 'semi'
     x-field      - chave do rótulo da fatia (ex.: 'sala'). Em JS .xField
     value-field  - chave do valor numérico (ex.: 'total'). Em JS .valueField
     inner-radius - raio interno (0..0.9) p/ donut/semi. Em JS .innerRadius
     center-label - texto no centro (donut/semi). Em JS .centerLabel
     title, show-legend, show-values (%), show-tooltip, animated,
     show-export, export-position, height, width  — como nos outros.

     Cores: cada item de data pode ter "color" p/ sobrepor a cor da fatia;
     sem isso, usa a paleta Granado (ordem fixa).

     Formatação (em JS): .formatter(value)->str · .tooltipFormatter(ctx)->html

   ── Evento
     "slice-click" -> detail { index, label, value, percent, color, selected }
     Ao clicar numa fatia, ela destaca e as demais esmaecem; clicar de novo
     volta tudo ao normal (toggle).

   ── Exportação (métodos JS)
     el.exportPNG(filename?, scale?)   // imagem .png (com título + legenda)
     el.exportCSV(filename?)           // dados em tabela (.csv, ; + BOM)

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-chart-pie.js"></script>
   <script>
     var c = document.querySelector('granado-chart-pie');
     c.xField = 'sala'; c.valueField = 'total';
     c.data = [{ sala:'A', total:120 }, { sala:'B', total:80 }, { sala:'C', total:60 }];
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-chart-pie')) {
  const PALETTE = ['#1F7A3D', '#2F6FB0', '#9A7520', '#B5342F', '#7A5CA8', '#C8A85A'];
  const SURFACE = '#FDFAF1';
  const AXIS = '#BFB172';
  const TEXT = '#1A1A1A';
  const TEXT2 = '#555555';
  const TEXT3 = '#8A8575';
  const VERDE_ESC = '#0F3319';
  const FONT = "'Poppins',sans-serif";
  let UID = 0;
  const NF = new Intl.NumberFormat('pt-BR');

  class GranadoChartPie extends HTMLElement {
    static get observedAttributes() {
      return ['data', 'type', 'x-field', 'value-field', 'inner-radius', 'center-label', 'title', 'show-legend', 'show-values', 'show-tooltip', 'animated', 'show-export', 'export-position', 'height', 'width'];
    }

    connectedCallback() {
      ['data'].forEach((p) => { if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; } });
      if (typeof ResizeObserver !== 'undefined') {
        this._ro = new ResizeObserver(() => { const w = this.clientWidth; if (w && w !== this._lastW) this._render(); });
        this._ro.observe(this);
      }
      this._render();
    }
    disconnectedCallback() { if (this._ro) { this._ro.disconnect(); this._ro = null; } this._removeTip(); }
    attributeChangedCallback(name) {
      if (name === 'data') this._dataArr = null;
      if (['data', 'x-field', 'value-field', 'type'].indexOf(name) !== -1) this._selected = null;
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get data() { if (this._dataArr && Array.isArray(this._dataArr)) return this._dataArr; return this._parseArr(this.getAttribute('data')); }
    set data(v) { if (typeof v === 'string') { this.setAttribute('data', v); this._dataArr = null; } else { this._dataArr = Array.isArray(v) ? v : []; } this._selected = null; if (this.isConnected) this._render(); }

    get type() { const t = (this.getAttribute('type') || 'pie').toLowerCase(); return ['pie', 'donut', 'semi'].indexOf(t) !== -1 ? t : 'pie'; }
    set type(v) { this.setAttribute('type', String(v)); }
    get xField() { return this.getAttribute('x-field') || ''; }
    set xField(v) { this.setAttribute('x-field', String(v)); }
    get valueField() { return this.getAttribute('value-field') || 'value'; }
    set valueField(v) { this.setAttribute('value-field', String(v)); }
    get innerRadius() {
      const a = this.getAttribute('inner-radius');
      if (a != null && a !== '') { const n = parseFloat(a); if (isFinite(n)) return Math.max(0, Math.min(0.9, n)); }
      return this.type === 'donut' ? 0.55 : (this.type === 'semi' ? 0.5 : 0);
    }
    set innerRadius(v) { this.setAttribute('inner-radius', String(v)); }
    get centerLabel() { return this.getAttribute('center-label') || ''; }
    set centerLabel(v) { this.setAttribute('center-label', String(v)); }

    get showLegend() { return this.getAttribute('show-legend') !== 'false'; }
    set showLegend(v) { this.setAttribute('show-legend', v ? 'true' : 'false'); }
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

    get formatter() { return this._formatter || null; }
    set formatter(fn) { this._formatter = (typeof fn === 'function') ? fn : null; if (this.isConnected) this._render(); }
    get tooltipFormatter() { return this._tipFn || null; }
    set tooltipFormatter(fn) { this._tipFn = (typeof fn === 'function') ? fn : null; if (this.isConnected) this._render(); }

    // ------------------------------------------------------------
    // Utils
    // ------------------------------------------------------------
    _parseArr(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch])); }
    _num(v) { const n = Number(v); return isFinite(n) ? n : 0; }
    _widthPx() { const w = this.getAttribute('width'); if (w != null && /^\d+$/.test(String(w).trim())) return parseInt(w, 10); return Math.max(240, this.clientWidth || 640); }
    _fmt(v) { if (typeof this._formatter === 'function') { try { return String(this._formatter(v)); } catch (e) { /* */ } } return NF.format(v); }
    _pt(cx, cy, rad, ang) { return { x: cx + rad * Math.sin(ang), y: cy - rad * Math.cos(ang) }; }

    // ------------------------------------------------------------
    // Modelo — fatias (rótulos repetidos são somados)
    // ------------------------------------------------------------
    _model() {
      const data = this.data || [], xf = this.xField, vf = this.valueField;
      const labels = [], colorOf = {};
      data.forEach((r) => { const k = String(r[xf]); if (labels.indexOf(k) === -1) labels.push(k); if (colorOf[k] == null && r.color != null) colorOf[k] = r.color; });
      const slices = labels.map((l, i) => {
        let sum = 0; data.forEach((r) => { if (String(r[xf]) === l) sum += this._num(r[vf]); });
        return { label: l, value: sum, color: colorOf[l] || PALETTE[i % PALETTE.length] };
      });
      const total = slices.reduce((a, s) => a + s.value, 0) || 0;
      slices.forEach((s) => { s.pct = total > 0 ? (s.value / total) * 100 : 0; });
      return { slices, total };
    }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------
    _render() {
      const W = this._widthPx(), H = this.height;
      this._lastW = this.clientWidth;
      const model = this._model();
      const slices = model.slices, total = model.total;

      const title = this.getAttribute('title') || '';
      const titleHTML = title ? `<div style="font:700 14px/1.3 ${FONT};color:${VERDE_ESC};margin-bottom:8px">${this._esc(title)}</div>` : '';
      const legendHTML = (this.showLegend && slices.length)
        ? `<div style="display:flex;flex-wrap:wrap;gap:8px 16px;margin-top:10px;justify-content:center">` +
            slices.map((s, i) => `<span data-role="leg" data-i="${i}" style="display:inline-flex;align-items:center;gap:6px;font:600 11px/1.4 ${FONT};color:${TEXT2};cursor:pointer"><span style="width:11px;height:11px;border-radius:3px;background:${s.color};flex-shrink:0"></span>${this._esc(s.label)} <span style="color:${TEXT3}">(${s.pct.toFixed(s.pct < 10 ? 1 : 0)}%)</span></span>`).join('') +
          `</div>` : '';

      const svg = (slices.length && total > 0)
        ? this._svg(W, H, slices, total)
        : `<div style="height:${H}px;display:flex;align-items:center;justify-content:center;border:1px dashed ${AXIS};border-radius:10px;color:${TEXT3};font:12px/1.5 ${FONT}">Sem dados para exibir. Defina data, x-field e value-field.</div>`;

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

      this._bind(slices, total);
      if (this.animated) this._animate();
      this._applySelection();
    }

    _svg(W, H, slices, total) {
      const type = this.type, semi = (type === 'semi');
      const pad = 14;
      const cx = W / 2;
      // raio conforme espaço
      let R = Math.min(W, H) / 2 - pad;
      if (semi) R = Math.min(W / 2, H) - pad;
      R = Math.max(20, R);
      const r = this.innerRadius * R;
      let cy = H / 2;
      if (semi) cy = (H + R) / 2;   // empurra o semicírculo p/ centralizar a metade de cima

      const startBase = semi ? -Math.PI / 2 : 0;
      const sweepTotal = semi ? Math.PI : 2 * Math.PI;

      let paths = '', labels = '';
      const marks = [];
      let acc = 0;
      slices.forEach((s, i) => {
        const a0 = startBase + (acc / total) * sweepTotal;
        acc += s.value;
        const a1 = startBase + (acc / total) * sweepTotal;
        const large = (a1 - a0) > Math.PI ? 1 : 0;
        const o0 = this._pt(cx, cy, R, a0), o1 = this._pt(cx, cy, R, a1);
        let d;
        if (r > 0) {
          const i1 = this._pt(cx, cy, r, a1), i0 = this._pt(cx, cy, r, a0);
          d = `M ${o0.x.toFixed(1)} ${o0.y.toFixed(1)} A ${R} ${R} 0 ${large} 1 ${o1.x.toFixed(1)} ${o1.y.toFixed(1)} ` +
              `L ${i1.x.toFixed(1)} ${i1.y.toFixed(1)} A ${r} ${r} 0 ${large} 0 ${i0.x.toFixed(1)} ${i0.y.toFixed(1)} Z`;
        } else {
          d = `M ${cx.toFixed(1)} ${cy.toFixed(1)} L ${o0.x.toFixed(1)} ${o0.y.toFixed(1)} A ${R} ${R} 0 ${large} 1 ${o1.x.toFixed(1)} ${o1.y.toFixed(1)} Z`;
        }
        // fatia com uma fina "gap" (stroke da cor da superfície)
        paths += `<path data-role="slice" data-i="${i}" d="${d}" fill="${s.color}" stroke="${SURFACE}" stroke-width="2" style="cursor:pointer"></path>`;
        // rótulo de % no centróide (se a fatia for grande o suficiente)
        if (this.showValues && s.pct >= 5) {
          const mid = (a0 + a1) / 2;
          const rr = r > 0 ? (r + R) / 2 : R * 0.62;
          const p = this._pt(cx, cy, rr, mid);
          labels += `<text x="${p.x.toFixed(1)}" y="${(p.y + 3).toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="11" font-weight="700" fill="#fff">${s.pct.toFixed(s.pct < 10 ? 1 : 0)}%</text>`;
        }
        marks.push({ label: s.label, value: s.value, pct: s.pct, color: s.color });
      });

      // rótulo central (donut/semi)
      let center = '';
      const cl = this.centerLabel;
      if (cl && r > 0) {
        const cyText = semi ? (cy - R * 0.15) : cy;
        center = `<text x="${cx.toFixed(1)}" y="${(cyText + 5).toFixed(1)}" text-anchor="middle" font-family="${FONT}" font-size="15" font-weight="800" fill="${VERDE_ESC}">${this._esc(cl)}</text>`;
      }

      this._marks = marks;
      const uid = 'gcp' + (++UID);
      const anim = this.animated ? `transform-box:view-box;transform-origin:${cx}px ${cy}px` : '';
      const grp = this.animated ? ` data-role="pie-group" style="${anim}"` : '';

      return `<svg data-role="svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="display:block;width:100%;height:${H}px;overflow:visible">` +
        `<g${grp}>` + paths + `</g>` + labels + center +
        `</svg>`;
    }

    // ------------------------------------------------------------
    // Interação
    // ------------------------------------------------------------
    _bind(slices, total) {
      const self = this;
      const plot = this.querySelector('[data-role="plot"]');
      this.querySelectorAll('[data-exp]').forEach((b) => {
        b.addEventListener('click', function () { const base = (self.getAttribute('title') || 'grafico').replace(/[^\w\-]+/g, '_').slice(0, 60) || 'grafico'; if (b.getAttribute('data-exp') === 'png') self.exportPNG(base); else self.exportCSV(base); });
      });
      const select = function (i) {
        self._selected = (self._selected === i) ? null : i;
        self._applySelection();
        const s = slices[i] || {};
        self.dispatchEvent(new CustomEvent('slice-click', { bubbles: true, composed: true, detail: { index: i, label: s.label, value: s.value, percent: s.pct, color: s.color, selected: (self._selected === i) } }));
      };
      this.querySelectorAll('[data-role="slice"]').forEach((el) => {
        el.addEventListener('mouseenter', function () { el.style.filter = 'brightness(1.06)'; if (self.showTooltip) self._showTip(el, plot); });
        el.addEventListener('mousemove', function (ev) { if (self.showTooltip) self._moveTip(ev, plot); });
        el.addEventListener('mouseleave', function () { el.style.filter = ''; self._removeTip(); });
        el.addEventListener('click', function () { select(parseInt(el.getAttribute('data-i'), 10) || 0); });
      });
      // clique na legenda também seleciona
      this.querySelectorAll('[data-role="leg"]').forEach((el) => {
        el.addEventListener('click', function () { select(parseInt(el.getAttribute('data-i'), 10) || 0); });
      });
    }

    _applySelection() {
      const sel = this._selected;
      this.querySelectorAll('[data-role="slice"]').forEach((el) => {
        const i = parseInt(el.getAttribute('data-i'), 10);
        const dim = (sel != null && sel !== i);
        el.style.transition = 'opacity .2s ease';
        el.style.opacity = dim ? '0.22' : '1';
      });
    }

    _showTip(el, plot) {
      this._removeTip();
      const i = parseInt(el.getAttribute('data-i'), 10) || 0;
      const m = (this._marks || [])[i]; if (!m || !plot) return;
      let html;
      if (typeof this._tipFn === 'function') { try { html = String(this._tipFn({ label: m.label, value: m.value, percent: m.pct, index: i })); } catch (e) { html = null; } }
      if (html == null) html = `<div style="font-weight:700;margin-bottom:2px">${this._esc(m.label)}</div><span style="display:inline-flex;align-items:center;gap:6px"><span style="width:9px;height:9px;border-radius:2px;background:${m.color}"></span><b>${this._esc(this._fmt(m.value))}</b> <span style="color:#CBD8CB">(${m.pct.toFixed(m.pct < 10 ? 1 : 0)}%)</span></span>`;
      const tip = document.createElement('div');
      tip.setAttribute('data-role', 'tip');
      tip.style.cssText = `position:absolute;z-index:5;pointer-events:none;background:#0F3319;color:#fff;border-radius:8px;padding:8px 10px;font:11px/1.4 ${FONT};box-shadow:0 6px 20px rgba(15,51,25,.28);max-width:220px;transform:translate(-50%,-112%)`;
      tip.innerHTML = html;
      plot.appendChild(tip); this._tipEl = tip;
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
      const slices = this._model().slices || [];
      const legend = this.showLegend ? slices : [];
      const titleH = title ? 26 : 6, legendH = legend.length ? 26 : 6, total = H + titleH + legendH;
      const inner = svg.innerHTML;
      let out = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${total}" viewBox="0 0 ${W} ${total}" font-family="${FONT}"><rect x="0" y="0" width="${W}" height="${total}" fill="${SURFACE}"/>`;
      if (title) out += `<text x="0" y="18" font-size="14" font-weight="700" fill="${VERDE_ESC}">${this._esc(title)}</text>`;
      out += `<g transform="translate(0,${titleH})">${inner}</g>`;
      if (legend.length) {
        const items = legend.map((s) => ({ s: s, w: 20 + String(s.label).length * 6.2 + 14 }));
        const totalW = items.reduce((a, it) => a + it.w, 0); let lx = Math.max(4, (W - totalW) / 2); const ly = H + titleH + 16;
        items.forEach((it) => { out += `<rect x="${lx}" y="${ly - 9}" width="11" height="11" rx="3" fill="${it.s.color}"/><text x="${lx + 16}" y="${ly}" font-size="11" font-weight="600" fill="${TEXT2}">${this._esc(it.s.label)}</text>`; lx += it.w; });
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
      const slices = this._model().slices;
      return { headers: [this.xField || 'Rótulo', this.valueField || 'Valor', '%'], rows: slices.map((s) => [s.label, this._num(s.value), s.pct.toFixed(2)]) };
    }
    exportCSV(filename) {
      const t = this._tableModel();
      const esc = (v) => { let s = String(v == null ? '' : v); if (/[";\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"'; return s; };
      const lines = [t.headers.map(esc).join(';')].concat(t.rows.map((r) => r.map(esc).join(';')));
      const csv = '﻿' + lines.join('\r\n');
      this._download(URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })), (filename || 'grafico') + '.csv', true);
    }

    _animate() {
      const g = this.querySelector('[data-role="pie-group"]'); if (!g) return;
      g.style.transition = 'transform .5s cubic-bezier(.22,1,.36,1),opacity .5s ease';
      g.style.transform = 'scale(.6)'; g.style.opacity = '0';
      void this.offsetWidth;
      requestAnimationFrame(() => { g.style.transform = 'scale(1)'; g.style.opacity = '1'; });
    }
  }

  customElements.define('granado-chart-pie', GranadoChartPie);
  window.GranadoChartPie = GranadoChartPie;
}
