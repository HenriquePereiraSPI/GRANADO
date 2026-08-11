import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BREADCRUMBS, ALIASES } from '../lib/nav-config.js';
import NotificationsPopup, { INITIAL_NOTIFICATIONS } from './NotificationsPopup.jsx';
import UserPopup from './UserPopup.jsx';

// Usuário logado (placeholder — trocar quando houver auth real).
const USER = {
  name: 'Kaic Lima',
  role: 'Operador de Pesagem',
  matricula: '004821',
  setor: 'Pesagem · Box 3',
  turno: 'Manhã',
  email: 'kaic.lima@granado.com.br',
};

// Máximo de caracteres exibidos no nome; acima disso corta e coloca um ".".
const MAX_NAME = 14;
function shortName(n) {
  return n.length > MAX_NAME ? n.slice(0, MAX_NAME).replace(/\s+$/, '') + '.' : n;
}

export default function Topbar({ onToggleSidebar, sidebarCollapsed }) {
  const { pathname } = useLocation();
  const id = pathname.replace(/^\//, '').split('?')[0] || 'sinotico';
  const resolved = ALIASES[id] || id;
  const crumb = BREADCRUMBS[resolved] || 'MES Apriso';
  const parts = crumb.split(' › ');

  // Popups do topo (usuário + notificações) — fecham ao clicar fora ou Esc.
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const userWrapRef = useRef(null);
  const notifWrapRef = useRef(null);

  // Notificações (estilo Outlook): lista + item selecionado.
  const [notifItems, setNotifItems] = useState(INITIAL_NOTIFICATIONS);
  const [notifSelectedId, setNotifSelectedId] = useState(null);
  const unreadCount = notifItems.filter((i) => i.unread).length;

  function openNotif(id) {
    setNotifSelectedId(id);
    // ao abrir um item, marca como lido (tira o negrito).
    setNotifItems((prev) => prev.map((i) => (i.id === id ? { ...i, unread: false } : i)));
  }

  useEffect(() => {
    if (!userMenuOpen && !notifOpen) return undefined;
    function onDoc(e) {
      if (userMenuOpen && userWrapRef.current && !userWrapRef.current.contains(e.target)) setUserMenuOpen(false);
      if (notifOpen && notifWrapRef.current && !notifWrapRef.current.contains(e.target)) setNotifOpen(false);
    }
    function onKey(e) {
      if (e.key === 'Escape') {
        setUserMenuOpen(false);
        setNotifOpen(false);
      }
    }
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [userMenuOpen, notifOpen]);

  function handleLogout() {
    setUserMenuOpen(false);
    // TODO: integrar logout real (limpar sessão / redirecionar para login).
  }

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
        <div className="tb-icon-wrap" ref={notifWrapRef}>
          <button
            className="tb-icon"
            type="button"
            title="Notificações"
            aria-label="Notificações"
            aria-haspopup="dialog"
            aria-expanded={notifOpen}
            onClick={() => {
              setNotifOpen((o) => !o);
              setUserMenuOpen(false);
            }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {unreadCount > 0 && <span className="tb-icon-dot" />}
          </button>
          {notifOpen && (
            <NotificationsPopup
              items={notifItems}
              selectedId={notifSelectedId}
              onSelect={openNotif}
              onClose={() => setNotifOpen(false)}
            />
          )}
        </div>
        <div className="tb-user-wrap" ref={userWrapRef}>
          <button
            className="tb-user"
            type="button"
            title="Usuário"
            aria-label="Usuário"
            aria-haspopup="dialog"
            aria-expanded={userMenuOpen}
            onClick={() => {
              setUserMenuOpen((o) => !o);
              setNotifOpen(false);
            }}
          >
            <span className="tb-user-avatar">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <span className="tb-user-name" title={USER.name}>{shortName(USER.name)}</span>
          </button>
          {userMenuOpen && (
            <UserPopup user={USER} onLogout={handleLogout} onClose={() => setUserMenuOpen(false)} />
          )}
        </div>
        {/* Badge Granado — visível apenas no mobile (via CSS) */}
        <span className="tb-logo-mobile"><span className="tb-logo-mark">G</span>GRANADO</span>
      </div>
    </div>
  );
}
