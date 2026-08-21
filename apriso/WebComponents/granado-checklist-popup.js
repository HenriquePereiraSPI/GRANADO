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
     show-value         - "false" oculta a coluna "Valor" — checklist SÓ com o Check
                          (Característica + Check [+ Observação/Ação se houver]).
                          Default: "true" (mostra o Valor). Em JS use .showValue.
                          Com a coluna oculta, os limites (limiteInferior/Superior) são
                          ignorados no render do Check — cada linha usa o checkbox marcável.
     close-on-backdrop  - "true" permite fechar o popup ao clicar fora (backdrop).
                          Default: NÃO fecha ao clicar fora. Em JS use .closeOnBackdrop.
                          (O ✕ e o botão Cancelar sempre fecham.)
     checklist-id       - identificador do checklist. Em JS use .checklistId.
                          Devolvido no detail do evento "confirm".
     checklist-code     - código do checklist. Em JS use .checklistCode.
                          Devolvido no detail do evento "confirm".
     open               - "false" inicia oculto
     onConfirm          - (opcional) string JS executada ao confirmar (event, detail)
     onValidate         - (opcional) validação SÍNCRONA ao clicar em "Confirmar".
                          Recebe o MESMO detail do confirm e DEVE retornar
                          { valid:true|false, message } (ou true/false).
                            valid=true  -> o popup fecha normalmente (segue o confirm).
                            valid=false -> o popup CONTINUA aberto e exibe "message".
                          Em JS use .onValidate (função) ou o atributo onvalidate (string).

   ── Eventos (CustomEvent, bubbles)
     "confirm"    -> detail { checklistId, checklistCode, verifiedBy, dateTime,
                     rows: [{ id, caracteristica, valor, isManualValue, status, observacao }] }
                     isManualValue: true = usuário digitou o Valor · false = veio do setter
                     da ação (ctx.setValor) ou é o valor inicial.
                     status: com limites, é automático (OK/Fora); sem limites, é o checkbox.
                     Só dispara se a validação (onValidate) passar.
     "row-action" -> detail = ctx (index, row, value, check, observacao,
                     setValor, setCheck, setObservacao) — clique no botão da linha.
                     Também disponível externamente: el.setValor(i, v) / el.setCheck(i, bool).
   (Cancelar, o X e o clique fora apenas fecham — sem evento.)

   ── API estática
     GranadoChecklistPopup.show({ title, subtitle, headerInformation, data,
                                  verifiedBy, dateTime, confirmText, onConfirm, onValidate })

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
    static get observedAttributes() { return ['title', 'subtitle', 'header-information', 'data', 'verified-by', 'date-time', 'confirm-text', 'checklist-id', 'checklist-code', 'close-on-backdrop', 'show-value', 'mobile-breakpoint', 'open']; }

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
      if (opts.showValue != null) el.setAttribute('show-value', opts.showValue ? 'true' : 'false');
      if (opts.checklistId != null) el.setAttribute('checklist-id', String(opts.checklistId));
      if (opts.checklistCode != null) el.setAttribute('checklist-code', String(opts.checklistCode));
      if (opts.closeOnBackdrop != null) el.setAttribute('close-on-backdrop', opts.closeOnBackdrop ? 'true' : 'false');
      if (opts.onConfirm != null && typeof opts.onConfirm !== 'function') el.setAttribute('onConfirm', String(opts.onConfirm));
      if (opts.onValidate != null && typeof opts.onValidate !== 'function') el.setAttribute('onValidate', String(opts.onValidate));
      el._autoRemove = true;
      if (typeof opts.onConfirm === 'function') el._onConfirmFn = opts.onConfirm;
      if (typeof opts.onValidate === 'function') el._onValidateFn = opts.onValidate;
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
      this._setupMedia();
      this._render();
    }
    disconnectedCallback() { this._teardownMedia(); }
    attributeChangedCallback(name) {
      if (name === 'data') this._dataArr = null;
      if (name === 'header-information') this._headerInfo = null;
      if (name === 'open') this.style.display = (this.getAttribute('open') === 'false') ? 'none' : '';
      if (name === 'mobile-breakpoint' && this.isConnected) this._setupMedia();
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
    // Handler de validação (JS). Recebe o mesmo detail do confirm; deve retornar
    // { valid:true|false, message } (ou true/false). false mantém o popup aberto.
    get onValidate() { return this._onValidateFn || null; }
    set onValidate(fn) { this._onValidateFn = (typeof fn === 'function') ? fn : null; }

    // Mostra a coluna "Valor"? Default: true. "false" -> checklist só com o Check.
    get showValue() { return this.getAttribute('show-value') !== 'false'; }
    set showValue(v) { this.setAttribute('show-value', v ? 'true' : 'false'); }

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
    // size (opcional) aumenta o alvo de toque no layout mobile.
    _checkBox(i, st, size) {
      const on = st === true;
      const s = size || 26, rad = size ? 8 : 6, fs = size ? 19 : 15;
      return `<button type="button" data-role="check" data-idx="${i}" data-checked="${on}" aria-pressed="${on}" title="Marcar / desmarcar" style="width:${s}px;height:${s}px;flex-shrink:0;padding:0;border-radius:${rad}px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;border:2px solid ${on ? OK.txt : BORDER2};background:${on ? OK.txt : SURFACE};color:#fff;font:900 ${fs}px/1 ${FONT};transition:all .12s ease">${on ? '✓' : ''}</button>`;
    }

    // Escolhe o layout conforme a largura (WEB = tabela · MOBILE = wizard).
    _isMobile() {
      const bp = parseInt(this.getAttribute('mobile-breakpoint'), 10) || 768;
      try { return window.matchMedia('(max-width:' + bp + 'px)').matches; } catch (e) { return false; }
    }
    _render() {
      if (this._isMobile()) this._renderMobile();
      else this._renderWeb();
    }
    // Re-renderiza automaticamente ao cruzar o breakpoint (web <-> mobile).
    _setupMedia() {
      this._teardownMedia();
      const bp = parseInt(this.getAttribute('mobile-breakpoint'), 10) || 768;
      try {
        const mql = window.matchMedia('(max-width:' + bp + 'px)');
        const self = this;
        const handler = function () { if (self.isConnected) self._render(); };
        if (mql.addEventListener) mql.addEventListener('change', handler);
        else if (mql.addListener) mql.addListener(handler);
        this._mql = mql; this._mqlHandler = handler;
      } catch (e) {}
    }
    _teardownMedia() {
      if (this._mql && this._mqlHandler) {
        if (this._mql.removeEventListener) this._mql.removeEventListener('change', this._mqlHandler);
        else if (this._mql.removeListener) this._mql.removeListener(this._mqlHandler);
      }
      this._mql = null; this._mqlHandler = null;
    }

    // ============================================================
    // LAYOUT WEB (tabela)
    // ============================================================
    _renderWeb() {
      const title = this.getAttribute('title') || '';
      const subtitle = this.getAttribute('subtitle') || '';
      const verifiedBy = this.getAttribute('verified-by') || '';
      const dateTime = this.getAttribute('date-time') || this._nowStr();   // preenchimento automático
      const confirmText = this.getAttribute('confirm-text') || 'Confirmar';
      const showValue = this.getAttribute('show-value') !== 'false';    // coluna "Valor" (default: mostra)
      const rows = (this.data || []).map((r) => this._normRow(r));
      this._normRows = rows;
      const hasAcao = rows.some((r) => r.acao);
      const hasObservacao = rows.some((r) => r.observacao != null);   // coluna opcional
      const colCount = 2 + (showValue ? 1 : 0) + (hasObservacao ? 1 : 0) + (hasAcao ? 1 : 0);

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
        const valorCell = showValue ? `<td style="border-bottom:1px solid ${BORDER};padding:11px 12px;vertical-align:middle;width:150px">${leituraCell}</td>` : '';
        const autoStatus = r.hasLimits && showValue;   // sem coluna Valor, o Check vira checkbox
        return `<tr>` +
          `<td style="border-bottom:1px solid ${BORDER};padding:11px 12px;vertical-align:middle;font-weight:700;color:${TEXT}">${r.caracteristica != null ? r.caracteristica : ''}${showValue ? this._limitsLabel(r) : ''}</td>` +
          valorCell +
          `<td style="border-bottom:1px solid ${BORDER};padding:11px 12px;vertical-align:middle;text-align:center;width:90px">` +
            (autoStatus
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
                  (showValue ? `<th style="${th};text-align:center">Valor</th>` : '') +
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
            // Mensagem de erro da validação (onValidate) — oculta por padrão.
            `<div data-role="validate-error" style="display:none;margin-top:14px;padding:9px 12px;border:1px solid rgba(140,26,26,.35);background:rgba(140,26,26,.08);color:#8C1A1A;border-radius:8px;font:600 12px/1.45 ${FONT}"></div>` +
            // Botões
            `<div style="display:flex;gap:10px;justify-content:flex-end;padding-top:16px;margin-top:16px;border-top:1px solid ${BORDER}">` +
              `<button type="button" data-role="cancel" style="font:600 13px/1.4 ${FONT};padding:9px 18px;border:1px solid ${BORDER};border-radius:8px;background:transparent;color:${TEXT2};cursor:pointer">Cancelar</button>` +
              `<button type="button" data-role="confirm" style="font:700 13px/1.4 ${FONT};padding:9px 22px;border:1px solid ${VERDE};border-radius:8px;background:${VERDE};color:#fff;cursor:pointer">${this._esc(confirmText)}</button>` +
            `</div>` +
          `</div>` +
        `</div>`;

      this._bind();
    }

    // ============================================================
    // LAYOUT MOBILE (wizard: um item por vez + progresso)
    // ============================================================
    _renderMobile() {
      const title = this.getAttribute('title') || '';
      const subtitle = this.getAttribute('subtitle') || '';
      const verifiedBy = this.getAttribute('verified-by') || '';
      const dateTime = this.getAttribute('date-time') || this._nowStr();
      this._dateTimeStr = dateTime;   // guarda p/ o confirm (não há input no mobile)
      const metaParts = [];
      if (verifiedBy) metaParts.push('👤 ' + this._esc(verifiedBy));
      if (dateTime) metaParts.push('🕒 ' + this._esc(dateTime));
      const metaLine = metaParts.length ? `<div style="font:600 11px/1.45 ${FONT};color:${TEXT3};margin-top:5px">${metaParts.join(' · ')}</div>` : '';
      const confirmText = this.getAttribute('confirm-text') || 'Concluir';
      const showValue = this.getAttribute('show-value') !== 'false';
      const rows = (this.data || []).map((r) => this._normRow(r));
      this._normRows = rows;
      this._step = 0;   // wizard: sempre começa no 1º item
      const hasObservacao = rows.some((r) => r.observacao != null);

      // ── Bloco de informações do cabeçalho ──
      const hi = this.headerInformation;
      let headerHtml = '';
      if (Array.isArray(hi) && hi.length) {
        const items = hi.map((x) => `<div><span style="color:${TEXT3}">${this._esc(x.label)}:</span> <span style="font-weight:700;color:${TEXT}">${this._esc(x.value)}</span></div>`).join('');
        headerHtml = `<div style="margin-top:14px;background:${SURFACE2};border:1px solid ${BORDER};border-left:4px solid ${VERDE};border-radius:8px;padding:12px 14px"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:6px 14px;font-size:12px">${items}</div></div>`;
      } else if (typeof hi === 'string' && hi) {
        headerHtml = `<div style="margin-top:14px;background:${SURFACE2};border:1px solid ${BORDER};border-left:4px solid ${VERDE};border-radius:8px;padding:12px 14px;font-size:12px;color:${TEXT2};line-height:1.5">${hi}</div>`;
      }

      const lbl = `display:block;font:900 9px/1.4 ${FONT};letter-spacing:.1em;text-transform:uppercase;color:${TEXT3};margin-bottom:5px`;
      const inpBase = `box-sizing:border-box;width:100%;font:15px/1.4 ${MONO};padding:10px 12px;border:1px solid ${BORDER};border-radius:8px;background:#fff;color:${TEXT}`;

      // ── Cards (um por item, só o atual visível) ──
      const cards = rows.length ? rows.map((r, i) => {
        const valInit = r.hasLimits ? this._sanitizeDecimal(r.valor != null ? r.valor : '') : (r.valor != null ? r.valor : '');
        const leitura = `<input data-role="leitura" data-idx="${i}" data-manual="false"${r.hasLimits ? ' data-decimal="true" inputmode="decimal"' : ''} type="text" value="${this._esc(valInit)}" style="${inpBase}">`;
        const autoStatus = r.hasLimits && showValue;
        const valorBlock = showValue ? `<div style="margin-top:12px"><span style="${lbl}">Valor</span>${leitura}</div>` : '';
        const checkControl = autoStatus
          ? `<span data-role="status" data-idx="${i}" title="Automático (limites informados)">${this._statusBadge(this._okOf(r.valor, r))}</span>`
          : this._checkBox(i, r.status, 34);
        const checkBlock = `<div style="margin-top:12px"><span style="${lbl}">${autoStatus ? 'Status' : 'Check'}</span><div style="box-sizing:border-box;width:100%;min-height:44px;padding:4px 12px;border:1px dashed ${BORDER};border-radius:8px;background:#fff;display:flex;align-items:center">${checkControl}</div></div>`;
        const obsBlock = (hasObservacao && r.observacao != null) ? `<div style="margin-top:12px"><span style="${lbl}">Observação</span><input data-role="obs" data-idx="${i}" type="text" value="${this._esc(r.observacao)}" style="${inpBase}"></div>` : '';
        const acaoBlock = r.acao ? `<div style="margin-top:12px"><button type="button" data-role="rowbtn" data-ghost="true" data-idx="${i}"${r.acao.title ? ` title="${this._esc(r.acao.title)}"` : ''} style="position:relative;overflow:hidden;width:100%;box-sizing:border-box;font:700 13px/1.1 ${FONT};padding:10px 14px;border:1px solid ${BORDER2};border-radius:8px;background:transparent;color:${TEXT2};cursor:pointer;transition:transform .1s ease,border-color .15s ease,color .15s ease">${this._esc(r.acao.text)}</button></div>` : '';
        const cardInner = `<div style="border:1px solid ${BORDER};border-radius:10px;padding:14px;background:${SURFACE}">` +
          `<div style="font-weight:800;color:${TEXT};font-size:14px;line-height:1.35">${r.caracteristica != null ? r.caracteristica : ''}${showValue ? this._limitsLabel(r) : ''}</div>` +
          valorBlock + checkBlock + obsBlock + acaoBlock +
        `</div>`;
        return `<div data-role="wiz-item" data-idx="${i}" style="display:${i === 0 ? 'block' : 'none'}">${cardInner}</div>`;
      }).join('') : `<div style="border:1px dashed ${BORDER};border-radius:10px;padding:18px;text-align:center;color:${TEXT3};font-size:13px">Nenhum item para verificar.</div>`;

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:20px 10px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${VERDE};border-radius:14px;padding:18px 16px;max-width:480px;width:100%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:${TEXT};margin:auto">` +
            // Cabeçalho + meta (verificado por / data)
            `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">` +
              `<div>` +
                (title ? `<div style="font-size:18px;font-weight:800;color:${VERDE_ESC};line-height:1.25">${title}</div>` : '') +
                (subtitle ? `<div style="font-size:12px;color:${TEXT2};margin-top:2px">${subtitle}</div>` : '') +
                metaLine +
              `</div>` +
              `<button type="button" data-role="x" title="Cancelar" style="background:none;border:1px solid ${BORDER};border-radius:6px;padding:6px 11px;cursor:pointer;font-size:14px;color:${TEXT2};line-height:1;flex-shrink:0">✕</button>` +
            `</div>` +
            headerHtml +
            // Subheader: progresso "X / N" + barra
            `<div style="margin-top:16px;text-align:center;font:900 13px/1 ${FONT};letter-spacing:.04em;color:${VERDE_ESC}"><span data-role="wiz-progress">${rows.length ? 1 : 0}</span> / ${rows.length}</div>` +
            `<div style="margin-top:8px;height:6px;border-radius:99px;background:${SURFACE2};overflow:hidden"><div data-role="wiz-bar" style="height:100%;width:${rows.length ? (100 / rows.length) : 0}%;background:${VERDE};transition:width .2s ease"></div></div>` +
            // Item atual
            `<div data-role="wiz-body" style="margin-top:14px;max-height:48vh;overflow-y:auto;-webkit-overflow-scrolling:touch">${cards}</div>` +
            // Erro de validação (onValidate)
            `<div data-role="validate-error" style="display:none;margin-top:14px;padding:9px 12px;border:1px solid rgba(140,26,26,.35);background:rgba(140,26,26,.08);color:#8C1A1A;border-radius:8px;font:600 12px/1.45 ${FONT}"></div>` +
            // Navegação: Anterior + Próximo (→ Concluir no último)
            `<div style="display:flex;gap:10px;padding-top:16px;margin-top:16px;border-top:1px solid ${BORDER}">` +
              `<button type="button" data-role="wiz-prev" style="flex:1;font:600 14px/1.4 ${FONT};padding:12px 16px;border:1px solid ${BORDER};border-radius:9px;background:transparent;color:${TEXT2};cursor:pointer">‹ Anterior</button>` +
              `<button type="button" data-role="wiz-next" style="flex:1.4;font:700 14px/1.4 ${FONT};padding:12px 16px;border:1px solid ${VERDE};border-radius:9px;background:${VERDE};color:#fff;cursor:pointer">Próximo ›</button>` +
            `</div>` +
          `</div>` +
        `</div>`;

      this._bind();
    }

    // Wizard: mostra só o item atual, atualiza progresso/barra e o rótulo do botão.
    _wizUpdate() {
      const n = (this._normRows || []).length;
      let step = this._step || 0;
      if (step < 0) step = 0;
      if (n && step > n - 1) step = n - 1;
      this._step = step;
      this.querySelectorAll('[data-role="wiz-item"]').forEach((el) => {
        el.style.display = (parseInt(el.getAttribute('data-idx'), 10) === step) ? 'block' : 'none';
      });
      const prog = this.querySelector('[data-role="wiz-progress"]'); if (prog) prog.textContent = String(n ? step + 1 : 0);
      const bar = this.querySelector('[data-role="wiz-bar"]'); if (bar) bar.style.width = (n ? ((step + 1) / n * 100) : 0) + '%';
      const prev = this.querySelector('[data-role="wiz-prev"]');
      if (prev) { const dis = step <= 0; prev.disabled = dis; prev.style.opacity = dis ? '.4' : '1'; prev.style.cursor = dis ? 'not-allowed' : 'pointer'; }
      const next = this.querySelector('[data-role="wiz-next"]');
      if (next) next.textContent = (step >= n - 1) ? (this.getAttribute('confirm-text') || 'Concluir') : 'Próximo ›';
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

      // Wizard (mobile): Anterior / Próximo (→ Concluir no último item).
      const wizPrev = this.querySelector('[data-role="wiz-prev"]');
      const wizNext = this.querySelector('[data-role="wiz-next"]');
      if (wizPrev) wizPrev.addEventListener('click', function () { if ((self._step || 0) > 0) { self._step--; self._wizUpdate(); } });
      if (wizNext) wizNext.addEventListener('click', function (ev) {
        const n = (self._normRows || []).length;
        if ((self._step || 0) >= n - 1) self._confirm(ev);
        else { self._step++; self._wizUpdate(); }
      });

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
        if (b.getAttribute('data-ghost') === 'true') {
          // Botão de ação no mobile (estilo ghost): hover fica verde (igual .btn-ghost).
          b.addEventListener('mouseenter', function () { b.style.borderColor = VERDE; b.style.color = VERDE; });
          b.addEventListener('mouseleave', function () { b.style.borderColor = BORDER2; b.style.color = TEXT2; b.style.transform = ''; });
        } else {
          b.addEventListener('mouseleave', release);
        }
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

      if (self.querySelector('[data-role="wiz-next"]')) self._wizUpdate();   // estado inicial do wizard (mobile)
    }

    _confirm(ev) {
      const val = (sel) => { const e = this.querySelector(sel); return e ? e.value : ''; };
      const showValue = this.getAttribute('show-value') !== 'false';
      const rows = (this._normRows || []).map((r, i) => {
        const obsEl = this._inputEl('obs', i);
        let status;
        if (r.hasLimits && showValue) {
          status = this._isOk(i);   // limites informados -> automático (não editável)
        } else {
          const chk = this.querySelector('[data-role="check"][data-idx="' + i + '"]');
          status = chk ? (chk.getAttribute('data-checked') === 'true') : r.status;
        }
        return {
          id: r.id,
          caracteristica: r.caracteristica,
          valor: showValue ? val('[data-role="leitura"][data-idx="' + i + '"]') : (r.valor != null ? r.valor : ''),
          isManualValue: showValue ? this._getManual(i) : false,
          status: status,
          observacao: obsEl ? obsEl.value : r.observacao
        };
      });
      const vbEl = this.querySelector('[data-role="verifiedBy"]');
      const dtEl = this.querySelector('[data-role="dateTime"]');
      const detail = {
        checklistId: this.getAttribute('checklist-id'),
        checklistCode: this.getAttribute('checklist-code'),
        verifiedBy: vbEl ? vbEl.value : (this.getAttribute('verified-by') || ''),
        dateTime: dtEl ? dtEl.value : (this._dateTimeStr || this.getAttribute('date-time') || this._nowStr()),
        rows: rows
      };

      // onValidate (opcional): recebe o MESMO detail do confirm e decide se pode
      // fechar. Deve retornar { valid:true|false, message } (ou true/false).
      // Se inválido, mantém o popup ABERTO e exibe a mensagem de erro.
      const v = this._runValidate(detail, ev);
      if (v.ran) {
        if (!v.valid) { this._showValidationError(v.message); return; }
        this._clearValidationError();
      }

      this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true, detail: detail }));
      if (typeof this._onConfirmFn === 'function') this._onConfirmFn(detail, ev);
      const h = this.getAttribute('onconfirm');
      if (h) new Function('event', 'detail', h).call(this, ev, detail);
      this.close();
    }

    // ── Validação (onValidate) ──
    _runValidate(detail, ev) {
      const hasFn = typeof this._onValidateFn === 'function';
      const attr = this.getAttribute('onvalidate');
      if (!hasFn && !attr) return { ran: false };
      let res;
      try {
        if (hasFn) res = this._onValidateFn(detail, ev);
        else res = new Function('event', 'detail', attr).call(this, ev, detail);
      } catch (e) {
        return { ran: true, valid: false, message: 'Erro na validação: ' + (e && e.message ? e.message : e) };
      }
      const n = this._normalizeValidation(res);
      return { ran: true, valid: n.valid, message: n.message };
    }

    // Aceita: true/false | [bool, msg] | { valid|ok|success, message|msg|mensagem }.
    // undefined/null (implementou mas não retornou) -> considera válido (não trava).
    _normalizeValidation(res) {
      if (res === true) return { valid: true, message: '' };
      if (res === false) return { valid: false, message: '' };
      if (Array.isArray(res)) return { valid: !!res[0], message: res[1] || '' };
      if (res && typeof res === 'object') {
        const valid = (res.valid != null) ? res.valid : ((res.ok != null) ? res.ok : res.success);
        return { valid: !!valid, message: res.message || res.msg || res.mensagem || '' };
      }
      return { valid: true, message: '' };
    }

    _showValidationError(msg) {
      const el = this.querySelector('[data-role="validate-error"]');
      if (!el) return;
      el.textContent = msg || 'Não foi possível confirmar. Verifique os dados do checklist.';
      el.style.display = 'block';
    }
    _clearValidationError() {
      const el = this.querySelector('[data-role="validate-error"]');
      if (el) { el.style.display = 'none'; el.textContent = ''; }
    }
  }

  customElements.define('granado-checklist-popup', GranadoChecklistPopup);
  window.GranadoChecklistPopup = GranadoChecklistPopup;
}
