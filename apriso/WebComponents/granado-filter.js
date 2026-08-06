/* ============================================================
   <granado-filter>
   Filtro RESPONSIVO:
     - DESKTOP (> breakpoint): renderiza os campos INLINE, numa caixa de
       filtros (como um painel normal na página).
     - MOBILE (<= breakpoint): vira um ÍCONE DE FUNIL que, ao clicar, abre
       um BOTTOM-SHEET (painel deslizante de baixo) com os mesmos campos.
   Alterna sozinho ao cruzar o breakpoint (default 768px).

   ── Conteúdo (formas, nesta prioridade)
     1. propriedade JS  el.content = '<div>…</div>'
     2. atributo        content="<div>…</div>"   (HTML como string)
     3. filhos declarativos:
          <granado-filter> …seus campos de filtro… </granado-filter>
        (os filhos são movidos para dentro do painel)

   ── Atributos (todos opcionais)
     title        - título do painel. Default "Filtros".
     label        - texto ao lado do ícone no gatilho (default: só ícone).
     apply-text   - texto do botão de aplicar (default "Aplicar filtros").
                    Vazio / "false" esconde o botão.
     color        - cor de destaque (ícone + botão aplicar). Default "#1C5C31".
     breakpoint   - largura máxima do "mobile" (CSS). Default "768px".
                    Acima disso, os filtros ficam inline (desktop).
     width        - largura máxima do painel no mobile (CSS). Default "640px"
                    (centralizado; ocupa a largura toda em telas pequenas).
     close-on-backdrop - "false" NÃO fecha ao clicar fora. Default: fecha.
     open         - "true" já inicia aberto.
     onApply / onClose - (opcional) string/func JS ao aplicar/fechar.

   ── Eventos (CustomEvent, bubbles)
     "open"   - painel aberto.
     "apply"  - clique em "Aplicar" (o painel fecha em seguida).
     "close"  - painel fechado (✕, Esc, backdrop, aplicar ou close()).

   ── Métodos JS
     el.open() / el.close() / el.toggle()

   ── Observações
     Os campos de filtro normalmente já filtram "ao vivo" (onchange/oninput).
     O botão "Aplicar" apenas fecha o painel (e dispara "apply", caso queira
     re-filtrar no fechamento).

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-filter.js"></script>

   <div style="display:flex;align-items:center;justify-content:space-between">
     <h3>Histórico</h3>
     <granado-filter title="Filtros">
       <div style="display:grid;gap:10px">
         <granado-input label="Operador" oninputevent="filtrar()"></granado-input>
         <granado-dropdown label="Status" oncchange="filtrar()"></granado-dropdown>
       </div>
     </granado-filter>
   </div>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-filter')) {
  const SURFACE = '#FDFAF1';
  const SURFACE2 = '#F4EED9';
  const BORDER = '#E5DDC8';
  const VERDE = '#1C5C31';
  const TEXT = '#103E20';
  const TEXT2 = '#5A6B5E';
  const TEXT3 = '#8A9E8E';
  const OVERLAY_BG = 'rgba(15,51,25,.5)';
  const FONT = "'Poppins','DejaVu Sans',Arial,sans-serif";

  const FUNNEL = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>';

  class GranadoFilter extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'label', 'apply-text', 'content', 'color', 'width', 'breakpoint', 'no-trigger', 'close-on-backdrop', 'open'];
    }

    connectedCallback() {
      if (!this._contentNodes) this._contentNodes = [];
      if (!this._observer) {
        this._observer = new MutationObserver(() => { if (this._writing) return; this._relocateStray(); });
      }
      this._setupMql();
      this._render();
      this._observer.observe(this, { childList: true });
      if (this.getAttribute('open') === 'true' && this._isMobile()) this.open();
    }
    disconnectedCallback() {
      this._removeEsc();
      this._teardownMql();
      if (this._observer) this._observer.disconnect();
    }
    attributeChangedCallback(name) {
      if (!this.isConnected) return;
      if (name === 'open') { (this.getAttribute('open') === 'true') ? this.open() : this.close(); return; }
      if (name === 'breakpoint') { this._setupMql(); }
      this._render();
    }

    // Media query "mobile" — alterna entre inline (desktop) e bottom-sheet.
    _setupMql() {
      this._teardownMql();
      const bp = this.getAttribute('breakpoint') || '768px';
      this._mql = window.matchMedia('(max-width:' + bp + ')');
      this._mqlHandler = () => { if (this.isConnected) this._render(); };
      if (this._mql.addEventListener) this._mql.addEventListener('change', this._mqlHandler);
      else if (this._mql.addListener) this._mql.addListener(this._mqlHandler);   // Safari antigo
    }
    _teardownMql() {
      if (this._mql && this._mqlHandler) {
        if (this._mql.removeEventListener) this._mql.removeEventListener('change', this._mqlHandler);
        else if (this._mql.removeListener) this._mql.removeListener(this._mqlHandler);
      }
    }
    _isMobile() {
      if (this._mql) return this._mql.matches;
      const bp = this.getAttribute('breakpoint') || '768px';
      return window.matchMedia('(max-width:' + bp + ')').matches;
    }

    // ------------------------------------------------------------
    // API JS
    // ------------------------------------------------------------
    get content() { return (this._contentHtml != null) ? this._contentHtml : this.getAttribute('content'); }
    set content(v) { this._contentHtml = (v == null) ? null : String(v); this._contentNodes = []; if (this.isConnected) this._render(); }
    get onApply() { return this._onApplyFn || null; }
    set onApply(fn) { this._onApplyFn = (typeof fn === 'function') ? fn : null; }
    get onClose() { return this._onCloseFn || null; }
    set onClose(fn) { this._onCloseFn = (typeof fn === 'function') ? fn : null; }

    toggle() { this._isOpen ? this.close() : this.open(); }
    open() {
      const bd = this._el('backdrop'), sh = this._el('sheet');
      if (!bd || !sh) return;
      bd.style.display = 'block';
      sh.style.display = 'block';
      // força reflow p/ animar o slide
      void sh.offsetHeight;
      sh.style.transform = 'translateY(0)';
      this._isOpen = true;
      this._addEsc();
      this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
    }
    close() {
      const bd = this._el('backdrop'), sh = this._el('sheet');
      if (!bd || !sh) { this._isOpen = false; return; }
      sh.style.transform = 'translateY(100%)';
      bd.style.display = 'none';
      const hide = () => { sh.style.display = 'none'; };
      setTimeout(hide, 220);
      this._isOpen = false;
      this._removeEsc();
      this._fireClose();
    }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _el(role) { return this.querySelector(':scope > [data-role="' + role + '"]'); }
    _bodyEl() { return this.querySelector('[data-role="body"]'); }
    _esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch])); }
    _usingHtml() { return (this._contentHtml != null) || (this.getAttribute('content') != null); }
    _closeOnBackdrop() { return this.getAttribute('close-on-backdrop') !== 'false'; }

    _render() {
      if (!this._contentNodes) this._contentNodes = [];
      const usingHtml = this._usingHtml();

      // Captura filhos "de conteúdo" antes de reconstruir a casca.
      if (!usingHtml) {
        Array.from(this.childNodes).forEach((n) => {
          if (n.nodeType === 1 && n.getAttribute && n.getAttribute('data-role')) return;   // é parte da casca
          if (this._contentNodes.indexOf(n) === -1) this._contentNodes.push(n);
        });
      }

      const title = this.getAttribute('title') || 'Filtros';
      const label = this.getAttribute('label') || '';
      const color = this.getAttribute('color') || VERDE;
      const width = this.getAttribute('width') || '640px';
      const applyAttr = this.getAttribute('apply-text');
      const applyText = (applyAttr === '' || applyAttr === 'false') ? '' : (applyAttr || 'Aplicar filtros');

      const trigStyle = 'display:inline-flex;align-items:center;justify-content:center;gap:8px;flex-shrink:0;' +
        'height:34px;' + (label ? 'padding:0 12px;' : 'width:34px;padding:0;') +
        `border:1px solid ${BORDER};border-radius:8px;background:${SURFACE};color:${color};cursor:pointer;font:700 13px/1.4 ${FONT}`;
      const trigger = `<button data-role="trigger" type="button" title="${this._esc(title)}" aria-label="${this._esc(title)}" style="${trigStyle}">${FUNNEL}${label ? `<span>${this._esc(label)}</span>` : ''}</button>`;

      const backdrop = `<div data-role="backdrop" style="display:none;position:fixed;inset:0;background:${OVERLAY_BG};z-index:99998"></div>`;

      const applyHtml = applyText
        ? `<div style="position:sticky;bottom:0;background:${SURFACE};padding:12px 18px 18px;border-top:1px solid ${BORDER}">` +
            `<button data-role="apply" type="button" style="width:100%;font:700 14px/1.4 ${FONT};padding:11px;border:1px solid ${color};border-radius:8px;background:${color};color:#fff;cursor:pointer">${this._esc(applyText)}</button>` +
          `</div>`
        : '';

      const sheet =
        `<div data-role="sheet" style="display:none;position:fixed;left:0;right:0;bottom:0;margin:0 auto;max-width:${width};z-index:99999;background:${SURFACE};border:1px solid ${BORDER};border-bottom:none;border-radius:16px 16px 0 0;box-shadow:0 -10px 34px rgba(15,51,25,.28);max-height:85vh;overflow-y:auto;box-sizing:border-box;transform:translateY(100%);transition:transform .22s ease">` +
          `<div style="position:sticky;top:0;background:${SURFACE};display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 18px 10px;z-index:1">` +
            `<div style="display:flex;align-items:center;gap:8px;font:700 15px/1.3 ${FONT};color:${TEXT}"><span style="color:${color};display:flex">${FUNNEL}</span>${this._esc(title)}</div>` +
            `<button data-role="close" type="button" aria-label="Fechar" style="flex-shrink:0;background:transparent;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font:13px/1 ${FONT};color:${TEXT2}">&#10005;</button>` +
          `</div>` +
          `<div data-role="body" style="padding:6px 18px 14px;font:13px/1.5 ${FONT};color:${TEXT}"></div>` +
          applyHtml +
        `</div>`;

      // Desktop: caixa de filtros inline (sem funil/sheet).
      const inline =
        `<div data-role="inline" style="padding:14px 16px;background:${SURFACE2};border:1px solid ${BORDER};border-radius:8px">` +
          `<div style="display:flex;align-items:center;gap:8px;font:900 9px/1.4 ${FONT};letter-spacing:.12em;text-transform:uppercase;color:${TEXT3};margin-bottom:12px"><span style="color:${color};display:flex">${FUNNEL}</span>${this._esc(title)}</div>` +
          `<div data-role="body" style="font:13px/1.5 ${FONT};color:${TEXT}"></div>` +
        `</div>`;

      // Atributo booleano: presente (mesmo vazio) = true, salvo no-trigger="false".
      const noTrigger = this.hasAttribute('no-trigger') && this.getAttribute('no-trigger') !== 'false';

      this._writing = true;
      if (this._isMobile()) {
        // no-trigger: gatilho externo (ex.: um funil no cabeçalho da tela) chama .open().
        this.style.display = noTrigger ? 'block' : 'inline-flex';
        this.innerHTML = (noTrigger ? '' : trigger) + backdrop + sheet;
      } else {
        this.style.display = 'block';
        this.innerHTML = inline;
        this._isOpen = false;
        this._removeEsc();
      }
      this._writing = false;

      // Popula o corpo do painel.
      const body = this._bodyEl();
      if (body) {
        if (usingHtml) {
          body.innerHTML = (this._contentHtml != null) ? this._contentHtml : (this.getAttribute('content') || '');
        } else if (this._contentNodes.length) {
          this._contentNodes.forEach((n) => body.appendChild(n));
        }
      }

      this._bind();
    }

    _relocateStray() {
      if (this._usingHtml()) return;
      const body = this._bodyEl();
      if (!body) return;
      const stray = Array.from(this.childNodes).filter((n) => !(n.nodeType === 1 && n.getAttribute && n.getAttribute('data-role')));
      if (!stray.length) return;
      this._writing = true;
      stray.forEach((n) => { if (this._contentNodes.indexOf(n) === -1) this._contentNodes.push(n); body.appendChild(n); });
      this._writing = false;
    }

    _bind() {
      const self = this;
      const trig = this._el('trigger');
      if (trig) trig.addEventListener('click', function () { self.toggle(); });
      const close = this.querySelector('[data-role="close"]');
      if (close) close.addEventListener('click', function () { self.close(); });
      const bd = this._el('backdrop');
      if (bd) bd.addEventListener('click', function () { if (self._closeOnBackdrop()) self.close(); });
      const apply = this.querySelector('[data-role="apply"]');
      if (apply) apply.addEventListener('click', function () {
        self.dispatchEvent(new CustomEvent('apply', { bubbles: true, composed: true }));
        if (typeof self._onApplyFn === 'function') self._onApplyFn();
        const h = self.getAttribute('onapply');
        if (h) new Function(h).call(self);
        self.close();
      });
    }

    _fireClose() {
      this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
      if (typeof this._onCloseFn === 'function') this._onCloseFn();
      const h = this.getAttribute('onclose');
      if (h) new Function(h).call(this);
    }

    _addEsc() {
      if (this._escBound) return;
      const self = this;
      this._escHandler = function (e) { if (e.key === 'Escape' || e.key === 'Esc') self.close(); };
      document.addEventListener('keydown', this._escHandler);
      this._escBound = true;
    }
    _removeEsc() { if (this._escBound) { document.removeEventListener('keydown', this._escHandler); this._escBound = false; } }
  }

  customElements.define('granado-filter', GranadoFilter);
  window.GranadoFilter = GranadoFilter;
}
