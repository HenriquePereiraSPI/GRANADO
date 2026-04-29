import { useState, useEffect } from 'react';
import LegacyScreen from './LegacyScreen.jsx';
import SinoticoPesagem from './SinoticoPesagem.jsx';
import SinoticoFabricacao from './SinoticoFabricacao.jsx';
import SinoticoProducaoMacro from './SinoticoProducaoMacro.jsx';

/**
 * Tela do sinotico expandida (ERU 5.1.55) — agora cobre todas as areas:
 *   - Producao (mantido como legacy — sinotico original com seletor MF1-MF5)
 *   - Pesagem (5 pontos x 3 balancas)
 *   - Fabricacao (MF1-MF4 com salas conforme ERU)
 */

const ABAS = [
  { id: 'prod', label: '🏭 Produção' },
  { id: 'pes',  label: '⚖️ Pesagem' },
  { id: 'fab',  label: '🧪 Fabricação' },
];

export default function SinoticoScreen() {
  const [aba, setAba] = useState('prod');

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* Cabecalho com abas */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">ERU 5.1.55 — Sinótico de Todas as Áreas</div>
          <div className="ph-title">Sinótico da Fábrica</div>
        </div>
        <div className="ph-actions">
          <div style={{ display: 'flex', gap: 6 }}>
            {ABAS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setAba(a.id)}
                className={aba === a.id ? 'btn btn-sm btn-v' : 'btn btn-sm btn-ghost'}
                style={{ fontWeight: 700, minWidth: 130 }}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conteudo da aba ativa */}
      {aba === 'prod' && <SinoticoProducao />}
      {aba === 'pes' && <SinoticoPesagem />}
      {aba === 'fab' && <SinoticoFabricacao />}
    </div>
  );
}

/**
 * Producao tem 2 estados:
 *   - macro (padrao): mostra os 5 cards de MFs (MF1..MF5).
 *   - selecionada: mostra o sinotico legacy daquela MF + botao voltar.
 *
 * Quando uma MF e selecionada, montamos o LegacyScreen "sinotico" e logo apos o
 * mount disparamos `window.sinCarregarMF(mfId)` (definida no JS legado) pra
 * popular dados/HTML daquela MF especifica.
 */
function SinoticoProducao() {
  const [mfSelected, setMfSelected] = useState(null);

  useEffect(() => {
    if (!mfSelected) return;
    // espera o LegacyScreen montar (1 frame) antes de chamar a fn legacy
    const t = setTimeout(() => {
      if (typeof window.sinCarregarMF === 'function') {
        try {
          window.sinCarregarMF(mfSelected);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.warn('[SinoticoProducao] sinCarregarMF falhou', err);
        }
      }
    }, 50);
    return () => clearTimeout(t);
  }, [mfSelected]);

  if (!mfSelected) {
    return <SinoticoProducaoMacro onSelectMF={setMfSelected} />;
  }

  return (
    <div className="sin-producao-wrapper">
      <style>{`
        .sin-producao-wrapper > .screen > .page-header { display: none; }
        .sin-producao-wrapper > .screen { padding: 0 !important; }
      `}</style>

      <button
        type="button"
        className="btn btn-sm btn-ghost"
        onClick={() => setMfSelected(null)}
        style={{ marginBottom: 10 }}
      >
        ← Voltar à visão geral das MFs
      </button>

      <LegacyScreen id="sinotico" />
    </div>
  );
}
