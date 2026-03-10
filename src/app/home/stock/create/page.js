'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useStock } from '../../app/StockContext';
import styles from './createStock.module.css';

import { category } from "@/proto/index";
import { protoGet } from '@/utils/protoAPI';

/* ─── preset attribute groups ─────────────────────────────── */
const PRESET_GROUPS = [
  {
    key: 'size', label: 'Size', icon: '👗', type: 'text',
    presets: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Free Size'],
  },
  {
    key: 'color', label: 'Colour', icon: '🎨', type: 'color',
    presets: [
      { name: 'Midnight Black', hex: '#1a1a2e' },
      { name: 'Ivory White',    hex: '#faf8f0' },
      { name: 'Blush Pink',     hex: '#f4a7b9' },
      { name: 'Sky Blue',       hex: '#87ceeb' },
      { name: 'Deep Burgundy',  hex: '#7c1c33' },
      { name: 'Forest Green',   hex: '#2d5a27' },
      { name: 'Champagne Gold', hex: '#d4af7a' },
      { name: 'Navy Blue',      hex: '#1e2a5e' },
      { name: 'Coral Red',      hex: '#e85d4a' },
    ],
  },
  {
    key: 'cloth', label: 'Cloth Type', icon: '🧵', type: 'text',
    presets: ['Pure Silk', 'Linen', 'Cotton', 'Velvet', 'Chiffon', 'Georgette', 'Polyester', 'Satin', 'Denim', 'Rayon'],
  },
];

const CATEGORIES = ['Gown', 'Casual', 'Formal', 'Party Wear', 'Ethnic', 'Western', 'Bridal', 'Co-ord Set'];

function genId() { return Math.random().toString(36).slice(2, 9); }

/* ── cartesian product of N arrays → all combinations ── */
function cartesian(arrays) {
  if (arrays.length === 0) return [[]];
  const [first, ...rest] = arrays;
  const restProduct = cartesian(rest);
  return first.flatMap(item => restProduct.map(combo => [item, ...combo]));
}

/* ── build variants from active attribute groups ── */
function buildVariants(attrGroups) {
  const active = attrGroups.filter(g => g.values.length > 0);
  if (active.length === 0) return [];
  const combos = cartesian(active.map(g => g.values));
  return combos.map(combo => {
    const attrs = {};
    active.forEach((g, i) => { attrs[g.key] = combo[i]; });
    return { id: genId(), attrs, qty: 0 };
  });
}

/* ── merge: preserve qty for matching variants ── */
function mergeVariants(newVars, prevVars) {
  return newVars.map(nv => {
    const match = prevVars.find(pv =>
      JSON.stringify(pv.attrs) === JSON.stringify(nv.attrs)
    );
    return match ? { ...nv, qty: match.qty } : nv;
  });
}

function initGroups() {
  return PRESET_GROUPS.map(pg => ({
    ...pg, values: [], customInput: '', customHex: '#6b9fff',
  }));
}

