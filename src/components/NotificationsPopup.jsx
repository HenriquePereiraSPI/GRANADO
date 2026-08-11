// Popup de notificações estilo Outlook: lista à esquerda (novas em negrito),
// detalhe do item selecionado à direita. Componente apenas de apresentação —
// o estado (itens/lidas/selecionado) vive no Topbar.

export const INITIAL_NOTIFICATIONS = [
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

export default function NotificationsPopup({ items, selectedId, onSelect, onClose }) {
  const selected = items.find((i) => i.id === selectedId) || null;
  const unread = items.filter((i) => i.unread).length;

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
          </span>
          <button type="button" className="tb-notif-close" onClick={onClose} aria-label="Fechar">✕</button>
        </div>

        <div className="tb-notif-body">
        <div className="tb-notif-list" role="listbox" aria-label="Lista de notificações">
          {items.map((it) => (
            <button
              key={it.id}
              type="button"
              role="option"
              aria-selected={it.id === selectedId}
              className={
                'tb-notif-item' +
                (it.unread ? ' unread' : '') +
                (it.id === selectedId ? ' active' : '')
              }
              onClick={() => onSelect(it.id)}
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
        </div>

        <div className="tb-notif-detail">
          {selected ? (
            <>
              <div className="tb-notif-detail-subject">{selected.subject}</div>
              <div className="tb-notif-detail-meta">
                <span className="tb-notif-detail-from">{selected.from}</span>
                <span>{selected.time}</span>
              </div>
              <div className="tb-notif-detail-body">{selected.body}</div>
            </>
          ) : (
            <div className="tb-notif-empty">Selecione uma notificação para ler.</div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}
