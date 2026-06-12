/**
 * Fila de Reconciliacoes Pendentes — formato JDE F4108-Z (Lot Master Workfile)
 * ----------------------------------------------------------------------------
 * Fonte de dados unificada para:
 *   - QualidadeFilaReconciliacaoScreen (tela dedicada da fila)
 *   - QualidadeReconciliacaoScreen     (preenche o input de busca a partir
 *                                        do clique numa linha da fila)
 *
 * Em producao, esta lista virá da integracao JDE/Apriso filtrando lotes
 * cujo processo terminou "Embalagem" mas ainda nao foi liberado.
 *
 * Status do processo (codigos JDE F4108):
 *   10 — Pronto (todas as etapas anteriores concluidas — disponivel pra CQ)
 *   20 — Em curso (Fabricacao / Embalagem / Pesagem ainda rodando)
 *   30 — Aguardando analise (LIMS Fisico-Quimico ou Microbiologia)
 */

// Wave 3.8 — Prioridade PCP. Lotes marcados pelo PCP como "preferencial"
// (atraso na fila vai gerar atraso na entrega ao cliente) ganham uma
// bandeirinha visual na fila do CQ — orientação da reunião GQV/CQ 12/05.
//   normal      — sem destaque
//   alta        — bandeirinha laranja (entregar dentro da semana)
//   critica     — bandeirinha vermelha (cliente esperando / atraso)
export const LOTES_FILA = [
  // ───── 3 lotes PRONTOS (sincronizados com BASE_MOCK e dossies) ─────
  { linha: 1, numeroReconciliacao: '137234', statusReconciliacao: 'execucao',   tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'RECN',  descProcesso: 'Reconciliação Técnica', statusProcesso: '10', descStatus: 'Pronto — Aguardando CQ',  lotePA: '262417', produto: 'Sab. Glicerinado Tradicional 90g',     wo: 'WO 784426', dataAtualizacao: '2026-04-30 08:14', filial: '0015 - Casa Granado', prioridadePcp: 'critica',  motivoPrioridade: 'Pedido Drogasil — entrega 14/05'  },
  { linha: 2, numeroReconciliacao: '137235', statusReconciliacao: 'novo',       tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'RECN',  descProcesso: 'Reconciliação Técnica', statusProcesso: '10', descStatus: 'Pronto — Aguardando CQ',  lotePA: '261892', produto: 'Sab. Glicerinado Limão Siciliano 90g', wo: 'WO 784301', dataAtualizacao: '2026-04-22 11:42', filial: '0015 - Casa Granado', prioridadePcp: 'alta',     motivoPrioridade: 'Estoque CED baixo — DC RJ' },
  { linha: 3, numeroReconciliacao: '137236', statusReconciliacao: 'finalizado', tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'RECN',  descProcesso: 'Reconciliação Técnica', statusProcesso: '10', descStatus: 'Pronto — Aguardando CQ',  lotePA: '261104', produto: 'Sab. Glicerinado Mel 90g',             wo: 'WO 783897', dataAtualizacao: '2026-04-12 16:08', filial: '0015 - Casa Granado', prioridadePcp: 'normal' },
  // ───── 5 ficticios EM PROCESSO ─────
  { linha: 4, numeroReconciliacao: '137237', statusReconciliacao: 'novo',       tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'EMB',   descProcesso: 'Embalagem em Curso',     statusProcesso: '20', descStatus: 'Em Embalagem',           lotePA: '262455', produto: 'Sab. Glicerinado Verbena 90g',         wo: 'WO 784512', dataAtualizacao: '2026-05-06 14:32', filial: '0015 - Casa Granado', prioridadePcp: 'alta', motivoPrioridade: 'Export — embarque RJ-MIA 12/05' },
  { linha: 5, numeroReconciliacao: '137238', statusReconciliacao: 'execucao',   tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'FAB',   descProcesso: 'Fabricação em Curso',    statusProcesso: '20', descStatus: 'Em Fabricação',          lotePA: '262489', produto: 'Sab. Glicerinado Lavanda 90g',         wo: 'WO 784599', dataAtualizacao: '2026-05-07 09:05', filial: '0015 - Casa Granado', prioridadePcp: 'normal' },
  { linha: 6, numeroReconciliacao: '137239', statusReconciliacao: 'novo',       tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'LIMS',  descProcesso: 'Análise Físico-Química', statusProcesso: '30', descStatus: 'Aguardando F-Q (LIMS)',  lotePA: '262512', produto: 'Sab. Glicerinado Rosa 90g',            wo: 'WO 784620', dataAtualizacao: '2026-05-05 17:20', filial: '0015 - Casa Granado', prioridadePcp: 'normal' },
  { linha: 7, numeroReconciliacao: '137240', statusReconciliacao: 'execucao',   tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'MICR',  descProcesso: 'Análise Microbiológica', statusProcesso: '30', descStatus: 'Aguardando Microbiologia', lotePA: '262578', produto: 'Sab. Glicerinado Cedro 90g',         wo: 'WO 784671', dataAtualizacao: '2026-05-04 13:55', filial: '0015 - Casa Granado', prioridadePcp: 'critica', motivoPrioridade: 'Cliente RD — pedido atrasado' },
  { linha: 8, numeroReconciliacao: '137241', statusReconciliacao: 'novo',       tipoRelato: 'GRAN', descRelato: 'Lote Granel (Tanque)',  processo: 'PESA',  descProcesso: 'Pesagem de MP',          statusProcesso: '20', descStatus: 'Em Pesagem',             lotePA: '262602', produto: 'Sab. Glicerinado Coco 90g',            wo: 'WO 784712', dataAtualizacao: '2026-05-07 07:48', filial: '0015 - Casa Granado', prioridadePcp: 'normal' },
];

