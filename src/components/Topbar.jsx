import { useLocation } from 'react-router-dom';
import { BREADCRUMBS, ALIASES } from '../lib/nav-config.js';
import { useModal } from './ModalProvider.jsx';

export default function Topbar({ onToggleSidebar, sidebarCollapsed }) {
  const { pathname } = useLocation();
  const id = pathname.replace(/^\//, '').split('?')[0] || 'sinotico';
  const resolved = ALIASES[id] || id;
  const crumb = BREADCRUMBS[resolved] || 'MES Apriso';
  const parts = crumb.split(' › ');

  const { openModal } = useModal();

  return (
    <div className="topbar">
      <button
        className="tb-hamburger"
        onClick={onToggleSidebar}
        title={sidebarCollapsed ? 'Expandir menu' : 'Recolher menu'}
        aria-label={sidebarCollapsed ? 'Expandir menu lateral' : 'Recolher menu lateral'}
      >
        <span className="tb-hamburger-bar" />
        <span className="tb-hamburger-bar" />
        <span className="tb-hamburger-bar" />
      </button>
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
        {/* "OP Ativa: ..." removida do topbar — informação já aparece no header
            de cada sub-tela da Pesagem (evita duplicação). */}
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
