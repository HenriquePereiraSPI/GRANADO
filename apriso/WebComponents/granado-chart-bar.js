/* ============================================================
   <granado-chart-bar>
   Gráfico de barras (SVG, Light DOM). Suporta barras simples,
   agrupadas, empilhadas, empilhadas 100% e "target" (faixa
   min→max), na vertical ou horizontal.

   ── Atributos / propriedades
     data        - JSON array de objetos (em JS use .data). Ex.:
                   [{ month:'Jan', sales:120 }, { month:'Fev', sales:180 }]
                   Obs.: linhas com a MESMA categoria (x-field) são sempre
                   SOMADAS — nunca é usado só o último registro.
     type        - 'simple' | 'grouped' | 'stacked' | 'stacked100' | 'target'
                   (default 'simple')
     x-field     - chave do eixo de categorias (ex.: 'month'). Em JS .xField
     y-fields    - array de séries (em JS use .yFields). Cada série:
                     { field, label?, color?, formatter?(v)->str,
                       tooltipFormatter?(ctx)->html|string(JS), sort?,
                       barWidth?, borderRadius?, opacity?, barRole? }
                   barRole: 'default' (barra cheia) | 'dashed' (contorno
                     tracejado, preenchimento fraco) | 'line' (marcador de
                     linha no valor, útil p/ meta/alvo). Default 'default'.
                   Em 'target', use 2 campos: [min, max].
     x2-field    - (opcional) SEGUNDO agrupador (dimensão das séries), além
                   do x-field. Pivota os dados por esta chave, gerando uma
                   série por valor distinto (formato "longo"). Usa
                   yFields[0].field como valor. Em JS .x2Field
     orientation - 'vertical' (default) | 'horizontal'
     overall-target - meta ÚNICA que vale para todos os registros: desenha uma
                   linha de referência atravessando o gráfico (horizontal nas
                   barras verticais; vertical nas horizontais). Em JS use
                   .overallTarget. Aceita:
                     • número: overallTarget = 200
                     • objeto: { value, label?, color?, dashed?, showValue? }
                     • lista:  [{ value:200, label:'Meta' }, { value:260 }]
                   Defaults: color '#8C1A1A', dashed true, showValue true.
     title       - título (texto acima do gráfico)
     show-legend - 'false' oculta a legenda (default: exibe p/ ≥2 séries)
     show-grid   - 'false' oculta as linhas de grade (default: exibe)
     show-values - 'true' escreve o valor na ponta de cada barra
     show-tooltip- 'false' desativa o tooltip no hover (default: ativo)
     animated    - 'false' desativa a animação de entrada (default: anima)
     show-export - 'false' oculta os botões de exportação (default: exibe
                   PNG · CSV no canto do gráfico)
     export-position - canto dos botões de exportação: 'top-right' (default)
                   | 'top-left' | 'bottom-right' | 'bottom-left'. Em JS
                   use .exportPosition
     height      - altura em px (default 320)
     width       - largura: número (px) OU deixe responsivo (default: 100%)

   ── Evento
     "bar-click" -> detail {
                      index, category, series, field, value, color,
                      categoryValues,   // { label: valor } de todas as séries da categoria
                      selected,         // true = barra ficou selecionada; false = deselecionou
                      min, max          // (apenas em type "target")
                    }
     Ao clicar, a barra fica destacada e as demais esmaecem; clicar de novo
     na mesma barra volta tudo ao normal (toggle).

   ── Exportação (métodos JS)
     el.exportPNG(filename?, scale?)   // imagem .png (scale default 2)
     el.exportCSV(filename?)           // dados em tabela (.csv, ; + BOM)
     (PNG leva título + legenda; CSV exporta os dados)

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-chart-bar.js"></script>
   <script>
     var c = document.querySelector('granado-chart-bar');
     c.data = [{ month:'Jan', sales:120 }, { month:'Fev', sales:180 }, { month:'Mar', sales:150 }];
     c.xField = 'month';
     c.yFields = [{ field:'sales', label:'Vendas' }];
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-chart-bar')) {
  // Paleta categórica GRANADO (validada em dataviz sobre a superfície #FDFAF1)
  // — atribuída em ordem fixa, nunca ciclada. Verde e ouro não ficam adjacentes
  // (o par verde↔ouro é o mais fraco em CVD). WARN de CVD/contraste é coberto
  // pela legenda + gaps entre barras (encoding secundário) que o componente sempre traz.
  //   verde · azul · ouro · vermelho · violeta · ouro-claro
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

  class GranadoChartBar extends HTMLElement {
    static get observedAttributes() {
      return ['data', 'type', 'x-field', 'y-fields', 'x2-field', 'overall-target', 'orientation', 'title', 'show-legend', 'show-grid', 'show-values', 'show-tooltip', 'animated', 'show-export', 'export-position', 'height', 'width'];
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      ['data', 'yFields'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });
      if (typeof ResizeObserver !== 'undefined') {
        this._ro = new ResizeObserver(() => {
          const w = this.clientWidth;
          if (w && w !== this._lastW) this._render();
        });
        this._ro.observe(this);
      }
      this._render();
    }
    disconnectedCallback() { if (this._ro) { this._ro.disconnect(); this._ro = null; } this._removeTip(); }
    attributeChangedCallback(name) {
      if (name === 'data') this._dataArr = null;
      if (name === 'y-fields') this._yArr = null;
      if (name === 'overall-target') this._otSet = false;
      // mudou a estrutura/dados -> limpa a seleção
      if (['data', 'y-fields', 'x-field', 'x2-field', 'type', 'orientation'].indexOf(name) !== -1) this._selected = null;
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get data() {
      if (this._dataArr && Array.isArray(this._dataArr)) return this._dataArr;
      return this._parseArr(this.getAttribute('data'));
    }
    set data(v) {
      if (typeof v === 'string') { this.setAttribute('data', v); this._dataArr = null; }
      else { this._dataArr = Array.isArray(v) ? v : []; }
      this._selected = null;
      if (this.isConnected) this._render();
    }
    get yFields() {
      if (this._yArr && Array.isArray(this._yArr)) return this._yArr;
      return this._parseArr(this.getAttribute('y-fields'));
    }
    set yFields(v) {
      if (typeof v === 'string') { this.setAttribute('y-fields', v); this._yArr = null; }
      else { this._yArr = Array.isArray(v) ? v : []; }
      this._selected = null;
      if (this.isConnected) this._render();
    }

    get type() { return this.getAttribute('type') || 'simple'; }
    set type(v) { this.setAttribute('type', String(v)); }
    get xField() { return this.getAttribute('x-field') || ''; }
    set xField(v) { this.setAttribute('x-field', String(v)); }
    get x2Field() { return this.getAttribute('x2-field') || ''; }
    set x2Field(v) { this.setAttribute('x2-field', String(v)); }
    get overallTarget() {
      if (this._otSet) return this._ot;
      const s = this.getAttribute('overall-target');
      if (s == null || s === '') return null;
      try { return JSON.parse(s); } catch (e) { return s; }
    }
    set overallTarget(v) {
      if (typeof v === 'string') { this.setAttribute('overall-target', v); this._otSet = false; }
      else { this._ot = v; this._otSet = true; }
      if (this.isConnected) this._render();
    }
    get orientation() { return this.getAttribute('orientation') === 'horizontal' ? 'horizontal' : 'vertical'; }
    set orientation(v) { this.setAttribute('orientation', String(v)); }

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
    get showExport() { return this.getAttribute('show-export') !== 'false'; }   // default true
    set showExport(v) { this.setAttribute('show-export', v ? 'true' : 'false'); }
    get exportPosition() {
      const p = (this.getAttribute('export-position') || '').toLowerCase();
      return ['top-right', 'top-left', 'bottom-right', 'bottom-left'].indexOf(p) !== -1 ? p : 'top-right';
    }
    set exportPosition(v) { this.setAttribute('export-position', String(v)); }
    get height() { return Math.max(120, parseInt(this.getAttribute('height'), 10) || 320); }
    set height(v) { this.setAttribute('height', String(v)); }

    // ------------------------------------------------------------
    // Internals — utils
    // ------------------------------------------------------------
    _parseArr(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
    _num(v) { const n = Number(v); return isFinite(n) ? n : 0; }
    // Normaliza overallTarget -> array de { value, label?, color?, dashed?, showValue? }
    _targets() {
      const raw = this.overallTarget;
      if (raw == null || raw === '') return [];
      const arr = Array.isArray(raw) ? raw : [raw];
      return arr.map((t) => {
        if (t == null) return null;
        if (typeof t === 'number' || typeof t === 'string') { const v = Number(t); return isFinite(v) ? { value: v } : null; }
        if (typeof t === 'object' && t.value != null && isFinite(Number(t.value))) return t;
        return null;
      }).filter(Boolean);
    }
    // Soma um campo de TODAS as linhas cuja categoria (xf) é `cat`.
    // Padrão do componente: categorias repetidas são SEMPRE somadas.
    _sumBy(data, xf, cat, field) {
      let sum = 0;
      for (let i = 0; i < data.length; i++) { if (String(data[i][xf]) === cat) sum += this._num(data[i][field]); }
      return sum;
    }
    _fmt(v, yf) {
      if (yf && typeof yf.formatter === 'function') { try { return String(yf.formatter(v)); } catch (e) { /* ignore */ } }
      return NF.format(v);
    }
    _widthPx() {
      const w = this.getAttribute('width');
      if (w != null && /^\d+$/.test(String(w).trim())) return parseInt(w, 10);   // número => px fixo
      return Math.max(240, this.clientWidth || 640);                              // responsivo
    }
    _niceMax(v) {
      if (v <= 0) return 1;
      const exp = Math.floor(Math.log(v) / Math.LN10);
      const mag = Math.pow(10, exp);
      const f = v / mag;
      const nice = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10;
      return nice * mag;
    }

    // ------------------------------------------------------------
    // Internals — modelo (categorias + séries normalizadas)
    // ------------------------------------------------------------
    _model() {
      const data = this.data || [];
      const xf = this.xField;
      const type = this.type;
      const gf = this.x2Field;
      let yFields = (this.yFields || []).slice();

      // categorias (ordem de aparição)
      const cats = [];
      data.forEach((r) => { const k = String(r[xf]); if (cats.indexOf(k) === -1) cats.push(k); });

      let series = [];
      if (type === 'target') {
        // faixa min→max: usa os 2 primeiros yFields como [low, high]
        const lo = yFields[0] || { field: 'min' };
        const hi = yFields[1] || { field: 'max' };
        series = [{
          key: 'target', label: (hi.label || 'Faixa'), color: hi.color, opacity: hi.opacity,
          borderRadius: hi.borderRadius, barWidth: hi.barWidth, tooltipFormatter: hi.tooltipFormatter,
          role: hi.barRole, yf: hi, isRange: true,
          low: cats.map((c) => this._sumBy(data, xf, c, lo.field)),
          high: cats.map((c) => this._sumBy(data, xf, c, hi.field))
        }];
      } else if (gf) {
        // formato longo: pivota por x2-field usando yFields[0].field como valor
        const vf = (yFields[0] && yFields[0].field) || 'value';
        const groups = [];
        data.forEach((r) => { const g = String(r[gf]); if (groups.indexOf(g) === -1) groups.push(g); });
        series = groups.map((g) => {
          const vals = cats.map((c) => {
            let sum = 0; data.forEach((r) => { if (String(r[xf]) === c && String(r[gf]) === g) sum += this._num(r[vf]); });
            return sum;
          });
          return { key: g, label: g, values: vals };
        });
      } else {
        // formato largo: uma série por yField. Categorias repetidas SÃO SOMADAS.
        yFields.sort((a, b) => (a.sort == null ? 0 : a.sort) - (b.sort == null ? 0 : b.sort));
        series = yFields.map((yf) => ({
          key: yf.field, label: yf.label || yf.field, color: yf.color, opacity: yf.opacity,
          borderRadius: yf.borderRadius, barWidth: yf.barWidth, tooltipFormatter: yf.tooltipFormatter,
          role: yf.barRole, yf: yf,
          values: cats.map((c) => this._sumBy(data, xf, c, yf.field))
        }));
      }

      // cores default (ordem fixa da paleta)
      series.forEach((s, i) => { if (!s.color) s.color = PALETTE[i % PALETTE.length]; });
      return { cats, series, type };
    }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------
    _render() {
      const W = this._widthPx();
      const H = this.height;
      this._lastW = this.clientWidth;
      const { cats, series, type } = this._model();
      const horiz = this.orientation === 'horizontal';

      const title = this.getAttribute('title') || '';
      const titleHTML = title
        ? `<div style="font:700 14px/1.3 ${FONT};color:#0F3319;margin-bottom:8px">${this._esc(title)}</div>` : '';

      const multi = series.length > 1;
      const legendHTML = (this.showLegend && multi)
        ? `<div data-role="legend" style="display:flex;flex-wrap:wrap;gap:10px 16px;margin-top:10px;justify-content:center">` +
            series.map((s) => `<span style="display:inline-flex;align-items:center;gap:6px;font:600 11px/1.4 ${FONT};color:${TEXT2}">${this._legendSwatch(s)}${this._esc(s.label)}</span>`).join('') +
          `</div>`
        : '';

      const svg = (cats.length && series.length)
        ? this._svg(W, H, cats, series, type, horiz)
        : `<div style="height:${H}px;display:flex;align-items:center;justify-content:center;border:1px dashed ${AXIS};border-radius:10px;color:${TEXT3};font:12px/1.5 ${FONT}">Sem dados para exibir. Defina data, x-field e y-fields.</div>`;

      const expBtn = `background:#FDFAF1;border:1px solid ${AXIS};border-radius:6px;padding:3px 8px;cursor:pointer;font:700 10px/1.4 ${FONT};color:${TEXT2}`;
      const ep = this.exportPosition;
      const expPos = (ep.indexOf('bottom') === 0 ? 'bottom:6px;' : 'top:6px;') + (ep.indexOf('left') !== -1 ? 'left:6px;' : 'right:6px;');
      const exportHTML = this.showExport
        ? `<div data-role="export" style="position:absolute;${expPos}display:flex;gap:6px;z-index:4">` +
            `<button type="button" data-exp="png" title="Baixar imagem PNG" style="${expBtn}">⬇ PNG</button>` +
            `<button type="button" data-exp="csv" title="Baixar dados (CSV)" style="${expBtn}">⬇ CSV</button>` +
          `</div>`
        : '';

      this.innerHTML =
        `<div style="width:100%;box-sizing:border-box;font-family:${FONT};color:${TEXT}">` +
          titleHTML +
          `<div data-role="plot" style="position:relative;width:100%">${svg}${exportHTML}</div>` +
          legendHTML +
        `</div>`;

      this._bind(cats, series, type, horiz);
      if (this.animated) this._animate();
      this._applySelection();   // mantém o realce após re-render (ex.: resize)
    }

    _svg(W, H, cats, series, type, horiz) {
      const mTop = 10, mRight = 14;
      const mLeft = horiz ? Math.min(160, 40 + this._maxCatLen(cats) * 6.2) : 48;
      const mBottom = horiz ? 28 : 34;
      const pw = Math.max(10, W - mLeft - mRight);
      const ph = Math.max(10, H - mTop - mBottom);

      // domínio de valores
      const dom = this._domain(cats, series, type);
      const vMin = dom.min, vMax = dom.max;
      const ticks = this._ticks(vMin, vMax);

      // escala valor -> pixel
      const vp = (v) => {
        const t = (v - vMin) / (vMax - vMin || 1);
        return horiz ? (mLeft + t * pw) : (mTop + ph - t * ph);
      };

      let gfx = '';

      // grade + eixo de valores
      if (this.showGrid) {
        ticks.forEach((tk) => {
          if (horiz) {
            const x = vp(tk);
            gfx += `<line x1="${x}" y1="${mTop}" x2="${x}" y2="${mTop + ph}" stroke="${GRID}" stroke-width="1"/>`;
            gfx += `<text x="${x}" y="${mTop + ph + 16}" text-anchor="middle" font-family="${MONO}" font-size="10" fill="${TEXT3}">${NF.format(tk)}</text>`;
          } else {
            const y = vp(tk);
            gfx += `<line x1="${mLeft}" y1="${y}" x2="${mLeft + pw}" y2="${y}" stroke="${GRID}" stroke-width="1"/>`;
            gfx += `<text x="${mLeft - 8}" y="${y + 3}" text-anchor="end" font-family="${MONO}" font-size="10" fill="${TEXT3}">${NF.format(tk)}</text>`;
          }
        });
      }
      // linha de base (zero) reforçada
      const base0 = vp(vMin < 0 && vMax > 0 ? 0 : vMin);
      if (horiz) gfx += `<line x1="${base0}" y1="${mTop}" x2="${base0}" y2="${mTop + ph}" stroke="${AXIS}" stroke-width="1.5"/>`;
      else gfx += `<line x1="${mLeft}" y1="${base0}" x2="${mLeft + pw}" y2="${base0}" stroke="${AXIS}" stroke-width="1.5"/>`;

      // banda por categoria
      const n = cats.length;
      const band = (horiz ? ph : pw) / n;

      const marks = [];   // {x,y,w,h,color,opacity,r,label,tip,seriesKey,catIdx,sIdx}
      const zeroPix = vp(vMin < 0 ? 0 : vMin);

      cats.forEach((cat, ci) => {
        const bandStart = (horiz ? mTop : mLeft) + ci * band;

        if (type === 'stacked' || type === 'stacked100') {
          const total = series.reduce((a, s) => a + this._num(s.values[ci]), 0) || 1;
          const inner = Math.min(this._barWidth(series[0], band), band * 0.72);
          const off = bandStart + (band - inner) / 2;
          let acc = 0;
          series.forEach((s, si) => {
            let val = this._num(s.values[ci]);
            const shown = (type === 'stacked100') ? (val / total) * 100 : val;
            const startVal = (type === 'stacked100') ? (acc / total) * 100 : acc;
            const a0 = vp(startVal);
            const a1 = vp(startVal + shown);
            acc += val;
            const m = this._rect(horiz, off, inner, a0, a1, s, si, ci);
            m.label = (type === 'stacked100') ? (shown.toFixed(shown < 10 ? 1 : 0) + '%') : this._fmt(val, s.yf);
            m.tip = this._tip(s, cat, val, ci, (type === 'stacked100') ? shown : null);
            marks.push(m);
          });
        } else if (type === 'grouped') {
          const gap = 2;
          const groupW = band * 0.8;
          const each = (groupW - gap * (series.length - 1)) / series.length;
          const gStart = bandStart + (band - groupW) / 2;
          series.forEach((s, si) => {
            const val = this._num(s.values[ci]);
            const off = gStart + si * (each + gap);
            const a0 = zeroPix, a1 = vp(val);
            const m = this._rect(horiz, off, each, a0, a1, s, si, ci);
            m.label = this._fmt(val, s.yf); m.tip = this._tip(s, cat, val, ci, null);
            marks.push(m);
          });
        } else if (type === 'target') {
          const s = series[0];
          const inner = Math.min(this._barWidth(s, band), band * 0.5);
          const off = bandStart + (band - inner) / 2;
          const a0 = vp(this._num(s.low[ci])), a1 = vp(this._num(s.high[ci]));
          const m = this._rect(horiz, off, inner, a0, a1, s, 0, ci);
          m.label = this._fmt(this._num(s.high[ci]), s.yf);
          m.tip = this._tipRange(s, cat, this._num(s.low[ci]), this._num(s.high[ci]), ci);
          marks.push(m);
        } else {
          // simple
          const s = series[0];
          const inner = Math.min(this._barWidth(s, band), band * 0.62);
          const off = bandStart + (band - inner) / 2;
          const val = this._num(s.values[ci]);
          const a0 = zeroPix, a1 = vp(val);
          const m = this._rect(horiz, off, inner, a0, a1, s, 0, ci);
          m.label = this._fmt(val, s.yf); m.tip = this._tip(s, cat, val, ci, null);
          marks.push(m);
        }
      });

      // barras — o formato depende do barRole da série (default | dashed | line)
      let bars = '';
      const opT = 'fill-opacity .2s ease,stroke-opacity .2s ease';   // p/ o realce da seleção
      const anim = `style="transition:${this.animated ? 'transform .5s cubic-bezier(.22,1,.36,1),' : ''}${opT};transform-box:fill-box;transform-origin:${horiz ? 'left center' : 'center bottom'}"`;
      const lineStyle = `style="transition:${opT}"`;
      marks.forEach((m, i) => {
        const r = Math.min(m.r, Math.min(m.w, m.h) / 2) || 0;
        const w = Math.max(0, m.w).toFixed(1), h = Math.max(0, m.h).toFixed(1);
        const x = m.x.toFixed(1), y = m.y.toFixed(1);
        if (m.role === 'line') {
          // Marcador de linha na ponta (valor) — útil para meta/alvo.
          const lw = 3;
          const x1 = horiz ? (m.x + m.w) : m.x, x2 = horiz ? (m.x + m.w) : (m.x + m.w);
          const y1 = horiz ? m.y : m.y, y2 = horiz ? (m.y + m.h) : m.y;
          bars += `<line data-role="bar" data-i="${i}" data-baseop="${m.opacity}" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${m.color}" stroke-opacity="${m.opacity}" stroke-width="${lw}" stroke-linecap="round" ${lineStyle}></line>`;
        } else if (m.role === 'dashed') {
          // Contorno tracejado com preenchimento fraco (ex.: referência).
          const fillOp = Math.min(m.opacity, 0.16);
          bars += `<rect data-role="bar" data-i="${i}" data-basefill="${fillOp}" data-basestroke="${m.opacity}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${m.color}" fill-opacity="${fillOp}" stroke="${m.color}" stroke-opacity="${m.opacity}" stroke-width="1.5" stroke-dasharray="5 3" ${anim}></rect>`;
        } else {
          bars += `<rect data-role="bar" data-i="${i}" data-baseop="${m.opacity}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${m.color}" fill-opacity="${m.opacity}" ${anim}></rect>`;
        }
      });

      // rótulos de valor
      let vals = '';
      if (this.showValues) {
        marks.forEach((m) => {
          if (horiz) {
            vals += `<text x="${(m.x + m.w + 4).toFixed(1)}" y="${(m.y + m.h / 2 + 3).toFixed(1)}" font-family="${MONO}" font-size="10" fill="${TEXT2}">${this._esc(m.label)}</text>`;
          } else {
            vals += `<text x="${(m.x + m.w / 2).toFixed(1)}" y="${(m.y - 5).toFixed(1)}" text-anchor="middle" font-family="${MONO}" font-size="10" fill="${TEXT2}">${this._esc(m.label)}</text>`;
          }
        });
      }

      // rótulos de categoria
      let catLbl = '';
      cats.forEach((cat, ci) => {
        const c = (horiz ? mTop : mLeft) + ci * band + band / 2;
        if (horiz) catLbl += `<text x="${mLeft - 8}" y="${(c + 3).toFixed(1)}" text-anchor="end" font-family="${FONT}" font-size="10.5" fill="${TEXT2}">${this._esc(cat)}</text>`;
        else catLbl += `<text x="${c.toFixed(1)}" y="${(mTop + ph + 16)}" text-anchor="middle" font-family="${FONT}" font-size="10.5" fill="${TEXT2}">${this._esc(this._trunc(cat, band))}</text>`;
      });

      // linha(s) de meta global — por cima das barras
      const tgt = this._targetsSvg(vp, mLeft, pw, mTop, ph, horiz);

      this._marks = marks;
      return `<svg data-role="svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="display:block;width:100%;height:${H}px;overflow:visible">` +
        gfx + bars + tgt + vals + catLbl + `</svg>`;
    }

    _targetsSvg(vp, mLeft, pw, mTop, ph, horiz) {
      const ts = this._targets();
      if (!ts.length) return '';
      let out = '';
      ts.forEach((t) => {
        const v = this._num(t.value);
        const color = t.color || '#8C1A1A';
        const dash = (t.dashed === false) ? '' : ' stroke-dasharray="6 4"';
        const showVal = t.showValue !== false;
        const label = (t.label != null) ? String(t.label) : NF.format(v);
        if (horiz) {
          const x = vp(v);
          out += `<line x1="${x.toFixed(1)}" y1="${mTop}" x2="${x.toFixed(1)}" y2="${(mTop + ph).toFixed(1)}" stroke="${color}" stroke-width="2"${dash}/>`;
          if (showVal) out += `<text x="${(x + 4).toFixed(1)}" y="${(mTop + 11)}" font-family="${FONT}" font-size="10" font-weight="700" fill="${color}">${this._esc(label)}</text>`;
        } else {
          const y = vp(v);
          out += `<line x1="${mLeft}" y1="${y.toFixed(1)}" x2="${(mLeft + pw).toFixed(1)}" y2="${y.toFixed(1)}" stroke="${color}" stroke-width="2"${dash}/>`;
          if (showVal) out += `<text x="${(mLeft + pw - 3).toFixed(1)}" y="${(y - 4).toFixed(1)}" text-anchor="end" font-family="${FONT}" font-size="10" font-weight="700" fill="${color}">${this._esc(label)}</text>`;
        }
      });
      return out;
    }

    _rect(horiz, off, thick, a0, a1, s, si, ci) {
      const lo = Math.min(a0, a1), hi = Math.max(a0, a1);
      const r = (s.borderRadius != null) ? s.borderRadius : 4;
      const op = (s.opacity != null) ? s.opacity : 1;
      const role = s.role || 'default';
      if (horiz) return { x: lo, y: off, w: hi - lo, h: thick, color: s.color, opacity: op, r: r, role: role, seriesKey: s.key, sIdx: si, catIdx: ci, field: s.yf ? s.yf.field : s.key };
      return { x: off, y: lo, w: thick, h: hi - lo, color: s.color, opacity: op, r: r, role: role, seriesKey: s.key, sIdx: si, catIdx: ci, field: s.yf ? s.yf.field : s.key };
    }

    _legendSwatch(s) {
      const role = s.role || 'default';
      if (role === 'line') return `<span style="width:14px;height:3px;border-radius:2px;background:${s.color};flex-shrink:0"></span>`;
      if (role === 'dashed') return `<span style="width:11px;height:11px;border-radius:3px;background:transparent;border:1.5px dashed ${s.color};flex-shrink:0"></span>`;
      return `<span style="width:11px;height:11px;border-radius:3px;background:${s.color};flex-shrink:0"></span>`;
    }
    _barWidth(s, band) { return (s && s.barWidth != null) ? s.barWidth : band; }
    _maxCatLen(cats) { return cats.reduce((m, c) => Math.max(m, String(c).length), 0); }
    _trunc(s, band) { const max = Math.max(3, Math.floor(band / 6.5)); s = String(s); return s.length > max ? s.slice(0, max - 1) + '…' : s; }

    _domain(cats, series, type) {
      if (type === 'stacked100') return { min: 0, max: 100 };
      let max = 0, min = 0;
      if (type === 'stacked') {
        cats.forEach((c, ci) => { let sum = 0; series.forEach((s) => { sum += this._num(s.values[ci]); }); if (sum > max) max = sum; });
      } else if (type === 'target') {
        const s = series[0];
        cats.forEach((c, ci) => { max = Math.max(max, this._num(s.high[ci])); min = Math.min(min, this._num(s.low[ci])); });
      } else {
        series.forEach((s) => (s.values || []).forEach((v) => { const n = this._num(v); if (n > max) max = n; if (n < min) min = n; }));
      }
      // a meta global entra no domínio para a linha sempre caber
      if (type !== 'stacked100') {
        this._targets().forEach((t) => { const v = this._num(t.value); if (v > max) max = v; if (v < min) min = v; });
      }
      const niceMax = this._niceMax(max || 1);
      const niceMin = min < 0 ? -this._niceMax(-min) : 0;
      return { min: niceMin, max: niceMax };
    }

    _ticks(min, max) {
      const out = []; const steps = 4; const span = (max - min) || 1; const step = span / steps;
      for (let i = 0; i <= steps; i++) out.push(min + step * i);
      return out;
    }

    _tip(s, cat, val, ci, pct) {
      if (typeof s.tooltipFormatter === 'function') {
        try { return String(s.tooltipFormatter({ category: cat, series: s.label, field: s.yf ? s.yf.field : s.key, value: val, percent: pct, index: ci })); } catch (e) { /* ignore */ }
      }
      if (typeof s.tooltipFormatter === 'string' && s.tooltipFormatter) {
        try { return String(new Function('ctx', 'return (' + s.tooltipFormatter + ')')({ category: cat, series: s.label, value: val, percent: pct, index: ci })); } catch (e) { /* ignore */ }
      }
      const pctStr = (pct != null) ? ` <span style="color:${TEXT3}">(${pct.toFixed(pct < 10 ? 1 : 0)}%)</span>` : '';
      return `<div style="font-weight:700;margin-bottom:2px">${this._esc(cat)}</div>` +
        `<span style="display:inline-flex;align-items:center;gap:6px"><span style="width:9px;height:9px;border-radius:2px;background:${s.color}"></span>${this._esc(s.label)}: <b>${this._esc(this._fmt(val, s.yf))}</b>${pctStr}</span>`;
    }
    _tipRange(s, cat, lo, hi, ci) {
      if (typeof s.tooltipFormatter === 'function') {
        try { return String(s.tooltipFormatter({ category: cat, series: s.label, min: lo, max: hi, index: ci })); } catch (e) { /* ignore */ }
      }
      return `<div style="font-weight:700;margin-bottom:2px">${this._esc(cat)}</div>` +
        `<span style="display:inline-flex;align-items:center;gap:6px"><span style="width:9px;height:9px;border-radius:2px;background:${s.color}"></span>${this._esc(s.label)}: <b>${this._esc(this._fmt(lo, s.yf))}</b> → <b>${this._esc(this._fmt(hi, s.yf))}</b></span>`;
    }

    // ------------------------------------------------------------
    // Interação (hover/tooltip) + animação de entrada
    // ------------------------------------------------------------
    _bind(cats, series, type, horiz) {
      const self = this;
      const plot = this.querySelector('[data-role="plot"]');
      this.querySelectorAll('[data-exp]').forEach((b) => {
        b.addEventListener('click', function () {
          const base = (self.getAttribute('title') || 'grafico').replace(/[^\w\-]+/g, '_').slice(0, 60) || 'grafico';
          const kind = b.getAttribute('data-exp');
          if (kind === 'png') self.exportPNG(base);
          else if (kind === 'csv') self.exportCSV(base);
        });
      });
      this.querySelectorAll('[data-role="bar"]').forEach((el) => {
        el.style.cursor = 'pointer';
        el.addEventListener('mouseenter', function () {
          el.setAttribute('fill-opacity', Math.min(1, (parseFloat(el.getAttribute('fill-opacity')) || 1)).toString());
          el.style.filter = 'brightness(1.06)';
          if (self.showTooltip) self._showTip(el, plot);
        });
        el.addEventListener('mousemove', function (ev) { if (self.showTooltip) self._moveTip(ev, plot); });
        el.addEventListener('mouseleave', function () { el.style.filter = ''; self._removeTip(); });
        el.addEventListener('click', function (ev) {
          const i = parseInt(el.getAttribute('data-i'), 10) || 0;
          const m = (self._marks || [])[i]; if (!m) return;
          const s = series[m.sIdx] || {};
          // valores da barra + todos os valores da categoria
          const catValues = {};
          series.forEach(function (ss) { if (ss.values) catValues[ss.label] = self._num(ss.values[m.catIdx]); });
          const detail = { index: i, category: cats[m.catIdx], series: s.label, field: m.field, color: m.color, categoryValues: catValues };
          if (s.isRange) { detail.min = self._num(s.low[m.catIdx]); detail.max = self._num(s.high[m.catIdx]); detail.value = detail.max; }
          else detail.value = self._num((s.values || [])[m.catIdx]);
          // toggle: clicar de novo na mesma barra volta tudo ao normal
          self._selected = (self._selected === i) ? null : i;
          self._applySelection();
          detail.selected = (self._selected === i);
          self.dispatchEvent(new CustomEvent('bar-click', { bubbles: true, composed: true, detail: detail }));
        });
      });
    }

    _showTip(el, plot) {
      this._removeTip();
      const i = parseInt(el.getAttribute('data-i'), 10) || 0;
      const m = (this._marks || [])[i]; if (!m || !plot) return;
      const tip = document.createElement('div');
      tip.setAttribute('data-role', 'tip');
      tip.style.cssText = `position:absolute;z-index:5;pointer-events:none;background:#0F3319;color:#fff;border-radius:8px;padding:8px 10px;font:11px/1.4 ${FONT};box-shadow:0 6px 20px rgba(15,51,25,.28);max-width:220px;transform:translate(-50%,-108%);white-space:normal`;
      tip.innerHTML = m.tip || '';
      plot.appendChild(tip);
      this._tipEl = tip;
      // posição inicial no centro da barra
      const cx = m.x + m.w / 2, cy = m.y;
      tip.style.left = cx + 'px';
      tip.style.top = cy + 'px';
    }
    _moveTip(ev, plot) {
      if (!this._tipEl || !plot) return;
      const rect = plot.getBoundingClientRect();
      this._tipEl.style.left = (ev.clientX - rect.left) + 'px';
      this._tipEl.style.top = (ev.clientY - rect.top - 8) + 'px';
    }
    _removeTip() { if (this._tipEl && this._tipEl.parentNode) this._tipEl.parentNode.removeChild(this._tipEl); this._tipEl = null; }

    // ------------------------------------------------------------
    // Exportação (PNG / SVG) — inclui título e legenda na imagem
    // ------------------------------------------------------------
    _buildExportSVG() {
      const svg = this.querySelector('svg[data-role="svg"]');
      if (!svg) return null;
      const W = parseFloat(svg.getAttribute('width')) || 640;
      const H = parseFloat(svg.getAttribute('height')) || 320;
      const title = this.getAttribute('title') || '';
      const model = this._model();
      const series = model.series || [];
      const legend = (this.showLegend && series.length > 1) ? series : [];
      const titleH = title ? 26 : 6;
      const legendH = legend.length ? 26 : 6;
      const total = H + titleH + legendH;
      const inner = svg.innerHTML;   // conteúdo do gráfico em coords 0..W / 0..H

      let out = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${total}" viewBox="0 0 ${W} ${total}" font-family="${FONT}">`;
      out += `<rect x="0" y="0" width="${W}" height="${total}" fill="${SURFACE}"/>`;
      if (title) out += `<text x="0" y="18" font-size="14" font-weight="700" fill="#0F3319">${this._esc(title)}</text>`;
      out += `<g transform="translate(0,${titleH})">${inner}</g>`;
      if (legend.length) {
        // layout simples centralizado (larguras aproximadas)
        const items = legend.map((s) => ({ s: s, w: 16 + String(s.label).length * 6.2 + 16 }));
        const totalW = items.reduce((a, it) => a + it.w, 0);
        let lx = Math.max(4, (W - totalW) / 2);
        const ly = H + titleH + 16;
        items.forEach((it) => {
          const c = it.s.color, role = it.s.role || 'default';
          if (role === 'line') out += `<rect x="${lx}" y="${ly - 5}" width="14" height="3" rx="1.5" fill="${c}"/>`;
          else if (role === 'dashed') out += `<rect x="${lx}" y="${ly - 9}" width="11" height="11" rx="3" fill="none" stroke="${c}" stroke-width="1.5" stroke-dasharray="3 2"/>`;
          else out += `<rect x="${lx}" y="${ly - 9}" width="11" height="11" rx="3" fill="${c}"/>`;
          out += `<text x="${lx + 17}" y="${ly}" font-size="11" font-weight="600" fill="${TEXT2}">${this._esc(it.s.label)}</text>`;
          lx += it.w;
        });
      }
      out += `</svg>`;
      return { svg: out, W: W, H: total };
    }

    _download(url, name, revoke) {
      const a = document.createElement('a');
      a.href = url; a.download = name; a.style.display = 'none';
      document.body.appendChild(a); a.click();
      setTimeout(function () { if (a.parentNode) a.parentNode.removeChild(a); if (revoke) URL.revokeObjectURL(url); }, 0);
    }

    exportPNG(filename, scale) {
      const built = this._buildExportSVG(); if (!built) return;
      scale = scale || 2;
      const self = this;
      const src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(built.svg)));
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(built.W * scale);
        canvas.height = Math.round(built.H * scale);
        const ctx = canvas.getContext('2d');
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.drawImage(img, 0, 0, built.W, built.H);
        canvas.toBlob(function (blob) {
          if (!blob) return;
          self._download(URL.createObjectURL(blob), (filename || 'grafico') + '.png', true);
        }, 'image/png');
      };
      img.onerror = function () { /* ignora */ };
      img.src = src;
    }

    // Dados do gráfico como tabela: categoria (x) + uma coluna por série.
    _tableModel() {
      const model = this._model();
      const cats = model.cats, series = model.series, type = model.type;
      const xname = this.xField || 'Categoria';
      if (type === 'target') {
        const s = series[0] || { low: [], high: [] };
        const yf = this.yFields || [];
        const loLabel = (yf[0] && (yf[0].label || yf[0].field)) || 'Mín';
        const hiLabel = (yf[1] && (yf[1].label || yf[1].field)) || 'Máx';
        return { headers: [xname, loLabel, hiLabel], rows: cats.map((c, i) => [c, this._num(s.low[i]), this._num(s.high[i])]) };
      }
      return {
        headers: [xname].concat(series.map((s) => s.label)),
        rows: cats.map((c, ci) => [c].concat(series.map((s) => this._num(s.values[ci]))))
      };
    }

    exportCSV(filename) {
      const t = this._tableModel();
      const esc = (v) => { let s = String(v == null ? '' : v); if (/[";\n]/.test(s)) s = '"' + s.replace(/"/g, '""') + '"'; return s; };
      const lines = [t.headers.map(esc).join(';')].concat(t.rows.map((r) => r.map(esc).join(';')));
      const csv = '﻿' + lines.join('\r\n');   // BOM p/ Excel; separador ';' (padrão pt-BR)
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
      this._download(URL.createObjectURL(blob), (filename || 'grafico') + '.csv', true);
    }

    // Realce da seleção: a barra clicada mantém a cor; as demais esmaecem.
    // _selected = índice do mark clicado (ou null = tudo normal).
    _applySelection() {
      const sel = this._selected;
      // reseta se o índice não existe mais (ex.: dados mudaram)
      if (sel != null && !(this._marks || [])[sel]) { this._selected = null; }
      const cur = this._selected;
      this.querySelectorAll('[data-role="bar"]').forEach((el) => {
        const idx = parseInt(el.getAttribute('data-i'), 10) || 0;
        const dim = (cur != null && cur !== idx);
        if (el.hasAttribute('data-basefill')) {          // dashed
          el.setAttribute('fill-opacity', dim ? '0.05' : el.getAttribute('data-basefill'));
          el.setAttribute('stroke-opacity', dim ? '0.14' : el.getAttribute('data-basestroke'));
        } else if (el.tagName.toLowerCase() === 'line') { // marcador de linha
          el.setAttribute('stroke-opacity', dim ? '0.14' : el.getAttribute('data-baseop'));
        } else {                                          // barra cheia
          el.setAttribute('fill-opacity', dim ? '0.16' : el.getAttribute('data-baseop'));
        }
      });
    }

    _animate() {
      // Só os retângulos "crescem"; marcadores de linha apenas aparecem.
      const bars = this.querySelectorAll('rect[data-role="bar"]');
      const horiz = this.orientation === 'horizontal';
      bars.forEach((el) => { el.style.transform = horiz ? 'scaleX(0)' : 'scaleY(0)'; });
      // força reflow e libera para o estado final
      void this.offsetWidth;
      requestAnimationFrame(() => { bars.forEach((el) => { el.style.transform = 'none'; }); });
    }
  }

  customElements.define('granado-chart-bar', GranadoChartBar);
  window.GranadoChartBar = GranadoChartBar;
}
