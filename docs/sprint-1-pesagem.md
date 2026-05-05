# Sprint 1 — Modulo Pesagem (MES Granado)

> Documento de referencia para planejamento do primeiro sprint de
> desenvolvimento. Baseado na analise das 9 telas + 5 modais ja prototipados
> em `mes-granado-react`. Prazo sugerido: 2 sprints de 2 semanas com 2 devs.

- Repositorio: https://github.com/HenriquePereiraSPI/GRANADO
- Mockup HTML monolitico: `MES_Granado_v28_SinoticoMF.html`
- Telas extraidas: `src/legacy/screens.js` (47 telas, 14 modais)

> **Decisoes registradas (2026-05-05):**
>
> 1. A area de Pesagem opera com **15 balancas Toledo PC Link 7** (substitui as referencias antigas a "4 balancas" e "Mettler/Toledo").
> 2. A Pesagem **NAO integra com LIMS**.
> 3. O bloco **OEE foi separado em sprint proprio** (PESAGEM-OEE), executado apos a base operacional estar de pe.


## Sumario

1. [Visao Geral](#1-visao-geral)
2. [Fluxo do Operador](#2-fluxo-do-operador)
3. [Telas Detalhadas](#3-telas-detalhadas)
   - [P1 · pes-ordens](#p1--pes-ordens--selecao-de-ordem)
   - [P2 · pes-checklist](#p2--pes-checklist--checklist-de-limpeza-e-afericao)
   - [P3 · pes-cockpit](#p3--pes-cockpit--cockpit-de-pesagem-core)
   - [P4 · pes-mps](#p4--pes-mps--materias-primas-pesadas)
   - [P5 · pes-gaiola](#p5--pes-gaiola--gestao-de-gaiola)
   - [P6 · pes-checkout](#p6--pes-checkout--checkout-validacao-final)
   - [P7 · pes-devol-mp](#p7--pes-devol-mp--devolucao-de-mp)
   - [P8 · pes-pendencias](#p8--pes-pendencias--pendencias)
   - [P9 · pes-rastr](#p9--pes-rastr--rastreabilidade)
4. [Modais Reusaveis](#4-modais-reusaveis)
5. [Cronograma do Sprint](#5-cronograma-do-sprint)
6. [Integracoes Externas](#6-integracoes-externas)
7. [Riscos e Mitigacoes](#7-riscos-e-mitigacoes)
8. [Definition of Done](#8-definition-of-done)
9. [Anexo · Mapa de Endpoints](#9-anexo--mapa-de-endpoints)


## 1. Visao Geral

| Item | Valor |
|---|---|
| Total de telas | 9 |
| Modais reusaveis | 3 (`modal-diverg`, `modal-requisitar`, `modal-reentiqueta`) |
| Modais internos a uma tela | 2 (`modal-afer`, `modal-pes-confirm`) |
| Complexidade total | 34 pontos (escala 1–5 por tela) |
| Estimativa | 2 sprints x 2 semanas com 2 devs (1 frontend + 1 backend) |
| Granularidade do operador | Sessao = 1 OP + 1 Sala + 1 Operador |

### Complexidade por tela

| Tela | Esforco | Complexidade | Categoria |
|---|---|---|---|
| `pes-ordens` | 3d | 3/5 | Lista + selecao |
| `pes-checklist` | 4d | 4/5 | Validacao GxP |
| `pes-cockpit` | 8d | 5/5 | Wizard 7-steps **CORE** |
| `pes-mps` | 3d | 3/5 | Listagem com edicao |
| `pes-gaiola` | 3d | 3/5 | Gestao de containers |
| `pes-checkout` | 2d | 3/5 | Validacao final |
| `pes-devol-mp` | 2d | 3/5 | Saldo + saida JDE |
| `pes-pendencias` | 2d | 2/5 | Hub de problemas |
| `pes-rastr` | 2d | 2/5 | Audit log + filtros |
| **3 modais reusaveis** | 3d | — | Componentes |
| **Total** | **32d** | **34 pontos** | |


## 2. Fluxo do Operador

```
                       ┌─────────────────────────────────────┐
                       │  Login + Sidebar > Pesagem          │
                       └────────────────┬────────────────────┘
                                        ↓
        ┌───────────────────────────────────────────────────────────────┐
        │  1) pes-ordens                                                │
        │     Lista de OPs aguardando + selecao de Sala (A/B/C/SemBal.) │
        │     Output: sessao = { OP, sala, operador, justif?(SB) }      │
        └────────────────────────────────┬──────────────────────────────┘
                                         ↓
        ┌────────────────────────────────────────────────────────────────┐
        │  2) pes-checklist                                              │
        │     10 itens em 3 secoes (Limpeza, Afericao, Ambiente)         │
        │     Gate: 100% verificado + 0 fora-de-faixa para liberar       │
        └────────────────────────────────┬───────────────────────────────┘
                                         ↓
        ┌────────────────────────────────────────────────────────────────┐
        │  3) pes-cockpit (REPETE 1x POR MP)                             │
        │     ① Sel.MP  ②  Iniciar  ③  Scan  ④  Balanca                  │
        │                  ⑤  Pesagem  ⑥  Confirmar  ⑦  Etq./Gaiola      │
        └────────────────────────────────┬───────────────────────────────┘
                                         ↓
        ┌────────────────────────────────────────────────────────────────┐
        │  4) pes-mps                                                    │
        │     Lista das MPs ja pesadas (revisao + correcao)              │
        └────────────────────────────────┬───────────────────────────────┘
                                         ↓
        ┌────────────────────────────────────────────────────────────────┐
        │  5) pes-gaiola                                                 │
        │     Etiquetas filhas → Etiqueta mae (impressao Zebra)          │
        └────────────────────────────────┬───────────────────────────────┘
                                         ↓
        ┌────────────────────────────────────────────────────────────────┐
        │  6) pes-checkout                                               │
        │     Resumo final + Confirmar + libera Fabricacao               │
        └─────────────┬─────────────────────────────────┬────────────────┘
                      │ tem saldo?                      │ sem saldo
                      ↓                                  ↓
        ┌───────────────────────────────┐       ┌──────────────────┐
        │  7) pes-devol-mp              │       │  Sessao encerrada│
        │     Devolucao ao almoxarifado │       │  Sessao encerrada│
        │     + JDE                     │       │  → Fabricacao    │
        └─────────────┬─────────────────┘       └──────────────────┘
                      │
                      ↓
              Sessao encerrada → Fabricacao

  AUXILIARES (acessiveis em paralelo, qualquer momento):
    pes-pendencias  · desvios + reposicao
    pes-rastr       · audit log
```


## 3. Telas Detalhadas

---

### P1 · pes-ordens — Selecao de Ordem

**O que faz**: Lista a fila de Ordens de Pesagem aguardando, ordenada por
prioridade. Operador escolhe a Sala (A/B/C/Sem-Balanca) e abre a OP.

**Complexidade**: 3/5 · **Esforco**: 3 dias

**Componentes da UI**

| Bloco | Detalhe |
|---|---|
| KPIs (4 cards) | Aguardando Pesagem · Em Pesagem · Concluidas Hoje · Com Pendencia |
| Selecao de Sala | Grid 4 colunas (A, B, C, Sem-Balanca) com status e disponibilidade |
| Justificativa | Textarea **obrigatoria** quando Sala = "Sem Balanca" |
| Tabela | Fila de OPs (Ordem · Produto/Formula · MPs · Volume · Prioridade · Status) |

**Regras de negocio**

- Nao avancar sem Sala selecionada
- "Sem Balanca" exige justificativa nao-vazia + supervisao
- Atualiza eyebrow do `pes-cockpit` com a sala escolhida
- Status da sala atualizado em tempo real (outras sessoes ativas)

**Endpoints**

```
GET  /api/pesagem/ordens?status=aguardando&modulo=MF5
GET  /api/pesagem/salas?modulo=MF5
POST /api/pesagem/sessao
     body: { op, sala, justificativa? } → { sessionId }
```

**Criterios de Aceite**

- [ ] KPIs atualizam a cada 30s (ou sob demanda)
- [ ] Sala "Sem Balanca" bloqueia avanco sem justificativa
- [ ] Tabela suporta ate 50 OPs sem perda de performance
- [ ] Click em "Pesar" abre cockpit com sessionId valido

---

### P2 · pes-checklist — Checklist de Limpeza e Afericao

**O que faz**: Validacao obrigatoria **antes** de pesar a primeira MP.
10 itens distribuidos em 3 secoes com regras de boas praticas (GxP).

**Complexidade**: 4/5 · **Esforco**: 4 dias

**Estrutura**

```
[Progress Bar — 0%/100%]

Secao 1 — Limpeza da Area e Equipamentos (4 itens)
  - Area limpa e livre de residuos do lote anterior   [Critico]
  - Balancas limpas e sem residuo                     [Critico]
  - Embalagens identificadas                          [Obrigatorio]
  - Registro de limpeza assinado                      [Critico]

Secao 2 — Afericao de Balancas (3 itens — abre modal-afer)
  - BAL-03 zerada (faixa: ±0,002 kg)                  [Critico]
  - Peso padrao 10 kg (faixa: 9,990 — 10,010 kg)      [Critico]
  - BAL-01 micropesagem 100g (faixa: 99,90 — 100,10g) [Obrigatorio]

Secao 3 — Condicoes Ambientais (3 itens)
  - Temperatura 18–22°C / Umidade 40–60%              [Obrigatorio]
  - Sistema de exaustao e pressurizacao               [Obrigatorio]
  - Impressora Zebra com etiquetas + ribbon           [Obrigatorio]
```

**Modal interno: `modal-afer`**

- Titulo do item + descricao + faixa esperada (visivel)
- Input numerico com **validacao em tempo real**:
  - Verde + "Dentro da faixa aceitavel" quando OK
  - Vermelho + "Fora da faixa! Verifique a balanca" quando NOK
- Observacao (opcional)
- Confirmar → grava resultado, atualiza progresso geral, fecha modal

**Endpoints**

```
GET  /api/pesagem/checklist/{sessionId}/template
POST /api/pesagem/checklist/{sessionId}/item/{key}
     body: { ok, valor?, obs?, hora }
GET  /api/balancas/{id}/calibracao
POST /api/pesagem/checklist/{sessionId}/liberar
     (so passa se 10/10 OK e nenhum FORA-DA-FAIXA)
```

**Criterios de Aceite**

- [ ] Botao "Liberar para Pesagem" so habilita com 100% e sem FORA
- [ ] Aferido FORA exige confirmacao do supervisor
- [ ] Cada item registrado vai para audit log
- [ ] Reabrir checklist preserva itens ja preenchidos no dia

---

### P3 · pes-cockpit — Cockpit de Pesagem (CORE)

**O que faz**: Wizard de 7 steps que repete uma vez por matéria-prima da
OP. Eh o coracao do modulo, com integracao a balancas reais e impressao.

**Complexidade**: 5/5 · **Esforco**: 8 dias

**Maquina de estados do wizard**

```
       ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
       │ ① Sel. MP    │ →  │ ② Iniciar    │ →  │ ③ Scan Etq.  │
       └──────────────┘    └──────┬───────┘    └──────┬───────┘
                            modal-pes-confirm    valida etiqueta
                                                       │
                                                       ↓
       ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
       │ ⑥ Confirmar  │ ←  │ ⑤ Pesagem    │ ←  │ ④ Sel. Bal.  │
       └──────┬───────┘    └──────────────┘    └──────────────┘
              │            polling de peso     grid de balancas
              │            via WebSocket       (BAL-01..04)
              ↓
        desvio > tol?                              ┌──────────────┐
              │ sim   → modal-diverg ──────────→  │ ⑦ Etq./Gaiola│
              │ nao  ───────────────────────────→ │ + impressao  │
              ↓                                    └──────┬───────┘
                                                          ↓
                                                    nav('pes-mps')
```

**Step a step**

| Step | Componente | Fonte de dado |
|---|---|---|
| ① Sel. MP | Tabela filtrada de MPs da OP | `GET /api/pesagem/sessao/{sid}/mps` |
| ② Iniciar | Botao + `modal-pes-confirm` | — |
| ③ Scan Etq. | Input + leitor de codigo | `POST /api/pesagem/scan-etiqueta` |
| ④ Sel. Bal. | Grid (BAL-01..BAL-15) com capacidade e ultima calibracao — **15 unidades Toledo PC Link 7** | `GET /api/balancas?sala=A` |
| ⑤ Pesagem | Display ao vivo (peso + status ▼ X kg ate alvo) | **WS** `/ws/balanca/{id}/leitura` |
| ⑥ Confirmar | Comparacao alvo × pesado × tolerancia | local + `modal-diverg` se desvio |
| ⑦ Etq./Gaiola | Gera nº de gaiola sequencial + ZPL | `POST /api/etiquetas/imprimir` + `POST /api/gaiolas/criar` |

**Estados internos**

```js
{
  step: 1..7,
  balancaSel: { id, nome, capacidade, ultimaCalibracao } | null,
  pesoAtual: number,
  pesoAlvo: number,
  tolerancia: number,        // ±0,5% por padrao
  etiquetaCodigo: string,
  gaiolaSeq: number,         // ex.: 563944
  gaiolasImpressas: string[]
}
```

**Endpoints**

```
GET    /api/pesagem/sessao/{sid}/mps          # MPs pendentes
POST   /api/pesagem/scan-etiqueta             # valida etq + retorna MP/lote/val
GET    /api/balancas?sala=A&disponivel=true
WS     /ws/balanca/{id}/leitura               # stream real-time peso
POST   /api/pesagem/registrar
       body: { mp, lote, balanca, peso, alvo, desvio, justif?, etqCodigo }
POST   /api/etiquetas/imprimir                # payload ZPL
POST   /api/gaiolas/criar                     # nº sequencial + retorna ID
```

**Criterios de Aceite**

- [ ] Wizard preserva estado em F5 (recuperacao de sessao)
- [ ] Polling de peso responsivo (<200ms latencia)
- [ ] Desvio fora da tolerancia bloqueia confirmacao sem justificativa
- [ ] Etiqueta impressa no formato ZPL aceito pela Zebra
- [ ] Gaiola sequencial sem buracos (ate 999.999)
- [ ] Cancelamento volta ao step anterior sem perda de dados
- [ ] Suporta concorrencia das **15 balancas Toledo PC Link 7** sem perda de leituras

---

### P4 · pes-mps — Materias-Primas Pesadas

**O que faz**: Lista todas as MPs ja pesadas da OP com edicao/correcao.

**Complexidade**: 3/5 · **Esforco**: 3 dias

**Componentes**

- 4 KPIs (Total Pesadas · Dentro Limite · Com Desvio · Reetiquetadas)
- Tabela: MP · Lote · Pesado · Alvo · Desvio · Balanca · Operador · Hora · Acoes
- Acoes por linha: Editar · Reetiquetar · Justificar · Excluir
- Filtro/busca por codigo, lote, status

**Endpoints**

```
GET   /api/pesagem/sessao/{sid}/mps?pesadas=true
PATCH /api/pesagem/mp/{id}                    # edita peso/lote
POST  /api/pesagem/mp/{id}/reetiquetar        # gera nova etiqueta
DELETE /api/pesagem/mp/{id}                   # exclui (com motivo)
```

**Criterios de Aceite**

- [ ] Edicao de peso obriga nova justificativa + nova etiqueta
- [ ] Exclusao registra evento no audit log com motivo
- [ ] Reetiqueta gera novo codigo e marca o anterior como "substituido"

---

### P5 · pes-gaiola — Gestao de Gaiola

**O que faz**: Gerencia containers fisicos (gaiolas) que agrupam etiquetas
filhas das MPs pesadas, gerando uma etiqueta-mae para handoff a Fabricacao.

**Complexidade**: 3/5 · **Esforco**: 3 dias

**Componentes**

- Card 1: Lista de gaiolas montadas (ID · MPs vinculadas · Status)
- Card 2: Configuracao de nova gaiola
  - Input scan de etiqueta filha → adiciona a gaiola atual
  - Botao "Imprimir Etiqueta-Mae"
- 1 input scan + 10 botoes (montar, imprimir, associar, cancelar...)

**Endpoints**

```
GET  /api/gaiolas/sessao/{sid}
POST /api/gaiolas/{id}/etiqueta-filha         # vincula etq a gaiola
POST /api/gaiolas/{id}/imprimir-mae           # ZPL com sumario
```

**Criterios de Aceite**

- [ ] Etiqueta filha so pode estar em UMA gaiola por vez
- [ ] Etiqueta-mae lista todas as filhas + soma de pesos
- [ ] Cancelar gaiola desvincula todas as filhas

---

### P6 · pes-checkout — Checkout / Validacao Final

**O que faz**: Validacao final antes de fechar a OP. Confirma 12/12 MPs
pesadas, gaiolas montadas, e libera para Fabricacao.

**Complexidade**: 3/5 · **Esforco**: 2 dias

**Componentes**

- 4 KPIs: MPs Pesadas · Gaiolas Montadas · Desvios · Tempo Total
- Tabela de resumo (8 linhas) com todas as MPs pesadas
- CTAs: "Confirmar Checkout" · "Voltar para Pesagem" · "Gerar Devolucao"

**Endpoints**

```
GET  /api/pesagem/sessao/{sid}/checkout       # resumo
POST /api/pesagem/sessao/{sid}/finalizar      # encerra + notifica Fabricacao
```

**Criterios de Aceite**

- [ ] Bloqueia confirmacao se houver MP pendente
- [ ] Notifica Fabricacao via webhook/evento ao encerrar
- [ ] Permite gerar devolucao de saldo antes de fechar

---

### P7 · pes-devol-mp — Devolucao de MP

**O que faz**: Quando ha saldo de MP que sobra, devolve ao almoxarifado
gerando nova etiqueta + integracao com JDE.

**Complexidade**: 3/5 · **Esforco**: 2 dias

**Componentes**

- 4 KPIs (Saldo a devolver · Itens · Lotes diferentes · Valor R$)
- Tabela 3 linhas (MP · Lote · Saldo · Destino · Acoes)
- `modal-reentiqueta` — gera nova etiqueta com saldo restante

**Endpoints**

```
POST /api/devolucao
     body: { mps[], destino, motivo? }
     → notifica almoxarifado + JDE
```

**Criterios de Aceite**

- [ ] Cada item devolvido gera evento JDE
- [ ] Reetiqueta tem rastreabilidade ao lote original
- [ ] Saldo nao pode ser maior que o pesado a mais

---

### P8 · pes-pendencias — Pendencias

**O que faz**: Hub de problemas (desvios + reposicoes). Tela auxiliar
acessivel a qualquer momento durante a pesagem.

**Complexidade**: 2/5 · **Esforco**: 2 dias

**Componentes**

- 4 KPIs: Criticas · Aguardando · Resolvidas no Turno · OP em foco
- Lista "Pendencias Abertas" com tipo (Desvio Critico, Aguardando Reposicao)
- Lista "Pendencias Resolvidas no Turno"
- Modais: `modal-diverg` + `modal-requisitar`

**Endpoints**

```
GET  /api/pesagem/pendencias?op={op}
POST /api/pesagem/pendencias/{id}/justificar
POST /api/pesagem/pendencias/{id}/requisitar-material
PATCH /api/pesagem/pendencias/{id}/resolver
```

---

### P9 · pes-rastr — Rastreabilidade

**O que faz**: Trilha de auditoria — historico de eventos da pesagem com
filtros e exportacao CSV.

**Complexidade**: 2/5 · **Esforco**: 2 dias

**Componentes**

- 5 filtros: periodo, OP, MP, operador, tipo de evento
- Tabela de eventos (timestamp · operador · acao · detalhe)
- Botao "Exportar CSV"

**Endpoints**

```
GET /api/pesagem/rastreabilidade
    query: ?de=&ate=&op=&mp=&operador=&tipo=
GET /api/pesagem/rastreabilidade/export?formato=csv
```


## 4. Modais Reusaveis

| Modal | Usado por | Funcao |
|---|---|---|
| `modal-diverg` | pes-pendencias, pes-cockpit (step 6) | Justificar desvio de pesagem (motivo + supervisor) |
| `modal-requisitar` | pes-pendencias | Solicitar reposicao de material ao almoxarifado |
| `modal-reentiqueta` | pes-devol-mp, pes-mps | Gerar nova etiqueta com saldo restante |

**Esforco total dos modais reusaveis**: 3 dias (1 dia cada).


## 5. Cronograma do Sprint

### Sprint 1 (10 dias uteis) — Telas-base + Cockpit

| Dia | Dev A — Frontend | Dev B — Backend / Integracao |
|---|---|---|
| 1 | Setup projeto + sidebar Pesagem | Schema DB + auth |
| 2 | Layout shell + tokens | Endpoints `/sessao`, `/ordens` |
| 3 | `pes-ordens` UI completa | `GET /ordens`, `POST /sessao` |
| 4 | `pes-checklist` UI (10 itens) | `POST /checklist/item` |
| 5 | `modal-afer` (validacao live) | Integracao calibracao balancas |
| 6 | `pes-cockpit` steps 1-3 | `POST /scan-etiqueta` + ZPL printer |
| 7 | `pes-cockpit` steps 4-5 (balanca) | **WS /ws/balanca/{id}/leitura** |
| 8 | `pes-cockpit` steps 6-7 + impressao | `POST /pesagem/registrar` + `POST /gaiolas` |
| 9 | Testes integrados cockpit | Endpoints faltantes + audit log |
| 10 | QA + ajustes + demo | QA + ajustes + demo |

### Sprint 2 (10 dias uteis) — Pos-pesagem + Auxiliares

| Dia | Dev A | Dev B |
|---|---|---|
| 1 | `pes-mps` UI + acoes | `PATCH /mp`, `POST /reetiquetar` |
| 2 | `pes-gaiola` | `POST /gaiolas/*` |
| 3 | `pes-checkout` | `POST /sessao/finalizar` + handoff |
| 4 | `pes-devol-mp` + `modal-reentiqueta` | `POST /devolucao` + JDE |
| 5 | `pes-pendencias` + 2 modais | Endpoints pendencias |
| 6 | `pes-rastr` (filtros + CSV) | `GET /rastreabilidade` |
| 7 | Polish UX + responsividade | Hardening / seguranca |
| 8 | E2E tests (Cypress/Playwright) | E2E tests |
| 9 | Bug fixing | Bug fixing |
| 10 | Demo + retro | Demo + retro |

### Sprint 3 — Hardening e Edge Cases

- Pesagem "Sem Balanca" (fluxo manual com supervisao + assinatura)
- Multiplas sessoes simultaneas (varios operadores em salas A/B/C)
- Recuperacao de sessao (operador derruba browser → continua)
- LGPD / auditoria reforcada (retencao, anonimizacao)
- Testes de carga: 15 balancas Toledo PC Link 7 + 1 leitura/100ms simultaneas (TGRA-034)
- Reconciliacao com JDE em caso de falha (queue + retry)
- Integracao Enabley (matriz de capacitacao do operador)

> **FIM do sprint PESAGEM (base operacional).** A partir daqui, o bloco OEE entra em sprint proprio.

### Sprint PESAGEM-OEE (separado, apos a base estar de pe)

O modulo de OEE da Pesagem (32 tarefas, ~476 SP estimados) foi **separado em
sprint proprio** para nao concorrer com a entrega da base operacional. Inclui:

- **OEE-S1**: Cadastros (tempo padrao granel/MP, motivos parada, turnos, checklists, salas/boxes) + Marcos START/END (granel, scan, etiqueta, fechamento). Itens TGRA-041..TGRA-052.
- **OEE-S2**: Engines de Performance/Disponibilidade + apontamentos manuais + interlocks. Itens TGRA-053..TGRA-060.
- **OEE-S3**: Telas (edicao + chao de fabrica) + relatorios + dashboards (operacional + executivo Tati/PCP) + QI/QO/QP + treinamento + BBP. Itens TGRA-061..TGRA-072.

> Pre-requisito do PESAGEM-OEE: base operacional da Pesagem (S1 a S3) concluida e estavel.


## 6. Integracoes Externas

| Sistema | Tipo | Fluxo | Risco |
|---|---|---|---|
| **JDE** | API legacy | Saidas de estoque, devolucoes | Latencia + indisponibilidade |
| **Balancas Toledo PC Link 7** (15 unidades) | TCP/IP ou Serial | Stream de peso em tempo real | Driver proprietario — POC isolada na 1a semana |
| **Impressora Zebra** | ZPL via TCP/9100 | Etiqueta filha + mae | Layout vs IN 134/2022 |
| **Preactor APS** | REST/integracao | Fila priorizada de OPs (ERU 5.1.50) | Definicao de contrato com PCP |
| **InBatch / SCADA** | Webhook/evento | Notificacao de gaiola apos Checkout | Definir formato e ack |
| **Enabley** | Integracao | Matriz de capacitacao do operador | Inicio 2026-05-11 |
| **SoftExpert (GED)** | REST | Documentos da OP, POPs | Fora do escopo do Sprint 1 |

> **Nota:** A Pesagem **NAO integra com LIMS**. LIMS pode existir em outros modulos do MES Granado, mas nao tem fluxo dentro do modulo de Pesagem.


## 7. Riscos e Mitigacoes

| Risco | Probabilidade | Impacto | Mitigacao |
|---|---|---|---|
| Driver Toledo PC Link 7 (15 balancas) — proprietario | Alta | Alto | POC isolada na 1a semana do Sprint 1 |
| Layout ZPL nao bate com regulatorio | Media | Alto | Validar com QA + RA antes do Sprint 2 |
| API JDE lenta | Alta | Medio | Cache local + queue de retry |
| Pesagem sem balanca exige assinatura digital | Baixa | Alto | Confirmar com Garantia da Qualidade |
| WebSocket cai em sala industrial | Media | Medio | Fallback automatico para polling 500ms |
| Operador derruba browser no meio do wizard | Media | Medio | Estado persistido no backend a cada step |
| Concorrencia entre as 15 balancas em pico | Media | Medio | Pool de conexoes + teste de estresse (TGRA-034) |


## 8. Definition of Done

Para cada tela:

- [ ] UI implementada com paleta Granado/Phebo (tokens em `globals.css`)
- [ ] Conectada a endpoints reais (sem mocks)
- [ ] Testes unitarios com cobertura >= 80%
- [ ] E2E happy-path passando (Playwright/Cypress)
- [ ] Validacao de entrada (limites, tipos, casas decimais, tolerancias)
- [ ] Tratamento de erro robusto (offline, balanca down, scanner falha)
- [ ] Audit log gravando todos os eventos com timestamp + operador
- [ ] Acessibilidade basica (Tab navegavel, foco visivel, contraste WCAG AA)
- [ ] Aprovado por QA + Garantia da Qualidade
- [ ] Documentado no Storybook ou equivalente


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
```


---

*Documento gerado a partir da analise das telas em `src/legacy/screens.js`
e do HTML monolitico `MES_Granado_v28_SinoticoMF.html` (v28).*
