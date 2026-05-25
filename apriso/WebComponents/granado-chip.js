/* ============================================================
   <granado-chip>
   Chip pill, opcionalmente clicavel, removivel ou selecionavel.
   Usado para tags, filtros, categorias.

   Atributos (todos opcionais):
     label          - texto do chip.
     variant        - "soft" (default) | "solid" | "outline".
                        soft    -> fundo claro derivado da cor + texto na cor
                        solid   -> fundo cheio na cor + texto branco
                        outline -> sem fundo, borda + texto na cor
     color          - cor base. Default: "#1C5C31".
     icon           - icone exibido a esquerda. Aceita texto/emoji/SVG bruto
                      (ex: "🏷️", "✓", "<svg>...</svg>").
     removable      - "true" exibe botao "X" para remover.
     clickable      - "true" deixa o chip clicavel (cursor + hover + tab).
     selected       - "true"/"false". Util para chips de filtro: quando
                      selected, usa o estilo solid sobrepondo o variant.
     disabled       - "true" desabilita interacao.
     onclickevent   - JS executado no click (quando clickable). Var: event.
     onremoveevent  - JS executado ao clicar no X (quando removable). Var: event.

   Propriedades JS:
     elemento.selected -> getter/setter (boolean)

   Exemplo:

   <script src="assets/WebComponents/granado-chip.js"></script>

   <granado-chip label="Glicerina USP"></granado-chip>
   <granado-chip label="Lote L24-1001" icon="🏷️"></granado-chip>
   <granado-chip label="Maria Silva" removable="true" onremoveevent="this.remove()"></granado-chip>
   <granado-chip label="Aprovado" variant="solid" color="#1C7A38"></granado-chip>
   <granado-chip label="Filtrar OK" clickable="true" selected="true"
                 onclickevent="this.selected = !this.selected"></granado-chip>
   ============================================================ */

class GranadoChip extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'variant', 'color', 'icon', 'removable', 'clickable', 'selected', 'disabled', 'onclickevent', 'onremoveevent'];
  }

  connectedCallback() { this._render(); }
  attributeChangedCallback() { if (this.isConnected) this._render(); }

  get selected() { return this.getAttribute('selected') === 'true'; }
  set selected(v) { this.setAttribute('selected', v ? 'true' : 'false'); }
  get disabled() { return this.getAttribute('disabled') === 'true'; }

  _render() {
    const label = this.getAttribute('label') || '';
    const variant = this.getAttribute('variant') || 'soft';
    const color = this.getAttribute('color') || '#1C5C31';
    const iconAttr = this.getAttribute('icon') || '';
    const removable = this.getAttribute('removable') === 'true';
    const clickable = this.getAttribute('clickable') === 'true';
    const selected = this.selected;
    const disabled = this.disabled;

    let bg, fg, border, hoverBg;
    if (disabled) {
      bg = '#EFE6CC';
      fg = '#B5AB85';
      border = '1px solid #D6CDA4';
      hoverBg = bg;
    } else if (selected) {
      bg = color;
      fg = '#fff';
      border = `1px solid ${color}`;
      hoverBg = this._darken(color, 0.1);
    } else if (variant === 'outline') {
      bg = 'transparent';
      fg = color;
      border = `1px solid ${color}`;
      hoverBg = this._lighten(color, 0.92);
    } else if (variant === 'solid') {
      bg = color;
      fg = '#fff';
      border = `1px solid ${color}`;
      hoverBg = this._darken(color, 0.1);
    } else {
      // soft
      bg = this._lighten(color, 0.85);
      fg = color;
      border = '1px solid transparent';
      hoverBg = this._lighten(color, 0.75);
    }

    const cursor = disabled ? 'not-allowed' : (clickable ? 'pointer' : 'default');
    this.style.display = this.style.display || 'inline-flex';

    this.innerHTML = `<span data-chip-root style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:5px 10px;border-radius:999px;background:${bg};color:${fg};border:${border};font-family:'Poppins','DejaVu Sans',Arial,sans-serif;line-height:1;white-space:nowrap;cursor:${cursor};user-select:none;transition:background 0.15s,border-color 0.15s;box-sizing:border-box;${disabled ? 'opacity:0.7' : ''}" ${clickable && !disabled ? `tabindex="0" role="button"` : ''}>${iconAttr ? `<span style="display:inline-flex;align-items:center;line-height:0;font-size:13px">${iconAttr}</span>` : ''}${label ? `<span>${this._escape(label)}</span>` : ''}${removable && !disabled ? `<button data-chip-remove type="button" aria-label="Remover" style="background:transparent;border:none;cursor:pointer;padding:0;height:auto;color:inherit;display:flex;align-items:center;line-height:0;margin-left:2px;opacity:0.6;border-radius:50%"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>` : ''}</span>`;

    const root = this.querySelector('[data-chip-root]');

    if (clickable && !disabled) {
      root.addEventListener('click', (e) => {
        if (e.target.closest('[data-chip-remove]')) return;
        const handler = this.getAttribute('onclickevent');
        if (handler) new Function('event', handler).call(this, e);
      });
      root.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          const handler = this.getAttribute('onclickevent');
          if (handler) new Function('event', handler).call(this, e);
        }
      });
    }

    if ((clickable || removable) && !disabled) {
      root.addEventListener('mouseenter', () => { root.style.background = hoverBg; });
      root.addEventListener('mouseleave', () => { root.style.background = bg; });
    }

    if (removable && !disabled) {
      const removeBtn = this.querySelector('[data-chip-remove]');
      if (removeBtn) {
        removeBtn.addEventListener('mouseenter', () => { removeBtn.style.opacity = '1'; });
        removeBtn.addEventListener('mouseleave', () => { removeBtn.style.opacity = '0.6'; });
        removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const handler = this.getAttribute('onremoveevent');
          if (handler) new Function('event', handler).call(this, e);
        });
      }
    }
  }

  _lighten(hex, amount) {
    const m = String(hex).match(/^#?([0-9a-f]{6})$/i);
    if (!m) return hex;
    const num = parseInt(m[1], 16);
    let r = (num >> 16) & 0xff, g = (num >> 8) & 0xff, b = num & 0xff;
    r = Math.round(r + (255 - r) * amount);
    g = Math.round(g + (255 - g) * amount);
    b = Math.round(b + (255 - b) * amount);
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  _darken(hex, amount) {
    const m = String(hex).match(/^#?([0-9a-f]{6})$/i);
    if (!m) return hex;
    const num = parseInt(m[1], 16);
    let r = (num >> 16) & 0xff, g = (num >> 8) & 0xff, b = num & 0xff;
    r = Math.max(0, Math.floor(r * (1 - amount)));
    g = Math.max(0, Math.floor(g * (1 - amount)));
    b = Math.max(0, Math.floor(b * (1 - amount)));
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  _escape(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, ch =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }
}

customElements.define('granado-chip', GranadoChip);
