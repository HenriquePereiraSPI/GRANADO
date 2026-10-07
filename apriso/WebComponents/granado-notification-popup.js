/* ============================================================
   <granado-notification-popup>
   Popup (modal) de NOTIFICAÇÕES no estilo Outlook: lista à esquerda
   (não lidas com bolinha + negrito) e leitura da notificação à direita.
   Recebe as notificações no formato do GRD_API_GetAllAlertMessages e os
   destinos do "Para" (usuários e roles) no formato do
   GRD_API_GetAllAllowedDestinationAlert.

   Ações:
     • + Novo      -> abre um 2º popup (por cima) p/ criar uma notificação
                      (Para · Título · Mensagem).
     • Responder   -> ícone na linha do assunto; abre o mesmo popup já com o
                      remetente selecionado e o título "RE: …".
     • Excluir     -> ícone na linha do assunto (ou várias de uma vez, com
                      seleção múltipla).
     • Busca       -> campo no topo da lista; filtra por remetente, título e
                      mensagem (sem diferenciar maiúsculas/acentos).
     • Seleção     -> Shift+clique = intervalo · Ctrl/Cmd+clique = marca/desmarca.

   ── Atributos / propriedades
     data              - array de notificações (em JS use .data). Formato
                         do GRD_API_GetAllAlertMessages:
                           { AlertRecipientID, AlertID, AlertTitle, AlertMessage,
                             PriorityID, AlertStatusID, GeneratedOn, CreatedBy,
                             CreatedByEmployeeID, RecipientID, IsMessageRead }
                           AlertRecipientID - chave do item (usado na exclusão)
                           AlertTitle       - assunto (vazio = "(Sem título)")
                           AlertMessage     - texto da notificação
                           GeneratedOn      - data/hora ("10/6/2026 10:11:31 PM")
                           CreatedBy        - remetente exibido
                           CreatedByEmployeeID - ID do remetente (destinatário
                                              pré-selecionado no Responder)
                           IsMessageRead    - "0" = não lida · "1" = lida
     destinations      - array de destinos do "Para" (em JS use .destinations).
                         Formato do GRD_API_GetAllAllowedDestinationAlert:
                           { ID, Description, Type }   Type = "USER" | "ROLE"
                         O dropdown separa os grupos Usuários e Roles.
                         (Compatível: "users" no formato { ID, EmployeeNo } do
                          GRD_API_GetUsers — todos tratados como USER.)
     title             - título do popup (default "Notificações")
     open              - "false" inicia oculto
     close-on-backdrop - "false" NÃO fecha ao clicar fora (default: fecha)
     onConfirmNewNotification   - string JS / função (event, detail)
     onReplyNotification        - string JS / função (event, detail)
     onDeleteNotification       - string JS / função (event, detail)
     onNotificationMarkedAsRead - string JS / função (event, detail)
     onClose                    - string JS / função (event, detail)

   ── Eventos (CustomEvent, bubbles) — o detail é o mesmo do callback
     "confirm-new-notification" -> { AlertEmployeeID, AlertRole, AlertTitle,
                                     AlertMessage, recipient: { ID, Description, Type } }
                                   (campos prontos p/ o GRD_API_CreateAlert)
                                   USER -> AlertEmployeeID = ID, AlertRole = "-1"
                                   ROLE -> AlertEmployeeID = -1, AlertRole = Description
     "reply-notification"       -> mesmos campos do confirm-new-notification +
                                   { ReplyToAlertRecipientID, ReplyToAlertID, replyTo }
     "delete-notification"      -> { AlertRecipientIDs: [...], notifications: [...] }
                                   (1 ou várias; o GRD_API_DeleteAlert é 1 por id)
     "notification-marked-as-read" -> { AlertRecipientID, AlertID, notification }
                                   (ao abrir uma notificação com IsMessageRead "0")
     "close"                    -> {} (✕, Esc ou clique fora)

   ── API JS
     GranadoNotificationPopup.show({ title, data, destinations, closeOnBackdrop,
       onConfirmNewNotification, onReplyNotification, onDeleteNotification,
       onNotificationMarkedAsRead, onClose })
     el.open() / el.close()
     el.data = [...] / el.destinations = [...]
     el.unreadCount            -> quantidade de não lidas (lista atual)

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-notification-popup.js"></script>
   <script>
     GranadoNotificationPopup.show({
       data: alerts,   // retorno do GRD_API_GetAllAlertMessages (Alerts)
       destinations: destinations, // GRD_API_GetAllAllowedDestinationAlert (Destinations)
       onConfirmNewNotification: function (d) { console.log('CreateAlert', d); },
       onReplyNotification: function (d) { console.log('Reply', d); },
       onDeleteNotification: function (d) { console.log('DeleteAlert', d.AlertRecipientIDs); },
       onNotificationMarkedAsRead: function (d) { console.log('Lida', d.AlertRecipientID); }
     });
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-notification-popup')) {
  const OVERLAY_BG = 'rgba(15,51,25,.55)';
  const OVERLAY_BG2 = 'rgba(15,51,25,.30)';
  const SURFACE = '#FDFAF1';
  const SURFACE2 = '#F4EED9';
  const WHITE = '#FFFFFF';
  const BORDER = '#D6CDA4';
  const BORDER2 = '#E5DDC8';
  const VERDE = '#1F7A3D';
  const VERDE_ESC = '#0F3319';
  const VERDE_DIM = '#E4F0E8';
  const LABEL = '#103E20';
  const OURO = '#9A7520';
  const PER = '#8C1A1A';
  const PER_DIM = '#FBECEC';
  const OK = '#1C7A38';
  const OK_DIM = '#E6F3EA';
  const TEXT = '#1A1A1A';
  const TEXT2 = '#555555';
  const TEXT3 = '#8A8575';
  const FONT = "'Poppins',sans-serif";
  const MONO = "'Arial',Helvetica,sans-serif";
  const SCROLL = 'scrollbar-width:thin;scrollbar-color:rgba(28,92,49,.30) transparent;';
  const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  // Reset dos botões (o CSS do Apriso força altura/min-height em <button>).
  const BTN_RESET = 'height:auto !important;min-height:0 !important;box-sizing:border-box !important;letter-spacing:normal !important;';

  const ICON_REPLY = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block"><polyline points="9 17 4 12 9 7"></polyline><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path></svg>';
  const ICON_TRASH = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6M14 11v6"></path><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>';
  const ICON_SEARCH = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="' + TEXT3 + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;display:block"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';
  const ICON_CHEVRON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="' + VERDE + '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;flex-shrink:0"><polyline points="6 9 12 15 18 9"></polyline></svg>';

  const CALLBACKS = ['onConfirmNewNotification', 'onReplyNotification', 'onDeleteNotification', 'onNotificationMarkedAsRead', 'onClose'];

  class GranadoNotificationPopup extends HTMLElement {
    static get observedAttributes() {
      return ['data', 'destinations', 'users', 'title', 'open', 'close-on-backdrop'];
    }

    // ------------------------------------------------------------
    // API estática
    // ------------------------------------------------------------
    static show(opts) {
      opts = opts || {};
      const el = document.createElement('granado-notification-popup');
      if (opts.title != null) el.setAttribute('title', String(opts.title));
      if (opts.closeOnBackdrop != null) el.setAttribute('close-on-backdrop', opts.closeOnBackdrop ? 'true' : 'false');
      CALLBACKS.forEach(function (name) {
        const v = opts[name];
        if (typeof v === 'function') el[name] = v;
        else if (v != null) el.setAttribute(name, String(v));
      });
      el._autoRemove = true;
      document.body.appendChild(el);
      if (opts.destinations != null) el.destinations = opts.destinations;
      else if (opts.users != null) el.users = opts.users;
      if (opts.data != null) el.data = opts.data;
      el.open();
      return el;
    }

    constructor() {
      super();
      this._items = null;     // [{ k, it }] — cópia local (lida/excluída muda aqui)
      this._dests = null;     // [{ key, id, name, type, raw }] — destinos do "Para"
      this._fns = {};         // callbacks em função (propriedades)
      this._selKey = null;    // notificação aberta para leitura
      this._multi = [];       // seleção múltipla (chaves)
      this._anchor = null;    // âncora do Shift+clique
      this._q = '';           // busca
      this._flash = false;    // "Notificação enviada."
      this._compose = null;   // { mode, toKey, title, message, replyKey }
      this._ddOpen = false;   // dropdown "Para" aberto
      this._ddQ = '';         // busca do dropdown
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      // lazy-props: valores atribuídos antes do upgrade do elemento.
      ['data', 'destinations', 'users'].concat(CALLBACKS).forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(this, p)) { const v = this[p]; delete this[p]; this[p] = v; }
      });
      if (this.getAttribute('open') === 'false') this.style.display = 'none';
      this._render();
      this._bindDoc();
    }
    disconnectedCallback() {
      this._unbindDoc();
      clearTimeout(this._flashTimer);
    }
    attributeChangedCallback(name) {
      if (name === 'data') { this._items = null; this._resetSelection(); }
      if (name === 'destinations' || name === 'users') this._dests = null;
      if (name === 'open') this.style.display = (this.getAttribute('open') === 'false') ? 'none' : '';
      if (this.isConnected) this._render();
    }

    // ------------------------------------------------------------
    // Propriedades
    // ------------------------------------------------------------
    get data() { return this._getItems().map((w) => w.it); }
    set data(v) {
      if (typeof v === 'string') { this.setAttribute('data', v); return; }
      this._items = this._wrapItems(Array.isArray(v) ? v : []);
      this._resetSelection();
      if (this.isConnected) this._render();
    }

    get destinations() { return this._getDests().map((u) => u.raw); }
    set destinations(v) {
      if (typeof v === 'string') { this.setAttribute('destinations', v); return; }
      this._dests = this._wrapDests(Array.isArray(v) ? v : []);
      if (this.isConnected && this._compose) this._renderCompose();
    }
    // Compatibilidade: lista de usuários do GRD_API_GetUsers ({ ID, EmployeeNo }).
    get users() { return this.destinations; }
    set users(v) {
      if (typeof v === 'string') { this.setAttribute('users', v); return; }
      this.destinations = v;
    }

    get unreadCount() { return this._getItems().filter((w) => this._isUnread(w.it)).length; }

    get closeOnBackdrop() { return this.getAttribute('close-on-backdrop') !== 'false'; }
    set closeOnBackdrop(v) { this.setAttribute('close-on-backdrop', v ? 'true' : 'false'); }

    get onConfirmNewNotification() { return this._fns.onConfirmNewNotification || null; }
    set onConfirmNewNotification(fn) { this._fns.onConfirmNewNotification = typeof fn === 'function' ? fn : null; }
    get onReplyNotification() { return this._fns.onReplyNotification || null; }
    set onReplyNotification(fn) { this._fns.onReplyNotification = typeof fn === 'function' ? fn : null; }
    get onDeleteNotification() { return this._fns.onDeleteNotification || null; }
    set onDeleteNotification(fn) { this._fns.onDeleteNotification = typeof fn === 'function' ? fn : null; }
    get onNotificationMarkedAsRead() { return this._fns.onNotificationMarkedAsRead || null; }
    set onNotificationMarkedAsRead(fn) { this._fns.onNotificationMarkedAsRead = typeof fn === 'function' ? fn : null; }
    get onClose() { return this._fns.onClose || null; }
    set onClose(fn) { this._fns.onClose = typeof fn === 'function' ? fn : null; }

    open() {
      this.removeAttribute('open');
      this.style.display = '';
      this._q = '';
      this._compose = null;
      this._ddOpen = false;
      if (this.isConnected) { this._render(); this._bindDoc(); }
    }

    close(ev) {
      this._ddOpen = false;
      this._compose = null;
      this.style.display = 'none';
      this._unbindDoc();
      this._fire('close', 'onClose', {}, ev);
      if (this._autoRemove) this.remove();
    }

    // ------------------------------------------------------------
    // Dados
    // ------------------------------------------------------------
    _parseArr(s) { if (!s) return []; try { const a = JSON.parse(s); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
    _has(v) { return v != null && String(v) !== ''; }
    _esc(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }
    // minúsculas + sem acentos (remove as marcas combinantes após o NFD)
    _norm(s) { return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/\p{M}/gu, ''); }

    _wrapItems(arr) {
      const seen = {};
      return arr.map((raw, i) => {
        const it = Object.assign({}, raw || {});
        let k = this._has(it.AlertRecipientID) ? 'r:' + it.AlertRecipientID
          : this._has(it.AlertID) ? 'a:' + it.AlertID : 'i:' + i;
        if (seen[k]) k += '#' + i;   // chave única mesmo com ids repetidos
        seen[k] = true;
        return { k: k, it: it };
      });
    }
    _getItems() {
      if (!this._items) this._items = this._wrapItems(this._parseArr(this.getAttribute('data')));
      return this._items;
    }

    // Destino do "Para": { ID, Description, Type: "USER"|"ROLE" } (GRD_API_GetAllAllowedDestinationAlert).
    // Aceita também { ID, EmployeeNo } (GRD_API_GetUsers) como USER.
    _wrapDests(arr) {
      return arr.map((u) => {
        u = u || {};
        if (typeof u !== 'object') u = { ID: u, Description: u };
        const id = [u.ID, u.EmployeeID, u.id, u.value].find((x) => this._has(x));
        const name = [u.Description, u.EmployeeNo, u.name, u.label].find((x) => this._has(x));
        const type = String(u.Type || '').toUpperCase() === 'ROLE' ? 'ROLE' : 'USER';
        const sid = String(id == null ? name : id);
        // chave com o tipo: ID de usuário e de role podem coincidir
        return { key: type + ':' + sid, id: sid, name: String(name == null ? id : name), type: type, raw: u };
      }).filter((u) => this._has(u.id));
    }
    _getDests() {
      if (!this._dests) {
        const attr = this.getAttribute('destinations') || this.getAttribute('users');
        this._dests = this._wrapDests(this._parseArr(attr));
      }
      return this._dests;
    }

    _isUnread(it) { return String(it.IsMessageRead).trim() === '0' || it.IsMessageRead === false; }
    _subject(it) { return this._has(it.AlertTitle) ? String(it.AlertTitle) : '(Sem título)'; }
    _find(k) { return this._getItems().find((w) => w.k === k) || null; }

    _resetSelection() {
      this._selKey = null;
      this._multi = [];
      this._anchor = null;
    }

    // Data "10/6/2026 10:11:31 PM" (M/D/AAAA h:mm:ss AM/PM). Aceita também ISO.
    _parseDate(s) {
      if (!this._has(s)) return null;
      const m = String(s).trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?)?$/i);
      if (m) {
        let h = parseInt(m[4] || '0', 10);
        const ap = (m[7] || '').toUpperCase();
        if (ap === 'PM' && h < 12) h += 12;
        if (ap === 'AM' && h === 12) h = 0;
        return new Date(+m[3], +m[1] - 1, +m[2], h, +(m[5] || 0), +(m[6] || 0));
      }
      const t = Date.parse(s);
      return isNaN(t) ? null : new Date(t);
    }
    _pad(n) { return String(n).padStart(2, '0'); }
    // Rótulo curto da lista: hoje -> hh:mm · ontem · dia da semana · dd/mm/aaaa
    _timeLabel(it) {
      const d = this._parseDate(it.GeneratedOn);
      if (!d) return this._esc(it.GeneratedOn || '');
      const now = new Date();
      const day0 = (x) => new Date(x.getFullYear(), x.getMonth(), x.getDate()).getTime();
      const diff = Math.round((day0(now) - day0(d)) / 86400000);
      if (diff <= 0) return this._pad(d.getHours()) + ':' + this._pad(d.getMinutes());
      if (diff === 1) return 'Ontem';
      if (diff < 7) return WEEKDAYS[d.getDay()];
      return this._pad(d.getDate()) + '/' + this._pad(d.getMonth() + 1) + '/' + d.getFullYear();
    }
    _fullDate(it) {
      const d = this._parseDate(it.GeneratedOn);
      if (!d) return this._esc(it.GeneratedOn || '');
      return this._pad(d.getDate()) + '/' + this._pad(d.getMonth() + 1) + '/' + d.getFullYear() +
        ' ' + this._pad(d.getHours()) + ':' + this._pad(d.getMinutes());
    }

    // Itens visíveis (busca por remetente, título e mensagem).
    _visible() {
      const q = this._norm(this._q.trim());
      const all = this._getItems();
      if (!q) return all;
      return all.filter((w) => this._norm([w.it.CreatedBy, w.it.AlertTitle, w.it.AlertMessage].join(' ')).indexOf(q) !== -1);
    }
    // Seleção efetiva: a múltipla (só visíveis) ou a notificação aberta.
    _picked() {
      const vis = {};
      this._visible().forEach((w) => { vis[w.k] = true; });
      const multi = this._multi.filter((k) => vis[k]);
      if (multi.length) return multi;
      return this._selKey != null && this._find(this._selKey) ? [this._selKey] : [];
    }

    // ------------------------------------------------------------
    // Eventos
    // ------------------------------------------------------------
    _fire(evName, cbName, detail, ev) {
      this.dispatchEvent(new CustomEvent(evName, { bubbles: true, composed: true, detail: detail }));
      const fn = this._fns[cbName];
      if (typeof fn === 'function') fn.call(this, detail, ev);
      const h = this.getAttribute(cbName.toLowerCase());
      if (h) new Function('event', 'detail', h).call(this, ev, detail);
    }

    // Esc em camadas: dropdown -> popup de envio -> popup de notificações.
    _bindDoc() {
      if (this._docKey) return;
      this._docKey = (e) => {
        if (e.key !== 'Escape' || this.style.display === 'none') return;
        e.stopPropagation();
        if (this._ddOpen) { this._ddOpen = false; this._renderCompose(); }
        else if (this._compose) this._closeCompose();
        else this.close(e);
      };
      this._docDown = (e) => {
        if (!this._ddOpen) return;
        const pop = this.querySelector('[data-role="to-pop"]');
        const trg = this.querySelector('[data-role="to"]');
        if ((pop && pop.contains(e.target)) || (trg && trg.contains(e.target))) return;
        this._ddOpen = false;
        this._renderCompose();
      };
      this._reposition = () => this._positionDropdown();
      document.addEventListener('keydown', this._docKey);
      document.addEventListener('mousedown', this._docDown, true);
      window.addEventListener('resize', this._reposition);
    }
    _unbindDoc() {
      if (!this._docKey) return;
      document.removeEventListener('keydown', this._docKey);
      document.removeEventListener('mousedown', this._docDown, true);
      window.removeEventListener('resize', this._reposition);
      this._docKey = this._docDown = this._reposition = null;
    }

    // Hover via JS (sem stylesheet): aplica/remove estilos ao entrar/sair.
    _hover(el, on, off) {
      if (!el) return;
      el.addEventListener('mouseenter', () => Object.assign(el.style, on));
      el.addEventListener('mouseleave', () => Object.assign(el.style, off));
    }

    // ------------------------------------------------------------
    // Render — casca (uma vez); lista, leitura e envio têm render próprio
    // ------------------------------------------------------------
    _render() {
      const title = this.getAttribute('title') || 'Notificações';

      this.innerHTML =
        `<div data-role="overlay" style="position:fixed;inset:0;background:${OVERLAY_BG};z-index:99999;display:flex;align-items:center;justify-content:center;padding:24px 12px;box-sizing:border-box;backdrop-filter:blur(3px)">` +
          `<div data-role="box" style="width:840px;max-width:100%;height:560px;max-height:100%;display:flex;flex-direction:column;overflow:hidden;background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${OURO};border-radius:12px;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;font:14px/1.5 ${FONT};color:${TEXT}">` +
            // Cabeçalho: título + contador + "+ Novo" à esquerda · ✕ à direita
            `<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;border-bottom:1px solid ${BORDER}">` +
              `<div style="display:flex;align-items:center;gap:10px;min-width:0">` +
                `<span style="font:700 16px/1.3 ${FONT};color:${VERDE_ESC}">${this._esc(title)}</span>` +
                `<span data-role="count" style="font:700 11px/1.3 ${FONT};color:${VERDE};white-space:nowrap"></span>` +
                `<button type="button" data-role="new" style="${BTN_RESET}font:700 12px/1.4 ${FONT} !important;padding:6px 14px !important;border:1px solid ${VERDE};border-radius:7px;background:${VERDE};color:#fff;cursor:pointer;white-space:nowrap;transition:background .12s">+ Novo</button>` +
              `</div>` +
              `<button type="button" data-role="x" title="Fechar" aria-label="Fechar" style="${BTN_RESET}background:none;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font-size:13px;color:${TEXT2};line-height:1;flex-shrink:0">✕</button>` +
            `</div>` +
            // Corpo: coluna (busca + lista) | leitura
            `<div style="flex:1 1 auto;display:flex;min-height:0">` +
              `<div style="width:290px;flex-shrink:0;display:flex;flex-direction:column;min-height:0;border-right:1px solid ${BORDER};background:${SURFACE2}">` +
                `<div style="padding:10px 12px;border-bottom:1px solid ${BORDER}">` +
                  `<div data-role="search-box" style="display:flex;align-items:center;gap:8px;border:1px solid ${BORDER};border-radius:7px;background:${WHITE};padding:6px 10px;transition:border-color .12s">` +
                    ICON_SEARCH +
                    `<input data-role="search" type="text" value="${this._esc(this._q)}" placeholder="Buscar notificações" autocomplete="off" aria-label="Buscar notificações" ` +
                      `style="flex:1 1 auto;min-width:0;border:0;outline:none;background:transparent;font:12px/1.4 ${FONT};color:${TEXT};padding:0;margin:0;height:auto;box-shadow:none" />` +
                    `<button type="button" data-role="clear" title="Limpar busca" aria-label="Limpar busca" style="${BTN_RESET}display:none;background:none;border:0;cursor:pointer;color:${TEXT3};font-size:12px;line-height:1;padding:0 2px">✕</button>` +
                  `</div>` +
                `</div>` +
                `<div data-role="list" role="listbox" aria-label="Lista de notificações" style="flex:1 1 auto;min-height:0;overflow-y:auto;${SCROLL}"></div>` +
              `</div>` +
              `<div data-role="detail" style="flex:1 1 auto;min-width:0;padding:16px 20px;overflow-y:auto;box-sizing:border-box;${SCROLL}"></div>` +
            `</div>` +
          `</div>` +
          `<div data-role="compose"></div>` +
        `</div>`;

      this._bindShell();
      this._renderCount();
      this._renderList();
      this._renderDetail();
      this._renderCompose();
    }

    _bindShell() {
      const overlay = this.querySelector('[data-role="overlay"]');
      const x = this.querySelector('[data-role="x"]');
      const nw = this.querySelector('[data-role="new"]');
      const search = this.querySelector('[data-role="search"]');
      const clear = this.querySelector('[data-role="clear"]');
      const sbox = this.querySelector('[data-role="search-box"]');

      overlay.addEventListener('mousedown', (e) => {
        if (e.target === overlay && this.closeOnBackdrop) this.close(e);
      });
      x.addEventListener('click', (e) => this.close(e));
      this._hover(x, { background: SURFACE2, color: PER }, { background: 'none', color: TEXT2 });
      nw.addEventListener('click', () => this._openCompose('new'));
      this._hover(nw, { background: VERDE_ESC }, { background: VERDE });

      search.addEventListener('input', () => {
        this._q = search.value || '';
        clear.style.display = this._q ? 'inline-block' : 'none';
        this._renderList();
        this._renderDetail();
      });
      search.addEventListener('focus', () => { sbox.style.borderColor = VERDE; });
      search.addEventListener('blur', () => { sbox.style.borderColor = BORDER; });
      clear.addEventListener('click', () => {
        this._q = '';
        search.value = '';
        clear.style.display = 'none';
        try { search.focus(); } catch (e) { /* ignore */ }
        this._renderList();
        this._renderDetail();
      });
      clear.style.display = this._q ? 'inline-block' : 'none';
    }

    _renderCount() {
      const el = this.querySelector('[data-role="count"]');
      if (!el) return;
      const n = this.unreadCount;
      el.textContent = n + (n === 1 ? ' nova' : ' novas');
    }

    // ------------------------------------------------------------
    // Lista
    // ------------------------------------------------------------
    _renderList() {
      const list = this.querySelector('[data-role="list"]');
      if (!list) return;
      const top = list.scrollTop;
      const rows = this._visible();
      const picked = this._picked();

      if (!rows.length) {
        const empty = this._getItems().length ? 'Nenhuma notificação encontrada.' : 'Nenhuma notificação.';
        list.innerHTML = `<div style="padding:22px 14px;text-align:center;font:12px/1.5 ${FONT};color:${TEXT3}">${empty}` +
          (this._q ? `<br><button type="button" data-role="clear-link" style="${BTN_RESET}margin-top:4px;padding:0;border:0;background:none;cursor:pointer;font:700 11px/1.4 ${FONT};color:${VERDE}">Limpar busca</button>` : '') +
          `</div>`;
        const lnk = list.querySelector('[data-role="clear-link"]');
        if (lnk) lnk.addEventListener('click', () => { const c = this.querySelector('[data-role="clear"]'); if (c) c.click(); });
        return;
      }

      list.innerHTML = rows.map((w) => this._itemHtml(w, picked.indexOf(w.k) !== -1)).join('');
      list.scrollTop = top;

      list.querySelectorAll('[data-role="item"]').forEach((el) => {
        const k = el.getAttribute('data-key');
        // Shift+clique não seleciona o texto da lista
        el.addEventListener('mousedown', (e) => { if (e.shiftKey) e.preventDefault(); });
        el.addEventListener('click', (e) => this._clickItem(e, k));
        el.addEventListener('mouseenter', () => { if (el.getAttribute('aria-selected') !== 'true') el.style.background = SURFACE; });
        el.addEventListener('mouseleave', () => { if (el.getAttribute('aria-selected') !== 'true') el.style.background = 'transparent'; });
      });
    }

    _itemHtml(w, active) {
      const it = w.it;
      const unread = this._isUnread(it);
      return `<div data-role="item" role="option" data-key="${this._esc(w.k)}" aria-selected="${active ? 'true' : 'false'}" ` +
          `style="display:flex;align-items:flex-start;gap:8px;padding:10px 12px;border-bottom:1px solid ${BORDER2};cursor:pointer;user-select:none;-webkit-user-select:none;` +
          `background:${active ? SURFACE : 'transparent'};box-shadow:${active ? 'inset 3px 0 0 ' + VERDE : 'none'};transition:background .12s">` +
          `<span style="width:8px;height:8px;margin-top:5px;border-radius:50%;flex-shrink:0;background:${PER};visibility:${unread ? 'visible' : 'hidden'}"></span>` +
          `<span style="flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:2px">` +
            `<span style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">` +
              `<span style="font:11px/1.35 ${FONT};color:${TEXT2};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${this._esc(it.CreatedBy || '')}</span>` +
              `<span style="font:10px/1.35 ${MONO};color:${TEXT3};white-space:nowrap;flex-shrink:0">${this._timeLabel(it)}</span>` +
            `</span>` +
            `<span style="font:${unread ? 800 : 600} 12.5px/1.35 ${FONT};color:${TEXT};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${this._esc(this._subject(it))}</span>` +
            `<span style="font:11px/1.35 ${FONT};color:${TEXT3};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${this._esc(it.AlertMessage || '')}</span>` +
          `</span>` +
        `</div>`;
    }

    // Clique simples = abre 1 · Shift = intervalo · Ctrl/Cmd = marca/desmarca
    _clickItem(e, k) {
      this._flash = false;
      if (e.shiftKey) {
        const keys = this._visible().map((w) => w.k);
        const anchor = this._anchor != null ? this._anchor : this._selKey;
        const from = keys.indexOf(anchor != null && keys.indexOf(anchor) !== -1 ? anchor : k);
        const to = keys.indexOf(k);
        this._multi = keys.slice(Math.min(from, to), Math.max(from, to) + 1);
        if (this._multi.length === 1) this._openItem(k, e);
      } else if (e.ctrlKey || e.metaKey) {
        const base = this._picked();
        const next = base.indexOf(k) !== -1 ? base.filter((x) => x !== k) : base.concat([k]);
        this._multi = next;
        this._anchor = k;
        if (next.length === 1) this._openItem(next[0], e);
        else if (!next.length) this._selKey = null;
      } else {
        this._multi = [];
        this._anchor = k;
        this._openItem(k, e);
      }
      this._renderList();
      this._renderDetail();
    }

    // Abre p/ leitura; se ainda não lida, marca como lida e dispara o evento.
    _openItem(k, ev) {
      this._selKey = k;
      const w = this._find(k);
      if (!w || !this._isUnread(w.it)) return;
      w.it.IsMessageRead = '1';
      this._renderCount();
      this._fire('notification-marked-as-read', 'onNotificationMarkedAsRead', {
        AlertRecipientID: w.it.AlertRecipientID,
        AlertID: w.it.AlertID,
        notification: Object.assign({}, w.it)
      }, ev);
    }

    // ------------------------------------------------------------
    // Leitura (painel da direita)
    // ------------------------------------------------------------
    _iconBtn(role, icon, label, danger) {
      return `<button type="button" data-role="${role}" title="${label}" aria-label="${label}" data-danger="${danger ? '1' : ''}" ` +
        `style="${BTN_RESET}display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px !important;padding:0;border:0;border-radius:6px;background:transparent;color:${TEXT2};cursor:pointer;transition:background .12s,color .12s">${icon}</button>`;
    }
    _bindIconBtns(root) {
      root.querySelectorAll('button[data-danger]').forEach((b) => {
        const danger = b.getAttribute('data-danger') === '1';
        this._hover(b, danger ? { background: PER_DIM, color: PER } : { background: VERDE_DIM, color: VERDE },
          { background: 'transparent', color: TEXT2 });
      });
    }

    _renderDetail() {
      const box = this.querySelector('[data-role="detail"]');
      if (!box) return;
      const picked = this._picked();
      const flash = this._flash
        ? `<div style="font:700 12px/1.4 ${FONT};color:${OK};background:${OK_DIM};border:1px solid #BFDCC8;border-radius:7px;padding:8px 12px;margin-bottom:12px">Notificação enviada.</div>`
        : '';
      const headRow = (subject, actions) =>
        `<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">` +
          `<div style="min-width:0;font:800 16px/1.35 ${FONT};color:${VERDE_ESC};margin-bottom:6px;word-break:break-word">${subject}</div>` +
          `<span style="display:flex;gap:4px;flex-shrink:0">${actions}</span>` +
        `</div>`;
      const metaStyle = `display:flex;align-items:center;justify-content:space-between;gap:12px;padding-bottom:10px;margin-bottom:12px;border-bottom:1px solid ${BORDER2}`;

      if (picked.length > 1) {
        const sel = this._getItems().filter((w) => picked.indexOf(w.k) !== -1);
        box.innerHTML = flash +
          headRow(`${sel.length} notificações selecionadas`, this._iconBtn('del-multi', ICON_TRASH, 'Excluir selecionadas', true)) +
          `<div style="${metaStyle};justify-content:flex-end">` +
            `<button type="button" data-role="clear-sel" style="${BTN_RESET}padding:0;border:0;background:none;cursor:pointer;font:700 11px/1.4 ${FONT};color:${VERDE}">Limpar seleção</button>` +
          `</div>` +
          sel.map((w) =>
            `<div style="display:flex;align-items:baseline;gap:10px;padding:7px 0;border-bottom:1px solid ${BORDER2}">` +
              `<span style="flex-shrink:0;width:110px;font:12px/1.4 ${FONT};color:${TEXT2};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${this._esc(w.it.CreatedBy || '')}</span>` +
              `<span style="flex:1 1 auto;min-width:0;font:${this._isUnread(w.it) ? 800 : 400} 12px/1.4 ${FONT};color:${TEXT};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${this._esc(this._subject(w.it))}</span>` +
              `<span style="flex-shrink:0;font:10px/1.4 ${MONO};color:${TEXT3}">${this._timeLabel(w.it)}</span>` +
            `</div>`).join('');
        this._bindIconBtns(box);
        box.querySelector('[data-role="del-multi"]').addEventListener('click', (e) => this._delete(picked, e));
        box.querySelector('[data-role="clear-sel"]').addEventListener('click', () => {
          this._resetSelection();
          this._renderList();
          this._renderDetail();
        });
        return;
      }

      const w = picked.length ? this._find(picked[0]) : null;
      if (!w) {
        box.innerHTML = flash +
          (this._flash ? '' :
            `<div style="height:100%;display:flex;align-items:center;justify-content:center;text-align:center;font:12px/1.6 ${FONT};color:${TEXT3}">` +
              `Selecione uma notificação para ler.<br>Use Shift ou Ctrl + clique para selecionar várias.` +
            `</div>`);
        return;
      }

      const it = w.it;
      box.innerHTML = flash +
        headRow(this._esc(this._subject(it)),
          this._iconBtn('reply', ICON_REPLY, 'Responder', false) + this._iconBtn('del', ICON_TRASH, 'Excluir', true)) +
        `<div style="${metaStyle}">` +
          `<span style="font:700 11px/1.4 ${FONT};color:${TEXT2}">${this._esc(it.CreatedBy || '')}</span>` +
          `<span style="font:11px/1.4 ${MONO};color:${TEXT3}">${this._fullDate(it)}</span>` +
        `</div>` +
        `<div style="font:13px/1.6 ${FONT};color:${TEXT};white-space:pre-wrap;word-break:break-word">${this._esc(it.AlertMessage || '')}</div>`;
      this._bindIconBtns(box);
      box.querySelector('[data-role="reply"]').addEventListener('click', () => this._openCompose('reply', w.k));
      box.querySelector('[data-role="del"]').addEventListener('click', (e) => this._delete([w.k], e));
    }

    // Remove da lista local e dispara o evento (o consumidor chama o GRD_API_DeleteAlert).
    _delete(keys, ev) {
      const del = {};
      keys.forEach((k) => { del[k] = true; });
      const removed = this._getItems().filter((w) => del[w.k]).map((w) => Object.assign({}, w.it));
      if (!removed.length) return;
      this._items = this._getItems().filter((w) => !del[w.k]);
      this._resetSelection();
      this._flash = false;
      this._renderCount();
      this._renderList();
      this._renderDetail();
      this._fire('delete-notification', 'onDeleteNotification', {
        AlertRecipientIDs: removed.map((it) => it.AlertRecipientID),
        notifications: removed
      }, ev);
    }

    // ------------------------------------------------------------
    // Popup de envio (Novo / Responder) — abre por cima
    // ------------------------------------------------------------
    _openCompose(mode, replyKey) {
      const c = { mode: mode, toKey: '', title: '', message: '', replyKey: null };
      if (mode === 'reply') {
        const w = this._find(replyKey);
        if (!w) return;
        const subj = this._has(w.it.AlertTitle) ? String(w.it.AlertTitle) : 'Notificação';
        c.replyKey = replyKey;
        // resposta vai para o remetente (sempre um USER)
        c.toKey = this._has(w.it.CreatedByEmployeeID) ? 'USER:' + w.it.CreatedByEmployeeID : '';
        c.title = /^RE:\s/i.test(subj) ? subj : 'RE: ' + subj;
      }
      this._compose = c;
      this._ddOpen = false;
      this._ddQ = '';
      this._renderCompose();
      const focus = this.querySelector(mode === 'reply' ? '[data-role="c-message"]' : '[data-role="to"]');
      if (focus) setTimeout(() => { try { focus.focus(); } catch (e) { /* ignore */ } }, 0);
    }

    _closeCompose() {
      this._compose = null;
      this._ddOpen = false;
      this._renderCompose();
    }

    // Destinos do "Para" + (no Responder) o remetente, se não estiver na lista.
    _recipients() {
      const list = this._getDests().slice();
      const c = this._compose;
      if (c && c.mode === 'reply' && c.toKey && !list.some((u) => u.key === c.toKey)) {
        const w = this._find(c.replyKey);
        const id = c.toKey.slice(5);
        const name = w && this._has(w.it.CreatedBy) ? String(w.it.CreatedBy) : id;
        list.unshift({ key: c.toKey, id: id, name: name, type: 'USER', raw: { ID: id, Description: name, Type: 'USER' } });
      }
      return list;
    }

    _canSend() {
      const c = this._compose;
      return !!(c && c.toKey && c.title.trim() && c.message.trim());
    }

    _renderCompose() {
      const host = this.querySelector('[data-role="compose"]');
      if (!host) return;
      const c = this._compose;
      if (!c) { host.innerHTML = ''; return; }

      const isReply = c.mode === 'reply';
      const recips = this._recipients();
      const cur = recips.find((u) => u.key === c.toKey) || null;
      const w = isReply ? this._find(c.replyKey) : null;
      const label = (t) => `<label style="display:block;font:600 11px/1.4 ${FONT};color:${LABEL};margin:14px 0 6px">${t}</label>`;
      const field = `box-sizing:border-box;width:100%;font:13px/1.4 ${FONT};padding:8px 12px;border:1px solid ${BORDER2};border-radius:6px;background:${SURFACE};color:${LABEL};outline:none;margin:0`;

      host.innerHTML =
        `<div data-role="c-overlay" style="position:fixed;inset:0;background:${OVERLAY_BG2};z-index:100000;display:flex;align-items:center;justify-content:center;padding:24px 12px;box-sizing:border-box">` +
          `<div role="dialog" aria-modal="true" aria-label="${isReply ? 'Responder notificação' : 'Nova notificação'}" style="width:500px;max-width:100%;max-height:100%;display:flex;flex-direction:column;overflow:hidden;background:${SURFACE};border:1px solid ${BORDER};border-top:4px solid ${OURO};border-radius:12px;box-shadow:0 24px 60px rgba(0,0,0,.35);box-sizing:border-box;font:14px/1.5 ${FONT};color:${TEXT}">` +
            `<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px;border-bottom:1px solid ${BORDER}">` +
              `<span style="font:700 15px/1.3 ${FONT};color:${VERDE_ESC}">${isReply ? 'Responder notificação' : 'Nova notificação'}</span>` +
              `<button type="button" data-role="c-x" title="Fechar" aria-label="Fechar" style="${BTN_RESET}background:none;border:1px solid ${BORDER};border-radius:6px;padding:5px 10px;cursor:pointer;font-size:13px;color:${TEXT2};line-height:1">✕</button>` +
            `</div>` +
            `<div style="flex:1 1 auto;min-height:0;overflow-y:auto;padding:0 18px 4px;${SCROLL}">` +
              label('Para') +
              `<button type="button" data-role="to" aria-haspopup="listbox" aria-expanded="${this._ddOpen ? 'true' : 'false'}" ` +
                `style="${BTN_RESET}display:flex;align-items:center;gap:8px;width:100%;font:13px/1.4 ${FONT} !important;padding:8px 12px !important;border:1px solid ${this._ddOpen ? VERDE : BORDER2};border-radius:6px;background:${this._ddOpen ? '#F5EFD9' : SURFACE};color:${cur ? LABEL : '#8A9E8E'};cursor:pointer;text-align:left">` +
                `<span style="flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${cur ? this._esc(cur.name) : 'Selecione o destinatário'}</span>` +
                (cur ? this._typeTag(cur.type) : '') +
                `<span style="display:block;transform:rotate(${this._ddOpen ? 180 : 0}deg);transition:transform .15s">${ICON_CHEVRON}</span>` +
              `</button>` +
              label('Título') +
              `<input data-role="c-title" type="text" value="${this._esc(c.title)}" placeholder="Título da notificação" autocomplete="off" style="${field}" />` +
              label('Mensagem') +
              `<textarea data-role="c-message" placeholder="Escreva a mensagem" style="${field};min-height:120px;resize:vertical;display:block">${this._esc(c.message)}</textarea>` +
              (w
                ? `<div style="margin-top:12px;padding:8px 12px;border-left:3px solid ${BORDER};background:${SURFACE2};font:12px/1.5 ${FONT};color:${TEXT2};white-space:pre-wrap;word-break:break-word">` +
                    `<div style="font:700 10px/1.4 ${FONT};color:${TEXT3};margin-bottom:4px">${this._esc(w.it.CreatedBy || '')} · <span style="font-family:${MONO}">${this._fullDate(w.it)}</span></div>` +
                    this._esc(w.it.AlertMessage || '') +
                  `</div>`
                : '') +
            `</div>` +
            `<div style="display:flex;gap:10px;justify-content:flex-end;padding:12px 18px;margin-top:12px;border-top:1px solid ${BORDER}">` +
              `<button type="button" data-role="c-cancel" style="${BTN_RESET}font:600 13px/1.4 ${FONT} !important;padding:9px 18px !important;border:1px solid ${BORDER};border-radius:8px;background:transparent;color:${TEXT2};cursor:pointer">Cancelar</button>` +
              `<button type="button" data-role="c-send" style="${BTN_RESET}font:700 13px/1.4 ${FONT} !important;padding:9px 22px !important;border:1px solid ${VERDE};border-radius:8px;background:${VERDE};color:#fff">Enviar</button>` +
            `</div>` +
          `</div>` +
          (this._ddOpen ? this._dropdownHtml(recips) : '') +
        `</div>`;

      this._bindCompose();
      if (this._ddOpen) this._positionDropdown();
    }

    _typeTag(type) {
      return `<span style="flex-shrink:0;font:900 9px/1.4 ${FONT};letter-spacing:.06em;text-transform:uppercase;padding:2px 7px;border-radius:4px;background:${SURFACE2};color:${TEXT2};border:1px solid ${BORDER2}">${type === 'ROLE' ? 'Role' : 'Usuário'}</span>`;
    }

    _dropdownHtml(recips) {
      const q = this._norm(this._ddQ.trim());
      const opts = q ? recips.filter((u) => this._norm(u.name).indexOf(q) !== -1) : recips;
      const sel = this._compose ? this._compose.toKey : '';
      const opt = (u) => {
        const on = u.key === sel;
        return `<div data-role="to-opt" data-key="${this._esc(u.key)}" role="option" aria-selected="${on ? 'true' : 'false'}" ` +
          `style="padding:8px 12px 8px 18px;font:${on ? 700 : 400} 12px/1.4 ${FONT};color:${on ? '#fff' : LABEL};background:${on ? VERDE : 'transparent'};cursor:pointer;user-select:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${this._esc(u.name)}</div>`;
      };
      // Agrupa em Usuários / Roles (cabeçalho só para grupos com itens).
      const group = (label, arr) => arr.length
        ? `<div style="padding:8px 12px 4px;font:900 9px/1.4 ${FONT};letter-spacing:.14em;text-transform:uppercase;color:${TEXT3};user-select:none">${label}</div>` + arr.map(opt).join('')
        : '';
      const list = opts.length
        ? group('Usuários', opts.filter((u) => u.type === 'USER')) + group('Roles', opts.filter((u) => u.type === 'ROLE'))
        : `<div style="padding:14px 12px;font:12px/1.4 ${FONT};color:#8A9E8E;text-align:center">Nenhum resultado</div>`;
      return `<div data-role="to-pop" role="listbox" style="position:fixed;z-index:100001;display:flex;flex-direction:column;max-height:280px;background:${SURFACE};border:1px solid ${BORDER2};border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,.14);overflow:hidden">` +
          `<div style="padding:8px;border-bottom:1px solid ${BORDER2}">` +
            `<input data-role="to-search" type="text" value="${this._esc(this._ddQ)}" placeholder="Buscar..." autocomplete="off" style="box-sizing:border-box;width:100%;font:12px/1.4 ${FONT};padding:6px 8px;border:1px solid ${BORDER2};border-radius:4px;background:${WHITE};color:${LABEL};outline:none;margin:0" />` +
          `</div>` +
          `<div data-role="to-list" style="flex:1 1 auto;overflow-y:auto;${SCROLL}">${list}</div>` +
        `</div>`;
    }

    // Dropdown com position:fixed (escapa de overflow:hidden), abre p/ cima se faltar espaço.
    _positionDropdown() {
      const trg = this.querySelector('[data-role="to"]');
      const pop = this.querySelector('[data-role="to-pop"]');
      if (!trg || !pop) return;
      const r = trg.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const below = vh - r.bottom;
      const up = below < 220 && r.top > below;
      pop.style.left = r.left + 'px';
      pop.style.width = r.width + 'px';
      pop.style.maxHeight = Math.max(140, Math.min(280, (up ? r.top : below) - 12)) + 'px';
      if (up) { pop.style.top = ''; pop.style.bottom = (vh - r.top + 4) + 'px'; }
      else { pop.style.bottom = ''; pop.style.top = (r.bottom + 4) + 'px'; }
    }

    _syncSend() {
      const b = this.querySelector('[data-role="c-send"]');
      if (!b) return;
      const on = this._canSend();
      b.disabled = !on;
      b.style.opacity = on ? '1' : '.5';
      b.style.cursor = on ? 'pointer' : 'not-allowed';
    }

    _bindCompose() {
      const c = this._compose;
      const ov = this.querySelector('[data-role="c-overlay"]');
      const cx = this.querySelector('[data-role="c-x"]');
      const cancel = this.querySelector('[data-role="c-cancel"]');
      const send = this.querySelector('[data-role="c-send"]');
      const to = this.querySelector('[data-role="to"]');
      const title = this.querySelector('[data-role="c-title"]');
      const msg = this.querySelector('[data-role="c-message"]');
      if (!ov) return;

      // clique fora fecha só este popup (não o de notificações)
      ov.addEventListener('mousedown', (e) => { if (e.target === ov) this._closeCompose(); });
      cx.addEventListener('click', () => this._closeCompose());
      cancel.addEventListener('click', () => this._closeCompose());
      this._hover(cx, { background: SURFACE2, color: PER }, { background: 'none', color: TEXT2 });
      this._hover(cancel, { borderColor: VERDE, color: VERDE }, { borderColor: BORDER, color: TEXT2 });
      this._hover(send, { background: VERDE_ESC }, { background: VERDE });
      send.addEventListener('click', (e) => this._send(e));

      [title, msg].forEach((el) => {
        el.addEventListener('focus', () => { el.style.borderColor = VERDE; });
        el.addEventListener('blur', () => { el.style.borderColor = BORDER2; });
      });
      title.addEventListener('input', () => { c.title = title.value; this._syncSend(); });
      msg.addEventListener('input', () => { c.message = msg.value; this._syncSend(); });

      to.addEventListener('click', () => {
        this._ddOpen = !this._ddOpen;
        this._ddQ = '';
        this._renderCompose();
        const s = this.querySelector('[data-role="to-search"]');
        if (s) setTimeout(() => { try { s.focus(); } catch (e) { /* ignore */ } }, 0);
      });

      const pop = this.querySelector('[data-role="to-pop"]');
      if (pop) {
        const s = pop.querySelector('[data-role="to-search"]');
        s.addEventListener('input', () => {
          this._ddQ = s.value || '';
          const lst = pop.querySelector('[data-role="to-list"]');
          const tmp = document.createElement('div');
          tmp.innerHTML = this._dropdownHtml(this._recipients());
          lst.innerHTML = tmp.querySelector('[data-role="to-list"]').innerHTML;
          this._bindOptions(pop);
        });
        this._bindOptions(pop);
      }
      this._syncSend();
    }

    _bindOptions(pop) {
      pop.querySelectorAll('[data-role="to-opt"]').forEach((o) => {
        const on = o.getAttribute('aria-selected') === 'true';
        if (!on) this._hover(o, { background: '#ECE3C2' }, { background: 'transparent' });
        o.addEventListener('click', () => {
          this._compose.toKey = o.getAttribute('data-key');
          this._ddOpen = false;
          this._renderCompose();
        });
      });
    }

    // Monta o detail no formato do GRD_API_CreateAlert e dispara o evento.
    _send(ev) {
      const c = this._compose;
      if (!this._canSend()) return;
      const u = this._recipients().find((x) => x.key === c.toKey);
      if (!u) return;
      const isRole = u.type === 'ROLE';
      // USER -> AlertEmployeeID = ID (AlertRole "-1") · ROLE -> AlertRole = nome (AlertEmployeeID -1)
      const detail = {
        AlertEmployeeID: isRole ? -1 : (/^\d+$/.test(u.id) ? Number(u.id) : u.id),
        AlertRole: isRole ? u.name : '-1',
        AlertTitle: c.title.trim(),
        AlertMessage: c.message.trim(),
        recipient: { ID: u.id, Description: u.name, Type: u.type }
      };
      if (c.mode === 'reply') {
        const w = this._find(c.replyKey);
        detail.ReplyToAlertRecipientID = w ? w.it.AlertRecipientID : null;
        detail.ReplyToAlertID = w ? w.it.AlertID : null;
        detail.replyTo = w ? Object.assign({}, w.it) : null;
      }
      this._compose = null;
      this._ddOpen = false;
      this._renderCompose();
      this._showFlash();
      if (c.mode === 'reply') this._fire('reply-notification', 'onReplyNotification', detail, ev);
      else this._fire('confirm-new-notification', 'onConfirmNewNotification', detail, ev);
    }

    _showFlash() {
      this._flash = true;
      this._renderDetail();
      clearTimeout(this._flashTimer);
      this._flashTimer = setTimeout(() => { this._flash = false; if (this.isConnected) this._renderDetail(); }, 2500);
    }
  }

  customElements.define('granado-notification-popup', GranadoNotificationPopup);
  window.GranadoNotificationPopup = GranadoNotificationPopup;
}
