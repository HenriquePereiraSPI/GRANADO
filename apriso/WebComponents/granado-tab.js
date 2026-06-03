/* ============================================================
   <granado-tab>
   Item de tab (filho de <granado-tabs>). Define o cabecalho
   da aba via atributos e contem o conteudo da aba como filhos.

   Atributos (todos opcionais, exceto value para identificacao):
     value     - identificador unico da aba.
     label     - texto exibido no botao da aba.
     icon      - icone exibido junto ao label. Preset suportado pelo
                 <granado-tabs> ou texto/emoji/SVG bruto.
     disabled  - "true" desabilita o botao da aba.

   Exemplo (ver <granado-tabs> para uso completo):

   <granado-tabs value="info">
     <granado-tab value="info" label="Informacoes" icon="info">
       <p>Conteudo da aba informacoes.</p>
     </granado-tab>
     <granado-tab value="hist" label="Historico" icon="calendar">
       <p>Conteudo do historico.</p>
     </granado-tab>
   </granado-tabs>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-tab')) {
  class GranadoTab extends HTMLElement {
    // Sem observedAttributes/callbacks: o <granado-tabs> pai observa
    // mudancas via MutationObserver com subtree+attribute-filter.
    // Manter callbacks aqui geraria loop ao reposicionar tabs durante render.
    connectedCallback() {
      if (!this.style.display) this.style.display = 'block';
    }
  }

  customElements.define('granado-tab', GranadoTab);

  window.GranadoTab = GranadoTab;
}
