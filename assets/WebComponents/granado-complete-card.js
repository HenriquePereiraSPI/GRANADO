/* ============================================================
   <granado-complete-card>
   Card completo com icone, titulo, subtitulo, cor de destaque
   e badge de status (visual baseado no #sala-btn-A da tela
   "Selecao de Ordem de Pesagem").

   Atributos (todos opcionais):
     title         - texto do titulo (ex.: "Sala A")
     subtitle      - texto secundario (ex.: "4 Balancas")
     color         - cor principal (borda + badge). Aceita qualquer
                     cor CSS valida (ex.: "var(--verde)" ou "#1C5C31").
     status        - texto do badge de status (ex.: "Disponivel").
                     Quando vazio, o badge nao e renderizado.
     icon          - icone exibido no topo. Aceita emoji ou qualquer
                     texto curto (ex.: "🅰️", "⚙️", "OP").
     onclickevent  - codigo JS executado no clique (opcional).
                     Quando setado, o card vira clicavel (cursor + hover).

   Exemplo de uso:

   <script src="assets/WebComponents/granado-complete-card.js"></script>

   <granado-complete-card
       icon="A"
       title="Sala A"
       subtitle="4 Balancas"
       status="Disponivel">
   </granado-complete-card>

   <granado-complete-card
       icon="B"
       title="Sala B"
       subtitle="3 Balancas"
       color="#9A7B1C"
       status="1 em uso"
       onclickevent="pesSelSala('B')">
   </granado-complete-card>
   ============================================================ */

class GranadoCompleteCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'subtitle', 'color', 'status', 'icon', 'onclickevent'];
    }

    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }

    render() {
        const title = this.getAttribute('title') || '';
        const subtitle = this.getAttribute('subtitle') || '';
        const color = this.getAttribute('color') || '#1C5C31';
        const status = this.getAttribute('status') || '';
        const icon = this.getAttribute('icon') || '';
        const onClickEvent = this.getAttribute('onclickevent');

        this.innerHTML = `
            <div style="
                position: relative;
                background: #F5EFD9;
                border: 2px solid ${color};
                border-radius: 8px;
                padding: 16px 12px;
                text-align: center;
                font-family: system-ui, -apple-system, sans-serif;
                transition: box-shadow 0.18s, transform 0.18s;
                ${onClickEvent ? 'cursor: pointer;' : ''}
            "
            ${onClickEvent ? `
                onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-1px)';"
                onmouseout="this.style.boxShadow='none'; this.style.transform='translateY(0)';"
            ` : ''}
            >
                ${icon ? `
                    <div style="
                        font-size: 28px;
                        margin-bottom: 6px;
                        line-height: 1;
                    ">${icon}</div>
                ` : ''}

                ${title ? `
                    <div style="
                        font-size: 13px;
                        font-weight: 900;
                        color: #1F2937;
                        margin-bottom: 4px;
                        line-height: 1.2;
                    ">${title}</div>
                ` : ''}

                ${subtitle ? `
                    <div style="
                        font-family: system-ui, -apple-system, sans-serif;
                        font-size: 10px;
                        color: #6B7280;
                        line-height: 1.3;
                    ">${subtitle}</div>
                ` : ''}

                ${status ? `
                    <div style="margin-top: 8px;">
                        <span style="
                            display: inline-block;
                            font-size: 9px;
                            font-weight: 900;
                            letter-spacing: .06em;
                            text-transform: uppercase;
                            padding: 3px 8px;
                            border-radius: 4px;
                            background: ${color};
                            color: #FFFFFF;
                            border: 1px solid ${color};
                        ">${status}</span>
                    </div>
                ` : ''}
            </div>
        `;

        if (onClickEvent) {
            this.querySelector('div').addEventListener('click', () => {
                new Function(onClickEvent).call(this);
            });
        }
    }
}

customElements.define('granado-complete-card', GranadoCompleteCard);
