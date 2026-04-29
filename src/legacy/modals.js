// AUTO-GERADO por scripts/extract.py — NAO EDITE.

export const MODALS = {
  "modal-andon": `  <div class="modal" style="max-width:520px">
    <button class="modal-close" onclick="closeModal('modal-andon')">✕</button>

    <!-- Cabeçalho do modal com cor dinâmica por nível -->
    <div id="andon-header" style="display:flex;align-items:center;gap:14px;margin-bottom:6px">
      <div id="andon-icone" style="width:48px;height:48px;border-radius:10px;background:var(--per-p);border:2px solid var(--per-b);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">🚨</div>
      <div>
        <div class="modal-title" style="margin-bottom:2px">Cadeia de Ajuda — Andon</div>
        <div class="modal-sub" style="margin-bottom:0;padding-bottom:0;border-bottom:none;font-size:11px">ERU 4.1.22 · MES Apriso · Linha B · MF5 · Turno A</div>
      </div>
    </div>
    <div style="height:1px;background:var(--border);margin-bottom:20px"></div>

    <!-- Chips de contexto automático -->
    <div class="chips" style="margin-bottom:18px">
      <div class="chip"><span class="cl">OP Ativa</span><span class="cv2">OP-2026-0414</span></div>
      <div class="chip"><span class="cl">Linha</span><span class="cv2">Linha B · MF5</span></div>
      <div class="chip"><span class="cl">Operador</span><span class="cv2">J. Santos</span></div>
      <div class="chip"><span class="cl">Horário</span><span class="cv2" id="andon-hora">—</span></div>
    </div>

    <!-- Campo 1: Tipo de Ajuda -->
    <div class="form-row" style="margin-bottom:16px">
      <div class="fg">
        <label class="lbl">1. Tipo de Ajuda</label>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px" id="andon-tipo-grid">
          <button class="andon-tipo-btn" data-val="Produção"   onclick="andonSelecionarTipo(this)"
            style="padding:12px 8px;border-radius:8px;border:2px solid var(--border);background:var(--surface);cursor:pointer;font-family:var(--font-b);font-size:11px;font-weight:700;color:var(--text2);transition:all .15s;text-align:center">
            <div style="font-size:22px;margin-bottom:4px">🏭</div>Produção
          </button>
          <button class="andon-tipo-btn" data-val="Manutenção" onclick="andonSelecionarTipo(this)"
            style="padding:12px 8px;border-radius:8px;border:2px solid var(--border);background:var(--surface);cursor:pointer;font-family:var(--font-b);font-size:11px;font-weight:700;color:var(--text2);transition:all .15s;text-align:center">
            <div style="font-size:22px;margin-bottom:4px">🔧</div>Manutenção
          </button>
          <button class="andon-tipo-btn" data-val="Qualidade"  onclick="andonSelecionarTipo(this)"
            style="padding:12px 8px;border-radius:8px;border:2px solid var(--border);background:var(--surface);cursor:pointer;font-family:var(--font-b);font-size:11px;font-weight:700;color:var(--text2);transition:all .15s;text-align:center">
            <div style="font-size:22px;margin-bottom:4px">🔬</div>Qualidade
          </button>
        </div>
        <input type="hidden" id="andon-tipo-val">
      </div>
    </div>

    <!-- Campo 2: Nível da Ajuda -->
    <div class="form-row" style="margin-bottom:16px">
      <div class="fg">
        <label class="lbl">2. Nível da Ajuda</label>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px" id="andon-nivel-grid">
          <button class="andon-nivel-btn" data-val="Emergência" data-cor="per" onclick="andonSelecionarNivel(this)"
            style="padding:12px 8px;border-radius:8px;border:2px solid var(--per-b);background:var(--per-p);cursor:pointer;font-family:var(--font-b);font-size:11px;font-weight:700;color:var(--per);transition:all .15s;text-align:center">
            <div style="font-size:22px;margin-bottom:4px">🔴</div>Emergência
          </button>
          <button class="andon-nivel-btn" data-val="Moderado"   data-cor="alr" onclick="andonSelecionarNivel(this)"
            style="padding:12px 8px;border-radius:8px;border:2px solid var(--border);background:var(--surface);cursor:pointer;font-family:var(--font-b);font-size:11px;font-weight:700;color:var(--text2);transition:all .15s;text-align:center">
            <div style="font-size:22px;margin-bottom:4px">🟡</div>Moderado
          </button>
          <button class="andon-nivel-btn" data-val="Leve"       data-cor="ok"  onclick="andonSelecionarNivel(this)"
            style="padding:12px 8px;border-radius:8px;border:2px solid var(--border);background:var(--surface);cursor:pointer;font-family:var(--font-b);font-size:11px;font-weight:700;color:var(--text2);transition:all .15s;text-align:center">
            <div style="font-size:22px;margin-bottom:4px">🟢</div>Leve
          </button>
        </div>
        <input type="hidden" id="andon-nivel-val">
      </div>
    </div>

    <!-- Campo 3: Motivo -->
    <div class="form-row" style="margin-bottom:16px">
      <div class="fg">
        <label class="lbl">3. Motivo</label>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px" id="andon-motivo-grid">
          <button class="andon-motivo-btn" data-val="Produto"  onclick="andonSelecionarMotivo(this)"
            style="padding:10px 6px;border-radius:8px;border:2px solid var(--border);background:var(--surface);cursor:pointer;font-family:var(--font-b);font-size:10px;font-weight:700;color:var(--text2);transition:all .15s;text-align:center">
            <div style="font-size:20px;margin-bottom:3px">📦</div>Produto
          </button>
          <button class="andon-motivo-btn" data-val="Máquina"  onclick="andonSelecionarMotivo(this)"
            style="padding:10px 6px;border-radius:8px;border:2px solid var(--border);background:var(--surface);cursor:pointer;font-family:var(--font-b);font-size:10px;font-weight:700;color:var(--text2);transition:all .15s;text-align:center">
            <div style="font-size:20px;margin-bottom:3px">⚙️</div>Máquina
          </button>
          <button class="andon-motivo-btn" data-val="Processo" onclick="andonSelecionarMotivo(this)"
            style="padding:10px 6px;border-radius:8px;border:2px solid var(--border);background:var(--surface);cursor:pointer;font-family:var(--font-b);font-size:10px;font-weight:700;color:var(--text2);transition:all .15s;text-align:center">
            <div style="font-size:20px;margin-bottom:3px">📋</div>Processo
          </button>
          <button class="andon-motivo-btn" data-val="MO"       onclick="andonSelecionarMotivo(this)"
            style="padding:10px 6px;border-radius:8px;border:2px solid var(--border);background:var(--surface);cursor:pointer;font-family:var(--font-b);font-size:10px;font-weight:700;color:var(--text2);transition:all .15s;text-align:center">
            <div style="font-size:20px;margin-bottom:3px">👷</div>MO
          </button>
        </div>
        <input type="hidden" id="andon-motivo-val">
      </div>
    </div>

    <!-- Campo 4: Observação opcional -->
    <div class="form-row" style="margin-bottom:20px">
      <div class="fg">
        <label class="lbl">Observação (opcional)</label>
        <textarea class="txta" id="andon-obs" placeholder="Descreva o problema brevemente..." style="min-height:60px;font-size:12px"></textarea>
      </div>
    </div>

    <!-- Preview da notificação -->
    <div id="andon-preview" style="display:none;background:var(--per-p);border:1.5px solid var(--per-b);border-radius:8px;padding:12px 15px;margin-bottom:16px">
      <div style="font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:var(--per);margin-bottom:8px">📢 Notificação que será enviada</div>
      <div style="font-family:var(--font-m);font-size:11px;color:var(--text);line-height:2" id="andon-preview-txt"></div>
    </div>

    <!-- Botões -->
    <div style="display:flex;gap:10px">
      <button class="btn btn-md btn-full" id="andon-btn-enviar"
        style="flex:2;background:var(--per);color:#fff;font-size:12px"
        onclick="andonEnviar()">
        🚨 Acionar Cadeia de Ajuda
      </button>
      <button class="btn btn-md btn-ghost" style="flex:1" onclick="closeModal('modal-andon')">Cancelar</button>
    </div>
  </div>`,
  "modal-chamado-detalhe": `      <div class="modal" style="max-width:560px">
        <button class="modal-close" onclick="closeModal('modal-chamado-detalhe')">✕</button>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
          <div id="mcd-icone" style="width:44px;height:44px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">🚨</div>
          <div>
            <div class="modal-title" style="margin-bottom:2px" id="mcd-titulo">AND-2026-0001</div>
            <div style="font-size:11px;color:var(--text2)" id="mcd-subtitulo">Produção · Emergência · Máquina</div>
          </div>
          <span class="bdg" id="mcd-status-bdg" style="margin-left:auto;font-size:10px"></span>
        </div>
        <div style="height:1px;background:var(--border);margin-bottom:16px"></div>

        <!-- Info do chamado -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px" id="mcd-info-grid"></div>

        <!-- Observação original -->
        <div id="mcd-obs-wrap" style="background:var(--bg2);border-radius:7px;padding:11px 14px;margin-bottom:16px;font-size:12px;color:var(--text2);display:none">
          <div style="font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:var(--text3);margin-bottom:5px">Observação do Operador</div>
          <div id="mcd-obs-txt"></div>
        </div>

        <!-- Histórico de ações -->
        <div style="margin-bottom:16px">
          <div style="font-size:9px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:var(--text3);margin-bottom:8px">Histórico de Ações</div>
          <div id="mcd-historico" style="display:flex;flex-direction:column;gap:6px"></div>
        </div>

        <!-- Seção de atualização (só aparece se não fechado/cancelado) -->
        <div id="mcd-edicao-wrap">
          <div style="height:1px;background:var(--border);margin-bottom:16px"></div>
          <div class="form-row" style="margin-bottom:12px">
            <div class="fg">
              <label class="lbl">Alterar Status</label>
              <select class="sel" id="mcd-novo-status" style="font-size:12px" onchange="mcdAtualizarBotao()">
                <option value="">— Manter status atual —</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Fechado">✅ Fechado — Problema resolvido</option>
                <option value="Cancelado">❌ Cancelado</option>
              </select>
            </div>
          </div>
          <div class="form-row" style="margin-bottom:16px">
            <div class="fg">
              <label class="lbl">Ação Realizada</label>
              <textarea class="txta" id="mcd-acao" placeholder="Descreva a ação tomada para resolver o chamado..." style="min-height:72px;font-size:12px"></textarea>
            </div>
          </div>
          <div style="display:flex;gap:10px">
            <button class="btn btn-md btn-v" id="mcd-btn-salvar" style="flex:2" onclick="mcdSalvar()">Salvar Atualização</button>
            <button class="btn btn-md btn-ghost" style="flex:1" onclick="closeModal('modal-chamado-detalhe')">Fechar</button>
          </div>
        </div>
        <div id="mcd-readonly-msg" style="display:none;text-align:center;padding:10px;font-size:12px;color:var(--text3)">
          Este chamado está encerrado e não pode ser editado.
        </div>
      </div>
    `,
  "modal-ck-processo": `  <div class="modal" style="max-width:560px">
    <button class="modal-close" onclick="closeModal('modal-ck-processo')">✕</button>
    <div class="modal-title">Inspeção Visual de Rótulo</div>
    <div class="modal-sub">Checklist em processo — Frequência: 30 min · Execução: 09:09 · <strong style="color:var(--per)">9 min em atraso</strong></div>
    <div class="abox err" style="margin-bottom:16px"><span class="ai">🔴</span><div>Este checklist está <strong>vencido</strong>. A contagem de produção está bloqueada até a execução e registro.</div></div>
    <div style="margin-bottom:14px">
      <div class="ck-item" onclick="toggleCk(this)"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Rótulo posicionado centralizado na embalagem</div><div class="ck-desc">Verificar alinhamento horizontal e vertical. Tolerância: ±2mm.</div></div><span class="ck-tag crit">Crítico</span></div>
      <div class="ck-item" onclick="toggleCk(this)"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Código de barras legível e sem distorção</div><div class="ck-desc">Testar leitura com scanner. 3 leituras bem-sucedidas consecutivas.</div></div><span class="ck-tag crit">Crítico</span></div>
      <div class="ck-item" onclick="toggleCk(this)"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Data de validade impressa corretamente</div><div class="ck-desc">Verificar data e lote conforme OP. Data: MM/AAAA.</div></div><span class="ck-tag crit">Crítico</span></div>
      <div class="ck-item" onclick="toggleCk(this)"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Rótulo aderido sem bolhas ou dobras</div><div class="ck-desc">Inspecionar visualmente 5 unidades consecutivas.</div></div><span class="ck-tag obrig">Obrigatório</span></div>
    </div>
    <div class="form-row"><div class="fg"><label class="lbl">Observações (se não conforme)</label><textarea class="txta" style="min-height:60px" placeholder="Descreva a não conformidade se algum item estiver reprovado..."></textarea></div></div>
    <div style="display:flex;gap:10px;margin-top:16px">
      <button class="btn btn-md btn-v" onclick="closeModal('modal-ck-processo');alert('✅ Inspeção Visual registrada!\\nContagem desbloqueada.\\nPróxima inspeção: 09:39')">✔ Confirmar Inspeção</button>
      <button class="btn btn-md btn-p" onclick="closeModal('modal-ck-processo')">Reprovar e Parar Linha</button>
    </div>
  </div>`,
  "modal-diverg": `  <div class="modal" style="max-width:520px">
    <button class="modal-close" onclick="closeModal('modal-diverg')">✕</button>
    <div class="modal-title">Registrar Divergência de Pesagem</div>
    <div class="modal-sub">Fenoxietanol · MP #4 · Pesado: 3,028 kg · Alvo: 3,000 kg · Desvio: +0,028 kg (+0,93%)</div>
    <div class="abox warn" style="margin-bottom:16px"><span class="ai">⚠</span><div>Desvio acima do limite de ±0,5%. Justificativa obrigatória para liberar esta pesagem.</div></div>
    <div class="form-row"><div class="fg"><label class="lbl">Causa do Desvio</label><select class="sel"><option>Excesso na adição — dificuldade de controle</option><option>Oscilação da balança durante pesagem</option><option>Material aderido no recipiente</option><option>Outro</option></select></div></div>
    <div class="form-row" style="margin-top:12px"><div class="fg"><label class="lbl">Ação Tomada</label><textarea class="txta" style="min-height:70px" placeholder="Descreva a ação corretiva...">Excesso de 0,028 kg dentro da tolerância técnica aceitável para este material. Validado com o CQ que não há impacto na fórmula. Aprovado para prosseguir.</textarea></div></div>
    <div class="form-row" style="margin-top:12px"><div class="fg"><label class="lbl">Aprovação do Líder / CQ</label><input class="inp" value="M. Silva — CQ Aprovado 07:05"></div></div>
    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="btn btn-md btn-v" onclick="closeModal('modal-diverg');alert('✅ Divergência justificada e aprovada!\\nPesagem liberada para prosseguir.')">Confirmar e Liberar</button>
      <button class="btn btn-md btn-ghost" onclick="closeModal('modal-diverg')">Cancelar</button>
    </div>
  </div>`,
  "modal-fab-checkin-op": `  <div class="modal" style="max-width:620px;max-height:90vh;overflow-y:auto">
    <button class="modal-close" onclick="closeModal('modal-fab-checkin-op')">✕</button>
    <div class="modal-title">👷 Check-in de Operadores — Fabricação</div>
    <div class="modal-sub">OP-2026-0416 · Reator R-01 · MF5 · Loção Hidratante Rosa 200ml</div>

    <!-- Passo 1: Entrada por matrícula -->
    <div class="card ci" style="margin-bottom:14px;padding:14px">
      <div style="font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--ouro);margin-bottom:8px">Passo 1 — Identificação do Operador</div>
      <div style="display:flex;gap:10px;align-items:flex-end">
        <div style="flex:1"><label class="lbl">Matrícula / Crachá</label><input class="inp" id="fab-ci-mat" placeholder="Digitar ou aproximar crachá..." style="font-size:14px;font-family:var(--font-m)" onkeydown="if(event.key==='Enter')fabCiCheckin()"></div>
        <button class="btn btn-md btn-v" onclick="fabCiCheckin()">Check-in</button>
        <button class="btn btn-md btn-ghost" onclick="fabCiCheckinAuto()">⚡ Auto</button>
      </div>
      <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px" id="fab-ci-lista">
        <div style="font-size:11px;color:var(--text3);font-style:italic">Nenhum operador com check-in ainda.</div>
      </div>
    </div>

    <!-- Passo 2: Alocação de postos -->
    <div class="card" style="margin-bottom:14px;padding:14px">
      <div style="font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--ouro);margin-bottom:10px">Passo 2 — Alocação nos Postos do Reator R-01</div>
      <table class="tbl" style="font-size:12px">
        <thead><tr><th>#</th><th>Posto</th><th>Operador Alocado</th><th>Alocar</th></tr></thead>
        <tbody>
          <tr id="fab-tr-posto-1">
            <td class="mono" style="color:var(--verde)">①</td>
            <td style="font-weight:700">Operador Processo<br><span style="font-size:10px;color:var(--text3);font-weight:400">Controle de adição de MPs e parâmetros</span></td>
            <td id="fab-td-posto-1"><span style="color:var(--text3);font-style:italic;font-size:11px">Não alocado</span></td>
            <td><select class="sel" style="font-size:11px;padding:5px 8px" id="fab-sel-posto-1" onchange="fabAlocarPosto(1,this)">
              <option value="">— Selecionar —</option>
              <option value="1">José Santos</option><option value="2">Maria Oliveira</option>
              <option value="3">Carlos Pereira</option><option value="4">Ana Lima</option>
            </select></td>
          </tr>
          <tr id="fab-tr-posto-2">
            <td class="mono" style="color:var(--verde)">②</td>
            <td style="font-weight:700">Operador Auxiliar<br><span style="font-size:10px;color:var(--text3);font-weight:400">Apoio nas adições e amostragem</span></td>
            <td id="fab-td-posto-2"><span style="color:var(--text3);font-style:italic;font-size:11px">Não alocado</span></td>
            <td><select class="sel" style="font-size:11px;padding:5px 8px" id="fab-sel-posto-2" onchange="fabAlocarPosto(2,this)">
              <option value="">— Selecionar —</option>
              <option value="1">José Santos</option><option value="2">Maria Oliveira</option>
              <option value="3">Carlos Pereira</option><option value="4">Ana Lima</option>
            </select></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Passo 3: Validação Enabley -->
    <div class="card ci" style="padding:14px;margin-bottom:14px" id="fab-enabley-card">
      <div style="font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--ouro);margin-bottom:6px">Passo 3 — Validação Enabley · Matriz de Habilidade</div>
      <div class="abox info" style="margin-bottom:12px"><span class="ai">ℹ</span><div>Consulta a <strong>Matriz de Habilidade Enabley</strong> verificando habilitação ativa para o Reator R-01 e o produto Loção Hidratante Rosa 200ml.</div></div>
      <div style="background:var(--bg2);border:1px solid var(--border);border-radius:6px;padding:10px 14px;margin-bottom:12px">
        <div style="font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:var(--text3);margin-bottom:5px">API Enabley</div>
        <div style="font-family:var(--font-m);font-size:10px;color:var(--text2);line-height:2">
          <span style="color:var(--ok);font-weight:700">POST</span> <span style="color:var(--verde)">enabley.api/v2/skills/validate</span><br>
          Recurso: <span>REATOR-R01-MF5</span> · Turno: <span>A · 31/03/2026</span>
        </div>
      </div>
      <button class="btn btn-lg btn-v btn-full" id="fab-btn-enabley" onclick="fabValidarEnabley()" style="margin-bottom:8px">🔍 Validar Habilitação Enabley</button>
      <div style="font-size:10px;color:var(--text3);text-align:center" id="fab-enabley-hint">Aloque os 2 postos antes de validar</div>
      <div id="fab-enabley-resultado" style="display:none;margin-top:12px;display:flex;flex-direction:column;gap:8px"></div>
    </div>

    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn btn-lg btn-v" id="fab-ci-btn-liberar" style="flex:2;display:none" onclick="fabLiberarOperadores()">✅ Confirmar Alocação e Liberar</button>
      <button class="btn btn-md btn-ghost" onclick="closeModal('modal-fab-checkin-op')" style="flex:1">Fechar</button>
    </div>
  </div>`,
  "modal-fab-cockpit-launch": `  <div class="modal" style="max-width:520px;text-align:center">
    <div style="font-size:56px;margin-bottom:10px">🚀</div>
    <div class="modal-title" style="font-size:22px;margin-bottom:6px">Fabricação Iniciada!</div>
    <div style="font-family:var(--font-m);font-size:11px;color:var(--text3);margin-bottom:6px" id="fab-cockpit-hora">--:-- · --/--/----</div>
    <div class="modal-sub" style="margin-bottom:20px">OP-2026-0416 · Loção Hidratante Rosa 200ml · Reator R-01 · MF5</div>
    <div style="background:var(--ok-p);border:1.5px solid var(--ok-b);border-radius:10px;padding:16px;margin-bottom:20px;text-align:left">
      <div style="font-size:9px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:var(--verde);margin-bottom:10px">✅ Pré-Validações Concluídas</div>
      <div style="display:flex;flex-direction:column;gap:6px;font-size:11px;color:var(--text2)">
        <div>✅ Granel G2026-091 aprovado pelo LIMS</div>
        <div>✅ Embalagens e materiais conferidos</div>
        <div>✅ Setup do Reator R-01 realizado</div>
        <div>✅ Operadores habilitados (Enabley validado)</div>
        <div>✅ Aptidão confirmada para todos os postos</div>
      </div>
    </div>
    <div style="background:var(--verde-esc);border-radius:10px;padding:16px;margin-bottom:20px;color:#FDFAF1;text-align:left">
      <div style="font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:var(--ouro-claro);margin-bottom:8px">Cockpit de Execução — Reator R-01</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:11px">
        <div><span style="color:rgba(253,250,241,.5)">Receita:</span> R-2024-089</div>
        <div><span style="color:rgba(253,250,241,.5)">Fases:</span> 4 fases</div>
        <div><span style="color:rgba(253,250,241,.5)">Volume:</span> 600 kg</div>
        <div><span style="color:rgba(253,250,241,.5)">Operadores:</span> 2 alocados</div>
      </div>
    </div>
    <div style="display:flex;gap:10px">
      <button class="btn btn-lg btn-v btn-full" onclick="closeModal('modal-fab-cockpit-launch');nav('fab-inbatch',null,null)"
        style="font-size:13px;padding:14px 20px;background:var(--verde-esc)">
        ▶ Abrir Cockpit de Execução
      </button>
    </div>
    <div style="margin-top:12px">
      <button class="btn btn-sm btn-ghost btn-full" onclick="closeModal('modal-fab-cockpit-launch')">Fechar</button>
    </div>
  </div>`,
  "modal-fab-lims": `  <div class="modal" style="max-width:580px">
    <button class="modal-close" onclick="closeModal('modal-fab-lims')">✕</button>
    <div class="modal-title">🔬 Aprovação do Granel — LIMS</div>
    <div class="modal-sub">OP-2026-0416 · Lote G2026-091 · Loção Hidratante Rosa 200ml · Reator R-01</div>

    <!-- Status atual LIMS -->
    <div style="background:var(--alr-p);border:1.5px solid var(--alr-b);border-radius:8px;padding:14px;margin-bottom:16px" id="lims-status-block">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <span style="font-size:22px">🟡</span>
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--alr)">Aguardando Aprovação do CQ</div>
          <div style="font-size:10px;color:var(--text3);font-family:var(--font-m)">Enviado para LIMS: 31/03/2026 06:15 · Analista: Dra. P. Alves</div>
        </div>
      </div>
    </div>

    <!-- Resultados analíticos -->
    <div class="card" style="margin-bottom:14px;padding:14px">
      <div class="card-title" style="margin-bottom:10px">Resultados Analíticos — Granel G2026-091</div>
      <table class="tbl" style="font-size:12px">
        <thead><tr><th>Parâmetro</th><th>Especificação</th><th>Resultado</th><th>Status</th></tr></thead>
        <tbody>
          <tr>
            <td>pH (25°C)</td><td class="mono">6,50 – 7,00</td>
            <td class="mono" style="color:var(--verde);font-weight:700">6,78</td>
            <td><span class="bdg bdg-ok">✓ Conforme</span></td>
          </tr>
          <tr>
            <td>Viscosidade (cP)</td><td class="mono">6.400 – 8.000</td>
            <td class="mono" style="color:var(--verde);font-weight:700">7.240</td>
            <td><span class="bdg bdg-ok">✓ Conforme</span></td>
          </tr>
          <tr>
            <td>Densidade (g/mL)</td><td class="mono">0,980 – 1,020</td>
            <td class="mono" style="color:var(--verde);font-weight:700">0,996</td>
            <td><span class="bdg bdg-ok">✓ Conforme</span></td>
          </tr>
          <tr>
            <td>Aspecto</td><td>Creme homogêneo, branco</td>
            <td style="font-size:11px">Creme homogêneo, branco</td>
            <td><span class="bdg bdg-ok">✓ Conforme</span></td>
          </tr>
          <tr>
            <td>Odor</td><td>Característico Rosa</td>
            <td style="font-size:11px">Característico Rosa</td>
            <td><span class="bdg bdg-ok">✓ Conforme</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="form-row">
      <div class="fg">
        <label class="lbl">Analista Responsável (CQ)</label>
        <input class="inp" value="Dra. Patricia Alves · CRF/SP 12345" style="font-family:var(--font-m);font-size:12px">
      </div>
      <div class="fg">
        <label class="lbl">Data / Hora da Aprovação</label>
        <input class="inp" id="lims-data-aprovacao" style="font-family:var(--font-m);font-size:12px">
      </div>
    </div>
    <div class="form-row" style="margin-top:10px">
      <div class="fg">
        <label class="lbl">Observações do CQ</label>
        <textarea class="txta" style="min-height:60px" placeholder="Observações adicionais ou restrições de uso..."></textarea>
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-top:16px">
      <button class="btn btn-lg btn-v" onclick="fabAprovarLims()" style="flex:2">✅ Aprovar Granel para Fabricação</button>
      <button class="btn btn-md btn-p" onclick="closeModal('modal-fab-lims')" style="flex:1">⛔ Reprovar / Devolver</button>
    </div>
  </div>`,
  "modal-fab-setup": `  <div class="modal" style="max-width:640px;max-height:88vh;overflow-y:auto">
    <button class="modal-close" onclick="closeModal('modal-fab-setup')">✕</button>
    <div class="modal-title">⚙️ Setup da Linha — Checklist</div>
    <div class="modal-sub">OP-2026-0416 · Reator R-01 · MF5 · Loção Hidratante Rosa 200ml</div>

    <!-- Barra de progresso do checklist -->
    <div class="prog-wrap" style="margin:14px 0">
      <div class="prog-pct" id="setup-pct">0%</div>
      <div style="flex:1"><div class="prog-out"><div class="prog-in" id="setup-bar" style="width:0%"></div></div><div class="prog-txt" id="setup-txt">0 de 10 itens verificados</div></div>
    </div>

    <!-- Grupo 1: Parâmetros de Processo -->
    <div style="font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--ouro);margin:14px 0 8px">Parâmetros de Processo</div>
    <div class="ck-item" id="setup-ck-1" onclick="toggleSetupCk(this,'setup-ck-1')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Temperatura inicial do reator ajustada</div><div class="ck-desc">Setar T = 25°C para início. Aquecimento gradual conforme receita R-2024-089.</div></div><span class="ck-tag crit">Crítico</span></div>
    <div class="ck-item" id="setup-ck-2" onclick="toggleSetupCk(this,'setup-ck-2')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Velocidade de agitação calibrada</div><div class="ck-desc">Fase 1: 30 rpm · Fase 2: 45 rpm · Verificar painel de controle do agitador.</div></div><span class="ck-tag crit">Crítico</span></div>
    <div class="ck-item" id="setup-ck-3" onclick="toggleSetupCk(this,'setup-ck-3')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Sensor de pH calibrado e zerado</div><div class="ck-desc">Calibração com tampão pH 4,0 e 7,0. Certificado válido por 8h. Última cal.: 05:30.</div></div><span class="ck-tag crit">Crítico</span></div>
    <div class="ck-item" id="setup-ck-4" onclick="toggleSetupCk(this,'setup-ck-4')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Termômetro / sonda de temperatura verificada</div><div class="ck-desc">Comparar com termômetro padrão. Desvio máximo: ±0,5°C.</div></div><span class="ck-tag obrig">Obrigatório</span></div>

    <!-- Grupo 2: Limpeza e Sanitização -->
    <div style="font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--ouro);margin:14px 0 8px">Limpeza e Sanitização</div>
    <div class="ck-item" id="setup-ck-5" onclick="toggleSetupCk(this,'setup-ck-5')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Registro CIP do reator válido</div><div class="ck-desc">Verificar registro de limpeza. Validade: 72h. Confirmar número do certificado CIP.</div></div><span class="ck-tag crit">Crítico</span></div>
    <div class="ck-item" id="setup-ck-6" onclick="toggleSetupCk(this,'setup-ck-6')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Ausência de resíduo do produto anterior</div><div class="ck-desc">Inspeção visual interna do reator e tubulações. Zero resíduo admitido.</div></div><span class="ck-tag crit">Crítico</span></div>

    <!-- Grupo 3: Equipamentos Auxiliares -->
    <div style="font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--ouro);margin:14px 0 8px">Equipamentos Auxiliares</div>
    <div class="ck-item" id="setup-ck-7" onclick="toggleSetupCk(this,'setup-ck-7')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Bomba de transferência testada</div><div class="ck-desc">Teste em vazio por 30s. Verificar vedações e mangueiras de conexão.</div></div><span class="ck-tag obrig">Obrigatório</span></div>
    <div class="ck-item" id="setup-ck-8" onclick="toggleSetupCk(this,'setup-ck-8')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Sistema de vácuo / pressão verificado</div><div class="ck-desc">Pressão de trabalho: 0,5 bar. Verificar manômetro e válvulas de segurança.</div></div><span class="ck-tag obrig">Obrigatório</span></div>

    <!-- Grupo 4: Segurança -->
    <div style="font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:var(--ouro);margin:14px 0 8px">Segurança e EPIs</div>
    <div class="ck-item" id="setup-ck-9" onclick="toggleSetupCk(this,'setup-ck-9')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">EPIs do operador conferidos</div><div class="ck-desc">Óculos, luvas, avental, protetor auricular. Todos em boas condições.</div></div><span class="ck-tag obrig">Obrigatório</span></div>
    <div class="ck-item" id="setup-ck-10" onclick="toggleSetupCk(this,'setup-ck-10')"><div class="ck-box">✓</div><div style="flex:1"><div class="ck-nome">Área de trabalho organizada e sinalizada</div><div class="ck-desc">5S aplicado. Sinalização de produto em processo afixada. Saídas de emergência livres.</div></div><span class="ck-tag rec">Recomendado</span></div>

    <div class="form-row" style="margin-top:14px">
      <div class="fg"><label class="lbl">Responsável pelo Setup</label><input class="inp" value="J. Santos · Mat. 00412" style="font-family:var(--font-m);font-size:12px"></div>
      <div class="fg"><label class="lbl">Hora do Setup</label><input class="inp" id="setup-hora" style="font-family:var(--font-m);font-size:12px"></div>
    </div>
    <div class="form-row">
      <div class="fg"><label class="lbl">Observações</label><textarea class="txta" style="min-height:55px" placeholder="Registre qualquer desvio ou observação relevante..."></textarea></div>
    </div>

    <div style="display:flex;gap:10px;margin-top:16px">
      <button class="btn btn-lg btn-v" id="setup-btn-confirmar" onclick="fabConfirmarSetup()" style="flex:2" disabled>✔ Confirmar Setup e Liberar</button>
      <button class="btn btn-md btn-ghost" onclick="closeModal('modal-fab-setup')" style="flex:1">Cancelar</button>
    </div>
    <div style="font-size:10px;color:var(--text3);text-align:center;margin-top:10px" id="setup-hint">Marque todos os itens obrigatórios para liberar.</div>
  </div>`,
  "modal-just": `  <div class="modal">
    <button class="modal-close" onclick="closeModal('modal-just')">✕</button>
    <div class="modal-title">Justificativa de Parada</div>
    <div class="modal-sub">L4 · TAM-04 · Parada iniciada em 07:14 · Duração atual: 32 min</div>
    <div class="form-row"><div class="fg"><label class="lbl">Categoria da Parada</label>
      <select class="sel"><option>Manutenção Corretiva</option><option>Manutenção Preventiva</option><option>Setup / Troca de produto</option><option>Qualidade</option><option>Falta de material</option><option>Outros</option></select></div></div>
    <div class="form-row" style="margin-top:12px"><div class="fg"><label class="lbl">Descrição da Causa Raiz</label><textarea class="txta" placeholder="Descreva o que causou a parada e as ações tomadas..."></textarea></div></div>
    <div class="form-row" style="margin-top:12px"><div class="fg"><label class="lbl">Previsão de Retorno</label><input class="inp" type="time" value="08:00"></div><div class="fg"><label class="lbl">Responsável pelo Atendimento</label><input class="inp" value="Equipe Manutenção"></div></div>
    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="btn btn-md btn-v" onclick="closeModal('modal-just');alert('✅ Justificativa registrada!')">Salvar Justificativa</button>
      <button class="btn btn-md btn-o" onclick="closeModal('modal-just');openModal('modal-tractian')">🔧 Abrir Tractian</button>
      <button class="btn btn-md btn-ghost" onclick="closeModal('modal-just')">Cancelar</button>
    </div>
  </div>`,
  "modal-microparada": `  <div class="modal" style="max-width:480px">
    <button class="modal-close" onclick="closeModal('modal-microparada')">✕</button>
    <div class="modal-title">⚡ Registrar Microparada</div>
    <div class="modal-sub">Paradas rápidas ≤ 10 minutos que não exigem abertura de OS. Liberadas pelo próprio operador após resolução.</div>
    <div class="abox info" style="margin-bottom:16px"><span class="ai">ℹ</span><div>Microparadas são registradas mas <strong>não bloqueiam a contagem</strong> e <strong>não geram OS no Tractian</strong>. Duração &gt; 10 min converte automaticamente em Parada completa.</div></div>
    <div class="form-row"><div class="fg"><label class="lbl">Tipo de Microparada</label>
      <select class="sel">
        <option>Limpeza rápida de bico dosador</option>
        <option>Remoção de entupimento na esteira</option>
        <option>Ajuste rápido de posição de rótulo</option>
        <option>Reposição de material (frascos/caixas)</option>
        <option>Pausa operacional (sanitário/água)</option>
        <option>Outra — sem acionamento de manutenção</option>
      </select></div></div>
    <div class="form-row" style="margin-top:12px"><div class="fg"><label class="lbl">Duração estimada</label>
      <select class="sel"><option>1–2 min</option><option>3–5 min</option><option>5–10 min</option></select></div>
    <div class="fg"><label class="lbl">Equipamento</label>
      <select class="sel"><option>Envasadora</option><option>Tamponadora</option><option>Rotuladora</option><option>Embaladora</option><option>Esteira</option></select></div></div>
    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="btn btn-md btn-v" onclick="closeModal('modal-microparada');alert('⚡ Microparada registrada!\\nContagem pausada automaticamente.\\nTimer iniciado.')">▶ Iniciar Microparada</button>
      <button class="btn btn-md btn-ghost" onclick="closeModal('modal-microparada')">Cancelar</button>
      <button class="btn btn-md btn-p" onclick="closeModal('modal-microparada');nav('prod-paradas',null,null)">→ Parada Completa</button>
    </div>
  </div>`,
  "modal-reentiqueta": `  <div class="modal" style="max-width:520px">
    <button class="modal-close" onclick="closeModal('modal-reentiqueta')">✕</button>
    <div class="modal-title">Reentiquetagem de MP</div>
    <div class="modal-sub">Fragância Rosa · FRA-2026-04 · Saldo restante: 0,498 kg</div>
    <div class="form-row"><div class="fg"><label class="lbl">Etiqueta original a cancelar</label><input class="inp" value="ETQ-2026-0421" readonly style="background:var(--per-p);font-family:var(--font-m);color:var(--per)"></div></div>
    <div class="form-row" style="margin-top:12px"><div class="fg"><label class="lbl">Peso real na balança (confirmar)</label>
      <div class="qty-w"><button class="qty-b" onclick="aqd('ret-peso',-0.01)">−</button><input class="qty-i" id="ret-peso" type="number" value="0.498" step="0.001" style="font-size:22px"><span class="qty-u">kg</span><button class="qty-b" onclick="aqd('ret-peso',0.01)">+</button></div></div></div>
    <div class="form-row" style="margin-top:12px">
      <div class="fg"><label class="lbl">Lote original (mantido)</label><input class="inp" value="FRA-2026-04" readonly style="font-family:var(--font-m)"></div>
      <div class="fg"><label class="lbl">Validade original (mantida)</label><input class="inp" value="12/2027" readonly style="font-family:var(--font-m)"></div>
    </div>
    <div class="form-row" style="margin-top:12px"><div class="fg"><label class="lbl">Motivo da sobra</label>
      <select class="sel"><option>Quantidade da OP inferior ao mínimo de abertura</option><option>Ajuste de fórmula durante o processo</option><option>Excesso na abertura da embalagem original</option><option>Outro</option></select></div></div>
    <div style="background:var(--verde-dim);border:1px solid var(--ok-b);border-radius:7px;padding:12px;margin-top:14px">
      <div style="font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:var(--verde);margin-bottom:6px">Nova Etiqueta Gerada</div>
      <div style="font-family:var(--font-m);font-size:11px;color:var(--text2);line-height:1.8">ID: <span style="color:var(--verde)">ETQ-2026-0498</span><br>Material: Fragância Rosa · Lote: FRA-2026-04<br>Saldo: 0,498 kg · Ref. original: ETQ-2026-0421 (cancelada)</div>
    </div>
    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="btn btn-md btn-v" onclick="closeModal('modal-reentiqueta');alert('✅ Reentiquetagem concluída!\\n\\nETQ-2026-0421 cancelada.\\nETQ-2026-0498 gerada e impressa.\\nMovimento de retorno registrado no JDE.')">🏷️ Gerar Nova Etiqueta</button>
      <button class="btn btn-md btn-ghost" onclick="closeModal('modal-reentiqueta')">Cancelar</button>
    </div>
  </div>`,
  "modal-requisitar": `  <div class="modal" style="max-width:560px">
    <button class="modal-close" onclick="closeModal('modal-requisitar')">✕</button>
    <div class="modal-title">📦 Requisitar Material ao JDE</div>
    <div class="modal-sub">Gera uma solicitação de material diretamente no ERP (JDEdwards) vinculada à OP ativa. O almoxarifado receberá a notificação para separação e envio à linha.</div>

    <div class="form-row">
      <div class="fg">
        <label class="lbl">Ordem de Produção</label>
        <input class="inp" value="OP-2026-0414 · Creme Hidratante 150g" readonly style="font-family:var(--font-m);font-size:12px;background:var(--surface2)">
      </div>
    </div>

    <div class="form-row">
      <div class="fg">
        <label class="lbl">Material</label>
        <input class="inp" id="req-material" value="" placeholder="Ex: Fragância Rosa Phebo (MP-20156)" style="font-size:12px">
      </div>
    </div>

    <div class="form-row">
      <div class="fg" style="flex:2">
        <label class="lbl">Quantidade Solicitada</label>
        <div class="qty-w">
          <button class="qty-b" onclick="aq('req-qtd',-1,0)">−</button>
          <input class="qty-i" id="req-qtd" type="number" value="1" min="0.001" step="0.1" style="font-size:22px">
          <span class="qty-u" id="req-un">un</span>
          <button class="qty-b" onclick="aq('req-qtd',1,0)">+</button>
        </div>
      </div>
      <div class="fg">
        <label class="lbl">Unidade</label>
        <select class="sel" onchange="document.getElementById('req-un').textContent=this.value" style="font-size:12px">
          <option value="kg">kg</option>
          <option value="un">un</option>
          <option value="L">L</option>
          <option value="g">g</option>
          <option value="rolos">rolos</option>
        </select>
      </div>
      <div class="fg">
        <label class="lbl">Prioridade</label>
        <select class="sel" id="req-prio" style="font-size:12px">
          <option value="normal">Normal</option>
          <option value="urgente" selected>Urgente</option>
          <option value="critica">Crítica — Parar linha</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="fg">
        <label class="lbl">Destino — Local de Entrega</label>
        <select class="sel" style="font-size:12px">
          <option>Linha L3 · MF5 · Sala de Fabricação</option>
          <option>Almoxarifado Central MF5</option>
          <option>Sala de Pesagem MF5</option>
          <option>Câmara Fria MF5</option>
        </select>
      </div>
    </div>

    <div class="form-row">
      <div class="fg">
        <label class="lbl">Justificativa</label>
        <textarea class="txta" id="req-just" placeholder="Descreva o motivo da requisição (ex: saldo insuficiente detectado durante produção, material fora do padrão, consumo acima do previsto...)"></textarea>
      </div>
    </div>

    <!-- Preview da solicitação -->
    <div style="background:var(--verde-dim);border:1px solid var(--ok-b);border-radius:7px;padding:13px 15px;margin-bottom:16px">
      <div style="font-size:9px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:var(--verde);margin-bottom:8px">Prévia da Solicitação JDE</div>
      <div style="font-family:var(--font-m);font-size:11px;color:var(--text2);line-height:2">
        <span style="color:var(--text3)">Tipo mov.:</span> <span style="color:var(--verde)">Requisição de Material (Mov. 31)</span><br>
        <span style="color:var(--text3)">Conta de custo:</span> <span style="color:var(--verde)">MF5-PROD-2026</span><br>
        <span style="color:var(--text3)">Solicitante:</span> <span style="color:var(--verde)">J. Santos · Turno A</span><br>
        <span style="color:var(--text3)">Data/Hora:</span> <span style="color:var(--verde)" id="req-datetime">—</span>
      </div>
    </div>

    <div style="display:flex;gap:10px">
      <button class="btn btn-md btn-v" style="flex:1" onclick="
        document.getElementById('req-datetime').textContent = new Date().toLocaleString('pt-BR');
        const mat = document.getElementById('req-material').value || 'Material selecionado';
        const qtd = document.getElementById('req-qtd').value;
        const un  = document.getElementById('req-un').textContent;
        const prio = document.getElementById('req-prio').options[document.getElementById('req-prio').selectedIndex].text;
        closeModal('modal-requisitar');
        alert('✅ Requisição enviada ao JDE com sucesso!\\n\\n📦 Material: ' + mat + '\\n📊 Quantidade: ' + qtd + ' ' + un + '\\n🚨 Prioridade: ' + prio + '\\n\\n🔗 Nº Solicitação JDE: REQ-2026-' + Math.floor(1000+Math.random()*9000) + '\\n👷 Almoxarifado MF5 notificado.\\n⏱ Prazo estimado de entrega: 25 min.');
      ">🚀 Enviar Requisição ao JDE</button>
      <button class="btn btn-md btn-ghost" onclick="closeModal('modal-requisitar')">Cancelar</button>
    </div>
  </div>`,
  "modal-sin-detalhe": `        <div class="modal" style="max-width:480px">
          <button class="modal-close" onclick="closeModal('modal-sin-detalhe')">✕</button>
          <div class="modal-title" id="sin-modal-title">Detalhe da Máquina</div>
          <div class="modal-sub" id="sin-modal-sub">—</div>
          <div id="sin-modal-body"></div>
          <div style="display:flex;gap:8px;margin-top:18px">
            <button class="btn btn-sm btn-ghost" onclick="closeModal('modal-sin-detalhe')">Fechar</button>
            <button class="btn btn-sm btn-v" onclick="nav('prod-cockpit',null,null);closeModal('modal-sin-detalhe')">→ Ver Cockpit</button>
            <button class="btn btn-sm btn-p" onclick="nav('prod-paradas',null,null);closeModal('modal-sin-detalhe')">🛑 Registrar Parada</button>
          </div>
        </div>
      `,
  "modal-tractian": `  <div class="modal">
    <button class="modal-close" onclick="closeModal('modal-tractian')">✕</button>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px">
      <div style="background:#FF6B35;width:36px;height:36px;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:18px;color:#fff;flex-shrink:0">🔧</div>
      <div><div class="modal-title" style="margin-bottom:0">Abrir Solicitação de Serviço</div><div style="font-size:10px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:#FF6B35;margin-top:2px">Tractian CMMS</div></div>
    </div>
    <div class="modal-sub">A solicitação será criada automaticamente no Tractian e atribuída à equipe de manutenção.</div>
    <div class="form-row"><div class="fg"><label class="lbl">Equipamento</label><select class="sel"><option>TAM-04 — Tamponadora Linha 4</option><option>ENV-03 — Envasadora Linha 3</option><option>ROT-02 — Rotuladora Linha 2</option><option>BAL-03 — Balança Box 3</option></select></div></div>
    <div class="form-row" style="margin-top:12px"><div class="fg"><label class="lbl">Tipo de Manutenção</label>
      <select class="sel"><option>Corretiva — Equipamento parado</option><option>Corretiva — Funcionando com anomalia</option><option>Preventiva</option><option>Inspeção</option></select></div><div class="fg"><label class="lbl">Prioridade</label>
      <select class="sel"><option>🔴 Alta — Parada de linha</option><option>🟡 Média — Funcionando com risco</option><option>🟢 Baixa — Sem urgência</option></select></div></div>
    <div class="form-row" style="margin-top:12px"><div class="fg"><label class="lbl">Descrição do Problema</label><textarea class="txta" placeholder="Descreva o defeito observado, sintomas e impacto na produção...">Tamponadora L4 parou abruptamente. Possível falha no motor de esteira. Operador relatou barulho incomum antes da parada. Linha L4 parada há 32 minutos.</textarea></div></div>
    <div class="form-row" style="margin-top:12px">
      <div class="fg"><label class="lbl">Responsável Tractian</label><input class="inp" value="Equipe Manutenção MF5"></div>
      <div class="fg"><label class="lbl">Prazo esperado</label><input class="inp" type="datetime-local"></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="btn btn-md btn-v" style="background:#FF6B35;border-color:#E05A28" onclick="closeModal('modal-tractian');alert('✅ Solicitação aberta no Tractian!\\n\\nOS: TRC-2026-0892\\nEquipe notificada via push.\\nPrevisão: 45 minutos.')">Criar OS no Tractian</button>
      <button class="btn btn-md btn-ghost" onclick="closeModal('modal-tractian')">Cancelar</button>
    </div>
  </div>`,
};
