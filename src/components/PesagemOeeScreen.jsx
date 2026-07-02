import { useMemo } from 'react';
import { PESAGEM_OEE as D } from '../data/pes-oee-data.js';

/**
 * Tela /pes-oee — OEE da Pesagem.
 *
 * Estrutura definida na reuniao "MES - Levantamento Funcional - OEE"
 * de 30/04/2026:
 *
 *   OEE Pesagem = Disponibilidade x Performance
 *   (Qualidade nao se aplica — na pesagem nao ha reprovacao)
 *
 *   PERFORMANCE OFICIAL (granel)        = visao executiva (do CQ/Lider)
 *   TEMPO DE CICLO POR MP (informativo) = visao operacional (Tati)
 *   DISPONIBILIDADE (sala/box)          = paradas programadas / nao
 */

const COR_STATUS = {
  dentro:  { fg: 'var(--ok)',   bg: 'var(--ok-p)',   bd: 'var(--ok-b)',   label: '✓ Dentro do padrão' },
  atencao: { fg: 'var(--alr)',  bg: 'var(--alr-p)',  bd: 'var(--alr-b)',  label: '⚠ Atenção' },
  fora:    { fg: 'var(--per)',  bg: 'var(--per-p)',  bd: 'var(--per-b)',  label: '⚠ Fora do padrão' },
};

/**
 * Calcula o OEE da Pesagem em runtime a partir dos dados das tabelas.
 * Retorna o breakdown completo (numerador/denominador) para que cada
 * KPI possa exibir sua memoria de calculo na tela.
 *
 *   Performance     = Σ tempoPadrao(granel)  /  Σ tempoReal(granel)
 *   Disponibilidade = TempoOperando  /  TempoDisponivel
 *                     onde:
 *                       TempoDisponivel = TempoTotal − ParadasProgramadas
 *                       TempoOperando   = TempoDisponivel − ParadasNaoProgramadas
 *   Qualidade       = 100%  (fixo na pesagem — sem reprovacao)
 *   OEE             = Disp x Perf x Qual
 */
function calcularOEE(dados) {
  // Performance — agregado dos graneis
  const padraoTotal = dados.performanceGranel.reduce((s, g) => s + g.tempoPadrao, 0);
  const realTotal   = dados.performanceGranel.reduce((s, g) => s + g.tempoReal,   0);
  const performance = realTotal > 0 ? (padraoTotal / realTotal) * 100 : 0;

  // Disponibilidade — base no tempo total do turno
  const tempoTotal      = dados.tempoTotalTurnoMin;
  const programadas     = dados.paradas.filter((p) => p.tipo === 'programada').reduce((s, p) => s + p.min, 0);
  const naoProgramadas  = dados.paradas.filter((p) => p.tipo === 'nao-programada').reduce((s, p) => s + p.min, 0);
  const tempoDisponivel = tempoTotal - programadas;
  const tempoOperando   = tempoDisponivel - naoProgramadas;
  const disponibilidade = tempoDisponivel > 0 ? (tempoOperando / tempoDisponivel) * 100 : 0;

  // Qualidade fixa
  const qualidade = dados.qualidade;

  // OEE
  const oee = (disponibilidade / 100) * (performance / 100) * (qualidade / 100) * 100;

  return {
    oee, disponibilidade, performance, qualidade,
    tempoTotal, programadas, naoProgramadas, tempoDisponivel, tempoOperando,
    padraoTotal, realTotal,
  };
}

