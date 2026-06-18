/* ============================================================
   <granado-zpl>
   Pré-visualização (preview) de etiquetas ZPL, reproduzindo o
   layout aproximado da etiqueta como ela sai na impressora
   térmica — sem precisar enviar para a Zebra.

   Suporta vários TIPOS de etiqueta via o atributo "type"; cada
   tipo define quais campos são esperados em "data".

   ── Tipos
     type="pesagem"   - Pesagem de Material (Label 001). Campos em "data":
        titulo, dataImpressao, ordemFabricacao, loteGranel, dataPesagem,
        aprovado (bool), granelResultante, materiaPrima, loteMP, validade,
        tipoPesagem, qtdOrdem, pesadoPor, matricula, balanca, tara,
        pesoBruto, noEtiqueta, barcode, pesoLiquido, impressoPor, impressoEm

   ── Atributos
     type   - tipo da etiqueta (default "pesagem")
     data   - JSON com os campos (em JS prefira a propriedade .data)

   ── Propriedades JS
     el.type   -> ler/setar o tipo
     el.data   -> ler/setar o objeto de dados

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-zpl.js"></script>

   <granado-zpl id="etq" type="pesagem"></granado-zpl>
   <script>
     document.getElementById('etq').data = {
       titulo: 'PESAGEM DE MATERIAL',
       dataImpressao: '24/03/2026',
       ordemFabricacao: '771166',
       loteGranel: '1621/2026',
       dataPesagem: '24/03/2026 07:42',
       aprovado: true,
       granelResultante: 'S0835B - SAB. PH LIMAO SICILIANO',
       materiaPrima: 'M9808 - MANTEIGA DE MURUMURU STD (SAB)',
       loteMP: '0273826', validade: '30/07/2028',
       tipoPesagem: 'SIMPLES', qtdOrdem: '37,440 KG',
       pesadoPor: 'VALMIR MENDES', matricula: '102266', balanca: '16',
       tara: '0,021 KG', pesoBruto: '3,141 KG', noEtiqueta: '7953072',
       barcode: '#P12814471417953072', pesoLiquido: '3,120 KG',
       impressoPor: 'Claudinei', impressoEm: '31/03/2026 08:05'
     };
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-zpl')) {
  const MONO = "'DejaVu Sans Mono','DM Mono',Consolas,monospace";
  const INK = '#111';

  class GranadoZpl extends HTMLElement {
    static get observedAttributes() { return ['type', 'data']; }

    connectedCallback() {
      ['type', 'data'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) {
          const v = this[p];
          delete this[p];
          this[p] = v;
        }
      });
      this._render();
    }

    attributeChangedCallback(name) {
      if (name === 'data') this._dataObj = null;
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get type() { return this.getAttribute('type') || 'pesagem'; }
    set type(v) { this.setAttribute('type', String(v == null ? '' : v)); }

    get data() {
      if (this._dataObj && typeof this._dataObj === 'object') return this._dataObj;
      return this._parse(this.getAttribute('data'));
    }
    set data(v) {
      if (typeof v === 'string') { this.setAttribute('data', v); this._dataObj = null; }
      else { this._dataObj = v && typeof v === 'object' ? v : {}; }
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _parse(s) { if (!s) return {}; try { return JSON.parse(s) || {}; } catch (e) { return {}; } }
    _esc(s) {
      return String(s == null ? '' : s)
        .split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;');
    }
    // Campo: rótulo pequeno (maiúsculo) + valor.
    _campo(label, valor, valSize) {
      return `<div style="padding:5px 8px"><div style="font-size:8px;font-weight:700;letter-spacing:.03em;color:${INK}">${this._esc(label)}</div>` +
        `<div style="font-size:${valSize || 12}px;font-weight:700;color:${INK};margin-top:2px;word-break:break-word">${this._esc(valor) || '&nbsp;'}</div></div>`;
    }
    // Divisória horizontal.
    _hr() { return `<div style="border-top:2px solid ${INK}"></div>`; }
    // Barras "código de barras" determinísticas a partir do texto.
    _barcode(code) {
      const s = String(code || '');
      let bars = '';
      for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        const w = (c % 3) + 1;       // largura da barra preta (1-3px)
        const g = ((c >> 2) % 2) + 1; // espaço branco (1-2px)
        bars += `<span style="display:inline-block;width:${w}px;height:100%;background:${INK}"></span>`;
        bars += `<span style="display:inline-block;width:${g}px;height:100%;background:#fff"></span>`;
      }
      return `<div style="display:flex;align-items:flex-end;height:56px;overflow:hidden">${bars}</div>` +
        `<div style="font-family:${MONO};font-size:11px;letter-spacing:.05em;margin-top:3px;color:${INK}">${this._esc(s)}</div>`;
    }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------
    _render() {
      this.style.display = this.style.display || 'block';
      const type = this.type;
      let inner;
      if (type === 'pesagem') inner = this._renderPesagem(this.data || {});
      else inner = `<div style="font-family:${MONO};font-size:12px;color:#8C1A1A;padding:16px">granado-zpl: tipo "${this._esc(type)}" não suportado.</div>`;

      // "Papel" da etiqueta: borda dupla (externa fina + moldura interna),
      // proporção ~10x12, fundo branco, tinta preta — como na térmica.
      this.innerHTML =
        `<div style="max-width:430px;background:#fff;border:1px solid #999;border-radius:4px;padding:10px;box-sizing:border-box;box-shadow:0 1px 4px rgba(0,0,0,.12)">` +
          `<div style="border:2px solid ${INK};box-sizing:border-box">${inner}</div>` +
        `</div>`;
    }

    _renderPesagem(d) {
      const cv = (l, v, s) => this._campo(l, v, s);
      const vdiv = `border-right:2px solid ${INK}`;

      // SECTION 1 — Title bar
      const sec1 =
        `<div style="display:flex;align-items:flex-start;justify-content:space-between;padding:8px 8px 6px">` +
          `<div style="font-size:20px;font-weight:800;letter-spacing:.02em;color:${INK}">${this._esc(d.titulo)}</div>` +
          `<div style="text-align:right"><div style="font-size:8px;font-weight:700;color:${INK}">DATA IMPRESSAO</div>` +
            `<div style="font-size:12px;font-weight:700;color:${INK}">${this._esc(d.dataImpressao)}</div></div>` +
        `</div>`;

      // SECTION 2 — Ordem / Lote granel / Aprovado
      const sec2 =
        `<div style="display:flex">` +
          `<div style="flex:0 0 33%;${vdiv}">${cv('ORDEM DE FABRICACAO', d.ordemFabricacao, 26)}</div>` +
          `<div style="flex:1;${vdiv};padding:5px 8px">` +
            `<div style="font-size:8px;font-weight:700;color:${INK}">LOTE GRANEL</div>` +
            `<div style="font-size:22px;font-weight:800;color:${INK}">${this._esc(d.loteGranel) || '&nbsp;'}</div>` +
            `<div style="font-size:8px;font-weight:700;color:${INK};margin-top:4px">DATA DA PESAGEM</div>` +
            `<div style="font-size:11px;font-weight:700;color:${INK}">${this._esc(d.dataPesagem)}</div>` +
          `</div>` +
          `<div style="flex:0 0 26%;display:flex;align-items:center;justify-content:center">` +
            (d.aprovado == null || d.aprovado === ''
              ? ''
              : (d.aprovado === false
                ? `<div style="font-size:18px;font-weight:800;color:#8C1A1A">REPROVADO</div>`
                : `<div style="font-size:18px;font-weight:800;color:${INK}">APROVADO</div>`)) +
          `</div>` +
        `</div>`;

      // SECTION 3 — Granel resultante
      const sec3 = this._campo('GRANEL RESULTANTE', d.granelResultante, 13);
      // SECTION 4 — Materia prima
      const sec4 = this._campo('MATERIA PRIMA', d.materiaPrima, 13);

      // SECTION 5 — Lote MP / Validade(reverse) / Tipo / Qtd
      const sec5 =
        `<div style="display:flex">` +
          `<div style="flex:1;${vdiv}">${cv('LOTE MP', d.loteMP, 15)}</div>` +
          `<div style="flex:1;${vdiv};padding:5px 8px">` +
            `<div style="font-size:8px;font-weight:700;color:${INK}">VALIDADE</div>` +
            `<div style="display:inline-block;background:${INK};color:#fff;font-size:13px;font-weight:700;padding:2px 8px;margin-top:3px">${this._esc(d.validade) || '&nbsp;'}</div>` +
          `</div>` +
          `<div style="flex:1;${vdiv}">${cv('TIPO DE PESAGEM', d.tipoPesagem, 13)}</div>` +
          `<div style="flex:1">${cv('QTD ORDEM', d.qtdOrdem, 13)}</div>` +
        `</div>`;

      // SECTION 6 — Pesado por / Matricula / Balanca / Tara / Peso bruto / No etiqueta
      const sec6 =
        `<div style="display:flex">` +
          `<div style="flex:1.6;${vdiv}">${cv('PESADO POR', d.pesadoPor, 11)}</div>` +
          `<div style="flex:1;${vdiv}">${cv('MATRICULA', d.matricula, 11)}</div>` +
          `<div style="flex:.8;${vdiv}">${cv('BALANCA', d.balanca, 11)}</div>` +
          `<div style="flex:1;${vdiv}">${cv('TARA', d.tara, 11)}</div>` +
          `<div style="flex:1.1;${vdiv}">${cv('PESO BRUTO', d.pesoBruto, 11)}</div>` +
          `<div style="flex:1">${cv('No ETIQUETA', d.noEtiqueta, 11)}</div>` +
        `</div>`;

      // SECTION 7 — Barcode + Peso liquido (box reverse)
      const sec7 =
        `<div style="display:flex;align-items:stretch">` +
          `<div style="flex:1;padding:10px 8px;min-width:0">${this._barcode(d.barcode)}</div>` +
          `<div style="flex:0 0 44%;background:${INK};color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px 8px">` +
            `<div style="font-size:11px;font-weight:700;letter-spacing:.06em">PESO LIQUIDO</div>` +
            `<div style="font-size:34px;font-weight:800;line-height:1.1;margin-top:4px">${this._esc(d.pesoLiquido) || '&nbsp;'}</div>` +
          `</div>` +
        `</div>`;

      // SECTION 8 — Footer
      const sec8 =
        `<div style="display:flex;justify-content:space-between;padding:6px 8px;font-size:9px;color:${INK}">` +
          `<span>Impresso por: ${this._esc(d.impressoPor)}</span>` +
          `<span>Impresso em: ${this._esc(d.impressoEm)}</span>` +
        `</div>`;

      return sec1 + this._hr() + sec2 + this._hr() + sec3 + this._hr() + sec4 + this._hr() +
        sec5 + this._hr() + sec6 + this._hr() + sec7 + this._hr() + sec8;
    }
  }

  customElements.define('granado-zpl', GranadoZpl);
  window.GranadoZpl = GranadoZpl;
}
