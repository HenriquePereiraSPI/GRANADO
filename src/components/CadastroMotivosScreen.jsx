import { useState } from 'react';
import { CATEGORIAS, FACILITIES, MOTIVOS, TIPOS } from '../data/cadastro-motivos.js';
import { AcoesLinha, BarraFiltros, Campo, contemBusca, ESTILO_TRAVADO, ExcluirPopup, FiltrosSheet, fmtData, normalizar, Paginacao, useFecharComEsc, usePaginacao } from './CadastroComum.jsx';

/**
 * Tela: Cadastros > Cadastro Motivos
 * ----------------------------------
 * Lista os motivos (ReasonCodes) existentes; cria e edita via popup e exclui
 * com confirmacao. Mock: ainda nao ha API de escrita; veja src/data/cadastro-motivos.js.
 */

const FORM_VAZIO = { ReasonCode: '', ReasonCodeDesc: '', Categoria: '', ReasonType: '', Facility: '', Active: true };
const FILTROS_VAZIOS = { motivo: '', descricao: '', categoria: '', tipo: '', area: '' };

function validar(form, editando) {
  const erros = {};
  if (!form.ReasonCode.trim()) erros.ReasonCode = 'Informe o motivo.';
  else if (!editando && MOTIVOS.some((m) => normalizar(m.ReasonCode) === normalizar(form.ReasonCode))) {
    erros.ReasonCode = 'Já existe um motivo com esse nome.';
  }
  if (!form.ReasonCodeDesc.trim()) erros.ReasonCodeDesc = 'Informe a descrição.';
  if (!form.Categoria) erros.Categoria = 'Selecione a categoria.';
  if (!form.ReasonType) erros.ReasonType = 'Selecione o tipo.';
  if (!form.Facility) erros.Facility = 'Selecione a área.';
  return erros;
}

// Popup de criacao e edicao. Sem `motivo` cria; com `motivo` edita (nome travado,
// pois o ReasonCode e o identificador gravado nos apontamentos).
function MotivoPopup({ motivo, onCancel, onSave }) {
  const editando = !!motivo;
  const titulo = editando ? 'Editar motivo' : 'Novo motivo';
  const [form, setForm] = useState(() => ({ ...FORM_VAZIO, ...motivo }));
  const [erros, setErros] = useState({});

  useFecharComEsc(onCancel);

  const set = (campo) => (e) => {
    setForm((f) => ({ ...f, [campo]: e.target.value }));
    setErros((er) => ({ ...er, [campo]: undefined }));
  };

  const salvar = (e) => {
    e.preventDefault();
    const encontrados = validar(form, editando);
    setErros(encontrados);
    if (Object.keys(encontrados).length === 0) onSave(form);
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
        <div className="modal-sub">
          {editando ? 'O nome do motivo não pode ser alterado. Os demais campos são obrigatórios. As datas são preenchidas automaticamente.' : 'Todos os campos são obrigatórios. As datas são preenchidas automaticamente.'}
        </div>

        <div className="form-row">
          <Campo label="Motivo" erro={erros.ReasonCode}>
            <input
              className="inp"
              autoFocus={!editando}
              disabled={editando}
              maxLength={50}
              value={form.ReasonCode}
              onChange={set('ReasonCode')}
              style={editando ? ESTILO_TRAVADO : undefined}
            />
          </Campo>
        </div>
        <div className="form-row">
          <Campo label="Descrição" erro={erros.ReasonCodeDesc}>
            <input className="inp" autoFocus={editando} maxLength={120} value={form.ReasonCodeDesc} onChange={set('ReasonCodeDesc')} />
          </Campo>
        </div>
        <div className="form-row" style={{ flexWrap: 'wrap' }}>
          <Campo label="Categoria" erro={erros.Categoria}>
            <select className="sel" value={form.Categoria} onChange={set('Categoria')}>
              <option value="">Selecione</option>
              {CATEGORIAS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </Campo>
          <Campo label="Tipo" erro={erros.ReasonType}>
            <select className="sel" value={form.ReasonType} onChange={set('ReasonType')}>
              <option value="">Selecione</option>
              {Object.entries(TIPOS).map(([id, t]) => <option key={id} value={id}>{t.label}</option>)}
            </select>
          </Campo>
          <Campo label="Área" erro={erros.Facility}>
            <select className="sel" value={form.Facility} onChange={set('Facility')}>
              <option value="">Selecione</option>
              {FACILITIES.map((f) => <option key={f}>{f}</option>)}
            </select>
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

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 20 }}>
          <button type="button" className="btn btn-md btn-ghost" onClick={onCancel}>Cancelar</button>
          <button type="submit" className="btn btn-md btn-v">{editando ? 'Salvar' : 'Cadastrar'}</button>
        </div>
      </form>
    </div>
  );
}

