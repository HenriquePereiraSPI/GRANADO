import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LegacyScreen from './components/LegacyScreen.jsx';
import SinoticoScreen from './components/SinoticoScreen.jsx';
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

          {/* todas as demais telas extraidas */}
          {manifest.screens.map((id) => {
            if (id === 'sinotico') return null; // ja tratado acima
            const target = resolveScreenId(id);
            // se ja virou alias, pulamos pra evitar duplicidade
            if (target !== id) return null;
            return <Route key={id} path={'/' + id} element={<LegacyScreen id={id} />} />;
          })}

          {/* fallback */}
          <Route path="*" element={<LegacyScreen id="__notfound__" />} />
        </Routes>
      </Layout>
    </ModalProvider>
  );
}
