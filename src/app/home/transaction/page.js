'use client';

import { useState, useRef, useEffect} from 'react';
import styles from './page.module.css';
import { protoGet, protoGett, protoPost, protoPutt } from '@/utils/protoAPI';
import { customer, line, product , transaction} from '@/proto';


const emptyForm = { 
    lineCode: '', 
    cusCode: '', 
    cusName: '',
    sales: [], 
    actualAmount: "",
    saleAmount: "",
    debt: "",
    paid: "",
};


const IconTrash   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>;
async function fetchSalesOptions(query) {
    const {productNames} = await protoGett(`/product-name/search/${query}`, product.SearchProductNameResponse)
    return productNames;
}

async function fetchCustomerName(query) {
    const {customerNames} = await protoGett(`/customer-name/search/${query}`, customer.SearchCustomerNameResponse)
    return customerNames;
}
 
// ── empty shapes ──────────────────────────────────────────────────────────────
const emptySalesRow = () => ({salePrice: "", qty: "", price: "", name: null });

function SalesRow({ row, onChange, onRemove }) {
  const [query, setQuery]       = useState(row.name? `${row.name} - ₹${row.price}` : "");
  const [options, setOptions]   = useState([]);
  const [loading, setLoading]   = useState(false);
  const [open, setOpen]         = useState(false);
  const debounceRef             = useRef(null);
  const wrapperRef              = useRef(null);
 
  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
 
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onChange({ ...row, name: null });
    // onChange({ ...row, search: val, name: null });
    setOpen(true);
 
    clearTimeout(debounceRef.current);
    if (!val.trim()) { setOptions([]); return; }
 
    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      const results = await fetchSalesOptions(val);
      console.log(results)
      setOptions(results);
      setLoading(false);
    }, 1000);
  };
 
  const handleSelect = (opt) => {
    setQuery(`${opt.name} - ₹${opt.price}`);
    setOptions([]);
    setOpen(false);
    onChange({ ...row, name: opt.name, price: opt.price});
  };
  // console.log("uhiu", row)
 
  return (
    <div className={styles.salesRow}>
      {/* ① Search field */}
      <div className={styles.salesSearchWrap} ref={wrapperRef}>
        <input
          className={styles.salesInput}
          type="text"
          placeholder="Search product / service…"
          value={query}
          onChange={handleSearchChange}
          onFocus={() => query && setOpen(true)}
        />
        {open && (loading || options.length > 0) && (
          <ul className={styles.dropdown}>
            {loading && <li className={styles.dropdownLoading}>Searching…</li>}
            {!loading && options.map((opt, i) => (
              <li key={i} className={styles.dropdownItem} onMouseDown={() => handleSelect(opt)}>
                {`${opt.name} - ₹${opt.price}`}
              </li>
            ))}
            {!loading && options.length === 0 && query && (
              <li className={styles.dropdownLoading}>No results</li>
            )}
          </ul>
        )}
      </div>
 
      {/* ② Field 2 */}
      <input
        className={styles.salesInput}
        type="number"
        placeholder="Qty"
        value={row.qty}
        onChange={(e) => onChange({ ...row, qty: e.target.value })}
      />
 
      {/* ③ Field 3 */}
      <input
        className={styles.salesInput}
        type="number"
        placeholder="Sold Price"
        value={row.salePrice}
        onChange={(e) => onChange({ ...row, salePrice: e.target.value })}
      />
 
      {/* Remove row */}
      {<button className={styles.removeRowBtn} onClick={onRemove} title="Remove row">
        <IconTrash />
      </button> }
    </div>
  );
}



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

