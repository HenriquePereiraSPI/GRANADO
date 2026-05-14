import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

/**
 * Tela: Qualidade > Reconciliacao Tecnica e Liberacao de Lote
 * --------------------------------------------------------------
 * Adaptado do mockup original (MenuQualidadeReconciliacao.jsx em
 * Tailwind) para a stack do projeto (CSS tokens Granado/Phebo,
 * classes .card / .btn / .bdg / .inp).
 *
 * Fluxo:
 *   1. CQ informa Nº do Lote de Embalagem.
 *   2. Sistema busca dados (mock — substituir por API JDE/Apriso).
 *   3. CQ revisa Fabricacao / Embalagem / Fisico-Quimico /
 *      Microbiologia, registra status (Aprovado / Reprovado /
 *      Pendente), responsavel e observacoes.
 *   4. Quando todas as 4 areas estao APROVADO, libera 'Liberar para
 *      CED'. Se alguma REPROVADO, libera 'Reprovar Lote'.
 */

// ─────────────────────────────────────────────────────────────
// Mock de lotes — chave eh o LOTE PA (numero de Producao Acabado),
// alinhado 1:1 com os 3 dossies da Genealogia
// (src/data/dossie-wo-784426.js → DOSSIES). Em producao, esta tabela
// virá da integracao JDE/Apriso usando o lote PA como chave primária.
//
// Mapeamento:
//   262417 → Sabonete Glicerinado Tradicional (DOSSIE_1, WO 784426, granel 2551/2026)
//   261892 → Sabonete Glicerinado Limão Siciliano (DOSSIE_2, WO 784301, granel 2401/2026)
//   261104 → Sabonete Glicerinado Mel (DOSSIE_3, WO 783897, granel 2298/2026)
// ─────────────────────────────────────────────────────────────
const BASE_MOCK = {
  '262417': {
    numeroReconciliacao: '137234',
    filial: '0015 - Casa Granado',
    produtoAcabado: 'S0815B_G — Sabonete Glicerinado Tradicional 90g',
    granel: 'S0815B — TRANSP GRANADO GLICERINA',
    loteGranel: '2551/2026', // mantido para compat — agora ver granelLotes[]
    // Multibatch: N granéis fechando 1 lote PA (combinação rotineira na
    // fábrica — ver reunião GQV/CQ 12/05/2026, Carlos Lima @22:41).
    // Cada item tem o seu próprio Nº de OF (WO) e batch fabricação.
    granelLotes: [
      { lote: '2551/2026', wo: 'WO 784426', peso: '4.000 kg', status: 'APROVADO' },
      { lote: '2552/2026', wo: 'WO 784427', peso: '2.000 kg', status: 'APROVADO' },
    ],
    lotePA: '262417',
    loteFabricacao: 'WO 784426',
    dataFabricacao: '2026-04-16',
    dataValidade: '2029-04-30',
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao: {
        rendimentoTeorico: '6.000 kg', rendimentoReal: '6.006 kg', perda: '0,10%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      embalagem: {
        unidadesPlanejadas: '52.056 un', unidadesProduzidas: '48.531 un', perda: '6,77%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      fisicoQuimico: {
        ph: '10,7', umidade: '22%', densidade: '1,02 g/cm³',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      microbiologia: {
        contagemTotal: '< 10 UFC/g', bolorLevedura: '< 10 UFC/g', patogenos: 'Ausente',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
    },
  },
  '261892': {
    numeroReconciliacao: '137220',
    filial: '0015 - Casa Granado',
    produtoAcabado: 'S0822B_G — Sabonete Glicerinado Limão Siciliano 90g',
    granel: 'S0822B — TRANSP GRANADO LIMÃO SICILIANO',
    loteGranel: '2401/2026',
    // Multibatch (3 granéis pra esse PA)
    granelLotes: [
      { lote: '2401/2026', wo: 'WO 784301', peso: '2.000 kg', status: 'APROVADO' },
      { lote: '2402/2026', wo: 'WO 784302', peso: '2.000 kg', status: 'APROVADO' },
      { lote: '2403/2026', wo: 'WO 784303', peso: '1.500 kg', status: 'APROVADO' },
    ],
    // Ordem Parcial — lote dividido em N OFs por capacidade da linha.
    // Amostras de retenção e parte do checklist têm tratamento diferenciado.
    ordemParcial: true,
    lotePA: '261892',
    loteFabricacao: 'WO 784301',
    dataFabricacao: '2026-04-08',
    dataValidade: '2029-04-20',
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao: {
        rendimentoTeorico: '5.500 kg', rendimentoReal: '5.503 kg', perda: '0,05%',
        responsavel: 'Daltivo (108922)', data: '2026-04-09', status: 'APROVADO',
        observacoes: 'Rendimento dentro do limite (97–103%).',
      },
      embalagem: {
        unidadesPlanejadas: '47.652 un', unidadesProduzidas: '44.218 un', perda: '7,21%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      fisicoQuimico: {
        ph: '10,5', umidade: '23%', densidade: '1,03 g/cm³',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      microbiologia: {
        contagemTotal: '< 10 UFC/g', bolorLevedura: '< 10 UFC/g', patogenos: 'Ausente',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
    },
  },
  '261104': {
    numeroReconciliacao: '137199',
    filial: '0015 - Casa Granado',
    produtoAcabado: 'S0830B_G — Sabonete Glicerinado Mel 90g',
    granel: 'S0830B — TRANSP GRANADO MEL',
    loteGranel: '2298/2026',
    // Multibatch (caso "single-batch" — 1 granel só fechando o PA;
    // mesmo assim renderiza a tabela pra padronizar a UI).
    granelLotes: [
      { lote: '2298/2026', wo: 'WO 783897', peso: '4.000 kg', status: 'APROVADO' },
    ],
    lotePA: '261104',
    loteFabricacao: 'WO 783897',
    dataFabricacao: '2026-03-28',
    dataValidade: '2029-04-12',
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao: {
        rendimentoTeorico: '4.000 kg', rendimentoReal: '4.012 kg', perda: '0,30%',
        responsavel: 'M. Rocha (108)', data: '2026-03-29', status: 'PENDENTE',
        observacoes: 'Aguardando aprovação final do supervisor.',
      },
      embalagem: {
        unidadesPlanejadas: '34.700 un', unidadesProduzidas: '32.140 un', perda: '7,38%',
        responsavel: 'F. Costa (212)', data: '2026-03-30', status: 'APROVADO',
        observacoes: '',
      },
      fisicoQuimico: {
        ph: '10,8', umidade: '21%', densidade: '1,04 g/cm³',
        responsavel: 'Rcafé (LIMS)', data: '2026-03-30', status: 'APROVADO',
        observacoes: 'Análise 118.502 — todos os parâmetros conforme.',
      },
      microbiologia: {
        contagemTotal: '< 10 UFC/g', bolorLevedura: '< 10 UFC/g', patogenos: 'Ausente',
        responsavel: 'Jessica Costa', data: '2026-03-30', status: 'APROVADO',
        observacoes: '',
      },
    },
  },
};

// Mock de amostras de retenção por lote PA. Em produção virá da
// integração com o módulo de Estoque de Retenção (mesma base do
// /qual-amostras gerencial).
const MOCK_AMOSTRAS = {
  '262417': [
    { id: 11, tipo: 'inicio', caixa: '12', pallet: 'P-07', posicao: 'Estante A · Col 3', quantidade: '3 un', observacao: 'Coleta padrão início de envase', destruida: false, dataColeta: '2026-04-16' },
    { id: 12, tipo: 'meio',   caixa: '13', pallet: 'P-07', posicao: 'Estante A · Col 3', quantidade: '3 un', observacao: '', destruida: false, dataColeta: '2026-04-16' },
    { id: 13, tipo: 'fim',    caixa: '14', pallet: 'P-07', posicao: 'Estante A · Col 3', quantidade: '3 un', observacao: '', destruida: false, dataColeta: '2026-04-16' },
    { id: 14, tipo: 'micro',  caixa: '15', pallet: 'P-08', posicao: 'Geladeira micro', quantidade: '2 un', observacao: 'Para análise de patógenos', destruida: false, dataColeta: '2026-04-16' },
    { id: 15, tipo: 'fq',     caixa: '16', pallet: 'P-08', posicao: 'Estante B · Col 1', quantidade: '2 un', observacao: 'pH/umidade/densidade', destruida: false, dataColeta: '2026-04-16' },
  ],
  '261892': [
    { id: 21, tipo: 'inicio', caixa: '08', pallet: 'P-04', posicao: 'Estante A · Col 1', quantidade: '3 un', observacao: '', destruida: false, dataColeta: '2026-04-08' },
    { id: 22, tipo: 'fim',    caixa: '09', pallet: 'P-04', posicao: 'Estante A · Col 1', quantidade: '3 un', observacao: '', destruida: false, dataColeta: '2026-04-08' },
    { id: 23, tipo: 'micro',  caixa: '10', pallet: 'P-04', posicao: 'Geladeira micro', quantidade: '2 un', observacao: '', destruida: false, dataColeta: '2026-04-08' },
  ],
  '261104': [
    { id: 31, tipo: 'inicio',       caixa: '03', pallet: 'P-02', posicao: 'Estante A · Col 2', quantidade: '3 un', observacao: '', destruida: false, dataColeta: '2026-03-28' },
    { id: 32, tipo: 'meio',         caixa: '04', pallet: 'P-02', posicao: 'Estante A · Col 2', quantidade: '3 un', observacao: '', destruida: false, dataColeta: '2026-03-28' },
    { id: 33, tipo: 'fim',          caixa: '05', pallet: 'P-02', posicao: 'Estante A · Col 2', quantidade: '3 un', observacao: '', destruida: false, dataColeta: '2026-03-28' },
    { id: 34, tipo: 'micro',        caixa: '06', pallet: 'P-02', posicao: 'Geladeira micro', quantidade: '2 un', observacao: '', destruida: false, dataColeta: '2026-03-28' },
    { id: 35, tipo: 'fq',           caixa: '07', pallet: 'P-02', posicao: 'Estante B · Col 2', quantidade: '2 un', observacao: '', destruida: false, dataColeta: '2026-03-28' },
    { id: 36, tipo: 'estabilidade', caixa: '07A', pallet: 'P-02', posicao: 'Câmara 25°C', quantidade: '6 un', observacao: 'Estudo 36 meses', destruida: false, dataColeta: '2026-03-28' },
  ],
};

// Mock de anexos por lote PA. Slots: foto_etiqueta (obrigatório),
// boletim_lims (obrigatório), dados_brutos (opcional).
const MOCK_ANEXOS = {
  '262417': {
    foto_etiqueta: { nome: 'etiqueta_granel_2551.jpg', tamanho: '1,4 MB', data: '16/04/2026 14:32' },
    boletim_lims:  { nome: 'boletim_lims_118502.pdf', tamanho: '328 KB',  data: '17/04/2026 09:10' },
  },
  '261892': {
    foto_etiqueta: { nome: 'etiqueta_granel_2401.jpg', tamanho: '1,2 MB', data: '08/04/2026 11:15' },
    boletim_lims:  { nome: 'boletim_lims_118420.pdf', tamanho: '301 KB',  data: '09/04/2026 08:45' },
    dados_brutos:  { nome: 'analise_fq_lote_261892.xlsx', tamanho: '64 KB', data: '09/04/2026 09:02' },
  },
  '261104': {
    // Foto etiqueta intencionalmente ausente — demonstra estado de
    // bloqueio (slot obrigatório sem anexo).
    boletim_lims: { nome: 'boletim_lims_118380.pdf', tamanho: '294 KB', data: '30/03/2026 16:20' },
  },
};

const STATUS_COLOR = {
  APROVADO:  { bg: 'var(--ok-p)',   fg: 'var(--ok)',    bd: 'var(--ok-b)'  },
  REPROVADO: { bg: 'var(--per-p)',  fg: 'var(--per)',   bd: 'var(--per-b)' },
  PENDENTE:  { bg: 'var(--alr-p)',  fg: 'var(--alr)',   bd: 'var(--alr-b)' },
  NA:        { bg: 'var(--surface2)', fg: 'var(--text2)', bd: 'var(--border2)' },
};

const STATUS_LABEL = {
  APROVADO:  'APROVADO',
  REPROVADO: 'REPROVADO',
  PENDENTE:  'PENDENTE',
  NA:        'N/A',
};

// ─────────────────────────────────────────────────────────────
// Desvios do Lote — abertos durante a analise pelo CQ.
// Cada desvio bloqueia a liberacao para o CED ate ser tratado.
// ─────────────────────────────────────────────────────────────
const TIPOS_DESVIO = [
  { value: 'documental',     label: '📄 Documental' },
  { value: 'processo',       label: '⚙️ Processo' },
  { value: 'fisicoQuimico',  label: '⚗️ Físico-Químico' },
  { value: 'microbiologico', label: '🔬 Microbiológico' },
  { value: 'embalagem',      label: '📦 Embalagem' },
  { value: 'outro',          label: 'Outro' },
];

const SEVERIDADES = {
  leve:     { label: 'Leve',     bg: 'var(--inf-p)', fg: 'var(--inf)',  bd: 'var(--inf-b)'  },
  moderado: { label: 'Moderado', bg: 'var(--alr-p)', fg: 'var(--alr)',  bd: 'var(--alr-b)'  },
  critico:  { label: 'Crítico',  bg: 'var(--per-p)', fg: 'var(--per)',  bd: 'var(--per-b)'  },
};

const STATUS_DESVIO = {
  aberto:   { label: 'Aberto',     bg: 'var(--per-p)', fg: 'var(--per)',  bd: 'var(--per-b)'  },
  analise:  { label: 'Em Análise', bg: 'var(--alr-p)', fg: 'var(--alr)',  bd: 'var(--alr-b)'  },
  tratado:  { label: 'Tratado',    bg: 'var(--ok-p)',  fg: 'var(--ok)',   bd: 'var(--ok-b)'   },
  fechado:  { label: 'Fechado',    bg: 'var(--surface2)', fg: 'var(--text2)', bd: 'var(--border2)' },
};

const AREAS_DESVIO = [
  { value: 'fabricacao',    label: '🧪 Fabricação' },
  { value: 'embalagem',     label: '📦 Embalagem' },
  { value: 'fisicoQuimico', label: '⚗️ Físico-Químico' },
  { value: 'microbiologia', label: '🔬 Microbiologia' },
  { value: 'geral',         label: '🌐 Geral / Lote' },
];

// ─────────────────────────────────────────────────────────────
// Classificação do Registro de Correção — categorização rápida
// das ocorrências mais comuns que aparecem na conferência do CQ
// (extraída da reunião G.Q.V./C.Q. de 12/05/2026, Barbara/Fabiana/
// Gustavo). Permite tabular ofensores recorrentes no painel
// gerencial (Wave 2 — Dashboard de Correções).
// ─────────────────────────────────────────────────────────────
const CLASSIFICACAO_CORRECAO = [
  { value: 'ausencia_etiqueta',     label: 'Ausência de Etiqueta' },
  { value: 'falta_data',            label: 'Falta de Data / Hora' },
  { value: 'falta_assinatura',      label: 'Falta de Assinatura / Rubrica' },
  { value: 'divergencia_pesagem',   label: 'Divergência de Pesagem' },
  { value: 'divergencia_rotulagem', label: 'Divergência de Rotulagem' },
  { value: 'rasura_documento',      label: 'Rasura em Documento' },
  { value: 'campo_branco',          label: 'Campo em Branco' },
  { value: 'fora_especificacao',    label: 'Fora de Especificação' },
  { value: 'foto_etiqueta_ausente', label: 'Foto da Etiqueta não Anexada' },
  { value: 'boletim_pendente',      label: 'Boletim LIMS Pendente' },
  { value: 'outro',                 label: 'Outro' },
];

/** Gera numero de registro de correção no formato RC-AAAA-NNNN.
 *  (Renomeado de DSV em 14/05/2026 conforme reunião G.Q.V./C.Q. —
 *  o termo "desvio" tem peso regulatório forte; o que o CQ abre na
 *  reconciliação são ocorrências documentais/operacionais menores,
 *  por isso o nome "Registro de Correção" é mais adequado.) */
function gerarNumeroDesvio() {
  const ano = new Date().getFullYear();
  const seq = String(Math.floor(Math.random() * 9000) + 1000);
  return `RC-${ano}-${seq}`;
}

/** Template de Registro de Correção vazio para o formulario "Novo Registro". */
function desvioTemplate() {
  return {
    id: null,
    numero: gerarNumeroDesvio(),
    tipo: 'documental',
    classificacao: 'ausencia_etiqueta',
    severidade: 'moderado',
    area: 'geral',
    titulo: '',
    descricao: '',
    acaoImediata: '',
    planoAcao: '',
    responsavel: '',
    dataAbertura: new Date().toISOString().split('T')[0],
    status: 'aberto',
    observacaoTratativa: '',
  };
}

// ─────────────────────────────────────────────────────────────
// Checklist de Reconciliacao — Anexo 2 do POP-GQV-0009/05.
// Estados por item: 'pendente' (cinza) · 'concluido' (verde ✓) · 'na' (texto cinza).
// Para liberar o lote pro CED, todos os itens precisam estar
// marcados como 'concluido' OU 'na'.
// ─────────────────────────────────────────────────────────────
const CHECKLIST_ITENS = [
  { id: 'wo_mps_pesadas',     label: 'WO com Matérias-Primas Pesadas' },
  { id: 'etq_mp_relat_pes',   label: 'Etiquetas de Matéria-Prima / Relatório de Pesagem' },
  { id: 'ctrl_assinat',       label: 'Controle de Assinaturas / Assinatura Eletrônica' },
  { id: 'of_relat_inbatch',   label: 'Ordem de Fabricação / Relatório do InBatch' },
  { id: 'wo_envase_montag',   label: 'WO Envase EAN / WO Montagem EAN' },
  { id: 'rel_ctrl_emb',       label: 'Relatório de Controle em Processo na Linha de Embalagem' },
  { id: 'ctrl_peso',          label: 'Controle de Peso' },
  { id: 'ordem_emb',          label: 'Ordem de Embalagem' },
  { id: 'wo_emb_dun',         label: 'WO Embalagem DUN' },
  { id: 'bol_fq',             label: 'Boletim de Análise Físico-Químico' },
  { id: 'bol_micro',          label: 'Boletim de Análise Microbiológico' },
  { id: 'rel_desvio',         label: 'Relatório de Desvio' },
];

// Opcoes do campo "Status do Lote" (alinhadas a tabela 41/F4108 do JDE).
// O CQ pode alterar manualmente (ex.: Q -> L apos liberacao, Q -> B se
// for bloqueado). Em producao virá da integracao JDE/Apriso.
const STATUS_LOTE_OPCOES = [
  { value: 'Q — Sob Quarentena', cor: 'var(--alr)' },
  { value: 'A — Em Análise',     cor: 'var(--inf)' },
  { value: 'L — Liberado',       cor: 'var(--ok)' },
  { value: 'R — Reprovado',      cor: 'var(--per)' },
  { value: 'B — Bloqueado',      cor: 'var(--per)' },
  { value: 'D — Destruído',      cor: 'var(--text3)' },
  { value: 'E — Expirado',       cor: 'var(--text3)' },
];

const AREA_COR = {
  fabricacao:    { fg: '#FFFFFF', bg: 'var(--inf)',       label: 'Fabricação',     icon: '🧪' },
  embalagem:     { fg: '#FFFFFF', bg: 'var(--ouro)',      label: 'Embalagem',      icon: '📦' },
  fisicoQuimico: { fg: '#FFFFFF', bg: 'var(--verde-meio)',label: 'Físico-Químico', icon: '⚗️' },
  microbiologia: { fg: '#FFFFFF', bg: '#7A4A9A',          label: 'Microbiologia',  icon: '🔬' },
};

// ─────────────────────────────────────────────────────────────
// Amostras de Retenção — caixas guardadas no estoque de retenção
// por 1 ano após a validade do lote (ANVISA RDC 658/2022).
// Reunião GQV/CQ 12/05/2026: Barbara/Fabiana pediram que a tela de
// reconciliação tivesse o cadastro das amostras (tipo, caixa, pallet,
// posição) e que houvesse uma tela gerencial pra consulta posterior
// na hora da destruição.
//
// Tipos da reunião:
//   - inicio       — coletada no início do envase
//   - meio         — meio da rodada
//   - fim          — fim do envase
//   - micro        — destinada à microbiologia
//   - fq           — destinada ao físico-químico
//   - estabilidade — amostra extra pra estudo de estabilidade
// ─────────────────────────────────────────────────────────────
const AMOSTRA_TIPOS = [
  { value: 'inicio',       label: 'Início',        icon: '🟢' },
  { value: 'meio',         label: 'Meio',          icon: '🟡' },
  { value: 'fim',          label: 'Fim',           icon: '🔴' },
  { value: 'micro',        label: 'Microbiologia', icon: '🔬' },
  { value: 'fq',           label: 'Físico-Químico',icon: '⚗️' },
  { value: 'estabilidade', label: 'Estabilidade',  icon: '📈' },
];

/** Template de amostra vazia para o formulario. */
function amostraTemplate() {
  return {
    id: null,
    tipo: 'inicio',
    caixa: '',
    pallet: '',
    posicao: '',          // ex.: "Estante A · Coluna 3"
    quantidade: '',
    observacao: '',
    destruida: false,
    dataColeta: new Date().toISOString().split('T')[0],
  };
}

/* ─────────────────────────────────────────────────────────────
   Helpers de UI
───────────────────────────────────────────────────────────── */

function StatusPill({ status }) {
  const c = STATUS_COLOR[status] || STATUS_COLOR.PENDENTE;
  const label = STATUS_LABEL[status] || status;
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        background: c.bg,
        color: c.fg,
        border: `1px solid ${c.bd}`,
        borderRadius: 12,
      }}
    >
      {label}
    </span>
  );
}

