import { useState, useRef, useEffect } from 'react';
import { PESAGEM_OEE as D } from '../data/pes-oee-data.js';

/* ─────────────────────────────────────────────────────────────
   Filtro de Salas — dropdown com checkboxes (+ "Todas as salas")
   Compartilhado entre OEE Pesagem e Performance (Ordem).
───────────────────────────────────────────────────────────── */
export default function SalasFilter() {
  const salas = D.salas;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(() => salas.map((s) => s.id));
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const allChecked = selected.length === salas.length;
  const noneChecked = selected.length === 0;
  const toggleAll = () => setSelected(allChecked ? [] : salas.map((s) => s.id));
  const toggleOne = (id) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const label = allChecked
    ? 'Todas as salas'
    : noneChecked
      ? 'Nenhuma sala'
      : `${selected.length} sala${selected.length > 1 ? 's' : ''}`;

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        className="inp"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: 'auto',
          fontSize: 12,
          padding: '6px 10px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          background: 'var(--surface)',
        }}
        title="Filtrar salas"
      >
        <span>🏠 {label}</span>
        <span style={{ color: 'var(--text3)', fontSize: 9 }}>▼</span>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            right: 0,
            zIndex: 50,
            minWidth: 200,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            boxShadow: 'var(--sh)',
            padding: 6,
          }}
        >
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '7px 10px',
              borderRadius: 6,
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 700,
              color: 'var(--verde-esc)',
            }}
          >
            <input
              type="checkbox"
              checked={allChecked}
              ref={(el) => { if (el) el.indeterminate = !allChecked && !noneChecked; }}
              onChange={toggleAll}
              style={{ width: 15, height: 15, accentColor: 'var(--verde)', cursor: 'pointer' }}
            />
            Todas as salas
          </label>

          <div style={{ height: 1, background: 'var(--border)', margin: '4px 6px' }} />

          {salas.map((s) => (
            <label
              key={s.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 10px',
                borderRadius: 6,
                cursor: 'pointer',
                fontSize: 12,
                color: 'var(--text2)',
              }}
            >
              <input
                type="checkbox"
                checked={selected.includes(s.id)}
                onChange={() => toggleOne(s.id)}
                style={{ width: 15, height: 15, accentColor: 'var(--verde)', cursor: 'pointer' }}
              />
              {s.nome}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
