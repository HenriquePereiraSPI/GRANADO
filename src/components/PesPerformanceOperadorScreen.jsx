import { useMemo, useState } from 'react';
import {
  OPERADOR_LOGADO_ID,
  META_ADERENCIA,
  OPERADORES,
  PESAGENS_HOJE,
} from '../data/pes-perf-operador-data.js';

/**
 * Tela /pes-perf-operador — Performance na Pesagem (Fase A).
 *
 * Foco: o OPERADOR. Responde "como EU estou pesando?".
 * Complementa /pes-oee (visao agregada por sala/granel).
 *
 * Fase A entrega:
 *   1. Header com seletor de periodo
 *   2. 4 KPIs pessoais (aderencia, tempo medio, MPs pesadas, variancias)
 *   3. Filtros (operador, ordem, MP)
 *   4. Ranking entre operadores (numerado)
 *   5. Tabela cronologica das pesagens do dia
 */

const PERIODO_LABEL = {
  hoje:   'Hoje · Turno A',
  semana: 'Esta Semana',
  mes:    'Este Mês',
};

const FILTRO_PADRAO = { operador: OPERADOR_LOGADO_ID, ordem: 'todos', mp: 'todos', dataInicio: '', dataFim: '' };

/* ─────────────────────────────────────────────────────────────
   Helpers de UI
───────────────────────────────────────────────────────────── */

function StatusPill({ status }) {
  if (status === 'desv') return <span className="bdg bdg-alr" style={{ fontSize: 9 }}>Variância</span>;
  return <span className="bdg bdg-ok" style={{ fontSize: 9 }}>OK</span>;
}

