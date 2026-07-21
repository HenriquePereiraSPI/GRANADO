/* ============================================================
   <granado-box-popup>
   Popup (modal) de ESCOLHA — referência ao popup "Registro de
   Checklist · Escolha a Sala" da Pesagem. Mostra um grid de cards
   (ex.: salas); ao escolher um card que tenha "equipamentos",
   abre um dropdown para escolher um deles. No Confirmar devolve o
   card selecionado + o equipamento escolhido (se houver).

   ── Atributos / propriedades
     title        - título do popup
     subtitle     - subtítulo (linha abaixo do título)
     data         - array de itens (em JS use a propriedade .data).
                    Cada item (só "id" é usado como chave — todos os
                    demais campos são OPCIONAIS):
                      { id, icon, title, subtitle, status, metadata,
                        equipamentos: [ { id, descricao }, ... ] }
                        id           - identificador do card (obrigatório)
                        icon         - emoji/ícone exibido no topo do card
                        title        - título do card
                        subtitle     - subtítulo (texto auxiliar)
                        status       - texto do badge (canto do card)
                        metadata     - qualquer valor extra (volta no confirm)
                        equipamentos - equipamentos ligados ao card. Se houver,
                                       aparece o dropdown. Cada equipamento:
                                         { id, descricao }
     confirm-text - texto do botão confirmar (default "Confirmar")
     equip-label  - rótulo do dropdown (default "Equipamentos")
     open         - "false" inicia oculto
     close-on-backdrop - "true" fecha ao clicar fora (default: NÃO fecha)
     onConfirm    - (opcional) string JS executada ao confirmar (event, detail)

   ── Eventos (CustomEvent, bubbles)
     "confirm" -> detail {
                    index, id, icon, title, subtitle, status, metadata,
                    equipamentos,     // array do item (ou undefined)
                    equipamento       // { id, descricao } escolhido, ou null
                                      //   (null = escolheu a própria "sala")
                  }
   (Cancelar, o X e — se habilitado — o clique fora apenas fecham, sem evento.)

   ── API estática
     GranadoBoxPopup.show({ title, subtitle, data, confirmText,
                            equipLabel, closeOnBackdrop, onConfirm })

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-box-popup.js"></script>
   <script>
     GranadoBoxPopup.show({
       title: '🧪 Registro de Checklist · Escolha a Sala',
       subtitle: '⚖️ Verificação Diária de Balança',
       data: [
         { id: 'A', icon: '🅰️', title: 'Sala A', subtitle: '4 balanças', status: 'Disponível',
           equipamentos: [ { id: 'BAL-01', descricao: 'Toledo 01' }, { id: 'BAL-02', descricao: 'Toledo 02' } ],
           metadata: { setor: 'MP' } },
         { id: 'C', icon: '🇨', title: 'Sala C', subtitle: '2 balanças', status: 'Disponível' }
       ],
       onConfirm: function (d) { console.log(d.id, d.equipamento); }
     });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-box-popup')) {
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const SURFACE = '#FDFAF1';
  const SURFACE2 = '#F4EED9';
  const BORDER = '#D6CDA4';
  const VERDE = '#1F7A3D';
  const VERDE_ESC = '#0F3319';
  const VERDE_DIM = '#E4F0E8';
  const OURO = '#9A7520';
  const TEXT = '#1A1A1A';
  const TEXT2 = '#555555';
  const TEXT3 = '#8A8575';
  const STATUS = { txt: '#1C7A38', bg: '#D2E8D7', bd: '#98C8A8' };
  const FONT = "'Poppins',sans-serif";
  const MONO = "'Arial',Helvetica,sans-serif";
  const SCROLL_THUMB = 'rgba(191,177,114,.55)';   // polegar do scroll (ouro discreto)
  const SALA_VALUE = '__sala__';   // valor do dropdown que representa a própria "sala"

  class GranadoBoxPopup extends HTMLElement {
    static get observedAttributes() { return ['title', 'subtitle', 'data', 'confirm-text', 'equip-label', 'close-on-backdrop', 'open']; }

    // ------------------------------------------------------------
    // API estática
    // ------------------------------------------------------------
    static show(opts) {
      opts = opts || {};
      const el = document.createElement('granado-box-popup');
      if (opts.title != null) el.setAttribute('title', String(opts.title));
      if (opts.subtitle != null) el.setAttribute('subtitle', String(opts.subtitle));
      if (opts.confirmText != null) el.setAttribute('confirm-text', String(opts.confirmText));
      if (opts.equipLabel != null) el.setAttribute('equip-label', String(opts.equipLabel));
      if (opts.closeOnBackdrop != null) el.setAttribute('close-on-backdrop', opts.closeOnBackdrop ? 'true' : 'false');
      if (opts.onConfirm != null && typeof opts.onConfirm !== 'function') el.setAttribute('onConfirm', String(opts.onConfirm));
      el._autoRemove = true;
      if (typeof opts.onConfirm === 'function') el._onConfirmFn = opts.onConfirm;
      document.body.appendChild(el);
      if (opts.data != null) el.data = opts.data;   // mantém o array (metadata/equipamentos)
      el.open();
      return el;
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      if (Object.prototype.hasOwnProperty.call(this, 'data')) { const v = this.data; delete this.data; this.data = v; }
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
    }
    attributeChangedCallback(name) {
      if (name === 'data') this._dataArr = null;
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
      this._selIdx = null;
      if (this.isConnected) this._render();
    }

    get closeOnBackdrop() { return this.getAttribute('close-on-backdrop') === 'true'; }
    set closeOnBackdrop(v) { this.setAttribute('close-on-backdrop', v ? 'true' : 'false'); }
    get onConfirm() { return this._onConfirmFn || null; }
    set onConfirm(fn) { this._onConfirmFn = (typeof fn === 'function') ? fn : null; }

    open() { this.removeAttribute('open'); this.style.display = ''; this._selIdx = null; if (this.isConnected) this._render(); }
    close() { this.style.display = 'none'; if (this._autoRemove) this.remove(); }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _parseArr(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
    _has(v) { return v != null && String(v) !== ''; }
    _equipsOf(item) {
      const e = (item && (item.equipamentos || item.equipments)) || [];
      return Array.isArray(e) ? e : [];
    }
    _equipDesc(e) { return (e && (e.descricao || e.desc || e['descrição'])) || (e && e.id) || ''; }

    _render() {
      const title = this.getAttribute('title') || '';
      const subtitle = this.getAttribute('subtitle') || '';
      const confirmText = this.getAttribute('confirm-text') || 'Confirmar';
      const equipLabel = this.getAttribute('equip-label') || 'Equipamentos';
      const items = this.data || [];

      const cards = items.length
        ? items.map((it, i) => this._card(it || {}, i)).join('')
        : `<div style="grid-column:1/-1;border:1px dashed ${BORDER};border-radius:10px;padding:24px 16px;text-align:center;color:${TEXT3};font:12px/1.5 ${FONT}">Nenhuma opção para exibir.</div>`;

      const lbl = `font:900 9px/1.4 ${FONT};letter-spacing:.1em;text-transform:uppercase;color:${TEXT3};margin-bottom:5px;display:block`;
      const selStyle = `box-sizing:border-box;width:100%;font:12px/1.4 ${FONT};padding:8px 10px;border:1px solid ${BORDER};border-radius:6px;background:#fff;color:${TEXT}`;

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:40px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">` +
          `<div data-role="box" style="background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${OURO};border-radius:12px;padding:22px 24px;max-width:720px;width:96%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:${TEXT};margin:auto">` +
            // Cabeçalho
            `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:16px">` +
              `<div>` +
                (title ? `<div style="font-size:9px;font-weight:900;letter-spacing:.2em;text-transform:uppercase;color:${OURO}">${this._esc(title)}</div>` : '') +
                (subtitle ? `<div style="font-family:${FONT};font-size:18px;font-weight:700;color:${VERDE_ESC};margin-top:2px">${this._esc(subtitle)}</div>` : '') +
              `</div>` +
              `<button type="button" data-role="x" title="Cancelar" style="background:none;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font-size:13px;color:${TEXT2};line-height:1;flex-shrink:0">✕</button>` +
            `</div>` +
            // Grid de cards — rola (scroll fino) quando há muitas salas
            `<div data-role="grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;max-height:46vh;overflow-y:auto;padding:2px 6px 2px 2px;scrollbar-width:thin;scrollbar-color:${SCROLL_THUMB} transparent">${cards}</div>` +
            // Dropdown de equipamentos (aparece ao selecionar um card com equipamentos)
            `<div data-role="equip-wrap" style="display:none;margin-top:16px">` +
              `<label style="${lbl}">${this._esc(equipLabel)}</label>` +
              `<select data-role="equip" style="${selStyle}"></select>` +
            `</div>` +
            // Botões
            `<div style="display:flex;gap:10px;justify-content:flex-end;padding-top:14px;margin-top:16px;border-top:1px solid ${BORDER}">` +
              `<button type="button" data-role="cancel" style="font:600 13px/1.4 ${FONT};padding:9px 18px;border:1px solid ${BORDER};border-radius:8px;background:transparent;color:${TEXT2};cursor:pointer">Cancelar</button>` +
              `<button type="button" data-role="confirm" disabled style="font:700 13px/1.4 ${FONT};padding:9px 22px;border:1px solid ${VERDE};border-radius:8px;background:${VERDE};color:#fff;cursor:not-allowed;opacity:.5">${this._esc(confirmText)}</button>` +
            `</div>` +
          `</div>` +
        `</div>`;

      this._bind();
      // Re-aplica seleção se ainda válida (ex.: re-render por mudança de atributo)
      if (this._selIdx != null && items[this._selIdx]) this._selectCard(this._selIdx);
    }

    _card(it, i) {
      const icon = this._has(it.icon) ? `<div style="font-size:26px;margin-bottom:4px">${this._esc(it.icon)}</div>` : '';
      const title = this._has(it.title)
        ? `<div style="font-size:13px;font-weight:900;color:${TEXT};margin-bottom:2px">${this._esc(it.title)}</div>`
        : `<div style="font-size:13px;font-weight:900;color:${TEXT};margin-bottom:2px">${this._esc(it.id)}</div>`;
      const subtitle = this._has(it.subtitle) ? `<div style="font-family:${MONO};font-size:10px;color:${TEXT3}">${this._esc(it.subtitle)}</div>` : '';
      const status = this._has(it.status)
        ? `<div style="margin-top:6px"><span style="display:inline-block;padding:2px 8px;border-radius:9px;font:800 9px/1.4 ${FONT};color:${STATUS.txt};background:${STATUS.bg};border:1px solid ${STATUS.bd}">${this._esc(it.status)}</span></div>`
        : '';
      return `<div data-role="box-card" data-idx="${i}" style="cursor:pointer;border:2px solid ${BORDER};border-radius:10px;padding:14px 10px;background:${SURFACE2};text-align:center;transition:all .18s">${icon}${title}${subtitle}${status}</div>`;
    }

    _selectCard(idx) {
      this._selIdx = idx;
      const items = this.data || [];
      // Realce dos cards
      this.querySelectorAll('[data-role="box-card"]').forEach((el) => {
        const on = parseInt(el.getAttribute('data-idx'), 10) === idx;
        el.style.border = on ? `2px solid ${VERDE}` : `2px solid ${BORDER}`;
        el.style.background = on ? VERDE_DIM : SURFACE2;
      });
      // Dropdown de equipamentos
      const item = items[idx] || {};
      const equips = this._equipsOf(item);
      const wrap = this.querySelector('[data-role="equip-wrap"]');
      const sel = this.querySelector('[data-role="equip"]');
      if (sel) {
        if (equips.length) {
          const salaTxt = this._has(item.title) ? item.title : String(item.id);
          const opts = ['<option value="' + SALA_VALUE + '">' + this._esc(salaTxt) + '</option>']
            .concat(equips.map((e) => '<option value="' + this._esc(e.id) + '">' + this._esc(this._equipDesc(e)) + '</option>'));
          sel.innerHTML = opts.join('');
          if (wrap) wrap.style.display = 'block';
        } else {
          sel.innerHTML = '';
          if (wrap) wrap.style.display = 'none';
        }
      }
      // Habilita Confirmar
      const btn = this.querySelector('[data-role="confirm"]');
      if (btn) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; }
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
      if (overlay && box) overlay.addEventListener('mousedown', function (e) { if (e.target === overlay && self.closeOnBackdrop) self.close(); });

      this.querySelectorAll('[data-role="box-card"]').forEach(function (el) {
        el.addEventListener('click', function () { self._selectCard(parseInt(el.getAttribute('data-idx'), 10) || 0); });
      });

      if (confirm) confirm.addEventListener('click', function (ev) { self._confirm(ev); });
    }

    _confirm(ev) {
      if (this._selIdx == null) return;
      const items = this.data || [];
      const item = items[this._selIdx] || {};
      const equips = this._equipsOf(item);

      let equipamento = null;
      if (equips.length) {
        const sel = this.querySelector('[data-role="equip"]');
        const val = sel ? sel.value : SALA_VALUE;
        if (val !== SALA_VALUE) {
          for (let i = 0; i < equips.length; i++) { if (String(equips[i].id) === String(val)) { equipamento = equips[i]; break; } }
        }
      }

      const detail = {
        index: this._selIdx,
        id: item.id,
        icon: item.icon,
        title: item.title,
        subtitle: item.subtitle,
        status: item.status,
        metadata: item.metadata,
        equipamentos: item.equipamentos,
        equipamento: equipamento
      };

      this.dispatchEvent(new CustomEvent('confirm', { bubbles: true, composed: true, detail: detail }));
      if (typeof this._onConfirmFn === 'function') this._onConfirmFn(detail, ev);
      const h = this.getAttribute('onconfirm');
      if (h) new Function('event', 'detail', h).call(this, ev, detail);
      this.close();
    }
  }

  customElements.define('granado-box-popup', GranadoBoxPopup);
  window.GranadoBoxPopup = GranadoBoxPopup;
}
