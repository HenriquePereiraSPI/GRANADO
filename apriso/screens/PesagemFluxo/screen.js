/* ============================================================
   PesagemFluxo · state machine client-side da tela unica de pesagem.

   Pattern:
     - STATES = enum dos passos
     - ctx    = objeto compartilhado entre os steps
     - GUARDS = pre-condicoes pra entrar em cada state
     - goTo(next) = unica porta de transicao
     - renderByState() = alterna display + sincroniza dados

   Funcoes ficam no escopo global do arquivo (sem IIFE/namespace),
   acessiveis direto nos onclickevent inline do HTML.
   ============================================================ */
'use strict';

// ── Enum dos states ──────────────────────────────────────────
const STATES = Object.freeze({
  SEL_MPS:   0,
  INICIAR:   1,
  SCAN:      2,
  PESAR:     3,
  CONFIRMAR: 4,
  JDE:       5,
});

// ── Contexto compartilhado entre os steps ────────────────────
// Tudo que o operador acumula durante o fluxo vive aqui.
const ctx = {
  op: 'OP-2026-0416',
  operador: 'J. Santos',
  sala: 'A',
  balanca: 'B-02',
  mps: [
    { codigo: 'MP-01001', nome: 'Glicerina USP',  qtdAlvo: 45.000, tolerancia: 0.500, done: false },
    { codigo: 'MP-01002', nome: 'Fenoxietanol',   qtdAlvo:  3.000, tolerancia: 0.050, done: false },
    { codigo: 'MP-01003', nome: 'Acido Citrico',  qtdAlvo: 12.450, tolerancia: 0.200, done: false },
    { codigo: 'MP-01004', nome: 'Lauril Sulfato', qtdAlvo:  8.700, tolerancia: 0.150, done: false },
  ],
  mpSelecionada:  null,
  loteScanado:    null,
  pesoCapturado:  null,
  pesoConfirmado: false,
};

// ── Guards: pre-condicoes para entrar em cada state ──────────
// Retornam `true` ou uma string com o motivo do bloqueio.
const GUARDS = {
  [STATES.INICIAR]:   () => ctx.mpSelecionada     ? true : 'Selecione uma MP da lista antes de iniciar.',
  [STATES.SCAN]:      () => ctx.mpSelecionada     ? true : 'Selecione uma MP antes do scan.',
  [STATES.PESAR]:     () => ctx.loteScanado       ? true : 'Escaneie a etiqueta antes de pesar.',
  [STATES.CONFIRMAR]: () => ctx.pesoCapturado != null ? true : 'Capture o peso antes de confirmar.',
  [STATES.JDE]:       () => ctx.pesoConfirmado    ? true : 'Confirme o peso antes de enviar pro JDE.',
};

// State corrente
let state = STATES.SEL_MPS;
let _scaleTimer = null;

// ============================================================
//   Transicao — unica forma de mudar state
// ============================================================
function goTo(next) {
  // Side-effect do CONFIRMAR → JDE: marca pesoConfirmado antes do guard
  if (state === STATES.CONFIRMAR && next === STATES.JDE) {
    ctx.pesoConfirmado = true;
  }

  const guard = GUARDS[next];
  if (guard) {
    const res = guard();
    if (res !== true) {
      alert('⚠ ' + (typeof res === 'string' ? res : 'Acao nao permitida.'));
      return;
    }
  }

  state = next;
  renderByState();

  // Side-effects pos-transicao
  if (next === STATES.PESAR) simularLeituraBalanca();
  if (next === STATES.JDE)   enviarParaJde();
}

// ============================================================
//   Render — alterna display + sincroniza dados
// ============================================================
function renderByState() {
  document.querySelectorAll('.pfx-step').forEach(el => {
    el.style.display = (parseInt(el.dataset.step, 10) === state) ? '' : 'none';
  });

  syncStepper();

  switch (state) {
    case STATES.SEL_MPS:   renderSelMps();    break;
    case STATES.INICIAR:   renderIniciar();   break;
    case STATES.SCAN:      renderScan();      break;
    case STATES.PESAR:     renderPesar();     break;
    case STATES.CONFIRMAR: renderConfirmar(); break;
    case STATES.JDE:       renderJde();       break;
  }
}

