/* ============================================================
   <granado-slider>
   Slider numerico custom (track + thumb), com suporte a
   teclado (setas, Home/End), mouse e touch.

   Atributos (todos opcionais):
     min            - valor minimo. Default: 0.
     max            - valor maximo. Default: 100.
     step           - incremento. Default: 1.
     value          - valor atual.
     label          - texto exibido acima do slider.
     showvalue      - "true" (default) exibe o valor formatado a direita.
                      Use "false" para esconder.
     unit           - sufixo (ex: "kg", "%", "C").
     color          - cor do preenchimento e da borda do thumb.
                      Default: "#1C5C31".
     disabled       - "true" desabilita interacao.
     oninputevent   - JS continuo durante o arrasto. Var: value (number).
     onchangeevent  - JS ao soltar o thumb (valor final). Var: value (number).

   Propriedades JS:
     elemento.value -> getter/setter (number)

   Exemplo:

   <script src="assets/WebComponents/granado-slider.js"></script>

   <granado-slider
       label="Temperatura"
       min="0" max="200" step="5" value="60"
       unit="C"
       oninputevent="console.log('arrastando', value)"
       onchangeevent="console.log('final', value)">
   </granado-slider>

   <granado-slider
       label="Volume" min="0" max="100" value="40" unit="%"
       color="#9A7B1C">
   </granado-slider>
   ============================================================ */

class GranadoSlider extends HTMLElement {
  static get observedAttributes() {
    return ['min', 'max', 'step', 'value', 'label', 'showvalue', 'unit', 'color', 'disabled', 'oninputevent', 'onchangeevent'];
  }

  connectedCallback() {
    if (!this._built) {
      this._build();
      this._built = true;
    }
    this._sync();
  }

  disconnectedCallback() {
    this._removeDocListeners();
  }

  attributeChangedCallback() {
    if (this._built) this._sync();
  }

  get value() {
    const v = parseFloat(this.getAttribute('value'));
    return isNaN(v) ? this.min : v;
  }
  set value(v) { this.setAttribute('value', String(v)); }
  get min() { return parseFloat(this.getAttribute('min') || '0'); }
  get max() { return parseFloat(this.getAttribute('max') || '100'); }
  get step() {
    const s = parseFloat(this.getAttribute('step'));
    return isNaN(s) || s <= 0 ? 1 : s;
  }
  get disabled() { return this.getAttribute('disabled') === 'true'; }

  _build() {
    this.style.display = this.style.display || 'block';

    this.innerHTML = `
      <div style="font-family:'Poppins','DejaVu Sans',Arial,sans-serif">
        <div data-slider-header style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;font-size:11px;color:#103E20">
          <label data-slider-label style="font-weight:600"></label>
          <span data-slider-value style="font-weight:700;font-family:Arial,'DejaVu Sans',Helvetica,sans-serif"></span>
        </div>
        <div data-slider-track tabindex="0" role="slider" style="position:relative;height:6px;background:#E5DDC8;border-radius:3px;cursor:pointer;user-select:none;touch-action:none;outline:none;margin:8px 0">
          <div data-slider-fill style="position:absolute;left:0;top:0;bottom:0;background:#1C5C31;border-radius:3px;pointer-events:none"></div>
          <div data-slider-thumb style="position:absolute;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#FDFAF1;border:2px solid #1C5C31;box-shadow:0 1px 3px rgba(0,0,0,0.12);cursor:grab;transition:transform 0.1s,box-shadow 0.1s;box-sizing:border-box"></div>
        </div>
      </div>
    `;

    const track = this.querySelector('[data-slider-track]');
    const thumb = this.querySelector('[data-slider-thumb]');

    let isDragging = false;

    const setFromClientX = (clientX) => {
      const rect = track.getBoundingClientRect();
      if (rect.width === 0) return;
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const range = this.max - this.min;
      let v = this.min + ratio * range;
      const step = this.step;
      v = Math.round((v - this.min) / step) * step + this.min;
      v = Math.max(this.min, Math.min(this.max, v));
      const decimals = (String(step).split('.')[1] || '').length;
      v = parseFloat(v.toFixed(decimals));
      if (v !== this.value) {
        this.setAttribute('value', String(v));
        this._fire('oninputevent');
      }
    };

    const startDrag = (clientX) => {
      if (this.disabled) return;
      isDragging = true;
      thumb.style.transform = 'translate(-50%,-50%) scale(1.18)';
      thumb.style.boxShadow = '0 2px 6px rgba(0,0,0,0.18)';
      thumb.style.cursor = 'grabbing';
      setFromClientX(clientX);
    };

    const stopDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      thumb.style.transform = 'translate(-50%,-50%)';
      thumb.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
      thumb.style.cursor = 'grab';
      this._fire('onchangeevent');
    };

