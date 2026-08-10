import { useLocation } from 'react-router-dom';
import { BREADCRUMBS, ALIASES } from '../lib/nav-config.js';

// Nome abreviado do usuário logado (placeholder — trocar quando houver auth real).
const USER_NAME = 'K. Lima';

export default function Topbar({ onToggleSidebar, sidebarCollapsed }) {
  const { pathname } = useLocation();
  const id = pathname.replace(/^\//, '').split('?')[0] || 'sinotico';
  const resolved = ALIASES[id] || id;
  const crumb = BREADCRUMBS[resolved] || 'MES Apriso';
  const parts = crumb.split(' › ');

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
        <button className="tb-icon" type="button" title="Notificações" aria-label="Notificações">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="tb-icon-dot" />
        </button>
        <button className="tb-user" type="button" title="Usuário" aria-label="Usuário">
          <span className="tb-user-avatar">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <span className="tb-user-name">{USER_NAME}</span>
        </button>
        {/* Badge Granado — visível apenas no mobile (via CSS) */}
        <span className="tb-logo-mobile"><span className="tb-logo-mark">G</span>GRANADO</span>
      </div>
    </div>
  );
}
