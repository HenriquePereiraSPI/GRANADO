/* ============================================================
   <granado-loading>
   Indicador de loading INLINE (nao e overlay nem popup) — apenas
   um loader animado (configuravel via loading-type) e, opcionalmente,
   um texto ao lado. Fica no fluxo normal da pagina; use dentro de
   cards, botoes, celulas de tabela, etc.

   Para bloquear a tela inteira use <granado-preloader>; para um card
   modal centralizado use <granado-popup-loading>.

   ── Atributos (todos opcionais)
     loading-type - estilo do loader. Default: "spinner". Opcoes:
                      "spinner" - arco rotativo classico.
                      "dots"    - tres bolinhas pulando.
                      "bars"    - quatro barras tipo equalizer.
                      "pulse"   - circulo com ondas (ripple).
                      "ring"    - dois aneis girando opostos.
                      "brand"   - marca Granado (G com respiracao + halo).
                    (em JS: el.loadingType)
     text         - texto exibido ao lado do loader. Default: "" (so o loader).
     color        - cor do loader. Default: "#1C5C31".
     textcolor    - cor do texto. Default: "#5A6B5E".
     size         - tamanho (px) do loader. Default: "40". O texto e os
                    sub-elementos escalam proporcionalmente.
     direction    - "row" (default, loader + texto lado a lado) | "column"
                    (loader em cima, texto embaixo).

   ── Propriedades JS
     el.text / el.loadingType / el.color / el.size

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-loading.js"></script>

   <granado-loading loading-type="dots" text="Carregando..."></granado-loading>
   <granado-loading loading-type="spinner" color="#1A4A8C" size="24"></granado-loading>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-loading')) {
  const FONT = "'Poppins',system-ui,Arial,sans-serif";
  const ALLOWED = ['spinner', 'dots', 'bars', 'pulse', 'ring', 'brand'];

  const LAZY = {
    text: 'text',
    loadingType: 'loading-type',
    color: 'color',
    textcolor: 'textcolor',
    size: 'size',
    direction: 'direction'
  };

  class GranadoLoading extends HTMLElement {
    static get observedAttributes() {
      return ['loading-type', 'text', 'color', 'textcolor', 'size', 'direction'];
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      Object.keys(LAZY).forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) {
          const v = this[p];
          delete this[p];
          if (v != null) this.setAttribute(LAZY[p], String(v));
        }
      });
      this._render();
    }

    disconnectedCallback() { this._stopAnimation(); }

    attributeChangedCallback(name) {
      if (!this.isConnected) return;
      if (name === 'text') { const t = this.querySelector('[data-role="text"]'); if (t) { this._syncText(); return; } }
      if (name === 'textcolor') { const t = this.querySelector('[data-role="text"]'); if (t) { t.style.color = this.getAttribute('textcolor') || '#5A6B5E'; return; } }
      this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get text() { return this.getAttribute('text') || ''; }
    set text(v) { this.setAttribute('text', String(v == null ? '' : v)); }
    get loadingType() { return this._typeValue(); }
    set loadingType(v) { this.setAttribute('loading-type', String(v == null ? '' : v)); }
    get color() { return this.getAttribute('color') || '#1C5C31'; }
    set color(v) { this.setAttribute('color', String(v == null ? '' : v)); }
    get size() { return this._sizeValue(); }
    set size(v) { this.setAttribute('size', String(v == null ? '' : v)); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _typeValue() { const t = (this.getAttribute('loading-type') || 'spinner').toLowerCase(); return ALLOWED.indexOf(t) >= 0 ? t : 'spinner'; }
    _sizeValue() { const n = parseFloat(this.getAttribute('size')); return (isNaN(n) || n <= 0) ? 40 : n; }
    _scale() { return Math.max(0.4, this._sizeValue() / 40); }

    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }

    _syncText() {
      const t = this.querySelector('[data-role="text"]');
      if (t) t.textContent = this.getAttribute('text') || '';
    }

    _render() {
      const color = this.getAttribute('color') || '#1C5C31';
      const textcolor = this.getAttribute('textcolor') || '#5A6B5E';
      const text = this.getAttribute('text') || '';
      const variant = this._typeValue();
      const scale = this._scale();
      const column = (this.getAttribute('direction') || 'row').toLowerCase() === 'column';
      const gap = Math.round((column ? 8 : 12) * scale);
      const fontSize = Math.max(11, Math.round(13 * Math.min(scale, 1.6)));

      this.style.display = 'inline-flex';
      this.style.flexDirection = column ? 'column' : 'row';
      this.style.alignItems = 'center';
      this.style.justifyContent = 'center';
      this.style.gap = gap + 'px';
      this.style.verticalAlign = 'middle';
      this.style.fontFamily = FONT;

      this.innerHTML =
        this._iconMarkup(variant, color, scale) +
        (text ? `<span data-role="text" style="font:600 ${fontSize}px/1.4 ${FONT};color:${textcolor};letter-spacing:.02em">${this._esc(text)}</span>` : '');

      this._startAnimation();
    }

    // ------------------------------------------------------------
    // Markup dos variants (escalados por `scale`)
    // ------------------------------------------------------------
    _iconMarkup(variant, color, scale) {
      const px = (n) => Math.round(n * scale);
      if (variant === 'dots') {
        const d = Math.max(6, px(10));
        const amp = Math.max(5, px(8));
        const dot = `<span style="display:block;width:${d}px;height:${d}px;border-radius:50%;background:${color};will-change:transform"></span>`;
        return `<span data-gl-icon data-variant="dots" data-amp="${amp}" style="display:inline-flex;gap:${Math.max(5, px(8))}px;align-items:center;height:${amp + d}px">${dot + dot + dot}</span>`;
      }
      if (variant === 'bars') {
        const w = Math.max(4, px(6));
        const h = Math.max(16, px(30));
        const bar = `<span style="display:block;width:${w}px;height:${h}px;border-radius:${Math.max(2, px(3))}px;background:${color};will-change:transform;transform-origin:center"></span>`;
        return `<span data-gl-icon data-variant="bars" style="display:inline-flex;gap:${Math.max(4, px(5))}px;align-items:center;height:${h}px">${bar + bar + bar + bar}</span>`;
      }
      const box = Math.max(14, px(40));
      if (variant === 'pulse') {
        const ring = `<span style="position:absolute;inset:0;border-radius:50%;background:${color};will-change:transform,opacity;opacity:0"></span>`;
        return `<span data-gl-icon data-variant="pulse" style="position:relative;display:inline-block;width:${box}px;height:${box}px">${ring + ring}</span>`;
      }
      if (variant === 'ring') {
        const inset = Math.max(4, px(9));
        const bOut = Math.max(2, px(4));
        const bIn = Math.max(2, px(3));
        const outer = `<span style="position:absolute;inset:0;border-radius:50%;box-sizing:border-box;border:${bOut}px solid transparent;border-top-color:${color};border-right-color:${color};will-change:transform"></span>`;
        const inner = `<span style="position:absolute;inset:${inset}px;border-radius:50%;box-sizing:border-box;border:${bIn}px solid transparent;border-bottom-color:${color};border-left-color:${color};will-change:transform"></span>`;
        return `<span data-gl-icon data-variant="ring" style="position:relative;display:inline-block;width:${box}px;height:${box}px">${outer + inner}</span>`;
      }
      if (variant === 'brand') {
        const radius = Math.max(3, px(8));
        const font = Math.max(10, Math.round(box * 0.56));
        return `<span data-gl-icon data-variant="brand" style="display:inline-flex;align-items:center;justify-content:center;width:${box}px;height:${box}px;border-radius:${radius}px;background:${color};border:1px solid #9A7520;font:800 ${font}px/1 ${FONT};color:#0F3319;box-shadow:inset 0 1px 0 rgba(255,255,255,0.35),0 6px 18px rgba(154,117,32,0.24),0 2px 5px rgba(15,51,25,0.16);will-change:transform,box-shadow">G</span>`;
      }
      // spinner (default)
      const bw = Math.max(2, px(4));
      return `<span data-gl-icon data-variant="spinner" style="display:inline-block;width:${box}px;height:${box}px;box-sizing:border-box;border:${bw}px solid rgba(15,51,25,0.12);border-top-color:${color};border-radius:50%;will-change:transform"></span>`;
    }

    // ------------------------------------------------------------
    // Animacao via Web Animations API (sem injetar @keyframes).
    // ------------------------------------------------------------
    _startAnimation() {
      const icon = this.querySelector('[data-gl-icon]');
      this._stopAnimation();
      if (!icon || typeof icon.animate !== 'function') return;
      const variant = icon.getAttribute('data-variant');
      this._anims = [];

      if (variant === 'dots') {
        const amp = parseInt(icon.getAttribute('data-amp'), 10) || 8;
        icon.querySelectorAll('span').forEach((d, i) => {
          this._anims.push(d.animate(
            [{ transform: 'translateY(0)', opacity: 0.4 }, { transform: 'translateY(-' + amp + 'px)', opacity: 1 }, { transform: 'translateY(0)', opacity: 0.4 }],
            { duration: 1000, iterations: Infinity, easing: 'ease-in-out', delay: i * 150 }
          ));
        });
        return;
      }
      if (variant === 'bars') {
        icon.querySelectorAll('span').forEach((b, i) => {
          this._anims.push(b.animate(
            [{ transform: 'scaleY(0.4)' }, { transform: 'scaleY(1)' }, { transform: 'scaleY(0.4)' }],
            { duration: 1000, iterations: Infinity, easing: 'ease-in-out', delay: i * 120 }
          ));
        });
        return;
      }
      if (variant === 'pulse') {
        icon.querySelectorAll('span').forEach((r, i) => {
          this._anims.push(r.animate(
            [{ transform: 'scale(0.2)', opacity: 0.6 }, { transform: 'scale(1)', opacity: 0 }],
            { duration: 1600, iterations: Infinity, easing: 'cubic-bezier(0.2,0.7,0.4,1)', delay: i * 800 }
          ));
        });
        return;
      }
      if (variant === 'ring') {
        const rings = icon.querySelectorAll('span');
        if (rings[0]) this._anims.push(rings[0].animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }], { duration: 1400, iterations: Infinity, easing: 'linear' }));
        if (rings[1]) this._anims.push(rings[1].animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }], { duration: 900, iterations: Infinity, easing: 'linear' }));
        return;
      }
      if (variant === 'brand') {
        this._anims.push(icon.animate(
          [
            { transform: 'scale(1)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35),0 6px 18px rgba(154,117,32,0.24),0 2px 5px rgba(15,51,25,0.16),0 0 0 0 rgba(200,168,75,0.45)' },
            { transform: 'scale(1.05)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.45),0 10px 26px rgba(154,117,32,0.40),0 3px 9px rgba(15,51,25,0.20),0 0 0 12px rgba(200,168,75,0)' },
            { transform: 'scale(1)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35),0 6px 18px rgba(154,117,32,0.24),0 2px 5px rgba(15,51,25,0.16),0 0 0 0 rgba(200,168,75,0.45)' }
          ],
          { duration: 2600, iterations: Infinity, easing: 'ease-in-out' }
        ));
        return;
      }
      // spinner (default)
      this._anims.push(icon.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
        { duration: 900, iterations: Infinity, easing: 'linear' }
      ));
    }

    _stopAnimation() {
      if (this._anims && this._anims.length) this._anims.forEach((a) => { try { a.cancel(); } catch (_) {} });
      this._anims = null;
    }
  }

  customElements.define('granado-loading', GranadoLoading);
  window.GranadoLoading = GranadoLoading;
}
