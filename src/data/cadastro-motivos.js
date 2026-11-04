/**
 * Mock do Cadastro de Motivos — formato de ReasonCodes[] da GRD_API_GetReasonCode
 * mais Active, CreatedOn e ModifiedOn (a API ainda nao retorna esses tres). Criacoes, edicoes e exclusoes alteram MOTIVOS, entao sobrevivem a
 * troca de tela, mas somem ao recarregar a pagina (nao ha API de escrita ainda).
 */

export const CATEGORIAS = [
  'Programado', 'Sistemas', 'Manutenção', 'Materia Prima',
  'Impressora', 'Coletor', 'Operacional', 'Controle de Qualidade',
];

export const TIPOS = {
  23: { desc: 'Planned Downtime', label: 'Programada', badge: 'bdg-inf' },
  24: { desc: 'Unplanned Downtime', label: 'Não programada', badge: 'bdg-alr' },
};

export const FACILITIES = ['Pesagem', 'Fabricação', 'Produção'];

const motivo = (ReasonCode, ReasonCodeDesc, Categoria, ReasonType, Facility) => ({
  ReasonCode, Code: '', ReasonCodeDesc, Categoria, ReasonType, TipoDesc: TIPOS[ReasonType].desc, Facility,
});

// Exemplos para encher a tabela: cada tipo de parada em cada local.
const LOCAIS = {
  Pesagem: ['Box 1', 'Box 2', 'Box 3', 'Box 4'],
  Fabricação: ['Tanque 1', 'Tanque 2', 'Tanque 3', 'Tanque 4'],
  Produção: ['Linha 1', 'Linha 2', 'Linha 3', 'Linha 4'],
};
const PARADAS = [
  ['Manut Corretiva', 'Manutenção corretiva', 'Manutenção', '24'],
  ['Manut Preventiva', 'Manutenção preventiva', 'Manutenção', '23'],
  ['Limpeza', 'Limpeza programada', 'Programado', '23'],
  ['Setup', 'Preparação para a próxima ordem', 'Operacional', '23'],
  ['Falta de Operador', 'Sem operador disponível', 'Operacional', '24'],
  ['Falha de Sistema', 'MES indisponível', 'Sistemas', '24'],
  ['Espera CQ', 'Aguardando liberação do Controle de Qualidade', 'Controle de Qualidade', '24'],
  ['Falta de Material', 'Material indisponível', 'Materia Prima', '24'],
];
const GERADOS = Object.entries(LOCAIS).flatMap(([area, locais]) => locais.flatMap((local) => (
  PARADAS.map(([nome, desc, categoria, tipo]) => motivo(`${nome} ${local}`, `${desc} (${local})`, categoria, tipo, area))
)));

const dois = (n) => String(n).padStart(2, '0');

// Ativo e datas de exemplo, derivados da posicao para serem sempre os mesmos.
const comAtivoEDatas = (m, i) => {
  const mes = dois((i % 10) + 1);
  const dia = (i % 25) + 1;
  const criado = `2026-${mes}-${dois(dia)}T08:${dois(i % 60)}:00`;
  return {
    ...m,
    Active: i % 9 !== 8,
    CreatedOn: criado,
    ModifiedOn: i % 3 === 0 ? criado : `2026-${mes}-${dois(dia + 3)}T14:${dois(i % 60)}:00`,
  };
};

export const MOTIVOS = [
  motivo('Refeicao', 'Parada para Refeição', 'Programado', '23', 'Pesagem'),
  motivo('Falha Com Balanca', 'Falha de comunicação com a balança', 'Sistemas', '24', 'Pesagem'),
  motivo('Manut da balanca', 'Parada para manutenção da balança', 'Manutenção', '24', 'Pesagem'),
  motivo('Falta de MP', 'Matéria-prima indisponível para pesagem', 'Materia Prima', '24', 'Pesagem'),
  motivo('Falha na Impressora', 'Impressora de etiquetas sem comunicação', 'Impressora', '24', 'Pesagem'),
  motivo('Falha no Coletor', 'Coletor de dados sem resposta', 'Coletor', '24', 'Pesagem'),
  motivo('Limpeza de Sala', 'Limpeza programada da sala', 'Programado', '23', 'Fabricação'),
  motivo('Setup de Linha', 'Preparação da linha para a próxima ordem', 'Operacional', '23', 'Produção'),
  motivo('Aguardando CQ', 'Aguardando análise do Controle de Qualidade', 'Controle de Qualidade', '24', 'Produção'),
  ...GERADOS,
  { ReasonCode: 'Outros', Code: '', ReasonCodeDesc: 'Paradas' },
].map(comAtivoEDatas);
