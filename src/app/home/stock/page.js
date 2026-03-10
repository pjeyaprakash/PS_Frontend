"use client";
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';


export default function Stock() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [items, setItems] = useState([]);
//   const [variants, setVariants[];

  const totalUnits = items.reduce((s, i) => s + i.variants.reduce((a, v) => a + v.qty, 0), 0);
  const totalVal   = items.reduce((s, i) => s + i.variants.reduce((a, v) => a + v.qty * (i.cost || 0), 0), 0);
  const lowItems   = items.filter(i => i.status === 'low').length;

  const filtered = items.filter(item => {
    const q = search.toLowerCase();
    const matchQ = !q || item.name.toLowerCase().includes(q) || (item.sku || '').toLowerCase().includes(q);
    const matchF = filter === 'all' || item.status === filter;
    return matchQ && matchF;
  });

      const { resolvedTheme , setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeClass = mounted && resolvedTheme ? styles[resolvedTheme] : '';

    return (
        <div className={`${styles.page} ${themeClass}`}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>All <em>Stock</em></h1>
          {/* <p className={styles.subtitle}>{items.length} products · {totalUnits} total units</p> */}
        </div>
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => router.push('/home/stock/create')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Create Stock
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statEmoji}>📦</div>
          <div className={styles.statVal}>{items.length}</div>
          <div className={styles.statLbl}>Total Products</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statEmoji}>🔢</div>
          <div className={styles.statVal}>{totalUnits.toLocaleString()}</div>
          <div className={styles.statLbl}>Total Units</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statEmoji}>💰</div>
          <div className={styles.statVal}>₹{(totalVal / 1000).toFixed(1)}K</div>
          <div className={styles.statLbl}>Inventory Value</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statEmoji}>⚠️</div>
          <div className={styles.statVal}>{lowItems}</div>
          <div className={styles.statLbl}>Low Stock Items</div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterBar}>
        <div className={styles.filterSearch}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input placeholder="Search by name or SKU…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        {['all','active','low','draft'].map(f => (
          <button key={f} className={`${styles.filterPill} ${filter === f ? styles.active : ''}`}
            onClick={() => setFilter(f)}>
            {f === 'all' ? 'All' : f === 'active' ? '✓ Active' : f === 'low' ? '⚠ Low Stock' : '○ Draft'}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Variants</th>
              <th>Units</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className={styles.empty}>
                  <strong>No products found</strong>
                  {search ? `No results for "${search}"` : 'Click "Create Stock" to add your first product'}
                </td>
              </tr>
            ) : filtered.map(item => {
              const totalQty = item.variants.reduce((s, v) => s + v.qty, 0);
              const sizes  = [...new Set(item.variants.map(v => v.size))];
              const colors = [...new Set(item.variants.map(v => v.color))];

              return (
                <tr key={item.id} onClick={() => router.push(`/stock/${item.id}`)}>
                  <td>
                    <div className={styles.itemName}>{item.name}</div>
                    {item.sku && <div className={styles.itemSku}>{item.sku}</div>}
                  </td>
                  <td><span className={styles.itemCategory}>{item.category}</span></td>
                  <td>
                    <div className={styles.variantMinis}>
                      {sizes.slice(0,4).map(s => <span key={s} className={styles.mini}>{s}</span>)}
                      {sizes.length > 4 && <span className={styles.mini}>+{sizes.length - 4}</span>}
                      {colors.slice(0,2).map(c => <span key={c} className={styles.mini}>🎨 {c.split(' ')[0]}</span>)}
                    </div>
                  </td>
                  <td style={{ fontWeight: 600, color: 'var(--text)', fontSize: 14 }}>{totalQty}</td>
                  <td>
                    {item.price ? (
                      <div className={styles.priceVal}>₹{Number(item.price).toLocaleString('en-IN')}<span>MRP</span></div>
                    ) : <span style={{ color: 'var(--text-3)', fontSize: 12 }}>—</span>}
                  </td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[item.status] || ''}`}>
                      <span className={styles.statusDot} />
                      {item.status === 'active' ? 'Active' : item.status === 'low' ? 'Low Stock' : 'Draft'}
                    </span>
                  </td>
                  <td onClick={e => e.stopPropagation()}>
                    <div className={styles.rowActions}>
                      <button className={`${styles.actBtn} ${styles.edit}`}
                        onClick={() => router.push(`/stock/${item.id}`)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                        Edit
                      </button>
                      <button className={`${styles.actBtn} ${styles.del}`}
                        onClick={() => { if (confirm('Delete this item?')) console.log('deleted'); }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
                          <path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
                        </svg>
                        Del
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    
    )
}