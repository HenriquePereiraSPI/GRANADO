import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

// ─────────────────────────────────────────────────────────────
// Mock de lotes — chave eh o LOTE PA (numero de Producao Acabado),
// alinhado 1:1 com os 3 dossies da Genealogia
// (src/data/dossie-wo-784426.js → DOSSIES). Em producao, esta tabela
// virá da integracao JDE/Apriso usando o lote PA como chave primária.
//
// Mapeamento:
//   262417 → Sabonete Glicerinado Tradicional (DOSSIE_1, WO 784426, granel 2551/2026)
//   261892 → Sabonete Glicerinado Limão Siciliano (DOSSIE_2, WO 784301, granel 2401/2026)
//   261104 → Sabonete Glicerinado Mel (DOSSIE_3, WO 783897, granel 2298/2026)
// ─────────────────────────────────────────────────────────────
const BASE_MOCK = {
  '262417': {
    numeroReconciliacao: '137234',
    filial: '0015 - Casa Granado',
    produtoAcabado: 'S0815B_G — Sabonete Glicerinado Tradicional 90g',
    granel: 'S0815B — TRANSP GRANADO GLICERINA',
    loteGranel: '2551/2026',
    lotePA: '262417',
    loteFabricacao: 'WO 784426',
    dataFabricacao: '2026-04-16',
    dataValidade: '2029-04-30',
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao: {
        rendimentoTeorico: '6.000 kg', rendimentoReal: '6.006 kg', perda: '0,10%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      embalagem: {
        unidadesPlanejadas: '52.056 un', unidadesProduzidas: '48.531 un', perda: '6,77%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      fisicoQuimico: {
        ph: '10,7', umidade: '22%', densidade: '1,02 g/cm³',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      microbiologia: {
        contagemTotal: '< 10 UFC/g', bolorLevedura: '< 10 UFC/g', patogenos: 'Ausente',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
    },
  },
  '261892': {
    numeroReconciliacao: '137220',
    filial: '0015 - Casa Granado',
    produtoAcabado: 'S0822B_G — Sabonete Glicerinado Limão Siciliano 90g',
    granel: 'S0822B — TRANSP GRANADO LIMÃO SICILIANO',
    loteGranel: '2401/2026',
    lotePA: '261892',
    loteFabricacao: 'WO 784301',
    dataFabricacao: '2026-04-08',
    dataValidade: '2029-04-20',
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao: {
        rendimentoTeorico: '5.500 kg', rendimentoReal: '5.503 kg', perda: '0,05%',
        responsavel: 'Daltivo (108922)', data: '2026-04-09', status: 'APROVADO',
        observacoes: 'Rendimento dentro do limite (97–103%).',
      },
      embalagem: {
        unidadesPlanejadas: '47.652 un', unidadesProduzidas: '44.218 un', perda: '7,21%',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      fisicoQuimico: {
        ph: '10,5', umidade: '23%', densidade: '1,03 g/cm³',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
      microbiologia: {
        contagemTotal: '< 10 UFC/g', bolorLevedura: '< 10 UFC/g', patogenos: 'Ausente',
        responsavel: '', data: '', status: 'PENDENTE', observacoes: '',
      },
    },
  },
  '261104': {
    numeroReconciliacao: '137199',
    filial: '0015 - Casa Granado',
    produtoAcabado: 'S0830B_G — Sabonete Glicerinado Mel 90g',
    granel: 'S0830B — TRANSP GRANADO MEL',
    loteGranel: '2298/2026',
    lotePA: '261104',
    loteFabricacao: 'WO 783897',
    dataFabricacao: '2026-03-28',
    dataValidade: '2029-04-12',
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao: {
        rendimentoTeorico: '4.000 kg', rendimentoReal: '4.012 kg', perda: '0,30%',
        responsavel: 'M. Rocha (108)', data: '2026-03-29', status: 'PENDENTE',
        observacoes: 'Aguardando aprovação final do supervisor.',
      },
      embalagem: {
        unidadesPlanejadas: '34.700 un', unidadesProduzidas: '32.140 un', perda: '7,38%',
        responsavel: 'F. Costa (212)', data: '2026-03-30', status: 'APROVADO',
        observacoes: '',
      },
      fisicoQuimico: {
        ph: '10,8', umidade: '21%', densidade: '1,04 g/cm³',
        responsavel: 'Rcafé (LIMS)', data: '2026-03-30', status: 'APROVADO',
        observacoes: 'Análise 118.502 — todos os parâmetros conforme.',
      },
      microbiologia: {
        contagemTotal: '< 10 UFC/g', bolorLevedura: '< 10 UFC/g', patogenos: 'Ausente',
        responsavel: 'Jessica Costa', data: '2026-03-30', status: 'APROVADO',
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

// Opcoes do campo "Status do Lote" (alinhadas a tabela 41/F4108 do JDE).
// O CQ pode alterar manualmente (ex.: Q -> L apos liberacao, Q -> B se
// for bloqueado). Em producao virá da integracao JDE/Apriso.
const STATUS_LOTE_OPCOES = [
  { value: 'Q — Sob Quarentena', cor: 'var(--alr)' },
  { value: 'A — Em Análise',     cor: 'var(--inf)' },
  { value: 'L — Liberado',       cor: 'var(--ok)' },
  { value: 'R — Reprovado',      cor: 'var(--per)' },
  { value: 'B — Bloqueado',      cor: 'var(--per)' },
  { value: 'D — Destruído',      cor: 'var(--text3)' },
  { value: 'E — Expirado',       cor: 'var(--text3)' },
];

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

/**
 * Campo de seleção (dropdown) com mesma altura/estilo do Campo readonly.
 * Cor da fonte dinamica baseada na opcao selecionada (passa cor por opcao).
 */
function CampoSelect({ label, value, opcoes, onChange, obrigatorio }) {
  const sel = opcoes.find((o) => o.value === value);
  const corValor = sel?.cor || 'var(--text)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <label style={{
        fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase',
        color: 'var(--text3)', marginBottom: 4,
      }}>
        {label} {obrigatorio && <span style={{ color: 'var(--per)' }}>*</span>}
      </label>
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: 'var(--surface2)',
          border: '1px solid var(--border)',
          borderRadius: 4,
          padding: '6px 10px',
          fontSize: 12,
          color: corValor,
          minHeight: 32,
          fontFamily: 'var(--font-m)',
          fontWeight: 700,
          cursor: 'pointer',
          outline: 'none',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--verde)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
      >
        {opcoes.map((o) => (
          <option key={o.value} value={o.value}>{o.value}</option>
        ))}
      </select>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card de Área (Fabricação / Embalagem / FQ / Micro)
───────────────────────────────────────────────────────────── */

function CardArea({ chave, dados, indicadores, onUpdate, onAbrirGenealogia }) {
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
      {/* Header colorido — clicavel pra abrir Genealogia */}
      <button
        type="button"
        onClick={onAbrirGenealogia}
        title="Clique para ver na Genealogia de Lote"
        style={{
          background: cor.bg, color: cor.fg,
          padding: '10px 14px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', border: 'none', cursor: 'pointer', font: 'inherit',
          gap: 10,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: '.08em', textTransform: 'uppercase' }}>
          {cor.icon} {cor.label}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '.08em',
              padding: '3px 9px', borderRadius: 12,
              background: 'rgba(255,255,255,.18)', color: '#fff',
              border: '1px solid rgba(255,255,255,.35)',
              whiteSpace: 'nowrap',
            }}
          >
            🧬 Ver Genealogia →
          </span>
          <StatusPill status={dados.status} />
        </div>
      </button>

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

/**
 * Gera um numero de reconciliacao aleatorio no formato JDE (6 digitos).
 * Em producao, virá da API JDE via integracao.
 */
function gerarNumeroReconciliacao() {
  return String(137000 + Math.floor(Math.random() * 999)).padStart(6, '0');
}

/** Template de Lote vazio para o modo 'Nova Reconciliacao'. */
function loteTemplate(numero) {
  const hoje = new Date().toISOString().split('T')[0];
  const validade = new Date();
  validade.setFullYear(validade.getFullYear() + 3);
  return {
    numeroReconciliacao: numero,
    filial: '0015 - Casa Granado',
    produtoAcabado: '',
    granel: '',
    loteGranel: '',
    lotePA: '',
    loteFabricacao: '',
    dataFabricacao: hoje,
    dataValidade: validade.toISOString().split('T')[0],
    statusLote: 'Q — Sob Quarentena',
    statusReconciliacao: '10 — Aberto',
    statusDocumentacao: '10 — Aberto',
    areas: {
      fabricacao:    { rendimentoTeorico: '',  rendimentoReal: '',     perda: '',           responsavel: '', data: '', status: 'PENDENTE', observacoes: '' },
      embalagem:     { unidadesPlanejadas: '', unidadesProduzidas: '', perda: '',           responsavel: '', data: '', status: 'PENDENTE', observacoes: '' },
      fisicoQuimico: { ph: '',                umidade: '',             densidade: '',       responsavel: '', data: '', status: 'PENDENTE', observacoes: '' },
      microbiologia: { contagemTotal: '',     bolorLevedura: '',       patogenos: '',       responsavel: '', data: '', status: 'PENDENTE', observacoes: '' },
    },
  };
}

export default function QualidadeReconciliacaoScreen() {
  const navigate = useNavigate();
  const [numeroLote, setNumeroLote] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [lote, setLote] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [modo, setModo] = useState('analise'); // 'analise' | 'criacao'

  const abrirGenealogia = (chaveArea) => {
    const params = new URLSearchParams();
    if (lote?.lotePA) params.set('lote', lote.lotePA);
    if (chaveArea) params.set('area', chaveArea);
    navigate('/dash-genealogia?' + params.toString());
  };

  const novaReconciliacao = () => {
    const numero = gerarNumeroReconciliacao();
    setNumeroLote('NOVO-' + numero);
    setLote(loteTemplate(numero));
    setModo('criacao');
    setErro('');
    setMensagem('🆕 Nova Reconciliação iniciada — Nº ' + numero + ' (gerado via integração JDE).');
  };

  const buscarLote = () => {
    setErro('');
    setMensagem('');
    if (!numeroLote.trim()) {
      setErro('Informe o Nº do Lote PA para iniciar a análise.');
      return;
    }
    setCarregando(true);
    setModo('analise');
    setTimeout(() => {
      const key = numeroLote.trim().replace(/[^0-9]/g, '');
      const dados = BASE_MOCK[key];
      if (!dados) {
        setErro(`Lote PA "${numeroLote}" não encontrado ou ainda não finalizou a etapa de embalagem.`);
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
              Nº Lote PA (Produto Acabado) <span style={{ color: 'var(--per)' }}>*</span>
            </label>
            <input
              className="inp"
              type="text"
              value={numeroLote}
              onChange={(e) => setNumeroLote(e.target.value)}
              placeholder="Ex.: 262417, 261892, 261104"
              onKeyDown={(e) => e.key === 'Enter' && buscarLote()}
              style={{ fontFamily: 'var(--font-m)', fontSize: 14 }}
            />
            <span style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>
              Mesmo Lote PA usado no Dossiê de Genealogia. Indica que Fabricação e Embalagem foram concluídas.
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
            onClick={() => { setNumeroLote(''); setLote(null); setErro(''); setMensagem(''); setModo('analise'); }}
          >
            Limpar
          </button>
          <div style={{ width: 1, height: 36, background: 'var(--border)', margin: '0 4px' }} />
          <button
            className="btn btn-md"
            onClick={novaReconciliacao}
            style={{
              minWidth: 200,
              background: 'var(--ouro)',
              color: '#fff',
              borderColor: 'var(--ouro)',
            }}
            title="Cria uma nova reconciliação com número gerado pelo JDE"
          >
            + Nova Reconciliação
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
          {/* Banner de modo Criação */}
          {modo === 'criacao' && (
            <div className="abox warn mb14" style={{ borderTopWidth: 3, borderTopStyle: 'solid', borderTopColor: 'var(--ouro)' }}>
              <span className="ai">🆕</span>
              <div>
                <strong>Modo Criação — Nova Reconciliação Nº {lote.numeroReconciliacao}</strong>
                {' · '}gerado pela integração JDE. Preencha os dados de identificação e as 4 áreas de análise antes de liberar.
              </div>
            </div>
          )}

          {/* Identificação */}
          <div className="card mb14" style={{ padding: 16 }}>
            <div className="card-title" style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
              <span>Identificação do Lote</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {modo === 'criacao' && (
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ouro)' }}>
                    ✏️ Editável (modo criação)
                  </span>
                )}
                {lote.lotePA && (
                  <button
                    type="button"
                    onClick={() => abrirGenealogia()}
                    className="btn btn-sm btn-ghost"
                    style={{ fontSize: 10, borderColor: 'var(--verde)', color: 'var(--verde)' }}
                    title={`Abrir Dossiê de Genealogia do Lote PA ${lote.lotePA}`}
                  >
                    🧬 Ver Dossiê de Genealogia (Lote PA {lote.lotePA})
                  </button>
                )}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              <Campo label="Nº Reconciliação" value={lote.numeroReconciliacao} />
              <Campo label="Filial / Fábrica" value={lote.filial} />
              <Campo label="Produto Acabado" value={lote.produtoAcabado} />
              <Campo label="Granel" value={lote.granel} />
              <Campo label="Lote PA" value={lote.lotePA} obrigatorio />
              <Campo label="Lote Granel" value={lote.loteGranel} />
              <Campo label="Ordem (WO)" value={lote.loteFabricacao} />
              <CampoSelect
                label="Status do Lote"
                value={lote.statusLote}
                opcoes={STATUS_LOTE_OPCOES}
                onChange={(v) => setLote({ ...lote, statusLote: v })}
                obrigatorio
              />
              <Campo label="Data Fabricação" value={lote.dataFabricacao} />
              <Campo label="Data Validade" value={lote.dataValidade} />
              <Campo label="Status Reconciliação" value={lote.statusReconciliacao} />
              <Campo label="Status Documentação" value={lote.statusDocumentacao} />
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
              onAbrirGenealogia={() => abrirGenealogia('fabricacao')}
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
              onAbrirGenealogia={() => abrirGenealogia('embalagem')}
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
              onAbrirGenealogia={() => abrirGenealogia('fisicoQuimico')}
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
              onAbrirGenealogia={() => abrirGenealogia('microbiologia')}
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
            Informe o <strong>Nº Lote PA</strong> para iniciar a análise da Qualidade.
          </div>
          <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 6 }}>
            Lotes de teste disponíveis (mesmos Lotes PA da Genealogia):{' '}
            <strong style={{ fontFamily: 'var(--font-m)', color: 'var(--verde)' }}>262417</strong>{' '}
            (Sabonete Glicerinado · tudo pendente) ·{' '}
            <strong style={{ fontFamily: 'var(--font-m)', color: 'var(--verde)' }}>261892</strong>{' '}
            (Limão Siciliano · 1 aprovada) ·{' '}
            <strong style={{ fontFamily: 'var(--font-m)', color: 'var(--verde)' }}>261104</strong>{' '}
            (Mel · 3 aprovadas, 1 pendente)
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
