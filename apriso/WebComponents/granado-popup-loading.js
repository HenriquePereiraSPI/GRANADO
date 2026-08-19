/* ============================================================
   <granado-popup-loading>
   Popup (modal) de loading que fica NA FRENTE de qualquer tela.
   Diferente do <granado-preloader> (overlay fullscreen minimal),
   este mostra um CARD centralizado com: um loader animado
   (configuravel), um titulo e um subtitulo.

   Nao ha botao de fechar — e um estado de "aguarde"; some via JS
   (close()/hide()) quando a operacao termina.

   ── Atributos (todos opcionais)
     title         - titulo do card. Default: "Aguarde...".
     subtitle      - subtitulo (linha secundaria, menor). Default: "".
     loading-type  - estilo do loader. Default: "spinner". Opcoes:
                       "spinner" - arco rotativo classico.
                       "dots"    - tres bolinhas pulando.
                       "bars"    - quatro barras tipo equalizer.
                       "pulse"   - circulo com ondas (ripple).
                       "ring"    - dois aneis girando opostos.
                       "brand"   - marca Granado (G com respiracao + halo).
                     (em JS: el.loadingType)
     open          - "false" inicia oculto. Default: visivel.
     color         - cor do loader + borda superior do card. Default: "#1C5C31".
     backgroundcolor - cor do overlay. Default: "rgba(15,51,25,.55)".
     blur          - "true" aplica blur no fundo. Default: "true".
     zindex        - z-index do overlay. Default: "99999".
     close-on-backdrop - "true" fecha ao clicar fora. Default: NAO fecha.

   ── Propriedades / metodos JS
     el.title / el.subtitle / el.loadingType / el.color
     el.open()  -> exibir
     el.close() -> ocultar (e remover do DOM, se criado via API estatica)

   ── API estatica (uso recomendado — singleton, no estilo do GranadoPreloader)
     GranadoPopupLoading.show({ title, subtitle, loadingType, color })
     GranadoPopupLoading.show('Salvando...')            // so o titulo
     GranadoPopupLoading.hide()
     GranadoPopupLoading.setTitle('...')
     GranadoPopupLoading.setSubtitle('...')
     GranadoPopupLoading.setLoadingType('dots')
     GranadoPopupLoading.isVisible()

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-popup-loading.js"></script>

   <button onclick="GranadoPopupLoading.show({ title:'Salvando...', subtitle:'Enviando dados ao servidor', loadingType:'dots' })">Loading</button>
   <button onclick="GranadoPopupLoading.hide()">Fechar</button>

   <!-- ou declarativo -->
   <granado-popup-loading id="ld" title="Processando" subtitle="Aguarde um instante" loading-type="ring" open="false"></granado-popup-loading>
   <script> document.getElementById('ld').open(); </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-popup-loading')) {
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const SURFACE = '#FFFFFF';
  const FONT = "'Poppins',system-ui,Arial,sans-serif";
  const ALLOWED = ['spinner', 'dots', 'bars', 'pulse', 'ring', 'brand'];

  // Props que podem ter sido setadas ANTES do upgrade -> viram atributo.
  const LAZY = {
    subtitle: 'subtitle',
    loadingType: 'loading-type',
    color: 'color',
    backgroundColor: 'backgroundcolor',
    blur: 'blur',
    zindex: 'zindex'
  };

  class GranadoPopupLoading extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'subtitle', 'loading-type', 'open', 'color', 'backgroundcolor', 'blur', 'zindex', 'close-on-backdrop'];
    }

    // ------------------------------------------------------------
    // API estatica (singleton)
    // ------------------------------------------------------------
    static _singleton() {
      if (!GranadoPopupLoading._instance || !GranadoPopupLoading._instance.isConnected) {
        const el = document.createElement('granado-popup-loading');
        el._autoRemove = true;
        document.body.appendChild(el);
        GranadoPopupLoading._instance = el;
      }
      return GranadoPopupLoading._instance;
    }

    static show(opts) {
      if (typeof opts === 'string') opts = { title: opts };
      opts = opts || {};
      const el = GranadoPopupLoading._singleton();
      if (opts.title != null) el.setAttribute('title', String(opts.title));
      if (opts.subtitle != null) el.setAttribute('subtitle', String(opts.subtitle));
      const lt = opts.loadingType != null ? opts.loadingType : opts.loadingtype;
      if (lt != null) el.setAttribute('loading-type', String(lt));
      if (opts.color != null) el.setAttribute('color', String(opts.color));
      if (opts.backgroundcolor != null) el.setAttribute('backgroundcolor', String(opts.backgroundcolor));
      if (opts.blur != null) el.setAttribute('blur', String(opts.blur));
      if (opts.zindex != null) el.setAttribute('zindex', String(opts.zindex));
      if (opts.closeOnBackdrop != null) el.setAttribute('close-on-backdrop', opts.closeOnBackdrop ? 'true' : 'false');
      el.open();
      return el;
    }

    static hide() { if (GranadoPopupLoading._instance) GranadoPopupLoading._instance.close(); }
    static setTitle(t) { if (GranadoPopupLoading._instance) GranadoPopupLoading._instance.setAttribute('title', String(t == null ? '' : t)); }
    static setSubtitle(s) { if (GranadoPopupLoading._instance) GranadoPopupLoading._instance.setAttribute('subtitle', String(s == null ? '' : s)); }
    static setLoadingType(t) { if (GranadoPopupLoading._instance) GranadoPopupLoading._instance.setAttribute('loading-type', String(t || 'spinner')); }
    static isVisible() { return !!(GranadoPopupLoading._instance && GranadoPopupLoading._instance.getAttribute('open') !== 'false' && GranadoPopupLoading._instance.style.display !== 'none'); }

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
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
    }

    disconnectedCallback() {
      this._stopAnimation();
      this._unlockScroll();
      if (GranadoPopupLoading._instance === this) GranadoPopupLoading._instance = null;
    }

    attributeChangedCallback(name) {
      if (!this.isConnected) return;
      if (name === 'open') { this._applyVisibility(); return; }
      if (name === 'title') { const t = this.querySelector('[data-role="title"]'); if (t) { t.textContent = this._titleValue(); return; } }
      if (name === 'subtitle') { const s = this.querySelector('[data-role="subtitle"]'); if (s) { s.textContent = this.getAttribute('subtitle') || ''; return; } }
      this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get subtitle() { return this.getAttribute('subtitle') || ''; }
    set subtitle(v) { this.setAttribute('subtitle', String(v == null ? '' : v)); }
    get loadingType() { return this._typeValue(); }
    set loadingType(v) { this.setAttribute('loading-type', String(v == null ? '' : v)); }
    get color() { return this.getAttribute('color') || '#1C5C31'; }
    set color(v) { this.setAttribute('color', String(v == null ? '' : v)); }
    _closeOnBackdrop() { return this.getAttribute('close-on-backdrop') === 'true'; }
    get closeOnBackdrop() { return this._closeOnBackdrop(); }
    set closeOnBackdrop(v) { this.setAttribute('close-on-backdrop', v ? 'true' : 'false'); }

    open() { this.removeAttribute('open'); this.style.display = ''; if (this.isConnected) this._render(); }
    close() { this._stopAnimation(); this._unlockScroll(); this.style.display = 'none'; if (this._autoRemove) this.remove(); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _titleValue() { const t = this.getAttribute('title'); return (t == null || t === '') ? 'Aguarde...' : t; }
    _typeValue() { const t = (this.getAttribute('loading-type') || 'spinner').toLowerCase(); return ALLOWED.indexOf(t) >= 0 ? t : 'spinner'; }

    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }

    _render() {
      const color = this.getAttribute('color') || '#1C5C31';
      const bg = this.getAttribute('backgroundcolor') || OVERLAY_BG;
      const blur = this.getAttribute('blur') !== 'false';
      const z = this.getAttribute('zindex') || '99999';
      const title = this._titleValue();
      const subtitle = this.getAttribute('subtitle') || '';
      const variant = this._typeValue();

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${bg};z-index:${z};display:flex;align-items:center;justify-content:center;padding:40px 12px;${blur ? 'backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);' : ''}overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border-radius:12px;padding:30px 34px;min-width:280px;max-width:400px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:18px;text-align:center;box-shadow:0 18px 50px rgba(15,51,25,.30);font:14px/1.5 ${FONT};color:#1A1A1A">` +
            this._iconMarkup(variant, color) +
            `<div style="display:flex;flex-direction:column;gap:6px">` +
              `<div data-role="title" style="font:800 17px/1.3 ${FONT};color:${color}">${this._esc(title)}</div>` +
              (subtitle ? `<div data-role="subtitle" style="font:500 13px/1.45 ${FONT};color:#5A6B5E">${this._esc(subtitle)}</div>` : '') +
            `</div>` +
          `</div>` +
        `</div>`;

      this._bind();
      this._applyVisibility();
    }

    _bind() {
      const overlay = this.querySelector('[data-role="overlay"]');
      const box = this.querySelector('[data-role="box"]');
      if (overlay && box) {
        overlay.addEventListener('mousedown', (e) => { if (e.target === overlay && this._closeOnBackdrop()) this.close(); });
      }
    }

    _applyVisibility() {
      const hidden = this.getAttribute('open') === 'false' || this.style.display === 'none';
      if (hidden) { this.style.display = 'none'; this._stopAnimation(); this._unlockScroll(); return; }
      this.style.display = '';
      this._lockScroll();
      this._startAnimation();
    }

    _lockScroll() {
      if (GranadoPopupLoading._bodyOvfSaved == null) GranadoPopupLoading._bodyOvfSaved = document.body.style.overflow || '';
      document.body.style.overflow = 'hidden';
    }
    _unlockScroll() {
      // So restaura se nenhuma outra instancia estiver aberta.
      if (GranadoPopupLoading.isVisible()) return;
      if (GranadoPopupLoading._bodyOvfSaved != null) {
        document.body.style.overflow = GranadoPopupLoading._bodyOvfSaved;
        GranadoPopupLoading._bodyOvfSaved = null;
      }
    }

    // ------------------------------------------------------------
    // Markup dos variants de loader
    // ------------------------------------------------------------
    _iconMarkup(variant, color) {
      if (variant === 'dots') {
        const dot = `<span style="display:block;width:13px;height:13px;border-radius:50%;background:${color};will-change:transform"></span>`;
        return `<div data-ppl-icon data-variant="dots" style="display:flex;gap:11px;align-items:center;height:30px">${dot + dot + dot}</div>`;
      }
      if (variant === 'bars') {
        const bar = `<span style="display:block;width:8px;height:36px;border-radius:3px;background:${color};will-change:transform;transform-origin:center"></span>`;
        return `<div data-ppl-icon data-variant="bars" style="display:flex;gap:6px;align-items:center;height:40px">${bar + bar + bar + bar}</div>`;
      }
      if (variant === 'pulse') {
        const ring = `<span style="position:absolute;inset:0;border-radius:50%;background:${color};will-change:transform,opacity;opacity:0"></span>`;
        return `<div data-ppl-icon data-variant="pulse" style="position:relative;width:60px;height:60px">${ring + ring}</div>`;
      }
      if (variant === 'ring') {
        const outer = `<span style="position:absolute;inset:0;border-radius:50%;box-sizing:border-box;border:4px solid transparent;border-top-color:${color};border-right-color:${color};will-change:transform"></span>`;
        const inner = `<span style="position:absolute;inset:11px;border-radius:50%;box-sizing:border-box;border:3px solid transparent;border-bottom-color:${color};border-left-color:${color};will-change:transform"></span>`;
        return `<div data-ppl-icon data-variant="ring" style="position:relative;width:60px;height:60px">${outer + inner}</div>`;
      }
      if (variant === 'brand') {
        return `<div data-ppl-icon data-variant="brand" style="width:68px;height:68px;border-radius:12px;background:${color};border:1px solid #9A7520;display:flex;align-items:center;justify-content:center;font:800 40px/1 ${FONT};color:#0F3319;box-shadow:inset 0 1px 0 rgba(255,255,255,0.35),0 10px 28px rgba(154,117,32,0.28),0 2px 6px rgba(15,51,25,0.18);will-change:transform,box-shadow">G</div>`;
      }
      // spinner (default)
      return `<div data-ppl-icon data-variant="spinner" style="width:52px;height:52px;box-sizing:border-box;border:5px solid rgba(15,51,25,0.12);border-top-color:${color};border-radius:50%;will-change:transform"></div>`;
    }

    // ------------------------------------------------------------
    // Animacao via Web Animations API (sem injetar @keyframes).
    // ------------------------------------------------------------
    _startAnimation() {
      const icon = this.querySelector('[data-ppl-icon]');
      this._stopAnimation();
      if (!icon || typeof icon.animate !== 'function') return;
      const variant = icon.getAttribute('data-variant');
      this._anims = [];

      if (variant === 'dots') {
        icon.querySelectorAll('span').forEach((d, i) => {
          this._anims.push(d.animate(
            [{ transform: 'translateY(0)', opacity: 0.4 }, { transform: 'translateY(-11px)', opacity: 1 }, { transform: 'translateY(0)', opacity: 0.4 }],
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
            { transform: 'scale(1)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35),0 10px 28px rgba(154,117,32,0.28),0 2px 6px rgba(15,51,25,0.18),0 0 0 0 rgba(200,168,75,0.45)' },
            { transform: 'scale(1.05)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.45),0 16px 40px rgba(154,117,32,0.42),0 4px 12px rgba(15,51,25,0.22),0 0 0 16px rgba(200,168,75,0)' },
            { transform: 'scale(1)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35),0 10px 28px rgba(154,117,32,0.28),0 2px 6px rgba(15,51,25,0.18),0 0 0 0 rgba(200,168,75,0.45)' }
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

  customElements.define('granado-popup-loading', GranadoPopupLoading);
  window.GranadoPopupLoading = GranadoPopupLoading;
}