export default function CadastroMotivosScreen() {
  const [motivos, setMotivos] = useState(MOTIVOS);
  // null = fechado; {} = novo; { motivo } = editar.
  const [popup, setPopup] = useState(null);
  const [excluindo, setExcluindo] = useState(null);
  const [ultimoCriado, setUltimoCriado] = useState(null);
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);
  const [filtros, setFiltros] = useState(FILTROS_VAZIOS);
  const [busca, setBusca] = useState('');

  const setFiltro = (campo) => (e) => setFiltros((f) => ({ ...f, [campo]: e.target.value }));
  const filtroAtivo = Object.values(filtros).some((v) => v.trim());
  const filtrando = filtroAtivo || !!busca.trim();
  const visiveis = motivos.filter((m) => (
    normalizar(m.ReasonCode).includes(normalizar(filtros.motivo))
    && normalizar(m.ReasonCodeDesc).includes(normalizar(filtros.descricao))
    && (!filtros.categoria || m.Categoria === filtros.categoria)
    && (!filtros.tipo || m.ReasonType === filtros.tipo)
    && (!filtros.area || m.Facility === filtros.area)
    && contemBusca([
      m.ReasonCode, m.ReasonCodeDesc, m.Categoria, TIPOS[m.ReasonType]?.label, m.Facility, m.Active ? 'Sim' : 'Não',
      fmtData(m.CreatedOn), fmtData(m.ModifiedOn),
    ], busca)
  ));
  const pag = usePaginacao(visiveis, JSON.stringify([filtros, busca]));

  const salvar = (form) => {
    const agora = new Date().toISOString();
    const dados = {
      ReasonCode: form.ReasonCode.trim(),
      Code: form.Code || '',
      ReasonCodeDesc: form.ReasonCodeDesc.trim(),
      Categoria: form.Categoria,
      ReasonType: form.ReasonType,
      TipoDesc: TIPOS[form.ReasonType].desc,
      Facility: form.Facility,
      Active: form.Active,
      CreatedOn: form.CreatedOn || agora,
      ModifiedOn: agora,
    };
    if (popup.motivo) {
      MOTIVOS[MOTIVOS.indexOf(popup.motivo)] = dados;
    } else {
      MOTIVOS.unshift(dados);
      setUltimoCriado(dados.ReasonCode);
      pag.setPagina(0);
    }
    setMotivos([...MOTIVOS]);
    setPopup(null);
  };

  const excluir = () => {
    MOTIVOS.splice(MOTIVOS.indexOf(excluindo), 1);
    setMotivos([...MOTIVOS]);
    setExcluindo(null);
  };

  return (
    <div className="screen active" style={{ display: 'block' }}>
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Cadastros</div>
          <div className="ph-title">Cadastro Motivos</div>
        </div>
        <div className="ph-actions">
          <button className="btn btn-md btn-v" onClick={() => setPopup({})}>+ Novo motivo</button>
        </div>
      </div>

      <div className="card cv mb14">
        <div className="card-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <span>Motivos cadastrados · {filtrando ? `${visiveis.length} de ${motivos.length}` : motivos.length}</span>
          <BarraFiltros busca={busca} onBusca={setBusca} filtrosAbertos={filtrosAbertos} filtroAtivo={filtroAtivo} onAbrirFiltros={() => setFiltrosAbertos(true)} />
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl tbl-fina" style={{ minWidth: 1180 }}>
            <thead>
              <tr>
                <th>Motivo</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Tipo</th>
                <th>Área</th>
                <th>Ativo</th>
                <th>Data Criação</th>
                <th>Data Modificação</th>
                <th style={{ textAlign: 'right' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {visiveis.length === 0 && (
                <tr>
                  <td colSpan={9} style={{ textAlign: 'center', color: 'var(--text3)' }}>Nenhum motivo encontrado.</td>
                </tr>
              )}
              {pag.itens.map((m) => {
                const tipo = TIPOS[m.ReasonType];
                return (
                  <tr key={m.ReasonCode}>
                    <td style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
                      {m.ReasonCode}
                      {m.ReasonCode === ultimoCriado && <span className="bdg bdg-ok" style={{ marginLeft: 8 }}>Novo</span>}
                    </td>
                    <td>{m.ReasonCodeDesc}</td>
                    <td>{m.Categoria || '—'}</td>
                    <td>{tipo ? <span className={`bdg ${tipo.badge}`}>{tipo.label}</span> : '—'}</td>
                    <td>{m.Facility || '—'}</td>
                    <td><span className={`bdg ${m.Active ? 'bdg-ok' : 'bdg-ney'}`}>{m.Active ? 'Sim' : 'Não'}</span></td>
                    <td style={{ whiteSpace: 'nowrap' }}>{fmtData(m.CreatedOn)}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>{fmtData(m.ModifiedOn)}</td>
                    <AcoesLinha nome={m.ReasonCode} onEditar={() => setPopup({ motivo: m })} onExcluir={() => setExcluindo(m)} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Paginacao pag={pag} />
      </div>

      <FiltrosSheet aberto={filtrosAbertos} onLimpar={() => setFiltros(FILTROS_VAZIOS)} onFechar={() => setFiltrosAbertos(false)}>
        <Campo label="Motivo">
          <input className="inp" placeholder="Nome do motivo" value={filtros.motivo} onChange={setFiltro('motivo')} />
        </Campo>
        <Campo label="Descrição">
          <input className="inp" placeholder="Descrição do motivo" value={filtros.descricao} onChange={setFiltro('descricao')} />
        </Campo>
        <Campo label="Categoria">
          <select className="sel" value={filtros.categoria} onChange={setFiltro('categoria')}>
            <option value="">Todas</option>
            {CATEGORIAS.map((c) => <option key={c}>{c}</option>)}
          </select>
        </Campo>
        <Campo label="Tipo">
          <select className="sel" value={filtros.tipo} onChange={setFiltro('tipo')}>
            <option value="">Todos</option>
            {Object.entries(TIPOS).map(([id, t]) => <option key={id} value={id}>{t.label}</option>)}
          </select>
        </Campo>
        <Campo label="Área">
          <select className="sel" value={filtros.area} onChange={setFiltro('area')}>
            <option value="">Todas</option>
            {FACILITIES.map((f) => <option key={f}>{f}</option>)}
          </select>
        </Campo>
      </FiltrosSheet>
      {popup && <MotivoPopup motivo={popup.motivo} onCancel={() => setPopup(null)} onSave={salvar} />}
      {excluindo && <ExcluirPopup entidade="motivo" nome={excluindo.ReasonCode} onCancel={() => setExcluindo(null)} onConfirm={excluir} />}
    </div>
  );
}
