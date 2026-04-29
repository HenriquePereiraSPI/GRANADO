/**
 * Granularidade ERU 5.1.55: Pesagem -> Box de Pesagem.
 * 5 boxes × 3 balancas cada.
 * Status mockado (operando / alerta / parada / aguardando).
 * Capacidade nominal por balanca expressa em kg (tres faixas: 0–6 kg, 0–60 kg, 0–600 kg).
 */

export const BOXES_PESAGEM = [
  {
    id: 'BX1',
    nome: 'Box 1',
    sala: 'Sala A · MF5',
    op: 'OP-2026-0416',
    operador: 'J. Santos',
    balancas: [
      { id: 'B1.1', faixa: '0–6 kg',   status: 'ok',   ultimaPesagem: 'Pigmento · 0,820 kg' },
      { id: 'B1.2', faixa: '0–60 kg',  status: 'ok',   ultimaPesagem: 'Glicerina · 12,400 kg' },
      { id: 'B1.3', faixa: '0–600 kg', status: 'idle', ultimaPesagem: '— sem MP —' },
    ],
  },
  {
    id: 'BX2',
    nome: 'Box 2',
    sala: 'Sala B · MF5',
    op: 'OP-2026-0417',
    operador: 'M. Oliveira',
    balancas: [
      { id: 'B2.1', faixa: '0–6 kg',   status: 'alr',  ultimaPesagem: 'Conservante · 0,210 kg', obs: 'Tara fora do padrao' },
      { id: 'B2.2', faixa: '0–60 kg',  status: 'ok',   ultimaPesagem: 'Base detergente · 35,600 kg' },
      { id: 'B2.3', faixa: '0–600 kg', status: 'ok',   ultimaPesagem: 'Agua deionizada · 240,000 kg' },
    ],
  },
  {
    id: 'BX3',
    nome: 'Box 3',
    sala: 'Sala C · MF5',
    op: '—',
    operador: '—',
    balancas: [
      { id: 'B3.1', faixa: '0–6 kg',   status: 'idle', ultimaPesagem: '— aguardando OP —' },
      { id: 'B3.2', faixa: '0–60 kg',  status: 'idle', ultimaPesagem: '— aguardando OP —' },
      { id: 'B3.3', faixa: '0–600 kg', status: 'idle', ultimaPesagem: '— aguardando OP —' },
    ],
  },
  {
    id: 'BX4',
    nome: 'Box 4',
    sala: 'Sala D · MF4',
    op: 'OP-2026-0420',
    operador: 'C. Pereira',
    balancas: [
      { id: 'B4.1', faixa: '0–6 kg',   status: 'ok',   ultimaPesagem: 'Essencia · 0,450 kg' },
      { id: 'B4.2', faixa: '0–60 kg',  status: 'err',  ultimaPesagem: '—', obs: 'Fora de calibracao — IPEM bloqueado' },
      { id: 'B4.3', faixa: '0–600 kg', status: 'ok',   ultimaPesagem: 'Alcool · 180,000 kg' },
    ],
  },
  {
    id: 'BX5',
    nome: 'Box 5',
    sala: 'Sala E · MF1',
    op: 'OP-2026-0418',
    operador: 'A. Lima',
    balancas: [
      { id: 'B5.1', faixa: '0–6 kg',   status: 'ok',   ultimaPesagem: 'Talco micronizado · 2,500 kg' },
      { id: 'B5.2', faixa: '0–60 kg',  status: 'ok',   ultimaPesagem: 'Amido · 25,000 kg' },
      { id: 'B5.3', faixa: '0–600 kg', status: 'idle', ultimaPesagem: '— sem MP —' },
    ],
  },
];

export const STATUS_LABEL = {
  ok:   '🟢 Operando',
  alr:  '🟡 Alerta',
  err:  '🔴 Parada',
  idle: '⚪ Aguardando',
};
