"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "@/styles/themeToggle.module.css";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeClass = mounted && resolvedTheme ? resolvedTheme : '';

  return (
    <button
      onClick={() =>
        setTheme(themeClass === "dark" ? "light" : "dark")
      }
      className={styles.toggle}
      aria-label="Toggle theme"
    >
    <span  className={`${styles.thumb} ${themeClass === 'dark' ? styles.thumbDark : styles.thumbLight}`}>
      {themeClass === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}