import { useState } from 'react';

/**
 * Tela: Qualidade > Reconciliacao Tecnica e Liberacao de Lote
 * --------------------------------------------------------------
 * Adaptado do mockup original (MenuQualidadeReconciliacao.jsx em
 * Tailwind) para a stack do projeto (CSS tokens Granado/Phebo,
 * classes .card / .btn / .bdg / .inp).
 *
 * Fluxo:
 *   1. CQ informa Nº do Lote de Embalagem.
 *   2. Sistema busca dados (mock — substituir por API JDE/Apriso).
 *   3. CQ revisa Fabricacao / Embalagem / Fisico-Quimico /
 *      Microbiologia, registra status (Aprovado / Reprovado /
 *      Pendente), responsavel e observacoes.
 *   4. Quando todas as 4 areas estao APROVADO, libera 'Liberar para
 *      CED'. Se alguma REPROVADO, libera 'Reprovar Lote'.
 */

// ── Mock de lotes (substituir por chamada API JDE/Apriso) ─────
const BASE_MOCK = {
  ABC123: {
    numeroReconciliacao: '137234',
    filial: '0015 - Casa Granado',
    produtoAcabado: 'PA-08812 — Sabonete Glicerina Tradicional 90g',
    granel: 'GR-552 — Granel Sabonete Glicerina',
    loteFabricacao: 'FAB-2026-0418',
    dataFabricacao: '2026-04-18',
    dataValidade: '2029-04-18',
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao: {
        rendimentoTeorico: '10.000 kg', rendimentoReal: '9.870 kg', perda: '1,30%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      embalagem: {
        unidadesPlanejadas: '9.870 un', unidadesProduzidas: '9.842 un', perda: '0,28%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      fisicoQuimico: {
        ph: '7,2', umidade: '8,4%', densidade: '1,05 g/cm³',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      microbiologia: {
        contagemTotal: '< 10 UFC/g', bolorLevedura: '< 10 UFC/g', patogenos: 'Ausente',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
    },
  },
  G2026091: {
    numeroReconciliacao: '137240',
    filial: '0015 - Casa Granado',
    produtoAcabado: 'PA-08815 — Loção Hidratante Rosa 200ml',
    granel: 'GR-589 — Granel Loção Hidratante Rosa',
    loteFabricacao: 'FAB-2026-0416',
    dataFabricacao: '2026-04-16',
    dataValidade: '2028-04-16',
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao: {
        rendimentoTeorico: '600 kg', rendimentoReal: '598,2 kg', perda: '0,30%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      embalagem: {
        unidadesPlanejadas: '4.820 un', unidadesProduzidas: '4.820 un', perda: '0,00%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      fisicoQuimico: {
        ph: '6,8', umidade: '32%', densidade: '0,98 g/cm³',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      microbiologia: {
        contagemTotal: '< 10 UFC/g', bolorLevedura: '< 10 UFC/g', patogenos: 'Ausente',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
    },
  },
  XYZ789: {
    numeroReconciliacao: '137199',
    filial: '0015 - Casa Granado',
    produtoAcabado: 'PA-08920 — Talco Bebê Phebo 200g',
    granel: 'GR-401 — Granel Talco Bebê',
    loteFabricacao: 'FAB-2026-0405',
    dataFabricacao: '2026-04-05',
    dataValidade: '2029-04-05',
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao: {
        rendimentoTeorico: '5.000 kg', rendimentoReal: '4.870 kg', perda: '2,60%',
        responsavel: 'M. Rocha (108)', data: '2026-04-06', status: 'PENDENTE',
        observacoes: 'Perda acima do limite (1,5%) — aguardando análise de causa raiz.',
      },
      embalagem: {
        unidadesPlanejadas: '24.350 un', unidadesProduzidas: '24.310 un', perda: '0,16%',
        responsavel: 'F. Costa (212)', data: '2026-04-07', status: 'APROVADO',
        observacoes: '',
      },
      fisicoQuimico: {
        ph: '6,0', umidade: '0,5%', densidade: '0,68 g/cm³',
        responsavel: 'Rcafé (LIMS)', data: '2026-04-08', status: 'APROVADO',
        observacoes: 'Análise 118.502 — todos os parâmetros conforme.',
      },
      microbiologia: {
        contagemTotal: '< 10 UFC/g', bolorLevedura: '< 10 UFC/g', patogenos: 'Ausente',
        responsavel: 'Jessica Costa', data: '2026-04-08', status: 'APROVADO',
        observacoes: '',
      },
    },
  },
};

const STATUS_COLOR = {
  APROVADO:  { bg: 'var(--ok-p)',  fg: 'var(--ok)',   bd: 'var(--ok-b)'  },
  REPROVADO: { bg: 'var(--per-p)', fg: 'var(--per)',  bd: 'var(--per-b)' },
  PENDENTE:  { bg: 'var(--alr-p)', fg: 'var(--alr)',  bd: 'var(--alr-b)' },
};

const AREA_COR = {
  fabricacao:    { fg: '#FFFFFF', bg: 'var(--inf)',       label: 'Fabricação',     icon: '🧪' },
  embalagem:     { fg: '#FFFFFF', bg: 'var(--ouro)',      label: 'Embalagem',      icon: '📦' },
  fisicoQuimico: { fg: '#FFFFFF', bg: 'var(--verde-meio)',label: 'Físico-Químico', icon: '⚗️' },
  microbiologia: { fg: '#FFFFFF', bg: '#7A4A9A',          label: 'Microbiologia',  icon: '🔬' },
};

/* ─────────────────────────────────────────────────────────────
   Helpers de UI
───────────────────────────────────────────────────────────── */

function StatusPill({ status }) {
  const c = STATUS_COLOR[status] || STATUS_COLOR.PENDENTE;
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        background: c.bg,
        color: c.fg,
        border: `1px solid ${c.bd}`,
        borderRadius: 12,
      }}
    >
      {status}
    </span>
  );
}

