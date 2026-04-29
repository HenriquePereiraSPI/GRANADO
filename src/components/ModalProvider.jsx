import { createContext, useContext, useState, useCallback, useMemo } from 'react';

/**
 * Contexto de modais. Mantem a lista de modais abertos por id.
 * O componente <Modals/> renderiza TODOS os modais disponiveis em src/legacy/modals.js
 * (com classe .modal-overlay) e adiciona/remove a classe `.open` baseado no estado aqui.
 *
 * Isso preserva 100% da estrutura/CSS originais, e o JS legado pode chamar
 * window.openModal('modal-X') sem mudancas.
 */

const ModalContext = createContext({
  isOpen: () => false,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }) {
  const [openIds, setOpenIds] = useState(() => new Set());

  const isOpen = useCallback((id) => openIds.has(id), [openIds]);

  const openModal = useCallback((id) => {
    setOpenIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const closeModal = useCallback((id) => {
    setOpenIds((prev) => {
      if (!prev.has(id)) return prev;
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ isOpen, openModal, closeModal }), [isOpen, openModal, closeModal]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  return useContext(ModalContext);
}
