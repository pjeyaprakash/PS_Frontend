'use client';

import { useState, useCallback, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
// import { useStock } from '../../app/StockContext';
import styles from './createStock.module.css';

import { category, api, product } from "@/proto/index";
import { protoGet, protoPost, protoPut } from '@/utils/protoAPI';
import { ClientPageRoot } from 'next/dist/client/components/client-page';


// let k = 1;
const CATEGORIES = ['Gown', 'Casual', 'Formal', 'Party Wear', 'Ethnic', 'Western', 'Bridal', 'Co-ord Set'];

// function genId() { return Math.random().toString(36).slice(2, 9); }

/* ── cartesian product of N arrays → all combinations ── */
function cartesian(arrays) {
  let result = [[]];

  for (const arr of arrays) {
    const next = [];

    for (const prev of result) {
      for (const item of arr) {
        next.push([...prev, item]);
      }
    }
    result = next;
  }
  return result;
}

function variantKey(attrs) {
  return Object.entries(attrs)
    .sort(([a],[b]) => a.localeCompare(b))
    .map(([,v]) => v)
    .join(':');
}



export default function CreateStock({ editItem = null }) {


    const [attrGroups, setAttrGroups] = useState([]);

    const [editMode, setEditMode] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const {categories} = await protoGet("/category", category.CategoryGetResponse, controller)
              const groups = categories.map(pg => {
                let values = []
                if (editItem) {
                  values = pg.value.filter(val =>
                    editItem.variants.some(obj => obj.keys.includes(val))
                  );
                }
                return {
        ...pg,
        values,
        customInput: ''}
      });

      setAttrGroups(groups);
      } catch (error) {
      if (error.name === "CanceledError" || error.code === "ERR_CANCELED") return;
      console.error(error);

      }
    })()
    return () => controller.abort()
  }, [])




  const [form, setForm] = useState({
    id: editItem?.id || '',
    name: editItem?.name || '', 
    category: editItem?.category || '', 
     description: editItem?.description || '',
  });


  const [variants, setVariants]     = useState(editItem?.variants || []);

  const [showAddGroup, setShowAddGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupInput, setNewGroupInput] = useState('');

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(null);


  /* ── recompute after every attribute change ── */
const recompute = useCallback((groups) => {

  const active = groups.filter(g => g.values.length > 0);


  if (active.length === 0) {
    setVariants([]);
    return;
  }

  const arrays = active.map(g => g.values);
  const combos = cartesian(arrays);
  setVariants(prev => {

    const prevMap = new Map();

    for (const v of prev) {
      prevMap.set(variantKey(v.attrs), {...v, keys: Object.values(v.attrs)});
    }

    const next = new Array(combos.length);

    for (let i = 0; i < combos.length; i++) {

      const combo = combos[i];
      const attrs = {};

      for (let j = 0; j < active.length; j++) {
        attrs[active[j].category] = combo[j];
      }

      const id = variantKey(attrs);
      const newKeys = Object.values(attrs);


      const result = Array.from(prevMap.keys()).reduce((best, key) => {
        const count = newKeys.filter(v => prevMap.get(key).keys.includes(v)).length;
        return count > best.count ? { key, count } : best;
      }, { key: null, count: 0 });

      const available = result.count === 0 ? null : result.key;

      if(available) {
        next[i] = {...prevMap.get(available), id: id, attrs: attrs, keys: newKeys};
        prevMap.delete(available);
      } else {
        next[i] = {
          id: id,
          attrs,
          qty: 0,
          name: "",
          price: 0,
          value: 0,
          keys: newKeys,
        };
      }

    }

    return next;

  });

}, []);

  /* ── toggle a preset value in/out ── */
  const toggleValue = (groupKey, value) => {
    setAttrGroups(prev => {
      const next = prev.map(g => {
        if (g.id !== groupKey) return g;
        const exists  = g.values.includes(value);
        const values  = exists
          ? (g.values.filter(v => v !== value))
          : [...g.values, value];
        return { ...g, values };
      });
      recompute(next);
      return next;
    });
  };


  const apiCall = async (id, value) => {
   const {success} = await protoPut("/add-category-value", category.AddCategoryValueRequest, {id, value} )
  }

  /* ── add typed custom value ── */