    // Mouse
    track.addEventListener('mousedown', (e) => {
      e.preventDefault();
      startDrag(e.clientX);
    });
    this._onMouseMove = (e) => { if (isDragging) setFromClientX(e.clientX); };
    this._onMouseUp = () => stopDrag();
    document.addEventListener('mousemove', this._onMouseMove);
    document.addEventListener('mouseup', this._onMouseUp);

    // Touch
    track.addEventListener('touchstart', (e) => {
      if (this.disabled) return;
      e.preventDefault();
      startDrag(e.touches[0].clientX);
    }, { passive: false });
    this._onTouchMove = (e) => {
      if (isDragging && e.touches[0]) {
        e.preventDefault();
        setFromClientX(e.touches[0].clientX);
      }
    };
    this._onTouchEnd = () => stopDrag();
    document.addEventListener('touchmove', this._onTouchMove, { passive: false });
    document.addEventListener('touchend', this._onTouchEnd);

    // Keyboard
    track.addEventListener('keydown', (e) => {
      if (this.disabled) return;
      const step = this.step;
      let v = this.value;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') v -= step;
      else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') v += step;
      else if (e.key === 'Home') v = this.min;
      else if (e.key === 'End') v = this.max;
      else if (e.key === 'PageUp') v += step * 10;
      else if (e.key === 'PageDown') v -= step * 10;
      else return;
      e.preventDefault();
      v = Math.max(this.min, Math.min(this.max, v));
      const decimals = (String(step).split('.')[1] || '').length;
      v = parseFloat(v.toFixed(decimals));
      if (v !== this.value) {
        this.setAttribute('value', String(v));
        this._fire('oninputevent');
        this._fire('onchangeevent');
      }
    });
  }

  _sync() {
    const labelEl = this.querySelector('[data-slider-label]');
    const valueEl = this.querySelector('[data-slider-value]');
    const headerEl = this.querySelector('[data-slider-header]');
    const fill = this.querySelector('[data-slider-fill]');
    const thumb = this.querySelector('[data-slider-thumb]');
    const track = this.querySelector('[data-slider-track]');
    if (!fill) return;

    const labelText = this.getAttribute('label') || '';
    const showValue = this.getAttribute('showvalue') !== 'false';
    const unit = this.getAttribute('unit') || '';
    const disabled = this.disabled;
    const color = this.getAttribute('color') || '#1C5C31';

    if (labelText) {
      labelEl.textContent = labelText;
      labelEl.style.display = '';
    } else {
      labelEl.style.display = 'none';
    }

    if (showValue) {
      valueEl.textContent = `${this.value}${unit ? ' ' + unit : ''}`;
      valueEl.style.display = '';
    } else {
      valueEl.style.display = 'none';
    }

    if (!labelText && !showValue) {
      headerEl.style.display = 'none';
      headerEl.style.marginBottom = '0';
    } else {
      headerEl.style.display = 'flex';
      headerEl.style.marginBottom = '8px';
    }

    const range = this.max - this.min;
    const pct = range > 0
      ? Math.max(0, Math.min(100, ((this.value - this.min) / range) * 100))
      : 0;
    fill.style.width = pct + '%';
    fill.style.background = disabled ? '#B5AB85' : color;
    thumb.style.left = pct + '%';
    thumb.style.borderColor = disabled ? '#B5AB85' : color;

    track.style.opacity = disabled ? '0.65' : '1';
    track.style.cursor = disabled ? 'not-allowed' : 'pointer';
    track.setAttribute('aria-valuemin', String(this.min));
    track.setAttribute('aria-valuemax', String(this.max));
    track.setAttribute('aria-valuenow', String(this.value));
    track.setAttribute('aria-disabled', disabled);
    track.setAttribute('tabindex', disabled ? '-1' : '0');
    if (!disabled) thumb.style.cursor = 'grab';
    else thumb.style.cursor = 'not-allowed';
  }

  _fire(attrName) {
    const handler = this.getAttribute(attrName);
    if (handler) new Function('value', handler).call(this, this.value);
  }

  _removeDocListeners() {
    if (this._onMouseMove) document.removeEventListener('mousemove', this._onMouseMove);
    if (this._onMouseUp) document.removeEventListener('mouseup', this._onMouseUp);
    if (this._onTouchMove) document.removeEventListener('touchmove', this._onTouchMove);
    if (this._onTouchEnd) document.removeEventListener('touchend', this._onTouchEnd);
  }
}

customElements.define('granado-slider', GranadoSlider);
