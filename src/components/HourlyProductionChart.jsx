import { useMemo } from 'react';

/**
 * Gráfico hora-a-hora de produção vs meta por SKU.
 * Renderizado em SVG puro — sem dependência externa.
 *
 * Props:
 *   sku        : nome do SKU em produção (string)
 *   metaHora   : meta horária em unidades (number)
 *   horas      : array { hora: '06', produzido: 980, status?: 'done'|'now'|'future' }
 *   horaAtual  : 'HH' string da hora corrente (ex.: '09')
 *
 * Cores:
 *   verde    : produzido ≥ 100% da meta
 *   ouro/alr : 80%–100% da meta
 *   per/red  : < 80% da meta
 *   cinza    : hora futura ou em curso
 */
export default function HourlyProductionChart({ sku, metaHora, horas, horaAtual }) {
  const stats = useMemo(() => {
    const realizadas = horas.filter((h) => h.status === 'done');
    const produzidoTotal = realizadas.reduce((s, h) => s + h.produzido, 0);
    const metaAteAgora = realizadas.length * metaHora;
    const aderencia = metaAteAgora > 0 ? (produzidoTotal / metaAteAgora) * 100 : 0;
    const acima = realizadas.filter((h) => h.produzido >= metaHora).length;
    const abaixo = realizadas.filter((h) => h.produzido < metaHora).length;
    return { produzidoTotal, metaAteAgora, aderencia, acima, abaixo, nReal: realizadas.length };
  }, [horas, metaHora]);

  // Layout SVG
  const W = 720;
  const H = 240;
  const padL = 50;
  const padR = 16;
  const padT = 24;
  const padB = 36;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  // Eixo Y: 0 .. yMax (ajustado pelo maior valor + margem)
  const maxProd = Math.max(metaHora * 1.2, ...horas.map((h) => h.produzido || 0));
  const yMax = Math.ceil(maxProd / 200) * 200; // arredonda em 200

  const ticks = [0, yMax * 0.25, yMax * 0.5, yMax * 0.75, yMax].map(Math.round);

  const barW = innerW / horas.length;
  const barInset = 6;

  const yToPx = (v) => padT + innerH * (1 - v / yMax);
  const metaY = yToPx(metaHora);

  // Cor de cada barra
  const corBarra = (h) => {
    if (h.status !== 'done') return { fill: 'var(--text3)', op: 0.25 };
    const pct = h.produzido / metaHora;
    if (pct >= 1.0) return { fill: 'var(--ok)', op: 0.95 };
    if (pct >= 0.8) return { fill: 'var(--alr)', op: 0.95 };
    return { fill: 'var(--per)', op: 0.95 };
  };

  return (
    <div className="card cv mb14">
      <div className="card-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
        <span>Produção Hora a Hora vs Meta — Acompanhamento de Cadência</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text3)', letterSpacing: '.04em' }}>
          SKU: <strong style={{ color: 'var(--verde)' }}>{sku}</strong> · Meta:{' '}
          <strong style={{ color: 'var(--verde)', fontFamily: 'var(--font-m)' }}>{metaHora.toLocaleString('pt-BR')} un/h</strong>
        </span>
      </div>

      {/* KPIs do gráfico */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 10,
          marginBottom: 14,
        }}
      >
        <Resumo
          label="Aderência Acumulada"
          value={`${stats.aderencia.toFixed(0)}%`}
          color={stats.aderencia >= 100 ? 'var(--ok)' : stats.aderencia >= 80 ? 'var(--alr)' : 'var(--per)'}
          sub={`${stats.produzidoTotal.toLocaleString('pt-BR')} / ${stats.metaAteAgora.toLocaleString('pt-BR')} un`}
        />
        <Resumo
          label="Horas Acima da Meta"
          value={`${stats.acima}`}
          color="var(--ok)"
          sub={`de ${stats.nReal} horas realizadas`}
        />
        <Resumo
          label="Horas Abaixo"
          value={`${stats.abaixo}`}
          color={stats.abaixo > 0 ? 'var(--per)' : 'var(--text3)'}
          sub="requerem atenção"
        />
        <Resumo
          label="Hora Atual"
          value={`${horaAtual}h`}
          color="var(--inf)"
          sub="em curso · acompanhamento"
        />
      </div>

      {/* SVG */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
          {/* Grid + ticks */}
          {ticks.map((t, i) => (
            <g key={i}>
              <line
                x1={padL} x2={W - padR}
                y1={yToPx(t)} y2={yToPx(t)}
                stroke="var(--border)"
                strokeWidth="1"
                strokeDasharray={i === 0 ? '0' : '2 4'}
              />
              <text
                x={padL - 8} y={yToPx(t) + 4}
                fontSize="10" fill="var(--text3)"
                textAnchor="end"
                fontFamily="var(--font-m)"
              >
                {t.toLocaleString('pt-BR')}
              </text>
            </g>
          ))}

          {/* Barras */}
          {horas.map((h, i) => {
            const cor = corBarra(h);
            const x = padL + i * barW + barInset;
            const w = barW - barInset * 2;
            const y = h.produzido > 0 ? yToPx(h.produzido) : padT + innerH;
            const barH = h.produzido > 0 ? padT + innerH - y : 0;
            const isCurrent = h.status === 'now';
            const isFuture = h.status === 'future';

            return (
              <g key={h.hora}>
                {/* Slot de fundo (mostra meta) */}
                <rect
                  x={x} y={padT}
                  width={w} height={innerH}
                  fill={isCurrent ? 'rgba(184,134,11,.08)' : 'transparent'}
                />

                {/* Barra real */}
                {h.produzido > 0 && (
                  <rect
                    x={x} y={y}
                    width={w} height={barH}
                    fill={cor.fill}
                    fillOpacity={cor.op}
                    rx="3" ry="3"
                  >
                    <title>{`${h.hora}:00 — ${h.produzido.toLocaleString('pt-BR')} un (${((h.produzido / metaHora) * 100).toFixed(0)}% da meta)`}</title>
                  </rect>
                )}

                {/* Valor em cima da barra */}
                {h.produzido > 0 && barH > 16 && (
                  <text
                    x={x + w / 2}
                    y={y - 4}
                    fontSize="10"
                    fill={cor.fill}
                    fontWeight="700"
                    textAnchor="middle"
                    fontFamily="var(--font-m)"
                  >
                    {h.produzido.toLocaleString('pt-BR')}
                  </text>
                )}

                {/* Label do eixo X */}
                <text
                  x={x + w / 2}
                  y={H - padB + 16}
                  fontSize="11"
                  fill={isCurrent ? 'var(--ouro)' : isFuture ? 'var(--text3)' : 'var(--text2)'}
                  fontWeight={isCurrent ? '800' : '600'}
                  textAnchor="middle"
                  fontFamily="var(--font-m)"
                >
                  {h.hora}h
                </text>

                {/* Indicador "agora" */}
                {isCurrent && (
                  <text
                    x={x + w / 2}
                    y={H - padB + 28}
                    fontSize="8"
                    fill="var(--ouro)"
                    fontWeight="900"
                    letterSpacing=".1em"
                    textAnchor="middle"
                  >
                    ◆ AGORA
                  </text>
                )}
              </g>
            );
          })}

          {/* Linha de meta */}
          <line
            x1={padL} x2={W - padR}
            y1={metaY} y2={metaY}
            stroke="var(--verde)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          <rect
            x={W - padR - 70} y={metaY - 9}
            width="68" height="16"
            fill="var(--verde)"
            rx="3" ry="3"
          />
          <text
            x={W - padR - 36} y={metaY + 3}
            fontSize="9.5" fill="#fff"
            fontWeight="900"
            letterSpacing=".06em"
            textAnchor="middle"
            fontFamily="var(--font-m)"
          >
            META {metaHora}/h
          </text>
        </svg>
      </div>

      {/* Legenda */}
      <div
        style={{
          display: 'flex',
          gap: 18,
          flexWrap: 'wrap',
          fontSize: 10.5,
          paddingTop: 10,
          marginTop: 6,
          borderTop: '1px solid var(--border)',
          color: 'var(--text2)',
        }}
      >
        <Legenda color="var(--ok)" label="≥ 100% da meta" />
        <Legenda color="var(--alr)" label="80–99% (alerta)" />
        <Legenda color="var(--per)" label="< 80% (crítico)" />
        <Legenda color="var(--text3)" label="Hora não realizada" muted />
        <span style={{ marginLeft: 'auto', color: 'var(--text3)', fontFamily: 'var(--font-m)', fontSize: 10 }}>
          Linha tracejada verde = meta horária do SKU
        </span>
      </div>
    </div>
  );
}

function Resumo({ label, value, color, sub }) {
  return (
    <div
      style={{
        background: 'var(--surface2)',
        border: '1px solid var(--border)',
        borderRadius: 6,
        padding: '8px 12px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 900,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          color: 'var(--text3)',
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-d)', fontSize: 22, fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 3 }}>{sub}</div>
    </div>
  );
}

function Legenda({ color, label, muted }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span
        style={{
          width: 10,
          height: 10,
          background: color,
          borderRadius: 2,
          opacity: muted ? 0.35 : 1,
        }}
      />
      <span style={{ color: muted ? 'var(--text3)' : 'var(--text2)' }}>{label}</span>
    </span>
  );
}
