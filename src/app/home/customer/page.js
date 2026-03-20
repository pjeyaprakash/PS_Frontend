"use client";
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { product } from "@/proto/index";
import { protoGet } from '@/utils/protoAPI';

export default function Customer() {
  const [search, setSearch] = useState('');
  // const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState([]);

    useEffect(() => {
      const controller = new AbortController();
      (async () => {
        try {
          const {products} = await protoGet("/products/10/0", product.ProductListResponse, controller)
        //         const groups = categories.map(pg => ({
        //   ...pg,
        //   values: [],
        //   customInput: ''
        // }));
        // setAttrGroups(groups);
        console.log("products", products)
        setProducts(products)

        } catch (error) {
        if (error.name === "CanceledError" || error.code === "ERR_CANCELED") return;
        console.error(error);
  
        }
      })()
      return () => controller.abort()
    }, [])

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
          <button className={styles.btnPrimary} onClick={() => router.push('/home/customer/create')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            New Customer
          </button>
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

      </div>

      {/* Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              {/* <th>Variants</th> */}
              <th>Units</th>
              <th>Value</th>
              <th>Variants</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={7} className={styles.empty}>
                  <strong>No products found</strong>
                  {search ? `No results for "${search}"` : 'Click "Create Stock" to add your first product'}
                </td>
              </tr>
            ) : products.map(item => {
              // const totalQty = item.variants.reduce((s, v) => s + v.qty, 0);
              // const sizes  = [...new Set(item.variants.map(v => v.size))];
              // const colors = [...new Set(item.variants.map(v => v.color))];

              return (
                <tr key={item.id} onClick={() => router.push(`/home/stock/${item.id}`)}>
                  <td>
                    <div className={styles.itemName}>{item.name}</div>
                    {item.sku && <div className={styles.itemSku}>{item.sku}</div>}
                  </td>
                  <td><span className={styles.itemCategory}>{item.category}</span></td>
                  {/* <td>
                    <div className={styles.variantMinis}>
                      {sizes.slice(0,4).map(s => <span key={s} className={styles.mini}>{s}</span>)}
                      {sizes.length > 4 && <span className={styles.mini}>+{sizes.length - 4}</span>}
                      {colors.slice(0,2).map(c => <span key={c} className={styles.mini}>🎨 {c.split(' ')[0]}</span>)}
                    </div>
                  </td> */}
                  <td style={{ fontWeight: 600, color: 'var(--text)', fontSize: 14 }}>{item.totalQuantity}</td>
                  <td>
                    {item.totalValue ? (
                      <div className={styles.priceVal}>₹{Number(item.totalValue).toLocaleString('en-IN')}</div>
                    ) : <span style={{ color: 'var(--text-3)', fontSize: 12 }}>—</span>}
                  </td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[item.status] || ''}`}>
                      <span className={styles.statusDot} />
                      {item.variantCount}
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