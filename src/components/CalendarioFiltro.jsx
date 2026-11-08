import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useFecharComEsc } from './CadastroComum.jsx';

/**
 * Filtro de tipo de calendario (Tradicional / Operacional) compartilhado pelas
 * telas de Pesagem (OEE da Pesagem e Performance (MP)): um botao que mostra o
 * calendario selecionado e abre um popup com o toggle e o "i" explicativo.
 */

export const VALOR_TOOLTIP = { fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--text)' };

// Valores iguais ao FilterType das APIs GRD_API_OEE_GetResourceAvailability e GRD_API_OEE_GetOrderWeightItemPerformance.
export const TIPOS_CALENDARIO = [
  { valor: 'TraditionalCalendar', rotulo: 'Calendário Tradicional' },
  { valor: 'OperationalCalendar', rotulo: 'Calendário Operacional' },
];

const TITULO_CAL = { fontWeight: 700, fontSize: 12, color: 'var(--verde)', marginBottom: 2 };
const SUBTITULO_CAL = { fontWeight: 700, color: 'var(--text)', marginTop: 6 };
const LISTA_CAL = { margin: '2px 0 0', paddingLeft: 16 };

const ExplicacaoCalendario = () => (
  <div style={{ color: 'var(--text2)', lineHeight: 1.45 }}>
    <div style={TITULO_CAL}>1. Calendário Tradicional</div>
    <div>É baseado em um intervalo de data e hora selecionado pelo usuário, independentemente dos turnos cadastrados na fábrica.</div>
    <div style={SUBTITULO_CAL}>Exemplo:</div>
    <ul style={LISTA_CAL}>
      <li>Data inicial: <span style={VALOR_TOOLTIP}>08/11/2026 16:00</span></li>
      <li>Data final: <span style={VALOR_TOOLTIP}>08/11/2026 17:30</span></li>
    </ul>
    <div>O sistema considera todos os registros que ocorreram dentro desse intervalo.</div>
    <div style={SUBTITULO_CAL}>Características:</div>
    <ul style={LISTA_CAL}>
      <li>Não depende da configuração dos turnos.</li>
      <li>Permite selecionar qualquer intervalo de tempo.</li>
      <li>Considera os eventos de produção, paradas e apontamentos dentro do período.</li>
      <li>Ideal para análises pontuais, detalhadas e investigações.</li>
    </ul>

    <div style={{ height: 1, background: 'var(--border)', margin: '10px 0' }} />

    <div style={TITULO_CAL}>2. Calendário Operacional (Turnos)</div>
    <div>É baseado na configuração dos turnos da fábrica.</div>
    <div style={SUBTITULO_CAL}>Exemplo:</div>
    <ul style={LISTA_CAL}>
      <li>Data inicial: <span style={VALOR_TOOLTIP}>08/11/2026</span></li>
      <li>Data final: <span style={VALOR_TOOLTIP}>08/11/2026</span></li>
    </ul>
    <div style={{ marginTop: 4 }}>
      Retorna os dados do turno que vai das <span style={VALOR_TOOLTIP}>06:00</span> às <span style={VALOR_TOOLTIP}>17:59</span> do dia 08
      e do turno que vai das <span style={VALOR_TOOLTIP}>18:00</span> às <span style={VALOR_TOOLTIP}>05:59</span> do dia 09.
    </div>
    <div style={{ marginTop: 4 }}>
      Ou seja, mesmo o turno da noite ultrapassando a meia-noite, ele ainda é considerado como um turno operacional do dia 08.
    </div>
    <div style={SUBTITULO_CAL}>Características:</div>
    <ul style={LISTA_CAL}>
      <li>Respeita os horários de início e término dos turnos.</li>
      <li>Considera turnos que atravessam a meia-noite.</li>
      <li>Permite analisar a eficiência por turno.</li>
      <li>Permite consolidar indicadores por turno.</li>
    </ul>
  </div>
);

