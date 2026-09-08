/* ============================================================
   <granado-select-popup>
   Popup (modal) de SELEÇÃO COM FILTRO. No topo, um campo de busca
   (dropdown/filtro): conforme o usuário digita, os registros vão
   sendo filtrados. Os registros aparecem como CARDS no mesmo visual
   do <granado-gallery type="view-only2"> (faixa lateral na cor do
   status, ícone à esquerda, título + subtítulo/data e badge à direita).
   Rodapé com botões Confirmar / Cancelar. No Confirmar devolve o
   item selecionado.

   ── Atributos / propriedades
     title             - rótulo pequeno (uppercase) no topo do popup
     subtitle          - título principal (linha abaixo do rótulo)
     data              - array de itens (em JS use a propriedade .data).
                         Cada item (todos os campos são OPCIONAIS, só
                         "id" serve de chave):
                           { id, icon, title, subtitle, data, status,
                             statusColor, cardColor, metadata }
                           id          - identificador do item (chave)
                           icon        - SVG cru OU texto/emoji à esquerda
                           title       - título do card
                           subtitle    - subtítulo (linha abaixo)
                           data        - texto auxiliar (fonte mono)
                           status      - texto do badge (à direita)
                           statusColor - cor do badge + faixa lateral
                                         (hex/rgb/var). Default verde.
                           cardColor   - cor de fundo só deste card
                           metadata    - qualquer valor extra (volta no confirm)
     search-placeholder- placeholder do campo de busca
                         (default "Digite para filtrar...")
     confirm-text      - texto do botão confirmar (default "Confirmar")
     empty-text        - texto quando nada casa o filtro
                         (default "Nenhum registro encontrado.")
     card-height       - (opcional) altura fixa de cada card (CSS válido,
                         ex.: "58px"). Vazio = altura pelo conteúdo.
     open              - "false" inicia oculto
     close-on-backdrop - "true" fecha ao clicar fora (default: NÃO fecha)
     onConfirm         - (opcional) string JS executada ao confirmar (event, detail)

   ── Eventos (CustomEvent, bubbles)
     "confirm" -> detail { index, id, icon, title, subtitle, data,
                           status, metadata }
   (Cancelar, o X e — se habilitado — o clique fora apenas fecham, sem evento.)

   ── API estática
     GranadoSelectPopup.show({ title, subtitle, data, searchPlaceholder,
                               confirmText, emptyText, cardHeight,
                               closeOnBackdrop, onConfirm })

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-select-popup.js"></script>
   <script>
     GranadoSelectPopup.show({
       title: 'SELEÇÃO DE MATÉRIA-PRIMA',
       subtitle: 'Escolha o lote a pesar',
       searchPlaceholder: 'Filtrar por MP, lote ou etiqueta...',
       data: [
         { id: 'GLI-08', icon: '⚖️', title: 'MP-4821 · Glicerina USP',
           subtitle: 'ETQ-001 · Lote GLI-2026-08', status: 'LIVRE', statusColor: '#1C7A38' },
         { id: 'CAR-05', icon: '⏳', title: 'MP-0914 · Carbopol 940',
           subtitle: 'ETQ-003 · Lote CAR-2026-05', status: 'PENDENTE', statusColor: '#9A5A00' }
       ],
       onConfirm: function (d) { console.log(d.id, d.title, d.metadata); }
     });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-select-popup')) {
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const SURFACE = '#FDFAF1';
  const SURFACE2 = '#F4EED9';
  const BORDER = '#D6CDA4';
  const BORDER2 = '#E5DDC8';
  const VERDE = '#1F7A3D';
  const VERDE_ESC = '#0F3319';
  const VERDE_DIM = '#E4F0E8';
  const OURO = '#9A7520';
  const TITLE = '#0F3319';
  const TEXT = '#1A1A1A';
  const TEXT2 = '#555555';
  const TEXT3 = '#8A8575';
  const STATUS_DEF = '#1C5C31';
  const FONT = "'Poppins',sans-serif";
  const MONO = "'Arial',Helvetica,sans-serif";
  const SCROLL_THUMB = 'rgba(191,177,114,.55)';

  class GranadoSelectPopup extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'subtitle', 'data', 'search-placeholder', 'confirm-text', 'empty-text', 'card-height', 'close-on-backdrop', 'open'];
    }

    // ------------------------------------------------------------
    // API estática
    // ------------------------------------------------------------
    static show(opts) {
      opts = opts || {};
      const el = document.createElement('granado-select-popup');
      if (opts.title != null) el.setAttribute('title', String(opts.title));
      if (opts.subtitle != null) el.setAttribute('subtitle', String(opts.subtitle));
      if (opts.searchPlaceholder != null) el.setAttribute('search-placeholder', String(opts.searchPlaceholder));
      if (opts.confirmText != null) el.setAttribute('confirm-text', String(opts.confirmText));
      if (opts.emptyText != null) el.setAttribute('empty-text', String(opts.emptyText));
      if (opts.cardHeight != null) el.setAttribute('card-height', String(opts.cardHeight));
      if (opts.closeOnBackdrop != null) el.setAttribute('close-on-backdrop', opts.closeOnBackdrop ? 'true' : 'false');
      if (opts.onConfirm != null && typeof opts.onConfirm !== 'function') el.setAttribute('onConfirm', String(opts.onConfirm));
      el._autoRemove = true;
      if (typeof opts.onConfirm === 'function') el._onConfirmFn = opts.onConfirm;
      document.body.appendChild(el);
      if (opts.data != null) el.data = opts.data;
      el.open();
      return el;
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      // lazy-props: se atribuíram .data antes do upgrade, reaplica.
      if (Object.prototype.hasOwnProperty.call(this, 'data')) { const v = this.data; delete this.data; this.data = v; }
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
    }
    attributeChangedCallback(name) {
      if (name === 'data') this._dataArr = null;
      if (name === 'open') this.style.display = (this.getAttribute('open') === 'false') ? 'none' : '';
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
      this._selKey = null;
      if (this.isConnected) this._render();
    }

    get closeOnBackdrop() { return this.getAttribute('close-on-backdrop') === 'true'; }
    set closeOnBackdrop(v) { this.setAttribute('close-on-backdrop', v ? 'true' : 'false'); }
    get onConfirm() { return this._onConfirmFn || null; }
    set onConfirm(fn) { this._onConfirmFn = (typeof fn === 'function') ? fn : null; }
    get cardHeight() { return this.getAttribute('card-height') || ''; }
    set cardHeight(v) { this.setAttribute('card-height', String(v)); }

    open() {
      this.removeAttribute('open');
      this.style.display = '';
      this._selKey = null;
      this._q = '';
      if (this.isConnected) this._render();
      // foca a busca ao abrir (deferido para o input já existir)
      const self = this;
      setTimeout(function () { const inp = self.querySelector('[data-role="search"]'); if (inp) { try { inp.focus(); } catch (e) {} } }, 0);
    }
    close() { this.style.display = 'none'; if (this._autoRemove) this.remove(); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _parseArr(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
    _has(v) { return v != null && String(v) !== ''; }
    // chave estável do item (id se houver; senão o índice)
    _keyOf(it, i) { return this._has(it && it.id) ? ('id:' + String(it.id)) : ('idx:' + i); }
    // normaliza p/ busca: minúsculas + sem acentos
    _norm(s) {
      return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    }
    // ícone: SVG cru se parecer HTML; senão vira texto/emoji
    _iconMarkup(icon) {
      const s = String(icon == null ? '' : icon);
      return /<[a-z!/][\s\S]*>/i.test(s) ? s : `<span style="font-size:15px;line-height:1">${this._esc(s)}</span>`;
    }

    // itens que casam o filtro atual (mantém o índice original)
    _filtered() {
      const items = this.data || [];
      const q = this._norm(this._q || '');
      const out = [];
      for (let i = 0; i < items.length; i++) {
        const it = items[i] || {};
        if (!q) { out.push({ it: it, i: i }); continue; }
        const hay = this._norm([it.id, it.title, it.subtitle, it.data, it.status].filter(Boolean).join(' '));
        if (hay.indexOf(q) !== -1) out.push({ it: it, i: i });
      }
      return out;
    }

    _render() {
      const title = this.getAttribute('title') || '';
      const subtitle = this.getAttribute('subtitle') || '';
      const placeholder = this.getAttribute('search-placeholder') || 'Digite para filtrar...';
      const confirmText = this.getAttribute('confirm-text') || 'Confirmar';
      if (this._q == null) this._q = '';

      // Ícone de lupa (SVG) para o campo de busca.
      const lupa = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="' + TEXT3 + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:40px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${OURO};border-radius:12px;padding:20px 22px;max-width:520px;width:96%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:${TEXT};margin:auto">` +
            // Cabeçalho
            `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:14px">` +
              `<div style="min-width:0">` +
                (title ? `<div style="font-size:9px;font-weight:900;letter-spacing:.2em;text-transform:uppercase;color:${OURO}">${this._esc(title)}</div>` : '') +
                (subtitle ? `<div style="font-family:${FONT};font-size:18px;font-weight:700;color:${VERDE_ESC};margin-top:2px">${this._esc(subtitle)}</div>` : '') +
              `</div>` +
              `<button type="button" data-role="x" title="Cancelar" style="height:auto !important;min-height:0 !important;background:none;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font-size:13px;color:${TEXT2};line-height:1;flex-shrink:0">✕</button>` +
            `</div>` +
            // Campo de busca (dropdown/filtro)
            `<div style="display:flex;align-items:center;gap:8px;border:1px solid ${BORDER};border-radius:8px;background:#fff;padding:9px 12px;margin-bottom:6px">` +
              lupa +
              `<input data-role="search" type="text" value="${this._esc(this._q)}" placeholder="${this._esc(placeholder)}" autocomplete="off" ` +
                `style="flex:1 1 auto;min-width:0;border:0;outline:none;background:transparent;font:13px/1.4 ${FONT};color:${TEXT};padding:0" />` +
              `<button type="button" data-role="clear" title="Limpar" style="height:auto !important;min-height:0 !important;display:none;background:none;border:0;cursor:pointer;color:${TEXT3};font-size:15px;line-height:1;padding:0 2px">✕</button>` +
            `</div>` +
            // Contador de resultados
            `<div data-role="count" style="font:11px/1.4 ${FONT};color:${TEXT3};margin-bottom:8px">&nbsp;</div>` +
            // Lista de cards (view-only2) — ALTURA FIXA: o popup não muda de
            // tamanho com o filtro; só varia a quantidade de cards (com scroll).
            `<div data-role="list" style="height:44vh;overflow-y:auto;padding:2px 4px 2px 2px;scrollbar-width:thin;scrollbar-color:${SCROLL_THUMB} transparent"></div>` +
            // Botões
            `<div style="display:flex;gap:10px;justify-content:flex-end;padding-top:14px;margin-top:8px;border-top:1px solid ${BORDER}">` +
              `<button type="button" data-role="cancel" style="font:600 13px/1.4 ${FONT} !important;letter-spacing:normal !important;box-sizing:border-box !important;height:auto !important;min-height:0 !important;padding:9px 18px !important;border:1px solid ${BORDER};border-radius:8px;background:transparent;color:${TEXT2};cursor:pointer">Cancelar</button>` +
              `<button type="button" data-role="confirm" disabled style="font:700 13px/1.4 ${FONT} !important;letter-spacing:normal !important;box-sizing:border-box !important;height:auto !important;min-height:0 !important;padding:9px 22px !important;border:1px solid ${VERDE};border-radius:8px;background:${VERDE};color:#fff;cursor:not-allowed;opacity:.5">${this._esc(confirmText)}</button>` +
            `</div>` +
          `</div>` +
        `</div>`;

      this._renderList();
      this._bindStatic();
    }

    // Renderiza só a lista de cards (chamado a cada tecla) — preserva o input.
    _renderList() {
      const list = this.querySelector('[data-role="list"]');
      if (!list) return;
      const emptyText = this.getAttribute('empty-text') || 'Nenhum registro encontrado.';
      const rows = this._filtered();
      const total = (this.data || []).length;

      if (!rows.length) {
        list.innerHTML =
          `<div style="border:1px dashed ${BORDER};border-radius:10px;padding:26px 16px;text-align:center;color:${TEXT3};font:12px/1.5 ${FONT}">${this._esc(emptyText)}</div>`;
      } else {
        list.innerHTML = rows.map((r) => this._card(r.it || {}, r.i)).join('');
      }

      // Contador
      const count = this.querySelector('[data-role="count"]');
      if (count) {
        count.innerHTML = this._q
          ? `${rows.length} de ${total} ${total === 1 ? 'registro' : 'registros'}`
          : `${total} ${total === 1 ? 'registro' : 'registros'}`;
      }

      // Botão limpar visível só com texto
      const clr = this.querySelector('[data-role="clear"]');
      if (clr) clr.style.display = this._q ? 'inline-block' : 'none';

      this._bindCards();
      this._syncConfirm();
    }

    // Mini-card no estilo <granado-gallery type="view-only2">
    _card(it, i) {
      const accent = this._has(it.statusColor) ? this._esc(it.statusColor) : STATUS_DEF;
      const cardBg = this._has(it.cardColor) ? this._esc(it.cardColor) : SURFACE2;
      const ch = this._has(this.cardHeight) ? `height:${this._esc(this.cardHeight)};` : '';
      const key = this._keyOf(it, i);
      const selected = (this._selKey != null && key === this._selKey);

      const ic = this._has(it.icon)
        ? `<span data-role="icon" aria-hidden="true" style="flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;line-height:0;font-size:15px;color:${accent}">${this._iconMarkup(it.icon)}</span>`
        : '';
      const t = this._has(it.title) ? `<div style="font:800 12px/1.3 ${FONT};color:${TITLE};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${this._esc(it.title)}</div>` : '';
      const s = this._has(it.subtitle) ? `<div style="font:11px/1.35 ${FONT};color:${TEXT2};margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${this._esc(it.subtitle)}</div>` : '';
      const d = this._has(it.data) ? `<div style="font:10px/1.35 ${MONO};color:${TEXT3};margin-top:2px">${this._esc(it.data)}</div>` : '';
      const badge = this._has(it.status)
        ? `<span style="flex-shrink:0;display:inline-block;padding:3px 9px;border-radius:9px;font:800 10px/1.4 ${FONT};color:${accent};border:1px solid ${accent};background:transparent;white-space:nowrap">${this._esc(it.status)}</span>`
        : '';

      // Seleção: anel (outline) verde + fundo esverdeado, sem deslocar layout.
      const selStyle = selected
        ? `outline:2px solid ${VERDE};outline-offset:-1px;background:${VERDE_DIM};`
        : `background:${cardBg};`;

      return `<div data-role="sel-card" data-key="${this._esc(key)}" data-idx="${i}" ` +
          `style="display:flex;align-items:center;gap:10px;padding:9px 12px;border:1px solid ${BORDER2};border-left:3px solid ${accent};border-radius:8px;${selStyle}${ch}margin-bottom:8px;cursor:pointer;box-sizing:border-box;transition:outline .12s,background .12s">` +
          ic + `<div style="flex:1 1 auto;min-width:0">${t}${s}${d}</div>` + badge +
        `</div>`;
    }

    _selectByKey(key) {
      this._selKey = key;
      // Re-realça sem re-renderizar a lista inteira (mantém scroll/estado).
      this.querySelectorAll('[data-role="sel-card"]').forEach((el) => {
        const on = el.getAttribute('data-key') === key;
        if (on) { el.style.outline = `2px solid ${VERDE}`; el.style.outlineOffset = '-1px'; el.style.background = VERDE_DIM; }
        else {
          el.style.outline = 'none';
          const idx = parseInt(el.getAttribute('data-idx'), 10) || 0;
          const it = (this.data || [])[idx] || {};
          el.style.background = this._has(it.cardColor) ? this._esc(it.cardColor) : SURFACE2;
        }
      });
      this._syncConfirm();
    }

    _syncConfirm() {
      const btn = this.querySelector('[data-role="confirm"]');
      if (!btn) return;
      const on = this._selKey != null;
      btn.disabled = !on;
      btn.style.opacity = on ? '1' : '.5';
      btn.style.cursor = on ? 'pointer' : 'not-allowed';
    }

    // Binds que existem uma vez por render (busca, botões, overlay).
    _bindStatic() {
      const self = this;
      const overlay = this.querySelector('[data-role="overlay"]');
      const x = this.querySelector('[data-role="x"]');
      const cancel = this.querySelector('[data-role="cancel"]');
      const confirm = this.querySelector('[data-role="confirm"]');
      const search = this.querySelector('[data-role="search"]');
      const clear = this.querySelector('[data-role="clear"]');

      if (x) x.addEventListener('click', function () { self.close(); });
      if (cancel) cancel.addEventListener('click', function () { self.close(); });
      if (overlay) overlay.addEventListener('mousedown', function (e) { if (e.target === overlay && self.closeOnBackdrop) self.close(); });
      if (confirm) confirm.addEventListener('click', function (ev) { self._confirm(ev); });

      if (search) {
        search.addEventListener('input', function () { self._q = search.value || ''; self._renderList(); });
        // Enter confirma se houver seleção; Esc fecha.
        search.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') { if (self._selKey != null) self._confirm(e); }
          else if (e.key === 'Escape') { self.close(); }
        });
      }
      if (clear) clear.addEventListener('click', function () {
        self._q = '';
        if (search) { search.value = ''; try { search.focus(); } catch (e) {} }
        self._renderList();
      });
    }

    // Binds dos cards (refeitos a cada _renderList).
    _bindCards() {
      const self = this;
      this.querySelectorAll('[data-role="sel-card"]').forEach(function (el) {
        el.addEventListener('click', function () { self._selectByKey(el.getAttribute('data-key')); });
        el.addEventListener('dblclick', function (ev) { self._selectByKey(el.getAttribute('data-key')); self._confirm(ev); });
      });
    }

    _confirm(ev) {
      if (this._selKey == null) return;
      const items = this.data || [];
      let item = null, index = -1;
      for (let i = 0; i < items.length; i++) {
        if (this._keyOf(items[i] || {}, i) === this._selKey) { item = items[i] || {}; index = i; break; }
      }
      if (!item) return;

      const detail = {
        index: index,
        id: item.id,
        icon: item.icon,
        title: item.title,
        subtitle: item.subtitle,
        data: item.data,
        status: item.status,
        metadata: item.metadata
      };

      this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true, detail: detail }));
      if (typeof this._onConfirmFn === 'function') this._onConfirmFn(detail, ev);
      const h = this.getAttribute('onconfirm');
      if (h) new Function('event', 'detail', h).call(this, ev, detail);
      this.close();
    }
  }

  customElements.define('granado-select-popup', GranadoSelectPopup);
  window.GranadoSelectPopup = GranadoSelectPopup;
}
