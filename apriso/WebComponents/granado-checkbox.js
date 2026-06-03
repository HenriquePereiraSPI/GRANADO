/* ============================================================
   <granado-checkbox>
   Checkbox custom no padrao visual Granado.

   Atributos (todos opcionais):
     label         - texto exibido ao lado do quadrado.
     checked       - "true" ou "false". Default: false.
     disabled      - "true" desabilita interacao e estiliza em cinza.
     color         - cor de preenchimento quando checado. Default: "#1C5C31".
     onchangeevent - JS executado ao alternar. Variaveis disponiveis:
                     checked (boolean), event (MouseEvent/KeyboardEvent).

   Propriedades JS:
     elemento.checked   -> getter/setter (boolean), reflete no atributo.
     elemento.disabled  -> getter (boolean).

   Exemplo:

   <script src="assets/WebComponents/granado-checkbox.js"></script>

   <granado-checkbox
       label="Aceito os termos"
       onchangeevent="console.log('aceito?', checked)">
   </granado-checkbox>

   <granado-checkbox label="Desabilitado" checked="true" disabled="true"></granado-checkbox>
   <granado-checkbox label="Cor custom" color="#9A7B1C"></granado-checkbox>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-checkbox')) {
  class GranadoCheckbox extends HTMLElement {
    static get observedAttributes() {
      return ['label', 'checked', 'disabled', 'color', 'onchangeevent'];
    }

    connectedCallback() {
      if (!this._mounted) {
        this._build();
        this._mounted = true;
      }
      this._update();
    }

    attributeChangedCallback() {
      if (this._mounted) this._update();
    }

    get checked() { return this.getAttribute('checked') === 'true'; }
    set checked(v) { this.setAttribute('checked', v ? 'true' : 'false'); }
    get disabled() { return this.getAttribute('disabled') === 'true'; }

    // Constroi o DOM uma unica vez. Atualizacoes posteriores so
    // mexem em estilos/atributos, sem rebuildar a estrutura — assim
    // nao ha flicker de layout ao marcar/desmarcar.
    _build() {
      this.style.display = this.style.display || 'inline-block';
      this.innerHTML = `
        <span data-cb-root role="checkbox" tabindex="0" style="display:inline-flex;align-items:center;gap:8px;user-select:none;font-family:'Poppins','DejaVu Sans',Arial,sans-serif;font-size:13px;outline:none;line-height:1">
          <span data-cb-box style="display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border:1px solid #B5AB85;background:#FDFAF1;border-radius:3px;transition:background 0.12s,border-color 0.12s;flex-shrink:0;box-sizing:border-box"><svg data-cb-check width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;visibility:hidden"><polyline points="20 6 9 17 4 12"/></svg></span><span data-cb-label></span>
        </span>
      `;

      const root = this.querySelector('[data-cb-root]');
      const box = this.querySelector('[data-cb-box]');

      root.addEventListener('click', (e) => this._toggle(e));
      root.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          this._toggle(e);
        }
      });

      box.addEventListener('mouseenter', () => {
        if (this.disabled || this.checked) return;
        const color = this.getAttribute('color') || '#1C5C31';
        box.style.borderColor = color;
      });
      box.addEventListener('mouseleave', () => {
        if (this.disabled || this.checked) return;
        box.style.borderColor = '#B5AB85';
      });
    }

    _update() {
      const root = this.querySelector('[data-cb-root]');
      if (!root) return;
      const box = this.querySelector('[data-cb-box]');
      const check = this.querySelector('[data-cb-check]');
      const labelEl = this.querySelector('[data-cb-label]');

      const checked = this.checked;
      const disabled = this.disabled;
      const color = this.getAttribute('color') || '#1C5C31';
      const label = this.getAttribute('label') || '';

      box.style.background = disabled
        ? (checked ? '#B5AB85' : '#EFE6CC')
        : (checked ? color : '#FDFAF1');
      box.style.borderColor = disabled
        ? '#D6CDA4'
        : (checked ? color : '#B5AB85');
      check.style.visibility = checked ? 'visible' : 'hidden';

      root.style.cursor = disabled ? 'not-allowed' : 'pointer';
      root.style.color = disabled ? '#B5AB85' : '#103E20';
      root.style.opacity = disabled ? '0.65' : '1';
      root.setAttribute('aria-checked', checked);
      root.setAttribute('aria-disabled', disabled);
      root.setAttribute('tabindex', disabled ? '-1' : '0');

      if (labelEl.textContent !== label) labelEl.textContent = label;
    }

    _toggle(event) {
      if (this.disabled) return;
      const newVal = !this.checked;
      this.setAttribute('checked', newVal ? 'true' : 'false');
      const handler = this.getAttribute('onchangeevent');
      if (handler) {
        new Function('checked', 'event', handler).call(this, newVal, event);
      }
    }
  }

  customElements.define('granado-checkbox', GranadoCheckbox);

  window.GranadoCheckbox = GranadoCheckbox;
}