function Campo({ label, value, obrigatorio }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <label style={{
        fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase',
        color: 'var(--text3)', marginBottom: 4,
      }}>
        {label} {obrigatorio && <span style={{ color: 'var(--per)' }}>*</span>}
      </label>
      <div
        style={{
          background: 'var(--surface2)',
          border: '1px solid var(--border)',
          borderRadius: 4,
          padding: '6px 10px',
          fontSize: 12,
          color: 'var(--text)',
          minHeight: 30,
          fontFamily: 'var(--font-m)',
          fontWeight: 600,
        }}
      >
        {value || <span style={{ color: 'var(--text3)' }}>—</span>}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card de Área (Fabricação / Embalagem / FQ / Micro)
───────────────────────────────────────────────────────────── */

function CardArea({ chave, dados, indicadores, onUpdate }) {
  const cor = AREA_COR[chave];
  const handleChange = (campo, valor) => onUpdate({ ...dados, [campo]: valor });

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 7,
      boxShadow: 'var(--sh)',
      overflow: 'hidden',
    }}>
      {/* Header colorido */}
      <div style={{
        background: cor.bg, color: cor.fg,
        padding: '10px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: '.08em', textTransform: 'uppercase' }}>
          {cor.icon} {cor.label}
        </div>
        <StatusPill status={dados.status} />
      </div>

      {/* Body */}
      <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Indicadores */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {indicadores.map((ind) => (
            <Campo key={ind.label} label={ind.label} value={ind.value} />
          ))}
        </div>

        {/* Responsavel + Data */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="lbl">Responsável CQ <span style={{ color: 'var(--per)' }}>*</span></label>
            <input
              className="inp"
              type="text"
              value={dados.responsavel}
              onChange={(e) => handleChange('responsavel', e.target.value)}
              placeholder="Matrícula ou nome"
              style={{ fontSize: 12, padding: '7px 10px' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="lbl">Data da Análise</label>
            <input
              className="inp"
              type="date"
              value={dados.data || ''}
              onChange={(e) => handleChange('data', e.target.value)}
              style={{ fontSize: 12, padding: '7px 10px' }}
            />
          </div>
        </div>

        {/* Observacoes */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Observações</label>
          <textarea
            className="txta"
            value={dados.observacoes}
            onChange={(e) => handleChange('observacoes', e.target.value)}
            rows={2}
            placeholder="Registrar não conformidades, desvios ou comentários..."
            style={{ fontSize: 12, padding: '7px 10px', resize: 'vertical' }}
          />
        </div>

        {/* Botoes Reprovar / Pendente / Aprovar */}
        <div style={{
          display: 'flex', gap: 8, justifyContent: 'flex-end',
          paddingTop: 10, borderTop: '1px solid var(--border)',
        }}>
          <button
            type="button"
            onClick={() => handleChange('status', 'REPROVADO')}
            className="btn btn-sm btn-ghost"
            style={{ borderColor: 'var(--per)', color: 'var(--per)', fontSize: 10 }}
          >
            ✗ Reprovar
          </button>
          <button
            type="button"
            onClick={() => handleChange('status', 'PENDENTE')}
            className="btn btn-sm btn-ghost"
            style={{ borderColor: 'var(--alr)', color: 'var(--alr)', fontSize: 10 }}
          >
            ⏳ Pendente
          </button>
          <button
            type="button"
            onClick={() => handleChange('status', 'APROVADO')}
            className="btn btn-sm btn-v"
            style={{ fontSize: 10 }}
          >
            ✓ Aprovar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tela principal
───────────────────────────────────────────────────────────── */

export default function QualidadeReconciliacaoScreen() {
  const [numeroLote, setNumeroLote] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [lote, setLote] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const buscarLote = () => {
    setErro('');
    setMensagem('');
    if (!numeroLote.trim()) {
      setErro('Informe o Nº do Lote de Embalagem para iniciar a análise.');
      return;
    }
    setCarregando(true);
    setTimeout(() => {
      const key = numeroLote.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
      const dados = BASE_MOCK[key];
      if (!dados) {
        setErro(`Lote "${numeroLote}" não encontrado ou ainda não finalizou a etapa de embalagem.`);
        setLote(null);
      } else {
        setLote(JSON.parse(JSON.stringify(dados)));
      }
      setCarregando(false);
    }, 400);
  };

  const atualizarArea = (chave, novoValor) => {
    setLote((prev) => ({ ...prev, areas: { ...prev.areas, [chave]: novoValor } }));
  };

  const todasAprovadas = lote && Object.values(lote.areas).every((a) => a.status === 'APROVADO');
  const algumaReprovada = lote && Object.values(lote.areas).some((a) => a.status === 'REPROVADO');

  const liberarParaCED = () => {
    setMensagem(`✓ Lote ${numeroLote.toUpperCase()} liberado para o CED em ${new Date().toLocaleString('pt-BR')}. Status atualizado para "L — Liberado".`);
  };
  const reprovarLote = () => {
    setMensagem(`✗ Lote ${numeroLote.toUpperCase()} REPROVADO em ${new Date().toLocaleString('pt-BR')}. Status atualizado para "R — Reprovado". Encaminhar para destruição.`);
  };

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Qualidade · CQ · ERU 6.1.x — Reconciliação Técnica</div>
          <div className="ph-title">Reconciliação Técnica & Liberação de Lote</div>
        </div>
        <div style={{ textAlign: 'right', fontFamily: 'var(--font-m)', fontSize: 10, color: 'var(--text2)', lineHeight: 1.6 }}>
          Tela [JPD920-CQ]<br />
          <span style={{ color: 'var(--verde)', fontWeight: 700 }}>Bárbara C. O. Peixoto</span>
        </div>
      </div>

      {/* Bloco de busca */}
      <div className="card cv mb14" style={{ padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 280, maxWidth: 460 }}>
            <label className="lbl" style={{ fontWeight: 700 }}>
              Nº Lote de Embalagem <span style={{ color: 'var(--per)' }}>*</span>
            </label>
            <input
              className="inp"
              type="text"
              value={numeroLote}
              onChange={(e) => setNumeroLote(e.target.value)}
              placeholder="Ex.: ABC123, G2026091, XYZ789"
              onKeyDown={(e) => e.key === 'Enter' && buscarLote()}
              style={{ fontFamily: 'var(--font-m)', fontSize: 14 }}
            />
            <span style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>
              A presença do lote indica que Fabricação e Embalagem foram concluídas.
            </span>
          </div>
          <button
            className="btn btn-md btn-v"
            onClick={buscarLote}
            disabled={carregando}
            style={{ minWidth: 130 }}
          >
            {carregando ? 'Buscando…' : '🔍 Buscar Lote'}
          </button>
          <button
            className="btn btn-md btn-ghost"
            onClick={() => { setNumeroLote(''); setLote(null); setErro(''); setMensagem(''); }}
          >
            Limpar
          </button>
        </div>

        {erro && (
          <div className="abox err" style={{ marginTop: 12 }}>
            <span className="ai">⚠</span>
            <div>{erro}</div>
          </div>
        )}

        {mensagem && (
          <div
            className={`abox ${mensagem.startsWith('✓') ? 'ok' : 'err'}`}
            style={{ marginTop: 12 }}
          >
            <span className="ai">{mensagem.startsWith('✓') ? '✅' : '⛔'}</span>
            <div>{mensagem}</div>
          </div>
        )}
      </div>

      {/* Lote carregado */}
      {lote && (
        <>
          {/* Identificação */}
          <div className="card mb14" style={{ padding: 16 }}>
            <div className="card-title" style={{ marginBottom: 12 }}>Identificação do Lote</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              <Campo label="Nº Reconciliação" value={lote.numeroReconciliacao} />
              <Campo label="Filial / Fábrica" value={lote.filial} />
              <Campo label="Produto Acabado" value={lote.produtoAcabado} />
              <Campo label="Granel" value={lote.granel} />
              <Campo label="Lote Fabricação" value={lote.loteFabricacao} />
              <Campo label="Data Fabricação" value={lote.dataFabricacao} />
              <Campo label="Data Validade" value={lote.dataValidade} />
              <Campo label="Status do Lote" value={lote.statusLote} />
            </div>
          </div>

          {/* Grid 2x2 das 4 áreas */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: 14, marginBottom: 14 }}>
            <CardArea
              chave="fabricacao"
              dados={lote.areas.fabricacao}
              indicadores={[
                { label: 'Rend. Teórico', value: lote.areas.fabricacao.rendimentoTeorico },
                { label: 'Rend. Real',    value: lote.areas.fabricacao.rendimentoReal },
                { label: 'Perda',         value: lote.areas.fabricacao.perda },
              ]}
              onUpdate={(novo) => atualizarArea('fabricacao', novo)}
            />
            <CardArea
              chave="embalagem"
              dados={lote.areas.embalagem}
              indicadores={[
                { label: 'Un. Planejadas', value: lote.areas.embalagem.unidadesPlanejadas },
                { label: 'Un. Produzidas', value: lote.areas.embalagem.unidadesProduzidas },
                { label: 'Perda',          value: lote.areas.embalagem.perda },
              ]}
              onUpdate={(novo) => atualizarArea('embalagem', novo)}
            />
            <CardArea
              chave="fisicoQuimico"
              dados={lote.areas.fisicoQuimico}
              indicadores={[
                { label: 'pH',        value: lote.areas.fisicoQuimico.ph },
                { label: 'Umidade',   value: lote.areas.fisicoQuimico.umidade },
                { label: 'Densidade', value: lote.areas.fisicoQuimico.densidade },
              ]}
              onUpdate={(novo) => atualizarArea('fisicoQuimico', novo)}
            />
            <CardArea
              chave="microbiologia"
              dados={lote.areas.microbiologia}
              indicadores={[
                { label: 'Contagem Total',  value: lote.areas.microbiologia.contagemTotal },
                { label: 'Bolor / Levedura',value: lote.areas.microbiologia.bolorLevedura },
                { label: 'Patógenos',       value: lote.areas.microbiologia.patogenos },
              ]}
              onUpdate={(novo) => atualizarArea('microbiologia', novo)}
            />
          </div>

          {/* Resumo + Ações finais */}
          <div className="card co" style={{ padding: 16, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center', borderTop: '3px solid var(--ouro-claro)' }}>
            <div>
              <div className="card-title" style={{ marginBottom: 8, padding: 0, border: 'none' }}>Resumo da Análise</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <ResumoItem label="Fabricação"     status={lote.areas.fabricacao.status} />
                <ResumoItem label="Embalagem"      status={lote.areas.embalagem.status} />
                <ResumoItem label="Físico-Químico" status={lote.areas.fisicoQuimico.status} />
                <ResumoItem label="Microbiologia"  status={lote.areas.microbiologia.status} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              <button
                className="btn btn-lg btn-v"
                onClick={liberarParaCED}
                disabled={!todasAprovadas}
                style={{
                  opacity: todasAprovadas ? 1 : 0.5,
                  cursor: todasAprovadas ? 'pointer' : 'not-allowed',
                  minWidth: 230,
                }}
                title={todasAprovadas ? 'Liberar lote para o CED' : 'Todas as áreas precisam estar APROVADAS'}
              >
                ✓ Liberar para o CED
              </button>
              <button
                className="btn btn-md btn-p"
                onClick={reprovarLote}
                disabled={!algumaReprovada}
                style={{
                  opacity: algumaReprovada ? 1 : 0.5,
                  cursor: algumaReprovada ? 'pointer' : 'not-allowed',
                  minWidth: 230,
                }}
              >
                ✗ Reprovar Lote
              </button>
              <div style={{ fontSize: 10, color: 'var(--text3)', textAlign: 'right', maxWidth: 230, lineHeight: 1.5 }}>
                {todasAprovadas
                  ? 'Pronto para liberar — todas as 4 áreas APROVADAS.'
                  : 'Liberação habilita quando as 4 áreas estão APROVADAS.'}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Estado vazio */}
      {!lote && !erro && (
        <div className="card" style={{ padding: 40, textAlign: 'center', border: '1px dashed var(--border2)' }}>
          <div style={{ fontSize: 36, marginBottom: 8 }}>🔬</div>
          <div style={{ fontSize: 14, color: 'var(--text2)' }}>
            Informe o <strong>Nº do Lote de Embalagem</strong> para iniciar a análise da Qualidade.
          </div>
          <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 6 }}>
            Lotes de teste disponíveis: <strong style={{ fontFamily: 'var(--font-m)', color: 'var(--verde)' }}>ABC123</strong>{' '}
            (tudo pendente) · <strong style={{ fontFamily: 'var(--font-m)', color: 'var(--verde)' }}>G2026091</strong>{' '}
            (Loção Hidratante) · <strong style={{ fontFamily: 'var(--font-m)', color: 'var(--verde)' }}>XYZ789</strong>{' '}
            (3 áreas aprovadas, 1 pendente)
          </div>
        </div>
      )}
    </div>
  );
}

function ResumoItem({ label, status }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
      <span style={{ color: 'var(--text2)', fontWeight: 600, minWidth: 110 }}>{label}:</span>
      <StatusPill status={status} />
    </div>
  );
}
