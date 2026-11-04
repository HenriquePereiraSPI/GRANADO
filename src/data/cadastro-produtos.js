/**
 * Mock do Cadastro de Produto. Criacoes, edicoes e exclusoes alteram PRODUTOS,
 * entao sobrevivem a troca de tela, mas somem ao recarregar a pagina (nao ha
 * API de produto ainda).
 */

export const UNIDADES = ['KG', 'G', 'L', 'ML', 'UN', 'CX'];

// Mesmo formato de uomConversions do JSON de produto (docs/EXPORT_PRODUCT_WS.sql).
const CONVERSOES = {
  KG: [{ UOMFrom: 'KG', UOMTo: 'G', Factor: 1000 }, { UOMFrom: 'G', UOMTo: 'KG', Factor: 0.001 }],
  UN: [{ UOMFrom: 'CX', UOMTo: 'UN', Factor: 12 }],
};

const produto = (ProductNo, ProductDescription, UOMCode, CycleTimeSeconds, Active, CreatedBy, CreatedOn, ModifiedOn) => ({
  ProductNo, ProductDescription, UOMCode, CycleTimeSeconds, Active, CreatedBy, CreatedOn, ModifiedOn, uomConversions: CONVERSOES[UOMCode],
});

// Exemplos para encher a tabela: cada linha em cada fragrancia e tamanho.
const LINHAS = [
  ['Sab. Glicerinado', ['90g', '120g', '180g']],
  ['Sab. Líquido', ['200ml', '300ml', '500ml']],
  ['Creme Hidratante', ['50g', '120g', '200g']],
  ['Loção Corporal', ['200ml', '300ml', '500ml']],
  ['Shampoo', ['200ml', '300ml', '1L']],
  ['Condicionador', ['200ml', '300ml', '1L']],
];
const FRAGRANCIAS = ['Lavanda', 'Erva Doce', 'Flor de Laranjeira', 'Alecrim', 'Verbena', 'Cedro'];
const AUTORES = ['M. Oliveira', 'J. Santos', 'Kaic Lima'];
const dois = (n) => String(n).padStart(2, '0');

const GERADOS = LINHAS
  .flatMap(([nome, tamanhos]) => FRAGRANCIAS.flatMap((f) => tamanhos.map((t) => `${nome} ${f} ${t}`)))
  .map((descricao, i) => {
    const mes = dois((i % 10) + 1);
    const dia = (i % 25) + 1;
    const criado = `2026-${mes}-${dois(dia)}T09:${dois(i % 60)}:00`;
    const modificado = i % 3 === 0 ? criado : `2026-${mes}-${dois(dia + 3)}T15:${dois(i % 60)}:00`;
    return produto(`P${30001 + i}`, descricao, 'UN', (i % 5) + 2, i % 9 !== 8, AUTORES[i % 3], criado, modificado);
  });

export const PRODUTOS = [
  produto('708316', 'ACIDO SALICILICO', 'KG', 120, true, 'M. Oliveira', '2026-01-12T08:30:00', '2026-01-12T08:30:00'),
  produto('711970', 'DEHYQUART A', 'KG', 150, true, 'M. Oliveira', '2026-01-12T08:42:00', '2026-03-05T14:10:00'),
  produto('M9651', 'EXTRATO CALÊNDULA', 'KG', 90, true, 'J. Santos', '2026-02-03T10:15:00', '2026-02-03T10:15:00'),
  produto('M50416', 'ALANTOINA PREMIUM', 'KG', 75, false, 'J. Santos', '2026-02-03T10:27:00', '2026-08-19T16:45:00'),
  produto('G10021', 'Granel Sabonete Glicerinado', 'KG', 300, true, 'Kaic Lima', '2026-03-18T09:05:00', '2026-06-22T11:30:00'),
  produto('G10034', 'Granel Sabonete Verbena', 'KG', 280, true, 'Kaic Lima', '2026-03-18T09:20:00', '2026-03-18T09:20:00'),
  produto('P20090', 'Sab. Glicerinado Tradicional 90g', 'UN', 2, true, 'M. Oliveira', '2026-04-07T13:40:00', '2026-09-02T08:55:00'),
  produto('P20091', 'Sab. Glicerinado Cedro 90g', 'UN', 2, false, 'J. Santos', '2026-04-07T13:52:00', '2026-10-14T17:20:00'),
  ...GERADOS,
];
