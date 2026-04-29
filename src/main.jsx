import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { injectLegacyScripts } from './lib/legacy-bridge.js';
import './styles/globals.css';
import './styles/app-layout.css';

// Injeta o JS legado ANTES de montar o React, para que `window.nav`,
// `window.drawSinotico`, `window.andFiltrar`, FAB_APROVACOES etc. existam quando
// a primeira tela tentar inicializar.
injectLegacyScripts();
// Captura a cadeia legada de `nav` antes do React Router sobrescrever.
if (typeof window.nav === 'function' && !window._legacyNav) {
  window._legacyNav = window.nav;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
