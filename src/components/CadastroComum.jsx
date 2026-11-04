import { cloneElement, useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Pecas compartilhadas pelas telas do modulo Cadastros (Motivos, Produto).
 */

export const ESTILO_TRAVADO = { background: 'var(--surface2)', color: 'var(--text3)', cursor: 'not-allowed' };

const BTN_ICONE = { width: 30, height: 30, padding: 0, justifyContent: 'center' };
// Menor que BTN_ICONE: e o que define a altura das linhas da tabela.
const BTN_ACAO = { ...BTN_ICONE, width: 24, height: 24 };
const SVG_ICONE = {
  width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true,
};

// Compara ignorando maiusculas e acentos: "Refeição" e "REFEICAO" sao o mesmo valor.
export const normalizar = (s) => s.trim().toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');

export const fmtData = (iso) => new Date(iso).toLocaleString('pt-BR', {
  day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
});

// Busca do campo "Filtrar todas as colunas": o texto em qualquer uma das colunas exibidas.
export const contemBusca = (colunas, busca) => {
  const termo = normalizar(busca);
  return !termo || colunas.some((c) => normalizar(String(c ?? '')).includes(termo));
};

export const POR_PAGINA = 25;

// `chave` volta para a primeira pagina quando muda (ex.: os filtros aplicados).
export function usePaginacao(lista, chave) {
  const [pagina, setPagina] = useState(0);
  useEffect(() => setPagina(0), [chave]);
  const totalPaginas = Math.max(1, Math.ceil(lista.length / POR_PAGINA));
  const atual = Math.min(pagina, totalPaginas - 1);
  const inicio = atual * POR_PAGINA;
  return { itens: lista.slice(inicio, inicio + POR_PAGINA), pagina: atual, totalPaginas, setPagina, inicio, total: lista.length };
}

export function Paginacao({ pag }) {
  const { itens, pagina, totalPaginas, setPagina, inicio, total } = pag;
  const botao = (rotulo, titulo, destino, inativo) => (
    <button
      type="button"
      className="btn btn-sm btn-ghost"
      title={titulo}
      aria-label={titulo}
      disabled={inativo}
      onClick={() => setPagina(destino)}
      style={inativo ? { opacity: 0.45, cursor: 'default' } : undefined}
    >{rotulo}</button>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border)', fontFamily: 'var(--font-m)', fontSize: 11, color: 'var(--text2)' }}>
      <span>{total === 0 ? 0 : inicio + 1}–{inicio + itens.length} de {total}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {botao('«', 'Primeira página', 0, pagina === 0)}
        {botao('‹', 'Página anterior', pagina - 1, pagina === 0)}
        <span style={{ padding: '0 8px', fontWeight: 700 }}>Página {pagina + 1} de {totalPaginas}</span>
        {botao('›', 'Próxima página', pagina + 1, pagina >= totalPaginas - 1)}
        {botao('»', 'Última página', totalPaginas - 1, pagina >= totalPaginas - 1)}
      </div>
    </div>
  );
}

export function Campo({ label, erro, flex = '1 1 140px', children }) {
  const id = useId();
  return (
    <div className="fg" style={{ flex, minWidth: 0 }}>
      <label className="lbl" htmlFor={id}>{label}</label>
      {cloneElement(children, { id })}
      {erro && <div role="alert" style={{ marginTop: 4, fontSize: 11, color: 'var(--per)' }}>{erro}</div>}
    </div>
  );
}

export function useFecharComEsc(onCancel) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onCancel(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel]);
}

export function AcoesLinha({ nome, onEditar, onExcluir }) {
  return (
    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
      {onEditar && (
        <button
          type="button"
          className="btn btn-ghost"
          style={{ ...BTN_ACAO, marginRight: 6 }}
          title="Editar"
          aria-label={`Editar ${nome}`}
          onClick={onEditar}
        >
          <svg {...SVG_ICONE}><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
        </button>
      )}
      <button
        type="button"
        className="btn btn-cancelar-pes"
        style={BTN_ACAO}
        title="Excluir"
        aria-label={`Excluir ${nome}`}
        onClick={onExcluir}
      >
        <svg {...SVG_ICONE}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
      </button>
    </td>
  );
}

