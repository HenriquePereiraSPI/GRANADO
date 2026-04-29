import { useEffect, useRef } from 'react';
import { MODALS } from '../legacy/modals.js';
import { useModal } from './ModalProvider.jsx';

/**
 * Renderiza todos os modais (legacy) num portal raiz.
 * Cada modal mantem seu HTML original (incluindo onclick="closeModal(...)" inline)
 * e a classe .modal-overlay (com .open quando aberto).
 *
 * Ao clicar fora do .modal interno, fechamos (igual ao listener original).
 */
export default function Modals() {
  const { isOpen, closeModal } = useModal();

  return (
    <>
      {Object.entries(MODALS).map(([id, html]) => (
        <ModalShell key={id} id={id} html={html} open={isOpen(id)} onCloseOverlay={closeModal} />
      ))}
    </>
  );
}

function ModalShell({ id, html, open, onCloseOverlay }) {
  const ref = useRef(null);

  // Re-executar <script> embutidos no modal, se houver.
  useEffect(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll('script').forEach((oldScript) => {
      const s = document.createElement('script');
      for (const a of oldScript.attributes) s.setAttribute(a.name, a.value);
      s.textContent = oldScript.textContent;
      oldScript.replaceWith(s);
    });
  }, [html]);

  // Fechamento por clique no overlay.
  const onClick = (e) => {
    if (e.target === e.currentTarget) onCloseOverlay(id);
  };

  // Hook para o setup-hora (replicando a logica original do openModal):
  useEffect(() => {
    if (!open) return;
    if (id === 'modal-fab-setup') {
      const el = document.getElementById('setup-hora');
      if (el && !el.value) el.value = new Date().toLocaleTimeString('pt-BR');
    }
  }, [open, id]);

  return (
    <div
      ref={ref}
      id={id}
      className={`modal-overlay${open ? ' open' : ''}`}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
