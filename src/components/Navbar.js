'use client';

import styles from '@/styles/navbar.module.css';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';


export default function Navbar({ pageTitle = 'Dashboard', breadcrumb = ['Luminary', 'Overview'] }) {
  const { resolvedTheme , setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeClass = mounted && resolvedTheme ? styles[resolvedTheme] : '';
    return (
    <nav className={`${styles.navbar} ${themeClass}`}>
      {/* Title */}
      <div className={styles.titleBlock}>
        <div className={styles.pageTitle}>{pageTitle}</div>
        <div className={styles.breadcrumb}>
          {breadcrumb.map((crumb, i) => (
            <span key={crumb}>
              {crumb}
              {i < breadcrumb.length - 1 && (
                <span className={styles.breadcrumbSep}> › </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Search */}
      {/* <div className={styles.searchBar}>
        <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input placeholder="Search anything…" />
      </div> */}

      {/* Actions */}
      <div className={styles.actions}>
        <ThemeToggle />

        {/* Notifications */}
        <button className={styles.iconBtn} title="Notifications" aria-label="Notifications">
          <div className={styles.notifDot} />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        {/* Help */}
        {/* <button className={styles.iconBtn} title="Help" aria-label="Help">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </button> */}

        {/* Avatar */}
        <button className={styles.avatarBtn} title="Profile" aria-label="Profile">
          JD
        </button>
      </div>
    </nav>
  );
}
