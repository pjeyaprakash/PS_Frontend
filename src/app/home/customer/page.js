'use client';

import { use, useEffect, useState } from 'react';
import styles from './page.module.css';
import { protoGet, protoPost, protoPutt } from '@/utils/protoAPI';
import { customer } from '@/proto';


const emptyForm = { id: "", cusCode: '', cusName: '', lineCode: '', address: '' };

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
      <line x1="6" y1="6" x2="18" y2="18" />
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
function CustomerModal({ mode, initialData, onClose, onSave }) {
  const [form, setForm] = useState(initialData || emptyForm);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.cusName.trim() || !form.lineCode.trim() || !form.address.trim()) return;
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
            {mode === 'create' ? <>Create <span>customer</span></> : <>Edit <span>customer</span></>}
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
                name="cusName"
                placeholder="e.g. Customer Name"
                value={form.cusName}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </div>

          {/* lineCode */}
          <div>
            <div className={styles.fieldLabel}>lineCode</div>
            <div className={styles.fieldWrapper}>
              <IconMap />
              <input
                className={styles.fieldInput}
                type="text"
                name="lineCode"
                placeholder="e.g. North Zone"
                value={form.lineCode}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* address */}
          <div>
            <div className={styles.fieldLabel}>address</div>
            <div className={styles.fieldWrapper}>
              <IconBuilding />
              <input
                className={styles.fieldInput}
                type="text"
                name="address"
                placeholder="e.g. Coimbatore"
                value={form.address}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* actions */}
        <div className={styles.modalActions}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            {mode === 'create' ? 'Add Customer →' : 'Save Changes →'}
          </button>
        </div>
      </div>
    </div>
  );
}



/* ────────────========== Main page ===========──────────── */
/* ──────────── Main page ──────────── */
export default function Customer() {
  const [rows, setRows] = useState([]);
  const [modal, setModal] = useState(null);

  const [total, setTotal] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const openCreate = () => setModal({ mode: 'create' });
  const openEdit = (row) => setModal({ mode: 'edit', row });
  const closeModal = () => setModal(null);


  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const { customers } = await protoGet("/customer/1000/0", customer.CustomerList, controller)
        // setRows([])
        setRows(customers)

      } catch (error) {
        if (error.name === "CanceledError" || error.code === "ERR_CANCELED") return;
        console.error(error);

      }
    })()
    return () => controller.abort()
  }, [])


  const handleSave = async (form) => {
    if (modal.mode === 'create') {
      const response = await protoPost("/customer", customer.PostCustomer, customer.Customer, { id: 0, cusCode: "code", ...form })
      setRows((prev) => [...prev, response]);
    } else {
      const response = await protoPutt(`/customer/${modal.row.id}`, customer.PostCustomer, customer.Customer, form)
      setRows((prev) => prev.map((r) => (r.id === modal.row.id ? response : r)));
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
          Customer <span>Management</span>
        </div>

        <button className={styles.createBtn} onClick={openCreate}>
          <IconPlus /> Add Customer
        </button>
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>code</th>
              <th>Name</th>
              <th>lineCode</th>
              <th>address</th>
              <th>Value</th>
              <th>Paid</th>
              <th>Debt</th>
              <th>Revenue</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {rows.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className={styles.emptyState}>
                    {/* <IconRows /> */}
                    <div>No Customer yet. Click <strong>Add Customer</strong> to add one.</div>
                  </div>
                </td>
              </tr>
            ) : (
              rows.map((row, i) => (

                <tr key={row.id}>
                  <td><span className={styles.indexBadge}>{row.cusCode}</span></td>
                  <td>{row.cusName}</td>
                  <td>{row.lineCode}</td>
                  <td>{row.address}</td>
                  <td>{row.totalValue}</td>
                  <td>{row.paid}</td>
                  <td>{row.debt}</td>
                  <td>{row.revenue}</td>
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
        <div className={styles.pagination}>

          <div> showng {rowsPerPage * (currentPage - 1) + 1} to {currentPage * rowsPerPage > rows.length ? rows.length : currentPage * rowsPerPage} of {total} customer</div>
          <div className={styles.pageNumbers}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> 
              {currentPage} 
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* {Array.from({ length: total }, (_, index) => (
              <div key={index}>
                Div {index + 1}
              </div>
            ))} */}

        </div>
      </div>


      {/* Modal */}
      {modal && (
        <CustomerModal
          mode={modal.mode}
          initialData={modal.mode === 'edit' ? { cusName: modal.row.cusName, lineCode: modal.row.lineCode, address: modal.row.address } : emptyForm}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
}