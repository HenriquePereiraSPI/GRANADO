// Modal centralizado com as informações do usuário + botão de logout.
// Mesmo padrão de overlay do popup de notificações.

export default function UserPopup({ user, onLogout, onClose }) {
  return (
    <div className="tb-modal-overlay" onClick={onClose}>
      <div
        className="tb-user-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Usuário"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="tb-notif-close tb-user-modal-close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>

        <div className="tb-user-modal-head">
          <span className="tb-user-modal-avatar">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <div className="tb-user-modal-id">
            <div className="tb-user-modal-name">{user.name}</div>
            <div className="tb-user-modal-role">{user.role}</div>
          </div>
        </div>

        <div className="tb-user-modal-info">
          <div className="tb-user-info-row"><span>Matrícula</span><strong>{user.matricula}</strong></div>
          <div className="tb-user-info-row"><span>Setor</span><strong>{user.setor}</strong></div>
          <div className="tb-user-info-row"><span>Turno</span><strong>{user.turno}</strong></div>
          <div className="tb-user-info-row"><span>E-mail</span><strong>{user.email}</strong></div>
        </div>

        <div className="tb-user-modal-foot">
          <button type="button" className="tb-user-logout" onClick={onLogout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
