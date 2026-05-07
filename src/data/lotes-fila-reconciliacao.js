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

export const LOTES_FILA = [
  // ───── 3 lotes PRONTOS (sincronizados com BASE_MOCK e dossies) ─────
  { linha: 1, tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'RECN',  descProcesso: 'Reconciliação Técnica', statusProcesso: '10', descStatus: 'Pronto — Aguardando CQ',  lotePA: '262417', produto: 'Sab. Glicerinado Tradicional 90g',     wo: 'WO 784426', dataAtualizacao: '2026-04-30 08:14', filial: '0015 - Casa Granado' },
  { linha: 2, tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'RECN',  descProcesso: 'Reconciliação Técnica', statusProcesso: '10', descStatus: 'Pronto — Aguardando CQ',  lotePA: '261892', produto: 'Sab. Glicerinado Limão Siciliano 90g', wo: 'WO 784301', dataAtualizacao: '2026-04-22 11:42', filial: '0015 - Casa Granado' },
  { linha: 3, tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'RECN',  descProcesso: 'Reconciliação Técnica', statusProcesso: '10', descStatus: 'Pronto — Aguardando CQ',  lotePA: '261104', produto: 'Sab. Glicerinado Mel 90g',             wo: 'WO 783897', dataAtualizacao: '2026-04-12 16:08', filial: '0015 - Casa Granado' },
  // ───── 5 ficticios EM PROCESSO ─────
  { linha: 4, tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'EMB',   descProcesso: 'Embalagem em Curso',     statusProcesso: '20', descStatus: 'Em Embalagem',           lotePA: '262455', produto: 'Sab. Glicerinado Verbena 90g',         wo: 'WO 784512', dataAtualizacao: '2026-05-06 14:32', filial: '0015 - Casa Granado' },
  { linha: 5, tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'FAB',   descProcesso: 'Fabricação em Curso',    statusProcesso: '20', descStatus: 'Em Fabricação',          lotePA: '262489', produto: 'Sab. Glicerinado Lavanda 90g',         wo: 'WO 784599', dataAtualizacao: '2026-05-07 09:05', filial: '0015 - Casa Granado' },
  { linha: 6, tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'LIMS',  descProcesso: 'Análise Físico-Química', statusProcesso: '30', descStatus: 'Aguardando F-Q (LIMS)',  lotePA: '262512', produto: 'Sab. Glicerinado Rosa 90g',            wo: 'WO 784620', dataAtualizacao: '2026-05-05 17:20', filial: '0015 - Casa Granado' },
  { linha: 7, tipoRelato: 'PA',   descRelato: 'Lote Produto Acabado',  processo: 'MICR',  descProcesso: 'Análise Microbiológica', statusProcesso: '30', descStatus: 'Aguardando Microbiologia', lotePA: '262578', produto: 'Sab. Glicerinado Cedro 90g',         wo: 'WO 784671', dataAtualizacao: '2026-05-04 13:55', filial: '0015 - Casa Granado' },
  { linha: 8, tipoRelato: 'GRAN', descRelato: 'Lote Granel (Tanque)',  processo: 'PESA',  descProcesso: 'Pesagem de MP',          statusProcesso: '20', descStatus: 'Em Pesagem',             lotePA: '262602', produto: 'Sab. Glicerinado Coco 90g',            wo: 'WO 784712', dataAtualizacao: '2026-05-07 07:48', filial: '0015 - Casa Granado' },
];

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
