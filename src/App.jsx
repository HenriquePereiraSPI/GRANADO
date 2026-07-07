import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LegacyScreen from './components/LegacyScreen.jsx';
import SinoticoScreen from './components/SinoticoScreen.jsx';
import ProdCockpitScreen from './components/ProdCockpitScreen.jsx';
import GenealogiaScreen from './components/GenealogiaScreen.jsx';
import PesagemOeeScreen from './components/PesagemOeeScreen.jsx';
import PesPerformanceOrdemScreen from './components/PesPerformanceOrdemScreen.jsx';
import PesPerformanceMpScreen from './components/PesPerformanceMpScreen.jsx';
import PesPerformanceOperadorScreen from './components/PesPerformanceOperadorScreen.jsx';
import PesPerformanceGestaoScreen from './components/PesPerformanceGestaoScreen.jsx';
import QualidadeReconciliacaoScreen from './components/QualidadeReconciliacaoScreen.jsx';
import QualidadeFilaReconciliacaoScreen from './components/QualidadeFilaReconciliacaoScreen.jsx';
import QualidadeAmostrasScreen from './components/QualidadeAmostrasScreen.jsx';
import QualidadeCorrecoesGestaoScreen from './components/QualidadeCorrecoesGestaoScreen.jsx';
import PesOrdemSubScreen from './components/PesOrdemSubScreen.jsx';
import ReconciliacaoContexto from './components/ReconciliacaoContexto.jsx';
import ProdOrdemContexto from './components/ProdOrdemContexto.jsx';
import FabOrdemContexto from './components/FabOrdemContexto.jsx';

/** Sub-telas da Pesagem que so podem ser acessadas com ?op= setado.
 *  Sao agrupadas dentro de pes-ordens (a tela "pai"). Acesso direto
 *  cai no empty-state do wrapper PesOrdemSubScreen. */
const PES_ORDEM_SUBSCREENS = new Set([
  'pes-cockpit', 'pes-mps',
  'pes-checklist', 'pes-gaiola', 'pes-devol-mp', 'pes-checkout',
  'pes-paradas',
]);

/** Sub-telas da Ordem de Producao — apos iniciar a ordem (prod-iniciar)
 *  o sistema entra no contexto com ?op= e estas telas ganham a sub-navbar.
 *  Acesso direto (sem ?op) renderiza a tela sem a sub-navbar.
 *  prod-cockpit tem rota propria (ProdCockpitScreen) — envelopada a parte. */
const PROD_ORDEM_SUBSCREENS = new Set([
  'prod-materiais', 'prod-paradas', 'prod-qualidade', 'prod-docs', 'prod-devol',
  'prod-finalizar',
]);

/** Sub-telas da Ordem de Fabricacao — apos iniciar a ordem (popup) o sistema
 *  entra no contexto com ?op= e estas telas ganham a sub-navbar.
 *  Acesso direto (sem ?op) renderiza a tela sem a sub-navbar. */
const FAB_ORDEM_SUBSCREENS = new Set([
  'fab-inbatch', 'fab-checkin', 'fab-amostras', 'fab-fechar',
]);
import { ModalProvider, useModal } from './components/ModalProvider.jsx';
import { injectLegacyScripts, installNavBridges, resolveScreenId } from './lib/legacy-bridge.js';
import manifest from './legacy/manifest.json';
import { ALIASES } from './lib/nav-config.js';

/**
 * Componente que injeta o JS legado e instala os bridges no boot.
 * Tem que rodar dentro do BrowserRouter + ModalProvider, pq depende de useNavigate
 * e do contexto de modal.
 */
function LegacyBootstrap() {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    injectLegacyScripts();
    installNavBridges({
      navigate,
      openModalFn: openModal,
      closeModalFn: closeModal,
    });
  }, [navigate, openModal, closeModal]);

  return null;
}

/**
 * Redireciona aliases (ex.: /rel-sinotico -> /sinotico).
 */
function AliasRedirect({ to }) {
  return <Navigate to={'/' + to} replace />;
}

