/* ============================================================
   <granado-scan>
   Desenho ANIMADO de "moldura de leitura" (scan) — cantos em L,
   código de barras estilizado ao fundo e uma linha de leitura que
   sobe/desce. É só o VISUAL (não tem input).

   Por padrão ocupa 100% da largura e 150px de altura. Passe
   width/height só se quiser mudar.

   Atributos (todos opcionais):
     width        - largura (qualquer unidade CSS). Default "100%".
     height       - altura (qualquer unidade CSS). Default "150px".
     color        - cor dos cantos + código de barras. Default "#1C5C31".
                    Pode passar var(--x) (ex.: color="var(--verde)").
     line-color   - cor da linha de leitura (a que se move). Default "#3FA05A".
     background   - fundo da moldura (aceita cor ou gradiente CSS).
                    Default: linear-gradient verde-claro -> creme.
     border-color - cor da borda da moldura. Default "#E5DDC8".
     radius       - raio dos cantos da moldura. Default "12px".
     speed        - duração do ciclo da linha, em ms. Default 2200.
     paused       - "true" congela a animação (linha parada no topo).

   Propriedades JS:
     el.width / el.height / el.color / el.speed  (ler/setar)

   Exemplo:
     <script src="[AprisoScripts]/WebComponents/granado-scan.js"></script>
     <granado-scan></granado-scan>                       <!-- padrão -->
     <granado-scan height="210px"></granado-scan>
     <granado-scan width="320px" height="120px"></granado-scan>
     <granado-scan color="var(--verde)" speed="1500"></granado-scan>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-scan')) {
  const DEF = {
    width: '100%',
    height: '150px',
    color: '#1C5C31',
    line: '#3FA05A',
    bg: 'linear-gradient(180deg,#E6F4EA,#F4EED9)',
    border: '#E5DDC8',
    radius: '12px',
    speed: 2200
  };

  class GranadoScan extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'color', 'line-color', 'background', 'border-color', 'radius', 'speed', 'paused'];
    }

    connectedCallback() { this._render(); this._built = true; }
    disconnectedCallback() { this._stopAnim(); }
    attributeChangedCallback() { if (this._built || this.isConnected) this._render(); }

    // ---- API JS ----
    get width() { return this.getAttribute('width') || DEF.width; }
    set width(v) { if (v == null || v === '') this.removeAttribute('width'); else this.setAttribute('width', String(v)); }
    get height() { return this.getAttribute('height') || DEF.height; }
    set height(v) { if (v == null || v === '') this.removeAttribute('height'); else this.setAttribute('height', String(v)); }
    get color() { return this.getAttribute('color') || DEF.color; }
    set color(v) { this.setAttribute('color', String(v == null ? '' : v)); }
    get speed() { return parseInt(this.getAttribute('speed'), 10) || DEF.speed; }
    set speed(v) { this.setAttribute('speed', String(v)); }

    // ---- Internals ----
    _stopAnim() { if (this._anim) { try { this._anim.cancel(); } catch (e) { /* ignore */ } this._anim = null; } }

    _render() {
      const width = this.getAttribute('width') || DEF.width;
      const height = this.getAttribute('height') || DEF.height;
      const color = this.getAttribute('color') || DEF.color;
      const line = this.getAttribute('line-color') || DEF.line;
      const bg = this.getAttribute('background') || DEF.bg;
      const border = this.getAttribute('border-color') || DEF.border;
      const radius = this.getAttribute('radius') || DEF.radius;
      const paused = this.getAttribute('paused') === 'true';

      // cantos em L
      const cbase = 'position:absolute;width:28px;height:28px;';
      const corners =
        '<span style="' + cbase + 'top:14px;left:14px;border-top:3px solid ' + color + ';border-left:3px solid ' + color + ';border-radius:5px 0 0 0"></span>' +
        '<span style="' + cbase + 'top:14px;right:14px;border-top:3px solid ' + color + ';border-right:3px solid ' + color + ';border-radius:0 5px 0 0"></span>' +
        '<span style="' + cbase + 'bottom:14px;left:14px;border-bottom:3px solid ' + color + ';border-left:3px solid ' + color + ';border-radius:0 0 0 5px"></span>' +
        '<span style="' + cbase + 'bottom:14px;right:14px;border-bottom:3px solid ' + color + ';border-right:3px solid ' + color + ';border-radius:0 0 5px 0"></span>';

      // código de barras estilizado (opacidade no wrapper p/ funcionar com qualquer cor)
      const bars = 'repeating-linear-gradient(90deg,' + color + ' 0 3px,transparent 3px 7px,' + color + ' 7px 9px,transparent 9px 14px,' + color + ' 14px 19px,transparent 19px 22px,' + color + ' 22px 24px,transparent 24px 29px)';
      const barcode = '<div style="position:absolute;left:20%;right:20%;top:50%;transform:translateY(-50%);height:43%;opacity:.22;background:' + bars + '"></div>';

      // linha de leitura
      const lineDiv = '<div data-scan-line style="position:absolute;left:12%;right:12%;top:17%;height:2px;background:linear-gradient(90deg,transparent,' + line + ',transparent);box-shadow:0 0 8px 1px ' + line + '"></div>';

      this.style.display = this.style.display || 'block';
      this.innerHTML =
        '<div style="position:relative;width:' + width + ';height:' + height + ';border-radius:' + radius + ';background:' + bg + ';border:1px solid ' + border + ';overflow:hidden;box-sizing:border-box">' +
          corners + barcode + lineDiv +
        '</div>';

      this._stopAnim();
      if (!paused) {
        const el = this.querySelector('[data-scan-line]');
        if (el && typeof el.animate === 'function') {
          this._anim = el.animate(
            [{ top: '17%' }, { top: '80%' }, { top: '17%' }],
            { duration: this.speed, iterations: Infinity, easing: 'ease-in-out' }
          );
        }
      }
    }
  }

  customElements.define('granado-scan', GranadoScan);
  window.GranadoScan = GranadoScan;
}