function TransactionModal({ mode, initialData, onClose, onSave }) {
  const [form, setForm] = useState(() => ({
    ...emptyForm,
    ...(initialData || {}),
    sales: (initialData?.sales && initialData.sales.length > 0)
      ? initialData.sales
      : [],
  }));
 
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const addSalesRow = () => {
    setForm((prev) => ({ ...prev, sales: [...prev.sales, emptySalesRow()] }));
  };
 
  const updateSalesRow = (index, updated) => {
    setForm((prev) => {
      const sales = [...prev.sales];
      sales[index] = updated;
      return { ...prev, sales };
    });
  };
 
  const removeSalesRow = (index) => {
    setForm((prev) => ({ ...prev, sales: prev.sales.filter((_, i) => i !== index) }));
  };

  useEffect(() => {
    const total = form.sales.reduce((sum, row) => {
        sum.saleAmount = sum.saleAmount + (row.salePrice * row.qty);
        sum.actualAmount = sum.actualAmount + (row.price * row.qty);
        return sum;
    }, {saleAmount:0, actualAmount:0});
    setForm((prev) => ({ ...prev, saleAmount:total.saleAmount, actualAmount:total.actualAmount}));
  },[form.sales])
 
  const handleSubmit = () => {
    console.log(form)
    // if (!form.lineCode.trim() || !form.cusCode.trim() || !String(form.paid).trim()) return;
    onSave(form);
  };
 



  // dropdown
  const [cusNameQuery, setCusNameQuery]       = useState("");
  const [cusNameOptions, setCusNameOptions]   = useState([]);
  const [cusNameLoading, setCusNameLoading]   = useState(false);
  const [cusNameOpen, setCusNameOpen]         = useState(false);
  const debounceRef             = useRef(null);
  const wrapperRef              = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setCusNameOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);


  const handleSearchChange = (e) => {
    const val = e.target.value;
    setCusNameQuery(val);
    handleChange(e);
    setCusNameOpen(true);
 
    clearTimeout(debounceRef.current);
    if (!val.trim()) { setCusNameOptions([]); return; }
 
    setCusNameLoading(true);
    debounceRef.current = setTimeout(async () => {
      const results = await fetchCustomerName(val);
      setCusNameOptions(results);
      setCusNameLoading(false);
    }, 1000);
  };

    const handleSelect = (opt) => {
    setCusNameQuery(`${opt.name} - ₹${opt.price}`);
    setCusNameOptions([]);
    setCusNameOpen(false);
    setForm((prev) => ({ ...prev, lineCode: opt.lineCode,
        cusCode: opt.cusCode,
        cusName: opt.cusName,
        debt: opt.debt
    }));
  };


  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        {/* close */}
        <button className={styles.closeBtn} onClick={onClose}><IconX /></button>
 
        {/* header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            {mode === "create"
              ? <><span style={{fontWeight:700}}>Create</span> <span className={styles.titleAccent}>Transaction</span></>
              : <><span style={{fontWeight:700}}>Edit</span>   <span className={styles.titleAccent}>Transaction</span></>
            }
          </div>
        </div>
 
        {/* fields */}
        <div className={styles.fieldGroup}>



          {/* Customer Name */}
          <div>
            <div className={styles.fieldLabel}>Customer Name</div>
            <div className={styles.fieldWrapper}>
              <IconMap />
              <input className={styles.fieldInput} type="text" name="cusName"  disabled={mode === "edit"} 
                placeholder="e.g. North Zone" value={form.cusName} onChange={handleSearchChange} 
                onFocus={() => cusNameQuery && setCusNameOpen(true)} autoFocus/>
                {cusNameOpen && (cusNameLoading || cusNameOptions.length > 0) && (
                    <ul className={styles.dropdown}>
                        {cusNameLoading && <li className={styles.dropdownLoading}>Searching…</li>}
                        {!cusNameLoading && cusNameOptions.map((opt, i) => (
                        <li key={i} className={styles.dropdownItem} onMouseDown={() => handleSelect(opt)}>
                            {`${opt.cusName} - ${opt.cusCode}`}
                        </li>
                        ))}
                        {!cusNameLoading && cusNameOptions.length === 0 && query && (
                        <li className={styles.dropdownLoading}>No results</li>
                        )}
                    </ul>
                )}
            </div>
          </div>


          {/* Customer Code */}
          <div>
            <div className={styles.fieldLabel}>Customer Code</div>
            <div className={styles.fieldWrapper}>
              <IconMap />
              <input className={styles.fieldInput} type="text" name="cusCode"  disabled={true} 
                placeholder="e.g. North Zone" value={form.cusCode} onChange={handleChange} />
            </div>
          </div>

          {/* Line Code */}
          <div>
            <div className={styles.fieldLabel}>Line Code</div>
            <div className={styles.fieldWrapper}>
              <IconUser />
              <input className={styles.fieldInput} type="text" name="lineCode"  disabled={true} 
                placeholder="e.g. Line Alpha" value={form.lineCode} onChange={handleChange} />
            </div>
          </div>

          {/* Debt */}
          <div>
            <div className={styles.fieldLabel}>Debt</div>
            <div className={styles.fieldWrapper}>
              <IconBuilding />
              <input className={styles.fieldInput} type="text" name="debt"
                placeholder="0" value={form.debt} onChange={handleChange} disabled={true} />
            </div>
          </div>
 
          {/* Pending Debt */}
          <div>
            <div className={styles.fieldLabel}>Pending Debt</div>
            <div className={styles.fieldWrapper}>
              <IconBuilding />
              <input className={styles.fieldInput} type="text" name="pedingDebt"
                placeholder="0" value={form.debt - form.paid + form.saleAmount} onChange={handleChange}  disabled={true} />
            </div>
          </div>

          {/* Paid */}
          <div>
            <div className={styles.fieldLabel}>Paid</div>
            <div className={styles.fieldWrapper}>
              <IconBuilding />
              <input className={styles.fieldInput} type="text" name="paid" disabled={mode === "edit"} 
                placeholder="0" value={form.paid} onChange={handleChange} />
            </div>
          </div>
  
          {/* Actual Amount */}
          <div>
            <div className={styles.fieldLabel}>Actual Amount</div>
            <div className={styles.fieldWrapper}>
              <IconBuilding />
              <input className={styles.fieldInput} type="text" name="actualAmount"  disabled={true} 
                placeholder="0" value={form.actualAmount} onChange={handleChange} />
            </div>
          </div>
 
          {/* Sale Amount */}
          <div>
            <div className={styles.fieldLabel}>Sale Amount</div>
            <div className={styles.fieldWrapper}>
              <IconBuilding />
              <input className={styles.fieldInput} type="text" name="saleAmount"  disabled={true} 
                placeholder="0" value={form.saleAmount} onChange={handleChange} />
            </div>
          </div>


        </div>
 
        {/* ── Sales section (full width) ── */}
        <div className={styles.salesSection}>
           <div className={styles.salesHeader}>
            <div className={styles.fieldLabel} style={{ marginBottom: 0 }}>Sales</div>
            {mode === "create" &&<button className={styles.addRowBtn} onClick={addSalesRow}>
              <IconPlus /> Add
            </button>}
          </div>
 
          {form.sales.length === 0 && (
            <div className={styles.salesEmpty}>No sales added yet. Click <strong>+ Add</strong> to begin.</div>
          )}
 
          {/* column headers */}
          {form.sales.length > 0 && (
            <div className={styles.salesColHeaders}>
              <span>Product / Service</span>
              <span>Qty</span>
              <span>Sales Price</span>
              <span />
            </div>
          )}
 
          <div className={styles.salesRows}>
            {form.sales.map((row, idx) => (
              <SalesRow
                key={idx}
                row={row}
                onChange={(updated) => updateSalesRow(idx, updated)}
                onRemove={() => removeSalesRow(idx)}
              />
            ))}
          </div>
        </div>
 
        {/* actions */}
        {mode === "create" && <div className={styles.modalActions}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            {mode === "create" ? "Create Transaction →" : "Save Changes →"}
          </button>
        </div>}
      </div>
    </div>
  );
}

