import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Tela: Qualidade > Dashboard de Correções (Gerencial)
 * --------------------------------------------------------
 * Wave 2.4 — reunião GQV/CQ 12/05/2026.
 *
 * Painel gerencial restrito (G.Q.V./Liderança CQ). Agrega TODOS os
 * Registros de Correção abertos nas reconciliações e tabula:
 *
 *   • Volume por classificação (ofensores recorrentes)
 *   • Volume por área (Fab/Embalagem/FQ/Micro)
 *   • Volume por mês (tendência)
 *   • Top 5 ofensores
 *   • Lista filtrável de registros (clica → vai pra reconciliação)
 *
 * Em produção, a base virá da integração com a base de Registros de
 * Correção (mesma usada pela QualidadeReconciliacaoScreen). O acesso
 * a esta tela é restrito aos perfis com permissão "Q-MGMT".
 */

const CLASSIFICACAO_LABEL = {
  ausencia_etiqueta:     'Ausência de Etiqueta',
  falta_data:            'Falta de Data / Hora',
  falta_assinatura:      'Falta de Assinatura / Rubrica',
  divergencia_pesagem:   'Divergência de Pesagem',
  divergencia_rotulagem: 'Divergência de Rotulagem',
  rasura_documento:      'Rasura em Documento',
  campo_branco:          'Campo em Branco',
  fora_especificacao:    'Fora de Especificação',
  foto_etiqueta_ausente: 'Foto da Etiqueta não Anexada',
  boletim_pendente:      'Boletim LIMS Pendente',
  outro:                 'Outro',
};

const AREA_LABEL = {
  fabricacao:    { label: 'Fabricação',     icon: '🧪', cor: 'var(--inf)' },
  embalagem:     { label: 'Embalagem',      icon: '📦', cor: 'var(--ouro)' },
  fisicoQuimico: { label: 'Físico-Químico', icon: '⚗️', cor: 'var(--verde-meio)' },
  microbiologia: { label: 'Microbiologia',  icon: '🔬', cor: '#7A4A9A' },
  geral:         { label: 'Geral / Lote',   icon: '🌐', cor: 'var(--text2)' },
};

const SEVERIDADE_LABEL = {
  leve:     { label: 'Leve',     cor: 'var(--inf)' },
  moderado: { label: 'Moderado', cor: 'var(--alr)' },
  critico:  { label: 'Crítico',  cor: 'var(--per)' },
};

const STATUS_LABEL = {
  aberto:  { label: 'Aberto',     cor: 'var(--per)' },
  analise: { label: 'Em Análise', cor: 'var(--alr)' },
  tratado: { label: 'Tratado',    cor: 'var(--ok)'  },
  fechado: { label: 'Fechado',    cor: 'var(--text3)' },
};

