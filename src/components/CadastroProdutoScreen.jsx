import { useState } from 'react';
import { PRODUTOS, UNIDADES } from '../data/cadastro-produtos.js';
import { AcoesLinha, BarraFiltros, Campo, contemBusca, ESTILO_TRAVADO, ExcluirPopup, FiltrosSheet, fmtData, normalizar, Paginacao, useFecharComEsc, usePaginacao } from './CadastroComum.jsx';
import { USER } from './Topbar.jsx';

/**
 * Tela: Cadastros > Cadastro Produto
 * ----------------------------------
 * Lista os produtos existentes; cria e edita via popup e exclui com
 * confirmacao. Mock: ainda nao ha API de produto; veja src/data/cadastro-produtos.js.
 */

const FORM_VAZIO = { ProductNo: '', ProductDescription: '', UOMCode: '', CycleTimeSeconds: '', Active: true, uomConversions: [] };
const CONVERSAO_VAZIA = { UOMFrom: '', UOMTo: '', Factor: '' };
const ABAS = [
  { id: 'principal', label: 'Principal' },
  { id: 'uom', label: 'Conversões UOM' },
  { id: 'caracteristicas', label: 'Características', bloqueada: true },
];
const FILTROS_VAZIOS = { produto: '', descricao: '', data: '' };

// Dia no fuso local (yyyy-MM-dd, formato do input date), o mesmo que a tabela exibe.
const TH_FIXO = { position: 'sticky', top: 0 };

const diaLocal = (iso) => new Date(iso).toLocaleDateString('en-CA');

function validar(form, editando) {
  const erros = {};
  if (!form.ProductNo.trim()) erros.ProductNo = 'Informe o código.';
  else if (!editando && PRODUTOS.some((p) => normalizar(p.ProductNo) === normalizar(form.ProductNo))) {
    erros.ProductNo = 'Já existe um produto com esse código.';
  }
  if (!form.ProductDescription.trim()) erros.ProductDescription = 'Informe a descrição.';
  if (!form.UOMCode) erros.UOMCode = 'Selecione a unidade.';
  if (!(Number.isInteger(Number(form.CycleTimeSeconds)) && Number(form.CycleTimeSeconds) > 0)) {
    erros.CycleTimeSeconds = 'Informe um número inteiro maior que zero.';
  }
  return erros;
}

function validarConversao(c, conversoes) {
  if (!c.UOMFrom) return 'Selecione a UN de origem.';
  if (!c.UOMTo) return 'Selecione a UN de destino.';
  if (c.UOMFrom === c.UOMTo) return 'A UN de origem e a de destino devem ser diferentes.';
  if (!(Number(c.Factor) > 0)) return 'Informe um fator de conversão maior que zero.';
  if (conversoes.some((u) => u.UOMFrom === c.UOMFrom && u.UOMTo === c.UOMTo)) return 'Já existe uma conversão dessa origem para esse destino.';
  return '';
}

