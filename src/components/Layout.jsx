import Sidebar from './Sidebar.jsx';
import Topbar from './Topbar.jsx';
import Modals from './Modals.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        <div className="content">{children}</div>
      </div>
      <Modals />
    </>
  );
}
