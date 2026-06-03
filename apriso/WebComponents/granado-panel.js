/* ============================================================
   <granado-panel>
   Container com cabecalho (titulo + subtitulo opcional) e
   conteudo livre. Pode ser colapsavel.

   Atributos (todos opcionais):
     title             - titulo principal exibido no cabecalho.
     subtitle          - texto secundario abaixo do titulo.
     color             - cor da faixa lateral e do titulo. Default: "#1C5C31".
     padding           - padding interno do card. Default: "18px".
     collapsible       - "true" exibe chevron e permite colapsar/expandir.
     collapsed         - "true" inicia colapsado.
     oncollapseevent   - JS executado ao alternar. Var: collapsed (boolean).

   O conteudo do panel sao os filhos do elemento (Light DOM).

   Exemplo:

   <script src="assets/WebComponents/granado-panel.js"></script>

   <granado-panel title="Detalhes da OP" subtitle="OP-2025-0042">
     <p>Conteudo livre aqui.</p>
   </granado-panel>

   <granado-panel title="Filtros avancados" collapsible="true" collapsed="true">
     <p>Conteudo aparece quando expandido.</p>
   </granado-panel>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-panel')) {
  class GranadoPanel extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'subtitle', 'color', 'padding', 'collapsible', 'collapsed', 'oncollapseevent'];
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
      const collapsible = this.getAttribute('collapsible') === 'true';
      const collapsed = this.getAttribute('collapsed') === 'true';

      // Captura o conteudo do usuario (slot anterior + filhos diretos do host)
      const fragment = document.createDocumentFragment();
      const prevSlot = this.querySelector(':scope > .gp-card > .gp-slot');
      if (prevSlot) {
        while (prevSlot.firstChild) fragment.appendChild(prevSlot.firstChild);
      }
      Array.from(this.childNodes).forEach(node => {
        if (node.nodeType === 1 && node.classList && node.classList.contains('gp-card')) return;
        fragment.appendChild(node);
      });

      const hasHeader = !!(title || subtitle || collapsible);
      const chevronRot = collapsed ? 'rotate(-90deg)' : 'rotate(0deg)';

      const headerInner = `
        <div style="flex:1;min-width:0">
          ${title ? `<h3 style="margin:0;font-size:14px;font-weight:700;color:${color};letter-spacing:.04em;font-family:inherit">${title}</h3>` : ''}
          ${subtitle ? `<p style="margin:${title ? '2px 0 0' : '0'};font-size:11px;color:#5A6B5E;font-family:inherit">${subtitle}</p>` : ''}
        </div>
        ${collapsible ? `
          <span style="display:flex;align-items:center;color:${color};transform:${chevronRot};transition:transform 0.18s;flex-shrink:0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        ` : ''}
      `;

      const headerHtml = hasHeader ? `
        <div class="gp-header" ${collapsible ? 'data-gp-toggle' : ''} style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:${collapsed ? '0' : '14px'};${collapsible ? 'cursor:pointer;user-select:none;' : ''}">
          ${headerInner}
        </div>
      ` : '';

      this.innerHTML = `
        <div class="gp-card" style="position:relative;background:#FDFAF1;border:1px solid #E5DDC8;border-radius:8px;padding:${padding};box-shadow:0 1px 3px rgba(0,0,0,0.06);font-family:'Poppins','DejaVu Sans',Arial,sans-serif">
          <span style="position:absolute;top:0;left:0;width:4px;height:100%;background:${color};border-radius:8px 0 0 8px"></span>
          ${headerHtml}
          <div class="gp-slot" style="${collapsed ? 'display:none' : ''}"></div>
        </div>
      `;

      this.querySelector('.gp-slot').appendChild(fragment);

      if (collapsible) {
        const toggle = this.querySelector('[data-gp-toggle]');
        if (toggle) toggle.addEventListener('click', () => this._toggleCollapse());
      }

      if (this.isConnected && this._observer) {
        this._observer.observe(this, { childList: true });
      }
    }

    _toggleCollapse() {
      const newVal = !(this.getAttribute('collapsed') === 'true');
      this.setAttribute('collapsed', newVal ? 'true' : 'false');
      const handler = this.getAttribute('oncollapseevent');
      if (handler) new Function('collapsed', handler).call(this, newVal);
    }
  }

  customElements.define('granado-panel', GranadoPanel);

  window.GranadoPanel = GranadoPanel;
}