// ============================================================
//   Renders por state
// ============================================================
function renderSelMps() {
  const list = document.getElementById('pfx-mps-list');
  list.innerHTML = ctx.mps.map((mp, i) => {
    const sel  = (ctx.mpSelecionada && ctx.mpSelecionada.codigo === mp.codigo) ? 'is-selected' : '';
    const done = mp.done ? 'is-done' : '';
    return `<div class="pfx-mp-row ${sel} ${done}" data-mp-index="${i}">
      <span class="pfx-mp-row__code">${mp.codigo}</span>
      <span class="pfx-mp-row__name">${mp.nome}${mp.done ? ' · concluida' : ''}</span>
      <span class="pfx-mp-row__qty">${fmtKg(mp.qtdAlvo)}</span>
    </div>`;
  }).join('');

  list.querySelectorAll('.pfx-mp-row').forEach(row => {
    row.addEventListener('click', () => {
      const mp = ctx.mps[parseInt(row.dataset.mpIndex, 10)];
      if (!mp || mp.done) return;
      ctx.mpSelecionada = mp;
      renderSelMps();
    });
  });
}

function renderIniciar() {
  const mp = ctx.mpSelecionada;
  setText('pfx-iniciar-mp',      mp ? `${mp.codigo} · ${mp.nome}` : '—');
  setText('pfx-iniciar-qtd',     mp ? fmtKg(mp.qtdAlvo) : '—');
  setText('pfx-iniciar-balanca', `${ctx.balanca} · Sala ${ctx.sala}`);
}

function renderScan() {
  const inp = document.getElementById('pfx-scan-input');
  inp.value = ctx.loteScanado || '';
  setTimeout(() => inp.focus(), 50);
  refreshScanStatus();
}

function renderPesar() {
  const mp = ctx.mpSelecionada;
  setText('pfx-scale-tolerance',
    mp ? `Tolerancia: ±${fmtKg(mp.tolerancia)} (alvo ${fmtKg(mp.qtdAlvo)})` : '—');
  setText('pfx-scale-readout', '0,000 kg');
  ctx.pesoCapturado = null;
}

function renderConfirmar() {
  const mp = ctx.mpSelecionada;
  const peso = ctx.pesoCapturado;
  const desvio = (peso != null && mp) ? (peso - mp.qtdAlvo) : null;

  setText('pfx-conf-mp',   mp ? `${mp.codigo} · ${mp.nome}` : '—');
  setText('pfx-conf-lote', ctx.loteScanado || '—');
  setText('pfx-conf-peso', fmtKg(peso));

  const desvioEl = document.getElementById('pfx-conf-desvio');
  desvioEl.textContent = fmtSigned(desvio);
  desvioEl.style.color = (desvio != null && mp)
    ? (Math.abs(desvio) > mp.tolerancia ? '#C0392B' : '#1C7A38')
    : '';
}

function renderJde() {
  const stEl  = document.getElementById('pfx-jde-status');
  const actEl = document.getElementById('pfx-jde-actions');
  stEl.className = 'pfx-jde-status';
  stEl.textContent = '⏳ Enviando para o JDE…';
  actEl.style.display = 'none';

  // Payload coletado nos steps anteriores — mesmo objeto que iria pro BC.
  const mp     = ctx.mpSelecionada;
  const peso   = ctx.pesoCapturado;
  const desvio = (peso != null && mp) ? (peso - mp.qtdAlvo) : null;

  setText('pfx-jde-op',           ctx.op);
  setText('pfx-jde-operador',     ctx.operador);
  setText('pfx-jde-localizacao',  `Sala ${ctx.sala} · ${ctx.balanca}`);
  setText('pfx-jde-mp',           mp ? `${mp.codigo} · ${mp.nome}` : '—');
  setText('pfx-jde-alvo',         mp ? fmtKg(mp.qtdAlvo) : '—');
  setText('pfx-jde-tol',          mp ? `±${fmtKg(mp.tolerancia)}` : '—');
  setText('pfx-jde-lote',         ctx.loteScanado || '—');
  setText('pfx-jde-peso',         fmtKg(peso));
  setText('pfx-jde-timestamp',    new Date().toLocaleString('pt-BR'));

  const desvioEl = document.getElementById('pfx-jde-desvio');
  desvioEl.textContent = fmtSigned(desvio);
  desvioEl.style.color = (desvio != null && mp)
    ? (Math.abs(desvio) > mp.tolerancia ? '#C0392B' : '#1C7A38')
    : '';
}

// ============================================================
//   Acoes dos steps
// ============================================================
function onScanInput(value) {
  ctx.loteScanado = (value || '').trim();
  refreshScanStatus();
}

