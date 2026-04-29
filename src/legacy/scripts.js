// AUTO-GERADO por scripts/extract.py — NAO EDITE.
// Concatenacao de todos os blocos <script> do HTML original.
// Carregado uma vez no boot do React via injectLegacyScripts().
/* eslint-disable */

/* ── Relógio ─────────────────────────────────────────── */
(function tick(){
  const now = new Date();
  const t = now.toLocaleTimeString('pt-BR');
  const d = now.toLocaleDateString('pt-BR',{weekday:'short',day:'2-digit',month:'short',year:'numeric'});
  document.getElementById('sb-clk').textContent = t;
  document.getElementById('sb-date').textContent = d;
  const oc = document.getElementById('oee-clk');
  if(oc) oc.textContent = t;
  const balEl = document.getElementById('bal-val');
  if(balEl){ balEl.textContent = (411.7 + Math.random()*0.3).toFixed(2); }
  setTimeout(tick,1000);
})();

/* ── Navegação ───────────────────────────────────────── */
const breadcrumbs = {
  'sinotico':        'Sinótico da Fábrica',
  'oee':             'OEE Dashboard',
  'prod-ordens':     'Produção › Ordens de Produção',
  'prod-materiais':  'Produção › Materiais da OP',
  'prod-checkin':    'Produção › Check-in de Operadores',
  'prod-iniciar':    'Produção › Iniciar Ordem — Validações',
  'prod-finalizar':  'Produção › Finalização de Ordem',
  'prod-paradas':    'Produção › Paradas de Máquina',
  'prod-cockpit':    'Produção › Cockpit de Execução',
  'prod-qualidade':  'Produção › Qualidade em Processo',
  'prod-docs':       'Produção › Documentos da OP',
  'prod-chamados':   'Produção › Chamados Andon',
  'prod-rastr':      'Produção › Rastreabilidade',
  'prod-sinotico':   'Produção › Sinótico da Fábrica',
  'prod-devol':      'Produção › Devolução de Embalagens',
  'pes-ordens':      'Pesagem › Seleção de Ordem',
  'pes-cockpit':     'Pesagem › Cockpit de Pesagem',
  'pes-mps':         'Pesagem › MPs Pesadas',
  'pes-pendencias':  'Pesagem › Pendências',
  'pes-checklist':   'Pesagem › Checklist de Limpeza',
  'pes-gaiola':      'Pesagem › Gestão de Gaiola',
  'pes-devol-mp':    'Pesagem › Devolução de MP',
  'pes-checkout':    'Pesagem › Checkout / Validação',
  'pes-rastr':       'Pesagem › Rastreabilidade',
  'fab-ordens':      'Fabricação › Seleção de Ordens',
  'fab-iniciar':     'Fabricação › Iniciar Ordem — Pré-Validações',
  'fab-checkin':     'Fabricação › Check-in de MPs',
  'fab-inbatch':     'Fabricação › Fases InBatch',
  'fab-amostras':    'Fabricação › Controle de Amostras',
  'fab-tanque':      'Fabricação › Seleção de Tanque',
  'fab-fechar':      'Fabricação › Fechamento da Ordem',
  'fab-rastr':       'Fabricação › Rastreabilidade',
  'fab-saldo':       'Fabricação › Saldo de Equipamentos (JDE)',
  'rel-oee':         'Relatórios › OEE Dashboard',
  'rel-sinotico':    'Relatórios › Sinótico da Fábrica',
  'rel-andon':       'Relatórios › Chamados Andon',
  'rel-visao-ordens':'Relatórios › Visão de Ordens',
  'rel-mps':         'Relatórios › MPs Pesadas',
  'rel-producao':    'Relatórios › Produção',
  'rel-rastr':       'Relatórios › Rastreabilidade de Lote',
  'rel-rejeitos':    'Relatórios › Rejeitos e Aparas',
  'rel-perdas':      'Relatórios › Perdas de Processo',
  'rel-paradas':     'Relatórios › Paradas e Disponibilidade',
  'rel-autonomia':   'Relatórios › Autonomia de Linhas',
  'rel-insumos':     'Relatórios › Perdas por Insumo',
  'rel-devolucao':   'Relatórios › Devolução de Materiais',
  'rel-auditoria':   'Relatórios › Trilha de Auditoria',
};

function nav(id, subEl, modId) {
  // Aliases: rel-sinotico → sinotico (tela completa), rel-andon → prod-chamados
  var aliasMap = {'rel-sinotico':'sinotico','rel-andon':'prod-chamados'};
  if(aliasMap[id]) { id = aliasMap[id]; }

  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.sb-sub-item').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.sb-module-btn').forEach(b=>b.classList.remove('active'));
  const sc = document.getElementById('screen-'+id);
  if(sc) sc.classList.add('active');
  if(subEl) subEl.classList.add('active');
  const bc = document.getElementById('breadcrumb');
  const parts = (breadcrumbs[id]||id).split(' › ');
  bc.innerHTML = parts.length>1 ? parts[0]+' › <strong>'+parts.slice(1).join(' › ')+'</strong>' : '<strong>'+parts[0]+'</strong>';
  window.scrollTo?window.scrollTo(0,0):null;
  const content = document.querySelector('.content');
  if(content) content.scrollTop=0;
  // Auto-mark embalagens after visiting materiais
  if(id==='prod-materiais' && typeof FAB_APROVACOES!=='undefined' && !FAB_APROVACOES.embalagens){
    setTimeout(()=>{
      FAB_APROVACOES.embalagens=true;
      fabMarcarAprovado('fval-2');
      fabAtualizarProgresso();
    },600);
  }
}


/* ── Documentos GED ─────────────────────────────────── */
let docItemAtivo = null;

function docAbrir(el) {
  // Destacar item selecionado
  document.querySelectorAll('.doc-item').forEach(i => {
    i.style.background = '';
    i.style.borderLeft = '';
    i.querySelector('span:last-child').style.color = 'var(--text3)';
  });
  el.style.background = 'var(--verde-dim)';
  el.style.borderLeft = '3px solid var(--verde)';
  el.querySelector('span:last-child').style.color = 'var(--verde)';
  docItemAtivo = el;

  const url   = el.dataset.url;
  const nome  = el.querySelector('div div:first-child').textContent;
  const meta  = el.querySelector('div div:nth-child(2)').textContent;
  const pend  = el.querySelector('.bdg-alr') !== null;

  document.getElementById('doc-viewer-nome').textContent = nome;
  document.getElementById('doc-viewer-meta').textContent = meta;
  document.getElementById('doc-btn-imprimir').style.display = 'inline-flex';
  document.getElementById('doc-btn-confirmar').style.display = pend ? 'inline-flex' : 'none';

  const iframe    = document.getElementById('doc-iframe');
  const placeholder = document.getElementById('doc-placeholder');
  const semArquivo  = document.getElementById('doc-sem-arquivo');

  if (url) {
    placeholder.style.display   = 'none';
    semArquivo.style.display    = 'none';
    iframe.style.display        = 'block';
    iframe.src = url;
  } else {
    iframe.style.display        = 'none';
    placeholder.style.display   = 'none';
    semArquivo.style.display    = 'flex';
    semArquivo.style.flexDirection = 'column';
    semArquivo.style.alignItems = 'center';
    document.getElementById('doc-sem-nome').textContent = nome;
  }
}

function docConfirmar() {
  if (!docItemAtivo) return;
  const bdg = docItemAtivo.querySelector('.bdg-alr');
  if (bdg) {
    bdg.className = 'bdg bdg-ok';
    bdg.textContent = '✓ Lido e Confirmado';
  }
  docItemAtivo.style.borderLeft = '3px solid var(--ok)';
  document.getElementById('doc-btn-confirmar').style.display = 'none';
  alert('✅ Leitura confirmada e registrada no GED SoftExpert.\n\nOperador: J. Santos · ' + new Date().toLocaleString('pt-BR'));
}

function docFiltrar() {
  const q = document.getElementById('doc-search').value.toLowerCase();
  document.querySelectorAll('.doc-item').forEach(item => {
    const txt = item.textContent.toLowerCase();
    item.style.display = txt.includes(q) ? 'flex' : 'none';
  });
}

function docFiltrarTipo(tipo) {
  document.querySelectorAll('.doc-item').forEach(item => {
    item.style.display = (!tipo || item.dataset.tipo === tipo) ? 'flex' : 'none';
  });
}


/* ── Check-in de Operadores / Enabley ──────────────────── */
const ciOperadores = {
  1: { nome: 'José Santos',    mat: '00412', fn: 'Operador', iniciais: 'JS' },
  2: { nome: 'Maria Oliveira', mat: '00387', fn: 'Operador', iniciais: 'MO' },
  3: { nome: 'Carlos Pereira', mat: '00521', fn: 'Operador', iniciais: 'CP' },
  4: { nome: 'Ana Lima',       mat: '00298', fn: 'Operador', iniciais: 'AL' },
  5: { nome: 'Roberto Cruz',   mat: '00445', fn: 'Auxiliar', iniciais: 'RC' },
};

// Habilitações no Enabley por equipamento (simulado)
const ciHabilitacoes = {
  1: { 'Cortadeira': true,  'Prensa': true,  'Embrulhadeira': true,  'Empacotadora+Encaixotadora': false, 'Suporte': true  },
  2: { 'Cortadeira': true,  'Prensa': true,  'Embrulhadeira': true,  'Empacotadora+Encaixotadora': true,  'Suporte': true  },
  3: { 'Cortadeira': false, 'Prensa': true,  'Embrulhadeira': true,  'Empacotadora+Encaixotadora': true,  'Suporte': true  },
  4: { 'Cortadeira': true,  'Prensa': false, 'Embrulhadeira': true,  'Empacotadora+Encaixotadora': true,  'Suporte': true  },
  5: { 'Cortadeira': true,  'Prensa': true,  'Embrulhadeira': false, 'Empacotadora+Encaixotadora': true,  'Suporte': true  },
};

const ciPostoEquip = {
  1: 'Cortadeira',
  2: 'Prensa',
  3: 'Embrulhadeira',
  4: 'Empacotadora+Encaixotadora',
  5: 'Suporte',
};

// postoAlocacao[posto] = opId
const postoAlocacao = { 1: null, 2: null, 3: null, 4: null, 5: null };

function ciCheckin() {
  const inp = document.getElementById('ci-matricula-input');
  const mat = inp.value.trim();
  const op = Object.values(ciOperadores).find(o => o.mat === mat);
  if (!op) {
    alert('Matrícula não encontrada: ' + mat);
    inp.value = '';
    return;
  }
  alert('✅ Check-in registrado!\n' + op.nome + ' · Mat. ' + op.mat + '\n' + new Date().toLocaleTimeString('pt-BR'));
  inp.value = '';
}

function ciAlocarSelect(posto, sel) {
  const opId = parseInt(sel.value) || null;
  postoAlocacao[posto] = opId;

  const td = document.getElementById('td-posto-' + posto + '-op');
  const postoBox = document.getElementById('posto-' + posto);
  const nomeEl = postoBox.querySelector('.posto-op-nome');

  if (opId) {
    const op = ciOperadores[opId];
    td.innerHTML = '<span style="font-size:12px;font-weight:700;color:var(--verde)">' + op.nome + '</span>';
    nomeEl.textContent = op.iniciais;
    nomeEl.style.color = 'var(--verde)';
    nomeEl.style.fontWeight = '700';
    postoBox.style.background = 'var(--verde-dim)';
    postoBox.style.borderColor = 'var(--verde)';
    postoBox.style.borderStyle = 'solid';
  } else {
    td.innerHTML = '<span style="color:var(--text3);font-style:italic;font-size:11px">Não alocado</span>';
    nomeEl.textContent = '—';
    nomeEl.style.color = 'var(--text3)';
    nomeEl.style.fontWeight = '400';
    postoBox.style.background = 'var(--surface)';
    postoBox.style.borderColor = 'var(--border2)';
    postoBox.style.borderStyle = 'dashed';
  }

  // Verificar se todos os postos estão alocados
  const todos = Object.values(postoAlocacao).every(v => v !== null);
  const hint = document.getElementById('ci-validar-hint');
  const btn = document.getElementById('ci-btn-validar');
  if (todos) {
    hint.textContent = '✓ Todos os postos alocados — pronto para validar';
    hint.style.color = 'var(--ok)';
    btn.style.background = 'var(--verde-meio)';
  } else {
    const falt = Object.values(postoAlocacao).filter(v => v === null).length;
    hint.textContent = falt + ' posto(s) ainda sem alocação';
    hint.style.color = 'var(--text3)';
    btn.style.background = '';
  }

  // Resetar resultado anterior
  document.getElementById('ci-resultado-card').style.display = 'none';
}

function ciAlocarPosto(posto) {
  // Scroll até o select correspondente na tabela
  const sel = document.querySelector('#tr-posto-' + posto + ' select');
  if (sel) sel.focus();
}

