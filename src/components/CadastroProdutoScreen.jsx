import { useState } from 'react';
import { PRODUTOS } from '../data/cadastro-produtos.js';
import { AcoesLinha, BarraFiltros, Campo, contemBusca, ESTILO_TRAVADO, ExcluirPopup, FiltrosSheet, fmtData, normalizar, Paginacao, useFecharComEsc, usePaginacao } from './CadastroComum.jsx';

/**
 * Tela: Cadastros > Cadastro Produto
 * ----------------------------------
 * Lista os produtos existentes; edita o tempo de ciclo via popup e exclui com
 * confirmacao. Mock: ainda nao ha API de produto; veja src/data/cadastro-produtos.js.
 */

const FILTROS_VAZIOS = { produto: '', descricao: '', data: '' };

// Dia no fuso local (yyyy-MM-dd, formato do input date), o mesmo que a tabela exibe.
const diaLocal = (iso) => new Date(iso).toLocaleDateString('en-CA');

const fmtPreco = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Popup de edicao: so o tempo de ciclo pode mudar; os demais campos so identificam o produto.
function ProdutoPopup({ produto, onCancel, onSave }) {
  const titulo = 'Editar produto';
  const [tempoCiclo, setTempoCiclo] = useState(produto.CycleTimeSeconds);
  const [erro, setErro] = useState('');

  useFecharComEsc(onCancel);

  const salvar = (e) => {
    e.preventDefault();
    const valor = Number(tempoCiclo);
    if (Number.isInteger(valor) && valor > 0) onSave(valor);
    else setErro('Informe um número inteiro maior que zero.');
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
        <div style={{ marginBottom: 14, fontSize: 11, color: 'var(--text2)' }}>
          Apenas o Tempo de Ciclo pode ser alterado.
        </div>

        <div className="form-row">
          <Campo label="Código">
            <input className="inp" disabled value={produto.ProductNo} style={ESTILO_TRAVADO} />
          </Campo>
        </div>
        <div className="form-row">
          <Campo label="Descrição">
            <input className="inp" disabled value={produto.ProductDescription} style={ESTILO_TRAVADO} />
          </Campo>
        </div>
        <div className="form-row" style={{ flexWrap: 'wrap' }}>
          <Campo label="Unidade">
            <input className="inp" disabled value={produto.UOMCode} style={ESTILO_TRAVADO} />
          </Campo>
          <Campo label="Preço">
            <input className="inp" disabled value={fmtPreco(produto.Price)} style={ESTILO_TRAVADO} />
          </Campo>
          <Campo label="Tempo de Ciclo (seg)" erro={erro}>
            <input
              className="inp"
              autoFocus
              type="number"
              min="1"
              step="1"
              value={tempoCiclo}
              onChange={(e) => {
                setTempoCiclo(e.target.value);
                setErro('');
              }}
            />
          </Campo>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 20 }}>
          <button type="button" className="btn btn-md btn-ghost" onClick={onCancel}>Cancelar</button>
          <button type="submit" className="btn btn-md btn-v">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default function CadastroProdutoScreen() {
  const [produtos, setProdutos] = useState(PRODUTOS);
  const [editando, setEditando] = useState(null);
  const [excluindo, setExcluindo] = useState(null);
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
      p.ProductNo, p.ProductDescription, p.UOMCode, p.CycleTimeSeconds, fmtPreco(p.Price), p.Active ? 'Sim' : 'Não',
      p.CreatedBy, fmtData(p.CreatedOn), fmtData(p.ModifiedOn),
    ], busca)
  ));
  const pag = usePaginacao(visiveis, JSON.stringify([filtros, busca]));

  const salvar = (CycleTimeSeconds) => {
    PRODUTOS[PRODUTOS.indexOf(editando)] = { ...editando, CycleTimeSeconds, ModifiedOn: new Date().toISOString() };
    setProdutos([...PRODUTOS]);
    setEditando(null);
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
      </div>

      <div className="card cv mb14">
        <div className="card-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <span>Produtos cadastrados · {filtrando ? `${visiveis.length} de ${produtos.length}` : produtos.length}</span>
          <BarraFiltros busca={busca} onBusca={setBusca} filtrosAbertos={filtrosAbertos} filtroAtivo={filtroAtivo} onAbrirFiltros={() => setFiltrosAbertos(true)} />
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl tbl-fina" style={{ minWidth: 1240 }}>
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Unidade</th>
                <th style={{ textAlign: 'right' }}>Tempo de Ciclo (seg)</th>
                <th style={{ textAlign: 'right' }}>Preço</th>
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
                  <td colSpan={10} style={{ textAlign: 'center', color: 'var(--text3)' }}>Nenhum produto encontrado.</td>
                </tr>
              )}
              {pag.itens.map((p) => (
                <tr key={p.ProductNo}>
                  <td style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>{p.ProductNo}</td>
                  <td>{p.ProductDescription}</td>
                  <td>{p.UOMCode}</td>
                  <td style={{ textAlign: 'right' }}>{p.CycleTimeSeconds}</td>
                  <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>{fmtPreco(p.Price)}</td>
                  <td><span className={`bdg ${p.Active ? 'bdg-ok' : 'bdg-ney'}`}>{p.Active ? 'Sim' : 'Não'}</span></td>
                  <td style={{ whiteSpace: 'nowrap' }}>{p.CreatedBy}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{fmtData(p.CreatedOn)}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{fmtData(p.ModifiedOn)}</td>
                  <AcoesLinha nome={p.ProductNo} onEditar={() => setEditando(p)} onExcluir={() => setExcluindo(p)} />
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
      {editando && <ProdutoPopup produto={editando} onCancel={() => setEditando(null)} onSave={salvar} />}
      {excluindo && <ExcluirPopup entidade="produto" nome={excluindo.ProductNo} onCancel={() => setExcluindo(null)} onConfirm={excluir} />}
    </div>
  );
}
