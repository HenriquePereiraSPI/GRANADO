import { useState } from 'react';
import { FABRICACAO, STATUS_LABEL } from '../data/sinotico-fabricacao.js';

const MFS = ['MF1', 'MF2', 'MF3', 'MF4', 'MF5'];

/**
 * Sinotico de Fabricacao (ERU 5.1.55).
 * Granularidade: Maquina.
 *
 * Mesmo padrao da aba Producao:
 *   - Inicial: visao macro com 5 cards (MF1..MF5).
 *   - Click num card: abre detalhe daquela MF (grid de maquinas) + botao voltar.
 *
 * Cards mostram apenas o nome da MF em destaque (sem icone/descricao).
 */
export default function SinoticoFabricacao() {
  const [mfSelected, setMfSelected] = useState(null);

  if (!mfSelected) {
    return <SinoticoFabricacaoMacro onSelectMF={setMfSelected} />;
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-sm btn-ghost"
        onClick={() => setMfSelected(null)}
        style={{ marginBottom: 10 }}
      >
        ← Voltar à visão geral das MFs
      </button>
      <SinoticoFabricacaoDetalhe mf={mfSelected} />
    </div>
  );
}

/* ────────────────────────────────────────────────────────
   VISAO MACRO — 5 cards (MF1..MF5)
─────────────────────────────────────────────────────────*/

function SinoticoFabricacaoMacro({ onSelectMF }) {
  const totSalas = MFS.reduce((acc, m) => acc + FABRICACAO[m].salas.length, 0);
  const totOk = MFS.reduce(
    (acc, m) => acc + FABRICACAO[m].salas.filter((s) => s.status === 'ok').length,
    0,
  );
  const totErr = MFS.reduce(
    (acc, m) => acc + FABRICACAO[m].salas.filter((s) => s.status === 'err').length,
    0,
  );
  const totAlr = MFS.reduce(
    (acc, m) => acc + FABRICACAO[m].salas.filter((s) => s.status === 'alr').length,
    0,
  );

  return (
    <>
      <div className="g4 mb14">
        <div className="card cv" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Máquinas em Operação</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--ok)' }}>
            {totOk}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>de {totSalas} máquinas (5 MFs)</div>
        </div>
        <div className="card co" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Alertas</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--alr)' }}>
            {totAlr}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>requerem atenção</div>
        </div>
        <div className="card ca" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Paradas</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--per)' }}>
            {totErr}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>máquinas bloqueadas</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">MFs Ativas</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--inf)' }}>
            {MFS.filter((m) => FABRICACAO[m].status === 'ativa').length}
            <span style={{ fontSize: 18, color: 'var(--text3)' }}>/{MFS.length}</span>
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>módulos com dados</div>
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
        Selecione uma MF para abrir as máquinas de fabricação
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 14,
        }}
      >
        {MFS.map((id) => (
          <MFCard key={id} id={id} mf={FABRICACAO[id]} onClick={() => onSelectMF(id)} />
        ))}
      </div>
    </>
  );
}

function MFCard({ id, mf, onClick }) {
  const ativa = mf.status === 'ativa';
  const ok = mf.salas.filter((s) => s.status === 'ok').length;
  const err = mf.salas.filter((s) => s.status === 'err').length;
  const alr = mf.salas.filter((s) => s.status === 'alr').length;

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
            {id}
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
        <KpiMini label="Máquinas" value={mf.salas.length} color="var(--text2)" />
        <KpiMini label="Operando" value={ok} color={ok > 0 ? 'var(--ok)' : 'var(--text3)'} />
        <KpiMini label="Alertas" value={alr} color={alr > 0 ? 'var(--alr)' : 'var(--text3)'} />
        <KpiMini label="Paradas" value={err} color={err > 0 ? 'var(--per)' : 'var(--text3)'} />
      </div>

      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: ativa ? 'var(--verde)' : 'var(--text3)',
          textAlign: 'right',
          letterSpacing: '.08em',
          textTransform: 'uppercase',
        }}
      >
        {ativa ? 'Abrir máquinas →' : 'Sem dados ainda'}
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

/* ────────────────────────────────────────────────────────
   DETALHE DE UMA MF — grid de maquinas
─────────────────────────────────────────────────────────*/

function SinoticoFabricacaoDetalhe({ mf }) {
  const data = FABRICACAO[mf];
  const okSalas = data.salas.filter((s) => s.status === 'ok').length;
  const errSalas = data.salas.filter((s) => s.status === 'err').length;
  const alrSalas = data.salas.filter((s) => s.status === 'alr').length;
  const idleSalas = data.salas.filter((s) => s.status === 'idle').length;

  if (data.status !== 'ativa') {
    return (
      <div className="card cv" style={{ padding: 40, textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text2)', marginBottom: 8 }}>
          {data.titulo}
        </div>
        <div style={{ fontSize: 13, color: 'var(--text3)', marginBottom: 18 }}>
          Sinótico em configuração. Disponível após levantamento de campo das máquinas de fabricação.
        </div>
        <span className="bdg bdg-ouro">⏳ Em Configuração</span>
      </div>
    );
  }

  return (
    <>
      <div className="g4 mb14">
        <div className="card cv" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Máquinas em Operação</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--ok)' }}>
            {okSalas}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>de {data.salas.length} máquinas</div>
        </div>
        <div className="card co" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Alertas</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--alr)' }}>
            {alrSalas}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>requerem atenção</div>
        </div>
        <div className="card ca" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Paradas</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--per)' }}>
            {errSalas}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>máquinas bloqueadas</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: 14 }}>
          <div className="kpi-l">Aguardando</div>
          <div style={{ fontFamily: 'var(--font-d)', fontSize: 38, fontWeight: 700, color: 'var(--text3)' }}>
            {idleSalas}
          </div>
          <div style={{ fontSize: 10, color: 'var(--text3)' }}>sem OP alocada</div>
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
          {data.titulo} · {data.salas.length} máquinas
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 10,
          }}
        >
          {data.salas.map((s) => (
            <SalaCard key={s.id} sala={s} />
          ))}
        </div>
      </div>
    </>
  );
}

function SalaCard({ sala }) {
  return (
    <div
      className={`sin-maquina ${sala.status}`}
      style={{
        minWidth: 0,
        padding: 12,
        textAlign: 'left',
        cursor: 'default',
      }}
      title={sala.obs || ''}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text)' }}>{sala.nome}</div>
        <div style={{ fontSize: 9, color: 'var(--text3)', fontFamily: 'var(--font-m)' }}>{sala.id}</div>
      </div>

      <div className="sin-maq-status" style={{ marginBottom: 8 }}>
        {STATUS_LABEL[sala.status]}
      </div>

      <div style={{ fontSize: 10, color: 'var(--text2)', lineHeight: 1.5 }}>
        <div>
          <strong style={{ color: sala.op === '—' ? 'var(--text3)' : 'var(--verde)' }}>{sala.op}</strong>
        </div>
        <div style={{ color: 'var(--text3)' }}>
          {sala.etapa !== '—' ? sala.etapa : '— sem etapa —'}
        </div>
        <div style={{ color: 'var(--text3)', fontFamily: 'var(--font-m)', fontSize: 9 }}>
          {sala.equip}
        </div>
        {sala.obs && (
          <div
            style={{
              marginTop: 6,
              fontSize: 9,
              padding: '4px 6px',
              borderRadius: 4,
              background: 'rgba(154,90,0,.08)',
              color: 'var(--alr)',
            }}
          >
            ⚠ {sala.obs}
          </div>
        )}
      </div>
    </div>
  );
}
