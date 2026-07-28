/* ============================================================
   <granado-timeline>
   Timeline VERTICAL de etapas — linha conectando marcadores
   circulares, com cards expansíveis. Referência à cadeia da
   tela Qualidade > Genealogia de Lote. Os itens devem ser
   <granado-timeline-item> como filhos diretos.

   Atributos (todos opcionais):
     line-color  - cor/gradiente da linha vertical. Aceita qualquer valor
                   CSS (inclusive linear-gradient). Default: gradiente Granado.
     numbered    - "false" oculta o "Etapa X/Y" automático nos itens.
                   Default: numerado.
     single-open - "true" mantém só UM item expandido por vez (acordeão).
                   Default: vários podem ficar abertos.

   Evento (CustomEvent, bubbles) — repassado dos itens:
     "timeline-toggle" -> detail { open, title, order }

   Exemplo:
     <script src="[AprisoScripts]/WebComponents/granado-timeline-item.js"></script>
     <script src="[AprisoScripts]/WebComponents/granado-timeline.js"></script>

     <granado-timeline single-open="true">
       <granado-timeline-item icon="⚖️" title="Pesagem" subtitle="MP e etiquetas" status="ouro" badge="6" open="true">
         <p>Conteúdo da etapa de pesagem…</p>
       </granado-timeline-item>
       <granado-timeline-item icon="⚙️" title="Fabricação" subtitle="InBatch" status="verde" badge="7">
         <p>Conteúdo da fabricação…</p>
       </granado-timeline-item>
     </granado-timeline>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-timeline')) {
  const LINE_DEFAULT = 'linear-gradient(to bottom,#1F7A3D,#C8A85A,#1C7A38)';

  class GranadoTimeline extends HTMLElement {
    static get observedAttributes() { return ['line-color', 'numbered', 'single-open']; }

    connectedCallback() {
      if (!this._observer) {
        this._observer = new MutationObserver((mutations) => {
          const relevant = mutations.some((m) => {
            if (m.type === 'childList') return [...m.addedNodes, ...m.removedNodes].some((n) => n.tagName === 'GRANADO-TIMELINE-ITEM');
            return false;
          });
          if (!relevant) return;
          if (this._renderTimer) clearTimeout(this._renderTimer);
          this._renderTimer = setTimeout(() => this.render(), 0);
        });
      }
      // Acordeão: fecha os outros quando um abre (single-open).
      if (!this._toggleBound) {
        this.addEventListener('timeline-toggle', (ev) => {
          if (this.getAttribute('single-open') !== 'true') return;
          if (!ev.detail || !ev.detail.open) return;
          const items = this._items();
          items.forEach((it) => { if (it !== ev.target && it.open) it.open = false; });
        });
        this._toggleBound = true;
      }
      this.render();
    }
    disconnectedCallback() { if (this._observer) this._observer.disconnect(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }

    _items() {
      const wrap = this.querySelector(':scope > .gtl-wrap');
      const src = wrap ? wrap.querySelector('.gtl-items') : this;
      const out = [];
      Array.from(src.children).forEach((ch) => { if (ch.tagName === 'GRANADO-TIMELINE-ITEM') out.push(ch); });
      // se ainda houver itens soltos direto no host (primeiro render)
      if (wrap) Array.from(this.children).forEach((ch) => { if (ch.tagName === 'GRANADO-TIMELINE-ITEM' && out.indexOf(ch) === -1) out.push(ch); });
      return out;
    }

    render() {
      if (this._observer) this._observer.disconnect();

      const items = this._items();
      const lineColor = this.getAttribute('line-color') || LINE_DEFAULT;
      const numbered = this.getAttribute('numbered') !== 'false';

      // Estrutura: wrapper relativo + linha vertical + slot de itens.
      const wrap = document.createElement('div');
      wrap.className = 'gtl-wrap';
      wrap.style.cssText = "position:relative;font-family:'Poppins','DejaVu Sans',Arial,sans-serif";

      if (items.length) {
        const line = document.createElement('div');
        line.className = 'gtl-line';
        line.setAttribute('aria-hidden', 'true');
        line.style.cssText = `position:absolute;left:30px;top:32px;bottom:32px;width:3px;background:${lineColor};border-radius:2px;z-index:0`;
        wrap.appendChild(line);
      }

      const itemsC = document.createElement('div');
      itemsC.className = 'gtl-items';
      itemsC.style.cssText = 'position:relative;z-index:1';
      wrap.appendChild(itemsC);

      items.forEach((it, i) => {
        it.setAttribute('data-order', String(i + 1));
        it.setAttribute('data-total', String(items.length));
        it.setAttribute('data-numbered', numbered ? 'true' : 'false');
        itemsC.appendChild(it);   // move (preserva o item e seu conteúdo)
      });

      // troca o conteúdo do host pela nova wrapper (itens já migrados para dentro)
      this.textContent = '';
      this.appendChild(wrap);

      if (this.isConnected && this._observer) {
        this._observer.observe(this, { childList: true, subtree: true });
      }
    }
  }

  customElements.define('granado-timeline', GranadoTimeline);
  window.GranadoTimeline = GranadoTimeline;
}
