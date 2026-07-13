/* ============================================================
   <granado-zpl-popup>
   Popup (overlay modal) que fica NA FRENTE de qualquer tela e
   reproduz o layout do popup "Reimprimir Etiqueta" da Pesagem:
   cabeçalho, pré-visualização da etiqueta (ZPL), seletor de
   impressora e os botões "Cancelar" / "Reimprimir".

   Suporta vários TIPOS de etiqueta via o atributo "type"; cada
   tipo define quais campos são esperados em "data".

   ── Tipos
     type="pesagem"  - Pesagem de Material (Label 001). Campos em "data":
        titulo, dataImpressao, ordemFabricacao, loteGranel, dataPesagem,
        aprovado (bool), granelResultante, materiaPrima, loteMP, validade,
        tipoPesagem, qtdOrdem, pesadoPor, matricula, balanca, tara,
        pesoBruto, noEtiqueta, barcode, pesoLiquido, impressoPor, impressoEm
     type="pesagem-gaiola" - Etiqueta de Gaiola (Label 004). Campos em "data":
        titulo, dataImpressao, ordemFabricacao, gaiola, granelResultante,
        noEtiqueta, lote, usuario, matricula, noGaiola, barcode,
        impressoPor, impressoEm
     Campos do popup (qualquer tipo, opcionais em "data"):
        etiqueta       - subtítulo do cabeçalho (ex.: "Etiqueta Nº 7951496")
        impressoras    - impressoras disponíveis (chave=id, valor=descrição).
                         Aceita objeto { id: descricao } ou array de { id, descricao }.
                         Se não informar, o dropdown fica vazio (sem default).
        impressora     - impressora pré-selecionada, no mesmo formato chave/valor
                         { id, descricao } (string com o id também é aceita)
        copias         - nº de cópias pré-selecionado (1 a 4; default 1)

   ── Evento "reimprimir" -> detail
        { impressora: { id, descricao } | null, copias (1-4), type, data }
        (impressora = objeto selecionado no dropdown; null se estiver vazio)

   ── Atributos
     type   - tipo da etiqueta (default "pesagem")
     data   - JSON com os campos (em JS prefira a propriedade .data)
     close-on-backdrop - "true" permite fechar ao clicar fora (backdrop). Default:
              NÃO fecha ao clicar fora. Em JS use .closeOnBackdrop.
     open   - "false" inicia oculto (default visível)

   ── Propriedades / métodos JS
     el.type   -> ler/setar o tipo
     el.data   -> ler/setar o objeto de dados
     el.open() -> exibir o popup
     el.close()-> ocultar o popup

   ── Eventos (CustomEvent, bubbles)
     "reimprimir" -> detail { impressora, type, data }
   (Cancelar e o X sempre fecham o popup — sem evento. Por padrão o clique fora
    NÃO fecha; habilite com close-on-backdrop="true".)

   ── Handler inline (opcional)
     onPrintClick - string JS executada ao clicar em "Reimprimir"; recebe
                    (event, detail). Ex.: onPrintClick="console.log(detail.impressora)"

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-zpl-popup.js"></script>

   <granado-zpl-popup id="pop" type="pesagem"></granado-zpl-popup>
   <script>
     var pop = document.getElementById('pop');
     pop.data = {
       etiqueta: 'Etiqueta Nº 7953072',
       titulo: 'PESAGEM DE MATERIAL', dataImpressao: '24/03/2026',
       ordemFabricacao: '771166', loteGranel: '1621/2026',
       dataPesagem: '24/03/2026 07:42', aprovado: true,
       granelResultante: 'S0835B - SAB. PH LIMAO SICILIANO',
       materiaPrima: 'M9808 - MANTEIGA DE MURUMURU STD (SAB)',
       loteMP: '0273826', validade: '30/07/2028', tipoPesagem: 'SIMPLES',
       qtdOrdem: '37,440 KG', pesadoPor: 'VALMIR MENDES', matricula: '102266',
       balanca: '16', tara: '0,021 KG', pesoBruto: '3,141 KG',
       noEtiqueta: '7953072', barcode: '#P12814471417953072',
       pesoLiquido: '3,120 KG', impressoPor: 'Claudinei',
       impressoEm: '31/03/2026 08:05',
       impressoras: [
         { id: 'PRN-BOX3', descricao: 'Zebra ZD420 (Box Pesagem)' },
         { id: 'PRN-LAB', descricao: 'Zebra GK420t (Laboratório)' }
       ],
       impressora: { id: 'PRN-BOX3', descricao: 'Zebra ZD420 (Box Pesagem)' }
     };
     pop.addEventListener('reimprimir', function (e) { console.log('imprimir em', e.detail.impressora.id, e.detail.impressora.descricao); pop.close(); });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-zpl-popup')) {
  const MONO = "'DejaVu Sans Mono','DM Mono',Consolas,monospace";
  const INK = '#111';
  // Paleta Granado (hardcoded — sem var() de default).
  const OURO = '#C8A84B';
  const VERDE = '#1F7A3D';
  const VERDE_ESC = '#0F3319';
  const SURFACE = '#FFFFFF';
  const BORDER = '#E5E0D4';
  const TEXT2 = '#555555';
  const TEXT3 = '#8A8575';
  const VERMELHO = '#8C1A1A';

  class GranadoZplPopup extends HTMLElement {
    static get observedAttributes() { return ['type', 'data', 'open', 'close-on-backdrop']; }

    connectedCallback() {
      ['type', 'data'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) {
          const v = this[p];
          delete this[p];
          this[p] = v;
        }
      });
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
    }

    attributeChangedCallback(name) {
      if (name === 'data') this._dataObj = null;
      if (name === 'open') this.style.display = (this.getAttribute('open') === 'false') ? 'none' : '';
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

    // Fechar ao clicar fora? Default: false (não fecha). Só fecha com "true".
    _closeOnBackdrop() { return this.getAttribute('close-on-backdrop') === 'true'; }
    get closeOnBackdrop() { return this._closeOnBackdrop(); }
    set closeOnBackdrop(v) { this.setAttribute('close-on-backdrop', v ? 'true' : 'false'); }

    open() { this.removeAttribute('open'); this.style.display = ''; if (this.isConnected) this._render(); }
    close() { this.style.display = 'none'; }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _parse(s) { if (!s) return {}; try { return JSON.parse(s) || {}; } catch (e) { return {}; } }
    // Normaliza a lista de impressoras (chave/valor) para [{ id, descricao }].
    // Aceita: objeto map { id: descricao }, array de { id, descricao }
    // (ou { key, value } / { value, label }), ou array de strings (legado).
    // Sem impressoras informadas -> [] (dropdown vazio).
    _normPrinters(src) {
      if (src == null || (Array.isArray(src) && !src.length)) return [];
      if (!Array.isArray(src) && typeof src === 'object') {
        return Object.keys(src).map((k) => ({ id: k, descricao: String(src[k]) }));
      }
      if (Array.isArray(src)) {
        return src.map((p) => {
          if (p && typeof p === 'object') {
            const id = p.id != null ? p.id : (p.key != null ? p.key : p.value);
            const descricao = p.descricao != null ? p.descricao : (p.value != null ? p.value : (p.label != null ? p.label : id));
            return { id: String(id == null ? '' : id), descricao: String(descricao == null ? '' : descricao) };
          }
          return { id: String(p), descricao: String(p) };
        });
      }
      return [];
    }
    _esc(s) {
      return String(s == null ? '' : s)
        .split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;');
    }
    _campo(label, valor, valSize) {
      return `<div style="padding:5px 8px"><div style="font-size:8px;font-weight:700;letter-spacing:.03em;color:${INK}">${this._esc(label)}</div>` +
        `<div style="font-size:${valSize || 12}px;font-weight:700;color:${INK};margin-top:2px;word-break:break-word">${this._esc(valor) || '&nbsp;'}</div></div>`;
    }
    _hr() { return `<div style="border-top:2px solid ${INK}"></div>`; }
    _barcode(code) {
      const s = String(code || '');
      let bars = '';
      for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        const w = (c % 3) + 1;
        const g = ((c >> 2) % 2) + 1;
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
      const type = this.type;
      const d = this.data || {};

      let preview;
      if (type === 'pesagem') preview = this._renderPesagem(d);
      else if (type === 'pesagem-gaiola') preview = this._renderPesagemGaiola(d);
      else preview = `<div style="font-family:${MONO};font-size:12px;color:${VERMELHO};padding:16px">granado-zpl-popup: tipo "${this._esc(type)}" não suportado.</div>`;

      // Etiqueta "papel" (igual ao granado-zpl)
      const label =
        `<div style="max-width:430px;margin:0 auto;background:#fff;border:1px solid #999;border-radius:4px;padding:10px;box-sizing:border-box;box-shadow:0 1px 4px rgba(0,0,0,.12)">` +
          `<div style="border:2px solid ${INK};box-sizing:border-box">${preview}</div>` +
        `</div>`;

      const subtitulo = d.etiqueta || (d.noEtiqueta ? 'Etiqueta Nº ' + d.noEtiqueta : 'Etiqueta');

      const printers = this._normPrinters(d.impressoras);
      // Impressora pré-selecionada: aceita objeto { id, descricao } ou string (id).
      const selId = d.impressora && typeof d.impressora === 'object' ? d.impressora.id : d.impressora;
      const options = printers.map((p) => {
        const id = this._esc(p.id);
        const desc = this._esc(p.descricao);
        const isSel = selId != null && String(selId) === String(p.id) ? ' selected' : '';
        return `<option value="${id}"${isSel}>🖨️ ${desc}</option>`;
      }).join('');

      // Cópias: 1 a 4, default 1 (data.copias pode pré-selecionar).
      const copiasSel = Math.min(4, Math.max(1, parseInt(d.copias, 10) || 1));
      const copiasOptions = [1, 2, 3, 4]
        .map((n) => `<option value="${n}"${n === copiasSel ? ' selected' : ''}>${n}</option>`)
        .join('');

      const inpFont = "13px/1.4 'Poppins',system-ui,Arial,sans-serif";

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:rgba(15,51,25,.55);z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:40px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${OURO};border-radius:10px;padding:22px 26px;max-width:560px;width:94%;box-shadow:0 18px 50px rgba(15,51,25,.30);margin:auto;box-sizing:border-box;font:${inpFont};color:#1A1A1A">` +
            // Cabeçalho
            `<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;gap:12px">` +
              `<div>` +
                `<div style="font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:${OURO}">🖨️ Reimprimir Etiqueta</div>` +
                `<div style="font-size:18px;font-weight:700;color:${VERDE_ESC};margin-top:2px">${this._esc(subtitulo)}</div>` +
              `</div>` +
              `<button type="button" data-role="x" title="Cancelar" style="background:none;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font-size:13px;color:${TEXT2};line-height:1">✕</button>` +
            `</div>` +
            // Preview
            `<div style="font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:${TEXT3};margin-bottom:8px">Pré-visualização da etiqueta</div>` +
            `<div style="margin-bottom:16px">${label}</div>` +
            // Impressora + Cópias
            `<div style="display:flex;gap:12px;margin-bottom:18px">` +
              `<div style="flex:1;min-width:0">` +
                `<label style="display:block;font-size:9px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:${TEXT3};margin-bottom:5px">Impressora</label>` +
                `<select data-role="printer" style="width:100%;box-sizing:border-box;font:${inpFont};padding:8px 12px;border:1px solid ${BORDER};border-radius:6px;background:#fff;color:#1A1A1A">${options}</select>` +
              `</div>` +
              `<div style="flex:0 0 96px">` +
                `<label style="display:block;font-size:9px;font-weight:900;letter-spacing:.1em;text-transform:uppercase;color:${TEXT3};margin-bottom:5px">Cópias</label>` +
                `<select data-role="copies" style="width:100%;box-sizing:border-box;font:${inpFont};padding:8px 12px;border:1px solid ${BORDER};border-radius:6px;background:#fff;color:#1A1A1A">${copiasOptions}</select>` +
              `</div>` +
            `</div>` +
            // Botões
            `<div style="display:flex;gap:10px;justify-content:flex-end">` +
              `<button type="button" data-role="cancel" style="font:${inpFont};font-weight:600;padding:9px 18px;border:1px solid ${BORDER};border-radius:7px;background:transparent;color:${TEXT2};cursor:pointer">Cancelar</button>` +
              `<button type="button" data-role="print" style="font:${inpFont};font-weight:700;padding:9px 18px;border:1px solid ${VERDE};border-radius:7px;background:${VERDE};color:#fff;cursor:pointer">🖨️ Reimprimir</button>` +
            `</div>` +
          `</div>` +
        `</div>`;

      this._bind();
    }

    _bind() {
      const overlay = this.querySelector('[data-role="overlay"]');
      const box = this.querySelector('[data-role="box"]');
      const onClose = () => this.close();          // Cancelar / X sempre fecham
      const onPrint = () => this._emitPrint();

      const x = this.querySelector('[data-role="x"]');
      const cancel = this.querySelector('[data-role="cancel"]');
      const print = this.querySelector('[data-role="print"]');
      if (x) x.addEventListener('click', onClose);
      if (cancel) cancel.addEventListener('click', onClose);
      if (print) print.addEventListener('click', onPrint);
      // Clique fora da caixa (backdrop): só fecha se close-on-backdrop === "true" (default: NÃO fecha).
      if (overlay && box) {
        overlay.addEventListener('mousedown', (e) => { if (e.target === overlay && this._closeOnBackdrop()) onClose(); });
      }
    }

    _emitPrint() {
      const sel = this.querySelector('[data-role="printer"]');
      const opt = sel && sel.selectedOptions ? sel.selectedOptions[0] : null;
      // Objeto chave/valor da impressora selecionada (null se o dropdown estiver vazio).
      const impressora = (sel && sel.value !== '' && opt)
        ? { id: sel.value, descricao: opt.textContent.replace(/^🖨️\s*/, '') }
        : null;
      const cps = this.querySelector('[data-role="copies"]');
      const copias = cps ? (parseInt(cps.value, 10) || 1) : 1;
      const detail = { impressora, copias, type: this.type, data: this.data };
      const ev = new CustomEvent('reimprimir', { bubbles: true, composed: true, detail });
      this.dispatchEvent(ev);
      // Handler inline opcional: <granado-zpl-popup onPrintClick="...">
      const handler = this.getAttribute('onprintclick');
      if (handler) new Function('event', 'detail', handler).call(this, ev, detail);
    }

    // Pré-visualização "pesagem" (Label 001) — mesmo layout do <granado-zpl>.
    _renderPesagem(d) {
      const cv = (l, v, s) => this._campo(l, v, s);
      const vdiv = `border-right:2px solid ${INK}`;

      const sec1 =
        `<div style="display:flex;align-items:flex-start;justify-content:space-between;padding:8px 8px 6px">` +
          `<div style="font-size:20px;font-weight:800;letter-spacing:.02em;color:${INK}">${this._esc(d.titulo)}</div>` +
          `<div style="text-align:right"><div style="font-size:8px;font-weight:700;color:${INK}">DATA IMPRESSAO</div>` +
            `<div style="font-size:12px;font-weight:700;color:${INK}">${this._esc(d.dataImpressao)}</div></div>` +
        `</div>`;

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
                ? `<div style="font-size:18px;font-weight:800;color:${VERMELHO}">REPROVADO</div>`
                : `<div style="font-size:18px;font-weight:800;color:${INK}">APROVADO</div>`)) +
          `</div>` +
        `</div>`;

      const sec3 = this._campo('GRANEL RESULTANTE', d.granelResultante, 13);
      const sec4 = this._campo('MATERIA PRIMA', d.materiaPrima, 13);

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

      const sec6 =
        `<div style="display:flex">` +
          `<div style="flex:1.6;${vdiv}">${cv('PESADO POR', d.pesadoPor, 11)}</div>` +
          `<div style="flex:1;${vdiv}">${cv('MATRICULA', d.matricula, 11)}</div>` +
          `<div style="flex:.8;${vdiv}">${cv('BALANCA', d.balanca, 11)}</div>` +
          `<div style="flex:1;${vdiv}">${cv('TARA', d.tara, 11)}</div>` +
          `<div style="flex:1.1;${vdiv}">${cv('PESO BRUTO', d.pesoBruto, 11)}</div>` +
          `<div style="flex:1">${cv('No ETIQUETA', d.noEtiqueta, 11)}</div>` +
        `</div>`;

      const sec7 =
        `<div style="display:flex;align-items:stretch">` +
          `<div style="flex:1;padding:10px 8px;min-width:0">${this._barcode(d.barcode)}</div>` +
          `<div style="flex:0 0 44%;background:${INK};color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px 8px">` +
            `<div style="font-size:11px;font-weight:700;letter-spacing:.06em">PESO LIQUIDO</div>` +
            `<div style="font-size:34px;font-weight:800;line-height:1.1;margin-top:4px">${this._esc(d.pesoLiquido) || '&nbsp;'}</div>` +
          `</div>` +
        `</div>`;

      const sec8 =
        `<div style="display:flex;justify-content:space-between;padding:6px 8px;font-size:9px;color:${INK}">` +
          `<span>Impresso por: ${this._esc(d.impressoPor)}</span>` +
          `<span>Impresso em: ${this._esc(d.impressoEm)}</span>` +
        `</div>`;

      return sec1 + this._hr() + sec2 + this._hr() + sec3 + this._hr() + sec4 + this._hr() +
        sec5 + this._hr() + sec6 + this._hr() + sec7 + this._hr() + sec8;
    }

    // type="pesagem-gaiola" — Etiqueta de Gaiola (Label 004).
    _renderPesagemGaiola(d) {
      const cv = (l, v, s) => this._campo(l, v, s);
      const vdiv = `border-right:2px solid ${INK}`;

      const sec1 =
        `<div style="display:flex;align-items:flex-start;justify-content:space-between;padding:8px 8px 6px">` +
          `<div style="font-size:17px;font-weight:800;letter-spacing:.02em;color:${INK}">${this._esc(d.titulo)}</div>` +
          `<div style="text-align:right"><div style="font-size:8px;font-weight:700;color:${INK}">DATA IMPRESSAO</div>` +
            `<div style="font-size:12px;font-weight:700;color:${INK}">${this._esc(d.dataImpressao)}</div></div>` +
        `</div>`;

      const sec2 =
        `<div style="display:flex">` +
          `<div style="flex:1;${vdiv}">${cv('ORDEM DE FABRICACAO', d.ordemFabricacao, 26)}</div>` +
          `<div style="flex:0 0 34%;text-align:center;padding:5px 8px">` +
            `<div style="font-size:8px;font-weight:700;color:${INK}">GAIOLA</div>` +
            `<div style="font-size:26px;font-weight:800;color:${INK};line-height:1.1">${this._esc(d.gaiola) || '&nbsp;'}</div>` +
          `</div>` +
        `</div>`;

      const sec3 =
        `<div style="display:flex">` +
          `<div style="flex:1;${vdiv}">${cv('GRANEL RESULTANTE', d.granelResultante, 13)}</div>` +
          `<div style="flex:0 0 34%">${cv('No DA ETIQUETA', d.noEtiqueta, 13)}</div>` +
        `</div>`;

      const sec4 =
        `<div style="display:flex">` +
          `<div style="flex:1;${vdiv}">${cv('LOTE', d.lote, 13)}</div>` +
          `<div style="flex:1;${vdiv}">${cv('USUARIO', d.usuario, 13)}</div>` +
          `<div style="flex:1;${vdiv}">${cv('MATRICULA', d.matricula, 13)}</div>` +
          `<div style="flex:1">${cv('No DA GAIOLA', d.noGaiola, 13)}</div>` +
        `</div>`;

      const sec5 = `<div style="padding:10px 8px;display:flex;flex-direction:column;align-items:center;min-width:0">${this._barcode(d.barcode)}</div>`;

      const sec6 =
        `<div style="display:flex;justify-content:space-between;padding:6px 8px;font-size:9px;color:${INK}">` +
          `<span>Impresso por: ${this._esc(d.impressoPor)}</span>` +
          `<span>Impresso em: ${this._esc(d.impressoEm)}</span>` +
        `</div>`;

      return sec1 + this._hr() + sec2 + this._hr() + sec3 + this._hr() + sec4 + this._hr() + sec5 + this._hr() + sec6;
    }
  }

  customElements.define('granado-zpl-popup', GranadoZplPopup);
  window.GranadoZplPopup = GranadoZplPopup;
}