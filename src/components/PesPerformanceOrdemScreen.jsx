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

const STATUS_LABEL = {
  ok:   'OK',
  fora: 'FORA',
};

// Status binário da ordem: OK quando Tempo Real <= Tempo Padrão, senão FORA.
const ordemOk = (g) => g.tempoReal <= g.tempoPadrao;

const FILTRO_PADRAO = { granel: 'todos', ordem: 'todos', status: 'todos', dataInicio: '', dataFim: '' };

// Catálogo simulado de MPs pesadas — usado no popup de "Detalhes" da ordem.
const MPS_CATALOGO = [
  { cod: 'M0042',   desc: 'GLICERINA (VEGETAL)',           sala: 'Sala A', pesado: 12.512, tempoPadrao: 4.2, tempoReal: 4.5, usuario: 'J. Santos · 00412',   dataPesagem: '05/05/2026 06:48' },
  { cod: 'M3302B',  desc: 'ESSÊNCIA GLICERINA REF BQ34957', sala: 'Sala A', pesado: 0.849,  tempoPadrao: 3.5, tempoReal: 3.4, usuario: 'J. Santos · 00412',   dataPesagem: '05/05/2026 06:55' },
  { cod: 'M0328',   desc: 'AMARELO QUIMIBLEND TRAD. 128',  sala: 'Sala B', pesado: 0.126,  tempoPadrao: 2.8, tempoReal: 3.1, usuario: 'M. Oliveira · 00155', dataPesagem: '05/05/2026 07:02' },
  { cod: 'M8020',   desc: 'AÇÚCAR CRISTAL SUPERIOR',       sala: 'Sala B', pesado: 4.998,  tempoPadrao: 6.5, tempoReal: 6.2, usuario: 'M. Oliveira · 00155', dataPesagem: '05/05/2026 07:10' },
  { cod: 'M0001',   desc: 'AGUA PURIFICADA',               sala: 'Sala A', pesado: 30.000, tempoPadrao: 3.0, tempoReal: 3.0, usuario: 'F. Costa · 00731',    dataPesagem: '05/05/2026 07:18' },
  { cod: 'M2256',   desc: 'FENOXIETANOL',                  sala: 'Sala A', pesado: 0.301,  tempoPadrao: 2.5, tempoReal: 2.6, usuario: 'F. Costa · 00731',    dataPesagem: '05/05/2026 07:25' },
];

