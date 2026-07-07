/**
 * Dataset do OEE da Pesagem.
 *
 * Baseado na reuniao "MES - Levantamento Funcional - OEE" (30/04/2026):
 *
 *   OEE Pesagem = Disponibilidade x Performance
 *   (sem Qualidade — na pesagem nao ha reprovacao)
 *
 *   PERFORMANCE OFICIAL: medida pelo granel (formula/SKU). Tempo padrao
 *   vem da cronoanalise da Granado (Excel). Inicio = start da ordem
 *   (inclui transferencia e checklist). Fim = fechamento da gaiola.
 *
 *   TEMPO DE CICLO POR MP: nao entra no OEE — eh um acompanhamento
 *   adicional (qual MP demora mais, qual operador eh mais rapido).
 *   Padrao por MP eh construido pelo proprio MES com base no historico
 *   (medias das primeiras semanas de uso).
 *
 *   DISPONIBILIDADE: sala/box. Paradas: refeicao, manutencao da balanca,
 *   sanitizacao, sala desprogramada, reuniao. Refeicao e variavel —
 *   operador aponta manualmente quando inicia.
 */

export const PESAGEM_OEE = {
  periodo: '2026-05-05 (turno A)',
  modulo: 'MF5',

  // ─── Tempo Total do Turno (em minutos) ───────────────────────
  // Usado como base do calculo de Disponibilidade. Turno A = 8h
  // (06:00–14:00 com 1h de refeicao planejada).
  tempoTotalTurnoMin: 480,

  // ─── Qualidade ───────────────────────────────────────────────
  // Fixa em 100% — na pesagem nao ha reprovacao (decidido na
  // reuniao 30/04/2026). Mantida no dataset para que o componente
  // possa multiplica-la na formula sem hardcode.
  qualidade: 100,

  // ─── Meta de OEE ─────────────────────────────────────────────
  meta: 85,

  // NOTA: oeeGlobal, disponibilidade e performance NAO entram mais
  // no dataset — sao calculados em runtime pelo componente
  // (PesagemOeeScreen.jsx, useMemo) a partir de:
  //   Disponibilidade = (tempoTotal - paradasProgramadas - paradasNaoProgramadas)
  //                       / (tempoTotal - paradasProgramadas)
  //   Performance     = Σ tempoPadrao / Σ tempoReal  (granel)
  //   Qualidade       = 100% (fixo)
  //   OEE             = Disp x Perf x Qual

  observacoes: 'Cronoanalise por granel · Tempo de ciclo por MP construido por histórico',

  // ─── KPIs operacionais do dia ────────────────────────────────
  kpisDia: {
    ordensIniciadas: 14,
    ordensFinalizadas: 12,
    salasAtivas: 3,
    operadores: 4,
    mpsPesadas: 138,
    desviosCriticos: 1,
    refeicoesProgramadas: 2,
    paradasNaoProgramadas: 3,
  },

  // ─── PERFORMANCE — visão Granel (oficial OEE) ────────────────
  performanceGranel: [
    {
      granel: 'S0815B',
      produto: 'TRANSP GRANADO GLICERINA',
      ordem: 'OP-2026-0414',
      operador: 'J. Santos',
      sala: 'A',
      tempoPadrao: 95,   // minutos
      tempoReal:  102,
      quantidade: 1200,  // kg
      variancia:   7.4,  // %
      status: 'fora',    // dentro / atencao / fora
      inicio: '06:42',
      fim: '08:24',
      dataPesagem: '05/05/2026 08:24',
    },
    {
      granel: 'S0822B',
      produto: 'TRANSP GRANADO LIMÃO SICILIANO',
      ordem: 'OP-2026-0416',
      operador: 'M. Oliveira',
      sala: 'A',
      tempoPadrao: 88,
      tempoReal:  88,
      quantidade: 950,
      variancia:    0,
      status: 'dentro',
      inicio: '08:35',
      fim: '10:03',
      dataPesagem: '05/05/2026 10:03',
    },
    {
      granel: 'S0830B',
      produto: 'TRANSP GRANADO MEL',
      ordem: 'OP-2026-0417',
      operador: 'J. Santos',
      sala: 'B',
      tempoPadrao: 72,
      tempoReal: 76,
      quantidade: 780,
      variancia:  5.6,
      status: 'atencao',
      inicio: '07:15',
      fim: '08:31',
      dataPesagem: '05/05/2026 08:31',
    },
    {
      granel: 'S0815B',
      produto: 'TRANSP GRANADO GLICERINA',
      ordem: 'OP-2026-0418',
      operador: 'F. Costa',
      sala: 'C',
      tempoPadrao: 95,
      tempoReal:  92,
      quantidade: 1200,
      variancia:  -3.2,
      status: 'dentro',
      inicio: '09:12',
      fim: '10:44',
      dataPesagem: '05/05/2026 10:44',
    },
    {
      granel: 'S0840B',
      produto: 'TRANSP GRANADO ROSA',
      ordem: 'OP-2026-0419',
      operador: 'M. Oliveira',
      sala: 'B',
      tempoPadrao: 110,
      tempoReal:  124,
      quantidade: 1500,
      variancia:  12.7,
      status: 'fora',
      inicio: '10:50',
      fim: '12:54',
      dataPesagem: '05/05/2026 12:54',
    },
  ],

  // ─── TEMPO DE CICLO POR MP (acompanhamento, nao OEE) ─────────
  tempoCicloMP: [
    { cod: 'M0042',   desc: 'GLICERINA (VEGETAL)',          sala: 'Sala A', ordem: 'OP-2026-0414', usuario: 'J. Santos · 00412',   dataPesagem: '05/05/2026 06:48', padrao: 4.2, real: 4.5, min: 3.8, max: 6.2, ocorr: 12, variancia: 7.1 },
    { cod: 'M3302B',  desc: 'ESSÊNCIA GLICERINA REF BQ34957', sala: 'Sala A', ordem: 'OP-2026-0414', usuario: 'J. Santos · 00412',   dataPesagem: '05/05/2026 06:55', padrao: 3.5, real: 3.4, min: 2.9, max: 4.1, ocorr: 8,  variancia: -2.9 },
    { cod: 'M0328',   desc: 'AMARELO QUIMIBLEND TRAD. 128',  sala: 'Sala B', ordem: 'OP-2026-0416', usuario: 'M. Oliveira · 00155', dataPesagem: '05/05/2026 07:02', padrao: 2.8, real: 3.1, min: 2.4, max: 4.5, ocorr: 9,  variancia: 10.7 },
    { cod: 'M8020',   desc: 'AÇÚCAR CRISTAL SUPERIOR',       sala: 'Sala B', ordem: 'OP-2026-0416', usuario: 'M. Oliveira · 00155', dataPesagem: '05/05/2026 07:10', padrao: 6.5, real: 6.2, min: 5.8, max: 7.3, ocorr: 5,  variancia: -4.6 },
    { cod: 'S0800B',  desc: 'MASSA BASE SABONETE VEGETAL',   sala: 'Sala C', ordem: 'OP-2026-0417', usuario: 'J. Santos · 00412',   dataPesagem: '05/05/2026 07:20', padrao: 12.0, real: 13.8, min: 11.5, max: 18.2, ocorr: 6, variancia: 15.0 },
    { cod: 'M0001',   desc: 'AGUA PURIFICADA',                sala: 'Sala A', ordem: 'OP-2026-0417', usuario: 'J. Santos · 00412',   dataPesagem: '05/05/2026 07:30', padrao: 3.0, real: 3.0, min: 2.7, max: 3.5, ocorr: 14, variancia: 0 },
    { cod: 'M3307',   desc: 'PROPILENOGLICOL',                sala: 'Sala B', ordem: 'OP-2026-0418', usuario: 'F. Costa · 00731',    dataPesagem: '05/05/2026 09:20', padrao: 3.8, real: 3.6, min: 3.2, max: 4.4, ocorr: 7,  variancia: -5.3 },
    { cod: 'M0914',   desc: 'CARBOPOL 940',                   sala: 'Sala C', ordem: 'OP-2026-0418', usuario: 'F. Costa · 00731',    dataPesagem: '05/05/2026 09:35', padrao: 5.5, real: 6.1, min: 5.0, max: 8.4, ocorr: 4,  variancia: 10.9 },
    { cod: 'M2256',   desc: 'FENOXIETANOL',                   sala: 'Sala A', ordem: 'OP-2026-0419', usuario: 'M. Oliveira · 00155', dataPesagem: '05/05/2026 10:55', padrao: 2.5, real: 2.6, min: 2.2, max: 3.0, ocorr: 7,  variancia: 4.0 },
    { cod: 'M5593',   desc: 'TEA 99%',                        sala: 'Sala B', ordem: 'OP-2026-0419', usuario: 'M. Oliveira · 00155', dataPesagem: '05/05/2026 11:05', padrao: 2.2, real: 2.0, min: 1.8, max: 2.5, ocorr: 8,  variancia: -9.1 },
    { cod: 'MAP0815B',desc: 'APARA TRANSP GRANADO GLICERINA', sala: 'Sala C', ordem: 'OP-2026-0414', usuario: 'J. Santos · 00412',   dataPesagem: '05/05/2026 07:00', padrao: 8.0, real: 7.8, min: 7.0, max: 9.5, ocorr: 4,  variancia: -2.5 },
    { cod: 'M2089',   desc: 'FRAGÂNCIA ROSA',                 sala: 'Sala A', ordem: 'OP-2026-0419', usuario: 'M. Oliveira · 00155', dataPesagem: '05/05/2026 11:20', padrao: 2.7, real: 2.9, min: 2.5, max: 3.4, ocorr: 6,  variancia: 7.4 },
  ],

  // ─── DISPONIBILIDADE — paradas do dia ────────────────────────
  paradas: [
    { motivo: 'Refeição',             tipo: 'programada',     min: 60,  ocorr: 2, cor: 'inf'  },
    { motivo: 'Sanitização Box',      tipo: 'programada',     min: 22,  ocorr: 3, cor: 'inf'  },
    { motivo: 'Sala desprogramada',   tipo: 'programada',     min: 45,  ocorr: 1, cor: 'inf'  },
    { motivo: 'Manutenção balança',   tipo: 'nao-programada', min: 28,  ocorr: 1, cor: 'per'  },
    { motivo: 'Aguardando MP (JDE)',  tipo: 'nao-programada', min: 18,  ocorr: 2, cor: 'alr'  },
    { motivo: 'Reunião',              tipo: 'nao-programada', min: 15,  ocorr: 1, cor: 'alr'  },
  ],

  // ─── DISPONIBILIDADE POR SALA ────────────────────────────────
  salas: [
    { id: 'A', nome: 'Sala A', balancas: 4, ocupacao: 92, disponibilidade: 96.5, performance: 95.0, oee: 91.7, status: 'operando', operador: 'J. Santos / M. Oliveira' },
    { id: 'B', nome: 'Sala B', balancas: 3, ocupacao: 78, disponibilidade: 86.0, performance: 87.6, oee: 75.3, status: 'operando', operador: 'F. Costa' },
    { id: 'C', nome: 'Sala C', balancas: 2, ocupacao: 65, disponibilidade: 79.9, performance: 89.9, oee: 71.8, status: 'sanitizacao', operador: '— em sanitização' },
  ],

  // ─── HISTÓRICO — OEE diário (últimos 7 dias) ─────────────────
  historico: [
    { data: '29/04', oee: 76.5, disp: 84, perf: 91 },
    { data: '30/04', oee: 81.2, disp: 88, perf: 92 },
    { data: '01/05', oee: 79.3, disp: 86, perf: 92 },
    { data: '02/05', oee: 74.8, disp: 82, perf: 91 },
    { data: '03/05', oee: 80.1, disp: 88, perf: 91 },
    { data: '04/05', oee: 82.5, disp: 90, perf: 92 },
    { data: '05/05', oee: 78.4, disp: 86, perf: 91 },
  ],
};
