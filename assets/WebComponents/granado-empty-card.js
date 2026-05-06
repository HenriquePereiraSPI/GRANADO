/* ============================================================
   <granado-empty-card>
   Container vazio com o mesmo visual do <granado-simple-card>
   (faixa lateral colorida, fundo, borda, padding, sombra), porem
   serve apenas como moldura: o conteudo e qualquer HTML colocado
   dentro do elemento (tabela, formulario, lista, etc.).

   Atributos (todos opcionais):
     title    - texto do cabecalho (eyebrow estilo card-title)
     color    - cor da faixa lateral (default: var(--verde))
     padding  - padding interno (default: 18px)

   Exemplo de uso:

   <script src="assets/WebComponents/granado-empty-card.js"></script>
   <script src="assets/WebComponents/granado-table.js"></script>

   <granado-empty-card title="Registro de Pesagens Confirmadas">
       <granado-table
           columns='[...]'
           rows='[...]'>
       </granado-table>
   </granado-empty-card>

   <granado-empty-card color="#9A7B1C" padding="24px">
       <h2>Qualquer conteudo aqui</h2>
       <p>Texto livre, formularios, graficos...</p>
   </granado-empty-card>
   ============================================================ */

class GranadoEmptyCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'color', 'padding'];
    }

    connectedCallback() {
        if (!this._observer) {
            // Durante o parsing do HTML, o connectedCallback dispara antes
            // dos filhos serem inseridos no host. O MutationObserver detecta
            // quando o parser (ou o usuario) adiciona filhos depois e
            // re-executa o render para encaixa-los no .gec-slot.
            this._observer = new MutationObserver(() => this.render());
        }
        this.render();
    }

    disconnectedCallback() {
        if (this._observer) this._observer.disconnect();
    }

    attributeChangedCallback() {
        if (this.isConnected) this.render();
    }

    _escape(v) {
        if (v === null || v === undefined) return '';
        return String(v)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    render() {
        // Para de observar enquanto mexemos no DOM (evita loop).
        if (this._observer) this._observer.disconnect();

        const title = this._escape(this.getAttribute('title') || '');
        const color = this.getAttribute('color') || '#1C5C31';
        const padding = this.getAttribute('padding') || '18px';

        // Captura o conteudo do usuario tanto do slot anterior (re-render)
        // quanto de filhos diretos do host (parser inseriu apos a casca).
        const fragment = document.createDocumentFragment();
        const prevSlot = this.querySelector(':scope > .gec-card > .gec-slot');
        if (prevSlot) {
            while (prevSlot.firstChild) fragment.appendChild(prevSlot.firstChild);
        }
        Array.from(this.childNodes).forEach(node => {
            if (node.nodeType === 1 && node.classList && node.classList.contains('gec-card')) return;
            fragment.appendChild(node);
        });

        this.innerHTML = `
            <div class="gec-card" style="
                position: relative;
                overflow: hidden;
                background: #FDFAF1;
                border: 1px solid #E5DDC8;
                border-radius: 8px;
                padding: ${padding};
                box-shadow: 0 1px 3px rgba(0,0,0,0.06);
                font-family: system-ui, -apple-system, sans-serif;
            ">
                <span style="
                    position: absolute;
                    top: 0; left: 0;
                    width: 4px; height: 100%;
                    background: ${color};
                    border-radius: 8px 0 0 8px;
                "></span>

                ${title ? `
                    <div style="
                        font-size: 9px;
                        font-weight: 900;
                        letter-spacing: .2em;
                        text-transform: uppercase;
                        color: #6B7280;
                        margin: 0 0 14px;
                    ">${title}</div>
                ` : ''}

                <div class="gec-slot"></div>
            </div>
        `;

        // Devolve o conteudo original para dentro do slot.
        this.querySelector('.gec-slot').appendChild(fragment);

        // Reconecta o observer: se o parser ainda for inserir mais filhos,
        // ou se o usuario manipular childNodes depois, refazemos o encaixe.
        if (this.isConnected && this._observer) {
            this._observer.observe(this, { childList: true });
        }
    }
}

customElements.define('granado-empty-card', GranadoEmptyCard);