const addCustomValue = async (groupKey) => {

  let newVal = "";

  await setAttrGroups(prev => {

    const next = prev.map(g => {

      if (g.id !== groupKey) return g;

      newVal = g.customInput.trim().toLowerCase();

      if (!newVal) return g;

      if (g.values.includes(newVal))
        return { ...g, customInput: '' };

      return {
        ...g,
        values: [...g.values, newVal],
        customInput: ''
      };
    });

    recompute(next);

    return next;
  });
  await apiCall(groupKey, newVal);
};

  /* ── remove a selected value ── */
  const removeValue = (groupKey, value) => {
    setAttrGroups(prev => {
      const next = prev.map(g => {
        if (g.id !== groupKey) return g;
        return { ...g, values: g.values.filter(v => v !== value) };
      });
      recompute(next);
      return next;
    });
  };


  /* ── create new attribute group ── */
  const addCustomGroup = async () => {
    const name = newGroupName.trim().toLocaleLowerCase();
    if (!name) return;
    const values = newGroupInput.split(',').map(s => s.trim().toLocaleLowerCase()).filter(Boolean);

    const {id} = await protoPost("/category", category.AddCategoryRequest, api.PostResponse, {category: name, value:values})

    const newGroup = {
      id, category: name, 
      value: values, values,
      customInput: '', 
    };

    setAttrGroups(prev => {
      const next = [...prev, newGroup];
      recompute(next);
      return next;
    });
    setNewGroupName(''); setNewGroupInput(''); setShowAddGroup(false);
  };


  const setQty = (id, val) =>
    setVariants(prev => prev.map(v => v.id === id ? { ...v, qty: Number(val), value: val * v.price} : v));
  const setName = (id, val) =>
    setVariants(prev => prev.map(v => v.id === id ? { ...v, name: val } : v));

  const setPrice = (id, val) =>
    setVariants(prev => prev.map(v => v.id === id ? { ...v, price: Number(val) , value: val * v.qty} : v));

  const totalQty  = variants.reduce((s, v) => s + v.qty, 0);
  const totalVal  = variants.reduce((s, v) => s + v.qty * v.price, 0) 
  const activeGrps = attrGroups.filter(g => g.values.length > 0);


  /* ── submit ── */
  const handleSubmit = async () => {

    if (editItem && !editMode) {
      setEditMode(true);
      return;
    }

    if (!form.name || !form.category) return alert('Name and Category are required.');
    // const item = {
    //   ...form, price: Number(form.price), cost: Number(form.cost), variants,
    //   status: variants.length === 0 ? 'draft'
    //     : variants.some(v => v.qty > 0 && v.qty < 5) ? 'low'
    //     : variants.every(v => v.qty === 0) ? 'draft' : 'active',
    // };
    try {
      let res;
      if (editItem) res = await protoPut("/product", product.UpdateProductRequest, {id: form.id, name: form.name, description: form.description, category: form.category})
      else res = await protoPost("/product", product.Product, api.PostResponse, {...form, total_quantity:totalQty, total_value: totalVal, variant_count: variants.length, variants})
      console.log(res)
    } catch (error) {
      console.error(error);
    }
    // if (editItem) updateItem(editItem.id, item);
    // else addItem(item);
    // setToast(true);
    // setTimeout(() => { setToast(false); router.push('/stock'); }, 1600);
  };

  const saveEditedVariants = async () => {
    try {
      console.log("selectedVariantIndex")
      console.log("selectedVariantIndex", selectedVariantIndex)
      
      if (selectedVariantIndex === null || selectedVariantIndex === undefined) return;
      console.log(variants[selectedVariantIndex])
      const {success} = await protoPut("/variants", product.Variant, variants[selectedVariantIndex])
      if (success) setSelectedVariantIndex(null);
      else {console.error("erkkkror", error)}
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>{editItem ? 'Edit' : 'Create'} <em>Stock</em></h1>
          {/* <p className={styles.pageSubtitle}>
            Select values from any attribute — variants generate instantly from your picks
          </p> */}
        </div>
        <div className={styles.headerActions}>
          <button className={styles.btnSecondary} onClick={() => router.push('/home/stock')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back
          </button>
          {editMode && <button className={styles.btnSecondary} onClick={() => {setEditMode(false)
             setSelectedVariantIndex(null)}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Cancel
          </button>}
          <button className={styles.btnPrimary} onClick={handleSubmit}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {editItem ? editMode ? 'Update Stock':'Edit' : 'Save Stock'}
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
              <input className={styles.input} placeholder="e.g. Silk Evening Gown" disabled={!editMode && editItem}
                value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>
            {/* <div className={styles.field}>
              <label className={styles.label}>SKU Code</label>
              <input className={styles.input} placeholder="e.g. SEG-001"
                value={form.sku} onChange={e => setForm(f => ({ ...f, sku: e.target.value }))} />
            </div> */}
          </div>
          <div className={styles.row} style={{ marginTop: 14 }}>
            <div className={styles.field}>
              <label className={styles.label}>Category <span className={styles.required}>*</span></label>
              <select className={styles.select} value={form.category} disabled={!editMode && editItem} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                <option value="">Select category…</option>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Description</label>
              <input className={styles.input} placeholder="Brief description (optional)" disabled={!editMode && editItem}
                value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
            </div>
          </div>
        </div>

        {/* ── Variant Builder ── */}
        { (editMode || !editItem) && <div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>🎨</div>
              <div>
                <div className={styles.cardTitle}>Variant Builder</div>
                <div className={styles.cardSubtitle}>Pick values from any group — variants auto-generate instantly</div>
              </div>
            </div>


            {/* Attribute groups */}
            {attrGroups.map(group => (
              <div key={group.id} className={styles.attrSection}>
                <div className={styles.attrTitleRow}>
                  <span className={styles.attrTitle}> {group.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {group.values.length > 0 && (
                      <span className={styles.attrCount}>{group.values.length} selected</span>
                    )}

                  </div>
                </div>

                <div className={styles.attrRow}>
                  {/* Preset options */}
                  {group.value.map(preset => {
                    const isSelected =  group.values.includes(preset);
                    return (
                      <div key={preset}
                        className={`${styles.attrPill} ${isSelected ? styles.selected : ''}`}
                        onClick={() => toggleValue(group.id, preset)}>
                        {preset}
                        {isSelected && (
                          <button className={styles.pillRemove}
                            onClick={e => { e.stopPropagation(); removeValue(group.id, preset); }}>×</button>
                        )}
                      </div>
                    );
                  })}

                  {/* Extra custom values (not in presets) */}
                  {group.values
                    .filter(v => !group.value.includes(v))
                    .map(v => (
                      <div key={v}
                        className={`${styles.attrPill} ${styles.selected}`}>
                        { v}
                        <button className={styles.pillRemove}
                          onClick={() => removeValue(group.id, v)}>×</button>
                      </div>
                    ))
                  }

                  {/* Custom input */}
                  <div className={styles.addAttrInput}>
                    <input
                      placeholder={`Add ${group.category}…`}
                      value={group.customInput}
                      onChange={e => setAttrGroups(prev => prev.map(g => g.id === group.id ? { ...g, customInput: e.target.value } : g))}
                      onKeyDown={e => e.key === 'Enter' && addCustomValue(group.id)}
                    />
                    <button className={styles.btnGhost} onClick={() => addCustomValue(group.id)}>
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
                    <span className={styles.addGroupFormTitle}> New Attribute Group</span>
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
        </div>}

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
                      <th>Specs</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Value</th>
                      {(!editItem || editMode) && <th>Actions</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((v, i )=> (
                      
                      <tr key={v.id}>
                        <td>
                          <span className={styles.variantBadge}>
                            {Object.values(v.attrs).join(', ')}
                          </span>
                        </td>


                        <td>
                          <div className={styles.qtyWrap}>
                            <input className={styles.qtyInput} type="text" min={0} disabled={ editItem && selectedVariantIndex !== i}
                              value={v.name} onChange={e => setName(v.id, e.target.value)} />
                          </div>
                        </td>

                        <td>
                          <div className={styles.qtyWrap}>
                            <input className={styles.qtyInput} type="number" min={0} disabled={ editItem && selectedVariantIndex !== i}
                              value={v.qty} onChange={e => setQty(v.id, e.target.value)} onClick={() =>  { 
                                if (v.qty != 0) return;
                                setVariants(prev => prev.map(p => p.id === v.id ? { ...p, qty: "" } : p))} }/>
                          </div>
                        </td>

                        <td>
                            <input className={styles.qtyInput} type="number" min={0} disabled={ editItem && selectedVariantIndex !== i}
                              value={v.price} onChange={e => setPrice(v.id, e.target.value)} />
                        </td>

                        <td>
                            <input className={styles.qtyInput} type="number" min={0}
                              value={v.price *  v.qty} readOnly/>
                        </td>

                        <td>
                          {!editItem ? (<button className={styles.btnDanger}
                            onClick={() => setVariants(prev => prev.filter(x => x.id !== v.id))}
                            title="Remove variant">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6"/>
                              <path d="M19 6l-1 14H6L5 6"/>
                              <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
                            </svg>
                          </button>) : ( (editMode && selectedVariantIndex === i) ?
                          (<div>
                              <button className={styles.btnDanger}
                                onClick={() => setSelectedVariantIndex(null)}
                                title="Cancel Edit">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <line x1="18" y1="6" x2="6" y2="18"/>
                                  <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                              </button>
                              <button className={styles.btnDanger}
                                onClick={saveEditedVariants}
                                // onClick={() => {}}
                                title="Save Changes">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="20 6 9 17 4 12"/>
                                </svg>
                              </button>
                            </div>
                        ) : ( editMode &&
                          <div>
                              <button className={styles.btnDanger}
                                onClick={() => setSelectedVariantIndex(i)}
                                title="Edit Variant">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M3 21l3-1 12-12-2-2L4 18l-1 3z"/>
                                  <path d="M14 6l2 2"/>
                                </svg>
                              </button>


                          </div>
                        ))}
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
                  <div className={styles.summaryItem}>Value: <strong style={{ color: 'var(--accent)' }}>₹ {totalVal.toLocaleString('en-IN')}</strong></div>
                )}
                {/* {variants.some(v => v.qty > 0 && v.qty < 5) && (
                  <div className={styles.summaryItem} style={{ color: 'var(--accent-o)' }}>
                    ⚠ {variants.filter(v => v.qty > 0 && v.qty < 5).length} low stock
                  </div>
                )} */}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {/* <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, paddingBottom: 32 }}>
          <button className={styles.btnSecondary} onClick={() => router.push('/stock')}>Cancel</button>
          <button className={styles.btnPrimary} onClick={handleSubmit}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {editItem ? 'Update Stock' : 'Save Stock'}
          </button>
        </div> */}
      </div>


    </div>
  );
}
