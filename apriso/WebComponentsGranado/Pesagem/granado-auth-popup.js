/* ============================================================
   <granado-auth-popup>
   Popup de AUTENTICACAO — pede credencial de um usuario autorizado
   antes de liberar uma acao restrita (ex.: ligar a pesagem manual).

   Componente AUTOSSUFICIENTE: monta a propria casca (sobreposicao,
   card, titulo, X) e os proprios campos com elementos nativos. Nao
   usa nenhum outro granado-* por dentro.

   ── O componente NAO valida credencial
   Ele apenas COLETA e emite "autenticar" com { usuario, senha }. Quem
   escuta chama a DFC e responde:
     - deu certo  -> el.fechar()
     - deu errado -> el.mostrarErro('mensagem')
   Assim o componente nao conhece DFC nenhuma e serve para qualquer
   autorizacao, nao so' a da pesagem manual.

   ── Atributos (todos opcionais, com default)
     open           - "false" inicia oculto. Default: oculto.
     title           - tarja superior. Default "AUTORIZACAO NECESSARIA".
     subtitle        - titulo grande. Default "Login do supervisor".
     message         - texto explicativo acima dos campos.
     width           - largura maxima do card. Default "420px".
     color           - cor do detalhe superior. Default "#1C5C31".
     layout          - "auto" (default) | "web" | "mobile".
     breakpoint      - largura maxima considerada mobile. Default "768px".
     user-label      - rotulo do campo de usuario. Default "USUARIO".
     password-label  - rotulo do campo de senha.   Default "SENHA".
     confirm-text    - rotulo do botao confirmar.  Default "AUTORIZAR".
     cancel-text     - rotulo do botao cancelar.   Default "CANCELAR".
     onautenticar    - JS ao confirmar. Vars: detail.usuario, detail.senha
     onclose         - JS ao fechar (X, Esc, cancelar, fechar()).

   ── Eventos (CustomEvent, bubbles)
     "autenticar" -> detail { usuario, senha }
     "close"      -> detail {}

   ── Metodos JS
     el.abrir()                 - abre limpo e foca o usuario.
     el.fechar()                - fecha e APAGA as credenciais digitadas.
     el.mostrarErro(mensagem)   - mostra o aviso e destrava os botoes.
     el.carregando(true|false)  - trava os campos enquanto a DFC responde.

   ── ATENCAO · Enter no cockpit
   O cockpit tem um bloqueio global de Enter (bloquearPostbackDoEnter, no
   index.js) que roda em CAPTURA e so' abre excecao para o popup de
   leitura. Sem uma excecao para este popup, o Enter nos campos nunca
   chega ate' aqui. Ver o exemplo abaixo.

   ── Exemplo
   <script src="[AprisoScripts]/WebComponents/granado-auth-popup.js"></script>

   <granado-auth-popup id="cpt-popup-auth"
       open="false"
       message="A pesagem manual exige autorizacao de um supervisor."
       onautenticar="Autorizacao.validar(detail.usuario, detail.senha);"
       onclose="Autorizacao.aoFechar();">
   </granado-auth-popup>

   No bloquearPostbackDoEnter, liberar o Enter aqui dentro:
     if (elementoFocado.closest('granado-auth-popup')) return;
   ============================================================ */

