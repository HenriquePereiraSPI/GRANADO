/* ============================================================
   <granado-progress-bar>
   Barra de progresso horizontal estilo KPI, com label e valor
   posicionaveis ao redor da barra.

   Atributos (todos opcionais):
     value          - valor atual. Default: 0.
     min            - valor minimo. Default: 0.
     max            - valor maximo. Default: 100.
     label          - texto descritivo.
     isshowlabel    - "true" (default) | "false". Exibe ou oculta o label.
     labelposition  - posicao do label: "up" (default), "down", "left", "right".
                      Aceita "top"/"bottom" como sinonimos de "up"/"down".
     isshowvalue    - "true" (default) | "false". Exibe ou oculta o valor.
     valueposition  - posicao do valor: "up" (default), "down", "left", "right".
                      Aceita "top"/"bottom" como sinonimos.
                      Quando label e valor estao na mesma posicao "up"/"down",
                      ficam alinhados nas extremidades (label esquerda,
                      valor direita) com space-between.
     valueformat    - "percent" (default) | "value" | "fraction".
                        percent  -> "65%"
                        value    -> "65" (com unit se setado)
                        fraction -> "65 / 100"
     unit           - sufixo do valor (apenas em "value" e "fraction").
     color          - cor base do preenchimento. Default: "#1C5C31".
                      O fill usa linear-gradient horizontal (90deg) de uma
                      versao mais escura na esquerda para uma mais clara
                      na direita — replica o estilo "kpi-fi / kfi-X".
     bgcolor        - cor do trilho. Default: "#EAE4CA".
     height         - altura da barra. Default: "4px" (fininha estilo KPI).
                      Aumente para "8px", "12px", "16px" se quiser mais grossa.
     pulse          - "true" anima o preenchimento com pulse de opacidade
                      (ciclo de ~1.4s). Util para indicar atividade em
                      andamento. Default: false.

   Propriedades JS:
     elemento.value -> getter/setter (number)

   Exemplo:

   <script src="assets/WebComponents/granado-progress-bar.js"></script>

   <granado-progress-bar label="Producao" value="72"></granado-progress-bar>

   <granado-progress-bar label="Pesado" value="44983" max="50000"
       valueformat="value" unit="kg"></granado-progress-bar>

   <granado-progress-bar label="Concluidas" value="12" max="20"
       valueformat="fraction" labelposition="left"></granado-progress-bar>
   ============================================================ */

