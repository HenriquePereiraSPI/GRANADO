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
     enable-virtual-keyboard - "true" mostra um botao de teclado dentro do
                      campo (a direita) e coloca o input em inputmode="none".
                      No MOBILE, o teclado virtual so abre/fecha por esse botao
                      — nao abre automaticamente ao tocar no input. No desktop
                      nao muda nada (o teclado fisico continua funcionando).
                      Quando "true", o campo tambem ganha o VISUAL DE SCAN
                      (caixa tracejada dourada + spinner + input transparente),
                      igual a leitura de etiqueta da tela de Fabricacao.
                      (nao se aplica a textarea nem password.)
     disabled       - "true" desabilita o campo.
     readonly       - "true" deixa apenas-leitura.
     rows           - linhas iniciais quando type="textarea". Default: 4.
     oninputevent   - JS executado a cada digitacao. Vars: value, event.
     onchangeevent  - JS executado ao perder foco com mudanca. Vars: value, event.
     onkeydownevent - JS executado a cada tecla pressionada. Vars: value, event, key.
                      "key" e um atalho para event.key (ex.: "Enter", "Escape").
     onfocusevent   - JS executado quando o campo GANHA foco. Vars: value, event.
                      Tambem por JS: elemento.onfocusevent = (value, event) => {...}
     onblurevent    - JS executado quando o campo PERDE foco. Vars: value, event.
                      Tambem por JS: elemento.onblurevent = (value, event) => {...}

   Propriedades JS:
     elemento.value -> valor atual (ler/setar)
     elemento.focus() / .blur()
     elemento.openKeyboard() / .closeKeyboard() / .toggleKeyboard()
        -> controla o teclado virtual quando enable-virtual-keyboard="true".
           Chame dentro de um gesto do usuario (click/touch) para o "abrir"
           realmente subir o teclado no Android.

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

