"use client";

import axiosInstance from "@/utils/axios";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { line } from "@/proto";
import { protoGet } from "@/utils/protoAPI";


const metrics = [
  { key: "stock",   label: "Sales",  value: "₹0" },
  { key: "sales",   label: "Income", value: "₹0" },
  { key: "revenue", label: "Revenue",      value: "₹0"   },
  { key: "debt",    label: "Debt",         value: "₹0"   },
];
 
const summaryStats = [
  { label: "Net Margin",   value: "22.4%" },
  { label: "Transactions", value: "1,248" },
  { label: "Active Items", value: "386"   },
  { label: "Customers",    value: "94"    },
];

export default function Home1() {



const [values, setValues] = useState({})


    useEffect(() => {
      const controller = new AbortController();
      (async () => {
        try {
          const data = await protoGet("/dashboard", line.Dashboard, controller)
          const a = []
          a.push(data.sales)
          a.push(data.income)
          a.push(data.revenue)
          a.push(data.sales)
          setValues(a)
        // setMetrics(prev => prev[])
        // setData(data)

        } catch (error) {
        if (error.name === "CanceledError" || error.code === "ERR_CANCELED") return;
        console.error(error);
  
        }
      })()
      return () => controller.abort()
    }, [])


  return (
 <div className={styles.mainn}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Luminary › Overview</p>
        </div>
        <span className={styles.badge}>Mar 2026</span>
      </div>
 
      {/* Metric Cards */}
      <div className={styles.grid}>
        {metrics.map((m, i) => (
          <div key={i} className={`${styles.card} ${styles[`card_${m.key}`]}`}>
            <div className={`${styles.glow} ${styles[`glow_${i}`]}`} />
            <p className={styles.cardLabel}>{m.label}</p>
            <p className={styles.cardValue}>{values[i].toLocaleString()}</p>
          </div>
        ))}
      </div>
 
      {/* Bottom summary bar */}
      {/* <div className={styles.bottomBar}>
        {summaryStats.map((s, i) => (
          <div key={s.label} className={styles.statGroup}>
            {i > 0 && <div className={styles.divider} />}
            <div className={styles.stat}>
              <p className={styles.statLabel}>{s.label}</p>
              <p className={styles.statValue}>{s.value}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}