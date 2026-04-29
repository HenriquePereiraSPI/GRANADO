/**
 * Estrutura solicitada (ERU 5.1.55):
 *   MF1: 5 salas — Supositorio Infantil, Supositorio Adulto, Talco Bebe, Polvilho Perfumado, Polvilho Tradicional
 *   MF2: 11 salas (1–11), com variacao 2A na sala 2 → 12 entradas no total
 *   MF3: 3 salas — Vela 1, Vela 2, Cera
 *   MF4: 4 salas — Linha A, Linha B, Linha C, Linha D
 *   MF5: pendente de levantamento de campo (Sabonete Barra & Glicerina)
 *
 * Cada sala tem status mockado pra dar vida ao sinotico (ok / alr / err / idle).
 *
 * `descricao` e `icone` sao usados pelos cards da visao macro.
 * `status: 'config'` marca a MF como "em configuracao" (sem dados detalhados).
 */

export const FABRICACAO = {
  MF1: {
    titulo: 'MF1 — Supositorios, Talco e Polvinho',
    descricao: 'Supositórios, Talco & Polvinho',
    icone: '👶',
    status: 'ativa',
    salas: [
      { id: 'MF1-S1', nome: 'Supositorio Infantil',   op: 'OP-2026-0421', status: 'ok',   etapa: 'Mistura',     equip: 'Tanque T-12' },
      { id: 'MF1-S2', nome: 'Supositorio Adulto',     op: 'OP-2026-0422', status: 'ok',   etapa: 'Resfriamento', equip: 'Tanque T-13' },
      { id: 'MF1-S3', nome: 'Talco Bebe',             op: 'OP-2026-0418', status: 'ok',   etapa: 'Micronizacao', equip: 'Moinho M-04' },
      { id: 'MF1-S4', nome: 'Polvilho Perfumado',     op: '—',             status: 'idle', etapa: '—',           equip: '—' },
      { id: 'MF1-S5', nome: 'Polvilho Tradicional',   op: 'OP-2026-0423', status: 'alr',  etapa: 'Adicao essencia', equip: 'Misturador X-2', obs: 'Pressao acima do padrao' },
    ],
  },
  MF2: {
    titulo: 'MF2 — Shampoo, Condicionador e Gel',
    descricao: 'Shampoo, Condicionador & Gel',
    icone: '💆',
    status: 'ativa',
    salas: [
      { id: 'MF2-S1',  nome: 'Sala 1',  op: 'OP-2026-0430', status: 'ok',   etapa: 'Pesagem',          equip: 'Tanque R-21' },
      { id: 'MF2-S2',  nome: 'Sala 2',  op: 'OP-2026-0431', status: 'ok',   etapa: 'Mistura',          equip: 'Tanque R-22' },
      { id: 'MF2-S2A', nome: 'Sala 2A', op: 'OP-2026-0431', status: 'ok',   etapa: 'Pre-mistura',      equip: 'Auxiliar R-22A', obs: 'Variacao da sala 2' },
      { id: 'MF2-S3',  nome: 'Sala 3',  op: 'OP-2026-0432', status: 'err',  etapa: 'Limpeza CIP',      equip: 'Tanque R-23', obs: 'CIP em andamento' },
      { id: 'MF2-S4',  nome: 'Sala 4',  op: 'OP-2026-0433', status: 'ok',   etapa: 'Aquecimento',      equip: 'Tanque R-24' },
      { id: 'MF2-S5',  nome: 'Sala 5',  op: '—',             status: 'idle', etapa: '—',                equip: '—' },
      { id: 'MF2-S6',  nome: 'Sala 6',  op: 'OP-2026-0434', status: 'ok',   etapa: 'Adicao corante',   equip: 'Tanque R-26' },
      { id: 'MF2-S7',  nome: 'Sala 7',  op: 'OP-2026-0435', status: 'alr',  etapa: 'Homogeneizacao',   equip: 'Tanque R-27', obs: 'Viscosidade abaixo do padrao' },
      { id: 'MF2-S8',  nome: 'Sala 8',  op: 'OP-2026-0436', status: 'ok',   etapa: 'Resfriamento',     equip: 'Tanque R-28' },
      { id: 'MF2-S9',  nome: 'Sala 9',  op: '—',             status: 'idle', etapa: '—',                equip: '—' },
      { id: 'MF2-S10', nome: 'Sala 10', op: 'OP-2026-0437', status: 'ok',   etapa: 'Filtragem',        equip: 'Tanque R-30' },
      { id: 'MF2-S11', nome: 'Sala 11', op: 'OP-2026-0438', status: 'ok',   etapa: 'Aprovacao LIMS',   equip: 'Tanque R-31' },
    ],
  },
  MF3: {
    titulo: 'MF3 — Creme e Locao Hidratante',
    descricao: 'Creme & Loção Hidratante',
    icone: '🧴',
    status: 'ativa',
    salas: [
      { id: 'MF3-V1',  nome: 'Vela 1', op: 'OP-2026-0440', status: 'ok',   etapa: 'Mistura primaria',     equip: 'Reator R-V1' },
      { id: 'MF3-V2',  nome: 'Vela 2', op: 'OP-2026-0441', status: 'ok',   etapa: 'Adicao fase oleosa',   equip: 'Reator R-V2' },
      { id: 'MF3-CR',  nome: 'Cera',   op: 'OP-2026-0442', status: 'alr',  etapa: 'Aquecimento controlado', equip: 'Tanque T-CR', obs: 'Temperatura 2C abaixo do alvo' },
    ],
  },
  MF4: {
    titulo: 'MF4 — Colonias, EDT, Perfumes, Aerossois',
    descricao: 'Colônias, EDT, Perfumes, Aerossóis',
    icone: '🌸',
    status: 'ativa',
    salas: [
      { id: 'MF4-LA', nome: 'Linha A', op: 'OP-2026-0420', status: 'ok',   etapa: 'Macercao',         equip: 'Tanque T-A1' },
      { id: 'MF4-LB', nome: 'Linha B', op: 'OP-2026-0421', status: 'ok',   etapa: 'Filtragem fina',   equip: 'Tanque T-B2' },
      { id: 'MF4-LC', nome: 'Linha C', op: '—',             status: 'idle', etapa: '—',                equip: '—' },
      { id: 'MF4-LD', nome: 'Linha D', op: 'OP-2026-0422', status: 'err',  etapa: 'Manutencao corretiva', equip: 'Tanque T-D4', obs: 'Vazamento na valvula V-12' },
    ],
  },
  MF5: {
    titulo: 'MF5 — Sabonete Barra & Glicerina',
    descricao: 'Sabonete Barra & Glicerina',
    icone: '🧼',
    status: 'ativa',
    salas: [
      { id: 'MF5-R01', nome: 'Reator R-01', op: 'OP-2026-0414', status: 'ok',   etapa: 'Saponificacao',    equip: 'Reator R-01' },
      { id: 'MF5-R02', nome: 'Reator R-02', op: 'OP-2026-0414', status: 'ok',   etapa: 'Aquecimento',      equip: 'Reator R-02' },
      { id: 'MF5-R03', nome: 'Reator R-03', op: 'OP-2026-0415', status: 'ok',   etapa: 'Mistura primaria', equip: 'Reator R-03' },
      { id: 'MF5-R04', nome: 'Reator R-04', op: 'OP-2026-0416', status: 'ok',   etapa: 'Resfriamento',     equip: 'Reator R-04' },
      { id: 'MF5-R05', nome: 'Reator R-05', op: 'OP-2026-0416', status: 'alr',  etapa: 'Adicao essencia',  equip: 'Reator R-05', obs: 'Viscosidade abaixo do padrao' },
      { id: 'MF5-R06', nome: 'Reator R-06', op: 'OP-2026-0417', status: 'ok',   etapa: 'Aprovacao LIMS',   equip: 'Reator R-06' },
      { id: 'MF5-R07', nome: 'Reator R-07', op: '—',             status: 'idle', etapa: '—',                equip: 'Reator R-07' },
      { id: 'MF5-R08', nome: 'Reator R-08', op: 'OP-2026-0418', status: 'err',  etapa: 'Limpeza CIP',      equip: 'Reator R-08', obs: 'CIP em andamento' },
      { id: 'MF5-R09', nome: 'Reator R-09', op: 'OP-2026-0419', status: 'ok',   etapa: 'Saponificacao',    equip: 'Reator R-09' },
      { id: 'MF5-R10', nome: 'Reator R-10', op: '—',             status: 'idle', etapa: '—',                equip: 'Reator R-10' },
    ],
  },
};

export const STATUS_LABEL = {
  ok:   '🟢 Operando',
  alr:  '🟡 Alerta',
  err:  '🔴 Parada',
  idle: '⚪ Aguardando',
};
