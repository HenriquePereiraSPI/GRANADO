/* ============================================================
   <granado-message-popup>
   Popup (modal) de mensagem que fica NA FRENTE de qualquer tela,
   seguindo a ideia dos toasts: tipos "success", "error",
   "warning" e "info" (alias: "information") — cada um com seu
   ícone e cor. Tem um título, uma mensagem e um botão que apenas
   fecha o popup.

   ── Atributos
     title        - título do popup
     message      - mensagem (texto)
     type         - "info" (default) | "information" | "success" | "error" | "warning"
     button-text  - texto do botão (opcional, default "OK") — o botão apenas fecha
     open         - "false" inicia oculto (default visível)
     auto-destruct-after-seconds - (opcional) se informado (> 0), o popup se
                    "auto-destrói" (fecha) após X segundos, exibindo um badge com
                    contador regressivo no canto superior direito ("Fechando em XX").
                    Em JS use .autoDestructAfterSeconds ou, na API estática,
                    autoDestructAfterSeconds.

   ── Propriedades / métodos JS
     el.title / el.message / el.type / el.buttonText
     el.open()  -> exibir o popup
     el.close() -> ocultar o popup (e remover do DOM, se criado via API estática)

   ── API estática (uso recomendado, no estilo do GranadoToast)
     GranadoMessagePopup.show({ title, message, type, buttonText })
     GranadoMessagePopup.success(message, opts?)
     GranadoMessagePopup.error(message, opts?)
     GranadoMessagePopup.warning(message, opts?)
     GranadoMessagePopup.info(message, opts?)

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-message-popup.js"></script>

   <button onclick="GranadoMessagePopup.success('Ordem finalizada com sucesso.', { title: 'Pronto!' })">OK</button>
   <button onclick="GranadoMessagePopup.error('Falha ao gravar.', { title: 'Erro', buttonText: 'Entendi' })">Erro</button>

   <!-- ou declarativo -->
   <granado-message-popup id="msg" type="warning" title="Atenção"
     message="Verifique os dados antes de continuar." button-text="Entendi" open="false">
   </granado-message-popup>
   <script> document.getElementById('msg').open(); </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-message-popup')) {
  // Paleta por tipo — mesmas cores dos "abox" do app (callout tinto + borda + ícone).
  // hardcoded, sem var() de default.
  const PALETTE = {
    success: { text: '#1C7A38', bg: '#D2E8D7', border: '#98C8A8', icon: '✅' },
    error:   { text: '#8C1A1A', bg: '#FADADD', border: '#D48888', icon: '⛔' },
    warning: { text: '#9A5A00', bg: '#FEF0CC', border: '#E0B84A', icon: '⚠️' },
    info:    { text: '#1A4A8C', bg: '#D8E8F8', border: '#90B8E0', icon: '💡' }
  };
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const SURFACE = '#FFFFFF';
  const BORDER = '#E5E0D4';
  const FONT = "'Poppins',system-ui,Arial,sans-serif";

  function normType(t) {
    t = String(t == null ? '' : t).toLowerCase();
    if (t === 'information') t = 'info';
    return PALETTE[t] ? t : 'info';
  }

  class GranadoMessagePopup extends HTMLElement {
    static get observedAttributes() { return ['title', 'message', 'type', 'button-text', 'open', 'auto-destruct-after-seconds']; }

    // ------------------------------------------------------------
    // API estática
    // ------------------------------------------------------------
    static show(opts) {
      if (typeof opts === 'string') opts = { message: opts };
      opts = opts || {};
      const el = document.createElement('granado-message-popup');
      if (opts.type != null) el.setAttribute('type', String(opts.type));
      if (opts.title != null) el.setAttribute('title', String(opts.title));
      if (opts.message != null) el.setAttribute('message', String(opts.message));
      const bt = opts.buttonText != null ? opts.buttonText : opts.buttontext;
      if (bt != null) el.setAttribute('button-text', String(bt));
      if (opts.autoDestructAfterSeconds != null) el.setAttribute('auto-destruct-after-seconds', String(opts.autoDestructAfterSeconds));
      el._autoRemove = true;   // criado dinamicamente -> some do DOM ao fechar
      document.body.appendChild(el);
      el.open();
      return el;
    }
    static success(message, opts) { return GranadoMessagePopup.show(Object.assign({}, opts, { type: 'success', message: message })); }
    static error(message, opts) { return GranadoMessagePopup.show(Object.assign({}, opts, { type: 'error', message: message })); }
    static warning(message, opts) { return GranadoMessagePopup.show(Object.assign({}, opts, { type: 'warning', message: message })); }
    static info(message, opts) { return GranadoMessagePopup.show(Object.assign({}, opts, { type: 'info', message: message })); }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      ['message', 'type', 'buttonText'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
      if (this.getAttribute('open') !== 'false') this._startAutoDestruct();
    }
    disconnectedCallback() { this._stopAutoDestruct(); }
    attributeChangedCallback(name) {
      if (name === 'open') {
        const hidden = this.getAttribute('open') === 'false';
        this.style.display = hidden ? 'none' : '';
        if (hidden) this._stopAutoDestruct();
      }
      if (this.isConnected) this._render();
      if (name === 'auto-destruct-after-seconds' && this.isConnected && this.getAttribute('open') !== 'false') {
        this._remaining = null;
        this._startAutoDestruct();
      }
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get message() { return this.getAttribute('message') || ''; }
    set message(v) { this.setAttribute('message', String(v == null ? '' : v)); }
    get type() { return this.getAttribute('type') || 'info'; }
    set type(v) { this.setAttribute('type', String(v == null ? '' : v)); }
    get buttonText() { return this.getAttribute('button-text') || 'OK'; }
    set buttonText(v) { this.setAttribute('button-text', String(v == null ? '' : v)); }

    get autoDestructAfterSeconds() { return this._autoSeconds(); }
    set autoDestructAfterSeconds(v) {
      if (v == null || v === '' || Number(v) <= 0) this.removeAttribute('auto-destruct-after-seconds');
      else this.setAttribute('auto-destruct-after-seconds', String(v));
    }

    open() { this.removeAttribute('open'); this.style.display = ''; if (this.isConnected) this._render(); this._remaining = null; this._startAutoDestruct(); }
    close() { this._stopAutoDestruct(); this.style.display = 'none'; if (this._autoRemove) this.remove(); }

    // ── Auto-destruição (contador regressivo) ──
    _autoSeconds() { const v = parseInt(this.getAttribute('auto-destruct-after-seconds'), 10); return (isNaN(v) || v <= 0) ? 0 : v; }
    _stopAutoDestruct() { if (this._adTimer) { clearInterval(this._adTimer); this._adTimer = null; } }
    _startAutoDestruct() {
      this._stopAutoDestruct();
      const secs = this._autoSeconds();
      if (!secs) return;
      if (this._remaining == null) this._remaining = secs;
      this._updateCountdown();
      const self = this;
      this._adTimer = setInterval(function () {
        self._remaining -= 1;
        if (self._remaining <= 0) { self._remaining = 0; self._updateCountdown(); self._stopAutoDestruct(); self.close(); return; }
        self._updateCountdown();
      }, 1000);
    }
    _updateCountdown() {
      const el = this.querySelector('[data-role="countdown"]');
      if (el) el.textContent = String(Math.max(0, this._remaining || 0));
    }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }

    _render() {
      const p = PALETTE[normType(this.type)];
      const title = this.getAttribute('title') || '';
      const message = this.getAttribute('message') || '';
      const btn = this.getAttribute('button-text') || 'OK';

      // Callout no estilo "abox": ícone + texto, com fundo tinto, borda e cor do tipo.
      const callout = message
        ? `<div style="border-radius:8px;padding:12px 15px;display:flex;gap:10px;align-items:flex-start;font:13px/1.55 ${FONT};background:${p.bg};border:1px solid ${p.border};color:${p.text};margin-bottom:18px">` +
            `<span style="font-size:18px;flex-shrink:0;line-height:1.2">${p.icon}</span>` +
            `<div style="flex:1;min-width:0">${this._esc(message)}</div>` +
          `</div>`
        : '<div style="margin-bottom:18px"></div>';

      const secs = this._autoSeconds();
      const countdownHtml = secs
        ? `<div style="position:absolute;top:12px;right:14px;padding:3px 10px;border-radius:20px;font:800 10px/1.4 ${FONT};background:${p.bg};color:${p.text};border:1px solid ${p.border};white-space:nowrap">Fechando em <span data-role="countdown">${this._remaining != null ? this._remaining : secs}</span></div>`
        : '';

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:center;justify-content:center;padding:40px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="position:relative;background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${p.text};border-radius:12px;padding:24px 26px;max-width:460px;width:94%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:#1A1A1A">` +
            countdownHtml +
            (title ? `<div style="display:flex;align-items:center;gap:9px;margin-bottom:14px${secs ? ';padding-right:104px' : ''}"><span style="font-size:22px;flex-shrink:0;line-height:1">${p.icon}</span><span style="font-size:19px;font-weight:800;color:${p.text}">${this._esc(title)}</span></div>` : '') +
            callout +
            `<div style="display:flex;justify-content:flex-end">` +
              `<button type="button" data-role="ok" style="font:700 13px/1.4 ${FONT};padding:9px 24px;border:1px solid ${p.text};border-radius:8px;background:${p.text};color:#fff;cursor:pointer;min-width:120px">${this._esc(btn)}</button>` +
            `</div>` +
          `</div>` +
        `</div>`;

      this._bind();
    }

    _bind() {
      const overlay = this.querySelector('[data-role="overlay"]');
      const box = this.querySelector('[data-role="box"]');
      const okBtn = this.querySelector('[data-role="ok"]');
      const onClose = () => this.close();
      if (okBtn) okBtn.addEventListener('click', onClose);
      // Clique fora da caixa (backdrop) também fecha.
      if (overlay && box) overlay.addEventListener('mousedown', (e) => { if (e.target === overlay) onClose(); });
    }
  }

  customElements.define('granado-message-popup', GranadoMessagePopup);
  window.GranadoMessagePopup = GranadoMessagePopup;
}
