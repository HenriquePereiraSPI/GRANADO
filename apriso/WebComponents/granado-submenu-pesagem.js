/* ============================================================
   <granado-submenu-pesagem>
   Sub-navbar horizontal com botao de voltar (opcional), card de
   contexto (opcional) e lista de itens de menu com destaque do
   item ativo.

   Padrao visual: SubNavbar da tela de Pesagem (apos selecionar
   uma ordem) — botao "voltar para Selecao de Ordem", chip
   "OP Ativa · OP-XXXX" e botoes Cockpit/MPs/Checklist/etc.

   Atributos (todos opcionais):
     items            - JSON array com a lista de itens do menu.
                        Schema do item:
                          key      string  (identificador; obrigatorio
                                            na pratica — recebido nos
                                            handlers de click)
                          label    string  (texto exibido no botao)
                          icon     string  (texto/emoji/SVG bruto,
                                            exibido a esquerda do label)
                          disabled boolean (desabilita o botao)
                        Tambem pode ser setado via propriedade JS
                        .items (array).
     value            - key do item ativo. Define qual botao recebe
                        o destaque (background colorido). Se ausente
                        ou invalida, ativa o primeiro item.
     contextlabel     - eyebrow do card de contexto.
                        Default: "OP Ativa".
     contextvalue     - valor monoespacado do card de contexto
                        (ex.: "OP-2026-0416"). Se omitido (ou vazio),
                        o card de contexto NAO e renderizado.
     contextcolor     - cor base do card de contexto (texto + borda).
                        O fundo e uma versao clara dessa cor.
                        Default: "#1C5C31".
     backlabel        - texto do botao de voltar. Se ausente (ou
                        vazio), o botao NAO e renderizado.
                        Default: "" (omitido).
     backcolor        - cor do botao de voltar (texto + borda; fundo
                        branco no estado normal, invertido no hover).
                        Default: "#9A7520".
     activecolor      - cor de fundo do item ativo. Default: "#1C5C31".
     activetextcolor  - cor do texto do item ativo. Default: "#FDFAF1".
     inactivecolor    - cor do texto do item nao-ativo.
                        Default: "#5A6B5E".
     inactivebg       - cor de fundo do item nao-ativo.
                        Default: "#FFFFFF".
     backgroundcolor  - cor de fundo do container externo.
                        Default: "#F5EFD9".
     bordercolor      - cor da borda do container e dos itens
                        inativos. Default: "#E5DDC8".

     onbackclickevent - JS executado no click do botao de voltar.
                        Variavel: event.
     onitemclickevent - JS executado no click de qualquer item.
                        Variaveis: key, item, index, event.
     onchangeevent    - JS executado quando o value muda (apos um
                        click que selecionou um item diferente do
                        ativo). Variaveis: value, item.

   Eventos (CustomEvent, bubbles):
     "backclick" detail: { event }
     "itemclick" detail: { key, item, index }
     "change"    detail: { value, item }

   Propriedades JS:
     elemento.items   getter/setter (array de objetos)
     elemento.value   getter/setter (string)

   Exemplo:

   <script src="assets/WebComponents/granado-submenu-pesagem.js"></script>

   <granado-submenu-pesagem id="sm-pes"
       backlabel="← Selecao de Ordem"
       contextlabel="OP Ativa"
       contextvalue="OP-2026-0416"
       value="pes-mps"
       onbackclickevent="history.back();"
       onchangeevent="console.log('foi para', value);">
   </granado-submenu-pesagem>
   <script>
     document.getElementById('sm-pes').items = [
       { key:'pes-cockpit',   label:'Cockpit',    icon:'🎯' },
       { key:'pes-mps',       label:'MPs',        icon:'⚖️' },
       { key:'pes-checklist', label:'Checklist',  icon:'📋' },
       { key:'pes-gaiola',    label:'Gaiola',     icon:'📦' },
       { key:'pes-paradas',   label:'Paradas',    icon:'⏸️' },
       { key:'pes-devol-mp',  label:'Devolucao',  icon:'↩' },
       { key:'pes-checkout',  label:'Checkout',   icon:'✓' },
     ];
   </script>
   ============================================================ */

class GranadoSubmenuPesagem extends HTMLElement {
  static get observedAttributes() {
    return [
      'items', 'value',
      'contextlabel', 'contextvalue', 'contextcolor',
      'backlabel', 'backcolor',
      'activecolor', 'activetextcolor',
      'inactivecolor', 'inactivebg',
      'backgroundcolor', 'bordercolor',
      'onbackclickevent', 'onitemclickevent', 'onchangeevent'
    ];
  }

