import { useMemo, useState } from 'react';
import { PESAGEM_OEE as D } from '../data/pes-oee-data.js';

/**
 * Tela /pes-perf-ordem — Performance por Ordem da Pesagem.
 *
 * Comparativo entre o Tempo padrão (cronoanálise) e o Tempo real de cada
 * granel/ordem — a antiga tabela "Performance · Visão Granel (oficial OEE)"
 * que vivia na tela de OEE Pesagem, agora com submenu próprio.
 *
 * Filtros seguem o mesmo padrão da tela de Performance (Operador):
 * seletor de período no header + card de filtros (dropdowns + Limpar).
 */

const COR_STATUS = {
  dentro:  { fg: 'var(--ok)',   bg: 'var(--ok-p)',   bd: 'var(--ok-b)',   label: '✓ Dentro do padrão' },
  atencao: { fg: 'var(--alr)',  bg: 'var(--alr-p)',  bd: 'var(--alr-b)',  label: '⚠ Atenção' },
  fora:    { fg: 'var(--per)',  bg: 'var(--per-p)',  bd: 'var(--per-b)',  label: '⚠ Fora do padrão' },
};

const STATUS_LABEL = {
  dentro:  'Dentro do padrão',
  atencao: 'Atenção',
  fora:    'Fora do padrão',
};

const FILTRO_PADRAO = { granel: 'todos', ordem: 'todos', status: 'todos', dataInicio: '', dataFim: '' };

