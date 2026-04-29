import { useState } from 'react';
import SinoticoPesagem from './SinoticoPesagem.jsx';
import SinoticoFabricacao from './SinoticoFabricacao.jsx';
import SinoticoProducaoMacro from './SinoticoProducaoMacro.jsx';

/**
 * Tela do sinotico expandida (ERU 5.1.55).
 *
 * Granularidade real (Matriz de Qualificacao - INVENT. DE EQUIP):
 *   - Producao   = areas EMBALAGEM + ENVASE  (121 equipamentos)
 *   - Pesagem    = 5 boxes x 3 balancas  (independente da Matriz)
 *   - Fabricacao = areas FABRICACAO + DEPOSITO + APARAS + PNEUMATICO  (219 equipamentos)
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

      {aba === 'prod' && <SinoticoProducaoMacro />}
      {aba === 'pes' && <SinoticoPesagem />}
      {aba === 'fab' && <SinoticoFabricacao />}
    </div>
  );
}
