/* ============================================================
   <granado-gallery>
   Galeria VERTICAL de cards — mesma ideia da versão mobile da
   fila em "Pesagem › Seleção de Ordem de Pesagem". Cada card
   mostra (todos opcionais): title, subtitle, data e um badge de
   status; ao clicar, devolve o item inteiro + metadata.

   ── Atributos / propriedades
     data           - array de itens (em JS use a propriedade .data).
                      Cada item (todos os campos OPCIONAIS):
                        { title, subtitle, data, status, metadata }
                          title     - título do card (destaque)
                          subtitle  - subtítulo (linha abaixo)
                          data      - texto auxiliar (ex.: data/hora)
                          status    - texto do badge (canto direito)
                          metadata  - qualquer objeto/valor extra; NÃO é
                                      exibido, mas volta no clique.
     card-color     - cor de fundo dos cards (default "#FDFAF1")
     title-color    - cor do título (default "#0F3319")
     subtitle-color - cor do subtítulo (default "#555555")
     data-color     - cor do texto "data" (default "#8A8575")
     status-color   - cor do badge de status (texto+borda) (default "#1C5C31")
     enable-scroll  - "true" envolve os itens num container com scroll.
                      Em JS use a propriedade .enableScroll.
     scroll-height  - altura a partir da qual aparece o scroll (CSS válido,
                      ex.: "420px", "60vh"). Default "420px". Só vale quando
                      enable-scroll = "true". Em JS use .scrollHeight.
     scroll-color   - cor do "polegar" do scroll (fino). Default ouro discreto
                      "rgba(191,177,114,.55)". Em JS use .scrollColor.
     enable-shadow  - "false" remove a sombra dos cards (e o realce no hover).
                      Default: true (com sombra). Em JS use .enableShadow.
     onItemClick    - (opcional) string JS executada ao clicar num card
                      (recebe "detail"); em JS prefira a propriedade
                      .onItemClick (função).

   ── Eventos (CustomEvent, bubbles)
     "item-click" -> detail { index, title, subtitle, data, status, metadata }

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-gallery.js"></script>
   <script>
     var g = document.querySelector('granado-gallery');
     g.data = [
       { title: 'OP-2026-0416', subtitle: 'Loção Rosa 200ml', data: '18/05/2026',
         status: 'NOVO', metadata: { op: 'OP-2026-0416', sala: 'A' } },
       { title: 'OP-2026-0414', subtitle: 'Creme 150g', data: '17/05/2026',
         status: 'PESANDO', metadata: { op: 'OP-2026-0414' } }
     ];
     g.onItemClick = function (d) { console.log('clicou', d.title, d.metadata); };
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-gallery')) {
  const CARD_COLOR = '#FDFAF1';
  const TITLE_COLOR = '#0F3319';
  const SUBTITLE_COLOR = '#555555';
  const DATA_COLOR = '#8A8575';
  const STATUS_COLOR = '#1C5C31';
  const BORDER = '#D6CDA4';
  const SCROLL_HEIGHT = '420px';
  const SCROLL_THUMB = 'rgba(191,177,114,.55)';   // polegar do scroll (ouro discreto)
  const SHADOW_BASE = '0 1px 4px rgba(15,51,25,.08)';
  const SHADOW_HOVER = '0 6px 18px rgba(15,51,25,.16)';
  const FONT = "'Poppins',sans-serif";       // texto
  const MONO = "'Arial',Helvetica,sans-serif"; // datas/códigos

  class GranadoGallery extends HTMLElement {
    static get observedAttributes() {
      return ['data', 'card-color', 'title-color', 'subtitle-color', 'data-color', 'status-color', 'enable-scroll', 'scroll-height', 'scroll-color', 'enable-shadow'];
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      // Lazy-props: se alguém setou .data (ou onItemClick) antes de o
      // elemento existir, re-aplica agora que os setters já existem.
      ['data'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });
      this._render();
    }
    attributeChangedCallback(name) {
      if (name === 'data') this._dataArr = null;
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get data() {
      if (this._dataArr && Array.isArray(this._dataArr)) return this._dataArr;
      return this._parseArr(this.getAttribute('data'));
    }
    set data(v) {
      if (typeof v === 'string') { this.setAttribute('data', v); this._dataArr = null; }
      else { this._dataArr = Array.isArray(v) ? v : []; }
      if (this.isConnected) this._render();
    }

    get cardColor() { return this.getAttribute('card-color') || CARD_COLOR; }
    set cardColor(v) { this.setAttribute('card-color', String(v)); }
    get titleColor() { return this.getAttribute('title-color') || TITLE_COLOR; }
    set titleColor(v) { this.setAttribute('title-color', String(v)); }
    get subtitleColor() { return this.getAttribute('subtitle-color') || SUBTITLE_COLOR; }
    set subtitleColor(v) { this.setAttribute('subtitle-color', String(v)); }
    get dataColor() { return this.getAttribute('data-color') || DATA_COLOR; }
    set dataColor(v) { this.setAttribute('data-color', String(v)); }
    get statusColor() { return this.getAttribute('status-color') || STATUS_COLOR; }
    set statusColor(v) { this.setAttribute('status-color', String(v)); }

    get enableScroll() { return this.getAttribute('enable-scroll') === 'true'; }
    set enableScroll(v) { this.setAttribute('enable-scroll', v ? 'true' : 'false'); }
    get scrollHeight() { return this.getAttribute('scroll-height') || SCROLL_HEIGHT; }
    set scrollHeight(v) { this.setAttribute('scroll-height', String(v)); }
    get scrollColor() { return this.getAttribute('scroll-color') || SCROLL_THUMB; }
    set scrollColor(v) { this.setAttribute('scroll-color', String(v)); }
    get enableShadow() { return this.getAttribute('enable-shadow') !== 'false'; }   // default true
    set enableShadow(v) { this.setAttribute('enable-shadow', v ? 'true' : 'false'); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _parseArr(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
    _has(v) { return v != null && String(v) !== ''; }

    _render() {
      const items = (this.data || []);
      const cardColor = this.cardColor;
      const titleColor = this.titleColor;
      const subtitleColor = this.subtitleColor;
      const dataColor = this.dataColor;
      const statusColor = this.statusColor;

      const shadow = this.enableShadow;
      const cards = items.length
        ? items.map((it, i) => this._card(it || {}, i, cardColor, titleColor, subtitleColor, dataColor, statusColor, shadow)).join('')
        : `<div style="border:1px dashed ${BORDER};border-radius:10px;padding:26px 16px;text-align:center;color:${DATA_COLOR};font:12px/1.5 ${FONT}">Nenhum item para exibir.</div>`;

      // Scroll fino e discreto — propriedades PADRÃO (inline, sem stylesheet):
      // scrollbar-width/scrollbar-color funcionam em Chrome 121+, Edge e Firefox.
      const inner = this.enableScroll
        ? `<div data-role="scroll" style="max-height:${this.scrollHeight};overflow-y:auto;padding-right:6px;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:${this.scrollColor} transparent">${cards}</div>`
        : cards;

      this.innerHTML = `<div data-role="gallery" style="display:block;box-sizing:border-box">${inner}</div>`;
      this._bind();
    }

    _card(it, i, cardColor, titleColor, subtitleColor, dataColor, statusColor, shadow) {
      // Cabeçalho: título (esq.) + status (badge) + chevron "entrar" (dir.)
      const status = this._has(it.status)
        ? `<span style="flex-shrink:0;display:inline-block;padding:3px 9px;border-radius:9px;font:800 10px/1.4 ${FONT};color:${statusColor};border:1px solid ${statusColor};background:transparent;white-space:nowrap">${this._esc(it.status)}</span>`
        : '';
      const title = this._has(it.title)
        ? `<div style="font:800 15px/1.25 ${FONT};color:${titleColor};min-width:0;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${this._esc(it.title)}</div>`
        : '<div style="flex:1 1 auto"></div>';
      const chevron = `<span aria-hidden="true" style="flex-shrink:0;font:800 26px/1 ${FONT};color:${titleColor}">&rsaquo;</span>`;
      const subtitle = this._has(it.subtitle)
        ? `<div style="font:12.5px/1.4 ${FONT};color:${subtitleColor};margin-top:2px">${this._esc(it.subtitle)}</div>`
        : '';
      const dataLine = this._has(it.data)
        ? `<div style="font:11px/1.4 ${MONO};color:${dataColor};margin-top:4px">${this._esc(it.data)}</div>`
        : '';

      const boxShadow = shadow ? `box-shadow:${SHADOW_BASE};` : '';
      return `<div data-role="item" data-idx="${i}" style="background:${cardColor};border:1px solid ${BORDER};border-radius:10px;padding:12px 14px;margin-bottom:10px;${boxShadow}cursor:pointer;transition:box-shadow .15s ease,transform .1s ease;box-sizing:border-box">` +
          `<div style="display:flex;align-items:center;gap:10px">${title}${status}${chevron}</div>` +
          subtitle +
          dataLine +
        `</div>`;
    }

    _bind() {
      const self = this;
      const shadow = this.enableShadow;
      this.querySelectorAll('[data-role="item"]').forEach(function (el) {
        el.addEventListener('mouseenter', function () { if (shadow) el.style.boxShadow = SHADOW_HOVER; el.style.transform = 'translateY(-1px)'; });
        el.addEventListener('mouseleave', function () { if (shadow) el.style.boxShadow = SHADOW_BASE; el.style.transform = ''; });
        el.addEventListener('click', function (ev) {
          const idx = parseInt(el.getAttribute('data-idx'), 10) || 0;
          const item = (self.data || [])[idx] || {};
          const detail = {
            index: idx,
            title: item.title,
            subtitle: item.subtitle,
            data: item.data,
            status: item.status,
            metadata: item.metadata
          };
          self.dispatchEvent(new CustomEvent('item-click', { bubbles: true, composed: true, detail: detail }));
          if (typeof self._onItemClickFn === 'function') { self._onItemClickFn(detail, ev); return; }
          const h = self.getAttribute('onitemclick');
          if (h) new Function('event', 'detail', h).call(self, ev, detail);
        });
      });
    }

    // onItemClick como função (via propriedade JS)
    get onItemClick() { return this._onItemClickFn || null; }
    set onItemClick(fn) { this._onItemClickFn = (typeof fn === 'function') ? fn : null; }
  }

  customElements.define('granado-gallery', GranadoGallery);
  window.GranadoGallery = GranadoGallery;
}
