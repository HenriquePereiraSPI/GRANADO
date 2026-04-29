import { BOXES_PESAGEM, STATUS_LABEL } from '../data/sinotico-pesagem.js';

/**
 * Sinotico de Pesagem (ERU 5.1.55).
 * Granularidade: Box de Pesagem.
 * Layout: 5 cards (um por box), cada card mostra 3 balancas no estilo `sin-maquina`.
 */
export default function SinoticoPesagem() {
  const totBalancas = BOXES_PESAGEM.reduce((acc, p) => acc + p.balancas.length, 0);
  const okBalancas = BOXES_PESAGEM.reduce(
    (acc, p) => acc + p.balancas.filter((b) => b.status === 'ok').length,
    0,
  );
  const errBalancas = BOXES_PESAGEM.reduce(
    (acc, p) => acc + p.balancas.filter((b) => b.status === 'err').length,
    0,
  );
  const alrBalancas = BOXES_PESAGEM.reduce(
    (acc, p) => acc + p.balancas.filter((b) => b.status === 'alr').length,
    0,
  );

  return (
    <>
      <div className="g4 mb14">
        <div className="card cv" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Boxes de Pesagem</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--verde)' }}>
            {BOXES_PESAGEM.length}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>
            {BOXES_PESAGEM.filter((p) => p.op !== '—').length} com OP ativa
          </div>
        </div>
        <div className="card cv" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Balanças Operando</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--ok)' }}>
            {okBalancas}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>de {totBalancas} balanças</div>
        </div>
        <div className="card co" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Alertas</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--alr)' }}>
            {alrBalancas}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>requerem atenção</div>
        </div>
        <div className="card ca" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Paradas</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--per)' }}>
            {errBalancas}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>balanças bloqueadas</div>
        </div>
      </div>

      <div className="card cv" style={{ padding: 18 }}>
        <div
          style={{
            fontSize: 9,
            fontWeight: 900,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: 'var(--text3)',
            marginBottom: 14,
            paddingBottom: 6,
            borderBottom: '1px solid var(--border)',
          }}
        >
          5 Boxes de Pesagem · 3 Balanças por Box
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 14,
          }}
        >
          {BOXES_PESAGEM.map((b) => (
            <BoxCard key={b.id} box={b} />
          ))}
        </div>
      </div>
    </>
  );
}

function BoxCard({ box }) {
  return (
    <div
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 9,
        padding: 12,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div
          className="sin-linha-label"
          style={{ background: 'var(--verde)', color: '#FDFAF1', flexShrink: 0 }}
        >
          {box.id}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{box.nome}</div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>{box.sala}</div>
        </div>
      </div>

      <div
        style={{
          fontSize: 10,
          color: 'var(--text2)',
          marginBottom: 10,
          padding: '6px 8px',
          background: 'var(--surface2)',
          borderRadius: 5,
        }}
      >
        <strong style={{ color: box.op === '—' ? 'var(--text3)' : 'var(--verde)' }}>
          {box.op}
        </strong>
        {box.op !== '—' && <span style={{ color: 'var(--text3)' }}> · {box.operador}</span>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {box.balancas.map((b) => (
          <BalancaCard key={b.id} balanca={b} />
        ))}
      </div>
    </div>
  );
}

function BalancaCard({ balanca }) {
  return (
    <div
      className={`sin-maquina ${balanca.status}`}
      style={{ minWidth: 0, padding: '8px 6px' }}
      title={balanca.obs || balanca.ultimaPesagem}
    >
      <div className="sin-maq-ico">⚖️</div>
      <div className="sin-maq-nome" style={{ fontSize: 8.5 }}>
        {balanca.id}
      </div>
      <div className="sin-maq-status">{STATUS_LABEL[balanca.status]}</div>
      <div className="sin-maq-vel">{balanca.faixa}</div>
    </div>
  );
}