function refreshScanStatus() {
  const stEl  = document.getElementById('pfx-scan-status');
  const btnEl = document.getElementById('pfx-scan-next-btn');
  const v = ctx.loteScanado || '';
  stEl.className = 'pfx-scan-status';

  if (!v) {
    stEl.textContent = 'Aguardando leitura…';
    btnEl.setAttribute('disabled', 'true');
    return;
  }

  // Validacao: lote = "L" + 8 digitos
  if (/^L\d{8}$/i.test(v)) {
    stEl.classList.add('is-ok');
    stEl.textContent = `✓ Lote ${v} aceito.`;
    btnEl.removeAttribute('disabled');
  } else {
    stEl.classList.add('is-error');
    stEl.textContent = '✕ Formato invalido (esperado L + 8 digitos).';
    btnEl.setAttribute('disabled', 'true');
  }
}

function simularLeituraBalanca() {
  if (_scaleTimer) clearInterval(_scaleTimer);
  const mp = ctx.mpSelecionada;
  if (!mp) return;
  const alvo = mp.qtdAlvo + (Math.random() * 0.4 - 0.2);
  let peso = 0;
  const readout = document.getElementById('pfx-scale-readout');
  _scaleTimer = setInterval(() => {
    peso += alvo / 30;
    if (peso >= alvo) { peso = alvo; clearInterval(_scaleTimer); _scaleTimer = null; }
    readout.textContent = fmtKg(peso);
  }, 60);
}

function capturarPeso() {
  if (_scaleTimer) { clearInterval(_scaleTimer); _scaleTimer = null; }
  const raw = (document.getElementById('pfx-scale-readout').textContent || '')
    .replace(' kg', '').replace(',', '.');
  const peso = parseFloat(raw);
  if (isNaN(peso) || peso <= 0) {
    alert('⚠ Balanca ainda nao estabilizou.');
    return;
  }
  ctx.pesoCapturado = peso;
  goTo(STATES.CONFIRMAR);
}

function enviarParaJde() {
  setTimeout(() => {
    const ok = Math.random() > 0.1;
    const stEl  = document.getElementById('pfx-jde-status');
    const actEl = document.getElementById('pfx-jde-actions');
    if (ok) {
      stEl.className = 'pfx-jde-status is-ok';
      stEl.textContent = `✓ MP ${ctx.mpSelecionada.codigo} enviada com sucesso para o JDE.`;
      ctx.mpSelecionada.done = true;
    } else {
      stEl.className = 'pfx-jde-status is-error';
      stEl.textContent = '✕ Falha no envio. Verifique a conexao com o JDE e tente novamente.';
    }
    actEl.style.display = '';
  }, 1500);
}

function iniciarNovaMp() {
  ctx.mpSelecionada  = null;
  ctx.loteScanado    = null;
  ctx.pesoCapturado  = null;
  ctx.pesoConfirmado = false;
  state = STATES.SEL_MPS;
  renderByState();
}

function cancelar() {
  if (!confirm('Cancelar a pesagem atual? Os dados deste step serao perdidos.')) return;
  iniciarNovaMp();
}

function encerrar() {
  alert('Voltar para a tela de Selecao de Ordem (acao Apriso).');
}

// ============================================================
//   Sincronizacao do <granado-stepper>
// ============================================================
function syncStepper() {
  const stepper = document.getElementById('pfx-stepper');
  if (!stepper) return;
  const ROTULOS = [
    { key: 'sel', subtitle: 'Selecao MP' },
    { key: 'ini', subtitle: 'Iniciar' },
    { key: 'scn', subtitle: 'Scan' },
    { key: 'pes', subtitle: 'Pesar' },
    { key: 'cnf', subtitle: 'Confirmar' },
    { key: 'jde', subtitle: 'JDE' },
  ];
  stepper.setAttribute('steps', JSON.stringify(
    ROTULOS.map((r, i) => {
      const passed  = i < state;
      const current = i === state;
      return {
        key: r.key,
        title: passed ? '✓' : String(i + 1),
        subtitle: r.subtitle,
        isFilled: passed,
        isCurrent: current,
        onClickEvent: passed ? `goTo(${i});` : null,
      };
    })
  ));
}

// ============================================================
//   Utilitarios
// ============================================================
function fmtKg(n) {
  return n != null ? `${n.toFixed(3).replace('.', ',')} kg` : '—';
}
function fmtSigned(n) {
  if (n == null) return '—';
  return `${n >= 0 ? '+' : ''}${n.toFixed(3).replace('.', ',')} kg`;
}
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// ============================================================
//   Bootstrap
// ============================================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderByState);
} else {
  renderByState();
}
