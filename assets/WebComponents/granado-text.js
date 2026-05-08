/* ============================================================
   <granado-text>
   Texto somente leitura no padrao visual de <granado-input>.
   Util para exibir valores em formularios (campos calculados,
   confirmacao, "view-only") com a mesma aparencia de um input
   — label acima + caixa com borda.

   Atributos (todos opcionais):
     label          - texto exibido acima da caixa.
     value          - valor exibido. Pode ser setado tambem via
                      propriedade JS (.value).
     placeholder    - texto exibido (em cinza) quando value vazio.
     icon           - icone exibido a esquerda. Aceita os mesmos
                      presets de <granado-input>:
                        "search", "mail", "phone", "user", "lock",
                        "calendar", "info"
                      ou qualquer texto/emoji/SVG bruto.
                      Em "textarea" o icone fica no canto superior.
     type           - "text" (default) ou "textarea". textarea
                      preserva quebras de linha (white-space:pre-wrap).
     color          - cor do texto exibido. Default: "#103E20".
     rows           - linhas iniciais quando type="textarea". Default: 4.

   Propriedades JS:
     elemento.value -> valor exibido (ler/setar)

   Exemplo:

   <script src="assets/WebComponents/granado-text.js"></script>

   <granado-text label="Operador" value="Maria Silva"></granado-text>

   <granado-text
       label="CPF"
       icon="user"
       value="123.456.789-00">
   </granado-text>

   <granado-text
       label="Observacoes"
       type="textarea"
       rows="5"
       value="Linha 1\nLinha 2">
   </granado-text>
   ============================================================ */

class GranadoText extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'value', 'placeholder', 'icon', 'type', 'color', 'rows'];
  }

  connectedCallback() {
    if (!this._built) {
      ['value', 'label', 'placeholder', 'icon', 'type', 'color', 'rows'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) {
          const v = this[p];
          delete this[p];
          this[p] = v;
        }
      });
      this._build();
      this._built = true;
    }
    this._sync();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (!this._built) return;
    if (['type', 'icon', 'rows'].includes(name)) {
      this._build();
      this._sync();
      return;
    }
    this._sync();
  }

  // ------------------------------------------------------------
  // Public JS API
  // ------------------------------------------------------------
  get value() {
    return this.getAttribute('value') || '';
  }
  set value(v) {
    this.setAttribute('value', String(v == null ? '' : v));
  }

  // ------------------------------------------------------------
  // Build (estrutura, criada uma unica vez por shape)
  // ------------------------------------------------------------
  _build() {
    const type = this.getAttribute('type') || 'text';
    const isTextarea = type === 'textarea';
    const iconAttr = this.getAttribute('icon');
    const iconHtml = iconAttr ? this._resolveIcon(iconAttr) : '';

    const iconStyle = isTextarea
      ? 'position:absolute;left:11px;top:10px;color:#8A9E8E;display:flex;line-height:0;pointer-events:none'
      : 'position:absolute;left:11px;top:50%;transform:translateY(-50%);color:#8A9E8E;display:flex;line-height:0;pointer-events:none';

    this.style.display = this.style.display || 'block';

    this.innerHTML = `
      <div style="font-family:'Lato','DejaVu Sans',Arial,sans-serif">
        <label data-text-label style="display:none;font-size:11px;font-weight:600;color:#103E20;margin-bottom:6px;font-family:inherit"></label>
        <div data-text-row style="position:relative">
          ${iconHtml ? `<span data-text-icon style="${iconStyle}">${iconHtml}</span>` : ''}
          <div data-text-field${isTextarea ? ' data-multiline' : ''}></div>
        </div>
      </div>
    `;
  }

  // ------------------------------------------------------------
  // Sync (estilos e conteudo no campo existente)
  // ------------------------------------------------------------
  _sync() {
    const field = this.querySelector('[data-text-field]');
    const labelEl = this.querySelector('[data-text-label]');
    const iconEl = this.querySelector('[data-text-icon]');
    if (!field) return;

    const label = this.getAttribute('label') || '';
    const value = this.getAttribute('value') || '';
    const placeholder = this.getAttribute('placeholder') || '';
    const color = this.getAttribute('color') || '#103E20';
    const isTextarea = field.hasAttribute('data-multiline');
    const rows = parseInt(this.getAttribute('rows') || '4', 10);

    if (label) {
      labelEl.textContent = label;
      labelEl.style.display = 'block';
    } else {
      labelEl.style.display = 'none';
    }

    const showPlaceholder = !value && !!placeholder;
    field.textContent = value || placeholder || ' ';

    const hasIcon = !!iconEl;
    const padLeft = hasIcon ? '34px' : '12px';

    field.style.cssText = `
      width:100%;
      box-sizing:border-box;
      font-size:13px;
      line-height:1.4;
      padding:${isTextarea ? '10px 12px' : '8px 12px'};
      padding-left:${padLeft};
      padding-right:12px;
      border:1px solid #E5DDC8;
      background:#FDFAF1;
      color:${showPlaceholder ? '#8A9E8E' : color};
      border-radius:6px;
      font-family:inherit;
      cursor:default;
      user-select:text;
      ${isTextarea
        ? `min-height:${rows * 18 + 20}px;white-space:pre-wrap;word-break:break-word;`
        : 'min-height:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'}
    `;
  }

  // ------------------------------------------------------------
  // Helpers
  // ------------------------------------------------------------
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

customElements.define('granado-text', GranadoText);
