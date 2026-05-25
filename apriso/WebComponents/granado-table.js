/* ============================================================
   <granado-table>
   Tabela com card embutido. Card no mesmo formato visual do
   <granado-simple-card> (span absoluto na esquerda como faixa
   colorida). Estrutura fixa:

       <granado-table>      <- host
         <div>              <- card
           <span></span>    <- faixa lateral colorida (4px)
           <table>          <- tabela (largura 100%)
             ...
           </table>
           <div>            <- footer de paginacao (opcional)
         </div>
       </granado-table>

   Atributos:
     columns             - JSON array. Cada coluna:
                           { key, label, mono?, cellStyle?, width?, align?, filterable? }
                           - width: CSS valido (ex: "120px", "18%", "10ch").
                           - align: "left" | "center" | "right" (aplica em th+td).
                           - filterable: false desabilita o filtro nesta coluna
                             (default: true quando isenablefilter ativo).
                           - sortable: false desabilita a ordenacao nesta coluna
                             (default: true quando isenablesort ativo).
     rows                - JSON array. Cada linha: objeto com chaves = key das colunas.
                           Linha pode ter "_bg" para sobrepor a cor de fundo
                           padrao (ex: destacar uma linha especifica).
     color               - cor da faixa lateral (default: #1C5C31)
     onrender            - JS por celula. Variaveis: cell, col, row, rowIndex.
                           Retorne string com o HTML da celula.
     onclickevent        - JS ao clicar (single-click) na linha.
                           Variaveis: row, rowIndex, event. Opcional.
     ondoubleclickevent  - JS ao dar duplo-clique na linha.
                           Variaveis: row, rowIndex, event. Opcional.
     isenablepagination  - "true" para ativar paginacao. Default: false.
     pagesize            - linhas por pagina quando paginado. Default: 25.
     tablelayout         - "auto" (default) ou "fixed". Use "fixed" quando
                           quiser que os widths das colunas sejam estritos
                           (conteudo nao expande a celula).
     isenableexportcsv   - "false" para esconder botao "Exportar CSV". Default: true.
     isenableexportpdf   - "false" para esconder botao "Exportar PDF". Default: true.
                           PDF abre janela com a tabela e dispara dialogo de impressao
                           (usuario escolhe "Salvar como PDF").
     exportfilename      - nome base do arquivo exportado (sem extensao).
                           Default: "export_ddMMHHhhmmss" gerado no momento do clique.
     tabletitle          - titulo opcional. Renderizado acima da tabela e
                           usado como cabecalho do PDF exportado.
     rowaltcolor         - cor de fundo das linhas alternadas (zebra).
                           Default: "#FEF0CC". Use "none" ou "" para desabilitar.
                           "_bg" por linha sempre sobrepoe esta cor.
     rowheight           - padding vertical das celulas (CSS valido).
                           Default: "4px" (linhas finas). Aumente para
                           "8px", "12px", etc. para linhas mais altas.
     isenablefilter      - "false" desativa filtros por coluna. Default: true.
                           Quando ativo, exibe um icone de funil no cabecalho
                           de cada coluna; ao clicar, abre popup com input
                           de busca (filtro por substring case-insensitive).
                           Tambem exibe filtro global a direita do titulo.
                           Filtros aplicam antes da paginacao e do export.
     isenablesort        - "false" desativa ordenacao. Default: true.
                           Quando ativo, header da coluna vira clicavel e
                           cicla: nada -> ascendente -> descendente -> nada.
                           Ordenacao aplica entre filtro e paginacao.

   Exportacao:
     - Sempre exporta TODAS as linhas (ignora paginacao).
     - Usa valores brutos das celulas (ignora onrender) — botoes/badges
       nao aparecem no CSV/PDF.
     - CSV inclui BOM UTF-8 para abrir corretamente no Excel.

   Observacoes:
     - rowIndex passado aos handlers eh sempre o indice GLOBAL na
       lista original (nao o indice da pagina).
     - Quando ambos os handlers de click coexistem, o single-click
       eh adiado ~250ms para evitar disparo junto com o dblclick.

   Exemplo:

   <granado-table
     color="#1C5C31"
     isenablepagination="true"
     pagesize="50"
     columns='[
       { "key": "cod",    "label": "Codigo MP", "mono": true },
       { "key": "mat",    "label": "Material" },
       { "key": "pesado", "label": "Pesado (kg)", "mono": true },
       { "key": "status", "label": "Status" },
       { "key": "acao",   "label": "" }
     ]'
     rows='[ ... muitas linhas ... ]'
     onclickevent="console.log('select', row.cod)"
     ondoubleclickevent="alert('abrir ' + row.cod)">
   </granado-table>
   ============================================================ */

