// Popup de notificações estilo Outlook: lista à esquerda (novas em negrito),
// detalhe do item selecionado à direita. Ações: + Novo, Responder e Excluir.
// O estado dos dados (itens/lidas/selecionado) vive no Topbar; aqui fica só o
// rascunho do formulário de envio.
import { useState, useEffect } from 'react';

const LATEST_NOTIFICATIONS = [
  {
    id: 1,
    from: 'Apriso MES',
    subject: 'OP-2026-0416 liberada para pesagem',
    preview: 'A ordem já aparece na fila do Box 3 — 7 MPs a pesar.',
    time: '09:12',
    unread: true,
    body:
      'A ordem OP-2026-0416 (Loção Rosa 200ml) foi liberada e já aparece na fila de ' +
      'pesagem do Box 3. São 7 matérias-primas a pesar. Prazo previsto de início: hoje, 10h.',
  },
  {
    id: 2,
    from: 'Qualidade (CQ)',
    subject: 'Lote reprovado — Essência Rosa',
    preview: 'ESR-2026-11 ficou fora da faixa de pH.',
    time: '08:47',
    unread: true,
    body:
      'O lote ESR-2026-11 (Essência Rosa) foi reprovado na análise de pH. NÃO utilizar ' +
      'até nova liberação do CQ. As pesagens que usaram esse lote serão revisadas.',
  },
  {
    id: 3,
    from: 'Manutenção',
    subject: 'Balança BAL-03 requer recalibração',
    preview: 'Recalibração vence hoje — agende a aferição.',
    time: 'Ontem',
    unread: true,
    body:
      'A balança BAL-03 (Sala B) está com a recalibração vencendo hoje. Agende a aferição ' +
      'antes de usá-la; pesagens feitas após o vencimento podem ser bloqueadas.',
  },
  {
    id: 4,
    from: 'Almoxarifado',
    subject: 'Devolução de saldo registrada',
    preview: '21,120 kg de Ácido Salicílico devolvidos ao JDE.',
    time: 'Ontem',
    unread: false,
    body:
      'A devolução de 21,120 kg de Ácido Salicílico (etiqueta de origem 6618486) foi ' +
      'registrada no JDE e o estoque já foi atualizado.',
  },
  {
    id: 5,
    from: 'Apriso MES',
    subject: 'Pesagem concluída — OP-2026-0414',
    preview: 'Todas as MPs pesadas; gaiola pronta.',
    time: 'Seg',
    unread: false,
    body:
      'A OP-2026-0414 (Creme 150g) teve todas as matérias-primas pesadas. A gaiola está ' +
      'pronta para seguir para a Fabricação.',
  },
];

