/* ============================================================
   <granado-toast>
   Notificacao temporaria (toast). Tipicamente usada via API
   estatica, nao colocada manualmente no HTML.

   Atributos (todos opcionais):
     variant   - "success" | "error" | "warning" | "info" (default).
     heading   - texto destacado (titulo) do toast.
     message   - mensagem secundaria.
     duration  - tempo em ms ate auto-dismiss. Default 4000. 0 = permanente.
     position  - "top-right" (default) | "top-left" | "top-center" |
                 "bottom-right" | "bottom-left" | "bottom-center".

   API estatica (uso recomendado):
     GranadoToast.show("mensagem")
     GranadoToast.show({ variant, heading, message, duration, position })
     GranadoToast.success(msg, opts?)
     GranadoToast.error(msg, opts?)
     GranadoToast.warning(msg, opts?)
     GranadoToast.info(msg, opts?)
     GranadoToast.dismissAll()

     - retorna o elemento <granado-toast>; chame .dismiss() para fechar manualmente.

   Exemplo:

   <script src="assets/WebComponents/granado-toast.js"></script>

   <button onclick="GranadoToast.success('Salvo com sucesso')">OK</button>
   <button onclick="GranadoToast.error('Falha ao gravar', { heading: 'Erro' })">Erro</button>
   <button onclick="GranadoToast.show({ variant:'warning', heading:'Atencao', message:'Verifique os dados', duration:0 })">Aviso fixo</button>
   ============================================================ */

class GranadoToast extends HTMLElement {
  // ============================================================
  // API estatica
  // ============================================================
  static show(options) {
    if (typeof options === 'string') options = { message: options };
    const opts = options || {};
    const position = opts.position || 'top-right';

    GranadoToast._ensureContainer(position);
    const container = GranadoToast._containers[position];

    const toast = document.createElement('granado-toast');
    if (opts.variant)          toast.setAttribute('variant', opts.variant);
    // 'title' aceito por ergonomia mas mapeado para 'heading'
    const heading = opts.heading != null ? opts.heading : opts.title;
    if (heading != null)       toast.setAttribute('heading', String(heading));
    if (opts.message != null)  toast.setAttribute('message', String(opts.message));
    if (opts.duration != null) toast.setAttribute('duration', String(opts.duration));
    toast.setAttribute('position', position);

    if (position.startsWith('top')) {
      // novo toast aparece no topo da pilha (empurrando os antigos para baixo)
      container.insertBefore(toast, container.firstChild);
    } else {
      // bottom-*: novo no fim da pilha (mais perto da borda inferior)
      container.appendChild(toast);
    }
    return toast;
  }

  static success(msg, opts) { return GranadoToast.show({ ...(opts || {}), variant: 'success', message: msg }); }
  static error(msg, opts)   { return GranadoToast.show({ ...(opts || {}), variant: 'error',   message: msg }); }
  static warning(msg, opts) { return GranadoToast.show({ ...(opts || {}), variant: 'warning', message: msg }); }
  static info(msg, opts)    { return GranadoToast.show({ ...(opts || {}), variant: 'info',    message: msg }); }

  static dismissAll() {
    if (!GranadoToast._containers) return;
    Object.values(GranadoToast._containers).forEach(c => {
      Array.from(c.children).forEach(t => t.dismiss && t.dismiss());
    });
  }

  static _ensureContainer(position) {
    if (!GranadoToast._containers) GranadoToast._containers = {};
    if (GranadoToast._containers[position]) return;
    const ALIGN = {
      'top-right': 'flex-end',
      'top-left': 'flex-start',
      'top-center': 'center',
      'bottom-right': 'flex-end',
      'bottom-left': 'flex-start',
      'bottom-center': 'center'
    };
    const POS = {
      'top-right':    'top:20px;right:20px',
      'top-left':     'top:20px;left:20px',
      'top-center':   'top:20px;left:50%;transform:translateX(-50%)',
      'bottom-right': 'bottom:20px;right:20px',
      'bottom-left':  'bottom:20px;left:20px',
      'bottom-center':'bottom:20px;left:50%;transform:translateX(-50%)'
    };
    const div = document.createElement('div');
    div.setAttribute('data-toast-container', position);
    div.style.cssText = `position:fixed;z-index:9999;pointer-events:none;display:flex;flex-direction:column;gap:10px;align-items:${ALIGN[position]};${POS[position]}`;
    document.body.appendChild(div);
    GranadoToast._containers[position] = div;
  }

  // ============================================================
  // Instancia
  // ============================================================
  static get observedAttributes() {
    return ['variant', 'heading', 'message', 'duration', 'position'];
  }

  connectedCallback() {
    if (!this._rendered) {
      this._render();
      this._rendered = true;
      this._animateIn();
      this._scheduleDismiss();
    }
  }