export default function CreateStock({ editItem = null }) {
  const router = useRouter();
//   const { addItem, updateItem } = useStock();


  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const data = await protoGet("/category", category.CategoryGetResponse, controller)

        console.log(data)
      } catch (error) {
      if (error.name === "CanceledError" || error.code === "ERR_CANCELED") return;
      console.error(error);

      }
    })()
    return () => controller.abort()
  }, [])




  const [form, setForm] = useState({
    name: editItem?.name || '', sku: editItem?.sku || '',
    category: editItem?.category || '', price: editItem?.price || '',
    cost: editItem?.cost || '', desc: editItem?.desc || '',
  });

  const [attrGroups, setAttrGroups] = useState(initGroups);
  const [variants, setVariants]     = useState(editItem?.variants || []);

  const [showAddGroup, setShowAddGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupInput, setNewGroupInput] = useState('');
  const [toast, setToast] = useState(false);

  /* ── recompute after every attribute change ── */
  const recompute = useCallback((groups) => {
    const newVars = buildVariants(groups);
    setVariants(prev => mergeVariants(newVars, prev));
  }, []);

  /* ── toggle a preset value in/out ── */
  const toggleValue = (groupKey, value) => {
    setAttrGroups(prev => {
      const next = prev.map(g => {
        if (g.key !== groupKey) return g;
        const isColor = g.type === 'color';
        const exists  = isColor ? g.values.some(v => v.name === value.name) : g.values.includes(value);
        const values  = exists
          ? (isColor ? g.values.filter(v => v.name !== value.name) : g.values.filter(v => v !== value))
          : [...g.values, value];
        return { ...g, values };
      });
      recompute(next);
      return next;
    });
  };

  /* ── add typed custom value ── */
  const addCustomValue = (groupKey) => {
    setAttrGroups(prev => {
      const next = prev.map(g => {
        if (g.key !== groupKey) return g;
        const raw = g.customInput.trim();
        if (!raw) return g;
        const isColor = g.type === 'color';
        const newVal  = isColor ? { name: raw, hex: g.customHex } : raw;
        const already = isColor ? g.values.some(v => v.name === raw) : g.values.includes(raw);
        if (already) return { ...g, customInput: '' };
        return { ...g, values: [...g.values, newVal], customInput: '' };
      });
      recompute(next);
      return next;
    });
  };

  /* ── remove a selected value ── */
  const removeValue = (groupKey, value) => {
    setAttrGroups(prev => {
      const next = prev.map(g => {
        if (g.key !== groupKey) return g;
        const isColor = g.type === 'color';
        return { ...g, values: isColor ? g.values.filter(v => v.name !== value.name) : g.values.filter(v => v !== value) };
      });
      recompute(next);
      return next;
    });
  };

  /* ── delete entire custom group ── */
  const deleteGroup = (groupKey) => {
    setAttrGroups(prev => {
      const next = prev.filter(g => g.key !== groupKey);
      recompute(next);
      return next;
    });
  };

  /* ── create new attribute group ── */
  const addCustomGroup = () => {
    const name = newGroupName.trim();
    if (!name) return;
    const key    = name.toLowerCase().replace(/\s+/g, '_') + '_' + genId();
    const values = newGroupInput.split(',').map(s => s.trim()).filter(Boolean);
    const newGroup = {
      key, label: name, icon: '🏷️', type: 'text',
      presets: values, values,
      customInput: '', customHex: '#6b9fff', isCustom: true,
    };
    setAttrGroups(prev => {
      const next = [...prev, newGroup];
      recompute(next);
      return next;
    });
    setNewGroupName(''); setNewGroupInput(''); setShowAddGroup(false);
  };

  /* ── qty helpers ── */
  const adjQty = (id, delta) =>
    setVariants(prev => prev.map(v => v.id === id ? { ...v, qty: Math.max(0, v.qty + delta) } : v));
  const setQty = (id, val) =>
    setVariants(prev => prev.map(v => v.id === id ? { ...v, qty: Math.max(0, Number(val) || 0) } : v));

  const totalQty  = variants.reduce((s, v) => s + v.qty, 0);
  const totalVal  = form.cost ? variants.reduce((s, v) => s + v.qty * Number(form.cost), 0) : 0;
  const activeGrps = attrGroups.filter(g => g.values.length > 0);

  const getLabel = (key, val) => {
    const g = attrGroups.find(g => g.key === key);
    return g?.type === 'color' ? (val?.name || val) : val;
  };
  const getHex = (key, val) => {
    const g = attrGroups.find(g => g.key === key);
    return g?.type === 'color' ? val?.hex : null;
  };

  /* ── submit ── */
  const handleSubmit = () => {
    if (!form.name || !form.category) return alert('Name and Category are required.');
    const item = {
      ...form, price: Number(form.price), cost: Number(form.cost), variants,
      status: variants.length === 0 ? 'draft'
        : variants.some(v => v.qty > 0 && v.qty < 5) ? 'low'
        : variants.every(v => v.qty === 0) ? 'draft' : 'active',
    };
    // if (editItem) updateItem(editItem.id, item);
    // else addItem(item);
    setToast(true);
    setTimeout(() => { setToast(false); router.push('/stock'); }, 1600);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>{editItem ? 'Edit' : 'Create'} <em>Stock</em></h1>
          <p className={styles.pageSubtitle}>
            Select values from any attribute — variants generate instantly from your picks
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.btnSecondary} onClick={() => router.push('/stock')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back
          </button>
          <button className={styles.btnPrimary} onClick={handleSubmit}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {editItem ? 'Update Stock' : 'Save Stock'}
          </button>
        </div>
      </div>

      <div className={styles.formGrid}>

        {/* ── Product Details ── */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>📝</div>
            <div>
              <div className={styles.cardTitle}>Product Details</div>
              <div className={styles.cardSubtitle}>Basic information about the product</div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Product Name <span className={styles.required}>*</span></label>
              <input className={styles.input} placeholder="e.g. Silk Evening Gown"
                value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>SKU Code</label>
              <input className={styles.input} placeholder="e.g. SEG-001"
                value={form.sku} onChange={e => setForm(f => ({ ...f, sku: e.target.value }))} />
            </div>
          </div>
          <div className={styles.row} style={{ marginTop: 14 }}>
            <div className={styles.field}>
              <label className={styles.label}>Category <span className={styles.required}>*</span></label>
              <select className={styles.select} value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                <option value="">Select category…</option>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Description</label>
              <input className={styles.input} placeholder="Brief description (optional)"
                value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value }))} />
            </div>
          </div>
          <div className={styles.row} style={{ marginTop: 14 }}>
            <div className={styles.field}>
              <label className={styles.label}>Selling Price (₹)</label>
              <div className={styles.inputWithIcon}>
                <span className={styles.inputIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </span>
                <input className={styles.input} type="number" placeholder="0.00"
                  value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Cost Price (₹)</label>
              <div className={styles.inputWithIcon}>
                <span className={styles.inputIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </span>
                <input className={styles.input} type="number" placeholder="0.00"
                  value={form.cost} onChange={e => setForm(f => ({ ...f, cost: e.target.value }))} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Variant Builder ── */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>🎨</div>
            <div>
              <div className={styles.cardTitle}>Variant Builder</div>
              <div className={styles.cardSubtitle}>Pick values from any group — variants auto-generate instantly</div>
            </div>
          </div>

          {/* Info tip */}
          <div className={styles.infoTip}>
            <span className={styles.infoIcon}>💡</span>
            <span>You can select from <strong>just one group</strong> or multiple — no requirement to fill all three. Add custom attributes like <em>Material</em>, <em>Warranty</em>, <em>Pattern</em> below.</span>
          </div>

          {/* Attribute groups */}
          {attrGroups.map(group => (
            <div key={group.key} className={styles.attrSection}>
              <div className={styles.attrTitleRow}>
                <span className={styles.attrTitle}>{group.icon} {group.label}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {group.values.length > 0 && (
                    <span className={styles.attrCount}>{group.values.length} selected</span>
                  )}
                  {group.isCustom && (
                    <button className={styles.btnDeleteGroup} onClick={() => deleteGroup(group.key)} title="Remove group">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className={styles.attrRow}>
                {/* Preset options */}
                {group.presets.map(preset => {
                  const isSelected = group.type === 'color'
                    ? group.values.some(v => v.name === preset.name)
                    : group.values.includes(preset);
                  return (
                    <div key={group.type === 'color' ? preset.name : preset}
                      className={`${styles.attrPill} ${isSelected ? styles.selected : ''}`}
                      onClick={() => toggleValue(group.key, preset)}>
                      {group.type === 'color' && <span className={styles.pillDot} style={{ background: preset.hex }} />}
                      {group.type === 'color' ? preset.name : preset}
                      {isSelected && (
                        <button className={styles.pillRemove}
                          onClick={e => { e.stopPropagation(); removeValue(group.key, preset); }}>×</button>
                      )}
                    </div>
                  );
                })}

                {/* Extra custom values (not in presets) */}
                {group.values
                  .filter(v => group.type === 'color'
                    ? !group.presets.some(p => p.name === v.name)
                    : !group.presets.includes(v))
                  .map(v => (
                    <div key={group.type === 'color' ? v.name : v}
                      className={`${styles.attrPill} ${styles.selected}`}>
                      {group.type === 'color' && <span className={styles.pillDot} style={{ background: v.hex }} />}
                      {group.type === 'color' ? v.name : v}
                      <button className={styles.pillRemove}
                        onClick={() => removeValue(group.key, v)}>×</button>
                    </div>
                  ))
                }

                {/* Custom input */}
                <div className={styles.addAttrInput}>
                  {group.type === 'color' && (
                    <input type="color" value={group.customHex} className={styles.colorPicker}
                      onChange={e => setAttrGroups(prev => prev.map(g => g.key === group.key ? { ...g, customHex: e.target.value } : g))} />
                  )}
                  <input
                    placeholder={group.type === 'color' ? 'Colour name…' : `Add ${group.label}…`}
                    value={group.customInput}
                    onChange={e => setAttrGroups(prev => prev.map(g => g.key === group.key ? { ...g, customInput: e.target.value } : g))}
                    onKeyDown={e => e.key === 'Enter' && addCustomValue(group.key)}
                  />
                  <button className={styles.btnGhost} onClick={() => addCustomValue(group.key)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* ── Add New Attribute Group ── */}
          <div className={styles.addGroupSection}>
            {!showAddGroup ? (
              <button className={styles.btnAddGroup} onClick={() => setShowAddGroup(true)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Add Custom Attribute
                <span className={styles.addGroupHint}>e.g. Material, Warranty, Pattern, Occasion…</span>
              </button>
            ) : (
              <div className={styles.addGroupForm}>
                <div className={styles.addGroupFormHeader}>
                  <span className={styles.addGroupFormTitle}>🏷️ New Attribute Group</span>
                  <button className={styles.btnDeleteGroup} onClick={() => setShowAddGroup(false)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Attribute Name</label>
                    <input className={styles.input} placeholder="e.g. Material, Warranty, Pattern"
                      value={newGroupName} onChange={e => setNewGroupName(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && document.getElementById('btn-create-grp').click()} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>
                      Initial Values
                      <span style={{ color: 'var(--text-3)', fontWeight: 400, textTransform: 'none', letterSpacing: 0, fontSize: '10px', marginLeft: 6 }}>(comma separated, optional)</span>
                    </label>
                    <input className={styles.input} placeholder="e.g. Cotton, Polyester, Wool"
                      value={newGroupInput} onChange={e => setNewGroupInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && document.getElementById('btn-create-grp').click()} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                  <button id="btn-create-grp" className={styles.btnPrimary} onClick={addCustomGroup} style={{ height: 38 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Create Attribute
                  </button>
                  <button className={styles.btnSecondary} onClick={() => { setShowAddGroup(false); setNewGroupName(''); setNewGroupInput(''); }} style={{ height: 38 }}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Variant Matrix ── */}
        <div className={styles.card}>
          <div className={styles.variantHeader}>
            <div className={styles.cardHeader} style={{ marginBottom: 0 }}>
              <div className={styles.cardIcon}>📦</div>
              <div>
                <div className={styles.cardTitle}>Variant Matrix</div>
                <div className={styles.cardSubtitle}>
                  {variants.length === 0
                    ? 'Select any attribute values above — variants appear here instantly'
                    : `${variants.length} variant${variants.length !== 1 ? 's' : ''} from ${activeGrps.length} attribute${activeGrps.length !== 1 ? 's' : ''}`}
                </div>
              </div>
            </div>
            {variants.length > 0 && <span className={styles.variantCount}>{variants.length} total</span>}
          </div>

          {variants.length === 0 ? (
            <div className={styles.emptyVariants}>
              <span style={{ fontSize: 36, display: 'block', marginBottom: 10 }}>🎛️</span>
              <strong>No variants generated yet</strong>
              <p style={{ marginTop: 6, lineHeight: 1.6 }}>
                Click any size, colour, or cloth value above.<br />
                Even selecting <em>just sizes</em> will generate variants immediately.
              </p>
            </div>
          ) : (
            <>
              <div className={styles.matrixWrap}>
                <table className={styles.matrix}>
                  <thead>
                    <tr>
                      {activeGrps.map(g => <th key={g.key}>{g.icon} {g.label}</th>)}
                      <th>Quantity</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map(v => (
                      <tr key={v.id}>
                        {activeGrps.map(g => {
                          const val   = v.attrs[g.key];
                          const hex   = getHex(g.key, val);
                          const label = getLabel(g.key, val);
                          return (
                            <td key={g.key}>
                              <span className={styles.variantBadge}>
                                {hex && <span className={styles.variantDot} style={{ background: hex }} />}
                                {label}
                              </span>
                            </td>
                          );
                        })}
                        <td>
                          <div className={styles.qtyWrap}>
                            <button className={styles.qtyBtn} onClick={() => adjQty(v.id, -1)}>−</button>
                            <input className={styles.qtyInput} type="number" min={0}
                              value={v.qty} onChange={e => setQty(v.id, e.target.value)} />
                            <button className={styles.qtyBtn} onClick={() => adjQty(v.id, +1)}>+</button>
                            {v.qty > 0 && v.qty < 5 && <span className={styles.lowBadge}>LOW</span>}
                          </div>
                        </td>
                        <td>
                          <button className={styles.btnDanger}
                            onClick={() => setVariants(prev => prev.filter(x => x.id !== v.id))}
                            title="Remove variant">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6"/>
                              <path d="M19 6l-1 14H6L5 6"/>
                              <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.summaryBar} style={{ marginTop: 16 }}>
                <div className={styles.summaryItem}>Variants: <strong>{variants.length}</strong></div>
                <div className={styles.summaryItem}>Total Units: <strong style={{ color: 'var(--accent)' }}>{totalQty}</strong></div>
                {totalVal > 0 && (
                  <div className={styles.summaryItem}>Value: <strong style={{ color: 'var(--accent)' }}>₹{totalVal.toLocaleString('en-IN')}</strong></div>
                )}
                {variants.some(v => v.qty > 0 && v.qty < 5) && (
                  <div className={styles.summaryItem} style={{ color: 'var(--accent-o)' }}>
                    ⚠ {variants.filter(v => v.qty > 0 && v.qty < 5).length} low stock
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, paddingBottom: 32 }}>
          <button className={styles.btnSecondary} onClick={() => router.push('/stock')}>Cancel</button>
          <button className={styles.btnPrimary} onClick={handleSubmit}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {editItem ? 'Update Stock' : 'Save Stock'}
          </button>
        </div>
      </div>

      {toast && (
        <div className={styles.toast}>
          ✓ Stock {editItem ? 'updated' : 'created'} successfully!
        </div>
      )}
    </div>
  );
}