function Campo({ label, value, obrigatorio }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <label style={{
        fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase',
        color: 'var(--text3)', marginBottom: 4,
      }}>
        {label} {obrigatorio && <span style={{ color: 'var(--per)' }}>*</span>}
      </label>
      <div
        style={{
          background: 'var(--surface2)',
          border: '1px solid var(--border)',
          borderRadius: 4,
          padding: '6px 10px',
          fontSize: 12,
          color: 'var(--text)',
          minHeight: 30,
          fontFamily: 'var(--font-m)',
          fontWeight: 600,
        }}
      >
        {value || <span style={{ color: 'var(--text3)' }}>—</span>}
      </div>
    </div>
  );
}

/**
 * Campo de seleção (dropdown) com mesma altura/estilo do Campo readonly.
 * Cor da fonte dinamica baseada na opcao selecionada (passa cor por opcao).
 */
function CampoSelect({ label, value, opcoes, onChange, obrigatorio }) {
  const sel = opcoes.find((o) => o.value === value);
  const corValor = sel?.cor || 'var(--text)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <label style={{
        fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase',
        color: 'var(--text3)', marginBottom: 4,
      }}>
        {label} {obrigatorio && <span style={{ color: 'var(--per)' }}>*</span>}
      </label>
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: 'var(--surface2)',
          border: '1px solid var(--border)',
          borderRadius: 4,
          padding: '6px 10px',
          fontSize: 12,
          color: corValor,
          minHeight: 32,
          fontFamily: 'var(--font-m)',
          fontWeight: 700,
          cursor: 'pointer',
          outline: 'none',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--verde)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
      >
        {opcoes.map((o) => (
          <option key={o.value} value={o.value}>{o.value}</option>
        ))}
      </select>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MultibatchBlock — exibe N granéis que compõem 1 lote PA.
   Render no cabeçalho de Identificação, logo abaixo da grid 4×N
   de campos. Mostra Lote/WO/Peso/Status de cada granel.
