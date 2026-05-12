/* ============================================================
   <granado-radio>
   Grupo de radio buttons (selecao unica entre N opcoes).

   Atributos (todos opcionais):
     options       - JSON array. Cada item pode ser:
                       string -> usado como value e label
                       objeto -> { value, label }
     value         - valor selecionado.
     color         - cor do radio selecionado. Default: "#1C5C31".
     disabled      - "true" desabilita o grupo inteiro.
     orientation   - "vertical" (default) ou "horizontal".
     onchangeevent - JS executado ao alterar selecao.
                     Variaveis: value (string), option (objeto), event.

   Propriedades JS:
     elemento.value -> getter/setter

   Exemplo:

   <script src="assets/WebComponents/granado-radio.js"></script>

   <granado-radio
       options='["Pequeno","Medio","Grande"]'
       value="Medio"
       onchangeevent="console.log('escolheu', value)">
   </granado-radio>

   <granado-radio
       orientation="horizontal"
       color="#9A7B1C"
       options='[
         {"value":"OK","label":"Aprovado"},
         {"value":"DEV","label":"Desvio"},
         {"value":"PEN","label":"Pendente"}
       ]'
       value="OK">
   </granado-radio>
   ============================================================ */

class GranadoRadio extends HTMLElement {
  static get observedAttributes() {
    return ['options', 'value', 'color', 'disabled', 'orientation', 'onchangeevent'];
  }

  connectedCallback() {
    if (!this._built) {
      this._build();
      this._built = true;
    }
    this._sync();
  }

  attributeChangedCallback(name) {
    if (!this._built) return;
    if (name === 'options' || name === 'orientation') {
      this._build();
    }
    this._sync();
  }

  get value() { return this.getAttribute('value') || ''; }
  set value(v) { this.setAttribute('value', String(v == null ? '' : v)); }
  get disabled() { return this.getAttribute('disabled') === 'true'; }

  _build() {
    const options = this._parseOptions();
    const orientation = this.getAttribute('orientation') === 'horizontal' ? 'horizontal' : 'vertical';
    const flexDir = orientation === 'horizontal' ? 'row' : 'column';
    const gap = orientation === 'horizontal' ? '20px' : '8px';

    this.style.display = this.style.display || 'inline-block';

    const items = options.map(opt => `<span data-radio-item data-radio-value="${this._escapeAttr(opt.value)}" role="radio" tabindex="0" style="display:inline-flex;align-items:center;gap:8px;cursor:pointer;user-select:none;font-family:'Lato','DejaVu Sans',Arial,sans-serif;font-size:13px;color:#103E20;outline:none;line-height:1"><span data-radio-circle style="display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border:1px solid #B5AB85;background:#FDFAF1;border-radius:50%;transition:border-color 0.12s;flex-shrink:0;box-sizing:border-box"><span data-radio-dot style="display:block;width:8px;height:8px;border-radius:50%;background:transparent;transition:background 0.12s"></span></span><span>${this._escapeHtml(opt.label)}</span></span>`).join('');

    this.innerHTML = `<div role="radiogroup" style="display:flex;flex-direction:${flexDir};gap:${gap};flex-wrap:wrap">${items}</div>`;

    this.querySelectorAll('[data-radio-item]').forEach(item => {
      const pick = (e) => {
        if (this.disabled) return;
        const v = item.getAttribute('data-radio-value');
        if (this.value === v) return;
        this.setAttribute('value', v);
        this._fireChange(e, v);
      };
      item.addEventListener('click', pick);
      item.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          pick(e);
        }
      });

      const circle = item.querySelector('[data-radio-circle]');
      item.addEventListener('mouseenter', () => {
        if (this.disabled) return;
        if (this.value === item.getAttribute('data-radio-value')) return;
        const color = this.getAttribute('color') || '#1C5C31';
        circle.style.borderColor = color;
      });
      item.addEventListener('mouseleave', () => {
        if (this.disabled) return;
        if (this.value === item.getAttribute('data-radio-value')) return;
        circle.style.borderColor = '#B5AB85';
      });
    });
  }

  _sync() {
    const items = this.querySelectorAll('[data-radio-item]');
    if (!items.length) return;
    const value = this.getAttribute('value') || '';
    const disabled = this.disabled;
    const color = this.getAttribute('color') || '#1C5C31';

    items.forEach(item => {
      const v = item.getAttribute('data-radio-value');
      const isSelected = v === value;
      const circle = item.querySelector('[data-radio-circle]');
      const dot = item.querySelector('[data-radio-dot]');

      circle.style.borderColor = isSelected ? color : '#B5AB85';
      circle.style.background = disabled ? '#EFE6CC' : '#FDFAF1';
      dot.style.background = isSelected ? color : 'transparent';

      item.style.cursor = disabled ? 'not-allowed' : 'pointer';
      item.style.opacity = disabled ? '0.65' : '1';
      item.style.color = disabled ? '#B5AB85' : '#103E20';
      item.setAttribute('aria-checked', isSelected);
      item.setAttribute('aria-disabled', disabled);
      item.setAttribute('tabindex', disabled ? '-1' : '0');
    });
  }

  _fireChange(event, newValue) {
    const handler = this.getAttribute('onchangeevent');
    if (!handler) return;
    const options = this._parseOptions();
    const option = options.find(o => o.value === newValue) || null;
    new Function('value', 'option', 'event', handler).call(this, newValue, option, event);
  }

  _parseOptions() {
    const raw = this.getAttribute('options') || '[]';
    try {
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.map(o => {
        if (typeof o === 'string' || typeof o === 'number') {
          return { value: String(o), label: String(o) };
        }
        return {
          value: String(o.value == null ? o.label : o.value),
          label: String(o.label == null ? o.value : o.label)
        };
      });
    } catch {
      return [];
    }
  }

  _escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, ch =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }

  _escapeAttr(s) {
    return String(s == null ? '' : s).replace(/"/g, '&quot;');
  }
}

customElements.define('granado-radio', GranadoRadio);
