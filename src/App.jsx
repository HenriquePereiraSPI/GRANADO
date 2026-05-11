import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LegacyScreen from './components/LegacyScreen.jsx';
import SinoticoScreen from './components/SinoticoScreen.jsx';
import ProdCockpitScreen from './components/ProdCockpitScreen.jsx';
import GenealogiaScreen from './components/GenealogiaScreen.jsx';
import PesagemOeeScreen from './components/PesagemOeeScreen.jsx';
import PesPerformanceOperadorScreen from './components/PesPerformanceOperadorScreen.jsx';
import PesPerformanceGestaoScreen from './components/PesPerformanceGestaoScreen.jsx';
import QualidadeReconciliacaoScreen from './components/QualidadeReconciliacaoScreen.jsx';
import QualidadeFilaReconciliacaoScreen from './components/QualidadeFilaReconciliacaoScreen.jsx';
import PesOrdemSubScreen from './components/PesOrdemSubScreen.jsx';

/** Sub-telas da Pesagem que so podem ser acessadas com ?op= setado.
 *  Sao agrupadas dentro de pes-ordens (a tela "pai"). Acesso direto
 *  cai no empty-state do wrapper PesOrdemSubScreen. */
const PES_ORDEM_SUBSCREENS = new Set([
  'pes-cockpit', 'pes-mps',
  'pes-checklist', 'pes-gaiola', 'pes-devol-mp', 'pes-checkout',
  'pes-paradas',
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

          {/* prod-cockpit: wrapper React que injeta o grafico hora-a-hora */}
          <Route path="/prod-cockpit" element={<ProdCockpitScreen />} />

          {/* genealogia de lote: dossie eletronico EBR (WO 784426) */}
          <Route path="/dash-genealogia" element={<GenealogiaScreen />} />

          {/* OEE Pesagem (componente React) */}
          <Route path="/pes-oee" element={<PesagemOeeScreen />} />

          {/* Pesagem — Performance Pessoal (Fase A) */}
          <Route path="/pes-perf-operador" element={<PesPerformanceOperadorScreen />} />

          {/* Pesagem — Performance Gestão (gerencial, restrita a Líder/Supervisor) */}
          <Route path="/pes-perf-gestao" element={<PesPerformanceGestaoScreen />} />

          {/* Qualidade — Fila de Reconciliacoes Pendentes (grid JDE F4108-Z) */}
          <Route path="/qual-fila" element={<QualidadeFilaReconciliacaoScreen />} />

          {/* Qualidade — Reconciliacao Tecnica e Liberacao de Lote */}
          <Route path="/qual-reconciliacao" element={<QualidadeReconciliacaoScreen />} />

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
            return <Route key={id} path={'/' + id} element={<LegacyScreen id={id} />} />;
          })}

          {/* fallback */}
          <Route path="*" element={<LegacyScreen id="__notfound__" />} />
        </Routes>
      </Layout>
    </ModalProvider>
  );
}
