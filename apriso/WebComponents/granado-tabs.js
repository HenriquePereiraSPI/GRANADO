/* ============================================================
   <granado-tabs>
   Container de abas. Gerencia o cabecalho (botoes) e a
   visibilidade do conteudo. Os itens devem ser <granado-tab>
   como filhos diretos.

   Atributos (todos opcionais):
     value          - valor da aba ativa. Se ausente, ativa a primeira.
     color          - cor de destaque (aba ativa). Default: "#1C5C31".
     type           - estilo do cabecalho:
                        "line" (default) -> underline sob a aba ativa;
                        "folder"/"enclosed" -> abas em pasta (fundo cheio na
                        ativa, borda e canto arredondado no topo) — mesmo
                        visual de Qualidade > Genealogia de Lote.
     onchangeevent  - JS executado ao trocar de aba.
                      Variaveis: value (string), tab (elemento).

   Evento (CustomEvent, bubbles):
     "change" -> detail { value, tab }  (use addEventListener('change', ...))

   Icones disponiveis para o atributo "icon" (preset):
     info · settings · user · mail · search · calendar · edit · list · file
     (qualquer outro texto/emoji/SVG bruto tambem e aceito)

   Atributos por <granado-tab> (alem de value/label/icon/disabled):
     badge          - texto/numero opcional exibido como pill (ex.: contagem),
                      no estilo dos contadores da Genealogia.

   Propriedades JS:
     elemento.value -> getter/setter

   Exemplo:

   <script src="assets/WebComponents/granado-tab.js"></script>
   <script src="assets/WebComponents/granado-tabs.js"></script>

   <granado-tabs value="info" onchangeevent="console.log(value)">
     <granado-tab value="info" label="Informacoes" icon="info">
       <p>Conteudo informacoes.</p>
     </granado-tab>
     <granado-tab value="hist" label="Historico" icon="calendar">
       <p>Conteudo historico.</p>
     </granado-tab>
     <granado-tab value="conf" label="Configuracoes" icon="settings">
       <p>Conteudo configuracoes.</p>
     </granado-tab>
   </granado-tabs>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-tabs')) {
  class GranadoTabs extends HTMLElement {
    static get observedAttributes() {
      return ['value', 'color', 'onchangeevent', 'type'];
    }

    connectedCallback() {
      if (!this._observer) {
        this._observer = new MutationObserver((mutations) => {
          // So reage a (a) tabs adicionadas/removidas como filho direto;
          // (b) atributos relevantes em <granado-tab>. Mutacoes dentro
          // do conteudo das abas sao ignoradas.
          const relevant = mutations.some(m => {
            if (m.type === 'childList') {
              const all = [...m.addedNodes, ...m.removedNodes];
              return all.some(n => n.tagName === 'GRANADO-TAB');
            }
            if (m.type === 'attributes') {
              return m.target && m.target.tagName === 'GRANADO-TAB';
            }
            return false;
          });
          if (!relevant) return;
          if (this._renderTimer) clearTimeout(this._renderTimer);
          this._renderTimer = setTimeout(() => this.render(), 0);
        });
      }
      this.render();
    }

    disconnectedCallback() {
      if (this._observer) this._observer.disconnect();
    }

    attributeChangedCallback() {
      if (this._silentSet) return;
      if (this.isConnected) this.render();
    }

    get value() { return this.getAttribute('value') || ''; }
    set value(v) { this.setAttribute('value', String(v == null ? '' : v)); }

    render() {
      if (this._observer) this._observer.disconnect();

      const color = this.getAttribute('color') || '#1C5C31';
      // Estilo do cabecalho: "line" (default, underline) ou "folder"/"enclosed"
      // (abas em pasta — mesmo visual de Qualidade > Genealogia de Lote).
      const type = (this.getAttribute('type') || 'line').toLowerCase();
      const isFolder = (type === 'folder' || type === 'enclosed');
      const BORDER = '#D6CDA4';

      // Captura todos os <granado-tab>: do conteudo anterior + diretos do host.
      const fragment = document.createDocumentFragment();
      const tabs = [];

      const prevContent = this.querySelector(':scope > .gt-card > .gt-content');
      if (prevContent) {
        Array.from(prevContent.children).forEach(child => {
          if (child.tagName === 'GRANADO-TAB') {
            tabs.push(child);
            fragment.appendChild(child);
          }
        });
      }
      Array.from(this.children).forEach(child => {
        if (child.tagName === 'GRANADO-TAB' && !fragment.contains(child)) {
          tabs.push(child);
          fragment.appendChild(child);
        }
      });

      // Determina a aba ativa
      let currentValue = this.getAttribute('value') || '';
      const tabValues = tabs.map((t, i) => t.getAttribute('value') || String(i));
      if (!currentValue || !tabValues.includes(currentValue)) {
        currentValue = tabValues[0] || '';
        if (currentValue) {
          // Sincroniza o atributo value silenciosamente
          this._silentSet = true;
          this.setAttribute('value', currentValue);
          this._silentSet = false;
        }
      }

      // Header com botoes
      const buttonsHtml = tabs.map((tab, i) => {
        const v = tab.getAttribute('value') || String(i);
        const label = this._escape(tab.getAttribute('label') || '');
        const iconAttr = tab.getAttribute('icon') || '';
        const iconHtml = iconAttr ? this._resolveIcon(iconAttr) : '';
        const disabled = tab.getAttribute('disabled') === 'true';
        const isActive = v === currentValue;
        const badgeAttr = tab.getAttribute('badge');

        let style, styleActive, styleInactive, styleDisabled;
        if (isFolder) {
          // Abas em pasta (Genealogia): fundo cheio na ativa, borda, canto arredondado no topo.
          const base = 'padding:8px 16px;font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;display:inline-flex;align-items:center;gap:6px;border-radius:6px 6px 0 0;margin-bottom:-2px;line-height:1';
          styleActive = `${base};background:${color};color:#fff;border:1px solid ${BORDER};border-bottom:2px solid ${color}`;
          styleInactive = `${base};background:#FDFAF1;color:#5A6B5E;border:1px solid ${BORDER};border-bottom:1px solid ${BORDER}`;
          styleDisabled = `${styleInactive};cursor:not-allowed;opacity:0.6`;
        } else {
          // Underline (default).
          const base = 'padding:10px 14px;height:auto;font-size:13px;background:transparent;border:none;cursor:pointer;font-family:inherit;display:inline-flex;align-items:center;gap:6px;margin-bottom:-1px;border-bottom:2px solid;line-height:1';
          styleActive = `${base};font-weight:700;color:${color};border-bottom-color:${color}`;
          styleInactive = `${base};font-weight:600;color:#5A6B5E;border-bottom-color:transparent`;
          styleDisabled = `${base};font-weight:600;color:#B5AB85;border-bottom-color:transparent;cursor:not-allowed;opacity:0.6`;
        }
        style = disabled ? styleDisabled : (isActive ? styleActive : styleInactive);

        // Badge opcional (pill de contagem/rotulo) — como os contadores da Genealogia.
        let badgeHtml = '';
        if (badgeAttr != null && badgeAttr !== '') {
          const badgeStyle = (isFolder && isActive)
            ? 'background:rgba(255,255,255,.22);color:#fff;border:1px solid rgba(255,255,255,.4)'
            : `background:#F4EED9;color:#8A8575;border:1px solid ${BORDER}`;
          badgeHtml = `<span style="font-size:10px;font-weight:800;padding:1px 6px;border-radius:8px;${badgeStyle}">${this._escape(badgeAttr)}</span>`;
        }

        return `<button data-tab-btn="${this._escapeAttr(v)}" type="button" ${disabled ? 'disabled' : ''} style="height:auto !important;min-height:0 !important;${style}">${iconHtml ? `<span style="display:inline-flex;align-items:center;line-height:0">${iconHtml}</span>` : ''}${label ? `<span>${label}</span>` : ''}${badgeHtml}</button>`;
      }).join('');

      this.style.display = this.style.display || 'block';

      const headerStyle = isFolder
        ? `display:flex;flex-wrap:wrap;border-bottom:2px solid ${BORDER};gap:4px`
        : 'display:flex;flex-wrap:wrap;border-bottom:1px solid #E5DDC8;gap:2px';

      this.innerHTML = `
        <div class="gt-card" style="font-family:'Poppins','DejaVu Sans',Arial,sans-serif">
          <div class="gt-header" role="tablist" style="${headerStyle}">
            ${buttonsHtml}
          </div>
          <div class="gt-content" style="padding-top:14px"></div>
        </div>
      `;

      // Reposiciona os <granado-tab> no slot de conteudo, com display ajustado
      const contentEl = this.querySelector('.gt-content');
      tabs.forEach(tab => {
        const v = tab.getAttribute('value') || '';
        tab.style.display = v === currentValue ? 'block' : 'none';
        contentEl.appendChild(tab);
      });

      // Wire dos botoes
      this.querySelectorAll('[data-tab-btn]').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          const v = btn.getAttribute('data-tab-btn');
          if (v === this.getAttribute('value')) return;
          this.setAttribute('value', v);
          const tab = tabs.find(t => (t.getAttribute('value') || '') === v) || null;
          // Evento real (CustomEvent) — permite addEventListener('change', ...)
          this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: { value: v, tab: tab } }));
          // Handler inline (atributo onchangeevent)
          const handler = this.getAttribute('onchangeevent');
          if (handler) new Function('value', 'tab', handler).call(this, v, tab);
        });

        // Hover sutil (type-aware)
        btn.addEventListener('mouseenter', () => {
          if (btn.disabled) return;
          const v = btn.getAttribute('data-tab-btn');
          if (v === this.getAttribute('value')) return;
          if (isFolder) btn.style.background = '#F4EED9'; else btn.style.color = color;
        });
        btn.addEventListener('mouseleave', () => {
          if (btn.disabled) return;
          const v = btn.getAttribute('data-tab-btn');
          if (v === this.getAttribute('value')) return;
          if (isFolder) btn.style.background = '#FDFAF1'; else btn.style.color = '#5A6B5E';
        });
      });

      if (this.isConnected && this._observer) {
        this._observer.observe(this, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['value', 'label', 'icon', 'disabled', 'badge']
        });
      }
    }

    _escape(s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, ch =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    }

    _escapeAttr(s) {
      return String(s == null ? '' : s).replace(/"/g, '&quot;');
    }

    _resolveIcon(name) {
      const COMMON = `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block"`;
      const wrap = (inner) => `<svg width="14" height="14" ${COMMON}>${inner}</svg>`;
      const ICONS = {
        info: wrap(`<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`),
        settings: wrap(`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>`),
        user: wrap(`<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`),
        mail: wrap(`<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`),
        search: wrap(`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`),
        calendar: wrap(`<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`),
        edit: wrap(`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`),
        list: wrap(`<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>`),
        file: wrap(`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`),
      };
      return ICONS[name] || name;
    }
  }

  customElements.define('granado-tabs', GranadoTabs);

  window.GranadoTabs = GranadoTabs;
}
