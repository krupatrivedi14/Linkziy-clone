import { useState } from 'react'
import styles from './Auth.module.css'

export default function SignIn({ onNavigate }) {
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!email.includes('@')) e.email = 'Enter a valid email'
    if (password.length < 6) e.password = 'Min 6 characters'
    return e
  }

  const handleSubmit = (ev) => {
  ev.preventDefault()

  const e = validate()
  if (Object.keys(e).length) {
    setErrors(e)
    return
  }

  setErrors({})

  if (onNavigate) {
    onNavigate('dashboard')
  }
}

  return (
    <div className={styles.authBg}>
      <div className={styles.authWrap}>

        {/* ── Left panel ── */}
        <div className={styles.panel}>
          <div className={styles.panelGlow} />
          <div className={styles.panelContent}>
            <div className={styles.badge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
              LinkedIn Growth Workspace
            </div>

            <div className={styles.brandRow}>
              <div className={styles.logoBox} />
              <span className={styles.brandName}>Linkziy</span>
            </div>

            <h1 className={styles.panelHeading}>Build predictable growth with a cleaner, smarter outreach system.</h1>
            <p className={styles.panelSub}>Unified lead intelligence, messaging, and follow‑up control in one platform crafted for modern teams.</p>

            <ul className={styles.featureList}>
              {[
                'Smart lead workflows with less manual effort',
                'Cleaner outreach pipeline with higher consistency',
                'Built for scale, clarity, and daily productivity',
              ].map((f) => (
                <li key={f} className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className={styles.securityBox}>
              <div className={styles.securityIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <p className={styles.securityTitle}>Secure and reliable by design</p>
                <p className={styles.securitySub}>Your workflows remain private and protected end‑to‑end.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className={styles.formPane}>
          <div className={styles.formCard}>
            {/* Mobile logo */}
            <div className={styles.mobileBrand}>
              <div className={styles.logoBoxSm} />
              <span className={styles.brandNameDark}>Linkziy</span>
            </div>

            <div className={styles.formBadge}>
              <span className={styles.dot} />
              Sign in to dashboard
            </div>

            <h2 className={styles.formHeading}>Welcome back</h2>
            <p className={styles.formSub}>Access your campaigns, analytics, and automation from one place.</p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="si-email" className={styles.label}>Email Address</label>
                <input
                  id="si-email" type="email" placeholder="you@company.com"
                  className={`${styles.input} ${errors.email ? styles.inputErr : ''}`}
                  value={email} onChange={e => setEmail(e.target.value)}
                  autoComplete="username"
                />
                {errors.email && <span className={styles.errMsg}>{errors.email}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="si-pass" className={styles.label}>Password</label>
                <div className={styles.passWrap}>
                  <input
                    id="si-pass" type={showPass ? 'text' : 'password'} placeholder="••••••••"
                    className={`${styles.input} ${styles.inputPr} ${errors.password ? styles.inputErr : ''}`}
                    value={password} onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button type="button" className={styles.eyeBtn} onClick={() => setShowPass(v => !v)} aria-label="Toggle password">
                    {showPass
                      ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                    }
                  </button>
                </div>
                {errors.password && <span className={styles.errMsg}>{errors.password}</span>}
              </div>

              <div className={styles.rowBetween}>
                <label className={styles.checkLabel}>
                  <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className={styles.checkInput} />
                  <span className={styles.checkBox}>{remember && <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="1 6 4.5 9.5 11 2.5"/></svg>}</span>
                  Remember me
                </label>
                <button type="button" className={styles.linkBtn}>Forgot password?</button>
              </div>

              <button type="submit" className={styles.cta}>
                Sign in
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>

              <div className={styles.dividerRow}>
                <span className={styles.divider} />
                <span className={styles.dividerText}>or continue with</span>
                <span className={styles.divider} />
              </div>

              <button type="button" className={styles.googleBtn}>
                <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.5 24.5c0-1.5-.13-3-.38-4.5H24v8.5h12.1c-.52 2.78-2.1 5.13-4.47 6.72v5.58h7.23c4.23-3.9 6.64-9.65 6.64-16.3z"/><path fill="#34A853" d="M24 46c6.48 0 11.91-2.15 15.87-5.83l-7.23-5.58c-2 1.35-4.57 2.15-8.64 2.15-6.65 0-12.27-4.49-14.28-10.53H2.27v5.76C6.22 41.3 14.52 46 24 46z"/><path fill="#FBBC05" d="M9.72 26.21A14.38 14.38 0 0 1 9 22a14.38 14.38 0 0 1 .72-4.21v-5.76H2.27A21.97 21.97 0 0 0 0 22c0 3.55.84 6.9 2.27 9.97l7.45-5.76z"/><path fill="#EA4335" d="M24 9.27c3.74 0 7.1 1.29 9.75 3.82l7.3-7.3C36.91 2.04 31.47 0 24 0 14.52 0 6.22 4.7 2.27 12.03l7.45 5.76C11.73 13.76 17.35 9.27 24 9.27z"/></svg>
                Continue with Google
              </button>
            </form>

            <p className={styles.switchText}>
              Don't have an account?{' '}
              <button className={styles.switchLink} onClick={() => onNavigate && onNavigate('signup')}>Sign up</button>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
