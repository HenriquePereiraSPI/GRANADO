/* ============================================================
   <granado-dropdown>
   Select customizado com popup. Suporta selecao unica ou multipla,
   busca opcional e visual no padrao Granado.

   Atributos (todos opcionais):
     label         - texto exibido acima do campo. Mesma aparencia do
                     label de <granado-input> / <granado-text>.
     options       - JSON array. Cada item pode ser:
                       string -> usado como value e label
                       objeto -> { value, label }
     value         - valor selecionado.
                       single -> string ("a")
                       multi  -> string com valores separados por virgula ("a,b")
     placeholder   - texto quando nada selecionado. Default: "Selecionar...".
     color         - cor de destaque (selecionado/borda foco). Default: "#1C5C31".
     disabled      - "true" desabilita interacao.
     multi         - "true" habilita selecao multipla.
     searchable    - "true" exibe campo de busca dentro do popup.
     onchangeevent - JS executado ao alterar selecao.
                     Variaveis: value (string|array), option (object|array), event.

   Propriedades JS:
     elemento.value          -> string (single) ou array (multi)
     elemento.value = ...    -> aceita string ou array

   Exemplo:

   <script src="assets/WebComponents/granado-dropdown.js"></script>

   <granado-dropdown
       placeholder="Selecione um operador..."
       options='["Maria Silva","Joao Santos","Ana Costa"]'
       searchable="true"
       onchangeevent="console.log('escolheu', value)">
   </granado-dropdown>

   <granado-dropdown
       multi="true"
       options='[
         {"value":"OK","label":"Aprovado"},
         {"value":"DEV","label":"Desvio"},
         {"value":"PEN","label":"Pendente"}
       ]'
       value="OK,DEV"
       onchangeevent="console.log(value)">
   </granado-dropdown>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-dropdown')) {
  class GranadoDropdown extends HTMLElement {
    static get observedAttributes() {
      return ['label', 'options', 'value', 'placeholder', 'color', 'disabled', 'multi', 'searchable', 'onchangeevent'];
    }

    constructor() {
      super();
      this._open = false;
      this._search = '';
      this._docClickHandler = null;
      this._escHandler = null;
    }

    connectedCallback() {
      this._mounted = true;
      this.render();
    }

    disconnectedCallback() {
      this._removeOpenListeners();
    }

    attributeChangedCallback() {
      if (this._mounted) this.render();
    }

    // ------------------------------------------------------------
    // Public JS API
    // ------------------------------------------------------------
    get value() {
      const v = this.getAttribute('value') || '';
      if (this.getAttribute('multi') === 'true') {
        return v.split(',').filter(Boolean);
      }
      return v;
    }
    set value(v) {
      if (Array.isArray(v)) this.setAttribute('value', v.join(','));
      else this.setAttribute('value', String(v == null ? '' : v));
    }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------
    render() {
      const options = this._parseOptions();
      const placeholder = this.getAttribute('placeholder') || 'Selecionar...';
      const color = this.getAttribute('color') || '#1C5C31';
      const disabled = this.getAttribute('disabled') === 'true';
      const multi = this.getAttribute('multi') === 'true';
      const searchable = this.getAttribute('searchable') === 'true';
      const label = this.getAttribute('label') || '';

      const selected = this._currentSelected(multi);
      const selectedOptions = options.filter(o => selected.includes(o.value));

      let triggerText;
      if (selectedOptions.length === 0) triggerText = placeholder;
      else if (multi && selectedOptions.length > 1)
        triggerText = `${selectedOptions[0].label} (+${selectedOptions.length - 1})`;
      else triggerText = selectedOptions.map(o => o.label).join(', ');

      const isPlaceholder = selectedOptions.length === 0;
      const btnBorder = this._open ? color : '#E5DDC8';
      const btnBg = disabled ? '#EFE6CC' : (this._open ? '#F5EFD9' : '#FDFAF1');
      const btnColor = disabled ? '#B5AB85' : (isPlaceholder ? '#8A9E8E' : '#103E20');
      const cursor = disabled ? 'not-allowed' : 'pointer';
      const chevronRot = this._open ? 'rotate(180deg)' : 'rotate(0deg)';

      this.style.display = this.style.display || 'inline-block';

      this.innerHTML = `
        <div style="position:relative;display:block;font-family:'Poppins','DejaVu Sans',Arial,sans-serif">
          ${label ? `<label data-dd-label style="display:block;font-size:11px;font-weight:600;color:#103E20;margin-bottom:6px;font-family:inherit">${this._escapeHtml(label)}</label>` : ''}
          <button data-dd-toggle type="button" ${disabled ? 'disabled' : ''} style="
            display:inline-flex;
            align-items:center;
            gap:8px;
            width:100%;
            box-sizing:border-box;
            height:auto;
            font-size:13px;
            line-height:1.4;
            padding:8px 12px;
            border:1px solid ${btnBorder};
            background:${btnBg};
            color:${btnColor};
            border-radius:6px;
            cursor:${cursor};
            font-family:inherit;
            min-width:180px;
            text-align:left;
            opacity:${disabled ? 0.7 : 1};
          ">
            <span style="flex:1;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${this._escapeHtml(triggerText)}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="display:block;flex-shrink:0;transform:${chevronRot};transition:transform 0.15s">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          ${this._open ? this._renderPopup(options, selected, color, multi, searchable) : ''}
        </div>
      `;

      this._wire(multi, searchable);
      if (this._open) this._positionPopup();
    }

    // Posiciona o popup com position:fixed a partir do retangulo do gatilho.
    // Usar fixed (e nao absolute) faz o popup escapar de ancestrais com
    // overflow:hidden / stacking context (ex.: cards do Apriso) que o recortavam.
    _positionPopup() {
      const toggle = this.querySelector('[data-dd-toggle]');
      const popup = this.querySelector('[data-dd-popup]');
      if (!toggle || !popup) return;
      const r = toggle.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const spaceBelow = vh - r.bottom;
      const spaceAbove = r.top;
      // Abre pra cima se nao couber embaixo e houver mais espaco em cima.
      const openUp = spaceBelow < 200 && spaceAbove > spaceBelow;
      const maxH = Math.max(120, Math.min(280, (openUp ? spaceAbove : spaceBelow) - 12));
      popup.style.width = r.width + 'px';
      popup.style.left = r.left + 'px';
      popup.style.maxHeight = maxH + 'px';
      if (openUp) {
        popup.style.top = '';
        popup.style.bottom = (vh - r.top + 4) + 'px';
      } else {
        popup.style.bottom = '';
        popup.style.top = (r.bottom + 4) + 'px';
      }
    }

    _renderPopup(options, selected, color, multi, searchable) {
      const search = this._search.toLowerCase();
      const filtered = searchable && search
        ? options.filter(o => o.label.toLowerCase().includes(search) || o.value.toLowerCase().includes(search))
        : options;

      const list = filtered.length === 0
        ? `<div style="padding:14px 12px;font-size:12px;color:#8A9E8E;text-align:center">Nenhum resultado</div>`
        : filtered.map(opt => this._renderOption(opt, selected.includes(opt.value), color, multi)).join('');

      return `
        <div data-dd-popup style="
          position:fixed;
          z-index:99999;
          background:#FDFAF1;
          border:1px solid #E5DDC8;
          border-radius:8px;
          box-shadow:0 6px 20px rgba(0,0,0,0.14);
          overflow:hidden;
          display:flex;
          flex-direction:column;
          max-height:280px;
        ">
          ${searchable ? `
            <div style="padding:8px;border-bottom:1px solid #E5DDC8">
              <input data-dd-search type="text" placeholder="Buscar..." value="${this._escapeAttr(this._search)}" style="
                width:100%;
                box-sizing:border-box;
                font-size:12px;
                padding:6px 8px;
                border:1px solid #E5DDC8;
                border-radius:4px;
                background:#fff;
                font-family:inherit;
                color:#103E20;
                outline:none;
              ">
            </div>
          ` : ''}
          <div style="overflow-y:auto;flex:1">${list}</div>
        </div>
      `;
    }

    _renderOption(opt, isSelected, color, multi) {
      const bg = (!multi && isSelected) ? color : 'transparent';
      const fg = (!multi && isSelected) ? '#fff' : '#103E20';
      const fontWeight = isSelected ? '700' : '400';

      const indicator = multi ? `
        <span style="
          display:inline-flex;
          align-items:center;
          justify-content:center;
          width:14px;
          height:14px;
          border:1px solid ${isSelected ? color : '#B5AB85'};
          background:${isSelected ? color : '#FDFAF1'};
          border-radius:3px;
          flex-shrink:0;
          box-sizing:border-box;
        ">${isSelected ? '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="display:block"><polyline points="20 6 9 17 4 12"/></svg>' : ''}</span>
      ` : '';

      const hoverIn = (!multi && isSelected) ? '' : `this.style.background='#ECE3C2'`;
      const hoverOut = (!multi && isSelected) ? '' : `this.style.background='${bg}'`;

      return `
        <div data-dd-opt="${this._escapeAttr(opt.value)}" style="
          display:flex;
          align-items:center;
          gap:8px;
          padding:8px 12px;
          font-size:12px;
          font-weight:${fontWeight};
          color:${fg};
          background:${bg};
          cursor:pointer;
          user-select:none;
        " onmouseover="${hoverIn}" onmouseout="${hoverOut}">
          ${indicator}
          <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${this._escapeHtml(opt.label)}</span>
        </div>
      `;
    }

    // ------------------------------------------------------------
    // Wiring
    // ------------------------------------------------------------
    _wire(multi, searchable) {
      const toggle = this.querySelector('[data-dd-toggle]');
      if (toggle) {
        toggle.addEventListener('click', (e) => {
          e.stopPropagation();
          if (this.getAttribute('disabled') === 'true') return;
          this._open = !this._open;
          if (!this._open) this._search = '';
          this.render();
          if (this._open) this._addOpenListeners();
          else this._removeOpenListeners();
        });
      }

      if (!this._open) return;

      if (searchable) {
        const search = this.querySelector('[data-dd-search]');
        if (search) {
          search.addEventListener('click', e => e.stopPropagation());
          search.addEventListener('input', () => {
            this._search = search.value;
            this.render();
            const after = this.querySelector('[data-dd-search]');
            if (after) {
              after.focus();
              const len = after.value.length;
              try { after.setSelectionRange(len, len); } catch (e) { /* ignore */ }
            }
          });
          // Auto-focus on open
          setTimeout(() => search.focus(), 0);
        }
      }

      this.querySelectorAll('[data-dd-opt]').forEach(el => {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          const v = el.getAttribute('data-dd-opt');
          if (multi) this._toggleMulti(v, e);
          else this._selectSingle(v, e);
        });
      });
    }

    _selectSingle(value, event) {
      this._open = false;
      this._search = '';
      this._removeOpenListeners();
      this.setAttribute('value', value); // triggers render via attributeChangedCallback
      this._fireChange(event);
    }

    _toggleMulti(value, event) {
      const current = (this.getAttribute('value') || '').split(',').filter(Boolean);
      const idx = current.indexOf(value);
      if (idx === -1) current.push(value);
      else current.splice(idx, 1);
      this.setAttribute('value', current.join(','));
      this._fireChange(event);
    }

    _addOpenListeners() {
      if (!this._docClickHandler) {
        this._docClickHandler = (e) => {
          if (!this.contains(e.target)) {
            this._open = false;
            this._search = '';
            this._removeOpenListeners();
            this.render();
          }
        };
        setTimeout(() => document.addEventListener('click', this._docClickHandler), 0);
      }
      if (!this._escHandler) {
        this._escHandler = (e) => {
          if (e.key === 'Escape' && this._open) {
            e.stopPropagation();
            this._open = false;
            this._search = '';
            this._removeOpenListeners();
            this.render();
          }
        };
        document.addEventListener('keydown', this._escHandler);
      }
      // Reposiciona o popup fixed quando a pagina rola/redimensiona.
      if (!this._repositionHandler) {
        this._repositionHandler = () => this._positionPopup();
        window.addEventListener('scroll', this._repositionHandler, true);
        window.addEventListener('resize', this._repositionHandler);
      }
    }

    _removeOpenListeners() {
      if (this._docClickHandler) {
        document.removeEventListener('click', this._docClickHandler);
        this._docClickHandler = null;
      }
      if (this._escHandler) {
        document.removeEventListener('keydown', this._escHandler);
        this._escHandler = null;
      }
      if (this._repositionHandler) {
        window.removeEventListener('scroll', this._repositionHandler, true);
        window.removeEventListener('resize', this._repositionHandler);
        this._repositionHandler = null;
      }
    }

    _fireChange(event) {
      const handler = this.getAttribute('onchangeevent');
      if (!handler) return;
      const multi = this.getAttribute('multi') === 'true';
      const options = this._parseOptions();
      const selected = this._currentSelected(multi);
      const value = multi ? selected : (selected[0] || '');
      const option = multi
        ? options.filter(o => selected.includes(o.value))
        : (options.find(o => o.value === selected[0]) || null);
      new Function('value', 'option', 'event', handler).call(this, value, option, event);
    }

    // ------------------------------------------------------------
    // Helpers
    // ------------------------------------------------------------
    _parseOptions() {
      const raw = this.getAttribute('options') || '[]';
      try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.map(o => {
          if (typeof o === 'string' || typeof o === 'number') {
            return { value: String(o), label: String(o) };
          }
          return {
            value: String(o.value == null ? o.label : o.value),
            label: String(o.label == null ? o.value : o.label)
          };
        });
      } catch {
        return [];
      }
    }

    _currentSelected(multi) {
      const v = this.getAttribute('value') || '';
      if (multi) return v.split(',').filter(Boolean);
      return v ? [v] : [];
    }

    _escapeHtml(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, ch =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }

    _escapeAttr(s) {
      return String(s == null ? '' : s).replace(/"/g, '&quot;');
    }
  }

  customElements.define('granado-dropdown', GranadoDropdown);

  window.GranadoDropdown = GranadoDropdown;
}