class GranadoTable extends HTMLElement {
  static get observedAttributes() {
    return ['columns', 'rows', 'color', 'onrender', 'onclickevent', 'ondoubleclickevent', 'isenablepagination', 'pagesize', 'tablelayout', 'isenableexportcsv', 'isenableexportpdf', 'exportfilename', 'tabletitle', 'rowaltcolor', 'rowheight', 'isenablefilter', 'isenablesort'];
  }

  constructor() {
    super();
    this._filters = {};
    this._openFilter = null;
    this._filterDocHandler = null;
    this._globalFilter = '';
    this._sort = { key: null, dir: null };
  }

  connectedCallback() { this.render(); }

  disconnectedCallback() { this._removeFilterDocClick(); }

  attributeChangedCallback(name) {
    if (name === 'rows' || name === 'pagesize' || name === 'isenablepagination') this._page = 0;
    this.render();
  }

  render() {
    const columns = JSON.parse(this.getAttribute('columns') || '[]');
    const allRows = JSON.parse(this.getAttribute('rows') || '[]');
    const color = this.getAttribute('color') || '#1C5C31';
    const onRender = new Function('cell', 'col', 'row', 'rowIndex', this.getAttribute('onrender') || 'return cell;');
    const onClickAttr = this.getAttribute('onclickevent');
    const onDblClickAttr = this.getAttribute('ondoubleclickevent');
    const hasClick = !!onClickAttr;
    const hasDblClick = !!onDblClickAttr;
    const interactive = hasClick || hasDblClick;

    const isFilterEnabled = this.getAttribute('isenablefilter') !== 'false';
    const isSortEnabled = this.getAttribute('isenablesort') !== 'false';
    const filteredRows = isFilterEnabled ? this._applyFilters(allRows, columns) : allRows;
    const sortedRows = isSortEnabled ? this._applySort(filteredRows) : filteredRows;

    const isPaginated = this.getAttribute('isenablepagination') === 'true';
    const pageSize = Math.max(1, parseInt(this.getAttribute('pagesize') || '25', 10));
    const totalPages = isPaginated ? Math.max(1, Math.ceil(sortedRows.length / pageSize)) : 1;
    let currentPage = this._page || 0;
    if (currentPage >= totalPages) currentPage = totalPages - 1;
    if (currentPage < 0) currentPage = 0;
    this._page = currentPage;

    const pageStart = isPaginated ? currentPage * pageSize : 0;
    const pageRows = isPaginated ? sortedRows.slice(pageStart, pageStart + pageSize) : sortedRows;

    const rowHeight = this.getAttribute('rowheight') || '4px';
    const TH_BASE = 'font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:#8A9E8E;padding:7px 12px;border-bottom:1px solid #E5DDC8;background:#F4EED9';
    const TD_BASE = `padding:${rowHeight} 12px;vertical-align:middle;border-bottom:1px solid #E5DDC8`;
    const MONO = ";font-family:Arial,'DejaVu Sans',Helvetica,sans-serif";

    const colgroup = columns.some(c => c.width)
      ? `<colgroup>${columns.map(c => `<col${c.width ? ` style="width:${c.width}"` : ''}>`).join('')}</colgroup>`
      : '';

    const headers = columns.map(col => {
      const align = col.align || 'left';
      const style = `${TH_BASE};text-align:${align}`;
      const showFilter = isFilterEnabled && col.filterable !== false;
      const showSort = isSortEnabled && col.sortable !== false;
      const isFilterActive = !!(this._filters[col.key] && this._filters[col.key].trim());
      const filterIcon = showFilter ? this._filterIconHtml(col.key, isFilterActive, color) : '';
      const sortDir = (this._sort.key === col.key) ? this._sort.dir : null;
      const sortIcon = showSort ? this._sortIconHtml(sortDir, color) : '';
      const labelHtml = col.label || '';
      const labelPart = showSort
        ? `<span data-sort-key="${col.key}" style="cursor:pointer;display:inline-flex;align-items:center;gap:4px;user-select:none">${labelHtml}${sortIcon}</span>`
        : `<span>${labelHtml}</span>`;
      return `<th style="${style}"><span style="display:inline-flex;align-items:center;gap:6px;vertical-align:middle">${labelPart}${filterIcon}</span></th>`;
    }).join('');

    const rowAltAttr = this.getAttribute('rowaltcolor');
    const rowAltColor = (rowAltAttr === 'none' || rowAltAttr === '') ? '' : (rowAltAttr || '#FEF0CC');

    const body = pageRows.map((row, i) => {
      const globalIdx = pageStart + i;
      const tds = columns.map(col => {
        const value = row[col.key];
        const html = onRender(value, col, row, globalIdx);
        const align = col.align ? `;text-align:${col.align}` : '';
        const overflow = col.width ? ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap' : '';
        const style = TD_BASE + align + (col.mono ? MONO : '') + overflow + (col.cellStyle ? ';' + col.cellStyle : '');
        return `<td style="${style}">${html}</td>`;
      }).join('');
      const bgColor = row._bg || (rowAltColor && i % 2 === 1 ? rowAltColor : '');
      const trBg = bgColor ? `;background:${bgColor}` : '';
      const trCursor = interactive ? 'cursor:pointer' : '';
      const hoverIn = `this.style.background='#ECE3C2'`;
      const hoverOut = `this.style.background=this.dataset.bg||''`;
      return `<tr style="${trCursor}${trBg}" data-row="${globalIdx}" data-bg="${bgColor}" onmouseover="${hoverIn}" onmouseout="${hoverOut}">${tds}</tr>`;
    }).join('');

    const tableLayout = this.getAttribute('tablelayout') === 'fixed' ? 'fixed' : 'auto';

    const isCsv = this.getAttribute('isenableexportcsv') !== 'false';
    const isPdf = this.getAttribute('isenableexportpdf') !== 'false';
    const hasExports = isCsv || isPdf;

    const tableTitleAttr = this.getAttribute('tabletitle');
    const headerHtml = (tableTitleAttr || isFilterEnabled) ? `
                <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 14px">
                  ${tableTitleAttr
        ? `<h2 style="margin:0;font-size:14px;font-weight:700;letter-spacing:.04em;color:${color};font-family:inherit">${tableTitleAttr}</h2>`
        : '<div></div>'}
                  ${isFilterEnabled ? this._renderGlobalFilter() : ''}
                </div>` : '';

    const showFooter = isPaginated || hasExports;
    const footer = showFooter ? this._renderFooter({
      isPaginated, isCsv, isPdf,
      currentPage, totalPages,
      totalRows: sortedRows.length,
      pageStart,
      pageRowCount: pageRows.length,
      color,
    }) : '';

    const filterPopup = this._openFilter ? this._renderFilterPopup() : '';

    this.innerHTML = `
            <div style="
                display: block;
                position: relative;
                background: #FDFAF1;
                border: 1px solid #E5DDC8;
                border-radius: 8px;
                padding: 18px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.06);
                font-family: 'Poppins', 'DejaVu Sans', Arial, sans-serif;
            ">
                <span style="
                    position: absolute;
                    top: 0; left: 0;
                    width: 4px; height: 100%;
                    background: ${color};
                    border-radius: 8px 0 0 8px;
                "></span>

                ${headerHtml}
                <div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
                    <table style="width:100%;min-width:max-content;border-collapse:collapse;font-size:11px;table-layout:${tableLayout}">
                        ${colgroup}
                        <thead><tr>${headers}</tr></thead>
                        <tbody>${body}</tbody>
                    </table>
                </div>
                ${footer}
                ${filterPopup}
            </div>
        `;

    if (hasExports) this._wireExports(sortedRows, columns, color);
    if (isPaginated) this._wireFooter(totalPages);
    if (interactive) this._wireRowEvents(sortedRows, pageStart, hasClick, hasDblClick, onClickAttr, onDblClickAttr);
    if (isFilterEnabled) {
      this._wireFilterIcons();
      this._wireGlobalFilter();
    }
    if (isSortEnabled) this._wireSortHeaders();
    if (this._openFilter) this._wireFilterPopup();
  }