/**
 * Catalogo de lotes disponiveis para reconciliacao (terminaram embalagem,
 * ainda nao estao na fila). Usado pela busca do popup "Adicionar nova
 * reconciliacao": ao digitar o lote, os demais dados (produto/WO) vem daqui.
 * Em producao, esta busca seria um GET no JDE/MES por numero de lote.
 */
export const CATALOGO_LOTES = [
  { lotePA: '262690', produto: 'Sab. Glicerinado Jasmim 90g',     wo: 'WO 784900' },
  { lotePA: '262705', produto: 'Sab. Glicerinado Erva-Doce 90g',  wo: 'WO 784921' },
  { lotePA: '262733', produto: 'Sab. Glicerinado Amêndoas 90g',   wo: 'WO 784955' },
  { lotePA: '262760', produto: 'Sab. Glicerinado Alecrim 90g',    wo: 'WO 784988' },
];

/** Cores e ícones por prioridade PCP. */
export const PRIORIDADE_PCP_COR = {
  normal:  { fg: 'var(--text3)', bg: 'transparent',     bd: 'transparent',     label: '',          icone: ''   },
  alta:    { fg: '#fff',         bg: 'var(--ouro)',     bd: 'var(--ouro)',     label: 'PCP·Alta',   icone: '🚩' },
  critica: { fg: '#fff',         bg: 'var(--per)',      bd: 'var(--per-b)',    label: 'PCP·Crítica',icone: '🔥' },
};

/** Cor por codigo de status (alinhado com ok/inf/alr do tema). */
export const STATUS_PROC_COLOR = {
  '10': { fg: 'var(--ok)',   bg: 'var(--ok-p)',  bd: 'var(--ok-b)'  }, // Pronto
  '20': { fg: 'var(--inf)',  bg: 'var(--inf-p)', bd: 'var(--inf-b)' }, // Em curso
  '30': { fg: 'var(--alr)',  bg: 'var(--alr-p)', bd: 'var(--alr-b)' }, // Aguardando análise
};

/** Helper: descricao curta do codigo de status (sem o " — descricao"). */
export const STATUS_PROC_LABEL = {
  '10': 'Pronto',
  '20': 'Em Curso',
  '30': 'Aguardando',
};

/**
 * Status da Reconciliacao (ciclo de vida do item na fila do CQ):
 *   novo       — reconciliacao criada, ainda nao iniciada
 *   execucao   — CQ em analise (em execucao)
 *   finalizado — reconciliacao concluida
 */
export const STATUS_RECONCILIACAO = {
  novo:       { label: 'Novo',        fg: 'var(--inf)', bg: 'var(--inf-p)', bd: 'var(--inf-b)' },
  execucao:   { label: 'Em execução', fg: 'var(--alr)', bg: 'var(--alr-p)', bd: 'var(--alr-b)' },
  finalizado: { label: 'Finalizado',  fg: 'var(--ok)',  bg: 'var(--ok-p)',  bd: 'var(--ok-b)' },
};

/**
 * Lotes JA reconciliados (visao historica para o CQ).
 * Em producao, virao da tabela JDE F4108 + tabelas de desvio.
 *
 * Cada item traz o status individual de cada uma das 4 areas
 * (analises) + a contagem de desvios (abertos/tratados/criticos)
 * + o status final do lote (L/R/B/D).
 */
