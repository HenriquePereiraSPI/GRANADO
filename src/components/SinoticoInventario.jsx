import { useState, useMemo } from 'react';
import { STATUS_LABEL } from '../data/sinotico-inventario.js';

/**
 * Sinotico generico baseado no inventario oficial (Matriz de Qualificacao).
 * Hierarquia: MF -> Area -> Local -> Equipamento
 *
 * Recebe um `dataset` no formato:
 *   { MF1: { titulo, status, areas: [{ id, nome, locais: [{ id, nome, equipamentos: [...] }] }] }, ... }
 *
 * Fluxo de navegacao:
 *   1) Macro: 5 cards de MFs com totais agregados.
 *   2) Detalhe da MF: lista por Area, com cards por Local (mostrando equipamentos).
 */

const MFS = ['MF1', 'MF2', 'MF3', 'MF4', 'MF5'];

export default function SinoticoInventario({ dataset, subtitulo }) {
  const [mfSelected, setMfSelected] = useState(null);

  if (!mfSelected) {
    return <Macro dataset={dataset} subtitulo={subtitulo} onSelect={setMfSelected} />;
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-ghost"
        onClick={() => setMfSelected(null)}
        style={{ marginBottom: 10 }}
      >
        ← Voltar à visão geral das MFs
      </button>
      <Detalhe dataset={dataset} mf={mfSelected} subtitulo={subtitulo} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   MACRO — 5 cards (MF1..MF5)
──────────────────────────────────────────────*/

function totalsFor(mfData) {
  let ok = 0, alr = 0, err = 0, idle = 0, total = 0;
  for (const area of mfData.areas) {
    for (const loc of area.locais) {
      for (const eq of loc.equipamentos) {
        total++;
        if (eq.status === 'ok') ok++;
        else if (eq.status === 'alr') alr++;
        else if (eq.status === 'err') err++;
        else if (eq.status === 'idle') idle++;
      }
    }
  }
  return { ok, alr, err, idle, total };
}

function Macro({ dataset, subtitulo, onSelect }) {
  const totaisGerais = useMemo(() => {
    let ok = 0, alr = 0, err = 0, total = 0;
    let mfsAtivas = 0;
    for (const mf of MFS) {
      const t = totalsFor(dataset[mf]);
      ok += t.ok; alr += t.alr; err += t.err; total += t.total;
      if (t.total > 0) mfsAtivas++;
    }
    return { ok, alr, err, total, mfsAtivas };
  }, [dataset]);

  return (
    <>
      <div className="g4 mb14">
        <KpiCard
          variant="cv"
          label="Equipamentos em Operação"
          value={totaisGerais.ok}
          color="var(--ok)"
          sub={`de ${totaisGerais.total} (${subtitulo})`}
        />
        <KpiCard
          variant="co"
          label="Alertas"
          value={totaisGerais.alr}
          color="var(--alr)"
          sub="requerem atenção"
        />
        <KpiCard
          variant="ca"
          label="Paradas"
          value={totaisGerais.err}
          color="var(--per)"
          sub="máquinas bloqueadas"
        />
        <KpiCard
          label="MFs Ativas"
          value={
            <>
              {totaisGerais.mfsAtivas}
              <span style={{ fontSize: 18, color: 'var(--text3)' }}>/{MFS.length}</span>
            </>
          }
          color="var(--inf)"
          sub="módulos com dados"
        />
      </div>

      <div
        style={{
          fontSize: 9,
          fontWeight: 900,
          letterSpacing: '.16em',
          textTransform: 'uppercase',
          color: 'var(--text3)',
          marginBottom: 12,
          paddingBottom: 6,
          borderBottom: '1px solid var(--border)',
        }}
      >
        Selecione uma MF para abrir os equipamentos · {subtitulo}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14,
        }}
      >
        {MFS.map((mf) => (
          <MFCard key={mf} id={mf} mfData={dataset[mf]} onClick={() => onSelect(mf)} />
        ))}
      </div>
    </>
  );
}

