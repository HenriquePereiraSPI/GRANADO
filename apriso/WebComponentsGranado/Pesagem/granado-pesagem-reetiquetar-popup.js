/* ============================================================
   <granado-pesagem-reetiquetar-popup>
   Popup (overlay modal) de REENTIQUETAGEM de saldo — referência ao
   popup "Reentiquetar Material" da Pesagem > Devolução de MP ao
   Estoque. Cabeçalho com dados do material + drill-down Sala →
   Balança + Quantidade Pesada (lida da balança pelo 📡 ou "Peso
   manual" com Tara → Peso Líquido). Segue o padrão dos componentes
   <granado-box-popup> / <granado-zpl-popup>, com layouts WEB e MOBILE.

   NÃO chama API — devolve o resultado por evento; quem chama
   (GRD_API_JDE_CancelAndGenerateNewLabel) é a tela.

   ── API estática
     GranadoPesagemReetiquetarPopup.show({
        header, salas, confirmText, closeOnBackdrop, onConfirm, onReadScale
     })

   ── show({ ... })
     header  - { material, lote, etiqueta, saldo }   (cabeçalho dourado)
     salas   - [ { id, nome, resourceName, bals:[ { id, cap, sug } ] } ]
     confirmText     - texto do botão (default "✓ Concluir")
     closeOnBackdrop - true fecha ao clicar fora (default: NÃO fecha)
     onReadScale(ctx)- (opcional) 📡 ler peso: ctx = { balancaId, salaId, setValue(v) }
     onConfirm(d)    - clicou Concluir. d = { salaId, salaNome, salaResourceName,
                       balancaId, quantidadePesada, tara, pesoLiquido, manual }

   ── Atributos
     mobile-breakpoint - largura (px) p/ trocar p/ o layout MOBILE. Default 768.
     close-on-backdrop - "true" fecha ao clicar fora. Default: NÃO fecha.
     confirm-text      - texto do botão confirmar. Default "✓ Concluir".
     open              - "false" inicia oculto.

   ── Propriedades / métodos JS
     el.header / el.salas          -> ler/setar dados
     el.confirmText                -> espelha o atributo confirm-text
     el.onConfirm / el.onReadScale -> ler/setar callbacks
     el.setPeso(v)                 -> preenche o campo Quantidade Pesada
     el.open() / el.close()

   ── Eventos (CustomEvent, bubbles)
     "confirm"    -> detail { salaId, salaNome, salaResourceName, balancaId,
                     quantidadePesada, tara, pesoLiquido, manual }
     "read-scale" -> detail { balancaId, salaId, setValue(v) }   (clique no 📡)
     "close"      -> fechado (Cancelar, ✕, backdrop, ou após Concluir)

   ── Exemplo
   <script src="[AprisoScripts]/WebComponentsGranado/Pesagem/granado-pesagem-reetiquetar-popup.js"></script>
   <script>
     GranadoPesagemReetiquetarPopup.show({
       header: { material: 'Fragância Rosa', lote: 'FRA-2026-04',
                 etiqueta: 'ETQ-2026-0421', saldo: '0,498 kg' },
       salas: [
         { id: 'SALA-A', nome: 'Sala A', resourceName: '100000020',
           bals: [ { id: 'BAL-01', cap: '600 kg', sug: true }, { id: 'BAL-02', cap: '100 kg' } ] },
         { id: 'SALA-C', nome: 'Sala C', resourceName: '100000022',
           bals: [ { id: 'BAL-05', cap: '30 kg' } ] }
       ],
       onConfirm: function (d) { console.log(d.salaResourceName, d.pesoLiquido); }
     });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-pesagem-reetiquetar-popup')) {
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const SURFACE    = '#FDFAF1';
  const SURFACE2   = '#F4EED9';
  const BORDER     = '#D6CDA4';
  const OURO       = '#9A7520';
  const OURO_DIM   = '#F1E4BC';
  const OURO_CLARO = '#E3CE94';
  const VERDE      = '#1C5C31';
  const VERDE_ESC  = '#103E20';
  const VERDE_DIM  = '#E4F0E8';
  const TEXT       = '#1A1A1A';
  const TEXT2      = '#5A6B5E';
  const TEXT3      = '#8A8575';
  const PER        = '#B23B3B';
  const OK_B       = '#9FCBA9';
  const FONT       = "'Poppins','DejaVu Sans',Arial,sans-serif";
  const FONT_M     = "'DM Mono','DejaVu Sans Mono',Consolas,monospace";
  const CONFIRM_TXT = '✓ Concluir';

  const esc  = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const numBR = (v) => { const n = parseFloat(String(v == null ? '' : v).replace(',', '.')); return isNaN(n) ? null : n; };
  const fmt3 = (n) => n.toFixed(3).replace('.', ',');

  class GranadoPesagemReetiquetarPopup extends HTMLElement {

    static get observedAttributes() { return ['mobile-breakpoint', 'close-on-backdrop', 'confirm-text', 'open']; }

    static show(opts) {
      opts = opts || {};
      const el = document.createElement('granado-pesagem-reetiquetar-popup');
      el._header = opts.header || {};
      el._salas  = opts.salas || [];
      if (opts.confirmText != null) el.setAttribute('confirm-text', String(opts.confirmText));
      if (typeof opts.onConfirm   === 'function') el._onConfirmFn   = opts.onConfirm;
      if (typeof opts.onReadScale === 'function') el._onReadScaleFn = opts.onReadScale;
      if (opts.closeOnBackdrop === true) el.setAttribute('close-on-backdrop', 'true');
      document.body.appendChild(el);
      return el;
    }

    connectedCallback() {
      if (!this._state) this._state = { view: 'salas', salaId: null, balId: null, mode: 'balanca' };
      if (this._pesoStr == null) this._pesoStr = '0,000';
      if (this._taraStr == null) this._taraStr = '0,000';
      this._setupMedia();
      this._render();
    }
    disconnectedCallback() { this._teardownMedia(); }

    attributeChangedCallback(name) {
      if (name === 'mobile-breakpoint' && this.isConnected) this._setupMedia();
      if (name === 'open') { this.style.display = this.getAttribute('open') === 'false' ? 'none' : ''; }
      if (this.isConnected && this._state) this._render();
    }

    // ---------- Propriedades ----------
    get header() { return this._header || {}; }
    set header(v) { this._header = v || {}; if (this.isConnected) this._render(); }
    get salas() { return this._salas || []; }
    set salas(v) { this._salas = v || []; if (this.isConnected) this._render(); }
    // Espelha o atributo confirm-text (fonte da verdade), como nos demais popups.
    get confirmText() { return this.getAttribute('confirm-text') || CONFIRM_TXT; }
    set confirmText(v) {
      if (v == null) this.removeAttribute('confirm-text');
      else this.setAttribute('confirm-text', String(v));
    }
    get onConfirm() { return this._onConfirmFn || null; }
    set onConfirm(fn) { this._onConfirmFn = (typeof fn === 'function') ? fn : null; }
    get onReadScale() { return this._onReadScaleFn || null; }
    set onReadScale(fn) { this._onReadScaleFn = (typeof fn === 'function') ? fn : null; }

    // ---------- API pública ----------
    open() { this.removeAttribute('open'); this.style.display = ''; if (this.isConnected) this._render(); }
    close() {
      this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
      this.remove();
    }
    setPeso(v) {
      // peso chegou -> volta o botão 📡 (sai do "carregando" ⏳)
      if (this._pullBtn) { this._pullBtn.disabled = false; this._pullBtn.innerHTML = '📡'; }
      if (this._inp) { this._inp.value = (v == null ? '' : String(v)); this._pesoStr = this._inp.value; this._recalcLiq(); }
    }

    // ---------- Responsividade (padrão box/zpl) ----------
    _isMobile() {
      const bp = parseInt(this.getAttribute('mobile-breakpoint'), 10) || 768;
      try { return window.matchMedia('(max-width:' + bp + 'px)').matches; } catch (e) { return false; }
    }
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
      } catch (e) { /* noop */ }
    }
    _teardownMedia() {
      if (this._mql && this._mqlHandler) {
        if (this._mql.removeEventListener) this._mql.removeEventListener('change', this._mqlHandler);
        else if (this._mql.removeListener) this._mql.removeListener(this._mqlHandler);
      }
      this._mql = null; this._mqlHandler = null;
    }

    // ---------- Render ----------
    _render() {
      // preserva o que já foi digitado (troca de breakpoint / re-render)
      if (this._inp) this._pesoStr = this._inp.value;
      if (this._taraInp) this._taraStr = this._taraInp.value;

      const m = this._isMobile();
      const h = this._header || {};
      const boxCss =
        'background:' + SURFACE + ';border:1px solid ' + BORDER + ';border-top:4px solid ' + OURO +
        ';border-radius:12px;padding:' + (m ? '18px 16px' : '22px 26px') + ';max-width:' + (m ? '440px' : '560px') +
        ';width:' + (m ? '100%' : '94%') + ';box-shadow:0 18px 50px rgba(15,51,25,.30);margin:auto;box-sizing:border-box;font:14px/1.5 ' + FONT + ';color:' + TEXT;

      const inpCss =
        'flex:1;min-width:0;box-sizing:border-box;font:800 16px/1.2 ' + FONT_M + ';padding:10px 12px;border:1px solid ' + BORDER + ';border-radius:8px;color:' + VERDE_ESC;

      this.innerHTML =
        '<div data-role="overlay" style="position:fixed;inset:0;background:' + OVERLAY_BG + ';z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:' + (m ? '20px 10px' : '40px 12px') + ';backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">' +
          '<div data-role="box" style="' + boxCss + '">' +

            // Header
            '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:' + (m ? '10px' : '4px') + '">' +
              '<div style="display:flex;align-items:center;gap:9px">' +
                '<span style="font-size:20px">🏷</span>' +
                '<div style="font:800 ' + (m ? '16px' : '17px') + '/1.2 ' + FONT + ';color:' + VERDE_ESC + '">Reentiquetar Material</div>' +
              '</div>' +
              '<button type="button" data-role="x" title="Cancelar" style="background:none;border:1px solid ' + BORDER + ';border-radius:6px;padding:' + (m ? '6px 11px' : '5px 10px') + ';cursor:pointer;font-size:13px;color:' + TEXT2 + ';line-height:1;flex-shrink:0">✕</button>' +
            '</div>' +

            // Cabeçalho dourado
            '<div style="background:' + OURO_DIM + ';border:1px solid ' + OURO_CLARO + ';border-radius:8px;padding:12px 14px;margin:12px 0 18px;display:flex;flex-wrap:wrap;gap:7px ' + (m ? '16px' : '22px') + '">' +
              this._kv('Material', h.material) + this._kv('Lote', h.lote) + this._kv('Etiqueta', h.etiqueta) + this._kv('Saldo a devolver', h.saldo) +
            '</div>' +

            // Label da área + toggle Peso manual
            '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:6px">' +
              '<label data-role="grp-label" style="font:900 9px/1.4 ' + FONT + ';letter-spacing:.08em;text-transform:uppercase;color:' + TEXT3 + '">Sala</label>' +
              '<label data-role="mode-toggle" style="display:inline-flex;align-items:center;gap:7px;cursor:pointer;user-select:none">' +
                '<span style="font:800 10px/1 ' + FONT + ';color:' + TEXT2 + '">Peso manual</span>' +
                '<span data-role="sw-track" style="position:relative;display:inline-block;width:40px;height:22px;border-radius:11px;background:' + BORDER + ';transition:background .15s"><span data-role="sw-knob" style="position:absolute;top:2px;left:2px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.3);transition:left .15s"></span></span>' +
              '</label>' +
            '</div>' +

            // Grid drill-down (salas / balanças)
            '<div data-role="grp-grid" style="margin-bottom:18px"></div>' +

            // Quantidade pesada (+ tara/líquido no modo manual)
            '<div data-role="qtd-wrap" style="display:flex;gap:14px;flex-wrap:wrap;align-items:flex-end;border-radius:8px">' +
              '<div style="flex:1;min-width:170px">' +
                '<label style="display:block;font:900 9px/1.4 ' + FONT + ';letter-spacing:.08em;text-transform:uppercase;color:' + TEXT3 + ';margin-bottom:6px">Quantidade Pesada</label>' +
                '<div style="display:flex;align-items:center;gap:8px">' +
                  '<input data-role="qtd" inputmode="decimal" placeholder="0,000" style="' + inpCss + ';background:' + SURFACE2 + '">' +
                  '<button data-role="pull" type="button" title="Ler peso da balança" style="flex-shrink:0;width:42px;height:42px;display:inline-flex;align-items:center;justify-content:center;border:1px solid ' + VERDE + ';border-radius:8px;background:' + VERDE_DIM + ';color:' + VERDE + ';cursor:pointer;font-size:16px;transition:filter .15s">📡</button>' +
                  '<span style="font-size:12px;color:' + TEXT3 + '">kg</span>' +
                '</div>' +
              '</div>' +
              '<div data-role="tara-col" style="flex:1;min-width:120px;display:none">' +
                '<label style="display:block;font:900 9px/1.4 ' + FONT + ';letter-spacing:.08em;text-transform:uppercase;color:' + TEXT3 + ';margin-bottom:6px">Tara</label>' +
                '<div style="display:flex;align-items:center;gap:8px">' +
                  '<input data-role="tara" inputmode="decimal" placeholder="0,000" style="' + inpCss + ';background:#fff">' +
                  '<span style="font-size:12px;color:' + TEXT3 + '">kg</span>' +
                '</div>' +
              '</div>' +
              '<div data-role="liq-col" style="flex:1;min-width:120px;display:none">' +
                '<label style="display:block;font:900 9px/1.4 ' + FONT + ';letter-spacing:.08em;text-transform:uppercase;color:' + VERDE_ESC + ';margin-bottom:6px">Peso Líquido</label>' +
                '<div data-role="liq" style="font:800 16px/1.2 ' + FONT_M + ';padding:11px 12px;background:' + VERDE_DIM + ';border:1px solid ' + OK_B + ';border-radius:8px;color:' + VERDE_ESC + ';text-align:center">— kg</div>' +
              '</div>' +
            '</div>' +

            // Rodapé
            (m
              ? '<div style="display:flex;gap:10px;margin-top:18px;padding-top:16px;border-top:1px solid ' + BORDER + '">' +
                  '<button data-role="cancel" type="button" style="flex:1;font:600 14px/1.4 ' + FONT + ';padding:12px 16px;border:1px solid ' + BORDER + ';border-radius:9px;background:transparent;color:' + TEXT2 + ';cursor:pointer">Cancelar</button>' +
                  '<button data-role="confirm" type="button" style="flex:1.4;font:800 14px/1.4 ' + FONT + ';padding:12px 16px;border:1px solid ' + VERDE_ESC + ';border-radius:9px;background:' + VERDE + ';color:#fff;cursor:pointer">' + esc(this.confirmText) + '</button>' +
                '</div>'
              : '<div style="display:flex;justify-content:flex-end;gap:10px;margin-top:20px;padding-top:16px;border-top:1px solid ' + BORDER + '">' +
                  '<button data-role="cancel" type="button" style="font:600 13px/1.4 ' + FONT + ';padding:9px 18px;border:1px solid ' + BORDER + ';border-radius:8px;background:transparent;color:' + TEXT2 + ';cursor:pointer">Cancelar</button>' +
                  '<button data-role="confirm" type="button" style="font:800 13px/1.4 ' + FONT + ';padding:9px 22px;border:1px solid ' + VERDE_ESC + ';border-radius:8px;background:' + VERDE + ';color:#fff;cursor:pointer">' + esc(this.confirmText) + '</button>' +
                '</div>') +

          '</div>' +
        '</div>';

      // refs
      const q = (r) => this.querySelector('[data-role="' + r + '"]');
      this._overlay = q('overlay');
      this._grpLabel = q('grp-label');
      this._grpGrid = q('grp-grid');
      this._swTrack = q('sw-track');
      this._swKnob  = q('sw-knob');
      this._qtdWrap = q('qtd-wrap');
      this._inp     = q('qtd');
      this._pullBtn = q('pull');
      this._taraCol = q('tara-col');
      this._liqCol  = q('liq-col');
      this._taraInp = q('tara');
      this._liqDisp = q('liq');

      // restaura valores digitados
      this._inp.value = this._pesoStr;
      this._taraInp.value = this._taraStr;

      this._wire();
      this._renderDrill();
      this._applyMode();
    }

    _wire() {
      const self = this;
      this.querySelector('[data-role="mode-toggle"]').addEventListener('click', function () {
        if (self._state.mode === 'balanca') {
          // Só pode ir p/ manual depois de escolher a Sala E a Balança.
          if (!self._manualPermitido()) {
            self._alerta('Selecione a sala e a balança antes de usar o peso manual.');
            return;
          }
          self._state.mode = 'manual';
        } else {
          self._state.mode = 'balanca';
        }
        // Troca de modo limpa os valores -> nada carrega de um modo pro outro
        // (no modo balança o peso só entra pelo 📡; no manual, digitado do zero).
        self._inp.value = '';
        self._taraInp.value = '';
        self._pesoStr = ''; self._taraStr = '';
        self._applyMode();
      });
      this._inp.addEventListener('input', function () { self._pesoStr = self._inp.value; self._recalcLiq(); });
      this._taraInp.addEventListener('input', function () { self._taraStr = self._taraInp.value; self._recalcLiq(); });
      this._pullBtn.addEventListener('click', function () { self._pull(); });
      this.querySelector('[data-role="cancel"]').addEventListener('click', function () { self.close(); });
      this.querySelector('[data-role="x"]').addEventListener('click', function () { self.close(); });
      this.querySelector('[data-role="confirm"]').addEventListener('click', function () { self._confirm(); });
      this._overlay.addEventListener('click', function (e) {
        if (e.target === self._overlay && self.getAttribute('close-on-backdrop') === 'true') self.close();
      });
    }

    _kv(label, valor) {
      return '<div style="font-size:11px"><span style="color:' + TEXT3 + ';font-weight:600">' + esc(label) + ':</span> ' +
             '<strong style="color:' + VERDE_ESC + '">' + esc(valor || '—') + '</strong></div>';
    }

    _salaCard(s) {
      return '<div data-sala="' + esc(s.id) + '" style="cursor:pointer;flex:0 0 auto;width:96px;border:2px solid ' + BORDER + ';border-radius:8px;padding:9px 6px;background:' + SURFACE2 + ';text-align:center;transition:all .15s">' +
        '<div style="font-size:20px;line-height:1">🏭</div>' +
        '<div style="font:800 11px/1.15 ' + FONT + ';color:' + VERDE_ESC + ';margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(s.nome) + '</div>' +
        '<div style="font-family:' + FONT_M + ';font-size:8px;color:' + TEXT3 + ';margin-top:2px">' + (s.bals || []).length + ' bal ›</div>' +
      '</div>';
    }

    _balCard(b) {
      const on = this._state.balId === b.id;
      return '<div data-bal="' + esc(b.id) + '" style="cursor:pointer;flex:0 0 auto;width:96px;border:2px solid ' + (on ? VERDE : BORDER) + ';border-radius:8px;padding:9px 6px;background:' + (on ? VERDE_DIM : SURFACE2) + ';text-align:center;transition:all .15s">' +
        '<div style="font-size:20px;line-height:1">⚖️</div>' +
        '<div style="font-family:' + FONT_M + ';font-size:11px;font-weight:800;color:' + VERDE + ';margin-top:3px">' + esc(b.id) + '</div>' +
        '<div style="font-size:8px;color:' + TEXT3 + ';margin-top:1px;white-space:nowrap">Cap ' + esc(b.cap) + '</div>' +
        (b.sug ? '<div style="margin-top:3px;font:900 8px/1.1 ' + FONT + ';color:' + VERDE + '">⭐</div>' : '<div style="height:12px"></div>') +
      '</div>';
    }

    _achaSala(id) { for (let i = 0; i < this._salas.length; i++) { if (this._salas[i].id === id) return this._salas[i]; } return null; }

    _renderDrill() {
      const self = this, st = this._state;
      if (this._grpLabel) this._grpLabel.textContent = st.view === 'bals' ? 'Balança' : 'Sala';
      let html = '';
      if (st.view === 'bals') {
        const sala = this._achaSala(st.salaId);
        if (!sala) { st.view = 'salas'; this._renderDrill(); return; }
        html =
          '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">' +
            '<button type="button" data-role="drill-back" style="display:inline-flex;align-items:center;gap:4px;font:700 12px/1 ' + FONT + ';padding:6px 11px;border:1px solid ' + BORDER + ';border-radius:8px;background:' + SURFACE2 + ';color:' + VERDE_ESC + ';cursor:pointer">‹ Voltar</button>' +
            '<span style="font:800 12px/1.2 ' + FONT + ';color:' + VERDE_ESC + '">🏭 ' + esc(sala.nome) + '</span>' +
          '</div>' +
          '<div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch">' + (sala.bals || []).map((b) => self._balCard(b)).join('') + '</div>';
      } else {
        html = '<div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch">' + this._salas.map((s) => self._salaCard(s)).join('') + '</div>';
      }
      this._grpGrid.innerHTML = html;

      if (st.view === 'bals') {
        const back = this._grpGrid.querySelector('[data-role="drill-back"]');
        if (back) back.addEventListener('click', function () {
          // Voltar limpa a seleção -> obriga escolher sala/balança de novo
          st.view = 'salas'; st.salaId = null; st.balId = null;
          self._renderDrill();
        });
        this._grpGrid.querySelectorAll('[data-bal]').forEach(function (card) {
          card.addEventListener('click', function () {
            st.balId = card.getAttribute('data-bal');
            self._grpGrid.querySelectorAll('[data-bal]').forEach(function (cc) {
              const on = cc === card;
              cc.style.border = '2px solid ' + (on ? VERDE : BORDER);
              cc.style.background = on ? VERDE_DIM : SURFACE2;
            });
            self._updateToggleLock();
          });
        });
      } else {
        this._grpGrid.querySelectorAll('[data-sala]').forEach(function (card) {
          card.addEventListener('click', function () {
            st.salaId = card.getAttribute('data-sala');
            st.balId = null;
            st.view = 'bals';
            self._renderDrill();
          });
        });
      }
      this._updateToggleLock();
    }

    _manualPermitido() { return !!(this._state.salaId && this._state.balId); }

    _updateToggleLock() {
      const lbl = this.querySelector('[data-role="mode-toggle"]');
      if (!lbl) return;
      const allow = this._manualPermitido() || this._state.mode === 'manual';
      lbl.style.opacity = allow ? '1' : '.45';
      lbl.style.cursor = allow ? 'pointer' : 'not-allowed';
    }

    _applyMode() {
      const balOn = this._state.mode === 'balanca';
      this._swTrack.style.background = balOn ? BORDER : VERDE;
      this._swKnob.style.left = balOn ? '2px' : '20px';
      this._pullBtn.style.display = balOn ? 'inline-flex' : 'none';
      this._inp.readOnly = balOn;
      this._inp.style.background = balOn ? SURFACE2 : '#fff';
      this._grpGrid.style.opacity = balOn ? '1' : '.45';
      this._grpGrid.style.pointerEvents = balOn ? '' : 'none';
      this._taraCol.style.display = balOn ? 'none' : '';
      this._liqCol.style.display = balOn ? 'none' : '';
      this._qtdWrap.style.padding = balOn ? '0' : '16px 18px';
      this._qtdWrap.style.border = balOn ? '0' : '2px dashed ' + OURO;
      this._qtdWrap.style.background = balOn ? 'transparent' : OURO_DIM;
      if (!balOn) { this._recalcLiq(); try { this._inp.focus(); } catch (e) {} }
      this._updateToggleLock();
    }

    _recalcLiq() {
      const b = numBR(this._inp.value);
      const traw = (this._taraInp.value || '').trim();
      const t = traw === '' ? 0 : numBR(traw);   // Tara vazia = 0 (só o peso vira líquido)
      if (b == null || t == null) { this._liqDisp.textContent = '— kg'; this._liqDisp.style.color = VERDE_ESC; return; }
      const liq = b - t;
      if (liq < 0) { this._liqDisp.textContent = '⚠ neg.'; this._liqDisp.style.color = PER; return; }
      this._liqDisp.style.color = VERDE_ESC;
      this._liqDisp.textContent = fmt3(liq) + ' kg';
    }

    _pull() {
      if (this._pullBtn.disabled) return;
      // Não dá pra ler o peso sem uma balança selecionada.
      if (!this._state.salaId || !this._state.balId) {
        this._alerta('Selecione a sala e a balança antes de ler o peso.');
        return;
      }
      // estado "carregando" enquanto busca o peso da balança (volta no setPeso)
      this._pullBtn.disabled = true;
      this._pullBtn.innerHTML = '⏳';
      const self = this;
      const ctx = {
        balancaId: this._state.balId,
        salaId: this._state.salaId,
        setValue: function (v) { self.setPeso(v); }
      };
      this.dispatchEvent(new CustomEvent('read-scale', { bubbles: true, composed: true, detail: ctx }));
      if (this._onReadScaleFn) this._onReadScaleFn(ctx);
    }

    _confirm() {
      const st = this._state;
      if (!st.salaId) { this._alerta('Selecione a sala.'); return; }
      if (st.mode === 'balanca' && !st.balId) { this._alerta('Selecione a balança.'); return; }
      const bruto = numBR(this._inp.value);
      if (bruto == null) { this._alerta('Informe a quantidade pesada.'); return; }

      let tara = 0, liquido = bruto;
      if (st.mode === 'manual') {
        const traw = (this._taraInp.value || '').trim();
        tara = traw === '' ? 0 : numBR(traw);   // Tara vazia = 0
        if (tara == null) { this._alerta('Tara inválida — use apenas números.'); try { this._taraInp.focus(); } catch (e) {} return; }
        liquido = bruto - tara;
        if (liquido <= 0) { this._alerta('Peso líquido inválido — verifique Quantidade Pesada e Tara.'); return; }
      }

      const sala = this._achaSala(st.salaId) || {};
      const detail = {
        salaId: st.salaId,
        salaNome: sala.nome || '',
        salaResourceName: sala.resourceName || '',
        balancaId: st.balId,
        quantidadePesada: bruto,
        tara: tara,
        pesoLiquido: liquido,
        manual: st.mode === 'manual'
      };
      this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true, detail: detail }));
      if (this._onConfirmFn) this._onConfirmFn(detail);
      this.close();
    }

    _alerta(msg) {
      if (window.GranadoMessagePopup && GranadoMessagePopup.warning) GranadoMessagePopup.warning(msg, { title: 'Atenção' });
      else alert('⚠ ' + msg);
    }
  }

  customElements.define('granado-pesagem-reetiquetar-popup', GranadoPesagemReetiquetarPopup);
  window.GranadoPesagemReetiquetarPopup = GranadoPesagemReetiquetarPopup;
}
