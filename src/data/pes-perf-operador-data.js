/**
 * Dataset da Performance Pessoal do Operador (Pesagem).
 *
 * Esta tela tem foco DIFERENTE do /pes-oee:
 *   - /pes-oee: visao agregada por sala/granel (Lider/CQ)
 *   - /pes-perf-operador: "como EU estou pesando?" (operador)
 *
 * Em producao:
 *   - operadorLogadoId vira do contexto de auth (matricula JDE).
 *   - stats sao calculados em tempo real do MES a partir da tabela
 *     de pesagens (mesma fonte de /pes-mps).
 *   - meta vem do parametro do modulo MF5.
 */

export const OPERADOR_LOGADO_ID = 'js155';
export const META_ADERENCIA = 95;

/**
 * Operadores ativos na pesagem hoje (turno A).
 * stats.{periodo} é pre-agregado: aderencia (% Σpadrao/Σreal), tempoMedio
 * (min por MP), mpsHora (throughput), mpsTotal (qtd. de MPs pesadas) e
 * variancesCriticas (qtd. de pesagens fora do limite).
 */
export const OPERADORES = [
  {
    id: 'js155',
    nome: 'J. Santos',
    matricula: '155',
    avatar: '👷',
    stats: {
      hoje:   { aderencia: 92.3, tempoMedio: 4.2, padraoMedio: 3.8, mpsHora: 11.2, mpsTotal: 47,   variancesCriticas: 1  },
      semana: { aderencia: 91.5, tempoMedio: 4.3, padraoMedio: 3.8, mpsHora: 11.0, mpsTotal: 312,  variancesCriticas: 4  },
      mes:    { aderencia: 89.8, tempoMedio: 4.4, padraoMedio: 3.8, mpsHora: 10.8, mpsTotal: 1287, variancesCriticas: 18 },
    },
  },
  {
    id: 'fc212',
    nome: 'F. Costa',
    matricula: '212',
    avatar: '🧑‍🔧',
    stats: {
      hoje:   { aderencia: 96.1, tempoMedio: 3.9, padraoMedio: 3.8, mpsHora: 12.8, mpsTotal: 52,   variancesCriticas: 0  },
      semana: { aderencia: 95.8, tempoMedio: 3.9, padraoMedio: 3.8, mpsHora: 12.6, mpsTotal: 348,  variancesCriticas: 1  },
      mes:    { aderencia: 95.0, tempoMedio: 4.0, padraoMedio: 3.8, mpsHora: 12.4, mpsTotal: 1402, variancesCriticas: 7  },
    },
  },
  {
    id: 'mo108',
    nome: 'M. Oliveira',
    matricula: '108',
    avatar: '👷‍♀️',
    stats: {
      hoje:   { aderencia: 88.7, tempoMedio: 4.4, padraoMedio: 3.8, mpsHora: 10.4, mpsTotal: 41,   variancesCriticas: 2  },
      semana: { aderencia: 88.0, tempoMedio: 4.5, padraoMedio: 3.8, mpsHora: 10.3, mpsTotal: 287,  variancesCriticas: 6  },
      mes:    { aderencia: 87.2, tempoMedio: 4.5, padraoMedio: 3.8, mpsHora: 10.2, mpsTotal: 1198, variancesCriticas: 22 },
    },
  },
  {
    id: 'ap310',
    nome: 'A. Pereira',
    matricula: '310',
    avatar: '🧑',
    stats: {
      hoje:   { aderencia: 76.2, tempoMedio: 5.4, padraoMedio: 3.8, mpsHora: 8.1, mpsTotal: 28,   variancesCriticas: 3  },
      semana: { aderencia: 78.5, tempoMedio: 5.2, padraoMedio: 3.8, mpsHora: 8.4, mpsTotal: 198,  variancesCriticas: 9  },
      mes:    { aderencia: 81.0, tempoMedio: 5.0, padraoMedio: 3.8, mpsHora: 8.7, mpsTotal: 854,  variancesCriticas: 28 },
    },
  },
];

/**
 * Pesagens detalhadas — Turno A de hoje (todos os operadores).
 * Em producao: SELECT * FROM pesagens WHERE data = TODAY ORDER BY hora.
 * As 5 primeiras de J. Santos refletem 1:1 a tabela de /pes-mps
 * (mesma OP-2026-0416), garantindo consistencia visual entre as telas.
 *
 * Cada pesagem tem `operadorId` para suportar a filtragem na tela.
 */
