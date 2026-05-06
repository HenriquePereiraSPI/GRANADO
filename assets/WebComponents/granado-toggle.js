/* ============================================================
   <granado-toggle>
   Switch on/off no padrao visual Granado.

   Atributos (todos opcionais):
     label          - texto exibido ao lado do switch.
     checked        - "true" ou "false". Default: false.
     disabled       - "true" desabilita interacao e estiliza em cinza.
     color          - cor do track quando ligado. Default: "#1C5C31".
     labelposition  - "right" (default) ou "left".
     onchangeevent  - JS executado ao alternar.
                      Variaveis: checked (boolean), event.

   Propriedades JS:
     elemento.checked   -> getter/setter (boolean)
     elemento.disabled  -> getter (boolean)

   Exemplo:

   <script src="assets/WebComponents/granado-toggle.js"></script>

   <granado-toggle
       label="Notificacoes ativas"
       onchangeevent="console.log('estado:', checked)">
   </granado-toggle>

   <granado-toggle label="Modo escuro" checked="true" color="#2C5A8C"></granado-toggle>
   <granado-toggle label="Sem efeito" disabled="true" checked="true"></granado-toggle>
   ============================================================ */

class GranadoToggle extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'checked', 'disabled', 'color', 'labelposition', 'onchangeevent'];
  }

  connectedCallback() {
    if (!this._mounted) {
      this._build();
      this._mounted = true;
    }
    this._update();
  }

  attributeChangedCallback(name) {
    if (!this._mounted) return;
    if (name === 'labelposition' || name === 'label') {
      // labelposition reordena DOM; label pode entrar/sair do layout
      this._build();
    }
    this._update();
  }

  get checked() { return this.getAttribute('checked') === 'true'; }
  set checked(v) { this.setAttribute('checked', v ? 'true' : 'false'); }
  get disabled() { return this.getAttribute('disabled') === 'true'; }

  _build() {
    const labelPos = this.getAttribute('labelposition') === 'left' ? 'left' : 'right';
    const label = this.getAttribute('label') || '';

    this.style.display = this.style.display || 'inline-block';

    const switchHtml = `<span data-toggle-track style="display:inline-flex;align-items:center;width:36px;height:20px;border-radius:10px;background:#E5DDC8;border:1px solid #D6CDA4;padding:1px;box-sizing:border-box;flex-shrink:0;transition:background 0.18s,border-color 0.18s"><span data-toggle-knob style="display:block;width:16px;height:16px;border-radius:50%;background:#FDFAF1;box-shadow:0 1px 3px rgba(0,0,0,0.18);transform:translateX(0);transition:transform 0.18s"></span></span>`;
    const labelHtml = label ? `<span data-toggle-label></span>` : '';
    const order = labelPos === 'left' ? `${labelHtml}${switchHtml}` : `${switchHtml}${labelHtml}`;

    this.innerHTML = `<span data-toggle-root role="switch" tabindex="0" style="display:inline-flex;align-items:center;gap:10px;cursor:pointer;user-select:none;font-family:system-ui,-apple-system,sans-serif;font-size:13px;outline:none;line-height:1">${order}</span>`;

    const root = this.querySelector('[data-toggle-root]');
    root.addEventListener('click', (e) => this._toggle(e));
    root.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this._toggle(e);
      }
    });
  }

  _update() {
    const root = this.querySelector('[data-toggle-root]');
    if (!root) return;
    const track = this.querySelector('[data-toggle-track]');
    const knob = this.querySelector('[data-toggle-knob]');
    const labelEl = this.querySelector('[data-toggle-label]');

    const checked = this.checked;
    const disabled = this.disabled;
    const color = this.getAttribute('color') || '#1C5C31';
    const label = this.getAttribute('label') || '';

    track.style.background = disabled
      ? (checked ? '#B5AB85' : '#EFE6CC')
      : (checked ? color : '#E5DDC8');
    track.style.borderColor = disabled
      ? '#D6CDA4'
      : (checked ? color : '#D6CDA4');

    knob.style.transform = checked ? 'translateX(16px)' : 'translateX(0)';

    root.style.cursor = disabled ? 'not-allowed' : 'pointer';
    root.style.opacity = disabled ? '0.65' : '1';
    root.style.color = disabled ? '#B5AB85' : '#103E20';
    root.setAttribute('aria-checked', checked);
    root.setAttribute('aria-disabled', disabled);
    root.setAttribute('tabindex', disabled ? '-1' : '0');

    if (labelEl && labelEl.textContent !== label) labelEl.textContent = label;
  }

  _toggle(event) {
    if (this.disabled) return;
    const newVal = !this.checked;
    this.setAttribute('checked', newVal ? 'true' : 'false');
    const handler = this.getAttribute('onchangeevent');
    if (handler) new Function('checked', 'event', handler).call(this, newVal, event);
  }
}

customElements.define('granado-toggle', GranadoToggle);
