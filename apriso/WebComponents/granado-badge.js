/* ============================================================
   <granado-badge>
   Badge compacto para indicar status (ex: "OK", "Desvio").

   Atributos (todos opcionais):
     label    - texto do badge.
     variant  - "solid" (default) | "soft" | "outline".
                  solid   -> fundo cheio na cor + texto branco
                  soft    -> fundo claro derivado da cor + texto na cor
                  outline -> sem fundo, borda + texto na cor
     color    - cor base. Default: "#1C5C31".
                Sugestoes: "#1C7A38" OK, "#9A5A00" warning, "#C0392B" error,
                "#2C5A8C" info.
     dot      - "true" exibe um ponto colorido pequeno antes do texto.
     size     - "sm" | "md" (default).

   Exemplo:

   <script src="assets/WebComponents/granado-badge.js"></script>

   <granado-badge label="OK" color="#1C7A38"></granado-badge>
   <granado-badge label="Desvio" color="#9A5A00" variant="soft"></granado-badge>
   <granado-badge label="Pendente" color="#2C5A8C" variant="outline" dot="true"></granado-badge>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-badge')) {
  class GranadoBadge extends HTMLElement {
    static get observedAttributes() {
      return ['label', 'variant', 'color', 'dot', 'size'];
    }

    connectedCallback() { this._render(); }
    attributeChangedCallback() { if (this.isConnected) this._render(); }

    _render() {
      const label = this.getAttribute('label') || '';
      const variant = this.getAttribute('variant') || 'solid';
      const color = this.getAttribute('color') || '#1C5C31';
      const dot = this.getAttribute('dot') === 'true';
      const size = this.getAttribute('size') || 'md';

      const fontSize = size === 'sm' ? '9px' : '10px';
      const padding = size === 'sm' ? '2px 6px' : '3px 8px';
      const dotSize = size === 'sm' ? '5px' : '6px';

      let bg, fg, border;
      if (variant === 'outline') {
        bg = 'transparent';
        fg = color;
        border = `1px solid ${color}`;
      } else if (variant === 'soft') {
        bg = this._lighten(color, 0.85);
        fg = color;
        border = '1px solid transparent';
      } else {
        bg = color;
        fg = '#fff';
        border = `1px solid ${color}`;
      }

      const dotColor = variant === 'solid' ? '#fff' : color;
      const dotHtml = dot
        ? `<span style="display:inline-block;width:${dotSize};height:${dotSize};border-radius:50%;background:${dotColor};flex-shrink:0"></span>`
        : '';

      this.style.display = this.style.display || 'inline-flex';

      this.innerHTML = `<span style="display:inline-flex;align-items:center;gap:5px;font-size:${fontSize};font-weight:900;letter-spacing:.08em;text-transform:uppercase;padding:${padding};border-radius:4px;background:${bg};color:${fg};border:${border};font-family:'Poppins','DejaVu Sans',Arial,sans-serif;line-height:1;white-space:nowrap;box-sizing:border-box">${dotHtml}${label ? `<span>${this._escape(label)}</span>` : ''}</span>`;
    }

    _lighten(hex, amount) {
      const m = String(hex).match(/^#?([0-9a-f]{6})$/i);
      if (!m) return hex;
      const num = parseInt(m[1], 16);
      let r = (num >> 16) & 0xff;
      let g = (num >> 8) & 0xff;
      let b = num & 0xff;
      r = Math.round(r + (255 - r) * amount);
      g = Math.round(g + (255 - g) * amount);
      b = Math.round(b + (255 - b) * amount);
      return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    }

    _escape(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, ch =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
  }

  customElements.define('granado-badge', GranadoBadge);

  window.GranadoBadge = GranadoBadge;
}
