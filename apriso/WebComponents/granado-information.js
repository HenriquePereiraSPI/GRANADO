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
     text         - mensagem exibida. Aceita HTML (ex.: <strong>),
                    no mesmo formato dos avisos das telas.
     variant      - "info" (default) | "warn" | "ok" | "err".
                      info -> azul   (informacao neutra)
                      warn -> ambar  (atencao)
                      ok   -> verde  (sucesso/confirmacao)
                      err  -> vermelho (erro/bloqueio)
     icon         - sobrescreve o icone. Aceita texto/emoji/SVG bruto.
                    Default por variante: ℹ / ⚠ / ✓ / ✕.
                    Use icon="" para ocultar o icone.
     border-style - estilo da borda da caixa: "solid" (default),
                    "dashed", "dotted", "double", "none"...
                    (qualquer valor CSS de border-style).
     items        - objeto/array com pares Rotulo -> Valor, renderizados
                    em uma linha (rotulo pequeno em maiusculas + valor em
                    destaque). Util para "informativos" do tipo
                    "Material X · Lote Y · Quantidade Z". Formatos aceitos:
                      { "Material": "Aqua", "Lote": "AGUA-2026-03" }   (objeto)
                      [ { "label": "Material", "value": "Aqua" }, ... ] (array)
                    Como atributo HTML, envie o JSON (use aspas simples
                    no atributo). Como propriedade JS, envie o objeto
                    direto: el.items = { Material: 'Aqua', ... }.
                    Se houver text E items, o text aparece em cima.

   Propriedades JS:
     elemento.text        -> ler/setar text (HTML)
     elemento.variant     -> ler/setar variant
     elemento.icon        -> ler/setar icon
     elemento.borderStyle -> ler/setar border-style
     elemento.items       -> ler/setar items (objeto/array)

   Exemplo:

   <script src="assets/WebComponents/granado-information.js"></script>

   <granado-information
       text="Esta fila mostra ordens em diferentes estagios. Linhas vermelhas piscando indicam ordens aguardando liberacao para fabricacao.">
   </granado-information>

   <granado-information variant="warn"
       text="Conclua o checklist <strong>antes</strong> de iniciar a OP.">
   </granado-information>

   <granado-information border-style="dashed"
       items='{"Material":"Aqua (Água Purificada)","Lote":"AGUA-2026-03","Quantidade Alvo":"412,500 kg","Etiqueta Origem":"ETQ-MP-AGUA-2026-0341"}'>
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

  // Escapa texto simples (rotulos/valores dos items) para nao quebrar o HTML.
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Converte um hex #RRGGBB em rgba(...) — usado p/ derivar a cor "esmaecida"
  // do rotulo a partir da cor (fg) da variante. Se nao for hex, devolve como veio.
  const hexToRgba = (hex, a) => {
    const m = /^#?([0-9a-fA-F]{6})$/.exec(hex || '');
    if (!m) return hex;
    const n = parseInt(m[1], 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  };

  // Normaliza `items` (objeto {Label:Value} ou array) em [[label, value], ...],
  // preservando a ordem de insercao.
  const normalizeItems = (items) => {
    if (!items) return [];
    if (Array.isArray(items)) {
      return items.map((it) => {
        if (it == null) return null;
        if (Array.isArray(it)) return [it[0], it[1]];
        if (typeof it === 'object') {
          if ('label' in it || 'value' in it) return [it.label, it.value];
          if ('Label' in it || 'Value' in it) return [it.Label, it.Value];
          const k = Object.keys(it);
          return k.length ? [k[0], it[k[0]]] : null;
        }
        return [String(it), ''];
      }).filter(Boolean);
    }
    if (typeof items === 'object') {
      return Object.keys(items).map((k) => [k, items[k]]);
    }
    return [];
  };

  class GranadoInformation extends HTMLElement {
    static get observedAttributes() {
      return ['text', 'variant', 'icon', 'border-style', 'items'];
    }

    connectedCallback() {
      // lazy-props: reaplica propriedades setadas antes do upgrade.
      ['text', 'variant', 'icon', 'borderStyle', 'items'].forEach((p) => {
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

    get borderStyle() { return this.getAttribute('border-style') || 'solid'; }
    set borderStyle(v) { this.setAttribute('border-style', String(v == null ? '' : v)); }

    // items: aceita objeto/array (JS) ou string JSON (atributo). O getter sempre
    // devolve o objeto/array ja parseado (ou null se ausente/invalido).
    get items() {
      const raw = this.getAttribute('items');
      if (!raw) return null;
      try { return JSON.parse(raw); } catch (e) { return null; }
    }
    set items(v) {
      if (v == null) { this.removeAttribute('items'); return; }
      this.setAttribute('items', typeof v === 'string' ? v : JSON.stringify(v));
    }

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
      // border-style: qualquer valor CSS (solid default, dashed, dotted...).
      const borderStyle = this.getAttribute('border-style') || 'solid';

      // Icone dentro de um circulo com apenas o contorno na cor da variante,
      // centralizado vertical/horizontalmente para alinhar com a 1a linha do texto.
      const iconHtml = icon
        ? `<span style="flex-shrink:0;width:20px;height:20px;border-radius:50%;background:transparent;` +
            `border:1.5px solid ${v.fg};color:${v.fg};display:flex;align-items:center;justify-content:center;` +
            `font-size:12px;line-height:1;margin-top:-1px">${icon}</span>`
        : '';

      // items: linha de pares Rotulo -> Valor (rotulo esmaecido em maiusculas +
      // valor em destaque na cor da variante). Quebra em varias linhas se preciso.
      const pairs = normalizeItems(this.items);
      const labelColor = hexToRgba(v.fg, 0.62);
      const itemsHtml = pairs.length
        ? `<div style="display:flex;flex-wrap:wrap;align-items:center;gap:6px 22px">` +
            pairs.map(([lbl, val]) =>
              // min-width:0 + max-width:100% deixam o par encolher e nunca ultrapassar
              // a caixa; no valor, overflow-wrap/word-break garantem a quebra ate de
              // strings longas sem espaco (o rotulo nunca quebra: flex-shrink:0).
              `<span style="display:inline-flex;align-items:baseline;gap:5px;min-width:0;max-width:100%">` +
                `<span style="flex-shrink:0;font-size:9px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;color:${labelColor}">${esc(lbl)}</span>` +
                `<span style="min-width:0;overflow-wrap:anywhere;word-break:break-word;font-size:12px;font-weight:700;color:${v.fg}">${esc(val)}</span>` +
              `</span>`
            ).join('') +
          `</div>`
        : '';

      // Corpo: text (se houver) em cima, items embaixo (com respiro entre eles).
      const body = (text && itemsHtml)
        ? `${text}<div style="height:9px"></div>${itemsHtml}`
        : (itemsHtml || text);

      // Custom element e display:inline por padrao — forca bloco de largura total
      // para a caixa ocupar 100% independente do container onde for colocada.
      this.style.display = this.style.display || 'block';
      if (!this.style.width) this.style.width = '100%';
      this.style.boxSizing = 'border-box';

      this.innerHTML =
        `<div style="width:100%;border-radius:8px;padding:11px 15px;display:flex;gap:10px;align-items:flex-start;` +
          `font-size:12px;line-height:1.55;background:${v.bg};border:1px ${borderStyle} ${v.border};color:${v.fg};` +
          `font-family:'Poppins','DejaVu Sans',Arial,sans-serif;box-sizing:border-box">` +
          iconHtml +
          `<div style="flex:1 1 auto;min-width:0">${body}</div>` +
        `</div>`;
    }
  }

  customElements.define('granado-information', GranadoInformation);

  window.GranadoInformation = GranadoInformation;
}
