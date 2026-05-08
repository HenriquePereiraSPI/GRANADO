import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
  APROVADO:  { bg: 'var(--ok-p)',   fg: 'var(--ok)',    bd: 'var(--ok-b)'  },
  REPROVADO: { bg: 'var(--per-p)',  fg: 'var(--per)',   bd: 'var(--per-b)' },
  PENDENTE:  { bg: 'var(--alr-p)',  fg: 'var(--alr)',   bd: 'var(--alr-b)' },
  NA:        { bg: 'var(--surface2)', fg: 'var(--text2)', bd: 'var(--border2)' },
};

const STATUS_LABEL = {
  APROVADO:  'APROVADO',
  REPROVADO: 'REPROVADO',
  PENDENTE:  'PENDENTE',
  NA:        'N/A',
};

// ─────────────────────────────────────────────────────────────
// Checklist de Reconciliacao — Anexo 2 do POP-GQV-0009/05.
// Estados por item: 'pendente' (cinza) · 'concluido' (verde ✓) · 'na' (texto cinza).
// Para liberar o lote pro CED, todos os itens precisam estar
// marcados como 'concluido' OU 'na'.
// ─────────────────────────────────────────────────────────────
const CHECKLIST_ITENS = [
  { id: 'wo_mps_pesadas',     label: 'WO com Matérias-Primas Pesadas' },
  { id: 'etq_mp_relat_pes',   label: 'Etiquetas de Matéria-Prima / Relatório de Pesagem' },
  { id: 'ctrl_assinat',       label: 'Controle de Assinaturas / Assinatura Eletrônica' },
  { id: 'of_relat_inbatch',   label: 'Ordem de Fabricação / Relatório do InBatch' },
  { id: 'wo_envase_montag',   label: 'WO Envase EAN / WO Montagem EAN' },
  { id: 'rel_ctrl_emb',       label: 'Relatório de Controle em Processo na Linha de Embalagem' },
  { id: 'ctrl_peso',          label: 'Controle de Peso' },
  { id: 'ordem_emb',          label: 'Ordem de Embalagem' },
  { id: 'wo_emb_dun',         label: 'WO Embalagem DUN' },
  { id: 'bol_fq',             label: 'Boletim de Análise Físico-Químico' },
  { id: 'bol_micro',          label: 'Boletim de Análise Microbiológico' },
  { id: 'rel_desvio',         label: 'Relatório de Desvio' },
];

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
  const label = STATUS_LABEL[status] || status;
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
      {label}
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
  const [expObs, setExpObs] = useState(false);
  const ehNA = dados.status === 'NA';

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 7,
      boxShadow: 'var(--sh)',
      overflow: 'hidden',
      opacity: ehNA ? 0.78 : 1,
    }}>
      {/* Header colorido — clicavel pra abrir Genealogia */}
      <button
        type="button"
        onClick={onAbrirGenealogia}
        title="Clique para ver na Genealogia de Lote"
        style={{
          background: ehNA ? 'var(--text3)' : cor.bg, color: cor.fg,
          padding: '8px 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          width: '100%', border: 'none', cursor: 'pointer', font: 'inherit',
          gap: 10,
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '.08em', textTransform: 'uppercase' }}>
          {cor.icon} {cor.label}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '.08em',
              padding: '2px 7px', borderRadius: 10,
              background: 'rgba(255,255,255,.18)', color: '#fff',
              border: '1px solid rgba(255,255,255,.35)',
              whiteSpace: 'nowrap',
            }}
          >
            🧬 Genealogia →
          </span>
          <StatusPill status={dados.status} />
        </div>
      </button>

      {/* Body — versão compacta */}
      <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Indicadores em linha (compactados se NA) */}
        {!ehNA && (
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '4px 14px',
            fontSize: 11, color: 'var(--text2)',
            padding: '6px 10px',
            background: 'var(--surface2)',
            borderRadius: 4, border: '1px solid var(--border)',
          }}>
            {indicadores.map((ind) => (
              <span key={ind.label}>
                <span style={{ color: 'var(--text3)', fontWeight: 700 }}>{ind.label}: </span>
                <span style={{ fontFamily: 'var(--font-m)', fontWeight: 700, color: 'var(--text)' }}>{ind.value || '—'}</span>
              </span>
            ))}
          </div>
        )}

        {/* Responsavel + Data — uma linha só */}
        {!ehNA && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 130px', gap: 8 }}>
            <input
              className="inp"
              type="text"
              value={dados.responsavel}
              onChange={(e) => handleChange('responsavel', e.target.value)}
              placeholder="Responsável CQ (matrícula)"
              style={{ fontSize: 11, padding: '5px 8px' }}
            />
            <input
              className="inp"
              type="date"
              value={dados.data || ''}
              onChange={(e) => handleChange('data', e.target.value)}
              style={{ fontSize: 11, padding: '5px 8px' }}
            />
          </div>
        )}

        {/* Observacoes — colapsado por padrão */}
        {!ehNA && (
          <div>
            {!expObs && !dados.observacoes && (
              <button
                type="button"
                onClick={() => setExpObs(true)}
                className="btn btn-sm btn-ghost"
                style={{ fontSize: 10, padding: '3px 8px' }}
              >
                + Observações
              </button>
            )}
            {!expObs && dados.observacoes && (
              <button
                type="button"
                onClick={() => setExpObs(true)}
                style={{
                  background: 'var(--alr-p)', border: '1px solid var(--alr-b)',
                  color: 'var(--alr)', borderRadius: 4, padding: '4px 8px',
                  fontSize: 10, cursor: 'pointer', fontFamily: 'inherit',
                  width: '100%', textAlign: 'left',
                }}
              >
                💬 {dados.observacoes.length > 60 ? dados.observacoes.slice(0, 60) + '…' : dados.observacoes}
              </button>
            )}
            {expObs && (
              <textarea
                className="txta"
                value={dados.observacoes}
                onChange={(e) => handleChange('observacoes', e.target.value)}
                onBlur={() => setExpObs(false)}
                rows={2}
                placeholder="Registrar não conformidades, desvios ou comentários..."
                autoFocus
                style={{ fontSize: 11, padding: '6px 8px', resize: 'vertical' }}
              />
            )}
          </div>
        )}

        {/* Marca informativa quando NA */}
        {ehNA && (
          <div style={{
            padding: '8px 10px',
            background: 'var(--surface2)', border: '1px dashed var(--border2)',
            borderRadius: 4, fontSize: 11, color: 'var(--text2)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span>ℹ️</span>
            <span>Esta análise não se aplica para o lote atual.</span>
          </div>
        )}

        {/* Botoes Reprovar / Pendente / N/A / Aprovar */}
        <div style={{
          display: 'flex', gap: 6, justifyContent: 'flex-end',
          paddingTop: 6, borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}>
          <button
            type="button"
            onClick={() => handleChange('status', 'REPROVADO')}
            className="btn btn-sm btn-ghost"
            style={{ borderColor: 'var(--per)', color: 'var(--per)', fontSize: 10, padding: '3px 8px' }}
          >
            ✗ Reprovar
          </button>
          <button
            type="button"
            onClick={() => handleChange('status', 'PENDENTE')}
            className="btn btn-sm btn-ghost"
            style={{ borderColor: 'var(--alr)', color: 'var(--alr)', fontSize: 10, padding: '3px 8px' }}
          >
            ⏳ Pendente
          </button>
          <button
            type="button"
            onClick={() => handleChange('status', 'NA')}
            className="btn btn-sm btn-ghost"
            style={{ borderColor: 'var(--text3)', color: 'var(--text2)', fontSize: 10, padding: '3px 8px' }}
            title="Esta análise não se aplica ao lote"
          >
            — N/A
          </button>
          <button
            type="button"
            onClick={() => handleChange('status', 'APROVADO')}
            className="btn btn-sm btn-v"
            style={{ fontSize: 10, padding: '3px 8px' }}
          >
            ✓ Aprovar
          </button>
        </div>
      </div>
    </div>
  );
}

/* (A Fila de Reconciliacoes Pendentes virou tela dedicada:
   /qual-fila — QualidadeFilaReconciliacaoScreen.jsx) */


/* ─────────────────────────────────────────────────────────────
   Modal Checklist de Reconciliacao — POP-GQV-0009/05 · Anexo 2
   Espelha o formulario fisico que o CQ assina no fim do processo.
───────────────────────────────────────────────────────────── */
function ChecklistEstadoToggle({ estado, onChange }) {
  // Toggle 3 estados: pendente -> concluido -> na -> pendente
  const cores = {
    pendente:  { bg: 'var(--surface2)', fg: 'var(--text3)',   bd: 'var(--border)',   label: '?',   help: 'Pendente'   },
    concluido: { bg: 'var(--ok-p)',     fg: 'var(--ok)',      bd: 'var(--ok-b)',     label: '✓',   help: 'Concluído'  },
    na:        { bg: 'var(--surface2)', fg: 'var(--text2)',   bd: 'var(--border2)',  label: 'N/A', help: 'Não se aplica' },
  };
  const c = cores[estado] || cores.pendente;
  const proximo = estado === 'pendente' ? 'concluido' : estado === 'concluido' ? 'na' : 'pendente';
  return (
    <button
      type="button"
      onClick={() => onChange(proximo)}
      title={`${c.help} — clique para alternar`}
      style={{
        minWidth: 56, padding: '4px 8px',
        background: c.bg, color: c.fg,
        border: `1.5px solid ${c.bd}`,
        borderRadius: 4,
        fontSize: 12, fontWeight: 800,
        cursor: 'pointer', fontFamily: 'inherit',
      }}
    >
      {c.label}
    </button>
  );
}

function ChecklistModal({ checklist, setChecklist, onClose, lote, marcados, total }) {
  const setItem = (id, valor) => setChecklist((c) => ({ ...c, itens: { ...c.itens, [id]: valor } }));
  const setBool = (campo, valor) => setChecklist((c) => ({ ...c, [campo]: valor }));
  const setCampo = (campo, valor) => setChecklist((c) => ({ ...c, [campo]: valor }));
  const pct = Math.round((marcados / total) * 100);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: 'rgba(15,51,25,.55)',
        zIndex: 950, display: 'flex', alignItems: 'flex-start',
        justifyContent: 'center', padding: '40px 20px', overflowY: 'auto',
        backdropFilter: 'blur(3px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          background: 'var(--surface)', borderTop: '4px solid var(--ouro)',
          border: '1px solid var(--border)',
          borderRadius: 8, padding: '24px 28px', maxWidth: 760, width: '100%',
          boxShadow: 'var(--sh2)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12, gap: 12 }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ouro)' }}>
              POP-GQV-0009/05 · Anexo 2
            </div>
            <div style={{ fontFamily: 'var(--font-d)', fontSize: 18, fontWeight: 700, color: 'var(--verde-esc)', marginTop: 2 }}>
              Check List de Reconciliação de Lote
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 10px', cursor: 'pointer', fontSize: 13, color: 'var(--text2)' }}
          >
            ✕
          </button>
        </div>

        {/* Header do produto/lote */}
        <div
          style={{
            background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6,
            padding: '10px 14px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
            gap: 12, fontSize: 11, marginBottom: 14,
          }}
        >
          <div>
            <div style={{ fontSize: 9, color: 'var(--text3)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>Produto</div>
            <div style={{ fontWeight: 700, marginTop: 2 }}>{lote?.produtoAcabado || '—'}</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: 'var(--text3)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>Lote Fabricação</div>
            <div className="mono" style={{ fontWeight: 700, marginTop: 2 }}>{lote?.loteGranel || '—'}</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: 'var(--text3)', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>Lote Embalagem (PA)</div>
            <div className="mono" style={{ fontWeight: 700, marginTop: 2 }}>{lote?.lotePA || '—'}</div>
          </div>
        </div>

        {/* Barra de progresso */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, background: 'var(--surface2)', padding: '8px 12px', borderRadius: 6, border: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 22, fontWeight: 700, color: pct === 100 ? 'var(--ok)' : 'var(--ouro)', minWidth: 48 }}>{pct}%</div>
          <div style={{ flex: 1 }}>
            <div style={{ height: 6, background: 'var(--bg2)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: pct === 100 ? 'var(--ok)' : 'linear-gradient(90deg, var(--ouro), var(--ok))', transition: 'width .3s' }} />
            </div>
            <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 3 }}>
              {marcados} de {total} itens marcados (concluído ou N/A)
            </div>
          </div>
        </div>

        {/* Documentação do Lote */}
        <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: 6 }}>
          Documentação do Lote
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 14, border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
          {CHECKLIST_ITENS.map((it, i) => (
            <div
              key={it.id}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 12px', gap: 12,
                background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface2)',
                fontSize: 12,
              }}
            >
              <span style={{ flex: 1, color: 'var(--text)' }}>{it.label}</span>
              <ChecklistEstadoToggle estado={checklist.itens[it.id]} onChange={(v) => setItem(it.id, v)} />
            </div>
          ))}
        </div>

        {/* Flags extras */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>
            <input
              type="checkbox"
              checked={checklist.ordemParcial}
              onChange={(e) => setBool('ordemParcial', e.target.checked)}
              style={{ width: 16, height: 16 }}
            />
            <span><strong>Ordem Parcial</strong> <span style={{ color: 'var(--text3)' }}>(N/A se desmarcado)</span></span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6, cursor: 'pointer', fontSize: 12 }}>
            <input
              type="checkbox"
              checked={checklist.produtoKit}
              onChange={(e) => setBool('produtoKit', e.target.checked)}
              style={{ width: 16, height: 16 }}
            />
            <span><strong>Produto destinado para Kit</strong> <span style={{ color: 'var(--text3)' }}>(N/A se desmarcado)</span></span>
          </label>
        </div>

        {/* Observação */}
        <div style={{ marginBottom: 14 }}>
          <label className="lbl">Observação</label>
          <textarea
            className="txta"
            value={checklist.observacao}
            onChange={(e) => setCampo('observacao', e.target.value)}
            rows={2}
            placeholder="Registrar não conformidades, justificativas de N/A ou comentários relevantes..."
            style={{ fontSize: 12, padding: '7px 10px', resize: 'vertical' }}
          />
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
          <button className="btn btn-md btn-ghost" onClick={onClose}>Fechar</button>
          <button
            className="btn btn-md btn-v"
            onClick={onClose}
            disabled={pct !== 100}
            style={{ opacity: pct === 100 ? 1 : 0.5, cursor: pct === 100 ? 'pointer' : 'not-allowed' }}
            title={pct === 100 ? 'Confirmar e fechar' : 'Marque todos os itens (concluído ou N/A)'}
          >
            ✓ Confirmar Checklist
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

