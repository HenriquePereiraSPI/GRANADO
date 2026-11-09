/* ============================================================
   <granado-tooltip>
   Badge com um tooltip em forma de cartao, no estilo da tela de OEE. Abre ao
   passar o mouse, ao tocar (celular) ou ao focar pelo teclado (Tab).

   Atributos:
     content  - texto do badge (sempre tratado como texto).
     tooltip  - conteudo do cartao: texto ou HTML. E inserido como HTML, entao
                nao passe dados digitados pelo usuario sem escapar antes.

   Exemplo:

   <script src="assets/WebComponents/granado-tooltip.js"></script>

   <granado-tooltip content="OEE" tooltip="Disponibilidade x Performance x Qualidade"></granado-tooltip>
   <granado-tooltip content="12.5%" tooltip="<strong>Tempo total</strong><br>480 min"></granado-tooltip>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-tooltip')) {
  let proximoId = 1;

  class GranadoTooltip extends HTMLElement {
    static get observedAttributes() {
      return ['content', 'tooltip'];
    }

    constructor() {
      super();
      this._panel = null;
      this._conteudo = null;
      this._seta = null;
      this._ponteiro = 'mouse';
      this._id = `granado-tooltip-${proximoId++}`;

      this._onPointerEnter = (e) => { if (e.pointerType === 'mouse') this._abrir(); };
      this._onPointerLeave = (e) => { if (e.pointerType === 'mouse') this._fechar(); };
      this._onPointerDown = (e) => { this._ponteiro = e.pointerType; };
      // O mouse ja abre no hover; o clique so alterna o tooltip no toque.
      this._onClick = () => {
        if (this._ponteiro === 'mouse') return;
        if (this._panel) this._fechar();
        else this._abrir();
      };
      this._onFocus = () => { if (this.matches(':focus-visible')) this._abrir(); };
      this._onBlur = () => this._fechar();
      this._onKeyDown = (e) => { if (e.key === 'Escape') this._fechar(); };
      this._onFora = (e) => { if (!this.contains(e.target)) this._fechar(); };
      this._onMudancaTela = () => this._fechar();
    }

    get content() { return this.getAttribute('content') || ''; }
    set content(v) { this.setAttribute('content', v == null ? '' : v); }

    get tooltip() { return this.getAttribute('tooltip') || ''; }
    set tooltip(v) { this.setAttribute('tooltip', v == null ? '' : v); }

    connectedCallback() {
      ['content', 'tooltip'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });

      this.style.display = this.style.display || 'inline-block';
      this.style.cursor = this.style.cursor || 'help';
      if (!this.hasAttribute('tabindex')) this.setAttribute('tabindex', '0');

      this.addEventListener('pointerenter', this._onPointerEnter);
      this.addEventListener('pointerleave', this._onPointerLeave);
      this.addEventListener('pointerdown', this._onPointerDown);
      this.addEventListener('click', this._onClick);
      this.addEventListener('focus', this._onFocus);
      this.addEventListener('blur', this._onBlur);

      this._renderContent();
    }

    disconnectedCallback() {
      this.removeEventListener('pointerenter', this._onPointerEnter);
      this.removeEventListener('pointerleave', this._onPointerLeave);
      this.removeEventListener('pointerdown', this._onPointerDown);
      this.removeEventListener('click', this._onClick);
      this.removeEventListener('focus', this._onFocus);
      this.removeEventListener('blur', this._onBlur);
      this._fechar();
    }

    attributeChangedCallback(nome) {
      if (nome === 'content') {
        if (this.isConnected) this._renderContent();
      } else if (this._panel) {
        if (this.tooltip) {
          this._conteudo.innerHTML = this.tooltip;
          this._posicionar();
        } else {
          this._fechar();
        }
      }
    }

    _renderContent() {
      const badge = document.createElement('span');
      badge.style.cssText = [
        'display:inline-block',
        'font-family:Arial,Helvetica,sans-serif',
        'font-size:9px',
        'font-weight:900',
        'letter-spacing:.06em',
        'text-transform:uppercase',
        'padding:3px 8px',
        'border-radius:4px',
        'background:#F4EED9',
        'color:#4A6250',
        'border:1px solid #D6CDA4',
      ].join(';');
      badge.textContent = this.content;
      this.replaceChildren(badge);
    }

    _abrir() {
      if (this._panel || !this.tooltip) return;

      const panel = document.createElement('div');
      panel.id = this._id;
      panel.setAttribute('role', 'tooltip');
      panel.style.cssText = [
        'position:fixed',
        'top:0',
        'left:0',
        'z-index:100002',
        'width:240px',
        'max-width:calc(100vw - 16px)',
        'margin:0!important',
        'box-sizing:border-box',
        'padding:10px 12px',
        'background:#FDFAF1',
        'border:1px solid #D6CDA4',
        'border-top:3px solid #1C5C31',
        'border-radius:8px',
        'box-shadow:0 8px 24px rgba(26,46,30,.18)',
        "font-family:'Poppins',sans-serif",
        'font-size:11px',
        'font-weight:400',
        'line-height:1.4',
        'color:#1A2E1E',
        'text-align:left',
        'white-space:normal',
        'pointer-events:none',
      ].join(';');

      this._conteudo = document.createElement('div');
      this._conteudo.innerHTML = this.tooltip;
      panel.appendChild(this._conteudo);

      this._seta = document.createElement('span');
      panel.appendChild(this._seta);

      // No body para escapar de overflow:hidden e de ancestrais com transform.
      document.body.appendChild(panel);
      this._panel = panel;
      this.setAttribute('aria-describedby', this._id);
      this._posicionar();
      if (panel.animate) panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 120, easing: 'ease' });

      window.addEventListener('keydown', this._onKeyDown);
      window.addEventListener('pointerdown', this._onFora);
      window.addEventListener('scroll', this._onMudancaTela, true);
      window.addEventListener('resize', this._onMudancaTela);
    }

    _fechar() {
      if (!this._panel) return;
      this._panel.remove();
      this._panel = null;
      this._conteudo = null;
      this._seta = null;
      this.removeAttribute('aria-describedby');

      window.removeEventListener('keydown', this._onKeyDown);
      window.removeEventListener('pointerdown', this._onFora);
      window.removeEventListener('scroll', this._onMudancaTela, true);
      window.removeEventListener('resize', this._onMudancaTela);
    }

    // Acima do texto; se nao couber, abaixo. Texto grande que nao cabe em nenhum lado:
    // alarga o cartao (ate 420px) e, se ainda assim nao couber, sobe o quanto precisar
    // para ficar inteiro na tela. Nunca passa das bordas.
    _posicionar() {
      const MARGEM = 8;
      const DISTANCIA = 8;
      const alvo = this.getBoundingClientRect();
      const espacoAcima = alvo.top - DISTANCIA - MARGEM;
      const espacoAbaixo = window.innerHeight - alvo.bottom - DISTANCIA - MARGEM;
      const cabe = (h) => h <= espacoAcima || h <= espacoAbaixo;

      this._panel.style.width = '240px';
      let altura = this._panel.offsetHeight;
      const maxLargura = Math.min(420, window.innerWidth - MARGEM * 2);
      for (let w = 300; !cabe(altura) && w <= maxLargura; w += 60) {
        this._panel.style.width = `${w}px`;
        altura = this._panel.offsetHeight;
      }

      const largura = this._panel.offsetWidth;
      const centro = alvo.left + alvo.width / 2;
      const left = Math.max(MARGEM, Math.min(centro - largura / 2, window.innerWidth - largura - MARGEM));

      let top;
      let lado = null;
      if (altura <= espacoAcima) {
        top = alvo.top - altura - DISTANCIA;
        lado = 'bottom:-6px;background:#FDFAF1;border-right:1px solid #D6CDA4;border-bottom:1px solid #D6CDA4';
      } else if (altura <= espacoAbaixo) {
        top = alvo.bottom + DISTANCIA;
        lado = 'top:-7px;background:#1C5C31';
      } else {
        // Nao cabe colado ao badge: abre abaixo e sobe o necessario para caber inteiro.
        top = Math.max(MARGEM, Math.min(alvo.bottom + DISTANCIA, window.innerHeight - altura - MARGEM));
      }

      this._panel.style.left = `${left}px`;
      this._panel.style.top = `${top}px`;

      if (!lado) { this._seta.style.cssText = 'display:none'; return; }
      const setaLeft = Math.max(8, Math.min(centro - left - 5, largura - 18));
      this._seta.style.cssText = `position:absolute;left:${setaLeft}px;width:10px;height:10px;transform:rotate(45deg);${lado}`;
    }
  }

  customElements.define('granado-tooltip', GranadoTooltip);

  window.GranadoTooltip = GranadoTooltip;
}