  connectedCallback() {
    // Lazy-props pattern: se alguem atribuiu el.items = [...] ou
    // el.value = "..." ANTES do upgrade do custom element (cenario
    // tipico em Apriso quando o script de setup roda antes do
    // granado-submenu-pesagem.js terminar de carregar), a atribuicao
    // virou uma own property no HTMLElement e o setter da classe
    // nunca foi chamado. Detectamos isso aqui, capturamos o valor,
    // removemos a own property e re-atribuimos via o setter real.
    if (Object.prototype.hasOwnProperty.call(this, 'items')) {
      const pending = this.items;
      delete this.items;
      this.items = pending;
    }
    if (Object.prototype.hasOwnProperty.call(this, 'value')) {
      const pending = this.value;
      delete this.value;
      this.value = pending;
    }
    this._render();
  }

  attributeChangedCallback() {
    if (this._silentSet) return;
    if (this.isConnected) this._render();
  }

  get items() {
    if (this._items) return this._items;
    return this._parseItemsAttr();
  }
  set items(arr) {
    this._items = Array.isArray(arr) ? arr : [];
    if (this.isConnected) this._render();
  }

  get value() { return this.getAttribute('value') || ''; }
  set value(v) {
    this.setAttribute('value', String(v == null ? '' : v));
  }

  _parseItemsAttr() {
    const raw = this.getAttribute('items');
    if (!raw) return [];
    try {
      const v = JSON.parse(raw);
      return Array.isArray(v) ? v : [];
    } catch {
      return [];
    }
  }

  _render() {
    const items = this._items || this._parseItemsAttr();

    const contextLabel    = this.getAttribute('contextlabel')    || 'OP Ativa';
    const contextValue    = this.getAttribute('contextvalue')    || '';
    const contextColor    = this.getAttribute('contextcolor')    || '#1C5C31';
    const backLabel       = this.getAttribute('backlabel')       || '';
    const backColor       = this.getAttribute('backcolor')       || '#9A7520';
    const activeColor     = this.getAttribute('activecolor')     || '#1C5C31';
    const activeTextColor = this.getAttribute('activetextcolor') || '#FDFAF1';
    const inactiveColor   = this.getAttribute('inactivecolor')   || '#5A6B5E';
    const inactiveBg      = this.getAttribute('inactivebg')      || '#FFFFFF';
    const backgroundColor = this.getAttribute('backgroundcolor') || '#F5EFD9';
    const borderColor     = this.getAttribute('bordercolor')     || '#E5DDC8';

    // Resolucao do item ativo: prioridade pra value setada; se ela
    // nao bate com nenhum item, cai pro primeiro disponivel.
    let currentValue = this.getAttribute('value') || '';
    const keys = items.map((it, i) => (it && it.key != null ? String(it.key) : String(i)));
    if (!currentValue || !keys.includes(currentValue)) {
      currentValue = keys[0] || '';
      if (currentValue) {
        // Sincroniza o atributo silenciosamente (sem re-render)
        this._silentSet = true;
        this.setAttribute('value', currentValue);
        this._silentSet = false;
      }
    }

    this.style.display = this.style.display || 'block';
    this.style.fontFamily = "'Lato','DejaVu Sans',Arial,sans-serif";

    const contextSoftBg = this._lighten(contextColor, 0.88);

    const backBtnHtml = backLabel ? `<button data-sm-back type="button" style="background:#FFFFFF;border:1.5px solid ${backColor};color:${backColor};padding:6px 12px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap;line-height:1.2;transition:background 0.15s,color 0.15s">${this._escape(backLabel)}</button>` : '';

    const contextHtml = contextValue ? `<div data-sm-context style="display:flex;align-items:center;gap:8px;padding:4px 12px;background:${contextSoftBg};border:1px solid ${contextColor};border-radius:6px;font-size:11px;line-height:1.3"><span style="font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:#8A9E8E">${this._escape(contextLabel)}</span><span style="font-family:'DM Mono','DejaVu Mono',Consolas,monospace;font-weight:800;color:${contextColor}">${this._escape(contextValue)}</span></div>` : '';

    const itemsHtml = items.map((it, i) => {
      if (!it) return '';
      const key = it.key != null ? String(it.key) : String(i);
      const label = it.label != null ? this._escape(String(it.label)) : '';
      const iconRaw = it.icon != null ? String(it.icon) : '';
      const iconHtml = iconRaw ? `<span style="margin-right:4px;display:inline-flex;align-items:center;line-height:1">${iconRaw}</span>` : '';
      const disabled = !!it.disabled;
      const active = key === currentValue;

      let bg, fg, border, weight;
      if (disabled) {
        bg = inactiveBg;
        fg = '#B5AB85';
        border = `1.5px solid ${borderColor}`;
        weight = 600;
      } else if (active) {
        bg = activeColor;
        fg = activeTextColor;
        border = `1.5px solid ${activeColor}`;
        weight = 800;
      } else {
        bg = inactiveBg;
        fg = inactiveColor;
        border = `1.5px solid ${borderColor}`;
        weight = 600;
      }
      const cursor = disabled ? 'not-allowed' : 'pointer';
      const opacity = disabled ? '0.6' : '1';

      return `<button data-sm-item="${this._escapeAttr(key)}" data-sm-active="${active ? '1' : '0'}" data-sm-disabled="${disabled ? '1' : '0'}" type="button" ${disabled ? 'disabled' : ''} title="${this._escapeAttr(it.label != null ? String(it.label) : '')}" style="background:${bg};color:${fg};border:${border};padding:5px 10px;border-radius:5px;font-size:10px;font-weight:${weight};cursor:${cursor};font-family:inherit;letter-spacing:.03em;white-space:nowrap;opacity:${opacity};display:inline-flex;align-items:center;line-height:1.3;transition:background 0.15s,color 0.15s,border-color 0.15s">${iconHtml}${label}</button>`;
    }).join('');

    this.innerHTML = `<div data-sm-root style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;background:${backgroundColor};border:1px solid ${borderColor};border-radius:7px;box-shadow:0 1px 2px rgba(0,0,0,.06);box-sizing:border-box">${backBtnHtml}${contextHtml}<div data-sm-items style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">${itemsHtml}</div></div>`;

    this._wire(items, currentValue, {
      backColor, activeColor, activeTextColor,
      inactiveColor, inactiveBg, borderColor
    });
  }

