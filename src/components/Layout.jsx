import { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import Modals from './Modals.jsx';

export default function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setSidebarCollapsed((c) => !c);

  return (
    <>
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="main">
        <Topbar onToggleSidebar={toggleSidebar} sidebarCollapsed={sidebarCollapsed} />
        <div className="content">{children}</div>
      </div>
      <Modals />
    </>
  );
}
