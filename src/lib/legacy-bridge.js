/**
 * Bridge entre o sistema React e o JS legado extraido do HTML original.
 *
 * Responsabilidades:
 *  1) Injetar UMA UNICA VEZ todo o conteudo de src/legacy/scripts.js no escopo global,
 *     pra preservar todas as funcoes (nav, openModal, sinDetalhe, andFiltrar, toggleVal,
 *     CEP draw, sinotico SVG, etc.) com `window.X` acessiveis aos onclick=".." inline.
 *
 *  2) Sobrescrever `window.nav` pra delegar a navegacao ao React Router em vez de
 *     mexer com classList das DIVs `.screen` (que nao existem mais simultaneamente
 *     no DOM — so a tela ativa ta montada).
 *
 *  3) Sobrescrever `window.openModal/closeModal` pra usar o estado React (ModalProvider)
 *     em vez de toggle de classe — assim os modais sao montados como filhos de <Modals/>
 *     no nivel raiz e podem usar a marcacao original com `class="modal-overlay open"`.
 *
 *  4) Disparar `legacy:screen-mounted` (CustomEvent) sempre que uma nova tela é montada,
 *     pra dar oportunidade aos handlers legados de re-inicializarem (ex.: redesenhar
 *     o canvas CEP, montar o SVG do sinotico, popular o grid Andon).
 */

import scriptText from '../legacy/scripts.js?raw';
import { ALIASES } from './nav-config.js';

let injected = false;

