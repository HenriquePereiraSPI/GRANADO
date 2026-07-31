/* ============================================================
   <granado-timeline-item>
   Item (nó) de uma <granado-timeline> — marcador circular na
   linha vertical + card expansível. Inspirado na cadeia da tela
   Qualidade > Genealogia de Lote.

   Atributos (todos opcionais, exceto o conteúdo):
     icon      - emoji/texto/SVG exibido dentro do marcador.
     title     - título do card.
     subtitle  - subtítulo (linha abaixo).
     status    - paleta de cor: "verde" (default) | "ouro" | "azul" |
                 "vermelho" | "alr". Aliases: ok→verde, inf/info→azul,
                 err/per→vermelho, warn→alr.
     color     - cor de destaque customizada (sobrepõe o fg do status:
                 borda esquerda, marcador e eyebrow). Aceita hex/rgb/var().
     badge     - pill opcional no cabeçalho (ex.: contagem/rótulo).
     eyebrow   - texto pequeno acima do título (opcional). Ex.: use-o para
                 uma numeração própria como "Etapa 1 de 4", se quiser.
     open      - "true" começa expandido.

     O CONTEÚDO expansível é qualquer HTML colocado dentro do elemento.

   Evento (CustomEvent, bubbles):
     "timeline-toggle" -> detail { open, title, order }

   Propriedades JS: .title .subtitle .icon .status .color .badge .open
   Métodos: .toggle() .expand() .collapse()
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-timeline-item')) {
  const STATUS = {
    verde: { fg: '#1C7A38', bg: '#D2E8D7', bd: '#98C8A8' },
    ouro: { fg: '#9A7520', bg: '#F4EED9', bd: '#C8A85A' },
    azul: { fg: '#1A4A8C', bg: '#D8E8F8', bd: '#90B8E0' },
    vermelho: { fg: '#8C1A1A', bg: '#FADADD', bd: '#D48888' },
    alr: { fg: '#9A5A00', bg: '#FEF0CC', bd: '#E0B84A' }
  };
  const ALIAS = { ok: 'verde', inf: 'azul', info: 'azul', err: 'vermelho', per: 'vermelho', warn: 'alr', amber: 'alr' };
  const SURFACE = '#FDFAF1';
  const VERDE_ESC = '#0F3319';
  const TEXT2 = '#555555';
  const TEXT3 = '#8A8575';
  const FONT = "'Poppins',sans-serif";
  const MONO = "'Arial',Helvetica,sans-serif";

  class GranadoTimelineItem extends HTMLElement {
    static get observedAttributes() {
      return ['icon', 'title', 'subtitle', 'status', 'color', 'badge', 'eyebrow', 'open', 'data-order', 'data-total'];
    }

    connectedCallback() {
      if (!this._built) this._build();
      else if (this._contentObserver) this._contentObserver.observe(this, { childList: true });
      this._relocateStray();   // recolhe filhos que chegaram tarde (parser) p/ dentro do painel
      this._apply();
    }
    disconnectedCallback() { if (this._contentObserver) this._contentObserver.disconnect(); }
    attributeChangedCallback() { if (this._built) this._apply(); }

    // -------- Public JS API --------
    get open() { return this.getAttribute('open') === 'true'; }
    set open(v) { this.setAttribute('open', v ? 'true' : 'false'); }
    get title() { return this.getAttribute('title') || ''; }
    set title(v) { this.setAttribute('title', String(v)); }
    get subtitle() { return this.getAttribute('subtitle') || ''; }
    set subtitle(v) { this.setAttribute('subtitle', String(v)); }
    get icon() { return this.getAttribute('icon') || ''; }
    set icon(v) { this.setAttribute('icon', String(v)); }
    get status() { return this.getAttribute('status') || 'verde'; }
    set status(v) { this.setAttribute('status', String(v)); }
    get color() { return this.getAttribute('color') || ''; }
    set color(v) { this.setAttribute('color', String(v)); }
    get badge() { return this.getAttribute('badge') || ''; }
    set badge(v) { this.setAttribute('badge', String(v)); }

    toggle() { this.open = !this.open; }
    expand() { this.open = true; }
    collapse() { this.open = false; }

    _pal() {
      let key = (this.getAttribute('status') || 'verde').toLowerCase();
      key = ALIAS[key] || key;
      return STATUS[key] || STATUS.verde;
    }

    // -------- Constrói a estrutura UMA vez (preserva o conteúdo) --------
    _build() {
      // captura o conteúdo original (children atuais)
      const content = Array.from(this.childNodes);

      this.style.position = 'relative';
      this.style.display = 'block';
      this.style.paddingLeft = '70px';
      this.style.marginBottom = '14px';
      this.style.fontFamily = FONT;

      // Marcador (círculo na linha)
      const marker = document.createElement('div');
      marker.setAttribute('data-role', 'marker');
      marker.style.cssText = 'position:absolute;left:12px;top:12px;width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 1px 4px rgba(15,51,25,.12);z-index:2;box-sizing:border-box';

      // Card
      const card = document.createElement('div');
      card.setAttribute('data-role', 'card');
      card.style.cssText = `background:${SURFACE};border-radius:10px;overflow:hidden;box-sizing:border-box`;

      // Header (área clicável). Usamos um <div role="button"> em vez de <button>
      // DE PROPÓSITO: o Apriso aplica CSS global agressivo em <button> (padding,
      // altura, line-height, white-space) que vaza para o Light DOM e desfigura o
      // cabeçalho. Um <div> escapa dessas regras — o layout/padding fica só aqui.
      const header = document.createElement('div');
      header.setAttribute('data-role', 'header');
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');
      header.style.cssText = `width:100%;box-sizing:border-box;background:transparent;border:none;margin:0;padding:14px 18px;cursor:pointer;text-align:left;display:flex;align-items:center;gap:12px;font:inherit;line-height:1.4;white-space:normal`;

      const textWrap = document.createElement('div');
      textWrap.style.cssText = 'flex:1;min-width:0';
      const line1 = document.createElement('div');
      line1.style.cssText = 'display:flex;gap:10px;align-items:baseline;margin-bottom:2px;flex-wrap:wrap';
      const eyebrow = document.createElement('span');
      eyebrow.setAttribute('data-role', 'eyebrow');
      eyebrow.style.cssText = `font:900 9px/1.4 ${FONT};letter-spacing:.16em;text-transform:uppercase;font-family:${MONO}`;
      const title = document.createElement('span');
      title.setAttribute('data-role', 'title');
      title.style.cssText = `font:700 16px/1.3 ${FONT};color:${VERDE_ESC};white-space:normal;text-transform:none;letter-spacing:normal`;
      const badge = document.createElement('span');
      badge.setAttribute('data-role', 'badge');
      badge.style.cssText = 'font-size:10px;font-weight:800;padding:1px 7px;border-radius:8px';
      line1.appendChild(eyebrow); line1.appendChild(title); line1.appendChild(badge);
      const subtitle = document.createElement('div');
      subtitle.setAttribute('data-role', 'subtitle');
      subtitle.style.cssText = `font-size:11px;line-height:1.4;color:${TEXT2};white-space:normal;text-transform:none;letter-spacing:normal`;
      textWrap.appendChild(line1); textWrap.appendChild(subtitle);

      const chevron = document.createElement('span');
      chevron.setAttribute('data-role', 'chevron');
      chevron.setAttribute('aria-hidden', 'true');
      chevron.textContent = '›';
      chevron.style.cssText = `font-size:18px;font-weight:900;min-width:18px;transition:transform .18s ease`;

      header.appendChild(textWrap); header.appendChild(chevron);

      // Body (conteúdo expansível)
      const body = document.createElement('div');
      body.setAttribute('data-role', 'body');
      const bodyInner = document.createElement('div');
      bodyInner.setAttribute('data-role', 'content');
      bodyInner.style.cssText = 'padding:2px 18px 16px';
      body.appendChild(bodyInner);

      card.appendChild(header); card.appendChild(body);
      this.appendChild(marker); this.appendChild(card);
      // move o conteúdo original para dentro do body
      content.forEach((n) => bodyInner.appendChild(n));

      this._els = { marker, card, header, eyebrow, title, subtitle, badge, chevron, body, content: bodyInner };
      header.addEventListener('click', () => { this.toggle(); this._emit(); });
      // Como o header é um <div role="button">, tratamos o teclado (Enter/Espaço).
      header.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') {
          ev.preventDefault(); this.toggle(); this._emit();
        }
      });

      // Observa filhos diretos que cheguem depois (parser/append dinâmico) e
      // os move para dentro do painel (body). Sem isso, conteúdo declarado no
      // HTML apareceria FORA do card quando o elemento é definido antes do parse.
      this._contentObserver = new MutationObserver(() => this._relocateStray());
      this._contentObserver.observe(this, { childList: true });

      this._built = true;
    }

    // Move para o body qualquer filho direto que não seja o marcador/card.
    _relocateStray() {
      const e = this._els; if (!e) return;
      const stray = [];
      Array.from(this.childNodes).forEach((n) => { if (n !== e.marker && n !== e.card) stray.push(n); });
      if (!stray.length) return;
      if (this._contentObserver) this._contentObserver.disconnect();
      stray.forEach((n) => e.content.appendChild(n));
      if (this.isConnected && this._contentObserver) this._contentObserver.observe(this, { childList: true });
    }

    _emit() {
      this.dispatchEvent(new CustomEvent('timeline-toggle', {
        bubbles: true, composed: true,
        detail: { open: this.open, title: this.title, order: parseInt(this.getAttribute('data-order'), 10) || null }
      }));
    }

    // -------- Aplica atributos aos elementos (sem recriar) --------
    _apply() {
      const e = this._els; if (!e) return;
      const pal = this._pal();
      const accent = this.getAttribute('color') || pal.fg;

      // marcador
      e.marker.style.background = this.getAttribute('color') ? SURFACE : pal.bg;
      e.marker.style.border = `3px solid ${accent}`;
      e.marker.innerHTML = this.getAttribute('icon') || '';   // aceita emoji/texto/SVG bruto

      // card
      e.card.style.border = `2px solid ${pal.bd}`;
      e.card.style.borderLeft = `5px solid ${accent}`;

      // eyebrow — texto acima do título, exibido APENAS se o item o definir.
      // (Não há mais numeração automática; se quiser "Etapa X/Y", passe no eyebrow.)
      const eb = this.getAttribute('eyebrow');
      const ebText = (eb != null && eb !== '') ? eb : '';
      e.eyebrow.textContent = ebText;
      e.eyebrow.style.display = ebText ? '' : 'none';
      e.eyebrow.style.color = accent;

      // título / subtítulo
      e.title.textContent = this.getAttribute('title') || '';
      e.title.style.display = this.getAttribute('title') ? '' : 'none';
      const sub = this.getAttribute('subtitle') || '';
      e.subtitle.textContent = sub;
      e.subtitle.style.display = sub ? '' : 'none';

      // badge
      const bg = this.getAttribute('badge');
      if (bg != null && bg !== '') {
        e.badge.textContent = bg;
        e.badge.style.display = '';
        e.badge.style.background = pal.bg;
        e.badge.style.color = accent;
        e.badge.style.border = `1px solid ${pal.bd}`;
      } else { e.badge.style.display = 'none'; }

      // chevron
      e.chevron.style.color = accent;

      // estado aberto/fechado
      const open = this.open;
      e.body.style.display = open ? '' : 'none';
      e.body.style.borderTop = open ? `1px solid ${pal.bd}` : 'none';
      e.chevron.style.transform = open ? 'rotate(90deg)' : 'rotate(0)';
    }

    _esc(s) { return String(s == null ? '' : s).replace(/[&<>]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch])); }
  }

  customElements.define('granado-timeline-item', GranadoTimelineItem);
  window.GranadoTimelineItem = GranadoTimelineItem;
}
