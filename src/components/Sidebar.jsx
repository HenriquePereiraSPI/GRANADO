import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TOP_LINKS, MODULES, PARENT_MODULE, ALIASES } from '../lib/nav-config.js';

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

export default function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentId = pathname.replace(/^\//, '') || 'sinotico';
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
  const go = (id) => navigate('/' + id);

  const isActiveItem = (id) => id === currentId || ALIASES[id] === resolvedId;

  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <div className="sb-brand-top">
          <div className="sb-mark">G</div>
          <div>
            <div className="sb-name">Casa Granado</div>
            <div className="sb-sub">Pharmácias · Desde 1870</div>
          </div>
        </div>
        <div className="sb-session">
          <span>● Online</span> · MES Apriso<br />
          Turno A · MF5 · <span>J. Santos</span>
        </div>
      </div>

      <nav className="sb-nav">
        {TOP_LINKS.map((t) => (
          <button
            key={t.id}
            className={`sb-module-btn${currentId === t.id ? ' active' : ''}`}
            onClick={() => go(t.id)}
          >
            <span className="sb-ico">{t.icon}</span> {t.label}
          </button>
        ))}

        {MODULES.map((m) => {
          const open = openMod === m.id;
          const containsActive = m.items.some((it) => isActiveItem(it.id));
          return (
            <div key={m.id}>
              <button
                className={`sb-module-btn${open ? ' open' : ''}${containsActive ? ' active' : ''}`}
                onClick={() => toggleMod(m.id)}
              >
                {containsActive && <div className="sb-dot" />}
                <span className="sb-ico">{m.icon}</span> {m.label}
                <span className="sb-arr">›</span>
              </button>
              <div className={`sb-sub-list${open ? ' open' : ''}`} id={m.id}>
                {m.items.map((it) => (
                  <button
                    key={it.id}
                    className={`sb-sub-item${isActiveItem(it.id) ? ' active' : ''}`}
                    onClick={() => go(it.id)}
                  >
                    {it.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="sb-footer">
        <div className="sb-clock" id="sb-clk">{fmtTime(now)}</div>
        <div className="sb-date" id="sb-date">{fmtDate(now)}</div>
      </div>
    </aside>
  );
}