export const PESAGENS_HOJE = [
  // ── J. Santos (js155) — 8 pesagens (5 sincronizadas com /pes-mps) ─────
  { operadorId: 'js155', hora: '06:12', op: 'OP-2026-0416', mp: 'MP-4821',  material: 'Glicerina USP',          lote: 'GLI-2026-08', alvo: '45,000', pesado: '44,983', variancia: '–0,017', tempoReal: 5.8, tempoPadrao: 4.2, tempoMin: 2.7, tempoMax: 6.1, status: 'ok',   sala: 'Sala A · Box 3', balanca: 'BAL-03' },
  { operadorId: 'js155', hora: '06:24', op: 'OP-2026-0416', mp: 'MP-3307',  material: 'Propilenoglicol',        lote: 'PPG-2026-12', alvo: '18,000', pesado: '18,005', variancia: '+0,005', tempoReal: 3.6, tempoPadrao: 3.8, tempoMin: 2.5, tempoMax: 5.5, status: 'ok',   sala: 'Sala A · Box 3', balanca: 'BAL-03' },
  { operadorId: 'js155', hora: '06:38', op: 'OP-2026-0416', mp: 'MP-0914',  material: 'Carbopol 940',           lote: 'CAR-2026-05', alvo: '2,500',  pesado: '2,498',  variancia: '–0,002', tempoReal: 7.1, tempoPadrao: 5.5, tempoMin: 3.6, tempoMax: 8.0, status: 'ok',   sala: 'Sala A · Box 1', balanca: 'BAL-01' },
  { operadorId: 'js155', hora: '06:51', op: 'OP-2026-0416', mp: 'MP-2256',  material: 'Fenoxietanol',           lote: 'FEN-2026-03', alvo: '3,000',  pesado: '3,028',  variancia: '+0,028', tempoReal: 2.9, tempoPadrao: 2.5, tempoMin: 1.6, tempoMax: 3.6, status: 'desv', sala: 'Sala A · Box 1', balanca: 'BAL-01' },
  { operadorId: 'js155', hora: '07:02', op: 'OP-2026-0416', mp: 'MP-5593',  material: 'TEA 99%',                lote: 'TEA-2026-07', alvo: '1,800',  pesado: '1,801',  variancia: '+0,001', tempoReal: 2.0, tempoPadrao: 2.2, tempoMin: 1.4, tempoMax: 3.2, status: 'ok',   sala: 'Sala A · Box 1', balanca: 'BAL-01' },
  { operadorId: 'js155', hora: '07:18', op: 'OP-2026-0417', mp: 'MP-1872',  material: 'Pantenol',               lote: 'PAN-2026-02', alvo: '2,000',  pesado: '1,999',  variancia: '–0,001', tempoReal: 3.4, tempoPadrao: 3.0, tempoMin: 2.0, tempoMax: 4.3, status: 'ok',   sala: 'Sala A · Box 1', balanca: 'BAL-01' },
  { operadorId: 'js155', hora: '07:32', op: 'OP-2026-0417', mp: 'MP-3341',  material: 'Extrato Rosa Mosqueta',  lote: 'EXT-2026-09', alvo: '1,200',  pesado: '1,201',  variancia: '+0,001', tempoReal: 4.0, tempoPadrao: 3.5, tempoMin: 2.3, tempoMax: 5.1, status: 'ok',   sala: 'Sala A · Box 1', balanca: 'BAL-01' },
  { operadorId: 'js155', hora: '07:48', op: 'OP-2026-0417', mp: 'MP-0042',  material: 'Glicerina (Vegetal)',    lote: 'GLI-2026-09', alvo: '8,000',  pesado: '8,002',  variancia: '+0,002', tempoReal: 4.5, tempoPadrao: 4.2, tempoMin: 2.7, tempoMax: 6.1, status: 'ok',   sala: 'Sala A · Box 3', balanca: 'BAL-03' },

  // ── F. Costa (fc212) — top performer, 6 pesagens ─────────────────────
  { operadorId: 'fc212', hora: '06:08', op: 'OP-2026-0418', mp: 'MP-4821',  material: 'Glicerina USP',          lote: 'GLI-2026-08', alvo: '40,000', pesado: '40,001', variancia: '+0,001', tempoReal: 4.0, tempoPadrao: 4.2, tempoMin: 2.7, tempoMax: 6.1, status: 'ok',   sala: 'Sala C · Box 1', balanca: 'BAL-04' },
  { operadorId: 'fc212', hora: '06:18', op: 'OP-2026-0418', mp: 'MP-8020',  material: 'Açúcar Cristal Superior', lote: 'ACU-2026-04', alvo: '12,000', pesado: '12,003', variancia: '+0,003', tempoReal: 6.2, tempoPadrao: 6.5, tempoMin: 4.2, tempoMax: 9.4, status: 'ok',   sala: 'Sala C · Box 1', balanca: 'BAL-04' },
  { operadorId: 'fc212', hora: '06:33', op: 'OP-2026-0418', mp: 'MP-3302B', material: 'Essência Glicerina',     lote: 'BQ34957',     alvo: '0,800',  pesado: '0,801',  variancia: '+0,001', tempoReal: 3.4, tempoPadrao: 3.5, tempoMin: 2.3, tempoMax: 5.1, status: 'ok',   sala: 'Sala C · Box 1', balanca: 'BAL-04' },
  { operadorId: 'fc212', hora: '06:48', op: 'OP-2026-0418', mp: 'MP-2089',  material: 'Fragância Rosa',         lote: 'FRG-2026-11', alvo: '0,500',  pesado: '0,500',  variancia: '0,000',  tempoReal: 2.7, tempoPadrao: 2.7, tempoMin: 1.8, tempoMax: 3.9, status: 'ok',   sala: 'Sala C · Box 1', balanca: 'BAL-04' },
  { operadorId: 'fc212', hora: '07:05', op: 'OP-2026-0419', mp: 'S0800B',   material: 'Massa Base Sabonete',    lote: 'MAS-2026-03', alvo: '50,000', pesado: '50,012', variancia: '+0,012', tempoReal: 11.8, tempoPadrao: 12.0, tempoMin: 7.8, tempoMax: 17.4, status: 'ok',  sala: 'Sala C · Box 1', balanca: 'BAL-04' },
  { operadorId: 'fc212', hora: '07:25', op: 'OP-2026-0419', mp: 'M0001',    material: 'Água Purificada',        lote: 'AGU-2026-19', alvo: '30,000', pesado: '30,000', variancia: '0,000',  tempoReal: 2.9, tempoPadrao: 3.0, tempoMin: 2.0, tempoMax: 4.3, status: 'ok',   sala: 'Sala C · Box 1', balanca: 'BAL-04' },

  // ── M. Oliveira (mo108) — 5 pesagens, 1 com variancia ────────────────
  { operadorId: 'mo108', hora: '08:35', op: 'OP-2026-0416', mp: 'MP-4821',  material: 'Glicerina USP',          lote: 'GLI-2026-08', alvo: '40,000', pesado: '40,032', variancia: '+0,032', tempoReal: 5.1, tempoPadrao: 4.2, tempoMin: 2.7, tempoMax: 6.1, status: 'desv', sala: 'Sala A · Box 2', balanca: 'BAL-02' },
  { operadorId: 'mo108', hora: '08:50', op: 'OP-2026-0416', mp: 'MP-3307',  material: 'Propilenoglicol',        lote: 'PPG-2026-12', alvo: '15,000', pesado: '14,997', variancia: '–0,003', tempoReal: 4.0, tempoPadrao: 3.8, tempoMin: 2.5, tempoMax: 5.5, status: 'ok',   sala: 'Sala A · Box 2', balanca: 'BAL-02' },
  { operadorId: 'mo108', hora: '09:08', op: 'OP-2026-0419', mp: 'MAP0815B', material: 'Apara Transp Glicerina', lote: 'APA-2026-08', alvo: '6,000',  pesado: '6,015',  variancia: '+0,015', tempoReal: 8.4, tempoPadrao: 8.0, tempoMin: 5.2, tempoMax: 11.6, status: 'ok',   sala: 'Sala B · Box 1', balanca: 'BAL-05' },
  { operadorId: 'mo108', hora: '09:22', op: 'OP-2026-0419', mp: 'MP-2256',  material: 'Fenoxietanol',           lote: 'FEN-2026-03', alvo: '2,500',  pesado: '2,505',  variancia: '+0,005', tempoReal: 2.6, tempoPadrao: 2.5, tempoMin: 1.6, tempoMax: 3.6, status: 'ok',   sala: 'Sala B · Box 1', balanca: 'BAL-05' },
  { operadorId: 'mo108', hora: '09:45', op: 'OP-2026-0419', mp: 'M0042',    material: 'Glicerina (Vegetal)',    lote: 'GLI-2026-09', alvo: '6,000',  pesado: '6,001',  variancia: '+0,001', tempoReal: 4.6, tempoPadrao: 4.2, tempoMin: 2.7, tempoMax: 6.1, status: 'ok',   sala: 'Sala B · Box 1', balanca: 'BAL-05' },

  // ── A. Pereira (ap310) — junior, 3 pesagens, mais lento ──────────────
  { operadorId: 'ap310', hora: '06:30', op: 'OP-2026-0420', mp: 'MP-4821',  material: 'Glicerina USP',          lote: 'GLI-2026-08', alvo: '20,000', pesado: '19,994', variancia: '–0,006', tempoReal: 7.2, tempoPadrao: 4.2, tempoMin: 2.7, tempoMax: 6.1, status: 'ok',   sala: 'Sala B · Box 2', balanca: 'BAL-06' },
  { operadorId: 'ap310', hora: '06:55', op: 'OP-2026-0420', mp: 'MP-0914',  material: 'Carbopol 940',           lote: 'CAR-2026-05', alvo: '1,500',  pesado: '1,541',  variancia: '+0,041', tempoReal: 9.5, tempoPadrao: 5.5, tempoMin: 3.6, tempoMax: 8.0, status: 'desv', sala: 'Sala B · Box 2', balanca: 'BAL-06' },
  { operadorId: 'ap310', hora: '07:20', op: 'OP-2026-0420', mp: 'MP-2256',  material: 'Fenoxietanol',           lote: 'FEN-2026-03', alvo: '2,000',  pesado: '2,003',  variancia: '+0,003', tempoReal: 4.1, tempoPadrao: 2.5, tempoMin: 1.6, tempoMax: 3.6, status: 'ok',   sala: 'Sala B · Box 2', balanca: 'BAL-06' },
];