export default function PesagemOeeScreen() {
  const calc = useMemo(() => calcularOEE(D), []);

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Pesagem · MF5 · ERU 5.2.x — OEE Operacional</div>
          <div className="ph-title">OEE da Pesagem</div>
        </div>
        <div className="ph-actions">
          <select className="inp" style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }} defaultValue="hoje">
            <option value="hoje">Hoje · Turno A</option>
            <option value="semana">Esta Semana</option>
            <option value="mes">Este Mês</option>
            <option value="custom">Período customizado…</option>
          </select>
          <select className="inp" style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }} defaultValue="todas">
            <option value="todas">Todas as Salas</option>
            <option value="A">Sala A</option>
            <option value="B">Sala B</option>
            <option value="C">Sala C</option>
          </select>
          <button className="btn btn-sm btn-ghost" onClick={() => alert('🔄 Recalculando OEE com base nos últimos apontamentos...')}>🔄 Atualizar</button>
          <button className="btn btn-sm btn-v" onClick={() => alert('⬇ Exportando OEE para CSV...')}>⬇ Exportar CSV</button>
        </div>
      </div>

      {/* ── KPIs principais (OEE breakdown) ────────────────── */}
      <div className="g3 mb14">
        <KpiOEE
          label="OEE Global"
          valor={calc.oee}
          unidade="%"
          meta={D.meta}
          cor="verde"
          destaque
          memoria={`Disp × Perf = ${calc.disponibilidade.toFixed(1)}% × ${calc.performance.toFixed(1)}%`}
        />
        <KpiOEE
          label="Disponibilidade"
          valor={calc.disponibilidade}
          unidade="%"
          cor="inf"
          memoria={`${calc.tempoOperando}min operando ÷ ${calc.tempoDisponivel}min disponíveis`}
        />
        <KpiOEE
          label="Performance"
          valor={calc.performance}
          unidade="%"
          cor="ouro"
          memoria={`Σ padrão (${calc.padraoTotal}min) ÷ Σ real (${calc.realTotal}min)`}
        />
      </div>

      {/* ── 2 colunas: Performance Granel + Disponibilidade ─ */}
      <div className="g73 mb14">
        <CardPerformanceGranel calc={calc} />
        <CardDisponibilidade calc={calc} />
      </div>

      {/* ── Tempo de ciclo por MP ──────────────────────────── */}
      <CardTempoCicloMP />

      {/* ── Salas + Histórico em 2 colunas ─────────────────── */}
      <div className="g64 mt14">
        <CardSalas />
        <CardHistorico />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   KPI OEE — usado nos 4 cards do topo
