import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LOTES_FILA,
  LOTES_FINALIZADOS,
  CATALOGO_LOTES,
  STATUS_RECONCILIACAO,
  STATUS_ANALISE_COLOR,
  STATUS_LOTE_FINAL_COLOR,
  PRIORIDADE_PCP_COR,
} from '../data/lotes-fila-reconciliacao.js';
import { findDossie } from '../data/dossie-wo-784426.js';

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

function StatusReconcPill({ status }) {
  const c = STATUS_RECONCILIACAO[status] || STATUS_RECONCILIACAO.novo;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '3px 11px', borderRadius: 12,
        fontSize: 10, fontWeight: 800, letterSpacing: '.04em',
        background: c.bg, color: c.fg, border: `1px solid ${c.bd}`,
        whiteSpace: 'nowrap',
      }}
      title={`Reconciliação ${c.label}`}
    >
      {c.label}
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
   Pill de status da analise (Aprovado / Reprovado / Pendente / NA)
───────────────────────────────────────────────────────────── */
function AnalisePill({ status }) {
  const c = STATUS_ANALISE_COLOR[status] || STATUS_ANALISE_COLOR.PENDENTE;
  const label = status === 'NA' ? 'N/A' : status.charAt(0) + status.slice(1).toLowerCase();
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px 8px', borderRadius: 10,
        fontSize: 9, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase',
        background: c.bg, color: c.fg, border: `1px solid ${c.bd}`,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

/** Pill do status final do lote (L/R/B/D/Q/A/E). */
function StatusLoteFinal({ valor }) {
  const codigo = (valor || '').charAt(0);
  const c = STATUS_LOTE_FINAL_COLOR[codigo] || STATUS_LOTE_FINAL_COLOR.Q;
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 9px', borderRadius: 11,
        fontSize: 10, fontWeight: 800, letterSpacing: '.04em',
        background: c.bg, color: c.fg, border: `1px solid ${c.bd}`,
        whiteSpace: 'nowrap',
      }}
      title={valor}
    >
      {valor}
    </span>
  );
}

/** Wave 3.8 — Bandeirinha de Prioridade PCP. */
function PrioridadePcpFlag({ nivel, motivo }) {
  const cor = PRIORIDADE_PCP_COR[nivel] || PRIORIDADE_PCP_COR.normal;
  if (nivel === 'normal' || !nivel) {
    return <span style={{ fontSize: 10, color: 'var(--text3)' }}>—</span>;
  }
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 4,
        padding: '2px 8px', borderRadius: 10,
        fontSize: 9, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase',
        background: cor.bg, color: cor.fg, border: `1px solid ${cor.bd}`,
        whiteSpace: 'nowrap',
      }}
      title={motivo ? `Prioridade PCP — ${motivo}` : 'Prioridade PCP'}
    >
      <span style={{ fontSize: 11 }}>{cor.icone}</span>
      {cor.label}
    </span>
  );
}

