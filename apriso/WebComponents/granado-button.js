/* ============================================================
   <granado-button>
   Botao no padrao visual Granado, com variantes, tamanhos e
   icone opcional.

   Atributos (todos opcionais):
     label          - texto do botao.
     icon           - icone exibido ao lado do texto. Pode ser:
                        nome de preset: "plus", "minus", "x", "check",
                                        "trash", "edit", "save",
                                        "download", "upload",
                                        "arrow-right", "arrow-left",
                                        "search", "refresh", "filter",
                                        "mail", "settings"
                        ou qualquer texto/emoji/SVG bruto.
     iconposition   - "left" (default) ou "right".
     variant        - "primary" (default) | "secondary" | "ghost".
                        primary   -> fundo cheio com a cor + texto branco
                        secondary -> fundo creme + borda e texto na cor
                        ghost     -> sem borda, sem fundo, texto na cor
     size           - "sm" | "md" (default) | "lg".
     color          - cor base. Default: "#1C5C31".
                      Use "#C0392B" (vermelho) para acoes destrutivas.
     disabled       - "true" desabilita interacao.
     onclickevent   - JS executado no click. Var: event.

   Exemplo:

   <script src="assets/WebComponents/granado-button.js"></script>

   <granado-button label="Salvar" icon="save"></granado-button>
   <granado-button label="Excluir" icon="trash" color="#C0392B"></granado-button>
   <granado-button label="Cancelar" variant="secondary"></granado-button>
   <granado-button label="Voltar" variant="ghost" icon="arrow-left"></granado-button>
   <granado-button label="Avancar" icon="arrow-right" iconposition="right"></granado-button>
   <granado-button label="Adicionar" icon="plus" size="sm"></granado-button>
   ============================================================ */