// Toggle com o "i" como ultima parte, dentro da mesma borda.
function CalendarioToggle({ valor, onChange }) {
  return (
    <div
      role="group"
      aria-label="Tipo de calendário"
      style={{ display: 'inline-flex', alignItems: 'stretch', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden', background: 'var(--surface)' }}
    >
      {TIPOS_CALENDARIO.map((t, i) => {
        const ativo = t.valor === valor;
        return (
          <button
            key={t.valor}
            type="button"
            aria-pressed={ativo}
            onClick={() => onChange(t.valor)}
            style={{
              padding: '6px 10px',
              border: 'none',
              borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
              background: ativo ? 'var(--verde)' : 'transparent',
              color: ativo ? '#FDFAF1' : 'var(--text2)',
              fontFamily: 'var(--font-b)',
              fontSize: 12,
              fontWeight: ativo ? 700 : 500,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'background .15s, color .15s',
            }}
          >
            {t.rotulo}
          </button>
        );
      })}
      <Tooltip conteudo={<ExplicacaoCalendario />} largura={380}>
        {(props) => (
          <span
            {...props}
            role="img"
            aria-label="Diferença entre os tipos de calendário"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0 8px',
              borderLeft: '1px solid var(--border)',
              cursor: 'help',
              userSelect: 'none',
              outlineOffset: -2,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 16,
                height: 16,
                borderRadius: '50%',
                border: '1.5px solid var(--text3)',
                color: 'var(--text2)',
                fontFamily: 'Georgia, serif',
                fontSize: 10,
                fontWeight: 700,
                fontStyle: 'italic',
                lineHeight: 1,
              }}
            >
              i
            </span>
          </span>
        )}
      </Tooltip>
    </div>
  );
}

// Popup para trocar o tipo de calendario. A escolha so vale ao clicar em Aplicar;
// fechar pelo X, Esc ou clicando fora descarta. Vai para o body porque o
// transform do .screen.active prenderia o position:fixed do overlay.
function CalendarioPopup({ valor, onAplicar, onCancel }) {
  const [escolha, setEscolha] = useState(valor);
  useFecharComEsc(onCancel);

  return createPortal(
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Tipo de calendário" style={{ minWidth: 0, maxWidth: 460 }}>
        <button type="button" className="modal-close" onClick={onCancel} aria-label="Fechar">✕</button>
        <div className="modal-title">Tipo de calendário</div>
        <div className="modal-sub">Define como o período entre as datas é considerado.</div>
        <CalendarioToggle valor={escolha} onChange={setEscolha} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
          <button type="button" className="btn btn-md btn-v" onClick={() => onAplicar(escolha)}>Aplicar</button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

// Tooltip em cartao, reutilizado pelos badges de paradas e pelo "i" do tipo de
// calendario. Abre ao passar o mouse, ao tocar (celular) ou ao focar pelo
// teclado. Vai para o body porque .screen.active tem transform, que deslocaria
// o position:fixed. `children` recebe as props para espalhar no gatilho.
export function Tooltip({ conteudo, cor = 'var(--verde)', largura = 240, children }) {
  const [aberto, setAberto] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, setaX: 0, acima: true });
  const gatilhoRef = useRef(null);
  const tooltipRef = useRef(null);
  const ponteiroRef = useRef('mouse');
  const id = useId();

  useLayoutEffect(() => {
    if (!aberto) return;
    const MARGEM = 8;
    const DISTANCIA = 8;
    const alvo = gatilhoRef.current.getBoundingClientRect();
    const { offsetWidth: w, offsetHeight: altura } = tooltipRef.current;
    const centro = alvo.left + alvo.width / 2;
    const left = Math.max(MARGEM, Math.min(centro - w / 2, window.innerWidth - w - MARGEM));
    // Acima se couber; se nao couber nem acima nem abaixo, fica do lado com mais espaco.
    const cabeAcima = alvo.top - altura - DISTANCIA >= MARGEM;
    const cabeAbaixo = alvo.bottom + DISTANCIA + altura <= window.innerHeight - MARGEM;
    const acima = cabeAcima || (!cabeAbaixo && alvo.top > window.innerHeight - alvo.bottom);
    const top = acima
      ? Math.max(MARGEM, alvo.top - altura - DISTANCIA)
      : Math.min(alvo.bottom + DISTANCIA, Math.max(MARGEM, window.innerHeight - altura - MARGEM));
    setPos({ top, left, setaX: centro - left, acima });
  }, [aberto]);

  useEffect(() => {
    if (!aberto) return undefined;
    const fechar = () => setAberto(false);
    const onKey = (e) => { if (e.key === 'Escape') fechar(); };
    const onFora = (e) => { if (!gatilhoRef.current.contains(e.target)) fechar(); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onFora);
    window.addEventListener('scroll', fechar, true);
    window.addEventListener('resize', fechar);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onFora);
      window.removeEventListener('scroll', fechar, true);
      window.removeEventListener('resize', fechar);
    };
  }, [aberto]);

  const propsGatilho = {
    ref: gatilhoRef,
    tabIndex: 0,
    'aria-describedby': aberto ? id : undefined,
    onPointerEnter: (e) => { if (e.pointerType === 'mouse') setAberto(true); },
    onPointerLeave: (e) => { if (e.pointerType === 'mouse') setAberto(false); },
    onPointerDown: (e) => { ponteiroRef.current = e.pointerType; },
    onClick: () => { if (ponteiroRef.current !== 'mouse') setAberto((a) => !a); },
    onFocus: (e) => { if (e.target.matches(':focus-visible')) setAberto(true); },
    onBlur: () => setAberto(false),
  };

  return (
    <>
      {children(propsGatilho)}
      {aberto && createPortal(
        <div
          ref={tooltipRef}
          id={id}
          role="tooltip"
          style={{
            position: 'fixed',
            top: pos.top,
            left: pos.left,
            zIndex: 100000, // acima do painel de filtros (99999)
            width: largura,
            maxWidth: 'calc(100vw - 16px)',
            boxSizing: 'border-box',
            padding: '10px 12px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderTop: `3px solid ${cor}`,
            borderRadius: 8,
            boxShadow: '0 8px 24px rgba(26, 46, 30, .18)',
            fontFamily: 'var(--font-b)',
            fontSize: 11,
            textAlign: 'left',
            pointerEvents: 'none',
            animation: 'fadeUp .12s ease',
          }}
        >
          {conteudo}
          <span
            style={{
              position: 'absolute',
              left: pos.setaX - 5,
              width: 10,
              height: 10,
              background: 'var(--surface)',
              transform: 'rotate(45deg)',
              ...(pos.acima
                ? { bottom: -6, borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }
                : { top: -7, background: cor }),
            }}
          />
        </div>,
        document.body,
      )}
    </>
  );
}