/* __granado_guard__ */
if (!customElements.get('granado-auth-popup')) {
  const SUPERFICIE       = '#FDFAF1';
  const BORDA            = '#E5DDC8';
  const BORDA_FORTE      = '#D6CDA4';
  const VERDE            = '#1C5C31';
  const VERMELHO         = '#8C1A1A';
  const FUNDO_ERRO       = '#F7E6E6';
  const TEXTO            = '#103E20';
  const TEXTO_MEDIO      = '#5A6B5E';
  const TEXTO_SUAVE      = '#8A9E8E';
  const FUNDO_SOBREPOSTO = 'rgba(15,51,25,.55)';

  // Regra da tela: Arial para texto, Poppins para numeros. O usuario pode ser
  // uma matricula numerica, dai a fonte de numero no campo.
  const FONTE_TEXTO  = "Arial,'DejaVu Sans',Helvetica,sans-serif";
  const FONTE_NUMERO = "'Poppins','DejaVu Sans',Arial,sans-serif";

  const LARGURA_PADRAO = '420px';
  const BREAKPOINT     = '768px';

  const ICONE_CADEADO =
    '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" ' +
        'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="4" y="10" width="16" height="11" rx="2"/>' +
      '<path d="M8 10V7a4 4 0 0 1 8 0v3"/>' +
    '</svg>';

  class GranadoAuthPopup extends HTMLElement {
    static get observedAttributes() {
      return ['open', 'title', 'subtitle', 'message', 'width', 'color',
              'layout', 'breakpoint', 'user-label', 'password-label',
              'confirm-text', 'cancel-text'];
    }

    // ------------------------------------------------------------
    // Ciclo de vida
    // ------------------------------------------------------------
    connectedCallback() {
      // Lazy-props: valores atribuidos antes do upgrade do elemento.
      var propriedades = ['layout'];
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
    get layout() { return (this.getAttribute('layout') || 'auto').toLowerCase(); }
    set layout(valor) { this.setAttribute('layout', String(valor)); }

    get isMobile() {
      var escolhido = this.layout;
      if (escolhido === 'mobile') return true;
      if (escolhido === 'web') return false;
      return !!(this._consulta && this._consulta.matches);
    }

    get onAutenticar() { return this._onAutenticarFn || null; }
    set onAutenticar(fn) { this._onAutenticarFn = (typeof fn === 'function') ? fn : null; }

    get onClose() { return this._onCloseFn || null; }
    set onClose(fn) { this._onCloseFn = (typeof fn === 'function') ? fn : null; }

    // Abre SEMPRE limpo: credencial de uma autorizacao nao pode sobrar para
    // a proxima. Sem isso, um segundo supervisor herdaria o usuario do primeiro.
    abrir() {
      this._aberto = true;
      this._erro = '';
      this._carregando = false;
      this.removeAttribute('open');
      this.style.display = '';
      this._render();
      this._ligarEsc();
      this._focarUsuario();
    }

    // Idempotente de proposito: um handler de "onclose" que chame fechar()
    // (padrao comum no cockpit) fecharia um ciclo infinito sem esta guarda.
    fechar() {
      if (!this._estaAberto()) return;

      this._aberto = false;
      this._limparCampos();
      this._erro = '';
      this._carregando = false;
      this.style.display = 'none';
      this._desligarEsc();
      this._dispararEvento('close', {}, this._onCloseFn, 'onclose');
    }

    // Credencial recusada: mostra o motivo e devolve o controle ao operador,
    // preservando o usuario digitado e apagando so' a senha (e o campo que
    // ele vai reescrever).
    mostrarErro(mensagem) {
      this._erro = String(mensagem == null ? '' : mensagem);
      this._carregando = false;

      var senha = this.querySelector('[data-role="senha"]');
      if (senha) senha.value = '';

      this._pintarErro();
      this._pintarEstado();
      this._focarSenha();
    }

    // Trava os campos enquanto a DFC responde — evita duplo envio e deixa
    // claro que a tela esta esperando.
    carregando(ativo) {
      this._carregando = !!ativo;
      if (this._carregando) this._erro = '';
      this._pintarErro();
      this._pintarEstado();
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

    _valorDe(papel) {
      var campo = this.querySelector('[data-role="' + papel + '"]');
      return campo ? String(campo.value || '').trim() : '';
    }

    _limparCampos() {
      var usuario = this.querySelector('[data-role="usuario"]');
      var senha   = this.querySelector('[data-role="senha"]');
      if (usuario) usuario.value = '';
      if (senha) senha.value = '';
    }

    _focarUsuario() {
      var campo = this.querySelector('[data-role="usuario"]');
      if (campo) campo.focus();
    }

    _focarSenha() {
      var campo = this.querySelector('[data-role="senha"]');
      if (campo) campo.focus();
    }

    // ------------------------------------------------------------
    // Internals · render
    // ------------------------------------------------------------
    // O innerHTML e' refeito por inteiro (padrao dos popups da tela), entao
    // o que o operador ja' digitou e' preservado a mao — do contrario girar
    // o tablet apagaria os campos no meio do preenchimento.
    _render() {
      var ehMobile = this.isMobile;
      var usuarioDigitado = this._valorDe('usuario');
      var senhaDigitada   = this._valorDe('senha');

      var tarja    = this._ou(this.getAttribute('title'), 'AUTORIZAÇÃO NECESSÁRIA');
      var subtitulo = this._ou(this.getAttribute('subtitle'), 'Login do supervisor');
      var largura  = this._ou(this.getAttribute('width'), LARGURA_PADRAO);
      var cor      = this._ou(this.getAttribute('color'), VERDE);

      var recuo = ehMobile ? '16px 14px' : '22px 20px';

      this.innerHTML =
        '<div data-role="sobreposicao" style="position:fixed;inset:0;background:' + FUNDO_SOBREPOSTO + ';' +
            'z-index:99999;display:flex;align-items:flex-start;justify-content:center;padding:' +
            (ehMobile ? '16px 8px' : '40px 12px') + ';backdrop-filter:blur(3px);overflow-y:auto;box-sizing:border-box">' +

          '<div data-role="caixa" style="background:' + SUPERFICIE + ';border:1px solid ' + BORDA + ';' +
              'border-top:4px solid ' + cor + ';border-radius:12px;padding:' + recuo + ';' +
              'max-width:' + largura + ';width:96%;box-shadow:0 18px 50px rgba(15,51,25,.30);' +
              'box-sizing:border-box;margin:auto;font:14px/1.5 ' + FONTE_TEXTO + ';color:' + TEXTO + '">' +

            this._cabecalho(tarja, subtitulo, cor, ehMobile) +
            this._mensagem(ehMobile) +
            this._campos(ehMobile) +
            this._aviso(ehMobile) +
            this._acoes(ehMobile) +

          '</div>' +
        '</div>';

      var usuario = this.querySelector('[data-role="usuario"]');
      var senha   = this.querySelector('[data-role="senha"]');
      if (usuario) usuario.value = usuarioDigitado;
      if (senha) senha.value = senhaDigitada;

      this._vincularEventos();
      this._pintarEstado();
    }

    _cabecalho(tarja, subtitulo, cor, ehMobile) {
      return '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:14px">' +
          '<div style="display:flex;align-items:flex-start;gap:10px;min-width:0">' +
            '<span style="flex-shrink:0;color:' + cor + ';margin-top:2px">' + ICONE_CADEADO + '</span>' +
            '<div style="min-width:0">' +
              '<div style="font:700 ' + (ehMobile ? '11px' : '12px') + '/1.25 ' + FONTE_TEXTO + ';' +
                  'letter-spacing:.06em;color:' + TEXTO_SUAVE + '">' + this._esc(tarja) + '</div>' +
              '<div style="font:800 ' + (ehMobile ? '16px' : '19px') + '/1.25 ' + FONTE_TEXTO + ';' +
                  'color:' + TEXTO + ';margin-top:4px">' + this._esc(subtitulo) + '</div>' +
            '</div>' +
          '</div>' +
          '<button type="button" data-role="fechar" aria-label="Fechar" title="Fechar" ' +
              'style="flex-shrink:0;box-sizing:border-box;margin:0;appearance:none;background:transparent;' +
              'border:1px solid ' + BORDA + ';border-radius:6px;padding:5px 10px;cursor:pointer;' +
              'font:13px/1 ' + FONTE_TEXTO + ';color:' + TEXTO_MEDIO + '">&#10005;</button>' +
        '</div>';
    }

    _mensagem(ehMobile) {
      var texto = this.getAttribute('message');
      if (!texto) return '';

      return '<p style="margin:0 0 14px;font:' + (ehMobile ? '12px' : '13px') + '/1.5 ' +
          FONTE_TEXTO + ';color:' + TEXTO_MEDIO + '">' + this._esc(texto) + '</p>';
    }

    _campos(ehMobile) {
      var rotuloUsuario = this._ou(this.getAttribute('user-label'), 'USUÁRIO');
      var rotuloSenha   = this._ou(this.getAttribute('password-label'), 'SENHA');

      return '<div style="display:grid;grid-template-columns:1fr;gap:12px">' +
          this._campo('usuario', rotuloUsuario, 'text', ehMobile) +
          this._campo('senha', rotuloSenha, 'password', ehMobile) +
        '</div>';
    }

    _campo(papel, rotulo, tipo, ehMobile) {
      // autocomplete/autocapitalize desligados: o navegador do tablet sugeria
      // o usuario do operador, justamente quem NAO deve autorizar.
      return '<label style="display:block">' +
          '<span style="display:block;font:700 ' + (ehMobile ? '10px' : '11px') + '/1.4 ' + FONTE_TEXTO + ';' +
              'letter-spacing:.06em;color:' + TEXTO_SUAVE + ';margin-bottom:5px">' +
            this._esc(rotulo) +
          '</span>' +
          '<input type="' + tipo + '" data-role="' + papel + '" ' +
              'autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" ' +
              'style="box-sizing:border-box;margin:0;appearance:none;width:100%;' +
              'height:' + (ehMobile ? '46px' : '42px') + ';padding:0 12px;' +
              'background:#FFFFFF;border:1px solid ' + BORDA_FORTE + ';border-radius:8px;' +
              'font:600 ' + (ehMobile ? '16px' : '15px') + '/1.2 ' + FONTE_NUMERO + ';color:' + TEXTO + '">' +
        '</label>';
    }

    // Faixa de erro. Nasce oculta e e' preenchida por _pintarErro — assim
    // mostrar o erro nao exige refazer o innerHTML (o que apagaria o foco).
    _aviso(ehMobile) {
      return '<div data-role="erro" hidden ' +
          'style="margin-top:12px;padding:9px 11px;border-radius:8px;' +
          'background:' + FUNDO_ERRO + ';border:1px solid ' + VERMELHO + ';' +
          'font:700 ' + (ehMobile ? '11px' : '12px') + '/1.4 ' + FONTE_TEXTO + ';color:' + VERMELHO + '"></div>';
    }

    _acoes(ehMobile) {
      var confirmar = this._ou(this.getAttribute('confirm-text'), 'AUTORIZAR');
      var cancelar  = this._ou(this.getAttribute('cancel-text'), 'CANCELAR');

      var estiloContainer = ehMobile
        ? 'display:grid;grid-template-columns:1fr;gap:8px;margin-top:16px'
        : 'display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px';

      return '<div style="' + estiloContainer + '">' +
          this._botao('autorizar', confirmar, true, ehMobile) +
          this._botao('cancelar', cancelar, false, ehMobile) +
        '</div>';
    }

    _botao(papel, rotulo, ehPrincipal, ehMobile) {
      var cores = ehPrincipal
        ? 'background:' + VERDE + ';border:1px solid ' + VERDE + ';color:' + SUPERFICIE
        : 'background:' + SUPERFICIE + ';border:1px solid ' + VERDE + ';color:' + VERDE;

      return '<button type="button" data-role="' + papel + '" ' +
          'style="box-sizing:border-box;margin:0;appearance:none;width:100%;' +
          'height:' + (ehMobile ? '48px' : '44px') + ';border-radius:8px;cursor:pointer;' +
          cores + ';font:700 13px/1.2 ' + FONTE_TEXTO + '">' +
          this._esc(rotulo) + '</button>';
    }

    // ------------------------------------------------------------
    // Internals · pintura pontual (sem refazer o innerHTML)
    // ------------------------------------------------------------
    _pintarErro() {
      var faixa = this.querySelector('[data-role="erro"]');
      if (!faixa) return;

      faixa.textContent = this._erro || '';
      faixa.hidden = !this._erro;
    }

    // Enquanto a validacao roda, campos e botoes ficam travados e o confirmar
    // troca de rotulo. O cancelar segue ativo: o operador pode desistir se a
    // DFC demorar.
    _pintarEstado() {
      var travado = !!this._carregando;

      var campos = this.querySelectorAll('[data-role="usuario"],[data-role="senha"]');
      for (var i = 0; i < campos.length; i++) {
        campos[i].disabled = travado;
        campos[i].style.opacity = travado ? '.6' : '1';
      }

      var confirmar = this.querySelector('[data-role="autorizar"]');
      if (confirmar) {
        confirmar.disabled = travado;
        confirmar.style.cursor = travado ? 'progress' : 'pointer';
        confirmar.style.opacity = travado ? '.6' : '1';
        confirmar.textContent = travado
          ? 'VERIFICANDO…'
          : this._ou(this.getAttribute('confirm-text'), 'AUTORIZAR');
      }
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

      var botaoCancelar = this.querySelector('[data-role="cancelar"]');
      if (botaoCancelar) {
        botaoCancelar.addEventListener('click', function () { esteComponente.fechar(); });
      }

      var botaoAutorizar = this.querySelector('[data-role="autorizar"]');
      if (botaoAutorizar) {
        botaoAutorizar.addEventListener('click', function () { esteComponente._enviar(); });
      }

      // Enter em qualquer campo confirma — o operador vem do leitor de codigo
      // e do teclado, nao do mouse.
      var campos = this.querySelectorAll('[data-role="usuario"],[data-role="senha"]');
      for (var i = 0; i < campos.length; i++) {
        campos[i].addEventListener('keydown', function (evento) {
          if (evento.key !== 'Enter') return;

          // O Portal do Apriso recarrega a tela no Enter: o evento para aqui.
          evento.preventDefault();
          evento.stopPropagation();
          esteComponente._enviar();
        });
      }
    }

    // Valida so' o PREENCHIMENTO (campo vazio nao vira chamada de DFC). Se a
    // credencial e' valida, quem decide e' quem escuta o evento.
    _enviar() {
      if (this._carregando) return;

      var usuario = this._valorDe('usuario');
      var senha   = this._valorDe('senha');

      if (!usuario) {
        this.mostrarErro('Informe o usuário.');
        this._focarUsuario();
        return;
      }
      if (!senha) {
        this.mostrarErro('Informe a senha.');
        return;
      }

      this.carregando(true);
      this._dispararEvento('autenticar', { usuario: usuario, senha: senha },
        this._onAutenticarFn, 'onautenticar');
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

  customElements.define('granado-auth-popup', GranadoAuthPopup);
  window.GranadoAuthPopup = GranadoAuthPopup;
}