/* ============================================================
   <granado-scroll-panel>
   Container com cabecalho e area de conteudo scrollavel.
   Mesmo visual do <granado-panel>, mas com max-height +
   overflow-y:auto na area do conteudo.

   Atributos (todos opcionais):
     title       - titulo principal exibido no cabecalho.
     subtitle    - texto secundario abaixo do titulo.
     color       - cor da faixa lateral e do titulo. Default: "#1C5C31".
     padding     - padding interno do card. Default: "18px".
     maxheight   - altura maxima da area scrollavel. Default: "300px".
     scrollx     - "true" ativa scroll horizontal alem do vertical.
                   Default: false.

   O conteudo do panel sao os filhos do elemento (Light DOM).

   Exemplo:

   <script src="assets/WebComponents/granado-scroll-panel.js"></script>

   <granado-scroll-panel title="Log de eventos" maxheight="240px">
     <ul style="margin:0;padding:0;list-style:none">
       <li>...</li>
       ...
     </ul>
   </granado-scroll-panel>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-scroll-panel')) {
  class GranadoScrollPanel extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'subtitle', 'color', 'padding', 'maxheight', 'scrollx'];
    }

    connectedCallback() {
      if (!this._observer) {
        this._observer = new MutationObserver(() => this.render());
      }
      this.render();
    }

    disconnectedCallback() {
      if (this._observer) this._observer.disconnect();
    }

    attributeChangedCallback() {
      if (this.isConnected) this.render();
    }

    _escape(v) {
      if (v == null) return '';
      return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    render() {
      if (this._observer) this._observer.disconnect();

      const title = this._escape(this.getAttribute('title') || '');
      const subtitle = this._escape(this.getAttribute('subtitle') || '');
      const color = this.getAttribute('color') || '#1C5C31';
      const padding = this.getAttribute('padding') || '18px';
      const maxHeight = this.getAttribute('maxheight') || '300px';
      const scrollX = this.getAttribute('scrollx') === 'true';

      const fragment = document.createDocumentFragment();
      const prevSlot = this.querySelector(':scope > .gsp-card > .gsp-slot');
      if (prevSlot) {
        while (prevSlot.firstChild) fragment.appendChild(prevSlot.firstChild);
      }
      Array.from(this.childNodes).forEach(node => {
        if (node.nodeType === 1 && node.classList && node.classList.contains('gsp-card')) return;
        fragment.appendChild(node);
      });

      const hasHeader = !!(title || subtitle);
      const headerHtml = hasHeader ? `
        <div style="margin-bottom:14px">
          ${title ? `<h3 style="margin:0;font-size:14px;font-weight:700;color:${color};letter-spacing:.04em;font-family:inherit">${title}</h3>` : ''}
          ${subtitle ? `<p style="margin:${title ? '2px 0 0' : '0'};font-size:11px;color:#5A6B5E;font-family:inherit">${subtitle}</p>` : ''}
        </div>
      ` : '';

      this.innerHTML = `
        <div class="gsp-card" style="position:relative;background:#FDFAF1;border:1px solid #E5DDC8;border-radius:8px;padding:${padding};box-shadow:0 1px 3px rgba(0,0,0,0.06);font-family:'Poppins','DejaVu Sans',Arial,sans-serif">
          <span style="position:absolute;top:0;left:0;width:4px;height:100%;background:${color};border-radius:8px 0 0 8px"></span>
          ${headerHtml}
          <div class="gsp-slot" style="max-height:${maxHeight};overflow-y:auto;${scrollX ? 'overflow-x:auto;' : ''}padding-right:4px"></div>
        </div>
      `;

      this.querySelector('.gsp-slot').appendChild(fragment);

      if (this.isConnected && this._observer) {
        this._observer.observe(this, { childList: true });
      }
    }
  }

  customElements.define('granado-scroll-panel', GranadoScrollPanel);

  window.GranadoScrollPanel = GranadoScrollPanel;
}