───────────────────────────────────────────────────────────── */
function MultibatchBlock({ granelLotes, loteGranelLegacy }) {
  // Fallback pra mocks/templates legados que ainda só tem loteGranel string
  const lotes = (granelLotes && granelLotes.length > 0)
    ? granelLotes
    : (loteGranelLegacy
        ? [{ lote: loteGranelLegacy, wo: '—', peso: '—', status: 'PENDENTE' }]
        : []);
  const isMulti = lotes.length > 1;
  return (
    <div style={{ marginTop: 12, borderTop: '1px dashed var(--border)', paddingTop: 12 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
        marginBottom: 6,
      }}>
        <span style={{
          fontSize: 10, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase',
          color: 'var(--text3)',
        }}>
          {isMulti ? '🔀 Multibatch — Granéis que compõem o PA' : 'Granel de Origem'}
        </span>
        {isMulti && (
          <span className="bdg" style={{
            fontSize: 9, background: 'var(--ouro-claro)', color: '#fff',
            border: '1px solid var(--ouro)', fontWeight: 800,
          }}>
            {lotes.length} GRANÉIS
          </span>
        )}
        {lotes.length === 0 && (
          <span style={{ fontSize: 10, color: 'var(--text3)', fontStyle: 'italic' }}>
            — sem granéis vinculados
          </span>
        )}
      </div>

      {lotes.length > 0 && (
        <div style={{
          background: 'var(--surface2)',
          border: '1px solid var(--border)',
          borderRadius: 6,
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '40px 1.2fr 1.2fr 1fr 110px',
            gap: 0,
            fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase',
            color: 'var(--text3)', background: 'var(--bg2)',
            padding: '6px 10px', borderBottom: '1px solid var(--border)',
          }}>
            <div>#</div>
            <div>Lote Granel</div>
            <div>Ordem (WO)</div>
            <div>Peso</div>
            <div style={{ textAlign: 'right' }}>Status</div>
          </div>
          {lotes.map((g, i) => (
            <div
              key={`${g.lote}-${i}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1.2fr 1.2fr 1fr 110px',
                gap: 0,
                fontSize: 12, fontFamily: 'var(--font-m)', fontWeight: 600,
                padding: '7px 10px',
                background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface2)',
                borderBottom: i < lotes.length - 1 ? '1px solid var(--border)' : 'none',
                alignItems: 'center',
              }}
            >
              <div style={{
                fontSize: 10, fontWeight: 900, color: 'var(--text3)',
              }}>{i + 1}</div>
              <div style={{ color: 'var(--text)' }}>{g.lote}</div>
              <div style={{ color: 'var(--text2)' }}>{g.wo}</div>
              <div style={{ color: 'var(--text2)' }}>{g.peso}</div>
              <div style={{ textAlign: 'right' }}>
                <StatusPill status={g.status} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   AnexosCard — 3 slots de anexo do lote
   (Foto da Etiqueta do Granel · Boletim LIMS · Dados Brutos).
   Reunião GQV/CQ 12/05/2026 — discutido a partir do minuto 18:53
   (Henrique→Carlos→Lorena): a foto da etiqueta tem que ser
   anexada NO MOMENTO da fabricação. Anexo ausente = bloqueia
   liberação. Mockup: drag-and-drop / clique pra adicionar.
───────────────────────────────────────────────────────────── */
function AnexoSlot({ slot, anexo, onUpload, onRemove }) {
  const tem = !!anexo;
  return (
    <div style={{
      flex: 1, minWidth: 220,
      background: 'var(--surface)',
      border: `1.5px ${tem ? 'solid' : 'dashed'} ${tem ? 'var(--ok-b)' : (slot.obrigatorio ? 'var(--alr-b)' : 'var(--border2)')}`,
      borderRadius: 7, padding: '10px 12px',
      display: 'flex', flexDirection: 'column', gap: 6,
      position: 'relative',
    }}>
      {slot.obrigatorio && !tem && (
        <span style={{
          position: 'absolute', top: -8, right: 10,
          fontSize: 9, fontWeight: 900, letterSpacing: '.08em',
          background: 'var(--alr)', color: '#fff',
          padding: '2px 7px', borderRadius: 8,
          border: '1px solid var(--alr-b)',
        }}>
          OBRIGATÓRIO
        </span>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>{slot.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text)' }}>{slot.titulo}</div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>{slot.descricao}</div>
        </div>
      </div>
      {tem ? (
        <div style={{
          background: 'var(--ok-p)', border: '1px solid var(--ok-b)',
          borderRadius: 5, padding: '6px 10px',
          fontSize: 11, color: 'var(--ok)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span>✓</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {anexo.nome}
            </div>
            <div style={{ fontSize: 9, color: 'var(--text3)' }}>
              {anexo.tamanho} · enviado em {anexo.data}
            </div>
          </div>
          <button
            onClick={onRemove}
            style={{
              background: 'none', border: '1px solid var(--per-b)', color: 'var(--per)',
              borderRadius: 4, padding: '2px 6px', fontSize: 10,
              cursor: 'pointer', fontFamily: 'inherit',
            }}
            title="Remover anexo"
          >
            ✕
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={onUpload}
          style={{
            background: 'var(--surface2)', border: '1px dashed var(--border)',
            color: 'var(--text2)', borderRadius: 5, padding: '12px 10px',
            fontSize: 11, fontFamily: 'inherit', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}
        >
          📎 Clique para anexar
        </button>
      )}
    </div>
  );
}

function AnexosCard({ anexos, setAnexos, ordemParcial }) {
  const SLOTS = [
    { key: 'foto_etiqueta', icon: '📸', titulo: 'Foto da Etiqueta do Granel',
      descricao: 'Anexada no momento do envase (Fabricação)', obrigatorio: true },
    { key: 'boletim_lims',  icon: '📊', titulo: 'Boletim LIMS (FQ / Micro)',
      descricao: 'PDF gerado pelo Customer Report do LIMS', obrigatorio: true },
    { key: 'dados_brutos',  icon: '🗂️', titulo: 'Dados Brutos da Análise',
      descricao: 'CSV/PDF/XLS — análise tabulada', obrigatorio: false },
  ];

  const simularUpload = (key) => {
    // Mock: simula seleção de arquivo
    const fakeNomes = {
      foto_etiqueta: 'etiqueta_granel_2551.jpg',
      boletim_lims:  'boletim_lims_118502.pdf',
      dados_brutos:  'analise_fq_dados_brutos.xlsx',
    };
    const fakeTamanhos = {
      foto_etiqueta: '1,4 MB',
      boletim_lims:  '328 KB',
      dados_brutos:  '64 KB',
    };
    setAnexos((prev) => ({
      ...prev,
      [key]: {
        nome: fakeNomes[key] || `${key}.pdf`,
        tamanho: fakeTamanhos[key] || '— KB',
        data: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }),
      },
    }));
  };
  const remover = (key) => {
    setAnexos((prev) => {
      const { [key]: _, ...rest } = prev;
      return rest;
    });
  };

  const obrigatoriosFaltando = SLOTS.filter((s) => s.obrigatorio && !anexos[s.key]);

  return (
    <div className="card mb14" style={{
      padding: 14,
      borderTop: `3px solid ${obrigatoriosFaltando.length === 0 ? 'var(--ok)' : 'var(--alr)'}`,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 10, flexWrap: 'wrap', marginBottom: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, fontWeight: 800 }}>📎 Anexos do Lote</span>
          {obrigatoriosFaltando.length === 0 ? (
            <span className="bdg bdg-ok" style={{ fontSize: 10 }}>
              ✓ Todos obrigatórios anexados
            </span>
          ) : (
            <span className="bdg bdg-alr" style={{ fontSize: 10 }}>
              ⚠ Faltam {obrigatoriosFaltando.length} anexo(s) obrigatório(s)
            </span>
          )}
          <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
            color: 'var(--text3)', padding: '2px 6px',
            border: '1px dashed var(--border2)', borderRadius: 8,
          }}>
            evidência GMP
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {SLOTS.map((s) => (
          <AnexoSlot
            key={s.key}
            slot={s}
            anexo={anexos[s.key]}
            onUpload={() => simularUpload(s.key)}
            onRemove={() => remover(s.key)}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   AmostrasRetencaoCard — bloco do lote em análise.
   Lista as amostras coletadas (Início/Meio/Fim/Micro/FQ/Estab)
   com Caixa/Pallet/Posição. Editar inline + adicionar/remover.
───────────────────────────────────────────────────────────── */
function AmostrasRetencaoCard({ amostras, setAmostras, ordemParcial }) {
  const [editando, setEditando] = useState(null); // null | id | 'new'
  const [draft, setDraft] = useState(amostraTemplate());

  const adicionar = () => {
    setDraft(amostraTemplate());
    setEditando('new');
  };
  const editar = (a) => {
    setDraft({ ...a });
    setEditando(a.id);
  };
  const salvar = () => {
    if (!draft.caixa.trim()) {
      window.alert('Informe ao menos o número da Caixa.');
      return;
    }
    if (editando === 'new') {
      setAmostras((prev) => [...prev, { ...draft, id: Date.now() }]);
    } else {
      setAmostras((prev) => prev.map((a) => a.id === editando ? draft : a));
    }
    setEditando(null);
  };
  const cancelar = () => setEditando(null);
  const remover = (id) => {
    if (window.confirm('Remover esta amostra da lista?')) {
      setAmostras((prev) => prev.filter((a) => a.id !== id));
    }
  };

  // Cobertura mínima: Início/Meio/Fim + Micro + FQ (boa prática POP).
  // Para Ordens Parciais não há retenção de Início/Meio/Fim (campo opcional).
  const tiposPresentes = new Set(amostras.map((a) => a.tipo));
  const minimosObrigatorios = ordemParcial ? [] : ['inicio', 'meio', 'fim', 'micro', 'fq'];
  const faltando = minimosObrigatorios.filter((t) => !tiposPresentes.has(t));

  return (
    <div className="card mb14" style={{
      padding: 14,
      borderTop: `3px solid ${faltando.length === 0 ? 'var(--ok)' : 'var(--alr)'}`,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 10, flexWrap: 'wrap', marginBottom: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 14, fontWeight: 800 }}>📦 Amostras de Retenção</span>
          <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
            color: 'var(--text3)', padding: '2px 6px',
            border: '1px dashed var(--border2)', borderRadius: 8,
          }} title="ANVISA RDC 658/2022 — retenção mínima de 1 ano após validade">
            RDC 658/2022 · 1 ano após validade
          </span>
          {amostras.length > 0 && (
            <span className="bdg" style={{
              fontSize: 10, background: 'var(--surface2)', color: 'var(--text2)',
              border: '1px solid var(--border)',
            }}>
              {amostras.length} cadastrada{amostras.length > 1 ? 's' : ''}
            </span>
          )}
          {faltando.length > 0 && !ordemParcial && (
            <span className="bdg bdg-alr" style={{ fontSize: 10 }} title={`Faltando: ${faltando.join(', ')}`}>
              ⚠ Faltam {faltando.length} tipo{faltando.length > 1 ? 's' : ''} mínimo{faltando.length > 1 ? 's' : ''}
            </span>
          )}
          {ordemParcial && (
            <span className="bdg" style={{
              fontSize: 10, background: 'var(--inf-p)', color: 'var(--inf)',
              border: '1px solid var(--inf-b)',
            }}>
              ℹ️ Ordem Parcial · retenção opcional
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={adicionar}
          className="btn btn-sm btn-v"
          style={{ fontSize: 12, fontWeight: 700 }}
        >
          + Nova Amostra
        </button>
      </div>

      {amostras.length === 0 && !editando ? (
        <div style={{
          padding: '14px', background: 'var(--surface2)',
          border: '1px dashed var(--border2)', borderRadius: 6,
          textAlign: 'center', fontSize: 11, color: 'var(--text3)',
        }}>
          Nenhuma amostra de retenção cadastrada para este lote.{' '}
          <button
            onClick={adicionar}
            style={{
              background: 'none', border: 'none', color: 'var(--verde)',
              cursor: 'pointer', textDecoration: 'underline',
              fontFamily: 'inherit', fontSize: 11,
            }}
          >
            Cadastrar a primeira amostra
          </button>.
        </div>
      ) : (
        <div style={{
          background: 'var(--surface2)', border: '1px solid var(--border)',
          borderRadius: 6, overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '36px 130px 90px 90px 1.2fr 90px 1fr 110px',
            gap: 0,
            fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase',
            color: 'var(--text3)', background: 'var(--bg2)',
            padding: '6px 10px', borderBottom: '1px solid var(--border)',
            alignItems: 'center',
          }}>
            <div>#</div>
            <div>Tipo</div>
            <div>Caixa</div>
            <div>Pallet</div>
            <div>Posição</div>
            <div>Qtde</div>
            <div>Observação</div>
            <div style={{ textAlign: 'right' }}>Ações</div>
          </div>
          {amostras.map((a, i) => {
            const tipo = AMOSTRA_TIPOS.find((t) => t.value === a.tipo);
            const emEdicao = editando === a.id;
            if (emEdicao) {
              return (
                <AmostraEditRow
                  key={a.id} idx={i + 1} draft={draft} setDraft={setDraft}
                  onSalvar={salvar} onCancelar={cancelar}
                />
              );
            }
            return (
              <div
                key={a.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '36px 130px 90px 90px 1.2fr 90px 1fr 110px',
                  gap: 0,
                  fontSize: 12, fontFamily: 'var(--font-m)', fontWeight: 600,
                  padding: '7px 10px',
                  background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface2)',
                  borderBottom: i < amostras.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems: 'center',
                  opacity: a.destruida ? 0.6 : 1,
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 900, color: 'var(--text3)' }}>{i + 1}</div>
                <div style={{ color: 'var(--text)' }}>
                  {tipo?.icon} {tipo?.label || a.tipo}
                </div>
                <div style={{ color: 'var(--text)' }}>{a.caixa}</div>
                <div style={{ color: 'var(--text2)' }}>{a.pallet || '—'}</div>
                <div style={{ color: 'var(--text2)' }}>{a.posicao || '—'}</div>
                <div style={{ color: 'var(--text2)' }}>{a.quantidade || '—'}</div>
                <div style={{
                  color: 'var(--text3)', fontSize: 11, fontFamily: 'inherit', fontWeight: 500,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }} title={a.observacao}>
                  {a.observacao || '—'}
                </div>
                <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => editar(a)}
                    className="btn btn-sm btn-ghost"
                    style={{ fontSize: 10, padding: '2px 6px' }}
                    title="Editar amostra"
                  >
                    ✎
                  </button>
                  <button
                    onClick={() => remover(a.id)}
                    className="btn btn-sm btn-ghost"
                    style={{ fontSize: 10, padding: '2px 6px', borderColor: 'var(--per)', color: 'var(--per)' }}
                    title="Remover"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })}
          {editando === 'new' && (
            <AmostraEditRow
              idx={amostras.length + 1}
              draft={draft} setDraft={setDraft}
              onSalvar={salvar} onCancelar={cancelar}
              isNew
            />
          )}
        </div>
      )}
    </div>
  );
}

function AmostraEditRow({ idx, draft, setDraft, onSalvar, onCancelar, isNew }) {
  const setCampo = (k, v) => setDraft((d) => ({ ...d, [k]: v }));
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '36px 130px 90px 90px 1.2fr 90px 1fr 110px',
      gap: 6, padding: '7px 10px',
      background: isNew ? 'var(--ok-p)' : 'var(--alr-p)',
      borderBottom: '1px solid var(--border)',
      alignItems: 'center',
    }}>
      <div style={{ fontSize: 10, fontWeight: 900, color: 'var(--text3)' }}>
        {isNew ? '+' : idx}
      </div>
      <select
        className="sel"
        value={draft.tipo}
        onChange={(e) => setCampo('tipo', e.target.value)}
        style={{ fontSize: 11, padding: '4px 6px' }}
      >
        {AMOSTRA_TIPOS.map((t) => (
          <option key={t.value} value={t.value}>{t.icon} {t.label}</option>
        ))}
      </select>
      <input
        className="inp" type="text"
        placeholder="Ex.: 12"
        value={draft.caixa}
        onChange={(e) => setCampo('caixa', e.target.value)}
        style={{ fontSize: 11, padding: '4px 6px' }}
      />
      <input
        className="inp" type="text"
        placeholder="Ex.: P-07"
        value={draft.pallet}
        onChange={(e) => setCampo('pallet', e.target.value)}
        style={{ fontSize: 11, padding: '4px 6px' }}
      />
      <input
        className="inp" type="text"
        placeholder="Ex.: Estante A · Col 3"
        value={draft.posicao}
        onChange={(e) => setCampo('posicao', e.target.value)}
        style={{ fontSize: 11, padding: '4px 6px' }}
      />
      <input
        className="inp" type="text"
        placeholder="Ex.: 3 un"
        value={draft.quantidade}
        onChange={(e) => setCampo('quantidade', e.target.value)}
        style={{ fontSize: 11, padding: '4px 6px' }}
      />
      <input
        className="inp" type="text"
        placeholder="(opcional)"
        value={draft.observacao}
        onChange={(e) => setCampo('observacao', e.target.value)}
        style={{ fontSize: 11, padding: '4px 6px' }}
      />
      <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
        <button onClick={onSalvar} className="btn btn-sm btn-v" style={{ fontSize: 10, padding: '3px 6px' }}>✓</button>
        <button onClick={onCancelar} className="btn btn-sm btn-ghost" style={{ fontSize: 10, padding: '3px 6px' }}>✕</button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card de Área (Fabricação / Embalagem / FQ / Micro)
───────────────────────────────────────────────────────────── */

function CardArea({ chave, dados, indicadores, onUpdate, onAbrirGenealogia }) {
  const cor = AREA_COR[chave];
  const handleChange = (campo, valor) => onUpdate({ ...dados, [campo]: valor });
  const [expObs, setExpObs] = useState(false);
  const ehNA = dados.status === 'NA';

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 7,
      boxShadow: 'var(--sh)',
      overflow: 'hidden',
      opacity: ehNA ? 0.78 : 1,
    }}>
      {/* Header colorido — clicavel pra abrir Genealogia */}
      <button
        type="button"
        onClick={onAbrirGenealogia}
        title="Clique para ver na Genealogia de Lote"
        style={{
          background: ehNA ? 'var(--text3)' : cor.bg, color: cor.fg,
          padding: '8px 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', border: 'none', cursor: 'pointer', font: 'inherit',
          gap: 10,
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '.08em', textTransform: 'uppercase' }}>
          {cor.icon} {cor.label}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '.08em',
              padding: '2px 7px', borderRadius: 10,
              background: 'rgba(255,255,255,.18)', color: '#fff',
              border: '1px solid rgba(255,255,255,.35)',
              whiteSpace: 'nowrap',
            }}
          >
            🧬 Genealogia →
          </span>
          <StatusPill status={dados.status} />
        </div>
      </button>

      {/* Body — versão compacta */}
      <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Indicadores em linha (compactados se NA) */}
        {!ehNA && (
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '4px 14px',
            fontSize: 11, color: 'var(--text2)',
            padding: '6px 10px',
            background: 'var(--surface2)',
            borderRadius: 4, border: '1px solid var(--border)',
          }}>
            {indicadores.map((ind) => (
              <span key={ind.label}>
                <span style={{ color: 'var(--text3)', fontWeight: 700 }}>{ind.label}: </span>
                <span style={{ fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--text)' }}>{ind.value || '—'}</span>
              </span>
            ))}
          </div>
        )}

        {/* Responsavel + Data — uma linha só */}
        {!ehNA && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 130px', gap: 8 }}>
            <input
              className="inp"
              type="text"
              value={dados.responsavel}
              onChange={(e) => handleChange('responsavel', e.target.value)}
              placeholder="Responsável CQ (matrícula)"
              style={{ fontSize: 11, padding: '5px 8px' }}
            />
            <input
              className="inp"
              type="date"
              value={dados.data || ''}
              onChange={(e) => handleChange('data', e.target.value)}
              style={{ fontSize: 11, padding: '5px 8px' }}
            />
          </div>
        )}

        {/* Observacoes — colapsado por padrão */}
        {!ehNA && (
          <div>
            {!expObs && !dados.observacoes && (
              <button
                type="button"
                onClick={() => setExpObs(true)}
                className="btn btn-sm btn-ghost"
                style={{ fontSize: 10, padding: '3px 8px' }}
              >
                + Observações
              </button>
            )}
            {!expObs && dados.observacoes && (
              <button
                type="button"
                onClick={() => setExpObs(true)}
                style={{
                  background: 'var(--alr-p)', border: '1px solid var(--alr-b)',
                  color: 'var(--alr)', borderRadius: 4, padding: '4px 8px',
                  fontSize: 10, cursor: 'pointer', fontFamily: 'inherit',
                  width: '100%', textAlign: 'left',
                }}
              >
                💬 {dados.observacoes.length > 60 ? dados.observacoes.slice(0, 60) + '…' : dados.observacoes}
              </button>
            )}
            {expObs && (
              <textarea
                className="txta"
                value={dados.observacoes}
                onChange={(e) => handleChange('observacoes', e.target.value)}
                onBlur={() => setExpObs(false)}
                rows={2}
                placeholder="Registrar não conformidades, desvios ou comentários..."
                autoFocus
                style={{ fontSize: 11, padding: '6px 8px', resize: 'vertical' }}
              />
            )}
          </div>
        )}

        {/* Marca informativa quando NA */}
        {ehNA && (
          <div style={{
            padding: '8px 10px',
            background: 'var(--surface2)', border: '1px dashed var(--border2)',
            borderRadius: 4, fontSize: 11, color: 'var(--text2)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span>ℹ️</span>
            <span>Esta análise não se aplica para o lote atual.</span>
          </div>
        )}

        {/* Botoes Reprovar / Pendente / N/A / Aprovar */}
        <div style={{
          display: 'flex', gap: 6, justifyContent: 'flex-end',
          paddingTop: 6, borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}>
          <button
            type="button"
            onClick={() => handleChange('status', 'REPROVADO')}
            className="btn btn-sm btn-ghost"
            style={{ borderColor: 'var(--per)', color: 'var(--per)', fontSize: 10, padding: '3px 8px' }}
          >
            ✗ Reprovar
          </button>
          <button
            type="button"
            onClick={() => handleChange('status', 'PENDENTE')}
            className="btn btn-sm btn-ghost"
            style={{ borderColor: 'var(--alr)', color: 'var(--alr)', fontSize: 10, padding: '3px 8px' }}
          >
            ⏳ Pendente
          </button>
          <button
            type="button"
            onClick={() => handleChange('status', 'NA')}
            className="btn btn-sm btn-ghost"
            style={{ borderColor: 'var(--text3)', color: 'var(--text2)', fontSize: 10, padding: '3px 8px' }}
            title="Esta análise não se aplica ao lote"
          >
            — N/A
          </button>
          <button
            type="button"
            onClick={() => handleChange('status', 'APROVADO')}
            className="btn btn-sm btn-v"
            style={{ fontSize: 10, padding: '3px 8px' }}
          >
            ✓ Aprovar
          </button>
        </div>
      </div>
    </div>
  );
}

/* (A Fila de Reconciliacoes Pendentes virou tela dedicada:
   /qual-fila — QualidadeFilaReconciliacaoScreen.jsx) */


/* ─────────────────────────────────────────────────────────────
   Modal Checklist de Reconciliacao — POP-GQV-0009/05 · Anexo 2
   Espelha o formulario fisico que o CQ assina no fim do processo.
───────────────────────────────────────────────────────────── */
function ChecklistEstadoToggle({ estado, onChange }) {
  // Toggle 3 estados: pendente -> concluido -> na -> pendente
  const cores = {
    pendente:  { bg: 'var(--surface2)', fg: 'var(--text3)',   bd: 'var(--border)',   label: '?',   help: 'Pendente'   },
    concluido: { bg: 'var(--ok-p)',     fg: 'var(--ok)',      bd: 'var(--ok-b)',     label: '✓',   help: 'Concluído'  },
    na:        { bg: 'var(--surface2)', fg: 'var(--text2)',   bd: 'var(--border2)',  label: 'N/A', help: 'Não se aplica' },
  };
  const c = cores[estado] || cores.pendente;
  const proximo = estado === 'pendente' ? 'concluido' : estado === 'concluido' ? 'na' : 'pendente';
  return (
    <button
      type="button"
      onClick={() => onChange(proximo)}
      title={`${c.help} — clique para alternar`}
      style={{
        minWidth: 56, padding: '4px 8px',
        background: c.bg, color: c.fg,
        border: `1.5px solid ${c.bd}`,
        borderRadius: 4,
        fontSize: 12, fontWeight: 800,
        cursor: 'pointer', fontFamily: 'inherit',
      }}
    >
      {c.label}
    </button>
  );
}

function ChecklistModal({ checklist, setChecklist, onClose, lote, marcados, total }) {
  const setItem = (id, valor) => setChecklist((c) => ({ ...c, itens: { ...c.itens, [id]: valor } }));
  const setBool = (campo, valor) => setChecklist((c) => ({ ...c, [campo]: valor }));
  const setCampo = (campo, valor) => setChecklist((c) => ({ ...c, [campo]: valor }));
  const pct = Math.round((marcados / total) * 100);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(15,51,25,.55)',
        zIndex: 950, display: 'flex', alignItems: 'flex-start',
        justifyContent: 'center', padding: '40px 20px', overflowY: 'auto',
        backdropFilter: 'blur(3px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: 'var(--surface)', borderTop: '4px solid var(--ouro)',
          border: '1px solid var(--border)',
          borderRadius: 8, padding: '24px 28px', maxWidth: 760, width: '100%',
          boxShadow: 'var(--sh2)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12, gap: 12 }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ouro)' }}>
              POP-GQV-0009/05 · Anexo 2
            </div>
            <div style={{ fontFamily: 'var(--font-d)', fontSize: 18, fontWeight: 700, color: 'var(--verde-esc)', marginTop: 2 }}>
              Check List de Reconciliação de Lote
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 10px', cursor: 'pointer', fontSize: 13, color: 'var(--text2)' }}
          >
            ✕
          </button>
        </div>

        {/* Header do produto/lote */}
        <div
          style={{
            background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6,
            padding: '10px 14px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
            gap: 12, fontSize: 11, marginBottom: 14,
          }}
        >
          <div>
            <div style={{ fontSize: 9, color: 'var(--text3)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>Produto</div>
            <div style={{ fontWeight: 700, marginTop: 2 }}>{lote?.produtoAcabado || '—'}</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: 'var(--text3)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>Lote Fabricação</div>
            <div className="mono" style={{ fontWeight: 700, marginTop: 2 }}>{lote?.loteGranel || '—'}</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: 'var(--text3)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>Lote Embalagem (PA)</div>
            <div className="mono" style={{ fontWeight: 700, marginTop: 2 }}>{lote?.lotePA || '—'}</div>
          </div>
        </div>

        {/* Barra de progresso */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, background: 'var(--surface2)', padding: '8px 12px', borderRadius: 6, border: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 22, fontWeight: 700, color: pct === 100 ? 'var(--ok)' : 'var(--ouro)', minWidth: 48 }}>{pct}%</div>
          <div style={{ flex: 1 }}>
            <div style={{ height: 6, background: 'var(--bg2)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: pct === 100 ? 'var(--ok)' : 'linear-gradient(90deg, var(--ouro), var(--ok))', transition: 'width .3s' }} />
            </div>
            <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 3 }}>
              {marcados} de {total} itens marcados (concluído ou N/A)
            </div>
          </div>
        </div>

        {/* Documentação do Lote */}
        <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 6 }}>
          Documentação do Lote
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 14, border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
          {CHECKLIST_ITENS.map((it, i) => (
            <div
              key={it.id}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 12px', gap: 12,
                background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface2)',
                fontSize: 12,
              }}
            >
              <span style={{ flex: 1, color: 'var(--text)' }}>{it.label}</span>
              <ChecklistEstadoToggle estado={checklist.itens[it.id]} onChange={(v) => setItem(it.id, v)} />
            </div>
          ))}
        </div>

        {/* Flags extras */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>
            <input
              type="checkbox"
              checked={checklist.ordemParcial}
              onChange={(e) => setBool('ordemParcial', e.target.checked)}
              style={{ width: 16, height: 16 }}
            />
            <span><strong>Ordem Parcial</strong> <span style={{ color: 'var(--text3)' }}>(N/A se desmarcado)</span></span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>
            <input
              type="checkbox"
              checked={checklist.produtoKit}
              onChange={(e) => setBool('produtoKit', e.target.checked)}
              style={{ width: 16, height: 16 }}
            />
            <span><strong>Produto destinado para Kit</strong> <span style={{ color: 'var(--text3)' }}>(N/A se desmarcado)</span></span>
          </label>
        </div>

        {/* Observação */}
        <div style={{ marginBottom: 14 }}>
          <label className="lbl">Observação</label>
          <textarea
            className="txta"
            value={checklist.observacao}
            onChange={(e) => setCampo('observacao', e.target.value)}
            rows={2}
            placeholder="Registrar não conformidades, justificativas de N/A ou comentários relevantes..."
            style={{ fontSize: 12, padding: '7px 10px', resize: 'vertical' }}
          />
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
          <button className="btn btn-md btn-ghost" onClick={onClose}>Fechar</button>
          <button
            className="btn btn-md btn-v"
            onClick={onClose}
            disabled={pct !== 100}
            style={{ opacity: pct === 100 ? 1 : 0.5, cursor: pct === 100 ? 'pointer' : 'not-allowed' }}
            title={pct === 100 ? 'Confirmar e fechar' : 'Marque todos os itens (concluído ou N/A)'}
          >
            ✓ Confirmar Checklist
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card compacto de Desvio (linha na lista) + Modal de Cadastro
───────────────────────────────────────────────────────────── */
function DesvioCard({ desvio, onEdit, onTratar, onRemover }) {
  const sev = SEVERIDADES[desvio.severidade] || SEVERIDADES.moderado;
  const st = STATUS_DESVIO[desvio.status] || STATUS_DESVIO.aberto;
  const tipo = TIPOS_DESVIO.find((t) => t.value === desvio.tipo);
  const area = AREAS_DESVIO.find((a) => a.value === desvio.area);
  const classif = CLASSIFICACAO_CORRECAO.find((c) => c.value === desvio.classificacao);
  const tratado = desvio.status === 'tratado' || desvio.status === 'fechado';
  return (
    <div
      style={{
        background: 'var(--surface)', border: `1.5px solid ${tratado ? 'var(--ok-b)' : sev.bd}`,
        borderLeft: `4px solid ${tratado ? 'var(--ok)' : sev.fg}`,
        borderRadius: 6, padding: '10px 12px',
        display: 'flex', flexDirection: 'column', gap: 6,
        opacity: tratado ? 0.85 : 1,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', flex: 1, minWidth: 240 }}>
          <span className="mono" style={{ fontSize: 11, fontWeight: 800, color: 'var(--text2)' }}>{desvio.numero}</span>
          <span style={{
            fontSize: 9, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase',
            padding: '2px 7px', borderRadius: 10, background: sev.bg, color: sev.fg, border: `1px solid ${sev.bd}`,
          }}>
            {sev.label}
          </span>
          <span style={{ fontSize: 10, color: 'var(--text3)' }}>{tipo?.label}</span>
          <span style={{ fontSize: 10, color: 'var(--text3)' }}>·</span>
          <span style={{ fontSize: 10, color: 'var(--text3)' }}>{area?.label}</span>
          {classif && (
            <>
              <span style={{ fontSize: 10, color: 'var(--text3)' }}>·</span>
              <span style={{
                fontSize: 9, fontWeight: 700,
                padding: '1px 6px', borderRadius: 8,
                background: 'var(--surface2)', color: 'var(--text2)',
                border: '1px dashed var(--border2)',
              }} title="Classificação da ocorrência">
                🏷️ {classif.label}
              </span>
            </>
          )}
          <span style={{
            fontSize: 9, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase',
            padding: '2px 7px', borderRadius: 10, background: st.bg, color: st.fg, border: `1px solid ${st.bd}`,
            marginLeft: 'auto',
          }}>
            {st.label}
          </span>
        </div>
      </div>

      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>{desvio.titulo || <em style={{ color: 'var(--text3)', fontWeight: 400 }}>(sem título)</em>}</div>

      {desvio.descricao && (
        <div style={{ fontSize: 11, color: 'var(--text2)', lineHeight: 1.4 }}>
          {desvio.descricao.length > 180 ? desvio.descricao.slice(0, 180) + '…' : desvio.descricao}
        </div>
      )}

      <div style={{ display: 'flex', gap: 14, fontSize: 10, color: 'var(--text3)', flexWrap: 'wrap' }}>
        <span>📅 {desvio.dataAbertura}</span>
        {desvio.responsavel && <span>👤 {desvio.responsavel}</span>}
      </div>

      <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end', paddingTop: 4, borderTop: '1px dashed var(--border)', flexWrap: 'wrap' }}>
        <button className="btn btn-sm btn-ghost" style={{ fontSize: 10, padding: '3px 8px' }} onClick={() => onEdit(desvio)}>
          ✎ Editar
        </button>
        {!tratado && (
          <button
            className="btn btn-sm btn-v"
            style={{ fontSize: 10, padding: '3px 8px' }}
            onClick={() => onTratar(desvio)}
            title="Marcar registro como Tratado (libera para CED)"
          >
            ✓ Marcar como Tratado
          </button>
        )}
        <button
          className="btn btn-sm btn-ghost"
          style={{ fontSize: 10, padding: '3px 8px', borderColor: 'var(--per)', color: 'var(--per)' }}
          onClick={() => { if (window.confirm(`Excluir o registro ${desvio.numero}?`)) onRemover(desvio.id); }}
        >
          ✕ Excluir
        </button>
      </div>
    </div>
  );
}

function DesvioModal({ desvio, setDesvio, onSalvar, onClose }) {
  const setCampo = (campo, valor) => setDesvio((d) => ({ ...d, [campo]: valor }));
  const podeSalvar = desvio.titulo.trim() && desvio.descricao.trim() && desvio.responsavel.trim();
  const editing = !!desvio.id;
  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(15,51,25,.55)',
        zIndex: 950, display: 'flex', alignItems: 'flex-start',
        justifyContent: 'center', padding: '40px 20px', overflowY: 'auto',
        backdropFilter: 'blur(3px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: 'var(--surface)',
          borderTop: `4px solid ${SEVERIDADES[desvio.severidade]?.fg || 'var(--per)'}`,
          border: '1px solid var(--border)',
          borderRadius: 8, padding: '24px 28px', maxWidth: 760, width: '100%',
          boxShadow: 'var(--sh2)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14, gap: 12 }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--per)' }}>
              📝 {editing ? 'Editar Registro de Correção' : 'Novo Registro de Correção'}
            </div>
            <div style={{ fontFamily: 'var(--font-d)', fontSize: 18, fontWeight: 700, color: 'var(--verde-esc)', marginTop: 2 }}>
              {desvio.numero}
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 10px', cursor: 'pointer', fontSize: 13, color: 'var(--text2)' }}>✕</button>
        </div>

        {/* Linha 1: tipo / severidade / area */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 10 }}>
          <div>
            <label className="lbl">Tipo <span style={{ color: 'var(--per)' }}>*</span></label>
            <select className="sel" value={desvio.tipo} onChange={(e) => setCampo('tipo', e.target.value)} style={{ fontSize: 12, padding: '7px 10px' }}>
              {TIPOS_DESVIO.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>
          <div>
            <label className="lbl">Severidade <span style={{ color: 'var(--per)' }}>*</span></label>
            <select className="sel" value={desvio.severidade} onChange={(e) => setCampo('severidade', e.target.value)} style={{ fontSize: 12, padding: '7px 10px', color: SEVERIDADES[desvio.severidade]?.fg, fontWeight: 700 }}>
              {Object.entries(SEVERIDADES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div>
            <label className="lbl">Área Relacionada <span style={{ color: 'var(--per)' }}>*</span></label>
            <select className="sel" value={desvio.area} onChange={(e) => setCampo('area', e.target.value)} style={{ fontSize: 12, padding: '7px 10px' }}>
              {AREAS_DESVIO.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
            </select>
          </div>
        </div>

        {/* Classificacao da ocorrência (categorização rápida — feeds o
            Painel de Ofensores do Dashboard Gerencial, Wave 2). */}
        <div style={{ marginBottom: 10 }}>
          <label className="lbl">
            🏷️ Classificação da Ocorrência <span style={{ color: 'var(--per)' }}>*</span>
            <span style={{ fontWeight: 400, color: 'var(--text3)', marginLeft: 8 }}>
              (define o ofensor pro painel gerencial)
            </span>
          </label>
          <select
            className="sel"
            value={desvio.classificacao}
            onChange={(e) => setCampo('classificacao', e.target.value)}
            style={{ fontSize: 12, padding: '7px 10px', fontWeight: 700 }}
          >
            {CLASSIFICACAO_CORRECAO.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        {/* Titulo */}
        <div style={{ marginBottom: 10 }}>
          <label className="lbl">Título do Registro <span style={{ color: 'var(--per)' }}>*</span></label>
          <input
            className="inp"
            type="text"
            value={desvio.titulo}
            onChange={(e) => setCampo('titulo', e.target.value)}
            placeholder="Ex.: Etiqueta da MP Fenoxietanol sem rubrica do pesador"
            style={{ fontSize: 12, padding: '7px 10px' }}
            maxLength={120}
          />
        </div>

        {/* Descricao */}
        <div style={{ marginBottom: 10 }}>
          <label className="lbl">Descrição da Ocorrência <span style={{ color: 'var(--per)' }}>*</span></label>
          <textarea
            className="txta"
            value={desvio.descricao}
            onChange={(e) => setCampo('descricao', e.target.value)}
            rows={3}
            placeholder="Descreva a ocorrência: o que foi observado, quando, por quem, quais evidências (etiquetas, fotos, batch records etc)..."
            style={{ fontSize: 12, padding: '7px 10px', resize: 'vertical' }}
          />
        </div>

        {/* Acao imediata + Plano de acao */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
          <div>
            <label className="lbl">Ação Imediata</label>
            <textarea
              className="txta"
              value={desvio.acaoImediata}
              onChange={(e) => setCampo('acaoImediata', e.target.value)}
              rows={2}
              placeholder="Ex.: lote bloqueado, área isolada..."
              style={{ fontSize: 12, padding: '7px 10px', resize: 'vertical' }}
            />
          </div>
          <div>
            <label className="lbl">Plano de Ação</label>
            <textarea
              className="txta"
              value={desvio.planoAcao}
              onChange={(e) => setCampo('planoAcao', e.target.value)}
              rows={2}
              placeholder="Ex.: revisão de POP, treinamento, repesagem..."
              style={{ fontSize: 12, padding: '7px 10px', resize: 'vertical' }}
            />
          </div>
        </div>

        {/* Responsavel + data */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 10, marginBottom: 10 }}>
          <div>
            <label className="lbl">Responsável CQ <span style={{ color: 'var(--per)' }}>*</span></label>
            <input
              className="inp"
              type="text"
              value={desvio.responsavel}
              onChange={(e) => setCampo('responsavel', e.target.value)}
              placeholder="Matrícula ou nome"
              style={{ fontSize: 12, padding: '7px 10px' }}
            />
          </div>
          <div>
            <label className="lbl">Data de Abertura</label>
            <input
              className="inp"
              type="date"
              value={desvio.dataAbertura}
              onChange={(e) => setCampo('dataAbertura', e.target.value)}
              style={{ fontSize: 12, padding: '7px 10px' }}
            />
          </div>
        </div>

        {/* Status (apenas em edicao) */}
        {editing && (
          <div style={{ marginBottom: 14 }}>
            <label className="lbl">Status</label>
            <select className="sel" value={desvio.status} onChange={(e) => setCampo('status', e.target.value)} style={{ fontSize: 12, padding: '7px 10px', color: STATUS_DESVIO[desvio.status]?.fg, fontWeight: 700 }}>
              {Object.entries(STATUS_DESVIO).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
            {(desvio.status === 'tratado' || desvio.status === 'fechado') && (
              <textarea
                className="txta"
                value={desvio.observacaoTratativa}
                onChange={(e) => setCampo('observacaoTratativa', e.target.value)}
                rows={2}
                placeholder="Observação da tratativa (CAPA, evidência, lote a ser repesado etc)..."
                style={{ fontSize: 12, padding: '7px 10px', resize: 'vertical', marginTop: 6 }}
              />
            )}
          </div>
        )}

        {/* Footer */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
          <button className="btn btn-md btn-ghost" onClick={onClose}>Cancelar</button>
          <button
            className="btn btn-md btn-v"
            onClick={onSalvar}
            disabled={!podeSalvar}
            style={{ opacity: podeSalvar ? 1 : 0.5, cursor: podeSalvar ? 'pointer' : 'not-allowed' }}
            title={podeSalvar ? 'Salvar registro de correção' : 'Preencha Título, Descrição e Responsável'}
          >
            ✓ Salvar Registro
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tela principal
───────────────────────────────────────────────────────────── */

/**
 * Gera um numero de reconciliacao aleatorio no formato JDE (6 digitos).
 * Em producao, virá da API JDE via integracao.
 */
function gerarNumeroReconciliacao() {
  return String(137000 + Math.floor(Math.random() * 999)).padStart(6, '0');
}

/** Template de Lote vazio para o modo 'Nova Reconciliacao'. */
function loteTemplate(numero) {
  const hoje = new Date().toISOString().split('T')[0];
  const validade = new Date();
  validade.setFullYear(validade.getFullYear() + 3);
  return {
    numeroReconciliacao: numero,
    filial: '0015 - Casa Granado',
    produtoAcabado: '',
    granel: '',
    loteGranel: '',
    granelLotes: [], // multibatch — pode receber N granéis
    lotePA: '',
    loteFabricacao: '',
    dataFabricacao: hoje,
    dataValidade: validade.toISOString().split('T')[0],
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao:    { rendimentoTeorico: '',  rendimentoReal: '',     perda: '',           responsavel: '', data: '', status: 'PENDENTE', observacoes: '' },
      embalagem:     { unidadesPlanejadas: '', unidadesProduzidas: '', perda: '',           responsavel: '', data: '', status: 'PENDENTE', observacoes: '' },
      fisicoQuimico: { ph: '',                umidade: '',             densidade: '',       responsavel: '', data: '', status: 'PENDENTE', observacoes: '' },
      microbiologia: { contagemTotal: '',     bolorLevedura: '',       patogenos: '',       responsavel: '', data: '', status: 'PENDENTE', observacoes: '' },
    },
  };
}

/** Estado inicial do checklist (todos os 12 itens em pendente). */
function checklistInicial() {
  const itens = {};
  CHECKLIST_ITENS.forEach((it) => { itens[it.id] = 'pendente'; });
  return {
    itens,
    ordemParcial: false,
    produtoKit: false,
    observacao: '',
    assinatura: '',
    dataAssinatura: '',
  };
}

export default function QualidadeReconciliacaoScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [numeroLote, setNumeroLote] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [lote, setLote] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [modo, setModo] = useState('analise'); // 'analise' | 'criacao'
  const [checklist, setChecklist] = useState(checklistInicial());
  const [modalChecklistAberto, setModalChecklistAberto] = useState(false);
  const [desvios, setDesvios] = useState([]);
  const [desvioEditando, setDesvioEditando] = useState(null);
  // Wave 1.1 — Amostras de Retenção. Estado local; em produção a API
  // grava direto na base do Estoque de Retenção (acessivel pela tela
  // gerencial /qual-amostras).
  const [amostras, setAmostras] = useState([]);
  // Wave 2.5 — Anexos do Lote (Foto Etiqueta, Boletim LIMS, Dados Brutos).
  // Mapa { slot_key: { nome, tamanho, data } } — em produção vira upload
  // pro repositório de evidências (S3 / SharePoint). Foto Etiqueta e
  // Boletim LIMS são obrigatórios → bloqueiam liberação.
  const [anexos, setAnexos] = useState({});

  // Quando aberta a partir da Fila (/qual-fila) com ?lote=<PA>,
  // mostramos um botao "Voltar para Fila" no header.
  const veioDaFila = !!searchParams.get('lote');

  // Auto-carrega o lote vindo via URL (?lote=262417) — usado pela Fila
  // de Reconciliacoes ao clicar numa linha pronta.
  useEffect(() => {
    const loteParam = searchParams.get('lote');
    if (loteParam && loteParam !== numeroLote) {
      buscarLote(loteParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const abrirGenealogia = (chaveArea) => {
    const params = new URLSearchParams();
    if (lote?.lotePA) params.set('lote', lote.lotePA);
    if (chaveArea) params.set('area', chaveArea);
    navigate('/dash-genealogia?' + params.toString());
  };

  const novaReconciliacao = () => {
    const numero = gerarNumeroReconciliacao();
    setNumeroLote('NOVO-' + numero);
    setLote(loteTemplate(numero));
    setAmostras([]);
    setAnexos({});
    setModo('criacao');
    setErro('');
    setMensagem('🆕 Nova Reconciliação iniciada — Nº ' + numero + ' (gerado via integração JDE).');
  };

  const buscarLote = (valor) => {
    // valor opcional: quando vem do clique na linha da fila, usamos
    // direto o lote PA (ja sabemos que existe). Quando vem do botao
    // "Buscar", usamos o que esta no input.
    const alvo = (valor != null ? String(valor) : numeroLote).trim();
    setErro('');
    setMensagem('');
    if (!alvo) {
      setErro('Informe o Nº do Lote PA para iniciar a análise.');
      return;
    }
    if (valor != null) setNumeroLote(alvo); // sincroniza o input
    setCarregando(true);
    setModo('analise');
    setTimeout(() => {
      const key = alvo.replace(/[^0-9]/g, '');
      const dados = BASE_MOCK[key];
      if (!dados) {
        setErro(`Lote PA "${alvo}" não encontrado ou ainda não finalizou a etapa de embalagem.`);
        setLote(null);
        setAmostras([]);
        setAnexos({});
      } else {
        setLote(JSON.parse(JSON.stringify(dados)));
        // Mock seed: lotes conhecidos já vêm com amostras coletadas
        // do envase (Início/Meio/Fim + Micro + FQ).
        setAmostras(MOCK_AMOSTRAS[key] || []);
        // Mock seed dos anexos — em produção vem do repositório.
        setAnexos(MOCK_ANEXOS[key] || {});
        // Sincroniza flag de Ordem Parcial vinda do JDE com o
        // checklist (Anexo 2 do POP-GQV-0009) — afeta a obrigatoriedade
        // de amostras Início/Meio/Fim.
        setChecklist((c) => ({ ...c, ordemParcial: !!dados.ordemParcial }));
      }
      setCarregando(false);
    }, 400);
  };

  const atualizarArea = (chave, novoValor) => {
    setLote((prev) => ({ ...prev, areas: { ...prev.areas, [chave]: novoValor } }));
  };

  // Para liberar pro CED, areas precisam estar APROVADO ou NA (nenhuma pendente)
  // E o checklist precisa estar 100% preenchido (todo item concluido ou na).
  const todasAprovadas = lote && Object.values(lote.areas).every((a) => a.status === 'APROVADO' || a.status === 'NA');
  const algumaReprovada = lote && Object.values(lote.areas).some((a) => a.status === 'REPROVADO');

  // Checklist completo = todos os 12 itens estao 'concluido' ou 'na'.
  const checklistTotal = CHECKLIST_ITENS.length;
  const checklistMarcados = Object.values(checklist.itens).filter((s) => s === 'concluido' || s === 'na').length;
  const checklistCompleto = checklistMarcados === checklistTotal;

  // Desvios abertos (qualquer estado != tratado/fechado) bloqueiam a liberacao.
  const desviosAbertos = desvios.filter((d) => d.status !== 'tratado' && d.status !== 'fechado');
  const desviosBloqueando = desviosAbertos.length > 0;

  // Wave 2.5 — Anexos obrigatórios faltando bloqueiam a liberação.
  const anexosObrigatorios = ['foto_etiqueta', 'boletim_lims'];
  const anexosFaltando = anexosObrigatorios.filter((k) => !anexos[k]);
  const anexosBloqueando = anexosFaltando.length > 0;

  const podeLiberar = todasAprovadas && checklistCompleto && !desviosBloqueando && !anexosBloqueando;

  const liberarParaCED = () => {
    if (anexosBloqueando) {
      const nomes = anexosFaltando.map((k) => k === 'foto_etiqueta' ? 'Foto da Etiqueta' : 'Boletim LIMS').join(' e ');
      setMensagem(`⚠ Anexo obrigatório faltando: ${nomes}. Anexe antes de liberar para o CED.`);
      return;
    }
    if (!checklistCompleto) {
      setMensagem(`⚠ Preencha o Checklist de Reconciliação (POP-GQV-0009) antes de liberar. Itens marcados: ${checklistMarcados}/${checklistTotal}.`);
      return;
    }
    if (desviosBloqueando) {
      setMensagem(`⚠ Existe(m) ${desviosAbertos.length} registro(s) de correção em aberto. Trate todos antes de liberar para o CED.`);
      return;
    }
    setMensagem(`✓ Lote ${numeroLote.toUpperCase()} liberado para o CED em ${new Date().toLocaleString('pt-BR')}. Status atualizado para "L — Liberado".`);
  };
  const reprovarLote = () => {
    setMensagem(`✗ Lote ${numeroLote.toUpperCase()} REPROVADO em ${new Date().toLocaleString('pt-BR')}. Status atualizado para "R — Reprovado". Encaminhar para destruição.`);
  };

  // ─── Handlers de Desvio ────────────────────────────────────
  const abrirNovoDesvio = () => {
    setDesvioEditando(desvioTemplate());
  };
  const editarDesvio = (desvio) => {
    setDesvioEditando({ ...desvio });
  };
  const tratarDesvio = (desvio) => {
    setDesvios((prev) => prev.map((d) => d.id === desvio.id ? { ...d, status: 'tratado' } : d));
    setMensagem(`✓ Registro ${desvio.numero} marcado como TRATADO.`);
  };
  const removerDesvio = (id) => {
    setDesvios((prev) => prev.filter((d) => d.id !== id));
  };
  const salvarDesvio = () => {
    if (!desvioEditando) return;
    if (desvioEditando.id) {
      // edicao
      setDesvios((prev) => prev.map((d) => d.id === desvioEditando.id ? desvioEditando : d));
    } else {
      // novo
      setDesvios((prev) => [...prev, { ...desvioEditando, id: Date.now() }]);
    }
    setDesvioEditando(null);
  };

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Qualidade · CQ · ERU 6.1.x — Reconciliação Técnica</div>
          <div className="ph-title" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            Reconciliação Técnica & Liberação de Lote
            {lote && checklist.ordemParcial && (
              <span
                className="bdg"
                style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
                  background: 'var(--inf-p)', color: 'var(--inf)',
                  border: '1.5px solid var(--inf-b)',
                  padding: '3px 9px', borderRadius: 10,
                }}
                title="Lote produzido em ordens parciais (dividido em N OFs). Amostras de retenção Início/Meio/Fim são opcionais."
              >
                🧩 Ordem Parcial
              </span>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {veioDaFila && (
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => navigate('/qual-fila')}
              style={{ borderColor: 'var(--ouro)', color: 'var(--ouro)', fontWeight: 700 }}
              title="Voltar para a Fila de Reconciliações"
            >
              ← Voltar para Fila
            </button>
          )}
          <div style={{ textAlign: 'right', fontFamily: 'var(--font-m)', fontSize: 10, color: 'var(--text2)', lineHeight: 1.6 }}>
            Tela [JPD920-CQ]<br />
            <span style={{ color: 'var(--verde)', fontWeight: 700 }}>Bárbara C. O. Peixoto</span>
          </div>
        </div>
      </div>

      {/* Bloco de busca */}
      <div className="card cv mb14" style={{ padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 280, maxWidth: 460 }}>
            <label className="lbl" style={{ fontWeight: 700 }}>
              Nº Lote PA (Produto Acabado) <span style={{ color: 'var(--per)' }}>*</span>
            </label>
            <input
              className="inp"
              type="text"
              value={numeroLote}
              onChange={(e) => setNumeroLote(e.target.value)}
              placeholder="Ex.: 262417, 261892, 261104"
              onKeyDown={(e) => e.key === 'Enter' && buscarLote()}
              style={{ fontFamily: 'var(--font-m)', fontSize: 14 }}
            />
            <span style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>
              Mesmo Lote PA usado no Dossiê de Genealogia. Indica que Fabricação e Embalagem foram concluídas.
            </span>
          </div>
          <button
            className="btn btn-md btn-v"
            onClick={() => buscarLote()}
            disabled={carregando}
            style={{ minWidth: 130 }}
          >
            {carregando ? 'Buscando…' : '🔍 Buscar Lote'}
          </button>
          <button
            className="btn btn-md btn-ghost"
            onClick={() => { setNumeroLote(''); setLote(null); setAmostras([]); setAnexos({}); setErro(''); setMensagem(''); setModo('analise'); }}
          >
            Limpar
          </button>
          <div style={{ width: 1, height: 36, background: 'var(--border)', margin: '0 4px' }} />
          <button
            className="btn btn-md"
            onClick={novaReconciliacao}
            style={{
              minWidth: 200,
              background: 'var(--ouro)',
              color: '#fff',
              borderColor: 'var(--ouro)',
            }}
            title="Cria uma nova reconciliação com número gerado pelo JDE"
          >
            + Nova Reconciliação
          </button>
        </div>

        {erro && (
          <div className="abox err" style={{ marginTop: 12 }}>
            <span className="ai">⚠</span>
            <div>{erro}</div>
          </div>
        )}

        {mensagem && (
          <div
            className={`abox ${mensagem.startsWith('✓') ? 'ok' : 'err'}`}
            style={{ marginTop: 12 }}
          >
            <span className="ai">{mensagem.startsWith('✓') ? '✅' : '⛔'}</span>
            <div>{mensagem}</div>
          </div>
        )}
      </div>

      {/* Lote carregado */}
      {lote && (
        <>
          {/* Banner de modo Criação */}
          {modo === 'criacao' && (
            <div className="abox warn mb14" style={{ borderTopWidth: 3, borderTopStyle: 'solid', borderTopColor: 'var(--ouro)' }}>
              <span className="ai">🆕</span>
              <div>
                <strong>Modo Criação — Nova Reconciliação Nº {lote.numeroReconciliacao}</strong>
                {' · '}gerado pela integração JDE. Preencha os dados de identificação e as 4 áreas de análise antes de liberar.
              </div>
            </div>
          )}

          {/* Identificação */}
          <div className="card mb14" style={{ padding: 16 }}>
            <div className="card-title" style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
              <span>Identificação do Lote</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {modo === 'criacao' && (
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ouro)' }}>
                    ✏️ Editável (modo criação)
                  </span>
                )}
                {lote.lotePA && (
                  <button
                    type="button"
                    onClick={() => abrirGenealogia()}
                    className="btn btn-sm btn-ghost"
                    style={{ fontSize: 10, borderColor: 'var(--verde)', color: 'var(--verde)' }}
                    title={`Abrir Dossiê de Genealogia do Lote PA ${lote.lotePA}`}
                  >
                    🧬 Ver Dossiê de Genealogia (Lote PA {lote.lotePA})
                  </button>
                )}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              <Campo label="Nº Reconciliação" value={lote.numeroReconciliacao} />
              <Campo label="Filial / Fábrica" value={lote.filial} />
              <Campo label="Produto Acabado" value={lote.produtoAcabado} />
              <Campo label="Granel" value={lote.granel} />
              <Campo label="Lote PA" value={lote.lotePA} obrigatorio />
              <CampoSelect
                label="Status do Lote"
                value={lote.statusLote}
                opcoes={STATUS_LOTE_OPCOES}
                onChange={(v) => setLote({ ...lote, statusLote: v })}
                obrigatorio
              />
              <Campo label="Data Fabricação" value={lote.dataFabricacao} />
              <Campo label="Data Validade" value={lote.dataValidade} />
              <Campo label="Status Reconciliação" value={lote.statusReconciliacao} />
              <Campo label="Status Documentação" value={lote.statusDocumentacao} />
            </div>

            {/* ── Multibatch: N granéis fechando 1 PA ──────────
                Reunião GQV/CQ 12/05/2026, Carlos Lima @22:41 —
                "aqui na fábrica a gente tem uma coisa que a gente
                chama de multibatch". O cabeçalho não pode mais
                exibir um único Lote Granel — precisa listar todos
                os granéis (cada um com sua WO e peso) que
                contribuíram para o lote PA. */}
            <MultibatchBlock granelLotes={lote.granelLotes || []} loteGranelLegacy={lote.loteGranel} />
          </div>

          {/* Grid 2x2 das 4 áreas */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: 14, marginBottom: 14 }}>
            <CardArea
              chave="fabricacao"
              dados={lote.areas.fabricacao}
              indicadores={[
                { label: 'Rend. Teórico', value: lote.areas.fabricacao.rendimentoTeorico },
                { label: 'Rend. Real',    value: lote.areas.fabricacao.rendimentoReal },
                { label: 'Perda',         value: lote.areas.fabricacao.perda },
              ]}
              onUpdate={(novo) => atualizarArea('fabricacao', novo)}
              onAbrirGenealogia={() => abrirGenealogia('fabricacao')}
            />
            <CardArea
              chave="embalagem"
              dados={lote.areas.embalagem}
              indicadores={[
                { label: 'Un. Planejadas', value: lote.areas.embalagem.unidadesPlanejadas },
                { label: 'Un. Produzidas', value: lote.areas.embalagem.unidadesProduzidas },
                { label: 'Perda',          value: lote.areas.embalagem.perda },
              ]}
              onUpdate={(novo) => atualizarArea('embalagem', novo)}
              onAbrirGenealogia={() => abrirGenealogia('embalagem')}
            />
            <CardArea
              chave="fisicoQuimico"
              dados={lote.areas.fisicoQuimico}
              indicadores={[
                { label: 'pH',        value: lote.areas.fisicoQuimico.ph },
                { label: 'Umidade',   value: lote.areas.fisicoQuimico.umidade },
                { label: 'Densidade', value: lote.areas.fisicoQuimico.densidade },
              ]}
              onUpdate={(novo) => atualizarArea('fisicoQuimico', novo)}
              onAbrirGenealogia={() => abrirGenealogia('fisicoQuimico')}
            />
            <CardArea
              chave="microbiologia"
              dados={lote.areas.microbiologia}
              indicadores={[
                { label: 'Contagem Total',  value: lote.areas.microbiologia.contagemTotal },
                { label: 'Bolor / Levedura',value: lote.areas.microbiologia.bolorLevedura },
                { label: 'Patógenos',       value: lote.areas.microbiologia.patogenos },
              ]}
              onUpdate={(novo) => atualizarArea('microbiologia', novo)}
              onAbrirGenealogia={() => abrirGenealogia('microbiologia')}
            />
          </div>

          {/* ── Wave 2.5 — Anexos do Lote ──────────────── */}
          <AnexosCard anexos={anexos} setAnexos={setAnexos} ordemParcial={checklist.ordemParcial} />

          {/* ── Wave 1.1 — Amostras de Retenção ─────────── */}
          <AmostrasRetencaoCard
            amostras={amostras}
            setAmostras={setAmostras}
            ordemParcial={checklist.ordemParcial}
          />

          {/* ── Registros de Correção do Lote ──────────────
              (Renomeado de "Desvios" em 14/05/2026 — reunião GQV/CQ.
              "Desvio" tem peso regulatório forte; o que se abre na
              reconciliação são correções documentais/operacionais
              menores. "Desvio formal" mesmo vai pro CAPA/Trackwise.) */}
          <div
            className="card mb14"
            style={{
              padding: 14,
              borderTop: `3px solid ${desviosBloqueando ? 'var(--per)' : (desvios.length > 0 ? 'var(--ok)' : 'var(--border2)')}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 14, fontWeight: 800 }}>📝 Registros de Correção</span>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
                  color: 'var(--text3)', padding: '2px 6px',
                  border: '1px dashed var(--border2)', borderRadius: 8,
                }} title="Ocorrências internas tratadas na reconciliação. Desvios formais com impacto GxP migram para CAPA/Trackwise.">
                  ocorrência interna
                </span>
                {desvios.length > 0 && (
                  <>
                    <span className="bdg" style={{ fontSize: 10, background: 'var(--surface2)', color: 'var(--text2)', border: '1px solid var(--border)' }}>
                      {desvios.length} no total
                    </span>
                    {desviosBloqueando && (
                      <span className="bdg bdg-per" style={{ fontSize: 10 }}>
                        ⛔ {desviosAbertos.length} em aberto · bloqueia liberação
                      </span>
                    )}
                    {!desviosBloqueando && (
                      <span className="bdg bdg-ok" style={{ fontSize: 10 }}>
                        ✓ Todos tratados
                      </span>
                    )}
                  </>
                )}
              </div>
              <button
                type="button"
                onClick={abrirNovoDesvio}
                className="btn btn-sm"
                style={{
                  background: 'var(--per-p)', color: 'var(--per)',
                  border: '1.5px solid var(--per-b)',
                  fontWeight: 700, fontSize: 12,
                }}
              >
                + Novo Registro de Correção
              </button>
            </div>

            {desvios.length === 0 ? (
              <div
                style={{
                  padding: '14px',
                  background: 'var(--surface2)',
                  border: '1px dashed var(--border2)',
                  borderRadius: 6,
                  textAlign: 'center',
                  fontSize: 11,
                  color: 'var(--text3)',
                }}
              >
                Nenhum registro de correção aberto para este lote.{' '}
                <button
                  onClick={abrirNovoDesvio}
                  style={{ background: 'none', border: 'none', color: 'var(--per)', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', fontSize: 11 }}
                >
                  Abrir um novo registro
                </button>{' '}
                se identificar alguma ocorrência durante a análise.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {desvios.map((d) => (
                  <DesvioCard
                    key={d.id}
                    desvio={d}
                    onEdit={editarDesvio}
                    onTratar={tratarDesvio}
                    onRemover={removerDesvio}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Resumo + Ações finais */}
          <div className="card co" style={{ padding: 16, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center', borderTop: '3px solid var(--ouro-claro)' }}>
            <div style={{ minWidth: 280 }}>
              <div className="card-title" style={{ marginBottom: 8, padding: 0, border: 'none' }}>Resumo da Análise</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                <ResumoItem label="Fabricação"     status={lote.areas.fabricacao.status} />
                <ResumoItem label="Embalagem"      status={lote.areas.embalagem.status} />
                <ResumoItem label="Físico-Químico" status={lote.areas.fisicoQuimico.status} />
                <ResumoItem label="Microbiologia"  status={lote.areas.microbiologia.status} />
              </div>

              {/* Botao do Checklist */}
              <button
                type="button"
                onClick={() => setModalChecklistAberto(true)}
                className="btn btn-md"
                style={{
                  background: checklistCompleto ? 'var(--ok-p)' : 'var(--surface2)',
                  border: `1.5px solid ${checklistCompleto ? 'var(--ok-b)' : 'var(--ouro-claro)'}`,
                  color: checklistCompleto ? 'var(--ok)' : 'var(--ouro)',
                  fontWeight: 700, fontSize: 12,
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%',
                }}
              >
                <span style={{ fontSize: 18 }}>{checklistCompleto ? '✅' : '📋'}</span>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div>{checklistCompleto ? 'Checklist Completo' : 'Checklist de Reconciliação'}</div>
                  <div style={{ fontSize: 9, fontWeight: 500, opacity: 0.85 }}>
                    POP-GQV-0009/05 · Anexo 2 · {checklistMarcados}/{checklistTotal} itens
                  </div>
                </div>
                <span style={{ fontSize: 16 }}>›</span>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              <button
                className="btn btn-lg btn-v"
                onClick={liberarParaCED}
                disabled={!podeLiberar}
                style={{
                  opacity: podeLiberar ? 1 : 0.5,
                  cursor: podeLiberar ? 'pointer' : 'not-allowed',
                  minWidth: 230,
                }}
                title={
                  !todasAprovadas
                    ? 'Todas as áreas precisam estar APROVADAS ou N/A'
                    : anexosBloqueando
                    ? `Faltam ${anexosFaltando.length} anexo(s) obrigatório(s)`
                    : !checklistCompleto
                    ? 'Preencha o Checklist de Reconciliação antes de liberar'
                    : desviosBloqueando
                    ? `Trate os ${desviosAbertos.length} registro(s) de correção em aberto antes de liberar`
                    : 'Liberar lote para o CED'
                }
              >
                ✓ Liberar para o CED
              </button>
              <button
                className="btn btn-md btn-p"
                onClick={reprovarLote}
                disabled={!algumaReprovada}
                style={{
                  opacity: algumaReprovada ? 1 : 0.5,
                  cursor: algumaReprovada ? 'pointer' : 'not-allowed',
                  minWidth: 230,
                }}
              >
                ✗ Reprovar Lote
              </button>
              <div style={{ fontSize: 10, color: 'var(--text3)', textAlign: 'right', maxWidth: 230, lineHeight: 1.5 }}>
                {podeLiberar
                  ? '✓ Pronto para liberar — áreas + anexos + checklist + correções OK.'
                  : !todasAprovadas
                  ? 'Liberação habilita quando as 4 áreas estão APROVADAS ou N/A.'
                  : anexosBloqueando
                  ? `Falta(m) ${anexosFaltando.length} anexo(s) obrigatório(s).`
                  : !checklistCompleto
                  ? 'Falta o Checklist de Reconciliação.'
                  : `${desviosAbertos.length} registro(s) em aberto — trate antes de liberar.`}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal Checklist de Reconciliação (POP-GQV-0009/05 — Anexo 2) */}
      {modalChecklistAberto && (
        <ChecklistModal
          checklist={checklist}
          setChecklist={setChecklist}
          onClose={() => setModalChecklistAberto(false)}
          lote={lote}
          marcados={checklistMarcados}
          total={checklistTotal}
        />
      )}

      {/* Modal Desvio (novo / editar) */}
      {desvioEditando && (
        <DesvioModal
          desvio={desvioEditando}
          setDesvio={setDesvioEditando}
          onSalvar={salvarDesvio}
          onClose={() => setDesvioEditando(null)}
        />
      )}

      {/* Dica para o usuario quando nao ha lote carregado */}
      {!lote && !erro && (
        <div
          style={{
            padding: '12px 14px',
            background: 'var(--inf-p)',
            border: '1px solid var(--inf-b)',
            borderRadius: 6,
            color: 'var(--inf)',
            fontSize: 12,
            display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: 18 }}>💡</span>
          <span style={{ flex: 1, minWidth: 220 }}>
            Informe o Nº Lote PA no campo acima para iniciar a análise — ou
            abra a tela <strong>Fila de Reconciliações</strong> para selecionar um
            lote pronto diretamente da lista.
          </span>
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => navigate('/qual-fila')}
            style={{ borderColor: 'var(--inf)', color: 'var(--inf)', fontWeight: 700 }}
          >
            📋 Ir para Fila →
          </button>
        </div>
      )}
    </div>
  );
}

function ResumoItem({ label, status }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
      <span style={{ color: 'var(--text2)', fontWeight: 600, minWidth: 110 }}>{label}:</span>
      <StatusPill status={status} />
    </div>
  );
}
