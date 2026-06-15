import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DOSSIES, findDossie } from '../data/dossie-wo-784426.js';
import EtiquetaImpressa from './EtiquetaImpressa.jsx';

/**
 * Mapeamento de areas (Reconciliacao da Qualidade) para os nos da
 * cadeia genealogica. Usado quando a tela eh aberta com ?area=...
 *   fabricacao    -> fabricacao
 *   embalagem     -> embalagem-ean
 *   fisicoQuimico -> lims-granel
 *   microbiologia -> lims-pa
 */
const AREA_PARA_NO = {
  pesagem:       'pesagem',
  fabricacao:    'fabricacao',
  embalagem:     'embalagem-ean',
  fisicoQuimico: 'lims-granel',
  microbiologia: 'lims-pa',
};

/**
 * Wave 2.6 — Genealogia em abas por fase.
 * Cada aba filtra a cadeia em um subconjunto de nós. Aba "Todos"
 * mostra a cadeia completa (comportamento legado).
 */
const FASES = [
  { id: 'todos',     label: 'Todos',     icon: '🧬', ids: null },
  { id: 'pesagem',   label: 'Pesagem',   icon: '⚖️', ids: ['pesagem'] },
  { id: 'fabricacao',label: 'Fabricação',icon: '🧪', ids: ['fabricacao', 'granel'] },
  { id: 'embalagem', label: 'Embalagem', icon: '📦', ids: ['embalagem-ean', 'embalagem-dun', 'cq-ean'] },
  { id: 'qualidade', label: 'Qualidade', icon: '🔬', ids: ['lims-granel', 'lims-pa', 'qa-reconciliacao'] },
  { id: 'liberacao', label: 'Liberação', icon: '✓',  ids: ['liberacao'] },
];

const AREA_PARA_FASE = {
  pesagem:       'pesagem',
  fabricacao:    'fabricacao',
  embalagem:     'embalagem',
  fisicoQuimico: 'qualidade',
  microbiologia: 'qualidade',
};

/**
 * Tela "Genealogia de Lote" — Dossie Eletronico de Producao (EBR).
 * Apresenta o ciclo completo de um batch como uma cadeia genealogica
 * vertical (MPs -> Pesagem -> Fabricacao -> Granel -> ... -> Liberacao
 * Final), com cada no expansivel mostrando os dados detalhados.
 *
 * Dados origem: PDF Dossie_WO_784426_v3.pdf (12 paginas) gerado pelo
 * MES Apriso. Foi modelado em src/data/dossie-wo-784426.js.
 */

const COR_VARS = {
  verde: { fg: 'var(--ok)',    bg: 'var(--ok-p)',    bd: 'var(--ok-b)',    ico: 'var(--verde)' },
  ouro:  { fg: 'var(--ouro)',  bg: 'var(--ouro-dim)',bd: 'var(--ouro-claro)', ico: 'var(--ouro)' },
  inf:   { fg: 'var(--inf)',   bg: 'var(--inf-p)',   bd: 'var(--inf-b)',   ico: 'var(--inf)' },
  per:   { fg: 'var(--per)',   bg: 'var(--per-p)',   bd: 'var(--per-b)',   ico: 'var(--per)' },
  alr:   { fg: 'var(--alr)',   bg: 'var(--alr-p)',   bd: 'var(--alr-b)',   ico: 'var(--alr)' },
};

