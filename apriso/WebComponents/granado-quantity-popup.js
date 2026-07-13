/* ============================================================
   <granado-quantity-popup>
   Popup (modal) de seleção de QUANTIDADE — reproduz o popup
   "Nenhuma gaiola criada para a ordem" da Pesagem: um título,
   uma mensagem (callout no estilo "abox" por tipo), uma grade de
   botões (1 a N, cada um com ícone + número, com o valor sugerido
   destacado) e a opção de digitar a quantidade manualmente.

   ── Atributos
     title        - título do popup
     message      - mensagem (texto) no callout
     type         - "info" (default) | "information" | "success" | "error" | "warning"
     icon         - ícone exibido em cada botão. Sem informar, usa o desenho
                    da GAIOLA (SVG). Informe um emoji para trocar; use icon=""
                    (vazio) para não exibir ícone nos botões.
     min          - menor valor da grade (default 1)
     max          - maior valor da grade (default 9)
     suggested    - valor sugerido (destacado). Opcional.
     confirm-text - texto do botão da entrada manual (default "Criar")
     allow-manual - "false" oculta a entrada manual (default exibida)
     close-on-backdrop - "true" permite fechar ao clicar fora (backdrop). Default:
                    NÃO fecha ao clicar fora. Em JS use .closeOnBackdrop.
     open         - "false" inicia oculto (default visível)
     onSelect     - (opcional) string JS executada ao escolher (recebe event, detail)

   ── Eventos (CustomEvent, bubbles)
     "select" -> detail { quantity, type }
   (Cancelar, o X e o clique fora apenas fecham — sem evento.)

   ── Propriedades / métodos JS
     el.title / el.message / el.type / el.icon / el.min / el.max / el.suggested
     el.open()  ·  el.close()

   ── API estática
     GranadoQuantityPopup.show({ title, message, type, icon, min, max, suggested, onSelect })
       - onSelect pode ser uma função (recebe detail).

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-quantity-popup.js"></script>

   <script>
     GranadoQuantityPopup.show({
       type: 'warning',
       icon: '📦',
       title: 'Nenhuma gaiola criada para a ordem',
       message: 'Esta ordem ainda não possui nenhuma gaiola. Escolha quantas criar.',
       suggested: 3,
       onSelect: function (detail) { criarGaiolas(detail.quantity); }
     });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-quantity-popup')) {
  // Paleta por tipo — mesmas cores dos "abox" do app.
  const PALETTE = {
    success: { text: '#1C7A38', bg: '#D2E8D7', border: '#98C8A8', icon: '✅' },
    error:   { text: '#8C1A1A', bg: '#FADADD', border: '#D48888', icon: '⛔' },
    warning: { text: '#9A5A00', bg: '#FEF0CC', border: '#E0B84A', icon: '⚠️' },
    info:    { text: '#1A4A8C', bg: '#D8E8F8', border: '#90B8E0', icon: '💡' }
  };
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const SURFACE = '#FFFFFF';
  const SURFACE2 = '#F7F4EC';
  const BORDER = '#E5E0D4';
  const BORDER2 = '#DDD6C4';
  const VERDE_ESC = '#0F3319';
  // Destaque do valor sugerido (dourado), como no popup original.
  const GOLD = '#C8A84B', GOLD_DIM = '#F3E9CC', GOLD_DARK = '#9A7520';
  const FONT = "'Poppins',system-ui,Arial,sans-serif";
  const MONO = "'DejaVu Sans Mono','DM Mono',Consolas,monospace";

  function normType(t) {
    t = String(t == null ? '' : t).toLowerCase();
    if (t === 'information') t = 'info';
    return PALETTE[t] ? t : 'info';
  }
  function toInt(v, def) { const n = parseInt(v, 10); return isNaN(n) ? def : n; }

  class GranadoQuantityPopup extends HTMLElement {
    static get observedAttributes() { return ['title', 'message', 'type', 'icon', 'min', 'max', 'suggested', 'confirm-text', 'allow-manual', 'close-on-backdrop', 'open']; }

    // ------------------------------------------------------------
    // API estática
    // ------------------------------------------------------------
    static show(opts) {
      opts = opts || {};
      const el = document.createElement('granado-quantity-popup');
      ['type', 'title', 'message', 'icon'].forEach((k) => { if (opts[k] != null) el.setAttribute(k, String(opts[k])); });
      if (opts.min != null) el.setAttribute('min', String(opts.min));
      if (opts.max != null) el.setAttribute('max', String(opts.max));
      if (opts.suggested != null) el.setAttribute('suggested', String(opts.suggested));
      if (opts.confirmText != null) el.setAttribute('confirm-text', String(opts.confirmText));
      if (opts.allowManual === false) el.setAttribute('allow-manual', 'false');
      if (opts.closeOnBackdrop != null) el.setAttribute('close-on-backdrop', opts.closeOnBackdrop ? 'true' : 'false');
      if (opts.onSelect != null && typeof opts.onSelect !== 'function') el.setAttribute('onSelect', String(opts.onSelect));
      el._autoRemove = true;
      if (typeof opts.onSelect === 'function') el._onSelectFn = opts.onSelect;  // mantém função
      document.body.appendChild(el);
      el.open();
      return el;
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      ['message', 'type', 'icon'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
    }
    attributeChangedCallback(name) {
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
    get icon() { return this.getAttribute('icon'); }
    set icon(v) { this.setAttribute('icon', String(v == null ? '' : v)); }
    get min() { return Math.max(1, toInt(this.getAttribute('min'), 1)); }
    set min(v) { this.setAttribute('min', String(v)); }
    get max() { return Math.max(this.min, toInt(this.getAttribute('max'), 9)); }
    set max(v) { this.setAttribute('max', String(v)); }
    get suggested() { const s = this.getAttribute('suggested'); return s == null ? null : toInt(s, null); }
    set suggested(v) { this.setAttribute('suggested', String(v)); }
    // Fechar ao clicar fora? Default: false (não fecha). Só fecha com "true".
    _closeOnBackdrop() { return this.getAttribute('close-on-backdrop') === 'true'; }
    get closeOnBackdrop() { return this._closeOnBackdrop(); }
    set closeOnBackdrop(v) { this.setAttribute('close-on-backdrop', v ? 'true' : 'false'); }

    open() { this.removeAttribute('open'); this.style.display = ''; if (this.isConnected) this._render(); }
    close() { this.style.display = 'none'; if (this._autoRemove) this.remove(); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
    // Desenho de uma gaiola (roll cage) — ícone default dos botões.
    _cageSvg(color, size) {
      color = color || VERDE_ESC; size = size || 30;
      return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="1.4" stroke-linecap="round">' +
        '<rect x="4" y="3" width="14" height="13" rx="1"/>' +
        '<line x1="4" y1="7.3" x2="18" y2="7.3"/>' +
        '<line x1="4" y1="11.6" x2="18" y2="11.6"/>' +
        '<line x1="8.7" y1="3" x2="8.7" y2="16"/>' +
        '<line x1="13.3" y1="3" x2="13.3" y2="16"/>' +
        '<line x1="6" y1="16" x2="6" y2="19"/>' +
        '<line x1="16" y1="16" x2="16" y2="19"/>' +
        '<circle cx="7" cy="20.4" r="1.4" fill="' + color + '"/>' +
        '<circle cx="15" cy="20.4" r="1.4" fill="' + color + '"/>' +
      '</svg>';
    }

    _render() {
      const p = PALETTE[normType(this.type)];
      const title = this.getAttribute('title') || '';
      const message = this.getAttribute('message') || '';
      const min = this.min, max = this.max;
      const sug = this.suggested;
      const confirmText = this.getAttribute('confirm-text') || 'Criar';
      const allowManual = this.getAttribute('allow-manual') !== 'false';
      // Ícone dos botões: sem atributo -> gaiola SVG; emoji -> troca; "" -> nenhum.
      const hasIconAttr = this.hasAttribute('icon');
      const iconVal = this.getAttribute('icon');

      // Grade de botões min..max
      let btns = '';
      for (let n = min; n <= max; n++) {
        const s = (sug != null && n === sug);
        const cor = s ? GOLD_DARK : VERDE_ESC;
        const iconHtml = hasIconAttr
          ? (iconVal ? `<span style="font-size:22px;line-height:1">${this._esc(iconVal)}</span>` : '')
          : this._cageSvg(cor, 30);
        btns +=
          `<button type="button" data-role="qty" data-qty="${n}" title="${n}" style="position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;height:74px;border:2px solid ${s ? GOLD : BORDER2};border-radius:10px;background:${s ? GOLD_DIM : SURFACE2};color:${cor};cursor:pointer;padding-bottom:${s ? '11px' : '0'}">` +
            iconHtml +
            `<span style="font:900 17px/1 ${MONO}">${n}</span>` +
            (s ? '<span style="position:absolute;bottom:3px;left:0;right:0;font:900 7px/1 ' + FONT + ';letter-spacing:.08em;text-transform:uppercase">sugerido</span>' : '') +
          `</button>`;
      }

      const callout = message
        ? `<div style="border-radius:8px;padding:12px 15px;display:flex;gap:10px;align-items:flex-start;font:13px/1.55 ${FONT};background:${p.bg};border:1px solid ${p.border};color:${p.text};margin-bottom:16px">` +
            `<span style="font-size:18px;flex-shrink:0;line-height:1.2">${p.icon}</span>` +
            `<div style="flex:1;min-width:0">${this._esc(message)}</div>` +
          `</div>`
        : '';

      const manual = allowManual
        ? `<label style="display:block;font-size:9px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:#8A8575;margin:2px 0 5px">Digitar manualmente</label>` +
          `<div style="display:flex;gap:8px">` +
            `<input type="number" data-role="manual" min="${min}" placeholder="Ex.: 12" style="flex:1;box-sizing:border-box;font:13px/1.4 ${FONT};padding:9px 12px;border:1px solid ${BORDER};border-radius:8px;background:#fff;color:#1A1A1A">` +
            `<button type="button" data-role="confirm" style="font:700 13px/1.4 ${FONT};padding:9px 20px;border:1px solid ${p.text};border-radius:8px;background:${p.text};color:#fff;cursor:pointer">${this._esc(confirmText)}</button>` +
          `</div>`
        : '';

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:center;justify-content:center;padding:40px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${p.text};border-radius:12px;padding:22px 24px;max-width:440px;width:94%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:#1A1A1A">` +
            `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:${title ? '4px' : '0'}">` +
              (title
                ? `<div style="display:flex;align-items:center;gap:9px"><span style="font-size:22px;flex-shrink:0;line-height:1">${this._esc(p.icon)}</span><span style="font-size:18px;font-weight:800;color:${p.text}">${this._esc(title)}</span></div>`
                : '<div></div>') +
              `<button type="button" data-role="x" title="Cancelar" style="background:none;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font-size:13px;color:#555;line-height:1;flex-shrink:0">✕</button>` +
            `</div>` +
            (title ? '<div style="margin-bottom:14px"></div>' : '') +
            callout +
            `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:${allowManual ? '16px' : '0'}">${btns}</div>` +
            manual +
          `</div>` +
        `</div>`;

      this._bind();
    }

    _bind() {
      const self = this;
      const overlay = this.querySelector('[data-role="overlay"]');
      const box = this.querySelector('[data-role="box"]');
      const x = this.querySelector('[data-role="x"]');
      if (x) x.addEventListener('click', function () { self.close(); });
      if (overlay && box) overlay.addEventListener('mousedown', function (e) { if (e.target === overlay && self._closeOnBackdrop()) self.close(); });

      this.querySelectorAll('[data-role="qty"]').forEach(function (b) {
        b.addEventListener('click', function (ev) { self._emit(toInt(b.getAttribute('data-qty'), 1), ev); });
      });
      const confirm = this.querySelector('[data-role="confirm"]');
      const manual = this.querySelector('[data-role="manual"]');
      if (confirm) confirm.addEventListener('click', function (ev) { self._confirmManual(ev); });
      if (manual) manual.addEventListener('keydown', function (ev) { if (ev.keyCode === 13) { ev.preventDefault(); self._confirmManual(ev); } });
    }

    _confirmManual(ev) {
      const inp = this.querySelector('[data-role="manual"]');
      const n = inp ? toInt(inp.value, 0) : 0;
      if (!n || n < 1) { alert('⚠ Informe uma quantidade válida (mínimo 1).'); return; }
      this._emit(n, ev);
    }

    _emit(quantity, ev) {
      const detail = { quantity: quantity, type: this.type };
      this.dispatchEvent(new CustomEvent('select', { bubbles: true, composed: true, detail: detail }));
      if (typeof this._onSelectFn === 'function') this._onSelectFn(detail, ev);
      const h = this.getAttribute('onselect');
      if (h) new Function('event', 'detail', h).call(this, ev, detail);
      this.close();
    }
  }

  customElements.define('granado-quantity-popup', GranadoQuantityPopup);
  window.GranadoQuantityPopup = GranadoQuantityPopup;
}
