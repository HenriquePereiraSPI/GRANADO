/* ============================================================
   <granado-stepper>
   Stepper horizontal estilo "pes-stepper" (cockpit de pesagem).
   Recebe uma lista de steps onde cada item e um objeto com:

     key            - identificador do step (string). E enviado para
                      o handler de click.
     title          - texto/icone exibido DENTRO da bolinha (opcional).
                      Ex.: "1", "2", "OK", "PRO"...
     subtitle       - texto exibido ABAIXO da bolinha (opcional).
     iconColor      - (override) cor da bolinha desse step. Sobrepoe
                      activeiconcolor/desactiveiconcolor/currentstepcolor.
     textColor      - (override) cor do subtitle desse step. Sobrepoe
                      activetextcolor/desactivetextcolor.
     isFilled       - boolean. Pinta ou nao a bolinha (indicando step
                      concluido). Default: false.
     isCurrent      - boolean. Marca esse step como o "atual". A
                      bolinha usa currentstepcolor (e fica em full
                      opacity mesmo sem onClickEvent). Default: false.
     shapeFormat    - "circle" (default) | "square" | "rounded".
     onClickEvent   - codigo JS executado ao clicar nessa bolinha.
                      Variaveis disponiveis: key, step, index.
                      Steps sem onClickEvent (e que NAO sao isCurrent)
                      ficam "apagados" (opacidade reduzida) para
                      sinalizar que estao desabilitados, sem cursor
                      pointer e sem hover.

   Atributos do elemento (todos opcionais):
     steps                   - JSON com a lista. Tambem pode ser setado
                               via propriedade JS .steps.

     -- Cores das bolinhas --
     activeiconcolor         - cor da bolinha em steps clicaveis.
                               Default: "#1C5C31".
     desactiveiconcolor      - cor da bolinha em steps nao-clicaveis.
                               Default: "#1C5C31" (a opacidade reduzida
                               ja transmite o estado desativado).
     currentstepcolor        - cor da bolinha do step com isCurrent=true.
                               Default: "#9A7520" (ouro).

     -- Cores dos subtitles --
     activetextcolor         - cor do subtitle em steps clicaveis.
                               Default: igual a activeiconcolor quando
                               o step esta preenchido, "#8A9E8E" quando
                               vazado.
     desactivetextcolor      - cor do subtitle em steps nao-clicaveis.
                               Mesma logica de default da activetextcolor.

     -- Cores da linha conectora --
     activeconnectorcolor    - cor da linha apos um step preenchido
                               (isFilled=true). Default: "#1C5C31".
     desactiveconnectorcolor - cor da linha apos um step nao preenchido.
                               Default: "#D6CDA4".

     onstepclickevent        - codigo JS executado em qualquer click de
                               step interativo. Variaveis: key, step,
                               index.

   Eventos:
     "stepclick" CustomEvent (bubbles) com detail {key, step, index}.

   Propriedade JS:
     elemento.steps -> getter/setter (array de objetos).

   Exemplo:

   <script src="assets/WebComponents/granado-stepper.js"></script>

   <granado-stepper id="stp"></granado-stepper>
   <script>
     document.getElementById('stp').steps = [
       {key:'sel',  title:'1', subtitle:'Selecionar MP', isFilled:true,
        onClickEvent:"console.log('step', key)"},
       {key:'ini',  title:'2', subtitle:'Iniciar',       isFilled:true,
        onClickEvent:"console.log('step', key)"},
       {key:'scan', title:'3', subtitle:'Scan Etiqueta', isFilled:false,
        iconColor:'#9A7520'},
       {key:'bal',  title:'4', subtitle:'Balanca',       isFilled:false},
     ];
   </script>
   ============================================================ */

class GranadoStepper extends HTMLElement {
  static get observedAttributes() {
    return [
      'steps',
      'activeiconcolor', 'desactiveiconcolor',
      'activetextcolor', 'desactivetextcolor',
      'activeconnectorcolor', 'desactiveconnectorcolor',
      'currentstepcolor',
      'onstepclickevent'
    ];
  }