// Mock — em produção vem da API de Registros de Correção.
// Aqui simulamos 24 registros distribuídos em 6 meses e 3 lotes PA.
const MOCK_REGISTROS = [
  { id: 1,  numero: 'RC-2026-1001', lotePA: '262417', produto: 'Sabonete Glic. Tradicional 90g',  area: 'fabricacao',    classificacao: 'falta_assinatura',      severidade: 'leve',     status: 'tratado', dataAbertura: '2026-04-17', responsavel: 'Bárbara P.' },
  { id: 2,  numero: 'RC-2026-1002', lotePA: '262417', produto: 'Sabonete Glic. Tradicional 90g',  area: 'embalagem',     classificacao: 'ausencia_etiqueta',     severidade: 'moderado', status: 'tratado', dataAbertura: '2026-04-17', responsavel: 'Bárbara P.' },
  { id: 3,  numero: 'RC-2026-1003', lotePA: '261892', produto: 'Sabonete Glic. Limão 90g',        area: 'fabricacao',    classificacao: 'rasura_documento',      severidade: 'leve',     status: 'fechado', dataAbertura: '2026-04-10', responsavel: 'M. Souza' },
  { id: 4,  numero: 'RC-2026-1004', lotePA: '261892', produto: 'Sabonete Glic. Limão 90g',        area: 'fisicoQuimico', classificacao: 'fora_especificacao',    severidade: 'critico',  status: 'tratado', dataAbertura: '2026-04-10', responsavel: 'M. Souza' },
  { id: 5,  numero: 'RC-2026-1005', lotePA: '261104', produto: 'Sabonete Glic. Mel 90g',          area: 'embalagem',     classificacao: 'divergencia_rotulagem', severidade: 'moderado', status: 'aberto',  dataAbertura: '2026-03-30', responsavel: 'F. Costa' },
  { id: 6,  numero: 'RC-2026-1006', lotePA: '261104', produto: 'Sabonete Glic. Mel 90g',          area: 'fabricacao',    classificacao: 'falta_data',            severidade: 'leve',     status: 'analise', dataAbertura: '2026-03-30', responsavel: 'F. Costa' },
  { id: 7,  numero: 'RC-2026-1007', lotePA: '258910', produto: 'Sabonete Glic. Tradicional 90g',  area: 'fabricacao',    classificacao: 'ausencia_etiqueta',     severidade: 'moderado', status: 'fechado', dataAbertura: '2026-02-15', responsavel: 'Bárbara P.' },
  { id: 8,  numero: 'RC-2026-1008', lotePA: '258910', produto: 'Sabonete Glic. Tradicional 90g',  area: 'embalagem',     classificacao: 'ausencia_etiqueta',     severidade: 'leve',     status: 'fechado', dataAbertura: '2026-02-15', responsavel: 'Bárbara P.' },
  { id: 9,  numero: 'RC-2026-1009', lotePA: '255100', produto: 'Sabonete Glic. Mel 90g',          area: 'fabricacao',    classificacao: 'falta_assinatura',      severidade: 'leve',     status: 'fechado', dataAbertura: '2026-01-22', responsavel: 'M. Souza' },
  { id: 10, numero: 'RC-2026-1010', lotePA: '255100', produto: 'Sabonete Glic. Mel 90g',          area: 'microbiologia', classificacao: 'boletim_pendente',      severidade: 'moderado', status: 'fechado', dataAbertura: '2026-01-22', responsavel: 'M. Souza' },
  { id: 11, numero: 'RC-2026-1011', lotePA: '254200', produto: 'Sabonete Glic. Limão 90g',        area: 'fabricacao',    classificacao: 'foto_etiqueta_ausente', severidade: 'moderado', status: 'fechado', dataAbertura: '2026-01-08', responsavel: 'F. Costa' },
  { id: 12, numero: 'RC-2026-1012', lotePA: '254200', produto: 'Sabonete Glic. Limão 90g',        area: 'embalagem',     classificacao: 'campo_branco',          severidade: 'leve',     status: 'fechado', dataAbertura: '2026-01-08', responsavel: 'F. Costa' },
  { id: 13, numero: 'RC-2026-1013', lotePA: '253100', produto: 'Sabonete Glic. Tradicional 90g',  area: 'fabricacao',    classificacao: 'falta_assinatura',      severidade: 'leve',     status: 'fechado', dataAbertura: '2025-12-20', responsavel: 'Bárbara P.' },
  { id: 14, numero: 'RC-2026-1014', lotePA: '253100', produto: 'Sabonete Glic. Tradicional 90g',  area: 'fabricacao',    classificacao: 'ausencia_etiqueta',     severidade: 'moderado', status: 'fechado', dataAbertura: '2025-12-20', responsavel: 'Bárbara P.' },
  { id: 15, numero: 'RC-2026-1015', lotePA: '252900', produto: 'Sabonete Glic. Mel 90g',          area: 'embalagem',     classificacao: 'divergencia_rotulagem', severidade: 'moderado', status: 'fechado', dataAbertura: '2025-12-05', responsavel: 'F. Costa' },
  { id: 16, numero: 'RC-2026-1016', lotePA: '252900', produto: 'Sabonete Glic. Mel 90g',          area: 'fisicoQuimico', classificacao: 'fora_especificacao',    severidade: 'critico',  status: 'fechado', dataAbertura: '2025-12-05', responsavel: 'M. Souza' },
  { id: 17, numero: 'RC-2026-1017', lotePA: '251000', produto: 'Sabonete Glic. Limão 90g',        area: 'fabricacao',    classificacao: 'ausencia_etiqueta',     severidade: 'leve',     status: 'fechado', dataAbertura: '2025-11-18', responsavel: 'Bárbara P.' },
  { id: 18, numero: 'RC-2026-1018', lotePA: '251000', produto: 'Sabonete Glic. Limão 90g',        area: 'embalagem',     classificacao: 'ausencia_etiqueta',     severidade: 'leve',     status: 'fechado', dataAbertura: '2025-11-18', responsavel: 'Bárbara P.' },
  { id: 19, numero: 'RC-2026-1019', lotePA: '250200', produto: 'Sabonete Glic. Tradicional 90g',  area: 'fabricacao',    classificacao: 'rasura_documento',      severidade: 'leve',     status: 'fechado', dataAbertura: '2025-11-04', responsavel: 'M. Souza' },
  { id: 20, numero: 'RC-2026-1020', lotePA: '249500', produto: 'Sabonete Glic. Mel 90g',          area: 'fabricacao',    classificacao: 'falta_data',            severidade: 'leve',     status: 'fechado', dataAbertura: '2025-10-22', responsavel: 'F. Costa' },
  { id: 21, numero: 'RC-2026-1021', lotePA: '262417', produto: 'Sabonete Glic. Tradicional 90g',  area: 'fabricacao',    classificacao: 'ausencia_etiqueta',     severidade: 'leve',     status: 'aberto',  dataAbertura: '2026-05-10', responsavel: 'Bárbara P.' },
  { id: 22, numero: 'RC-2026-1022', lotePA: '262417', produto: 'Sabonete Glic. Tradicional 90g',  area: 'embalagem',     classificacao: 'foto_etiqueta_ausente', severidade: 'moderado', status: 'aberto',  dataAbertura: '2026-05-10', responsavel: 'Bárbara P.' },
  { id: 23, numero: 'RC-2026-1023', lotePA: '261892', produto: 'Sabonete Glic. Limão 90g',        area: 'fisicoQuimico', classificacao: 'boletim_pendente',      severidade: 'moderado', status: 'analise', dataAbertura: '2026-05-08', responsavel: 'M. Souza' },
  { id: 24, numero: 'RC-2026-1024', lotePA: '261104', produto: 'Sabonete Glic. Mel 90g',          area: 'fabricacao',    classificacao: 'falta_assinatura',      severidade: 'leve',     status: 'tratado', dataAbertura: '2026-05-02', responsavel: 'Bárbara P.' },
];