function ciAlocarAuto() {
  // Alocação automática baseada no último turno
  const auto = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
  Object.keys(auto).forEach(p => {
    const sel = document.querySelector('#tr-posto-' + p + ' select');
    if (sel) {
      sel.value = auto[p];
      ciAlocarSelect(parseInt(p), sel);
    }
  });
  document.getElementById('ci-validar-hint').textContent = '✓ Alocação do último turno aplicada — pronto para validar';
  document.getElementById('ci-validar-hint').style.color = 'var(--ok)';
}

function ciValidarEnabley() {
  const todos = Object.values(postoAlocacao).every(v => v !== null);
  if (!todos) {
    alert('⚠️ Aloque todos os 5 postos antes de validar.');
    return;
  }

  const btn = document.getElementById('ci-btn-validar');
  btn.textContent = '⏳ Consultando Enabley API...';
  btn.disabled = true;

  // Simular chamada API com delay
  setTimeout(() => {
    btn.textContent = '🔍 Validar Enabley';
    btn.disabled = false;

    const card = document.getElementById('ci-resultado-card');
    const lista = document.getElementById('ci-resultado-lista');
    const bdg   = document.getElementById('ci-resultado-bdg');
    const btnLib = document.getElementById('ci-btn-liberar');

    lista.innerHTML = '';
    let todosAptos = true;

    for (let posto = 1; posto <= 5; posto++) {
      const opId  = postoAlocacao[posto];
      const op    = ciOperadores[opId];
      const equip = ciPostoEquip[posto];
      const apto  = ciHabilitacoes[opId][equip];
      if (!apto) todosAptos = false;

      // Atualizar flag no card de check-in
      const flagEl = document.getElementById('ef-' + opId);
      if (flagEl) {
        flagEl.style.display = 'inline-block';
        if (apto) {
          flagEl.innerHTML = '<span style="background:#1E8449;color:#fff;border-radius:5px;padding:3px 8px;font-size:9px;font-weight:900">🟢 APTO</span>';
        } else {
          flagEl.innerHTML = '<span style="background:#922B21;color:#fff;border-radius:5px;padding:3px 8px;font-size:9px;font-weight:900">🔴 INAPTO</span>';
        }
      }

      // Linha de resultado
      const div = document.createElement('div');
      div.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 13px;border-radius:8px;border:1.5px solid ' + (apto ? 'var(--ok-b)' : 'var(--per-b)') + ';background:' + (apto ? 'var(--ok-p)' : 'var(--per-p)');
      div.innerHTML = '<div style="width:32px;height:32px;border-radius:50%;background:' + (apto ? 'var(--ok)' : 'var(--per)') + ';display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">' + (apto ? '✓' : '✗') + '</div>'
        + '<div style="flex:1">'
        + '<div style="font-size:12px;font-weight:700;color:' + (apto ? 'var(--text)' : 'var(--per)') + '">' + op.nome + '</div>'
        + '<div style="font-size:10px;color:var(--text2)">Posto ' + posto + ' · ' + equip.replace('+',' + ') + '</div>'
        + '</div>'
        + '<span style="font-size:20px">' + (apto ? '🟢' : '🔴') + '</span>'
        + '<span style="font-size:11px;font-weight:900;color:' + (apto ? 'var(--ok)' : 'var(--per)') + '">' + (apto ? 'HABILITADO' : 'NÃO HABILITADO') + '</span>';
      lista.appendChild(div);
    }

    // Atualizar badge geral
    if (todosAptos) {
      bdg.textContent = '✅ Todos habilitados';
      bdg.className = 'bdg bdg-ok';
      btnLib.style.display = 'flex';
      document.getElementById('ci-alerta-geral').className = 'abox ok mb14';
      document.getElementById('ci-alerta-geral').innerHTML = '<span class="ai">✅</span><div>Todos os operadores validados e habilitados pelo Enabley. Clique em <strong>Liberar Linha</strong> para autorizar o início da produção.</div>';
      document.getElementById('ci-count-hab').textContent = '5 / 5';
    } else {
      const inaptos = Object.keys(postoAlocacao).filter(p => !ciHabilitacoes[postoAlocacao[p]][ciPostoEquip[p]]);
      bdg.textContent = '❌ ' + inaptos.length + ' operador(es) inapto(s)';
      bdg.className = 'bdg bdg-per';
      btnLib.style.display = 'none';
      document.getElementById('ci-alerta-geral').className = 'abox err mb14';
      document.getElementById('ci-alerta-geral').innerHTML = '<span class="ai">❌</span><div><strong>' + inaptos.length + ' operador(es) sem habilitação</strong> no Enabley para o posto alocado. Realoque ou aguarde treinamento antes de liberar a linha.</div>';
      document.getElementById('ci-count-hab').textContent = (5 - inaptos.length) + ' / 5';
    }

    card.style.display = 'block';
  }, 1800);
}

function ciRevalidar() {
  document.getElementById('ci-resultado-card').style.display = 'none';
  document.querySelectorAll('.enabley-flag').forEach(f => f.style.display = 'none');
}

function ciLiberarLinha() {
  alert('✅ Linha B liberada para produção!\n\nTurno A · 27/03/2026 · 06:12\nLíder: C. Rodrigues\n\nRegistro enviado ao MES Apriso e JDE.');
  nav('prod-cockpit', null, null);
}


/* ── Andon — Cadeia de Ajuda (ERU 4.1.22) ──────────────── */
const ANDON_CORES = {
  per: { bg: 'var(--per-p)', border: 'var(--per-b)', fg: 'var(--per)', icone: '🚨' },
  alr: { bg: 'var(--alr-p)', border: 'var(--alr-b)', fg: 'var(--alr)', icone: '⚠️' },
  ok:  { bg: 'var(--ok-p)',  border: 'var(--ok-b)',  fg: 'var(--ok)',  icone: '🔔' },
};

document.addEventListener('DOMContentLoaded', () => {
  // Atualizar hora ao abrir o modal
  const overlay = document.getElementById('modal-andon');
  if (overlay) {
    const obs = new MutationObserver(() => {
      if (overlay.classList.contains('open')) {
        document.getElementById('andon-hora').textContent =
          new Date().toLocaleTimeString('pt-BR');
      }
    });
    obs.observe(overlay, { attributes: true, attributeFilter: ['class'] });
  }
});

function andonSelecionarTipo(btn) {
  document.querySelectorAll('.andon-tipo-btn').forEach(b => {
    b.style.borderColor = 'var(--border)';
    b.style.background  = 'var(--surface)';
    b.style.color       = 'var(--text2)';
    b.style.transform   = '';
  });
  btn.style.borderColor = 'var(--verde)';
  btn.style.background  = 'var(--verde-dim)';
  btn.style.color       = 'var(--verde)';
  btn.style.transform   = 'scale(1.04)';
  document.getElementById('andon-tipo-val').value = btn.dataset.val;
  andonAtualizarPreview();
}

function andonSelecionarNivel(btn) {
  document.querySelectorAll('.andon-nivel-btn').forEach(b => {
    b.style.borderColor = 'var(--border)';
    b.style.background  = 'var(--surface)';
    b.style.color       = 'var(--text2)';
    b.style.transform   = '';
  });
  const cor = ANDON_CORES[btn.dataset.cor];
  btn.style.borderColor = cor.border;
  btn.style.background  = cor.bg;
  btn.style.color       = cor.fg;
  btn.style.transform   = 'scale(1.04)';
  document.getElementById('andon-nivel-val').value = btn.dataset.val;

  // Atualizar ícone e header do modal conforme nível
  document.getElementById('andon-icone').textContent  = cor.icone;
  document.getElementById('andon-icone').style.background  = cor.bg;
  document.getElementById('andon-icone').style.borderColor = cor.border;
  document.getElementById('andon-btn-enviar').style.background =
    btn.dataset.cor === 'per' ? 'var(--per)' :
    btn.dataset.cor === 'alr' ? 'var(--alr)' : 'var(--ok)';
  andonAtualizarPreview();
}

function andonSelecionarMotivo(btn) {
  document.querySelectorAll('.andon-motivo-btn').forEach(b => {
    b.style.borderColor = 'var(--border)';
    b.style.background  = 'var(--surface)';
    b.style.color       = 'var(--text2)';
    b.style.transform   = '';
  });
  btn.style.borderColor = 'var(--ouro)';
  btn.style.background  = 'var(--ouro-dim)';
  btn.style.color       = 'var(--ouro)';
  btn.style.transform   = 'scale(1.04)';
  document.getElementById('andon-motivo-val').value = btn.dataset.val;
  andonAtualizarPreview();
}

function andonAtualizarPreview() {
  const tipo   = document.getElementById('andon-tipo-val').value;
  const nivel  = document.getElementById('andon-nivel-val').value;
  const motivo = document.getElementById('andon-motivo-val').value;
  if (!tipo || !nivel || !motivo) {
    document.getElementById('andon-preview').style.display = 'none';
    return;
  }
  const hora = new Date().toLocaleTimeString('pt-BR');
  const nivelCor = nivel === 'Emergência' ? 'var(--per)' : nivel === 'Moderado' ? 'var(--alr)' : 'var(--ok)';
  const preview = document.getElementById('andon-preview');
  const nivelBg = nivel === 'Emergência' ? 'var(--per-p)' : nivel === 'Moderado' ? 'var(--alr-p)' : 'var(--ok-p)';
  const nivelBorder = nivel === 'Emergência' ? 'var(--per-b)' : nivel === 'Moderado' ? 'var(--alr-b)' : 'var(--ok-b)';
  preview.style.background   = nivelBg;
  preview.style.borderColor  = nivelBorder;
  preview.querySelector('div:first-child').style.color = nivelCor;
  document.getElementById('andon-preview-txt').innerHTML =
    '<span style="color:var(--text3)">Tipo:</span> ' + tipo + '<br>' +
    '<span style="color:var(--text3)">Nível:</span> <strong style="color:' + nivelCor + '">' + nivel + '</strong><br>' +
    '<span style="color:var(--text3)">Motivo:</span> ' + motivo + '<br>' +
    '<span style="color:var(--text3)">Linha:</span> Linha B · MF5 · OP-2026-0414<br>' +
    '<span style="color:var(--text3)">Operador:</span> J. Santos · ' + hora + '<br>' +
    '<span style="color:var(--text3)">Destino:</span> ' + andonDestino(tipo);
  preview.style.display = 'block';
}

function andonDestino(tipo) {
  if (tipo === 'Manutenção') return 'Supervisor de Manutenção + Fracttal (OS automática)';
  if (tipo === 'Qualidade')  return 'Analista de Qualidade + LIMS';
  return 'Supervisor de Produção + Líder de Turno';
}

function andonEnviar() {
  const tipo   = document.getElementById('andon-tipo-val').value;
  const nivel  = document.getElementById('andon-nivel-val').value;
  const motivo = document.getElementById('andon-motivo-val').value;

  if (!tipo)   { alert('Selecione o Tipo de Ajuda.'); return; }
  if (!nivel)  { alert('Selecione o Nível da Ajuda.'); return; }
  if (!motivo) { alert('Selecione o Motivo.'); return; }

  const obs  = document.getElementById('andon-obs').value.trim();
  const hora = new Date().toLocaleTimeString('pt-BR');
  const num  = 'AND-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random()*9000)+1000);

  closeModal('modal-andon');

  // Resetar formulário
  setTimeout(() => {
    document.querySelectorAll('.andon-tipo-btn,.andon-nivel-btn,.andon-motivo-btn').forEach(b => {
      b.style.borderColor = 'var(--border)';
      b.style.background  = 'var(--surface)';
      b.style.color       = 'var(--text2)';
      b.style.transform   = '';
    });
    ['andon-tipo-val','andon-nivel-val','andon-motivo-val'].forEach(id => {
      document.getElementById(id).value = '';
    });
    document.getElementById('andon-obs').value = '';
    document.getElementById('andon-preview').style.display = 'none';
    document.getElementById('andon-icone').textContent = '🚨';
    document.getElementById('andon-icone').style.background = 'var(--per-p)';
    document.getElementById('andon-btn-enviar').style.background = 'var(--per)';
  }, 300);

  alert(
    '✅ Cadeia de Ajuda Acionada!\n\n' +
    '📋 Chamado: ' + num + '\n' +
    '🔴 Nível: ' + nivel + '\n' +
    '🏷 Tipo: ' + tipo + ' · Motivo: ' + motivo + '\n' +
    '⏰ ' + hora + ' · Linha B · OP-2026-0414\n\n' +
    '📢 Notificado: ' + andonDestino(tipo) + '\n' +
    (obs ? '📝 Obs: ' + obs : '')
  );
}