  disconnectedCallback() {
    if (this._dismissTimer) {
      clearTimeout(this._dismissTimer);
      this._dismissTimer = null;
    }
  }

  attributeChangedCallback() {
    if (this._rendered) this._render();
  }

  _render() {
    const variant = (this.getAttribute('variant') || 'info').toLowerCase();
    const heading = this.getAttribute('heading') || '';
    const message = this.getAttribute('message') || '';
    const COLORS = { success: '#1C7A38', error: '#C0392B', warning: '#9A5A00', info: '#2C5A8C' };
    const color = COLORS[variant] || COLORS.info;

    this.style.cssText = 'pointer-events:auto;display:block';

    const icon = this._iconFor(variant);

    this.innerHTML = `
      <div data-toast-card style="display:flex;align-items:flex-start;gap:12px;background:#FDFAF1;border:1px solid #E5DDC8;border-left:4px solid ${color};border-radius:8px;padding:12px 14px;box-shadow:0 6px 20px rgba(0,0,0,0.16);font-family:'Poppins','DejaVu Sans',Arial,sans-serif;min-width:280px;max-width:380px;pointer-events:auto;box-sizing:border-box">
        <span style="color:${color};display:flex;align-items:center;line-height:0;flex-shrink:0;margin-top:1px">${icon}</span>
        <div style="flex:1;min-width:0">
          ${heading ? `<div style="font-size:13px;font-weight:700;color:#103E20;margin:0 0 2px;font-family:inherit">${this._escape(heading)}</div>` : ''}
          ${message ? `<div style="font-size:12px;color:#5A6B5E;font-family:inherit;line-height:1.4">${this._escape(message)}</div>` : ''}
        </div>
        <button data-toast-close type="button" aria-label="Fechar" style="background:transparent;border:none;cursor:pointer;padding:2px;height:auto;color:#8A9E8E;display:flex;align-items:center;line-height:0;flex-shrink:0;border-radius:3px;font-family:inherit"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
    `;

    const closeBtn = this.querySelector('[data-toast-close]');
    if (closeBtn) closeBtn.addEventListener('click', () => this.dismiss());

    const card = this.querySelector('[data-toast-card]');
    if (card) {
      card.addEventListener('mouseenter', () => this._pauseDismiss());
      card.addEventListener('mouseleave', () => this._resumeDismiss());
    }
  }

  _iconFor(variant) {
    const COMMON = `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"`;
    const ICONS = {
      success: `<svg width="20" height="20" ${COMMON}><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>`,
      error:   `<svg width="20" height="20" ${COMMON}><circle cx="12" cy="12" r="10"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>`,
      warning: `<svg width="20" height="20" ${COMMON}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
      info:    `<svg width="20" height="20" ${COMMON}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
    };
    return ICONS[variant] || ICONS.info;
  }

  _animateIn() {
    const card = this.querySelector('[data-toast-card]');
    if (!card) return;
    const position = this.getAttribute('position') || 'top-right';
    const start = position.startsWith('top') ? 'translateY(-12px)' : 'translateY(12px)';
    card.animate(
      [{ transform: start, opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }],
      { duration: 220, easing: 'cubic-bezier(0.4,0,0.2,1)', fill: 'backwards' }
    );
  }

  _scheduleDismiss() {
    const dur = parseInt(this.getAttribute('duration') || '4000', 10);
    if (isNaN(dur) || dur <= 0) return;
    this._remainingTime = dur;
    this._startTime = Date.now();
    this._dismissTimer = setTimeout(() => this.dismiss(), dur);
  }

  _pauseDismiss() {
    if (!this._dismissTimer) return;
    clearTimeout(this._dismissTimer);
    this._remainingTime -= (Date.now() - this._startTime);
    this._dismissTimer = null;
  }

  _resumeDismiss() {
    if (this._dismissTimer || !(this._remainingTime > 0)) return;
    this._startTime = Date.now();
    this._dismissTimer = setTimeout(() => this.dismiss(), this._remainingTime);
  }

  dismiss() {
    if (this._dismissing) return;
    this._dismissing = true;
    if (this._dismissTimer) {
      clearTimeout(this._dismissTimer);
      this._dismissTimer = null;
    }
    const card = this.querySelector('[data-toast-card]');
    if (!card) { this.remove(); return; }
    const position = this.getAttribute('position') || 'top-right';
    const end = position.startsWith('top') ? 'translateY(-8px)' : 'translateY(8px)';
    const anim = card.animate(
      [{ transform: 'translateY(0)', opacity: 1 }, { transform: end, opacity: 0 }],
      { duration: 200, easing: 'cubic-bezier(0.4,0,0.2,1)', fill: 'forwards' }
    );
    const cleanup = () => this.remove();
    anim.onfinish = cleanup;
    anim.oncancel = cleanup;
  }

  _escape(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, ch =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }
}

customElements.define('granado-toast', GranadoToast);
