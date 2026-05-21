/* ============================================================
   <granado-input>
   Campo de texto (ou textarea) no padrao visual Granado.
   Suporta label, icone, mascara de digitos e os tipos nativos
   de input (text, password, email, number, tel, search, url).

   Atributos (todos opcionais):
     label          - texto exibido acima do campo.
     placeholder    - texto do placeholder.
     value          - valor inicial.
     type           - "text" (default), "password", "email", "number",
                      "tel", "search", "url" ou "textarea".
     icon           - icone exibido a esquerda. Pode ser:
                        nome de preset: "search", "mail", "phone", "user",
                                        "lock", "calendar", "info"
                        ou qualquer texto/emoji/SVG bruto.
                      Em "textarea" o icone fica no canto superior esquerdo.
     mask           - mascara de digitos. Use "9" como placeholder de digito;
                      qualquer outro caractere e literal.
                      Ex: "999.999.999-99" (CPF), "(99) 99999-9999" (telefone).
                      Nao se aplica a textarea.
     ispassword     - "true" forca o campo para senha (oculta caracteres) e
                      adiciona icone de "olho" a direita para alternar a
                      visualizacao. Sobrepoe o atributo "type". Nao se aplica
                      a textarea.
     color          - cor da borda em foco. Default: "#1C5C31".
     disabled       - "true" desabilita o campo.
     readonly       - "true" deixa apenas-leitura.
     rows           - linhas iniciais quando type="textarea". Default: 4.
     oninputevent   - JS executado a cada digitacao. Vars: value, event.
     onchangeevent  - JS executado ao perder foco com mudanca. Vars: value, event.

   Propriedades JS:
     elemento.value -> valor atual (ler/setar)
     elemento.focus() / .blur()

   Exemplo:

   <script src="assets/WebComponents/granado-input.js"></script>

   <granado-input label="Nome" placeholder="Digite seu nome"></granado-input>

   <granado-input
       label="Email"
       icon="mail"
       type="email"
       placeholder="seu@email.com">
   </granado-input>

   <granado-input
       label="CPF"
       icon="user"
       mask="999.999.999-99"
       placeholder="000.000.000-00">
   </granado-input>

   <granado-input
       label="Observacoes"
       type="textarea"
       rows="5"
       placeholder="Descreva o desvio...">
   </granado-input>
   ============================================================ */

