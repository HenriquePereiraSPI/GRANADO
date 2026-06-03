/* ============================================================
   <granado-preloader>
   Overlay de loading fullscreen que bloqueia toda a interacao
   da tela. Mostra um icone animado (configuravel) e um texto
   dinamico (default: "Aguarde...").

   Tipicamente usado via API estatica, sem precisar colocar
   manualmente no HTML.

   Atributos (todos opcionais):
     visible          - "true" | "false". Default: "false".
     text             - texto exibido abaixo do icone. Default: "Aguarde...".
     icon             - estilo do icone animado. Default: "brand".
                        Opcoes:
                          "brand"   - marca Granado (G dourado com pulse + halo).
                          "spinner" - spinner classico (arco rotativo).
                          "dots"    - tres bolinhas pulando em sequencia.
                          "bars"    - quatro barras tipo equalizer.
                          "pulse"   - circulo com ondas expandindo (ripple).
                          "ring"    - dois aneis girando em sentidos opostos.
     color            - cor principal do icone. Default: "#C8A85A".
                        (no "brand", e a cor do quadrado da marca; nos outros
                        variants, e a cor do tracado/preenchimento).
     textcolor        - cor do texto. Default: "#FDFAF1".
     backgroundcolor  - cor do overlay. Default: "rgba(15, 51, 25, 0.72)".
     blur             - "true" aplica backdrop-filter blur. Default: "true".
     zindex           - z-index do overlay. Default: "99999".

   API estatica (uso recomendado):
     GranadoPreloader.show(text?)
     GranadoPreloader.show({ text, icon, color, textcolor, backgroundcolor })
     GranadoPreloader.hide()
     GranadoPreloader.setText(text)
     GranadoPreloader.setIcon(iconName)
     GranadoPreloader.isVisible()

   Exemplo:

   <script src="assets/WebComponents/granado-preloader.js"></script>

   <button onclick="GranadoPreloader.show()">Loading</button>
   <button onclick="GranadoPreloader.show({ icon:'spinner', text:'Salvando...' })">Spinner</button>
   <button onclick="GranadoPreloader.show({ icon:'dots', color:'#2C5A8C' })">Dots</button>
   <button onclick="GranadoPreloader.hide()">Fechar</button>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-preloader')) {
  class GranadoPreloader extends HTMLElement {
    static get observedAttributes() {
      return ['visible', 'text', 'icon', 'color', 'textcolor', 'backgroundcolor', 'blur', 'zindex'];
    }

    // ============================================================
    // API estatica
    // ============================================================
    static _singleton() {
      if (!GranadoPreloader._instance || !GranadoPreloader._instance.isConnected) {
        const el = document.createElement('granado-preloader');
        document.body.appendChild(el);
        GranadoPreloader._instance = el;
      }
      return GranadoPreloader._instance;
    }

    static show(textOrOpts) {
      const el = GranadoPreloader._singleton();
      if (typeof textOrOpts === 'string') {
        el.setAttribute('text', textOrOpts);
      } else if (textOrOpts && typeof textOrOpts === 'object') {
        if (textOrOpts.text != null)            el.setAttribute('text', String(textOrOpts.text));
        if (textOrOpts.icon)                    el.setAttribute('icon', String(textOrOpts.icon));
        if (textOrOpts.color)                   el.setAttribute('color', String(textOrOpts.color));
        if (textOrOpts.textcolor)               el.setAttribute('textcolor', String(textOrOpts.textcolor));
        if (textOrOpts.backgroundcolor)         el.setAttribute('backgroundcolor', String(textOrOpts.backgroundcolor));
        if (textOrOpts.blur != null)            el.setAttribute('blur', String(textOrOpts.blur));
        if (textOrOpts.zindex != null)          el.setAttribute('zindex', String(textOrOpts.zindex));
      }
      el.setAttribute('visible', 'true');
      return el;
    }

    static hide() {
      if (GranadoPreloader._instance) {
        GranadoPreloader._instance.setAttribute('visible', 'false');
      }
    }

    static setText(text) {
      if (GranadoPreloader._instance) {
        GranadoPreloader._instance.setAttribute('text', String(text == null ? '' : text));
      }
    }

    static setIcon(iconName) {
      if (GranadoPreloader._instance) {
        GranadoPreloader._instance.setAttribute('icon', String(iconName || 'brand'));
      }
    }

    static isVisible() {
      return !!(GranadoPreloader._instance &&
                GranadoPreloader._instance.getAttribute('visible') === 'true');
    }

    // ============================================================
    // Lifecycle
    // ============================================================
    connectedCallback() {
      // Lazy-props: se a property foi setada antes do upgrade, vira atributo.
      ['visible', 'text', 'icon', 'color', 'textcolor', 'backgroundcolor', 'blur', 'zindex'].forEach(p => {
        if (Object.prototype.hasOwnProperty.call(this, p)) {
          const v = this[p];
          delete this[p];
          if (v != null) this.setAttribute(p, String(v));
        }
      });
      this._render();
    }

    attributeChangedCallback(name) {
      if (!this.isConnected) return;
      if (name === 'visible') {
        this._applyVisibility();
      } else if (name === 'text') {
        const t = this.querySelector('[data-prl-text]');
        if (t) t.textContent = this._textValue();
      } else {
        this._render();
      }
    }

    disconnectedCallback() {
      this._stopAnimation();
      if (GranadoPreloader._instance === this) GranadoPreloader._instance = null;
    }

    // ============================================================
    // Render
    // ============================================================
    _textValue() {
      const t = this.getAttribute('text');
      return (t == null || t === '') ? 'Aguarde...' : t;
    }

    _iconValue() {
      const i = (this.getAttribute('icon') || 'brand').toLowerCase();
      const allowed = ['brand', 'spinner', 'dots', 'bars', 'pulse', 'ring'];
      return allowed.indexOf(i) >= 0 ? i : 'brand';
    }

    _render() {
      const color     = this.getAttribute('color')           || '#C8A85A';
      const textColor = this.getAttribute('textcolor')       || '#FDFAF1';
      const bg        = this.getAttribute('backgroundcolor') || 'rgba(15, 51, 25, 0.72)';
      const blur      = this.getAttribute('blur') !== 'false';
      const z         = this.getAttribute('zindex')          || '99999';
      const text      = this._textValue();
      const icon      = this._iconValue();

      // Container = overlay fullscreen.
      this.style.position           = 'fixed';
      this.style.top                = '0';
      this.style.right              = '0';
      this.style.bottom             = '0';
      this.style.left               = '0';
      this.style.zIndex             = String(z);
      this.style.alignItems         = 'center';
      this.style.justifyContent     = 'center';
      this.style.background         = bg;
      this.style.backdropFilter     = blur ? 'blur(2px)' : 'none';
      this.style.webkitBackdropFilter = blur ? 'blur(2px)' : 'none';
      this.style.fontFamily         = "'Poppins','DejaVu Sans',Arial,sans-serif";
      this.style.userSelect         = 'none';

      this.innerHTML =
        '<div style="display:flex;flex-direction:column;align-items:center;gap:22px;padding:32px">' +
          this._iconMarkup(icon, color) +
          '<div data-prl-text style="' +
            'font-family:\'Poppins\',\'DejaVu Sans\',Arial,sans-serif;' +
            'font-size:14px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;' +
            'color:' + textColor + ';text-align:center;min-height:1.4em' +
          '">' + this._escape(text) + '</div>' +
        '</div>';

      this._applyVisibility();
    }

    // ============================================================
    // Markup de cada variant de icone.
    // ============================================================
    _iconMarkup(variant, color) {
      if (variant === 'spinner') {
        return '<div data-prl-icon data-variant="spinner" style="' +
          'width:64px;height:64px;box-sizing:border-box;' +
          'border:5px solid rgba(255,255,255,0.18);' +
          'border-top-color:' + color + ';border-radius:50%;' +
          'will-change:transform' +
        '"></div>';
      }
      if (variant === 'dots') {
        const dot = '<span style="' +
            'display:block;width:14px;height:14px;border-radius:50%;' +
            'background:' + color + ';will-change:transform' +
          '"></span>';
        return '<div data-prl-icon data-variant="dots" style="' +
          'display:flex;gap:12px;align-items:center;height:32px' +
        '">' + dot + dot + dot + '</div>';
      }
      if (variant === 'bars') {
        const bar = '<span style="' +
            'display:block;width:8px;height:40px;border-radius:3px;' +
            'background:' + color + ';will-change:transform;' +
            'transform-origin:center' +
          '"></span>';
        return '<div data-prl-icon data-variant="bars" style="' +
          'display:flex;gap:6px;align-items:center;height:48px' +
        '">' + bar + bar + bar + bar + '</div>';
      }
      if (variant === 'pulse') {
        const ring =
          '<span style="' +
            'position:absolute;inset:0;border-radius:50%;' +
            'background:' + color + ';will-change:transform,opacity;' +
            'opacity:0' +
          '"></span>';
        return '<div data-prl-icon data-variant="pulse" style="' +
          'position:relative;width:72px;height:72px' +
        '">' + ring + ring + '</div>';
      }
      if (variant === 'ring') {
        // Dois aneis concentricos rodando em sentidos opostos (visual mais "tech").
        const outer = '<span style="' +
            'position:absolute;inset:0;border-radius:50%;box-sizing:border-box;' +
            'border:4px solid transparent;' +
            'border-top-color:' + color + ';border-right-color:' + color + ';' +
            'will-change:transform' +
          '"></span>';
        const inner = '<span style="' +
            'position:absolute;inset:12px;border-radius:50%;box-sizing:border-box;' +
            'border:3px solid transparent;' +
            'border-bottom-color:' + color + ';border-left-color:' + color + ';' +
            'will-change:transform' +
          '"></span>';
        return '<div data-prl-icon data-variant="ring" style="' +
          'position:relative;width:72px;height:72px' +
        '">' + outer + inner + '</div>';
      }
      // brand (default)
      return '<div data-prl-icon data-variant="brand" style="' +
        'width:92px;height:92px;border-radius:14px;' +
        'background:' + color + ';border:1px solid #9A7520;' +
        'display:flex;align-items:center;justify-content:center;' +
        'font-family:\'Poppins\',\'DejaVu Sans\',Arial,sans-serif;' +
        'font-size:56px;font-weight:800;color:#0F3319;line-height:1;' +
        'box-shadow:inset 0 1px 0 rgba(255,255,255,0.35),0 10px 28px rgba(154,117,32,0.28),0 2px 6px rgba(15,51,25,0.18);' +
        'will-change:transform,box-shadow' +
      '">G</div>';
    }

    _escape(s) {
      return String(s).replace(/[&<>"']/g, c => (
        { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]
      ));
    }

    _applyVisibility() {
      const visible = this.getAttribute('visible') === 'true';
      this.style.display = visible ? 'flex' : 'none';
      if (visible) {
        // Bloqueia scroll do body enquanto o overlay esta ativo.
        if (GranadoPreloader._bodyOvfSaved == null) {
          GranadoPreloader._bodyOvfSaved = document.body.style.overflow || '';
        }
        document.body.style.overflow = 'hidden';
        this._startAnimation();
      } else {
        // Restaura o overflow original.
        if (GranadoPreloader._bodyOvfSaved != null) {
          document.body.style.overflow = GranadoPreloader._bodyOvfSaved;
          GranadoPreloader._bodyOvfSaved = null;
        }
        this._stopAnimation();
      }
    }

    // ============================================================
    // Animacao via Web Animations API (sem injetar @keyframes).
    // Cada variant tem o seu proprio ciclo. _anims acumula handles
    // (1+ por variant) para que _stopAnimation cancele todos.
    // ============================================================
    _startAnimation() {
      const icon = this.querySelector('[data-prl-icon]');
      this._stopAnimation();
      if (!icon || typeof icon.animate !== 'function') return;
      const variant = icon.getAttribute('data-variant');
      this._anims = [];

      if (variant === 'spinner') {
        this._anims.push(icon.animate(
          [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
          { duration: 900, iterations: Infinity, easing: 'linear' }
        ));
        return;
      }

      if (variant === 'dots') {
        const dots = icon.querySelectorAll('span');
        dots.forEach((d, i) => {
          this._anims.push(d.animate(
            [
              { transform: 'translateY(0)',     opacity: 0.4 },
              { transform: 'translateY(-12px)', opacity: 1   },
              { transform: 'translateY(0)',     opacity: 0.4 }
            ],
            { duration: 1000, iterations: Infinity, easing: 'ease-in-out', delay: i * 150 }
          ));
        });
        return;
      }

      if (variant === 'bars') {
        const bars = icon.querySelectorAll('span');
        bars.forEach((b, i) => {
          this._anims.push(b.animate(
            [
              { transform: 'scaleY(0.4)' },
              { transform: 'scaleY(1)'   },
              { transform: 'scaleY(0.4)' }
            ],
            { duration: 1000, iterations: Infinity, easing: 'ease-in-out', delay: i * 120 }
          ));
        });
        return;
      }

      if (variant === 'pulse') {
        const rings = icon.querySelectorAll('span');
        rings.forEach((r, i) => {
          this._anims.push(r.animate(
            [
              { transform: 'scale(0.2)', opacity: 0.6 },
              { transform: 'scale(1)',   opacity: 0   }
            ],
            { duration: 1600, iterations: Infinity, easing: 'cubic-bezier(0.2,0.7,0.4,1)', delay: i * 800 }
          ));
        });
        return;
      }

      if (variant === 'ring') {
        const rings = icon.querySelectorAll('span');
        // Outer: anti-horario, mais lento. Inner: horario, mais rapido.
        if (rings[0]) {
          this._anims.push(rings[0].animate(
            [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }],
            { duration: 1400, iterations: Infinity, easing: 'linear' }
          ));
        }
        if (rings[1]) {
          this._anims.push(rings[1].animate(
            [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
            { duration: 900, iterations: Infinity, easing: 'linear' }
          ));
        }
        return;
      }

      // brand (default) — replica o pulse da marca da Home (respiracao + halo).
      this._anims.push(icon.animate(
        [
          {
            transform: 'scale(1)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35),' +
                       '0 10px 28px rgba(154,117,32,0.28),' +
                       '0 2px 6px rgba(15,51,25,0.18),' +
                       '0 0 0 0 rgba(200,168,75,0.45)'
          },
          {
            transform: 'scale(1.05)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.45),' +
                       '0 16px 40px rgba(154,117,32,0.42),' +
                       '0 4px 12px rgba(15,51,25,0.22),' +
                       '0 0 0 18px rgba(200,168,75,0)'
          },
          {
            transform: 'scale(1)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35),' +
                       '0 10px 28px rgba(154,117,32,0.28),' +
                       '0 2px 6px rgba(15,51,25,0.18),' +
                       '0 0 0 0 rgba(200,168,75,0.45)'
          }
        ],
        { duration: 2600, iterations: Infinity, easing: 'ease-in-out' }
      ));
    }

    _stopAnimation() {
      if (this._anims && this._anims.length) {
        this._anims.forEach(a => { try { a.cancel(); } catch (_) {} });
      }
      this._anims = null;
    }
  }

  customElements.define('granado-preloader', GranadoPreloader);

  window.GranadoPreloader = GranadoPreloader;
}
