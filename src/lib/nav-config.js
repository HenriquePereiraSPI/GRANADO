/**
 * Estrutura do menu lateral. Cada item tem um `id` (path da rota) e um `label`.
 * Aliases sao resolvidos no router (rel-sinotico -> sinotico, rel-andon -> prod-chamados).
 */

export const TOP_LINKS = [
  { id: 'sinotico', label: 'Sinotico da Fabrica', icon: '🗺️' },
  { id: 'oee', label: 'OEE Dashboard', icon: '📊' },
];

export const MODULES = [
  {
    id: 'mod-prod',
    label: 'Producao',
    icon: '🏭',
    items: [
      { id: 'prod-ordens',     label: 'Ordens de Producao' },
      { id: 'prod-materiais',  label: 'Materiais da OP' },
      { id: 'prod-checkin',    label: '👷 Check-in de Operadores' },
      { id: 'prod-iniciar',    label: 'Iniciar Ordem' },
      { id: 'prod-finalizar',  label: 'Finalizar Ordem' },
      { id: 'prod-paradas',    label: 'Paradas de Maquina' },
      { id: 'prod-cockpit',    label: 'Cockpit de Execucao' },
      { id: 'prod-qualidade',  label: 'Qualidade em Processo' },
      { id: 'prod-docs',       label: '📄 Documentos' },
      { id: 'prod-rastr',      label: '📋 Rastreabilidade' },
      { id: 'prod-sinotico',   label: '🏭 Sinotico da Fabrica' },
      { id: 'prod-devol',      label: 'Devolucao de Embalagens' },
    ],
  },
  {
    id: 'mod-pes',
    label: 'Pesagem',
    icon: '⚖️',
    items: [
      { id: 'pes-ordens',      label: 'Selecao de Ordem' },
      { id: 'pes-cockpit',     label: 'Cockpit de Pesagem' },
      { id: 'pes-mps',         label: 'MPs Pesadas' },
      { id: 'pes-pendencias',  label: 'Pendencias' },
      { id: 'pes-checklist',   label: 'Checklist Limpeza' },
      { id: 'pes-gaiola',      label: 'Gestao de Gaiola' },
      { id: 'pes-devol-mp',    label: 'Devolucao de MP' },
      { id: 'pes-checkout',    label: 'Checkout / Validacao' },
      { id: 'pes-rastr',       label: '📋 Rastreabilidade' },
    ],
  },
  {
    id: 'mod-fab',
    label: 'Fabricacao',
    icon: '🧪',
    items: [
      { id: 'fab-ordens',      label: '① Selecao de Ordens' },
      { id: 'fab-iniciar',     label: '② Iniciar Ordem' },
      { id: 'fab-checkin',     label: '③ Check-in de MPs' },
      { id: 'fab-inbatch',     label: '④ Fases InBatch' },
      { id: 'fab-amostras',    label: '⑤ Controle de Amostras' },
      { id: 'fab-tanque',      label: '⑥ Selecao de Tanque' },
      { id: 'fab-fechar',      label: '⑦ Fechamento da Ordem' },
      { id: 'fab-rastr',       label: '📋 Rastreabilidade' },
      { id: 'fab-saldo',       label: '🛢️ Saldo de Equipamentos' },
    ],
  },
  {
    id: 'mod-rel',
    label: 'Relatorios',
    icon: '📈',
    items: [
      // NOTA: rel-sinotico e rel-andon foram removidos daqui — sao aliases
      // (apontam para /sinotico e /prod-chamados respectivamente). O Sinotico
      // ja existe como TOP_LINK; os Chamados Andon estao no menu Producao.
      // Manter aqui causaria duplo-active na sidebar quando o usuario clicasse.
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