/* ──────────── Main page ──────────── */
export default function Transactions() {
  const [rows, setRows]         = useState([]);


  const [modal, setModal]       = useState(null); 
  console.log(modal)

  const openCreate = () => setModal({ mode: 'create' });
  const openEdit   = (row) => setModal({ mode: 'edit', row });
  const closeModal = () => setModal(null);


    useEffect(() => {
      const controller = new AbortController();
      (async () => {
        try {
          const {transactions} = await protoGet("/transactions", transaction.TransactionList, controller)
        console.log(transactions)
          setRows(transactions)

        } catch (error) {
        if (error.name === "CanceledError" || error.code === "ERR_CANCELED") return;
        console.error(error);
  
        }
      })()
      return () => controller.abort()
    }, [])


  const handleSave = async(form) => {
    console.log(form)
    if (modal.mode === 'create') {
        
      const {id} = await protoPost("/transaction", transaction.TransactionPost, transaction.PostResponse, form)
      setRows((prev) => [...prev, { ...form, id} ]);
    } else {
    //   const response = await protoPutt(`/line/${modal.row.id}`, line.PostLine, line.Line, form)
      // setRows((prev) => prev.map((r) => (r.id === modal.row.id ? response : r)));
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
          Transaction <span>Management</span>
        </div>

        <button className={styles.createBtn} onClick={openCreate}>
          <IconPlus /> Create Transaction
        </button>
      </div>

      {/* Table */}
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Line Code</th>
              <th>Cus Code</th>
              <th>saleA mount</th>
              <th>paid</th>
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
                  <td>{row.lineCode}</td>
                  <td>{row.cusCode}</td>
                  <td>{row.saleAmount}</td>
                  <td>{row.paid}</td>
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
        <TransactionModal
          mode={modal.mode}
          initialData={modal.mode === 'edit' ? { 
            lineCode: modal.row.lineCode, 
            cusName: modal.row.cusName,
            cusCode: modal.row.cusCode, 
            sales: modal.row.sales,
            actualAmount: modal.row.actualAmount,
            saleAmount: modal.row.saleAmount,
            debt: modal.row.debt,
            paid: modal.row.paid,            
            // pedingDebt: modal.row.pedingDebt
          } : emptyForm}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
}