class GranadoButton extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'icon', 'iconposition', 'variant', 'size', 'color', 'disabled', 'onclickevent'];
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
    if (['icon', 'iconposition', 'size'].includes(name)) {
      this._build();
    }
    this._update();
  }

  get disabled() { return this.getAttribute('disabled') === 'true'; }

  _build() {
    this.style.display = this.style.display || 'inline-block';

    const iconAttr = this.getAttribute('icon');
    const iconPos = this.getAttribute('iconposition') === 'right' ? 'right' : 'left';
    const size = this.getAttribute('size') || 'md';
    const iconSize = size === 'sm' ? 12 : size === 'lg' ? 16 : 14;
    const iconHtml = iconAttr ? this._resolveIcon(iconAttr, iconSize) : '';

    const labelSpan = `<span data-btn-label></span>`;
    const iconSpan = iconHtml
      ? `<span data-btn-icon style="display:inline-flex;align-items:center;line-height:0">${iconHtml}</span>`
      : '';
    const order = iconPos === 'right' ? `${labelSpan}${iconSpan}` : `${iconSpan}${labelSpan}`;

    this.innerHTML = `<button data-btn-root type="button" style="position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid;border-radius:6px;cursor:pointer;font-family:'Poppins','DejaVu Sans',Arial,sans-serif;font-weight:600;outline:none;transition:background 0.15s,border-color 0.15s,color 0.15s,transform 0.1s;box-sizing:border-box">${order}</button>`;

    const btn = this.querySelector('[data-btn-root]');

    btn.addEventListener('click', (e) => {
      if (this.disabled) return;
      this._ripple(e, btn);
      const handler = this.getAttribute('onclickevent');
      if (handler) new Function('event', handler).call(this, e);
    });

    btn.addEventListener('mouseenter', () => {
      if (this.disabled) return;
      this._applyVariantStyles(true);
    });
    btn.addEventListener('mouseleave', () => {
      if (this.disabled) return;
      btn.style.transform = '';
      this._applyVariantStyles(false);
    });

    const press = () => {
      if (this.disabled) return;
      btn.style.transform = 'scale(0.96)';
    };
    const release = () => {
      if (this.disabled) return;
      btn.style.transform = '';
    };
    btn.addEventListener('mousedown', press);
    btn.addEventListener('mouseup', release);
    btn.addEventListener('touchstart', press, { passive: true });
    btn.addEventListener('touchend', release);
    btn.addEventListener('touchcancel', release);
  }

  _ripple(e, btn) {
    const rect = btn.getBoundingClientRect();
    const cx = e.clientX || 0;
    const cy = e.clientY || 0;
    let x, y;
    if (cx === 0 && cy === 0) {
      x = rect.width / 2;
      y = rect.height / 2;
    } else {
      x = cx - rect.left;
      y = cy - rect.top;
    }
    const size = Math.max(rect.width, rect.height);

    const variant = this.getAttribute('variant') || 'primary';
    const color = this.getAttribute('color') || '#1C5C31';
    const rippleBg = variant === 'primary' ? '#fff' : color;
    const startOpacity = variant === 'primary' ? 0.45 : 0.22;

    const ripple = document.createElement('span');
    ripple.style.cssText = `position:absolute;left:${x - size / 2}px;top:${y - size / 2}px;width:${size}px;height:${size}px;border-radius:50%;pointer-events:none;background:${rippleBg};transform:scale(0);opacity:${startOpacity}`;
    btn.appendChild(ripple);

    const anim = ripple.animate(
      [
        { transform: 'scale(0)', opacity: startOpacity },
        { transform: 'scale(2.2)', opacity: 0 }
      ],
      { duration: 450, easing: 'cubic-bezier(0.4,0,0.2,1)' }
    );
    const cleanup = () => ripple.remove();
    anim.onfinish = cleanup;
    anim.oncancel = cleanup;
  }

  _update() {
    const btn = this.querySelector('[data-btn-root]');
    if (!btn) return;

    const size = this.getAttribute('size') || 'md';
    const padding = size === 'sm' ? '6px 10px' : size === 'lg' ? '10px 18px' : '8px 14px';
    const fontSize = size === 'sm' ? '11px' : size === 'lg' ? '14px' : '13px';

    btn.style.padding = padding;
    btn.style.fontSize = fontSize;
    btn.disabled = this.disabled;
    btn.style.cursor = this.disabled ? 'not-allowed' : 'pointer';
    btn.style.opacity = this.disabled ? '0.55' : '1';

    const labelEl = this.querySelector('[data-btn-label]');
    if (labelEl) {
      const label = this.getAttribute('label') || '';
      if (labelEl.textContent !== label) labelEl.textContent = label;
      labelEl.style.display = label ? '' : 'none';
    }

    this._applyVariantStyles(false);
  }

  _applyVariantStyles(hover) {
    const btn = this.querySelector('[data-btn-root]');
    if (!btn) return;
    const variant = this.getAttribute('variant') || 'primary';
    const color = this.getAttribute('color') || '#1C5C31';

    if (variant === 'secondary') {
      btn.style.background = hover ? '#F5EFD9' : '#FDFAF1';
      btn.style.color = color;
      btn.style.borderColor = color;
    } else if (variant === 'ghost') {
      btn.style.background = hover ? '#ECE3C2' : 'transparent';
      btn.style.color = color;
      btn.style.borderColor = 'transparent';
    } else {
      // primary (default)
      const bg = hover ? this._darken(color, 0.12) : color;
      btn.style.background = bg;
      btn.style.color = '#fff';
      btn.style.borderColor = bg;
    }
  }

  _darken(hex, amount) {
    const m = String(hex).match(/^#?([0-9a-f]{6})$/i);
    if (!m) return hex;
    const num = parseInt(m[1], 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.max(0, Math.floor(r * (1 - amount)));
    g = Math.max(0, Math.floor(g * (1 - amount)));
    b = Math.max(0, Math.floor(b * (1 - amount)));
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  _resolveIcon(name, size) {
    const COMMON = `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block"`;
    const wrap = (inner) => `<svg width="${size}" height="${size}" ${COMMON}>${inner}</svg>`;
    const ICONS = {
      plus: wrap(`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`),
      minus: wrap(`<line x1="5" y1="12" x2="19" y2="12"/>`),
      x: wrap(`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`),
      check: wrap(`<polyline points="20 6 9 17 4 12"/>`),
      trash: wrap(`<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>`),
      edit: wrap(`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`),
      save: wrap(`<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>`),
      download: wrap(`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`),
      upload: wrap(`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>`),
      'arrow-right': wrap(`<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`),
      'arrow-left': wrap(`<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>`),
      search: wrap(`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`),
      refresh: wrap(`<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>`),
      filter: wrap(`<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>`),
      mail: wrap(`<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`),
      settings: wrap(`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>`),
    };
    return ICONS[name] || name;
  }
}

customElements.define('granado-button', GranadoButton);
