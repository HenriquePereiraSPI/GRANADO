/* ============================================================
   <granado-information>
   Caixa de aviso/informacao no padrao visual das telas (".abox"):
   icone a esquerda + texto, com fundo, borda e cor conforme a
   variante. Use para instrucoes, alertas e observacoes no topo
   de listas, cards e formularios.

   Reproduz, por exemplo:

       (i) Esta fila mostra ordens em diferentes estagios — desde
           pagamento de MPs ate liberacao para fabricacao. Linhas
           vermelhas piscando indicam ordens aguardando liberacao.

   Atributos (todos opcionais):
     text      - mensagem exibida. Aceita HTML (ex.: <strong>),
                 no mesmo formato dos avisos das telas.
     variant   - "info" (default) | "warn" | "ok" | "err".
                   info -> azul   (informacao neutra)
                   warn -> ambar  (atencao)
                   ok   -> verde  (sucesso/confirmacao)
                   err  -> vermelho (erro/bloqueio)
     icon      - sobrescreve o icone. Aceita texto/emoji/SVG bruto.
                 Default por variante: ℹ / ⚠ / ✓ / ✕.
                 Use icon="" para ocultar o icone.

   Propriedades JS:
     elemento.text     -> ler/setar text (HTML)
     elemento.variant  -> ler/setar variant
     elemento.icon     -> ler/setar icon

   Exemplo:

   <script src="assets/WebComponents/granado-information.js"></script>

   <granado-information
       text="Esta fila mostra ordens em diferentes estagios. Linhas vermelhas piscando indicam ordens aguardando liberacao para fabricacao.">
   </granado-information>

   <granado-information variant="warn"
       text="Conclua o checklist <strong>antes</strong> de iniciar a OP.">
   </granado-information>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-information')) {
  const VARIANTS = {
    info: { bg: '#D8E8F8', border: '#90B8E0', fg: '#1A4A8C', icon: 'ℹ' },
    warn: { bg: '#FEF0CC', border: '#E0B84A', fg: '#9A5A00', icon: '⚠' },
    ok:   { bg: '#D2E8D7', border: '#98C8A8', fg: '#1C7A38', icon: '✓' },
    err:  { bg: '#FADADD', border: '#D48888', fg: '#8C1A1A', icon: '✕' },
  };

  class GranadoInformation extends HTMLElement {
    static get observedAttributes() {
      return ['text', 'variant', 'icon'];
    }

    connectedCallback() {
      // lazy-props: reaplica propriedades setadas antes do upgrade.
      ['text', 'variant', 'icon'].forEach((p) => {
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
    get text() { return this.getAttribute('text') || ''; }
    set text(v) { this.setAttribute('text', String(v == null ? '' : v)); }

    get variant() { return this.getAttribute('variant') || 'info'; }
    set variant(v) { this.setAttribute('variant', String(v == null ? '' : v)); }

    get icon() { return this.getAttribute('icon'); }
    set icon(v) { this.setAttribute('icon', String(v == null ? '' : v)); }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------
    _render() {
      const variant = this.getAttribute('variant') || 'info';
      const v = VARIANTS[variant] || VARIANTS.info;
      // text e renderizado como HTML (igual aos avisos das telas).
      const text = this.getAttribute('text') || '';
      // icon: atributo sobrescreve; ausente => glyph padrao da variante.
      const iconAttr = this.getAttribute('icon');
      const icon = iconAttr != null ? iconAttr : v.icon;

      // Icone dentro de um circulo com apenas o contorno na cor da variante,
      // centralizado vertical/horizontalmente para alinhar com a 1a linha do texto.
      const iconHtml = icon
        ? `<span style="flex-shrink:0;width:20px;height:20px;border-radius:50%;background:transparent;` +
            `border:1.5px solid ${v.fg};color:${v.fg};display:flex;align-items:center;justify-content:center;` +
            `font-size:12px;line-height:1;margin-top:-1px">${icon}</span>`
        : '';

      // Custom element e display:inline por padrao — forca bloco de largura total
      // para a caixa ocupar 100% independente do container onde for colocada.
      this.style.display = this.style.display || 'block';
      if (!this.style.width) this.style.width = '100%';
      this.style.boxSizing = 'border-box';

      this.innerHTML =
        `<div style="width:100%;border-radius:8px;padding:11px 15px;display:flex;gap:10px;align-items:flex-start;` +
          `font-size:12px;line-height:1.55;background:${v.bg};border:1px solid ${v.border};color:${v.fg};` +
          `font-family:'Poppins','DejaVu Sans',Arial,sans-serif;box-sizing:border-box">` +
          iconHtml +
          `<div style="flex:1 1 auto;min-width:0">${text}</div>` +
        `</div>`;
    }
  }

  customElements.define('granado-information', GranadoInformation);

  window.GranadoInformation = GranadoInformation;
}
