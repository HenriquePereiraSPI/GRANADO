/* ============================================================
   <granado-popup-leitura>
   Popup de LEITURA DE ETIQUETAS (modo SEM BALANCA) do Cockpit de Pesagem.

   Componente ESPECIFICO desta tela e AUTOSSUFICIENTE: nao usa nenhum outro
   granado-*. Casca, campo de leitura, barra de progresso, tabela, galeria,
   cards de gaiola e a confirmacao de remocao sao montados aqui dentro.

   ── Dois layouts independentes
     Os dois blocos (web e mobile) coexistem no DOM, alternados por display,
     no mesmo padrao da tela (cpt-layout-web / cpt-layout-mobile). Os
     data-role se repetem nos dois, entao toda BUSCA passa por
     _noBlocoAtivo() e todo EVENTO passa por _vemDoBlocoAtivo().

   ── Render em duas etapas (importante)
     _montarCasca() roda UMA vez e cria a estrutura, inclusive o <input>.
     Os setters de propriedade chamam apenas o _atualizarX() da secao
     correspondente. O campo de leitura NUNCA e' recriado — e' isso que
     permite o foco sobreviver a uma etiqueta lida, a um repinte da tabela
     ou a uma gaiola nova.

   ── Foco do leitor
     Enquanto aberto, o campo mantem o foco: clicar em qualquer lugar do
     popup devolve o foco ao campo. O foco e' cedido quando o alvo esta'
     FORA do componente (um popup de impressao aberto por cima) e retomado
     no proximo clique dentro.

   ── Teclado virtual
     No MOBILE o campo nasce com inputmode="none" (o leitor age como teclado
     fisico, entao o teclado do Android nunca sobe) e existe um botao ⌨ ao
     lado para liberar a digitacao manual quando preciso.
     No WEB nao ha' inputmode nem botao: o teclado e' fisico.

   ── Enter
     Tratado em keydown E em beforeinput (insertLineBreak), porque o IME do
     Android costuma mandar keyCode 229 / key "Unidentified" no keydown.
     Um guarda por tempo evita a leitura dobrada quando os dois disparam.

   ── Gaiolas
     O componente monta os cards a partir de .gaiolas / .gaiolaSelecionada,
     com o MESMO markup do cockpit (classes .cpt-gaiola-card*), entao o
     estilo continua vindo do index.css — que alcanca este conteudo porque o
     componente usa Light DOM e vive dentro do #cpt-root.

   ── Atributos (todos opcionais, com default)
     open            - "false" inicia oculto. Default: oculto.
     title           - titulo do card. Default "Leitura de Etiquetas".
     subtitle        - subtitulo. Default montado de .dados.
     width           - largura maxima do card. Default 1280px / 96vw.
     color           - cor do detalhe. Default "#1C5C31".
     layout          - "auto" (default) | "web" | "mobile".
     breakpoint      - largura maxima considerada mobile. Default "768px".
     placeholder     - texto do campo de leitura.
     onler           - JS executado a cada etiqueta lida (recebe "detail").
     onremover       - JS executado ao CONFIRMAR a remocao de uma leitura.
     ongaiolaselect  - JS executado ao escolher uma gaiola.
     ongaiolanova    - JS executado ao pedir uma gaiola nova.
     ongaiolaprint   - JS executado ao pedir a etiqueta da gaiola.
     onclose         - JS executado ao fechar.

   ── Propriedades JS
     .dados             - { material, lote }.
     .leituras          - array [{ etiqueta, material, lote, peso, gaiola }].
                          "peso" e "gaiola" ja' formatados como texto.
     .progresso         - { pesado, alvo, pendente }. Textos ja' formatados.
     .percentual        - 0..100 para a barra.
     .gaiolas           - array [{ key, nome, numero }].
     .gaiolaSelecionada - key da gaiola marcada.
     .apontando         - texto do banner "validando etiqueta"; false esconde.
     .layout / .isMobile

   ── Eventos (CustomEvent, bubbles)
     "ler"           -> detail { codigo }
     "remover"       -> detail { indice }
     "gaiola-select" -> detail { key, gaiola }
     "gaiola-nova"   -> detail {}
     "gaiola-print"  -> detail { key, gaiola }
     "close"         -> detail {}

   ── Metodos JS
     el.abrir() / el.fechar()
     el.limparInput() / el.focarInput()
     el.definirGaiolas(lista, keySelecionada)

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/Pesagem/granado-pesagem-popup-leitura.js"></script>

   <granado-popup-leitura id="cpt-popup-leitura"
       open="false"
       layout="auto"
       onler="Leitura.onEnter(detail.codigo);"
       onremover="Leitura.remover(detail.indice);"
       ongaiolaselect="Gaiolas.selecionarLeitura(detail.key);"
       ongaiolanova="Gaiolas.novaLeitura();"
       ongaiolaprint="Gaiolas.imprimirEtiqueta(detail.key);"
       onclose="Leitura.aoFechar();">
   </granado-popup-leitura>
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-popup-leitura')) {
  const SUPERFICIE       = '#FDFAF1';
  const BORDA            = '#E5DDC8';
  const BORDA_FORTE      = '#D6CDA4';
  const BORDA_DOURADA    = '#D6C68C';
  const VERDE            = '#1C5C31';
  const OURO             = '#9A7520';
  const FUNDO_DOURADO    = '#FBF3DA';
  const FUNDO_VERDE      = '#E4F1DC';
  const VERMELHO         = '#8C1A1A';
  const TEXTO            = '#103E20';
  const TEXTO_MEDIO      = '#5A6B5E';
  const TEXTO_SUAVE      = '#8A9E8E';
  const FUNDO_CHIP       = '#EAE4CA';
  const FUNDO_ZEBRA      = '#F7F2E4';
  const FUNDO_SOBREPOSTO = 'rgba(15,51,25,.55)';

  // O cockpit usa Arial para texto e Poppins para numeros (regra da tela).
  const FONTE_TEXTO  = "Arial,'DejaVu Sans',Helvetica,sans-serif";
  const FONTE_NUMERO = "'Poppins','DejaVu Sans',Arial,sans-serif";

  const BREAKPOINT = '768px';

  // Duas leituras identicas em menos de 300ms sao o mesmo Enter chegando por
  // caminhos diferentes (keydown + beforeinput no Android).
  const JANELA_ANTI_DUPLICATA_MS = 300;

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

  // Spinner "aguardando leitura", sobreposto a' esquerda do campo.
  const ICONE_AGUARDANDO =
    '<svg viewBox="0 0 16 16" width="15" height="15" ' +
        'style="animation:granado-leitura-girar .8s linear infinite">' +
      '<circle cx="8" cy="8" r="6" fill="none" stroke="' + BORDA_FORTE + '" stroke-width="2.5"/>' +
      '<path d="M8 2 A6 6 0 0 1 14 8" fill="none" stroke="' + OURO + '" ' +
          'stroke-width="2.5" stroke-linecap="round"/>' +
    '</svg>';

  class GranadoPopupLeitura extends HTMLElement {
    static get observedAttributes() {
      return ['open', 'title', 'subtitle', 'width', 'color', 'layout', 'breakpoint', 'placeholder'];
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      // Lazy-props: valores atribuidos antes do upgrade do elemento.
      var propriedades = ['dados', 'leituras', 'progresso', 'percentual',
                          'gaiolas', 'gaiolaSelecionada', 'apontando', 'layout'];
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
      this._montarCasca();
      this._atualizarTudo();
    }

    disconnectedCallback() {
      this._desligarEsc();
      this._desligarConsultaDeMidia();
    }

    attributeChangedCallback(nome) {
      if (!this.isConnected) return;

      if (nome === 'open') {
        this.style.display = (this.getAttribute('open') === 'false') ? 'none' : '';
        return;
      }
      if (nome === 'breakpoint' || nome === 'layout') {
        this._desligarConsultaDeMidia();
        this._ligarConsultaDeMidia();
        this._aplicarLayout();
        return;
      }
      this._atualizarCabecalho();
      this._atualizarCampo();
    }

    // ------------------------------------------------------------
    // API JS · propriedades
    // ------------------------------------------------------------
    get dados() { return this._dados || {}; }
    set dados(valor) {
      this._dados = valor || {};
      this._atualizarCabecalho();
      this._atualizarMaterialLote();
    }

    get leituras() { return this._leituras || []; }
    set leituras(valor) {
      this._leituras = Array.isArray(valor) ? valor : [];
      this._atualizarLeituras();
      this._atualizarProgresso();   // o contador de etiquetas vive no progresso
    }

    get progresso() { return this._progresso || {}; }
    set progresso(valor) {
      this._progresso = valor || {};
      this._atualizarProgresso();
    }

    get percentual() { return this._percentual || 0; }
    set percentual(valor) {
      this._percentual = Number(valor) || 0;
      this._atualizarProgresso();
    }

    get gaiolas() { return this._gaiolas || []; }
    set gaiolas(valor) {
      this._gaiolas = Array.isArray(valor) ? valor : [];
      this._atualizarGaiolas();
    }

    get gaiolaSelecionada() { return this._gaiolaSelecionada || null; }
    set gaiolaSelecionada(valor) {
      this._gaiolaSelecionada = (valor == null) ? null : String(valor);
      this._atualizarGaiolas();
    }

    // Texto do banner que substitui o campo enquanto o apontamento roda.
    // false esconde o banner e devolve o campo.
    get apontando() { return this._apontando || false; }
    set apontando(valor) {
      this._apontando = valor || false;
      this._atualizarApontando();
    }

    get layout() { return (this.getAttribute('layout') || 'auto').toLowerCase(); }
    set layout(valor) { this.setAttribute('layout', String(valor)); }

    get isMobile() {
      var escolhido = this.layout;
      if (escolhido === 'mobile') return true;
      if (escolhido === 'web') return false;
      return !!(this._consulta && this._consulta.matches);
    }

    // Troca lista e selecao com uma unica repintura dos cards.
    definirGaiolas(lista, keySelecionada) {
      this._gaiolas = Array.isArray(lista) ? lista : [];
      this._gaiolaSelecionada = (keySelecionada == null) ? null : String(keySelecionada);
      this._atualizarGaiolas();
    }

    // ------------------------------------------------------------
    // API JS · metodos
    // ------------------------------------------------------------
    abrir() {
      this._aberto = true;
      this.removeAttribute('open');
      this.style.display = '';
      this._montarCasca();
      this._aplicarLayout();
      this._atualizarTudo();
      this._ligarEsc();
      this.focarInput();
    }

    // Idempotente: um handler de "onclose" que chame fechar() fecharia um
    // ciclo infinito sem esta guarda.
    fechar() {
      if (!this._estaAberto()) return;

      this._aberto = false;
      this.style.display = 'none';
      this._fecharConfirmacao();
      this._desligarEsc();
      this._dispararEvento('close', {}, this._onCloseFn, 'onclose');
    }

    limparInput() {
      var campo = this._entradaAtiva();
      if (campo) campo.value = '';
    }

    // Existe de verdade (no componente anterior era so' documentado).
    // O setTimeout cobre o caso de o foco ser pedido no mesmo tique em que o
    // popup acabou de aparecer: o elemento ainda nao e' focavel nesse momento.
    focarInput() {
      var esteComponente = this;
      var focar = function () {
        var campo = esteComponente._entradaAtiva();
        if (!campo) return;
        if (document.activeElement === campo) return;
        campo.focus();
      };
      focar();
      setTimeout(focar, 0);
    }

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
        if (esteComponente.layout !== 'auto') return;
        esteComponente._aplicarLayout();
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

    // Bloco de layout visivel. Como os dois convivem no DOM com os mesmos
    // data-role, buscar direto em "this" daria o do bloco escondido.
    _blocoAtivo() {
      var papel = this.isMobile ? 'layout-mobile' : 'layout-web';
      return this.querySelector('[data-role="' + papel + '"]');
    }

    _noBlocoAtivo(seletor) {
      var bloco = this._blocoAtivo();
      return bloco ? bloco.querySelector(seletor) : null;
    }

    _vemDoBlocoAtivo(elemento) {
      var bloco = this._blocoAtivo();
      return !!(bloco && elemento && bloco.contains(elemento));
    }

    _entradaAtiva() {
      return this._noBlocoAtivo('[data-role="entrada"]');
    }

    // Escreve o mesmo HTML nos dois blocos: o escondido fica pronto para
    // quando o tablet girar, sem precisar remontar nada.
    _preencherNosDoisBlocos(papel, html) {
      if (!this._montado) return;
      var alvos = this.querySelectorAll('[data-role="' + papel + '"]');
      for (var i = 0; i < alvos.length; i++) {
        alvos[i].innerHTML = html;
      }
    }

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

    /* ============================================================
       MONTAGEM DA CASCA · roda UMA vez
       Cria overlay, card, cabecalho e os dois blocos de layout com os
       containers vazios. O <input> nasce aqui e nunca mais e' recriado.
       ============================================================ */
    _montarCasca() {
      if (this._montado) return;

      this.innerHTML =
        '<style>@keyframes granado-leitura-girar{to{transform:rotate(360deg)}}</style>' +

        '<div data-role="sobreposicao" style="position:fixed;inset:0;background:' + FUNDO_SOBREPOSTO + ';' +
            'z-index:99990;display:flex;align-items:flex-start;justify-content:center;' +
            'padding:24px 12px;backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">' +

          '<div data-role="caixa" style="background:' + SUPERFICIE + ';border:1px solid ' + BORDA + ';' +
              'border-top:4px solid ' + VERDE + ';border-radius:12px;padding:22px 24px;' +
              'width:96%;box-shadow:0 18px 50px rgba(15,51,25,.30);box-sizing:border-box;' +
              'margin:auto;font:14px/1.5 ' + FONTE_TEXTO + ';color:' + TEXTO + '">' +

            this._cabecalho() +

            '<div data-role="layout-web">' + this._esqueletoWeb() + '</div>' +
            '<div data-role="layout-mobile" style="display:none">' + this._esqueletoMobile() + '</div>' +

          '</div>' +
        '</div>' +

        // Confirmacao de remocao: overlay proprio, por cima do principal.
        '<div data-role="confirmacao" style="display:none"></div>';

      this._montado = true;
      this._aplicarLayout();
      this._vincularEventos();
    }

    _cabecalho() {
      return '<div style="display:flex;justify-content:space-between;align-items:flex-start;' +
              'gap:12px;margin-bottom:14px">' +
          '<div style="min-width:0">' +
            '<div data-role="titulo" style="font:700 17px/1.25 ' + FONTE_TEXTO + ';color:' + TEXTO + '"></div>' +
            '<div data-role="subtitulo" style="font:12px/1.4 ' + FONTE_TEXTO + ';color:' + TEXTO_MEDIO + ';margin-top:2px"></div>' +
          '</div>' +
          '<button type="button" data-role="fechar" aria-label="Fechar" title="Fechar" ' +
              'style="flex-shrink:0;box-sizing:border-box;margin:0;appearance:none;background:transparent;' +
              'border:1px solid ' + BORDA + ';border-radius:6px;padding:5px 10px;cursor:pointer;' +
              'font:13px/1 ' + FONTE_TEXTO + ';color:' + TEXTO_MEDIO + '">&#10005;</button>' +
        '</div>';
    }

    /* ============================================================
       ESQUELETOS · containers vazios, preenchidos pelos _atualizarX
       ============================================================ */

    _esqueletoWeb() {
      return this._campo(false) +
        '<div data-role="matlote"></div>' +
        '<div data-role="progresso"></div>' +
        '<div style="display:grid;grid-template-columns:minmax(0,1.6fr) 320px;gap:24px;align-items:start">' +
          '<div data-role="leituras" style="min-width:0"></div>' +
          '<div data-role="gaiolas" style="min-width:0;padding-right:6px"></div>' +
        '</div>';
    }

    _esqueletoMobile() {
      return this._campo(true) +
        '<div data-role="matlote"></div>' +
        '<div data-role="progresso"></div>' +
        '<div data-role="gaiolas"></div>' +
        '<div data-role="leituras"></div>';
    }

    // O campo e o banner "apontando" convivem: alternar display em vez de
    // trocar o HTML e' o que mantem o <input> (e o foco) vivo.
    _campo(ehMobile) {
      var rotulo = ehMobile ? 'ESCANEAR PRÓXIMA ETIQUETA'
                            : 'ESCANEAR PRÓXIMA ETIQUETA (MESMO MATERIAL + LOTE)';

      return '<div data-role="campo">' +
          '<div style="font:900 ' + (ehMobile ? '9px' : '11px') + '/1.4 ' + FONTE_TEXTO + ';' +
              'letter-spacing:.12em;text-transform:uppercase;color:' + TEXTO + ';margin-bottom:' +
              (ehMobile ? '4px' : '6px') + '">' + rotulo + '</div>' +

          '<div data-role="entrada-wrap" style="border:2px dashed ' + BORDA_DOURADA + ';' +
              'border-radius:10px;padding:' + (ehMobile ? '3px' : '4px') + ';' +
              'display:flex;align-items:center;gap:6px;background:' + SUPERFICIE + '">' +

            '<span style="flex:0 0 auto;display:flex;align-items:center;padding-left:10px">' +
              ICONE_AGUARDANDO +
            '</span>' +

            '<input type="text" data-role="entrada" autocomplete="off" ' +
                (ehMobile ? 'inputmode="none" ' : '') +
                'style="flex:1 1 auto;min-width:0;box-sizing:border-box;margin:0;appearance:none;' +
                'background:transparent;border:0;outline:none;padding:' +
                (ehMobile ? '10px 8px' : '11px 8px') + ';' +
                'font:' + (ehMobile ? '16px' : '15px') + '/1.3 ' + FONTE_NUMERO + ';color:' + TEXTO + '">' +

            // O botao de teclado so' faz sentido onde ha' teclado virtual.
            (ehMobile ? this._botaoTeclado() : '') +
          '</div>' +

          '<div data-role="banner" style="display:none"></div>' +
        '</div>';
    }

    _botaoTeclado() {
      return '<button type="button" data-role="teclado" title="Digitar manualmente" ' +
          'aria-label="Alternar teclado" aria-pressed="false" ' +
          'style="flex:0 0 auto;box-sizing:border-box;margin:0 4px 0 0;appearance:none;' +
          'width:38px;height:38px;border:1px solid ' + BORDA_FORTE + ';border-radius:8px;' +
          'background:transparent;cursor:pointer;font:16px/1 ' + FONTE_TEXTO + ';color:' + TEXTO_MEDIO + '">' +
          '&#9000;</button>';
    }

    /* ============================================================
       ATUALIZACOES CIRURGICAS · uma por secao
       ============================================================ */

    _atualizarTudo() {
      this._atualizarCabecalho();
      this._atualizarMaterialLote();
      this._atualizarProgresso();
      this._atualizarLeituras();
      this._atualizarGaiolas();
      this._atualizarApontando();
      this._atualizarCampo();
    }

    _aplicarLayout() {
      if (!this._montado) return;
      var ehMobile = this.isMobile;

      var blocoWeb = this.querySelector('[data-role="layout-web"]');
      var blocoMobile = this.querySelector('[data-role="layout-mobile"]');
      if (blocoWeb) blocoWeb.style.display = ehMobile ? 'none' : 'block';
      if (blocoMobile) blocoMobile.style.display = ehMobile ? 'block' : 'none';

      var caixa = this.querySelector('[data-role="caixa"]');
      if (caixa) {
        caixa.style.maxWidth = this._ou(this.getAttribute('width'), ehMobile ? '96vw' : '1280px');
        caixa.style.padding = ehMobile ? '16px 14px' : '22px 24px';
        caixa.style.borderTopColor = this._ou(this.getAttribute('color'), VERDE);
      }

      // Trocou de bloco: o campo visivel e' outro, e ele precisa do foco.
      if (this._estaAberto()) this.focarInput();
    }

    _atualizarCabecalho() {
      if (!this._montado) return;
      var dados = this.dados;

      var titulo = this.querySelector('[data-role="titulo"]');
      if (titulo) titulo.textContent = this._ou(this.getAttribute('title'), 'Leitura de Etiquetas');

      var subtitulo = this.querySelector('[data-role="subtitulo"]');
      if (subtitulo) {
        subtitulo.textContent = this._ou(this.getAttribute('subtitle'),
          'Pesagem sem balança · ' + this._ou(dados.material, '—') +
          ' · ' + this._ou(dados.lote, '—'));
      }
    }

    _atualizarCampo() {
      if (!this._montado) return;
      var placeholder = this._ou(this.getAttribute('placeholder'), null);

      var campos = this.querySelectorAll('[data-role="entrada"]');
      for (var i = 0; i < campos.length; i++) {
        var ehDoMobile = !!campos[i].closest('[data-role="layout-mobile"]');
        campos[i].placeholder = placeholder || (ehDoMobile
          ? 'Aguardando leitura…'
          : 'Aguardando leitura da próxima etiqueta… (ou digite o código)');
      }
    }

    _atualizarMaterialLote() {
      if (!this._montado) return;
      var dados = this.dados;
      var material = this._esc(this._ou(dados.material, '—'));
      var lote     = this._esc(this._ou(dados.lote, '—'));

      var web = '<div style="display:flex;align-items:baseline;gap:10px;margin:14px 0 12px;' +
            'font:14px/1.4 ' + FONTE_TEXTO + ';color:' + TEXTO + '">' +
          '<span style="font:900 10px/1.4 ' + FONTE_TEXTO + ';letter-spacing:.12em;' +
              'text-transform:uppercase;color:' + TEXTO_SUAVE + ';flex-shrink:0">MATERIAL · LOTE</span>' +
          '<span>' + material + ' · ' + lote + '</span>' +
        '</div>';

      var mobile = '<div style="margin:8px 0;font:12px/1.35 ' + FONTE_TEXTO + ';color:' + TEXTO_MEDIO + ';' +
            'overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' +
          material + ' · ' + lote +
        '</div>';

      this._preencherPorBloco('matlote', web, mobile);
    }

    // Alguns trechos diferem entre os layouts; este helper escreve o HTML
    // certo em cada bloco sem espalhar ternarios pelo codigo.
    _preencherPorBloco(papel, htmlWeb, htmlMobile) {
      if (!this._montado) return;

      var blocoWeb = this.querySelector('[data-role="layout-web"]');
      if (blocoWeb) {
        var alvoWeb = blocoWeb.querySelector('[data-role="' + papel + '"]');
        if (alvoWeb) alvoWeb.innerHTML = htmlWeb;
      }

      var blocoMobile = this.querySelector('[data-role="layout-mobile"]');
      if (blocoMobile) {
        var alvoMobile = blocoMobile.querySelector('[data-role="' + papel + '"]');
        if (alvoMobile) alvoMobile.innerHTML = htmlMobile;
      }
    }

    _atualizarProgresso() {
      if (!this._montado) return;

      var progresso = this.progresso;
      var pesado   = this._esc(this._ou(progresso.pesado, '0,000 kg'));
      var alvo     = this._esc(this._ou(progresso.alvo, '—'));
      var pendente = this._esc(this._ou(progresso.pendente, '—'));
      var percentual = Math.max(0, Math.min(100, this.percentual));

      this._preencherPorBloco('progresso',
        this._progressoWeb(pesado, alvo, pendente, percentual),
        this._progressoMobile(pesado, alvo, pendente, percentual));
    }

    _progressoWeb(pesado, alvo, pendente, percentual) {
      var estiloRotulo = 'font:900 10px/1.3 ' + FONTE_TEXTO + ';letter-spacing:.1em;' +
          'text-transform:uppercase;margin-bottom:4px';
      var estiloValor = 'font:900 28px/1 ' + FONTE_NUMERO + ';font-variant-numeric:tabular-nums';

      return '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:12px">' +
          '<div style="background:' + FUNDO_DOURADO + ';border:1px solid ' + BORDA_FORTE + ';' +
              'border-radius:8px;padding:12px 16px">' +
            '<div style="' + estiloRotulo + ';color:' + OURO + '">ACUMULADO · ' +
                this.leituras.length + ' ETIQ.</div>' +
            '<div style="' + estiloValor + ';color:' + OURO + '">' + pesado + '</div>' +
          '</div>' +
          '<div style="background:' + FUNDO_VERDE + ';border:1px solid ' + VERDE + ';' +
              'border-radius:8px;padding:12px 16px">' +
            '<div style="' + estiloRotulo + ';color:' + VERDE + '">QUANTIDADE ALVO</div>' +
            '<div style="' + estiloValor + ';color:' + VERDE + '">' + alvo + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;margin-bottom:6px;' +
            'font:700 11px/1.3 ' + FONTE_TEXTO + ';color:' + TEXTO_SUAVE + '">' +
          '<span>' + percentual.toFixed(0) + '% do alvo</span>' +
          '<span>restante: ' + pendente + '</span>' +
        '</div>' +
        this._barra(percentual, '10px') +
        '<div style="height:16px"></div>';
    }

    // Sem rotulos PESADO/ALVO: os nomes ocupavam mais que os proprios numeros
    // e a linha quebrava na largura do celular.
    _progressoMobile(pesado, alvo, pendente, percentual) {
      var estiloRotulo = 'font:900 8px/1.3 ' + FONTE_TEXTO + ';letter-spacing:.12em;' +
          'text-transform:uppercase;color:' + TEXTO_SUAVE;
      var estiloNumero = 'font:800 12px/1.2 ' + FONTE_NUMERO + ';' +
          'font-variant-numeric:tabular-nums;color:' + TEXTO;

      return '<div style="margin:8px 0">' +
          '<div style="display:flex;justify-content:space-between;align-items:baseline;' +
              'gap:8px;margin-bottom:4px">' +
            '<div style="white-space:nowrap">' +
              '<span style="' + estiloNumero + '">' + pesado + '</span>' +
              '<span style="' + estiloNumero + ';color:' + TEXTO_SUAVE + '"> / </span>' +
              '<span style="' + estiloNumero + ';color:' + TEXTO_MEDIO + '">' + alvo + '</span>' +
            '</div>' +
            '<div style="white-space:nowrap;flex-shrink:0">' +
              '<span style="' + estiloRotulo + '">PENDENTE</span> ' +
              '<span style="' + estiloNumero + ';color:' + VERDE + '">' + pendente + '</span>' +
            '</div>' +
          '</div>' +
          this._barra(percentual, '8px') +
        '</div>';
    }

    _barra(percentual, altura) {
      return '<div style="height:' + altura + ';background:' + FUNDO_CHIP + ';' +
              'border-radius:999px;overflow:hidden">' +
          '<div style="height:100%;width:' + percentual.toFixed(1) + '%;background:' + VERDE + ';' +
              'border-radius:999px;transition:width .25s ease"></div>' +
        '</div>';
    }

    _atualizarLeituras() {
      if (!this._montado) return;
      this._preencherPorBloco('leituras', this._tabelaWeb(), this._galeriaMobile());
    }

    // WEB · tabela propria, com rolagem no corpo e cabecalho fixo. A paginacao
    // do granado-table foi trocada por rolagem: dentro do popup, virar pagina
    // custa mais que rolar, e o operador quer ver a ultima etiqueta lida.
    _tabelaWeb() {
      var leituras = this.leituras;
      if (!leituras.length) return this._vazio('ETIQUETAS LIDAS', '11px');

      var estiloCabecalho = 'position:sticky;top:0;background:' + FUNDO_CHIP + ';' +
          'font:900 10px/1.4 ' + FONTE_TEXTO + ';letter-spacing:.08em;text-transform:uppercase;' +
          'color:' + TEXTO_MEDIO + ';text-align:left;padding:8px 10px;white-space:nowrap';

      var corpo = '';
      for (var i = 0; i < leituras.length; i++) {
        corpo += this._linhaDaTabela(leituras[i], i);
      }

      return this._rotulo('ETIQUETAS LIDAS (' + leituras.length + ')', '11px') +
        '<div style="border:1px solid ' + BORDA + ';border-radius:8px;overflow:auto;max-height:340px">' +
          '<table style="width:100%;border-collapse:collapse">' +
            '<thead><tr>' +
              '<th style="' + estiloCabecalho + '">#</th>' +
              '<th style="' + estiloCabecalho + '">Etiqueta</th>' +
              '<th style="' + estiloCabecalho + '">Material</th>' +
              '<th style="' + estiloCabecalho + '">Lote</th>' +
              '<th style="' + estiloCabecalho + '">Peso</th>' +
              '<th style="' + estiloCabecalho + '">Gaiola</th>' +
              '<th style="' + estiloCabecalho + ';text-align:center">Ações</th>' +
            '</tr></thead>' +
            '<tbody>' + corpo + '</tbody>' +
          '</table>' +
        '</div>';
    }

    _linhaDaTabela(leitura, indice) {
      var fundo = (indice % 2 === 1) ? FUNDO_ZEBRA : 'transparent';

      var celulaNumero = 'padding:8px 10px;border-top:1px solid ' + BORDA + ';' +
          'font:600 13px/1.4 ' + FONTE_NUMERO + ';font-variant-numeric:tabular-nums;color:' + TEXTO;
      var celulaTexto = 'padding:8px 10px;border-top:1px solid ' + BORDA + ';' +
          'font:13px/1.4 ' + FONTE_TEXTO + ';color:' + TEXTO;

      return '<tr style="background:' + fundo + '">' +
          '<td style="' + celulaNumero + ';color:' + TEXTO_SUAVE + '">' + (indice + 1) + '</td>' +
          '<td style="' + celulaNumero + '">' + this._esc(this._ou(leitura.etiqueta, '—')) + '</td>' +
          '<td style="' + celulaTexto + '">' + this._esc(this._ou(leitura.material, '—')) + '</td>' +
          '<td style="' + celulaNumero + '">' + this._esc(this._ou(leitura.lote, '—')) + '</td>' +
          '<td style="' + celulaNumero + '">' + this._esc(this._ou(leitura.peso, '—')) + '</td>' +
          '<td style="' + celulaNumero + '">' + this._esc(this._ou(leitura.gaiola, '—')) + '</td>' +
          '<td style="' + celulaTexto + ';text-align:center">' +
            '<button type="button" data-role="remover" data-indice="' + indice + '" title="Remover" ' +
                'style="box-sizing:border-box;margin:0;appearance:none;background:transparent;' +
                'border:0;cursor:pointer;font:18px/1 ' + FONTE_TEXTO + ';color:' + VERMELHO + ';' +
                'padding:0 4px">&times;</button>' +
          '</td>' +
        '</tr>';
    }

    // MOBILE · galeria de cards. A tabela nao cabe na largura do celular;
    // tocar no card pede a remocao (nao ha' espaco para um botao por card).
    _galeriaMobile() {
      var leituras = this.leituras;
      if (!leituras.length) return this._vazio('ETIQUETAS LIDAS', '9px');

      var cards = '';
      for (var i = 0; i < leituras.length; i++) {
        cards += this._cardDeLeitura(leituras[i], i);
      }

      return this._rotulo('ETIQUETAS LIDAS (' + leituras.length + ')', '9px') +
        '<div style="display:flex;flex-direction:column;gap:8px;max-height:30vh;overflow-y:auto;' +
            'padding-right:4px">' + cards + '</div>';
    }

    _cardDeLeitura(leitura, indice) {
      return '<div data-role="leitura-card" data-indice="' + indice + '" ' +
            'role="button" tabindex="0" title="Tocar para remover" ' +
            'style="background:' + SUPERFICIE + ';border:1px solid ' + BORDA_FORTE + ';' +
            'border-radius:10px;padding:10px 12px;cursor:pointer">' +
          '<div style="font:700 14px/1.3 ' + FONTE_NUMERO + ';color:#0F3319">' +
            this._esc(this._ou(leitura.etiqueta, '—')) + '</div>' +
          '<div style="font:12px/1.35 ' + FONTE_TEXTO + ';color:' + TEXTO_MEDIO + ';margin-top:2px;' +
              'overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' +
            this._esc(this._ou(leitura.material, '—')) + ' · ' +
            this._esc(this._ou(leitura.lote, '—')) + '</div>' +
          '<div style="font:700 12px/1.35 ' + FONTE_NUMERO + ';color:' + VERDE + ';margin-top:4px">' +
            '⚖️ ' + this._esc(this._ou(leitura.peso, '—')) +
            '  ·  📦 ' + this._esc(this._ou(leitura.gaiola, '—')) + '</div>' +
        '</div>';
    }

    _atualizarGaiolas() {
      if (!this._montado) return;

      var lista = this.gaiolas;
      var cards = '';
      for (var i = 0; i < lista.length; i++) {
        cards += this._cardDeGaiola(lista[i]);
      }
      cards += this._cardDeNovaGaiola();

      var rotuloWeb = 'GAIOLA <span style="font-weight:600;text-transform:none;letter-spacing:0;' +
          'color:' + TEXTO_SUAVE + '">(vincula à última etiqueta lida)</span>';

      this._preencherPorBloco('gaiolas',
        this._rotulo(rotuloWeb, '11px') + '<div class="cpt-gaiola-grid">' + cards + '</div>',
        this._rotulo('GAIOLA', '9px') + '<div class="cpt-gaiola-grid-mobile">' + cards + '</div>');
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
              'title="Imprimir etiqueta da gaiola" aria-label="Imprimir etiqueta da gaiola">' +
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

    // Banner que cobre o campo enquanto o apontamento roda: o operador nao
    // pode ler a proxima etiqueta no meio do processo.
    _atualizarApontando() {
      if (!this._montado) return;

      var texto = this.apontando;
      var mostrarBanner = !!texto;

      var wraps = this.querySelectorAll('[data-role="entrada-wrap"]');
      for (var i = 0; i < wraps.length; i++) {
        wraps[i].style.display = mostrarBanner ? 'none' : 'flex';
      }

      var banners = this.querySelectorAll('[data-role="banner"]');
      for (var j = 0; j < banners.length; j++) {
        banners[j].style.display = mostrarBanner ? 'block' : 'none';
        if (mostrarBanner) banners[j].innerHTML = this._bannerApontando(texto);
      }

      // Terminou o apontamento: o campo volta e precisa do foco de novo.
      if (!mostrarBanner && this._estaAberto()) this.focarInput();
    }

    _bannerApontando(texto) {
      return '<div style="display:flex;align-items:center;gap:12px;background:#EAF1FB;' +
              'border:1px solid #B9D2F0;border-radius:8px;padding:12px 16px;' +
              'font:800 13px/1.3 ' + FONTE_TEXTO + ';color:#2C5A8C">' +
          '<span style="flex:0 0 auto;width:16px;height:16px;border-radius:50%;' +
              'border:2.5px solid #C5D8F0;border-top-color:#3B6FD4;' +
              'animation:granado-leitura-girar .8s linear infinite"></span>' +
          '<span>' + this._esc(texto) + '</span>' +
        '</div>';
    }

    _rotulo(textoHtml, tamanho) {
      return '<div style="font:900 ' + tamanho + '/1.4 ' + FONTE_TEXTO + ';letter-spacing:.08em;' +
          'text-transform:uppercase;color:' + TEXTO + ';margin:0 0 6px">' + textoHtml + '</div>';
    }

    _vazio(rotulo, tamanho) {
      return this._rotulo(rotulo, tamanho) +
        '<div style="border:1px dashed ' + BORDA_FORTE + ';border-radius:8px;padding:18px;' +
            'text-align:center;font:13px/1.4 ' + FONTE_TEXTO + ';color:' + TEXTO_SUAVE + '">' +
            'Nenhuma etiqueta lida ainda.</div>';
    }

    /* ============================================================
       CONFIRMACAO DE REMOCAO · overlay proprio, por cima do principal
       ============================================================ */

    _pedirRemocao(indice) {
      var leitura = this.leituras[indice];
      if (!leitura) return;

      var area = this.querySelector('[data-role="confirmacao"]');
      if (!area) return;

      area.innerHTML =
        '<div style="position:fixed;inset:0;background:' + FUNDO_SOBREPOSTO + ';z-index:99995;' +
            'display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box">' +
          '<div style="background:' + SUPERFICIE + ';border:1px solid ' + BORDA + ';' +
              'border-top:4px solid ' + OURO + ';border-radius:12px;padding:22px 24px;' +
              'max-width:420px;width:100%;box-sizing:border-box;' +
              'box-shadow:0 18px 50px rgba(15,51,25,.30)">' +

            '<div style="font:700 17px/1.25 ' + FONTE_TEXTO + ';color:' + TEXTO + ';margin-bottom:10px">' +
              'Remover leitura?</div>' +

            '<div style="font:13px/1.6 ' + FONTE_TEXTO + ';color:' + TEXTO_MEDIO + ';margin-bottom:18px">' +
              'Etiqueta <strong style="font-family:' + FONTE_NUMERO + ';color:' + TEXTO + '">' +
                this._esc(this._ou(leitura.etiqueta, '—')) + '</strong><br>' +
              'Peso <strong style="font-family:' + FONTE_NUMERO + ';color:' + TEXTO + '">' +
                this._esc(this._ou(leitura.peso, '—')) + '</strong>' +
            '</div>' +

            '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
              '<button type="button" data-role="cancelar-remocao" ' +
                  'style="box-sizing:border-box;margin:0;appearance:none;width:100%;height:44px;' +
                  'background:transparent;border:1px solid ' + BORDA_FORTE + ';border-radius:8px;' +
                  'cursor:pointer;font:700 13px/1.2 ' + FONTE_TEXTO + ';color:' + TEXTO_MEDIO + '">' +
                  'CANCELAR</button>' +
              '<button type="button" data-role="confirmar-remocao" data-indice="' + indice + '" ' +
                  'style="box-sizing:border-box;margin:0;appearance:none;width:100%;height:44px;' +
                  'background:' + VERMELHO + ';border:1px solid ' + VERMELHO + ';border-radius:8px;' +
                  'cursor:pointer;font:700 13px/1.2 ' + FONTE_TEXTO + ';color:#FFFFFF">' +
                  'REMOVER</button>' +
            '</div>' +
          '</div>' +
        '</div>';

      area.style.display = 'block';
      this._confirmacaoAberta = true;
    }

    _fecharConfirmacao() {
      var area = this.querySelector('[data-role="confirmacao"]');
      if (!area) return;
      area.style.display = 'none';
      area.innerHTML = '';
      this._confirmacaoAberta = false;
    }

    /* ============================================================
       EVENTOS · tudo delegado no host, ligado UMA vez
       ============================================================ */

    _vincularEventos() {
      if (this._eventosLigados) return;
      this._eventosLigados = true;

      var esteComponente = this;

      // ---- Enter no campo -------------------------------------------------
      // keydown cobre o leitor (teclado fisico) e o teclado do desktop.
      this.addEventListener('keydown', function (evento) {
        var alvo = evento.target;
        if (!alvo || alvo.getAttribute('data-role') !== 'entrada') return;
        if (evento.key !== 'Enter') return;

        // O Portal do Apriso recarrega a tela no Enter: o evento para aqui.
        evento.preventDefault();
        evento.stopPropagation();
        esteComponente._enviarLeitura(alvo);
      });

      // O IME do Android manda keyCode 229 / key "Unidentified" no keydown;
      // o Enter so' aparece de verdade aqui.
      this.addEventListener('beforeinput', function (evento) {
        var alvo = evento.target;
        if (!alvo || alvo.getAttribute('data-role') !== 'entrada') return;
        if (evento.inputType !== 'insertLineBreak') return;

        evento.preventDefault();
        esteComponente._enviarLeitura(alvo);
      });

      // ---- Cliques --------------------------------------------------------
      this.addEventListener('click', function (evento) {
        var alvo = evento.target;

        // Confirmacao de remocao (fica fora dos blocos de layout).
        var cancelar = alvo.closest('[data-role="cancelar-remocao"]');
        if (cancelar) {
          esteComponente._fecharConfirmacao();
          esteComponente.focarInput();
          return;
        }

        var confirmar = alvo.closest('[data-role="confirmar-remocao"]');
        if (confirmar) {
          var indiceRemover = Number(confirmar.getAttribute('data-indice'));
          esteComponente._fecharConfirmacao();
          esteComponente._dispararEvento('remover', { indice: indiceRemover },
            esteComponente._onRemoverFn, 'onremover');
          esteComponente.focarInput();
          return;
        }

        if (alvo.closest('[data-role="fechar"]')) {
          esteComponente.fechar();
          return;
        }

        // Daqui para baixo, so' o bloco de layout VISIVEL conta: o escondido
        // tem os mesmos data-role e responderia junto.
        if (!esteComponente._vemDoBlocoAtivo(alvo)) return;

        if (alvo.closest('[data-role="teclado"]')) {
          esteComponente._alternarTeclado();
          return;
        }

        var botaoRemover = alvo.closest('[data-role="remover"]');
        if (botaoRemover) {
          evento.stopPropagation();
          esteComponente._pedirRemocao(Number(botaoRemover.getAttribute('data-indice')));
          return;
        }

        var cardDeLeitura = alvo.closest('[data-role="leitura-card"]');
        if (cardDeLeitura) {
          esteComponente._pedirRemocao(Number(cardDeLeitura.getAttribute('data-indice')));
          return;
        }

        // A impressora fica DENTRO do card; sem isto o clique tambem selecionaria.
        var impressora = alvo.closest('[data-role="gaiola-print"]');
        if (impressora) {
          evento.stopPropagation();
          var cardDaImpressora = impressora.parentNode;
          var chaveImpressao = cardDaImpressora ? cardDaImpressora.getAttribute('data-key') : '';
          esteComponente._dispararEvento('gaiola-print',
            { key: chaveImpressao, gaiola: esteComponente._gaiolaPelaChave(chaveImpressao) },
            esteComponente._onGaiolaPrintFn, 'ongaiolaprint');
          esteComponente.focarInput();
          return;
        }

        if (alvo.closest('[data-role="gaiola-nova"]')) {
          esteComponente._dispararEvento('gaiola-nova', {},
            esteComponente._onGaiolaNovaFn, 'ongaiolanova');
          esteComponente.focarInput();
          return;
        }

        var cardDeGaiola = alvo.closest('[data-role="gaiola"]');
        if (cardDeGaiola) {
          esteComponente._selecionarGaiola(cardDeGaiola.getAttribute('data-key'));
          return;
        }

        // Clique em area neutra do popup: devolve o foco ao campo.
        esteComponente._devolverFoco(alvo);
      });

      // ---- Foco do leitor -------------------------------------------------
      // O leitor "digita" onde esta' o foco. Qualquer toque dentro do popup
      // que tire o foco do campo o devolve; se o foco foi para FORA do
      // componente (popup de impressao por cima), cede sem brigar.
      this.addEventListener('focusout', function (evento) {
        if (!esteComponente._estaAberto()) return;
        if (esteComponente._confirmacaoAberta) return;

        var indo = evento.relatedTarget;
        if (indo && !esteComponente.contains(indo)) return;

        esteComponente._devolverFoco(indo);
      });
    }

    // Um Enter pode chegar por keydown E por beforeinput no Android. A janela
    // de tempo evita a mesma etiqueta entrar duas vezes.
    _enviarLeitura(campo) {
      var agora = Date.now();
      if (this._ultimaLeituraEm && (agora - this._ultimaLeituraEm) < JANELA_ANTI_DUPLICATA_MS) return;

      var codigo = String(campo.value || '').trim();
      if (!codigo) return;

      this._ultimaLeituraEm = agora;
      this._dispararEvento('ler', { codigo: codigo }, this._onLerFn, 'onler');
    }

    _selecionarGaiola(chave) {
      if (!chave) return;
      this._gaiolaSelecionada = String(chave);
      this._atualizarGaiolas();
      this._dispararEvento('gaiola-select',
        { key: this._gaiolaSelecionada, gaiola: this._gaiolaPelaChave(this._gaiolaSelecionada) },
        this._onGaiolaSelectFn, 'ongaiolaselect');
      this.focarInput();
    }

    // Devolve o foco ao campo, exceto quando o destino e' um elemento que
    // precisa dele de verdade (o proprio campo ou um botao da confirmacao).
    _devolverFoco(alvo) {
      if (!this._estaAberto()) return;
      if (this._confirmacaoAberta) return;
      if (alvo && alvo.getAttribute && alvo.getAttribute('data-role') === 'entrada') return;
      this.focarInput();
    }

    // Liga/desliga o teclado virtual do campo ativo. O Android so' reavalia o
    // inputmode quando o campo perde e recupera o foco.
    _alternarTeclado() {
      var campo = this._entradaAtiva();
      if (!campo) return;

      this._tecladoLiberado = !this._tecladoLiberado;

      if (this._tecladoLiberado) {
        campo.removeAttribute('inputmode');
      } else {
        campo.setAttribute('inputmode', 'none');
      }

      var botao = this._noBlocoAtivo('[data-role="teclado"]');
      if (botao) {
        botao.setAttribute('aria-pressed', this._tecladoLiberado ? 'true' : 'false');
        botao.style.background = this._tecladoLiberado ? FUNDO_VERDE : 'transparent';
        botao.style.borderColor = this._tecladoLiberado ? VERDE : BORDA_FORTE;
        botao.style.color = this._tecladoLiberado ? VERDE : TEXTO_MEDIO;
      }

      campo.blur();
      campo.focus();
    }

    /* ============================================================
       Esc e disparo de eventos
       ============================================================ */

    _ligarEsc() {
      if (this._escAtivo) return;
      var esteComponente = this;
      this._aoPressionarEsc = function (evento) {
        if (evento.key !== 'Escape' && evento.key !== 'Esc') return;

        // Esc fecha primeiro a confirmacao, depois o popup.
        if (esteComponente._confirmacaoAberta) {
          esteComponente._fecharConfirmacao();
          esteComponente.focarInput();
          return;
        }
        esteComponente.fechar();
      };
      document.addEventListener('keydown', this._aoPressionarEsc);
      this._escAtivo = true;
    }

    _desligarEsc() {
      if (!this._escAtivo) return;
      document.removeEventListener('keydown', this._aoPressionarEsc);
      this._escAtivo = false;
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
  }

  customElements.define('granado-popup-leitura', GranadoPopupLeitura);
  window.GranadoPopupLeitura = GranadoPopupLeitura;
}