function IconeCadeado() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function AbasProduto({ aba, onTrocar }) {
  return (
    <div role="tablist" style={{ display: 'flex', overflowX: 'auto', margin: '12px 0 16px', borderBottom: '2px solid var(--border)' }}>
      {ABAS.map((a) => {
        const ativa = aba === a.id;
        return (
          <button
            key={a.id}
            type="button"
            role="tab"
            aria-selected={ativa}
            disabled={a.bloqueada}
            title={a.bloqueada ? `${a.label}: bloqueada` : undefined}
            onClick={() => onTrocar(a.id)}
            style={{
              background: ativa ? 'var(--surface)' : 'transparent',
              border: 'none',
              borderBottom: ativa ? '3px solid var(--verde)' : '3px solid transparent',
              marginBottom: -2,
              padding: '10px 14px',
              fontSize: 13,
              fontWeight: ativa ? 800 : 600,
              color: a.bloqueada ? 'var(--text3)' : (ativa ? 'var(--verde)' : 'var(--text2)'),
              cursor: a.bloqueada ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {a.label}
            {a.bloqueada && <IconeCadeado />}
          </button>
        );
      })}
    </div>
  );
}

function AbaConversoes({ conversoes, onChange, rascunho, onRascunho, erro, onErro }) {
  const set = (campo) => (e) => {
    onRascunho({ ...rascunho, [campo]: e.target.value });
    onErro('');
  };

  const adicionar = () => {
    const encontrado = validarConversao(rascunho, conversoes);
    onErro(encontrado);
    if (encontrado) return;
    onChange([...conversoes, { UOMFrom: rascunho.UOMFrom, UOMTo: rascunho.UOMTo, Factor: Number(rascunho.Factor) }]);
    onRascunho(CONVERSAO_VAZIA);
  };

  // Enter aqui adiciona a conversao, em vez de enviar o formulario do produto.
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      adicionar();
    }
  };

  const opcoes = (
    <>
      <option value="">Selecione</option>
      {UNIDADES.map((u) => <option key={u}>{u}</option>)}
    </>
  );

  return (
    <div role="tabpanel">
      <div className="form-row" style={{ flexWrap: 'wrap', alignItems: 'flex-end', marginBottom: erro ? 4 : 14 }} onKeyDown={onKeyDown}>
        <Campo label="UN Origem" flex="1 1 110px">
          <select className="sel" value={rascunho.UOMFrom} onChange={set('UOMFrom')}>{opcoes}</select>
        </Campo>
        <Campo label="UN Destino" flex="1 1 110px">
          <select className="sel" value={rascunho.UOMTo} onChange={set('UOMTo')}>{opcoes}</select>
        </Campo>
        <Campo label="Fator Conversão" flex="1 1 110px">
          <input className="inp" type="number" min="0" step="any" value={rascunho.Factor} onChange={set('Factor')} />
        </Campo>
        <button type="button" className="btn btn-md btn-v" style={{ flexShrink: 0 }} onClick={adicionar}>+ Adicionar</button>
      </div>
      {erro && <div role="alert" style={{ marginBottom: 14, fontSize: 11, color: 'var(--per)' }}>{erro}</div>}

      <div style={{ maxHeight: 220, overflowY: 'auto', border: '1px solid var(--border)', borderRadius: 6 }}>
        <table className="tbl tbl-fina">
          <thead>
            <tr>
              <th style={TH_FIXO}>UN Origem</th>
              <th style={TH_FIXO}>UN Destino</th>
              <th style={{ ...TH_FIXO, textAlign: 'right' }}>Fator Conversão</th>
              <th style={TH_FIXO} aria-label="Ações" />
            </tr>
          </thead>
          <tbody>
            {conversoes.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', color: 'var(--text3)' }}>Nenhuma conversão cadastrada.</td>
              </tr>
            )}
            {conversoes.map((c) => (
              <tr key={`${c.UOMFrom}-${c.UOMTo}`}>
                <td>{c.UOMFrom}</td>
                <td>{c.UOMTo}</td>
                <td style={{ textAlign: 'right' }}>{c.Factor.toLocaleString('pt-BR', { maximumFractionDigits: 6 })}</td>
                <AcoesLinha nome={`${c.UOMFrom} para ${c.UOMTo}`} onExcluir={() => onChange(conversoes.filter((u) => u !== c))} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Popup de criacao e edicao. Sem `produto` cria; com `produto` edita (codigo
// travado, pois o ProductNo identifica o produto nas ordens e etiquetas).
function ProdutoPopup({ produto, onCancel, onSave }) {
  const editando = !!produto;
  const titulo = editando ? 'Editar produto' : 'Novo produto';
  const [form, setForm] = useState(() => ({ ...FORM_VAZIO, ...produto }));
  const [erros, setErros] = useState({});
  const [aba, setAba] = useState('principal');
  const [rascunho, setRascunho] = useState(CONVERSAO_VAZIA);
  const [erroConversao, setErroConversao] = useState('');

  useFecharComEsc(onCancel);

  const set = (campo) => (e) => {
    setForm((f) => ({ ...f, [campo]: e.target.value }));
    setErros((er) => ({ ...er, [campo]: undefined }));
  };

  const salvar = (e) => {
    e.preventDefault();
    const encontrados = validar(form, editando);
    setErros(encontrados);
    // O erro pode estar numa aba escondida: leva o usuario ate ele.
    if (Object.keys(encontrados).length > 0) {
      setAba('principal');
      return;
    }
    if (Object.values(rascunho).some(Boolean)) {
      setAba('uom');
      setErroConversao('Clique em Adicionar para incluir esta conversão ou limpe os campos.');
      return;
    }
    onSave(form);
  };

  return (
    <div className="modal-overlay open">
      <form
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        onSubmit={salvar}
        noValidate
        style={{ minWidth: 0, maxHeight: '90vh', overflowY: 'auto' }}
      >
        <button type="button" className="modal-close" onClick={onCancel} aria-label="Fechar">✕</button>
        <div className="modal-title">{titulo}</div>
        <AbasProduto aba={aba} onTrocar={setAba} />

        {aba === 'uom' && (
          <AbaConversoes
            conversoes={form.uomConversions}
            onChange={(uomConversions) => setForm((f) => ({ ...f, uomConversions }))}
            rascunho={rascunho}
            onRascunho={setRascunho}
            erro={erroConversao}
            onErro={setErroConversao}
          />
        )}

        {aba === 'principal' && (
        <div role="tabpanel">
        <div style={{ marginBottom: 14, fontSize: 11, color: 'var(--text2)' }}>
          {editando ? 'O código do produto não pode ser alterado. Datas e autor são preenchidos automaticamente.' : 'Todos os campos são obrigatórios. Datas e autor são preenchidos automaticamente.'}
        </div>

        <div className="form-row">
          <Campo label="Código" erro={erros.ProductNo}>
            <input
              className="inp"
              autoFocus={!editando}
              disabled={editando}
              maxLength={30}
              value={form.ProductNo}
              onChange={set('ProductNo')}
              style={editando ? ESTILO_TRAVADO : undefined}
            />
          </Campo>
        </div>
        <div className="form-row">
          <Campo label="Descrição" erro={erros.ProductDescription}>
            <input className="inp" autoFocus={editando} maxLength={120} value={form.ProductDescription} onChange={set('ProductDescription')} />
          </Campo>
        </div>
        <div className="form-row" style={{ flexWrap: 'wrap' }}>
          <Campo label="Unidade" erro={erros.UOMCode}>
            <select className="sel" value={form.UOMCode} onChange={set('UOMCode')}>
              <option value="">Selecione</option>
              {UNIDADES.map((u) => <option key={u}>{u}</option>)}
            </select>
          </Campo>
          <Campo label="Tempo de Ciclo (seg)" erro={erros.CycleTimeSeconds}>
            <input className="inp" type="number" min="1" step="1" value={form.CycleTimeSeconds} onChange={set('CycleTimeSeconds')} />
          </Campo>
          <Campo label="Ativo">
            <select
              className="sel"
              value={form.Active ? 'S' : 'N'}
              onChange={(e) => setForm((f) => ({ ...f, Active: e.target.value === 'S' }))}
            >
              <option value="S">Sim</option>
              <option value="N">Não</option>
            </select>
          </Campo>
        </div>
        </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 20 }}>
          <button type="button" className="btn btn-md btn-ghost" onClick={onCancel}>Cancelar</button>
          <button type="submit" className="btn btn-md btn-v">{editando ? 'Salvar' : 'Cadastrar'}</button>
        </div>
      </form>
    </div>
  );
}

export default function CadastroProdutoScreen() {
  const [produtos, setProdutos] = useState(PRODUTOS);
  // null = fechado; {} = novo; { produto } = editar.
  const [popup, setPopup] = useState(null);
  const [excluindo, setExcluindo] = useState(null);
  const [ultimoCriado, setUltimoCriado] = useState(null);
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);
  const [filtros, setFiltros] = useState(FILTROS_VAZIOS);
  const [busca, setBusca] = useState('');

  const setFiltro = (campo) => (e) => setFiltros((f) => ({ ...f, [campo]: e.target.value }));
  const filtroAtivo = Object.values(filtros).some((v) => v.trim());
  const filtrando = filtroAtivo || !!busca.trim();
  const visiveis = produtos.filter((p) => (
    normalizar(p.ProductNo).includes(normalizar(filtros.produto))
    && normalizar(p.ProductDescription).includes(normalizar(filtros.descricao))
    && (!filtros.data || diaLocal(p.CreatedOn) === filtros.data)
    && contemBusca([
      p.ProductNo, p.ProductDescription, p.UOMCode, p.CycleTimeSeconds, p.Active ? 'Sim' : 'Não',
      p.CreatedBy, fmtData(p.CreatedOn), fmtData(p.ModifiedOn),
    ], busca)
  ));
  const pag = usePaginacao(visiveis, JSON.stringify([filtros, busca]));

  const salvar = (form) => {
    const agora = new Date().toISOString();
    const dados = {
      ProductNo: form.ProductNo.trim(),
      ProductDescription: form.ProductDescription.trim(),
      UOMCode: form.UOMCode,
      CycleTimeSeconds: Number(form.CycleTimeSeconds),
      Active: form.Active,
      uomConversions: form.uomConversions,
      CreatedBy: form.CreatedBy || USER.name,
      CreatedOn: form.CreatedOn || agora,
      ModifiedOn: agora,
    };
    if (popup.produto) {
      PRODUTOS[PRODUTOS.indexOf(popup.produto)] = dados;
    } else {
      PRODUTOS.unshift(dados);
      setUltimoCriado(dados.ProductNo);
      pag.setPagina(0);
    }
    setProdutos([...PRODUTOS]);
    setPopup(null);
  };

  const excluir = () => {
    PRODUTOS.splice(PRODUTOS.indexOf(excluindo), 1);
    setProdutos([...PRODUTOS]);
    setExcluindo(null);
  };

  return (
    <div className="screen active" style={{ display: 'block' }}>
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Cadastros</div>
          <div className="ph-title">Cadastro Produto</div>
        </div>
        <div className="ph-actions">
          <button className="btn btn-md btn-v" onClick={() => setPopup({})}>+ Novo produto</button>
        </div>
      </div>

      <div className="card cv mb14">
        <div className="card-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <span>Produtos cadastrados · {filtrando ? `${visiveis.length} de ${produtos.length}` : produtos.length}</span>
          <BarraFiltros busca={busca} onBusca={setBusca} filtrosAbertos={filtrosAbertos} filtroAtivo={filtroAtivo} onAbrirFiltros={() => setFiltrosAbertos(true)} />
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl tbl-fina" style={{ minWidth: 1140 }}>
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Unidade</th>
                <th style={{ textAlign: 'right' }}>Tempo de Ciclo (seg)</th>
                <th>Ativo</th>
                <th>Criado Por</th>
                <th>Data Criação</th>
                <th>Data Modificação</th>
                <th style={{ textAlign: 'right' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {visiveis.length === 0 && (
                <tr>
                  <td colSpan={9} style={{ textAlign: 'center', color: 'var(--text3)' }}>Nenhum produto encontrado.</td>
                </tr>
              )}
              {pag.itens.map((p) => (
                <tr key={p.ProductNo}>
                  <td style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
                    {p.ProductNo}
                    {p.ProductNo === ultimoCriado && <span className="bdg bdg-ok" style={{ marginLeft: 8 }}>Novo</span>}
                  </td>
                  <td>{p.ProductDescription}</td>
                  <td>{p.UOMCode}</td>
                  <td style={{ textAlign: 'right' }}>{p.CycleTimeSeconds}</td>
                  <td><span className={`bdg ${p.Active ? 'bdg-ok' : 'bdg-ney'}`}>{p.Active ? 'Sim' : 'Não'}</span></td>
                  <td style={{ whiteSpace: 'nowrap' }}>{p.CreatedBy}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{fmtData(p.CreatedOn)}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{fmtData(p.ModifiedOn)}</td>
                  <AcoesLinha nome={p.ProductNo} onEditar={() => setPopup({ produto: p })} onExcluir={() => setExcluindo(p)} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Paginacao pag={pag} />
      </div>

      <FiltrosSheet aberto={filtrosAbertos} onLimpar={() => setFiltros(FILTROS_VAZIOS)} onFechar={() => setFiltrosAbertos(false)}>
        <Campo label="Produto">
          <input className="inp" placeholder="Código do produto" value={filtros.produto} onChange={setFiltro('produto')} />
        </Campo>
        <Campo label="Descrição">
          <input className="inp" placeholder="Descrição do produto" value={filtros.descricao} onChange={setFiltro('descricao')} />
        </Campo>
        <Campo label="Data Criação">
          <input className="inp" type="date" value={filtros.data} onChange={setFiltro('data')} />
        </Campo>
      </FiltrosSheet>
      {popup && <ProdutoPopup produto={popup.produto} onCancel={() => setPopup(null)} onSave={salvar} />}
      {excluindo && <ExcluirPopup entidade="produto" nome={excluindo.ProductNo} onCancel={() => setExcluindo(null)} onConfirm={excluir} />}
    </div>
  );
}