  _wire(items, currentValue, palette) {
    // Botao de voltar
    const backBtn = this.querySelector('[data-sm-back]');
    if (backBtn) {
      backBtn.addEventListener('click', (ev) => {
        const handler = this.getAttribute('onbackclickevent');
        if (handler) {
          try { new Function('event', handler).call(this, ev); }
          catch (err) { console.error('[granado-submenu-pesagem] onbackclickevent error:', err); }
        }
        this.dispatchEvent(new CustomEvent('backclick', {
          detail: { event: ev },
          bubbles: true
        }));
      });
      backBtn.addEventListener('mouseenter', () => {
        backBtn.style.background = palette.backColor;
        backBtn.style.color = '#FFFFFF';
      });
      backBtn.addEventListener('mouseleave', () => {
        backBtn.style.background = '#FFFFFF';
        backBtn.style.color = palette.backColor;
      });
    }

    // Itens do menu
    this.querySelectorAll('[data-sm-item]').forEach(btn => {
      const key = btn.getAttribute('data-sm-item');
      const isActive = btn.getAttribute('data-sm-active') === '1';
      const isDisabled = btn.getAttribute('data-sm-disabled') === '1';
      const index = items.findIndex(it => it && (it.key != null ? String(it.key) : '') === key);
      const item = index >= 0 ? items[index] : null;

      if (isDisabled) return;

      btn.addEventListener('click', (ev) => {
        const onItem = this.getAttribute('onitemclickevent');
        if (onItem) {
          try { new Function('key', 'item', 'index', 'event', onItem).call(this, key, item, index, ev); }
          catch (err) { console.error('[granado-submenu-pesagem] onitemclickevent error:', err); }
        }
        this.dispatchEvent(new CustomEvent('itemclick', {
          detail: { key, item, index },
          bubbles: true
        }));

        // Atualiza o value e dispara change SOMENTE se mudou
        if (key !== this.getAttribute('value')) {
          this.setAttribute('value', key);
          const onChange = this.getAttribute('onchangeevent');
          if (onChange) {
            try { new Function('value', 'item', onChange).call(this, key, item); }
            catch (err) { console.error('[granado-submenu-pesagem] onchangeevent error:', err); }
          }
          this.dispatchEvent(new CustomEvent('change', {
            detail: { value: key, item },
            bubbles: true
          }));
        }
      });

      // Hover sutil apenas em itens inativos. O ativo ja esta destacado.
      if (!isActive) {
        const hoverBg = this._lighten(palette.activeColor, 0.92);
        btn.addEventListener('mouseenter', () => {
          btn.style.background = hoverBg;
          btn.style.borderColor = palette.activeColor;
          btn.style.color = palette.activeColor;
        });
        btn.addEventListener('mouseleave', () => {
          btn.style.background = palette.inactiveBg;
          btn.style.borderColor = palette.borderColor;
          btn.style.color = palette.inactiveColor;
        });
      }
    });
  }

  _lighten(hex, amount) {
    const m = String(hex).match(/^#?([0-9a-f]{6})$/i);
    if (!m) return hex;
    const num = parseInt(m[1], 16);
    let r = (num >> 16) & 0xff, g = (num >> 8) & 0xff, b = num & 0xff;
    r = Math.round(r + (255 - r) * amount);
    g = Math.round(g + (255 - g) * amount);
    b = Math.round(b + (255 - b) * amount);
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }

  _escape(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, ch =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }

  _escapeAttr(s) {
    return String(s == null ? '' : s).replace(/"/g, '&quot;');
  }
}

customElements.define('granado-submenu-pesagem', GranadoSubmenuPesagem);