// Simula as MPs pesadas numa ordem (subconjunto determinístico do catálogo).
// Status: Ok quando Tempo Real <= Tempo Padrão.
function mpsDaOrdem(row) {
  const n = 3 + (String(row.ordem).charCodeAt(String(row.ordem).length - 1) % 4); // 3..6
  return MPS_CATALOGO.slice(0, n).map((m) => ({ ...m, ok: m.tempoReal <= m.tempoPadrao }));
}

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
      if (aplicado.status !== 'todos' && (ordemOk(g) ? 'ok' : 'fora') !== aplicado.status) return false;
      return true;
    });
  }, [aplicado]);

  // Totais/Performance recalculados sobre o conjunto filtrado.
  const calc = useMemo(() => {
    const padraoTotal = dadosFiltrados.reduce((s, g) => s + g.tempoPadrao, 0);
    const realTotal   = dadosFiltrados.reduce((s, g) => s + g.tempoReal,   0);
    const qtdeTotal   = dadosFiltrados.reduce((s, g) => s + (g.quantidade || 0), 0);
    const performance = realTotal > 0 ? (padraoTotal / realTotal) * 100 : 0;
    return { padraoTotal, realTotal, qtdeTotal, performance };
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

        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <button
            className="btn btn-v"
            onClick={aplicarFiltros}
            style={{ height: '2rem', fontSize: 12, padding: '0 16px', border: '1.5px solid transparent', boxSizing: 'border-box' }}
          >
            Filtrar
          </button>
          <button
            className="btn btn-ghost"
            onClick={limparFiltros}
            disabled={!podeLimpar}
            style={{ height: '2rem', fontSize: 12, padding: '0 16px', border: '1.5px solid var(--border2)', boxSizing: 'border-box', opacity: podeLimpar ? 1 : 0.5 }}
          >
            Limpar
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
  const [detalhe, setDetalhe] = useState(null);   // linha selecionada para o popup

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
            <th style={{ textAlign: 'right' }}>Quantidade</th>
            <th>Padrão</th>
            <th>Real</th>
            <th>Status</th>
            <th>Data Pesagem</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {dados.length === 0 && (
            <tr>
              <td colSpan={8} style={{ textAlign: 'center', padding: 28, color: 'var(--text3)' }}>
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
            const ok = ordemOk(d);
            return (
              <tr key={i}>
                <td>
                  <div style={{ fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--verde)' }}>{d.granel}</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>{d.produto}</div>
                </td>
                <td className="mono" style={{ fontSize: 11 }}>{d.ordem}</td>
                <td className="mono" style={{ textAlign: 'right' }}>{d.quantidade.toLocaleString('pt-BR')} kg</td>
                <td className="mono">{d.tempoPadrao}m</td>
                <td className="mono" style={{ fontWeight: 700, color: ok ? 'var(--ok)' : 'var(--per)' }}>{d.tempoReal}m</td>
                <td>
                  <span className={`bdg ${ok ? 'bdg-ok' : 'bdg-per'}`} style={{ fontSize: 9 }}>
                    {ok ? '✓ OK' : '✕ FORA'}
                  </span>
                </td>
                <td className="mono" style={{ fontSize: 11, color: 'var(--text2)', whiteSpace: 'nowrap' }}>{d.dataPesagem}</td>
                <td>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setDetalhe(d)}
                    style={{ height: '2rem', fontSize: 11, padding: '0 14px', border: '1.5px solid var(--border2)', boxSizing: 'border-box', whiteSpace: 'nowrap' }}
                  >
                    Detalhes
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr style={{ background: 'var(--surface2)', borderTop: '2px solid var(--ouro-claro)' }}>
            <td colSpan="2" style={{ fontWeight: 700, color: 'var(--verde-esc)', fontSize: 11, padding: '8px 10px' }}>
              Σ Total — Performance = {calc.padraoTotal}min ÷ {calc.realTotal}min
            </td>
            <td className="mono" style={{ textAlign: 'right', fontWeight: 800 }}>{calc.qtdeTotal.toLocaleString('pt-BR')} kg</td>
            <td className="mono" style={{ fontWeight: 800 }}>{calc.padraoTotal}m</td>
            <td className="mono" style={{ fontWeight: 800, color: 'var(--ouro)' }}>{calc.realTotal}m</td>
            <td style={{ fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--ouro)', fontSize: 16 }}>
              {calc.performance.toFixed(1)}%
            </td>
            <td></td>
            <td><span className="bdg bdg-ouro" style={{ fontSize: 9 }}>Performance</span></td>
          </tr>
        </tfoot>
      </table>

      {detalhe && <DetalhesOrdemModal row={detalhe} onClose={() => setDetalhe(null)} />}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Popup "Detalhes" — MPs pesadas na ordem selecionada (simulado)
───────────────────────────────────────────────────────────── */
function DetalhesOrdemModal({ row, onClose }) {
  const mps = useMemo(() => mpsDaOrdem(row), [row]);

  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(15,51,25,.55)', backdropFilter: 'blur(3px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '40px 12px', overflowY: 'auto',
      }}
    >
      <div
        style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderTop: '4px solid var(--verde)', borderRadius: 12,
          padding: '20px 22px', maxWidth: 900, width: '96%',
          boxShadow: '0 18px 50px rgba(15,51,25,.30)', margin: 'auto',
        }}
      >
        {/* Cabeçalho */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 4 }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: 'var(--verde-esc)' }}>
              MPs Pesadas · <span style={{ fontFamily: 'var(--font-m)' }}>{row.ordem}</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 2 }}>
              Granel <strong>{row.granel}</strong> · {row.produto}
            </div>
          </div>
          <button
            onClick={onClose}
            title="Fechar"
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 10px', cursor: 'pointer', fontSize: 13, color: 'var(--text2)', lineHeight: 1 }}
          >
            ✕
          </button>
        </div>

        {/* Resumo */}
        <div
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: '6px 14px',
            background: 'var(--surface2)', border: '1px solid var(--border)', borderLeft: '4px solid var(--verde)',
            borderRadius: 6, padding: '10px 12px', margin: '14px 0', fontSize: 11,
          }}
        >
          <div><span style={{ color: 'var(--text3)' }}>Tempo padrão:</span> <strong>{row.tempoPadrao} min</strong></div>
          <div><span style={{ color: 'var(--text3)' }}>Tempo real:</span> <strong>{row.tempoReal} min</strong></div>
          <div><span style={{ color: 'var(--text3)' }}>MPs pesadas:</span> <strong>{mps.length}</strong></div>
        </div>

        {/* Tabela de MPs */}
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl" style={{ fontSize: 12, minWidth: 760 }}>
            <thead>
              <tr>
                <th>Código</th>
                <th>Matéria-Prima</th>
                <th>Sala</th>
                <th style={{ textAlign: 'right' }}>Pesado (kg)</th>
                <th style={{ textAlign: 'right' }}>Tempo Padrão</th>
                <th style={{ textAlign: 'right' }}>Tempo Real</th>
                <th>Usuário</th>
                <th>Data Pesagem</th>
                <th style={{ textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {mps.map((m, i) => (
                <tr key={i}>
                  <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{m.cod}</td>
                  <td>{m.desc}</td>
                  <td><span className="bdg bdg-ney" style={{ fontSize: 9 }}>{m.sala}</span></td>
                  <td className="mono" style={{ textAlign: 'right', fontWeight: 700 }}>{m.pesado.toFixed(3)}</td>
                  <td className="mono" style={{ textAlign: 'right', color: 'var(--text3)' }}>{m.tempoPadrao.toFixed(1)} min</td>
                  <td className="mono" style={{ textAlign: 'right', color: m.ok ? 'var(--ok)' : 'var(--per)', fontWeight: 700 }}>{m.tempoReal.toFixed(1)} min</td>
                  <td style={{ fontSize: 11 }}>{m.usuario}</td>
                  <td className="mono" style={{ fontSize: 10, color: 'var(--text2)', whiteSpace: 'nowrap' }}>{m.dataPesagem}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={`bdg ${m.ok ? 'bdg-ok' : 'bdg-per'}`} style={{ fontSize: 9 }}>
                      {m.ok ? '✓ Ok' : '✕ Fora'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rodapé */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 16, marginTop: 16, borderTop: '1px solid var(--border)' }}>
          <button className="btn btn-v" onClick={onClose} style={{ height: '2rem', fontSize: 12, padding: '0 18px' }}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