/* ── Chamados Andon ─────────────────────────────────────── */
const AND_DADOS = [
  { id:'AND-2026-0009', tipo:'Produção',   nivel:'Emergência', motivo:'Máquina',  status:'Aberto',       linha:'Linha B', op:'J. Santos',  hora:'09:41', data:'27/03/2026', obs:'Cortadeira travada, linha parada.',              acoes:[] },
  { id:'AND-2026-0008', tipo:'Manutenção', nivel:'Emergência', motivo:'Máquina',  status:'Aberto',       linha:'Linha B', op:'M. Oliveira', hora:'09:18', data:'27/03/2026', obs:'Prensa com ruído anormal.',                      acoes:[] },
  { id:'AND-2026-0007', tipo:'Qualidade',  nivel:'Moderado',   motivo:'Produto',  status:'Aberto',       linha:'Linha A', op:'C. Pereira',  hora:'08:55', data:'27/03/2026', obs:'Peso fora do limite na amostra 07:30.',          acoes:[] },
  { id:'AND-2026-0006', tipo:'Produção',   nivel:'Moderado',   motivo:'Processo', status:'Em Andamento', linha:'Linha B', op:'A. Lima',     hora:'08:30', data:'27/03/2026', obs:'Bobina acabou antes do previsto.',               acoes:[{hora:'08:45', resp:'Supervisor', txt:'Equipe alocada para troca de bobina.'}] },
  { id:'AND-2026-0005', tipo:'Manutenção', nivel:'Leve',       motivo:'Máquina',  status:'Em Andamento', linha:'Linha C', op:'R. Cruz',     hora:'07:50', data:'27/03/2026', obs:'Embrulhadeira desregulada.',                     acoes:[{hora:'08:10', resp:'Manut.', txt:'Técnico deslocado ao local.'}] },
  { id:'AND-2026-0004', tipo:'Qualidade',  nivel:'Leve',       motivo:'MO',       status:'Fechado',      linha:'Linha B', op:'J. Santos',   hora:'06:45', data:'27/03/2026', obs:'Dúvida sobre parâmetro de peso.',                acoes:[{hora:'07:00', resp:'Analista CQ', txt:'Parâmetro esclarecido. Limite correto: 148–153g.'},{hora:'07:05',resp:'Sistema',txt:'Chamado encerrado.'}] },
  { id:'AND-2026-0003', tipo:'Produção',   nivel:'Moderado',   motivo:'Produto',  status:'Fechado',      linha:'Linha A', op:'M. Oliveira', hora:'06:20', data:'27/03/2026', obs:'Frasco com defeito visual.',                     acoes:[{hora:'06:38', resp:'Qualidade', txt:'Lote separado para análise. Produção retomada.'},{hora:'06:40',resp:'Sistema',txt:'Chamado encerrado.'}] },
  { id:'AND-2026-0002', tipo:'Manutenção', nivel:'Emergência', motivo:'Máquina',  status:'Fechado',      linha:'Linha C', op:'C. Pereira',  hora:'05:55', data:'27/03/2026', obs:'Encaixotadora travada.',                         acoes:[{hora:'06:15', resp:'Manut.', txt:'Sensor reposicionado. Máquina normalizada.'},{hora:'06:18',resp:'Sistema',txt:'Chamado encerrado.'}] },
  { id:'AND-2026-0001', tipo:'Produção',   nivel:'Leve',       motivo:'Processo', status:'Cancelado',    linha:'Linha B', op:'A. Lima',     hora:'05:30', data:'27/03/2026', obs:'',                                              acoes:[{hora:'05:45', resp:'Supervisor', txt:'Falso acionamento. Cancelado pelo líder de turno.'}] },
];

const AND_NIVEL_CFG = {
  'Emergência': { cor:'var(--per)',   bg:'var(--per-p)',  border:'var(--per-b)',  icone:'🔴', bdgClass:'bdg-per' },
  'Moderado':   { cor:'var(--alr)',   bg:'var(--alr-p)',  border:'var(--alr-b)',  icone:'🟡', bdgClass:'bdg-alr' },
  'Leve':       { cor:'var(--ok)',    bg:'var(--ok-p)',   border:'var(--ok-b)',   icone:'🟢', bdgClass:'bdg-ok'  },
};
const AND_STATUS_CFG = {
  'Aberto':       { bdgClass:'bdg-per', label:'🔴 Aberto'       },
  'Em Andamento': { bdgClass:'bdg-alr', label:'🟡 Em Andamento' },
  'Fechado':      { bdgClass:'bdg-ok',  label:'✅ Fechado'      },
  'Cancelado':    { bdgClass:'bdg-ney', label:'❌ Cancelado'    },
};
const AND_TIPO_ICONE = { 'Produção':'🏭', 'Manutenção':'🔧', 'Qualidade':'🔬' };

let andDadosAtivos = AND_DADOS.map(d => Object.assign({}, d, { acoes: [...d.acoes] }));
let andChamadoAtual = null;

function andRenderCard(c) {
  const nc = AND_NIVEL_CFG[c.nivel];
  const sc = AND_STATUS_CFG[c.status];
  const encerrado = c.status === 'Fechado' || c.status === 'Cancelado';
  return `<div class="and-card" data-id="${c.id}"
    onclick="andAbrirDetalhe('${c.id}')"
    style="background:var(--surface);border:1.5px solid ${encerrado ? 'var(--border)' : nc.border};border-radius:var(--r);
           padding:16px;cursor:pointer;transition:all .18s;position:relative;overflow:hidden;
           opacity:${encerrado ? '.75' : '1'}"
    onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='var(--sh2)'"
    onmouseout="this.style.transform='';this.style.boxShadow=''">
    <!-- Barra lateral de nível -->
    <div style="position:absolute;top:0;left:0;width:4px;height:100%;background:${nc.cor};border-radius:var(--r) 0 0 var(--r)"></div>
    <div style="padding-left:6px">
      <!-- Header do card -->
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:18px">${AND_TIPO_ICONE[c.tipo]}</span>
          <div>
            <div style="font-family:var(--font-m);font-size:11px;font-weight:700;color:var(--verde)">${c.id}</div>
            <div style="font-size:10px;color:var(--text3)">${c.hora} · ${c.data}</div>
          </div>
        </div>
        <span class="bdg ${sc.bdgClass}" style="font-size:9px;white-space:nowrap">${sc.label}</span>
      </div>
      <!-- Badges de tipo/nível/motivo -->
      <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px">
        <span class="bdg bdg-inf" style="font-size:8px">${c.tipo}</span>
        <span class="bdg ${nc.bdgClass}" style="font-size:8px">${nc.icone} ${c.nivel}</span>
        <span class="bdg bdg-ouro" style="font-size:8px">${c.motivo}</span>
      </div>
      <!-- Linha / Operador -->
      <div style="display:flex;gap:14px;margin-bottom:${c.obs ? '10px' : '0'}">
        <div style="font-size:11px;color:var(--text2)"><span style="color:var(--text3)">Linha:</span> ${c.linha}</div>
        <div style="font-size:11px;color:var(--text2)"><span style="color:var(--text3)">Op.:</span> ${c.op}</div>
      </div>
      <!-- Observação (preview) -->
      ${c.obs ? `<div style="font-size:11px;color:var(--text2);font-style:italic;border-top:1px solid var(--border);padding-top:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">"${c.obs}"</div>` : ''}
      <!-- Indicador de ações -->
      ${c.acoes.length > 0 ? `<div style="margin-top:8px;font-size:10px;color:var(--text3)">💬 ${c.acoes.length} ação(ões) registrada(s)</div>` : ''}
    </div>
  </div>`;
}

function andFiltrar() {
  const fStatus = document.getElementById('and-f-status').value;
  const fTipo   = document.getElementById('and-f-tipo').value;
  const fNivel  = document.getElementById('and-f-nivel').value;
  const fMotivo = document.getElementById('and-f-motivo').value;

  const filtrados = andDadosAtivos.filter(c =>
    (!fStatus || c.status === fStatus) &&
    (!fTipo   || c.tipo   === fTipo)   &&
    (!fNivel  || c.nivel  === fNivel)  &&
    (!fMotivo || c.motivo === fMotivo)
  );

  const grid = document.getElementById('and-grid');
  if (!grid) return;
  grid.innerHTML = filtrados.length
    ? filtrados.map(andRenderCard).join('')
    : '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text3);font-size:14px">Nenhum chamado encontrado para os filtros selecionados.</div>';

  document.getElementById('and-count-label').textContent = filtrados.length + ' chamado(s)';
  andAtualizarKPIs();
}

