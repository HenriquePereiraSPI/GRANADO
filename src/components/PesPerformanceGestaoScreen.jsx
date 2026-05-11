import { useMemo, useState } from 'react';
import {
  META_ADERENCIA,
  OPERADORES,
  PESAGENS_HOJE,
} from '../data/pes-perf-operador-data.js';

/**
 * Tela /pes-perf-gestao — Performance & Gestão (visão gerencial).
 *
 * Diferente de /pes-perf-operador (foco em si mesmo), esta tela
 * compara TODOS os operadores entre si, permitindo Lider/Supervisão
 * identificar pontos de melhoria, treinamento, gargalos por MP/turno.
 *
 * Filtros: operador, MP, ordem, TURNO (A1/A2/B1/B2), data, horário.
 * KPIs: Top performer, Pior performer, Mediana, Total OPs.
 * Gráficos: barras comparativas por operador e por turno.
 */

const TURNOS = [
  { id: 'A1', label: 'Turno A1 (06:00–18:00 dia 1)' },
  { id: 'A2', label: 'Turno A2 (06:00–18:00 dia 2)' },
  { id: 'B1', label: 'Turno B1 (18:00–06:00 dia 1)' },
  { id: 'B2', label: 'Turno B2 (18:00–06:00 dia 2)' },
];

// Atribuição de turno por operador (mock — em produção vem do cadastro de escala)
const OPERADOR_TURNO = {
  js155: 'A1',
  fc212: 'A2',
  mo108: 'B1',
  ap310: 'B2',
};