export default function PesPerformanceOrdemScreen() {
  // Rascunho (o que está nos campos) x aplicado (o que filtra a tabela).
  // Só vira "aplicado" ao clicar em Filtrar — dando sentido ao botão.
  const [rascunho, setRascunho] = useState(FILTRO_PADRAO);
  const [aplicado, setAplicado] = useState(FILTRO_PADRAO);

  const setCampo = (campo) => (e) => setRascunho((r) => ({ ...r, [campo]: e.target.value }));

  // Listas únicas para os dropdowns.
  const graneisDisponiveis = useMemo(
    () => [...new Set(D.performanceGranel.map((g) => g.granel))].sort(),
    []
  );
  const ordensDisponiveis = useMemo(
    () => [...new Set(D.performanceGranel.map((g) => g.ordem))].sort(),
    []
  );

  // Linhas visíveis: aplicam-se os filtros JÁ APLICADOS.
  const dadosFiltrados = useMemo(() => {
    return D.performanceGranel.filter((g) => {
      if (aplicado.granel !== 'todos' && g.granel !== aplicado.granel) return false;
      if (aplicado.ordem !== 'todos' && g.ordem !== aplicado.ordem) return false;
      if (aplicado.status !== 'todos' && g.status !== aplicado.status) return false;
      return true;
    });
  }, [aplicado]);

  // Totais/Performance recalculados sobre o conjunto filtrado.
  const calc = useMemo(() => {
    const padraoTotal = dadosFiltrados.reduce((s, g) => s + g.tempoPadrao, 0);
    const realTotal   = dadosFiltrados.reduce((s, g) => s + g.tempoReal,   0);
    const performance = realTotal > 0 ? (padraoTotal / realTotal) * 100 : 0;
    return { padraoTotal, realTotal, performance };
  }, [dadosFiltrados]);

  const aplicarFiltros = () => setAplicado(rascunho);
  const limparFiltros = () => { setRascunho(FILTRO_PADRAO); setAplicado(FILTRO_PADRAO); };

  const ehPadrao = (f) => f.granel === 'todos' && f.ordem === 'todos' && f.status === 'todos' && !f.dataInicio && !f.dataFim;
  const podeLimpar = !ehPadrao(rascunho) || !ehPadrao(aplicado);
  const aplicadoAtivo = !ehPadrao(aplicado);

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Pesagem · MF5 · ERU 5.2.x — Performance por Ordem</div>
          <div className="ph-title">Performance (Ordem)</div>
        </div>
      </div>

      {/* ── Filtros ─────────────────────────────────────────── */}
      <div
        className="card mb14"
        style={{
          padding: 14,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12,
          alignItems: 'flex-end',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Data início</label>
          <input
            type="date"
            className="sel"
            value={rascunho.dataInicio}
            onChange={setCampo('dataInicio')}
            style={{ fontSize: 12, padding: '7px 10px', fontFamily: 'var(--font-m)' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Data fim</label>
          <input
            type="date"
            className="sel"
            value={rascunho.dataFim}
            min={rascunho.dataInicio || undefined}
            onChange={setCampo('dataFim')}
            style={{ fontSize: 12, padding: '7px 10px', fontFamily: 'var(--font-m)' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Granel</label>
          <select
            className="sel"
            value={rascunho.granel}
            onChange={setCampo('granel')}
            style={{ fontSize: 12, padding: '7px 10px', fontFamily: 'var(--font-m)' }}
          >
            <option value="todos">Todos os graneis</option>
            {graneisDisponiveis.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Ordem (OP)</label>
          <select
            className="sel"
            value={rascunho.ordem}
            onChange={setCampo('ordem')}
            style={{ fontSize: 12, padding: '7px 10px', fontFamily: 'var(--font-m)' }}
          >
            <option value="todos">Todas as ordens</option>
            {ordensDisponiveis.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Status</label>
          <select
            className="sel"
            value={rascunho.status}
            onChange={setCampo('status')}
            style={{ fontSize: 12, padding: '7px 10px' }}
          >
            <option value="todos">Todos os status</option>
            {Object.entries(STATUS_LABEL).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <button
            className="btn btn-v"
            onClick={aplicarFiltros}
            style={{ fontSize: 12, padding: '7px 16px', border: '1.5px solid transparent', boxSizing: 'border-box' }}
          >
            🔍 Filtrar
          </button>
          <button
            className="btn btn-ghost"
            onClick={limparFiltros}
            disabled={!podeLimpar}
            style={{ fontSize: 12, padding: '7px 16px', border: '1.5px solid var(--border2)', boxSizing: 'border-box', opacity: podeLimpar ? 1 : 0.5 }}
          >
            ✕ Limpar
          </button>
        </div>
      </div>

      <CardPerformanceGranel dados={dadosFiltrados} calc={calc} algumFiltroAtivo={aplicadoAtivo} limparFiltros={limparFiltros} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Performance — visão Granel (oficial OEE)
───────────────────────────────────────────────────────────── */
function CardPerformanceGranel({ dados, calc, algumFiltroAtivo, limparFiltros }) {
  const maxTempo = useMemo(
    () => (dados.length ? Math.max(...dados.map((d) => Math.max(d.tempoPadrao, d.tempoReal))) : 1),
    [dados]
  );

  return (
    <div className="card cv">
      <style>{`
        .perf-granel-tbl th { padding: 14px 10px; font-size: 11px; }
        .perf-granel-tbl td { padding: 22px 10px; vertical-align: middle; }
        .perf-granel-tbl tbody tr { transition: background .15s; }
        .perf-granel-tbl tbody tr:hover { background: var(--surface2); }
      `}</style>
      <div className="card-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
        <span>Performance · Visão Granel (oficial OEE)</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text3)', letterSpacing: '.04em' }}>
          Tempo padrão (cronoanálise) vs Tempo real
        </span>
      </div>
      <table className="tbl perf-granel-tbl" style={{ fontSize: 13 }}>
        <thead>
          <tr>
            <th>Granel</th>
            <th>Ordem</th>
            <th>Padrão</th>
            <th>Real</th>
            <th style={{ minWidth: 200 }}>Comparativo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dados.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: 'center', padding: 28, color: 'var(--text3)' }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>🔍</div>
                Nenhuma ordem corresponde aos filtros aplicados.
                {algumFiltroAtivo && (
                  <div style={{ fontSize: 10, marginTop: 4 }}>
                    <button onClick={limparFiltros} style={{ background: 'none', border: 'none', color: 'var(--verde)', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', fontSize: 10 }}>
                      Limpar filtros
                    </button>
                  </div>
                )}
              </td>
            </tr>
          )}
          {dados.map((d, i) => {
            const corS = COR_STATUS[d.status];
            const wPad = (d.tempoPadrao / maxTempo) * 100;
            const wReal = (d.tempoReal / maxTempo) * 100;
            return (
              <tr key={i}>
                <td>
                  <div style={{ fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--verde)' }}>{d.granel}</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>{d.produto}</div>
                </td>
                <td className="mono" style={{ fontSize: 11 }}>{d.ordem}</td>
                <td className="mono">{d.tempoPadrao}m</td>
                <td className="mono" style={{ fontWeight: 700, color: corS.fg }}>{d.tempoReal}m</td>
                <td>
                  <div style={{ position: 'relative', height: 22 }}>
                    {/* Barra padrão (cinza claro) */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 2,
                        left: 0,
                        height: 8,
                        width: `${wPad}%`,
                        background: 'var(--border)',
                        borderRadius: 4,
                      }}
                      title={`Padrão ${d.tempoPadrao}min`}
                    />
                    {/* Barra real (colorida) */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 0,
                        height: 8,
                        width: `${wReal}%`,
                        background: corS.fg,
                        borderRadius: 4,
                      }}
                      title={`Real ${d.tempoReal}min`}
                    />
                  </div>
                </td>
                <td><span className="bdg" style={{ fontSize: 9, background: corS.bg, color: corS.fg, border: `1px solid ${corS.bd}` }}>{corS.label}</span></td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr style={{ background: 'var(--surface2)', borderTop: '2px solid var(--ouro-claro)' }}>
            <td colSpan="2" style={{ fontWeight: 700, color: 'var(--verde-esc)', fontSize: 11, padding: '8px 10px' }}>
              Σ Total — Performance = {calc.padraoTotal}min ÷ {calc.realTotal}min
            </td>
            <td className="mono" style={{ fontWeight: 800 }}>{calc.padraoTotal}m</td>
            <td className="mono" style={{ fontWeight: 800, color: 'var(--ouro)' }}>{calc.realTotal}m</td>
            <td style={{ textAlign: 'right', fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--ouro)', fontSize: 16 }}>
              {calc.performance.toFixed(1)}%
            </td>
            <td><span className="bdg bdg-ouro" style={{ fontSize: 9 }}>Performance</span></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