───────────────────────────────────────────────────────────── */
function KpiOEE({ label, valor, unidade = '%', meta, cor = 'verde', sub, destaque, memoria }) {
  const corMap = {
    verde: 'var(--verde)',
    ouro:  'var(--ouro)',
    inf:   'var(--inf)',
    per:   'var(--per)',
    ney:   'var(--text3)',
  };
  const corValor = corMap[cor];
  const acimaMeta = meta != null && valor >= meta;

  return (
    <div
      className={`card ${destaque ? 'cv' : ''}`}
      style={{
        textAlign: 'center',
        padding: 16,
        borderTop: destaque ? `4px solid ${corValor}` : undefined,
      }}
    >
      <div className="kpi-l">{label}</div>
      <div
        style={{
          fontFamily: 'var(--font-m)',
          fontSize: destaque ? 50 : 42,
          fontWeight: 700,
          color: corValor,
          lineHeight: 1,
          margin: '6px 0',
        }}
      >
        {valor.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
        <span style={{ fontSize: destaque ? 22 : 18, color: 'var(--text3)', marginLeft: 4 }}>{unidade}</span>
      </div>
      {meta != null && (
        <div style={{ fontSize: 10, color: 'var(--text3)', marginBottom: 6 }}>
          Meta: <strong style={{ color: 'var(--text2)' }}>{meta}%</strong>{' '}
          <span style={{ color: acimaMeta ? 'var(--ok)' : 'var(--alr)', fontWeight: 700, marginLeft: 4 }}>
            {acimaMeta ? '✓ acima' : `Δ ${(valor - meta).toFixed(1)}pp`}
          </span>
        </div>
      )}
      {sub && <div style={{ fontSize: 10, color: 'var(--text3)' }}>{sub}</div>}

      {/* Barra de progresso */}
      <div style={{ height: 6, background: 'var(--bg2)', borderRadius: 3, marginTop: 8, overflow: 'hidden' }}>
        <div
          style={{
            width: `${Math.min(valor, 100)}%`,
            height: '100%',
            background: corValor,
            borderRadius: 3,
            transition: 'width .4s',
          }}
        />
      </div>

      {/* Memória de cálculo (se fornecida) */}
      {memoria && (
        <div
          style={{
            fontSize: 9,
            fontFamily: 'var(--font-m)',
            color: 'var(--text3)',
            marginTop: 8,
            paddingTop: 6,
            borderTop: '1px dashed var(--border)',
            letterSpacing: '.02em',
          }}
          title="Memória de cálculo"
        >
          {memoria}
        </div>
      )}
    </div>
  );
}

function KpiMini({ label, valor, cor }) {
  return (
    <div style={{ textAlign: 'center', padding: 4 }}>
      <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-m)', fontSize: 22, fontWeight: 700, color: cor, lineHeight: 1 }}>{valor}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Performance — visão Granel (oficial OEE)
───────────────────────────────────────────────────────────── */
function CardPerformanceGranel({ calc }) {
  const dados = D.performanceGranel;
  const maxTempo = useMemo(() => Math.max(...dados.map((d) => Math.max(d.tempoPadrao, d.tempoReal))), [dados]);

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
            <th>Sala</th>
            <th>Padrão</th>
            <th>Real</th>
            <th style={{ minWidth: 200 }}>Comparativo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
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
                <td><span className="bdg bdg-inf" style={{ fontSize: 9 }}>{d.sala}</span></td>
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
            <td colSpan="3" style={{ fontWeight: 700, color: 'var(--verde-esc)', fontSize: 11, padding: '8px 10px' }}>
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

/* ─────────────────────────────────────────────────────────────
   Disponibilidade — paradas
───────────────────────────────────────────────────────────── */
function CardDisponibilidade({ calc }) {
  const dados = D.paradas;
  const totalMin = dados.reduce((s, p) => s + p.min, 0);

  const corMap = {
    inf: 'var(--inf)',
    alr: 'var(--alr)',
    per: 'var(--per)',
  };

  return (
    <div className="card co">
      <div className="card-title">Disponibilidade · Paradas</div>

      {/* Breakdown do tempo (Total → Disponível → Operando) */}
      <div
        style={{
          background: 'var(--surface2)',
          border: '1px solid var(--border)',
          borderRadius: 6,
          padding: '10px 12px',
          marginBottom: 14,
          fontSize: 11,
          fontFamily: 'var(--font-m)',
        }}
      >
        <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 6 }}>
          Memória de cálculo
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0' }}>
          <span style={{ color: 'var(--text2)' }}>Tempo Total do Turno</span>
          <strong>{calc.tempoTotal} min</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', color: 'var(--inf)' }}>
          <span>(−) Paradas Programadas</span>
          <strong>{calc.programadas} min</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderTop: '1px dashed var(--border)' }}>
          <span style={{ color: 'var(--text2)', fontWeight: 700 }}>= Tempo Disponível</span>
          <strong style={{ color: 'var(--verde)' }}>{calc.tempoDisponivel} min</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', color: 'var(--alr)' }}>
          <span>(−) Paradas Não-Programadas</span>
          <strong>{calc.naoProgramadas} min</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0 3px', borderTop: '1px solid var(--ouro-claro)' }}>
          <span style={{ color: 'var(--ouro)', fontWeight: 700 }}>= Tempo Operando</span>
          <strong style={{ color: 'var(--ouro)' }}>{calc.tempoOperando} min</strong>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '5px 0 0',
            marginTop: 4,
            borderTop: '2px solid var(--verde)',
            fontSize: 12,
          }}
        >
          <span style={{ color: 'var(--verde-esc)', fontWeight: 700 }}>Disponibilidade</span>
          <strong style={{ color: 'var(--verde)', fontFamily: 'var(--font-m)', fontSize: 14 }}>
            {calc.disponibilidade.toFixed(1)}%
          </strong>
        </div>
      </div>

      {/* Barra agregada de paradas */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', height: 14, borderRadius: 7, overflow: 'hidden', border: '1px solid var(--border)' }}>
          {dados.map((p, i) => {
            const w = (p.min / totalMin) * 100;
            return (
              <div
                key={i}
                style={{ width: `${w}%`, background: corMap[p.cor], opacity: 0.9 }}
                title={`${p.motivo}: ${p.min}min`}
              />
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--text3)', marginTop: 6 }}>
          <span>Total paradas: <strong>{totalMin} min</strong></span>
          <span style={{ color: 'var(--inf)' }}>Prog: <strong>{calc.programadas}m</strong></span>
          <span style={{ color: 'var(--alr)' }}>Não-prog: <strong>{calc.naoProgramadas}m</strong></span>
        </div>
      </div>

      {/* Lista de paradas */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {dados.map((p, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto auto',
              gap: 10,
              alignItems: 'center',
              padding: '6px 10px',
              background: 'var(--surface2)',
              borderRadius: 4,
              borderLeft: `3px solid ${corMap[p.cor]}`,
              fontSize: 11,
            }}
          >
            <span style={{ width: 10, height: 10, background: corMap[p.cor], borderRadius: 2 }} />
            <span style={{ fontWeight: 700, color: 'var(--text)' }}>{p.motivo}</span>
            <span className="mono" style={{ color: 'var(--text3)' }}>{p.ocorr}× </span>
            <span className="mono" style={{ fontWeight: 700, color: corMap[p.cor], minWidth: 50, textAlign: 'right' }}>{p.min}m</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tempo de ciclo por MP (acompanhamento operacional)
───────────────────────────────────────────────────────────── */
function CardTempoCicloMP() {
  const dados = D.tempoCicloMP;

  return (
    <div className="card ca">
      <div className="card-title">Tempo de Ciclo por Matéria-Prima · Acompanhamento Operacional</div>

      <style>{`
        .ciclo-mp-tbl { font-size: 13.5px; }
        .ciclo-mp-tbl th { padding: 12px 10px; font-size: 11px; }
        .ciclo-mp-tbl td { padding: 13px 10px; vertical-align: middle; }
        .ciclo-mp-tbl tbody tr { transition: background .15s; }
        .ciclo-mp-tbl tbody tr:hover { background: var(--surface2); }
      `}</style>

      <div className="abox info mb14" style={{ marginBottom: 12 }}>
        <span className="ai">ℹ</span>
        <div>
          O <strong>tempo padrão por MP</strong> é construído pelo MES com base no <strong>histórico</strong> (média das primeiras
          semanas). O sistema sinaliza variações para identificar MPs com dificuldade de manuseio ou diferenças entre operadores.
        </div>
      </div>

      <table className="tbl ciclo-mp-tbl">
        <thead>
          <tr>
            <th>Código</th>
            <th>Matéria-Prima</th>
            <th>Padrão (min)</th>
            <th>Real (min)</th>
            <th>Mín</th>
            <th>Máx</th>
            <th>Faixa</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((m, i) => {
            const corDelta = m.variancia > 5 ? 'var(--per)' : m.variancia > 0 ? 'var(--alr)' : 'var(--ok)';
            const rangeMax = 18;
            return (
              <tr key={i}>
                <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{m.cod}</td>
                <td>{m.desc}</td>
                <td className="mono">{m.padrao.toFixed(1)}</td>
                <td className="mono" style={{ fontWeight: 700, color: corDelta }}>{m.real.toFixed(1)}</td>
                <td className="mono" style={{ color: 'var(--text3)' }}>{m.min.toFixed(1)}</td>
                <td className="mono" style={{ color: 'var(--text3)' }}>{m.max.toFixed(1)}</td>
                <td>
                  {/* Mini-barra de min..real..max */}
                  <div style={{ position: 'relative', height: 16, background: 'var(--bg2)', borderRadius: 8, overflow: 'hidden' }}>
                    <div
                      style={{
                        position: 'absolute',
                        left: `${(m.min / rangeMax) * 100}%`,
                        right: `${100 - (m.max / rangeMax) * 100}%`,
                        top: 4,
                        bottom: 4,
                        background: 'var(--border2)',
                        borderRadius: 4,
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        left: `${(m.real / rangeMax) * 100}%`,
                        top: 1,
                        bottom: 1,
                        width: 3,
                        background: corDelta,
                        borderRadius: 1,
                      }}
                      title={`Real: ${m.real}min`}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Salas — ocupação e OEE individual
───────────────────────────────────────────────────────────── */
function CardSalas() {
  return (
    <div className="card cv">
      <div className="card-title">OEE por Sala (Box)</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {D.salas.map((s) => {
          const corOEE = s.oee >= 80 ? 'var(--ok)' : s.oee >= 70 ? 'var(--alr)' : 'var(--per)';
          const corStatus = s.status === 'operando' ? 'bdg-ok' : s.status === 'sanitizacao' ? 'bdg-inf' : 'bdg-alr';
          return (
            <div
              key={s.id}
              style={{
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                borderLeft: `4px solid ${corOEE}`,
                borderRadius: 6,
                padding: '10px 14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, gap: 8 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--verde-esc)' }}>
                    {s.nome}{' '}
                    <span style={{ fontFamily: 'var(--font-m)', fontSize: 10, color: 'var(--text3)', fontWeight: 400 }}>
                      · {s.balancas} balanças
                    </span>
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text3)' }}>{s.operador}</div>
                </div>
                <span className={`bdg ${corStatus}`} style={{ fontSize: 9 }}>{s.status === 'operando' ? '● Operando' : s.status === 'sanitizacao' ? '🧴 Sanitizando' : '⚠ Parada'}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 11 }}>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 2 }}>
                    Ocupação
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ flex: 1, height: 6, background: 'var(--bg2)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${s.ocupacao}%`, height: '100%', background: 'var(--inf)' }} />
                    </div>
                    <span className="mono" style={{ fontWeight: 700 }}>{s.ocupacao}%</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 2 }}>
                    OEE
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ flex: 1, height: 6, background: 'var(--bg2)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${s.oee}%`, height: '100%', background: corOEE }} />
                    </div>
                    <span className="mono" style={{ fontWeight: 700, color: corOEE }}>{s.oee}%</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Histórico — tendência diária últimos 7 dias
───────────────────────────────────────────────────────────── */
function CardHistorico() {
  const dados = D.historico;
  const W = 580;
  const H = 220;
  const padL = 36;
  const padR = 12;
  const padT = 18;
  const padB = 28;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const yMax = 100;
  const yToPx = (v) => padT + innerH * (1 - v / yMax);

  const xStep = innerW / (dados.length - 1);
  const points = dados.map((d, i) => ({ x: padL + xStep * i, y: yToPx(d.oee), data: d }));
  const polyOEE = points.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <div className="card">
      <div className="card-title">Histórico OEE — últimos 7 dias</div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ display: 'block' }}>
        {/* Grid horizontal */}
        {[0, 25, 50, 75, 100].map((v, i) => (
          <g key={i}>
            <line x1={padL} x2={W - padR} y1={yToPx(v)} y2={yToPx(v)} stroke="var(--border)" strokeWidth="1" strokeDasharray={i === 0 ? '0' : '2 4'} />
            <text x={padL - 6} y={yToPx(v) + 4} fontSize="9" fill="var(--text3)" textAnchor="end" fontFamily="var(--font-m)">{v}%</text>
          </g>
        ))}
        {/* Linha de meta */}
        <line x1={padL} x2={W - padR} y1={yToPx(D.meta)} y2={yToPx(D.meta)} stroke="var(--ouro)" strokeWidth="2" strokeDasharray="6 4" />
        <text x={W - padR - 4} y={yToPx(D.meta) - 4} fontSize="9" fill="var(--ouro)" fontWeight="700" textAnchor="end">Meta {D.meta}%</text>
        {/* Linha OEE */}
        <polyline fill="none" stroke="var(--verde)" strokeWidth="2.5" points={polyOEE} />
        {/* Pontos */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4.5" fill="var(--verde)" stroke="#fff" strokeWidth="2" />
            <text x={p.x} y={p.y - 8} fontSize="9.5" fill="var(--verde-esc)" fontWeight="700" textAnchor="middle" fontFamily="var(--font-m)">
              {p.data.oee.toFixed(1)}
            </text>
            <text x={p.x} y={H - padB + 14} fontSize="10" fill="var(--text2)" textAnchor="middle" fontFamily="var(--font-m)" fontWeight="600">
              {p.data.data}
            </text>
          </g>
        ))}
      </svg>
      <div style={{ display: 'flex', gap: 14, fontSize: 10, color: 'var(--text2)', marginTop: 8, flexWrap: 'wrap' }}>
        <span><span style={{ color: 'var(--verde)', fontWeight: 700 }}>━</span> OEE Diário</span>
        <span><span style={{ color: 'var(--ouro)', fontWeight: 700 }}>┄</span> Meta</span>
        <span style={{ marginLeft: 'auto', color: 'var(--text3)' }}>Hoje: <strong style={{ color: 'var(--verde)' }}>{dados[dados.length - 1].oee}%</strong></span>
      </div>
    </div>
  );
}
