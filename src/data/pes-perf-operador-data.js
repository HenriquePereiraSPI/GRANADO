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
 * Pesagens detalhadas do operador logado (J. Santos).
 * Em producao: SELECT * FROM pesagens WHERE operador_id = ? AND data BETWEEN ?
 * As 5 primeiras refletem 1:1 a tabela de /pes-mps (mesma OP-2026-0416).
 */
export const MINHAS_PESAGENS = {
  hoje: [
    { hora: '06:12', op: 'OP-2026-0416', mp: 'MP-4821',  material: 'Glicerina USP',          lote: 'GLI-2026-08', alvo: '45,000', pesado: '44,983', variancia: '–0,017', tempoReal: 5.8, tempoPadrao: 4.2, status: 'ok',   sala: 'Sala A · Box 3', balanca: 'BAL-03' },
    { hora: '06:24', op: 'OP-2026-0416', mp: 'MP-3307',  material: 'Propilenoglicol',        lote: 'PPG-2026-12', alvo: '18,000', pesado: '18,005', variancia: '+0,005', tempoReal: 3.6, tempoPadrao: 3.8, status: 'ok',   sala: 'Sala A · Box 3', balanca: 'BAL-03' },
    { hora: '06:38', op: 'OP-2026-0416', mp: 'MP-0914',  material: 'Carbopol 940',           lote: 'CAR-2026-05', alvo: '2,500',  pesado: '2,498',  variancia: '–0,002', tempoReal: 7.1, tempoPadrao: 5.5, status: 'ok',   sala: 'Sala A · Box 1', balanca: 'BAL-01' },
    { hora: '06:51', op: 'OP-2026-0416', mp: 'MP-2256',  material: 'Fenoxietanol',           lote: 'FEN-2026-03', alvo: '3,000',  pesado: '3,028',  variancia: '+0,028', tempoReal: 2.9, tempoPadrao: 2.5, status: 'desv', sala: 'Sala A · Box 1', balanca: 'BAL-01' },
    { hora: '07:02', op: 'OP-2026-0416', mp: 'MP-5593',  material: 'TEA 99%',                lote: 'TEA-2026-07', alvo: '1,800',  pesado: '1,801',  variancia: '+0,001', tempoReal: 2.0, tempoPadrao: 2.2, status: 'ok',   sala: 'Sala A · Box 1', balanca: 'BAL-01' },
    { hora: '07:18', op: 'OP-2026-0417', mp: 'MP-1872',  material: 'Pantenol',               lote: 'PAN-2026-02', alvo: '2,000',  pesado: '1,999',  variancia: '–0,001', tempoReal: 3.4, tempoPadrao: 3.0, status: 'ok',   sala: 'Sala A · Box 1', balanca: 'BAL-01' },
    { hora: '07:32', op: 'OP-2026-0417', mp: 'MP-3341',  material: 'Extrato Rosa Mosqueta',  lote: 'EXT-2026-09', alvo: '1,200',  pesado: '1,201',  variancia: '+0,001', tempoReal: 4.0, tempoPadrao: 3.5, status: 'ok',   sala: 'Sala A · Box 1', balanca: 'BAL-01' },
    { hora: '07:48', op: 'OP-2026-0417', mp: 'MP-0042',  material: 'Glicerina (Vegetal)',    lote: 'GLI-2026-09', alvo: '8,000',  pesado: '8,002',  variancia: '+0,002', tempoReal: 4.5, tempoPadrao: 4.2, status: 'ok',   sala: 'Sala A · Box 3', balanca: 'BAL-03' },
  ],
  // Para periodos maiores, mostramos só os ultimos 8 (a tabela manteria scroll
  // e paginacao real em producao — Fase A entrega o feed cronologico do dia).
  semana: [],
  mes: [],
};
