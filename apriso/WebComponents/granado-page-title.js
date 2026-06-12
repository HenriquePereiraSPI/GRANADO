/* ============================================================
   <granado-page-title>
   Cabecalho de pagina no padrao visual das telas do sistema:
   uma linha pequena dourada em maiusculas (eyebrow) acima de um
   titulo grande verde, com borda inferior verde e um detalhe
   dourado curto no canto inferior esquerdo.

   Reproduz o ".page-header" existente, por exemplo:

       PESAGEM · MF5
       Selecao de Ordem de Pesagem
       _________________________________________________

   Atributos (todos opcionais):
     title       - titulo principal (texto grande verde).
                   OBS: como "title" e um atributo nativo do HTML,
                   o navegador tambem exibe um tooltip ao passar o
                   mouse. Use "main-title" se quiser evitar isso.
     main-title  - alias de "title" (tem prioridade). Nao gera tooltip.
     subtitle    - linha pequena dourada em maiusculas (eyebrow),
                   exibida ACIMA do titulo. Ex.: "Pesagem · MF5".
     custom-text - texto/meta alinhado a direita do cabecalho.
                   Aceita HTML (ex.: <br>, <span style="color:...">),
                   no mesmo formato do ".screen-meta" das telas.
                   Tambem aceito como "customtext".

   Propriedades JS:
     elemento.subtitle    -> ler/setar subtitle
     elemento.mainTitle   -> ler/setar o titulo principal
     elemento.customText  -> ler/setar custom-text (HTML)

   Exemplo:

   <script src="assets/WebComponents/granado-page-title.js"></script>

   <granado-page-title
       subtitle="Pesagem · MF5"
       title="Selecao de Ordem de Pesagem">
   </granado-page-title>

   <granado-page-title
       subtitle="Fabricacao · CQ · MF5"
       main-title="Controle de Amostras — Laboratorio"
       custom-text="OP-2026-0416 · Lote G2026-091<br><span style='color:#1C5C31'>Granel aprovado</span>">
   </granado-page-title>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-page-title')) {
  class GranadoPageTitle extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'main-title', 'subtitle', 'custom-text', 'customtext'];
    }

    connectedCallback() {
      // lazy-props: se alguma propriedade foi setada antes do upgrade,
      // reaplica para passar pelos getters/setters.
      ['subtitle', 'mainTitle', 'customText'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) {
          const v = this[p];
          delete this[p];
          this[p] = v;
        }
      });
      this._render();
    }

    attributeChangedCallback() {
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get subtitle() { return this.getAttribute('subtitle') || ''; }
    set subtitle(v) { this.setAttribute('subtitle', String(v == null ? '' : v)); }

    get mainTitle() {
      return this.getAttribute('main-title') || this.getAttribute('title') || '';
    }
    set mainTitle(v) { this.setAttribute('main-title', String(v == null ? '' : v)); }

    get customText() {
      return this.getAttribute('custom-text') || this.getAttribute('customtext') || '';
    }
    set customText(v) { this.setAttribute('custom-text', String(v == null ? '' : v)); }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------
    _render() {
      const title = this.getAttribute('main-title') || this.getAttribute('title') || '';
      const subtitle = this.getAttribute('subtitle') || '';
      // custom-text e renderizado como HTML (igual ao .screen-meta das telas).
      const customText =
        this.getAttribute('custom-text') || this.getAttribute('customtext') || '';

      const eyebrowHtml = subtitle
        ? `<div style="font-size:9px;font-weight:900;letter-spacing:.22em;text-transform:uppercase;color:#9A7520;margin-bottom:4px;font-family:'Poppins','DejaVu Sans',Arial,sans-serif;line-height:1.2">${this._escape(subtitle)}</div>`
        : '';

      const titleHtml = title
        ? `<div style="font-family:'Poppins','DejaVu Sans',Arial,sans-serif;font-size:26px;font-weight:700;color:#0F3319;line-height:1">${this._escape(title)}</div>`
        : '';

      const metaHtml = customText
        ? `<div style="text-align:right;font-family:'Arial',Helvetica,sans-serif;font-size:10px;line-height:1.9;color:#4A6250;flex-shrink:0">${customText}</div>`
        : '';

      // Custom element e display:inline por padrao — forca bloco de largura total
      // para o cabecalho ocupar 100% independente do container onde for colocado.
      this.style.display = this.style.display || 'block';
      if (!this.style.width) this.style.width = '100%';
      this.style.boxSizing = 'border-box';

      this.innerHTML =
        `<div style="width:100%;position:relative;display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:22px;padding-bottom:14px;border-bottom:2px solid #1C5C31;box-sizing:border-box">` +
          `<div>${eyebrowHtml}${titleHtml}</div>` +
          metaHtml +
          // detalhe dourado curto (substitui o ::after do .page-header)
          `<div style="position:absolute;bottom:-2px;left:0;width:56px;height:2px;background:#C8A84B"></div>` +
        `</div>`;
    }

    _escape(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
  }

  customElements.define('granado-page-title', GranadoPageTitle);

  window.GranadoPageTitle = GranadoPageTitle;
}
