/* ============================================================
   <granado-simple-card>
   Card com faixa lateral colorida, titulo e subtitulo.

   Atributos:
     title         - texto do titulo
     subtitle      - texto secundario
     color         - cor da faixa lateral (qualquer cor CSS valida)
     onclickevent  - codigo JS executado no clique (opcional).
                     Quando setado, o card vira clicavel (cursor + hover).

   Exemplo de uso:

   <script src="assets/WebComponents/granado-simple-card.js"></script>

   <granado-simple-card
       title="OP-2025-0042"
       subtitle="Shampoo Phebo - 5000un">
   </granado-simple-card>

   <granado-simple-card
       title="Linha 03 parada"
       subtitle="Aguardando troca de formato"
       color="#C0392B">
   </granado-simple-card>

   <granado-simple-card
       title="OP-2025-0042"
       subtitle="Clique para selecionar"
       onclickevent="alert('OP selecionada')">
   </granado-simple-card>
   ============================================================ */

class GranadoSimpleCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'subtitle', 'color', 'onclickevent'];
    }

    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }

    render() {
        const title = this.getAttribute('title') || '';
        const subtitle = this.getAttribute('subtitle') || '';
        const color = this.getAttribute('color') || '#1C5C31';
        const onClickEvent = this.getAttribute('onclickevent');

        this.innerHTML = `
            <div style="
                position: relative;
                overflow: hidden;
                background: #FDFAF1;
                border: 1px solid #E5DDC8;
                border-radius: 8px;
                padding: 18px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.06);
                font-family: 'Lato', 'DejaVu Sans', Arial, sans-serif;
                transition: box-shadow 0.15s, transform 0.15s;
                ${onClickEvent ? 'cursor: pointer;' : ''}
            "
            ${onClickEvent ? `
                onmouseover="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'; this.style.transform='translateY(-1px)';"
                onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.06)'; this.style.transform='translateY(0)';"
            ` : ''}
            >
                <span style="
                    position: absolute;
                    top: 0; left: 0;
                    width: 4px; height: 100%;
                    background: ${color};
                    border-radius: 8px 0 0 8px;
                "></span>

                <h3 style="
                    margin: 0 0 6px;
                    font-family: 'Lato', 'DejaVu Sans', Arial, sans-serif;
                    font-size: 16px;
                    font-weight: 700;
                    color: #103E20;
                    line-height: 1.2;
                ">${title}</h3>

                <p style="
                    margin: 0;
                    font-size: 13px;
                    line-height: 1.5;
                    color: #4B5563;
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