class GranadoProgressBar extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'min', 'max', 'label', 'labelposition', 'valueposition', 'isshowlabel', 'isshowvalue', 'valueformat', 'unit', 'color', 'bgcolor', 'height', 'pulse'];
  }

  connectedCallback() {
    if (!this._mounted) {
      this._build();
      this._mounted = true;
    }
    this._update();
  }

  disconnectedCallback() {
    if (this._pulseAnim) {
      this._pulseAnim.cancel();
      this._pulseAnim = null;
    }
  }

  attributeChangedCallback(name) {
    if (!this._mounted) return;
    if (['labelposition', 'valueposition', 'isshowlabel', 'isshowvalue'].includes(name)) {
      this._build();
    }
    this._update();
  }

  _normPos(p) {
    if (p === 'top') return 'up';
    if (p === 'bottom') return 'down';
    if (p === 'up' || p === 'down' || p === 'left' || p === 'right') return p;
    return 'up';
  }

  get value() {
    const v = parseFloat(this.getAttribute('value'));
    return isNaN(v) ? this.min : v;
  }
  set value(v) { this.setAttribute('value', String(v)); }
  get min() { return parseFloat(this.getAttribute('min') || '0'); }
  get max() { return parseFloat(this.getAttribute('max') || '100'); }

  _build() {
    // Cancela pulse antes de destruir o DOM antigo (a referencia do anim
    // fica orfa apontando para um nó removido).
    if (this._pulseAnim) {
      this._pulseAnim.cancel();
      this._pulseAnim = null;
    }
    const labelPos = this._normPos(this.getAttribute('labelposition') || 'up');
    const valuePos = this._normPos(this.getAttribute('valueposition') || 'up');
    const showLabel = this.getAttribute('isshowlabel') !== 'false';
    const showValue = this.getAttribute('isshowvalue') !== 'false';

    this.style.display = this.style.display || 'block';

    const slots = { up: [], down: [], left: [], right: [] };
    if (showLabel) slots[labelPos].push('label');
    if (showValue) slots[valuePos].push('value');

    const renderSlot = (items, slotName) => {
      if (items.length === 0) return '';
      const isVertical = slotName === 'up' || slotName === 'down';
      let justify = '';
      if (isVertical) {
        // Quando ha 2 itens (label + value), alinha nas extremidades.
        // Quando ha apenas 1, centraliza.
        justify = items.length > 1 ? 'justify-content:space-between;' : 'justify-content:center;';
      }
      const itemsHtml = items.map(it => {
        if (it === 'label') return `<span data-pb-label></span>`;
        if (it === 'value') return `<span data-pb-value style="font-weight:700;font-family:'DM Mono','DejaVu Mono',Consolas,monospace"></span>`;
        return '';
      }).join('');
      return `<div data-pb-slot="${slotName}" style="display:flex;align-items:center;${justify}gap:8px;font-size:11px;color:#103E20;font-family:'Lato','DejaVu Sans',Arial,sans-serif;line-height:1.2">${itemsHtml}</div>`;
    };

    const trackBase = `position:relative;height:4px;background:#EAE4CA;border:1px solid #D6CDA4;border-radius:3px;overflow:hidden;box-sizing:content-box`;
    const fillHtml = `<div data-pb-fill style="height:100%;width:0%;background:#1C5C31;border-radius:3px;transition:width 0.4s ease"></div>`;
    // Em layout horizontal usamos flex:1 para o track ocupar o espaco restante.
    // Em layout standalone (sem left/right), width:100% mantem a altura correta
    // e nao colapsa (flex:1 com basis:0 sobrepoe height em flex column).
    const trackInRow = `<div data-pb-track style="flex:1;min-width:60px;${trackBase}">${fillHtml}</div>`;
    const trackStandalone = `<div data-pb-track style="width:100%;${trackBase}">${fillHtml}</div>`;

    const upHtml = renderSlot(slots.up, 'up');
    const downHtml = renderSlot(slots.down, 'down');
    const leftHtml = renderSlot(slots.left, 'left');
    const rightHtml = renderSlot(slots.right, 'right');

    const horizontalRow = (leftHtml || rightHtml)
      ? `<div style="display:flex;align-items:center;gap:14px">${leftHtml}${trackInRow}${rightHtml}</div>`
      : trackStandalone;

    const inner = (upHtml || downHtml)
      ? `<div style="display:flex;flex-direction:column;gap:8px">${upHtml}${horizontalRow}${downHtml}</div>`
      : horizontalRow;

    this.innerHTML = inner;
  }

  _update() {
    const fill = this.querySelector('[data-pb-fill]');
    const track = this.querySelector('[data-pb-track]');
    if (!fill || !track) return;

    const min = this.min;
    const max = this.max;
    const value = Math.max(min, Math.min(max, this.value));
    const range = max - min;
    const pct = range > 0 ? Math.max(0, Math.min(100, ((value - min) / range) * 100)) : 0;

    const color = this.getAttribute('color') || '#1C5C31';
    const bgColor = this.getAttribute('bgcolor') || '#EAE4CA';
    const height = this.getAttribute('height') || '4px';

    // Estilo "kpi-fi / kfi-X": gradient HORIZONTAL de versao escura (esq)
    // para versao clara (dir) da cor base. Da o look polido tipo OEE.
    const darker = this._darken(color, 0.5);
    const lighter = this._lighten(color, 0.45);
    fill.style.width = pct + '%';
    fill.style.background = `linear-gradient(90deg, ${darker}, ${lighter})`;
    track.style.background = bgColor;
    track.style.height = height;

    track.setAttribute('role', 'progressbar');
    track.setAttribute('aria-valuemin', String(min));
    track.setAttribute('aria-valuemax', String(max));
    track.setAttribute('aria-valuenow', String(value));

    const labelEl = this.querySelector('[data-pb-label]');
    const valueEl = this.querySelector('[data-pb-value]');
    const label = this.getAttribute('label') || '';
    const format = this.getAttribute('valueformat') || 'percent';
    const unit = this.getAttribute('unit') || '';

    if (labelEl) labelEl.textContent = label;
    if (valueEl) {
      let valStr;
      if (format === 'value') {
        valStr = `${value}${unit ? ' ' + unit : ''}`;
      } else if (format === 'fraction') {
        valStr = `${value} / ${max}${unit ? ' ' + unit : ''}`;
      } else {
        valStr = `${Math.round(pct)}%`;
      }
      valueEl.textContent = valStr;
    }

    this._applyPulse(fill);
  }

  _applyPulse(fill) {
    const pulse = this.getAttribute('pulse') === 'true';
    if (pulse) {
      if (!this._pulseAnim) {
        this._pulseAnim = fill.animate(
          [{ opacity: 1 }, { opacity: 0.55 }, { opacity: 1 }],
          { duration: 1400, iterations: Infinity, easing: 'ease-in-out' }
        );
      }
    } else {
      if (this._pulseAnim) {
        this._pulseAnim.cancel();
        this._pulseAnim = null;
        fill.style.opacity = '';
      }
    }
  }

  _lighten(hex, amount) {
    const m = String(hex).match(/^#?([0-9a-f]{6})$/i);
    if (!m) return hex;
    const num = parseInt(m[1], 16);
    let r = (num >> 16) & 0xff, g = (num >> 8) & 0xff, b = num & 0xff;
    r = Math.round(r + (255 - r) * amount);
    g = Math.round(g + (255 - g) * amount);
    b = Math.round(b + (255 - b) * amount);
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  _darken(hex, amount) {
    const m = String(hex).match(/^#?([0-9a-f]{6})$/i);
    if (!m) return hex;
    const num = parseInt(m[1], 16);
    let r = (num >> 16) & 0xff, g = (num >> 8) & 0xff, b = num & 0xff;
    r = Math.max(0, Math.floor(r * (1 - amount)));
    g = Math.max(0, Math.floor(g * (1 - amount)));
    b = Math.max(0, Math.floor(b * (1 - amount)));
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }
}

customElements.define('granado-progress-bar', GranadoProgressBar);