// Mensagens simuladas mais antigas — geradas a partir de modelos para completar 50 itens.
const SIM_TEMPLATES = [
  {
    from: 'Apriso MES',
    subject: (n) => `OP-2026-0${400 - n} liberada para pesagem`,
    preview: (n) => `Ordem na fila do Box ${(n % 4) + 1} — ${(n % 6) + 3} MPs a pesar.`,
    body: (n) =>
      `A ordem OP-2026-0${400 - n} foi liberada e já aparece na fila de pesagem do Box ${(n % 4) + 1}. ` +
      `São ${(n % 6) + 3} matérias-primas a pesar.`,
  },
  {
    from: 'Apriso MES',
    subject: (n) => `Pesagem concluída — OP-2026-0${390 - n}`,
    preview: () => 'Todas as MPs pesadas; gaiola pronta.',
    body: (n) =>
      `A OP-2026-0${390 - n} teve todas as matérias-primas pesadas. A gaiola está pronta para seguir para a Fabricação.`,
  },
  {
    from: 'Qualidade (CQ)',
    subject: (n) => `Lote ${n % 2 ? 'aprovado' : 'em análise'} — LT-2026-${String(100 + n)}`,
    preview: (n) => (n % 2 ? 'Lote liberado para uso na produção.' : 'Aguardando resultado do laboratório.'),
    body: (n) =>
      n % 2
        ? `O lote LT-2026-${100 + n} foi aprovado pelo CQ e está liberado para uso.`
        : `O lote LT-2026-${100 + n} está em análise. Não utilizar até a liberação do CQ.`,
  },
  {
    from: 'Manutenção',
    subject: (n) => `Balança BAL-0${(n % 6) + 1} — aferição agendada`,
    preview: (n) => `Aferição marcada para o dia ${(n % 28) + 1}.`,
    body: (n) =>
      `A aferição da balança BAL-0${(n % 6) + 1} foi agendada para o dia ${(n % 28) + 1}. ` +
      'Durante a aferição o equipamento ficará indisponível.',
  },
  {
    from: 'Almoxarifado',
    subject: () => 'Devolução de saldo registrada',
    preview: (n) => `${(n * 1.37).toFixed(3).replace('.', ',')} kg devolvidos ao JDE.`,
    body: (n) =>
      `A devolução de ${(n * 1.37).toFixed(3).replace('.', ',')} kg foi registrada no JDE e o estoque já foi atualizado.`,
  },
  {
    from: 'winke',
    subject: (n) => `Ajuste no cadastro do produto M000${800 + n}S`,
    preview: () => 'Revisar a tolerância de pesagem do item.',
    body: (n) =>
      `O produto M000${800 + n}S teve a tolerância de pesagem ajustada. Confira antes da próxima ordem.`,
  },
  {
    from: 'Kaic Lima',
    subject: (n) => `Troca de turno — Box ${(n % 4) + 1}`,
    preview: () => 'Pendências repassadas para o próximo turno.',
    body: (n) =>
      `Na troca de turno do Box ${(n % 4) + 1} ficaram ${(n % 3) + 1} ordem(ns) em andamento. Detalhes no livro de turno.`,
  },
];

// Rótulo de tempo: dias da semana para a última semana, depois dd/mm.
const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
function simTime(daysAgo) {
  const d = new Date(2026, 9, 7 - daysAgo);
  if (daysAgo < 7) return WEEKDAYS[d.getDay()];
  return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0');
}

const OLDER_NOTIFICATIONS = Array.from({ length: 45 }, (_, i) => {
  const n = i + 1;
  const t = SIM_TEMPLATES[i % SIM_TEMPLATES.length];
  return {
    id: 100 + n,
    from: t.from,
    subject: t.subject(n),
    preview: t.preview(n),
    time: simTime(3 + Math.floor(i / 2)),
    unread: i % 9 === 0, // algumas antigas ainda não lidas
    body: t.body(n),
  };
});

export const INITIAL_NOTIFICATIONS = [...LATEST_NOTIFICATIONS, ...OLDER_NOTIFICATIONS];

// Destinatários possíveis (usuários + roles) para o autocompletar do campo "Para".
// Placeholder — trocar pelos dados de GRD_API_GetUsers e pela lista de roles.
export const RECIPIENTS = [
  { id: '100000006', name: 'claudinei', type: 'user' },
  { id: '100000002', name: 'Eduardo Aguiar', type: 'user' },
  { id: '100000009', name: 'Eduardo Morais', type: 'user' },
  { id: '100000004', name: 'Funcionario', type: 'user' },
  { id: '100000007', name: 'ivan', type: 'user' },
  { id: '100000001', name: 'Kaic Lima', type: 'user' },
  { id: '100000008', name: 'Matheus Morais', type: 'user' },
  { id: '100000005', name: 'Rodrigo Contino', type: 'user' },
  { id: '100000003', name: 'winke', type: 'user' },
  { id: 'Pesagem', name: 'Pesagem', type: 'role' },
  { id: 'Qualidade (CQ)', name: 'Qualidade (CQ)', type: 'role' },
  { id: 'Manutenção', name: 'Manutenção', type: 'role' },
  { id: 'Almoxarifado', name: 'Almoxarifado', type: 'role' },
  { id: 'Fabricação', name: 'Fabricação', type: 'role' },
];

// remove acentos (marcas combinantes U+0300–U+036F) e caixa, para comparar nomes
const norm = (s) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