/** Estado inicial do checklist (todos os 12 itens em pendente). */
function checklistInicial() {
  const itens = {};
  CHECKLIST_ITENS.forEach((it) => { itens[it.id] = 'pendente'; });
  return {
    itens,
    ordemParcial: false,
    produtoKit: false,
    observacao: '',
    assinatura: '',
    dataAssinatura: '',
  };
}

export default function QualidadeReconciliacaoScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [numeroLote, setNumeroLote] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [lote, setLote] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [modo, setModo] = useState('analise'); // 'analise' | 'criacao'
  const [checklist, setChecklist] = useState(checklistInicial());
  const [modalChecklistAberto, setModalChecklistAberto] = useState(false);

  // Quando aberta a partir da Fila (/qual-fila) com ?lote=<PA>,
  // mostramos um botao "Voltar para Fila" no header.
  const veioDaFila = !!searchParams.get('lote');

  // Auto-carrega o lote vindo via URL (?lote=262417) — usado pela Fila
  // de Reconciliacoes ao clicar numa linha pronta.
  useEffect(() => {
    const loteParam = searchParams.get('lote');
    if (loteParam && loteParam !== numeroLote) {
      buscarLote(loteParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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

  const buscarLote = (valor) => {
    // valor opcional: quando vem do clique na linha da fila, usamos
    // direto o lote PA (ja sabemos que existe). Quando vem do botao
    // "Buscar", usamos o que esta no input.
    const alvo = (valor != null ? String(valor) : numeroLote).trim();
    setErro('');
    setMensagem('');
    if (!alvo) {
      setErro('Informe o Nº do Lote PA para iniciar a análise.');
      return;
    }
    if (valor != null) setNumeroLote(alvo); // sincroniza o input
    setCarregando(true);
    setModo('analise');
    setTimeout(() => {
      const key = alvo.replace(/[^0-9]/g, '');
      const dados = BASE_MOCK[key];
      if (!dados) {
        setErro(`Lote PA "${alvo}" não encontrado ou ainda não finalizou a etapa de embalagem.`);
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

  // Para liberar pro CED, areas precisam estar APROVADO ou NA (nenhuma pendente)
  // E o checklist precisa estar 100% preenchido (todo item concluido ou na).
  const todasAprovadas = lote && Object.values(lote.areas).every((a) => a.status === 'APROVADO' || a.status === 'NA');
  const algumaReprovada = lote && Object.values(lote.areas).some((a) => a.status === 'REPROVADO');

  // Checklist completo = todos os 12 itens estao 'concluido' ou 'na'.
  const checklistTotal = CHECKLIST_ITENS.length;
  const checklistMarcados = Object.values(checklist.itens).filter((s) => s === 'concluido' || s === 'na').length;
  const checklistCompleto = checklistMarcados === checklistTotal;

  const podeLiberar = todasAprovadas && checklistCompleto;

  const liberarParaCED = () => {
    if (!checklistCompleto) {
      setMensagem(`⚠ Preencha o Checklist de Reconciliação (POP-GQV-0009) antes de liberar. Itens marcados: ${checklistMarcados}/${checklistTotal}.`);
      return;
    }
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {veioDaFila && (
            <button
              className="btn btn-sm btn-ghost"
              onClick={() => navigate('/qual-fila')}
              style={{ borderColor: 'var(--ouro)', color: 'var(--ouro)', fontWeight: 700 }}
              title="Voltar para a Fila de Reconciliações"
            >
              ← Voltar para Fila
            </button>
          )}
          <div style={{ textAlign: 'right', fontFamily: 'var(--font-m)', fontSize: 10, color: 'var(--text2)', lineHeight: 1.6 }}>
            Tela [JPD920-CQ]<br />
            <span style={{ color: 'var(--verde)', fontWeight: 700 }}>Bárbara C. O. Peixoto</span>
          </div>
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
            onClick={() => buscarLote()}
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
            <div style={{ minWidth: 280 }}>
              <div className="card-title" style={{ marginBottom: 8, padding: 0, border: 'none' }}>Resumo da Análise</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
                <ResumoItem label="Fabricação"     status={lote.areas.fabricacao.status} />
                <ResumoItem label="Embalagem"      status={lote.areas.embalagem.status} />
                <ResumoItem label="Físico-Químico" status={lote.areas.fisicoQuimico.status} />
                <ResumoItem label="Microbiologia"  status={lote.areas.microbiologia.status} />
              </div>

              {/* Botao do Checklist */}
              <button
                type="button"
                onClick={() => setModalChecklistAberto(true)}
                className="btn btn-md"
                style={{
                  background: checklistCompleto ? 'var(--ok-p)' : 'var(--surface2)',
                  border: `1.5px solid ${checklistCompleto ? 'var(--ok-b)' : 'var(--ouro-claro)'}`,
                  color: checklistCompleto ? 'var(--ok)' : 'var(--ouro)',
                  fontWeight: 700, fontSize: 12,
                  display: 'flex', alignItems: 'center', gap: 8,
                  width: '100%',
                }}
              >
                <span style={{ fontSize: 18 }}>{checklistCompleto ? '✅' : '📋'}</span>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div>{checklistCompleto ? 'Checklist Completo' : 'Checklist de Reconciliação'}</div>
                  <div style={{ fontSize: 9, fontWeight: 500, opacity: 0.85 }}>
                    POP-GQV-0009/05 · Anexo 2 · {checklistMarcados}/{checklistTotal} itens
                  </div>
                </div>
                <span style={{ fontSize: 16 }}>›</span>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
              <button
                className="btn btn-lg btn-v"
                onClick={liberarParaCED}
                disabled={!podeLiberar}
                style={{
                  opacity: podeLiberar ? 1 : 0.5,
                  cursor: podeLiberar ? 'pointer' : 'not-allowed',
                  minWidth: 230,
                }}
                title={
                  !todasAprovadas
                    ? 'Todas as áreas precisam estar APROVADAS ou N/A'
                    : !checklistCompleto
                    ? 'Preencha o Checklist de Reconciliação antes de liberar'
                    : 'Liberar lote para o CED'
                }
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
                {podeLiberar
                  ? '✓ Pronto para liberar — áreas + checklist OK.'
                  : !todasAprovadas
                  ? 'Liberação habilita quando as 4 áreas estão APROVADAS ou N/A.'
                  : 'Falta o Checklist de Reconciliação.'}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Modal Checklist de Reconciliação (POP-GQV-0009/05 — Anexo 2) */}
      {modalChecklistAberto && (
        <ChecklistModal
          checklist={checklist}
          setChecklist={setChecklist}
          onClose={() => setModalChecklistAberto(false)}
          lote={lote}
          marcados={checklistMarcados}
          total={checklistTotal}
        />
      )}

      {/* Dica para o usuario quando nao ha lote carregado */}
      {!lote && !erro && (
        <div
          style={{
            padding: '12px 14px',
            background: 'var(--inf-p)',
            border: '1px solid var(--inf-b)',
            borderRadius: 6,
            color: 'var(--inf)',
            fontSize: 12,
            display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: 18 }}>💡</span>
          <span style={{ flex: 1, minWidth: 220 }}>
            Informe o Nº Lote PA no campo acima para iniciar a análise — ou
            abra a tela <strong>Fila de Reconciliações</strong> para selecionar um
            lote pronto diretamente da lista.
          </span>
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => navigate('/qual-fila')}
            style={{ borderColor: 'var(--inf)', color: 'var(--inf)', fontWeight: 700 }}
          >
            📋 Ir para Fila →
          </button>
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
