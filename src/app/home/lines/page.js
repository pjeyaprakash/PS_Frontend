'use client';

import { useEffect, useState } from 'react';
import styles from './lines.module.css';
import { protoGet, protoPost } from '@/utils/protoAPI';
import { line } from '@/proto';

const INITIAL_DATA = [
  { id: 1, lineName: 'Line Alpha', area: 'North Zone', district: 'Coimbatore' },
  { id: 2, lineName: 'Line Beta',  area: 'South Zone', district: 'Tiruppur' },
  { id: 3, lineName: 'Line Gamma', area: 'East Zone',  district: 'Erode' },
  { id: 4, lineName: 'Line Gamma', area: 'East Zone',  district: 'Erode' },
  { id: 5, lineName: 'Line Gamma', area: 'East Zone',  district: 'Erode' },
  { id: 6, lineName: 'Line Gamma', area: 'East Zone',  district: 'Erode' },
  { id: 7, lineName: 'Line Gamma', area: 'East Zone',  district: 'Erode' },

];

const emptyForm = { lineName: '', area: '', district: '' };

/* ──────────── small SVG icons ──────────── */
// function IconTarget() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
//          strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="12" r="10" />
//       <circle cx="12" cy="12" r="3"  />
//     </svg>
//   );
// }
function IconEdit() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function IconPlus() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6"  y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg className={styles.fieldIcon} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function IconMap() {
  return (
    <svg className={styles.fieldIcon} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}
function IconBuilding() {
  return (
    <svg className={styles.fieldIcon} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  );
}
function IconRows() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18" />
    </svg>
  );
}

/* ──────────── Modal component ──────────── */
function LineModal({ mode, initialData, onClose, onSave }) {
  const [form, setForm] = useState(initialData || emptyForm);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.lineName.trim() || !form.area.trim() || !form.district.trim()) return;
    onSave(form);
  };

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        {/* close */}
        <button className={styles.closeBtn} onClick={onClose}><IconX /></button>

        {/* header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            {mode === 'create' ? <>Create <span>line</span></> : <>Edit <span>line</span></>}
          </div>
        </div>

        {/* fields */}
        <div className={styles.fieldGroup}>
          {/* Name */}
          <div>
            <div className={styles.fieldLabel}>Name</div>
            <div className={styles.fieldWrapper}>
              <IconUser />
              <input
                className={styles.fieldInput}
                type="text"
                name="lineName"
                placeholder="e.g. Line Alpha"
                value={form.lineName}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </div>

          {/* Area */}
          <div>
            <div className={styles.fieldLabel}>Area</div>
            <div className={styles.fieldWrapper}>
              <IconMap />
              <input
                className={styles.fieldInput}
                type="text"
                name="area"
                placeholder="e.g. North Zone"
                value={form.area}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* District */}
          <div>
            <div className={styles.fieldLabel}>District</div>
            <div className={styles.fieldWrapper}>
              <IconBuilding />
              <input
                className={styles.fieldInput}
                type="text"
                name="district"
                placeholder="e.g. Coimbatore"
                value={form.district}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* actions */}
        <div className={styles.modalActions}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            {mode === 'create' ? 'Create Line →' : 'Save Changes →'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ──────────── Main page ──────────── */
export default function Lines() {
  const [rows, setRows]         = useState([]);
  const [modal, setModal]       = useState(null); // null | { mode:'create' } | { mode:'edit', row }

  const openCreate = () => setModal({ mode: 'create' });
  const openEdit   = (row) => setModal({ mode: 'edit', row });
  const closeModal = () => setModal(null);


    useEffect(() => {
      const controller = new AbortController();
      (async () => {
        try {
          const {lines} = await protoGet("/lines/1000/0", line.LineList, controller)

            console.log("lines", lines)
        setRows(lines)

        } catch (error) {
        if (error.name === "CanceledError" || error.code === "ERR_CANCELED") return;
        console.error(error);
  
        }
      })()
      return () => controller.abort()
    }, [])


  const handleSave = async(form) => {
    console.log("form", form)
    if (modal.mode === 'create') {
        const response = await protoPost("/line", line.PostLine, line.PostLineResponse, {lineCode: "code", ...form})
      setRows((prev) => [...prev, { ...response }]);
    } else {
      setRows((prev) => prev.map((r) => (r.id === modal.row.id ? { ...r, ...form } : r)));
    }
    closeModal();
  };

  return (
    <div className={styles.page}>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          {/* <div className={styles.logoIcon}><IconTarget /></div>
          <span className={styles.logoText}>Luminary</span> */}
        </div>

        <div className={styles.pageTitle}>
          Lines <span>Management</span>
        </div>

        <button className={styles.createBtn} onClick={openCreate}>
          <IconPlus /> Create Line
        </button>
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>code</th>
              <th>Name</th>
              <th>Area</th>
              <th>District</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className={styles.emptyState}>
                    <IconRows />
                    <div>No lines yet. Click <strong>Create Line</strong> to add one.</div>
                  </div>
                </td>
              </tr>
            ) : (
              rows.map((row, i) => (
                <tr key={row.id}>
                  <td><span className={styles.indexBadge}>{i + 1}</span></td>
                  <td>{row.lineName}</td>
                  <td>{row.area}</td>
                  <td>{row.district}</td>
                  <td className={styles.actionsCell}>
                    <button className={styles.editBtn} onClick={() => openEdit(row)} title="Edit">
                      <IconEdit />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modal && (
        <LineModal
          mode={modal.mode}
          initialData={modal.mode === 'edit' ? { lineName: modal.row.lineName, area: modal.row.area, district: modal.row.district } : emptyForm}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
}