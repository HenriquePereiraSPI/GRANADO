/* ============================================================
   <granado-popup-grande-volume>
   Popup de PESAGEM · GRANDE VOLUME do Cockpit de Pesagem.

   Componente ESPECIFICO desta tela — nao e' um popup generico. Ele
   contem os dois layouts (web e mobile) e alterna entre eles, para que
   o cockpit nao precise manter IDs sufixados nem ternarios de layout.

   O conteudo NAO vem por filhos: o componente monta os dois layouts
   internamente a partir das propriedades .dados e .gaiolas.

   ── Atributos (todos opcionais, com default)
     open            - "false" inicia oculto. Default: oculto.
     title           - titulo no topo. Default "PESAGEM · GRANDE VOLUME".
     width           - largura maxima do card. Default "480px".
     color           - cor do detalhe (borda superior). Default "#1C5C31".
     layout          - "auto" (default) | "web" | "mobile".
                       Em "auto" o layout segue a largura da tela.
                       Em "web"/"mobile" fica travado no escolhido.
     breakpoint      - largura maxima considerada mobile no modo "auto".
                       Default "768px".
     exigir-gaiola   - "false" libera os botoes de concluir mesmo sem gaiola
                       escolhida. Default: exige (botoes desabilitados).
     onconcluir      - JS executado ao concluir (recebe "detail").
     ongaiolaselect  - JS executado ao escolher uma gaiola.
     ongaiolanova    - JS executado ao pedir uma gaiola nova.
     ongaiolaprint   - JS executado ao pedir impressao da etiqueta.
     onclose         - JS executado ao fechar.

   ── Propriedades JS
     .dados             - { material, lote, etiqueta, peso }. Todos texto.
     .gaiolas           - array [{ key, nome, numero }].
     .gaiolaSelecionada - key da gaiola marcada.
     .layout            - reflete o atributo ("auto" | "web" | "mobile").
     .isMobile          - (leitura) true quando o layout mobile esta' ativo.
     .onConcluir / .onGaiolaSelect / .onGaiolaNova / .onGaiolaPrint / .onClose
                        - versoes em funcao dos atributos acima.

   ── Gaiolas
     O componente monta os cards ele mesmo, a partir de .gaiolas e
     .gaiolaSelecionada. Nao depende mais do Gaiolas._renderEm do cockpit
     nem do evento "gaiolas-prontas" — quem alimenta o popup e' quem seta as
     propriedades. O markup emitido e' o MESMO do cockpit (classes
     .cpt-gaiola-card*), entao o estilo continua vindo de um lugar so': o
     index.css. Isso funciona porque o componente usa Light DOM e vive dentro
     do #cpt-root, onde aquelas regras estao escopadas.

     Clicar num card ja' marca a selecao internamente (repinta e dispara
     "gaiola-select"); o cockpit nao precisa devolver a selecao.

   ── Eventos (CustomEvent, bubbles)
     "concluir"      -> detail { imprimir: true|false, gaiolaKey }
     "gaiola-select" -> detail { key, gaiola }
     "gaiola-nova"   -> detail {}
     "gaiola-print"  -> detail { key, gaiola }
     "close"         -> disparado ao fechar (X, Esc, fechar()).

   ── Metodos JS
     el.abrir() / el.fechar()
     el.definirGaiolas(lista, keySelecionada)  - troca as duas de uma vez,
                                                 com um unico repinte.

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/Pesagem/granado-pesagem-popup-grande-volume.js"></script>

   <granado-popup-grande-volume id="cpt-popup-gv"
       open="false"
       layout="auto"
       ongaiolanova="Gaiolas.criarNova();"
       ongaiolaprint="Gaiolas.imprimirEtiqueta(detail.key);"
       onconcluir="Apontamento.concluirGV(detail.imprimir, detail.gaiolaKey);">
   </granado-popup-grande-volume>

   <script>
     var popup = document.getElementById('cpt-popup-gv');
     popup.dados = { material: 'ALCOOL CETILICO', lote: 'L-2231',
                     etiqueta: '#D|M9670|0332225', peso: '412,650 kg' };
     popup.definirGaiolas([{ key: 'G1', nome: 'GAIOLA 1', numero: '001' },
                           { key: 'G2', nome: 'GAIOLA 2', numero: '002' }], 'G2');
     popup.abrir();
   </script>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-popup-grande-volume')) {
  const SUPERFICIE       = '#FDFAF1';
  const BORDA            = '#E5DDC8';
  const BORDA_FORTE      = '#D6CDA4';
  const VERDE            = '#1C5C31';
  const OURO             = '#9A7520';
  const TEXTO            = '#103E20';
  const TEXTO_MEDIO      = '#5A6B5E';
  const TEXTO_SUAVE      = '#8A9E8E';
  const FUNDO_CHIP       = '#F4EFE0';
  const FUNDO_SOBREPOSTO = 'rgba(15,51,25,.55)';

  // O cockpit usa Arial para texto e Poppins para numeros (regra da tela).
  // Isso e' o INVERSO da convencao dos demais granado-*; se preferir alinhar
  // com a biblioteca, basta trocar o valor das duas constantes abaixo.
  const FONTE_TEXTO  = "Arial,'DejaVu Sans',Helvetica,sans-serif";
  const FONTE_NUMERO = "'Poppins','DejaVu Sans',Arial,sans-serif";

  const LARGURA_PADRAO = '480px';
  const BREAKPOINT     = '768px';

  // IDs dos grids de gaiola. Os dois blocos de layout coexistem no DOM, entao
  // cada um precisa do seu — mantidos para nao quebrar quem consulta por id.
  const ID_GRID_WEB    = 'cpt-gv-gaiola-grid';
  const ID_GRID_MOBILE = 'cpt-gv-gaiola-grid-mobile';

  // Icones do card de gaiola. Copia fiel de _ICON_CRATE e _ICON_PRINTER do
  // index.js — o card precisa ser identico ao dos outros fluxos.
  const ICONE_CAIXA =
    '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" ' +
        'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="3" y="7" width="18" height="13" rx="1.5"/>' +
      '<path d="M3 11.5h18M9 7v13M15 7v13"/>' +
      '<path d="M8 7l1.4-3h5.2L16 7"/>' +
    '</svg>';

  const ICONE_IMPRESSORA =
    '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#FDFAF1" ' +
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<polyline points="6 9 6 2 18 2 18 9"/>' +
      '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>' +
      '<rect x="6" y="14" width="12" height="8"/>' +
    '</svg>';

  class GranadoPopupGrandeVolume extends HTMLElement {
    static get observedAttributes() {
      return ['open', 'title', 'width', 'color', 'layout', 'breakpoint', 'exigir-gaiola'];
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      // Lazy-props: valores atribuidos antes do upgrade do elemento.
      var propriedades = ['dados', 'gaiolas', 'gaiolaSelecionada', 'layout'];
      for (var i = 0; i < propriedades.length; i++) {
        var nome = propriedades[i];
        if (Object.prototype.hasOwnProperty.call(this, nome)) {
          var valor = this[nome];
          delete this[nome];
          this[nome] = valor;
        }
      }

      this.style.display = this.style.display || 'block';
      if (this.getAttribute('open') === 'false') this.style.display = 'none';

      this._ligarConsultaDeMidia();
      this._render();
    }

    disconnectedCallback() {
      this._desligarEsc();
      this._desligarConsultaDeMidia();
    }

    attributeChangedCallback(nome) {
      if (!this.isConnected) return;

      if (nome === 'open') {
        this.style.display = (this.getAttribute('open') === 'false') ? 'none' : '';
      }
      if (nome === 'breakpoint' || nome === 'layout') {
        this._desligarConsultaDeMidia();
        this._ligarConsultaDeMidia();
      }
      this._render();
    }

    // ------------------------------------------------------------
    // API JS
    // ------------------------------------------------------------
    get dados() { return this._dados || {}; }
    set dados(valor) {
      this._dados = valor || {};
      if (this.isConnected) this._render();
    }

    get gaiolas() { return this._gaiolas || []; }
    set gaiolas(valor) {
      this._gaiolas = Array.isArray(valor) ? valor : [];
      if (this.isConnected) this._render();
    }

    get gaiolaSelecionada() { return this._gaiolaSelecionada || null; }
    set gaiolaSelecionada(valor) {
      this._gaiolaSelecionada = (valor == null) ? null : String(valor);
      if (this.isConnected) this._render();
    }

    // Trocar lista e selecao em duas atribuicoes repintaria duas vezes; aqui
    // o repinte acontece uma vez so'.
    definirGaiolas(lista, keySelecionada) {
      this._gaiolas = Array.isArray(lista) ? lista : [];
      this._gaiolaSelecionada = (keySelecionada == null) ? null : String(keySelecionada);
      if (this.isConnected) this._render();
    }

    get layout() { return (this.getAttribute('layout') || 'auto').toLowerCase(); }
    set layout(valor) { this.setAttribute('layout', String(valor)); }

    // Layout travado por atributo vence a largura da tela.
    get isMobile() {
      var escolhido = this.layout;
      if (escolhido === 'mobile') return true;
      if (escolhido === 'web') return false;
      return !!(this._consulta && this._consulta.matches);
    }

    get onConcluir() { return this._onConcluirFn || null; }
    set onConcluir(fn) { this._onConcluirFn = (typeof fn === 'function') ? fn : null; }

    get onGaiolaSelect() { return this._onGaiolaSelectFn || null; }
    set onGaiolaSelect(fn) { this._onGaiolaSelectFn = (typeof fn === 'function') ? fn : null; }

    get onGaiolaNova() { return this._onGaiolaNovaFn || null; }
    set onGaiolaNova(fn) { this._onGaiolaNovaFn = (typeof fn === 'function') ? fn : null; }

    get onGaiolaPrint() { return this._onGaiolaPrintFn || null; }
    set onGaiolaPrint(fn) { this._onGaiolaPrintFn = (typeof fn === 'function') ? fn : null; }

    get onClose() { return this._onCloseFn || null; }
    set onClose(fn) { this._onCloseFn = (typeof fn === 'function') ? fn : null; }

    abrir() {
      this._aberto = true;
      this.removeAttribute('open');
      this.style.display = '';
      if (this.isConnected) this._render();
      this._ligarEsc();
    }

    // Idempotente de proposito: um handler de "onclose" que chame fechar()
    // (padrao comum no cockpit) fecharia um ciclo infinito sem esta guarda.
    fechar() {
      if (!this._estaAberto()) return;

      this._aberto = false;
      this.style.display = 'none';
      this._desligarEsc();
      this._dispararEvento('close', {}, this._onCloseFn, 'onclose');
    }

    // Flag explicita: inferir do DOM falha porque o _render roda antes de o
    // popup aparecer.
    _estaAberto() {
      return this._aberto === true;
    }

    // ------------------------------------------------------------
    // Internals · consulta de largura
    // ------------------------------------------------------------
    _ligarConsultaDeMidia() {
      var esteComponente = this;
      var largura = this.getAttribute('breakpoint') || BREAKPOINT;

      this._consulta = window.matchMedia('(max-width: ' + largura + ')');
      this._aoMudarLargura = function () {
        // Com layout travado a largura nao importa; nao repinta a' toa.
        if (esteComponente.layout !== 'auto') return;
        esteComponente._render();
      };

      if (this._consulta.addEventListener) {
        this._consulta.addEventListener('change', this._aoMudarLargura);
      } else if (this._consulta.addListener) {
        this._consulta.addListener(this._aoMudarLargura);
      }
    }

    _desligarConsultaDeMidia() {
      if (!this._consulta || !this._aoMudarLargura) return;
      if (this._consulta.removeEventListener) {
        this._consulta.removeEventListener('change', this._aoMudarLargura);
      } else if (this._consulta.removeListener) {
        this._consulta.removeListener(this._aoMudarLargura);
      }
      this._consulta = null;
    }

    // ------------------------------------------------------------
    // Internals · helpers
    // ------------------------------------------------------------
    _esc(texto) {
      return String(texto == null ? '' : texto).replace(/[&<>"]/g, function (caractere) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[caractere];
      });
    }

    _ou(valor, alternativa) {
      return (valor == null || String(valor) === '') ? alternativa : valor;
    }

    // Chave da gaiola: aceita "key" (padrao do componente) ou "GaiolaKey"/"id",
    // que sao os nomes que aparecem nos retornos das DFCs.
    _chaveDaGaiola(gaiola) {
      if (!gaiola) return '';
      if (gaiola.key != null) return String(gaiola.key);
      if (gaiola.GaiolaKey != null) return String(gaiola.GaiolaKey);
      if (gaiola.id != null) return String(gaiola.id);
      return '';
    }

    _gaiolaPelaChave(chave) {
      var lista = this.gaiolas;
      for (var i = 0; i < lista.length; i++) {
        if (this._chaveDaGaiola(lista[i]) === String(chave)) return lista[i];
      }
      return null;
    }

    // Regra de habilitacao dos botoes de concluir.
    _exigeGaiola() {
      return this.getAttribute('exigir-gaiola') !== 'false';
    }

    _podeConcluir() {
      if (!this._exigeGaiola()) return true;
      return !!this.gaiolaSelecionada;
    }

    // ------------------------------------------------------------
    // Internals · render
    // ------------------------------------------------------------
    _render() {
      var ehMobile = this.isMobile;
      var titulo   = this._ou(this.getAttribute('title'), 'PESAGEM · GRANDE VOLUME');
      var largura  = this._ou(this.getAttribute('width'), LARGURA_PADRAO);
      var cor      = this._ou(this.getAttribute('color'), VERDE);

      var recuo = ehMobile ? '16px 14px' : '22px 24px';

      this.innerHTML =
        '<div data-role="sobreposicao" style="position:fixed;inset:0;background:' + FUNDO_SOBREPOSTO + ';' +
            'z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:' +
            (ehMobile ? '16px 8px' : '40px 12px') + ';backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">' +

          '<div data-role="caixa" style="background:' + SUPERFICIE + ';border:1px solid ' + BORDA + ';' +
              'border-top:4px solid ' + cor + ';border-radius:12px;padding:' + recuo + ';' +
              'max-width:' + largura + ';width:96%;box-shadow:0 18px 50px rgba(15,51,25,.30);' +
              'box-sizing:border-box;margin:auto;font:14px/1.5 ' + FONTE_TEXTO + ';color:' + TEXTO + '">' +

            this._cabecalho(titulo, ehMobile) +
            this._resumo(ehMobile) +
            this._secaoGaiolas(ehMobile) +
            this._acoes(ehMobile) +

          '</div>' +
        '</div>';

      this._vincularEventos();
    }

    _cabecalho(titulo, ehMobile) {
      return '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:14px">' +
          '<div style="min-width:0">' +
            '<div style="font:700 ' + (ehMobile ? '13px' : '15px') + '/1.25 ' + FONTE_TEXTO + ';' +
                'letter-spacing:.06em;color:' + TEXTO_SUAVE + '">' + this._esc(titulo) + '</div>' +
            '<div style="font:800 ' + (ehMobile ? '16px' : '19px') + '/1.25 ' + FONTE_TEXTO + ';' +
                'color:' + TEXTO + ';margin-top:4px">Peso automático &amp; gaiola</div>' +
          '</div>' +
          '<button type="button" data-role="fechar" aria-label="Fechar" title="Fechar" ' +
              'style="flex-shrink:0;box-sizing:border-box;margin:0;appearance:none;background:transparent;' +
              'border:1px solid ' + BORDA + ';border-radius:6px;padding:5px 10px;cursor:pointer;' +
              'font:13px/1 ' + FONTE_TEXTO + ';color:' + TEXTO_MEDIO + '">&#10005;</button>' +
        '</div>';
    }

    // Resumo da MP. No web: tres colunas com o peso destacado a' direita.
    // No mobile: campos empilhados e o peso numa faixa propria embaixo.
    _resumo(ehMobile) {
      var dados = this.dados;

      var material = this._esc(this._ou(dados.material, '—'));
      var lote     = this._esc(this._ou(dados.lote, '—'));
      var etiqueta = this._esc(this._ou(dados.etiqueta, '—'));
      var peso     = this._esc(this._ou(dados.peso, '— kg'));

      var estiloRotulo = 'font:900 ' + (ehMobile ? '9px' : '10px') + '/1.4 ' + FONTE_TEXTO + ';' +
          'letter-spacing:.1em;text-transform:uppercase;color:' + TEXTO_SUAVE + ';margin-bottom:2px';
      var estiloValor = 'font:700 ' + (ehMobile ? '13px' : '15px') + '/1.35 ' + FONTE_TEXTO + ';color:' + TEXTO;
      var estiloPeso = 'font:900 ' + (ehMobile ? '24px' : '30px') + '/1 ' + FONTE_NUMERO + ';' +
          'font-variant-numeric:tabular-nums;color:' + VERDE;

      var abertura = '<div style="background:' + FUNDO_CHIP + ';border-radius:10px;padding:' +
          (ehMobile ? '10px 12px' : '16px 18px') + ';margin:0 0 ' + (ehMobile ? '12px' : '18px') + '">';

      if (ehMobile) {
        return abertura +
            '<div style="' + estiloRotulo + '">MATÉRIA-PRIMA</div>' +
            '<div style="' + estiloValor + ';margin-bottom:8px">' + material + '</div>' +
            '<div style="' + estiloRotulo + '">LOTE</div>' +
            '<div style="' + estiloValor + ';margin-bottom:8px">' + lote + '</div>' +
            '<div style="' + estiloRotulo + '">ETIQUETA</div>' +
            '<div style="' + estiloValor + ';margin-bottom:8px">' + etiqueta + '</div>' +
            '<div style="border-top:1px solid ' + BORDA_FORTE + ';padding-top:8px">' +
              '<div style="' + estiloRotulo + '">PESO AUTOMÁTICO</div>' +
              '<div style="' + estiloPeso + '">' + peso + '</div>' +
            '</div>' +
          '</div>';
      }

      return abertura +
          '<div style="display:grid;grid-template-columns:1.4fr 1fr 1.2fr;gap:16px">' +
            '<div>' +
              '<div style="' + estiloRotulo + '">MATÉRIA-PRIMA</div>' +
              '<div style="' + estiloValor + '">' + material + '</div>' +
              '<div style="' + estiloRotulo + ';margin-top:10px">ETIQUETA</div>' +
              '<div style="' + estiloValor + '">' + etiqueta + '</div>' +
            '</div>' +
            '<div>' +
              '<div style="' + estiloRotulo + '">LOTE</div>' +
              '<div style="' + estiloValor + '">' + lote + '</div>' +
            '</div>' +
            '<div style="text-align:right;border-left:1px solid ' + BORDA_FORTE + ';padding-left:12px">' +
              '<div style="' + estiloRotulo + '">PESO AUTOMÁTICO</div>' +
              '<div style="' + estiloPeso + '">' + peso + '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
    }

    // Gaiolas. O componente monta os cards a partir de .gaiolas, com o MESMO
    // markup do cockpit (.cpt-gaiola-card) — o estilo continua vindo do
    // index.css, que alcanca este conteudo porque o componente usa Light DOM
    // e vive dentro do #cpt-root. O ultimo card e' sempre "+ NOVA GAIOLA".
    _secaoGaiolas(ehMobile) {
      var estiloRotulo = 'font:900 ' + (ehMobile ? '9px' : '10px') + '/1.4 ' + FONTE_TEXTO + ';' +
          'letter-spacing:.16em;text-transform:uppercase;color:' + TEXTO_SUAVE + ';margin-bottom:6px';

      var lista = this.gaiolas;
      var cards = '';
      for (var i = 0; i < lista.length; i++) {
        cards += this._cardDeGaiola(lista[i]);
      }
      cards += this._cardDeNovaGaiola();

      return '<div style="' + estiloRotulo + '">' +
            (ehMobile ? 'GAIOLA' : 'GAIOLA PARA VINCULAR O PESO') +
          '</div>' +
          '<div class="' + (ehMobile ? 'cpt-gaiola-grid-mobile' : 'cpt-gaiola-grid') + '" ' +
              'id="' + (ehMobile ? ID_GRID_MOBILE : ID_GRID_WEB) + '">' + cards + '</div>';
    }

    _cardDeGaiola(gaiola) {
      var chave  = this._chaveDaGaiola(gaiola);
      var nome   = this._ou(gaiola.nome, gaiola.Nome);
      var numero = this._ou(gaiola.numero, gaiola.Numero);

      var estaSelecionada = (chave !== '' && chave === this.gaiolaSelecionada);
      var classes = 'cpt-gaiola-card' + (estaSelecionada ? ' is-selected' : '');

      return '<div class="' + classes + '" data-role="gaiola" data-key="' + this._esc(chave) + '" ' +
            'role="button" tabindex="0" aria-pressed="' + (estaSelecionada ? 'true' : 'false') + '">' +
          '<button type="button" class="cpt-gaiola-card__print" data-role="gaiola-print" ' +
              'title="Reimprimir etiqueta da gaiola" aria-label="Reimprimir etiqueta da gaiola">' +
            ICONE_IMPRESSORA +
          '</button>' +
          '<div class="cpt-gaiola-card__icon">' + ICONE_CAIXA + '</div>' +
          '<div class="cpt-gaiola-card__nome">' + this._esc(this._ou(nome, 'GAIOLA')) + '</div>' +
          '<div class="cpt-gaiola-card__num">' + this._esc(this._ou(numero, '—')) + '</div>' +
        '</div>';
    }

    _cardDeNovaGaiola() {
      return '<div class="cpt-gaiola-card cpt-gaiola-card--nova" data-role="gaiola-nova" ' +
            'role="button" tabindex="0">' +
          '<div class="cpt-gaiola-card__plus">+</div>' +
          '<div class="cpt-gaiola-card__nome">NOVA GAIOLA</div>' +
        '</div>';
    }

    _acoes(ehMobile) {
      // Os rotulos sao longos: no celular ficam empilhados e encurtados.
      var estiloContainer = ehMobile
        ? 'display:grid;grid-template-columns:1fr;gap:8px;margin-top:12px'
        : 'display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:16px';

      var rotuloImprimir = ehMobile ? '🖨 CONCLUIR E IMPRIMIR' : '🖨 CONCLUIR & IMPRIMIR NOVA ETIQUETA';
      var habilitado = this._podeConcluir();

      var aviso = '';
      if (!habilitado) {
        aviso = '<div style="font:700 ' + (ehMobile ? '10px' : '11px') + '/1.4 ' + FONTE_TEXTO + ';' +
            'color:' + TEXTO_SUAVE + ';text-align:center;margin-top:8px">' +
            'Escolha uma gaiola para concluir a pesagem.</div>';
      }

      return '<div style="' + estiloContainer + '">' +
          this._botao('concluir', '✓ CONCLUIR', VERDE, ehMobile, habilitado) +
          this._botao('concluir-imprimir', rotuloImprimir, OURO, ehMobile, habilitado) +
        '</div>' + aviso;
    }

    _botao(papel, rotulo, cor, ehMobile, habilitado) {
      // Desabilitado: mesma cor com opacidade, para o botao continuar
      // reconhecivel — o operador entende que falta um passo, nao que sumiu.
      var estiloEstado = habilitado
        ? 'cursor:pointer;opacity:1'
        : 'cursor:not-allowed;opacity:.45';

      return '<button type="button" data-role="' + papel + '"' + (habilitado ? '' : ' disabled') + ' ' +
          'style="box-sizing:border-box;margin:0;appearance:none;width:100%;' +
          'height:' + (ehMobile ? '46px' : '44px') + ';background:' + cor + ';border:1px solid ' + cor + ';' +
          'border-radius:8px;color:#FFFFFF;' + estiloEstado + ';' +
          'font:700 13px/1.2 ' + FONTE_TEXTO + '">' +
          this._esc(rotulo) + '</button>';
    }

    // ------------------------------------------------------------
    // Internals · eventos
    // ------------------------------------------------------------
    _vincularEventos() {
      var esteComponente = this;

      var botaoFechar = this.querySelector('[data-role="fechar"]');
      if (botaoFechar) {
        botaoFechar.addEventListener('click', function () { esteComponente.fechar(); });
      }

      var botaoConcluir = this.querySelector('[data-role="concluir"]');
      if (botaoConcluir) {
        botaoConcluir.addEventListener('click', function () {
          if (!esteComponente._podeConcluir()) return;
          esteComponente._dispararEvento('concluir',
            { imprimir: false, gaiolaKey: esteComponente.gaiolaSelecionada },
            esteComponente._onConcluirFn, 'onconcluir');
        });
      }

      var botaoConcluirImprimir = this.querySelector('[data-role="concluir-imprimir"]');
      if (botaoConcluirImprimir) {
        botaoConcluirImprimir.addEventListener('click', function () {
          if (!esteComponente._podeConcluir()) return;
          esteComponente._dispararEvento('concluir',
            { imprimir: true, gaiolaKey: esteComponente.gaiolaSelecionada },
            esteComponente._onConcluirFn, 'onconcluir');
        });
      }

      // for classico em vez de forEach no NodeList: compatibilidade IE11.
      var impressoras = this.querySelectorAll('[data-role="gaiola-print"]');
      for (var i = 0; i < impressoras.length; i++) {
        impressoras[i].addEventListener('click', function (evento) {
          // A impressora fica DENTRO do card; sem isso o clique tambem selecionaria.
          evento.stopPropagation();
          var card = this.parentNode;
          var chave = card ? card.getAttribute('data-key') : '';
          esteComponente._dispararEvento('gaiola-print',
            { key: chave, gaiola: esteComponente._gaiolaPelaChave(chave) },
            esteComponente._onGaiolaPrintFn, 'ongaiolaprint');
        });
      }

      var cards = this.querySelectorAll('[data-role="gaiola"]');
      for (var j = 0; j < cards.length; j++) {
        cards[j].addEventListener('click', function () {
          esteComponente._selecionarGaiola(this.getAttribute('data-key'));
        });
        cards[j].addEventListener('keydown', function (evento) {
          if (evento.key !== 'Enter' && evento.key !== ' ') return;
          evento.preventDefault();
          esteComponente._selecionarGaiola(this.getAttribute('data-key'));
        });
      }

      var cardNovaGaiola = this.querySelector('[data-role="gaiola-nova"]');
      if (cardNovaGaiola) {
        cardNovaGaiola.addEventListener('click', function () {
          esteComponente._dispararEvento('gaiola-nova', {},
            esteComponente._onGaiolaNovaFn, 'ongaiolanova');
        });
      }
    }

    // A selecao e' resolvida aqui dentro: o cockpit nao precisa devolver o
    // valor so' para o card acender.
    _selecionarGaiola(chave) {
      if (!chave) return;
      this._gaiolaSelecionada = String(chave);
      this._render();
      this._dispararEvento('gaiola-select',
        { key: this._gaiolaSelecionada, gaiola: this._gaiolaPelaChave(this._gaiolaSelecionada) },
        this._onGaiolaSelectFn, 'ongaiolaselect');
    }

    _dispararEvento(nome, detalhe, funcaoDireta, nomeDoAtributo) {
      this.dispatchEvent(new CustomEvent(nome, {
        bubbles: true, composed: true, detail: detalhe
      }));

      if (typeof funcaoDireta === 'function') { funcaoDireta(detalhe); return; }

      var handler = this.getAttribute(nomeDoAtributo);
      if (!handler) return;
      try {
        new Function('detail', handler).call(this, detalhe);
      } catch (erro) {
        // Handler do consumidor: um erro nele nao pode derrubar o render.
        console.error('[' + this.tagName.toLowerCase() + '] ' + nomeDoAtributo + ':', erro);
      }
    }

    _ligarEsc() {
      if (this._escAtivo) return;
      var esteComponente = this;
      this._aoPressionarEsc = function (evento) {
        if (evento.key === 'Escape' || evento.key === 'Esc') esteComponente.fechar();
      };
      document.addEventListener('keydown', this._aoPressionarEsc);
      this._escAtivo = true;
    }

    _desligarEsc() {
      if (!this._escAtivo) return;
      document.removeEventListener('keydown', this._aoPressionarEsc);
      this._escAtivo = false;
    }
  }

  customElements.define('granado-popup-grande-volume', GranadoPopupGrandeVolume);
  window.GranadoPopupGrandeVolume = GranadoPopupGrandeVolume;
}