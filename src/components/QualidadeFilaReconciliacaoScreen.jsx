import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LOTES_FILA,
  STATUS_PROC_COLOR,
  STATUS_PROC_LABEL,
} from '../data/lotes-fila-reconciliacao.js';

/**
 * Tela: Qualidade > Fila de Reconciliacoes Pendentes
 * --------------------------------------------------
 * Lista todos os lotes na fila do CQ, espelhando o grid JDE F4108-Z
 * (Lot Master Workfile). Lotes com status "10 — Pronto" sao clicaveis
 * e abrem direto a Reconciliacao Tecnica (/qual-reconciliacao?lote=).
 * Lotes em status 20/30 ficam visiveis pra acompanhamento, mas nao
 * permitem abertura ate a etapa anterior terminar.
 *
 * Inclui: KPIs no topo, filtros por status / processo / tipo / busca,
 * grid horizontal-scroll e rodape com legenda.
 */

/* ─────────────────────────────────────────────────────────────
   Helpers de UI
───────────────────────────────────────────────────────────── */

function StatusProcPill({ codigo, descricao }) {
  const c = STATUS_PROC_COLOR[codigo] || STATUS_PROC_COLOR['20'];
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '3px 9px', borderRadius: 12,
        fontSize: 10, fontWeight: 800, letterSpacing: '.04em',
        background: c.bg, color: c.fg, border: `1px solid ${c.bd}`,
        whiteSpace: 'nowrap',
      }}
      title={descricao}
    >
      <span style={{ fontFamily: 'var(--font-m)', fontWeight: 900 }}>{codigo}</span>
      <span style={{ opacity: .85 }}>{descricao}</span>
    </span>
  );
}