function andClearFiltros() {
  ['and-f-status','and-f-tipo','and-f-nivel','and-f-motivo','and-f-data'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  andFiltrar();
}

function andAtualizarKPIs() {
  const ab = andDadosAtivos.filter(c => c.status === 'Aberto').length;
  const an = andDadosAtivos.filter(c => c.status === 'Em Andamento').length;
  const fe = andDadosAtivos.filter(c => c.status === 'Fechado').length;
  const kAb = document.getElementById('and-kpi-aberto');
  const kAn = document.getElementById('and-kpi-andamento');
  const kFe = document.getElementById('and-kpi-fechado');
  if (kAb) kAb.textContent = ab;
  if (kAn) kAn.textContent = an;
  if (kFe) kFe.textContent = fe;
}

function andAbrirDetalhe(id) {
  const c = andDadosAtivos.find(x => x.id === id);
  if (!c) return;
  andChamadoAtual = id;
  const nc = AND_NIVEL_CFG[c.nivel];
  const sc = AND_STATUS_CFG[c.status];
  const encerrado = c.status === 'Fechado' || c.status === 'Cancelado';

  // Header
  document.getElementById('mcd-icone').textContent = AND_TIPO_ICONE[c.tipo];
  document.getElementById('mcd-icone').style.background = nc.bg;
  document.getElementById('mcd-icone').style.border = '2px solid ' + nc.border;
  document.getElementById('mcd-titulo').textContent = c.id;
  document.getElementById('mcd-subtitulo').textContent = c.tipo + ' · ' + c.nivel + ' · ' + c.motivo;
  const bdg = document.getElementById('mcd-status-bdg');
  bdg.textContent = sc.label;
  bdg.className = 'bdg ' + sc.bdgClass + ' ' + (encerrado ? '' : 'bdg-per');

  // Info grid
  const info = [
    ['Linha',    c.linha],
    ['Operador', c.op],
    ['Horário',  c.hora + ' · ' + c.data],
    ['Motivo',   c.motivo],
  ];
  document.getElementById('mcd-info-grid').innerHTML = info.map(([k,v]) =>
    `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:6px;padding:8px 12px">
      <div style="font-size:8px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--text3);margin-bottom:3px">${k}</div>
      <div style="font-size:12px;font-weight:700">${v}</div>
    </div>`
  ).join('');

  // Observação
  const obsWrap = document.getElementById('mcd-obs-wrap');
  if (c.obs) {
    document.getElementById('mcd-obs-txt').textContent = c.obs;
    obsWrap.style.display = 'block';
  } else {
    obsWrap.style.display = 'none';
  }

  // Histórico
  const hist = document.getElementById('mcd-historico');
  if (c.acoes.length === 0) {
    hist.innerHTML = '<div style="font-size:11px;color:var(--text3);font-style:italic">Nenhuma ação registrada ainda.</div>';
  } else {
    hist.innerHTML = c.acoes.map(a =>
      `<div style="display:flex;gap:10px;padding:9px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:7px">
        <div style="font-family:var(--font-m);font-size:10px;color:var(--text3);min-width:38px">${a.hora}</div>
        <div style="flex:1">
          <div style="font-size:10px;font-weight:700;color:var(--verde);margin-bottom:2px">${a.resp}</div>
          <div style="font-size:11px;color:var(--text)">${a.txt}</div>
        </div>
      </div>`
    ).join('');
  }

  // Edição
  document.getElementById('mcd-edicao-wrap').style.display = encerrado ? 'none' : 'block';
  document.getElementById('mcd-readonly-msg').style.display = encerrado ? 'block' : 'none';
  if (!encerrado) {
    document.getElementById('mcd-novo-status').value = '';
    document.getElementById('mcd-acao').value = '';
    mcdAtualizarBotao();
  }

  openModal('modal-chamado-detalhe');
}

function mcdAtualizarBotao() {
  const ns = document.getElementById('mcd-novo-status').value;
  const btn = document.getElementById('mcd-btn-salvar');
  if (ns === 'Fechado') {
    btn.textContent = '✅ Fechar Chamado';
    btn.style.background = 'var(--ok)';
  } else if (ns === 'Cancelado') {
    btn.textContent = '❌ Cancelar Chamado';
    btn.style.background = 'var(--per)';
  } else {
    btn.textContent = 'Salvar Atualização';
    btn.style.background = '';
  }
}

function mcdSalvar() {
  const acao = document.getElementById('mcd-acao').value.trim();
  const novoStatus = document.getElementById('mcd-novo-status').value;

  if (!acao) { alert('Descreva a ação realizada antes de salvar.'); return; }

  const c = andDadosAtivos.find(x => x.id === andChamadoAtual);
  if (!c) return;

  const hora = new Date().toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'});

  // Adicionar ação
  c.acoes.push({ hora: hora, resp: 'Líder / Técnico', txt: acao });

  // Atualizar status
  if (novoStatus) {
    c.status = novoStatus;
    c.acoes.push({ hora: hora, resp: 'Sistema', txt: 'Status alterado para: ' + novoStatus + '.' });
  }

  closeModal('modal-chamado-detalhe');
  andFiltrar();

  const msg = novoStatus
    ? 'Chamado ' + andChamadoAtual + ' atualizado para "' + novoStatus + '".'
    : 'Ação registrada no chamado ' + andChamadoAtual + '.';
  alert('✅ ' + msg);
}

// Grid inicializado pelo wrapper central de nav (ver correção v22)


/* ── Rastreabilidade / Trilha de Auditoria ─────────────── */
function rastrFiltrar(modulo) {
  const tbl = document.getElementById(modulo + '-rastr-tbl');
  if (!tbl) return;
  const rows = tbl.querySelectorAll('tbody tr');
  let visible = 0;

  // Pegar valores dos filtros (cada módulo tem seus próprios campos)
  const opEl   = document.getElementById(modulo + '-f-op');
  const tipoEl = document.getElementById(modulo + '-f-tipo');
  const op     = opEl   ? opEl.value   : '';
  const tipo   = tipoEl ? tipoEl.value : '';

  rows.forEach(row => {
    const text = row.textContent.toUpperCase();
    const matchOp   = !op   || text.includes(op.toUpperCase());
    const matchTipo = !tipo || row.querySelector('.bdg') && row.querySelector('.bdg').textContent.toUpperCase().includes(tipo.toUpperCase());
    const show = matchOp && matchTipo;
    row.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  const cnt = document.getElementById(modulo + '-rastr-count');
  if (cnt) cnt.textContent = visible + ' registro' + (visible !== 1 ? 's' : '');
}

function rastrLimpar(modulo) {
  ['op','mp','box','reator','tipo','resp'].forEach(f => {
    const el = document.getElementById(modulo + '-f-' + f);
    if (el) el.value = '';
  });
  rastrFiltrar(modulo);
}

function rastrExportar(modulo) {
  const nomes = { pes: 'Rastreabilidade_Pesagem', fab: 'Rastreabilidade_Fabricacao', prod: 'Rastreabilidade_Producao' };
  alert('⬇ Exportando ' + (nomes[modulo] || modulo) + '.csv...\n\nArquivo gerado com ' + document.getElementById(modulo + '-rastr-count').textContent + ' e enviado para download.');
}


/* ── Sinótico da Fábrica MF5 ───────────────────────────── */
(function(){

// ── Dados das linhas (fiel à imagem)
const LINHAS = [
  {
    id:'AB', label:'Linha A/B', op:'OP-2026-0414', produto:'Sabonete Barra 90g Phebo',
    y:0, cor:'#1C5C31',
    maquinas:[
      {id:'AB-COR', nome:'Cortadeira',         status:'ok',    cad:'16.200/h'},
      {id:'AB-BAL', nome:'Balança',             status:'ok',    cad:'—'},
      {id:'AB-PRE', nome:'Prensa',              status:'ok',    cad:'16.200/h'},
      {id:'AB-EMB', nome:'Embrulhadeira',       status:'ok',    cad:'16.200/h'},
      {id:'AB-SEL', nome:'Seladora Shrink',     status:'alert', cad:'14.800/h'},
      {id:'AB-ENC', nome:'Encaixotadora',       status:'ok',    cad:'16.200/h'},
      {id:'AB-PAL', nome:'Paletizador Robô',    status:'ok',    cad:'—'},
    ]
  },
  {
    id:'C', label:'Linha C', op:'OP-2026-0415', produto:'Sabonete Líquido 500ml',
    y:1, cor:'#1C5C31',
    maquinas:[
      {id:'C-COR',  nome:'Cortadeira',              status:'ok',  cad:'12.000/h'},
      {id:'C-BAL',  nome:'Balança',                 status:'ok',  cad:'—'},
      {id:'C-PRE',  nome:'Prensa',                  status:'ok',  cad:'12.000/h'},
      {id:'C-FLP',  nome:'Embaladora Flow Pack',    status:'ok',  cad:'12.000/h'},
      {id:'C-IWK',  nome:'Encartuchadora (IWK)',    status:'ok',  cad:'12.000/h'},
      {id:'C-ENF',  nome:'Enfardadora Divamac',     status:'ok',  cad:'12.000/h'},
      {id:'C-ENC',  nome:'Encaixotadora Divamac',   status:'ok',  cad:'12.000/h'},
      {id:'C-PAL',  nome:'Paletizador Robô',        status:'ok',  cad:'—'},
    ]
  },
  {
    id:'D', label:'Linha D', op:'OP-2026-0416', produto:'Polvilho Antisséptico 100g',
    y:2, cor:'#9A5A00',
    maquinas:[
      {id:'D-EMB', nome:'Embrulhadeira',   status:'ok',   cad:'8.000/h'},
      {id:'D-ENF', nome:'Enfardadora',     status:'stop', cad:'—'},
      {id:'D-ENC', nome:'Encaixotadora',   status:'stop', cad:'—'},
    ],
    invertida:true
  },
  {
    id:'E', label:'Linha E', op:'OP-2026-0417', produto:'Talco Bebê 100g',
    y:3, cor:'#1C5C31',
    maquinas:[
      {id:'E-EXT', nome:'Extrusora',          status:'ok',  cad:'6.500/h'},
      {id:'E-PRE', nome:'Prensa',             status:'ok',  cad:'6.500/h'},
      {id:'E-FLP', nome:'Embaladora Flow Pack',status:'ok', cad:'6.500/h'},
      {id:'E-CAR', nome:'Encartuchadora',     status:'ok',  cad:'6.500/h'},
      {id:'E-FNO', nome:'Forno',              status:'ok',  cad:'—'},
      {id:'E-ENF', nome:'Enfardadora',        status:'ok',  cad:'6.500/h'},
      {id:'E-ENC', nome:'Encaixotadora',      status:'ok',  cad:'6.500/h'},
    ],
    invertida:true
  },
  {
    id:'F', label:'Linha F', op:'—',produto:'Sem OP ativa',
    y:4, cor:'#7A8A7A',
    maquinas:[
      {id:'F-COR', nome:'Cortadeira',     status:'idle', cad:'—'},
      {id:'F-PRE', nome:'Prensa',         status:'idle', cad:'—'},
      {id:'F-BAL', nome:'Balança',        status:'idle', cad:'—'},
      {id:'F-FLP', nome:'Flow Pack',      status:'idle', cad:'—'},
      {id:'F-FNO', nome:'Forno',          status:'idle', cad:'—'},
      {id:'F-CAR', nome:'Encartuchadeira',status:'idle', cad:'—'},
      {id:'F-ENC', nome:'Encaixotadora',  status:'idle', cad:'—'},
    ],
    invertida:true
  },
  {
    id:'G', label:'Linha G', op:'OP-2026-0418', produto:'Sabonete Glicerina 90g',
    y:5, cor:'#1C5C31',
    maquinas:[
      {id:'G-COR', nome:'Cortadeira',              status:'ok',   cad:'4.000/h'},
      {id:'G-PRE', nome:'Prensa',                  status:'ok',   cad:'4.000/h'},
      {id:'G-FRU', nome:'Embrulhadeira Frutais',   status:'alert',cad:'3.200/h'},
      {id:'G-PAL', nome:'Paletização Manual',      status:'ok',   cad:'—'},
    ],
    invertida:true
  },
];

const COR_STATUS = {
  ok:    {fill:'#1C7A38', stroke:'#0F5A28', text:'#fff'},
  alert: {fill:'#E0800A', stroke:'#9A5A00', text:'#fff'},
  stop:  {fill:'#8C1A1A', stroke:'#6A0F0F', text:'#fff'},
  idle:  {fill:'#BFB172', stroke:'#9A8F50', text:'#4A3E1A'},
};

const BOX_W = 90, BOX_H = 38, ROW_H = 76, GAP = 14;
const MARGIN_LEFT = 170, MARGIN_TOP = 24;
const SVG_H = LINHAS.length * ROW_H + MARGIN_TOP * 2;

let autoTimer = null;
let autoRunning = true;

function ns(tag){ return document.createElementNS('http://www.w3.org/2000/svg', tag); }

function rect(x,y,w,h,rx,fill,stroke,sw){
  const r = ns('rect');
  r.setAttribute('x',x); r.setAttribute('y',y);
  r.setAttribute('width',w); r.setAttribute('height',h);
  r.setAttribute('rx',rx||4);
  r.setAttribute('fill',fill||'#fff');
  r.setAttribute('stroke',stroke||'none');
  r.setAttribute('stroke-width',sw||1);
  return r;
}
function text(x,y,txt,fs,fw,fill,anchor){
  const t = ns('text');
  t.setAttribute('x',x); t.setAttribute('y',y);
  t.setAttribute('font-size',fs||10);
  t.setAttribute('font-weight',fw||'normal');
  t.setAttribute('fill',fill||'#1A2E1E');
  t.setAttribute('text-anchor',anchor||'middle');
  t.setAttribute('dominant-baseline','middle');
  t.textContent = txt;
  return t;
}
function line(x1,y1,x2,y2,stroke,sw,dash){
  const l = ns('line');
  l.setAttribute('x1',x1); l.setAttribute('y1',y1);
  l.setAttribute('x2',x2); l.setAttribute('y2',y2);
  l.setAttribute('stroke',stroke||'#C8A84B');
  l.setAttribute('stroke-width',sw||1.5);
  if(dash) l.setAttribute('stroke-dasharray',dash);
  return l;
}
function arrowMarker(svg, id, color){
  let defs = svg.querySelector('defs');
  if(!defs){ defs = ns('defs'); svg.appendChild(defs); }
  const mk = ns('marker');
  mk.setAttribute('id', id);
  mk.setAttribute('viewBox','0 0 8 8');
  mk.setAttribute('refX','6'); mk.setAttribute('refY','4');
  mk.setAttribute('markerWidth','6'); mk.setAttribute('markerHeight','6');
  mk.setAttribute('orient','auto');
  const path = ns('path');
  path.setAttribute('d','M0,0 L8,4 L0,8 Z');
  path.setAttribute('fill', color);
  mk.appendChild(path);
  defs.appendChild(mk);
}

function drawSinotico(){
  const svg = document.getElementById('sin-svg');
  if(!svg) return;
  svg.innerHTML = '';
  svg.setAttribute('viewBox', '0 0 1140 ' + SVG_H);
  svg.setAttribute('height', SVG_H);

  // Fundo suave por linha (zebra)
  LINHAS.forEach((ln, li) => {
    const ry = MARGIN_TOP + li * ROW_H - 8;
    const bg = rect(0, ry, 1140, ROW_H, 0, li%2===0 ? '#FDFAF1' : '#F4EED9', 'none');
    svg.appendChild(bg);
  });

  // Seta padrão
  arrowMarker(svg, 'arr-ok',    '#1C7A38');
  arrowMarker(svg, 'arr-alert', '#E0800A');
  arrowMarker(svg, 'arr-stop',  '#8C1A1A');
  arrowMarker(svg, 'arr-idle',  '#BFB172');

  LINHAS.forEach((ln, li) => {
    const cy = MARGIN_TOP + li * ROW_H + ROW_H/2;
    const mqs = ln.invertida ? [...ln.maquinas].reverse() : ln.maquinas;
    const totalW = mqs.length * (BOX_W + GAP) - GAP;
    const startX = ln.invertida
      ? 1130 - totalW                // linhas invertidas: da direita para esquerda
      : MARGIN_LEFT;

    // Círculo de início (OP)
    const circX = ln.invertida ? startX - 50 : MARGIN_LEFT - 50;
    const circOK = ln.op !== '—';
    const cFill  = circOK ? ln.cor : '#BFB172';
    const circ = ns('circle');
    circ.setAttribute('cx', circX); circ.setAttribute('cy', cy);
    circ.setAttribute('r', 20);
    circ.setAttribute('fill', cFill);
    circ.setAttribute('stroke', '#fff');
    circ.setAttribute('stroke-width', '2');
    svg.appendChild(circ);

    // Label linha no círculo
    svg.appendChild(text(circX, cy-6, ln.label, 8, '900', '#fff'));
    svg.appendChild(text(circX, cy+6, circOK ? ln.op.replace('OP-2026-','OP-') : '—', 7, '400', circOK ? '#C8A84B':'#fff'));

    // Linha conectora do círculo até a 1ª máquina
    const connEnd   = ln.invertida ? startX : MARGIN_LEFT;
    const connStart = ln.invertida ? circX + 20 : circX + 20;
    const connLine = ns('line');
    connLine.setAttribute('x1', connStart); connLine.setAttribute('y1', cy);
    connLine.setAttribute('x2', connEnd - 2); connLine.setAttribute('y2', cy);
    connLine.setAttribute('stroke', cFill);
    connLine.setAttribute('stroke-width', '2');
    connLine.setAttribute('stroke-dasharray', circOK ? 'none' : '4,3');
    connLine.setAttribute('marker-end', 'url(#arr-' + (circOK ? 'ok' : 'idle') + ')');
    svg.appendChild(connLine);

    // Máquinas
    mqs.forEach((mq, mi) => {
      const cx = startX + mi * (BOX_W + GAP);
      const bx = cx, by = cy - BOX_H/2;
      const cs = COR_STATUS[mq.status] || COR_STATUS.idle;

      // Seta para próxima máquina
      if(mi < mqs.length - 1){
        const arrowColor = cs.fill;
        const al = ns('line');
        al.setAttribute('x1', bx + BOX_W + 2); al.setAttribute('y1', cy);
        al.setAttribute('x2', bx + BOX_W + GAP - 2); al.setAttribute('y2', cy);
        al.setAttribute('stroke', arrowColor); al.setAttribute('stroke-width', '2');
        al.setAttribute('marker-end', 'url(#arr-' + mq.status + ')');
        svg.appendChild(al);
      } else {
        // Seta final → FIM
        const fe = ns('text');
        fe.setAttribute('x', bx + BOX_W + 28); fe.setAttribute('y', cy);
        fe.setAttribute('font-size', 10); fe.setAttribute('font-weight', '700');
        fe.setAttribute('fill', cFill); fe.setAttribute('dominant-baseline','middle');
        fe.textContent = '→ FIM';
        svg.appendChild(fe);
      }

      // Caixa da máquina
      const g = ns('g');
      g.style.cursor = 'pointer';
      g.setAttribute('data-mq', JSON.stringify({
        nome: mq.nome, status: mq.status, op: ln.op,
        cad: mq.cad, linha: ln.label,
        evt: mq.status==='stop' ? 'Parada registrada 09:42' : mq.status==='alert' ? 'Alerta de cadência 09:55' : 'Operando normalmente'
      }));
      g.addEventListener('click', sinClicarMaquina);

      // Sombra suave
      const shadow = rect(bx+2, by+2, BOX_W, BOX_H, 5, 'rgba(0,0,0,0.12)', 'none');
      g.appendChild(shadow);

      // Corpo
      const corpo = rect(bx, by, BOX_W, BOX_H, 5, cs.fill, cs.stroke, 1.5);
      g.appendChild(corpo);

      // Indicador de status (bolinha pulsante no canto superior direito)
      if(mq.status === 'stop' || mq.status === 'alert'){
        const dot = ns('circle');
        dot.setAttribute('cx', bx + BOX_W - 7); dot.setAttribute('cy', by + 7);
        dot.setAttribute('r', 4);
        dot.setAttribute('fill', mq.status==='stop' ? '#FF6B6B' : '#FFD700');
        dot.setAttribute('stroke', '#fff'); dot.setAttribute('stroke-width','1');
        const anim = ns('animate');
        anim.setAttribute('attributeName','opacity');
        anim.setAttribute('values','1;0.3;1'); anim.setAttribute('dur','1.5s');
        anim.setAttribute('repeatCount','indefinite');
        dot.appendChild(anim);
        g.appendChild(dot);
      }

      // Nome da máquina (2 linhas se necessário)
      const words = mq.nome.split(' ');
      if(words.length <= 2 || mq.nome.length <= 12){
        g.appendChild(text(bx + BOX_W/2, cy, mq.nome, 8.5, '700', cs.text));
      } else {
        const mid = Math.ceil(words.length/2);
        const l1 = words.slice(0, mid).join(' ');
        const l2 = words.slice(mid).join(' ');
        g.appendChild(text(bx + BOX_W/2, cy - 7, l1, 8, '700', cs.text));
        g.appendChild(text(bx + BOX_W/2, cy + 7, l2, 8, '700', cs.text));
      }

      // Cadência
      if(mq.cad !== '—'){
        g.appendChild(text(bx + BOX_W/2, by + BOX_H + 11, mq.cad, 7.5, '400', '#8A9E8E'));
      }

      svg.appendChild(g);
    });
  });
}

function sinClicarMaquina(e){
  const data = JSON.parse(e.currentTarget.getAttribute('data-mq'));
  document.getElementById('sin-det-nome').textContent = data.linha + ' — ' + data.nome;
  const sc = COR_STATUS[data.status];
  const labels = {ok:'🟢 Operando', alert:'🟡 Alerta', stop:'🔴 Parada', idle:'⚪ Inativa'};
  document.getElementById('sin-det-status').innerHTML = '<span style="color:' + sc.fill + ';font-size:16px">' + (labels[data.status]||data.status) + '</span>';
  document.getElementById('sin-det-op').textContent  = data.op;
  document.getElementById('sin-det-cad').textContent = data.cad;
  document.getElementById('sin-det-evt').textContent = data.evt;
  const card = document.getElementById('sin-detalhe-card');
  card.style.borderLeft = '4px solid ' + sc.fill;
  document.getElementById('sin-detalhe').style.display = 'block';
}

function sinAtualizarHora(){
  const now = new Date();
  const ts = now.toLocaleTimeString('pt-BR');
  const el = document.getElementById('sin-hora-pill');
  const ts2 = document.getElementById('sin-update-ts');
  if(el) el.textContent = ts;
  if(ts2) ts2.textContent = ts;
}

function sinFlicker(){
  // Simular pequenas variações de status para dar vida ao sinótico
  const variavel = ['AB-SEL','G-FRU','D-ENF'];
  variavel.forEach(id => {
    LINHAS.forEach(ln => {
      ln.maquinas.forEach(mq => {
        if(mq.id === id && mq.status !== 'stop'){
          // Alterna levemente entre ok e alert para simular variação
          // (não altera dados reais — apenas efeito visual via SVG já desenhado)
        }
      });
    });
  });
  sinAtualizarHora();
}

function sinToggleAuto(){
  const btn = document.getElementById('sin-btn-auto');
  if(autoRunning){
    clearInterval(autoTimer);
    autoRunning = false;
    if(btn) btn.textContent = '▶ Retomar';
  } else {
    autoTimer = setInterval(sinFlicker, 5000);
    autoRunning = true;
    if(btn) btn.textContent = '⏸ Pausar';
  }
}

// ── Wrapper central de nav — sinótico + auto-abertura de módulo pai (v22)
const _navOrigSin = window.nav;
window.nav = function(id, subEl, modId){
  _navOrigSin(id, subEl, modId);

  // Auto-abrir módulo pai na sidebar quando subEl não for passado (ex: botões da topbar)
  if (!subEl) {
    const modMap = {
      'prod-ordens':'mod-prod','prod-materiais':'mod-prod','prod-checkin':'mod-prod',
      'prod-iniciar':'mod-prod','prod-finalizar':'mod-prod','prod-paradas':'mod-prod',
      'prod-cockpit':'mod-prod','prod-qualidade':'mod-prod','prod-docs':'mod-prod',
      'prod-rastr':'mod-prod','prod-sinotico':'mod-prod','prod-devol':'mod-prod',
      'prod-chamados':'mod-prod',
      'pes-ordens':'mod-pes','pes-cockpit':'mod-pes','pes-mps':'mod-pes',
      'pes-pendencias':'mod-pes','pes-checklist':'mod-pes','pes-gaiola':'mod-pes',
      'pes-devol-mp':'mod-pes','pes-checkout':'mod-pes','pes-rastr':'mod-pes',
      'fab-ordens':'mod-fab','fab-iniciar':'mod-fab','fab-checkin':'mod-fab',
      'fab-inbatch':'mod-fab','fab-amostras':'mod-fab','fab-tanque':'mod-fab',
      'fab-fechar':'mod-fab','fab-rastr':'mod-fab','fab-saldo':'mod-fab',
    };
    if (modMap[id]) {
      const list = document.getElementById(modMap[id]);
      if (list && !list.classList.contains('open')) {
        document.querySelectorAll('.sb-sub-list').forEach(l => l.classList.remove('open'));
        document.querySelectorAll('.sb-module-btn').forEach(b => b.classList.remove('open'));
        list.classList.add('open');
        const btn = list.previousElementSibling;
        if (btn && btn.classList.contains('sb-module-btn')) btn.classList.add('open');
      }
    }
  }

  // Renderizar SVG sinótico ao entrar na tela
  if(id === 'prod-sinotico'){
    requestAnimationFrame(() => {
      drawSinotico();
      sinAtualizarHora();
      clearInterval(autoTimer);
      autoTimer = setInterval(sinFlicker, 5000);
      autoRunning = true;
    });
  }
};

// Também renderizar no load se já estiver na tela
document.addEventListener('DOMContentLoaded', () => {
  // Tela inicial padrão
  const btnPesOrdens = document.querySelector('[onclick*="pes-ordens"]');
  nav('pes-ordens', btnPesOrdens, 'mod-pes');
  // Abrir sidebar do módulo Pesagem
  const modPes = document.getElementById('mod-pes');
  if (modPes) modPes.classList.add('open');
});

})();


/* ── Sinótico da Fábrica ──────────────────────────────── */
const sinMFData = {
  MF5: { titulo:'Sinótico da Fábrica — MF5', eyebrow:'MF5 · ERU 4.1.48 — Visão Geral da Planta', prod:5, par:3, alr:1, oee:'79', linhas:'6' },
  MF4: { titulo:'Sinótico da Fábrica — MF4', eyebrow:'MF4 · ERU 4.1.48 — Colônias, EDT, Perfumes, Aerossóis', prod:3, par:0, alr:1, oee:'82', linhas:'4' },
  MF3: { titulo:'Sinótico da Fábrica — MF3', eyebrow:'MF3 · ERU 4.1.48 — Creme e Loção Hidratante', prod:0, par:0, alr:0, oee:'—', linhas:'4' },
  MF2: { titulo:'Sinótico da Fábrica — MF2', eyebrow:'MF2 · ERU 4.1.48 — Shampoo, Condicionador e Gel', prod:0, par:0, alr:0, oee:'—', linhas:'4' },
  MF1: { titulo:'Sinótico da Fábrica — MF1', eyebrow:'MF1 · ERU 4.1.48 — Supositórios, Talco e Polvinho', prod:0, par:0, alr:0, oee:'—', linhas:'4' },
};

const sinDetalhes = {
  'Embrulhadeira':    { vel:'—',         status:'err',  obs:'PARADA: Quebra de bobina. Operador chamado.' },
  'Seladora Shrink':  { vel:'—',         status:'idle', obs:'Aguardando retomada da Embrulhadeira.' },
  'Encaixotadora':    { vel:'—',         status:'ok',   obs:'Operando normalmente.' },
  'Paletizador Robô': { vel:'—',         status:'idle', obs:'Em standby. Último palete: P-2026-414-003.' },
  'Cortadeira':       { vel:'16.200/h',  status:'ok',   obs:'Operando normalmente. Faca trocada às 06:00.' },
  'Balança':          { vel:'—',         status:'ok',   obs:'Última verificação de tara: conforme.' },
  'Prensa':           { vel:'12.150/h',  status:'ok',   obs:'Operando em 75% da capacidade nominal.' },
  'Emb.Flow Pack':    { vel:'9.200/h',   status:'alr',  obs:'ALERTA: Velocidade 18% abaixo do padrão (11.200/h).' },
  'Emb.Opacos':       { vel:'—',         status:'idle', obs:'Sem OP alocada.' },
  'Enfardadora':      { vel:'—',         status:'err',  obs:'PARADA: Setup para troca de produto. Previsão: 09:30.' },
  'Extrusora':        { vel:'—',         status:'ok',   obs:'Operando normalmente.' },
  'Forno':            { vel:'180°C',     status:'ok',   obs:'Temperatura estável. PID via SCADA.' },
  'Flow Pack':        { vel:'—',         status:'ok',   obs:'Operando normalmente.' },
  'Encartuch.IWK':    { vel:'—',         status:'ok',   obs:'Operando normalmente.' },
  'Rotuladeira':      { vel:'—',         status:'ok',   obs:'Operando normalmente.' },
  'Envas/Tampad PBK': { vel:'—',         status:'ok',   obs:'Envasadora/Tampadora PBK operando normalmente.' },
  'Encartuch.Bergami':{ vel:'—',         status:'alr',  obs:'ALERTA: Velocidade abaixo do padrão. Verificar alimentação.' },
  'Encartuch.Manual': { vel:'—',         status:'ok',   obs:'Operação manual conforme.' },
  'Sollas':           { vel:'—',         status:'ok',   obs:'Operando normalmente.' },
  'Encaixot.Manual':  { vel:'—',         status:'ok',   obs:'Operação manual conforme.' },
  'Paletização':      { vel:'—',         status:'ok',   obs:'Operando normalmente.' },
  'Envasadora':       { vel:'—',         status:'idle', obs:'Sem OP alocada.' },
  'Aplic.Gás':        { vel:'—',         status:'idle', obs:'Sem OP alocada.' },
  'Balança Manual':   { vel:'—',         status:'idle', obs:'Sem OP alocada.' },
  'Banho Teknisa':    { vel:'—',         status:'idle', obs:'Sem OP alocada. Teste de banho / transferência.' },
  'Batoque/Tampa':    { vel:'—',         status:'idle', obs:'Sem OP alocada.' },
  'Massageador':      { vel:'—',         status:'idle', obs:'Sem OP alocada.' },
};


const sinHTMLs = {
  MF5: document.getElementById('sin-content') ? document.getElementById('sin-content').innerHTML : '',
  MF4: `<div style="padding:4px 0"><div style="font-size:8px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--text3);margin-bottom:8px;padding-left:26px;border-bottom:1px solid var(--border);padding-bottom:6px">MF4 — Colônias, EDT, Perfumes, Aerossóis, Difusores, Sprays e Álcool em Gel · 4 Linhas</div><div style="display:flex;align-items:flex-start;gap:4px;margin-bottom:18px"><div class="sin-linha-label">A</div><div style="flex:1"><div style="display:flex;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:0"><div style="font-size:7px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#dc5050;background:rgba(220,80,80,.08);border:1px solid #dc5050;border-radius:4px;padding:2px 7px;margin-right:6px;flex-shrink:0">ENVASE</div><div class="sin-op-tag " style="font-size:9px;min-width:90px">OP-2026-420<br>Colônia 100ml</div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Rotuladeira')"><div class="sin-maq-ico">🏷️</div><div class="sin-maq-nome">Rotuladeira</div><div class="sin-maq-status">Operando</div></div></div><div style="display:flex;align-items:center;flex-wrap:wrap;gap:0"><div style="font-size:7px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#50a050;background:rgba(80,160,80,.08);border:1px solid #50a050;border-radius:4px;padding:2px 7px;margin-right:6px;flex-shrink:0">EMBALAGEM</div><div style="width:6px"></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Encartuch.Manual')"><div class="sin-maq-ico">📋</div><div class="sin-maq-nome">Encartuch.Manual</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Sollas')"><div class="sin-maq-ico">📦</div><div class="sin-maq-nome">Sollas</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Encaixot.Manual')"><div class="sin-maq-ico">📫</div><div class="sin-maq-nome">Encaixot.Manual</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Balança')"><div class="sin-maq-ico">⚖️</div><div class="sin-maq-nome">Balança</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Paletização')"><div class="sin-maq-ico">🏗️</div><div class="sin-maq-nome">Paletização</div><div class="sin-maq-status">Operando</div></div><div class="sin-fim">FIM</div></div></div></div><div style="display:flex;align-items:flex-start;gap:4px;margin-bottom:18px"><div class="sin-linha-label">B</div><div style="flex:1"><div style="display:flex;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:0"><div style="font-size:7px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#dc5050;background:rgba(220,80,80,.08);border:1px solid #dc5050;border-radius:4px;padding:2px 7px;margin-right:6px;flex-shrink:0">ENVASE</div><div class="sin-op-tag " style="font-size:9px;min-width:90px">OP-2026-421<br>EDT 50ml</div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Envas/Tampad PBK')"><div class="sin-maq-ico">💧</div><div class="sin-maq-nome">Envas/Tampad PBK</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Rotuladeira')"><div class="sin-maq-ico">🏷️</div><div class="sin-maq-nome">Rotuladeira</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina alr" onclick="sinDetalhe('Encartuch.Bergami')"><div class="sin-maq-ico">🗂️</div><div class="sin-maq-nome">Encartuch.Bergami</div><div class="sin-maq-status">Alerta</div><div class="sin-maq-vel">vel baixa</div></div></div><div style="display:flex;align-items:center;flex-wrap:wrap;gap:0"><div style="font-size:7px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#50a050;background:rgba(80,160,80,.08);border:1px solid #50a050;border-radius:4px;padding:2px 7px;margin-right:6px;flex-shrink:0">EMBALAGEM</div><div style="width:6px"></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Sollas')"><div class="sin-maq-ico">📦</div><div class="sin-maq-nome">Sollas</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Encaixot.Manual')"><div class="sin-maq-ico">📫</div><div class="sin-maq-nome">Encaixot.Manual</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Balança')"><div class="sin-maq-ico">⚖️</div><div class="sin-maq-nome">Balança</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Paletização')"><div class="sin-maq-ico">🏗️</div><div class="sin-maq-nome">Paletização</div><div class="sin-maq-status">Operando</div></div><div class="sin-fim">FIM</div></div></div></div><div style="display:flex;align-items:flex-start;gap:4px;margin-bottom:18px"><div class="sin-linha-label">C</div><div style="flex:1"><div style="display:flex;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:0"><div style="font-size:7px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#dc5050;background:rgba(220,80,80,.08);border:1px solid #dc5050;border-radius:4px;padding:2px 7px;margin-right:6px;flex-shrink:0">ENVASE</div><div class="sin-op-tag " style="font-size:9px;min-width:90px">OP-2026-422<br>Perfume 30ml</div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Envas/Tampad PBK')"><div class="sin-maq-ico">💧</div><div class="sin-maq-nome">Envas/Tampad PBK</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Rotuladeira')"><div class="sin-maq-ico">🏷️</div><div class="sin-maq-nome">Rotuladeira</div><div class="sin-maq-status">Operando</div></div></div><div style="display:flex;align-items:center;flex-wrap:wrap;gap:0"><div style="font-size:7px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#50a050;background:rgba(80,160,80,.08);border:1px solid #50a050;border-radius:4px;padding:2px 7px;margin-right:6px;flex-shrink:0">EMBALAGEM</div><div style="width:6px"></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Encartuch.Manual')"><div class="sin-maq-ico">📋</div><div class="sin-maq-nome">Encartuch.Manual</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Sollas')"><div class="sin-maq-ico">📦</div><div class="sin-maq-nome">Sollas</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Encaixot.Manual')"><div class="sin-maq-ico">📫</div><div class="sin-maq-nome">Encaixot.Manual</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Balança')"><div class="sin-maq-ico">⚖️</div><div class="sin-maq-nome">Balança</div><div class="sin-maq-status">Operando</div></div><div class="sin-seta ok"></div><div class="sin-maquina ok" onclick="sinDetalhe('Paletização')"><div class="sin-maq-ico">🏗️</div><div class="sin-maq-nome">Paletização</div><div class="sin-maq-status">Operando</div></div><div class="sin-fim">FIM</div></div></div></div><div style="display:flex;align-items:flex-start;gap:4px;margin-bottom:18px"><div class="sin-linha-label">D</div><div style="flex:1"><div style="display:flex;align-items:center;margin-bottom:6px;flex-wrap:wrap;gap:0"><div style="font-size:7px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#dc5050;background:rgba(220,80,80,.08);border:1px solid #dc5050;border-radius:4px;padding:2px 7px;margin-right:6px;flex-shrink:0">ENVASE</div><div class="sin-op-tag idle" style="font-size:9px;min-width:90px">— Sem OP —</div><div class="sin-seta "></div><div class="sin-maquina idle" onclick="sinDetalhe('Envasadora')"><div class="sin-maq-ico">💧</div><div class="sin-maq-nome">Envasadora</div><div class="sin-maq-status">Aguardando</div></div><div class="sin-seta "></div><div class="sin-maquina idle" onclick="sinDetalhe('Aplic.Gás')"><div class="sin-maq-ico">🔧</div><div class="sin-maq-nome">Aplic.Gás</div><div class="sin-maq-status">Aguardando</div></div><div class="sin-seta "></div><div class="sin-maquina idle" onclick="sinDetalhe('Balança Manual')"><div class="sin-maq-ico">⚖️</div><div class="sin-maq-nome">Balança Manual</div><div class="sin-maq-status">Aguardando</div></div><div class="sin-seta "></div><div class="sin-maquina idle" onclick="sinDetalhe('Banho Teknisa')"><div class="sin-maq-ico">🧪</div><div class="sin-maq-nome">Banho Teknisa</div><div class="sin-maq-status">Aguardando</div></div><div class="sin-seta "></div><div class="sin-maquina idle" onclick="sinDetalhe('Batoque/Tampa')"><div class="sin-maq-ico">🔩</div><div class="sin-maq-nome">Batoque/Tampa</div><div class="sin-maq-status">Aguardando</div></div></div><div style="display:flex;align-items:center;flex-wrap:wrap;gap:0"><div style="font-size:7px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#50a050;background:rgba(80,160,80,.08);border:1px solid #50a050;border-radius:4px;padding:2px 7px;margin-right:6px;flex-shrink:0">EMBALAGEM</div><div style="width:6px"></div><div class="sin-seta "></div><div class="sin-maquina idle" onclick="sinDetalhe('Massageador')"><div class="sin-maq-ico">💆</div><div class="sin-maq-nome">Massageador</div><div class="sin-maq-status">Aguardando</div></div><div class="sin-seta "></div><div class="sin-maquina idle" onclick="sinDetalhe('Encaixot.Manual')"><div class="sin-maq-ico">📫</div><div class="sin-maq-nome">Encaixot.Manual</div><div class="sin-maq-status">Aguardando</div></div><div class="sin-seta "></div><div class="sin-maquina idle" onclick="sinDetalhe('Balança')"><div class="sin-maq-ico">⚖️</div><div class="sin-maq-nome">Balança</div><div class="sin-maq-status">Aguardando</div></div><div class="sin-seta "></div><div class="sin-maquina idle" onclick="sinDetalhe('Paletização')"><div class="sin-maq-ico">🏗️</div><div class="sin-maq-nome">Paletização</div><div class="sin-maq-status">Aguardando</div></div><div class="sin-fim">FIM</div></div></div></div></div>`,
  MF3: `<div style="text-align:center;padding:60px 20px;color:var(--text3)"><div style="font-size:56px;margin-bottom:16px;opacity:.3">🏭</div><div style="font-size:16px;font-weight:700;color:var(--text2);margin-bottom:8px">MF1 — Supositórios, Talco e Polvinho</div><div style="font-size:12px;margin-bottom:20px">Sinótico em configuração. Disponível após levantamento de campo.</div><span class="bdg bdg-ouro">⏳ Em Configuração</span></div>`,
  MF2: `<div style="text-align:center;padding:60px 20px;color:var(--text3)"><div style="font-size:56px;margin-bottom:16px;opacity:.3">🏭</div><div style="font-size:16px;font-weight:700;color:var(--text2);margin-bottom:8px">MF2 — Shampoo, Condicionador e Gel</div><div style="font-size:12px;margin-bottom:20px">Sinótico em configuração. Disponível após levantamento de campo.</div><span class="bdg bdg-ouro">⏳ Em Configuração</span></div>`,
  MF1: `<div style="text-align:center;padding:60px 20px;color:var(--text3)"><div style="font-size:56px;margin-bottom:16px;opacity:.3">🏭</div><div style="font-size:16px;font-weight:700;color:var(--text2);margin-bottom:8px">MF1 — Supositórios, Talco e Polvinho</div><div style="font-size:12px;margin-bottom:20px">Sinótico em configuração. Disponível após levantamento de campo.</div><span class="bdg bdg-ouro">⏳ Em Configuração</span></div>`,
};


function sinCarregarMF(mf) {
  const d = sinMFData[mf] || sinMFData['MF5'];
  document.getElementById('sin-title').textContent   = d.titulo;
  document.getElementById('sin-eyebrow').textContent = d.eyebrow;
  document.getElementById('sin-kpi-prod').textContent    = d.prod;
  document.getElementById('sin-kpi-prod-sub').textContent = 'de ' + d.linhas + ' linhas';
  document.getElementById('sin-kpi-paradas').textContent  = d.par;
  document.getElementById('sin-kpi-alertas').textContent  = d.alr;
  document.getElementById('sin-kpi-oee-lbl').textContent  = 'OEE Médio ' + mf;
  document.getElementById('sin-kpi-oee').innerHTML = d.oee === '—'
    ? '<span style="font-size:22px;color:var(--text3)">—</span>'
    : d.oee + '<span style="font-size:18px;color:var(--text3)">%</span>';

  const area = document.getElementById('sin-content');
  if (sinHTMLs[mf]) {
    area.innerHTML = sinHTMLs[mf];
  }

  // Salvar HTML do MF5 na primeira carga
  if (!sinHTMLs['_saved'] && mf !== 'MF5') {
    sinHTMLs['_saved'] = true;
  }

  sinAtualizar();
}

function sinDetalhe(nome) {
  const d = sinDetalhes[nome] || { vel:'—', status:'idle', obs:'Sem informações disponíveis.' };
  const cores  = { ok:'var(--ok)', err:'var(--per)', idle:'var(--text3)', alr:'var(--alr)' };
  const labels = { ok:'🟢 Operando', err:'🔴 Parada', idle:'⚪ Aguardando', alr:'🟡 Alerta' };
  const mf = document.getElementById('sin-sel-mf').value || 'MF5';
  document.getElementById('sin-modal-title').textContent = nome;
  document.getElementById('sin-modal-sub').textContent   = mf;
  document.getElementById('sin-modal-body').innerHTML =
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">' +
    '<div style="background:var(--surface2);border-radius:6px;padding:10px 12px">' +
    '<div style="font-size:8px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--text3);margin-bottom:4px">Status</div>' +
    '<div style="font-size:14px;font-weight:700;color:' + cores[d.status] + '">' + labels[d.status] + '</div></div>' +
    '<div style="background:var(--surface2);border-radius:6px;padding:10px 12px">' +
    '<div style="font-size:8px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--text3);margin-bottom:4px">Velocidade</div>' +
    '<div style="font-family:var(--font-m);font-size:13px;font-weight:700;color:var(--verde)">' + d.vel + '</div></div>' +
    '</div>' +
    '<div style="background:var(--inf-p);border-radius:7px;padding:12px 14px;font-size:12px;color:var(--text2)">' +
    '<div style="font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--text3);margin-bottom:6px">Observação</div>' + d.obs + '</div>';
  openModal('modal-sin-detalhe');
}

function sinAtualizar() {
  const pill = document.getElementById('sin-status-pill');
  if (!pill) return;
  pill.textContent = '⏳ Atualizando...';
  setTimeout(() => {
    const t = new Date().toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'});
    pill.textContent = '● Atualizado ' + t;
  }, 900);
}

function sinFiltroLinha(val) {}

function toggleMod(btn, modId) {
  const list = document.getElementById(modId);
  const isOpen = list.classList.contains('open');
  document.querySelectorAll('.sb-sub-list').forEach(l=>l.classList.remove('open'));
  document.querySelectorAll('.sb-module-btn').forEach(b=>b.classList.remove('open'));
  if(!isOpen){ list.classList.add('open'); btn.classList.add('open'); }
}

/* ── Modais ──────────────────────────────────────────── */
function openModal(id){
  document.getElementById(id).classList.add('open');
  if(id==='modal-fab-setup'){
    const el=document.getElementById('setup-hora');
    if(el && !el.value) el.value=new Date().toLocaleTimeString('pt-BR');
  }
}
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',function(e){ if(e.target===this) this.classList.remove('open'); }));

/* ── Checklist validações (prod-iniciar) ─────────────── */
const valItems = ['val-1','val-2','val-3','val-4','val-5'];
const valOk = [true,true,false,false,false];
function toggleVal(id, prefix){
  const i = parseInt(id.split('-')[1])-1;
  valOk[i] = !valOk[i];
  const ico = document.getElementById(id+'-ico');
  const bdg = document.getElementById(id+'-bdg');
  if(valOk[i]){ ico.className='val-icon ok'; ico.textContent='✅'; bdg.className='bdg bdg-ok'; bdg.textContent='Aprovado'; }
  else if(id==='val-1'||id==='val-2'){ ico.className='val-icon fail'; ico.textContent='❌'; bdg.className='bdg bdg-per'; bdg.textContent='Reprovado'; }
  else{ ico.className='val-icon pend'; ico.textContent='⏳'; bdg.className='bdg bdg-alr'; bdg.textContent='Pendente'; }
  updateValProg();
}
function updateValProg(){
  const done = valOk.filter(Boolean).length;
  const pct = Math.round(done/valOk.length*100);
  document.getElementById('vi-pct').textContent=pct+'%';
  document.getElementById('vi-bar').style.width=pct+'%';
  document.getElementById('vi-txt').textContent=done+' de '+valOk.length+' validações aprovadas';
  const ok = done===valOk.length;
  document.getElementById('vi-btn').disabled=!ok;
  document.getElementById('vi-ico').textContent=ok?'✅':pct>=60?'🔄':'⏳';
  document.getElementById('vi-note').textContent=ok?'Todas as validações aprovadas — produção pode ser iniciada.':'Resolva as pendências para habilitar o início.';
  document.getElementById('vi-note').style.color=ok?'var(--ok)':'';
}

/* ── Checklists genéricos ────────────────────────────── */
function tck2(el){ el.classList.toggle('done'); upCkG('screen-pes-checklist','ck2'); }
function upCkG(screenId, prefix){
  const all  = document.querySelectorAll('#'+screenId+' .ck-item');
  const done = document.querySelectorAll('#'+screenId+' .ck-item.done');
  const pct  = Math.round(done.length/all.length*100);
  const pEl  = document.getElementById(prefix+'-pct');
  const bEl  = document.getElementById(prefix+'-bar');
  const tEl  = document.getElementById(prefix+'-txt');
  const iEl  = document.getElementById(prefix+'-ico');
  const nEl  = document.getElementById(prefix+'-note');
  const btn  = document.getElementById(prefix+'-btn');
  if(pEl) pEl.textContent=pct+'%';
  if(bEl) bEl.style.width=pct+'%';
  if(tEl) tEl.textContent=done.length+' de '+all.length+' itens verificados';
  const ok=done.length===all.length;
  if(btn) btn.disabled=!ok;
  if(iEl) iEl.textContent=ok?'✅':pct>=50?'🔄':'⏳';
  if(nEl){ nEl.textContent=ok?'Checklist completo — pronto para liberar.':'Complete todos os itens para liberar.'; nEl.style.color=ok?'var(--ok)':''; }
}

/* ── Qty ─────────────────────────────────────────────── */
function aq(id,d,min){ const e=document.getElementById(id); e.value=Math.max(min,parseInt(e.value||0)+d); e.dispatchEvent(new Event('input')); }
function aqd(id,d){ const e=document.getElementById(id); e.value=Math.max(0,(parseFloat(e.value||0)+d).toFixed(2)); }

/* ── Checklist genérico (modal-ck-processo e similares) ── */
function toggleCk(el) {
  const done = !el.classList.contains('done');
  el.classList.toggle('done', done);
  const box = el.querySelector('.ck-box');
  if (box) {
    if (done) {
      box.style.background  = 'var(--verde)';
      box.style.borderColor = 'var(--verde)';
      box.style.color       = '#fff';
    } else {
      box.style.background  = '';
      box.style.borderColor = '';
      box.style.color       = '';
    }
  }
}

/* ── Motivos ─────────────────────────────────────────── */
function sm(el,gid,cls){ document.querySelectorAll('#'+gid+' .mot').forEach(b=>b.classList.remove('sv','sd','so','si')); el.classList.add(cls); }
/* ── Tanque ──────────────────────────────────────────── */
function selecionarTanque(el, id) {
  document.querySelectorAll('.tanq-item').forEach(t => {
    t.style.border='1px solid var(--ok-b)';
    t.style.boxShadow='none';
  });
  el.style.border='3px solid var(--verde)';
  el.style.boxShadow='0 0 0 4px rgba(28,92,49,.15)';
  document.getElementById('tanq-sel-nome').textContent=id;
  document.getElementById('tanq-sel-res').textContent=id;
  document.getElementById('tanq-limp-res').textContent='✓ Verificada';
  document.getElementById('tanq-limp-res').style.color='var(--ok)';
  document.getElementById('tanq-sel-msg').style.display='none';
  document.getElementById('tanq-limpeza-detalhes').style.display='block';
  document.getElementById('tanq-btn-confirmar').disabled=false;
}

/* ========================================================== */

/* ════════════ FAB — Funções de Iniciar Ordem ════════════ */

const FAB_APROVACOES = { lims: false, embalagens: false, setup: false, operadores: false, enabley: false };

function fabAtualizarProgresso() {
  const total = 5;
  const aprovados = [FAB_APROVACOES.lims, FAB_APROVACOES.embalagens, FAB_APROVACOES.setup, FAB_APROVACOES.operadores, FAB_APROVACOES.enabley].filter(Boolean).length;
  const pct = Math.round((aprovados / total) * 100);
  const bar = document.getElementById('fvi-bar');
  const pctEl = document.getElementById('fvi-pct');
  const txt = document.getElementById('fvi-txt');
  const ico = document.getElementById('fvi-ico');
  const btn = document.getElementById('fvi-btn');
  const note = document.getElementById('fvi-note');
  if (!bar) return;
  bar.style.width = pct + '%';
  pctEl.textContent = pct + '%';
  txt.textContent = aprovados + ' de ' + total + ' validações aprovadas — todas são obrigatórias';
  if (aprovados === total) {
    ico.textContent = '✅';
    btn.disabled = false;
    note.textContent = '✓ Todas as validações aprovadas — pronto para iniciar!';
    note.style.color = 'var(--ok)';
  } else {
    ico.textContent = aprovados > 2 ? '⚡' : '⏳';
  }
}

function fabMarcarAprovado(id) {
  const ico = document.getElementById(id + '-ico');
  const bdg = document.getElementById(id + '-bdg');
  if (!ico) return;
  ico.className = 'val-icon ok';
  ico.textContent = '✅';
  bdg.className = 'bdg bdg-ok';
  bdg.textContent = 'Aprovado';
}

function fabAbrirLims() {
  // Preencher hora atual no campo
  const agora = new Date();
  const el = document.getElementById('lims-data-aprovacao');
  if (el) el.value = agora.toLocaleDateString('pt-BR') + ' ' + agora.toLocaleTimeString('pt-BR');
  openModal('modal-fab-lims');
}

function fabAprovarLims() {
  FAB_APROVACOES.lims = true;
  fabMarcarAprovado('fval-1');
  const desc = document.getElementById('fval-1-desc');
  if (desc) desc.innerHTML = 'Lote G2026-091 · <strong style="color:var(--ok)">Aprovado pelo LIMS</strong> · CQ liberou às ' + new Date().toLocaleTimeString('pt-BR');
  // Atualizar bloco de status no modal
  const block = document.getElementById('lims-status-block');
  if (block) block.innerHTML = '<div style="display:flex;align-items:center;gap:10px"><span style="font-size:22px">✅</span><div><div style="font-size:13px;font-weight:700;color:var(--ok)">Granel Aprovado pelo CQ</div><div style="font-size:10px;color:var(--text3);font-family:var(--font-m)">Aprovado em: ' + new Date().toLocaleString('pt-BR') + ' · Dra. Patricia Alves</div></div></div>';
  closeModal('modal-fab-lims');
  fabAtualizarProgresso();
  alert('✅ Granel G2026-091 aprovado!\n\nStatus LIMS atualizado.\nRegistro de aprovação salvo no Apriso.\nFabricação liberada para iniciar após demais validações.');
}

// Setup Checklist
const setupChecks = {};
const SETUP_CRITICOS = ['setup-ck-1','setup-ck-2','setup-ck-3','setup-ck-5','setup-ck-6'];
const SETUP_OBRIG   = ['setup-ck-4','setup-ck-7','setup-ck-8','setup-ck-9'];
const SETUP_TOTAL   = 10;

function toggleSetupCk(el, id) {
  const done = !el.classList.contains('done');
  setupChecks[id] = done;
  el.classList.toggle('done', done);
  const box = el.querySelector('.ck-box');
  if (done) {
    box.style.background = 'var(--verde)';
    box.style.borderColor = 'var(--verde)';
    box.style.color = '#fff';
  } else {
    box.style.background = '';
    box.style.borderColor = '';
    box.style.color = '';
  }
  atualizarSetupProgresso();
}

function atualizarSetupProgresso() {
  const feitos = Object.values(setupChecks).filter(Boolean).length;
  const pct = Math.round((feitos / SETUP_TOTAL) * 100);
  const bar = document.getElementById('setup-bar');
  const pctEl = document.getElementById('setup-pct');
  const txt = document.getElementById('setup-txt');
  const btn = document.getElementById('setup-btn-confirmar');
  const hint = document.getElementById('setup-hint');
  if (bar) { bar.style.width = pct + '%'; pctEl.textContent = pct + '%'; txt.textContent = feitos + ' de ' + SETUP_TOTAL + ' itens verificados'; }
  // Verificar se todos os críticos e obrigatórios foram marcados
  const criticos_ok = SETUP_CRITICOS.every(id => setupChecks[id]);
  const obrig_ok    = SETUP_OBRIG.every(id => setupChecks[id]);
  if (btn) {
    btn.disabled = !(criticos_ok && obrig_ok);
    if (criticos_ok && obrig_ok) hint.textContent = '✓ Todos os itens obrigatórios verificados — pronto para confirmar!';
  }
}

function fabConfirmarSetup() {
  const hora = document.getElementById('setup-hora');
  if (hora) hora.value = new Date().toLocaleTimeString('pt-BR');
  FAB_APROVACOES.setup = true;
  fabMarcarAprovado('fval-3');
  closeModal('modal-fab-setup');
  fabAtualizarProgresso();
  alert('✅ Setup do Reator R-01 confirmado!\n\nChecklist registrado no Apriso.\nOperador: J. Santos · ' + new Date().toLocaleTimeString('pt-BR') + '\nTodos os parâmetros dentro do especificado.');
}

// Check-in Operadores Fabricação
const fabCiOperadores = {
  1: { nome:'José Santos',    mat:'00412', iniciais:'JS', equip:'Reator' },
  2: { nome:'Maria Oliveira', mat:'00387', iniciais:'MO', equip:'Reator' },
  3: { nome:'Carlos Pereira', mat:'00521', iniciais:'CP', equip:'Reator' },
  4: { nome:'Ana Lima',       mat:'00298', iniciais:'AL', equip:'Reator' },
};
const fabCiHabilitacoes = {
  1: { 'Operador Processo': true,  'Operador Auxiliar': true  },
  2: { 'Operador Processo': true,  'Operador Auxiliar': true  },
  3: { 'Operador Processo': false, 'Operador Auxiliar': true  },
  4: { 'Operador Processo': true,  'Operador Auxiliar': false },
};
const fabCiPostoNome = { 1:'Operador Processo', 2:'Operador Auxiliar' };
const fabPostoAlocacao = { 1: null, 2: null };
const fabCiCheckinsFeitos = [];

function fabCiCheckin() {
  const inp = document.getElementById('fab-ci-mat');
  const mat = inp.value.trim();
  const op = Object.values(fabCiOperadores).find(o => o.mat === mat);
  if (!op) { alert('⚠️ Matrícula não encontrada: ' + mat); inp.value=''; return; }
  if (!fabCiCheckinsFeitos.includes(op.mat)) fabCiCheckinsFeitos.push(op.mat);
  fabRenderizarCiLista();
  inp.value = '';
}

function fabCiCheckinAuto() {
  fabCiCheckinsFeitos.length = 0;
  fabCiCheckinsFeitos.push('00412','00387');
  fabRenderizarCiLista();
  // Também preencher selects
  const s1 = document.getElementById('fab-sel-posto-1');
  const s2 = document.getElementById('fab-sel-posto-2');
  if(s1){ s1.value='1'; fabAlocarPosto(1,s1); }
  if(s2){ s2.value='2'; fabAlocarPosto(2,s2); }
}

function fabRenderizarCiLista() {
  const lista = document.getElementById('fab-ci-lista');
  if (!lista) return;
  if (fabCiCheckinsFeitos.length === 0) {
    lista.innerHTML = '<div style="font-size:11px;color:var(--text3);font-style:italic">Nenhum operador com check-in ainda.</div>';
    return;
  }
  lista.innerHTML = fabCiCheckinsFeitos.map(mat => {
    const op = Object.values(fabCiOperadores).find(o => o.mat === mat);
    if (!op) return '';
    return '<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--ok-p);border:1px solid var(--ok-b);border-radius:7px">'
      + '<span style="width:32px;height:32px;border-radius:50%;background:var(--verde);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:12px;flex-shrink:0">' + op.iniciais + '</span>'
      + '<div><div style="font-size:12px;font-weight:700">' + op.nome + '</div><div style="font-size:10px;color:var(--text3);font-family:var(--font-m)">Mat. ' + op.mat + ' · Check-in: ' + new Date().toLocaleTimeString('pt-BR') + '</div></div>'
      + '<span class="bdg bdg-ok" style="margin-left:auto">✓ Presente</span></div>';
  }).join('');
}

function fabAlocarPosto(posto, sel) {
  const opId = parseInt(sel.value) || null;
  fabPostoAlocacao[posto] = opId;
  const td = document.getElementById('fab-td-posto-' + posto);
  if (opId) {
    const op = fabCiOperadores[opId];
    td.innerHTML = '<span style="font-size:12px;font-weight:700;color:var(--verde)">' + op.nome + '</span>';
  } else {
    td.innerHTML = '<span style="color:var(--text3);font-style:italic;font-size:11px">Não alocado</span>';
  }
  const todos = Object.values(fabPostoAlocacao).every(v => v !== null);
  const hint = document.getElementById('fab-enabley-hint');
  const btn  = document.getElementById('fab-btn-enabley');
  if (hint) hint.textContent = todos ? '✓ Todos alocados — pronto para validar' : (2 - Object.values(fabPostoAlocacao).filter(Boolean).length) + ' posto(s) ainda sem alocação';
  if (btn && todos) btn.style.background = 'var(--verde-meio)';
}

function fabValidarEnabley() {
  const todos = Object.values(fabPostoAlocacao).every(v => v !== null);
  if (!todos) { alert('⚠️ Aloque os 2 postos antes de validar.'); return; }
  const btn = document.getElementById('fab-btn-enabley');
  btn.textContent = '⏳ Consultando Enabley API...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '🔍 Validar Habilitação Enabley';
    btn.disabled = false;
    const resDiv = document.getElementById('fab-enabley-resultado');
    resDiv.style.display = 'flex';
    resDiv.style.flexDirection = 'column';
    resDiv.style.gap = '8px';
    resDiv.innerHTML = '';
    let todosAptos = true;
    for (let posto = 1; posto <= 2; posto++) {
      const opId = fabPostoAlocacao[posto];
      const op = fabCiOperadores[opId];
      const postoNome = fabCiPostoNome[posto];
      const apto = fabCiHabilitacoes[opId][postoNome];
      if (!apto) todosAptos = false;
      const cor = apto ? 'var(--ok)' : 'var(--per)';
      const bg  = apto ? 'var(--ok-p)' : 'var(--per-p)';
      const brd = apto ? 'var(--ok-b)' : 'var(--per-b)';
      resDiv.innerHTML += '<div style="display:flex;align-items:center;gap:10px;padding:10px 13px;border-radius:8px;border:1.5px solid ' + brd + ';background:' + bg + '">'
        + '<div style="width:30px;height:30px;border-radius:50%;background:' + cor + ';display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;flex-shrink:0">' + (apto ? '✓' : '✗') + '</div>'
        + '<div style="flex:1"><div style="font-size:12px;font-weight:700">' + op.nome + ' — ' + postoNome + '</div>'
        + '<div style="font-size:10px;color:var(--text3)">Reator R-01 · Loção Hidratante Rosa 200ml</div></div>'
        + '<span class="bdg ' + (apto ? 'bdg-ok' : 'bdg-per') + '">' + (apto ? '🟢 APTO' : '🔴 INAPTO') + '</span></div>';
    }
    const liberarBtn = document.getElementById('fab-ci-btn-liberar');
    if (todosAptos && liberarBtn) liberarBtn.style.display = 'flex';
  }, 1400);
}

function fabLiberarOperadores() {
  FAB_APROVACOES.operadores = true;
  FAB_APROVACOES.enabley = true;
  fabMarcarAprovado('fval-4');
  fabMarcarAprovado('fval-5');
  const desc4 = document.getElementById('fval-4-desc');
  if (desc4) desc4.innerHTML = 'Reator R-01 · <strong style="color:var(--ok)">2 operadores alocados e habilitados</strong> · Enabley validado ✓';
  const desc5 = document.getElementById('fval-5-desc');
  if (desc5) desc5.innerHTML = '<strong style="color:var(--ok)">Habilitação Enabley validada</strong> · José Santos e Maria Oliveira · Reator R-01 ✓';
  closeModal('modal-fab-checkin-op');
  fabAtualizarProgresso();
  alert('✅ Operadores liberados para fabricação!\n\nJosé Santos e Maria Oliveira habilitados no Enabley.\nCheck-in registrado no Apriso.\nValidação concluída: ' + new Date().toLocaleTimeString('pt-BR'));
}

function fabIniciarProducao() {
  // Registrar horário de início
  const agora = new Date();
  const hora  = agora.toLocaleTimeString('pt-BR');
  const data  = agora.toLocaleDateString('pt-BR');
  // Mostrar modal de lançamento do cockpit
  openModal('modal-fab-cockpit-launch');
  const el = document.getElementById('fab-cockpit-hora');
  if(el) el.textContent = hora + ' · ' + data;
}

// Remover bloco de init redundante

/* ========================================================== */

/* ── Gráfico CEP ─────────────────────────────────────── */
(function() {
  function draw(paramKey) {
    const canvas = document.getElementById('cep-canvas');
    if (!canvas) return;
    const W = canvas.parentElement.offsetWidth || 700;
    const H = 220;
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    const params = {
      peso:   { lse:153, lcs:152.4, xbar:150.5, lci:148.6, lie:148, unit:'g',
                pts:[149.8,150.2,150.6,149.9,150.8,151.1,150.3,150.9,151.4,150.7,
                     150.1,151.2,150.5,151.0,150.4,151.2,152.8,151.2] },
      torque: { lse:15, lcs:14.5, xbar:12.0, lci:10.5, lie:10, unit:'N·cm',
                pts:[12.0,11.8,12.2,12.1,11.9,12.3,12.0,11.7,12.4,9.2,
                     12.1,12.0,11.8,12.3,12.2,12.1,12.0,12.0] },
      vol:    { lse:152, lcs:151.5, xbar:150, lci:148.5, lie:148, unit:'ml',
                pts:[150.1,149.8,150.3,150.0,150.2,149.9,150.4,150.1,149.7,150.3,
                     150.0,150.2,149.8,150.1,150.4,150.0,150.3,150.1] },
      visc:   { lse:8000, lcs:7800, xbar:7200, lci:6600, lie:6400, unit:'cP',
                pts:[7200,7150,7300,7250,7100,7400,7200,7350,7100,7250,
                     7300,7150,7200,7400,7250,7300,7200,7200] },
    };
    const p = params[paramKey] || params.peso;
    const pts = p.pts;
    const pad = { l:52, r:20, t:28, b:8 };
    const gW = W - pad.l - pad.r;
    const gH = H - pad.t - pad.b;

    const allVals = [...pts, p.lse, p.lie];
    const minV = Math.min(...allVals) - (p.xbar * 0.012);
    const maxV = Math.max(...allVals) + (p.xbar * 0.012);
    const sy = v => pad.t + gH - ((v - minV) / (maxV - minV)) * gH;
    const sx = i => pad.l + (i / (pts.length - 1)) * gW;

    // Fundo
    ctx.fillStyle = '#FDFAF1';
    ctx.fillRect(pad.l, pad.t, gW, gH);

    // Zona OK (entre LCI e LCS) — verde pale
    ctx.fillStyle = 'rgba(210,232,215,0.4)';
    ctx.fillRect(pad.l, sy(p.lcs), gW, sy(p.lci) - sy(p.lcs));

    // Grade
    ctx.strokeStyle = 'rgba(214,205,164,0.5)';
    ctx.lineWidth = 0.5;
    for (let i = 1; i < 5; i++) {
      const y = pad.t + (gH/5)*i;
      ctx.beginPath(); ctx.moveTo(pad.l,y); ctx.lineTo(pad.l+gW,y); ctx.stroke();
    }

    // Linhas de limite
    const linhas = [
      {v:p.lse, cor:'#8C1A1A', lw:2,   dash:[],    lbl:'LSE'},
      {v:p.lcs, cor:'#C04040', lw:1.2, dash:[5,3], lbl:'LCS'},
      {v:p.xbar,cor:'#1C5C31', lw:2,   dash:[],    lbl:'X̄'},
      {v:p.lci, cor:'#C04040', lw:1.2, dash:[5,3], lbl:'LCI'},
      {v:p.lie, cor:'#8C1A1A', lw:2,   dash:[],    lbl:'LIE'},
    ];
    linhas.forEach(l => {
      const y = sy(l.v);
      ctx.save();
      ctx.strokeStyle = l.cor; ctx.lineWidth = l.lw;
      ctx.setLineDash(l.dash);
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l+gW, y); ctx.stroke();
      ctx.restore();
      ctx.fillStyle = l.cor;
      ctx.font = 'bold 9px DM Mono, monospace';
      ctx.textAlign = 'right';
      ctx.fillText(l.v + (l.lbl==='X̄'?'':' '+p.unit), pad.l - 4, y + 3.5);
    });

    // Área sombreada sob a curva
    const grad = ctx.createLinearGradient(0, pad.t, 0, pad.t+gH);
    grad.addColorStop(0, 'rgba(28,92,49,0.18)');
    grad.addColorStop(1, 'rgba(28,92,49,0.02)');
    ctx.save();
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(pts[0]));
    pts.forEach((v,i) => { if(i>0) ctx.lineTo(sx(i), sy(v)); });
    ctx.lineTo(sx(pts.length-1), pad.t+gH);
    ctx.lineTo(sx(0), pad.t+gH);
    ctx.closePath(); ctx.fill();
    ctx.restore();

    // Linha do processo
    ctx.save();
    ctx.strokeStyle = '#1C5C31'; ctx.lineWidth = 2.2;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    pts.forEach((v,i) => i===0 ? ctx.moveTo(sx(i),sy(v)) : ctx.lineTo(sx(i),sy(v)));
    ctx.stroke();
    ctx.restore();

    // Pontos individuais
    pts.forEach((v,i) => {
      const x = sx(i), y = sy(v);
      const nc   = v > p.lse || v < p.lie;
      const alrt = !nc && (v > p.lcs || v < p.lci);
      const cor  = nc ? '#8C1A1A' : alrt ? '#9A5A00' : '#1C5C31';
      const r    = nc ? 6 : alrt ? 5 : 4;
      ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2);
      ctx.fillStyle = cor; ctx.fill();
      ctx.strokeStyle = '#FDFAF1'; ctx.lineWidth = 1.5; ctx.stroke();
    });
  }

  window._cepDraw = draw;

  document.addEventListener('DOMContentLoaded', () => {
    const sel = document.getElementById('cep-param');
    if (sel) sel.addEventListener('change', () => draw(sel.value));

    // Integrar CEP e Andon ao wrapper central de nav (v22 — sem cadeia de wrappers)
    const _navFnCep = window.nav;
    window.nav = function(id, subEl, modId) {
      _navFnCep(id, subEl, modId);
      if (id === 'prod-qualidade') {
        requestAnimationFrame(() => {
          const s = document.getElementById('cep-param');
          draw(s ? s.value : 'peso');
        });
      }
      if (id === 'prod-chamados') {
        // Inicializar grid de chamados Andon ao entrar na tela
        requestAnimationFrame(() => {
          if (typeof andFiltrar === 'function') andFiltrar();
        });
      }
    };

    // Inicializar grid Andon na carga inicial caso tela já esteja ativa
    if (typeof andFiltrar === 'function') andFiltrar();
  });
})();
