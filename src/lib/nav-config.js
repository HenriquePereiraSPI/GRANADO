/**
 * Estrutura do menu lateral. Cada item tem um `id` (path da rota) e um `label`.
 * Aliases sao resolvidos no router (rel-sinotico -> sinotico, rel-andon -> prod-chamados).
 */

export const TOP_LINKS = [
  { id: 'sinotico', label: 'Sinotico da Fabrica', icon: '🗺️' },
];

export const MODULES = [
  {
    id: 'mod-pes',
    label: 'Pesagem',
    icon: '⚖️',
    items: [
      // Subtelas operacionais (pes-cockpit, pes-mps, pes-pendencias,
      // pes-checklist, pes-gaiola, pes-devol-mp, pes-checkout) foram
      // movidas pra DENTRO de pes-ordens — só ficam acessiveis depois
      // que o usuario seleciona uma ordem na fila de pesagem.
      { id: 'pes-ordens',          label: 'Selecao de Ordem' },
      { id: 'pes-checklist-turno', label: '🧪 Checklist' },
      { id: 'pes-oee',             label: '📊 OEE Pesagem' },
      { id: 'pes-perf-ordem',      label: '📑 Performance (Ordem)' },
      { id: 'pes-perf-mp',         label: '⚗️ Performance (MP)' },
      { id: 'pes-perf-operador',   label: '📈 Performance (Operador)' },
      { id: 'pes-perf-gestao',     label: '👔 Performance Gestao' },
      { id: 'pes-rastr',           label: '📋 Rastreabilidade' },
    ],
  },
  {
    id: 'mod-fab',
    label: 'Fabricacao',
    icon: '🧪',
    items: [
      // "Iniciar Ordem" virou um popup (acionado em fab-ordens) e as
      // sub-telas da ordem (fab-inbatch/checkin/tanque/amostras/fechar)
      // foram movidas pra DENTRO da ordem — so ficam acessiveis depois
      // de iniciar (contexto com ?op=), via a sub-navbar.
      { id: 'fab-ordens',      label: 'Selecao de Ordens' },
      { id: 'fab-rastr',       label: '📋 Rastreabilidade' },
      { id: 'fab-saldo',       label: '🛢️ Saldo de Equipamentos' },
    ],
  },
  {
    id: 'mod-prod',
    label: 'Producao',
    icon: '🏭',
    items: [
      // Subtelas da ordem (prod-cockpit, prod-materiais, prod-paradas,
      // prod-qualidade, prod-docs, prod-devol) foram movidas pra DENTRO
      // da ordem — so ficam acessiveis depois de iniciar a ordem
      // (contexto com ?op=), via a sub-navbar.
      { id: 'prod-ordens',     label: 'Ordens de Producao' },
      { id: 'prod-checkin',    label: '👷 Check-in de Operadores' },
      { id: 'prod-rastr',      label: '📋 Rastreabilidade' },
    ],
  },
  {
    id: 'mod-qual',
    label: 'Qualidade',
    icon: '🔬',
    items: [
      // Subtelas da reconciliacao (qual-reconciliacao, qual-amostras,
      // dash-genealogia) foram movidas pra DENTRO da Fila — so ficam
      // acessiveis via "Entrar" numa linha (contexto com ?lote=).
      { id: 'qual-fila',             label: '📋 Fila de Reconciliacoes' },
      { id: 'qual-correcoes-gestao', label: '📈 Dashboard de Correcoes 🔒' },
    ],
  },
  {
    id: 'mod-manut',
    label: 'Manutencao',
    icon: '🔧',
    items: [
      { id: 'manut-paradas', label: '📦 Gerenciamento Ativos' },
    ],
  },
  {
    id: 'mod-rel',
    label: 'Relatorios',
    icon: '📈',
    items: [
      // NOTA: rel-sinotico foi removido daqui — e um alias para /sinotico, que
      // ja existe como TOP_LINK; mante-lo aqui causaria duplo-active na sidebar.
      // "Chamados Andon" aponta DIRETO para a rota /prod-chamados (e nao para o
      // alias /rel-andon) justamente para evitar esse duplo-active.
      { id: 'prod-chamados',    label: '🚨 Chamados Andon' },
      { id: 'rel-oee',          label: '📊 OEE Dashboard' },
      { id: 'rel-visao-ordens', label: '📋 Visao de Ordens' },
      { id: 'rel-mps',          label: '⚖️ Rel. MPs Pesadas' },
      { id: 'rel-producao',     label: '🏭 Rel. Producao' },
      { id: 'rel-rastr',        label: '🔍 Rastreabilidade de Lote' },
      { id: 'rel-rejeitos',     label: '♻️ Rejeitos e Aparas' },
      { id: 'rel-perdas',       label: '📉 Perdas de Processo' },
      { id: 'rel-paradas',      label: '⏸️ Paradas e Disponib.' },
      { id: 'rel-autonomia',    label: '📦 Autonomia de Linhas' },
      { id: 'rel-insumos',      label: '🧪 Perdas por Insumo' },
      { id: 'rel-devolucao',    label: '↩️ Devolucao de Materiais' },
      { id: 'rel-auditoria',    label: '🔒 Trilha de Auditoria' },
    ],
  },
];

/**
 * Mapa id -> "Modulo > Item" para o breadcrumb.
 */
export const BREADCRUMBS = (() => {
  const map = {};
  for (const t of TOP_LINKS) map[t.id] = t.label;
  for (const m of MODULES) {
    for (const it of m.items) map[it.id] = `${m.label} › ${it.label.replace(/^[^\w]+\s*/u, '')}`;
  }
  return map;
})();

/**
 * Aliases originais do nav legado.
 */
export const ALIASES = {
  'rel-sinotico': 'sinotico',
  'rel-andon': 'prod-chamados',
};

/**
 * Mapa id -> id do modulo pai (pra abrir o sub-menu correto na sidebar).
 */
export const PARENT_MODULE = (() => {
  const map = {};
  for (const m of MODULES) {
    for (const it of m.items) map[it.id] = m.id;
  }
  return map;
})();