function TempoPill({ real, padrao, min, max }) {
  const pct = ((real - padrao) / padrao) * 100;
  const acimaDoPadrao = pct > 5;
  const dentro = Math.abs(pct) <= 5;
  const cor = dentro ? 'var(--ok)' : (acimaDoPadrao ? 'var(--alr)' : 'var(--inf)');
  const sinal = pct > 0 ? '+' : '';
  // Se min e max foram fornecidos, classifica em relação ao range
  const dentroRange = min != null && max != null && real >= min && real <= max;
  return (
    <div style={{ fontFamily: 'var(--font-m)', fontSize: 11, color: cor, fontWeight: 700, lineHeight: 1.3 }}>
      <div>
        <strong>{real.toFixed(1)}</strong>
        <span style={{ color: 'var(--text3)', fontWeight: 400 }}> / {padrao.toFixed(1)} min</span>
        <span style={{ marginLeft: 4, fontSize: 9 }}>({sinal}{pct.toFixed(0)}%)</span>
      </div>
      {min != null && max != null && (
        <div style={{ fontSize: 9, fontWeight: 400, color: dentroRange ? 'var(--text3)' : 'var(--alr)', marginTop: 1 }}>
          ↓ {min.toFixed(1)} · ↑ {max.toFixed(1)} {dentroRange ? '✓' : '⚠'}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tela principal
───────────────────────────────────────────────────────────── */

export default function PesPerformanceOperadorScreen() {
  // Período fixo (Hoje · Turno A) — o seletor foi removido do header.
  const periodo = 'hoje';

  // Rascunho (o que esta nos campos) x aplicado (o que filtra a tabela).
  // So vira "aplicado" ao clicar em Filtrar — dando sentido ao botao.
  const [rascunho, setRascunho] = useState(FILTRO_PADRAO);
  const [aplicado, setAplicado] = useState(FILTRO_PADRAO);
  const setCampo = (campo) => (e) => setRascunho((r) => ({ ...r, [campo]: e.target.value }));

  // Ranking ordenado por aderencia decrescente (sempre full — nao filtrado).
  const ranking = useMemo(() => {
    return [...OPERADORES]
      .map((o) => ({ ...o, s: o.stats[periodo] }))
      .sort((a, b) => b.s.aderencia - a.s.aderencia);
  }, [periodo]);

  const minhaPosicao = ranking.findIndex((r) => r.id === aplicado.operador) + 1;
  const totalOperadores = ranking.length;

  // Listas unicas para os dropdowns de filtro (agregam todas as pesagens
  // do dia — independente do operador).
  const ordensDisponiveis = useMemo(
    () => [...new Set(PESAGENS_HOJE.map((p) => p.op))].sort(),
    []
  );
  const mpsDisponiveis = useMemo(() => {
    const map = new Map();
    PESAGENS_HOJE.forEach((p) => {
      if (!map.has(p.mp)) map.set(p.mp, p.material);
    });
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  // Pesagens visiveis: aplicam-se os filtros JA APLICADOS.
  const pesagensFiltradas = useMemo(() => {
    return PESAGENS_HOJE.filter((p) => {
      if (aplicado.operador !== 'todos' && p.operadorId !== aplicado.operador) return false;
      if (aplicado.ordem !== 'todos' && p.op !== aplicado.ordem) return false;
      if (aplicado.mp !== 'todos' && p.mp !== aplicado.mp) return false;
      return true;
    });
  }, [aplicado]);

  const aplicarFiltros = () => setAplicado(rascunho);
  const limparFiltros = () => { setRascunho(FILTRO_PADRAO); setAplicado(FILTRO_PADRAO); };
  const ehPadrao = (f) => f.operador === OPERADOR_LOGADO_ID && f.ordem === 'todos' && f.mp === 'todos' && !f.dataInicio && !f.dataFim;
  const podeLimpar = !ehPadrao(rascunho) || !ehPadrao(aplicado);
  const algumFiltroAtivo = !ehPadrao(aplicado);

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Pesagem · Performance · MF5</div>
          <div className="ph-title">Performance</div>
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
          <label className="lbl">Operador</label>
          <select
            className="sel"
            value={rascunho.operador}
            onChange={setCampo('operador')}
            style={{ fontSize: 12, padding: '7px 10px' }}
          >
            <option value="todos">Todos os operadores</option>
            {OPERADORES.map((o) => (
              <option key={o.id} value={o.id}>
                {o.id === OPERADOR_LOGADO_ID ? '★ ' : ''}{o.nome} ({o.matricula})
              </option>
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
          <label className="lbl">Matéria-Prima (MP)</label>
          <select
            className="sel"
            value={rascunho.mp}
            onChange={setCampo('mp')}
            style={{ fontSize: 12, padding: '7px 10px' }}
          >
            <option value="todos">Todas as MPs</option>
            {mpsDisponiveis.map(([cod, mat]) => (
              <option key={cod} value={cod}>{cod} — {mat}</option>
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

      {/* ── Ranking (acima) ─────────────────────────────────── */}
      <div className="card co mb14" style={{ padding: 0, overflow: 'hidden', borderTop: '3px solid var(--ouro-claro)' }}>
        <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, fontWeight: 800 }}>🏆 Ranking da Equipe</span>
          <span style={{ fontSize: 10, color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>
            {PERIODO_LABEL[periodo]} · ordenado por aderência
          </span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl" style={{ fontSize: 11, minWidth: 700 }}>
            <thead>
              <tr>
                <th style={{ width: 50, textAlign: 'center' }}>Pos.</th>
                <th>Operador</th>
                <th style={{ textAlign: 'right' }}>Aderência</th>
                <th style={{ textAlign: 'right' }}>Tempo Médio</th>
                <th style={{ textAlign: 'right' }}>MPs/h</th>
                <th style={{ textAlign: 'right' }}>MPs Total</th>
                <th style={{ textAlign: 'right' }}>Variâncias</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r, i) => {
                const ehLinhaAtiva = r.id === aplicado.operador;
                return (
                  <tr
                    key={r.id}
                    style={{
                      background: ehLinhaAtiva ? 'var(--verde-dim)' : 'transparent',
                      fontWeight: ehLinhaAtiva ? 700 : 400,
                    }}
                  >
                    <td className="mono" style={{ textAlign: 'center', fontSize: 13, fontWeight: 800, color: ehLinhaAtiva ? 'var(--verde)' : 'var(--text2)' }}>
                      {i + 1}
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 14 }}>{r.avatar}</span>
                        <div style={{ lineHeight: 1.2 }}>
                          <div style={{ fontSize: 11, fontWeight: ehLinhaAtiva ? 800 : 600, color: ehLinhaAtiva ? 'var(--verde)' : 'var(--text)' }}>
                            {ehLinhaAtiva && '★ '}{r.nome}
                          </div>
                          <div style={{ fontSize: 9, color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>Mat. {r.matricula}</div>
                        </div>
                      </div>
                    </td>
                    <td className="mono" style={{ textAlign: 'right', color: r.s.aderencia >= META_ADERENCIA ? 'var(--ok)' : 'var(--text)' }}>
                      {r.s.aderencia.toFixed(1)}%
                    </td>
                    <td className="mono" style={{ textAlign: 'right' }}>{r.s.tempoMedio.toFixed(1)} min</td>
                    <td className="mono" style={{ textAlign: 'right' }}>{r.s.mpsHora.toFixed(1)}</td>
                    <td className="mono" style={{ textAlign: 'right' }}>{r.s.mpsTotal.toLocaleString('pt-BR')}</td>
                    <td className="mono" style={{ textAlign: 'right', color: r.s.variancesCriticas === 0 ? 'var(--ok)' : 'var(--alr)' }}>
                      {r.s.variancesCriticas}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={{ padding: '8px 14px', borderTop: '1px solid var(--border)', background: 'var(--bg)', fontSize: 10, color: 'var(--text3)' }}>
          Você está em <strong style={{ color: 'var(--verde)' }}>{minhaPosicao}º de {totalOperadores}</strong>.
          {minhaPosicao === 1 && ' 🎉 Liderando!'}
          {minhaPosicao === 2 && ' Está bem perto da liderança 👀'}
          {minhaPosicao === totalOperadores && ' Foco — vamos subir.'}
        </div>
      </div>

      {/* ── Tabela "Hoje · Turno A" (abaixo) ────────────────── */}
      <div className="card cv mb14" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, fontWeight: 800 }}>📋 Hoje · Turno A</span>
          <span style={{ fontSize: 10, color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>
            {pesagensFiltradas.length} pesagens
            {algumFiltroAtivo && (
              <span style={{ color: 'var(--inf)', marginLeft: 6 }}>
                (filtrado de {PESAGENS_HOJE.length})
              </span>
            )}
          </span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl" style={{ fontSize: 11, minWidth: 880 }}>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Operador</th>
                <th>OP</th>
                <th>MP · Material</th>
                <th>Lote</th>
                <th style={{ textAlign: 'right' }}>Alvo / Pesado (kg)</th>
                <th style={{ textAlign: 'right' }}>Variância</th>
                <th style={{ textAlign: 'right' }} title="Real / Padrão (min ↓ · max ↑)">Tempo Real / Padrão<br/><span style={{ fontWeight: 400, fontSize: 8, color: 'var(--text3)' }}>min ↓ · max ↑</span></th>
                <th>Sala · Box</th>
                <th style={{ textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {pesagensFiltradas.length === 0 && (
                <tr>
                  <td colSpan={10} style={{ textAlign: 'center', padding: 28, color: 'var(--text3)' }}>
                    <div style={{ fontSize: 22, marginBottom: 4 }}>🔍</div>
                    Nenhuma pesagem corresponde aos filtros aplicados.
                    <div style={{ fontSize: 10, marginTop: 4 }}>
                      <button onClick={limparFiltros} style={{ background: 'none', border: 'none', color: 'var(--verde)', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', fontSize: 10 }}>
                        Limpar filtros
                      </button>
                    </div>
                  </td>
                </tr>
              )}
              {pesagensFiltradas.map((p, idx) => {
                const op = OPERADORES.find((o) => o.id === p.operadorId);
                return (
                  <tr key={idx} style={{ background: p.status === 'desv' ? 'var(--alr-p)' : 'transparent' }}>
                    <td className="mono">{p.hora}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <span style={{ fontSize: 12 }}>{op?.avatar}</span>
                        <span style={{ fontSize: 11 }}>{op?.nome}</span>
                      </div>
                    </td>
                    <td className="mono" style={{ color: 'var(--text2)' }}>{p.op}</td>
                    <td>
                      <div style={{ fontFamily: 'var(--font-m)', fontSize: 10, color: 'var(--text3)' }}>{p.mp}</div>
                      <div style={{ fontSize: 11, color: 'var(--text)' }}>{p.material}</div>
                    </td>
                    <td className="mono" style={{ fontSize: 10 }}>{p.lote}</td>
                    <td className="mono" style={{ textAlign: 'right' }}>
                      <div style={{ color: 'var(--text3)' }}>{p.alvo}</div>
                      <div style={{ color: 'var(--text)', fontWeight: 700 }}>{p.pesado}</div>
                    </td>
                    <td className="mono" style={{ textAlign: 'right', color: p.status === 'desv' ? 'var(--alr)' : 'var(--ok)', fontWeight: 700 }}>
                      {p.variancia}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <TempoPill real={p.tempoReal} padrao={p.tempoPadrao} min={p.tempoMin} max={p.tempoMax} />
                    </td>
                    <td style={{ fontSize: 10, color: 'var(--text2)' }}>
                      {p.sala}
                      <div className="mono" style={{ fontSize: 9, color: 'var(--text3)' }}>{p.balanca}</div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <StatusPill status={p.status} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Aviso de fase */}
      <div
        style={{
          padding: '10px 14px',
          background: 'var(--inf-p)',
          border: '1px solid var(--inf-b)',
          borderRadius: 6,
          color: 'var(--inf)',
          fontSize: 11,
          display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: 16 }}>🚧</span>
        <span style={{ flex: 1, minWidth: 240 }}>
          <strong>Fase A entregue.</strong>{' '}
          Próximas fases planejadas: <strong>Top 5 MPs ofensoras</strong> com coaching tips,
          gráfico de evolução semanal e gamificação (badges).
        </span>
      </div>
    </div>
  );
}