  connectedCallback() {
    // Lazy-props pattern: se alguem atribuiu el.steps = [...] ANTES do
    // upgrade do custom element (cenario tipico em Apriso quando o script
    // de setup roda antes do granado-stepper.js terminar de carregar),
    // a atribuicao virou uma own property no HTMLElement e o setter da
    // classe nunca foi chamado. Detectamos isso aqui, capturamos o valor,
    // removemos a own property e re-atribuimos via o setter real.
    if (Object.prototype.hasOwnProperty.call(this, 'steps')) {
      const pending = this.steps;
      delete this.steps;
      this.steps = pending;
    }
    this._render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this._render();
  }

  get steps() {
    if (this._steps) return this._steps;
    return this._parseStepsAttr();
  }
  set steps(arr) {
    this._steps = Array.isArray(arr) ? arr : [];
    if (this.isConnected) this._render();
  }

  _parseStepsAttr() {
    const raw = this.getAttribute('steps');
    if (!raw) return [];
    try {
      const v = JSON.parse(raw);
      return Array.isArray(v) ? v : [];
    } catch {
      return [];
    }
  }

  _normShape(s) {
    if (s === 'square') return '0';
    if (s === 'rounded' || s === 'rounded-square' || s === 'squircle') return '6px';
    return '50%';
  }

