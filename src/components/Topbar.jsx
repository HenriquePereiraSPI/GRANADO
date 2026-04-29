import { useLocation } from 'react-router-dom';
import { BREADCRUMBS, ALIASES } from '../lib/nav-config.js';
import { useModal } from './ModalProvider.jsx';

export default function Topbar() {
  const { pathname } = useLocation();
  const id = pathname.replace(/^\//, '') || 'sinotico';
  const resolved = ALIASES[id] || id;
  const crumb = BREADCRUMBS[resolved] || 'MES Apriso';
  const parts = crumb.split(' › ');

  const { openModal } = useModal();

  return (
    <div className="topbar">
      <div className="topbar-breadcrumb" id="breadcrumb">
        {parts.length > 1 ? (
          <>
            {parts[0]} ›{' '}
            <strong>{parts.slice(1).join(' › ')}</strong>
          </>
        ) : (
          <strong>{parts[0]}</strong>
        )}
      </div>
      <div className="topbar-right">
        <div className="tb-pill ok">● Sistema Online</div>
        <div className="tb-pill">OP Ativa: OP-2026-0414</div>
        <button
          className="tb-btn-andon"
          onClick={() => openModal('modal-andon')}
          title="Cadeia de Ajuda Autonoma — ERU 4.1.22"
        >
          🚨 Pedir Ajuda
        </button>
        <button className="tb-btn" onClick={() => openModal('modal-tractian')}>
          + Solicitação Serviço
        </button>
      </div>
    </div>
  );
}