export function ExcluirPopup({ entidade, nome, onCancel, onConfirm }) {
  useFecharComEsc(onCancel);
  const titulo = `Excluir ${entidade}`;

  return (
    <div className="modal-overlay open">
      <div className="modal" role="alertdialog" aria-modal="true" aria-label={titulo} style={{ minWidth: 0 }}>
        <button type="button" className="modal-close" onClick={onCancel} aria-label="Fechar">✕</button>
        <div className="modal-title">{titulo}</div>
        <div className="modal-sub">Essa ação não pode ser desfeita.</div>
        <div style={{ fontSize: 13, color: 'var(--text)' }}>
          Deseja excluir o {entidade} <strong>{nome}</strong>?
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 20 }}>
          <button type="button" className="btn btn-md btn-ghost" autoFocus onClick={onCancel}>Cancelar</button>
          <button type="button" className="btn btn-md btn-cancelar-pes" onClick={onConfirm}>Excluir</button>
        </div>
      </div>
    </div>
  );
}

function IconeFunil({ tamanho }) {
  return (
    <svg {...SVG_ICONE} width={tamanho} height={tamanho}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

export function BotaoFiltro({ aberto, ativo, onClick }) {
  return (
    <button
      type="button"
      className="btn btn-ghost"
      title="Filtro avançado"
      aria-label="Filtro avançado"
      aria-expanded={aberto}
      onClick={onClick}
      style={{
        ...BTN_ICONE,
        flexShrink: 0,
        ...(ativo ? { background: 'var(--verde)', borderColor: 'var(--verde-esc)', color: '#fff' } : { color: '#1C5C31' }),
      }}
    >
      <IconeFunil tamanho={16} />
    </button>
  );
}

// Lado direito do titulo da tabela: busca em todas as colunas + filtro avancado.
export function BarraFiltros({ busca, onBusca, filtrosAbertos, filtroAtivo, onAbrirFiltros }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '0 1 280px', minWidth: 0 }}>
      <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
        <span style={{ position: 'absolute', left: 9, top: '50%', transform: 'translateY(-50%)', display: 'flex', color: 'var(--text3)', pointerEvents: 'none' }}>
          <svg {...SVG_ICONE} width={13} height={13}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        </span>
        <input
          className="inp"
          type="text"
          placeholder="Filtrar todas as colunas..."
          aria-label="Filtrar todas as colunas"
          value={busca}
          onChange={(e) => onBusca(e.target.value)}
          style={{ height: 30, boxSizing: 'border-box', padding: '0 10px 0 30px', fontSize: 12 }}
        />
      </div>
      <BotaoFiltro aberto={filtrosAbertos} ativo={filtroAtivo} onClick={onAbrirFiltros} />
    </div>
  );
}

// Painel de filtros que sobe da base da tela (padrao da Selecao de Ordem no mobile).
// Fica sempre montado para a animacao rodar nos dois sentidos, e vai para o body
// porque a animacao de transform do .screen.active pode prender o position:fixed.
export function FiltrosSheet({ aberto, onLimpar, onFechar, children }) {
  useFecharComEsc(onFechar);

  return createPortal(
    <>
      {aberto && <div onClick={onFechar} style={{ position: 'fixed', inset: 0, background: 'rgba(15,51,25,.5)', zIndex: 99998 }} />}
      <div
        className="card cv cad-filtros"
        role="dialog"
        aria-modal="true"
        aria-label="Filtros"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          margin: '0 auto',
          zIndex: 99999,
          maxWidth: 640,
          maxHeight: '85vh',
          overflowY: 'auto',
          borderBottom: 'none',
          borderRadius: '16px 16px 0 0',
          boxShadow: '0 -10px 34px rgba(15,51,25,.28)',
          transform: aberto ? 'translateY(0)' : 'translateY(100%)',
          visibility: aberto ? 'visible' : 'hidden',
          transition: 'transform .22s ease, visibility .22s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, font: "700 15px/1.3 'Poppins',sans-serif", color: 'var(--text)' }}>
            <span style={{ color: '#1C5C31', display: 'flex' }}><IconeFunil tamanho={18} /></span>Filtros
          </span>
          <button
            type="button"
            aria-label="Fechar"
            onClick={onFechar}
            style={{ flexShrink: 0, background: 'transparent', border: '1px solid var(--border)', borderRadius: 6, padding: '5px 10px', cursor: 'pointer', font: "13px/1 'Poppins',sans-serif", color: 'var(--text2)' }}
          >✕</button>
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          {children}
          <div style={{ display: 'flex', gap: 6 }}>
            <button type="button" className="btn btn-md btn-ghost" style={{ flex: 1, justifyContent: 'center' }} onClick={onLimpar}>Limpar</button>
            <button type="button" className="btn btn-md btn-v" style={{ flex: 1, justifyContent: 'center' }} onClick={onFechar}>🔍 Filtrar</button>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}