export default function App() {
  return (
    <ModalProvider>
      <LegacyBootstrap />
      <Layout>
        <Routes>
          {/* default */}
          <Route path="/" element={<Navigate to="/pes-ordens" replace />} />

          {/* aliases originais */}
          {Object.entries(ALIASES).map(([from, to]) => (
            <Route key={from} path={'/' + from} element={<AliasRedirect to={to} />} />
          ))}

          {/* sinotico expandido (ERU 5.1.55): cobre Producao + Pesagem + Fabricacao */}
          <Route path="/sinotico" element={<SinoticoScreen />} />

          {/* prod-cockpit: wrapper React que injeta o grafico hora-a-hora.
              Envelopado no contexto da OP (sub-navbar quando ?op presente). */}
          <Route path="/prod-cockpit" element={<ProdOrdemContexto id="prod-cockpit"><ProdCockpitScreen /></ProdOrdemContexto>} />

          {/* genealogia de lote: dossie eletronico EBR (WO 784426) */}
          <Route path="/dash-genealogia" element={<ReconciliacaoContexto id="dash-genealogia"><GenealogiaScreen /></ReconciliacaoContexto>} />

          {/* OEE Pesagem (componente React) */}
          <Route path="/pes-oee" element={<PesagemOeeScreen />} />

          {/* Pesagem — Performance por Ordem (Granel: padrão vs real) */}
          <Route path="/pes-perf-ordem" element={<PesPerformanceOrdemScreen />} />

          {/* Pesagem — Performance por Matéria-Prima (tempo de ciclo por MP) */}
          <Route path="/pes-perf-mp" element={<PesPerformanceMpScreen />} />

          {/* Pesagem — Performance Pessoal (Fase A) */}
          <Route path="/pes-perf-operador" element={<PesPerformanceOperadorScreen />} />

          {/* Pesagem — Performance Gestão (gerencial, restrita a Líder/Supervisor) */}
          <Route path="/pes-perf-gestao" element={<PesPerformanceGestaoScreen />} />

          {/* Qualidade — Fila de Reconciliacoes Pendentes (grid JDE F4108-Z) */}
          <Route path="/qual-fila" element={<QualidadeFilaReconciliacaoScreen />} />

          {/* Qualidade — Reconciliacao Tecnica e Liberacao de Lote */}
          <Route path="/qual-reconciliacao" element={<ReconciliacaoContexto id="qual-reconciliacao"><QualidadeReconciliacaoScreen /></ReconciliacaoContexto>} />

          {/* Qualidade — Amostras de Retencao (gerencial, RDC 658/2022) */}
          <Route path="/qual-amostras" element={<ReconciliacaoContexto id="qual-amostras"><QualidadeAmostrasScreen /></ReconciliacaoContexto>} />

          {/* Qualidade — Dashboard de Correcoes (gerencial, perfil Q-MGMT) */}
          <Route path="/qual-correcoes-gestao" element={<QualidadeCorrecoesGestaoScreen />} />

          {/* todas as demais telas extraidas */}
          {manifest.screens.map((id) => {
            if (id === 'sinotico') return null; // ja tratado acima
            if (id === 'prod-cockpit') return null; // ja tratado acima
            const target = resolveScreenId(id);
            // se ja virou alias, pulamos pra evitar duplicidade
            if (target !== id) return null;
            // Sub-telas da Pesagem: envelopadas no wrapper que valida ?op=
            if (PES_ORDEM_SUBSCREENS.has(id)) {
              return <Route key={id} path={'/' + id} element={<PesOrdemSubScreen id={id} />} />;
            }
            // Sub-telas da Ordem de Producao: contexto com sub-navbar quando ?op=
            if (PROD_ORDEM_SUBSCREENS.has(id)) {
              return <Route key={id} path={'/' + id} element={<ProdOrdemContexto id={id}><LegacyScreen id={id} /></ProdOrdemContexto>} />;
            }
            // Sub-telas da Ordem de Fabricacao: contexto com sub-navbar quando ?op=
            if (FAB_ORDEM_SUBSCREENS.has(id)) {
              return <Route key={id} path={'/' + id} element={<FabOrdemContexto id={id}><LegacyScreen id={id} /></FabOrdemContexto>} />;
            }
            return <Route key={id} path={'/' + id} element={<LegacyScreen id={id} />} />;
          })}

          {/* fallback */}
          <Route path="*" element={<LegacyScreen id="__notfound__" />} />
        </Routes>
      </Layout>
    </ModalProvider>
  );
}
