/* ============================================================
   <granado-calendar>
   Input de data (ou data + hora) com popup de calendario.
   Visual no mesmo padrao dos demais componentes Granado.

   Atributos (todos opcionais):
     label         - texto exibido acima do campo. Mesma aparencia do
                     label de <granado-input> / <granado-text>.
     lang          - "pt-br" (default) ou "en". Define meses/dias/labels.
     mode          - "date" (default) ou "datetime". Em datetime exibe
                     campos de hora/minuto/segundo abaixo da grade.
     format        - mascara de retorno. Default:
                       mode="date"     -> "yyyy-MM-dd"
                       mode="datetime" -> "yyyy-MM-dd HH:mm:ss"
                     Tokens: yyyy, MM, dd, HH, mm, ss
     value         - valor inicial. Aceita qualquer string parseavel por
                     `new Date(...)` (ex: "2026-05-06" ou ISO completo).
     color         - cor de destaque (selecionado/hoje/setas). Default: "#1C5C31".
     placeholder   - texto quando nada selecionado. Default por idioma.
     onchangeevent - JS executado quando o usuario altera o valor.
                     Variaveis disponiveis: value (string formatada), dateObj (Date).

   Exemplo:

   <script src="assets/WebComponents/granado-calendar.js"></script>

   <granado-calendar
       mode="date"
       format="dd/MM/yyyy"
       onchangeevent="console.log('escolheu', value)">
   </granado-calendar>

   <granado-calendar
       mode="datetime"
       lang="en"
       value="2026-05-06 14:30:00"
       onchangeevent="document.getElementById('out').textContent = value">
   </granado-calendar>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-calendar')) {
  class GranadoCalendar extends HTMLElement {
    static get observedAttributes() {
      return ['label', 'lang', 'mode', 'format', 'value', 'color', 'placeholder', 'onchangeevent'];
    }

    constructor() {
      super();
      this._open = false;
      this._selected = null;
      this._viewMonth = new Date();
      this._docClickHandler = null;
    }

    connectedCallback() {
      if (!this._initialized) {
        const initial = this.getAttribute('value');
        if (initial) {
          const parsed = this._parseValue(initial);
          if (parsed) {
            this._selected = parsed;
            this._viewMonth = new Date(parsed);
          }
        }
        this._initialized = true;
      }
      this.render();
    }

    disconnectedCallback() {
      this._removeDocClickListener();
    }

    attributeChangedCallback(name) {
      if (name === 'value') {
        const v = this.getAttribute('value');
        this._selected = v ? this._parseValue(v) : null;
        if (this._selected) this._viewMonth = new Date(this._selected);
      }
      if (this.isConnected) this.render();
    }

    // ------------------------------------------------------------
    // Render
    // ------------------------------------------------------------

    render() {
      const lang = (this.getAttribute('lang') || 'pt-br').toLowerCase();
      const mode = this.getAttribute('mode') === 'datetime' ? 'datetime' : 'date';
      const color = this.getAttribute('color') || '#1C5C31';
      const i18n = this._i18n(lang);
      const placeholder = this.getAttribute('placeholder') || i18n.placeholder;
      const fmt = this._format(mode);
      const formatted = this._selected ? this._formatDate(this._selected, fmt) : '';

      const btnBorder = this._open ? color : '#E5DDC8';
      const btnBg = this._open ? '#F5EFD9' : '#FDFAF1';
      const label = this.getAttribute('label') || '';

      this.innerHTML = `
        <div style="position:relative;display:inline-block;font-family:'Poppins','DejaVu Sans',Arial,sans-serif">
          ${label ? `<label data-cal-label style="display:block;font-size:11px;font-weight:600;color:#103E20;margin-bottom:6px;font-family:inherit"></label>` : ''}
          <button data-cal-toggle type="button" style="
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
            color:${formatted ? '#103E20' : '#8A9E8E'};
            border-radius:6px;
            cursor:pointer;
            font-family:inherit;
            min-width:180px;
          ">
            <span style="flex:1;text-align:left">${formatted || placeholder}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </button>
          ${this._open ? this._renderPopup(color, i18n, mode) : ''}
        </div>
      `;

      if (label) {
        const labelEl = this.querySelector('[data-cal-label]');
        if (labelEl) labelEl.textContent = label;
      }

      this._wire(mode, fmt);
      if (this._open) this._positionPopup();
    }

    // Posiciona o popup com position:fixed a partir do retangulo do gatilho,
    // escapando de ancestrais com overflow:hidden / stacking context que o recortavam.
    _positionPopup() {
      const toggle = this.querySelector('[data-cal-toggle]');
      const popup = this.querySelector('[data-cal-popup]');
      if (!toggle || !popup) return;
      const r = toggle.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const ph = popup.offsetHeight || 300;
      const pw = popup.offsetWidth || 260;
      // Flip vertical se nao couber embaixo.
      if (r.bottom + 4 + ph > vh && r.top - 4 - ph > 0) {
        popup.style.top = '';
        popup.style.bottom = (vh - r.top + 4) + 'px';
      } else {
        popup.style.bottom = '';
        popup.style.top = (r.bottom + 4) + 'px';
      }
      // Mantem dentro da largura da viewport.
      let left = r.left;
      if (left + pw > vw - 8) left = Math.max(8, vw - pw - 8);
      popup.style.left = left + 'px';
    }

    _renderPopup(color, i18n, mode) {
      const view = this._viewMonth;
      const year = view.getFullYear();
      const month = view.getMonth();

      const startDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const daysInPrevMonth = new Date(year, month, 0).getDate();

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const sel = this._selected;

      let cells = '';
      for (let i = startDay - 1; i >= 0; i--) {
        cells += this._dayCell(new Date(year, month - 1, daysInPrevMonth - i), false, color, sel, today);
      }
      for (let d = 1; d <= daysInMonth; d++) {
        cells += this._dayCell(new Date(year, month, d), true, color, sel, today);
      }
      const placed = startDay + daysInMonth;
      const trailing = (Math.ceil(placed / 7) * 7) - placed;
      for (let d = 1; d <= trailing; d++) {
        cells += this._dayCell(new Date(year, month + 1, d), false, color, sel, today);
      }

      const weekdayHeaders = i18n.weekdays.map(w =>
        `<div style="font-size:9px;font-weight:900;letter-spacing:.1em;color:#8A9E8E;text-align:center;padding:6px 0">${w}</div>`
      ).join('');

      return `
        <div data-cal-popup style="
          position:fixed;
          z-index:99999;
          background:#FDFAF1;
          border:1px solid #E5DDC8;
          border-radius:8px;
          box-shadow:0 6px 20px rgba(0,0,0,0.14);
          padding:12px;
          min-width:260px;
        ">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <button data-cal-prev type="button" style="background:transparent;border:none;cursor:pointer;color:${color};font-size:18px;font-weight:700;padding:4px 10px;height:auto;font-family:inherit;border-radius:4px">‹</button>
            <div style="font-size:13px;font-weight:700;color:${color};text-transform:capitalize">${i18n.months[month]} ${year}</div>
            <button data-cal-next type="button" style="background:transparent;border:none;cursor:pointer;color:${color};font-size:18px;font-weight:700;padding:4px 10px;height:auto;font-family:inherit;border-radius:4px">›</button>
          </div>
          <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px">
            ${weekdayHeaders}
            ${cells}
          </div>
          ${mode === 'datetime' ? this._renderTimeControls(color) : ''}
          <div style="display:flex;justify-content:space-between;gap:8px;margin-top:10px;padding-top:10px;border-top:1px solid #E5DDC8">
            <button data-cal-clear type="button" style="font-size:11px;padding:5px 10px;height:auto;border:1px solid #D6CDA4;background:#FDFAF1;color:#5A6B5E;border-radius:4px;cursor:pointer;font-family:inherit">${i18n.clear}</button>
            ${mode === 'datetime'
          ? `<button data-cal-apply type="button" style="font-size:11px;font-weight:700;padding:5px 14px;height:auto;border:1px solid ${color};background:${color};color:#fff;border-radius:4px;cursor:pointer;font-family:inherit">${i18n.apply}</button>`
          : `<button data-cal-today type="button" style="font-size:11px;font-weight:700;padding:5px 10px;height:auto;border:1px solid ${color};background:${color};color:#fff;border-radius:4px;cursor:pointer;font-family:inherit">${i18n.today}</button>`
        }
          </div>
        </div>
      `;
    }

    _dayCell(date, isCurrent, color, selected, today) {
      const isSelected = selected && this._sameDay(date, selected);
      const isToday = this._sameDay(date, today);

      let bg = 'transparent';
      let textColor = isCurrent ? '#103E20' : '#B5AB85';
      let weight = '400';
      let outline = '';

      if (isSelected) {
        bg = color;
        textColor = '#fff';
        weight = '700';
      } else if (isToday) {
        textColor = color;
        weight = '700';
        outline = `box-shadow:inset 0 0 0 1px ${color};`;
      }

      const hoverIn = isSelected ? '' : `this.style.background='#ECE3C2'`;
      const hoverOut = isSelected ? '' : `this.style.background='${bg}'`;

      return `<button data-cal-day="${date.getFullYear()}-${date.getMonth()}-${date.getDate()}" type="button" style="
        font-size:11px;
        font-weight:${weight};
        color:${textColor};
        background:${bg};
        border:none;
        border-radius:4px;
        padding:7px 0;
        height:auto;
        cursor:pointer;
        font-family:inherit;
        ${outline}
      " onmouseover="${hoverIn}" onmouseout="${hoverOut}">${date.getDate()}</button>`;
    }

    _renderTimeControls(color) {
      const sel = this._selected || new Date();
      const hh = String(sel.getHours()).padStart(2, '0');
      const mm = String(sel.getMinutes()).padStart(2, '0');
      const ss = String(sel.getSeconds()).padStart(2, '0');
      const inputStyle = "width:42px;font-size:12px;padding:5px;text-align:center;border:1px solid #E5DDC8;border-radius:4px;background:#FDFAF1;font-family:Arial,'DejaVu Sans',Helvetica,sans-serif;color:#103E20";

      return `
        <div style="display:flex;align-items:center;gap:6px;justify-content:center;margin-top:10px;padding-top:10px;border-top:1px solid #E5DDC8">
          <input data-cal-hour type="text" inputmode="numeric" maxlength="2" value="${hh}" style="${inputStyle}">
          <span style="font-weight:700;color:${color}">:</span>
          <input data-cal-minute type="text" inputmode="numeric" maxlength="2" value="${mm}" style="${inputStyle}">
          <span style="font-weight:700;color:${color}">:</span>
          <input data-cal-second type="text" inputmode="numeric" maxlength="2" value="${ss}" style="${inputStyle}">
        </div>
      `;
    }

    // ------------------------------------------------------------
    // Wiring
    // ------------------------------------------------------------

    _wire(mode, fmt) {
      const toggle = this.querySelector('[data-cal-toggle]');
      if (toggle) {
        toggle.addEventListener('click', (e) => {
          e.stopPropagation();
          this._open = !this._open;
          if (this._open) {
            this._viewMonth = this._selected ? new Date(this._selected) : new Date();
          }
          this.render();
          if (this._open) this._addDocClickListener();
          else this._removeDocClickListener();
        });
      }
      if (!this._open) return;

      const prev = this.querySelector('[data-cal-prev]');
      if (prev) prev.addEventListener('click', (e) => {
        e.stopPropagation();
        this._viewMonth = new Date(this._viewMonth.getFullYear(), this._viewMonth.getMonth() - 1, 1);
        this.render();
      });

      const next = this.querySelector('[data-cal-next]');
      if (next) next.addEventListener('click', (e) => {
        e.stopPropagation();
        this._viewMonth = new Date(this._viewMonth.getFullYear(), this._viewMonth.getMonth() + 1, 1);
        this.render();
      });

      this.querySelectorAll('[data-cal-day]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const [y, m, d] = btn.getAttribute('data-cal-day').split('-').map(Number);
          const date = new Date(y, m, d);
          if (mode === 'datetime' && this._selected) {
            date.setHours(this._selected.getHours(), this._selected.getMinutes(), this._selected.getSeconds());
          }
          this._selected = date;
          this._viewMonth = new Date(date);
          this._fireChange();
          if (mode === 'date') {
            this._open = false;
            this._removeDocClickListener();
          }
          this.render();
        });
      });

      if (mode === 'datetime') this._wireTimeInputs(fmt);

      const clear = this.querySelector('[data-cal-clear]');
      if (clear) clear.addEventListener('click', (e) => {
        e.stopPropagation();
        this._selected = null;
        this._fireChange();
        this.render();
      });

      const today = this.querySelector('[data-cal-today]');
      if (today) today.addEventListener('click', (e) => {
        e.stopPropagation();
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        this._selected = now;
        this._viewMonth = new Date(now);
        this._fireChange();
        this._open = false;
        this._removeDocClickListener();
        this.render();
      });

      const apply = this.querySelector('[data-cal-apply]');
      if (apply) apply.addEventListener('click', (e) => {
        e.stopPropagation();
        this._fireChange();
        this._open = false;
        this._removeDocClickListener();
        this.render();
      });
    }

    _wireTimeInputs(fmt) {
      const hour = this.querySelector('[data-cal-hour]');
      const min = this.querySelector('[data-cal-minute]');
      const sec = this.querySelector('[data-cal-second]');
      if (!hour || !min || !sec) return;

      const update = () => {
        let h = parseInt(hour.value, 10); if (isNaN(h)) h = 0;
        let m = parseInt(min.value, 10);  if (isNaN(m)) m = 0;
        let s = parseInt(sec.value, 10);  if (isNaN(s)) s = 0;
        h = Math.max(0, Math.min(23, h));
        m = Math.max(0, Math.min(59, m));
        s = Math.max(0, Math.min(59, s));
        const date = this._selected ? new Date(this._selected) : new Date();
        date.setHours(h, m, s, 0);
        this._selected = date;
        this._fireChange();
        const span = this.querySelector('[data-cal-toggle] > span');
        if (span) span.textContent = this._formatDate(date, fmt);
      };

      [hour, min, sec].forEach(input => {
        input.addEventListener('click', e => e.stopPropagation());
        input.addEventListener('input', () => {
          const cleaned = input.value.replace(/\D/g, '').slice(0, 2);
          if (input.value !== cleaned) input.value = cleaned;
          update();
        });
        input.addEventListener('blur', () => {
          if (input.value === '') input.value = '00';
          else input.value = String(parseInt(input.value, 10)).padStart(2, '0');
          update();
        });
      });
    }

    _addDocClickListener() {
      if (this._docClickHandler) return;
      this._docClickHandler = (e) => {
        if (!this.contains(e.target)) {
          this._open = false;
          this._removeDocClickListener();
          this.render();
        }
      };
      setTimeout(() => document.addEventListener('click', this._docClickHandler), 0);
      // Reposiciona o popup fixed quando a pagina rola/redimensiona.
      if (!this._repositionHandler) {
        this._repositionHandler = () => this._positionPopup();
        window.addEventListener('scroll', this._repositionHandler, true);
        window.addEventListener('resize', this._repositionHandler);
      }
    }

    _removeDocClickListener() {
      if (this._repositionHandler) {
        window.removeEventListener('scroll', this._repositionHandler, true);
        window.removeEventListener('resize', this._repositionHandler);
        this._repositionHandler = null;
      }
      if (this._docClickHandler) {
        document.removeEventListener('click', this._docClickHandler);
        this._docClickHandler = null;
      }
    }

    // ------------------------------------------------------------
    // Helpers
    // ------------------------------------------------------------

    _fireChange() {
      const handler = this.getAttribute('onchangeevent');
      if (!handler) return;
      const fmt = this._format(this.getAttribute('mode') === 'datetime' ? 'datetime' : 'date');
      const value = this._selected ? this._formatDate(this._selected, fmt) : '';
      new Function('value', 'dateObj', handler).call(this, value, this._selected);
    }

    _format(mode) {
      return this.getAttribute('format') || (mode === 'datetime' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd');
    }

    _formatDate(date, fmt) {
      const pad = (n, w = 2) => String(n).padStart(w, '0');
      return fmt
        .replace('yyyy', date.getFullYear())
        .replace('MM', pad(date.getMonth() + 1))
        .replace('dd', pad(date.getDate()))
        .replace('HH', pad(date.getHours()))
        .replace('mm', pad(date.getMinutes()))
        .replace('ss', pad(date.getSeconds()));
    }

    _parseValue(str) {
      const d = new Date(str);
      if (!isNaN(d.getTime())) return d;
      // Try "yyyy-MM-dd HH:mm:ss" with space (some browsers fail)
      const m = String(str).match(/^(\d{4})-(\d{2})-(\d{2})(?:[\sT](\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (m) {
        return new Date(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0), +(m[6] || 0));
      }
      return null;
    }

    _sameDay(a, b) {
      return a.getFullYear() === b.getFullYear()
        && a.getMonth() === b.getMonth()
        && a.getDate() === b.getDate();
    }

    _i18n(lang) {
      if (lang === 'en') {
        return {
          months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          weekdays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          today: 'Today',
          apply: 'Apply',
          clear: 'Clear',
          placeholder: 'Select date'
        };
      }
      return {
        months: ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        weekdays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        today: 'Hoje',
        apply: 'Aplicar',
        clear: 'Limpar',
        placeholder: 'Selecionar data'
      };
    }
  }

  customElements.define('granado-calendar', GranadoCalendar);

  window.GranadoCalendar = GranadoCalendar;
}