class GranadoInput extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'placeholder', 'value', 'type', 'icon', 'mask', 'color',
      'disabled', 'readonly', 'rows', 'ispassword', 'oninputevent', 'onchangeevent'];
  }

  connectedCallback() {
    if (!this._built) {
      this._build();
      this._built = true;
    }
    this._sync();
    const initial = this.getAttribute('value');
    if (initial != null) {
      const f = this.querySelector('[data-input-field]');
      if (f && f.value !== initial) f.value = initial;
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (!this._built) return;
    if (['type', 'icon', 'rows', 'ispassword'].includes(name)) {
      this._showPassword = false;
      this._build();
      this._sync();
      return;
    }
    if (name === 'value') {
      const f = this.querySelector('[data-input-field]');
      if (f && f.value !== (newVal || '')) f.value = newVal || '';
    }
    this._sync();
  }

  // ------------------------------------------------------------
  // Public JS API
  // ------------------------------------------------------------
  get value() {
    const f = this.querySelector('[data-input-field]');
    return f ? f.value : (this.getAttribute('value') || '');
  }
  set value(v) {
    this.setAttribute('value', String(v == null ? '' : v));
  }
  focus() {
    const f = this.querySelector('[data-input-field]');
    if (f) f.focus();
  }
  blur() {
    const f = this.querySelector('[data-input-field]');
    if (f) f.blur();
  }

  // ------------------------------------------------------------
  // Build (estrutura, criada uma unica vez por shape)
  // ------------------------------------------------------------
  _build() {
    const type = this.getAttribute('type') || 'text';
    const isTextarea = type === 'textarea';
    const isPassword = this.getAttribute('ispassword') === 'true' && !isTextarea;
    const iconAttr = this.getAttribute('icon');
    const iconHtml = iconAttr ? this._resolveIcon(iconAttr) : '';
    const rows = parseInt(this.getAttribute('rows') || '4', 10);

    const fieldType = isPassword ? 'password' : this._safeType(type);
    const fieldTag = isTextarea
      ? `<textarea data-input-field rows="${rows}"></textarea>`
      : `<input data-input-field type="${fieldType}"/>`;

    const iconStyle = isTextarea
      ? 'position:absolute;left:11px;top:10px;color:#8A9E8E;display:flex;line-height:0;pointer-events:none'
      : 'position:absolute;left:11px;top:50%;transform:translateY(-50%);color:#8A9E8E;display:flex;line-height:0;pointer-events:none';

    const eyeHtml = isPassword ? `
      <button data-eye-toggle type="button" tabindex="-1" aria-label="Mostrar/ocultar senha" style="
        position:absolute;
        right:6px;
        top:50%;
        transform:translateY(-50%);
        background:transparent;
        border:none;
        cursor:pointer;
        padding:4px;
        color:#8A9E8E;
        display:flex;
        align-items:center;
        line-height:0;
        border-radius:4px;
      ">${this._eyeIcon(false)}</button>
    ` : '';

    this.style.display = this.style.display || 'block';

    this.innerHTML = `
      <div style="font-family:'Poppins','DejaVu Sans',Arial,sans-serif">
        <label data-input-label style="display:none;font-size:11px;font-weight:600;color:#103E20;margin-bottom:6px;font-family:inherit"></label>
        <div data-input-row style="position:relative">
          ${iconHtml ? `<span data-input-icon style="${iconStyle}">${iconHtml}</span>` : ''}
          ${fieldTag}
          ${eyeHtml}
        </div>
      </div>
    `;

    const field = this.querySelector('[data-input-field]');
    field.addEventListener('input', (e) => this._handleInput(e));
    field.addEventListener('change', (e) => this._handleChange(e));
    field.addEventListener('focus', () => this._setFocus(true));
    field.addEventListener('blur', () => this._setFocus(false));

    const eyeBtn = this.querySelector('[data-eye-toggle]');
    if (eyeBtn) {
      eyeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this._showPassword = !this._showPassword;
        field.type = this._showPassword ? 'text' : 'password';
        eyeBtn.innerHTML = this._eyeIcon(this._showPassword);
      });
    }
  }

  // ------------------------------------------------------------
  // Sync (estilos e atributos no campo existente)
  // ------------------------------------------------------------
  _sync() {
    const field = this.querySelector('[data-input-field]');
    const labelEl = this.querySelector('[data-input-label]');
    const iconEl = this.querySelector('[data-input-icon]');
    if (!field) return;

    const label = this.getAttribute('label') || '';
    const placeholder = this.getAttribute('placeholder') || '';
    const disabled = this.getAttribute('disabled') === 'true';
    const readonly = this.getAttribute('readonly') === 'true';
    const isTextarea = field.tagName === 'TEXTAREA';

    if (label) {
      labelEl.textContent = label;
      labelEl.style.display = 'block';
    } else {
      labelEl.style.display = 'none';
    }

    if (placeholder) field.setAttribute('placeholder', placeholder);
    else field.removeAttribute('placeholder');

    if (disabled) field.setAttribute('disabled', '');
    else field.removeAttribute('disabled');

    if (readonly) field.setAttribute('readonly', '');
    else field.removeAttribute('readonly');

    const hasIcon = !!iconEl;
    const hasEye = !!this.querySelector('[data-eye-toggle]');
    const padLeft = hasIcon ? '34px' : '12px';
    const padRight = hasEye ? '34px' : '12px';

    field.style.cssText = `
      width:100%;
      box-sizing:border-box;
      font-size:13px;
      padding:${isTextarea ? '10px 12px' : '8px 12px'};
      padding-left:${padLeft};
      padding-right:${padRight};
      border:1px solid #E5DDC8;
      background:${disabled ? '#EFE6CC' : '#FDFAF1'};
      color:${disabled ? '#B5AB85' : '#103E20'};
      border-radius:6px;
      font-family:inherit;
      outline:none;
      cursor:${disabled ? 'not-allowed' : 'text'};
      transition:border-color 0.15s;
      ${isTextarea ? 'min-height:60px;resize:vertical;' : ''}
    `;
  }

  // ------------------------------------------------------------
  // Eventos
  // ------------------------------------------------------------
  _handleInput(e) {
    const field = e.target;
    const mask = this.getAttribute('mask');
    if (mask && field.tagName !== 'TEXTAREA') {
      const masked = this._applyMask(field.value, mask);
      if (field.value !== masked) {
        field.value = masked;
        try { field.setSelectionRange(masked.length, masked.length); } catch (_) { /* ignore */ }
      }
    }
    const handler = this.getAttribute('oninputevent');
    if (handler) new Function('value', 'event', handler).call(this, field.value, e);
  }

  _handleChange(e) {
    const handler = this.getAttribute('onchangeevent');
    if (handler) new Function('value', 'event', handler).call(this, e.target.value, e);
  }

  _setFocus(focused) {
    const field = this.querySelector('[data-input-field]');
    if (!field) return;
    const color = this.getAttribute('color') || '#1C5C31';
    field.style.borderColor = focused ? color : '#E5DDC8';
  }

  // ------------------------------------------------------------
  // Helpers
  // ------------------------------------------------------------
  _safeType(t) {
    const allowed = ['text', 'password', 'email', 'number', 'tel', 'search', 'url'];
    return allowed.includes(t) ? t : 'text';
  }

  _applyMask(value, mask) {
    const digits = String(value).replace(/\D/g, '');
    let out = '';
    let di = 0;
    for (let i = 0; i < mask.length && di < digits.length; i++) {
      if (mask[i] === '9') out += digits[di++];
      else out += mask[i];
    }
    return out;
  }

  _eyeIcon(shown) {
    const COMMON = `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
    if (shown) {
      return `<svg width="14" height="14" ${COMMON}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
    }
    return `<svg width="14" height="14" ${COMMON}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }

  _resolveIcon(name) {
    const SIZE = 'width="14" height="14"';
    const COMMON = `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
    const ICONS = {
      search: `<svg ${SIZE} ${COMMON}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
      mail: `<svg ${SIZE} ${COMMON}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      phone: `<svg ${SIZE} ${COMMON}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      user: `<svg ${SIZE} ${COMMON}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      lock: `<svg ${SIZE} ${COMMON}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      calendar: `<svg ${SIZE} ${COMMON}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      info: `<svg ${SIZE} ${COMMON}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
    };
    return ICONS[name] || name;
  }
}

customElements.define('granado-input', GranadoInput);
