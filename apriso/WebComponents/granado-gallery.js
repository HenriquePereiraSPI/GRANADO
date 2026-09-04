/* ============================================================
   <granado-gallery>
   Galeria VERTICAL de cards — mesma ideia da versão mobile da
   fila em "Pesagem › Seleção de Ordem de Pesagem". Cada card
   mostra (todos opcionais): title, subtitle, data e um badge de
   status; ao clicar, devolve o item inteiro + metadata.

   ── Atributos / propriedades
     data           - array de itens (em JS use a propriedade .data).
                      Cada item (todos os campos OPCIONAIS):
                        { title, subtitle, data, status, icon, metadata }
                          title     - título do card (destaque)
                          subtitle  - subtítulo (linha abaixo)
                          data      - texto auxiliar (ex.: data/hora)
                          icon      - (opcional) ícone à ESQUERDA do texto. Aceita
                                      SVG cru (ex.: "<svg ...>...</svg>") OU um
                                      texto/emoji (ex.: "⚖️", "★", "MP").
                          status    - texto do badge (canto direito)
                          statusColor - cor do badge deste item (texto+borda),
                                      sobrepondo status-color. Opcional.
                          cardColor - (opcional) cor de fundo SÓ deste card,
                                      sobrepondo card-color / child-card-color.
                                      (Não se aplica no modo view-only.)
                          children  - array de sub-itens (mesmos campos). Se
                                      houver, o card vira EXPANSÍVEL: clicar no
                                      pai abre/fecha os filhos abaixo (indentados);
                                      o pai não dispara item-click, só expande.
                          metadata  - qualquer objeto/valor extra; NÃO é
                                      exibido, mas volta no clique.
     type           - (opcional) "view-only" transforma a galeria numa LISTA
                      de visualização: a setinha some, o hover some, o cursor
                      fica normal e (no vertical) os itens ficam sem bordas/cards,
                      separados por uma divisória fina em gradiente (some nas
                      pontas). Filhos não expandem no view-only. Em JS use .type.
     orientation    - "vertical" (default) | "horizontal". No horizontal os
                      cards ficam lado a lado com scroll horizontal e os
                      "children" NÃO expandem (cada item é um card simples).
                      Em JS use .orientation.
     card-width     - largura de cada card no modo horizontal (CSS válido,
                      default "220px"). Ignorado no vertical. Em JS .cardWidth.
     card-color     - cor de fundo dos cards (default "#FDFAF1")
     child-card-color - cor de fundo APENAS dos cards filhos. Vazio (default)
                      = usam a mesma cor dos pais (card-color).
     border-color   - cor da borda dos cards (default "#D6CDA4"). No view-only
                      também define a cor da divisória entre os itens.
                      Em JS use .borderColor.
     bg-color       - cor de fundo do container da galeria (default
                      "transparent"). Com cor, ganha padding + cantos.
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
                     Em um filho, detail também traz: isChild:true,
                     parentIndex, childIndex, parent. (Pais com children não
                     disparam item-click — apenas expandem/recolhem.)

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
  const CHILD_CARD_COLOR = '';      // fundo dos cards filhos (vazio = usa card-color)
  const BG_COLOR = 'transparent';   // fundo do container (default: mostra o fundo da página)
  const TITLE_COLOR = '#0F3319';
  const SUBTITLE_COLOR = '#555555';
  const DATA_COLOR = '#8A8575';
  const STATUS_COLOR = '#1C5C31';
  const BORDER = '#D6CDA4';
  const DIVIDER = 'rgba(154,117,32,.38)';   // divisória (ouro) da lista view-only
  const ORIENTATION = 'vertical';   // 'vertical' (default) | 'horizontal'
  const CARD_WIDTH = '220px';       // largura de cada card no modo horizontal
  const SCROLL_HEIGHT = '420px';
  const SCROLL_THUMB = 'rgba(191,177,114,.55)';   // polegar do scroll (ouro discreto)
  const SHADOW_BASE = '0 1px 4px rgba(15,51,25,.08)';
  const SHADOW_HOVER = '0 6px 18px rgba(15,51,25,.16)';
  const FONT = "'Poppins',sans-serif";       // texto
  const MONO = "'Arial',Helvetica,sans-serif"; // datas/códigos

  class GranadoGallery extends HTMLElement {
    static get observedAttributes() {
      return ['data', 'type', 'orientation', 'card-width', 'card-color', 'child-card-color', 'border-color', 'bg-color', 'title-color', 'subtitle-color', 'data-color', 'status-color', 'enable-scroll', 'scroll-height', 'scroll-color', 'enable-shadow'];
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
      this._exp = {};   // reseta o estado de expansão ao trocar os dados
      if (this.isConnected) this._render();
    }

    get type() { return (this.getAttribute('type') || '').toLowerCase(); }
    set type(v) { this.setAttribute('type', String(v)); }
    get isViewOnly() { return this.type === 'view-only'; }
    get orientation() { return (this.getAttribute('orientation') || ORIENTATION).toLowerCase() === 'horizontal' ? 'horizontal' : 'vertical'; }
    set orientation(v) { this.setAttribute('orientation', String(v)); }
    get cardWidth() { return this.getAttribute('card-width') || CARD_WIDTH; }
    set cardWidth(v) { this.setAttribute('card-width', String(v)); }
    get cardColor() { return this.getAttribute('card-color') || CARD_COLOR; }
    set cardColor(v) { this.setAttribute('card-color', String(v)); }
    get childCardColor() { return this.getAttribute('child-card-color') || CHILD_CARD_COLOR; }
    set childCardColor(v) { this.setAttribute('child-card-color', String(v)); }
    get borderColor() { return this.getAttribute('border-color') || ''; }
    set borderColor(v) { this.setAttribute('border-color', String(v)); }
    get bgColor() { return this.getAttribute('bg-color') || BG_COLOR; }
    set bgColor(v) { this.setAttribute('bg-color', String(v)); }
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
      // border-color (opcional) define a borda dos cards E a cor da divisória do
      // view-only. Sem ele: borda default (#D6CDA4) e divisória ouro default.
      const brd = this._has(this.borderColor) ? this.borderColor : BORDER;
      const dvd = this._has(this.borderColor) ? this.borderColor : DIVIDER;
      const colors = {
        card: this.cardColor, childCard: this.childCardColor, border: brd, title: this.titleColor,
        subtitle: this.subtitleColor, data: this.dataColor, status: this.statusColor
      };
      const shadow = this.enableShadow;
      const horizontal = this.orientation === 'horizontal';
      const viewOnly = this.isViewOnly;
      const cardWidth = this.cardWidth;
      const itemBlocks = items.length
        ? items.map((it, i) => this._itemBlock(it || {}, i, colors, shadow, horizontal, cardWidth, viewOnly))
        : null;
      const emptyState = `<div style="border:1px dashed ${brd};border-radius:10px;padding:26px 16px;text-align:center;color:${DATA_COLOR};font:12px/1.5 ${FONT}">Nenhum item para exibir.</div>`;

      // Scroll fino e discreto — propriedades PADRÃO (inline, sem stylesheet):
      // scrollbar-width/scrollbar-color funcionam em Chrome 121+, Edge e Firefox.
      let inner;
      if (horizontal) {
        // Lista horizontal: flex-row com scroll horizontal. Filhos NÃO expandem
        // neste modo (cada item é um card simples, lado a lado).
        const cards = itemBlocks ? itemBlocks.join('') : emptyState;
        inner = `<div data-role="scroll" style="display:flex;gap:10px;overflow-x:auto;overflow-y:hidden;padding:2px 4px 10px 2px;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:${this.scrollColor} transparent">${cards}</div>`;
      } else {
        // Vertical. No view-only vira uma lista limpa (sem bordas/cards soltos):
        // itens transparentes separados por uma hairline em gradiente que some
        // nas pontas. Fora do view-only, cards normais empilhados.
        let body;
        if (viewOnly) {
          const sep = `<div aria-hidden="true" style="height:1px;margin:0 4px;background:linear-gradient(90deg,transparent,${dvd},transparent)"></div>`;
          body = itemBlocks ? itemBlocks.join(sep) : emptyState;
        } else {
          body = itemBlocks ? itemBlocks.join('') : emptyState;
        }
        inner = this.enableScroll
          ? `<div data-role="scroll" style="max-height:${this.scrollHeight};overflow-y:auto;padding-right:6px;box-sizing:border-box;scrollbar-width:thin;scrollbar-color:${this.scrollColor} transparent">${body}</div>`
          : body;
      }

      // Fundo do container (opcional). Só ganha padding/cantos quando há cor.
      const bg = this.bgColor;
      const hasBg = this._has(bg) && bg !== 'transparent';
      const wrapStyle = 'display:block;box-sizing:border-box' +
        (hasBg ? `;background:${bg};padding:12px;border-radius:12px` : '');

      this.innerHTML = `<div data-role="gallery" style="${wrapStyle}">${inner}</div>`;
      this._bind();
    }

    // Item + (se houver) container dos filhos logo abaixo, indentado.
    _itemBlock(it, i, colors, shadow, horizontal, cardWidth, viewOnly) {
      if (horizontal) {
        // Sem expansão de filhos no modo horizontal — card simples de largura fixa.
        return this._card(it, String(i), colors, shadow, { hasChildren: false, expanded: false, isChild: false, horizontal: true, cardWidth: cardWidth, viewOnly: viewOnly });
      }
      if (viewOnly) {
        // Lista conectada: cada item é uma linha rente; filhos NÃO expandem aqui.
        return this._card(it, String(i), colors, shadow, { hasChildren: false, expanded: false, isChild: false, viewOnly: true, first: i === 0 });
      }
      const hasCh = Array.isArray(it.children) && it.children.length > 0;
      const expanded = hasCh && this._isExpanded(i);
      let html = this._card(it, String(i), colors, shadow, { hasChildren: hasCh, expanded: expanded, isChild: false });
      if (hasCh) {
        const childCards = it.children.map((c, ci) => this._card(c || {}, i + '.' + ci, colors, shadow, { hasChildren: false, expanded: false, isChild: true })).join('');
        html += `<div data-role="children" data-parent="${i}" style="margin:-4px 0 10px 14px;padding-left:10px;border-left:2px solid ${colors.border};display:${expanded ? 'block' : 'none'}">${childCards}</div>`;
      }
      return html;
    }

    _card(it, idx, colors, shadow, opts) {
      opts = opts || {};
      const titleColor = colors.title, isChild = !!opts.isChild, viewOnly = !!opts.viewOnly;
      // statusColor por item (opcional) sobrepõe a cor padrão da série.
      const sc = this._has(it.statusColor) ? this._esc(it.statusColor) : colors.status;
      const status = this._has(it.status)
        ? `<span style="flex-shrink:0;display:inline-block;padding:3px 9px;border-radius:9px;font:800 10px/1.4 ${FONT};color:${sc};border:1px solid ${sc};background:transparent;white-space:nowrap">${this._esc(it.status)}</span>`
        : '';
      const tSize = isChild ? '13.5px' : '15px';
      const title = this._has(it.title)
        ? `<div style="font:800 ${tSize}/1.25 ${FONT};color:${titleColor};min-width:0;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${this._esc(it.title)}</div>`
        : '<div style="flex:1 1 auto"></div>';
      // Chevron: se tem filhos, gira ao expandir; senão, é o "entrar".
      // No view-only a setinha some (galeria é só para visualização).
      const chevron = viewOnly
        ? ''
        : (opts.hasChildren
          ? `<span data-role="chev" aria-hidden="true" style="flex-shrink:0;font:800 22px/1 ${FONT};color:${titleColor};transition:transform .18s ease;transform:${opts.expanded ? 'rotate(90deg)' : 'rotate(0deg)'}">&rsaquo;</span>`
          : `<span aria-hidden="true" style="flex-shrink:0;font:800 26px/1 ${FONT};color:${titleColor}">&rsaquo;</span>`);
      const subtitle = this._has(it.subtitle)
        ? `<div style="font:12.5px/1.4 ${FONT};color:${colors.subtitle};margin-top:2px">${this._esc(it.subtitle)}</div>`
        : '';
      const dataLine = this._has(it.data)
        ? `<div style="font:11px/1.4 ${MONO};color:${colors.data};margin-top:4px">${this._esc(it.data)}</div>`
        : '';

      // Ícone opcional à ESQUERDA do texto (aceita SVG cru ou texto/emoji).
      const iconHtml = this._has(it.icon)
        ? `<span data-role="icon" aria-hidden="true" style="flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;line-height:0;color:${titleColor}">${this._iconMarkup(it.icon)}</span>`
        : '';
      // Envolve o conteúdo (linha do título + subtítulo + data) com o ícone à esquerda.
      const wrap = (headRow) => iconHtml
        ? `<div style="display:flex;align-items:center;gap:12px">${iconHtml}<div style="flex:1 1 auto;min-width:0">${headRow}${subtitle}${dataLine}</div></div>`
        : `${headRow}${subtitle}${dataLine}`;

      // ── View-only vertical: linha de uma lista limpa ──
      // Sem borda/raio/sombra/fundo próprios; a divisória em gradiente entre os
      // itens é inserida pelo _render (fica "estilosa" e some nas pontas).
      if (viewOnly && !opts.horizontal) {
        return `<div data-role="item" data-idx="${idx}" style="background:transparent;padding:13px 6px;cursor:default;box-sizing:border-box">` +
            wrap(`<div style="display:flex;align-items:center;gap:10px">${title}${status}</div>`) +
          `</div>`;
      }

      const pad = isChild ? '10px 12px' : '12px 14px';
      const mb = opts.horizontal ? '0' : (isChild ? '8px' : '10px');
      const boxShadow = (shadow && !isChild) ? `box-shadow:${SHADOW_BASE};` : '';
      // No horizontal, cada card tem largura fixa e não encolhe (flex-shrink:0).
      const widthStyle = opts.horizontal ? `flex:0 0 ${opts.cardWidth};width:${opts.cardWidth};` : '';
      const cursor = viewOnly ? 'default' : 'pointer';   // view-only: cursor normal
      // Fundo do card: por item (it.cardColor) sobrepõe child-card-color / card-color.
      let cardBg = (isChild && this._has(colors.childCard)) ? colors.childCard : colors.card;
      if (this._has(it.cardColor)) cardBg = this._esc(it.cardColor);
      return `<div data-role="item" data-idx="${idx}"${isChild ? ' data-child="true"' : ''} style="background:${cardBg};border:1px solid ${colors.border};border-radius:10px;padding:${pad};margin-bottom:${mb};${widthStyle}${boxShadow}cursor:${cursor};transition:box-shadow .15s ease,transform .1s ease;box-sizing:border-box">` +
          wrap(`<div style="display:flex;align-items:center;gap:10px">${title}${status}${chevron}</div>`) +
        `</div>`;
    }

    // Ícone do item: se parece SVG/HTML (tem "<tag>"), usa cru; senão vira texto/emoji.
    _iconMarkup(icon) {
      const s = String(icon == null ? '' : icon);
      return /<[a-z!/][\s\S]*>/i.test(s) ? s : `<span style="font-size:18px;line-height:1">${this._esc(s)}</span>`;
    }

    _isExpanded(i) { return !!(this._exp && this._exp[i]); }
    _toggleExpand(i) {
      if (!this._exp) this._exp = {};
      const now = !this._exp[i];
      this._exp[i] = now;
      const childEl = this.querySelector('[data-role="children"][data-parent="' + i + '"]');
      if (childEl) childEl.style.display = now ? 'block' : 'none';
      const parentEl = this.querySelector('[data-role="item"][data-idx="' + i + '"]');
      const chev = parentEl && parentEl.querySelector('[data-role="chev"]');
      if (chev) chev.style.transform = now ? 'rotate(90deg)' : 'rotate(0deg)';
    }

    _fire(index, item, ev, extra) {
      const detail = Object.assign({
        index: index, title: item.title, subtitle: item.subtitle,
        data: item.data, status: item.status, metadata: item.metadata
      }, extra || {});
      this.dispatchEvent(new CustomEvent('item-click', { bubbles: true, composed: true, detail: detail }));
      if (typeof this._onItemClickFn === 'function') { this._onItemClickFn(detail, ev); return; }
      const h = this.getAttribute('onitemclick');
      if (h) new Function('event', 'detail', h).call(this, ev, detail);
    }

    _bind() {
      const self = this;
      const shadow = this.enableShadow;
      const horizontal = this.orientation === 'horizontal';
      const viewOnly = this.isViewOnly;
      this.querySelectorAll('[data-role="item"]').forEach(function (el) {
        if (!viewOnly) {
          el.addEventListener('mouseenter', function () { if (shadow && el.getAttribute('data-child') !== 'true') el.style.boxShadow = SHADOW_HOVER; el.style.transform = 'translateY(-1px)'; });
          el.addEventListener('mouseleave', function () { if (shadow && el.getAttribute('data-child') !== 'true') el.style.boxShadow = SHADOW_BASE; el.style.transform = ''; });
        }
        el.addEventListener('click', function (ev) {
          const idxStr = el.getAttribute('data-idx') || '0';
          if (idxStr.indexOf('.') === -1) {
            // Pai. Se tem filhos, expande/recolhe; senão, dispara o clique.
            const idx = parseInt(idxStr, 10) || 0;
            const item = (self.data || [])[idx] || {};
            if (!horizontal && Array.isArray(item.children) && item.children.length) { self._toggleExpand(idx); return; }
            self._fire(idx, item, ev, { isChild: false });
          } else {
            // Filho.
            const parts = idxStr.split('.');
            const pi = parseInt(parts[0], 10) || 0, ci = parseInt(parts[1], 10) || 0;
            const parent = (self.data || [])[pi] || {};
            const item = ((parent.children || [])[ci]) || {};
            self._fire(idxStr, item, ev, { isChild: true, parentIndex: pi, childIndex: ci, parent: parent });
          }
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