/** Coluna 'Desvio' com badge dependendo da contagem. */
function DesvioCellInline({ desvios }) {
  const total = desvios.abertos + desvios.tratados;
  if (total === 0) {
    return <span style={{ fontSize: 10, color: 'var(--text3)' }}>—</span>;
  }
  if (desvios.abertos > 0) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-start' }}>
        <span className="bdg bdg-per" style={{ fontSize: 9 }} title={`${desvios.abertos} desvio(s) em aberto`}>
          ⚠ {desvios.abertos} aberto{desvios.abertos > 1 ? 's' : ''}
        </span>
        {desvios.criticos > 0 && (
          <span style={{ fontSize: 9, color: 'var(--per)', fontWeight: 700 }}>
            • {desvios.criticos} crítico{desvios.criticos > 1 ? 's' : ''}
          </span>
        )}
        {desvios.tratados > 0 && (
          <span style={{ fontSize: 9, color: 'var(--text3)' }}>
            • {desvios.tratados} tratado{desvios.tratados > 1 ? 's' : ''}
          </span>
        )}
      </div>
    );
  }
  return (
    <span className="bdg bdg-ok" style={{ fontSize: 9 }} title={`${desvios.tratados} desvio(s) tratado(s)`}>
      ✓ {desvios.tratados} tratado{desvios.tratados > 1 ? 's' : ''}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   Tela principal
───────────────────────────────────────────────────────────── */

export default function QualidadeFilaReconciliacaoScreen() {
  const navigate = useNavigate();
  const [aba, setAba] = useState('pendentes'); // 'pendentes' | 'finalizadas'
  const [filtroStatus, setFiltroStatus] = useState('todos');
  const [filtroProcesso, setFiltroProcesso] = useState('todos');
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [busca, setBusca] = useState('');
  const [aviso, setAviso] = useState('');
  const [info, setInfo] = useState('');

  // Fila em estado local — permite adicionar novas reconciliações em sessão.
  const [lotes, setLotes] = useState(LOTES_FILA);
  // Popup "Adicionar nova reconciliação" — só o lote; o resto vem da busca.
  const [modalAberto, setModalAberto] = useState(false);
  const [novoLote, setNovoLote] = useState('');
  const [erroModal, setErroModal] = useState('');

  // Busca os dados do lote (produto/WO) nos dossiês, no histórico de
  // finalizados e no catálogo de lotes disponíveis. Retorna {lotePA, produto, wo}.
  const buscarDadosDoLote = (termo) => {
    const t = (termo || '').trim();
    if (!t) return null;
    const tl = t.toLowerCase();
    const semWo = tl.replace(/^wo\s*/, '');
    const d = findDossie(t);
    if (d) return { lotePA: d.lotePA, produto: d.produto, wo: `WO ${d.wo}` };
    const casaWo = (wo) => {
      const w = (wo || '').toLowerCase();
      return w === tl || w.replace(/^wo\s*/, '') === semWo;
    };
    const f = LOTES_FINALIZADOS.find((l) => l.lotePA.toLowerCase() === tl || casaWo(l.wo));
    if (f) return { lotePA: f.lotePA, produto: f.produto, wo: f.wo };
    const c = CATALOGO_LOTES.find((l) => l.lotePA.toLowerCase() === tl || casaWo(l.wo));
    if (c) return { lotePA: c.lotePA, produto: c.produto, wo: c.wo };
    return null;
  };

  // Preview ao vivo enquanto o usuário digita o lote no popup.
  const loteEncontrado = useMemo(() => buscarDadosDoLote(novoLote), [novoLote]); // eslint-disable-line react-hooks/exhaustive-deps
  const loteJaNaFila = loteEncontrado && lotes.some((l) => l.lotePA === loteEncontrado.lotePA);

  // Listas unicas pra filtros (dropdowns).
  const processosUnicos = useMemo(
    () => [...new Set(lotes.map((i) => i.processo))],
    [lotes]
  );
  const tiposUnicos = useMemo(
    () => [...new Set(lotes.map((i) => i.tipoRelato))],
    [lotes]
  );

  // Itens apos filtragem.
  // Wave 3.8 — sort: prioridade critica → alta → normal, mantendo a
  // ordem original dentro de cada grupo.
  const PRIORIDADE_PESO = { critica: 0, alta: 1, normal: 2 };
  const itensFiltrados = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return lotes
      .filter((item) => {
        if (filtroStatus !== 'todos' && item.statusReconciliacao !== filtroStatus) return false;
        if (filtroProcesso !== 'todos' && item.processo !== filtroProcesso) return false;
        if (filtroTipo !== 'todos' && item.tipoRelato !== filtroTipo) return false;
        if (q) {
          const hay = `${item.lotePA} ${item.produto} ${item.wo} ${item.descStatus}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      })
      .slice()
      .sort((a, b) => {
        const pa = PRIORIDADE_PESO[a.prioridadePcp] ?? 9;
        const pb = PRIORIDADE_PESO[b.prioridadePcp] ?? 9;
        if (pa !== pb) return pa - pb;
        return a.linha - b.linha;
      });
  }, [lotes, filtroStatus, filtroProcesso, filtroTipo, busca]);

  // KPIs (calculados sobre o conjunto total — nao filtrado).
  const stats = useMemo(() => {
    const total = lotes.length;
    const novos       = lotes.filter((i) => i.statusReconciliacao === 'novo').length;
    const emExecucao  = lotes.filter((i) => i.statusReconciliacao === 'execucao').length;
    const finalizados = lotes.filter((i) => i.statusReconciliacao === 'finalizado').length;
    const prioCriticos = lotes.filter((i) => i.prioridadePcp === 'critica').length;
    const prioAltos    = lotes.filter((i) => i.prioridadePcp === 'alta').length;
    return { total, novos, emExecucao, finalizados, prioCriticos, prioAltos };
  }, [lotes]);

  const limparFiltros = () => {
    setFiltroStatus('todos');
    setFiltroProcesso('todos');
    setFiltroTipo('todos');
    setBusca('');
    setAviso('');
    setInfo('');
  };

  const abrirReconciliacao = (item) => {
    navigate(`/qual-reconciliacao?lote=${item.lotePA}`);
  };

  // ── Popup "Adicionar nova reconciliação" ──
  const abrirModalNovo = () => {
    setNovoLote('');
    setErroModal('');
    setModalAberto(true);
  };

  const adicionarReconciliacao = () => {
    const termo = novoLote.trim();
    if (!termo) {
      setErroModal('Informe o lote para criar a reconciliação.');
      return;
    }
    const dados = buscarDadosDoLote(termo);
    if (!dados) {
      setErroModal(`Lote "${termo}" não encontrado na base. Ex.: 262690, 260847, 784426 ou S0815B.`);
      return;
    }
    if (lotes.some((l) => l.lotePA === dados.lotePA)) {
      setErroModal(`O lote ${dados.lotePA} já está na fila.`);
      return;
    }
    const agora = new Date();
    const z = (n) => String(n).padStart(2, '0');
    const dataFmt =
      `${agora.getFullYear()}-${z(agora.getMonth() + 1)}-${z(agora.getDate())} ` +
      `${z(agora.getHours())}:${z(agora.getMinutes())}`;
    const numeroReconciliacao = String(
      lotes.reduce((m, l) => Math.max(m, parseInt(l.numeroReconciliacao, 10) || 0), 137233) + 1
    );
    const novoItem = {
      linha: lotes.reduce((m, l) => Math.max(m, l.linha), 0) + 1,
      numeroReconciliacao,
      statusReconciliacao: 'novo',
      tipoRelato: 'PA',
      descRelato: 'Lote Produto Acabado',
      processo: 'RECN',
      descProcesso: 'Reconciliação Técnica',
      statusProcesso: '10',
      descStatus: 'Pronto — Aguardando CQ',
      lotePA: dados.lotePA,
      produto: dados.produto,
      wo: dados.wo,
      dataAtualizacao: dataFmt,
      filial: '0015 - Casa Granado',
      prioridadePcp: 'normal',
    };
    setLotes((prev) => [...prev, novoItem]);
    setModalAberto(false);
    setAba('pendentes');
    setInfo(`✓ Reconciliação #${numeroReconciliacao} (Lote PA ${dados.lotePA}) adicionada à fila.`);
    setAviso('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <div className="ph-title">{aba === 'pendentes' ? 'Fila de Reconciliações Pendentes' : 'Reconciliações Finalizadas'}</div>
        </div>
        <div className="ph-actions" style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-sm btn-v" onClick={abrirModalNovo} title="Adicionar uma nova reconciliação à fila">
            ➕ Adicionar nova reconciliação
          </button>
        </div>
      </div>

      {/* Abas Pendentes / Finalizadas */}
      <div
        style={{
          display: 'flex', gap: 0, marginBottom: 14,
          borderBottom: '2px solid var(--border)',
        }}
      >
        {[
          { id: 'pendentes',   label: '📋 Pendentes',   sub: `${lotes.length} na fila` },
          { id: 'finalizadas', label: '✅ Finalizadas', sub: `${LOTES_FINALIZADOS.length} reconciliados` },
        ].map((a) => {
          const ativa = aba === a.id;
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => setAba(a.id)}
              style={{
                background: ativa ? 'var(--surface)' : 'transparent',
                border: 'none',
                borderBottom: ativa ? '3px solid var(--verde)' : '3px solid transparent',
                marginBottom: -2,
                padding: '10px 18px',
                fontSize: 13, fontWeight: ativa ? 800 : 600,
                color: ativa ? 'var(--verde)' : 'var(--text2)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              {a.label}
              <span style={{
                fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 9,
                background: ativa ? 'var(--verde-dim)' : 'var(--surface2)',
                color: ativa ? 'var(--verde)' : 'var(--text3)',
              }}>
                {a.sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* KPIs (apenas na aba Pendentes) */}
      {aba === 'pendentes' && (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12, marginBottom: 14,
        }}
      >
        <KpiCard label="Total na Fila"  valor={stats.total}       cor="var(--text)" icone="📋" hint="Reconciliações na fila" />
        <KpiCard label="Novos"          valor={stats.novos}       cor="var(--inf)"  icone="🆕" hint="Ainda não iniciadas" />
        <KpiCard label="Em Execução"    valor={stats.emExecucao}  cor="var(--alr)"  icone="🔄" hint="CQ em análise" />
        <KpiCard label="Finalizados"    valor={stats.finalizados} cor="var(--ok)"   icone="✅" hint="Reconciliação concluída" />
        <KpiCard label="Prioridade PCP" valor={`${stats.prioCriticos}/${stats.prioAltos}`} cor="var(--per)" icone="🚩" hint="Críticas / Altas — sobem na fila" />
      </div>
      )}

      {/* KPIs (aba Finalizadas) */}
      {aba === 'finalizadas' && (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12, marginBottom: 14,
        }}
      >
        <KpiCard label="Total Reconciliado" valor={LOTES_FINALIZADOS.length} cor="var(--text)" icone="📚" hint="Lotes processados pelo CQ" />
        <KpiCard label="Liberados" valor={LOTES_FINALIZADOS.filter(l => l.statusLote.startsWith('L')).length} cor="var(--ok)" icone="✅" hint="Liberado para CED" />
        <KpiCard label="Reprovados / Bloqueados" valor={LOTES_FINALIZADOS.filter(l => l.statusLote.startsWith('R') || l.statusLote.startsWith('B')).length} cor="var(--per)" icone="⛔" hint="Não foram para o CED" />
        <KpiCard label="Com Desvio" valor={LOTES_FINALIZADOS.filter(l => l.desvios.abertos + l.desvios.tratados > 0).length} cor="var(--alr)" icone="⚠" hint="Aberto ou tratado" />
      </div>
      )}

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

      {/* Filtros (apenas Pendentes) */}
      {aba === 'pendentes' && (
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
            <option value="novo">Novo</option>
            <option value="execucao">Em execução</option>
            <option value="finalizado">Finalizado</option>
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
      )}

      {/* Tabela JDE-grid (Pendentes) */}
      {aba === 'pendentes' && (
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
                (filtrado de {lotes.length})
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
          <table className="tbl" style={{ minWidth: 760 }}>
            <thead>
              <tr>
                <th title="ID da reconciliação">#</th>
                <th>Lote<br />PA</th>
                <th>Produto</th>
                <th title="Prioridade do PCP — sinaliza lotes preferenciais">🚩 PCP</th>
                <th>Processo</th>
                <th>Status do<br />Processo</th>
                <th>Última<br />Atualização</th>
                <th style={{ textAlign: 'center' }}>Ação</th>
              </tr>
            </thead>
            <tbody>
              {itensFiltrados.length === 0 && (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center', padding: 32, color: 'var(--text3)' }}>
                    <div style={{ fontSize: 24, marginBottom: 6 }}>🔍</div>
                    Nenhum lote corresponde aos filtros aplicados.
                    <div style={{ fontSize: 11, marginTop: 4 }}>
                      Tente <button onClick={limparFiltros} style={{ background: 'none', border: 'none', color: 'var(--verde)', cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit', fontSize: 11 }}>limpar os filtros</button>.
                    </div>
                  </td>
                </tr>
              )}

              {itensFiltrados.map((item) => (
                <tr
                  key={item.linha}
                  onClick={() => abrirReconciliacao(item)}
                  style={{ cursor: 'pointer' }}
                  title={`Abrir a reconciliação do Lote PA ${item.lotePA}`}
                >
                  <td className="mono" style={{ fontWeight: 700, color: 'var(--ouro)' }}>{item.numeroReconciliacao}</td>
                  <td className="mono" style={{ color: 'var(--verde)', fontWeight: 800 }}>{item.lotePA}</td>
                  <td style={{ fontSize: 12 }}>{item.produto}</td>
                  <td><PrioridadePcpFlag nivel={item.prioridadePcp} motivo={item.motivoPrioridade} /></td>
                  <td className="mono"><strong>{item.processo}</strong></td>
                  <td><StatusReconcPill status={item.statusReconciliacao} /></td>
                  <td className="mono" style={{ fontSize: 11, color: 'var(--text3)' }}>{item.dataAtualizacao}</td>
                  <td style={{ textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
                    <button
                      className="btn btn-sm btn-v"
                      onClick={() => abrirReconciliacao(item)}
                      style={{ whiteSpace: 'nowrap' }}
                      title={`Entrar na reconciliação do Lote PA ${item.lotePA}`}
                    >
                      Entrar →
                    </button>
                  </td>
                </tr>
              ))}
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
            Status da reconciliação:{' '}
            <strong style={{ color: 'var(--inf)' }}>Novo</strong> &nbsp;|&nbsp;
            <strong style={{ color: 'var(--alr)' }}>Em execução</strong> &nbsp;|&nbsp;
            <strong style={{ color: 'var(--ok)' }}>Finalizado</strong> · clique em Entrar para abrir
          </span>
        </div>
      </div>
      )}

      {/* Tabela de Reconciliacoes FINALIZADAS */}
      {aba === 'finalizadas' && (
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
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
            Registros 1 - {LOTES_FINALIZADOS.length} · Histórico de reconciliações
          </span>
          <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span title="Exportar (mock)" style={{ cursor: 'pointer' }} onClick={exportarMock}>🡑</span>
            <span title="Atualizar (mock)" style={{ cursor: 'pointer' }} onClick={atualizarMock}>↻</span>
          </span>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="tbl" style={{ minWidth: 1280 }}>
            <thead>
              <tr>
                <th>Nº<br />Linha</th>
                <th>Nº Reconc.</th>
                <th>Lote PA</th>
                <th>Produto</th>
                <th style={{ textAlign: 'center' }}>🧪 Fabricação</th>
                <th style={{ textAlign: 'center' }}>📦 Embalagem</th>
                <th style={{ textAlign: 'center' }}>⚗️ F-Químico</th>
                <th style={{ textAlign: 'center' }}>🔬 Microbiol.</th>
                <th>Desvio</th>
                <th>Status do Lote</th>
                <th>Data<br />Liberação</th>
                <th>Responsável</th>
              </tr>
            </thead>
            <tbody>
              {LOTES_FINALIZADOS.map((l) => {
                const semDesvio = l.desvios.abertos + l.desvios.tratados === 0;
                const linhaCor = l.statusLote.startsWith('L')
                  ? 'transparent'
                  : l.statusLote.startsWith('R') || l.statusLote.startsWith('B')
                  ? 'var(--per-p)'
                  : 'transparent';
                return (
                  <tr key={l.linha} style={{ background: linhaCor }}>
                    <td className="mono">{String(l.linha).padStart(2, '0')}</td>
                    <td className="mono" style={{ fontSize: 11, fontWeight: 700 }}>{l.numeroReconciliacao}</td>
                    <td className="mono" style={{ color: 'var(--verde)', fontWeight: 800 }}>{l.lotePA}</td>
                    <td style={{ fontSize: 12 }}>
                      <div>{l.produto}</div>
                      <div className="mono" style={{ fontSize: 10, color: 'var(--text3)' }}>{l.wo}</div>
                    </td>
                    <td style={{ textAlign: 'center' }}><AnalisePill status={l.analises.fab} /></td>
                    <td style={{ textAlign: 'center' }}><AnalisePill status={l.analises.emb} /></td>
                    <td style={{ textAlign: 'center' }}><AnalisePill status={l.analises.fq} /></td>
                    <td style={{ textAlign: 'center' }}><AnalisePill status={l.analises.micro} /></td>
                    <td style={{ minWidth: 110 }}><DesvioCellInline desvios={l.desvios} /></td>
                    <td><StatusLoteFinal valor={l.statusLote} /></td>
                    <td className="mono" style={{ fontSize: 11, color: l.dataLiberacao === '—' ? 'var(--text3)' : 'var(--text)' }}>
                      {l.dataLiberacao}
                    </td>
                    <td style={{ fontSize: 11 }}>{l.responsavel}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

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
            Status do Lote:{' '}
            <strong style={{ color: 'var(--ok)' }}>L</strong> Liberado &nbsp;|&nbsp;
            <strong style={{ color: 'var(--per)' }}>R</strong> Reprovado &nbsp;|&nbsp;
            <strong style={{ color: 'var(--per)' }}>B</strong> Bloqueado
          </span>
          <span style={{ marginLeft: 'auto' }}>
            Análises por área: <strong style={{ color: 'var(--ok)' }}>Aprovado</strong> · <strong style={{ color: 'var(--per)' }}>Reprovado</strong> · <strong style={{ color: 'var(--alr)' }}>Pendente</strong> · <strong style={{ color: 'var(--text2)' }}>N/A</strong>
          </span>
        </div>
      </div>
      )}

      {/* Popup: Adicionar nova reconciliação */}
      {modalAberto && (
        <div
          onClick={() => setModalAberto(false)}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="card"
            style={{ width: '92%', maxWidth: 480, padding: 22, boxShadow: 'var(--sh2)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <div style={{ fontFamily: 'var(--font-d)', fontSize: 18, fontWeight: 700, color: 'var(--verde-esc)' }}>
                ➕ Nova Reconciliação
              </div>
              <button
                onClick={() => setModalAberto(false)}
                title="Fechar"
                style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 18, color: 'var(--text3)', lineHeight: 1 }}
              >
                ✕
              </button>
            </div>
            <div style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 16 }}>
              Informe o lote — os demais dados (produto e ordem) são buscados automaticamente.
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label className="lbl">
                Lote <span style={{ color: 'var(--per)' }}>*</span>{' '}
                <span style={{ fontSize: 9, color: 'var(--text3)' }}>— Lote PA · WO · código</span>
              </label>
              <input
                className="inp"
                autoFocus
                value={novoLote}
                onChange={(e) => { setNovoLote(e.target.value); setErroModal(''); }}
                onKeyDown={(e) => { if (e.key === 'Enter') adicionarReconciliacao(); }}
                placeholder="Ex.: 262690  ·  784426  ·  S0815B"
                style={{ fontFamily: 'var(--font-m)' }}
              />
            </div>

            {/* Preview ao vivo do resultado da busca do lote */}
            {novoLote.trim() && (
              loteEncontrado ? (
                <div
                  style={{
                    marginTop: 12, padding: '10px 14px', borderRadius: 7,
                    background: loteJaNaFila ? 'var(--alr-p)' : 'var(--ok-p)',
                    border: `1px solid ${loteJaNaFila ? 'var(--alr-b)' : 'var(--ok-b)'}`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 14 }}>{loteJaNaFila ? '⚠' : '✓'}</span>
                    <span style={{ fontSize: 11, fontWeight: 800, color: loteJaNaFila ? 'var(--alr)' : 'var(--ok)' }}>
                      {loteJaNaFila ? 'Lote já está na fila' : 'Lote encontrado'}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text)', fontWeight: 700 }}>{loteEncontrado.produto}</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text2)', marginTop: 2 }}>
                    Lote PA {loteEncontrado.lotePA} · {loteEncontrado.wo}
                  </div>
                </div>
              ) : (
                <div style={{ marginTop: 12, fontSize: 11, color: 'var(--text3)' }}>
                  Nenhum lote encontrado para “{novoLote.trim()}”.
                </div>
              )
            )}

            {erroModal && (
              <div className="abox err" style={{ marginTop: 12, marginBottom: 0 }}>
                <span className="ai">⚠</span>
                <div>{erroModal}</div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 18 }}>
              <button className="btn btn-md btn-ghost" onClick={() => setModalAberto(false)}>Cancelar</button>
              <button
                className="btn btn-md btn-v"
                onClick={adicionarReconciliacao}
                disabled={!loteEncontrado || loteJaNaFila}
                style={{ opacity: !loteEncontrado || loteJaNaFila ? 0.5 : 1 }}
              >
                ✓ Adicionar à fila
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
