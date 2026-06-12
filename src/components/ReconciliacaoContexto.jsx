import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * Contexto de Reconciliacao — espelha o padrao da Pesagem (PesOrdemSubScreen).
 *
 * Quando o usuario clica em "Entrar" numa linha da Fila de Reconciliacoes,
 * ele navega para uma das telas abaixo com `?lote=<lotePA>`. Estando nesse
 * contexto (com ?lote), esta wrapper exibe uma sub-navbar no topo com:
 *   - botao "voltar" para a Fila
 *   - chip do Lote ativo
 *   - abas para alternar entre as telas do contexto, preservando o ?lote:
 *       Visao Geral        -> Reconciliacao Tecnica & Liberacao (/qual-reconciliacao)
 *       Amostras de Retencao -> /qual-amostras
 *       Genealogia de Lote -> /dash-genealogia
 *
 * Sem `?lote` (acesso direto pela sidebar), renderiza a tela normalmente,
 * sem a sub-navbar.
 */

const SUB_TABS = [
  { id: 'qual-reconciliacao', label: 'Visão Geral',          icon: '✓'  },
  { id: 'qual-amostras',      label: 'Amostras de Retenção', icon: '📦' },
  { id: 'dash-genealogia',    label: 'Genealogia de Lote',   icon: '🧬' },
];

export default function ReconciliacaoContexto({ id, children }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lote = searchParams.get('lote');

  // Sem lote selecionado (acesso direto pela sidebar) — tela normal.
  if (!lote) return children;

  return (
    <>
      <SubNavbar lote={lote} idAtual={id} navigate={navigate} />
      {children}
    </>
  );
}

function SubNavbar({ lote, idAtual, navigate }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap',
        padding: '8px 14px',
        margin: '0 0 10px',
        background: 'var(--ouro-dim)',
        border: '1px solid var(--ouro-claro)',
        borderRadius: 7,
        boxShadow: 'var(--sh)',
      }}
    >
      <button
        onClick={() => navigate('/qual-fila')}
        style={{
          background: 'var(--surface)',
          border: '1.5px solid var(--ouro)',
          color: 'var(--ouro)',
          padding: '6px 12px',
          borderRadius: 6,
          fontSize: 11,
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
        }}
        title="Voltar para a Fila de Reconciliações"
      >
        ← Fila de Reconciliações
      </button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '4px 12px',
          background: 'var(--verde-dim)',
          border: '1px solid var(--ok-b)',
          borderRadius: 6,
          fontSize: 11,
        }}
      >
        <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)' }}>
          Lote Ativo
        </span>
        <span className="mono" style={{ fontWeight: 800, color: 'var(--verde)' }}>{lote}</span>
      </div>

      <div style={{ display: 'flex', gap: 4, marginLeft: 'auto', flexWrap: 'wrap' }}>
        {SUB_TABS.map((t) => {
          const ativa = t.id === idAtual;
          return (
            <button
              key={t.id}
              onClick={() => navigate(`/${t.id}?lote=${encodeURIComponent(lote)}`)}
              style={{
                background: ativa ? 'var(--verde)' : 'var(--surface)',
                color: ativa ? '#FDFAF1' : 'var(--text2)',
                border: ativa ? '1.5px solid var(--verde)' : '1.5px solid var(--border)',
                padding: '5px 10px',
                borderRadius: 5,
                fontSize: 10,
                fontWeight: ativa ? 800 : 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '.03em',
                whiteSpace: 'nowrap',
              }}
              title={t.label}
            >
              <span style={{ marginRight: 4 }}>{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