export function injectLegacyScripts() {
  if (injected) return;
  injected = true;

  // 1) executar o codigo legado no escopo global
  //    Como injetamos APOS DOMContentLoaded ja ter disparado, qualquer
  //    document.addEventListener('DOMContentLoaded', cb) nao chamaria cb nunca.
  //    Substituimos por setTimeout(cb, 0) pra preservar a logica de inicializacao.
  //    Tambem removemos o tick() do relogio (sidebar React ja faz isso) pra evitar
  //    flicker de doble-update no #sb-clk / #sb-date.
  const patched = scriptText
    // tick() do relogio - sidebar React cuida disso
    .replace(
      /\/\* ── Relógio[\s\S]*?\}\)\(\);/,
      '/* tick() removido — Sidebar React gerencia o relogio do sb-clk/sb-date */',
    )
    // breadcrumb — React Topbar cuida disso (e o React nao tolera mutacao externa
    // de elementos controlados por JSX). Removemos as 3 linhas do nav() legado
    // que mutam #breadcrumb.
    .replace(
      /const bc = document\.getElementById\('breadcrumb'\);[\s\S]*?bc\.innerHTML\s*=[^;]+;/,
      '/* breadcrumb gerenciado pelo React Topbar */',
    )
    // Trocar `const FAB_APROVACOES = ...` por `var window.FAB_APROVACOES = ...`
    // pra ficar acessivel via window (necessario pra emitScreenMounted ler o estado
    // ao navegar pra prod-materiais). `const` no escopo de script NAO vira propriedade
    // de window — `var` vira.
    .replace(
      /const\s+FAB_APROVACOES\s*=/,
      'var FAB_APROVACOES = window.FAB_APROVACOES =',
    )
    // DOMContentLoaded handlers -> setTimeout(handler, 0)
    .replace(
      /document\.addEventListener\(\s*['"]DOMContentLoaded['"]\s*,\s*/g,
      'setTimeout(',
    )
    // o substituto fica `setTimeout(() => { ... });` — falta o ", 0" no final.
    // Como a regex acima trocou apenas o prefixo, precisamos consertar o sufixo.
    // O original: document.addEventListener('DOMContentLoaded', () => { ... });
    // Pos-replace:        setTimeout(                       () => { ... });
    // O `0` deveria ser inserido antes do `)` final do callback. Como o codigo
    // original sempre termina com `})` ou `});`, basta substituir `})` -> `}, 0)`
    // mas isso e arriscado em outras areas. Solucao mais simples: deixar o
    // setTimeout sem delay (default = ~4ms) — basta remover a virgula que sobrou.
    // Como nao tem virgula sobrando (ja estava la antes do callback), nada a fazer.
    ;

  const script = document.createElement('script');
  script.id = 'mes-legacy-scripts';
  script.textContent = patched;
  document.head.appendChild(script);
}

/**
 * Resolve aliases (rel-sinotico -> sinotico, rel-andon -> prod-chamados).
 */
export function resolveScreenId(id) {
  return ALIASES[id] || id;
}

/**
 * Instala os bridges para `window.nav` e `window.openModal/closeModal`.
 * Deve rodar APOS injectLegacyScripts().
 *
 * Estrategia:
 *  - Preservamos a cadeia inteira de `nav` legada como `window._legacyNav` —
 *    ela contem logicas importantes (alias map, breadcrumb, auto-mark de
 *    embalagens em prod-materiais, redesenho do sinotico SVG, init do CEP, etc.).
 *  - `window.nav` passa a ser uma versao "leve" que apenas invoca o React Router.
 *    Quando a tela montar, o LegacyScreen chama `_legacyNav(id)` pra disparar
 *    os efeitos legados *com a tela ja no DOM*.
 *
 * @param {Function} navigate    react-router-dom useNavigate()
 * @param {Function} openModalFn (id) => void  — vem do ModalContext
 * @param {Function} closeModalFn(id) => void
 */
export function installNavBridges({ navigate, openModalFn, closeModalFn }) {
  // captura a cadeia legada completa (apos injectLegacyScripts ter rodado)
  if (typeof window.nav === 'function' && !window._legacyNav) {
    window._legacyNav = window.nav;
  }

  window.nav = (id /*, subEl, modId */) => {
    const target = resolveScreenId(id);
    navigate('/' + target);
  };

  // ── modais ────────────────────────────────────────────────────────────
  window.openModal = (id) => openModalFn(id);
  window.closeModal = (id) => closeModalFn(id);
}

/**
 * Notifica o JS legado que uma nova tela acabou de montar e dispara os
 * efeitos especificos que a `nav()` legada faria (auto-mark de embalagens,
 * redesenho do sinotico SVG, init do CEP, init do grid Andon).
 *
 * Por que NAO chamamos `_legacyNav(id)` aqui? A `nav` legada faz
 * `querySelectorAll('.sb-sub-item').forEach(s => s.classList.remove('active'))`,
 * mutando classes nos botoes do Sidebar React — isso corrompe a arvore de
 * reconciliacao do React e quebra o re-render da Topbar (erros em <Text>/<strong>).
 * Por isso disparamos so os efeitos colaterais de DOM "interno a tela", que sao
 * seguros (a tela e renderizada via dangerouslySetInnerHTML — React nao
 * controla seus filhos).
 *
 * IMPORTANTE: chamar APOS o React ter inserido a tela no DOM (via useEffect).
 */
export function emitScreenMounted(screenId) {
  window.dispatchEvent(new CustomEvent('legacy:screen-mounted', { detail: { screenId } }));

  try {
    // Auto-mark embalagens ao entrar em prod-materiais (logica original do nav legado)
    if (
      screenId === 'prod-materiais' &&
      typeof window.FAB_APROVACOES !== 'undefined' &&
      !window.FAB_APROVACOES.embalagens
    ) {
      setTimeout(() => {
        window.FAB_APROVACOES.embalagens = true;
        if (typeof window.fabMarcarAprovado === 'function') window.fabMarcarAprovado('fval-2');
        if (typeof window.fabAtualizarProgresso === 'function') window.fabAtualizarProgresso();
      }, 600);
    }

    // Redesenhar canvas CEP em prod-qualidade
    if (screenId === 'prod-qualidade' && typeof window._cepDraw === 'function') {
      requestAnimationFrame(() => {
        const sel = document.getElementById('cep-param');
        window._cepDraw(sel ? sel.value : 'peso');
      });
    }

    // Popular grid Andon em prod-chamados
    if (screenId === 'prod-chamados' && typeof window.andFiltrar === 'function') {
      requestAnimationFrame(() => window.andFiltrar());
    }

    // Renderizar SVG sinotico em prod-sinotico
    if (screenId === 'prod-sinotico' && typeof window.drawSinotico === 'function') {
      requestAnimationFrame(() => {
        window.drawSinotico();
        if (typeof window.sinAtualizarHora === 'function') window.sinAtualizarHora();
      });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('[legacy-bridge] efeito colateral falhou para', screenId, err);
  }
}
