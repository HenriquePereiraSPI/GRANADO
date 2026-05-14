import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Tela: Qualidade > Amostras de Retenção (Gerencial)
 * ------------------------------------------------------
 * Wave 1.1 — reunião GQV/CQ 12/05/2026.
 *
 * Lista todas as amostras de retenção armazenadas, com filtros por
 * Ano de fabricação / Produto / Tipo de amostra. Permite marcar
 * amostras como "Destruída" (passada a janela RDC 658/2022 — 1 ano
 * após a validade).
 *
 * Em produção, a base virá da integração com o módulo de Estoque
 * de Retenção (mesma base usada pela QualidadeReconciliacaoScreen
 * para registrar amostras na hora da reconciliação do lote).
 */

const AMOSTRA_TIPOS_LABEL = {
  inicio:       { label: 'Início',         icon: '🟢' },
  meio:         { label: 'Meio',           icon: '🟡' },
  fim:          { label: 'Fim',            icon: '🔴' },
  micro:        { label: 'Microbiologia',  icon: '🔬' },
  fq:           { label: 'Físico-Químico', icon: '⚗️' },
  estabilidade: { label: 'Estabilidade',   icon: '📈' },
};

// Base mock — em produção vem da API do Estoque de Retenção.
const MOCK_REGISTRO = [
  // Lote 262417 — Tradicional
  { id: 11, lotePA: '262417', produto: 'Sabonete Glicerinado Tradicional 90g',     tipo: 'inicio', caixa: '12',  pallet: 'P-07', posicao: 'Estante A · Col 3', quantidade: '3 un', dataColeta: '2026-04-16', dataValidade: '2029-04-30', destruida: false },
  { id: 12, lotePA: '262417', produto: 'Sabonete Glicerinado Tradicional 90g',     tipo: 'meio',   caixa: '13',  pallet: 'P-07', posicao: 'Estante A · Col 3', quantidade: '3 un', dataColeta: '2026-04-16', dataValidade: '2029-04-30', destruida: false },
  { id: 13, lotePA: '262417', produto: 'Sabonete Glicerinado Tradicional 90g',     tipo: 'fim',    caixa: '14',  pallet: 'P-07', posicao: 'Estante A · Col 3', quantidade: '3 un', dataColeta: '2026-04-16', dataValidade: '2029-04-30', destruida: false },
  { id: 14, lotePA: '262417', produto: 'Sabonete Glicerinado Tradicional 90g',     tipo: 'micro',  caixa: '15',  pallet: 'P-08', posicao: 'Geladeira micro',   quantidade: '2 un', dataColeta: '2026-04-16', dataValidade: '2029-04-30', destruida: false },
  { id: 15, lotePA: '262417', produto: 'Sabonete Glicerinado Tradicional 90g',     tipo: 'fq',     caixa: '16',  pallet: 'P-08', posicao: 'Estante B · Col 1', quantidade: '2 un', dataColeta: '2026-04-16', dataValidade: '2029-04-30', destruida: false },
  // Lote 261892 — Limão Siciliano
  { id: 21, lotePA: '261892', produto: 'Sabonete Glicerinado Limão Siciliano 90g', tipo: 'inicio', caixa: '08',  pallet: 'P-04', posicao: 'Estante A · Col 1', quantidade: '3 un', dataColeta: '2026-04-08', dataValidade: '2029-04-20', destruida: false },
  { id: 22, lotePA: '261892', produto: 'Sabonete Glicerinado Limão Siciliano 90g', tipo: 'fim',    caixa: '09',  pallet: 'P-04', posicao: 'Estante A · Col 1', quantidade: '3 un', dataColeta: '2026-04-08', dataValidade: '2029-04-20', destruida: false },
  { id: 23, lotePA: '261892', produto: 'Sabonete Glicerinado Limão Siciliano 90g', tipo: 'micro',  caixa: '10',  pallet: 'P-04', posicao: 'Geladeira micro',   quantidade: '2 un', dataColeta: '2026-04-08', dataValidade: '2029-04-20', destruida: false },
  // Lote 261104 — Mel
  { id: 31, lotePA: '261104', produto: 'Sabonete Glicerinado Mel 90g',             tipo: 'inicio',       caixa: '03',  pallet: 'P-02', posicao: 'Estante A · Col 2', quantidade: '3 un', dataColeta: '2026-03-28', dataValidade: '2029-04-12', destruida: false },
  { id: 32, lotePA: '261104', produto: 'Sabonete Glicerinado Mel 90g',             tipo: 'meio',         caixa: '04',  pallet: 'P-02', posicao: 'Estante A · Col 2', quantidade: '3 un', dataColeta: '2026-03-28', dataValidade: '2029-04-12', destruida: false },
  { id: 33, lotePA: '261104', produto: 'Sabonete Glicerinado Mel 90g',             tipo: 'fim',          caixa: '05',  pallet: 'P-02', posicao: 'Estante A · Col 2', quantidade: '3 un', dataColeta: '2026-03-28', dataValidade: '2029-04-12', destruida: false },
  { id: 34, lotePA: '261104', produto: 'Sabonete Glicerinado Mel 90g',             tipo: 'micro',        caixa: '06',  pallet: 'P-02', posicao: 'Geladeira micro',   quantidade: '2 un', dataColeta: '2026-03-28', dataValidade: '2029-04-12', destruida: false },
  { id: 35, lotePA: '261104', produto: 'Sabonete Glicerinado Mel 90g',             tipo: 'fq',           caixa: '07',  pallet: 'P-02', posicao: 'Estante B · Col 2', quantidade: '2 un', dataColeta: '2026-03-28', dataValidade: '2029-04-12', destruida: false },
  { id: 36, lotePA: '261104', produto: 'Sabonete Glicerinado Mel 90g',             tipo: 'estabilidade', caixa: '07A', pallet: 'P-02', posicao: 'Câmara 25°C',       quantidade: '6 un', dataColeta: '2026-03-28', dataValidade: '2029-04-12', destruida: false },
  // Lotes 2024 — janela RDC venceu, podem ser destruídas
  { id: 41, lotePA: '258910', produto: 'Sabonete Glicerinado Tradicional 90g',     tipo: 'inicio', caixa: '01', pallet: 'P-01', posicao: 'Estante D · Col 4', quantidade: '3 un', dataColeta: '2024-02-10', dataValidade: '2027-02-28', destruida: false },
  { id: 42, lotePA: '258910', produto: 'Sabonete Glicerinado Tradicional 90g',     tipo: 'fim',    caixa: '02', pallet: 'P-01', posicao: 'Estante D · Col 4', quantidade: '3 un', dataColeta: '2024-02-10', dataValidade: '2027-02-28', destruida: false },
  { id: 43, lotePA: '258910', produto: 'Sabonete Glicerinado Tradicional 90g',     tipo: 'micro',  caixa: '02A',pallet: 'P-01', posicao: 'Geladeira micro',   quantidade: '2 un', dataColeta: '2024-02-10', dataValidade: '2027-02-28', destruida: false },
  // Já destruída — exemplo
  { id: 51, lotePA: '255100', produto: 'Sabonete Glicerinado Mel 90g',             tipo: 'inicio', caixa: 'X-1', pallet: 'P-DSC', posicao: 'Descartada', quantidade: '3 un', dataColeta: '2023-01-15', dataValidade: '2026-01-30', destruida: true },
];

