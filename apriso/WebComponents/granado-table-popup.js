/* ============================================================
   <granado-table-popup>
   Popup (modal) GENÉRICO com título, subtítulo e uma TABELA.
   A tabela é um <granado-table> embutido — portanto os parâmetros
   de tabela (columns, rows e todas as opções) são EXATAMENTE os
   mesmos do <granado-table>.

   ── Atributos / propriedades
     title        - título principal do popup (destaque)
     subtitle     - subtítulo (linha abaixo do título, discreta)
     columns      - JSON array de colunas (igual ao granado-table).
                    Em JS use a propriedade .columns.
     rows         - JSON array de linhas (igual ao granado-table).
                    Em JS use a propriedade .rows.
     confirm-text - texto do botão de fechar (default "Fechar")
     open         - "false" inicia oculto. Use open()/close().
     close-on-backdrop - "true" fecha ao clicar fora (default: NÃO fecha)

     Opções da tabela (repassadas ao <granado-table> se informadas):
       color, onrender, onclickevent, ondoubleclickevent,
       isenablepagination, pagesize, tablelayout, isenableexportcsv,
       isenableexportpdf, exportfilename, tabletitle, rowaltcolor,
       rowheight, isenablefilter, isenablesort
     (veja a doc do <granado-table> para o significado de cada uma.)

   ── API estática
     GranadoTablePopup.show({
       title, subtitle, columns, rows, confirmText, closeOnBackdrop,
       // opções da tabela (camelCase):
       color, onRender, onClickEvent, onDoubleClickEvent,
       isEnablePagination, pageSize, tableLayout, isEnableExportCsv,
       isEnableExportPdf, exportFilename, tableTitle, rowAltColor,
       rowHeight, isEnableFilter, isEnableSort
     })

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-table.js"></script>
   <script src="[AprisoScripts]/WebComponents/granado-table-popup.js"></script>
   <script>
     GranadoTablePopup.show({
       title: 'Itens da Ordem OP-2026-0416',
       subtitle: 'Loção Rosa 200ml · Box 3',
       columns: [
         { key: 'cod', label: 'Código', mono: true },
         { key: 'mp',  label: 'Matéria-Prima' },
         { key: 'kg',  label: 'Pesado (kg)', mono: true, align: 'right' }
       ],
       rows: [
         { cod: 'MP-001', mp: 'Água', kg: '120,5' },
         { cod: 'MP-002', mp: 'Álcool', kg: '18,0' }
       ]
     });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-table-popup')) {
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const SURFACE = '#FDFAF1';
  const BORDER = '#D6CDA4';
  const VERDE = '#1F7A3D';
  const VERDE_ESC = '#0F3319';
  const OURO = '#9A7520';
  const TEXT2 = '#555555';
  const TEXT3 = '#8A8575';
  const FONT = "'Poppins',sans-serif";
  const SCROLL_THUMB = 'rgba(191,177,114,.55)';   // polegar do scroll (ouro discreto)

  // Atributos repassados 1:1 ao <granado-table> (exceto columns/rows,
  // tratados à parte pelos getters .columns / .rows).
  const TABLE_ATTRS = ['color', 'onrender', 'onclickevent', 'ondoubleclickevent', 'isenablepagination', 'pagesize', 'tablelayout', 'isenableexportcsv', 'isenableexportpdf', 'exportfilename', 'tabletitle', 'rowaltcolor', 'rowheight', 'isenablefilter', 'isenablesort'];

  // Mapa das opções camelCase (show) -> atributo kebab da tabela.
  const OPT_TO_ATTR = {
    color: 'color', onRender: 'onrender', onClickEvent: 'onclickevent', onDoubleClickEvent: 'ondoubleclickevent',
    isEnablePagination: 'isenablepagination', pageSize: 'pagesize', tableLayout: 'tablelayout',
    isEnableExportCsv: 'isenableexportcsv', isEnableExportPdf: 'isenableexportpdf', exportFilename: 'exportfilename',
    tableTitle: 'tabletitle', rowAltColor: 'rowaltcolor', rowHeight: 'rowheight',
    isEnableFilter: 'isenablefilter', isEnableSort: 'isenablesort'
  };

  class GranadoTablePopup extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'subtitle', 'columns', 'rows', 'confirm-text', 'close-on-backdrop', 'open'].concat(TABLE_ATTRS);
    }

    // ------------------------------------------------------------
    // API estática
    // ------------------------------------------------------------
    static show(opts) {
      opts = opts || {};
      const el = document.createElement('granado-table-popup');
      if (opts.title != null) el.setAttribute('title', String(opts.title));
      if (opts.subtitle != null) el.setAttribute('subtitle', String(opts.subtitle));
      if (opts.confirmText != null) el.setAttribute('confirm-text', String(opts.confirmText));
      if (opts.closeOnBackdrop != null) el.setAttribute('close-on-backdrop', opts.closeOnBackdrop ? 'true' : 'false');
      // opções da tabela (camelCase -> atributo)
      Object.keys(OPT_TO_ATTR).forEach((k) => { if (opts[k] != null) el.setAttribute(OPT_TO_ATTR[k], String(opts[k])); });
      el._autoRemove = true;
      document.body.appendChild(el);
      if (opts.columns != null) el.columns = opts.columns;   // mantém o array
      if (opts.rows != null) el.rows = opts.rows;
      el.open();
      return el;
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      ['columns', 'rows'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
    }
    attributeChangedCallback(name) {
      if (name === 'columns') this._colArr = null;
      if (name === 'rows') this._rowArr = null;
      if (name === 'open') this.style.display = (this.getAttribute('open') === 'false') ? 'none' : '';
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get columns() {
      if (this._colArr && Array.isArray(this._colArr)) return this._colArr;
      return this._parseArr(this.getAttribute('columns'));
    }
    set columns(v) {
      if (typeof v === 'string') { this.setAttribute('columns', v); this._colArr = null; }
      else { this._colArr = Array.isArray(v) ? v : []; }
      if (this.isConnected) this._render();
    }
    get rows() {
      if (this._rowArr && Array.isArray(this._rowArr)) return this._rowArr;
      return this._parseArr(this.getAttribute('rows'));
    }
    set rows(v) {
      if (typeof v === 'string') { this.setAttribute('rows', v); this._rowArr = null; }
      else { this._rowArr = Array.isArray(v) ? v : []; }
      if (this.isConnected) this._render();
    }

    get closeOnBackdrop() { return this.getAttribute('close-on-backdrop') === 'true'; }
    set closeOnBackdrop(v) { this.setAttribute('close-on-backdrop', v ? 'true' : 'false'); }

    open() { this.removeAttribute('open'); this.style.display = ''; if (this.isConnected) this._render(); }
    close() { this.style.display = 'none'; if (this._autoRemove) this.remove(); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _parseArr(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }

    _render() {
      const title = this.getAttribute('title') || '';
      const subtitle = this.getAttribute('subtitle') || '';
      const confirmText = this.getAttribute('confirm-text') || 'Fechar';

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:40px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${OURO};border-radius:12px;padding:22px 24px;max-width:920px;width:96%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:#1A1A1A;margin:auto">` +
            // Cabeçalho
            `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:16px">` +
              `<div style="min-width:0">` +
                (title ? `<div style="font-family:${FONT};font-size:18px;font-weight:700;color:${VERDE_ESC}">${this._esc(title)}</div>` : '') +
                (subtitle ? `<div style="font-family:${FONT};font-size:12.5px;color:${TEXT3};margin-top:2px">${this._esc(subtitle)}</div>` : '') +
              `</div>` +
              `<button type="button" data-role="x" title="Fechar" style="background:none;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font-size:13px;color:${TEXT2};line-height:1;flex-shrink:0">✕</button>` +
            `</div>` +
            // Área da tabela (rola se for grande)
            `<div data-role="table-host" style="max-height:62vh;overflow:auto;scrollbar-width:thin;scrollbar-color:${SCROLL_THUMB} transparent"></div>` +
            // Rodapé
            `<div style="display:flex;gap:10px;justify-content:flex-end;padding-top:14px;margin-top:16px;border-top:1px solid ${BORDER}">` +
              `<button type="button" data-role="confirm" style="font:700 13px/1.4 ${FONT};padding:9px 22px;border:1px solid ${VERDE};border-radius:8px;background:${VERDE};color:#fff;cursor:pointer">${this._esc(confirmText)}</button>` +
            `</div>` +
          `</div>` +
        `</div>`;

      this._mountTable();
      this._bind();
    }

    // Cria o <granado-table> embutido, repassando columns/rows e as opções.
    _mountTable() {
      const host = this.querySelector('[data-role="table-host"]');
      if (!host) return;
      const t = document.createElement('granado-table');
      // opções repassadas (atributos definidos no popup)
      TABLE_ATTRS.forEach((a) => { const v = this.getAttribute(a); if (v != null) t.setAttribute(a, v); });
      // columns/rows sempre via atributo JSON (aceita array ou string)
      t.setAttribute('columns', JSON.stringify(this.columns || []));
      t.setAttribute('rows', JSON.stringify(this.rows || []));
      host.appendChild(t);
    }

    _bind() {
      const self = this;
      const overlay = this.querySelector('[data-role="overlay"]');
      const box = this.querySelector('[data-role="box"]');
      const x = this.querySelector('[data-role="x"]');
      const confirm = this.querySelector('[data-role="confirm"]');
      if (x) x.addEventListener('click', function () { self.close(); });
      if (confirm) confirm.addEventListener('click', function () { self.close(); });
      if (overlay && box) overlay.addEventListener('mousedown', function (e) { if (e.target === overlay && self.closeOnBackdrop) self.close(); });
    }
  }

  customElements.define('granado-table-popup', GranadoTablePopup);
  window.GranadoTablePopup = GranadoTablePopup;
}