export default function GenealogiaScreen() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Le ?lote=... e ?area=... da URL (vem da Reconciliacao de Qualidade).
  // Lote (Lote PA, lote granel, WO ou codigo) seleciona o dossie inicial.
  // Area expande o no correspondente.
  const dossieInicial = useMemo(() => {
    const l = searchParams.get('lote');
    if (l) {
      const d = findDossie(l);
      if (d) return d;
    }
    return DOSSIES[0];
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const noAreaInicial = useMemo(() => {
    const a = searchParams.get('area');
    return a ? AREA_PARA_NO[a] : null;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [DOSSIE] = useState(dossieInicial);

  // Wave 2.6 — Aba de fase ativa. Se a tela foi aberta com ?area=...,
  // pré-seleciona a aba correspondente (ex: ?area=fabricacao → fabricacao).
  const [faseAtiva, setFaseAtiva] = useState(() => {
    const a = searchParams.get('area');
    return (a && AREA_PARA_FASE[a]) || 'todos';
  });

  const [expandidos, setExpandidos] = useState(() => {
    const base = new Set(['mp', 'fabricacao', 'granel']);
    if (noAreaInicial) base.add(noAreaInicial);
    return base;
  });

  // Filtra a cadeia conforme a fase ativa (Wave 2.6).
  const cadeiaFiltrada = useMemo(() => {
    const fase = FASES.find((f) => f.id === faseAtiva);
    if (!fase || !fase.ids) return DOSSIE.cadeia;
    const set = new Set(fase.ids);
    return DOSSIE.cadeia.filter((n) => set.has(n.id));
  }, [DOSSIE, faseAtiva]);

  // Quando vier de outra tela com ?area=..., faz scroll suave ate o no.
  useEffect(() => {
    if (!noAreaInicial) return;
    const t = setTimeout(() => {
      const buttons = Array.from(document.querySelectorAll('.screen.active button'));
      const target = buttons.find((b) => {
        const cardId = b.getAttribute('data-no-id');
        return cardId === noAreaInicial;
      });
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
    return () => clearTimeout(t);
  }, [noAreaInicial]);
  const toggle = (id) => {
    setExpandidos((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* ── Cabeçalho da página ─────────────────────────────── */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">EBR · Dossiê Eletrônico de Produção · WO {DOSSIE.wo}</div>
          <div className="ph-title">Genealogia de Lote — {DOSSIE.lote}</div>
        </div>
        <div className="ph-actions">
          <button className="btn btn-sm btn-v" onClick={() => alert('⬇ Baixando PDF assinado eletronicamente...')}>⬇ Baixar PDF</button>
        </div>
      </div>

      {/* ── Hero card com resumo da WO ──────────────────────── */}
      <div className="card cv mb14" style={{ padding: 18 }}>
        {/* KPIs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
          }}
        >
          <Kpi label="Tamanho do Batch" valor={DOSSIE.batchSize} cor="var(--verde)" />
          <Kpi label="Rendimento Granel" valor="100,10%" cor="var(--ok)" sub="dentro do limite (97–103%)" />
          <Kpi label="MPs Consumidas" valor="7" cor="var(--inf)" sub="3 pesagens + 4 mid-process" />
          <Kpi label="PA Produzido" valor="48.531 un" cor="var(--ouro)" sub="cartuchos 90g · rend. 93,23%" />
        </div>

        {/* Cronograma da Ordem (timeline horizontal) */}
        {DOSSIE.cronograma && (
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
            <div className="card-title" style={{ marginBottom: 10, padding: 0, border: 'none' }}>
              📅 Cronograma da Ordem
            </div>
            <CronogramaTimeline cronograma={DOSSIE.cronograma} />
          </div>
        )}
      </div>

      {/* ── Wave 2.6 — Tabs por Fase ───────────────────────── */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 4,
        marginBottom: 14, paddingBottom: 0,
        borderBottom: '2px solid var(--border)',
      }}>
        {FASES.map((f) => {
          const ativo = faseAtiva === f.id;
          const count = f.ids ? DOSSIE.cadeia.filter((n) => f.ids.includes(n.id)).length : DOSSIE.cadeia.length;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFaseAtiva(f.id)}
              style={{
                background: ativo ? 'var(--verde)' : 'var(--surface)',
                color: ativo ? '#fff' : 'var(--text2)',
                border: '1px solid var(--border)',
                borderBottom: ativo ? '2px solid var(--verde)' : '1px solid var(--border)',
                marginBottom: -2,
                borderRadius: '6px 6px 0 0',
                padding: '8px 16px',
                fontSize: 12, fontWeight: 700,
                fontFamily: 'inherit',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <span style={{ fontSize: 14 }}>{f.icon}</span>
              {f.label}
              <span style={{
                fontSize: 10, fontWeight: 800,
                padding: '1px 6px', borderRadius: 8,
                background: ativo ? 'rgba(255,255,255,.22)' : 'var(--surface2)',
                color: ativo ? '#fff' : 'var(--text3)',
                border: `1px solid ${ativo ? 'rgba(255,255,255,.4)' : 'var(--border)'}`,
              }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Cadeia genealógica ──────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        {/* linha vertical de fundo conectando os nós */}
        {cadeiaFiltrada.length > 1 && (
          <div
            aria-hidden
            style={{
              position: 'absolute',
              left: 30,
              top: 32,
              bottom: 32,
              width: 3,
              background: 'linear-gradient(to bottom, var(--verde), var(--ouro-claro), var(--ok))',
              borderRadius: 2,
              zIndex: 0,
            }}
          />
        )}

        {cadeiaFiltrada.length === 0 ? (
          <div style={{
            padding: 30, textAlign: 'center', color: 'var(--text3)',
            background: 'var(--surface2)', border: '1px dashed var(--border)',
            borderRadius: 6, fontSize: 12,
          }}>
            Nenhum nó da cadeia para esta fase neste dossiê.
          </div>
        ) : (
          cadeiaFiltrada.map((no, idx) => (
            <NoCadeia
              key={no.id}
              no={no}
              ordem={idx + 1}
              total={cadeiaFiltrada.length}
              expandido={expandidos.has(no.id)}
              onToggle={() => toggle(no.id)}
              dossie={DOSSIE}
            />
          ))
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Componentes auxiliares
───────────────────────────────────────────────────────────── */

/* Timeline horizontal mostrando o ciclo de vida da OF (datas) */
function CronogramaTimeline({ cronograma }) {
  const steps = [
    { id: 'ordemInicio',   label: 'Ordem Início',   icon: '📋', cor: 'var(--inf)'  },
    { id: 'pesagem',       label: 'Pesagem',        icon: '⚖️', cor: 'var(--verde)' },
    { id: 'conferencia',   label: 'Conferência',    icon: '🔍', cor: 'var(--inf)'  },
    { id: 'inbatchInicio', label: 'InBatch Início', icon: '🧪', cor: 'var(--ouro)' },
    { id: 'inbatchFim',    label: 'InBatch Fim',    icon: '✓',  cor: 'var(--ok)'   },
    { id: 'ordemFim',      label: 'Ordem Fim',      icon: '🏁', cor: 'var(--ok)'   },
  ];
  return (
    <div
      style={{
        display: 'flex', alignItems: 'flex-start',
        gap: 0, overflowX: 'auto', paddingBottom: 4,
      }}
    >
      {steps.map((s, i) => (
        <div
          key={s.id}
          style={{
            flex: '1 1 0', minWidth: 110,
            position: 'relative',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
        >
          {/* Linha conectora */}
          {i > 0 && (
            <div
              aria-hidden
              style={{
                position: 'absolute', left: '-50%', top: 18, width: '100%', height: 2,
                background: 'var(--border)', zIndex: 0,
              }}
            />
          )}
          <div
            style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'var(--surface)', border: `2px solid ${s.cor}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, position: 'relative', zIndex: 1,
              boxShadow: 'var(--sh)',
            }}
            title={s.label}
          >
            {s.icon}
          </div>
          <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)', marginTop: 6, textAlign: 'center' }}>
            {s.label}
          </div>
          <div className="mono" style={{ fontSize: 11, fontWeight: 700, color: s.cor, marginTop: 2 }}>
            {cronograma[s.id]}
          </div>
        </div>
      ))}
    </div>
  );
}

function Kpi({ label, valor, cor, sub }) {
  return (
    <div
      style={{
        background: 'var(--surface2)',
        border: '1px solid var(--border)',
        borderRadius: 6,
        padding: '10px 14px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-m)', fontSize: 26, fontWeight: 700, color: cor, lineHeight: 1 }}>{valor}</div>
      {sub && <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

/* Grade compacta de KPIs (label + valor) — usada em Pesagem, Fórmula,
   Controle de Peso. Aceita itens no formato { lbl, val, ok }. */
function KpiRow({ kpis }) {
  if (!kpis || kpis.length === 0) return null;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 8, marginBottom: 12 }}>
      {kpis.map((k, i) => (
        <div key={i} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, padding: '8px 12px' }}>
          <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 3 }}>{k.lbl}</div>
          <div className="mono" style={{ fontSize: 15, fontWeight: 700, color: k.ok ? 'var(--ok)' : 'var(--text)' }}>{k.val}</div>
        </div>
      ))}
    </div>
  );
}

function NoCadeia({ no, ordem, total, expandido, onToggle, dossie }) {
  const cores = COR_VARS[no.cor] || COR_VARS.verde;
  return (
    <div style={{ position: 'relative', marginBottom: 14, paddingLeft: 70, zIndex: 1 }}>
      {/* Marcador na linha (círculo) */}
      <div
        style={{
          position: 'absolute',
          left: 12,
          top: 12,
          width: 38,
          height: 38,
          borderRadius: '50%',
          background: cores.bg,
          border: `3px solid ${cores.fg}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          boxShadow: 'var(--sh)',
          zIndex: 2,
        }}
        title={`Etapa ${ordem} de ${total}`}
      >
        {no.icone}
      </div>

      {/* Card */}
      <div
        className="card"
        style={{
          background: 'var(--surface)',
          border: `2px solid ${cores.bd}`,
          borderLeft: `5px solid ${cores.fg}`,
          padding: 0,
          overflow: 'hidden',
        }}
      >
        {/* Header clicável */}
        <button
          type="button"
          data-no-id={no.id}
          onClick={onToggle}
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            padding: '14px 18px',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            font: 'inherit',
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', marginBottom: 2 }}>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 900,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  color: cores.fg,
                  fontFamily: 'var(--font-m)',
                }}
              >
                Etapa {ordem}/{total}
              </span>
              <span style={{ fontFamily: 'var(--font-d)', fontSize: 16, fontWeight: 700, color: 'var(--verde-esc)' }}>{no.titulo}</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--text2)' }}>{no.subtitulo}</div>
          </div>
          <span
            style={{
              fontSize: 18,
              color: cores.fg,
              fontWeight: 900,
              transform: expandido ? 'rotate(90deg)' : 'rotate(0)',
              transition: 'transform .18s',
              minWidth: 18,
            }}
          >
            ›
          </span>
        </button>

        {/* Body expandido */}
        {expandido && (
          <div style={{ padding: '0 18px 16px', borderTop: `1px solid ${cores.bd}` }}>
            <RenderConteudoNo no={no} cores={cores} dossie={dossie} />
          </div>
        )}
      </div>
    </div>
  );
}

function RenderConteudoNo({ no, cores, dossie }) {
  switch (no.id) {
    case 'mp':
      return <TabelaItens dados={no.itens} colunas={[
        { k: 'cod',      label: 'Código',     style: { fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--verde)' } },
        { k: 'desc',     label: 'Descrição' },
        { k: 'lote',     label: 'Lote',       style: { fontFamily: 'var(--font-m)', color: 'var(--text2)' } },
        { k: 'validade', label: 'Validade',   style: { fontFamily: 'var(--font-m)', color: 'var(--text2)', fontSize: 11 } },
        { k: 'qtd',      label: 'Qtd.',       style: { fontFamily: 'var(--font-m)', textAlign: 'right', fontWeight: 700 } },
      ]} />;

    case 'pesagem': {
      // Wave 3.12 — Pesagem destacada no dossiê. Item com qtd zerada
      // (ex: "0,00 kg" / "0 kg" / vazio) é destacado em vermelho, pois
      // indica MP NÃO PESADA — bloqueia a reconciliação. Reunião GQV/
      // CQ 12/05/2026: o CQ não pode aprovar lote com peso zerado.
      const isZerada = (qtd) => {
        if (!qtd) return true;
        const num = parseFloat(String(qtd).replace(/[^0-9.,]/g, '').replace(',', '.'));
        return isNaN(num) || num <= 0;
      };
      const mpsZeradas = no.itens.filter((mp) => isZerada(mp.qtd));
      const totalPeso = no.itens.reduce((acc, mp) => {
        const num = parseFloat(String(mp.qtd || '0').replace(/[^0-9.,]/g, '').replace(',', '.')) || 0;
        return acc + num;
      }, 0);

      return (
        <div style={{ marginTop: 12 }}>
          {/* Wave 3.12 — Banner destacado da Pesagem */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 14px', marginBottom: 10,
            background: mpsZeradas.length > 0 ? 'var(--per-p)' : 'var(--verde-dim)',
            border: `2px solid ${mpsZeradas.length > 0 ? 'var(--per-b)' : 'var(--ok-b)'}`,
            borderLeft: `5px solid ${mpsZeradas.length > 0 ? 'var(--per)' : 'var(--verde)'}`,
            borderRadius: 6,
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>⚖️</span>
              <div>
                <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text3)' }}>
                  PESAGEM · DESTAQUE GMP
                </div>
                <div style={{ fontFamily: 'var(--font-m)', fontSize: 17, fontWeight: 700, color: 'var(--verde-esc)' }}>
                  {no.itens.length} MPs pesadas · {totalPeso.toFixed(2).replace('.', ',')} kg
                </div>
              </div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {mpsZeradas.length > 0 ? (
                <span style={{
                  fontSize: 10, fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase',
                  background: 'var(--per)', color: '#fff',
                  padding: '5px 12px', borderRadius: 10,
                  border: '1.5px solid var(--per-b)',
                }} title="MPs com quantidade zero — bloqueia liberação">
                  ⛔ {mpsZeradas.length} MP{mpsZeradas.length > 1 ? 's' : ''} ZERADA{mpsZeradas.length > 1 ? 'S' : ''}
                </span>
              ) : (
                <span style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
                  background: 'var(--ok)', color: '#fff',
                  padding: '4px 10px', borderRadius: 10,
                }}>
                  ✓ Todas pesadas
                </span>
              )}
            </div>
          </div>

          {/* KPIs da pesagem (sincronizado InBatch) */}
          <KpiRow kpis={no.kpis} />

          <div className="card-title" style={{ marginBottom: 8 }}>
            Relatório de Pesagem + Etiquetas de Matéria-Prima
          </div>

          {/* Cabecalho da gaiola */}
          {no.gaiola && (
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '8px 12px', marginBottom: 10,
                background: 'var(--verde-dim)',
                border: '1px solid var(--ok-b)', borderRadius: 6,
                fontSize: 12, fontWeight: 700, color: 'var(--verde-esc)',
              }}
            >
              <span style={{ fontSize: 18 }}>📦</span>
              <span>{no.gaiola}</span>
              {no.gaiolaPosicao && (
                <span className="mono" style={{ fontSize: 11, color: 'var(--text2)', fontWeight: 400 }}>
                  · Posição: {no.gaiolaPosicao}
                </span>
              )}
              <span style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--text3)', fontWeight: 400 }}>
                {no.itens.length} MPs · {no.itens.reduce((acc, m) => acc + (m.subVolumes?.length || 1), 0)} volume(s) separado(s)
              </span>
            </div>
          )}
          <table className="tbl" style={{ marginTop: 0 }}>
            <thead>
              <tr>
                <th>Etq Nº</th>
                <th>Código</th>
                <th>Descrição</th>
                <th>Lote MP</th>
                <th>Validade</th>
                <th style={{ textAlign: 'right' }}>Teórico</th>
                <th style={{ textAlign: 'right' }}>Real</th>
                <th style={{ textAlign: 'right' }}>Variância</th>
                <th>Pesador</th>
                <th>Data/Hora</th>
                <th style={{ textAlign: 'center' }}>Assin.</th>
              </tr>
            </thead>
            <tbody>
              {no.itens.map((mp, i) => {
                const zerada = isZerada(mp.qtd);
                return (
                  <tr key={i} style={zerada ? {
                    background: 'var(--per-p)',
                    borderLeft: '4px solid var(--per)',
                  } : {}}>
                    <td className="mono" style={{ fontSize: 11, color: 'var(--inf)', fontWeight: 700 }}>{mp.etqCodigo}</td>
                    <td className="mono" style={{ fontWeight: 700, color: zerada ? 'var(--per)' : 'var(--verde)' }}>{mp.cod}</td>
                    <td>{mp.desc}</td>
                    <td className="mono" style={{ fontSize: 11, color: 'var(--text2)' }}>{mp.etqLote}</td>
                    <td className="mono" style={{ fontSize: 11, color: 'var(--text2)' }}>{mp.validade}</td>
                    <td className="mono" style={{ textAlign: 'right', color: 'var(--text3)' }}>{mp.teorico}</td>
                    <td className="mono" style={{
                      textAlign: 'right', fontWeight: 700,
                      color: zerada ? 'var(--per)' : 'var(--text)',
                    }}>
                      {zerada ? `⚠ ${mp.real || mp.qtd || '0,00 kg'}` : mp.real}
                    </td>
                    <td className="mono" style={{ textAlign: 'right', fontWeight: 700, color: 'var(--ok)' }}>{mp.variancia}</td>
                    <td style={{ fontSize: 11 }}>{mp.operador}</td>
                    <td className="mono" style={{ fontSize: 10, color: 'var(--text3)' }}>{mp.etqHora}</td>
                    <td style={{ textAlign: 'center', color: 'var(--ok)', fontWeight: 700 }}>{mp.assinatura}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Formula Padrao / Tamanho do Lote */}
          {no.formula && (
            <>
              <div className="card-title" style={{ marginTop: 14, marginBottom: 8 }}>Fórmula Padrão / Tamanho do Lote</div>
              <KpiRow kpis={no.formula} />
            </>
          )}

          {/* Sub-volumes (quando uma MP tem mais de 1 etiqueta) */}
          {no.itens.some((mp) => mp.subVolumes && mp.subVolumes.length > 1) && (
            <div style={{ marginTop: 14 }}>
              <div className="card-title" style={{ marginBottom: 8 }}>Sub-volumes (MPs com fracionamento)</div>
              {no.itens.filter((mp) => mp.subVolumes && mp.subVolumes.length > 1).map((mp, i) => (
                <div key={i} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, padding: '8px 12px', marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--verde-esc)', marginBottom: 6 }}>
                    {mp.cod} · {mp.desc} <span style={{ color: 'var(--text3)', fontWeight: 400 }}>(total {mp.qtd})</span>
                  </div>
                  <table className="tbl" style={{ fontSize: 11 }}>
                    <thead><tr><th>Etiqueta</th><th style={{ textAlign: 'right' }}>Qtd. Volume</th><th>Hora</th></tr></thead>
                    <tbody>
                      {mp.subVolumes.map((sv, j) => (
                        <tr key={j}>
                          <td className="mono" style={{ color: 'var(--inf)', fontWeight: 700 }}>{sv.etqCodigo}</td>
                          <td className="mono" style={{ textAlign: 'right', fontWeight: 700 }}>{sv.qtd}</td>
                          <td className="mono" style={{ fontSize: 10 }}>{sv.etqHora}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}

        </div>
      );
    }

    case 'fabricacao': {
      // Wave 3.11 — Instructions InBatch detalhadas. Classifica cada
      // etapa para que o CQ entenda exatamente o que ela faz (mensagem
      // pedida na reunião GQV/CQ 12/05/2026: "ter as instructions do
      // InBatch detalhadas, com o que o operador fez").
      const classificaEtapa = (e) => {
        const n = (e.nome || '').toUpperCase();
        if (n.includes('VERIFICA')) return { tipo: 'Verificação Inicial', icon: '🔍', cor: 'var(--inf)',  manual: true };
        if (n.includes('ADICAO_') || n.includes('ADD_')) return { tipo: 'Adição de Material', icon: '⬇️', cor: 'var(--ouro)', manual: false };
        if (n.includes('HOMOGE') || n.includes('RECIRC')) return { tipo: 'Homogeneização',  icon: '🌀', cor: 'var(--verde)', manual: false };
        if (e.codigo === 'CQ' || n.includes('AMOSTRA')) return { tipo: 'CQ · Amostra/Aprovação', icon: '🔬', cor: 'var(--per)', manual: true };
        return { tipo: 'Fase InBatch', icon: '⚙️', cor: 'var(--text2)', manual: false };
      };

      // Contagens pro resumo do header (Sistema vs Manual)
      const totalManual = no.etapas.filter((e) => classificaEtapa(e).manual).length;
      const totalSistema = no.etapas.length - totalManual;

      // Helper: calcula duração em minutos com base nas strings "DD/MM HH:MM:SS"
      const calcMin = (inicio, fim) => {
        try {
          const parse = (s) => {
            const [d, h] = s.split(' ');
            const [dia, mes] = d.split('/');
            const [hh, mm, ss] = (h || '00:00:00').split(':');
            return new Date(2026, parseInt(mes) - 1, parseInt(dia), parseInt(hh), parseInt(mm), parseInt(ss || 0));
          };
          const ms = parse(fim) - parse(inicio);
          return Math.max(0, Math.round(ms / 60000));
        } catch { return null; }
      };

      return (
        <div style={{ marginTop: 12 }}>
          {/* Identificacao do Lote de Fabricacao */}
          {no.identificacao && (
            <>
              <div className="card-title" style={{ marginBottom: 8 }}>Identificação do Lote de Fabricação</div>
              <DadosLista dados={[
                ['Código', no.identificacao.codigo],
                ['Nome do Produto', no.identificacao.nome],
                ['Sala', no.identificacao.sala],
                ['Tamanho', no.identificacao.tamanho],
                ['Lote Granel', no.identificacao.loteGranel],
                ['WO Fab.', no.identificacao.wo],
                ['Data Fab.', no.identificacao.dataFab],
                ['Em Campanha?', no.identificacao.campanha],
                ['Balança Zerada?', no.identificacao.balancaZerada],
                ['Utensílios Limpos?', no.identificacao.utensiliosLimpos],
                ['Último Prod. Reator Principal', no.identificacao.ultimoReatorPrincipal],
                ['Último Prod. Reator Auxiliar', no.identificacao.ultimoReatorAuxiliar],
              ]} />
            </>
          )}

          {/* Etiqueta Status do Equipamento / Peca */}
          {no.statusEquipamento && (
            <>
              <div className="card-title" style={{ marginTop: 14, marginBottom: 8 }}>Status do Equipamento / Peça</div>
              <table className="tbl" style={{ marginBottom: 4 }}>
                <thead>
                  <tr><th>Equipamento</th><th>Sala</th><th>Tipo Limpeza</th><th>Prod. Anterior</th><th>Lote Ant.</th><th>Data Limpeza</th><th>Assinatura</th></tr>
                </thead>
                <tbody>
                  {no.statusEquipamento.map((eq, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{eq.equipamento}</td>
                      <td>{eq.sala}</td>
                      <td><span className={`bdg ${eq.ok ? 'bdg-ok' : 'bdg-alr'}`} style={{ fontSize: 10 }}>{eq.tipoLimpeza}</span></td>
                      <td className="mono" style={{ fontSize: 11 }}>{eq.prodAnterior}</td>
                      <td className="mono" style={{ fontSize: 11, color: 'var(--text2)' }}>{eq.loteAnterior}</td>
                      <td className="mono" style={{ fontSize: 11 }}>{eq.dataLimpeza}</td>
                      <td style={{ fontSize: 11 }}>{eq.assinatura}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* Relatorio do InBatch — Sequencia de Fases */}
          <div className="card-title" style={{ marginTop: 14, marginBottom: 8 }}>Relatório do InBatch — Sequência de Fases</div>

          {/* Resumo das instructions */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12,
            padding: '10px 12px', background: 'var(--surface)',
            border: '1.5px solid var(--ouro-claro)', borderRadius: 6,
            borderLeft: '4px solid var(--ouro)',
          }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--verde-esc)' }}>
              ⚙️ Instructions InBatch:
            </span>
            <span style={{ fontSize: 11, color: 'var(--text2)' }}>
              <strong>{no.etapas.length}</strong> etapas executadas
            </span>
            <span style={{ fontSize: 11, color: 'var(--inf)' }}>
              · <strong>{totalManual}</strong> manuais (operador / CQ)
            </span>
            <span style={{ fontSize: 11, color: 'var(--text3)' }}>
              · <strong>{totalSistema}</strong> automáticas (sistema)
            </span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="tbl" style={{ fontSize: 11, minWidth: 960 }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Fase</th>
                  <th>Evento / Parâmetro</th>
                  <th>UM</th>
                  <th style={{ textAlign: 'right' }}>Previsto</th>
                  <th style={{ textAlign: 'right' }}>Realizado</th>
                  <th>Início → Fim</th>
                  <th style={{ textAlign: 'right' }}>Dur.</th>
                  <th>Operador</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {no.etapas.map((e, i) => {
                  const cls = classificaEtapa(e);
                  const dur = calcMin(e.inicio, e.fim);
                  const p = e.params[0] || {};
                  return (
                    <tr key={i} style={{ borderLeft: `3px solid ${cls.cor}` }}>
                      <td className="mono" style={{ color: 'var(--text3)' }}>{String(i + 1).padStart(2, '0')}</td>
                      <td style={{ fontWeight: 600 }}>
                        <span title={cls.tipo} style={{ marginRight: 4 }}>{cls.icon}</span>{e.nome}
                        {cls.manual && <span title="Input manual (operador / CQ)" style={{ marginLeft: 4 }}>👤</span>}
                      </td>
                      <td style={{ fontSize: 11 }}>{p.p}</td>
                      <td className="mono" style={{ fontSize: 10 }}>{p.um}</td>
                      <td className="mono" style={{ textAlign: 'right', color: 'var(--text3)' }}>{p.prev}</td>
                      <td className="mono" style={{ textAlign: 'right', fontWeight: 700, color: 'var(--verde)' }}>{p.real}</td>
                      <td className="mono" style={{ fontSize: 10, color: 'var(--text2)', whiteSpace: 'nowrap' }}>{e.inicio} → {e.fim}</td>
                      <td className="mono" style={{ textAlign: 'right', fontSize: 10 }}>{dur != null ? `${dur} min` : '—'}</td>
                      <td style={{ fontSize: 10 }}>{e.operador}</td>
                      <td><span className="bdg bdg-ok" style={{ fontSize: 9 }}>✓ {e.status}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Relatorio de Insumos Consumidos — consumo ocorre na fabricacao */}
          {no.insumos && (
            <>
              <div className="card-title" style={{ marginTop: 14, marginBottom: 8 }}>Relatório de Insumos Consumidos</div>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>MP</th>
                    <th style={{ textAlign: 'right' }}>Saldo Inicial</th>
                    <th style={{ textAlign: 'right' }}>Consumido</th>
                    <th style={{ textAlign: 'right' }}>Devolvido</th>
                    <th style={{ textAlign: 'right' }}>Saldo Final</th>
                    <th>Origem (Almox.)</th>
                  </tr>
                </thead>
                <tbody>
                  {no.insumos.map((ins, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{ins.mp}</td>
                      <td className="mono" style={{ textAlign: 'right' }}>{ins.saldoIni}</td>
                      <td className="mono" style={{ textAlign: 'right' }}>{ins.consumido}</td>
                      <td className="mono" style={{ textAlign: 'right', color: 'var(--text3)' }}>{ins.devolvido}</td>
                      <td className="mono" style={{ textAlign: 'right', fontWeight: 700 }}>{ins.saldoFim}</td>
                      <td style={{ fontSize: 11, color: 'var(--text2)' }}>{ins.origem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      );
    }

    case 'granel':
      return (
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div>
            <div className="card-title" style={{ marginBottom: 8 }}>Cálculo de Rendimento</div>
            <DadosLista dados={[
              ['Rendimento Teórico', no.rendimento.teorico],
              ['Rendimento Real', no.rendimento.real],
              ['Calculado', no.rendimento.calc],
              ['Limite Mín / Máx', `${no.rendimento.limMin} / ${no.rendimento.limMax}`],
              ['Perda', no.rendimento.perda],
              ['Status', no.rendimento.status],
              ['Responsável', no.rendimento.responsavel],
              ['Data', no.rendimento.data],
              ['Rendimento de Embalagem', no.rendimento.rendEmb],
              ['Último Produto Fabricado', `${no.rendimento.ultimoProduto} · ${no.rendimento.ultimoLote}`],
            ].filter(([, v]) => v != null)} />
          </div>
          <div>
            <div className="card-title" style={{ marginBottom: 8 }}>Etiqueta de Fabricação (Zebra)</div>
            <EtiquetaImpressa
              tipo="ETIQUETA DE FABRICAÇÃO"
              codigo={no.etiqueta.codigo}
              cor="ouro"
              fields={[
                ['CÓDIGO',          no.etiqueta.codigo],
                ['PRODUTO',         no.etiqueta.produto],
                ['LOTE GRANEL',     no.etiqueta.loteGranel],
                ['QUANTIDADE',      no.etiqueta.qtde],
                ['DATA PESAGEM',    no.etiqueta.dataPesagem],
                ['VAL. PROD. ACAB.',no.etiqueta.validadePA],
                ['INÍCIO FAB.',     no.etiqueta.inicioFab],
                ['FIM FAB.',        no.etiqueta.fimFab],
                ['PRAZO ESTOCAGEM', no.etiqueta.prazoEstoque],
                ['RECIPIENTES',     no.etiqueta.nRecipientes],
              ]}
              barcodeValue={`${no.etiqueta.codigo}-${no.etiqueta.loteGranel.replace('/','-')}`}
              barcodeFormat="Code 128"
            />
          </div>
        </div>
      );

    case 'lims-granel':
    case 'lims-pa':
      return (
        <div style={{ marginTop: 12 }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 12, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
            <Tag label="Análise nº" valor={no.analise.numero} />
            <Tag label="Amostra" valor={no.analise.amostra} />
            <Tag label="Data" valor={no.analise.data} />
            <Tag label="Analista" valor={no.analise.analista} />
            <Tag label="Parecer" valor={no.analise.parecer} cor="var(--ok)" />
          </div>
          <table className="tbl">
            <thead><tr><th>Ensaio</th><th>Especificação</th><th>Resultado</th><th>Status</th></tr></thead>
            <tbody>
              {no.ensaios.map((e, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600 }}>{e.ensaio}</td>
                  <td className="mono" style={{ color: 'var(--text2)' }}>{e.esp}</td>
                  <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{e.resultado}</td>
                  <td><span className="bdg bdg-ok" style={{ fontSize: 10 }}>{e.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          {no.memorias && no.memorias.length > 0 && (
            <div style={{ marginTop: 14 }}>
              <div className="card-title" style={{ marginBottom: 8 }}>Memória de Análise</div>
              {no.memorias.map((m, i) => (
                <div key={i} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, padding: 10, marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--verde-esc)', marginBottom: 4 }}>{m.ensaio} · {m.equipamento}</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)', fontFamily: 'var(--font-m)', marginBottom: 4 }}>Nº série: {m.serie}</div>
                  <div style={{ fontSize: 11, color: 'var(--text2)', fontFamily: 'var(--font-m)' }}>{m.detalhes}</div>
                  <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>Assinatura: {m.assinatura}</div>
                </div>
              ))}
            </div>
          )}

          {/* Boletim Microbiologico (LIMS) */}
          {no.microbiologico && (
            <div style={{ marginTop: 14 }}>
              <div className="card-title" style={{ marginBottom: 8 }}>
                Boletim Microbiológico · LIMS Nº {no.microbiologico.numero}
              </div>
              <table className="tbl">
                <thead><tr><th>Análise</th><th>Especificação</th><th>Resultado</th><th>Status</th></tr></thead>
                <tbody>
                  {no.microbiologico.ensaios.map((e, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{e.ensaio}</td>
                      <td className="mono" style={{ color: 'var(--text2)' }}>{e.esp}</td>
                      <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{e.resultado}</td>
                      <td><span className="bdg bdg-ok" style={{ fontSize: 10 }}>{e.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );

    case 'cama-indiana':
      return (
        <div style={{ marginTop: 12 }}>
          <div className="card-title" style={{ marginBottom: 8 }}>Liberação de Linha (POP-SAB-0021/02)</div>
          <table className="tbl" style={{ marginBottom: 14 }}>
            <thead><tr><th>#</th><th>Verificação</th><th>Resposta</th><th>Operador</th></tr></thead>
            <tbody>
              {no.liberacaoLinha.map((l, i) => (
                <tr key={i}>
                  <td className="mono" style={{ color: 'var(--text3)' }}>{i + 1}</td>
                  <td>{l.item}</td>
                  <td><span className={`bdg ${l.resp === 'Sim' ? 'bdg-ok' : 'bdg-per'}`} style={{ fontSize: 10 }}>{l.resp}</span></td>
                  <td>{l.operador}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="card-title" style={{ marginBottom: 8 }}>Controle de Giros</div>
          <DadosLista dados={[
            ['Início', no.giros.inicio],
            ['Término', no.giros.fim],
            ['Total de Giros', no.giros.total],
            ['Realizado por', no.giros.operador],
            ['Sala', no.giros.sala],
            ['Observação', no.giros.obs],
            ['Aprovação', no.giros.aprovador],
          ]} />
        </div>
      );

    case 'embalagem-ean':
    case 'embalagem-dun':
      return (
        <div style={{ marginTop: 12 }}>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 10 }}>
            <Tag label="OF" valor={no.info.of} />
            <Tag label="Linha" valor={no.info.linha} />
            <Tag label="Módulo" valor={no.info.modulo} />
            <Tag label="Início" valor={no.info.inicio} />
            <Tag label="Fim" valor={no.info.fim} />
          </div>
          <div className="card-title" style={{ marginBottom: 8 }}>Apontamento de Consumo</div>
          <table className="tbl" style={{ marginBottom: 12 }}>
            <thead>
              <tr><th>Código</th><th>Descrição</th><th>Exigido</th><th>Entregue</th><th>Devolvido</th><th>Perdido</th><th>Utilizado</th></tr>
            </thead>
            <tbody>
              {no.consumo.map((c, i) => (
                <tr key={i}>
                  <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{c.cod}</td>
                  <td>{c.desc}</td>
                  <td className="mono">{c.exigido}</td>
                  <td className="mono">{c.entregue}</td>
                  <td className="mono" style={{ color: 'var(--text3)' }}>{c.devolvido}</td>
                  <td className="mono" style={{ color: 'var(--alr)' }}>{c.perdido}</td>
                  <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{c.utilizado}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <DadosLista dados={[
            ['Quantidade Pedida', no.resumo.qtdPedida],
            ['Quantidade Produzida', no.resumo.qtdProduzida],
            ['Quantidade Utilizada', no.resumo.qtdUtilizada],
            ['Perdas', no.resumo.perdas],
            ['Rendimento de Embalagem', no.resumo.rend],
          ]} />

          {/* Documentacao Eletronica de Producao — Rendimento */}
          {no.documentacao && (
            <>
              <div className="card-title" style={{ marginTop: 14, marginBottom: 8 }}>Documentação Eletrônica de Produção — Rendimento</div>
              <table className="tbl">
                <thead>
                  <tr><th>Filial</th><th>Tipo</th><th>Lote</th><th>Produto</th><th>Quantidades</th><th>Rend.</th><th>Prod. Ant.</th><th>Lote Ant.</th><th>Justificativa</th><th>Usuário</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="mono">{no.documentacao.filial}</td>
                    <td>{no.documentacao.tipoOrdem}</td>
                    <td className="mono">{no.documentacao.lote}</td>
                    <td className="mono">{no.documentacao.produto}</td>
                    <td className="mono">{no.documentacao.quantidades}</td>
                    <td className="mono" style={{ color: 'var(--alr)', fontWeight: 700 }}>{no.documentacao.rendimento}</td>
                    <td className="mono">{no.documentacao.prodAnterior}</td>
                    <td className="mono">{no.documentacao.loteAnterior}</td>
                    <td style={{ fontSize: 11 }}>{no.documentacao.justificativa}</td>
                    <td className="mono" style={{ fontSize: 11 }}>{no.documentacao.usuario}</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {/* Resumo do Lote — Amostras Inicio/Meio/Fim */}
          {no.resumoAmostras && (
            <>
              <div className="card-title" style={{ marginTop: 14, marginBottom: 8 }}>Resumo do Lote — Amostras Início/Meio/Fim</div>
              <DadosLista dados={[
                ['Lote Granel', no.resumoAmostras.loteGranel],
                ['Início', no.resumoAmostras.inicio],
                ['Término', no.resumoAmostras.termino],
                ['Amostra Início', no.resumoAmostras.amInicio],
                ['Amostra Meio', no.resumoAmostras.amMeio],
                ['Amostra Fim', no.resumoAmostras.amFim],
                ['Processo', no.resumoAmostras.processo],
                ['Usuário', no.resumoAmostras.usuario],
              ]} />
            </>
          )}

          {no.liberacao && (
            <>
              <div className="card-title" style={{ marginTop: 14, marginBottom: 8 }}>Liberação de Linha</div>
              <table className="tbl">
                <thead><tr><th>Verificação</th><th>Resultado</th><th>Usuário</th></tr></thead>
                <tbody>
                  {no.liberacao.map((l, i) => (
                    <tr key={i}>
                      <td>{l.item}</td>
                      <td><span className="bdg bdg-ok" style={{ fontSize: 10 }}>{l.resp}</span></td>
                      <td className="mono" style={{ fontSize: 11 }}>{l.user}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {no.etiqueta && (
            <>
              <div className="card-title" style={{ marginTop: 14, marginBottom: 10 }}>
                Etiqueta Impressa · {no.etiqueta.format}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 380px)', gap: 12 }}>
                {no.id === 'embalagem-ean' ? (
                  <EtiquetaImpressa
                    tipo={no.etiqueta.tipo}
                    codigo={no.etiqueta.codigo}
                    cor="ouro"
                    fields={[
                      ['EAN-13',     no.etiqueta.ean13],
                      ['PRODUTO',    no.etiqueta.produto],
                      ['LOTE PA',    no.etiqueta.lote],
                      ['VALIDADE',   no.etiqueta.validade],
                      ['WO',         no.etiqueta.wo],
                      ['DATA IMPR.', no.etiqueta.data],
                    ]}
                    barcodeValue={no.etiqueta.ean13}
                    barcodeFormat={no.etiqueta.format}
                  />
                ) : (
                  <EtiquetaImpressa
                    tipo={no.etiqueta.tipo}
                    codigo={no.etiqueta.codigo}
                    cor="ouro"
                    fields={[
                      ['GTIN-14',    no.etiqueta.codigo],
                      ['GS1 / EAN-128', no.etiqueta.gs1],
                      ['PRODUTO',    no.etiqueta.produto],
                      ['LOTE PA',    no.etiqueta.lote],
                      ['VALIDADE',   no.etiqueta.validade],
                      ['UNIDADES',   no.etiqueta.unidades],
                      ['PALETE',     no.etiqueta.palete],
                      ['WO',         no.etiqueta.wo],
                      ['DATA IMPR.', no.etiqueta.data],
                    ]}
                    barcodeValue={no.etiqueta.codigo}
                    barcodeFormat={no.etiqueta.format}
                  />
                )}
              </div>
            </>
          )}
        </div>
      );

    case 'cq-ean':
      return (
        <div style={{ marginTop: 12 }}>
          {/* Liberacao de Linha (timeline) */}
          {no.liberacaoLinhaTL && (
            <>
              <div className="card-title" style={{ marginBottom: 10 }}>Liberação de Linha</div>
              <div style={{ borderLeft: '2px solid var(--ouro-claro)', paddingLeft: 18, marginBottom: 16, marginLeft: 4 }}>
                {no.liberacaoLinhaTL.map((ev, i) => (
                  <div key={i} style={{ position: 'relative', paddingBottom: i < no.liberacaoLinhaTL.length - 1 ? 14 : 0 }}>
                    <div aria-hidden style={{ position: 'absolute', left: -25, top: 3, width: 10, height: 10, borderRadius: '50%', background: ev.tipo === 'warn' ? 'var(--alr)' : 'var(--ok)' }} />
                    <div className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--inf)' }}>{ev.hora}</div>
                    <div style={{ fontSize: 12, color: 'var(--text)' }}>
                      <strong>{ev.titulo}.</strong> {ev.desc}{' '}
                      <span className={`bdg ${ev.tipo === 'warn' ? 'bdg-alr' : 'bdg-ok'}`} style={{ fontSize: 10 }}>{ev.resultado}</span>{' '}
                      · <span style={{ color: 'var(--text3)' }}>Por: {ev.por}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Controle de Peso — Amostras de Envase */}
          {no.controlePeso && (
            <>
              <div className="card-title" style={{ marginBottom: 8 }}>Controle de Peso — Amostras de Envase</div>
              <KpiRow kpis={no.controlePeso.kpis} />
              <table className="tbl" style={{ marginBottom: 14 }}>
                <thead>
                  <tr><th>#</th><th>Data</th><th>Hora</th><th>Tara Emb.</th><th>Densidade</th><th>Peso Decl.</th><th>Peso Real</th><th>Status</th><th>Usuário</th></tr>
                </thead>
                <tbody>
                  {no.controlePeso.amostras.map((a, i) => (
                    <tr key={i}>
                      <td className="mono" style={{ color: 'var(--text3)' }}>{a.n}</td>
                      <td className="mono" style={{ fontSize: 11 }}>{a.data}</td>
                      <td className="mono" style={{ fontSize: 11 }}>{a.hora}</td>
                      <td className="mono" style={{ fontSize: 11 }}>{a.tara}</td>
                      <td className="mono" style={{ fontSize: 11 }}>{a.densidade}</td>
                      <td className="mono" style={{ color: 'var(--text3)' }}>{a.decl}</td>
                      <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{a.real}</td>
                      <td><span className="bdg bdg-ok" style={{ fontSize: 10 }}>{a.status}</span></td>
                      <td className="mono" style={{ fontSize: 11 }}>{a.usuario}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* Controle de Processo — Caixa de Embarque + Refil */}
          {no.controleProcesso && (
            <>
              <div className="card-title" style={{ marginBottom: 8 }}>Controle de Processo — Caixa de Embarque + Refil</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 8, marginBottom: 14 }}>
                {no.controleProcesso.map((c, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderLeft: `4px solid ${c.ok ? 'var(--ok)' : 'var(--per)'}`,
                    padding: '7px 10px', borderRadius: 4, fontSize: 11,
                  }}>
                    <span>{c.ok ? '✅' : '⚠'}</span>
                    <div style={{ flex: 1, fontWeight: 600 }}>{c.n}. {c.item}</div>
                    <div className="mono" style={{ fontSize: 9, color: 'var(--text3)' }}>{c.por}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Anexos da Ordem de Embalagem */}
          {no.anexos && (
            <>
              <div className="card-title" style={{ marginBottom: 8 }}>Anexos da Ordem de Embalagem</div>
              <table className="tbl">
                <thead><tr><th>Anexo</th><th>Status</th><th>Anexado por</th><th>Data</th></tr></thead>
                <tbody>
                  {no.anexos.map((a, i) => (
                    <tr key={i}>
                      <td>{a.anexo}</td>
                      <td><span className="bdg bdg-ok" style={{ fontSize: 10 }}>{a.status}</span></td>
                      <td className="mono" style={{ fontSize: 11 }}>{a.por}</td>
                      <td className="mono" style={{ fontSize: 11 }}>{a.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      );

    case 'liberacao':
      return (
        <div style={{ marginTop: 12 }}>
          <div className="abox info" style={{ marginBottom: 14 }}>
            <span className="ai">🔒</span>
            <div>
              <strong>Assinaturas eletrônicas conforme CFR 21 Part 11.</strong> Cada assinatura é vinculada ao usuário, etapa e timestamp do MES. Hash de
              integridade e trilha de auditoria disponíveis no servidor para fins de inspeção regulatória.
            </div>
          </div>
          <table className="tbl">
            <thead><tr><th>Etapa</th><th>Usuário</th><th>Função</th><th>Data / Hora</th></tr></thead>
            <tbody>
              {no.assinaturas.map((a, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600 }}>{a.etapa}</td>
                  <td>{a.usuario}</td>
                  <td><span className="bdg bdg-inf" style={{ fontSize: 10 }}>{a.funcao}</span></td>
                  <td className="mono" style={{ fontSize: 11, color: 'var(--text2)' }}>{a.dataHora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'qa-reconciliacao':
      return (
        <div style={{ marginTop: 12 }}>
          {/* Multibatch — graneis que compoem o PA */}
          {no.multibatch && (
            <>
              <div className="card-title" style={{ marginBottom: 8 }}>Multibatch — Granéis que compõem o PA</div>
              <table className="tbl" style={{ marginBottom: 14 }}>
                <thead><tr><th>#</th><th>Lote Granel</th><th>WO Fab.</th><th>Peso</th><th>Status</th></tr></thead>
                <tbody>
                  {no.multibatch.map((m, i) => (
                    <tr key={i}>
                      <td className="mono" style={{ color: 'var(--text3)' }}>{m.n}</td>
                      <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{m.loteGranel}</td>
                      <td className="mono">{m.wo}</td>
                      <td className="mono" style={{ fontWeight: 700 }}>{m.peso}</td>
                      <td><span className="bdg bdg-ok" style={{ fontSize: 10 }}>{m.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* Amostras de Retencao */}
          {no.amostrasRetencao && (
            <>
              <div className="card-title" style={{ marginBottom: 8 }}>
                Amostras de Retenção{' '}
                <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text3)' }}>· ANVISA RDC 658/2022 · 1 ano após validade</span>
              </div>
              <table className="tbl" style={{ marginBottom: 14 }}>
                <thead><tr><th>#</th><th>Tipo</th><th>Caixa</th><th>Pallet</th><th>Posição</th><th>Qtd.</th><th>Observação</th></tr></thead>
                <tbody>
                  {no.amostrasRetencao.map((a, i) => (
                    <tr key={i}>
                      <td className="mono" style={{ color: 'var(--text3)' }}>{a.n}</td>
                      <td>{a.tipo}</td>
                      <td className="mono">{a.caixa}</td>
                      <td className="mono">{a.pallet}</td>
                      <td style={{ fontSize: 11 }}>{a.posicao}</td>
                      <td className="mono">{a.qtd}</td>
                      <td style={{ fontSize: 11, color: 'var(--text2)' }}>{a.obs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* Registros de Correcao */}
          {no.registrosCorrecao && (
            <>
              <div className="card-title" style={{ marginBottom: 8 }}>
                Registros de Correção{' '}
                <span className="bdg bdg-per" style={{ fontSize: 10 }}>{no.registrosCorrecao.length} em aberto</span>
              </div>
              <table className="tbl" style={{ marginBottom: 14 }}>
                <thead><tr><th>Nº</th><th>Classificação</th><th>Tipo</th><th>Severidade</th><th>Área</th><th>Título</th><th>Status</th><th>Aberto</th></tr></thead>
                <tbody>
                  {no.registrosCorrecao.map((r, i) => (
                    <tr key={i}>
                      <td className="mono" style={{ fontWeight: 700, color: 'var(--per)' }}>{r.numero}</td>
                      <td style={{ fontSize: 11 }}>{r.classificacao}</td>
                      <td style={{ fontSize: 11 }}>{r.tipo}</td>
                      <td><span className="bdg bdg-alr" style={{ fontSize: 10 }}>{r.severidade}</span></td>
                      <td style={{ fontSize: 11 }}>{r.area}</td>
                      <td style={{ fontSize: 11 }}>{r.titulo}</td>
                      <td><span className="bdg bdg-per" style={{ fontSize: 10 }}>{r.status}</span></td>
                      <td className="mono" style={{ fontSize: 11 }}>{r.aberto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {/* Checklist POP-GQV-0009 */}
          {no.checklistPOP && (
            <>
              <div className="card-title" style={{ marginBottom: 8 }}>
                Check List de Reconciliação · POP-GQV-0009/05 · Anexo 2{' '}
                <span className="bdg bdg-ok" style={{ fontSize: 10 }}>
                  {no.checklistPOP.filter((c) => c.ok).length}/{no.checklistPOP.length} marcados
                </span>
              </div>
              <table className="tbl">
                <thead><tr><th>#</th><th>Item documental</th><th>Status</th></tr></thead>
                <tbody>
                  {no.checklistPOP.map((c, i) => (
                    <tr key={i}>
                      <td className="mono" style={{ color: 'var(--text3)' }}>{c.n}</td>
                      <td>{c.item}</td>
                      <td><span className={`bdg ${c.ok ? 'bdg-ok' : 'bdg-per'}`} style={{ fontSize: 10 }}>{c.ok ? '✓ Concluído' : 'Pendente'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      );

    default:
      return <div style={{ padding: 12, color: 'var(--text3)' }}>—</div>;
  }
}

function TabelaItens({ dados, colunas }) {
  return (
    <table className="tbl" style={{ marginTop: 12 }}>
      <thead>
        <tr>{colunas.map((c) => <th key={c.k}>{c.label}</th>)}</tr>
      </thead>
      <tbody>
        {dados.map((row, i) => (
          <tr key={i}>
            {colunas.map((c) => (
              <td key={c.k} className={c.style?.fontFamily ? 'mono' : ''} style={c.style}>
                {row[c.k]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DadosLista({ dados }) {
  return (
    <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, padding: '8px 12px' }}>
      {dados.map(([label, valor], i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 12,
            padding: '5px 0',
            borderBottom: i < dados.length - 1 ? '1px dashed var(--border)' : 'none',
            fontSize: 12,
          }}
        >
          <span style={{ color: 'var(--text3)', textTransform: 'uppercase', fontSize: 9, fontWeight: 900, letterSpacing: '.1em', alignSelf: 'center' }}>
            {label}
          </span>
          <span style={{ fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--verde-esc)', textAlign: 'right' }}>{valor}</span>
        </div>
      ))}
    </div>
  );
}

function Tag({ label, valor, cor }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 100 }}>
      <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text3)' }}>{label}</span>
      <span style={{ fontFamily: 'var(--font-m)', fontSize: 13, fontWeight: 700, color: cor || 'var(--verde-esc)' }}>{valor}</span>
    </div>
  );
}
