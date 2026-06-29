/* ============================================================
   <granado-option-popup>
   Popup (modal) de opções — mesma ideia do <granado-message-popup>
   (callout no estilo "abox", com tipos success/error/warning/info),
   porém com VÁRIOS botões de ação (1 a 3). Cada botão dispara o seu
   próprio clique.

   ── Atributos
     title        - título do popup
     message      - mensagem (texto)
     type         - "info" (default) | "information" | "success" | "error" | "warning"
     buttons      - JSON com a lista de botões (1 a 3). Em JS prefira a
                    propriedade .buttons (array). Cada item:
                      { text, value?, variant?, onClick? }
                        text    - rótulo do botão
                        value   - id retornado no clique (default = text)
                        variant - "primary" (preenchido, cor do tipo) | "ghost"
                                  (contorno neutro). Default: último = primary,
                                  demais = ghost.
                        color   - (opcional) cor custom do botão (ex.: "#6B3FA0").
                                  Em "primary" vira o preenchimento; em "ghost",
                                  a borda + o texto.
                        onClick - (opcional) string JS executada no clique
                                  (recebe event, detail); ou função (via .buttons)
     open         - "false" inicia oculto (default visível)
     onOptionClick- (opcional) string JS executada em QUALQUER clique de botão
                    (recebe event, detail)

   ── Eventos (CustomEvent, bubbles)
     "option-click" -> detail { index, value, text }
   (O clique fora da caixa apenas fecha — sem evento.)

   ── Propriedades / métodos JS
     el.title / el.message / el.type / el.buttons
     el.open()  -> exibir   ·   el.close() -> ocultar (e remove do DOM se via API estática)

   ── API estática
     GranadoOptionPopup.show({ title, message, type, buttons })
       - buttons[i].onClick pode ser uma função.

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-option-popup.js"></script>

   <script>
     GranadoOptionPopup.show({
       type: 'warning',
       title: 'Sala parada',
       message: 'Deseja realmente reativar a sala e liberar a pesagem?',
       buttons: [
         { text: 'Cancelar', value: 'cancel', variant: 'ghost' },
         { text: 'Reativar sala', value: 'reativar', variant: 'primary',
           onClick: function (detail) { console.log('escolheu', detail.value); } }
       ]
     });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-option-popup')) {
  // Paleta por tipo — mesmas cores dos "abox" do app.
  const PALETTE = {
    success: { text: '#1C7A38', bg: '#D2E8D7', border: '#98C8A8', icon: '✅' },
    error:   { text: '#8C1A1A', bg: '#FADADD', border: '#D48888', icon: '⛔' },
    warning: { text: '#9A5A00', bg: '#FEF0CC', border: '#E0B84A', icon: '⚠️' },
    info:    { text: '#1A4A8C', bg: '#D8E8F8', border: '#90B8E0', icon: '💡' }
  };
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const SURFACE = '#FFFFFF';
  const BORDER = '#E5E0D4';
  const GHOST_TXT = '#555555';
  const FONT = "'Poppins',system-ui,Arial,sans-serif";

  function normType(t) {
    t = String(t == null ? '' : t).toLowerCase();
    if (t === 'information') t = 'info';
    return PALETTE[t] ? t : 'info';
  }

  class GranadoOptionPopup extends HTMLElement {
    static get observedAttributes() { return ['title', 'message', 'type', 'buttons', 'open']; }

    // ------------------------------------------------------------
    // API estática
    // ------------------------------------------------------------
    static show(opts) {
      opts = opts || {};
      const el = document.createElement('granado-option-popup');
      if (opts.type != null) el.setAttribute('type', String(opts.type));
      if (opts.title != null) el.setAttribute('title', String(opts.title));
      if (opts.message != null) el.setAttribute('message', String(opts.message));
      if (opts.onOptionClick != null) el.setAttribute('onOptionClick', String(opts.onOptionClick));
      el._autoRemove = true;
      document.body.appendChild(el);
      if (opts.buttons != null) el.buttons = opts.buttons;  // mantém funções onClick
      el.open();
      return el;
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      ['message', 'type', 'buttons'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
    }
    attributeChangedCallback(name) {
      if (name === 'buttons') this._buttonsArr = null;
      if (name === 'open') this.style.display = (this.getAttribute('open') === 'false') ? 'none' : '';
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get message() { return this.getAttribute('message') || ''; }
    set message(v) { this.setAttribute('message', String(v == null ? '' : v)); }
    get type() { return this.getAttribute('type') || 'info'; }
    set type(v) { this.setAttribute('type', String(v == null ? '' : v)); }

    get buttons() {
      if (this._buttonsArr && Array.isArray(this._buttonsArr)) return this._buttonsArr;
      return this._parse(this.getAttribute('buttons'));
    }
    set buttons(v) {
      if (typeof v === 'string') { this.setAttribute('buttons', v); this._buttonsArr = null; }
      else { this._buttonsArr = Array.isArray(v) ? v : []; }
      if (this.isConnected) this._render();
    }

    open() { this.removeAttribute('open'); this.style.display = ''; if (this.isConnected) this._render(); }
    close() { this.style.display = 'none'; if (this._autoRemove) this.remove(); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _parse(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
    // Normaliza para [{ text, value, variant, onClick }], limitado a 3 botões.
    _normButtons(src) {
      let arr = Array.isArray(src) ? src.slice(0, 3) : [];
      arr = arr.map((b) => (typeof b === 'string' ? { text: b } : (b || {})));
      if (!arr.length) arr = [{ text: 'OK' }];
      const n = arr.length;
      return arr.map((b, i) => ({
        text: b.text != null ? String(b.text) : 'OK',
        value: b.value != null ? b.value : (b.text != null ? b.text : ''),
        variant: b.variant || (i === n - 1 ? 'primary' : 'ghost'),
        color: b.color || null,   // cor custom opcional do botão
        onClick: b.onClick
      }));
    }

    _render() {
      const p = PALETTE[normType(this.type)];
      const title = this.getAttribute('title') || '';
      const message = this.getAttribute('message') || '';
      const btns = this._normButtons(this.buttons);
      this._renderBtns = btns;

      const callout = message
        ? `<div style="border-radius:8px;padding:12px 15px;display:flex;gap:10px;align-items:flex-start;font:13px/1.55 ${FONT};background:${p.bg};border:1px solid ${p.border};color:${p.text};margin-bottom:18px">` +
            `<span style="font-size:18px;flex-shrink:0;line-height:1.2">${p.icon}</span>` +
            `<div style="flex:1;min-width:0">${this._esc(message)}</div>` +
          `</div>`
        : '<div style="margin-bottom:18px"></div>';

      const botoes = btns.map((b, i) => {
        const bc = b.color || p.text;  // cor base (custom ou do tipo)
        const style = (b.variant === 'ghost')
          ? `border:1px solid ${b.color || BORDER};background:transparent;color:${b.color || GHOST_TXT}`
          : `border:1px solid ${bc};background:${bc};color:#fff`;
        return `<button type="button" data-role="opt" data-index="${i}" style="flex:1;font:700 13px/1.4 ${FONT};padding:9px 16px;border-radius:8px;cursor:pointer;white-space:nowrap;${style}">${this._esc(b.text)}</button>`;
      }).join('');

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:center;justify-content:center;padding:40px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${p.text};border-radius:12px;padding:24px 26px;max-width:460px;width:94%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:#1A1A1A">` +
            (title ? `<div style="display:flex;align-items:center;gap:9px;margin-bottom:14px"><span style="font-size:22px;flex-shrink:0;line-height:1">${p.icon}</span><span style="font-size:19px;font-weight:800;color:${p.text}">${this._esc(title)}</span></div>` : '') +
            callout +
            `<div style="display:flex;gap:10px">${botoes}</div>` +
          `</div>` +
        `</div>`;

      this._bind();
    }

    _bind() {
      const overlay = this.querySelector('[data-role="overlay"]');
      const box = this.querySelector('[data-role="box"]');
      const self = this;
      this.querySelectorAll('[data-role="opt"]').forEach((btnEl) => {
        btnEl.addEventListener('click', function (ev) {
          const idx = parseInt(btnEl.getAttribute('data-index'), 10) || 0;
          const b = (self._renderBtns || [])[idx] || {};
          const detail = { index: idx, value: b.value, text: b.text };
          self.dispatchEvent(new CustomEvent('option-click', { bubbles: true, composed: true, detail: detail }));
          // handler do próprio botão (função ou string JS)
          if (typeof b.onClick === 'function') b.onClick(detail, ev);
          else if (typeof b.onClick === 'string' && b.onClick) new Function('event', 'detail', b.onClick).call(self, ev, detail);
          // handler global opcional
          const h = self.getAttribute('onoptionclick');
          if (h) new Function('event', 'detail', h).call(self, ev, detail);
          self.close();
        });
      });
      // Clique fora da caixa apenas fecha (sem evento).
      if (overlay && box) overlay.addEventListener('mousedown', (e) => { if (e.target === overlay) self.close(); });
    }
  }

  customElements.define('granado-option-popup', GranadoOptionPopup);
  window.GranadoOptionPopup = GranadoOptionPopup;
}