function podeDestruir(amostra) {
  // RDC 658/2022 — retenção até 1 ano após a data de validade do lote.
  // Aqui, mock: se hoje > dataValidade + 1 ano → libera destruição.
  if (amostra.destruida) return false;
  const validade = new Date(amostra.dataValidade);
  validade.setFullYear(validade.getFullYear() + 1);
  return new Date() >= validade;
}

export default function QualidadeAmostrasScreen() {
  const navigate = useNavigate();
  const [amostras, setAmostras] = useState(MOCK_REGISTRO);
  const [filtroAno, setFiltroAno] = useState('');
  const [filtroProduto, setFiltroProduto] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');
  const [filtroStatus, setFiltroStatus] = useState(''); // ''/'retidas'/'destruidas'/'liberadas'
  const [mensagem, setMensagem] = useState('');

  const produtosUnicos = useMemo(
    () => Array.from(new Set(amostras.map((a) => a.produto))).sort(),
    [amostras],
  );
  const anosUnicos = useMemo(
    () => Array.from(new Set(amostras.map((a) => a.dataColeta.slice(0, 4)))).sort().reverse(),
    [amostras],
  );

  const lista = useMemo(() => {
    return amostras.filter((a) => {
      if (filtroAno && a.dataColeta.slice(0, 4) !== filtroAno) return false;
      if (filtroProduto && a.produto !== filtroProduto) return false;
      if (filtroTipo && a.tipo !== filtroTipo) return false;
      if (filtroStatus === 'destruidas' && !a.destruida) return false;
      if (filtroStatus === 'retidas' && a.destruida) return false;
      if (filtroStatus === 'liberadas' && !podeDestruir(a)) return false;
      return true;
    });
  }, [amostras, filtroAno, filtroProduto, filtroTipo, filtroStatus]);

  const stats = useMemo(() => {
    const total = amostras.length;
    const retidas = amostras.filter((a) => !a.destruida).length;
    const destruidas = amostras.filter((a) => a.destruida).length;
    const liberadas = amostras.filter((a) => podeDestruir(a)).length;
    return { total, retidas, destruidas, liberadas };
  }, [amostras]);

  const marcarDestruida = (a) => {
    if (!window.confirm(`Marcar a amostra ${a.tipo.toUpperCase()} do lote ${a.lotePA} (caixa ${a.caixa}) como DESTRUÍDA?\n\nEsta ação será registrada na trilha de auditoria.`)) return;
    setAmostras((prev) => prev.map((x) => x.id === a.id ? { ...x, destruida: true } : x));
    setMensagem(`✓ Amostra ${a.tipo} do lote ${a.lotePA} (caixa ${a.caixa}) marcada como destruída em ${new Date().toLocaleString('pt-BR')}.`);
  };

  const limparFiltros = () => {
    setFiltroAno('');
    setFiltroProduto('');
    setFiltroTipo('');
    setFiltroStatus('');
  };

  return (
    <div className="screen active" style={{ display: 'block' }}>
      {/* Header */}
      <div className="page-header">
        <div>
          <div className="ph-eyebrow">Qualidade · CQ · Estoque de Retenção · ANVISA RDC 658/2022</div>
          <div className="ph-title">📦 Amostras de Retenção (Gerencial)</div>
        </div>
        <div style={{ textAlign: 'right', fontFamily: 'var(--font-m)', fontSize: 10, color: 'var(--text2)', lineHeight: 1.6 }}>
          Tela [JPD921-CQ]<br />
          <span style={{ color: 'var(--verde)', fontWeight: 700 }}>Bárbara C. O. Peixoto</span>
        </div>
      </div>

      {/* Cards de KPI */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
        gap: 12, marginBottom: 14,
      }}>
        <KpiCard label="Total Registradas" value={stats.total} color="var(--text)" />
        <KpiCard label="Retidas" value={stats.retidas} color="var(--verde)" hint="Dentro da janela RDC" />
        <KpiCard label="Liberadas p/ Destruir" value={stats.liberadas} color="var(--alr)" hint="Validade + 1 ano vencida" />
        <KpiCard label="Destruídas" value={stats.destruidas} color="var(--text3)" />
      </div>

      {/* Filtros */}
      <div className="card cv mb14" style={{ padding: 14 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: 10, alignItems: 'flex-end',
        }}>
          <div>
            <label className="lbl">Ano (Coleta)</label>
            <select className="sel" value={filtroAno} onChange={(e) => setFiltroAno(e.target.value)} style={{ fontSize: 12 }}>
              <option value="">Todos</option>
              {anosUnicos.map((a) => <option key={a} value={a}>{a}</option>)}
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
            <label className="lbl">Tipo</label>
            <select className="sel" value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)} style={{ fontSize: 12 }}>
              <option value="">Todos</option>
              {Object.entries(AMOSTRA_TIPOS_LABEL).map(([k, v]) => (
                <option key={k} value={k}>{v.icon} {v.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="lbl">Status</label>
            <select className="sel" value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)} style={{ fontSize: 12 }}>
              <option value="">Todas</option>
              <option value="retidas">Retidas</option>
              <option value="liberadas">Liberadas p/ Destruir</option>
              <option value="destruidas">Destruídas</option>
            </select>
          </div>
          <div>
            <button className="btn btn-md btn-ghost" onClick={limparFiltros} style={{ width: '100%' }}>
              ✕ Limpar Filtros
            </button>
          </div>
        </div>
      </div>

      {mensagem && (
        <div className="abox ok mb14">
          <span className="ai">✅</span>
          <div>{mensagem}</div>
        </div>
      )}

      {/* Tabela */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{
          padding: '10px 14px', borderBottom: '1px solid var(--border)',
          background: 'var(--surface2)', fontSize: 11, color: 'var(--text2)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8,
        }}>
          <span>
            <strong style={{ color: 'var(--text)' }}>{lista.length}</strong> amostra(s) listada(s) ·
            ordenadas por data de coleta (mais recente primeiro)
          </span>
          <span style={{ fontSize: 10, color: 'var(--text3)' }}>
            🔒 Trilha de auditoria registra qualquer alteração
          </span>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%', borderCollapse: 'collapse', fontSize: 12,
          }}>
            <thead>
              <tr style={{
                background: 'var(--bg2)', borderBottom: '1px solid var(--border)',
                fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text3)',
              }}>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Lote PA</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Produto</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Tipo</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Caixa</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Pallet</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Posição</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Qtde</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Coleta</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Validade</th>
                <th style={{ padding: '8px 10px', textAlign: 'left' }}>Status</th>
                <th style={{ padding: '8px 10px', textAlign: 'right' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lista.length === 0 ? (
                <tr>
                  <td colSpan={11} style={{ padding: 30, textAlign: 'center', color: 'var(--text3)' }}>
                    Nenhuma amostra encontrada para os filtros aplicados.
                  </td>
                </tr>
              ) : (
                lista
                  .slice()
                  .sort((a, b) => b.dataColeta.localeCompare(a.dataColeta))
                  .map((a, i) => {
                    const tipo = AMOSTRA_TIPOS_LABEL[a.tipo] || { label: a.tipo, icon: '•' };
                    const liberada = podeDestruir(a);
                    return (
                      <tr
                        key={a.id}
                        style={{
                          background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface2)',
                          borderBottom: '1px solid var(--border)',
                          opacity: a.destruida ? 0.6 : 1,
                        }}
                      >
                        <td style={{ padding: '8px 10px', fontFamily: 'var(--font-m)', fontWeight: 700 }}>
                          <button
                            onClick={() => navigate(`/qual-reconciliacao?lote=${a.lotePA}`)}
                            style={{
                              background: 'none', border: 'none', color: 'var(--verde)',
                              cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit',
                              fontSize: 12, fontWeight: 700, padding: 0,
                            }}
                            title="Abrir reconciliação deste lote"
                          >
                            {a.lotePA}
                          </button>
                        </td>
                        <td style={{ padding: '8px 10px', color: 'var(--text2)' }}>{a.produto}</td>
                        <td style={{ padding: '8px 10px' }}>{tipo.icon} {tipo.label}</td>
                        <td style={{ padding: '8px 10px', fontFamily: 'var(--font-m)' }}>{a.caixa}</td>
                        <td style={{ padding: '8px 10px', fontFamily: 'var(--font-m)', color: 'var(--text2)' }}>{a.pallet}</td>
                        <td style={{ padding: '8px 10px', color: 'var(--text2)' }}>{a.posicao}</td>
                        <td style={{ padding: '8px 10px' }}>{a.quantidade}</td>
                        <td style={{ padding: '8px 10px', fontFamily: 'var(--font-m)' }}>{a.dataColeta}</td>
                        <td style={{ padding: '8px 10px', fontFamily: 'var(--font-m)' }}>{a.dataValidade}</td>
                        <td style={{ padding: '8px 10px' }}>
                          {a.destruida ? (
                            <span className="bdg" style={{ fontSize: 9, background: 'var(--surface2)', color: 'var(--text3)', border: '1px solid var(--border2)' }}>
                              🗑️ Destruída
                            </span>
                          ) : liberada ? (
                            <span className="bdg bdg-alr" style={{ fontSize: 9 }}>
                              ⏰ Liberada p/ Destruir
                            </span>
                          ) : (
                            <span className="bdg bdg-ok" style={{ fontSize: 9 }}>
                              📦 Retida
                            </span>
                          )}
                        </td>
                        <td style={{ padding: '8px 10px', textAlign: 'right' }}>
                          {!a.destruida && (
                            <button
                              onClick={() => marcarDestruida(a)}
                              className="btn btn-sm btn-ghost"
                              style={{
                                fontSize: 10, padding: '3px 8px',
                                borderColor: liberada ? 'var(--per)' : 'var(--border2)',
                                color: liberada ? 'var(--per)' : 'var(--text3)',
                                cursor: liberada ? 'pointer' : 'not-allowed',
                                opacity: liberada ? 1 : 0.5,
                              }}
                              disabled={!liberada}
                              title={liberada ? 'Marcar como destruída' : 'Aguardar 1 ano após a validade do lote (RDC 658/2022)'}
                            >
                              🗑️ Destruir
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rodapé informativo */}
      <div style={{
        marginTop: 14, padding: '12px 14px',
        background: 'var(--inf-p)', border: '1px solid var(--inf-b)',
        borderRadius: 6, color: 'var(--inf)', fontSize: 11,
        display: 'flex', gap: 10, alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: 16 }}>ℹ️</span>
        <div>
          <strong>Política de Retenção (ANVISA RDC 658/2022)</strong><br />
          Amostras devem ser mantidas em condições adequadas por <strong>1 ano após o vencimento</strong> do lote.
          Após esse prazo, a amostra pode ser destruída — a destruição precisa ser registrada com matrícula
          do responsável e ficará disponível na trilha de auditoria.
        </div>
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
        fontFamily: 'var(--font-d)', fontSize: 26, fontWeight: 700, color,
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
