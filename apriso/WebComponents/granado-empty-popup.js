/* ============================================================
   <granado-empty-popup>
   Popup "casca" genérico — monta QUALQUER HTML dentro dele.
   Serve como moldura (backdrop + card + ✕) para conteúdo livre.

   ── Conteúdo (4 formas, nesta prioridade)
     1. show({ content: '<div>…</div>' })  — API estática
     2. propriedade JS  el.content = '<div>…</div>'
     3. atributo        content="<div>…</div>"   (HTML como string)
     4. filhos declarativos:
          <granado-empty-popup open="false"> …seu HTML… </granado-empty-popup>
        (os filhos são movidos para dentro do card ao renderizar)

   ── Atributos (todos opcionais)
     title             - título no topo do card.
     subtitle          - subtítulo (abaixo do título).
     content           - HTML (string) a ser montado no corpo.
     width             - largura máxima do card (CSS). Default "520px".
     color             - cor do detalhe (borda superior). Default "#1C5C31".
     show-close        - "false" esconde o ✕. Default: mostra.
     close-on-backdrop - "true" fecha ao clicar fora. Default: NÃO fecha.
                         (O ✕ e a tecla Esc sempre fecham.)
     open              - "false" inicia oculto. Use open()/close().
     onClose           - (opcional) string/func JS executada ao fechar.

   ── Eventos (CustomEvent, bubbles)
     "close" -> disparado ao fechar (✕, Esc, backdrop, close()).

   ── API estática
     GranadoEmptyPopup.show({ title, subtitle, content, width, color,
                              closeOnBackdrop, showClose, onClose });
     -> cria, injeta no body, abre e retorna o elemento (auto-remove ao fechar).

   ── Fechar por um botão DENTRO do conteúdo (2 formas)
     1. atributo data-close: qualquer elemento do conteúdo com [data-close]
        fecha o popup ao ser clicado. Ex.: <button data-close>Fechar</button>
     2. via JS: this.closest('granado-empty-popup').close()

   ── Métodos JS
     el.open() / el.close()
     el.content = '<html…>'   (re-renderiza)

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-empty-popup.js"></script>
   <script>
     GranadoEmptyPopup.show({
       title: 'Detalhes da Ordem',
       width: '640px',
       content: '<p>Qualquer <strong>HTML</strong> aqui…</p>' +
                '<granado-table id="t"></granado-table>',
       closeOnBackdrop: true
     });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-empty-popup')) {
  const SURFACE = '#FDFAF1';
  const BORDER = '#E5DDC8';
  const VERDE = '#1C5C31';
  const TEXT = '#103E20';
  const TEXT2 = '#5A6B5E';
  const TEXT3 = '#8A9E8E';
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const FONT = "'Poppins','DejaVu Sans',Arial,sans-serif";

  class GranadoEmptyPopup extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'subtitle', 'content', 'width', 'color', 'show-close', 'close-on-backdrop', 'open'];
    }

    // ------------------------------------------------------------
    // API estática
    // ------------------------------------------------------------
    static show(opts) {
      opts = opts || {};
      const el = document.createElement('granado-empty-popup');
      if (opts.title != null) el.setAttribute('title', String(opts.title));
      if (opts.subtitle != null) el.setAttribute('subtitle', String(opts.subtitle));
      if (opts.width != null) el.setAttribute('width', String(opts.width));
      if (opts.color != null) el.setAttribute('color', String(opts.color));
      if (opts.showClose != null) el.setAttribute('show-close', opts.showClose ? 'true' : 'false');
      if (opts.closeOnBackdrop != null) el.setAttribute('close-on-backdrop', opts.closeOnBackdrop ? 'true' : 'false');
      if (opts.onClose != null && typeof opts.onClose !== 'function') el.setAttribute('onclose', String(opts.onClose));
      if (typeof opts.onClose === 'function') el._onCloseFn = opts.onClose;
      el._autoRemove = true;
      if (opts.content != null) el._contentHtml = String(opts.content);
      else if (opts.html != null) el._contentHtml = String(opts.html);
      document.body.appendChild(el);
      el.open();
      return el;
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      if (!this._contentNodes) this._contentNodes = [];
      if (!this._observer) {
        this._observer = new MutationObserver(() => { if (this._writing) return; this._relocateStray(); });
      }
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
      this._observer.observe(this, { childList: true });
    }

    disconnectedCallback() {
      this._removeEsc();
      if (this._observer) this._observer.disconnect();
    }

    attributeChangedCallback(name) {
      if (!this.isConnected) return;
      if (name === 'open') this.style.display = (this.getAttribute('open') === 'false') ? 'none' : '';
      this._render();
    }

    // ------------------------------------------------------------
    // API JS
    // ------------------------------------------------------------
    get content() { return (this._contentHtml != null) ? this._contentHtml : this.getAttribute('content'); }
    set content(v) {
      this._contentHtml = (v == null) ? null : String(v);
      this._contentNodes = [];   // conteúdo em string sobrepõe filhos capturados
      if (this.isConnected) this._render();
    }

    get onClose() { return this._onCloseFn || null; }
    set onClose(fn) { this._onCloseFn = (typeof fn === 'function') ? fn : null; }

    open() {
      this.removeAttribute('open');
      this.style.display = '';
      if (this.isConnected) this._render();
      this._addEsc();
    }
    close() {
      this.style.display = 'none';
      this._removeEsc();
      this._fireClose();
      if (this._autoRemove) this.remove();
    }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"]/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
    }
    _has(v) { return v != null && String(v) !== ''; }
    _closeOnBackdrop() { return this.getAttribute('close-on-backdrop') === 'true'; }
    _usingHtml() { return (this._contentHtml != null) || (this.getAttribute('content') != null); }

    _overlay() { return this.querySelector(':scope > [data-role="overlay"]'); }
    _bodyEl() { return this.querySelector('[data-role="body"]'); }

    _render() {
      if (!this._contentNodes) this._contentNodes = [];
      const usingHtml = this._usingHtml();

      // Captura filhos "de conteúdo" (declarativos) antes de reconstruir a casca.
      if (!usingHtml) {
        const overlay = this._overlay();
        Array.from(this.childNodes).forEach((n) => {
          if (n !== overlay && this._contentNodes.indexOf(n) === -1) this._contentNodes.push(n);
        });
      }

      const title = this.getAttribute('title') || '';
      const subtitle = this.getAttribute('subtitle') || '';
      const width = this.getAttribute('width') || '520px';
      const color = this.getAttribute('color') || VERDE;
      const showClose = this.getAttribute('show-close') !== 'false';

      const titleHtml = title
        ? `<div style="font:700 17px/1.25 ${FONT};color:${TEXT}">${this._esc(title)}</div>` : '';
      const subtitleHtml = subtitle
        ? `<div style="font:12px/1.4 ${FONT};color:${TEXT2};margin-top:2px">${this._esc(subtitle)}</div>` : '';
      const closeBtn = showClose
        ? `<button type="button" data-role="close" aria-label="Fechar" title="Fechar" style="height:auto !important;min-height:0 !important;flex-shrink:0;background:transparent;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font:13px/1 ${FONT};color:${TEXT2}">&#10005;</button>` : '';

      const hasHeader = title || subtitle || showClose;
      const header = hasHeader
        ? `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:${(title || subtitle) ? '14px' : '4px'}">` +
            `<div style="min-width:0">${titleHtml}${subtitleHtml}</div>${closeBtn}` +
          `</div>`
        : '';

      this._writing = true;
      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:40px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${color};border-radius:12px;padding:22px 24px;max-width:${width};width:96%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:${TEXT};margin:auto">` +
            header +
            `<div data-role="body" style="font:14px/1.5 ${FONT};color:${TEXT}"></div>` +
          `</div>` +
        `</div>`;
      this._writing = false;

      // Popula o corpo: HTML (string) OU os nós de conteúdo capturados.
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

    // Move para o corpo qualquer filho direto que não seja a overlay
    // (conteúdo declarado no HTML e adicionado pelo parser após o 1º render).
    _relocateStray() {
      if (this._usingHtml()) return;
      const overlay = this._overlay();
      const body = this._bodyEl();
      if (!overlay || !body) return;
      const stray = Array.from(this.childNodes).filter((n) => n !== overlay);
      if (!stray.length) return;
      this._writing = true;
      stray.forEach((n) => { if (this._contentNodes.indexOf(n) === -1) this._contentNodes.push(n); body.appendChild(n); });
      this._writing = false;
    }

    _bind() {
      const self = this;
      const closeBtn = this.querySelector('[data-role="close"]');
      if (closeBtn) closeBtn.addEventListener('click', function () { self.close(); });
      const overlay = this._overlay();
      if (overlay) overlay.addEventListener('mousedown', function (e) {
        if (e.target === overlay && self._closeOnBackdrop()) self.close();
      });
      // Conveniência: qualquer elemento do conteúdo com [data-close] fecha o popup.
      const body = this._bodyEl();
      if (body) Array.from(body.querySelectorAll('[data-close]')).forEach(function (el) {
        el.addEventListener('click', function (ev) { ev.preventDefault(); self.close(); });
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
    _removeEsc() {
      if (this._escBound) { document.removeEventListener('keydown', this._escHandler); this._escBound = false; }
    }
  }

  customElements.define('granado-empty-popup', GranadoEmptyPopup);
  window.GranadoEmptyPopup = GranadoEmptyPopup;
}
