/* ============================================================
   <granado-checklist-popup>
   Popup (modal) de CHECKLIST — inspirado no popup "Verificação de
   Balança" da Pesagem. Mostra um título, subtítulo, um bloco de
   informações do cabeçalho, uma TABELA com as características a
   verificar (Característica · Leitura · Status · Observação · Ação)
   e, ao final, os campos "Verificado por" e "Data / Hora".

   ── Atributos / propriedades
     title              - título do popup
     subtitle           - subtítulo (linha abaixo do título)
     header-information  - informações do cabeçalho. Em JS prefira a
                           propriedade .headerInformation. Aceita:
                             • array de { label, value }  (grade)
                             • string / HTML              (bloco de texto)
     data               - array de linhas (em JS use .data). Cada item:
                             { id, caracteristica, valor, status,
                               limiteInferior, limiteSuperior, observacao, acao }
                               id             - identificador da linha (devolvido no confirm)
                               caracteristica - texto da linha (aceita HTML)
                               valor          - valor inicial do campo Valor
                                                (deixe vazio p/ não trazer default;
                                                 aceita também a chave legada "leitura").
                                                 Sem limites é texto livre; COM limites o campo
                                                 aceita apenas decimal.
                               limiteInferior - (decimal, opcional) mínimo aceito p/ o valor
                               limiteSuperior - (decimal, opcional) máximo aceito p/ o valor
                                                Quando um limite é informado: (1) ele é anexado
                                                entre parênteses à característica ("(18 – 24)",
                                                "(≥ 5)", "(≤ 60)"); (2) o "Check" vira um STATUS
                                                automático e BLOQUEADO: dentro dos limites -> "✓ OK",
                                                fora -> "✕ Fora" (o usuário não marca/desmarca).
                                                No retorno continua true/false.
                               status         - true | false | null (só quando NÃO há limites;
                                                checkbox marcável pelo usuário)
                               observacao     - valor inicial da Observação (opcional).
                                                A coluna só aparece se ao menos uma linha
                                                trouxer observacao; linhas sem o campo ficam
                                                com a célula vazia. Use "" p/ input em branco.
                               acao (opcional)- botão de ação da linha:
                                                { text, title, onClick } (fn ou string JS)
                                                ou apenas o texto (string). Use só um
                                                ícone/emoji em "text" p/ botão de ícone
                                                (com "title" como tooltip). O botão tem a
                                                mesma animação do <granado-button> (ripple + press).
                                                O onClick recebe um ctx para ler e
                                                ATUALIZAR a própria linha (ex.: "buscar"
                                                o valor e jogar no campo Valor):
                                                  ctx = { index, row, event,
                                                          value, check, observacao,
                                                          setValor(v), setCheck(bool),
                                                          setObservacao(v) }
     verified-by        - "Verificado por" — campo BLOQUEADO (o usuário não edita).
                          Mostra apenas o que vier deste parâmetro.
     date-time          - "Data / Hora" — campo BLOQUEADO (o usuário não edita).
                          Sem valor, é preenchido automaticamente com a data/hora
                          atual ("dd/mm/aaaa hh:mm"). Informe p/ fixar outro valor.
     confirm-text       - texto do botão confirmar (default "Confirmar")
     close-on-backdrop  - "true" permite fechar o popup ao clicar fora (backdrop).
                          Default: NÃO fecha ao clicar fora. Em JS use .closeOnBackdrop.
                          (O ✕ e o botão Cancelar sempre fecham.)
     checklist-id       - identificador do checklist. Em JS use .checklistId.
                          Devolvido no detail do evento "confirm".
     checklist-code     - código do checklist. Em JS use .checklistCode.
                          Devolvido no detail do evento "confirm".
     open               - "false" inicia oculto
     onConfirm          - (opcional) string JS executada ao confirmar (event, detail)

   ── Eventos (CustomEvent, bubbles)
     "confirm"    -> detail { checklistId, checklistCode, verifiedBy, dateTime,
                     rows: [{ id, caracteristica, valor, isManualValue, status, observacao }] }
                     isManualValue: true = usuário digitou o Valor · false = veio do setter
                     da ação (ctx.setValor) ou é o valor inicial.
                     status: com limites, é automático (OK/Fora); sem limites, é o checkbox.
     "row-action" -> detail = ctx (index, row, value, check, observacao,
                     setValor, setCheck, setObservacao) — clique no botão da linha.
                     Também disponível externamente: el.setValor(i, v) / el.setCheck(i, bool).
   (Cancelar, o X e o clique fora apenas fecham — sem evento.)

   ── API estática
     GranadoChecklistPopup.show({ title, subtitle, headerInformation, data,
                                  verifiedBy, dateTime, confirmText, onConfirm })

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-checklist-popup.js"></script>
   <script>
     GranadoChecklistPopup.show({
       title: '⚖️ Verificação de Balança',
       subtitle: 'BAL-014 · Toledo XK-3000 · Sala A',
       headerInformation: [
         { label: 'TAG', value: 'BAL-014' }, { label: 'Modelo', value: 'Toledo XK-3000' },
         { label: 'Classe', value: 'III' }
       ],
       data: [
         { caracteristica: 'Peso Padrão 01 · 10,000 kg · ±10 g', valor: '', status: null, observacao: '' },
         { caracteristica: 'Peso Padrão 02 · 11,000 kg · ±10 g', valor: '11,000', status: true, observacao: 'OK' }
       ],
       verifiedBy: 'J. Santos · Mat. 00412',
       onConfirm: function (d) { console.log(d.rows); }
     });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-checklist-popup')) {
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const SURFACE = '#FDFAF1';
  const SURFACE2 = '#F4EED9';
  const BORDER = '#D6CDA4';
  const BORDER2 = '#BFB172';
  const VERDE = '#1F7A3D';
  const VERDE_ESC = '#0F3319';
  const TEXT = '#1A1A1A';
  const TEXT2 = '#555555';
  const TEXT3 = '#8A8575';
  const OK = { txt: '#1C7A38', bg: '#D2E8D7', bd: '#98C8A8' };
  const FONT = "'Poppins',sans-serif";           // texto (--font-b / --font-d)
  const MONO = "'Arial',Helvetica,sans-serif";   // números/códigos e tabelas (--font-m)

  class GranadoChecklistPopup extends HTMLElement {
    static get observedAttributes() { return ['title', 'subtitle', 'header-information', 'data', 'verified-by', 'date-time', 'confirm-text', 'checklist-id', 'checklist-code', 'close-on-backdrop', 'open']; }

    // ------------------------------------------------------------
    // API estática
    // ------------------------------------------------------------
    static show(opts) {
      opts = opts || {};
      const el = document.createElement('granado-checklist-popup');
      if (opts.title != null) el.setAttribute('title', String(opts.title));
      if (opts.subtitle != null) el.setAttribute('subtitle', String(opts.subtitle));
      if (opts.verifiedBy != null) el.setAttribute('verified-by', String(opts.verifiedBy));
      if (opts.dateTime != null) el.setAttribute('date-time', String(opts.dateTime));
      if (opts.confirmText != null) el.setAttribute('confirm-text', String(opts.confirmText));
      if (opts.checklistId != null) el.setAttribute('checklist-id', String(opts.checklistId));
      if (opts.checklistCode != null) el.setAttribute('checklist-code', String(opts.checklistCode));
      if (opts.closeOnBackdrop != null) el.setAttribute('close-on-backdrop', opts.closeOnBackdrop ? 'true' : 'false');
      if (opts.onConfirm != null && typeof opts.onConfirm !== 'function') el.setAttribute('onConfirm', String(opts.onConfirm));
      el._autoRemove = true;
      if (typeof opts.onConfirm === 'function') el._onConfirmFn = opts.onConfirm;
      document.body.appendChild(el);
      if (opts.headerInformation != null) el.headerInformation = opts.headerInformation;  // mantém objeto/array
      if (opts.data != null) el.data = opts.data;                                          // mantém funções de acao
      el.open();
      return el;
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      ['data', 'headerInformation'].forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
    }
    attributeChangedCallback(name) {
      if (name === 'data') this._dataArr = null;
      if (name === 'header-information') this._headerInfo = null;
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
      if (this.isConnected) this._render();
    }
    get headerInformation() {
      if (this._headerInfo != null) return this._headerInfo;
      return this._parseAny(this.getAttribute('header-information'));
    }
    set headerInformation(v) {
      if (typeof v === 'string') { this.setAttribute('header-information', v); this._headerInfo = null; }
      else { this._headerInfo = v; }
      if (this.isConnected) this._render();
    }
    get checklistId() { return this.getAttribute('checklist-id'); }
    set checklistId(v) { if (v == null) this.removeAttribute('checklist-id'); else this.setAttribute('checklist-id', String(v)); }
    get checklistCode() { return this.getAttribute('checklist-code'); }
    set checklistCode(v) { if (v == null) this.removeAttribute('checklist-code'); else this.setAttribute('checklist-code', String(v)); }
    // Fechar ao clicar fora? Default: false (não fecha). Só fecha com "true".
    _closeOnBackdrop() { return this.getAttribute('close-on-backdrop') === 'true'; }
    get closeOnBackdrop() { return this._closeOnBackdrop(); }
    set closeOnBackdrop(v) { this.setAttribute('close-on-backdrop', v ? 'true' : 'false'); }

    open() { this.removeAttribute('open'); this.style.display = ''; if (this.isConnected) this._render(); }
    close() { this.style.display = 'none'; if (this._autoRemove) this.remove(); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _parseArr(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _parseAny(s) { if (!s) return null; try { return JSON.parse(s); } catch (e) { return s; } }
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
    // Data / hora atual no formato "dd/mm/aaaa hh:mm" (preenchimento automático, campo bloqueado).
    _nowStr() {
      const d = new Date();
      const p = (n) => String(n).padStart(2, '0');
      return p(d.getDate()) + '/' + p(d.getMonth() + 1) + '/' + d.getFullYear() + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
    }
    // Extrai os campos de uma linha (tolerante a variações de chave).
    _normRow(item) {
      item = item || {};
      const g = (obj, keys) => { for (let i = 0; i < keys.length; i++) if (obj[keys[i]] != null) return obj[keys[i]]; return undefined; };
      const acaoRaw = g(item, ['acao', 'acão', 'ação', 'botao', 'button', 'acaoBotao']);
      let acao = null;
      if (acaoRaw != null) acao = (typeof acaoRaw === 'string')
        ? { text: acaoRaw, title: '', onClick: null }
        : { text: acaoRaw.text != null ? acaoRaw.text : 'Ação', title: acaoRaw.title != null ? acaoRaw.title : '', onClick: acaoRaw.onClick };
      const num = (x) => { if (x == null || x === '') return null; const n = (typeof x === 'number') ? x : parseFloat(String(x).replace(',', '.')); return isNaN(n) ? null : n; };
      const limInf = num(g(item, ['limiteInferior', 'limite-inferior', 'limInf', 'LimiteInferior', 'min']));
      const limSup = num(g(item, ['limiteSuperior', 'limite-superior', 'limSup', 'LimiteSuperior', 'max']));
      return {
        id: g(item, ['id', 'ID', 'Id']),
        caracteristica: g(item, ['caracteristica', 'característica', 'Caracteristica', 'Característica']),
        valor: g(item, ['valor', 'Valor', 'leitura', 'Leitura']),
        status: g(item, ['status', 'Status']),
        limInf: limInf,
        limSup: limSup,
        hasLimits: (limInf != null || limSup != null),   // limites informados -> status bloqueado
        observacao: g(item, ['observacao', 'observação', 'Observacao', 'Observação']),
        acao: acao
      };
    }
    // Extrai um número decimal do valor (aceita "20,140", "4,2 Pa", etc.).
    _parseNum(v) { if (v == null) return null; const m = String(v).replace(',', '.').match(/-?\d+(?:\.\d+)?/); return m ? parseFloat(m[0]) : null; }
    // Mantém só o que compõe um decimal: dígitos, UM separador (,/.) e um "-" inicial.
    // Usado quando há limites — o campo Valor deixa de ser livre e aceita só decimal.
    _sanitizeDecimal(v) {
      let s = String(v == null ? '' : v).replace(/[^\d,.\-]/g, '');
      const neg = s.charAt(0) === '-';
      s = s.replace(/-/g, '');
      const sep = s.search(/[,.]/);
      if (sep >= 0) s = s.slice(0, sep + 1) + s.slice(sep + 1).replace(/[,.]/g, '');
      return (neg ? '-' : '') + s;
    }
    // Valor está OK dentro dos limites da linha? (fora/inválido -> false)
    _okOf(value, r) {
      const n = this._parseNum(value);
      if (n == null) return false;
      if (r.limInf != null && n < r.limInf) return false;
      if (r.limSup != null && n > r.limSup) return false;
      return true;
    }
    _isOk(i) { return this._okOf(this._getInput('leitura', i), (this._normRows || [])[i] || {}); }
    // Formata um número de limite (usa vírgula decimal, sem casas supérfluas).
    _fmtLim(n) { const s = String(n); return s.indexOf('.') >= 0 ? s.replace('.', ',') : s; }
    // Rótulo dos limites p/ anexar à característica: "(18 – 24)", "(≥ 5)", "(≤ 60)".
    _limitsLabel(r) {
      if (!r || !r.hasLimits) return '';
      let txt;
      if (r.limInf != null && r.limSup != null) txt = this._fmtLim(r.limInf) + ' – ' + this._fmtLim(r.limSup);
      else if (r.limInf != null) txt = '≥ ' + this._fmtLim(r.limInf);
      else txt = '≤ ' + this._fmtLim(r.limSup);
      return ` <span style="font-weight:400;color:${TEXT3};font-size:11px">(${txt})</span>`;
    }
    // Badge de status (bloqueado) — usado quando há limites.
    _statusBadge(ok) {
      const c = ok
        ? { txt: '#1C7A38', bg: '#D2E8D7', bd: '#98C8A8', label: '✓ OK' }
        : { txt: '#8C1A1A', bg: '#FADADD', bd: '#D48888', label: '✕ Fora' };
      return `<span style="display:inline-block;padding:2px 9px;border-radius:9px;font:800 11px/1.4 ${FONT};color:${c.txt};background:${c.bg};border:1px solid ${c.bd}">${c.label}</span>`;
    }
    // Recalcula o badge de status da linha (quando o valor muda).
    _updateStatus(i) {
      const r = (this._normRows || [])[i]; if (!r || !r.hasLimits) return;
      const el = this.querySelector('[data-role="status"][data-idx="' + i + '"]'); if (!el) return;
      el.innerHTML = this._statusBadge(this._isOk(i));
    }

    // Checkbox interativo (o usuário clica para alternar true/false).
    _checkBox(i, st) {
      const on = st === true;
      return `<button type="button" data-role="check" data-idx="${i}" data-checked="${on}" aria-pressed="${on}" title="Marcar / desmarcar" style="width:26px;height:26px;padding:0;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;border:2px solid ${on ? OK.txt : BORDER2};background:${on ? OK.txt : SURFACE};color:#fff;font:900 15px/1 ${FONT};transition:all .12s ease">${on ? '✓' : ''}</button>`;
    }

    _render() {
      const title = this.getAttribute('title') || '';
      const subtitle = this.getAttribute('subtitle') || '';
      const verifiedBy = this.getAttribute('verified-by') || '';
      const dateTime = this.getAttribute('date-time') || this._nowStr();   // preenchimento automático
      const confirmText = this.getAttribute('confirm-text') || 'Confirmar';
      const rows = (this.data || []).map((r) => this._normRow(r));
      this._normRows = rows;
      const hasAcao = rows.some((r) => r.acao);
      const hasObservacao = rows.some((r) => r.observacao != null);   // coluna opcional
      const colCount = 3 + (hasObservacao ? 1 : 0) + (hasAcao ? 1 : 0);

      // ── Bloco de informações do cabeçalho ──
      const hi = this.headerInformation;
      let headerHtml = '';
      if (Array.isArray(hi) && hi.length) {
        const items = hi.map((x) => `<div><span style="color:${TEXT3}">${this._esc(x.label)}:</span> <span style="font-weight:700;color:${TEXT}">${this._esc(x.value)}</span></div>`).join('');
        headerHtml = `<div style="margin-top:14px;background:${SURFACE2};border:1px solid ${BORDER};border-left:4px solid ${VERDE};border-radius:6px;padding:12px 14px"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:6px 14px;font-size:11px">${items}</div></div>`;
      } else if (typeof hi === 'string' && hi) {
        headerHtml = `<div style="margin-top:14px;background:${SURFACE2};border:1px solid ${BORDER};border-left:4px solid ${VERDE};border-radius:6px;padding:12px 14px;font-size:11.5px;color:${TEXT2};line-height:1.5">${hi}</div>`;
      }

      // ── Linhas da tabela ──
      const inpBase = `box-sizing:border-box;width:100%;font:12px/1.4 ${MONO};padding:6px 8px;border:1px solid ${BORDER};border-radius:6px;background:#fff;color:${TEXT}`;
      const linhas = rows.length ? rows.map((r, i) => {
        const valInit = r.hasLimits ? this._sanitizeDecimal(r.valor != null ? r.valor : '') : (r.valor != null ? r.valor : '');
        const leituraCell = `<input data-role="leitura" data-idx="${i}" data-manual="false"${r.hasLimits ? ' data-decimal="true" inputmode="decimal"' : ''} type="text" value="${this._esc(valInit)}" style="${inpBase}">`;
        const obsCell = hasObservacao
          ? `<td style="border-bottom:1px solid ${BORDER};padding:11px 12px;vertical-align:middle;min-width:150px">` + (r.observacao != null ? `<input data-role="obs" data-idx="${i}" type="text" value="${this._esc(r.observacao)}" style="${inpBase}">` : '') + `</td>`
          : '';
        const acaoCell = hasAcao
          ? `<td style="text-align:center;border-bottom:1px solid ${BORDER};padding:11px 12px;vertical-align:middle">` + (r.acao ? `<button type="button" data-role="rowbtn" data-idx="${i}"${r.acao.title ? ` title="${this._esc(r.acao.title)}"` : ''} style="position:relative;overflow:hidden;font:700 14px/1.1 ${FONT};padding:6px 12px;border:1px solid ${VERDE};border-radius:6px;background:${VERDE};color:#fff;cursor:pointer;white-space:nowrap;transition:transform .1s ease,background .15s ease">${this._esc(r.acao.text)}</button>` : '') + `</td>`
          : '';
        return `<tr>` +
          `<td style="border-bottom:1px solid ${BORDER};padding:11px 12px;vertical-align:middle;font-weight:700;color:${TEXT}">${r.caracteristica != null ? r.caracteristica : ''}${this._limitsLabel(r)}</td>` +
          `<td style="border-bottom:1px solid ${BORDER};padding:11px 12px;vertical-align:middle;width:150px">${leituraCell}</td>` +
          `<td style="border-bottom:1px solid ${BORDER};padding:11px 12px;vertical-align:middle;text-align:center;width:90px">` +
            (r.hasLimits
              ? `<span data-role="status" data-idx="${i}" title="Automático (limites informados)">${this._statusBadge(this._okOf(r.valor, r))}</span>`
              : this._checkBox(i, r.status)) +
          `</td>` +
          obsCell +
          acaoCell +
        `</tr>`;
      }).join('') : `<tr><td colspan="${colCount}" style="border-bottom:1px solid ${BORDER};padding:14px;text-align:center;color:${TEXT3};font-size:12px">Nenhum item para verificar.</td></tr>`;

      const th = `padding:7px 12px;text-align:left;font:900 9px/1.4 ${FONT};letter-spacing:.14em;text-transform:uppercase;color:${TEXT3};background:${SURFACE2};border-bottom:1px solid ${BORDER};position:sticky;top:0;z-index:1;box-shadow:inset 0 -1px 0 ${BORDER}`;

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:40px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${VERDE};border-radius:12px;padding:22px 24px;max-width:900px;width:96%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:${TEXT};margin:auto">` +
            // Cabeçalho
            `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">` +
              `<div>` +
                (title ? `<div style="font-size:19px;font-weight:800;color:${VERDE_ESC}">${title}</div>` : '') +
                (subtitle ? `<div style="font-size:12px;color:${TEXT2};margin-top:2px">${subtitle}</div>` : '') +
              `</div>` +
              `<button type="button" data-role="x" title="Cancelar" style="background:none;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font-size:13px;color:${TEXT2};line-height:1;flex-shrink:0">✕</button>` +
            `</div>` +
            headerHtml +
            // Tabela
            `<div style="overflow:auto;max-height:46vh;margin-top:16px;border:1px solid ${BORDER};border-radius:8px">` +
              `<table style="width:100%;border-collapse:collapse;font-size:12px;font-family:${MONO}">` +
                `<thead><tr>` +
                  `<th style="${th}">Característica</th>` +
                  `<th style="${th};text-align:center">Valor</th>` +
                  `<th style="${th};text-align:center">Check</th>` +
                  (hasObservacao ? `<th style="${th};text-align:center">Observação</th>` : '') +
                  (hasAcao ? `<th style="${th};text-align:center">Ação</th>` : '') +
                `</tr></thead>` +
                `<tbody>${linhas}</tbody>` +
              `</table>` +
            `</div>` +
            // Rodapé: Verificado por + Data / Hora
            `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px">` +
              `<div><label style="display:block;font:900 9px/1.4 ${FONT};letter-spacing:.1em;text-transform:uppercase;color:${TEXT3};margin-bottom:5px">Verificado por <span style="font-weight:600;color:${TEXT3};letter-spacing:0;text-transform:none">🔒</span></label><input data-role="verifiedBy" type="text" value="${this._esc(verifiedBy)}" readonly tabindex="-1" aria-readonly="true" title="Definido pelo sistema" style="${inpBase};font-family:${MONO};background:${SURFACE2};color:${TEXT2};cursor:not-allowed"></div>` +
              `<div><label style="display:block;font:900 9px/1.4 ${FONT};letter-spacing:.1em;text-transform:uppercase;color:${TEXT3};margin-bottom:5px">Data / Hora <span style="font-weight:600;color:${TEXT3};letter-spacing:0;text-transform:none">🔒 automático</span></label><input data-role="dateTime" type="text" value="${this._esc(dateTime)}" readonly tabindex="-1" aria-readonly="true" title="Preenchido automaticamente" style="${inpBase};font-family:${MONO};background:${SURFACE2};color:${TEXT2};cursor:not-allowed"></div>` +
            `</div>` +
            // Botões
            `<div style="display:flex;gap:10px;justify-content:flex-end;padding-top:16px;margin-top:16px;border-top:1px solid ${BORDER}">` +
              `<button type="button" data-role="cancel" style="font:600 13px/1.4 ${FONT};padding:9px 18px;border:1px solid ${BORDER};border-radius:8px;background:transparent;color:${TEXT2};cursor:pointer">Cancelar</button>` +
              `<button type="button" data-role="confirm" style="font:700 13px/1.4 ${FONT};padding:9px 22px;border:1px solid ${VERDE};border-radius:8px;background:${VERDE};color:#fff;cursor:pointer">${this._esc(confirmText)}</button>` +
            `</div>` +
          `</div>` +
        `</div>`;

      this._bind();
    }

    // ── Helpers para ler/atualizar uma linha (usados pelo botão de ação) ──
    _inputEl(role, i) { return this.querySelector('[data-role="' + role + '"][data-idx="' + i + '"]'); }
    _getInput(role, i) { const e = this._inputEl(role, i); return e ? e.value : ''; }
    _setInput(role, i, v) { const e = this._inputEl(role, i); if (!e) return; let val = (v == null ? '' : String(v)); if (role === 'leitura' && e.getAttribute('data-decimal') === 'true') val = this._sanitizeDecimal(val); e.value = val; if (role === 'leitura') { e.setAttribute('data-manual', 'false'); this._updateStatus(i); } }
    _getManual(i) { const e = this._inputEl('leitura', i); return e ? e.getAttribute('data-manual') === 'true' : false; }
    _getCheck(i) { const c = this._inputEl('check', i); return c ? c.getAttribute('data-checked') === 'true' : null; }
    _setCheck(i, on) {
      const c = this._inputEl('check', i); if (!c) return;
      on = !!on;
      c.setAttribute('data-checked', String(on)); c.setAttribute('aria-pressed', String(on));
      c.style.border = '2px solid ' + (on ? OK.txt : BORDER2);
      c.style.background = on ? OK.txt : SURFACE;
      c.textContent = on ? '✓' : '';
    }
    // API pública para atualizar uma linha externamente (índice base 0).
    setValor(i, v) { this._setInput('leitura', i, v); }
    setValue(i, v) { this._setInput('leitura', i, v); }
    setCheck(i, on) { this._setCheck(i, on); }
    setObservacao(i, v) { this._setInput('obs', i, v); }

    // Ripple do clique (mesma animação do <granado-button>).
    _ripple(e, btn) {
      const rect = btn.getBoundingClientRect();
      const cx = e.clientX || 0, cy = e.clientY || 0;
      let x, y;
      if (cx === 0 && cy === 0) { x = rect.width / 2; y = rect.height / 2; }
      else { x = cx - rect.left; y = cy - rect.top; }
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.style.cssText = 'position:absolute;left:' + (x - size / 2) + 'px;top:' + (y - size / 2) + 'px;width:' + size + 'px;height:' + size + 'px;border-radius:50%;pointer-events:none;background:#fff;transform:scale(0);opacity:.45';
      btn.appendChild(ripple);
      const anim = ripple.animate([{ transform: 'scale(0)', opacity: .45 }, { transform: 'scale(2.2)', opacity: 0 }], { duration: 450, easing: 'cubic-bezier(0.4,0,0.2,1)' });
      const cleanup = () => ripple.remove();
      anim.onfinish = cleanup; anim.oncancel = cleanup;
    }

    _bind() {
      const self = this;
      const overlay = this.querySelector('[data-role="overlay"]');
      const box = this.querySelector('[data-role="box"]');
      const x = this.querySelector('[data-role="x"]');
      const cancel = this.querySelector('[data-role="cancel"]');
      const confirm = this.querySelector('[data-role="confirm"]');
      if (x) x.addEventListener('click', function () { self.close(); });
      if (cancel) cancel.addEventListener('click', function () { self.close(); });
      // Clique fora (backdrop): só fecha se close-on-backdrop === "true" (default: NÃO fecha).
      if (overlay && box) overlay.addEventListener('mousedown', function (e) { if (e.target === overlay && self._closeOnBackdrop()) self.close(); });
      if (confirm) confirm.addEventListener('click', function (ev) { self._confirm(ev); });

      // Campo "Valor": digitação manual marca a origem (isManualValue = true).
      this.querySelectorAll('[data-role="leitura"]').forEach(function (el) {
        el.addEventListener('input', function () {
          if (el.getAttribute('data-decimal') === 'true') {
            const clean = self._sanitizeDecimal(el.value);
            if (clean !== el.value) {
              const pos = el.selectionStart, removed = el.value.length - clean.length;
              el.value = clean;
              try { const p = Math.max(0, (pos || 0) - removed); el.setSelectionRange(p, p); } catch (e) {}
            }
          }
          el.setAttribute('data-manual', 'true');
          self._updateStatus(parseInt(el.getAttribute('data-idx'), 10) || 0);
        });
      });

      // Checkbox "Check" — alterna true/false ao clicar.
      this.querySelectorAll('[data-role="check"]').forEach(function (c) {
        c.addEventListener('click', function () {
          const on = c.getAttribute('data-checked') !== 'true';
          c.setAttribute('data-checked', String(on));
          c.setAttribute('aria-pressed', String(on));
          c.style.border = '2px solid ' + (on ? OK.txt : BORDER2);
          c.style.background = on ? OK.txt : SURFACE;
          c.textContent = on ? '✓' : '';
        });
      });

      this.querySelectorAll('[data-role="rowbtn"]').forEach(function (b) {
        // press (scale) + reset — igual ao granado-button
        const press = function () { b.style.transform = 'scale(0.96)'; };
        const release = function () { b.style.transform = ''; };
        b.addEventListener('mousedown', press);
        b.addEventListener('mouseup', release);
        b.addEventListener('mouseleave', release);
        b.addEventListener('touchstart', press, { passive: true });
        b.addEventListener('touchend', release);
        b.addEventListener('click', function (ev) {
          self._ripple(ev, b);
          const idx = parseInt(b.getAttribute('data-idx'), 10) || 0;
          const row = (self._normRows || [])[idx] || {};
          // ctx: dados atuais da linha + setters (para o botão "buscar" e inserir o Valor).
          const ctx = {
            index: idx, id: row.id, row: row, event: ev,
            value: self._getInput('leitura', idx),
            isManualValue: self._getManual(idx),
            check: row.hasLimits ? self._isOk(idx) : self._getCheck(idx),
            observacao: self._getInput('obs', idx),
            setValor: function (v) { self._setInput('leitura', idx, v); },
            setValue: function (v) { self._setInput('leitura', idx, v); },
            setCheck: function (on) { self._setCheck(idx, on); },
            setObservacao: function (v) { self._setInput('obs', idx, v); }
          };
          self.dispatchEvent(new CustomEvent('row-action', { bubbles: true, composed: true, detail: ctx }));
          if (row.acao && typeof row.acao.onClick === 'function') row.acao.onClick(ctx);
          else if (row.acao && typeof row.acao.onClick === 'string') new Function('ctx', 'event', 'row', 'index', row.acao.onClick).call(self, ctx, ev, row, idx);
        });
      });
    }

    _confirm(ev) {
      const val = (sel) => { const e = this.querySelector(sel); return e ? e.value : ''; };
      const rows = (this._normRows || []).map((r, i) => {
        const obsEl = this._inputEl('obs', i);
        let status;
        if (r.hasLimits) {
          status = this._isOk(i);   // limites informados -> automático (não editável)
        } else {
          const chk = this.querySelector('[data-role="check"][data-idx="' + i + '"]');
          status = chk ? (chk.getAttribute('data-checked') === 'true') : r.status;
        }
        return {
          id: r.id,
          caracteristica: r.caracteristica,
          valor: val('[data-role="leitura"][data-idx="' + i + '"]'),
          isManualValue: this._getManual(i),
          status: status,
          observacao: obsEl ? obsEl.value : r.observacao
        };
      });
      const detail = {
        checklistId: this.getAttribute('checklist-id'),
        checklistCode: this.getAttribute('checklist-code'),
        verifiedBy: val('[data-role="verifiedBy"]'),
        dateTime: val('[data-role="dateTime"]'),
        rows: rows
      };
      this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true, detail: detail }));
      if (typeof this._onConfirmFn === 'function') this._onConfirmFn(detail, ev);
      const h = this.getAttribute('onconfirm');
      if (h) new Function('event', 'detail', h).call(this, ev, detail);
      this.close();
    }
  }

  customElements.define('granado-checklist-popup', GranadoChecklistPopup);
  window.GranadoChecklistPopup = GranadoChecklistPopup;
}
