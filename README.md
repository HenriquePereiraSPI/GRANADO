# MES Granado — React

Conversão do mockup HTML monolítico (`MES_Granado_v28_SinoticoMF.html`, ~10k linhas)
para um app **Vite + React + React Router**.

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`. A rota inicial é `/pes-ordens` (mesmo default do mockup original).

> **Pré-requisito:** Node.js instalado (não detectei nesta máquina). Use a versão LTS atual.

## Como funciona

A migração foi feita em estratégia **shell React + screens preservados**:

| Camada | Implementação | Arquivos |
| --- | --- | --- |
| Layout, Sidebar, Topbar, Modais | React puro | `src/components/` |
| Roteamento | React Router (rota por `id` de tela) | `src/App.jsx` + `src/lib/nav-config.js` |
| Conteúdo de cada tela | HTML preservado do mockup, injetado via `dangerouslySetInnerHTML` | `src/legacy/screens.js` (gerado) |
| Modais (14) | HTML preservado + container React | `src/legacy/modals.js` (gerado) |
| Comportamento JS (CEP, sinótico SVG, andon, doc viewer, checklists, etc.) | JS legado injetado no escopo global | `src/legacy/scripts.js` (gerado) + `src/lib/legacy-bridge.js` |
| Estilos | CSS extraído do `<style>` original | `src/styles/globals.css` (gerado) |

### Por que esse approach?

O mockup tem ~2 000 linhas de JS legado fortemente acoplado (`onclick="nav('foo')"`,
`getElementById('cep-canvas')`, `FAB_APROVACOES.embalagens=true`, `andFiltrar()`,
`drawSinotico()` etc.). Reescrever 47 telas em JSX puro num único passo seria lento e
arriscado — qualquer typo num `style="…"` ou num `onclick=` quebra tela inteira.

A estratégia escolhida entrega:

1. **Navegação React Router de verdade** (deeplinks, back/forward, refresh): `/sinotico`, `/prod-cockpit`, `/rel-oee`, etc.
2. **Layout / Sidebar / Topbar / Modais como componentes React limpos** — já estão prontos pra refatoração.
3. **100% do visual e comportamento preservados** — o JS legado roda intacto.
4. **Caminho claro pra migração tela-a-tela** (próxima seção).

## Como migrar uma tela específica para JSX puro

1. Pegue o conteúdo de `src/legacy/screens.js[<id>]` (ex: `'prod-cockpit'`).
2. Crie `src/screens/ProdCockpit.jsx` convertendo HTML → JSX:
   - `class=` → `className=`
   - `for=` → `htmlFor=`
   - `style="…"` → `style={{…}}` (objeto)
   - `onclick="nav('foo')"` → `onClick={() => navigate('/foo')}`
   - `onclick="openModal('m')"` → `onClick={() => openModal('m')}`
3. Em `src/App.jsx`, troque `<LegacyScreen id="prod-cockpit" />` por `<ProdCockpit />` na rota correspondente.
4. Estados que vinham de variáveis globais legadas (`FAB_APROVACOES`, `postoAlocacao`, etc.) você pode migrar pra `useState` / contexto em paralelo.

A `nav-config.js` é independente — não precisa mexer.

## Re-extrair (quando o mockup for atualizado)

Quando você receber um `MES_Granado_v29...html`, basta:

```bash
python scripts/extract.py --src ../MES_Granado_v29_NOVO.html
```

Isso regenera `globals.css`, `screens.js`, `modals.js`, `scripts.js`, `manifest.json`.
**Nada feito à mão é sobrescrito** (componentes React, nav-config, App, etc.).

## Ajustes de navegabilidade aplicados

- Aliases preservados:
  - `/rel-sinotico` → redireciona pra `/sinotico`
  - `/rel-andon` → redireciona pra `/prod-chamados`
- Botões inline `onclick="nav('foo')"` continuam funcionando (são interceptados pelo `window.nav` bridge e disparam `navigate()`).
- Botões da topbar (Pedir Ajuda, Solicitação Serviço) abrem modais via React Context.
- Sidebar: clique no módulo abre/fecha o submenu; clique num item navega; o módulo do item ativo abre automaticamente quando você navega via URL.
- Breadcrumb na topbar é derivado da rota atual (não mais de mutação DOM).
- Relógio/data na sidebar usa `useEffect` em vez do `setTimeout(tick, 1000)` legado (evita flicker).

## Estrutura

```
mes-granado-react/
├── package.json
├── vite.config.js
├── index.html
├── scripts/
│   └── extract.py                ← extrator do HTML monolítico
├── src/
│   ├── main.jsx                  ← bootstrap (injeta legacy ANTES do React)
│   ├── App.jsx                   ← rotas + ModalProvider
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   ├── ModalProvider.jsx
│   │   ├── Modals.jsx
│   │   └── LegacyScreen.jsx      ← wrapper com dangerouslySetInnerHTML
│   ├── lib/
│   │   ├── nav-config.js         ← estrutura do menu (4 módulos + topo)
│   │   └── legacy-bridge.js      ← injeção do JS legado + bridges window.nav/openModal
│   ├── legacy/                   ← TUDO ABAIXO É AUTO-GERADO
│   │   ├── screens.js            ←   47 telas como strings HTML
│   │   ├── modals.js             ←   14 modais como strings HTML
│   │   ├── scripts.js            ←   ~2k linhas de JS legado concatenadas
│   │   └── manifest.json         ←   listagem de telas/modais detectadas
│   └── styles/
│       └── globals.css           ← extraído do <style> original
```

## Telas (47)

`sinotico`, `oee`,
`prod-ordens`, `prod-materiais`, `prod-checkin`, `prod-iniciar`, `prod-finalizar`,
`prod-paradas`, `prod-cockpit`, `prod-qualidade`, `prod-docs`, `prod-chamados`,
`prod-rastr`, `prod-sinotico`, `prod-devol`,
`pes-ordens`, `pes-cockpit`, `pes-mps`, `pes-pendencias`, `pes-checklist`,
`pes-gaiola`, `pes-devol-mp`, `pes-checkout`, `pes-rastr`,
`fab-ordens`, `fab-iniciar`, `fab-checkin`, `fab-inbatch`, `fab-amostras`,
`fab-tanque`, `fab-fechar`, `fab-rastr`, `fab-saldo`,
`rel-oee`, `rel-sinotico` (alias), `rel-andon` (alias), `rel-visao-ordens`, `rel-mps`,
`rel-producao`, `rel-rastr`, `rel-rejeitos`, `rel-perdas`, `rel-paradas`,
`rel-autonomia`, `rel-insumos`, `rel-devolucao`, `rel-auditoria`.

## Modais (14)

`modal-andon`, `modal-tractian`, `modal-requisitar`, `modal-just`, `modal-diverg`,
`modal-microparada`, `modal-ck-processo`, `modal-reentiqueta`, `modal-fab-lims`,
`modal-fab-setup`, `modal-fab-checkin-op`, `modal-fab-cockpit-launch`,
`modal-sin-detalhe`, `modal-chamado-detalhe`.

Todos ficam montados no nível raiz (`<Modals/>` em `Layout`) e são abertos via
`openModal('modal-X')` (React Context) ou `window.openModal('modal-X')` (compatibilidade
com handlers inline).
