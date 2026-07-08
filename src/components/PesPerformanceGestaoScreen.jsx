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
  const [filtroSala, setFiltroSala] = useState('todos');
  const [filtroData, setFiltroData] = useState('hoje');

  // Listas únicas
  const mpsUnicas = useMemo(() => {
    const map = new Map();
    PESAGENS_HOJE.forEach((p) => { if (!map.has(p.mp)) map.set(p.mp, p.material); });
    return [...map.entries()].sort();
  }, []);
  const salasUnicas = useMemo(
    () => [...new Set(PESAGENS_HOJE.map((p) => p.sala))].sort(),
    []
  );

  // Pesagens filtradas
  const pesagensFiltradas = useMemo(() => {
    return PESAGENS_HOJE.filter((p) => {
      if (filtroOperador !== 'todos' && p.operadorId !== filtroOperador) return false;
      if (filtroMP !== 'todos' && p.mp !== filtroMP) return false;
      if (filtroSala !== 'todos' && p.sala !== filtroSala) return false;
      return true;
    });
  }, [filtroOperador, filtroMP, filtroSala]);

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
  const totalOps = new Set(pesagensFiltradas.map((p) => p.op)).size;

  // Eficiência max (pra normalizar barras)
  const maxEfic = Math.max(...dadosPorOperador.map((d) => d.eficiencia), 100);

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Pesagem · Performance & Gestão · MF5</div>
          <div className="ph-title">Performance Gestão</div>
        </div>
        <div className="ph-actions" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <select className="inp" value={filtroOperador} onChange={(e) => setFiltroOperador(e.target.value)} style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }} title="Operador">
            <option value="todos">Todos os operadores</option>
            {OPERADORES.map((o) => <option key={o.id} value={o.id}>{o.nome} ({o.matricula})</option>)}
          </select>
          <select className="inp" value={filtroMP} onChange={(e) => setFiltroMP(e.target.value)} style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }} title="Matéria-Prima">
            <option value="todos">Todas as MPs</option>
            {mpsUnicas.map(([cod, mat]) => <option key={cod} value={cod}>{cod} — {mat}</option>)}
          </select>
          <select className="inp" value={filtroSala} onChange={(e) => setFiltroSala(e.target.value)} style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }} title="Sala">
            <option value="todos">Todas as salas</option>
            {salasUnicas.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select className="inp" value={filtroData} onChange={(e) => setFiltroData(e.target.value)} style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }} title="Período">
            <option value="hoje">Hoje</option>
            <option value="ontem">Ontem</option>
            <option value="7d">7 dias</option>
            <option value="30d">30 dias</option>
          </select>
        </div>
      </div>

      {/* KPIs gerenciais */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 14 }}>
        <KpiGestao label="Top Performer" valor={topPerformer ? `${topPerformer.eficiencia.toFixed(1)}%` : '—'} sub={topPerformer?.nome || '—'} cor="var(--ok)" icone="🏆" />
        <KpiGestao label="Pior Performer" valor={piorPerformer ? `${piorPerformer.eficiencia.toFixed(1)}%` : '—'} sub={piorPerformer?.nome || '—'} cor="var(--alr)" icone="⚠" />
        <KpiGestao label="Mediana Equipe" valor={`${eficienciaMediana.toFixed(1)}%`} sub="vs meta 95%" cor="var(--inf)" icone="📊" />
        <KpiGestao label="Total Pesagens" valor={totalPesagens} sub={`em ${totalOps} OP(s)`} cor="var(--verde)" icone="⚖️" />
      </div>

      {/* Gráfico de barras: Performance por Operador */}
      <div className="card cv mb14" style={{ padding: 14 }}>
        <div className="card-title" style={{ marginBottom: 14 }}>📊 Eficiência por Operador (TOP 4)</div>
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
                  <div style={{ fontFamily: 'var(--font-m)', fontSize: 26, fontWeight: 700, color: cor, lineHeight: 1.1, marginTop: 2 }}>
                    {t.eficiencia.toFixed(1)}<span style={{ fontSize: 14 }}>%</span>
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>
                    {t.nPesagens} pesagens · Δ {t.tempoMedio.toFixed(1)} min/MP
                  </div>
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
                <th style={{ width: 50, textAlign: 'center' }}>Pos.</th>
                <th>Operador</th>
                <th style={{ textAlign: 'right' }}>Tempo médio</th>
                <th style={{ textAlign: 'right' }}>Média Performance</th>
                <th style={{ textAlign: 'right' }}>Pesagens</th>
              </tr>
            </thead>
            <tbody>
              {dadosPorOperador.length === 0 && (
                <tr><td colSpan={5} style={{ textAlign: 'center', padding: 28, color: 'var(--text3)' }}>Sem dados com os filtros aplicados.</td></tr>
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
                  <td className="mono" style={{ textAlign: 'right' }}>{d.tempoMedio.toFixed(1)} min</td>
                  <td className="mono" style={{ textAlign: 'right' }}>{d.eficiencia.toFixed(1)}%</td>
                  <td className="mono" style={{ textAlign: 'right' }}>{d.nPesagens.toLocaleString('pt-BR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
      <div style={{ fontFamily: 'var(--font-m)', fontSize: 28, fontWeight: 700, color: cor, lineHeight: 1.1 }}>{valor}</div>
      {sub && <div style={{ fontSize: 10, color: 'var(--text3)' }}>{sub}</div>}
    </div>
  );
}
