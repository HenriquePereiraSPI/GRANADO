import { useNavigate, useSearchParams } from 'react-router-dom';
import LegacyScreen from './LegacyScreen.jsx';

/**
 * Wrapper para as 7 sub-telas operacionais da Pesagem que SO existem
 * dentro do contexto de uma OP selecionada em /pes-ordens:
 *   pes-cockpit, pes-mps, pes-pendencias, pes-checklist,
 *   pes-gaiola, pes-devol-mp, pes-checkout.
 *
 * - Le `?op=OP-XXXX` da URL.
 * - Sem `?op=`: bloqueia e mostra empty-state com botao "Ir para Selecao".
 * - Com `?op=`: renderiza sub-navbar com chip da OP + atalhos pras
 *   demais sub-telas (preservando o ?op=) + a tela legada propriamente.
 */

const SUBSCREEN_TABS = [
  { id: 'pes-cockpit',   label: 'Cockpit',    icon: '🎯' },
  { id: 'pes-mps',       label: 'MPs',        icon: '⚖️' },
  { id: 'pes-checklist', label: 'Checklist',  icon: '📋' },
  { id: 'pes-gaiola',    label: 'Gaiola',     icon: '📦' },
  { id: 'pes-paradas',   label: 'Paradas',    icon: '⏸️' },
  { id: 'pes-devol-mp',  label: 'Devolução',  icon: '↩' },
  { id: 'pes-checkout',  label: 'Checkout',   icon: '✓' },
];

export default function PesOrdemSubScreen({ id }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const op = searchParams.get('op');
  const tabAtual = SUBSCREEN_TABS.find((t) => t.id === id);

  // Sem OP selecionada — empty-state com call-to-action.
  if (!op) {
    return (
      <div className="screen active" style={{ display: 'block' }}>
        <div className="page-header">
          <div>
            <div className="ph-eyebrow">Pesagem · {tabAtual?.label || id}</div>
            <div className="ph-title">Nenhuma Ordem Selecionada</div>
          </div>
        </div>

        <div
          className="card"
          style={{
            padding: 36,
            textAlign: 'center',
            border: '1px dashed var(--alr-b)',
            background: 'var(--alr-p)',
          }}
        >
          <div style={{ fontSize: 56, marginBottom: 8 }}>⚠</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--alr)', marginBottom: 8 }}>
            Selecione uma ordem antes de continuar
          </div>
          <div style={{ fontSize: 12, color: 'var(--text2)', maxWidth: 480, margin: '0 auto 20px', lineHeight: 1.6 }}>
            A tela <strong>{tabAtual?.label || id}</strong> só pode ser acessada dentro do
            contexto de uma OP em pesagem. Volte para a <strong>Seleção de Ordem</strong> e
            escolha uma ordem da fila.
          </div>
          <button
            className="btn btn-md btn-v"
            onClick={() => navigate('/pes-ordens')}
            style={{ minWidth: 240 }}
          >
            ← Ir para Seleção de Ordem
          </button>
        </div>
      </div>
    );
  }

  // Com OP — renderiza sub-navbar + tela legada
  return (
    <>
      <SubNavbar op={op} idAtual={id} navigate={navigate} />
      <LegacyScreen id={id} />
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
        onClick={() => navigate('/pes-ordens')}
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
        title="Voltar para a fila de OPs"
      >
        ← Seleção de Ordem
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

      <div
        style={{
          display: 'flex',
          gap: 4,
          marginLeft: 'auto',
          flexWrap: 'wrap',
        }}
      >
        {SUBSCREEN_TABS.map((t) => {
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
