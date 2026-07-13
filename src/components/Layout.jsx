import { useState, useEffect } from 'react';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import Modals from './Modals.jsx';

/**
 * Breakpoint responsivo: > 768px = WEB · <= 768px = MOBILE.
 * No mobile a sidebar vira um drawer off-canvas (abre sobre a página).
 */
function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, [query]);
  return isMobile;
}

export default function Layout({ children }) {
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // desktop: recolhe (56px)
  const [mobileOpen, setMobileOpen] = useState(false);             // mobile: drawer aberto

  // O ícone de menu (hambúrguer): no mobile abre/fecha o drawer; no desktop recolhe.
  const toggleSidebar = () => {
    if (isMobile) setMobileOpen((o) => !o);
    else setSidebarCollapsed((c) => !c);
  };

  // Ao sair do mobile, garante que o drawer não fique "preso" aberto.
  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  return (
    <>
      <Sidebar
        collapsed={!isMobile && sidebarCollapsed}
        mobileOpen={isMobile && mobileOpen}
        onNavigate={() => setMobileOpen(false)}
      />
      {isMobile && mobileOpen && (
        <div className="sidebar-backdrop" onClick={() => setMobileOpen(false)} />
      )}
      <div className="main">
        <Topbar onToggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
        <div className="content">{children}</div>
      </div>
      <Modals />
    </>
  );
}
