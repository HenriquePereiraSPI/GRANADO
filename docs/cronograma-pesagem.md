# Cronograma de Desenvolvimento — Módulo Pesagem (MES Granado)

> Documento para Cowork. Estado atual: 11 telas + 7 modais já prototipados em
> mes-granado-react. Plano de execução: 4 sprints de 2 semanas (8 semanas
> totais) com 4 devs. Atualizado em 2026-05-06.

- Repositório: https://github.com/HenriquePereiraSPI/GRANADO
- Mockup HTML monolítico: `MES_Granado_v28_SinoticoMF.html`
- Telas extraídas: `src/legacy/screens.js`


## Sumário

1. [Equipe](#1-equipe)
2. [Telas do menu Pesagem (11 itens)](#2-telas-do-menu-pesagem-11-itens)
3. [Modais (3 reusáveis + 4 internos)](#3-modais-3-reusaveis--4-internos)
4. [Distribuição por Desenvolvedor](#4-distribuicao-por-desenvolvedor)
5. [Cronograma — 4 Sprints × 2 semanas](#5-cronograma--4-sprints--2-semanas)
6. [Integrações Externas](#6-integracoes-externas)
7. [Riscos e Mitigações](#7-riscos-e-mitigacoes)
8. [Definition of Done](#8-definition-of-done)
9. [Anexo · Mapa de Endpoints](#9-anexo--mapa-de-endpoints)


## 1. Equipe

| Dev | Função | Responsabilidades principais |
|---|---|---|
| **Winke** | Líder técnico (FE + BE) | Arquitetura, code review, POCs de risco (Toledo, ZPL, JDE), integrações críticas, mentoria dos estagiários, OEE engine |
| **Rodrigo** | Desenvolvedor pleno (FE + BE) | Cockpit de Pesagem (CORE), OEE FE, Checklist de Limpeza, telas com SVG charts |
| **Kaic** | Estagiário (FE + BE) | Telas auxiliares (Pendências, Rastreabilidade, Devolução), modais reusáveis, testes unitários |
| **Eduardo Leite** | Estagiário (FE + BE) | Telas de listagem (Planejamento, Seleção de Ordem, MPs Pesadas, Checkout) |

**Estratégia de mentoria**: cada estagiário pareia com um sênior (Kaic ↔ Rodrigo, Eduardo ↔ Winke) na primeira semana de cada sprint. Code review obrigatório do líder antes de merge.


## 2. Telas do menu Pesagem (11 itens)

### Resumo quantitativo (extraído do mockup React)

| # | Tela | Tamanho | Cards | Tabelas | Inputs | Botões | Scripts | Modais |
|---|---|---|---|---|---|---|---|---|
| 1 | `pes-planejamento` | 11,7 KB | 5 | 1 | 0 | 7 | 1 | — |
| 2 | `pes-ordens` | 25,1 KB | 5 | 1 | 1 | 6 | 1 | modal-pes-cks-sala |
| 3 | `pes-cockpit` (CORE) | 64,7 KB | 7 | 1 | 5 | 24 | 4 | modal-pes-confirm |
| 4 | `pes-mps` | 26,5 KB | 5 | 1 | 8 | 20 | 1 | modal-mps-desvio |
| 5 | `pes-pendencias` | 4,4 KB | 6 | 0 | 0 | 4 | 0 | modal-diverg, modal-requisitar |
| 6 | `pes-checklist` | 13,3 KB | 0 | 0 | 2 | 5 | 1 | modal-afer |
| 7 | `pes-gaiola` | 10,0 KB | 2 | 2 | 1 | 10 | 0 | — |
| 8 | `pes-devol-mp` | 7,4 KB | 6 | 1 | 0 | 5 | 0 | modal-reentiqueta |
| 9 | `pes-checkout` | 6,3 KB | 5 | 1 | 0 | 3 | 0 | — |
| 10 | `pes-oee` | 39,4 KB | 9 | 2 | 2 | 2 | 0 | — |
| 11 | `pes-rastr` | 11,4 KB | 2 | 1 | 5 | 3 | 0 | — |

### Complexidade e esforço estimado

| Tela | Complexidade (1–5) | FE (dias) | BE (dias) | Total | Categoria |
|---|---|---|---|---|---|
| pes-planejamento | 3/5 | 3 | 2 | 5 | Listagem + filtros + envio |
| pes-ordens (com checklist sala) | 4/5 | 4 | 3 | 7 | Lista + seleção sala + modal POP-PES-001 |
| **pes-cockpit (CORE)** | **5/5** | **8** | **6** | **14** | **Wizard 7-steps + WS + ZPL** |
| pes-mps | 3/5 | 3 | 2 | 5 | Tabela + edição + modal variância |
| pes-pendencias | 2/5 | 2 | 2 | 4 | Hub de problemas + 2 modais |
| pes-checklist | 4/5 | 4 | 2 | 6 | 10 itens + modal-afer (validação live) |
| pes-gaiola | 3/5 | 3 | 3 | 6 | Containers + ZPL etiqueta-mãe |
| pes-devol-mp | 3/5 | 2 | 2 | 4 | Saldo + JDE + modal-reentiqueta |
| pes-checkout | 2/5 | 2 | 2 | 4 | Validação final + handoff Fabricação |
| **pes-oee** | **4/5** | **5** | **4** | **9** | **SVG charts + queries agregadas** |
| pes-rastr | 2/5 | 2 | 2 | 4 | Audit log + filtros + CSV |
| **3 modais reusáveis** | — | 2 | 1 | 3 | modal-diverg, modal-requisitar, modal-reentiqueta |
| **TOTAL** | **34 pts** | **40** | **31** | **71** | |


## 3. Modais (3 reusáveis + 4 internos)

### Reusáveis (componentes compartilhados)

| Modal | Usado em | Função | Esforço |
|---|---|---|---|
| `modal-diverg` | pes-pendencias, pes-cockpit (step 6) | Justificar variância de pesagem (motivo + supervisor) | 1d |
| `modal-requisitar` | pes-pendencias | Solicitar reposição de material ao almoxarifado | 1d |
| `modal-reentiqueta` | pes-devol-mp, pes-mps | Gerar nova etiqueta com saldo restante | 1d |

### Internos (acoplados a uma tela específica)

| Modal | Tela | Função | Esforço |
|---|---|---|---|
| `modal-pes-cks-sala` | pes-ordens | Checklist obrigatório da sala antes do início (POP-PES-001) — 6 itens | já contado em pes-ordens |
| `modal-pes-confirm` | pes-cockpit | Confirmação no step 2 do wizard | já contado em pes-cockpit |
| `modal-afer` | pes-checklist | Registrar leitura de aferição com validação live | já contado em pes-checklist |
| `modal-mps-desvio` | pes-mps | Registrar variância de pesagem em MPs já pesadas | já contado em pes-mps |


## 4. Distribuição por Desenvolvedor

### Winke — Líder técnico (FE + BE)

**Responsabilidades transversais**:
- Setup do repo, CI/CD, lint, testes (Sprint 0)
- POCs de risco: driver Toledo PC Link 7, ZPL Zebra, integração JDE
- Code review obrigatório de todos os PRs antes do merge
- Mentoria dos estagiários (Eduardo na primeira semana)
- Modelagem do banco de dados
- Definição da arquitetura (REST + WebSocket)

**Telas/Modais**:
- pes-cockpit BE (WebSocket leitura de balança, scan etiqueta, impressão ZPL) — 6d
- pes-oee BE (queries SQL agregadas, cálculo de OEE em runtime) — 4d
- Integração JDE (devolução, baixa de saldo) — 2d
- Hardening + segurança — 3d

**Total**: 15 dias

---

### Rodrigo — Desenvolvedor pleno (FE + BE)

**Responsabilidades**:
- Cockpit de Pesagem (CORE) — wizard 7-steps com estados complexos
- OEE FE com SVG charts e cálculos em useMemo
- Checklist de Limpeza com modal-afer (validação live de balanças)
- Telas que exigem visualização avançada

**Telas/Modais**:
- pes-cockpit FE (wizard 7-steps) — 8d
- pes-checklist + modal-afer — 4d
- pes-oee FE (SVG charts, KPIs, breakdown) — 5d
- pes-gaiola (FE + BE) — 6d
- Pareamento com Kaic — apoio contínuo

**Total**: 23 dias

---

### Kaic — Estagiário (FE + BE)

**Responsabilidades**:
- Telas auxiliares de menor complexidade
- Modais reusáveis (componentes compartilhados)
- Testes unitários e E2E
- Pareamento com Rodrigo na primeira semana

**Telas/Modais**:
- pes-pendencias + modal-diverg + modal-requisitar — 4d + 2d
- pes-rastr (filtros + tabela + export CSV) — 4d
- pes-devol-mp + modal-reentiqueta — 4d + 1d
- Testes unitários (Jest/Vitest) — 3d

**Total**: 18 dias

---

### Eduardo Leite — Estagiário (FE + BE)

**Responsabilidades**:
- Telas de listagem (CRUD básico, padrões repetitivos)
- Documentação técnica
- Pareamento com Winke na primeira semana

**Telas/Modais**:
- pes-planejamento (lista + filtros + botão Enviar para Pesagem) — 5d
- pes-ordens + modal-pes-cks-sala — 7d
- pes-mps + modal-mps-desvio — 5d
- pes-checkout — 4d
- Documentação + treinamento — 3d

**Total**: 24 dias


## 5. Cronograma — 4 Sprints × 2 semanas

### Sprint 0 — Setup técnico (3 dias antes do Sprint 1)

| Dev | Tarefa |
|---|---|
| Winke | Repo + CI/CD + ESLint + Vitest + Playwright |
| Winke | Modelagem do banco (PostgreSQL/Oracle) |
| Winke | POC: driver Toledo PC Link 7 (TCP/IP, leitura a cada 500ms) |
| Winke | POC: impressão ZPL na Zebra (Code 128, EAN-13, EAN-128) |
| Rodrigo | Apoio Winke + setup do front (Vite + React + tokens CSS) |
| Kaic | Estudo do mockup React + onboarding |
| Eduardo | Estudo do mockup React + onboarding |

---

### Sprint 1 — Cockpit Core + Telas-base (10 dias úteis)

**Objetivo**: Operador consegue iniciar pesagem (selecionar OP, fazer checklist da sala, abrir cockpit, escanear MP).

| Dia | Winke (Líder) | Rodrigo (Pleno) | Kaic (Est.) | Eduardo (Est.) |
|---|---|---|---|---|
| 1 | Refinar arquitetura | Setup pes-cockpit (estrutura) | Setup pes-pendencias | Setup pes-planejamento |
| 2 | API `/sessao` + `/ordens` | pes-cockpit step 1 (Sel. MP) | pes-pendencias UI completa | pes-planejamento UI completa |
| 3 | API `/checklist/*` | pes-cockpit step 2 (Iniciar) | modal-diverg | pes-planejamento ações (envio) |
| 4 | API `/scan-etiqueta` | pes-cockpit step 3 (Scan) | modal-requisitar | pes-ordens UI |
| 5 | WS `/ws/balanca/leitura` | pes-cockpit step 3 (validação) | Pareamento c/ Rodrigo | pes-ordens (sala selector) |
| 6 | API `/balancas` | pes-cockpit step 4 (Sel. Bal.) | pes-pendencias integração | modal-pes-cks-sala (FE) |
| 7 | Integração ZPL | pes-cockpit step 5 (pesagem) | Testes pes-pendencias | pes-ordens integração |
| 8 | API `/registrar` | pes-cockpit step 5 (live data) | E2E modais | E2E pes-ordens |
| 9 | Code review pes-cockpit | Bug fix | Bug fix | Bug fix |
| 10 | **Demo + retro** | **Demo + retro** | **Demo + retro** | **Demo + retro** |

**Entregas Sprint 1**: pes-pendencias · pes-planejamento · pes-ordens (com checklist) · pes-cockpit steps 1–5 · 2 modais reusáveis.

---

### Sprint 2 — Cockpit completo + Checklist + MPs (10 dias)

**Objetivo**: Cockpit completo (steps 1-7), Checklist de Limpeza com aferição, MPs Pesadas com edição.

| Dia | Winke | Rodrigo | Kaic | Eduardo |
|---|---|---|---|---|
| 1 | API `/etiquetas/imprimir` | pes-cockpit step 6 (Confirmar) | pes-rastr UI | pes-mps UI |
| 2 | API `/gaiolas/*` | pes-cockpit step 7 (Gaiola) | pes-rastr filtros | pes-mps tabela |
| 3 | Hardening WebSocket | pes-checklist UI | pes-rastr export CSV | pes-mps ações |
| 4 | API `/checklist/aferir` | modal-afer (validação live) | Testes pes-rastr | modal-mps-desvio |
| 5 | Code review aferição | pes-checklist gate (100%) | Pareamento c/ Rodrigo | pes-mps integração |
| 6 | API `/sessao/checkout` | pes-cockpit polish | Testes E2E | pes-mps E2E |
| 7 | Documentação API | pes-checklist E2E | Bug fix | Bug fix |
| 8 | Bug fix | Bug fix | Bug fix | Bug fix |
| 9 | QA integrado | QA integrado | QA integrado | QA integrado |
| 10 | **Demo + retro** | **Demo + retro** | **Demo + retro** | **Demo + retro** |

**Entregas Sprint 2**: pes-cockpit completo · pes-checklist + modal-afer · pes-mps + modal-desvio · pes-rastr.

---

### Sprint 3 — Pós-pesagem + OEE FE (10 dias)

**Objetivo**: Fluxo completo encerrado (gaiola, devolução, checkout) + tela OEE funcional.

| Dia | Winke | Rodrigo | Kaic | Eduardo |
|---|---|---|---|---|
| 1 | Integração JDE (devolução) | pes-gaiola UI | pes-devol-mp UI | pes-checkout UI |
| 2 | API `/devolucao` | pes-gaiola lógica de containers | pes-devol-mp tabela | pes-checkout resumo |
| 3 | API `/oee/disponibilidade` | pes-gaiola etiqueta-mãe ZPL | modal-reentiqueta | pes-checkout integração |
| 4 | API `/oee/performance` | pes-oee FE (KPIs hero) | pes-devol-mp integração JDE | pes-checkout E2E |
| 5 | Code review OEE BE | pes-oee FE (SVG charts) | Testes pes-devol-mp | Pareamento c/ Winke |
| 6 | Hardening JDE | pes-oee FE (memória de cálculo) | Testes unitários | Documentação técnica |
| 7 | Testes de carga balança | pes-oee FE (histórico 7d) | E2E pes-devol-mp | Treinamento operadores |
| 8 | QA fluxo end-to-end | pes-oee polish | Bug fix | Bug fix |
| 9 | Bug fix | Bug fix | Bug fix | Bug fix |
| 10 | **Demo + retro** | **Demo + retro** | **Demo + retro** | **Demo + retro** |

**Entregas Sprint 3**: pes-gaiola · pes-devol-mp + modal-reentiqueta · pes-checkout · pes-oee FE completo.

---

### Sprint 4 — OEE BE + Hardening (10 dias)

**Objetivo**: OEE em produção com dados reais agregados, qualidade e estabilidade para go-live.

| Dia | Winke | Rodrigo | Kaic | Eduardo |
|---|---|---|---|---|
| 1 | OEE BE (queries por sala) | OEE FE (filtros período/sala) | Testes E2E completos | Documentação user |
| 2 | OEE BE (cálculo histórico) | OEE FE (export CSV) | Testes de regressão | Treinamento usuários |
| 3 | OEE BE (paradas tipos) | Polish de UI geral | Bug fix | Manuais operacionais |
| 4 | Auditoria + LGPD | Polish responsividade | Coverage report | Doc API (Swagger) |
| 5 | Backup + DR | A11y review | Bug fix | Doc deploy |
| 6 | UAT com Tati/Maciel | UAT correções | UAT correções | UAT correções |
| 7 | Performance tuning | Bug fix | Bug fix | Doc operacional |
| 8 | Smoke tests prod | Smoke tests prod | Smoke tests prod | Smoke tests prod |
| 9 | Go-live prep | Go-live prep | Go-live prep | Go-live prep |
| 10 | **Go-live + retrospectiva final** | | | |

**Entregas Sprint 4**: pes-oee BE + dados reais · UAT aprovado · documentação completa · go-live.

---

### Sprint 5 (opcional) — Estabilização pós go-live

- Monitoramento, logs, alertas
- Bug fix prioritário
- Refinamentos baseados em feedback dos operadores
- KPIs de adoção (% ordens migradas, % paradas registradas)


## 6. Integrações Externas

| Sistema | Tipo | Quando | Risco |
|---|---|---|---|
| **15 balanças Toledo PC Link 7** | TCP/IP, leitura cíclica 500ms | Sprint 0 (POC) → Sprint 1 (impl) | Driver proprietário, fluxo paralelo |
| **Impressora Zebra (ZPL)** | TCP/9100 | Sprint 0 (POC) → Sprint 1-2 | Layout das etiquetas (filha + mãe + EAN-13/128) |
| **JDE** | API REST legacy | Sprint 3 | Latência alta, retry queue |
| **SoftExpert (GED)** | REST | Fora do escopo Pesagem | — |
| **LIMS** | — | Não integra com Pesagem | — |


## 7. Riscos e Mitigações

| Risco | Prob. | Impacto | Mitigação |
|---|---|---|---|
| Driver Toledo proprietário | Alta | Alto | POC isolada Sprint 0 (Winke) com balança real |
| ZPL diverge da regulatória IN 134/2022 | Média | Alto | Validar com QA + RA até fim do Sprint 1 |
| WebSocket cai em sala industrial | Média | Médio | Fallback automático para polling 500ms |
| 4 devs com seniorities diferentes | Alta | Médio | Pareamento + code review obrigatório |
| Estagiários superalocados | Média | Médio | Tarefas isoladas (sem dependência crítica), revisão diária |
| API JDE lenta | Alta | Médio | Cache local + queue retry assíncrono |
| Operador perde sessão (browser quebra) | Média | Alto | Estado persistido no backend a cada step |
| Cronoanálise por granel desatualizada | Baixa | Alto | Sprint 4 — recalibrar com Tati após 2 semanas de uso |


## 8. Definition of Done

Cada tela só é considerada "Done" quando:

- [ ] UI implementada com paleta Granado/Phebo (tokens em `globals.css`)
- [ ] Conectada a endpoints reais (sem mocks)
- [ ] Testes unitários ≥ 80% cobertura
- [ ] E2E happy-path passando (Playwright)
- [ ] Validação de entrada robusta (limites, tipos, casas decimais)
- [ ] Tratamento de erro (offline, balança down, scanner falhou)
- [ ] Audit log gravando com timestamp + operador
- [ ] Acessibilidade básica (Tab, foco, contraste WCAG AA)
- [ ] Aprovado por QA + Garantia da Qualidade
- [ ] Code review aprovado por Winke
- [ ] Documentação no Storybook ou equivalente


## 9. Anexo · Mapa de Endpoints

```
# Sessao e Ordens
GET    /api/pesagem/ordens?status=&modulo=
GET    /api/pesagem/salas?modulo=
POST   /api/pesagem/sessao
GET    /api/pesagem/sessao/{sid}
POST   /api/pesagem/sessao/{sid}/finalizar

# Checklist
GET    /api/pesagem/checklist/{sid}/template
POST   /api/pesagem/checklist/{sid}/item/{key}
POST   /api/pesagem/checklist/{sid}/liberar
GET    /api/balancas/{id}/calibracao

# Cockpit
GET    /api/pesagem/sessao/{sid}/mps
POST   /api/pesagem/scan-etiqueta
GET    /api/balancas?sala=&disponivel=
WS     /ws/balanca/{id}/leitura
POST   /api/pesagem/registrar
POST   /api/etiquetas/imprimir
POST   /api/gaiolas/criar

# Pos-pesagem
GET    /api/pesagem/sessao/{sid}/mps?pesadas=
PATCH  /api/pesagem/mp/{id}
POST   /api/pesagem/mp/{id}/reetiquetar
DELETE /api/pesagem/mp/{id}

GET    /api/gaiolas/sessao/{sid}
POST   /api/gaiolas/{id}/etiqueta-filha
POST   /api/gaiolas/{id}/imprimir-mae

GET    /api/pesagem/sessao/{sid}/checkout
POST   /api/devolucao

# Pendencias e Rastreabilidade
GET    /api/pesagem/pendencias?op=
POST   /api/pesagem/pendencias/{id}/justificar
POST   /api/pesagem/pendencias/{id}/requisitar-material
PATCH  /api/pesagem/pendencias/{id}/resolver

GET    /api/pesagem/rastreabilidade?de=&ate=&op=&mp=&operador=&tipo=
GET    /api/pesagem/rastreabilidade/export?formato=csv

# OEE
GET    /api/pesagem/oee?periodo=&sala=
GET    /api/pesagem/oee/disponibilidade?periodo=&sala=
GET    /api/pesagem/oee/performance?periodo=&sala=
GET    /api/pesagem/oee/historico?dias=7
GET    /api/pesagem/oee/paradas?periodo=
GET    /api/pesagem/oee/tempo-ciclo-mp?periodo=
```


---

*Documento gerado a partir da varredura DOM das 11 telas do menu Pesagem
em mes-granado-react. Atualizado em 2026-05-06.*