function mesAnoLabel(d) {
  const dt = new Date(d);
  const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  return `${meses[dt.getMonth()]}/${String(dt.getFullYear()).slice(2)}`;
}

export default function QualidadeCorrecoesGestaoScreen() {
  const navigate = useNavigate();
  const [filtroArea, setFiltroArea] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroSeveridade, setFiltroSeveridade] = useState('');
  const [filtroProduto, setFiltroProduto] = useState('');
  const [filtroPeriodo, setFiltroPeriodo] = useState('6m'); // '1m' / '3m' / '6m' / '12m' / 'all'

  // Limite por periodo
  const limiteData = useMemo(() => {
    if (filtroPeriodo === 'all') return null;
    const meses = { '1m': 1, '3m': 3, '6m': 6, '12m': 12 }[filtroPeriodo] || 6;
    const d = new Date();
    d.setMonth(d.getMonth() - meses);
    return d.toISOString().slice(0, 10);
  }, [filtroPeriodo]);

  const lista = useMemo(() => {
    return MOCK_REGISTROS.filter((r) => {
      if (limiteData && r.dataAbertura < limiteData) return false;
      if (filtroArea && r.area !== filtroArea) return false;
      if (filtroStatus && r.status !== filtroStatus) return false;
      if (filtroSeveridade && r.severidade !== filtroSeveridade) return false;
      if (filtroProduto && r.produto !== filtroProduto) return false;
      return true;
    });
  }, [limiteData, filtroArea, filtroStatus, filtroSeveridade, filtroProduto]);

  // Tabelas agregadas (sempre sobre a `lista` filtrada).
  const porClassificacao = useMemo(() => {
    const m = new Map();
    for (const r of lista) {
      const k = r.classificacao;
      m.set(k, (m.get(k) || 0) + 1);
    }
    return Array.from(m.entries())
      .map(([k, v]) => ({ key: k, label: CLASSIFICACAO_LABEL[k] || k, count: v }))
      .sort((a, b) => b.count - a.count);
  }, [lista]);

  const porArea = useMemo(() => {
    const m = new Map();
    for (const r of lista) {
      m.set(r.area, (m.get(r.area) || 0) + 1);
    }
    return Array.from(m.entries())
      .map(([k, v]) => ({ key: k, ...AREA_LABEL[k], count: v }))
      .sort((a, b) => b.count - a.count);
  }, [lista]);

  const porMes = useMemo(() => {
    const m = new Map();
    for (const r of lista) {
      const k = r.dataAbertura.slice(0, 7); // 'YYYY-MM'
      m.set(k, (m.get(k) || 0) + 1);
    }
    return Array.from(m.entries())
      .map(([k, v]) => ({ key: k, label: mesAnoLabel(k + '-01'), count: v }))
      .sort((a, b) => a.key.localeCompare(b.key));
  }, [lista]);

  const produtosUnicos = useMemo(
    () => Array.from(new Set(MOCK_REGISTROS.map((r) => r.produto))).sort(),
    [],
  );

  const stats = useMemo(() => {
    const total = lista.length;
    const abertos = lista.filter((r) => r.status === 'aberto' || r.status === 'analise').length;
    const criticos = lista.filter((r) => r.severidade === 'critico').length;
    const fechados = lista.filter((r) => r.status === 'fechado').length;
    return { total, abertos, criticos, fechados };
  }, [lista]);

  const limparFiltros = () => {
    setFiltroArea('');
    setFiltroStatus('');
    setFiltroSeveridade('');
    setFiltroProduto('');
    setFiltroPeriodo('6m');
  };

  const maxClassif = porClassificacao[0]?.count || 1;
  const maxArea = porArea[0]?.count || 1;
  const maxMes = Math.max(...porMes.map((p) => p.count), 1);

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">
            Qualidade · CQ · Dashboard Gerencial ·{' '}
            <span style={{ color: 'var(--per)', fontWeight: 800 }}>
              🔒 RESTRITO (perfil Q-MGMT)
            </span>
          </div>
          <div className="ph-title">📈 Dashboard de Registros de Correção</div>
        </div>
        <div style={{ textAlign: 'right', fontFamily: 'var(--font-m)', fontSize: 10, color: 'var(--text2)', lineHeight: 1.6 }}>
          Tela [JPD922-CQ]<br />
          <span style={{ color: 'var(--verde)', fontWeight: 700 }}>Gustavo P. Mazocco (G.Q.V.)</span>
        </div>
      </div>

      {/* KPIs */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
        gap: 12, marginBottom: 14,
      }}>
        <KpiCard label="Registros no Período" value={stats.total} color="var(--text)" />
        <KpiCard label="Em Aberto / Análise" value={stats.abertos} color="var(--per)" hint="Bloqueando liberações" />
        <KpiCard label="Críticos" value={stats.criticos} color="var(--per)" hint="Severidade alta" />
        <KpiCard label="Fechados" value={stats.fechados} color="var(--ok)" />
      </div>

      {/* Filtros */}
      <div className="card cv mb14" style={{ padding: 14 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 10, alignItems: 'flex-end',
        }}>
          <div>
            <label className="lbl">Período</label>
            <select className="sel" value={filtroPeriodo} onChange={(e) => setFiltroPeriodo(e.target.value)} style={{ fontSize: 12 }}>
              <option value="1m">Último Mês</option>
              <option value="3m">Últimos 3 Meses</option>
              <option value="6m">Últimos 6 Meses</option>
              <option value="12m">Últimos 12 Meses</option>
              <option value="all">Tudo</option>
            </select>
          </div>
          <div>
            <label className="lbl">Área</label>
            <select className="sel" value={filtroArea} onChange={(e) => setFiltroArea(e.target.value)} style={{ fontSize: 12 }}>
              <option value="">Todas</option>
              {Object.entries(AREA_LABEL).map(([k, v]) => <option key={k} value={k}>{v.icon} {v.label}</option>)}
            </select>
          </div>
          <div>
            <label className="lbl">Status</label>
            <select className="sel" value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)} style={{ fontSize: 12 }}>
              <option value="">Todos</option>
              {Object.entries(STATUS_LABEL).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div>
            <label className="lbl">Severidade</label>
            <select className="sel" value={filtroSeveridade} onChange={(e) => setFiltroSeveridade(e.target.value)} style={{ fontSize: 12 }}>
              <option value="">Todas</option>
              {Object.entries(SEVERIDADE_LABEL).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
            </select>
          </div>
          <div>
            <label className="lbl">Produto</label>
            <select className="sel" value={filtroProduto} onChange={(e) => setFiltroProduto(e.target.value)} style={{ fontSize: 12 }}>
              <option value="">Todos</option>
              {produtosUnicos.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <button className="btn btn-md btn-ghost" onClick={limparFiltros} style={{ width: '100%' }}>
              ✕ Limpar Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Wave 3.9 — Painel de Ofensores: Áreas que mais bloqueiam liberação */}
      <PainelOfensoresAreas lista={lista} />

      {/* Painel de Ofensores (Top Classificações + Áreas) */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: 14, marginBottom: 14,
      }}>
        <div className="card" style={{ padding: 14 }}>
          <div className="card-title" style={{ marginBottom: 10, padding: 0, border: 'none' }}>
            🏷️ Top Ofensores (Classificação)
          </div>
          {porClassificacao.length === 0 ? (
            <div style={{ fontSize: 11, color: 'var(--text3)', padding: 10 }}>Sem dados para os filtros aplicados.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {porClassificacao.slice(0, 8).map((p, i) => (
                <BarRow key={p.key} idx={i + 1} label={p.label} count={p.count} max={maxClassif} cor={i < 3 ? 'var(--per)' : 'var(--inf)'} />
              ))}
            </div>
          )}
        </div>

        <div className="card" style={{ padding: 14 }}>
          <div className="card-title" style={{ marginBottom: 10, padding: 0, border: 'none' }}>
            🎯 Volume por Área
          </div>
          {porArea.length === 0 ? (
            <div style={{ fontSize: 11, color: 'var(--text3)', padding: 10 }}>Sem dados para os filtros aplicados.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {porArea.map((p) => (
                <BarRow
                  key={p.key}
                  label={`${p.icon} ${p.label}`}
                  count={p.count}
                  max={maxArea}
                  cor={p.cor}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tendência mensal */}
      <div className="card mb14" style={{ padding: 14 }}>
        <div className="card-title" style={{ marginBottom: 10, padding: 0, border: 'none' }}>
          📊 Tendência (Registros por Mês)
        </div>
        {porMes.length === 0 ? (
          <div style={{ fontSize: 11, color: 'var(--text3)', padding: 10 }}>Sem dados.</div>
        ) : (
          <div style={{
            display: 'flex', alignItems: 'flex-end', gap: 12,
            height: 130, paddingTop: 16, borderBottom: '1px solid var(--border)',
            paddingBottom: 4,
          }}>
            {porMes.map((p) => {
              const h = Math.max(4, (p.count / maxMes) * 100);
              return (
                <div key={p.key} style={{
                  flex: 1, minWidth: 32,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--text)' }}>{p.count}</div>
                  <div style={{
                    width: '100%', maxWidth: 40,
                    height: `${h}%`,
                    background: 'linear-gradient(180deg, var(--ouro), var(--verde))',
                    borderRadius: '3px 3px 0 0',
                    border: '1px solid var(--verde-meio)',
                    minHeight: 4,
                  }} />
                  <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.06em', color: 'var(--text3)' }}>
                    {p.label}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Tabela de registros */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{
          padding: '10px 14px', borderBottom: '1px solid var(--border)',
          background: 'var(--surface2)', fontSize: 11, color: 'var(--text2)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8,
        }}>
          <span>
            <strong style={{ color: 'var(--text)' }}>{lista.length}</strong> registro(s) ·
            ordenados por data (mais recente)
          </span>
          <span style={{ fontSize: 10, color: 'var(--text3)' }}>
            Clique no Nº ou Lote PA para abrir a reconciliação correspondente
          </span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{
                background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
                fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text3)',
              }}>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Nº</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Lote PA</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Produto</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Área</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Classificação</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Severidade</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Status</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Abertura</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Responsável</th>
              </tr>
            </thead>
            <tbody>
              {lista.length === 0 ? (
                <tr>
                  <td colSpan={9} style={{ padding: 30, textAlign: 'center', color: 'var(--text3)' }}>
                    Nenhum registro encontrado para os filtros aplicados.
                  </td>
                </tr>
              ) : (
                lista
                  .slice()
                  .sort((a, b) => b.dataAbertura.localeCompare(a.dataAbertura))
                  .map((r, i) => {
                    const area = AREA_LABEL[r.area];
                    const sev = SEVERIDADE_LABEL[r.severidade];
                    const st = STATUS_LABEL[r.status];
                    return (
                      <tr
                        key={r.id}
                        style={{
                          background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface2)',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        <td style={{ padding: '8px 10px', fontFamily: 'var(--font-m)', fontWeight: 700 }}>
                          <button
                            onClick={() => navigate(`/qual-reconciliacao?lote=${r.lotePA}`)}
                            style={{
                              background: 'none', border: 'none', color: 'var(--verde)',
                              cursor: 'pointer', textDecoration: 'underline',
                              fontFamily: 'inherit', fontSize: 12, fontWeight: 700, padding: 0,
                            }}
                            title="Abrir reconciliação do lote"
                          >
                            {r.numero}
                          </button>
                        </td>
                        <td style={{ padding: '8px 10px', fontFamily: 'var(--font-m)' }}>{r.lotePA}</td>
                        <td style={{ padding: '8px 10px', color: 'var(--text2)' }}>{r.produto}</td>
                        <td style={{ padding: '8px 10px' }}>
                          <span style={{ color: area.cor, fontWeight: 700 }}>{area.icon} {area.label}</span>
                        </td>
                        <td style={{ padding: '8px 10px' }}>
                          🏷️ {CLASSIFICACAO_LABEL[r.classificacao] || r.classificacao}
                        </td>
                        <td style={{ padding: '8px 10px' }}>
                          <span style={{ color: sev.cor, fontWeight: 700 }}>{sev.label}</span>
                        </td>
                        <td style={{ padding: '8px 10px' }}>
                          <span style={{
                            color: st.cor, fontWeight: 700, fontSize: 11,
                            padding: '2px 8px', borderRadius: 10,
                            border: `1px solid ${st.cor}`, background: 'var(--surface)',
                          }}>
                            {st.label}
                          </span>
                        </td>
                        <td style={{ padding: '8px 10px', fontFamily: 'var(--font-m)' }}>{r.dataAbertura}</td>
                        <td style={{ padding: '8px 10px', color: 'var(--text2)' }}>{r.responsavel}</td>
                      </tr>
                    );
                  })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Wave 3.9 — Painel de Ofensores por Área.
   Pra cada área (Fab/Emb/FQ/Micro), mostra: nº de lotes bloqueados,
   nº de registros em aberto, lista dos lotes afetados. Permite ao G.Q.V.
   identificar rapidamente qual área está segurando a fila. */
function PainelOfensoresAreas({ lista }) {
  const porArea = useMemo(() => {
    const m = new Map();
    for (const r of lista) {
      const aberto = r.status === 'aberto' || r.status === 'analise';
      if (!m.has(r.area)) {
        m.set(r.area, { lotesBloqueados: new Set(), abertos: 0, total: 0, lotes: new Set() });
      }
      const e = m.get(r.area);
      e.total += 1;
      e.lotes.add(r.lotePA);
      if (aberto) {
        e.abertos += 1;
        e.lotesBloqueados.add(r.lotePA);
      }
    }
    return Array.from(m.entries()).map(([k, v]) => ({
      key: k,
      ...AREA_LABEL[k],
      abertos: v.abertos,
      total: v.total,
      lotesBloqueados: Array.from(v.lotesBloqueados),
      lotes: Array.from(v.lotes),
    })).sort((a, b) => b.abertos - a.abertos);
  }, [lista]);

  return (
    <div className="card mb14" style={{
      padding: 14, borderTop: '3px solid var(--per)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
        <div className="card-title" style={{ padding: 0, border: 'none', margin: 0 }}>
          🚧 Painel de Ofensores — Áreas que Bloqueiam Liberação
        </div>
        <span style={{
          fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase',
          color: 'var(--per)', padding: '2px 8px',
          border: '1.5px dashed var(--per-b)', borderRadius: 8,
        }}>
          🔒 RESTRITO · GESTÃO
        </span>
      </div>

      {porArea.length === 0 ? (
        <div style={{
          padding: 14, background: 'var(--surface2)',
          border: '1px dashed var(--border)', borderRadius: 6,
          fontSize: 11, color: 'var(--text3)', textAlign: 'center',
        }}>
          Nenhuma área com registros pra exibir no período.
        </div>
      ) : (
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10,
        }}>
          {porArea.map((a) => {
            const bloqueando = a.abertos > 0;
            return (
              <div key={a.key} style={{
                padding: 12,
                background: bloqueando ? 'var(--per-p)' : 'var(--ok-p)',
                border: `1.5px solid ${bloqueando ? 'var(--per-b)' : 'var(--ok-b)'}`,
                borderLeft: `4px solid ${a.cor}`,
                borderRadius: 6,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: a.cor }}>
                    {a.icon} {a.label}
                  </span>
                  {bloqueando ? (
                    <span style={{
                      fontSize: 9, fontWeight: 900, color: '#fff',
                      background: 'var(--per)', padding: '2px 7px', borderRadius: 8,
                      letterSpacing: '.06em',
                    }}>
                      ⛔ BLOQUEANDO
                    </span>
                  ) : (
                    <span style={{
                      fontSize: 9, fontWeight: 900, color: 'var(--ok)',
                      background: '#fff', padding: '2px 7px', borderRadius: 8,
                      border: '1px solid var(--ok-b)',
                      letterSpacing: '.06em',
                    }}>
                      ✓ OK
                    </span>
                  )}
                </div>
                <div style={{
                  fontFamily: 'var(--font-m)', fontSize: 26, fontWeight: 700,
                  color: bloqueando ? 'var(--per)' : 'var(--ok)', lineHeight: 1,
                }}>
                  {a.abertos}<span style={{ fontSize: 14, color: 'var(--text3)', fontWeight: 600 }}> / {a.total}</span>
                </div>
                <div style={{ fontSize: 10, color: 'var(--text2)', marginTop: 4 }}>
                  registros em aberto · de {a.total} no período
                </div>
                {a.lotesBloqueados.length > 0 && (
                  <div style={{ fontSize: 10, marginTop: 6, color: 'var(--text2)' }}>
                    <strong>Lotes:</strong>{' '}
                    <span className="mono" style={{ color: 'var(--per)', fontWeight: 700 }}>
                      {a.lotesBloqueados.slice(0, 3).join(', ')}
                      {a.lotesBloqueados.length > 3 && ` +${a.lotesBloqueados.length - 3}`}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function BarRow({ idx, label, count, max, cor }) {
  const pct = Math.max(4, (count / max) * 100);
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '24px 1fr 40px',
      gap: 8, alignItems: 'center', fontSize: 11,
    }}>
      {idx ? (
        <div style={{
          fontSize: 10, fontWeight: 900, color: 'var(--text3)',
          textAlign: 'center',
        }}>
          #{idx}
        </div>
      ) : <div />}
      <div style={{ minWidth: 0 }}>
        <div style={{
          color: 'var(--text)', fontWeight: 600, marginBottom: 3,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {label}
        </div>
        <div style={{
          height: 8, background: 'var(--surface2)',
          borderRadius: 4, overflow: 'hidden',
          border: '1px solid var(--border)',
        }}>
          <div style={{
            width: `${pct}%`, height: '100%', background: cor,
            transition: 'width .3s',
          }} />
        </div>
      </div>
      <div style={{
        fontFamily: 'var(--font-m)', fontWeight: 800, fontSize: 13,
        color: cor, textAlign: 'right',
      }}>
        {count}
      </div>
    </div>
  );
}

function KpiCard({ label, value, color, hint }) {
  return (
    <div className="card" style={{ padding: '12px 14px', borderTop: `3px solid ${color}` }}>
      <div style={{
        fontSize: 9, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase',
        color: 'var(--text3)', marginBottom: 4,
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: 'var(--font-m)', fontSize: 26, fontWeight: 700, color,
        lineHeight: 1,
      }}>
        {value}
      </div>
      {hint && (
        <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>{hint}</div>
      )}
    </div>
  );
}
