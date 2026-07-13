import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TOP_LINKS, MODULES, PARENT_MODULE, ALIASES } from '../lib/nav-config.js';
import logoGranado from '../assets/logos/Grupo Granado - Reduzida - Dourada.png';

// Versão do software: injetada em build-time pelo Vite (ver vite.config.js).
// Em runtime fora do bundle (ex.: testes) cai no fallback.
const APP_VERSION =
  typeof __APP_VERSION__ !== 'undefined'
    ? __APP_VERSION__
    : { hash: 'dev', branch: 'local', date: '', dirty: false };

function fmtTime(d) {
  return d.toLocaleTimeString('pt-BR');
}
function fmtDate(d) {
  return d.toLocaleDateString('pt-BR', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default function Sidebar({ collapsed = false, mobileOpen = false, onNavigate }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentId = pathname.replace(/^\//, '').split('?')[0] || 'sinotico';
  const resolvedId = ALIASES[currentId] || currentId;

  // Modulo aberto: por padrao o que contem a tela atual; senao mod-pes (default original).
  const [openMod, setOpenMod] = useState(() => PARENT_MODULE[resolvedId] || 'mod-pes');

  // Sincroniza o modulo aberto quando a rota muda por outro caminho (botoes inline).
  useEffect(() => {
    const parent = PARENT_MODULE[resolvedId];
    if (parent && parent !== openMod) setOpenMod(parent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedId]);

  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const toggleMod = (modId) => setOpenMod((cur) => (cur === modId ? null : modId));
  const go = (id) => { navigate('/' + id); if (onNavigate) onNavigate(); };

  const isActiveItem = (id) => id === currentId || ALIASES[id] === resolvedId;

  return (
    <aside className={`sidebar${collapsed ? ' collapsed' : ''}${mobileOpen ? ' mobile-open' : ''}`}>
      <div className="sb-brand">
        <div className="sb-brand-top">
          {collapsed ? (
            <div className="sb-mark">G</div>
          ) : (
            <img src={logoGranado} alt="Grupo Granado" className="sb-logo" />
          )}
        </div>
      </div>

      <nav className="sb-nav">
        {TOP_LINKS.map((t) => (
          <button
            key={t.id}
            className={`sb-module-btn${currentId === t.id ? ' active' : ''}`}
            onClick={() => go(t.id)}
            title={collapsed ? t.label : undefined}
          >
            <span className="sb-ico">{t.icon}</span>
            {!collapsed && <span className="sb-lbl">{t.label}</span>}
          </button>
        ))}

        {MODULES.map((m) => {
          const open = openMod === m.id && !collapsed;
          const containsActive = m.items.some((it) => isActiveItem(it.id));
          return (
            <div key={m.id}>
              <button
                className={`sb-module-btn${open ? ' open' : ''}${containsActive ? ' active' : ''}`}
                onClick={() => !collapsed && toggleMod(m.id)}
                title={collapsed ? m.label : undefined}
              >
                {containsActive && <div className="sb-dot" />}
                <span className="sb-ico">{m.icon}</span>
                {!collapsed && (
                  <>
                    <span className="sb-lbl">{m.label}</span>
                    <span className="sb-arr">›</span>
                  </>
                )}
              </button>
              {!collapsed && (
                <div className={`sb-sub-list${open ? ' open' : ''}`} id={m.id}>
                  {m.items.map((it) => (
                    <button
                      key={it.id}
                      className={`sb-sub-item${!it.href && isActiveItem(it.id) ? ' active' : ''}`}
                      onClick={() => { if (it.href) { window.open(it.href, '_blank', 'noopener'); if (onNavigate) onNavigate(); } else { go(it.id); } }}
                      title={it.href ? 'Abre em nova aba' : undefined}
                    >
                      {it.label}
                      {it.href && <span style={{ marginLeft: 'auto', fontSize: 10, opacity: 0.6 }}>↗</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="sb-footer">
          <div
            className="sb-version"
            title={`Build ${APP_VERSION.hash} · branch ${APP_VERSION.branch}${APP_VERSION.date ? ' · ' + APP_VERSION.date : ''}${APP_VERSION.dirty ? ' · árvore com alterações não-commitadas' : ''}`}
          >
            <span className="sb-version-tag">v</span>
            <span className="sb-version-hash">{APP_VERSION.hash}</span>
            {APP_VERSION.dirty && <span className="sb-version-dirty" title="Há alterações não-commitadas">●</span>}
            <span className="sb-version-branch">{APP_VERSION.branch}</span>
          </div>
          <div className="sb-clock" id="sb-clk">{fmtTime(now)}</div>
          <div className="sb-date" id="sb-date">{fmtDate(now)}</div>
        </div>
      )}
    </aside>
  );
}
