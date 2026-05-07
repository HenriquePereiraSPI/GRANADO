import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DOSSIES, findDossie, listarDossies } from '../data/dossie-wo-784426.js';
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
  fabricacao:    'fabricacao',
  embalagem:     'embalagem-ean',
  fisicoQuimico: 'lims-granel',
  microbiologia: 'lims-pa',
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
  const [DOSSIE, setDossie] = useState(DOSSIES[0]);

  // Le ?area=... da URL (vem da tela de Reconciliacao de Qualidade) e
  // garante que o no correspondente esteja expandido inicialmente.
  const noAreaInicial = useMemo(() => {
    const a = searchParams.get('area');
    return a ? AREA_PARA_NO[a] : null;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [expandidos, setExpandidos] = useState(() => {
    const base = new Set(['mp', 'fabricacao', 'granel']);
    if (noAreaInicial) base.add(noAreaInicial);
    return base;
  });

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
  const expandirTodos = () => setExpandidos(new Set(DOSSIE.cadeia.map((n) => n.id)));
  const colapsarTodos = () => setExpandidos(new Set());

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* ── Cabeçalho da página ─────────────────────────────── */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">EBR · Dossiê Eletrônico de Produção · WO {DOSSIE.wo}</div>
          <div className="ph-title">Genealogia de Lote — {DOSSIE.lote}</div>
        </div>
        <div className="ph-actions">
          <button className="btn btn-sm btn-ghost" onClick={expandirTodos}>⊕ Expandir tudo</button>
          <button className="btn btn-sm btn-ghost" onClick={colapsarTodos}>⊖ Colapsar tudo</button>
          <button className="btn btn-sm btn-ghost" onClick={() => alert('🖨 Imprimindo dossiê em PDF...')}>🖨 Imprimir</button>
          <button className="btn btn-sm btn-v" onClick={() => alert('⬇ Baixando PDF assinado eletronicamente...')}>⬇ Baixar PDF</button>
        </div>
      </div>

      {/* ── Filtro de busca por lote / WO / código ─────────── */}
      <FiltroDossie atual={DOSSIE} onSelecionar={setDossie} />


      {/* ── Hero card com resumo da WO ──────────────────────── */}
      <div className="card cv mb14" style={{ padding: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 4 }}>
              {DOSSIE.codigoProduto} · {DOSSIE.codigoGranel} · Sala {DOSSIE.sala}
            </div>
            <div style={{ fontFamily: 'var(--font-d)', fontSize: 28, fontWeight: 700, color: 'var(--verde-esc)', lineHeight: 1.1, marginBottom: 6 }}>
              {DOSSIE.produto}
            </div>
            <div style={{ fontFamily: 'var(--font-m)', fontSize: 12, color: 'var(--text2)' }}>
              <strong>{DOSSIE.granel}</strong> · Lote granel <strong style={{ color: 'var(--verde)' }}>{DOSSIE.lote}</strong> · Lote PA{' '}
              <strong style={{ color: 'var(--verde)' }}>{DOSSIE.lotePA}</strong>
            </div>
            <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 8, lineHeight: 1.6 }}>
              Início fabricação: <strong style={{ color: 'var(--text)' }}>{DOSSIE.inicio}</strong> · Fim:{' '}
              <strong style={{ color: 'var(--text)' }}>{DOSSIE.fim}</strong> · Validade:{' '}
              <strong style={{ color: 'var(--text)' }}>{DOSSIE.validade}</strong>
              <br />
              Líder: <strong>{DOSSIE.lider.nome}</strong> (chapa {DOSSIE.lider.chapa}) · CQ liberou:{' '}
              <strong>{DOSSIE.cqLiberacao.nome}</strong> em {DOSSIE.cqLiberacao.data}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="bdg bdg-ok" style={{ fontSize: 14, padding: '6px 16px', display: 'inline-block', marginBottom: 8 }}>
              ✓ APROVADO
            </span>
            <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text3)' }}>
              Documento eletrônico
            </div>
            <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>
              Emitido em <strong style={{ color: 'var(--text2)' }}>{DOSSIE.emitido}</strong>
            </div>
            {DOSSIE.conformidades.map((c) => (
              <div key={c} style={{ fontSize: 9, color: 'var(--text3)', fontFamily: 'var(--font-m)', marginTop: 2 }}>
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
            marginTop: 16,
            paddingTop: 14,
            borderTop: '1px solid var(--border)',
          }}
        >
          <Kpi label="Tamanho do Batch" valor={DOSSIE.batchSize} cor="var(--verde)" />
          <Kpi label="Rendimento Granel" valor="100,10%" cor="var(--ok)" sub="dentro do limite (97–103%)" />
          <Kpi label="MPs Consumidas" valor="7" cor="var(--inf)" sub="3 pesagens + 4 mid-process" />
          <Kpi label="PA Produzido" valor="48.531 un" cor="var(--ouro)" sub="cartuchos 90g · rend. 93,23%" />
        </div>
      </div>

      {/* ── Cadeia genealógica ──────────────────────────────── */}
      <div style={{ position: 'relative' }}>
        {/* linha vertical de fundo conectando os nós */}
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

        {DOSSIE.cadeia.map((no, idx) => (
          <NoCadeia
            key={no.id}
            no={no}
            ordem={idx + 1}
            total={DOSSIE.cadeia.length}
            expandido={expandidos.has(no.id)}
            onToggle={() => toggle(no.id)}
            dossie={DOSSIE}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Componentes auxiliares
───────────────────────────────────────────────────────────── */

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
      <div style={{ fontFamily: 'var(--font-d)', fontSize: 26, fontWeight: 700, color: cor, lineHeight: 1 }}>{valor}</div>
      {sub && <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>{sub}</div>}
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
        { k: 'cod',   label: 'Código',    style: { fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--verde)' } },
        { k: 'desc',  label: 'Descrição' },
        { k: 'lote',  label: 'Lote',      style: { fontFamily: 'var(--font-m)', color: 'var(--text2)' } },
        { k: 'qtd',   label: 'Qtd.',      style: { fontFamily: 'var(--font-m)', textAlign: 'right' } },
      ]} />;

    case 'pesagem':
      return (
        <div style={{ marginTop: 12 }}>
          <TabelaItens dados={no.itens} colunas={[
            { k: 'cod',      label: 'Código',     style: { fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--verde)' } },
            { k: 'desc',     label: 'Descrição' },
            { k: 'qtd',      label: 'Qtd.',       style: { fontFamily: 'var(--font-m)' } },
            { k: 'balanca',  label: 'Balança',    style: { fontFamily: 'var(--font-m)', color: 'var(--text2)' } },
            { k: 'operador', label: 'Operador' },
          ]} />
          <div className="card-title" style={{ marginTop: 14, marginBottom: 10 }}>Etiquetas Filhas Impressas (Zebra)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {no.itens.map((mp, i) => (
              <EtiquetaImpressa
                key={i}
                tipo="ETIQUETA FILHA · MP"
                codigo={mp.etqCodigo}
                cor="verde"
                fields={[
                  ['CÓDIGO MP',    mp.cod],
                  ['DESCRIÇÃO',    mp.desc],
                  ['LOTE FORN.',   mp.etqLote],
                  ['QUANTIDADE',   mp.qtd],
                  ['BALANÇA',      mp.balanca],
                  ['OPERADOR',     mp.operador],
                  ['DATA / HORA',  mp.etqHora],
                  ['WO',           dossie.wo],
                ]}
                barcodeValue={mp.barcode}
                barcodeFormat="Code 128"
              />
            ))}
          </div>
        </div>
      );

    case 'fabricacao':
      return (
        <div style={{ marginTop: 12 }}>
          {no.etapas.map((e, i) => (
            <div key={i} style={{ marginBottom: 10, padding: '10px 12px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--verde-esc)' }}>
                  <span style={{ color: 'var(--ouro)', fontFamily: 'var(--font-m)', fontSize: 11, marginRight: 8 }}>{e.codigo}</span>
                  {e.nome}
                </div>
                <span className={`bdg bdg-ok`} style={{ fontSize: 10 }}>✓ {e.status}</span>
              </div>
              <div style={{ fontSize: 10, color: 'var(--text3)', fontFamily: 'var(--font-m)', marginBottom: 8 }}>
                {e.inicio} → {e.fim} · {e.operador}
              </div>
              <table className="tbl" style={{ fontSize: 11 }}>
                <thead>
                  <tr><th>Parâmetro</th><th>UM</th><th>Previsto</th><th>Realizado</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {e.params.map((p, j) => (
                    <tr key={j}>
                      <td>{p.p}</td>
                      <td className="mono">{p.um}</td>
                      <td className="mono" style={{ color: 'var(--text3)' }}>{p.prev}</td>
                      <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{p.real}</td>
                      <td><span className="bdg bdg-ok" style={{ fontSize: 9 }}>OK</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      );

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
              ['Status', no.rendimento.status],
              ['Rendimento de Embalagem', no.rendimento.rendEmb],
              ['Último Produto Fabricado', `${no.rendimento.ultimoProduto} · ${no.rendimento.ultimoLote}`],
            ]} />
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
          <div className="card-title" style={{ marginBottom: 8 }}>Liberação de Linha</div>
          <table className="tbl" style={{ marginBottom: 14 }}>
            <thead><tr><th>Hora</th><th>Verificação</th><th>Resultado</th><th>Usuário</th></tr></thead>
            <tbody>
              {no.liberacao.map((l, i) => (
                <tr key={i}>
                  <td className="mono" style={{ fontSize: 11 }}>{l.hora}</td>
                  <td>{l.item}</td>
                  <td><span className="bdg bdg-ok" style={{ fontSize: 10 }}>{l.resultado}</span></td>
                  <td className="mono" style={{ fontSize: 11 }}>{l.user}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="card-title" style={{ marginBottom: 8 }}>Controle de Peso (Checkweigher)</div>
          <table className="tbl" style={{ marginBottom: 14 }}>
            <thead><tr><th>Hora</th><th>Amostra</th><th>Peso (g)</th><th>Declarado (g)</th><th>Δ</th><th>Usuário</th></tr></thead>
            <tbody>
              {no.pesos.map((p, i) => {
                const delta = (p.peso - p.declarado).toFixed(2);
                return (
                  <tr key={i}>
                    <td className="mono" style={{ fontSize: 11 }}>{p.hora}</td>
                    <td className="mono">{p.amostra}</td>
                    <td className="mono" style={{ fontWeight: 700, color: 'var(--verde)' }}>{p.peso.toFixed(2)}</td>
                    <td className="mono" style={{ color: 'var(--text3)' }}>{p.declarado}</td>
                    <td className="mono" style={{ color: 'var(--ouro)' }}>+{delta}</td>
                    <td className="mono" style={{ fontSize: 11 }}>{p.user}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ fontSize: 11, color: 'var(--text2)', marginBottom: 14 }}>
            Média: <strong style={{ color: 'var(--verde)' }}>101,60 g</strong> · Total amostras:{' '}
            <strong>{no.pesos.length}</strong>
          </div>

          <div className="card-title" style={{ marginBottom: 8 }}>Inspeções de Processo (a cada 60 min)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 8, marginBottom: 14 }}>
            {no.inspecoes.map((cat, i) => (
              <div key={i} style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, padding: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--verde)', marginBottom: 6 }}>{cat.categoria}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: 11, lineHeight: 1.7, color: 'var(--text2)' }}>
                  {cat.itens.map((it, j) => (
                    <li key={j}>✓ {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card-title" style={{ marginBottom: 8 }}>Justificativas de Parada</div>
          <table className="tbl">
            <thead><tr><th>Hora</th><th>Código</th><th>Justificativa</th><th>Usuário</th></tr></thead>
            <tbody>
              {no.paradas.map((p, i) => (
                <tr key={i}>
                  <td className="mono" style={{ fontSize: 11 }}>{p.hora}</td>
                  <td className="mono">{p.codigo}</td>
                  <td>{p.motivo}</td>
                  <td className="mono" style={{ fontSize: 11 }}>{p.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

/* ─────────────────────────────────────────────────────────────
   Filtro de busca por lote do granel / WO / codigo / produto
───────────────────────────────────────────────────────────── */

function FiltroDossie({ atual, onSelecionar }) {
  const [termo, setTermo] = useState('');
  const [erro, setErro] = useState(null);
  const [showSug, setShowSug] = useState(false);

  const lista = useMemo(() => listarDossies(), []);
  const sugestoes = useMemo(() => {
    if (!termo.trim()) return lista;
    const t = termo.trim().toLowerCase();
    return lista.filter(
      (d) =>
        d.lote.toLowerCase().includes(t) ||
        d.wo.toLowerCase().includes(t) ||
        d.lotePA.toLowerCase().includes(t) ||
        d.codigo.toLowerCase().includes(t) ||
        d.produto.toLowerCase().includes(t),
    );
  }, [termo, lista]);

  const buscar = (valor) => {
    const v = (valor != null ? valor : termo).trim();
    if (!v) {
      setErro('Informe um lote, WO ou código de produto.');
      return;
    }
    const d = findDossie(v);
    if (!d) {
      setErro(`Nenhum dossiê encontrado para "${v}". Tente um lote (ex.: 2551/2026), WO (ex.: 784426) ou código (ex.: S0815B).`);
      return;
    }
    setErro(null);
    setShowSug(false);
    setTermo('');
    onSelecionar(d);
  };

  return (
    <div className="card co mb14" style={{ padding: 14, position: 'relative', borderTop: '3px solid var(--ouro-claro)' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 280, position: 'relative' }}>
          <label className="lbl" style={{ display: 'block', marginBottom: 4 }}>
            Buscar Dossiê — <span style={{ fontSize: 9, fontWeight: 600, color: 'var(--text3)' }}>por Lote do Granel · WO · Lote PA · Código · Nome do Produto</span>
          </label>
          <input
            className="inp"
            value={termo}
            onChange={(e) => { setTermo(e.target.value); setErro(null); setShowSug(true); }}
            onFocus={() => setShowSug(true)}
            onBlur={() => setTimeout(() => setShowSug(false), 200)}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); buscar(); } }}
            placeholder="Ex.: 2551/2026  ·  784426  ·  S0815B  ·  Limão Siciliano"
            style={{ width: '100%' }}
          />
          {showSug && sugestoes.length > 0 && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 0,
                right: 0,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                boxShadow: 'var(--sh2)',
                zIndex: 30,
                maxHeight: 280,
                overflowY: 'auto',
              }}
            >
              {sugestoes.map((s) => (
                <button
                  key={s.wo}
                  type="button"
                  onMouseDown={(e) => { e.preventDefault(); buscar(s.lote); }}
                  style={{
                    width: '100%',
                    background: atual.wo === s.wo ? 'var(--verde-dim)' : 'transparent',
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    padding: '10px 12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    font: 'inherit',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 12,
                    alignItems: 'baseline',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = atual.wo === s.wo ? 'var(--verde-dim)' : 'transparent')}
                >
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--verde-esc)' }}>
                      {s.produto}
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--text3)', fontFamily: 'var(--font-m)', marginTop: 2 }}>
                      <strong style={{ color: 'var(--ouro)' }}>WO {s.wo}</strong> · Granel{' '}
                      <strong style={{ color: 'var(--verde)' }}>{s.lote}</strong> · PA{' '}
                      <strong style={{ color: 'var(--verde)' }}>{s.lotePA}</strong> · Cód.{' '}
                      <strong>{s.codigo}</strong>
                    </div>
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text3)', whiteSpace: 'nowrap', alignSelf: 'center' }}>
                    {s.inicio.split(' ')[0]}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="btn btn-md btn-v" onClick={() => buscar()} style={{ minWidth: 110 }}>🔍 Buscar</button>
        <button
          className="btn btn-md btn-ghost"
          onClick={() => { setTermo(''); setErro(null); setShowSug(false); onSelecionar(DOSSIES[0]); }}
        >
          Limpar
        </button>
      </div>

      {erro && (
        <div className="abox err" style={{ marginTop: 10, marginBottom: 0 }}>
          <span className="ai">⚠</span>
          <div>{erro}</div>
        </div>
      )}

      {/* Resumo do dossiê atual */}
      <div
        style={{
          marginTop: 10,
          padding: '8px 12px',
          background: 'var(--ouro-dim)',
          border: '1px dashed var(--ouro-claro)',
          borderRadius: 6,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 12,
          flexWrap: 'wrap',
          fontSize: 11,
          color: 'var(--text2)',
        }}
      >
        <div>
          <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ouro)', marginRight: 8 }}>
            Exibindo:
          </span>
          <strong style={{ color: 'var(--verde-esc)' }}>{atual.granel}</strong> · WO{' '}
          <strong style={{ color: 'var(--ouro)', fontFamily: 'var(--font-m)' }}>{atual.wo}</strong> · Lote granel{' '}
          <strong style={{ color: 'var(--verde)', fontFamily: 'var(--font-m)' }}>{atual.lote}</strong>
        </div>
        <div style={{ color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>
          {DOSSIES.length} dossiês disponíveis nesta base
        </div>
      </div>
    </div>
  );
}