// Rascunho vazio do formulário de nova notificação. O destinatário é um usuário
// OU uma role (mesmo modelo do GRD_API_CreateAlert) — o tipo vem da sugestão escolhida.
const EMPTY_DRAFT = { mode: 'new', to: '', recipient: null, title: '', message: '' };

export default function NotificationsPopup({
  items, selectedId, onSelect, onDelete, onSend, onClose,
}) {
  const selected = items.find((i) => i.id === selectedId) || null;
  const unread = items.filter((i) => i.unread).length;

  // Filtro da lista: busca por texto no remetente, assunto e mensagem.
  const [query, setQuery] = useState('');
  const q = norm(query.trim());
  const visible = q ? items.filter((i) => norm(`${i.from} ${i.subject} ${i.body}`).includes(q)) : items;

  // Seleção múltipla (estilo Outlook): Shift+clique = intervalo a partir da âncora,
  // Ctrl/Cmd+clique = marca/desmarca um item. Clique simples volta a 1 item (leitura).
  // Opera só sobre os itens visíveis (filtrados).
  const [multiIds, setMultiIds] = useState([]);
  const [anchorId, setAnchorId] = useState(selectedId);
  const existing = new Set(visible.map((i) => i.id));
  const pickedIds = multiIds.filter((id) => existing.has(id));
  const picked = new Set(pickedIds.length ? pickedIds : selectedId != null ? [selectedId] : []);
  const isMulti = picked.size > 1;

  // Formulário (nova / resposta) abre num popup por cima deste; null = fechado.
  const [draft, setDraft] = useState(null);
  const [sentFlash, setSentFlash] = useState(false);

  useEffect(() => {
    if (!sentFlash) return undefined;
    const t = setTimeout(() => setSentFlash(false), 2500);
    return () => clearTimeout(t);
  }, [sentFlash]);

  function startNew() {
    setDraft({ ...EMPTY_DRAFT });
    setSentFlash(false);
  }

  function startReply() {
    if (!selected) return;
    // Pré-seleciona o remetente se ele existir na lista de destinatários.
    const recipient = RECIPIENTS.find((r) => norm(r.name) === norm(selected.from)) || null;
    setDraft({
      ...EMPTY_DRAFT,
      mode: 'reply',
      to: selected.from,
      recipient,
      title: selected.subject.startsWith('RE: ') ? selected.subject : 'RE: ' + selected.subject,
    });
    setSentFlash(false);
  }

  function handleDelete() {
    if (!selected) return;
    onDelete([selected.id]);
    setMultiIds([]);
  }

  function deletePicked() {
    onDelete([...picked]);
    setMultiIds([]);
  }

  function clearPicked() {
    setMultiIds([]);
    onSelect(null);
  }

  function handleSend(d) {
    onSend({ ...d, replyToId: d.mode === 'reply' && selected ? selected.id : null });
    setDraft(null);
    setSentFlash(true);
  }

  function selectItem(e, id) {
    setSentFlash(false);

    if (e.shiftKey) {
      // intervalo entre a âncora (último clique simples/Ctrl) e o item clicado
      const ids = visible.map((i) => i.id);
      const from = ids.indexOf(anchorId != null && existing.has(anchorId) ? anchorId : id);
      const to = ids.indexOf(id);
      const range = ids.slice(Math.min(from, to), Math.max(from, to) + 1);
      setMultiIds(range);
      if (range.length === 1) onSelect(id);
      return;
    }

    if (e.ctrlKey || e.metaKey) {
      const base = [...picked];
      const next = base.includes(id) ? base.filter((x) => x !== id) : [...base, id];
      setMultiIds(next);
      setAnchorId(id);
      if (next.length === 1) onSelect(next[0]);
      else if (next.length === 0) onSelect(null);
      return;
    }

    setMultiIds([]);
    setAnchorId(id);
    onSelect(id);
  }

  return (
    <div className="tb-modal-overlay" onClick={onClose}>
      <div
        className="tb-notif-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Notificações"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tb-notif-head">
          <span className="tb-notif-head-title">
            Notificações
            <span className="tb-notif-count">{unread} nova{unread === 1 ? '' : 's'}</span>
            <button type="button" className="btn btn-sm btn-v tb-notif-new" onClick={startNew}>+ Novo</button>
          </span>
          <button type="button" className="tb-notif-close" onClick={onClose} aria-label="Fechar">✕</button>
        </div>

        <div className="tb-notif-body">
        <div className="tb-notif-col">
        <div className="tb-notif-filter">
          <div className="tb-notif-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar notificações"
              aria-label="Buscar notificações"
            />
            {query && (
              <button type="button" className="tb-notif-search-clear" onClick={() => setQuery('')} aria-label="Limpar busca">✕</button>
            )}
          </div>
        </div>
        <div className="tb-notif-list" role="listbox" aria-label="Lista de notificações">
          {visible.map((it) => (
            <button
              key={it.id}
              type="button"
              role="option"
              aria-selected={picked.has(it.id)}
              className={
                'tb-notif-item' +
                (it.unread ? ' unread' : '') +
                (picked.has(it.id) ? ' active' : '')
              }
              // evita que o Shift+clique selecione o texto da lista
              onMouseDown={(e) => {
                if (e.shiftKey) e.preventDefault();
              }}
              onClick={(e) => selectItem(e, it.id)}
            >
              <span className="tb-notif-dot" aria-hidden="true" />
              <span className="tb-notif-item-main">
                <span className="tb-notif-item-row">
                  <span className="tb-notif-from">{it.from}</span>
                  <span className="tb-notif-time">{it.time}</span>
                </span>
                <span className="tb-notif-subject">{it.subject}</span>
                <span className="tb-notif-preview">{it.preview}</span>
              </span>
            </button>
          ))}
          {visible.length === 0 && (
            <div className="tb-notif-list-empty">
              {q ? (
                <>
                  Nenhuma notificação encontrada.
                  <br />
                  <button type="button" className="tb-notif-link" onClick={() => setQuery('')}>Limpar busca</button>
                </>
              ) : (
                'Nenhuma notificação.'
              )}
            </div>
          )}
        </div>
        </div>

        <div className="tb-notif-detail">
          {sentFlash && <div className="tb-notif-flash">Notificação enviada.</div>}
          {isMulti ? (
            <div className="tb-notif-multi">
              <div className="tb-notif-detail-head">
                <div className="tb-notif-detail-subject">{picked.size} notificações selecionadas</div>
                <span className="tb-notif-detail-actions">
                  <button type="button" className="tb-notif-act tb-notif-act--del" onClick={deletePicked} title="Excluir selecionadas" aria-label="Excluir selecionadas">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                  </button>
                </span>
              </div>
              <div className="tb-notif-detail-meta tb-notif-multi-meta">
                <button type="button" className="tb-notif-link" onClick={clearPicked}>Limpar seleção</button>
              </div>
              <ul className="tb-notif-multi-list">
                {items.filter((i) => picked.has(i.id)).map((i) => (
                  <li key={i.id} className={i.unread ? 'unread' : ''}>
                    <span className="tb-notif-multi-from">{i.from}</span>
                    <span className="tb-notif-multi-subject">{i.subject}</span>
                    <span className="tb-notif-time">{i.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : selected ? (
            <>
              <div className="tb-notif-detail-head">
                <div className="tb-notif-detail-subject">{selected.subject}</div>
                <span className="tb-notif-detail-actions">
                  <button type="button" className="tb-notif-act" onClick={startReply} title="Responder" aria-label="Responder">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 17 4 12 9 7" />
                      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
                    </svg>
                  </button>
                  <button type="button" className="tb-notif-act tb-notif-act--del" onClick={handleDelete} title="Excluir" aria-label="Excluir">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                      <path d="M10 11v6M14 11v6" />
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                    </svg>
                  </button>
                </span>
              </div>
              <div className="tb-notif-detail-meta">
                <span className="tb-notif-detail-from">{selected.from}</span>
                <span>{selected.time}</span>
              </div>
              <div className="tb-notif-detail-body">{selected.body}</div>
            </>
          ) : (
            !sentFlash && (
              <div className="tb-notif-empty">
                Selecione uma notificação para ler.
                <br />
                Use Shift ou Ctrl + clique para selecionar várias.
              </div>
            )
          )}
        </div>
        </div>
      </div>

      {draft && (
        <ComposePopup
          initial={draft}
          quoted={draft.mode === 'reply' ? selected : null}
          onCancel={() => setDraft(null)}
          onSend={handleSend}
        />
      )}
    </div>
  );
}

// Popup de nova notificação / resposta — abre por cima do popup de notificações.
// Clique fora ou Esc fecham só este popup (não propagam para o de notificações).
function ComposePopup({ initial, quoted, onCancel, onSend }) {
  const [d, setD] = useState(initial);
  // Só envia com um destinatário escolhido da lista (define se é usuário ou role).
  const canSend = d.recipient && d.title.trim() && d.message.trim();

  const users = RECIPIENTS.filter((r) => r.type === 'user');
  const roles = RECIPIENTS.filter((r) => r.type === 'role');
  const recipientKey = (r) => r.type + ':' + r.id;

  function update(field, value) {
    setD((prev) => ({ ...prev, [field]: value }));
  }

  function pickRecipient(key) {
    const r = RECIPIENTS.find((x) => recipientKey(x) === key) || null;
    setD((prev) => ({ ...prev, to: r ? r.name : '', recipient: r }));
  }

  function submit(e) {
    e.preventDefault();
    if (!canSend) return;
    onSend({
      mode: d.mode,
      toType: d.recipient.type,
      toId: d.recipient.id,
      to: d.recipient.name,
      title: d.title.trim(),
      message: d.message.trim(),
    });
  }

  return (
    <div
      className="tb-modal-overlay tb-modal-overlay--top"
      onClick={(e) => {
        e.stopPropagation();
        onCancel();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.stopPropagation();
          onCancel();
        }
      }}
    >
      <form
        className="tb-notif-compose"
        role="dialog"
        aria-modal="true"
        aria-label={d.mode === 'reply' ? 'Responder notificação' : 'Nova notificação'}
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
      >
        <div className="tb-notif-head">
          <span className="tb-notif-head-title">
            {d.mode === 'reply' ? 'Responder notificação' : 'Nova notificação'}
          </span>
          <button type="button" className="tb-notif-close" onClick={onCancel} aria-label="Fechar">✕</button>
        </div>

        <div className="tb-notif-compose-body">
          <label className="lbl">Para</label>
          <select
            className="sel tb-notif-to-sel"
            value={d.recipient ? recipientKey(d.recipient) : ''}
            onChange={(e) => pickRecipient(e.target.value)}
            autoFocus={d.mode === 'new'}
          >
            <option value="">Selecione o destinatário</option>
            <optgroup label="Usuários">
              {users.map((r) => (
                <option key={recipientKey(r)} value={recipientKey(r)}>{r.name}</option>
              ))}
            </optgroup>
            <optgroup label="Roles">
              {roles.map((r) => (
                <option key={recipientKey(r)} value={recipientKey(r)}>{r.name}</option>
              ))}
            </optgroup>
          </select>

          <label className="lbl">Título</label>
          <input
            className="inp"
            value={d.title}
            onChange={(e) => update('title', e.target.value)}
            placeholder="Título da notificação"
          />

          <label className="lbl">Mensagem</label>
          <textarea
            className="txta"
            value={d.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Escreva a mensagem"
            autoFocus={d.mode === 'reply'}
          />

          {quoted && (
            <div className="tb-notif-quote">
              <div className="tb-notif-quote-meta">{quoted.from} · {quoted.time}</div>
              {quoted.body}
            </div>
          )}
        </div>

        <div className="tb-notif-compose-actions">
          <button type="button" className="btn btn-sm btn-ghost" onClick={onCancel}>Cancelar</button>
          <button type="submit" className="btn btn-sm btn-v" disabled={!canSend}>Enviar</button>
        </div>
      </form>
    </div>
  );
}