function KpiCard({ variant, label, value, color, sub }) {
  return (
    <div className={`card ${variant || ''}`} style={{ textAlign: 'center', padding: 14 }}>
      <div className="kpi-l">{label}</div>
      <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: 10, color: 'var(--text3)' }}>{sub}</div>
    </div>
  );
}

function MFCard({ id, mfData, onClick }) {
  const t = totalsFor(mfData);
  const ativa = t.total > 0;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!ativa}
      style={{
        textAlign: 'left',
        background: 'var(--surface)',
        border: ativa ? '2px solid var(--verde)' : '2px solid var(--border)',
        borderRadius: 9,
        padding: 16,
        cursor: ativa ? 'pointer' : 'not-allowed',
        font: 'inherit',
        color: 'inherit',
        opacity: ativa ? 1 : 0.55,
        position: 'relative',
        boxShadow: 'var(--sh)',
        transition: 'transform .15s, box-shadow .15s, border-color .15s',
      }}
      onMouseEnter={(e) => {
        if (!ativa) return;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--sh2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = 'var(--sh)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 32, fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>
            {id}
          </div>
        </div>
        {ativa ? (
          <span className="bdg bdg-ok" style={{ fontSize: 9 }}>● Ativa</span>
        ) : (
          <span className="bdg bdg-ouro" style={{ fontSize: 9 }}>— sem eq —</span>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 8,
          padding: '10px 12px',
          background: 'var(--surface2)',
          borderRadius: 6,
          marginBottom: 10,
        }}
      >
        <KpiMini label="Equipamentos" value={t.total} color="var(--text2)" />
        <KpiMini label="Operando" value={t.ok} color={t.ok > 0 ? 'var(--ok)' : 'var(--text3)'} />
        <KpiMini label="Alertas" value={t.alr} color={t.alr > 0 ? 'var(--alr)' : 'var(--text3)'} />
        <KpiMini label="Paradas" value={t.err} color={t.err > 0 ? 'var(--per)' : 'var(--text3)'} />
      </div>

      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: ativa ? 'var(--verde)' : 'var(--text3)',
          textAlign: 'right',
          letterSpacing: '.08em',
          textTransform: 'uppercase',
        }}
      >
        {ativa ? 'Abrir equipamentos →' : 'Sem dados ainda'}
      </div>
    </button>
  );
}

