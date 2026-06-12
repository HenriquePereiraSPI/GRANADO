import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * Contexto de Ordem de Fabricação — espelha o padrao da Producao / Pesagem.
 *
 * Apos iniciar a ordem (popup "Iniciar Ordem — Verificacoes" em fab-ordens),
 * o sistema navega para o Cockpit (fab-inbatch) com `?op=<OP>`. Estando nesse
 * contexto (com ?op), esta wrapper exibe uma sub-navbar no topo com:
 *   - botao "voltar" para a Selecao de Ordens
 *   - chip da OP ativa
 *   - abas para alternar entre as sub-telas da ordem, preservando o ?op:
 *       Cockpit (Fases InBatch) · MP's (Check-in de MPs) ·
 *       Tanque (Selecao de Tanque) · Qualidade (Controle de Amostras) ·
 *       Checkout (Fechamento da Ordem)
 *
 * Sem `?op` (acesso direto), renderiza a tela normalmente, sem a sub-navbar.
 */

const SUB_TABS = [
  { id: 'fab-inbatch',  label: 'Cockpit',   icon: '🎯' },
  { id: 'fab-checkin',  label: "MP's",      icon: '📦' },
  { id: 'fab-tanque',   label: 'Tanque',    icon: '🛢️' },
  { id: 'fab-amostras', label: 'Qualidade', icon: '🔬' },
  { id: 'fab-fechar',   label: 'Checkout',  icon: '✓' },
];

export default function FabOrdemContexto({ id, children }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const op = searchParams.get('op');

  // Sem OP no contexto (acesso direto pela sidebar) — tela normal.
  if (!op) return children;

  return (
    <>
      <SubNavbar op={op} idAtual={id} navigate={navigate} />
      {children}
    </>
  );
}

function SubNavbar({ op, idAtual, navigate }) {
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
        onClick={() => navigate('/fab-ordens')}
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
        title="Voltar para a Seleção de Ordens de Fabricação"
      >
        ← Seleção de Ordens
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
          OP Ativa
        </span>
        <span className="mono" style={{ fontWeight: 800, color: 'var(--verde)' }}>{op}</span>
      </div>

      <div style={{ display: 'flex', gap: 4, marginLeft: 'auto', flexWrap: 'wrap' }}>
        {SUB_TABS.map((t) => {
          const ativa = t.id === idAtual;
          return (
            <button
              key={t.id}
              onClick={() => navigate(`/${t.id}?op=${encodeURIComponent(op)}`)}
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