  _renderExportButtons(isCsv, isPdf, color) {
    const iconBase = `width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="display:block"`;
    const fileShape = `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`;
    const label = (text) => `<text x="12" y="19" text-anchor="middle" font-size="6.5" font-weight="800" stroke="none" fill="currentColor" font-family="'Poppins',Arial,sans-serif">${text}</text>`;
    const ICON_CSV = `<svg ${iconBase}>${fileShape}${label('CSV')}</svg>`;
    const ICON_PDF = `<svg ${iconBase}>${fileShape}${label('PDF')}</svg>`;

    const btn = (icon, action, title) => `
      <button data-export-action="${action}" title="${title}" aria-label="${title}" style="
        width:30px;
        height:30px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding:0;
        border:1px solid #D6CDA4;
        background:#FDFAF1;
        color:${color};
        border-radius:4px;
        cursor:pointer;
        font-family:inherit;
      ">${icon}</button>
    `;
    return `${isCsv ? btn(ICON_CSV, 'csv', 'Exportar CSV') : ''}${isPdf ? btn(ICON_PDF, 'pdf', 'Exportar PDF') : ''}`;
  }

  _wireExports(allRows, columns, color) {
    this.querySelectorAll('[data-export-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-export-action');
        const filename = this._buildFilename();
        if (action === 'csv') this._exportCsv(allRows, columns, filename);
        if (action === 'pdf') this._exportPdf(allRows, columns, filename, color);
      });
    });
  }

  _buildFilename() {
    const custom = this.getAttribute('exportfilename');
    if (custom) return custom;
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    const dd = pad(d.getDate());
    const MM = pad(d.getMonth() + 1);
    const HH = pad(d.getHours());
    const hh = pad(((d.getHours() + 11) % 12) + 1);
    const mm = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    return `export_${dd}${MM}${HH}${hh}${mm}${ss}`;
  }

  _exportCsv(rows, columns, filename) {
    const escape = v => {
      const s = v == null ? '' : String(v);
      return /["\n\r,;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    const headerLine = columns.map(c => escape(c.label || c.key)).join(',');
    const dataLines = rows.map(row => columns.map(c => escape(row[c.key])).join(','));
    const csv = [headerLine, ...dataLines].join('\r\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    this._download(blob, filename + '.csv');
  }

  _download(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  _exportPdf(rows, columns, filename, color) {
    const escapeHtml = s => String(s == null ? '' : s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    const heading = this.getAttribute('tabletitle') || filename;
    const rowAltAttr = this.getAttribute('rowaltcolor');
    const rowAltColor = (rowAltAttr === 'none' || rowAltAttr === '') ? '' : (rowAltAttr || '#FEF0CC');

    const colgroup = columns.some(c => c.width)
      ? `<colgroup>${columns.map(c => `<col${c.width ? ` style="width:${c.width}"` : ''}>`).join('')}</colgroup>`
      : '';

    const rowHeight = this.getAttribute('rowheight') || '4px';
    const TH = 'font-size:10px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:#5A6B5E;padding:8px 10px;border-bottom:1px solid #E5DDC8;background:#F4EED9';
    const TD = `padding:${rowHeight} 10px;vertical-align:middle;border-bottom:1px solid #EEE6CF;font-size:11px`;

    const headers = columns.map(c => {
      const align = c.align || 'left';
      return `<th style="${TH};text-align:${align}">${escapeHtml(c.label || '')}</th>`;
    }).join('');

    const body = rows.map((row, i) => {
      const bgColor = row._bg || (rowAltColor && i % 2 === 1 ? rowAltColor : '');
      const trBg = bgColor ? ` style="background:${bgColor}"` : '';
      const tds = columns.map(c => {
        const align = c.align ? `;text-align:${c.align}` : '';
        const mono = c.mono ? ";font-family:Arial,'DejaVu Sans',Helvetica,sans-serif" : '';
        return `<td style="${TD}${align}${mono}">${escapeHtml(row[c.key])}</td>`;
      }).join('');
      return `<tr${trBg}>${tds}</tr>`;
    }).join('');

    const html = `<!doctype html>
<html lang="pt-BR"><head>
<meta charset="UTF-8">
<title>${escapeHtml(filename)}</title>
<style>
  @page { margin: 14mm; size: A4; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: 'Poppins', 'DejaVu Sans', Arial, sans-serif; margin: 0; color: #2A2A2A; }
  h1 { font-size: 14px; color: ${color}; margin: 0 0 10px; letter-spacing: .04em; }
  table { width: 100%; border-collapse: collapse; }
  thead { display: table-header-group; }
  tfoot { display: table-footer-group; }
  tr { page-break-inside: avoid; }
</style>
</head><body>
<h1>${escapeHtml(heading)}</h1>
<table>
  ${colgroup}
  <thead><tr>${headers}</tr></thead>
  <tbody>${body}</tbody>
</table>
<script>
  window.addEventListener('load', function () { setTimeout(function () { window.focus(); window.print(); }, 150); });
</` + `script>
</body></html>`;

    const w = window.open('', '_blank');
    if (!w) { alert('Permita pop-ups para exportar PDF.'); return; }
    w.document.open();
    w.document.write(html);
    w.document.close();
  }

  _renderFooter({ isPaginated, isCsv, isPdf, currentPage, totalPages, totalRows, pageStart, pageRowCount, color }) {
    const exportsHtml = (isCsv || isPdf) ? this._renderExportButtons(isCsv, isPdf, color) : '';

    let infoHtml = '';
    if (isPaginated) {
      const from = totalRows === 0 ? 0 : pageStart + 1;
      const to = pageStart + pageRowCount;
      infoHtml = `<span>${from}–${to} de ${totalRows}</span>`;
    } else if (totalRows > 0) {
      infoHtml = `<span>${totalRows} linha${totalRows === 1 ? '' : 's'}</span>`;
    }

    let pagerHtml = '';
    if (isPaginated) {
      const isFirst = currentPage === 0;
      const isLast = currentPage >= totalPages - 1;
      const btn = (label, action, disabled) => `
        <button data-page-action="${action}" ${disabled ? 'disabled' : ''} style="
          font-size:11px;
          font-weight:700;
          padding:5px 10px;
          height:auto;
          min-width:32px;
          border:1px solid #D6CDA4;
          background:${disabled ? '#F4EED9' : '#FDFAF1'};
          color:${disabled ? '#B5AB85' : color};
          border-radius:4px;
          cursor:${disabled ? 'default' : 'pointer'};
          font-family:inherit;
        ">${label}</button>
      `;
      pagerHtml = `
        <div style="display:flex;align-items:center;gap:6px">
          ${btn('&laquo;', 'first', isFirst)}
          ${btn('&lsaquo;', 'prev', isFirst)}
          <span style="padding:0 8px;font-weight:700;color:${color}">
            Pagina ${currentPage + 1} de ${totalPages}
          </span>
          ${btn('&rsaquo;', 'next', isLast)}
          ${btn('&raquo;', 'last', isLast)}
        </div>
      `;
    }

    return `
      <div style="
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:12px;
        margin-top:14px;
        padding-top:12px;
        border-top:1px solid #E5DDC8;
        font-size:11px;
        color:#5A6B5E;
      ">
        <div style="display:flex;align-items:center;gap:8px">
          ${exportsHtml}
          ${infoHtml}
        </div>
        ${pagerHtml}
      </div>
    `;
  }

  _wireFooter(totalPages) {
    this.querySelectorAll('[data-page-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        const action = btn.getAttribute('data-page-action');
        if (action === 'first') this._page = 0;
        else if (action === 'prev') this._page = Math.max(0, this._page - 1);
        else if (action === 'next') this._page = Math.min(totalPages - 1, this._page + 1);
        else if (action === 'last') this._page = totalPages - 1;
        this.render();
      });
    });
  }

  _wireRowEvents(allRows, pageStart, hasClick, hasDblClick, onClickAttr, onDblClickAttr) {
    const onClick = hasClick ? new Function('row', 'rowIndex', 'event', onClickAttr) : null;
    const onDblClick = hasDblClick ? new Function('row', 'rowIndex', 'event', onDblClickAttr) : null;

    this.querySelectorAll('tbody tr').forEach((tr, i) => {
      const globalIdx = pageStart + i;
      let clickTimer = null;

      if (onClick) {
        tr.addEventListener('click', e => {
          if (!hasDblClick) {
            onClick(allRows[globalIdx], globalIdx, e);
            return;
          }
          if (clickTimer) clearTimeout(clickTimer);
          clickTimer = setTimeout(() => {
            clickTimer = null;
            onClick(allRows[globalIdx], globalIdx, e);
          }, 250);
        });
      }

      if (onDblClick) {
        tr.addEventListener('dblclick', e => {
          if (clickTimer) { clearTimeout(clickTimer); clickTimer = null; }
          onDblClick(allRows[globalIdx], globalIdx, e);
        });
      }
    });
  }

  // ------------------------------------------------------------
  // Ordenacao
  // ------------------------------------------------------------

  _applySort(rows) {
    if (!this._sort.key || !this._sort.dir) return rows;
    const key = this._sort.key;
    const sign = this._sort.dir === 'asc' ? 1 : -1;
    const parseNum = (v) => {
      if (v == null || v === '') return null;
      const direct = Number(v);
      if (!isNaN(direct)) return direct;
      const ptBr = String(v).replace(/\./g, '').replace(',', '.');
      const n = Number(ptBr);
      return isNaN(n) ? null : n;
    };
    return [...rows].sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      const aEmpty = av == null || av === '';
      const bEmpty = bv == null || bv === '';
      if (aEmpty && bEmpty) return 0;
      if (aEmpty) return 1;
      if (bEmpty) return -1;
      const an = parseNum(av);
      const bn = parseNum(bv);
      if (an != null && bn != null) return (an - bn) * sign;
      return String(av).localeCompare(String(bv), 'pt-BR', { numeric: true }) * sign;
    });
  }

  _sortIconHtml(dir, color) {
    const muted = '#B5AB85';
    const upColor = dir === 'asc' ? color : muted;
    const downColor = dir === 'desc' ? color : muted;
    return `<svg width="8" height="11" viewBox="0 0 8 11" style="display:block;flex-shrink:0">
      <polyline points="1.5,3.5 4,1 6.5,3.5" fill="none" stroke="${upColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="1.5,7.5 4,10 6.5,7.5" fill="none" stroke="${downColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  _wireSortHeaders() {
    this.querySelectorAll('[data-sort-key]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = el.getAttribute('data-sort-key');
        if (this._sort.key !== key) this._sort = { key, dir: 'asc' };
        else if (this._sort.dir === 'asc') this._sort = { key, dir: 'desc' };
        else this._sort = { key: null, dir: null };
        this._page = 0;
        this.render();
      });
    });
  }

  // ------------------------------------------------------------
  // Filtros por coluna
  // ------------------------------------------------------------

  _applyFilters(rows, columns) {
    const colFilters = Object.entries(this._filters).filter(([, v]) => v && v.trim());
    const globalSearch = (this._globalFilter || '').toLowerCase().trim();
    if (colFilters.length === 0 && !globalSearch) return rows;

    return rows.filter(row => {
      for (const [key, val] of colFilters) {
        const cell = row[key];
        const search = val.toLowerCase().trim();
        if (!String(cell == null ? '' : cell).toLowerCase().includes(search)) return false;
      }
      if (globalSearch) {
        const matches = columns.some(col => {
          if (col.filterable === false) return false;
          const cell = row[col.key];
          return String(cell == null ? '' : cell).toLowerCase().includes(globalSearch);
        });
        if (!matches) return false;
      }
      return true;
    });
  }

  _renderGlobalFilter() {
    const value = this._globalFilter || '';
    const escVal = String(value).replace(/"/g, '&quot;');
    return `
      <div style="position:relative;display:flex;align-items:center">
        <span style="position:absolute;left:9px;top:50%;transform:translateY(-50%);color:#8A9E8E;display:flex;line-height:0;pointer-events:none">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
        <input data-global-filter type="text" value="${escVal}" placeholder="Filtrar todas as colunas..." style="
          font-size:11px;
          padding:6px 10px 6px 30px;
          border:1px solid #E5DDC8;
          border-radius:6px;
          background:#FDFAF1;
          font-family:inherit;
          color:#103E20;
          outline:none;
          min-width:240px;
          box-sizing:border-box;
        ">
      </div>
    `;
  }

  _wireGlobalFilter() {
    const input = this.querySelector('[data-global-filter]');
    if (!input) return;
    input.addEventListener('input', () => {
      this._globalFilter = input.value;
      this._page = 0;
      this.render();
      const after = this.querySelector('[data-global-filter]');
      if (after) {
        after.focus();
        const len = after.value.length;
        try { after.setSelectionRange(len, len); } catch (_) { /* ignore */ }
      }
    });
  }

  _filterIconHtml(key, isActive, color) {
    const c = isActive ? color : '#8A9E8E';
    return `<button data-filter-icon="${key}" type="button" title="Filtrar" style="
      background:transparent;
      border:none;
      cursor:pointer;
      padding:1px 2px;
      height:auto;
      color:${c};
      display:inline-flex;
      align-items:center;
      line-height:0;
      border-radius:3px;
    "><svg width="11" height="11" viewBox="0 0 24 24" fill="${isActive ? c : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg></button>`;
  }

  _renderFilterPopup() {
    const key = this._openFilter;
    const value = this._filters[key] || '';
    const escVal = String(value).replace(/"/g, '&quot;');
    return `<div data-filter-popup style="
      position:absolute;
      z-index:1000;
      background:#FDFAF1;
      border:1px solid #E5DDC8;
      border-radius:6px;
      box-shadow:0 6px 20px rgba(0,0,0,0.14);
      padding:8px;
      display:flex;
      gap:6px;
      align-items:center;
      min-width:220px;
    ">
      <input data-filter-input type="text" value="${escVal}" placeholder="Filtrar..." style="
        flex:1;
        box-sizing:border-box;
        font-size:11px;
        padding:5px 8px;
        border:1px solid #E5DDC8;
        border-radius:4px;
        background:#fff;
        font-family:inherit;
        color:#103E20;
        outline:none;
      ">
      <button data-filter-clear type="button" style="
        font-size:10px;
        font-weight:700;
        padding:5px 8px;
        height:auto;
        border:1px solid #D6CDA4;
        background:#FDFAF1;
        color:#5A6B5E;
        border-radius:4px;
        cursor:pointer;
        font-family:inherit;
      ">Limpar</button>
    </div>`;
  }

  _wireFilterIcons() {
    this.querySelectorAll('[data-filter-icon]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = btn.getAttribute('data-filter-icon');
        if (this._openFilter === key) {
          this._openFilter = null;
          this._removeFilterDocClick();
        } else {
          this._openFilter = key;
          this._addFilterDocClick();
        }
        this.render();
      });
    });
  }

  _wireFilterPopup() {
    const wrapper = this.querySelector(':scope > div');
    const icon = this.querySelector(`[data-filter-icon="${this._openFilter}"]`);
    const popup = this.querySelector('[data-filter-popup]');
    if (wrapper && icon && popup) {
      const wRect = wrapper.getBoundingClientRect();
      const iRect = icon.getBoundingClientRect();
      const left = iRect.left - wRect.left;
      const top = iRect.bottom - wRect.top + 4;
      popup.style.left = Math.max(8, left) + 'px';
      popup.style.top = top + 'px';
    }

    const input = this.querySelector('[data-filter-input]');
    if (input) {
      input.addEventListener('click', e => e.stopPropagation());
      input.addEventListener('input', () => {
        this._filters[this._openFilter] = input.value;
        this._page = 0;
        this.render();
        const after = this.querySelector('[data-filter-input]');
        if (after) {
          after.focus();
          const len = after.value.length;
          try { after.setSelectionRange(len, len); } catch (_) { /* ignore */ }
        }
      });
      setTimeout(() => input.focus(), 0);
    }

    const clearBtn = this.querySelector('[data-filter-clear]');
    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        delete this._filters[this._openFilter];
        this._openFilter = null;
        this._page = 0;
        this._removeFilterDocClick();
        this.render();
      });
    }
  }

  _addFilterDocClick() {
    if (this._filterDocHandler) return;
    this._filterDocHandler = (e) => {
      // Fecha quando o click for fora do popup. O proprio icone tem
      // stopPropagation no handler de toggle, entao nao chega aqui.
      const popup = this.querySelector('[data-filter-popup]');
      if (popup && popup.contains(e.target)) return;
      this._openFilter = null;
      this._removeFilterDocClick();
      this.render();
    };
    setTimeout(() => document.addEventListener('click', this._filterDocHandler), 0);
  }

  _removeFilterDocClick() {
    if (this._filterDocHandler) {
      document.removeEventListener('click', this._filterDocHandler);
      this._filterDocHandler = null;
    }
  }
}

customElements.define('granado-table', GranadoTable);
