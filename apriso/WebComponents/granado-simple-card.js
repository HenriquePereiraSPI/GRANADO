/* ============================================================
   <granado-simple-card>
   Card com faixa de destaque colorida, titulo e subtitulo.

   Atributos:
     title            - texto do titulo
     subtitle         - texto secundario
     color            - cor base do card. Por padrao a faixa de destaque,
                        o titulo, o icone e a borda fina DERIVAM desta cor.
     border-position  - posicao da faixa de destaque ("borda mais forte"):
                        left (padrao) | top | right | bottom
     icon             - opcional. Emoji/texto exibido num badge circular
                        no topo-direito, tematizado pela cor do icone.

   Overrides opcionais de cor (cada um sobrepoe o default vindo de `color`):
     text-color       - cor do titulo            (default: color)
     subtitle-color   - cor do subtitulo         (default: #4B5563)
     icon-color       - cor do icone + badge     (default: color)
     border-color     - cor da borda fina 1px    (default: tom claro de color)
                        Use border-color="transparent" para SEM borda fina.

   Overrides opcionais de tamanho de fonte (aceitam px, rem, etc.):
     title-size       - tamanho da fonte do titulo    (default: 16px)
     subtitle-size    - tamanho da fonte do subtitulo (default: 13px)

     onclickevent     - codigo JS executado no clique (opcional).
                        Quando setado, o card vira clicavel (cursor + hover).

   Exemplo de uso:

   <script src="assets/WebComponents/granado-simple-card.js"></script>

   <!-- Tudo derivado de color -->
   <granado-simple-card
       title="Em Pesagem"
       subtitle="OP-2025-0416 - Loção Hidratante"
       color="#1A4A8C"
       border-position="top"
       icon="🔄">
   </granado-simple-card>

   <!-- Sobrescrevendo cores individualmente -->
   <granado-simple-card
       title="Aprovado"
       subtitle="Liberado para envase"
       color="#1C5C31"
       text-color="#103E20"
       icon-color="#9A7B1C"
       border-color="#E5DDC8"
       icon="✓">
   </granado-simple-card>

   <granado-simple-card
       title="OP-2025-0042"
       subtitle="Clique para selecionar"
       onclickevent="alert('OP selecionada')">
   </granado-simple-card>
   ============================================================ */

class GranadoSimpleCard extends HTMLElement {
    static get observedAttributes() {
        return [
            'title', 'subtitle', 'color', 'border-position',
            'text-color', 'subtitle-color', 'icon-color', 'border-color', 'icon',
            'title-size', 'subtitle-size', 'onclickevent',
        ];
    }

    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }

    /* hex -> "r,g,b" (suporta #rgb e #rrggbb). Retorna null se nao for hex. */
    _rgb(hex) {
        if (typeof hex !== 'string') return null;
        let h = hex.trim().replace('#', '');
        if (h.length === 3) h = h.split('').map((c) => c + c).join('');
        if (h.length !== 6 || /[^0-9a-fA-F]/.test(h)) return null;
        const n = parseInt(h, 16);
        return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
    }

    render() {
        const title = this.getAttribute('title') || '';
        const subtitle = this.getAttribute('subtitle') || '';
        const color = this.getAttribute('color') || '#1C5C31';
        const icon = this.getAttribute('icon');
        const onClickEvent = this.getAttribute('onclickevent');
        const pos = (this.getAttribute('border-position') || 'left').toLowerCase();

        /* Overrides opcionais — default segue `color`. */
        const textColor = this.getAttribute('text-color') || color;
        const subtitleColor = this.getAttribute('subtitle-color') || '#4B5563';
        const iconColor = this.getAttribute('icon-color') || color;
        const borderColorAttr = this.getAttribute('border-color');

        /* Overrides opcionais de tamanho de fonte. */
        const titleSize = this.getAttribute('title-size') || '16px';
        const subtitleSize = this.getAttribute('subtitle-size') || '13px';

        const RADIUS = '8px';
        const THICK = '4px';

        /* Borda fina: override explicito OU tom claro derivado de `color`
           (fallback creme neutro quando a cor nao for hex). */
        const colorRgb = this._rgb(color);
        const cardBorder = borderColorAttr
            || (colorRgb ? `rgba(${colorRgb},0.4)` : '#E5DDC8');

        /* Faixa de destaque ("borda mais forte") conforme a posicao escolhida. */
        const accentMap = {
            left:   `top:0;left:0;width:${THICK};height:100%;border-radius:${RADIUS} 0 0 ${RADIUS};`,
            right:  `top:0;right:0;width:${THICK};height:100%;border-radius:0 ${RADIUS} ${RADIUS} 0;`,
            top:    `top:0;left:0;right:0;height:${THICK};border-radius:${RADIUS} ${RADIUS} 0 0;`,
            bottom: `left:0;right:0;bottom:0;height:${THICK};border-radius:0 0 ${RADIUS} ${RADIUS};`,
        };
        const accentStyle = accentMap[pos] || accentMap.left;

        /* Badge do icone, tematizado pela cor do icone (fundo claro + borda). */
        let iconHtml = '';
        if (icon) {
            const iconRgb = this._rgb(iconColor);
            const badgeBg = iconRgb ? `rgba(${iconRgb},0.12)` : '#F5EFD9';
            const badgeBorder = iconRgb ? `rgba(${iconRgb},0.4)` : iconColor;
            iconHtml = `<span style="
                flex-shrink:0;
                width:28px; height:28px;
                display:inline-flex; align-items:center; justify-content:center;
                font-size:14px; line-height:1;
                background:${badgeBg};
                border:1px solid ${badgeBorder};
                color:${iconColor};
                border-radius:50%;
            ">${icon}</span>`;
        }

        this.innerHTML = `
            <div style="
                position: relative;
                overflow: hidden;
                background: #FDFAF1;
                border: 1px solid ${cardBorder};
                border-radius: ${RADIUS};
                padding: 18px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.06);
                font-family: 'Poppins', 'DejaVu Sans', Arial, sans-serif;
                transition: box-shadow 0.15s, transform 0.15s;
                ${onClickEvent ? 'cursor: pointer;' : ''}
            "
            ${onClickEvent ? `
                onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-1px)';"
                onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.06)'; this.style.transform='translateY(0)';"
            ` : ''}
            >
                <span style="position:absolute;background:${color};${accentStyle}"></span>

                <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:6px">
                    <h3 style="
                        margin: 0;
                        font-family: 'Poppins', 'DejaVu Sans', Arial, sans-serif;
                        font-size: ${titleSize};
                        font-weight: 700;
                        color: ${textColor};
                        line-height: 1.2;
                    ">${title}</h3>
                    ${iconHtml}
                </div>

                <p style="
                    margin: 0;
                    font-size: ${subtitleSize};
                    line-height: 1.5;
                    color: ${subtitleColor};
                ">${subtitle}</p>
            </div>
        `;

        if (onClickEvent) {
            this.querySelector('div').addEventListener('click', () => {
                new Function(onClickEvent).call(this);
            });
        }
    }
}

customElements.define('granado-simple-card', GranadoSimpleCard);
