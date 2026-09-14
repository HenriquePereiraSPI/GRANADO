/* ============================================================
   <granado-pesagem-popup>
   Popup de CONFIRMAÇÃO DA PESAGEM — resumo da MP + escolha da gaiola
   que vai receber o material + ações de confirmar/voltar.

   Usa <granado-empty-popup> como moldura (backdrop, card, título, ✕) e
   <granado-button> nas ações.

   ── IMPORTANTE · estilos
   Os cards de gaiola usam as MESMAS classes do index.css já usadas pelos
   fluxos de leitura e grande volume (.cpt-gaiola-card, .cpt-gaiola-grid,
   .cpt-pmodal__actions…). É de propósito: o card de gaiola é um padrão
   compartilhado da tela, e replicar o estilo aqui dentro faria os cards
   deste popup divergirem dos demais a cada ajuste no CSS.
   Como o componente é Light DOM e fica dentro de #cpt-root, as regras
   `#cpt-root .cpt-gaiola-card` se aplicam normalmente.

   ── Atributos (todos opcionais)
     open              - "false" inicia oculto. Use abrir()/fechar().
     title             - título do card. Default: "Confirmar Pesagem & Imprimir etiqueta".
     layout            - "auto" (default) | "web" | "mobile".
                         Em "auto" o layout troca por matchMedia — o projeto
                         não usa @media, a troca é feita em runtime.
     width             - largura máxima do card. Default "560px".
     color             - cor do detalhe superior. Default "#1C5C31".
     confirm-text        - rótulo do botão confirmar (web).
     confirm-text-mobile - rótulo do botão confirmar (mobile).
     back-text           - rótulo do botão voltar.
     ongaiolaselect    - JS no clique de um card de gaiola.  Var: detail.key
     ongaiolanova      - JS no clique do card "NOVA GAIOLA". Var: detail
     ongaiolaprint     - JS no botão impressora do card.     Var: detail.key
     onconfirmar       - JS no botão de confirmar.           Var: detail
     onvoltar          - JS no botão de voltar.              Var: detail

   ── Eventos (CustomEvent, bubbles)
     "gaiolaselect" -> { key }   "gaiolanova" -> {}   "gaiolaprint" -> { key }
     "confirmar"    -> {}        "voltar"     -> {}   "close"       -> {}

   ── API JS
     el.dados = { material, lote, peso, balanca }   // monta a linha de resumo
     el.definirGaiolas(listaDeGaiolas, keySelecionada)
        listaDeGaiolas: [{ key, nome, numero }, …]
     el.selecionarGaiola(key)     // só marca visualmente (não dispara evento)
     el.abrir() / el.fechar()

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/Pesagem/granado-pesagem-popup.js"></script>

   <granado-pesagem-popup id="PESAGEM_POPUP"
       open="false"
       layout="auto"
       ongaiolaselect="Gaiolas.selecionar(detail.key);"
       ongaiolanova="Gaiolas.nova();"
       ongaiolaprint="Gaiolas.reimprimir(detail.key);"
       onconfirmar="ModalPesagem.confirmarComunicar();"
       onvoltar="ModalPesagem.fechar();">
   </granado-pesagem-popup>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-pesagem-popup')) {

  const VERDE = '#1C5C31';
  const TEXT_CLARO = '#FDFAF1';
  const LARGURA_MOBILE = 820;   // mesmo ponto de corte usado na tela

  const ICONE_IMPRESSORA =
    '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="' + TEXT_CLARO + '" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<polyline points="6 9 6 2 18 2 18 9"/>' +
    '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>' +
    '<rect x="6" y="14" width="12" height="8"/></svg>';

  const ICONE_GAIOLA =
    '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" ' +
    'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="7" width="18" height="13" rx="1.5"/>' +
    '<path d="M3 11.5h18M9 7v13M15 7v13"/>' +
    '<path d="M8 7l1.4-3h5.2L16 7"/></svg>';

  class GranadoPesagemPopup extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'layout', 'width', 'color', 'confirm-text', 'confirm-text-mobile', 'back-text', 'open'];
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      if (!this._gaiolas) this._gaiolas = [];
      if (this._gaiolaSelecionada === undefined) this._gaiolaSelecionada = null;
      if (!this._resumo) this._resumo = {};

      if (!this._montado) this._montar();

      // Layout "auto": troca web/mobile em runtime (o operador gira o tablet
      // no meio da sessão; o projeto não usa @media).
      if (!this._mediaLigada && window.matchMedia) {
        const self = this;
        this._media = window.matchMedia('(max-width:' + LARGURA_MOBILE + 'px)');
        this._mediaHandler = function () { self._aplicarLayout(); };
        if (this._media.addEventListener) this._media.addEventListener('change', this._mediaHandler);
        else this._media.addListener(this._mediaHandler);
        this._mediaLigada = true;
      }

      this._aplicarLayout();
    }

    disconnectedCallback() {
      if (this._mediaLigada && this._media) {
        if (this._media.removeEventListener) this._media.removeEventListener('change', this._mediaHandler);
        else this._media.removeListener(this._mediaHandler);
        this._mediaLigada = false;
      }
    }

    attributeChangedCallback(nome) {
      if (!this._montado) return;

      if (nome === 'title' && this._popup) this._popup.setAttribute('title', this.getAttribute('title') || '');
      if (nome === 'width' && this._popup) this._popup.setAttribute('width', this.getAttribute('width') || '560px');
      if (nome === 'color' && this._popup) this._popup.setAttribute('color', this.getAttribute('color') || VERDE);
      if (nome === 'layout' || nome.indexOf('-text') !== -1) this._aplicarLayout();
      if (nome === 'open') {
        if (this.getAttribute('open') === 'false') this.fechar();
        else this.abrir();
      }
    }

    // ------------------------------------------------------------
    // API JS
    // ------------------------------------------------------------
    // dados = { material, lote, peso, balanca } — vira a linha
    // "Material · 12,340 kg · BAL-01" no topo do card.
    get dados() { return this._resumo || {}; }
    set dados(valor) {
      this._resumo = valor || {};
      this._pintarResumo();
    }

    definirGaiolas(lista, keySelecionada) {
      this._gaiolas = lista || [];
      if (keySelecionada !== undefined) this._gaiolaSelecionada = keySelecionada;
      this._pintarGaiolas();
    }

    // Marca o card sem disparar evento (quem chama já sabe da escolha).
    selecionarGaiola(key) {
      this._gaiolaSelecionada = key;
      this._pintarGaiolas();
    }

    abrir() {
      this.removeAttribute('open');
      if (this._popup) this._popup.open();
    }

    fechar() {
      if (this._popup) this._popup.close();
    }

    // ------------------------------------------------------------
    // Montagem (uma única vez)
    // ------------------------------------------------------------
    _montar() {
      const self = this;

      this._popup = document.createElement('granado-empty-popup');
      this._popup.setAttribute('title', this.getAttribute('title') || 'Confirmar Pesagem & Imprimir etiqueta');
      this._popup.setAttribute('width', this.getAttribute('width') || '560px');
      this._popup.setAttribute('color', this.getAttribute('color') || VERDE);
      this._popup.setAttribute('close-on-backdrop', 'false');
      this._popup.setAttribute('open', 'false');

      // Conteúdo criado como nós reais (não string): assim os handlers
      // sobrevivem aos re-renders da casca do granado-empty-popup.
      const conteudo = document.createElement('div');

      this._elResumo = document.createElement('p');
      this._elResumo.textContent = '—';
      conteudo.appendChild(this._elResumo);

      this._elRotuloSecao = document.createElement('div');
      conteudo.appendChild(this._elRotuloSecao);

      this._elDica = document.createElement('p');
      this._elDica.className = 'cpt-gaiola-hint';
      this._elDica.textContent = 'Selecione a gaiola que receberá esta MP (por padrão, a última).';
      conteudo.appendChild(this._elDica);

      this._elGrid = document.createElement('div');
      conteudo.appendChild(this._elGrid);

      this._elAcoes = document.createElement('div');

      this._botaoConfirmar = document.createElement('granado-button');
      this._botaoConfirmar.setAttribute('size', 'lg');
      this._botaoConfirmar.setAttribute('color', VERDE);
      this._botaoConfirmar.style.display = 'block';
      this._botaoConfirmar.addEventListener('click', function () { self._emitir('confirmar', {}); });

      this._botaoVoltar = document.createElement('granado-button');
      this._botaoVoltar.setAttribute('size', 'lg');
      this._botaoVoltar.setAttribute('variant', 'secondary');
      this._botaoVoltar.setAttribute('color', VERDE);
      this._botaoVoltar.style.display = 'block';
      this._botaoVoltar.addEventListener('click', function () { self._emitir('voltar', {}); });

      this._elAcoes.appendChild(this._botaoConfirmar);
      this._elAcoes.appendChild(this._botaoVoltar);
      conteudo.appendChild(this._elAcoes);

      this._popup.appendChild(conteudo);

      // Repassa o fechamento da casca (✕, Esc) para quem usa o componente.
      this._popup.addEventListener('close', function (evento) {
        evento.stopPropagation();
        self._emitir('close', {});
      });

      this.appendChild(this._popup);
      this._montado = true;

      this._pintarResumo();
      this._pintarGaiolas();
    }

    // ------------------------------------------------------------
    // Layout · só troca as CLASSES; o visual continua vindo do index.css
    // ------------------------------------------------------------
    _ehMobile() {
      const layout = this.getAttribute('layout') || 'auto';
      if (layout === 'mobile') return true;
      if (layout === 'web') return false;
      return !!(this._media && this._media.matches);
    }

    _aplicarLayout() {
      if (!this._montado) return;
      const mobile = this._ehMobile();

      this._elResumo.className = mobile ? 'cpt-pmodal__subtitle-mobile' : 'cpt-pmodal__subtitle';

      this._elRotuloSecao.className = mobile ? 'cpt-gaiola-sectionlabel-mobile' : 'cpt-gaiola-sectionlabel';
      this._elRotuloSecao.textContent = mobile ? 'GAIOLA' : 'GAIOLA A VINCULAR';

      // A dica ocupa altura preciosa no tablet em pé: só aparece no web
      // (mesma decisão do bloco mobile original).
      this._elDica.hidden = mobile;

      this._elGrid.className = mobile ? 'cpt-gaiola-grid-mobile' : 'cpt-gaiola-grid';

      this._elAcoes.className = mobile
        ? 'cpt-pmodal__actions-mobile'
        : 'cpt-pmodal__actions cpt-pmodal__actions--stack';

      const textoConfirmarWeb = this.getAttribute('confirm-text') ||
                                '✓ CONFIRMAR PESAGEM & IMPRIMIR ETIQUETA DA MP';
      const textoConfirmarMobile = this.getAttribute('confirm-text-mobile') ||
                                   '✓ CONFIRMAR E IMPRIMIR';
      this._botaoConfirmar.setAttribute('label', mobile ? textoConfirmarMobile : textoConfirmarWeb);
      this._botaoVoltar.setAttribute('label', this.getAttribute('back-text') || '‹ VOLTAR');
    }

    // ------------------------------------------------------------
    // Pintura do conteúdo
    // ------------------------------------------------------------
    _pintarResumo() {
      if (!this._elResumo) return;

      const dados = this._resumo || {};
      const partes = [];
      if (this._tem(dados.material)) partes.push(String(dados.material));
      if (this._tem(dados.lote)) partes.push(String(dados.lote));
      if (this._tem(dados.peso)) partes.push(String(dados.peso));
      if (this._tem(dados.balanca)) partes.push(String(dados.balanca));

      this._elResumo.textContent = partes.length ? partes.join(' · ') : '—';
    }

    // Markup idêntico ao dos demais fluxos de gaiola da tela — mesmas classes,
    // mesma ordem dos elementos.
    _pintarGaiolas() {
      if (!this._elGrid) return;
      const self = this;

      this._elGrid.innerHTML = '';

      this._gaiolas.forEach(function (gaiola) {
        const card = document.createElement('div');
        card.className = 'cpt-gaiola-card';
        card.setAttribute('data-key', gaiola.key);
        if (gaiola.key === self._gaiolaSelecionada) card.classList.add('is-selected');

        card.onclick = function () {
          self._gaiolaSelecionada = gaiola.key;
          self._marcarSelecionada(gaiola.key);
          self._emitir('gaiolaselect', { key: gaiola.key });
        };

        card.innerHTML =
          '<button type="button" class="cpt-gaiola-card__print" title="Reimprimir etiqueta da gaiola">' +
            ICONE_IMPRESSORA +
          '</button>' +
          '<div class="cpt-gaiola-card__icon">' + ICONE_GAIOLA + '</div>' +
          '<div class="cpt-gaiola-card__nome">' + self._esc(gaiola.nome) + '</div>' +
          '<div class="cpt-gaiola-card__num">' + self._esc(gaiola.numero) + '</div>';

        // stopPropagation: imprimir não pode selecionar a gaiola.
        const botaoImprimir = card.querySelector('.cpt-gaiola-card__print');
        if (botaoImprimir) {
          botaoImprimir.onclick = function (evento) {
            evento.stopPropagation();
            self._emitir('gaiolaprint', { key: gaiola.key });
          };
        }

        self._elGrid.appendChild(card);
      });

      const cardNova = document.createElement('div');
      cardNova.className = 'cpt-gaiola-card cpt-gaiola-card--nova';
      cardNova.onclick = function () { self._emitir('gaiolanova', {}); };
      cardNova.innerHTML =
        '<div class="cpt-gaiola-card__plus">+</div>' +
        '<div class="cpt-gaiola-card__nome">NOVA GAIOLA</div>';
      this._elGrid.appendChild(cardNova);
    }

    // Troca só a marcação do selecionado (evita repintar a lista a cada clique
    // e perder a animação da borda do card).
    _marcarSelecionada(key) {
      const cards = this._elGrid.querySelectorAll('.cpt-gaiola-card[data-key]');
      for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('is-selected', cards[i].getAttribute('data-key') === key);
      }
    }

    // ------------------------------------------------------------
    // Internals
    // ------------------------------------------------------------
    _tem(valor) { return valor != null && String(valor) !== ''; }

    _esc(texto) {
      return String(texto == null ? '' : texto).replace(/[&<>"]/g, (ch) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
    }

    // Dispara o CustomEvent e executa o handler declarado no atributo
    // (mesmo padrão dos demais componentes: new Function('detail', …)).
    _emitir(nome, detalhe) {
      this.dispatchEvent(new CustomEvent(nome, { detail: detalhe, bubbles: true, composed: true }));

      const handler = this.getAttribute('on' + nome);
      if (handler) new Function('detail', handler).call(this, detalhe);
    }
  }

  customElements.define('granado-pesagem-popup', GranadoPesagemPopup);
  window.GranadoPesagemPopup = GranadoPesagemPopup;
}