  _render() {
    const steps = this._steps || this._parseStepsAttr();

    const activeIconColor      = this.getAttribute('activeiconcolor')      || '#1C5C31';
    const desactiveIconColor   = this.getAttribute('desactiveiconcolor')   || '#1C5C31';
    const currentStepColor     = this.getAttribute('currentstepcolor')     || '#9A7520';
    const activeTextColor      = this.getAttribute('activetextcolor');     // optional
    const desactiveTextColor   = this.getAttribute('desactivetextcolor');  // optional
    const activeConnectorColor    = this.getAttribute('activeconnectorcolor')    || '#1C5C31';
    const desactiveConnectorColor = this.getAttribute('desactiveconnectorcolor') || '#D6CDA4';

    this.style.display = this.style.display || 'flex';
    this.style.alignItems = 'center';
    this.style.gap = '0';
    this.style.overflowX = 'auto';
    // overflow-x:auto faz o navegador setar overflow-y:auto tambem, o que
    // clipa o scale(1.08) do hover no topo da bolinha. Padding vertical
    // garante folga para a animacao crescer sem cortar.
    this.style.paddingTop = this.style.paddingTop || '6px';
    this.style.paddingBottom = this.style.paddingBottom || '6px';
    this.style.fontFamily = "'Poppins','DejaVu Sans',Arial,sans-serif";

    let html = '';
    steps.forEach((st, i) => {
      const filled = !!st.isFilled;
      const clickable = !!st.onClickEvent;
      const current = !!st.isCurrent;
      const radius = this._normShape(st.shapeFormat);

      // Resolucao de iconColor: per-step override > current > active/desactive
      let iconColor;
      if (st.iconColor) iconColor = st.iconColor;
      else if (current) iconColor = currentStepColor;
      else if (clickable) iconColor = activeIconColor;
      else iconColor = desactiveIconColor;

      // Resolucao de textColor: per-step override > current > active/desactive
      // Defaults seguem a logica antiga: igual ao iconColor quando filled,
      // "#8A9E8E" quando vazado.
      let textColor;
      if (st.textColor) {
        textColor = st.textColor;
      } else if (current) {
        textColor = currentStepColor;
      } else if (clickable) {
        textColor = activeTextColor || (filled ? iconColor : '#8A9E8E');
      } else {
        textColor = desactiveTextColor || (filled ? iconColor : '#8A9E8E');
      }

      const bg = filled ? iconColor : 'transparent';
      const innerColor = filled ? '#FFFFFF' : iconColor;
      const cursor = clickable ? 'pointer' : 'default';
      // Step "current" sempre full opacity (e onde o usuario esta agora).
      // Steps nao-clicaveis e nao-current ficam apagados.
      const cellOpacity = (clickable || current) ? '1' : '0.45';

      const titleStr = (st.title != null && st.title !== '') ? this._escape(String(st.title)) : '';
      const subtitleStr = st.subtitle ? this._escape(String(st.subtitle)) : '';
      const fwSubtitle = filled ? '700' : '500';

      const circleStyle = [
        'width:32px',
        'height:32px',
        `border-radius:${radius}`,
        `background:${bg}`,
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'font-size:13px',
        `color:${innerColor}`,
        'font-weight:700',
        `border:2px solid ${iconColor}`,
        `cursor:${cursor}`,
        'box-sizing:border-box',
        'transition:transform .12s ease,box-shadow .12s ease',
        'user-select:none'
      ].join(';');

      const subtitleStyle = [
        'font-size:9px',
        `font-weight:${fwSubtitle}`,
        'letter-spacing:.07em',
        'text-transform:uppercase',
        `color:${textColor}`,
        'white-space:nowrap'
      ].join(';');

      // Wrapper de cada step (cell + conector). align-items:center alinha
      // o conector verticalmente ao centro da bolinha+subtitle. O conector
      // recebe margin-bottom para subir ate a altura da bolinha quando ha
      // subtitle abaixo.
      html += '<div style="display:flex;align-items:center;gap:0;flex-shrink:0">';
      html +=   `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;opacity:${cellOpacity};transition:opacity .15s ease">`;
      html +=     `<div data-stp-circle data-stp-i="${i}" style="${circleStyle}">${titleStr}</div>`;
      if (subtitleStr) {
        html +=   `<div style="${subtitleStyle}">${subtitleStr}</div>`;
      }
      html +=   '</div>';

      if (i < steps.length - 1) {
        const lineColor = filled ? activeConnectorColor : desactiveConnectorColor;
        const lineMb = subtitleStr ? 'margin-bottom:18px;' : '';
        html += `<div style="width:36px;height:2px;background:${lineColor};margin:0 4px;${lineMb}flex-shrink:0"></div>`;
      }
      html += '</div>';
    });

    this.innerHTML = html;
    this._wire(steps);
  }

  _wire(steps) {
    const hostHandler = this.getAttribute('onstepclickevent');

    this.querySelectorAll('[data-stp-circle]').forEach(circle => {
      const idx = parseInt(circle.getAttribute('data-stp-i'), 10);
      const step = steps[idx];
      if (!step) return;
      const clickable = !!step.onClickEvent;

      if (clickable) {
        circle.addEventListener('click', (ev) => {
          ev.stopPropagation();
          try {
            new Function('key', 'step', 'index', step.onClickEvent).call(this, step.key, step, idx);
          } catch (err) {
            console.error('[granado-stepper] onClickEvent error:', err);
          }
          if (hostHandler) {
            try {
              new Function('key', 'step', 'index', hostHandler).call(this, step.key, step, idx);
            } catch (err) {
              console.error('[granado-stepper] onstepclickevent error:', err);
            }
          }
          this.dispatchEvent(new CustomEvent('stepclick', {
            detail: { key: step.key, step, index: idx },
            bubbles: true
          }));
        });

        circle.addEventListener('mouseenter', () => {
          circle.style.transform = 'scale(1.08)';
          circle.style.boxShadow = '0 2px 6px rgba(0,0,0,0.18)';
        });
        circle.addEventListener('mouseleave', () => {
          circle.style.transform = '';
          circle.style.boxShadow = '';
        });
      }
    });
  }

  _escape(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, ch =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }
}

customElements.define('granado-stepper', GranadoStepper);