export const rotuloCalendario = (valor) => TIPOS_CALENDARIO.find((t) => t.valor === valor).rotulo;

// Turnos do calendario operacional. Valores iguais ao WorkPeriod da
// GRD_API_OEE_GetResourceAvailability ("-1" = todos).
export const TURNOS = [
  { valor: '-1', rotulo: 'Todos os turnos' },
  { valor: 'MANHA', rotulo: 'Manhã' },
  { valor: 'NOITE', rotulo: 'Noite' },
];

export const ehOperacional = (valor) => valor === 'OperationalCalendar';

// Botao com o calendario selecionado; ao clicar abre o CalendarioPopup.
export function BotaoCalendario({ id, valor, onChange, style }) {
  const [aberto, setAberto] = useState(false);
  return (
    <>
      <button
        type="button"
        className="inp"
        id={id}
        title="Trocar o tipo de calendário"
        aria-haspopup="dialog"
        aria-expanded={aberto}
        onClick={() => setAberto(true)}
        style={{ width: 'auto', fontSize: 12, padding: '6px 10px', display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', background: 'var(--surface)', whiteSpace: 'nowrap', ...style }}
      >
        <span>📅 {rotuloCalendario(valor)}</span>
        <span style={{ color: 'var(--text3)', fontSize: 9 }}>▼</span>
      </button>
      {aberto && (
        <CalendarioPopup
          valor={valor}
          onCancel={() => setAberto(false)}
          onAplicar={(v) => {
            onChange(v);
            setAberto(false);
          }}
        />
      )}
    </>
  );
}
