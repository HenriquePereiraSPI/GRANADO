import { useMemo, useState, useEffect } from 'react';
import { PESAGEM_OEE as D } from '../data/pes-oee-data.js';
import SalasFilter from './SalasFilter.jsx';

/**
 * Breakpoint responsivo: > 768px = WEB · <= 768px = MOBILE.
 * Atualiza automaticamente conforme a resolução/redimensionamento.
 */
function useIsMobile(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, [query]);
  return isMobile;
}

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
  const isMobile = useIsMobile();   // > 768px = WEB · <= 768px = MOBILE

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="page-header" style={isMobile ? { flexDirection: 'column', alignItems: 'stretch', gap: 10 } : undefined}>
        <div>
          <div className="ph-eyebrow">Pesagem · MF5 · ERU 5.2.x — OEE Operacional</div>
          <div className="ph-title" style={isMobile ? { fontSize: 20 } : undefined}>OEE da Pesagem</div>
        </div>
        <div className="ph-actions" style={isMobile ? { flexWrap: 'wrap', width: '100%' } : undefined}>
          <select className="inp" style={{ width: 'auto', fontSize: 12, padding: '6px 10px' }} defaultValue="hoje">
            <option value="hoje">Hoje</option>
            <option value="7d">7 dias</option>
            <option value="30d">30 dias</option>
            <option value="60d">60 dias</option>
          </select>
          <SalasFilter />
          <button className="btn btn-sm btn-v" onClick={() => alert('🔄 Recalculando OEE com base nos últimos apontamentos...')}>🔄 Atualizar</button>
        </div>
      </div>

      {/* ── KPIs principais — 3 colunas (web) / 1 coluna (mobile) ── */}
      <div className="mb14" style={{ display: 'grid', gap: 14, gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
        <KpiOEE
          label="OEE Global"
          valor={calc.oee}
          unidade="%"
          meta={D.meta}
          tag="OEE"
          destaque
          compact={isMobile}
          memoria={`Disp × Perf = ${calc.disponibilidade.toFixed(1)}% × ${calc.performance.toFixed(1)}%`}
        />
        <KpiOEE
          label="Disponibilidade"
          valor={calc.disponibilidade}
          unidade="%"
          tag="Disp."
          compact={isMobile}
          memoria={`${calc.tempoOperando}min operando ÷ ${calc.tempoDisponivel}min disponíveis`}
        />
        <KpiOEE
          label="Performance"
          valor={calc.performance}
          unidade="%"
          tag="Perf."
          compact={isMobile}
          memoria={`Σ padrão (${calc.padraoTotal}min) ÷ Σ real (${calc.realTotal}min)`}
        />
      </div>

      {/* ── Salas + Disponibilidade — 6/4 (web) / empilhado (mobile) ── */}
      <div className="mb14" style={{ display: 'grid', gap: 14, gridTemplateColumns: isMobile ? '1fr' : '6fr 4fr' }}>
        <CardSalas />
        <CardDisponibilidade calc={calc} />
      </div>

      {/* ── Histórico ──────────────────────────────────────── */}
      <div className="mt14">
        <CardHistorico />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   KPI OEE — usado nos 4 cards do topo
───────────────────────────────────────────────────────────── */
function KpiOEE({ label, valor, unidade = '%', meta, tag, sub, destaque, memoria, compact }) {
  // Cor só verde/vermelho: verde quando atinge a meta (ou a meta global), vermelho abaixo.
  const limite = meta != null ? meta : D.meta;
  const ok = valor >= limite;
  const corValor = ok ? 'var(--ok)' : 'var(--per)';
  const acimaMeta = meta != null && valor >= meta;

  const valorFmt = valor.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

  // ── Variante COMPACTA (mobile): card horizontal, sem memória de cálculo ──
  if (compact) {
    return (
      <div
        className="card"
        style={{ position: 'relative', padding: '11px 14px', borderLeft: `3px solid ${corValor}`, overflow: 'hidden' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ minWidth: 0 }}>
            <div className="kpi-l" style={{ marginBottom: 2 }}>{label}</div>
            {meta != null ? (
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>
                Meta {meta}%{' '}
                <span style={{ color: acimaMeta ? 'var(--ok)' : 'var(--per)', fontWeight: 700 }}>
                  {acimaMeta ? '✓ acima' : `Δ ${(valor - meta).toFixed(1)}pp`}
                </span>
              </div>
            ) : (
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>{tag}</div>
            )}
          </div>
          <div style={{ fontFamily: 'var(--font-m)', fontSize: 30, fontWeight: 700, color: corValor, lineHeight: 1, whiteSpace: 'nowrap' }}>
            {valorFmt}
            <span style={{ fontSize: 14, color: 'var(--text3)', marginLeft: 2 }}>{unidade}</span>
          </div>
        </div>
        <div style={{ height: 5, background: 'var(--bg2)', borderRadius: 3, marginTop: 8, overflow: 'hidden' }}>
          <div style={{ width: `${Math.min(valor, 100)}%`, height: '100%', background: corValor, borderRadius: 3, transition: 'width .4s' }} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="card"
      style={{
        position: 'relative',
        textAlign: 'center',
        padding: 16,
        borderLeft: '1px solid var(--border)',
      }}
    >
      {tag && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 14,
            padding: '3px 9px',
            borderRadius: '0 0 6px 6px',
            fontFamily: 'var(--font-b)',
            fontSize: 9,
            fontWeight: 900,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: ok ? 'var(--ok)' : 'var(--per)',
            background: ok ? 'var(--ok-p)' : 'var(--per-p)',
            border: `1px solid ${ok ? 'var(--ok-b)' : 'var(--per-b)'}`,
            borderTop: 'none',
          }}
          title={ok ? 'Dentro da meta' : 'Abaixo da meta'}
        >
          {tag}
        </div>
      )}
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
   Disponibilidade — paradas
───────────────────────────────────────────────────────────── */
function CardDisponibilidade({ calc }) {
  const dados = D.paradas;

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
          <span style={{ color: 'var(--text2)' }}>Tempo Total</span>
          <strong>{calc.tempoTotal} Minutos</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', color: 'var(--alr)' }}>
          <span>Tempo Parado</span>
          <strong>{calc.programadas + calc.naoProgramadas} Minutos</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderTop: '1px dashed var(--border)' }}>
          <span style={{ color: 'var(--text2)', fontWeight: 700 }}>Tempo Disponível</span>
          <strong style={{ color: 'var(--verde)' }}>{calc.tempoOperando} Minutos</strong>
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
   Salas — ocupação e OEE individual
───────────────────────────────────────────────────────────── */
function CardSalas() {
  return (
    <div className="card cv">
      <div className="card-title">OEE por Sala (Box)</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {D.salas.map((s) => {
          const corBar = (v) => (v >= D.meta ? 'var(--ok)' : 'var(--per)');
          const corOEE = corBar(s.oee);
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
                    {s.nome}
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, fontSize: 11 }}>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 2 }}>
                    Disponibilidade
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ flex: 1, height: 6, background: 'var(--bg2)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${s.disponibilidade}%`, height: '100%', background: corBar(s.disponibilidade) }} />
                    </div>
                    <span className="mono" style={{ fontWeight: 700, color: corBar(s.disponibilidade) }}>{s.disponibilidade}%</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 2 }}>
                    Performance
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ flex: 1, height: 6, background: 'var(--bg2)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${s.performance}%`, height: '100%', background: corBar(s.performance) }} />
                    </div>
                    <span className="mono" style={{ fontWeight: 700, color: corBar(s.performance) }}>{s.performance}%</span>
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