function KpiCard({ label, valor, cor, icone, hint }) {
  return (
    <div
      className="card"
      style={{
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        borderTop: `3px solid ${cor}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>{icone}</span>
        <span style={{
          fontSize: 9, fontWeight: 900, letterSpacing: '.14em',
          textTransform: 'uppercase', color: 'var(--text3)',
        }}>
          {label}
        </span>
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, color: cor, fontFamily: 'var(--font-m)', lineHeight: 1.1 }}>
        {valor}
      </div>
      {hint && (
        <div style={{ fontSize: 10, color: 'var(--text3)' }}>{hint}</div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tela principal
───────────────────────────────────────────────────────────── */

export default function QualidadeFilaReconciliacaoScreen() {
  const navigate = useNavigate();
  const [filtroStatus, setFiltroStatus] = useState('todos');
  const [filtroProcesso, setFiltroProcesso] = useState('todos');
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [busca, setBusca] = useState('');
  const [aviso, setAviso] = useState('');
  const [info, setInfo] = useState('');

  // Listas unicas pra filtros (dropdowns).
  const processosUnicos = useMemo(
    () => [...new Set(LOTES_FILA.map((i) => i.processo))],
    []
  );
  const tiposUnicos = useMemo(
    () => [...new Set(LOTES_FILA.map((i) => i.tipoRelato))],
    []
  );

  // Itens apos filtragem.
  const itensFiltrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return LOTES_FILA.filter((item) => {
      if (filtroStatus !== 'todos' && item.statusProcesso !== filtroStatus) return false;
      if (filtroProcesso !== 'todos' && item.processo !== filtroProcesso) return false;
      if (filtroTipo !== 'todos' && item.tipoRelato !== filtroTipo) return false;
      if (q) {
        const hay = `${item.lotePA} ${item.produto} ${item.wo} ${item.descStatus}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [filtroStatus, filtroProcesso, filtroTipo, busca]);

  // KPIs (calculados sobre o conjunto total — nao filtrado).
  const stats = useMemo(() => {
    const total = LOTES_FILA.length;
    const prontos = LOTES_FILA.filter((i) => i.statusProcesso === '10').length;
    const emCurso = LOTES_FILA.filter((i) => i.statusProcesso === '20').length;
    const aguardando = LOTES_FILA.filter((i) => i.statusProcesso === '30').length;
    return { total, prontos, emCurso, aguardando };
  }, []);

  const limparFiltros = () => {
    setFiltroStatus('todos');
    setFiltroProcesso('todos');
    setFiltroTipo('todos');
    setBusca('');
    setAviso('');
    setInfo('');
  };

  const abrirReconciliacao = (item) => {
    if (item.statusProcesso !== '10') {
      setAviso(
        `Lote PA ${item.lotePA} ainda em processo: ${item.descStatus}. ` +
        'Aguarde a conclusão da etapa anterior para iniciar a Reconciliação.'
      );
      setInfo('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(`/qual-reconciliacao?lote=${item.lotePA}`);
  };

  const atualizarMock = () => {
    setInfo(`↻ Fila atualizada via JDE em ${new Date().toLocaleString('pt-BR')}.`);
    setAviso('');
  };
  const exportarMock = () => {
    setInfo(`📥 Exportação CSV (${itensFiltrados.length} registros) iniciada — pronto para download.`);
    setAviso('');
  };

  const filtroAtivo =
    filtroStatus !== 'todos' || filtroProcesso !== 'todos' || filtroTipo !== 'todos' || busca.trim() !== '';

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Qualidade · CQ · ERU 6.1.x — Fila JDE F4108-Z</div>
          <div className="ph-title">Fila de Reconciliações Pendentes</div>
        </div>
        <div className="ph-actions" style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-sm btn-ghost" onClick={atualizarMock} title="Atualizar fila via JDE">
            ↻ Atualizar
          </button>
          <button className="btn btn-sm btn-ghost" onClick={exportarMock} title="Exportar lista filtrada">
            📥 Exportar
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12, marginBottom: 14,
        }}
      >
        <KpiCard label="Total na Fila"      valor={stats.total}      cor="var(--text)" icone="📋" hint="Lotes na fila do CQ" />
        <KpiCard label="Prontos para CQ"    valor={stats.prontos}    cor="var(--ok)"   icone="✅" hint="Status 10 — clicáveis"  />
        <KpiCard label="Em Curso"           valor={stats.emCurso}    cor="var(--inf)"  icone="🏭" hint="Fab / Emb / Pesagem"   />
        <KpiCard label="Aguardando LIMS"    valor={stats.aguardando} cor="var(--alr)"  icone="⏳" hint="Físico-Q. / Microbio." />
      </div>

      {/* Avisos */}
      {aviso && (
        <div className="abox warn mb14">
          <span className="ai">⚠</span>
          <div>{aviso}</div>
        </div>
      )}
      {info && (
        <div className="abox info mb14">
          <span className="ai">ℹ️</span>
          <div>{info}</div>
        </div>
      )}

      {/* Filtros */}
      <div
        className="card mb14"
        style={{
          padding: 14,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12,
          alignItems: 'flex-end',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Status do Processo</label>
          <select
            className="sel"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
            style={{ fontSize: 12, padding: '7px 10px' }}
          >
            <option value="todos">Todos</option>
            <option value="10">10 — Pronto</option>
            <option value="20">20 — Em Curso</option>
            <option value="30">30 — Aguardando</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Processo</label>
          <select
            className="sel"
            value={filtroProcesso}
            onChange={(e) => setFiltroProcesso(e.target.value)}
            style={{ fontSize: 12, padding: '7px 10px' }}
          >
            <option value="todos">Todos</option>
            {processosUnicos.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Tipo de Relato</label>
          <select
            className="sel"
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
            style={{ fontSize: 12, padding: '7px 10px' }}
          >
            <option value="todos">Todos</option>
            {tiposUnicos.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="lbl">Buscar (Lote / Produto / WO)</label>
          <input
            className="inp"
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Ex.: 262417, Verbena, 784426…"
            style={{ fontSize: 12, padding: '7px 10px', fontFamily: 'var(--font-m)' }}
          />
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <button
            className="btn btn-md btn-ghost"
            onClick={limparFiltros}
            disabled={!filtroAtivo}
            style={{ opacity: filtroAtivo ? 1 : 0.5 }}
          >
            ✕ Limpar Filtros
          </button>
        </div>
      </div>

      {/* Tabela JDE-grid */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Barra de info estilo JDE — "Registros 1 - N" */}
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '6px 14px',
            background: 'var(--surface2)',
            borderBottom: '1px solid var(--border)',
            fontSize: 11, color: 'var(--text3)', fontFamily: 'var(--font-m)',
          }}
        >
          <span>
            Registros 1 - {itensFiltrados.length}
            {filtroAtivo && (
              <span style={{ color: 'var(--inf)', marginLeft: 8 }}>
                (filtrado de {LOTES_FILA.length})
              </span>
            )}
          </span>
          <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span title="Exportar (mock)" style={{ cursor: 'pointer' }} onClick={exportarMock}>🡑</span>
            <span title="Filtros ativos"  style={{ cursor: 'pointer' }}>⚙</span>
            <span title="Atualizar (mock)" style={{ cursor: 'pointer' }} onClick={atualizarMock}>↻</span>
          </span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="tbl" style={{ minWidth: 1200 }}>
            <thead>
              <tr>
                <th style={{ width: 32, textAlign: 'center' }}>
                  <input type="checkbox" disabled style={{ cursor: 'not-allowed' }} />
                </th>
                <th style={{ width: 38, textAlign: 'center' }}>🔍</th>
                <th>Nº<br />Linha</th>
                <th>Tipo de <span style={{ color: 'var(--per)' }}>★</span><br />Relato</th>
                <th>Descrição<br />Relato</th>
                <th>Processo <span style={{ color: 'var(--per)' }}>★</span></th>
                <th>Descrição<br />Processo</th>
                <th>Status do <span style={{ color: 'var(--per)' }}>★</span><br />Processo</th>
                <th>Descrição<br />Status</th>
                <th>Lote<br />PA</th>
                <th>Produto</th>
                <th>Ordem<br />(WO)</th>
                <th>Última<br />Atualização</th>
              </tr>
            </thead>
            <tbody>
              {itensFiltrados.length === 0 && (
                <tr>
                  <td colSpan={13} style={{ textAlign: 'center', padding: 32, color: 'var(--text3)' }}>
                    <div style={{ fontSize: 24, marginBottom: 6 }}>🔍</div>
                    Nenhum lote corresponde aos filtros aplicados.
                    <div style={{ fontSize: 11, marginTop: 4 }}>
                      Tente <button onClick={limparFiltros} style={{ background: 'none', border: 'none', color: 'var(--verde)', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', fontSize: 11 }}>limpar os filtros</button>.
                    </div>
                  </td>
                </tr>
              )}

              {itensFiltrados.map((item) => {
                const ehPronto = item.statusProcesso === '10';
                return (
                  <tr
                    key={item.linha}
                    onClick={() => abrirReconciliacao(item)}
                    style={{
                      cursor: ehPronto ? 'pointer' : 'not-allowed',
                      background: ehPronto ? 'transparent' : 'var(--surface2)',
                      opacity: ehPronto ? 1 : 0.78,
                    }}
                    title={
                      ehPronto
                        ? `Clique para abrir a Reconciliação do Lote PA ${item.lotePA}`
                        : `Lote ${item.lotePA} ainda em processo: ${item.descStatus}`
                    }
                  >
                    <td style={{ textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        readOnly
                        disabled={!ehPronto}
                        style={{ cursor: ehPronto ? 'pointer' : 'not-allowed' }}
                      />
                    </td>
                    <td style={{ textAlign: 'center', fontSize: 14 }}>
                      {ehPronto ? (
                        <span title="Abrir reconciliação" style={{ color: 'var(--verde)' }}>▶</span>
                      ) : (
                        <span title="Em processo" style={{ color: 'var(--text3)' }}>⏳</span>
                      )}
                    </td>
                    <td className="mono">{String(item.linha).padStart(2, '0')}</td>
                    <td className="mono"><strong>{item.tipoRelato}</strong></td>
                    <td>{item.descRelato}</td>
                    <td className="mono"><strong>{item.processo}</strong></td>
                    <td>{item.descProcesso}</td>
                    <td>
                      <StatusProcPill
                        codigo={item.statusProcesso}
                        descricao={STATUS_PROC_LABEL[item.statusProcesso] || item.descStatus}
                      />
                    </td>
                    <td>{item.descStatus}</td>
                    <td className="mono" style={{ color: ehPronto ? 'var(--verde)' : 'var(--text)', fontWeight: 800 }}>
                      {item.lotePA}
                    </td>
                    <td style={{ fontSize: 12 }}>{item.produto}</td>
                    <td className="mono">{item.wo}</td>
                    <td className="mono" style={{ fontSize: 11, color: 'var(--text3)' }}>{item.dataAtualizacao}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Rodape com legenda */}
        <div
          style={{
            padding: '8px 14px',
            background: 'var(--bg)',
            borderTop: '1px solid var(--border)',
            fontSize: 10, color: 'var(--text3)',
            display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center',
          }}
        >
          <span>
            <strong style={{ color: 'var(--ok)' }}>10</strong> Pronto · clique para abrir &nbsp;|&nbsp;
            <strong style={{ color: 'var(--inf)' }}>20</strong> Em curso (Fab/Emb/Pesa) &nbsp;|&nbsp;
            <strong style={{ color: 'var(--alr)' }}>30</strong> Aguardando análise (LIMS/Micro)
          </span>
          <span style={{ marginLeft: 'auto' }}>★ campo obrigatório</span>
        </div>
      </div>
    </div>
  );
}
