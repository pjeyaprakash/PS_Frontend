
"use client";
// import { cookies } from "next/headers";
import Sidebar from "@/components/Sidebar";
// import styles from '@/styles/sidebar.module.css';
import styles from "./page.module.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";


export default function HomeLayout({ children }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeClass = mounted && resolvedTheme ? styles[resolvedTheme] : "";

  return (
    <div className={`${styles.main} ${themeClass}`}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
       <Sidebar />
       <div className={styles.home}>
        <Navbar />
        {children}
       </div>
      
    </div>
  )
}
