/* ============================================================
   <granado-tree>
   Árvore hierárquica expansível (estrutura organizacional), no
   mesmo padrão visual da tela "Manutenção > Paradas":
   nós aninhados com chevron (▸/▾), ícone, rótulo, badge e um
   "dot" de status opcional. Clique seleciona/expande; emite
   eventos de click e double-click com os dados do nó.

   ── Dados (atributo "nodes" = JSON, ou propriedade .nodes = array)
   Cada nó é um objeto:

     {
       "id":       "wc-01",          // opcional (usa o índice se ausente)
       "label":    "Sala 1",         // texto exibido
       "icon":     "🏬",             // opcional (emoji/texto)
       "badge":    "3 equip.",       // opcional (chip à direita)
       "dot":      "#1C7A38",        // opcional (cor da bolinha de status)
       "color":    "#8C1A1A",        // opcional (cor do rótulo)
       "children": [ ...nós... ],    // opcional (filhos)
       "data":     { ... }           // opcional (qualquer info extra,
                                     //   devolvida nos eventos)
     }

   ── Atributos (todos opcionais)
     nodes             - JSON com o array de nós (use a propriedade
                         .nodes p/ passar o array direto em JS).
     default-expanded  - "roots" (default) | "all" | "none".
     accent-color      - cor de destaque (seleção). Default "#1C5C31".
     selectable        - "false" desativa o highlight de seleção.

   ── Propriedades JS
     el.nodes            -> ler/setar o array de nós
     el.defaultExpanded  -> "roots" | "all" | "none"
     el.accentColor      -> cor de destaque
     el.expandAll()      -> expande todos os nós
     el.collapseAll()    -> recolhe todos os nós

   ── Eventos (CustomEvent, bubbles)
     node-click     - clique simples num nó
     node-dblclick  - duplo clique num nó
     Em ambos, event.detail = { id, label, node, path }
       node -> objeto completo do nó (inclui o "data")
       path -> array de ids/índices da raiz até o nó

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-tree.js"></script>

   <granado-tree id="estrutura"></granado-tree>
   <script>
     const tree = document.getElementById('estrutura');
     tree.nodes = [
       { id:'pes', label:'Pesagem', icon:'🏭', children:[
         { id:'md1', label:'MD1', icon:'🏗️', children:[
           { id:'s1', label:'Sala 1', icon:'🏬', badge:'2 balanças', children:[
             { id:'b1', label:'Balança BAL-01', icon:'⚖', dot:'#1C7A38' },
             { id:'b2', label:'Balança BAL-02', icon:'⚖', dot:'#8C1A1A' }
           ]}
         ]}
       ]}
     ];
     tree.addEventListener('node-click',    (e) => console.log('click', e.detail));
     tree.addEventListener('node-dblclick', (e) => console.log('dblclick', e.detail));
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-tree')) {
  /* Ícones disponíveis por NOME (de→para). Passe icon:"sala" e o componente
     resolve para o glyph. Se o nome não existir, usa o valor literal (assim
     emojis diretos como icon:"🏭" continuam funcionando).
     A lista completa fica em GranadoTree.ICONS. */
  const ICONS = {
    fabrica: '🏭', facility: '🏭', linha: '🏗️', line: '🏗️',
    sala: '🏬', workcenter: '🏬', equipamento: '⚙', equipment: '⚙',
    balanca: '⚖', reator: '⚗️', tanque: '🛢️', bomba: '🚰', misturador: '🌀',
    caixa: '📦', gaiola: '📦', etiqueta: '🏷️', documento: '📄', certificado: '📜',
    operador: '👷', usuario: '👤', relogio: '🕒', calendario: '📅',
    termometro: '🌡️', pressao: '🎚️', umidade: '💧', quimico: '🧪',
    qualidade: '🔬', manutencao: '🛠️', limpeza: '🧽', energia: '⚡',
    ok: '✅', operando: '▶️', parado: '⏸️', alerta: '⚠️', erro: '⛔', bloqueado: '🔒',
    alvo: '🎯', estrela: '⭐', pasta: '📁',
  };

  class GranadoTree extends HTMLElement {
    static get observedAttributes() {
      return ['nodes', 'default-expanded', 'accent-color', 'selectable', 'searchable', 'filter'];
    }

    connectedCallback() {
      // lazy-props: reaplica propriedades setadas antes do upgrade.
      ['nodes', 'defaultExpanded', 'accentColor', 'selectable', 'searchable', 'filter'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) {
          const v = this[p];
          delete this[p];
          this[p] = v;
        }
      });
      if (!this._wired) {
        this._wired = true;
        this._expanded = this._expanded || {};
        this._selKey = this._selKey || null;
        this._map = {};
        this.addEventListener('click', (e) => this._onClick(e));
        this.addEventListener('dblclick', (e) => this._onDblClick(e));
        this.addEventListener('input', (e) => {
          const inp = e.target;
          if (inp && inp.getAttribute && inp.getAttribute('data-gt-search') != null) {
            this._filter = inp.value;
            this._render();
            const novo = this.querySelector('[data-gt-search]');
            if (novo) { novo.focus(); const L = novo.value.length; try { novo.setSelectionRange(L, L); } catch (err) {} }
          }
        });
        this._initExpand();
      }
      this._render();
    }

    attributeChangedCallback(name) {
      if (name === 'nodes') { this._nodesData = null; this._selKey = null; this._initExpand(); }
      if (name === 'default-expanded') { this._initExpand(); }
      if (name === 'filter') { this._filter = null; }
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get nodes() {
      if (Array.isArray(this._nodesData)) return this._nodesData;
      return this._parse(this.getAttribute('nodes'));
    }
    set nodes(v) {
      if (typeof v === 'string') {
        this.setAttribute('nodes', v);
        this._nodesData = null;
      } else {
        this._nodesData = Array.isArray(v) ? v : [];
      }
      this._selKey = null;
      this._initExpand();
      if (this.isConnected) this._render();
    }

    get defaultExpanded() { return this.getAttribute('default-expanded') || 'roots'; }
    set defaultExpanded(v) { this.setAttribute('default-expanded', String(v == null ? '' : v)); }

    get accentColor() { return this.getAttribute('accent-color') || '#1C5C31'; }
    set accentColor(v) { this.setAttribute('accent-color', String(v == null ? '' : v)); }

    get selectable() { return this.getAttribute('selectable') !== 'false'; }
    set selectable(v) { this.setAttribute('selectable', v === false || v === 'false' ? 'false' : 'true'); }

    get searchable() { const a = this.getAttribute('searchable'); return a != null && a !== 'false'; }
    set searchable(v) { if (v === false || v === 'false') this.removeAttribute('searchable'); else this.setAttribute('searchable', ''); }

    get filter() { return this._filter != null ? this._filter : (this.getAttribute('filter') || ''); }
    set filter(v) { this._filter = (v == null ? '' : String(v)); if (this.isConnected) this._render(); }

    expandAll() { this._setAllExpanded(true); }
    collapseAll() { this._setAllExpanded(false); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _parse(s) {
      if (!s) return [];
      try { const v = JSON.parse(s); return Array.isArray(v) ? v : []; } catch (e) { return []; }
    }
    _key(node, i) { return String(node && node.id != null ? node.id : i); }

    // Resolve o ícone: nome conhecido -> glyph; senão usa o valor literal.
    _resolveIcon(name) {
      if (name == null || name === '') return '';
      const k = String(name).toLowerCase();
      return Object.prototype.hasOwnProperty.call(ICONS, k) ? ICONS[k] : name;
    }

    _matchSelf(node, q) { return ((node && node.label) || '').toLowerCase().indexOf(q) !== -1; }
    _matchTree(node, q) {
      if (this._matchSelf(node, q)) return true;
      if (Array.isArray(node.children)) return node.children.some((c) => this._matchTree(c, q));
      return false;
    }
    _hexToRgb(hex) {
      const m = /^#?([0-9a-f]{6})$/i.exec((hex || '').trim());
      if (m) { const n = parseInt(m[1], 16); return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }; }
      const s = /^#?([0-9a-f]{3})$/i.exec((hex || '').trim());
      if (s) { const c = s[1]; return { r: parseInt(c[0] + c[0], 16), g: parseInt(c[1] + c[1], 16), b: parseInt(c[2] + c[2], 16) }; }
      return { r: 140, g: 26, b: 26 };
    }
    _esc(s) { return String(s == null ? '' : s).split('"').join('&quot;'); }

    _walk(arr, pathArr, depth, cb) {
      (arr || []).forEach((n, i) => {
        const kp = pathArr.concat(this._key(n, i));
        cb(n, kp.join('/'), depth, kp);
        if (Array.isArray(n.children)) this._walk(n.children, kp, depth + 1, cb);
      });
    }

    _initExpand() {
      this._expanded = {};
      const mode = this.getAttribute('default-expanded') || 'roots';
      this._walk(this.nodes, [], 0, (n, key, depth) => {
        let e = false;
        if (mode === 'all') e = true;
        else if (mode === 'roots' && depth === 0) e = true;
        // "expanded" no próprio nó tem prioridade (true abre, false fecha).
        if (n && n.expanded === true) e = true;
        if (n && n.expanded === false) e = false;
        if (e) this._expanded[key] = true;
      });
    }
    _setAllExpanded(val) {
      this._expanded = {};
      if (val) this._walk(this.nodes, [], 0, (n, key) => { this._expanded[key] = true; });
      if (this.isConnected) this._render();
    }

    _onClick(e) {
      const tgl = e.target.closest && e.target.closest('[data-gt-toggle]');
      if (tgl && this.contains(tgl)) {
        e.stopPropagation();
        const k = tgl.getAttribute('data-gt-toggle');
        this._expanded[k] = !this._expanded[k];
        this._render();
        return;
      }
      const row = e.target.closest && e.target.closest('[data-gt-node]');
      if (!row || !this.contains(row)) return;
      const k = row.getAttribute('data-gt-node');
      const info = this._map[k];
      if (this.selectable) this._selKey = k;
      // Ao clicar num nó com filhos, abre-o (chevron continua recolhendo).
      if (info && Array.isArray(info.node.children) && info.node.children.length) this._expanded[k] = true;
      this._render();
      this._emit('node-click', k);
    }
    _onDblClick(e) {
      const row = e.target.closest && e.target.closest('[data-gt-node]');
      if (!row || !this.contains(row)) return;
      this._emit('node-dblclick', row.getAttribute('data-gt-node'));
    }
    _emit(type, key) {
      const info = this._map[key];
      if (!info) return;
      const node = info.node;
      this.dispatchEvent(new CustomEvent(type, {
        bubbles: true,
        composed: true,
        detail: { id: node.id != null ? node.id : null, label: node.label || '', node: node, path: info.path },
      }));
    }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------
    _render() {
      this.style.display = this.style.display || 'block';
      const acc = this.getAttribute('accent-color') || '#1C5C31';
      const q = (this.filter || '').trim().toLowerCase();
      this._map = {};
      const html = (this.nodes || []).map((n, i) => this._renderNode(n, [this._key(n, i)], 0, acc, q)).join('');

      const search = this.searchable
        ? `<div style="margin-bottom:10px"><input data-gt-search type="text" autocomplete="off" placeholder="🔍 Filtrar…" value="${this._esc(this.filter)}" ` +
          `style="width:100%;box-sizing:border-box;font-size:12px;padding:7px 10px;border:1px solid #D6CDA4;border-radius:6px;background:#FDFAF1;color:#103E20;font-family:'Poppins','DejaVu Sans',Arial,sans-serif"></div>`
        : '';
      let corpo = html;
      if (!corpo) {
        corpo = q
          ? `<div style="font-size:12px;color:#8A9E8E;padding:10px">Nenhum item para "${this._esc(this.filter)}".</div>`
          : `<div style="font-size:12px;color:#8A9E8E;padding:10px">Sem itens.</div>`;
      }
      this.innerHTML =
        `<div style="font-family:'Poppins','DejaVu Sans',Arial,sans-serif;font-size:13px;color:#103E20">` +
          search + corpo +
        `</div>`;
      this._animarDots();
    }

    // Anima (pulse) os dots marcados com dotPulse — via Web Animations API,
    // sem injetar stylesheet (mantém o componente autossuficiente).
    _animarDots() {
      const dots = this.querySelectorAll('[data-gt-pulse]');
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        if (!d.animate) break;
        const rgb = this._hexToRgb(d.getAttribute('data-gt-pulse'));
        d.animate(
          [
            { boxShadow: `0 0 0 0 rgba(${rgb.r},${rgb.g},${rgb.b},0.55)` },
            { boxShadow: `0 0 0 6px rgba(${rgb.r},${rgb.g},${rgb.b},0)` },
          ],
          { duration: 1200, iterations: Infinity, easing: 'ease-in-out' }
        );
      }
    }

    _renderNode(node, pathArr, depth, acc, q) {
      // Filtro: oculta nós sem correspondência (no próprio nó ou descendentes).
      if (q && !this._matchTree(node, q)) return '';
      const key = pathArr.join('/');
      this._map[key] = { node: node, path: pathArr.slice(), level: depth };
      const hasCh = Array.isArray(node.children) && node.children.length > 0;
      const exp = q ? true : !!this._expanded[key]; // ao filtrar, auto-expande
      const sel = this.selectable && this._selKey === key;
      const direct = !!(q && this._matchSelf(node, q));
      const labelCor = sel ? acc : (node.color || '#103E20');

      const chevron = hasCh
        ? `<span data-gt-toggle="${key}" style="cursor:pointer;width:16px;flex-shrink:0;text-align:center;color:#8A9E8E;font-size:10px">${exp ? '▾' : '▸'}</span>`
        : `<span style="width:16px;flex-shrink:0;display:inline-block"></span>`;
      const ico = this._resolveIcon(node.icon);
      const icon = ico ? `<span style="font-size:15px;flex-shrink:0">${ico}</span>` : '';
      const badge = node.badge
        ? `<span style="flex-shrink:0;font-size:9px;font-weight:700;color:#5A6B5E;background:#ECE3BD;border:1px solid #D6CDA4;border-radius:10px;padding:1px 7px">${node.badge}</span>`
        : '';
      const dot = node.dot
        ? `<span ${node.dotPulse ? `data-gt-pulse="${node.dot}" ` : ''}style="width:9px;height:9px;border-radius:50%;flex-shrink:0;background:${node.dot}"></span>`
        : '';

      const labelStyle = `flex:1;min-width:0;font-weight:${(sel || direct) ? '700' : '500'};color:${labelCor};` +
        `white-space:nowrap;overflow:hidden;text-overflow:ellipsis` +
        (direct ? `;background:#FCEFC7;border-radius:3px;padding:0 4px` : '');

      const row =
        `<div data-gt-node="${key}" style="cursor:pointer;display:flex;align-items:center;gap:6px;` +
          `padding:5px 8px;padding-left:${8 + depth * 16}px;border-radius:6px;` +
          (sel ? `background:#E8F0E6;box-shadow:inset 3px 0 0 ${acc};` : '') + `">` +
          chevron + icon +
          `<span style="${labelStyle}">${node.label != null ? node.label : ''}</span>` +
          badge + dot +
        `</div>`;

      let children = '';
      if (hasCh && exp) {
        children = node.children.map((c, ci) => this._renderNode(c, pathArr.concat(this._key(c, ci)), depth + 1, acc, q)).join('');
      }
      return row + children;
    }
  }

  GranadoTree.ICONS = ICONS;          // mapa nome -> glyph (lista de disponíveis)
  customElements.define('granado-tree', GranadoTree);
  window.GranadoTree = GranadoTree;
}
