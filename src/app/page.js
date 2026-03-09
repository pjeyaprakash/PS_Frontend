"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
// import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useRouter } from 'next/navigation'
import { protoPost } from "@/utils/protoAPI";
import { auth } from "@/proto/index";


export default function Home() {

  const [remembered, setRemembered] = useState(false)  
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true);
  }, [])

  const [loginData, setLoginData ] = useState({
    email: "",
    password: "",
  })

  const router = useRouter();
  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }


  const handleLogin = async () => {
    try {
      const data = await protoPost("/login", auth.LoginRequest, auth.LoginResponse, loginData)

      if (data.success) toast.success("Login successful 🎉")
      else return toast.error("Invalid Password 😢")

      router.push("/home");
    } catch (error) {
      console.error(error)
      toast.error("No user found 😢")
    }
  }

  if (!mounted) return null

  return (
    <div className={`${styles.page} ${styles[theme]}`}>
      {/* Ambient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />


      <div
        className={styles.theme}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme}
      </div>

      <div className={styles.card}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoMark}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2L13 5.5V10.5L8 14L3 10.5V5.5L8 2Z"
                stroke="rgba(8,9,26,0.9)"
                strokeWidth="1.4"
                strokeLinejoin="round"
                fill="rgba(8,9,26,0.15)"
              />
              <circle cx="8" cy="8" r="2" fill="rgba(8,9,26,0.85)" />
            </svg>
          </div>
          <span className={styles.logoName}>Luminary</span>
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          Welcome <span className={styles.headingAccent}>back</span>
        </h1>
        <p className={styles.subheading}>Sign in to continue your journey</p>

        {/* Email */}
        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={loginData.email}
              name="email"
              onChange={handleInputChange}
            />
            <span className={styles.inputIcon}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Password */}
        <div className={styles.fieldDelayed}>
          <label className={styles.label}>Password</label>
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              value={loginData.password}
              onChange={handleInputChange}
              name="password"
            />
            <span className={styles.inputIcon}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
          </div>
        </div>

        {/* Remember / Forgot */}
        <div className={styles.row}>
          <label
            className={styles.remember}
            onClick={() => setRemembered((r) => !r)}
          >
            <div className={remembered ? styles.checkBoxOn : styles.checkBox}>
              {remembered && <div className={styles.checkMark} />}
            </div>
            <span className={styles.rememberText}>Remember me</span>
          </label>
          <button className={styles.forgot}>Forgot password?</button>
        </div>

        {/* Submit */}
        <button className={styles.btn} onClick={handleLogin}>Sign in →</button>

        {/* Divider */}
        <div className={styles.divider}>
          <div className={styles.divLine} />
          <span className={styles.divText}>or continue with</span>
          <div className={styles.divLine} />
        </div>

        {/* Social buttons */}
        <div className={styles.socials}>
          <button className={styles.socialBtn}>
            <svg width="15" height="15" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M5.27 9.76A7.08 7.08 0 0 1 19.07 12c0 .68-.06 1.34-.17 1.97H12v-3.73h7.6A7.08 7.08 0 0 0 5.27 9.76Z"/>
              <path fill="#34A853" d="M12 19.08a6.99 6.99 0 0 1-5.77-3.04l-2.9 2.24A10.5 10.5 0 0 0 12 22.5c2.66 0 5.1-.95 6.97-2.52l-2.85-2.2A6.97 6.97 0 0 1 12 19.08Z"/>
              <path fill="#FBBC05" d="M6.23 16.04A7.08 7.08 0 0 1 5.27 9.76l-2.91-2.24A10.5 10.5 0 0 0 1.5 12c0 1.66.38 3.22 1.06 4.62l2.92-2.26-.25-.32Z"/>
              <path fill="#4285F4" d="M19.07 12c0-.68-.07-1.34-.19-1.97H12V13.97h7.6a7.11 7.11 0 0 1-3.76 4.31l2.85 2.2C20.6 18.52 22 15.46 22 12c0-.34-.02-.68-.05-1H19.07Z"/>
            </svg>
            Google
          </button>
          <button className={styles.socialBtn}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12C22 6.48 17.52 2 12 2Z"/>
            </svg>
            GitHub
          </button>
        </div>

        {/* Footer */}
        <p className={styles.footer}>
          Don't have an account?{" "}
          <a href="/signup" className={styles.footerLink}>Create one</a>
        </p>
      </div>
    </div>
  );
}