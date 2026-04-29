import { MFS_MACRO } from '../data/sinotico-mfs-macro.js';

/**
 * Visao macro da aba Producao: 5 cards (MF1..MF5) clicaveis.
 * Ao clicar num card, dispara `onSelectMF(mfId)` — o pai (SinoticoScreen) muda
 * o estado e renderiza o sinotico legacy daquela MF.
 *
 * Cards mostram apenas o nome da MF em destaque (sem icone/descricao).
 */
export default function SinoticoProducaoMacro({ onSelectMF }) {
  const totLinhas = MFS_MACRO.reduce((s, m) => s + m.linhas, 0);
  const totProd = MFS_MACRO.reduce((s, m) => s + m.emProducao, 0);
  const totParadas = MFS_MACRO.reduce((s, m) => s + m.paradas, 0);
  const totAlertas = MFS_MACRO.reduce((s, m) => s + m.alertas, 0);
  const oeesAtivos = MFS_MACRO.filter((m) => m.oee !== null);
  const oeeMedio = oeesAtivos.length
    ? Math.round(oeesAtivos.reduce((s, m) => s + m.oee, 0) / oeesAtivos.length)
    : null;

  return (
    <>
      <div className="g4 mb14">
        <div className="card cv" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Linhas em Produção</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--verde)' }}>
            {totProd}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>de {totLinhas} linhas (5 MFs)</div>
        </div>
        <div className="card ca" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Máquinas em Parada</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--per)' }}>
            {totParadas}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>requerem ação</div>
        </div>
        <div className="card co" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Alertas Ativos</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--alr)' }}>
            {totAlertas}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>velocidade abaixo do padrão</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">OEE Médio (MFs ativas)</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--inf)' }}>
            {oeeMedio !== null ? (
              <>
                {oeeMedio}
                <span style={{ fontSize: 18, color: 'var(--text3)' }}>%</span>
              </>
            ) : (
              <span style={{ fontSize: 22, color: 'var(--text3)' }}>—</span>
            )}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>meta: 85%</div>
        </div>
      </div>

      <div
        style={{
          fontSize: 9,
          fontWeight: 900,
          letterSpacing: '.16em',
          textTransform: 'uppercase',
          color: 'var(--text3)',
          marginBottom: 12,
          paddingBottom: 6,
          borderBottom: '1px solid var(--border)',
        }}
      >
        Selecione uma MF para abrir seu sinótico detalhado
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14,
        }}
      >
        {MFS_MACRO.map((mf) => (
          <MFCard key={mf.id} mf={mf} onClick={() => onSelectMF(mf.id)} />
        ))}
      </div>
    </>
  );
}

function MFCard({ mf, onClick }) {
  const ativa = mf.status === 'ativa';
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: 'left',
        background: 'var(--surface)',
        border: ativa ? '2px solid var(--verde)' : '2px solid var(--border)',
        borderRadius: 9,
        padding: 16,
        cursor: 'pointer',
        font: 'inherit',
        color: 'inherit',
        position: 'relative',
        boxShadow: 'var(--sh)',
        transition: 'transform .15s, box-shadow .15s, border-color .15s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--sh2)';
        e.currentTarget.style.borderColor = 'var(--verde)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = 'var(--sh)';
        e.currentTarget.style.borderColor = ativa ? 'var(--verde)' : 'var(--border)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 32, fontWeight: 700, color: 'var(--text)', lineHeight: 1 }}>
            {mf.titulo}
          </div>
        </div>
        {ativa ? (
          <span className="bdg bdg-ok" style={{ fontSize: 9 }}>● Ativa</span>
        ) : (
          <span className="bdg bdg-ouro" style={{ fontSize: 9 }}>⏳ Config.</span>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 8,
          padding: '10px 12px',
          background: 'var(--surface2)',
          borderRadius: 6,
          marginBottom: 10,
        }}
      >
        <KpiMini label="Em produção" value={`${mf.emProducao}/${mf.linhas}`} color="var(--verde)" />
        <KpiMini
          label="OEE"
          value={mf.oee !== null ? `${mf.oee}%` : '—'}
          color={mf.oee !== null ? 'var(--inf)' : 'var(--text3)'}
        />
        <KpiMini label="Paradas" value={mf.paradas} color={mf.paradas > 0 ? 'var(--per)' : 'var(--text3)'} />
        <KpiMini label="Alertas" value={mf.alertas} color={mf.alertas > 0 ? 'var(--alr)' : 'var(--text3)'} />
      </div>

      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: 'var(--verde)',
          textAlign: 'right',
          letterSpacing: '.08em',
          textTransform: 'uppercase',
        }}
      >
        Abrir sinótico →
      </div>
    </button>
  );
}

function KpiMini({ label, value, color }) {
  return (
    <div>
      <div
        style={{
          fontSize: 8,
          fontWeight: 900,
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'var(--text3)',
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-m)', fontSize: 14, fontWeight: 700, color }}>{value}</div>
    </div>
  );
}