export default function PesPerformanceGestaoScreen() {
  const [filtroOperador, setFiltroOperador] = useState('todos');
  const [filtroMP, setFiltroMP] = useState('todos');
  const [filtroOrdem, setFiltroOrdem] = useState('todos');
  const [filtroTurno, setFiltroTurno] = useState('todos');
  const [filtroData, setFiltroData] = useState('hoje');
  const [filtroHorario, setFiltroHorario] = useState('');

  // Listas únicas
  const mpsUnicas = useMemo(() => {
    const map = new Map();
    PESAGENS_HOJE.forEach((p) => { if (!map.has(p.mp)) map.set(p.mp, p.material); });
    return [...map.entries()].sort();
  }, []);
  const ordensUnicas = useMemo(
    () => [...new Set(PESAGENS_HOJE.map((p) => p.op))].sort(),
    []
  );

  // Pesagens filtradas
  const pesagensFiltradas = useMemo(() => {
    return PESAGENS_HOJE.filter((p) => {
      if (filtroOperador !== 'todos' && p.operadorId !== filtroOperador) return false;
      if (filtroMP !== 'todos' && p.mp !== filtroMP) return false;
      if (filtroOrdem !== 'todos' && p.op !== filtroOrdem) return false;
      if (filtroTurno !== 'todos' && OPERADOR_TURNO[p.operadorId] !== filtroTurno) return false;
      if (filtroHorario) {
        // Filtra por hora (HH:MM) — match se pesagem está na hora informada (±30min)
        const [hh] = filtroHorario.split(':');
        if (!p.hora.startsWith(hh)) return false;
      }
      return true;
    });
  }, [filtroOperador, filtroMP, filtroOrdem, filtroTurno, filtroHorario]);

  // Agregados por operador (para gráfico)
  const dadosPorOperador = useMemo(() => {
    const map = {};
    pesagensFiltradas.forEach((p) => {
      if (!map[p.operadorId]) map[p.operadorId] = {
        ...OPERADORES.find((o) => o.id === p.operadorId),
        nPesagens: 0,
        tempoTotal: 0,
        tempoPadrao: 0,
        desvios: 0,
        somaAlvo: 0,
        somaPesado: 0,
      };
      const a = map[p.operadorId];
      a.nPesagens++;
      a.tempoTotal += p.tempoReal;
      a.tempoPadrao += p.tempoPadrao;
      if (p.status === 'desv') a.desvios++;
      a.somaAlvo += parseFloat(p.alvo.replace(/\./g,'').replace(',','.'));
      a.somaPesado += parseFloat(p.pesado.replace(/\./g,'').replace(',','.'));
    });
    return Object.values(map).map((a) => ({
      ...a,
      tempoMedio: a.tempoTotal / a.nPesagens,
      tempoMedioPadrao: a.tempoPadrao / a.nPesagens,
      eficiencia: (a.tempoPadrao / a.tempoTotal) * 100, // padrão÷real
      turno: OPERADOR_TURNO[a.id],
    })).sort((a, b) => b.eficiencia - a.eficiencia);
  }, [pesagensFiltradas]);

  // Agregado por turno
  const dadosPorTurno = useMemo(() => {
    const map = {};
    pesagensFiltradas.forEach((p) => {
      const t = OPERADOR_TURNO[p.operadorId];
      if (!map[t]) map[t] = { turno: t, nPesagens: 0, tempoTotal: 0, tempoPadrao: 0, desvios: 0 };
      map[t].nPesagens++;
      map[t].tempoTotal += p.tempoReal;
      map[t].tempoPadrao += p.tempoPadrao;
      if (p.status === 'desv') map[t].desvios++;
    });
    return Object.values(map).map((a) => ({
      ...a,
      tempoMedio: a.tempoTotal / a.nPesagens,
      eficiencia: (a.tempoPadrao / a.tempoTotal) * 100,
    })).sort((a, b) => b.eficiencia - a.eficiencia);
  }, [pesagensFiltradas]);

  // KPIs gerais
  const totalPesagens = pesagensFiltradas.length;
  const topPerformer = dadosPorOperador[0];
  const piorPerformer = dadosPorOperador[dadosPorOperador.length - 1];
  const eficienciaMediana = dadosPorOperador.length > 0
    ? dadosPorOperador.map((d) => d.eficiencia).sort()[Math.floor(dadosPorOperador.length / 2)]
    : 0;
  const totalDesvios = pesagensFiltradas.filter((p) => p.status === 'desv').length;
  const totalOps = new Set(pesagensFiltradas.map((p) => p.op)).size;

  // Eficiência max (pra normalizar barras)
  const maxEfic = Math.max(...dadosPorOperador.map((d) => d.eficiencia), 100);

  const limparFiltros = () => {
    setFiltroOperador('todos');
    setFiltroMP('todos');
    setFiltroOrdem('todos');
    setFiltroTurno('todos');
    setFiltroData('hoje');
    setFiltroHorario('');
  };
  const algumFiltroAtivo = filtroOperador !== 'todos' || filtroMP !== 'todos' || filtroOrdem !== 'todos' || filtroTurno !== 'todos' || filtroHorario !== '';

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Pesagem · Performance & Gestão · MF5</div>
          <div className="ph-title">Performance Gestão — Comparativo entre Operadores</div>
        </div>
        <div className="ph-actions" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <select className="inp" value={filtroData} onChange={(e) => setFiltroData(e.target.value)} style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }}>
            <option value="hoje">Hoje · Turno A</option>
            <option value="semana">Esta Semana</option>
            <option value="mes">Este Mês</option>
          </select>
        </div>
      </div>

      {/* KPIs gerenciais */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 14 }}>
        <KpiGestao label="Top Performer" valor={topPerformer ? `${topPerformer.eficiencia.toFixed(1)}%` : '—'} sub={topPerformer?.nome || '—'} cor="var(--ok)" icone="🏆" />
        <KpiGestao label="Pior Performer" valor={piorPerformer ? `${piorPerformer.eficiencia.toFixed(1)}%` : '—'} sub={piorPerformer?.nome || '—'} cor="var(--alr)" icone="⚠" />
        <KpiGestao label="Mediana Equipe" valor={`${eficienciaMediana.toFixed(1)}%`} sub="vs meta 95%" cor="var(--inf)" icone="📊" />
        <KpiGestao label="Total Pesagens" valor={totalPesagens} sub={`em ${totalOps} OP(s)`} cor="var(--verde)" icone="⚖️" />
        <KpiGestao label="Desvios Críticos" valor={totalDesvios} sub={`${((totalDesvios / Math.max(1, totalPesagens)) * 100).toFixed(1)}% do total`} cor={totalDesvios > 0 ? 'var(--per)' : 'var(--ok)'} icone="⚠" />
      </div>

      {/* Filtros */}
      <div className="card mb14" style={{ padding: 14, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10, alignItems: 'flex-end' }}>
        <div>
          <label className="lbl">Operador</label>
          <select className="sel" value={filtroOperador} onChange={(e) => setFiltroOperador(e.target.value)} style={{ fontSize: 12, padding: '7px 10px' }}>
            <option value="todos">Todos</option>
            {OPERADORES.map((o) => <option key={o.id} value={o.id}>{o.nome} ({o.matricula})</option>)}
          </select>
        </div>
        <div>
          <label className="lbl">Matéria-Prima</label>
          <select className="sel" value={filtroMP} onChange={(e) => setFiltroMP(e.target.value)} style={{ fontSize: 12, padding: '7px 10px' }}>
            <option value="todos">Todas</option>
            {mpsUnicas.map(([cod, mat]) => <option key={cod} value={cod}>{cod} — {mat}</option>)}
          </select>
        </div>
        <div>
          <label className="lbl">Ordem (OP)</label>
          <select className="sel" value={filtroOrdem} onChange={(e) => setFiltroOrdem(e.target.value)} style={{ fontSize: 12, padding: '7px 10px', fontFamily: 'var(--font-m)' }}>
            <option value="todos">Todas</option>
            {ordensUnicas.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="lbl">Turno</label>
          <select className="sel" value={filtroTurno} onChange={(e) => setFiltroTurno(e.target.value)} style={{ fontSize: 12, padding: '7px 10px' }}>
            <option value="todos">Todos</option>
            {TURNOS.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </div>
        <div>
          <label className="lbl">Horário (hh)</label>
          <input className="inp" type="text" value={filtroHorario} onChange={(e) => setFiltroHorario(e.target.value)} placeholder="Ex.: 06" maxLength={2} style={{ fontSize: 12, padding: '7px 10px', fontFamily: 'var(--font-m)' }} />
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end' }}>
          <button
            className="btn btn-md btn-ghost"
            onClick={limparFiltros}
            disabled={!algumFiltroAtivo}
            style={{ flex: 1, opacity: algumFiltroAtivo ? 1 : 0.5 }}
          >
            ✕ Limpar
          </button>
        </div>
      </div>

      {/* Gráfico de barras: Performance por Operador */}
      <div className="card cv mb14" style={{ padding: 14 }}>
        <div className="card-title" style={{ marginBottom: 14 }}>📊 Eficiência por Operador (Padrão ÷ Real × 100)</div>
        {dadosPorOperador.length === 0 ? (
          <div style={{ padding: 24, textAlign: 'center', color: 'var(--text3)', fontSize: 12 }}>
            Sem dados com os filtros aplicados.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {dadosPorOperador.map((d, idx) => {
              const cor = d.eficiencia >= 100 ? 'var(--ok)' : d.eficiencia >= 85 ? 'var(--inf)' : d.eficiencia >= 70 ? 'var(--alr)' : 'var(--per)';
              const pct = (d.eficiencia / maxEfic) * 100;
              return (
                <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11 }}>
                  <div style={{ minWidth: 180, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 14 }}>{d.avatar}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text)' }}>{d.nome}</div>
                      <div style={{ fontSize: 9, color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>
                        Mat. {d.matricula} · Turno {d.turno} · {d.nPesagens} pesagens
                      </div>
                    </div>
                  </div>
                  <div style={{ flex: 1, height: 22, background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: cor, transition: 'width .3s' }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
                      paddingRight: 8, fontSize: 11, fontWeight: 800,
                      color: pct > 30 ? '#fff' : 'var(--text)',
                    }}>
                      {d.eficiencia.toFixed(1)}%
                    </div>
                  </div>
                  <div className="mono" style={{ minWidth: 90, textAlign: 'right', fontSize: 10, color: 'var(--text2)' }}>
                    {d.tempoMedio.toFixed(1)} / {d.tempoMedioPadrao.toFixed(1)} min
                  </div>
                  <div style={{ minWidth: 48, textAlign: 'right' }}>
                    {idx === 0 && <span className="bdg bdg-ok" style={{ fontSize: 9 }}>🏆 Top</span>}
                    {idx === dadosPorOperador.length - 1 && dadosPorOperador.length > 1 && <span className="bdg bdg-per" style={{ fontSize: 9 }}>⚠ Pior</span>}
                    {d.desvios > 0 && <span className="bdg bdg-alr" style={{ fontSize: 9, marginLeft: 4 }}>{d.desvios} desv.</span>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid var(--border)', fontSize: 10, color: 'var(--text3)' }}>
          Legenda: <strong style={{ color: 'var(--ok)' }}>≥100%</strong> ótimo · <strong style={{ color: 'var(--inf)' }}>85-100%</strong> bom · <strong style={{ color: 'var(--alr)' }}>70-85%</strong> atenção · <strong style={{ color: 'var(--per)' }}>&lt;70%</strong> crítico
        </div>
      </div>

      {/* Comparativo por Turno */}
      <div className="card mb14" style={{ padding: 14 }}>
        <div className="card-title" style={{ marginBottom: 12 }}>🕒 Comparativo por Turno</div>
        {dadosPorTurno.length === 0 ? (
          <div style={{ padding: 16, textAlign: 'center', color: 'var(--text3)', fontSize: 12 }}>
            Sem dados.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
            {dadosPorTurno.map((t) => {
              const cor = t.eficiencia >= 95 ? 'var(--ok)' : t.eficiencia >= 80 ? 'var(--inf)' : 'var(--alr)';
              return (
                <div key={t.turno} style={{
                  padding: 12, background: 'var(--surface2)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${cor}`, borderRadius: 6,
                }}>
                  <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)' }}>Turno {t.turno}</div>
                  <div style={{ fontFamily: 'var(--font-d)', fontSize: 26, fontWeight: 700, color: cor, lineHeight: 1.1, marginTop: 2 }}>
                    {t.eficiencia.toFixed(1)}<span style={{ fontSize: 14 }}>%</span>
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>
                    {t.nPesagens} pesagens · Δ {t.tempoMedio.toFixed(1)} min/MP
                  </div>
                  {t.desvios > 0 && <div style={{ fontSize: 10, color: 'var(--per)', marginTop: 2 }}>⚠ {t.desvios} desvio(s)</div>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Tabela detalhada — Operadores */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontSize: 13, fontWeight: 800 }}>📋 Detalhamento por Operador</span>
          <span style={{ fontSize: 10, color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>
            {dadosPorOperador.length} operador(es) · {totalPesagens} pesagens · {totalOps} OP(s)
          </span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl" style={{ fontSize: 11, minWidth: 900 }}>
            <thead>
              <tr>
                <th>Pos.</th>
                <th>Operador</th>
                <th>Turno</th>
                <th style={{ textAlign: 'right' }}>Pesagens</th>
                <th style={{ textAlign: 'right' }}>Tempo Médio (min)</th>
                <th style={{ textAlign: 'right' }}>Padrão</th>
                <th style={{ textAlign: 'right' }}>Eficiência</th>
                <th style={{ textAlign: 'right' }}>Desvios</th>
                <th style={{ textAlign: 'right' }}>Peso Total (kg)</th>
              </tr>
            </thead>
            <tbody>
              {dadosPorOperador.length === 0 && (
                <tr><td colSpan={9} style={{ textAlign: 'center', padding: 28, color: 'var(--text3)' }}>Sem dados com os filtros aplicados.</td></tr>
              )}
              {dadosPorOperador.map((d, i) => (
                <tr key={d.id}>
                  <td className="mono" style={{ textAlign: 'center', fontWeight: 800 }}>{i + 1}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ fontSize: 14 }}>{d.avatar}</span>
                      <div>
                        <div style={{ fontWeight: 700 }}>{d.nome}</div>
                        <div className="mono" style={{ fontSize: 9, color: 'var(--text3)' }}>Mat. {d.matricula}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="bdg" style={{ fontSize: 9, background: 'var(--inf-p)', color: 'var(--inf)', border: '1px solid var(--inf-b)' }}>{d.turno}</span></td>
                  <td className="mono" style={{ textAlign: 'right' }}>{d.nPesagens}</td>
                  <td className="mono" style={{ textAlign: 'right' }}>{d.tempoMedio.toFixed(1)}</td>
                  <td className="mono" style={{ textAlign: 'right', color: 'var(--text3)' }}>{d.tempoMedioPadrao.toFixed(1)}</td>
                  <td className="mono" style={{ textAlign: 'right', fontWeight: 800, color: d.eficiencia >= 95 ? 'var(--ok)' : d.eficiencia >= 80 ? 'var(--inf)' : 'var(--alr)' }}>
                    {d.eficiencia.toFixed(1)}%
                  </td>
                  <td className="mono" style={{ textAlign: 'right', color: d.desvios > 0 ? 'var(--per)' : 'var(--ok)' }}>{d.desvios}</td>
                  <td className="mono" style={{ textAlign: 'right', color: 'var(--text2)' }}>{d.somaPesado.toFixed(2).replace('.', ',')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '10px 14px', marginTop: 14, background: 'var(--inf-p)', border: '1px solid var(--inf-b)', borderRadius: 6, color: 'var(--inf)', fontSize: 11 }}>
        💡 <strong>Visão para Liderança</strong> — esta tela é restrita a perfis de Líder/Supervisão.
        Operadores veem apenas a própria performance em <strong>/pes-perf-operador</strong>.
      </div>
    </div>
  );
}

function KpiGestao({ label, valor, sub, cor, icone }) {
  return (
    <div className="card" style={{ padding: 14, borderTop: `3px solid ${cor}`, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>{icone}</span>
        <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text3)' }}>
          {label}
        </span>
      </div>
      <div style={{ fontFamily: 'var(--font-d)', fontSize: 28, fontWeight: 700, color: cor, lineHeight: 1.1 }}>{valor}</div>
      {sub && <div style={{ fontSize: 10, color: 'var(--text3)' }}>{sub}</div>}
    </div>
  );
}
