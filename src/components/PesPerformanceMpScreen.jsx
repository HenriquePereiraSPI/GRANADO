import { useMemo, useState } from 'react';
import { PESAGEM_OEE as D } from '../data/pes-oee-data.js';

/**
 * Tela /pes-perf-mp — Performance por Matéria-Prima da Pesagem.
 *
 * Acompanhamento operacional do tempo de ciclo por MP (a antiga tabela
 * "Tempo de Ciclo por Matéria-Prima" que vivia na tela de OEE Pesagem),
 * agora com submenu próprio e filtros — no mesmo formato da tela de
 * Performance (Ordem).
 *
 * Status binário: OK quando o tempo Real (média) <= Padrão, senão FORA.
 */

const STATUS_LABEL = {
  ok:   'OK',
  fora: 'FORA',
};

// Status binário da MP: OK quando o tempo real (média) <= padrão, senão FORA.
const mpOk = (m) => m.real <= m.padrao;

const FILTRO_PADRAO = { ordem: 'todos', mp: 'todos', usuario: 'todos', status: 'todos', sala: 'todos', dataInicio: '', dataFim: '' };

export default function PesPerformanceMpScreen() {
  // Rascunho (campos) x aplicado (o que filtra a tabela) — só aplica no Filtrar.
  const [rascunho, setRascunho] = useState(FILTRO_PADRAO);
  const [aplicado, setAplicado] = useState(FILTRO_PADRAO);

  const setCampo = (campo) => (e) => setRascunho((r) => ({ ...r, [campo]: e.target.value }));

  // Listas únicas para os dropdowns.
  const ordensDisponiveis = useMemo(
    () => [...new Set(D.tempoCicloMP.map((m) => m.ordem))].sort(),
    []
  );
  const mpsDisponiveis = useMemo(() => {
    const map = new Map();
    D.tempoCicloMP.forEach((m) => { if (!map.has(m.cod)) map.set(m.cod, m.desc); });
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, []);
  const usuariosDisponiveis = useMemo(
    () => [...new Set(D.tempoCicloMP.map((m) => m.usuario))].sort(),
    []
  );
  const salasDisponiveis = useMemo(
    () => [...new Set(D.tempoCicloMP.map((m) => m.sala))].sort(),
    []
  );

  // Linhas visíveis: aplicam-se os filtros JÁ APLICADOS.
  const dadosFiltrados = useMemo(() => {
    return D.tempoCicloMP.filter((m) => {
      if (aplicado.ordem !== 'todos' && m.ordem !== aplicado.ordem) return false;
      if (aplicado.mp !== 'todos' && m.cod !== aplicado.mp) return false;
      if (aplicado.usuario !== 'todos' && m.usuario !== aplicado.usuario) return false;
      if (aplicado.sala !== 'todos' && m.sala !== aplicado.sala) return false;
      if (aplicado.status !== 'todos' && (mpOk(m) ? 'ok' : 'fora') !== aplicado.status) return false;
      return true;
    });
  }, [aplicado]);

  const aplicarFiltros = () => setAplicado(rascunho);
  const limparFiltros = () => { setRascunho(FILTRO_PADRAO); setAplicado(FILTRO_PADRAO); };

  const ehPadrao = (f) =>
    f.ordem === 'todos' && f.mp === 'todos' && f.usuario === 'todos' && f.status === 'todos' && f.sala === 'todos' && !f.dataInicio && !f.dataFim;
  const podeLimpar = !ehPadrao(rascunho) || !ehPadrao(aplicado);
  const aplicadoAtivo = !ehPadrao(aplicado);

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Pesagem · MF5 · ERU 5.2.x — Performance por Matéria-Prima</div>
          <div className="ph-title">Performance (MP)</div>
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
          <label className="lbl">Matéria-Prima (MP)</label>
          <select
            className="sel"
            value={rascunho.mp}
            onChange={setCampo('mp')}
            style={{ fontSize: 12, padding: '7px 10px' }}
          >
            <option value="todos">Todas as MPs</option>
            {mpsDisponiveis.map(([cod, desc]) => (
              <option key={cod} value={cod}>{cod} — {desc}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Usuário</label>
          <select
            className="sel"
            value={rascunho.usuario}
            onChange={setCampo('usuario')}
            style={{ fontSize: 12, padding: '7px 10px' }}
          >
            <option value="todos">Todos os usuários</option>
            {usuariosDisponiveis.map((u) => (
              <option key={u} value={u}>{u}</option>
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
          <label className="lbl">Sala</label>
          <select
            className="sel"
            value={rascunho.sala}
            onChange={setCampo('sala')}
            style={{ fontSize: 12, padding: '7px 10px' }}
          >
            <option value="todos">Todas as salas</option>
            {salasDisponiveis.map((s) => (
              <option key={s} value={s}>{s}</option>
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

      <CardTempoCicloMP dados={dadosFiltrados} algumFiltroAtivo={aplicadoAtivo} limparFiltros={limparFiltros} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tempo de Ciclo por Matéria-Prima · Acompanhamento Operacional
───────────────────────────────────────────────────────────── */
function CardTempoCicloMP({ dados, algumFiltroAtivo, limparFiltros }) {
  return (
    <div className="card ca">
      <style>{`
        .ciclo-mp-tbl { font-size: 13.5px; }
        .ciclo-mp-tbl th { padding: 12px 10px; font-size: 11px; }
        .ciclo-mp-tbl td { padding: 13px 10px; vertical-align: middle; }
        .ciclo-mp-tbl tbody tr { transition: background .15s; }
        .ciclo-mp-tbl tbody tr:hover { background: var(--surface2); }
      `}</style>
      <div className="card-title">Tempo de Ciclo por Matéria-Prima · Acompanhamento Operacional</div>

      <div style={{ overflowX: 'auto' }}>
        <table className="tbl ciclo-mp-tbl" style={{ minWidth: 900 }}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Matéria-Prima</th>
              <th>Ordem</th>
              <th>Usuário</th>
              <th>Sala</th>
              <th style={{ textAlign: 'right' }}>Padrão</th>
              <th style={{ textAlign: 'right' }}>Real</th>
              <th>Data Pesagem</th>
              <th style={{ textAlign: 'center' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {dados.length === 0 && (
              <tr>
                <td colSpan={9} style={{ textAlign: 'center', padding: 28, color: 'var(--text3)' }}>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>🔍</div>
                  Nenhuma matéria-prima corresponde aos filtros aplicados.
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
            {dados.map((m, i) => {
              const ok = mpOk(m);
              return (
                <tr key={i}>
                  <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{m.cod}</td>
                  <td>{m.desc}</td>
                  <td className="mono" style={{ fontSize: 11 }}>{m.ordem}</td>
                  <td style={{ fontSize: 11 }}>{m.usuario}</td>
                  <td><span className="bdg bdg-ney" style={{ fontSize: 9 }}>{m.sala}</span></td>
                  <td className="mono" style={{ textAlign: 'right' }}>{m.padrao.toFixed(1)} min</td>
                  <td className="mono" style={{ textAlign: 'right', fontWeight: 700, color: ok ? 'var(--ok)' : 'var(--per)' }}>{m.real.toFixed(1)} min</td>
                  <td className="mono" style={{ fontSize: 10, color: 'var(--text2)', whiteSpace: 'nowrap' }}>{m.dataPesagem}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={`bdg ${ok ? 'bdg-ok' : 'bdg-per'}`} style={{ fontSize: 9 }}>
                      {ok ? '✓ OK' : '✕ FORA'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