/* __granado_guard__ */
if (!customElements.get('granado-input')) {
  class GranadoInput extends HTMLElement {
    static get observedAttributes() {
      return ['label', 'placeholder', 'value', 'type', 'icon', 'mask', 'color',
        'disabled', 'readonly', 'rows', 'ispassword', 'enable-virtual-keyboard',
        'oninputevent', 'onchangeevent', 'onkeydownevent', 'onfocusevent', 'onblurevent'];
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

    disconnectedCallback() { this._stopSpin(); }

    attributeChangedCallback(name, oldVal, newVal) {
      if (!this._built) return;
      if (['type', 'icon', 'rows', 'ispassword', 'enable-virtual-keyboard'].includes(name)) {
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
    // Controle do teclado virtual (so quando enable-virtual-keyboard="true").
    // IMPORTANTE: chame openKeyboard()/toggleKeyboard() DENTRO de um gesto do
    // usuario (click/touch) — senao o "abrir" nao sobe o teclado no Android.
    openKeyboard() {
      if (this.getAttribute('enable-virtual-keyboard') !== 'true') return;
      if (this._vkbOpen) return;
      this._openKeyboard();
    }
    closeKeyboard() {
      if (this.getAttribute('enable-virtual-keyboard') !== 'true') return;
      if (!this._vkbOpen) return;
      this._closeKeyboard();
    }
    toggleKeyboard() {
      if (this.getAttribute('enable-virtual-keyboard') !== 'true') return;
      this._toggleVirtualKeyboard();
    }
    // Handlers de foco por JS (mesmo nome do atributo). Aceitam FUNCAO
    //   el.onfocusevent = (value, event) => {...}
    // ou string (equivale ao atributo). Passe null p/ limpar.
    get onfocusevent() { return this._onfocusFn || this.getAttribute('onfocusevent'); }
    set onfocusevent(v) {
      if (typeof v === 'function') { this._onfocusFn = v; }
      else { this._onfocusFn = null; if (v == null) this.removeAttribute('onfocusevent'); else this.setAttribute('onfocusevent', String(v)); }
    }
    get onblurevent() { return this._onblurFn || this.getAttribute('onblurevent'); }
    set onblurevent(v) {
      if (typeof v === 'function') { this._onblurFn = v; }
      else { this._onblurFn = null; if (v == null) this.removeAttribute('onblurevent'); else this.setAttribute('onblurevent', String(v)); }
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
        <button data-eye-toggle type="button" tabindex="-1" aria-label="Mostrar/ocultar senha" style="height:auto !important;min-height:0 !important;
          position:absolute;
          right:6px;
          top:50%;
          transform:translateY(-50%);
          background:transparent;
          border:none;
          cursor:pointer;
          padding:4px;
          height:auto;
          color:#8A9E8E;
          display:flex;
          align-items:center;
          line-height:0;
          border-radius:4px;
        ">${this._eyeIcon(false)}</button>
      ` : '';

      // Botao do teclado virtual (opcional). Fica a esquerda do "olho" quando ambos existem.
      const vkbEnabled = this.getAttribute('enable-virtual-keyboard') === 'true';
      const vkbRight = isPassword ? '32px' : '6px';
      const vkbPos = isTextarea
        ? `right:${vkbRight};top:8px;`
        : `right:${vkbRight};top:50%;transform:translateY(-50%);`;
      const vkbHtml = vkbEnabled ? `
        <button data-vkb-toggle type="button" tabindex="-1" aria-label="Abrir/fechar teclado" title="Abrir/fechar teclado" style="height:auto !important;min-height:0 !important;
          position:absolute;
          ${vkbPos}
          background:transparent;
          border:none;
          cursor:pointer;
          padding:4px;
          height:auto;
          color:#8A9E8E;
          display:flex;
          align-items:center;
          line-height:0;
          border-radius:4px;
        ">${this._keyboardIcon()}</button>
      ` : '';

      // Estilo "scan" (caixa TRACEJADA + spinner) quando o teclado virtual esta
      // ligado — mesmo visual da leitura de etiqueta em Fabricacao. So p/ input normal.
      const scanStyle = vkbEnabled && !isTextarea && !isPassword;

      this.style.display = this.style.display || 'block';

      const rowStyle = scanStyle
        ? 'display:flex;align-items:center;gap:12px;border:1.5px dashed #9A7520;border-radius:8px;background:#FAF4D8;padding:10px 14px'
        : 'position:relative';

      const rowInner = scanStyle
        ? `<div data-scan-spinner style="width:20px;height:20px;border:3px solid #C8A84B;border-top-color:#9A7520;border-radius:50%;flex-shrink:0"></div>${fieldTag}<button data-vkb-toggle type="button" tabindex="-1" aria-label="Abrir/fechar teclado" title="Abrir/fechar teclado" style="height:auto !important;min-height:0 !important;background:none;border:1px solid #C8A84B;border-radius:6px;padding:4px 9px;cursor:pointer;display:inline-flex;align-items:center;line-height:0;flex-shrink:0;color:#8A9E8E">${this._keyboardIcon()}</button>`
        : `${iconHtml ? `<span data-input-icon style="${iconStyle}">${iconHtml}</span>` : ''}${fieldTag}${eyeHtml}${vkbHtml}`;

      this._stopSpin();
      this.innerHTML = `
        <div style="font-family:'Poppins','DejaVu Sans',Arial,sans-serif">
          <label data-input-label style="display:none;font-size:11px;font-weight:600;color:#103E20;margin-bottom:6px;font-family:inherit"></label>
          <div data-input-row style="${rowStyle}">${rowInner}</div>
        </div>
      `;

      const field = this.querySelector('[data-input-field]');
      field.addEventListener('input', (e) => this._handleInput(e));
      field.addEventListener('change', (e) => this._handleChange(e));
      field.addEventListener('keydown', (e) => this._handleKeydown(e));
      field.addEventListener('focus', (e) => { this._setFocus(true); this._handleFocus(e); });
      field.addEventListener('blur', (e) => { this._setFocus(false); this._onFieldBlur(); this._handleBlur(e); });

      // Teclado virtual: inicia em inputmode="none" (nao abre ao focar) e liga o botao.
      if (vkbEnabled) {
        field.setAttribute('inputmode', 'none');
        this._vkbOpen = false;
        const vkbBtn = this.querySelector('[data-vkb-toggle]');
        if (vkbBtn) {
          // Marca que o blur (que ocorre ANTES do click) foi causado pelo botao,
          // para _onFieldBlur nao resetar o estado e o click alternar corretamente.
          const markDown = () => { this._vkbBtnDown = true; };
          vkbBtn.addEventListener('mousedown', (e) => { e.preventDefault(); markDown(); });
          vkbBtn.addEventListener('touchstart', markDown, { passive: true });
          vkbBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this._toggleVirtualKeyboard();
            this._vkbBtnDown = false;
          });
        }
      }

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

      // Spinner do modo scan gira via Web Animations API (sem @keyframes/stylesheet).
      if (scanStyle) {
        const sp = this.querySelector('[data-scan-spinner]');
        if (sp && typeof sp.animate === 'function') {
          this._spinAnim = sp.animate(
            [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
            { duration: 800, iterations: Infinity, easing: 'linear' }
          );
        }
      }
    }

    _stopSpin() { if (this._spinAnim) { try { this._spinAnim.cancel(); } catch (e) { /* ignore */ } this._spinAnim = null; } }

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

      // Modo scan (teclado virtual ligado): campo transparente dentro da caixa tracejada.
      const scanStyle = this.getAttribute('enable-virtual-keyboard') === 'true' && !isTextarea && this.getAttribute('ispassword') !== 'true';
      if (scanStyle) {
        field.style.cssText = `flex:1;min-width:0;box-sizing:border-box;font-size:14px;line-height:1.4;padding:0;border:none;outline:none;background:transparent;color:${disabled ? '#B5AB85' : '#103E20'};font-family:'Arial','Helvetica',sans-serif;letter-spacing:.04em;cursor:${disabled ? 'not-allowed' : 'text'}`;
        return;
      }

      const hasIcon = !!iconEl;
      const hasEye = !!this.querySelector('[data-eye-toggle]');
      const hasVkb = !!this.querySelector('[data-vkb-toggle]');
      const padLeft = hasIcon ? '34px' : '12px';
      const padRight = (hasEye && hasVkb) ? '58px' : ((hasEye || hasVkb) ? '34px' : '12px');

      field.style.cssText = `
        width:100%;
        box-sizing:border-box;
        font-size:13px;
        line-height:1.4;
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

    _handleKeydown(e) {
      const handler = this.getAttribute('onkeydownevent');
      if (handler) new Function('value', 'event', 'key', handler).call(this, e.target.value, e, e.key);
    }

    _handleFocus(e) {
      if (typeof this._onfocusFn === 'function') { this._onfocusFn.call(this, e.target.value, e); return; }
      const handler = this.getAttribute('onfocusevent');
      if (handler) new Function('value', 'event', handler).call(this, e.target.value, e);
    }

    _handleBlur(e) {
      if (typeof this._onblurFn === 'function') { this._onblurFn.call(this, e.target.value, e); return; }
      const handler = this.getAttribute('onblurevent');
      if (handler) new Function('value', 'event', handler).call(this, e.target.value, e);
    }

    _setFocus(focused) {
      const field = this.querySelector('[data-input-field]');
      if (!field) return;
      const color = this.getAttribute('color') || '#1C5C31';
      field.style.borderColor = focused ? color : '#E5DDC8';
    }

    // ------------------------------------------------------------
    // Teclado virtual (enable-virtual-keyboard)
    // ------------------------------------------------------------
    // inputmode adequado ao "abrir" — casa com o type do campo.
    _kbInputMode() {
      const map = { number: 'numeric', tel: 'tel', email: 'email', search: 'search', url: 'url' };
      return map[this.getAttribute('type') || 'text'] || 'text';
    }

    // Abre/fecha o teclado virtual (mobile) manualmente pelo botao.
    _toggleVirtualKeyboard() {
      if (!this._vkbOpen) this._openKeyboard();
      else this._closeKeyboard();
    }

    // Abrir: troca o inputmode e re-foca (blur+focus) dentro do gesto do clique.
    _openKeyboard() {
      const field = this.querySelector('[data-input-field]');
      const btn = this.querySelector('[data-vkb-toggle]');
      if (!field) return;
      const activeColor = this.getAttribute('color') || '#1C5C31';
      this._vkbToggling = true;
      field.setAttribute('inputmode', this._kbInputMode());
      field.blur();
      field.focus();
      this._vkbToggling = false;
      this._vkbOpen = true;
      if (btn) btn.style.color = activeColor;
    }

    // Fechar: volta para "none" e tira o foco.
    _closeKeyboard() {
      const field = this.querySelector('[data-input-field]');
      const btn = this.querySelector('[data-vkb-toggle]');
      if (!field) return;
      field.setAttribute('inputmode', 'none');
      this._vkbOpen = false;
      field.blur();
      if (btn) btn.style.color = '#8A9E8E';
    }

    // Ao perder o foco (tocar fora), reseta o estado para "fechado".
    _onFieldBlur() {
      if (this.getAttribute('enable-virtual-keyboard') !== 'true') return;
      if (this._vkbToggling) return;   // ignora o blur interno do "abrir"
      if (this._vkbBtnDown) return;    // blur causado pelo clique no proprio botao
      const field = this.querySelector('[data-input-field]');
      const btn = this.querySelector('[data-vkb-toggle]');
      if (field) field.setAttribute('inputmode', 'none');
      this._vkbOpen = false;
      if (btn) btn.style.color = '#8A9E8E';
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

    _keyboardIcon() {
      return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M7 16.5h10"/></svg>`;
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

  window.GranadoInput = GranadoInput;
}