export const LOTES_FINALIZADOS = [
  {
    linha: 1,
    numeroReconciliacao: '137188',
    lotePA: '260847',
    produto: 'Sab. Glicerinado Lavanda 90g',
    wo: 'WO 783785',
    analises: { fab: 'APROVADO', emb: 'APROVADO', fq: 'APROVADO', micro: 'NA' },
    desvios: { abertos: 0, tratados: 0, criticos: 0 },
    statusLote: 'L — Liberado',
    dataLiberacao: '2026-04-02',
    responsavel: 'Bárbara C. O. Peixoto',
  },
  {
    linha: 2,
    numeroReconciliacao: '137195',
    lotePA: '260921',
    produto: 'Sab. Glicerinado Mel 90g',
    wo: 'WO 783821',
    analises: { fab: 'APROVADO', emb: 'APROVADO', fq: 'APROVADO', micro: 'APROVADO' },
    desvios: { abertos: 0, tratados: 1, criticos: 0 },
    statusLote: 'L — Liberado',
    dataLiberacao: '2026-04-08',
    responsavel: 'Bárbara C. O. Peixoto',
  },
  {
    linha: 3,
    numeroReconciliacao: '137201',
    lotePA: '261004',
    produto: 'Sab. Glicerinado Tradicional 90g',
    wo: 'WO 783866',
    analises: { fab: 'APROVADO', emb: 'APROVADO', fq: 'APROVADO', micro: 'NA' },
    desvios: { abertos: 0, tratados: 0, criticos: 0 },
    statusLote: 'L — Liberado',
    dataLiberacao: '2026-04-11',
    responsavel: 'Bárbara C. O. Peixoto',
  },
  {
    linha: 4,
    numeroReconciliacao: '137207',
    lotePA: '261087',
    produto: 'Sab. Glicerinado Limão 90g',
    wo: 'WO 783892',
    analises: { fab: 'APROVADO', emb: 'APROVADO', fq: 'REPROVADO', micro: 'PENDENTE' },
    desvios: { abertos: 1, tratados: 0, criticos: 1 },
    statusLote: 'B — Bloqueado',
    dataLiberacao: '—',
    responsavel: 'Bárbara C. O. Peixoto',
  },
  {
    linha: 5,
    numeroReconciliacao: '137215',
    lotePA: '261142',
    produto: 'Sab. Glicerinado Verbena 90g',
    wo: 'WO 783923',
    analises: { fab: 'REPROVADO', emb: 'NA', fq: 'NA', micro: 'NA' },
    desvios: { abertos: 0, tratados: 2, criticos: 1 },
    statusLote: 'R — Reprovado',
    dataLiberacao: '2026-04-15',
    responsavel: 'Bárbara C. O. Peixoto',
  },
  {
    linha: 6,
    numeroReconciliacao: '137223',
    lotePA: '261198',
    produto: 'Sab. Glicerinado Chá Branco 90g',
    wo: 'WO 783955',
    analises: { fab: 'APROVADO', emb: 'APROVADO', fq: 'APROVADO', micro: 'APROVADO' },
    desvios: { abertos: 0, tratados: 0, criticos: 0 },
    statusLote: 'L — Liberado',
    dataLiberacao: '2026-04-18',
    responsavel: 'Bárbara C. O. Peixoto',
  },
];

/** Cor para o status de cada analise — reusado nas pills da tabela. */
export const STATUS_ANALISE_COLOR = {
  APROVADO:  { bg: 'var(--ok-p)',     fg: 'var(--ok)',    bd: 'var(--ok-b)'   },
  REPROVADO: { bg: 'var(--per-p)',    fg: 'var(--per)',   bd: 'var(--per-b)'  },
  PENDENTE:  { bg: 'var(--alr-p)',    fg: 'var(--alr)',   bd: 'var(--alr-b)'  },
  NA:        { bg: 'var(--surface2)', fg: 'var(--text2)', bd: 'var(--border2)' },
};

/** Cor por status final do lote (Q/A/L/R/B/D/E). */
export const STATUS_LOTE_FINAL_COLOR = {
  L: { bg: 'var(--ok-p)',     fg: 'var(--ok)',    bd: 'var(--ok-b)'    },
  R: { bg: 'var(--per-p)',    fg: 'var(--per)',   bd: 'var(--per-b)'   },
  B: { bg: 'var(--per-p)',    fg: 'var(--per)',   bd: 'var(--per-b)'   },
  D: { bg: 'var(--surface2)', fg: 'var(--text2)', bd: 'var(--border2)' },
  Q: { bg: 'var(--alr-p)',    fg: 'var(--alr)',   bd: 'var(--alr-b)'   },
  A: { bg: 'var(--inf-p)',    fg: 'var(--inf)',   bd: 'var(--inf-b)'   },
  E: { bg: 'var(--surface2)', fg: 'var(--text2)', bd: 'var(--border2)' },
};
