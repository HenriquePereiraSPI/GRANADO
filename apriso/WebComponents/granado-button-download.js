/* ============================================================
   <granado-button-download>
   Botao que exporta um JSON (lista de objetos) para CSV.
   Mesmo visual e comportamento do granado-button (variantes,
   tamanhos, hover/press, ripple), sem depender de nenhum outro
   web component.

   A exportacao e a mesma do granado-table: cada celula sai limpa
   em UMA linha (HTML, quebras de linha e invisiveis removidos),
   com BOM UTF-8 para o Excel abrir os acentos certo.

   Atributos:
     data           - JSON: array de objetos. Cada objeto vira uma linha;
                      o cabecalho sao as chaves dos objetos, na ordem em
                      que aparecem. Um objeto unico vira 1 linha.
                      Tambem via propriedade: el.data = [...]
     filename       - nome do arquivo (sem extensao; ".csv" e opcional).
                      Default: "export_ddMMyyyy_HHmmss".

   Visual (iguais ao granado-button):
     label          - texto do botao. Default "Exportar CSV".
     icon           - icone. Default "download". Aceita os mesmos presets do
                      granado-button ou qualquer texto/emoji/SVG bruto.
     iconposition   - "left" (default) ou "right".
     variant        - "primary" (default) | "secondary" | "ghost".
     size           - "sm" | "md" (default) | "lg" | "xl" OU altura custom
                      ("30", "30px", "2.5rem").
     color          - cor base. Default "#1C5C31".
     disabled       - "true" desabilita.
     background / border-color / text-color
     hover-background / hover-border-color / hover-text-color
     press-background / press-border-color / press-text-color

   Metodos JS:
     el.exportCsv(filename?) -> exporta sem clique.

   Exemplo:
   <script src="[AprisoScripts]/WebComponents/granado-button-download.js"></script>

   <granado-button-download filename="pesagens"
     data='[{"Ordem":"671697","Material":"M567","Peso":"1.0"}]'>
   </granado-button-download>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-button-download')) {
  class GranadoButtonDownload extends HTMLElement {
    static get observedAttributes() {
      return ['label', 'icon', 'iconposition', 'variant', 'size', 'color', 'disabled',
        'background', 'border-color', 'text-color',
        'hover-background', 'hover-border-color', 'hover-text-color',
        'press-background', 'press-border-color', 'press-text-color'];
    }

    connectedCallback() {
      // lazy-prop: el.data setado antes do upgrade do elemento
      if (Object.prototype.hasOwnProperty.call(this, 'data')) {
        const v = this.data;
        delete this.data;
        this.data = v;
      }
      if (!this._mounted) {
        this._build();
        this._mounted = true;
      }
      this._update();
    }

    attributeChangedCallback(name) {
      if (!this._mounted) return;
      if (['icon', 'iconposition', 'size'].includes(name)) this._build();
      this._update();
    }

    get disabled() { return this.getAttribute('disabled') === 'true'; }

    get data() {
      if (this._dataProp !== undefined) return this._dataProp;
      const s = this.getAttribute('data');
      if (s == null || s === '') return [];
      try { return JSON.parse(s); }
      catch (e) { console.error('[granado-button-download] JSON invalido em data:', e); return []; }
    }
    set data(v) { this._dataProp = v; }

    // Exporta sem clique. filename opcional (senao usa o atributo / default).
    exportCsv(filename) {
      const name = this._cleanFilename(filename) || this._filename();
      this._exportCsv(this._rows(this.data), name);
    }

    // ------------------------------------------------------------
    // Render (mesmo do granado-button)
    // ------------------------------------------------------------
    _build() {
      this.style.display = this.style.display || 'inline-block';

      const iconAttr = this.hasAttribute('icon') ? this.getAttribute('icon') : 'download';
      const iconPos = this.getAttribute('iconposition') === 'right' ? 'right' : 'left';
      const size = this.getAttribute('size') || 'md';
      const iconSize = size === 'sm' ? 12 : (size === 'lg' || size === 'xl') ? 16 : 14;
      const iconHtml = iconAttr ? this._resolveIcon(iconAttr, iconSize) : '';

      const labelSpan = `<span data-btn-label style="line-height:1.4 !important"></span>`;
      const iconSpan = iconHtml
        ? `<span data-btn-icon style="display:inline-flex;align-items:center;line-height:0">${iconHtml}</span>`
        : '';
      const order = iconPos === 'right' ? `${labelSpan}${iconSpan}` : `${iconSpan}${labelSpan}`;

      this.innerHTML = `<button data-btn-root type="button" style="height:auto !important;min-height:0 !important;line-height:1.4 !important;position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid;border-radius:6px;cursor:pointer;font-family:'Poppins','DejaVu Sans',Arial,sans-serif;font-weight:600;outline:none;transition:background 0.15s,border-color 0.15s,color 0.15s,transform 0.1s;box-sizing:border-box">${order}</button>`;

      const btn = this.querySelector('[data-btn-root]');

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.disabled) return;
        this._ripple(e, btn);
        this.exportCsv();
      });

      this._hover = false;
      this._press = false;

      btn.addEventListener('mouseenter', () => {
        if (this.disabled) return;
        this._hover = true;
        this._applyVariantStyles();
      });
      btn.addEventListener('mouseleave', () => {
        if (this.disabled) return;
        btn.style.transform = '';
        this._hover = false;
        this._press = false;
        this._applyVariantStyles();
      });

      const press = () => {
        if (this.disabled) return;
        btn.style.transform = 'scale(0.96)';
        this._press = true;
        this._applyVariantStyles();
      };
      const release = () => {
        if (this.disabled) return;
        btn.style.transform = '';
        this._press = false;
        this._applyVariantStyles();
      };
      btn.addEventListener('mousedown', press);
      btn.addEventListener('mouseup', release);
      btn.addEventListener('touchstart', press, { passive: true });
      btn.addEventListener('touchend', release);
      btn.addEventListener('touchcancel', release);
    }

    _ripple(e, btn) {
      if (typeof btn.animate !== 'function') return;
      const rect = btn.getBoundingClientRect();
      const cx = e.clientX || 0;
      const cy = e.clientY || 0;
      let x, y;
      if (cx === 0 && cy === 0) {
        x = rect.width / 2;
        y = rect.height / 2;
      } else {
        x = cx - rect.left;
        y = cy - rect.top;
      }
      const size = Math.max(rect.width, rect.height);

      const variant = this.getAttribute('variant') || 'primary';
      const rippleBg = this._currentColors().text;
      const startOpacity = variant === 'primary' ? 0.45 : 0.22;

      const ripple = document.createElement('span');
      ripple.style.cssText = `position:absolute;left:${x - size / 2}px;top:${y - size / 2}px;width:${size}px;height:${size}px;border-radius:50%;pointer-events:none;background:${rippleBg};transform:scale(0);opacity:${startOpacity}`;
      btn.appendChild(ripple);

      const anim = ripple.animate(
        [
          { transform: 'scale(0)', opacity: startOpacity },
          { transform: 'scale(2.2)', opacity: 0 }
        ],
        { duration: 450, easing: 'cubic-bezier(0.4,0,0.2,1)' }
      );
      const cleanup = () => ripple.remove();
      anim.onfinish = cleanup;
      anim.oncancel = cleanup;
    }

    _update() {
      const btn = this.querySelector('[data-btn-root]');
      if (!btn) return;

      const size = (this.getAttribute('size') || 'md').trim();
      const PRESET_PAD = { sm: '6px 10px', md: '8px 14px', lg: '10px 18px', xl: '12px 20px' };
      const isPreset = Object.prototype.hasOwnProperty.call(PRESET_PAD, size);
      const fontSize = size === 'sm' ? '11px' : (size === 'lg' || size === 'xl') ? '14px' : '13px';

      if (isPreset) {
        btn.style.setProperty('padding', PRESET_PAD[size], 'important');
        btn.style.setProperty('height', 'auto', 'important');   // altura pelo conteudo; vence o height fixo do apriso.css
      } else {
        const h = /^[0-9.]+$/.test(size) ? size + 'px' : size;   // "30" -> "30px"
        btn.style.setProperty('height', h, 'important');
        btn.style.setProperty('padding', '0 14px', 'important');
      }
      btn.style.fontSize = fontSize;
      btn.disabled = this.disabled;
      if (this.disabled) { this._hover = false; this._press = false; btn.style.transform = ''; }
      btn.style.cursor = this.disabled ? 'not-allowed' : 'pointer';
      btn.style.opacity = this.disabled ? '0.55' : '1';

      const labelEl = this.querySelector('[data-btn-label]');
      if (labelEl) {
        const label = this.hasAttribute('label') ? this.getAttribute('label') : 'Exportar CSV';
        if (labelEl.textContent !== label) labelEl.textContent = label;
        labelEl.style.display = label ? '' : 'none';
      }

      this._applyVariantStyles();
    }

    _variantColors(estado) {
      const variant = this.getAttribute('variant') || 'primary';
      const color = this.getAttribute('color') || '#1C5C31';
      const hover = estado === 'hover';

      if (variant === 'secondary') {
        return { bg: hover ? '#F5EFD9' : '#FDFAF1', border: color, text: color };
      }
      if (variant === 'ghost') {
        return { bg: hover ? '#ECE3C2' : 'transparent', border: 'transparent', text: color };
      }
      const bg = hover ? this._darken(color, 0.12) : color;
      return { bg, border: bg, text: '#fff' };
    }

    _attrColors(prefixo) {
      const ler = (nome) => {
        const v = this.getAttribute(prefixo + nome);
        return v && v.trim() ? v.trim() : null;
      };
      return { bg: ler('background'), border: ler('border-color'), text: ler('text-color') };
    }

    // Prioridade: press > hover > normal. Cada parte cai para o estado de baixo quando nao informada.
    _currentColors() {
      const variant = this.getAttribute('variant') || 'primary';
      const base = this._attrColors('');

      const normalV = this._variantColors('normal');
      const normal = {
        bg: base.bg || normalV.bg,
        border: base.border || (variant === 'primary' && base.bg ? base.bg : normalV.border),
        text: base.text || normalV.text,
      };

      const hoverV = this._variantColors('hover');
      const hoverAttr = this._attrColors('hover-');
      const hoverBgAuto = base.bg ? this._darken(base.bg, 0.12) : hoverV.bg;
      const hoverBg = hoverAttr.bg || hoverBgAuto;
      const hover = {
        bg: hoverBg,
        border: hoverAttr.border || base.border
          || (variant === 'primary' ? (hoverAttr.bg || hoverBgAuto) : hoverV.border),
        text: hoverAttr.text || normal.text,
      };

      let atual = this._hover || this._press ? hover : normal;

      if (this._press) {
        const p = this._attrColors('press-');
        atual = { bg: p.bg || atual.bg, border: p.border || atual.border, text: p.text || atual.text };
      }
      return atual;
    }

    _applyVariantStyles() {
      const btn = this.querySelector('[data-btn-root]');
      if (!btn) return;
      const c = this._currentColors();
      btn.style.background = c.bg;
      btn.style.color = c.text;
      btn.style.borderColor = c.border;
    }

    _darken(hex, amount) {
      const m = String(hex).match(/^#?([0-9a-f]{6})$/i);
      if (!m) return hex;
      const num = parseInt(m[1], 16);
      let r = (num >> 16) & 0xff;
      let g = (num >> 8) & 0xff;
      let b = num & 0xff;
      r = Math.max(0, Math.floor(r * (1 - amount)));
      g = Math.max(0, Math.floor(g * (1 - amount)));
      b = Math.max(0, Math.floor(b * (1 - amount)));
      return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    }

    _resolveIcon(name, size) {
      const COMMON = `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block"`;
      const wrap = (inner) => `<svg width="${size}" height="${size}" ${COMMON}>${inner}</svg>`;
      const ICONS = {
        plus: wrap(`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`),
        minus: wrap(`<line x1="5" y1="12" x2="19" y2="12"/>`),
        x: wrap(`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`),
        check: wrap(`<polyline points="20 6 9 17 4 12"/>`),
        trash: wrap(`<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>`),
        edit: wrap(`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`),
        save: wrap(`<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>`),
        download: wrap(`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`),
        upload: wrap(`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>`),
        'arrow-right': wrap(`<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`),
        'arrow-left': wrap(`<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>`),
        search: wrap(`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`),
        refresh: wrap(`<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>`),
        filter: wrap(`<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>`),
        mail: wrap(`<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`),
        settings: wrap(`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>`),
      };
      return ICONS[name] || name;
    }

    // ------------------------------------------------------------
    // Exportacao CSV (mesma do granado-table)
    // ------------------------------------------------------------

    // Normaliza o dado em lista de objetos.
    _rows(d) {
      if (d == null) return [];
      if (!Array.isArray(d)) d = [d];
      return d.filter((r) => r != null && typeof r === 'object');
    }

    _exportCsv(rows, filename) {
      // Cabecalho: todas as chaves dos objetos, na ordem em que aparecem.
      const keys = [];
      rows.forEach((r) => Object.keys(r).forEach((k) => { if (keys.indexOf(k) === -1) keys.push(k); }));

      const escape = (v) => {
        const s = v == null ? '' : String(v);
        return /["\n\r,;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
      };
      const cell = (v) => (v != null && typeof v === 'object') ? JSON.stringify(v) : v;
      const headerLine = keys.map((k) => escape(this._cellText(k))).join(',');
      const dataLines = rows.map((row) => keys.map((k) => escape(this._cellText(cell(row[k])))).join(','));
      const csv = [headerLine].concat(dataLines).join('\r\n');
      const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
      this._download(blob, filename + '.csv');
    }

    _download(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    // Texto da celula em UMA linha limpa (mesma regra do granado-table).
    _cellText(v) {
      let s = v == null ? '' : String(v);
      if (s.indexOf('<') !== -1 || s.indexOf('&') !== -1) {
        s = s.replace(/<br\s*\/?>/gi, ' ').replace(/<\/?(p|div|li|tr|td|th|h[1-6])\b[^>]*>/gi, ' $&');
        // DOMParser e inerte: nao carrega imagens nem roda handlers do conteudo.
        const doc = new DOMParser().parseFromString('<!doctype html><body>' + s, 'text/html');
        s = doc.body ? (doc.body.textContent || '') : s;
      }
      return s
        .replace(/[\r\n\t\f\v\u0085\u2028\u2029\u00A0]/g, ' ')
        .replace(/[\u0000-\u001F\u007F-\u009F\u200B-\u200D\u2060\uFEFF]/g, '')
        .replace(/ {2,}/g, ' ')
        .trim();
    }

    // Nome seguro: sem ".csv" repetido e sem caracteres invalidos no Windows.
    _cleanFilename(v) {
      return String(v == null ? '' : v)
        .trim()
        .replace(/\.csv$/i, '')
        .replace(/[\\/:*?"<>|\u0000-\u001F]/g, '_')
        .trim();
    }

    _filename() {
      const custom = this._cleanFilename(this.getAttribute('filename'));
      if (custom) return custom;
      const d = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      return 'export_' + pad(d.getDate()) + pad(d.getMonth() + 1) + d.getFullYear() +
        '_' + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());
    }
  }

  customElements.define('granado-button-download', GranadoButtonDownload);
  window.GranadoButtonDownload = GranadoButtonDownload;
}