function KpiMini({ label, value, color }) {
  return (
    <div>
      <div
        style={{
          fontSize: 8,
          fontWeight: 900,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'var(--text3)',
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-m)', fontSize: 14, fontWeight: 700, color }}>{value}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DETALHE — Areas + Locais + Equipamentos
──────────────────────────────────────────────*/

function Detalhe({ dataset, mf, subtitulo }) {
  const data = dataset[mf];
  const t = totalsFor(data);

  if (!data || data.areas.length === 0) {
    return (
      <div className="card cv" style={{ padding: 40, textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text2)', marginBottom: 8 }}>
          {data?.titulo || mf}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text3)' }}>
          Sem equipamentos cadastrados em {subtitulo}.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="g4 mb14">
        <KpiCard variant="cv" label="Em Operação" value={t.ok} color="var(--ok)" sub={`de ${t.total} eq`} />
        <KpiCard variant="co" label="Alertas" value={t.alr} color="var(--alr)" sub="requerem atenção" />
        <KpiCard variant="ca" label="Paradas" value={t.err} color="var(--per)" sub="bloqueadas" />
        <KpiCard label="Aguardando" value={t.idle} color="var(--text3)" sub="sem OP alocada" />
      </div>

      <div className="card cv" style={{ padding: 18 }}>
        <div
          style={{
            fontSize: 9,
            fontWeight: 900,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: 'var(--text3)',
            marginBottom: 14,
            paddingBottom: 6,
            borderBottom: '1px solid var(--border)',
          }}
        >
          {data.titulo} · {subtitulo} · {t.total} equipamentos
        </div>

        {data.areas.map((area) => (
          <AreaSection key={area.id} area={area} />
        ))}
      </div>
    </>
  );
}

function AreaSection({ area }) {
  const totEq = area.locais.reduce((s, l) => s + l.equipamentos.length, 0);
  return (
    <div style={{ marginBottom: 22 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '.1em',
          textTransform: 'uppercase',
          color: 'var(--verde)',
          marginBottom: 10,
          paddingBottom: 4,
          borderBottom: '2px solid var(--verde)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <span>{area.nome}</span>
        <span style={{ fontSize: 9, color: 'var(--text3)', fontWeight: 700 }}>
          {area.locais.length} {area.locais.length === 1 ? 'local' : 'locais'} · {totEq} eq
        </span>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 10,
        }}
      >
        {area.locais.map((loc) => (
          <LocalCard key={loc.id} local={loc} />
        ))}
      </div>
    </div>
  );
}

function LocalCard({ local }) {
  const counts = local.equipamentos.reduce(
    (acc, e) => {
      acc[e.status] = (acc[e.status] || 0) + 1;
      return acc;
    },
    { ok: 0, alr: 0, err: 0, idle: 0 },
  );

  return (
    <div
      style={{
        background: 'var(--surface2)',
        border: '1px solid var(--border)',
        borderRadius: 6,
        padding: 10,
        minWidth: 0,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6, gap: 8 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: 'var(--text)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: 1,
            minWidth: 0,
          }}
          title={local.nome}
        >
          {local.nome}
        </div>
        <div style={{ fontSize: 9, color: 'var(--text3)', fontFamily: 'var(--font-m)', whiteSpace: 'nowrap' }}>
          {local.equipamentos.length} eq
        </div>
      </div>

      <div style={{ display: 'flex', gap: 6, marginBottom: 8, fontSize: 9, fontWeight: 700 }}>
        {counts.ok > 0 && <Pill color="var(--ok)">●  {counts.ok} op.</Pill>}
        {counts.alr > 0 && <Pill color="var(--alr)">●  {counts.alr} alr</Pill>}
        {counts.err > 0 && <Pill color="var(--per)">●  {counts.err} par.</Pill>}
        {counts.idle > 0 && <Pill color="var(--text3)">●  {counts.idle} idle</Pill>}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {local.equipamentos.map((eq, i) => (
          <EqRow key={`${eq.codigo}-${i}`} eq={eq} />
        ))}
      </div>
    </div>
  );
}

function Pill({ color, children }) {
  return (
    <span style={{ color, opacity: 0.95 }}>{children}</span>
  );
}

function EqRow({ eq }) {
  const colorMap = {
    ok: 'var(--ok)',
    alr: 'var(--alr)',
    err: 'var(--per)',
    idle: 'var(--text3)',
  };
  const bgMap = {
    ok: 'rgba(11,107,42,.06)',
    alr: 'rgba(154,90,0,.08)',
    err: 'rgba(155,28,28,.08)',
    idle: 'rgba(85,85,85,.05)',
  };
  const dotColor = colorMap[eq.status];
  const desc = (eq.descricao || '').replace(/\n/g, ' / ').trim();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 6px',
        borderRadius: 4,
        background: bgMap[eq.status],
        fontSize: 10,
        lineHeight: 1.3,
      }}
      title={`${eq.codigo} · ${desc} · ${STATUS_LABEL[eq.status]}`}
    >
      <span
        style={{
          width: 6, height: 6, minWidth: 6, borderRadius: '50%',
          background: dotColor,
          boxShadow: `0 0 0 2px ${bgMap[eq.status]}`,
        }}
      />
      <span style={{ fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--text2)', whiteSpace: 'nowrap' }}>
        {eq.codigo}
      </span>
      <span
        style={{
          color: 'var(--text3)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          flex: 1,
          minWidth: 0,
        }}
      >
        {desc}
      </span>
    </div>
  );
}
