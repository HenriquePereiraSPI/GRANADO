/* ============================================================
   <granado-button-save-page>
   Botão que salva o conteúdo da página em PDF ou HTML.

   - HTML: serializa o DOM atual num arquivo .html (download direto).
   - PDF : abre o diálogo de impressão nativo (o usuário escolhe
           "Salvar como PDF"). Sem bibliotecas externas.

   ── Atributos (todos opcionais)
     label      - texto do botão. Default "Salvar Página".
     format     - "both" (default) | "pdf" | "html".
                  "both" abre um menu com as duas opções.
     target     - seletor CSS do que salvar (ex.: "#conteudo").
                  Sem ele, salva a PÁGINA inteira.
     filename   - nome base do arquivo (sem extensão). Default "pagina".
     color      - cor de fundo do botão. Default "#1C5C31".
     disabled   - "true" desabilita o botão.

   ── Métodos JS
     el.saveHtml()   -> baixa o HTML
     el.savePdf()    -> abre o diálogo de impressão (Salvar como PDF)

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-button-save-page.js"></script>

   <granado-button-save-page label="Exportar Relatório" filename="relatorio">
   </granado-button-save-page>

   <!-- Só PDF, salvando apenas um container -->
   <granado-button-save-page format="pdf" target="#dossie" label="Imprimir Dossiê">
   </granado-button-save-page>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-button-save-page')) {
  const SURFACE = '#FDFAF1';
  const BORDER = '#E5DDC8';
  const VERDE = '#1C5C31';
  const TEXT = '#103E20';
  const TEXT2 = '#5A6B5E';
  const FONT = "'Poppins','DejaVu Sans',Arial,sans-serif";

  class GranadoButtonSavePage extends HTMLElement {
    static get observedAttributes() {
      return ['label', 'format', 'target', 'filename', 'color', 'disabled'];
    }

    connectedCallback() { this._render(); }
    disconnectedCallback() { this._removeDocClick(); }
    attributeChangedCallback() { if (this.isConnected) this._render(); }

    // ------------------------------------------------------------
    // API pública
    // ------------------------------------------------------------
    saveHtml() { this._saveHtml(); }
    savePdf() { this._savePdf(); }

    _format() {
      const f = (this.getAttribute('format') || 'both').toLowerCase();
      return (f === 'pdf' || f === 'html') ? f : 'both';
    }
    _filename() { return this.getAttribute('filename') || 'pagina'; }
    _targetEl() {
      const sel = this.getAttribute('target');
      if (!sel) return null;
      try { return document.querySelector(sel); } catch (e) { return null; }
    }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------
    _render() {
      const label = this.getAttribute('label') || 'Salvar Página';
      const color = this.getAttribute('color') || VERDE;
      const disabled = this.getAttribute('disabled') === 'true';
      const format = this._format();

      const btnStyle = `display:inline-flex;align-items:center;gap:8px;font:700 13px/1.4 ${FONT};` +
        `padding:9px 16px;border:1px solid ${color};border-radius:8px;background:${color};color:#fff;` +
        `cursor:${disabled ? 'not-allowed' : 'pointer'};opacity:${disabled ? '0.55' : '1'};transition:box-shadow .15s ease`;

      const icon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
      const caret = (format === 'both')
        ? `<span aria-hidden="true" style="font:800 10px/1 ${FONT};margin-left:2px">&#9662;</span>` : '';

      const menu = (format === 'both') ? (
        `<div data-role="menu" style="display:none;position:absolute;top:calc(100% + 6px);left:0;z-index:99999;` +
          `background:${SURFACE};border:1px solid ${BORDER};border-radius:8px;box-shadow:0 8px 24px rgba(15,51,25,.18);` +
          `padding:6px;min-width:190px;box-sizing:border-box">` +
          this._menuItem('pdf', 'Salvar como PDF') +
          this._menuItem('html', 'Salvar como HTML') +
        `</div>`
      ) : '';

      this.style.display = 'inline-block';
      this.innerHTML =
        `<div style="position:relative;display:inline-block">` +
          `<button type="button" data-role="main"${disabled ? ' disabled' : ''} style="height:auto !important;min-height:0 !important;${btnStyle}">${icon}<span>${this._esc(label)}</span>${caret}</button>` +
          menu +
        `</div>`;

      this._bind();
    }

    _menuItem(kind, text) {
      return `<button type="button" data-role="opt" data-kind="${kind}" style="height:auto !important;min-height:0 !important;display:block;width:100%;text-align:left;` +
        `font:600 12.5px/1.4 ${FONT};color:${TEXT};background:transparent;border:none;border-radius:6px;padding:8px 10px;cursor:pointer">${text}</button>`;
    }

    _bind() {
      const self = this;
      const main = this.querySelector('[data-role="main"]');
      const format = this._format();

      if (main) main.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (self.getAttribute('disabled') === 'true') return;
        if (format === 'pdf') { self._savePdf(); return; }
        if (format === 'html') { self._saveHtml(); return; }
        self._toggleMenu();   // both
      });

      this.querySelectorAll('[data-role="opt"]').forEach(function (b) {
        b.addEventListener('mouseenter', function () { b.style.background = '#EFE9D5'; });
        b.addEventListener('mouseleave', function () { b.style.background = 'transparent'; });
        b.addEventListener('click', function (ev) {
          ev.preventDefault();
          self._closeMenu();
          if (b.getAttribute('data-kind') === 'pdf') self._savePdf();
          else self._saveHtml();
        });
      });
    }

    // ------------------------------------------------------------
    // Menu (format="both")
    // ------------------------------------------------------------
    _menuEl() { return this.querySelector('[data-role="menu"]'); }
    _toggleMenu() { const m = this._menuEl(); if (!m) return; (m.style.display === 'block') ? this._closeMenu() : this._openMenu(); }
    _openMenu() {
      const m = this._menuEl(); if (!m) return;
      m.style.display = 'block';
      const self = this;
      this._docClick = function (e) { if (!self.contains(e.target)) self._closeMenu(); };
      setTimeout(function () { document.addEventListener('click', self._docClick); }, 0);
    }
    _closeMenu() { const m = this._menuEl(); if (m) m.style.display = 'none'; this._removeDocClick(); }
    _removeDocClick() { if (this._docClick) { document.removeEventListener('click', this._docClick); this._docClick = null; } }

    // ------------------------------------------------------------
    // Salvar HTML
    // ------------------------------------------------------------
    _saveHtml() {
      const target = this._targetEl();
      const fname = this._filename();
      let html;
      if (target && target !== document.documentElement && target !== document.body) {
        html = '<!DOCTYPE html>\n<html><head><meta charset="utf-8"><title>' + this._esc(fname) + '</title>' +
          this._collectHeadStyles() + '</head><body>' + target.outerHTML + '</body></html>';
      } else {
        html = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
      }
      const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
      this._download(blob, fname + '.html');
    }

    // Coleta <style> e <link rel="stylesheet"> do <head> (para o HTML de um alvo).
    _collectHeadStyles() {
      let out = '';
      document.querySelectorAll('head style, head link[rel="stylesheet"]').forEach(function (n) { out += n.outerHTML; });
      return out;
    }

    _download(blob, name) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
    }

    // ------------------------------------------------------------
    // Salvar PDF (via diálogo de impressão nativo)
    // ------------------------------------------------------------
    _savePdf() {
      const target = this._targetEl();
      if (target && target !== document.documentElement && target !== document.body) {
        this._printTarget(target);
      } else {
        this._printPage();
      }
    }

    // Página inteira: usa o window.print() (respeita o CSS de impressão da página).
    _printPage() {
      const fname = this._filename();
      const prev = document.title;
      document.title = fname;   // influencia o nome sugerido do PDF
      const restore = function () { document.title = prev; window.removeEventListener('afterprint', restore); };
      window.addEventListener('afterprint', restore);
      setTimeout(function () { window.print(); }, 0);
      // fallback: restaura o título mesmo se afterprint não disparar
      setTimeout(restore, 60000);
    }

    // Alvo específico: imprime num <iframe> oculto com os estilos do <head>.
    _printTarget(target) {
      const fname = this._filename();
      const iframe = document.createElement('iframe');
      iframe.setAttribute('aria-hidden', 'true');
      iframe.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
      document.body.appendChild(iframe);
      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + this._esc(fname) + '</title>' +
        this._collectHeadStyles() + '</head><body>' + target.outerHTML + '</body></html>');
      doc.close();
      const win = iframe.contentWindow;
      // aguarda o layout/estilos e imprime; remove o iframe depois.
      setTimeout(function () {
        try { win.focus(); win.print(); } catch (e) { /* ignore */ }
        setTimeout(function () { if (iframe.parentNode) iframe.parentNode.removeChild(iframe); }, 1500);
      }, 350);
    }

    // ------------------------------------------------------------
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"]/g, function (ch) {
        return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch];
      });
    }
  }

  customElements.define('granado-button-save-page', GranadoButtonSavePage);
  window.GranadoButtonSavePage = GranadoButtonSavePage;
}
