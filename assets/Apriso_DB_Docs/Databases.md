# Databases

DELMIA Apriso utiliza quatro tipos principais de banco de dados:

## Operational

Armazena dados de produção vinculados a uma instância específica do DELMIA Apriso.

## Solution Authoring

Contém entidades de autoria de solução, como projetos PB, telas, DFCs e configurações de determinação. "The data is easily transferable between servers and usually does not change during production execution."

## Localization Repository

Armazena literais exibidos na maioria das telas do sistema.

## Archiving

Possui estrutura idêntica ao banco Operational, porém sem relacionamentos de chave estrangeira entre tabelas. Os dados são copiados do banco Operational através do framework de arquivamento.

## Banco MODEL

Fornecido pela Dassault Systèmes com a instalação:

**MODEL data**: Contém dados iniciais para início rápido, incluindo funcionários, instalações, produtos e localizações de exemplo.

**PRIME data**: "This is a clean database that has to receive some customer content to be ready to go in production." Possui um único usuário, sem instalações ou produtos pré-configurados. A Dassault Systèmes pode atualizar dados PRIME, mas dados INIT são inseridos apenas uma vez e nunca atualizados após criação.
