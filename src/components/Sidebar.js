'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/sidebar.module.css';
import { useTheme } from 'next-themes';


const navGroups = [
  {
    label: 'Overview',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        ),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        badge: 'New',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        id: 'users',
        label: 'Users',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Content',
    items: [
      {
        id: 'projects',
        label: 'Projects',
        badge: '4',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
      },
      {
        id: 'timeline',
        label: 'Timeline',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
      },
      {
        id: 'messages',
        label: 'Messages',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'System',
    items: [
      {
        id: 'settings',
        label: 'Settings',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.07 4.93A10 10 0 0 1 21.5 9.5l-2.5.5a7 7 0 0 0-1.7-3.07l1.77-2zM4.93 4.93L6.7 6.93A7 7 0 0 0 5 9.93l-2.5-.5A10 10 0 0 1 4.93 4.93zM19.07 19.07L17.3 17.07A7 7 0 0 0 19 14.07l2.5.5A10 10 0 0 1 19.07 19.07zM4.93 19.07A10 10 0 0 1 2.5 14.5l2.5-.5a7 7 0 0 0 1.7 3.07l-1.77 2z" />
          </svg>
        ),
      },
    ],
  },
];

export default function Sidebar() {
  const [active, setActive] = useState('dashboard');
  const { resolvedTheme , setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeClass = mounted && resolvedTheme ? styles[resolvedTheme] : '';

  return (
    <aside className={`${styles.sidebar} ${themeClass}`}>
      {/* Logo */}
      <div className={styles.logoArea}>
        <div className={styles.logoIcon}>⊙</div>
        <span className={styles.logoName}>Luminary</span>
      </div>

      {/* Nav Groups */}
      {navGroups.map((group) => (
        <div key={group.label} className={styles.section}>
          <span className={styles.sectionLabel}>{group.label}</span>
          {group.items.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
              onClick={() => setActive(item.id)}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {item.label}
              {item.badge && <span className={styles.navBadge}>{item.badge}</span>}
            </button>
          ))}
        </div>
      ))}
      {/* <div
        className={styles.theme}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme}
      </div> */}
      {/* User */}
      <div className={styles.bottom}>
        <button className={styles.userChip}>
          <div className={styles.avatar}>PS</div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>JeyaPrakash</div>
            <div className={styles.userRole}>Pro Plan</div>
          </div>
          <svg className={styles.dotsIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
