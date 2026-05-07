import { useMemo, useState } from 'react';
import {
  OPERADOR_LOGADO_ID,
  META_ADERENCIA,
  OPERADORES,
  MINHAS_PESAGENS,
} from '../data/pes-perf-operador-data.js';

/**
 * Tela /pes-perf-operador — Performance Pessoal na Pesagem (Fase A).
 *
 * Foco: o OPERADOR. Responde "como EU estou pesando?".
 * Complementa /pes-oee (que e visao agregada por sala/granel).
 *
 * Fase A entrega:
 *   1. Header com seletor de periodo (Hoje / Semana / Mes)
 *   2. 4 KPIs pessoais (aderencia, tempo medio, MPs pesadas, variancias criticas)
 *   3. Ranking entre operadores com a linha "VOCE" destacada
 *   4. Tabela cronologica das pesagens do operador no periodo
 */

const PERIODO_LABEL = {
  hoje:   'Hoje · Turno A',
  semana: 'Esta Semana',
  mes:    'Este Mês',
};

/* ─────────────────────────────────────────────────────────────
   Helpers de UI
───────────────────────────────────────────────────────────── */

function KpiCard({ label, valor, unidade, cor, icone, subInfo, deltaInfo, destaque }) {
  return (
    <div
      className={`card ${destaque ? 'cv' : ''}`}
      style={{
        padding: 16,
        borderTop: `3px solid ${cor}`,
        display: 'flex', flexDirection: 'column', gap: 4,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>{icone}</span>
        <span style={{
          fontSize: 9, fontWeight: 900, letterSpacing: '.14em',
          textTransform: 'uppercase', color: 'var(--text3)',
        }}>{label}</span>
      </div>
      <div style={{ fontFamily: 'var(--font-d)', fontSize: 36, fontWeight: 700, color: cor, lineHeight: 1.05 }}>
        {valor}
        {unidade && <span style={{ fontSize: 16, color: 'var(--text3)', marginLeft: 4 }}>{unidade}</span>}
      </div>
      {subInfo && <div style={{ fontSize: 10, color: 'var(--text3)' }}>{subInfo}</div>}
      {deltaInfo}
    </div>
  );
}

function DeltaBadge({ valor, tipo = 'maior-melhor', sufixo = 'pp', referencia }) {
  // tipo='maior-melhor': verde quando valor positivo (acima de referencia eh bom).
  // tipo='menor-melhor': verde quando valor negativo (abaixo de referencia eh bom).
  if (valor == null) return null;
  const positivo = valor >= 0;
  const bom = tipo === 'maior-melhor' ? positivo : !positivo;
  const cor = bom ? 'var(--ok)' : 'var(--alr)';
  const seta = positivo ? '↑' : '↓';
  return (
    <span style={{ color: cor, fontWeight: 700, fontSize: 11 }}>
      {seta} {Math.abs(valor).toFixed(1)}{sufixo}
      {referencia && <span style={{ color: 'var(--text3)', fontWeight: 400, marginLeft: 4 }}>vs {referencia}</span>}
    </span>
  );
}

function StatusPill({ status }) {
  if (status === 'desv') return <span className="bdg bdg-alr" style={{ fontSize: 9 }}>Variância</span>;
  return <span className="bdg bdg-ok" style={{ fontSize: 9 }}>OK</span>;
}

function TempoPill({ real, padrao }) {
  const pct = ((real - padrao) / padrao) * 100;
  const acimaDoPadrao = pct > 5;
  const dentro = Math.abs(pct) <= 5;
  const cor = dentro ? 'var(--ok)' : (acimaDoPadrao ? 'var(--alr)' : 'var(--inf)');
  const sinal = pct > 0 ? '+' : '';
  return (
    <span style={{ fontFamily: 'var(--font-m)', fontSize: 11, color: cor, fontWeight: 700 }}>
      {real.toFixed(1)}
      <span style={{ color: 'var(--text3)', fontWeight: 400 }}> / {padrao.toFixed(1)} min</span>
      <span style={{ marginLeft: 4, fontSize: 9 }}>({sinal}{pct.toFixed(0)}%)</span>
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tela principal
───────────────────────────────────────────────────────────── */

export default function PesPerformanceOperadorScreen() {
  const [periodo, setPeriodo] = useState('hoje');
  const [operadorId, setOperadorId] = useState(OPERADOR_LOGADO_ID);

  // Lider/CQ pode trocar de operador via select (mock — em prod, gated por role).
  const operador = useMemo(
    () => OPERADORES.find((o) => o.id === operadorId) || OPERADORES[0],
    [operadorId]
  );

  const stats = operador.stats[periodo];

  // Media da equipe (todos operadores) no periodo escolhido.
  const mediaEquipe = useMemo(() => {
    const arr = OPERADORES.map((o) => o.stats[periodo]);
    return {
      aderencia:        arr.reduce((s, x) => s + x.aderencia,        0) / arr.length,
      tempoMedio:       arr.reduce((s, x) => s + x.tempoMedio,       0) / arr.length,
      mpsHora:          arr.reduce((s, x) => s + x.mpsHora,          0) / arr.length,
      variancesCriticas: arr.reduce((s, x) => s + x.variancesCriticas, 0) / arr.length,
    };
  }, [periodo]);

  // Ranking ordenado por aderencia decrescente.
  const ranking = useMemo(() => {
    return [...OPERADORES]
      .map((o) => ({ ...o, s: o.stats[periodo] }))
      .sort((a, b) => b.s.aderencia - a.s.aderencia);
  }, [periodo]);

  const minhaPosicao = ranking.findIndex((r) => r.id === operadorId) + 1;
  const totalOperadores = ranking.length;

  // Pesagens do operador no periodo. Hoje tem feed completo; semana/mes
  // sao agregados — mostramos apenas as mais recentes (Fase A).
  const minhasPesagens = MINHAS_PESAGENS[periodo] || [];
  const ehOperadorLogado = operadorId === OPERADOR_LOGADO_ID;

  // KPI deltas
  const deltaAderencia = stats.aderencia - META_ADERENCIA;
  const deltaTempoMP = ((stats.tempoMedio - stats.padraoMedio) / stats.padraoMedio) * 100;
  const deltaCriticas = stats.variancesCriticas - mediaEquipe.variancesCriticas;

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Pesagem · Performance Pessoal · MF5</div>
          <div className="ph-title">
            {ehOperadorLogado ? 'Minha Performance na Pesagem' : `Performance — ${operador.nome}`}
          </div>
        </div>
        <div className="ph-actions" style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Avatar do operador logado / selecionado */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '6px 12px', background: 'var(--surface2)',
            border: '1px solid var(--border)', borderRadius: 6,
          }}>
            <span style={{ fontSize: 18 }}>{operador.avatar}</span>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>{operador.nome}</div>
              <div style={{ fontSize: 10, color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>Mat. {operador.matricula}</div>
            </div>
          </div>

          {/* Select de operador (Lider/CQ) */}
          <select
            className="inp"
            value={operadorId}
            onChange={(e) => setOperadorId(e.target.value)}
            style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }}
            title="Trocar operador (visão líder)"
          >
            {OPERADORES.map((o) => (
              <option key={o.id} value={o.id}>
                {o.id === OPERADOR_LOGADO_ID ? '⭐ ' : ''}{o.nome} ({o.matricula})
              </option>
            ))}
          </select>

          {/* Periodo */}
          <select
            className="inp"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }}
          >
            {Object.entries(PERIODO_LABEL).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── 4 KPIs ─────────────────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 12, marginBottom: 14,
        }}
      >
        <KpiCard
          label="Aderência ao Padrão"
          valor={stats.aderencia.toFixed(1)}
          unidade="%"
          cor="var(--verde)"
          icone="🎯"
          destaque
          subInfo={`Meta ${META_ADERENCIA}%`}
          deltaInfo={
            <DeltaBadge
              valor={deltaAderencia}
              tipo="maior-melhor"
              sufixo="pp"
              referencia="meta"
            />
          }
        />
        <KpiCard
          label="Tempo Médio por MP"
          valor={stats.tempoMedio.toFixed(1)}
          unidade="min"
          cor="var(--ouro)"
          icone="⏱"
          subInfo={`Padrão equipe: ${stats.padraoMedio.toFixed(1)} min`}
          deltaInfo={
            <DeltaBadge
              valor={deltaTempoMP}
              tipo="menor-melhor"
              sufixo="%"
              referencia="padrão"
            />
          }
        />
        <KpiCard
          label="MPs Pesadas"
          valor={stats.mpsTotal.toLocaleString('pt-BR')}
          unidade=""
          cor="var(--inf)"
          icone="⚖️"
          subInfo={`${stats.mpsHora.toFixed(1)} MPs / hora · ${PERIODO_LABEL[periodo].toLowerCase()}`}
        />
        <KpiCard
          label="Variâncias Críticas"
          valor={stats.variancesCriticas}
          unidade=""
          cor={stats.variancesCriticas > mediaEquipe.variancesCriticas ? 'var(--per)' : 'var(--ok)'}
          icone="⚠"
          subInfo={`Média da equipe: ${mediaEquipe.variancesCriticas.toFixed(1)}`}
          deltaInfo={
            <DeltaBadge
              valor={deltaCriticas}
              tipo="menor-melhor"
              sufixo=""
              referencia="média"
            />
          }
        />
      </div>

      {/* ── Ranking + Tabela em 2 colunas ───────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1fr) minmax(420px, 2fr)',
          gap: 14,
          marginBottom: 14,
        }}
      >
        {/* Ranking */}
        <div className="card co" style={{ padding: 0, overflow: 'hidden', borderTop: '3px solid var(--ouro-claro)' }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 800 }}>🏆 Ranking da Equipe</span>
            <span style={{ fontSize: 10, color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>
              {periodo === 'hoje' ? 'Hoje' : periodo === 'semana' ? 'Semana' : 'Mês'} · ordenado por aderência
            </span>
          </div>
          <table className="tbl" style={{ fontSize: 11 }}>
            <thead>
              <tr>
                <th style={{ width: 40, textAlign: 'center' }}>Pos.</th>
                <th>Operador</th>
                <th style={{ textAlign: 'right' }}>Aderência</th>
                <th style={{ textAlign: 'right' }}>MPs/h</th>
                <th style={{ textAlign: 'right' }}>Críticas</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r, i) => {
                const ehLinhaAtiva = r.id === operadorId;
                const medalha = ['🥇', '🥈', '🥉'][i] || `${i + 1}º`;
                return (
                  <tr
                    key={r.id}
                    style={{
                      background: ehLinhaAtiva ? 'var(--verde-dim)' : 'transparent',
                      fontWeight: ehLinhaAtiva ? 700 : 400,
                    }}
                  >
                    <td style={{ textAlign: 'center', fontSize: 14 }}>{medalha}</td>
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
                    <td className="mono" style={{ textAlign: 'right' }}>{r.s.mpsHora.toFixed(1)}</td>
                    <td className="mono" style={{ textAlign: 'right', color: r.s.variancesCriticas === 0 ? 'var(--ok)' : 'var(--alr)' }}>
                      {r.s.variancesCriticas}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ padding: '8px 14px', borderTop: '1px solid var(--border)', background: 'var(--bg)', fontSize: 10, color: 'var(--text3)' }}>
            Você está em <strong style={{ color: 'var(--verde)' }}>{minhaPosicao}º de {totalOperadores}</strong>.
            {minhaPosicao === 1 && ' 🎉 Liderando!'}
            {minhaPosicao === 2 && ' Está bem perto da liderança 👀'}
            {minhaPosicao === totalOperadores && ' Foco — vamos subir.'}
          </div>
        </div>

        {/* Tabela de pesagens */}
        <div className="card cv" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 800 }}>
              📋 {ehOperadorLogado ? 'Minhas' : `Pesagens de ${operador.nome}`} — {PERIODO_LABEL[periodo]}
            </span>
            <span style={{ fontSize: 10, color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>
              {minhasPesagens.length} pesagens detalhadas
            </span>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="tbl" style={{ fontSize: 11, minWidth: 760 }}>
              <thead>
                <tr>
                  <th>Hora</th>
                  <th>OP</th>
                  <th>MP · Material</th>
                  <th>Lote</th>
                  <th style={{ textAlign: 'right' }}>Alvo / Pesado (kg)</th>
                  <th style={{ textAlign: 'right' }}>Variância</th>
                  <th style={{ textAlign: 'right' }}>Tempo Real / Padrão</th>
                  <th>Sala · Box</th>
                  <th style={{ textAlign: 'center' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {minhasPesagens.length === 0 && (
                  <tr>
                    <td colSpan={9} style={{ textAlign: 'center', padding: 28, color: 'var(--text3)' }}>
                      <div style={{ fontSize: 22, marginBottom: 4 }}>📊</div>
                      Feed detalhado disponível apenas para "Hoje" nesta fase.
                      <div style={{ fontSize: 10, marginTop: 4 }}>
                        (Em produção: paginação completa por período.)
                      </div>
                    </td>
                  </tr>
                )}
                {minhasPesagens.map((p, idx) => (
                  <tr key={idx} style={{ background: p.status === 'desv' ? 'var(--alr-p)' : 'transparent' }}>
                    <td className="mono">{p.hora}</td>
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
                      <TempoPill real={p.tempoReal} padrao={p.tempoPadrao} />
                    </td>
                    <td style={{ fontSize: 10, color: 'var(--text2)' }}>
                      {p.sala}
                      <div className="mono" style={{ fontSize: 9, color: 'var(--text3)' }}>{p.balanca}</div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <StatusPill status={p.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
