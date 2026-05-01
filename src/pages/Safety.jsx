import { useState } from 'react'
import styles from './Inner.module.css'

const QUOTAS = [
  { label: 'Messages Sent',                  used: 0, max: 50,  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { label: 'Connection Requests',             used: 0, max: 20,  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg> },
  { label: 'Profile Visits',                  used: 0, max: 50,  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg> },
  { label: 'Engagement (Likes / Comments)',   used: 0, max: 30,  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg> },
]

function pct(u,m) { return Math.round((u/m)*100) }
function barColor(u,m) {
  const p = pct(u,m)
  if (p >= 90) return '#ef4444'
  if (p >= 60) return '#f59e0b'
  return '#c8f135'
}

export default function Safety() {
  const [limits, setLimits] = useState({ messages: 50, connections: 20 })

  return (
    <div className={styles.innerPage}>
      <div className={styles.pageTopRow}>
        <div className={styles.iconTitleRow}>
          <div className={styles.pageIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
          </div>
          <div>
            <h1 className={styles.displayTitle}>Account Safety</h1>
            <p className={styles.displaySub}>Daily quotas, limits, and LinkedIn warm-up protection</p>
          </div>
        </div>
        <button className={styles.outlineBtn}>Refresh</button>
      </div>

      {/* Daily quota card */}
      <div className={styles.card}>
        <div className={styles.cardIconRow}>
          <div className={styles.cardIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
          </div>
          <div>
            <h2 className={styles.cardHeading}>Today's Activity Quota</h2>
            <p className={styles.cardSub}>Real-time usage against your daily limits</p>
          </div>
        </div>

        <div className={styles.quotaList}>
          {QUOTAS.map((q, i) => (
            <div key={q.label}>
              {i > 0 && <hr className={styles.divider} />}
              <div className={styles.quotaRow2}>
                <div className={styles.quotaLeft}>
                  <span className={styles.quotaIcon}>{q.icon}</span>
                  <span className={styles.quotaLabel2}>{q.label}</span>
                </div>
                <span className={styles.quotaFigure}>{q.used} / {q.max}</span>
              </div>
              <div className={styles.barBg}>
                <div className={styles.barFill} style={{ width: `${pct(q.used,q.max)}%`, background: barColor(q.used,q.max) }} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.barLegend}>
          <span><span className={styles.legendDot} style={{background:'#c8f135'}} /> Safe (&lt;60%)</span>
          <span><span className={styles.legendDot} style={{background:'#f59e0b'}} /> Caution (60–90%)</span>
          <span><span className={styles.legendDot} style={{background:'#ef4444'}} /> High (≥90%)</span>
        </div>
      </div>

      {/* Customize limits card */}
      <div className={styles.card}>
        <div className={styles.cardIconRow}>
          <div className={styles.cardIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
          </div>
          <div>
            <h2 className={styles.cardHeading}>Customize Daily Limits</h2>
            <p className={styles.cardSub}>Your limits will be capped at your plan maximum and warm-up cap when applicable.</p>
          </div>
        </div>

        <div className={styles.limitGrid}>
          <div className={styles.limitField}>
            <label className={styles.fieldLabel}>Daily Messages</label>
            <div className={styles.limitRow}>
              <input type="number" className={styles.numInput} min={1} max={200}
                value={limits.messages} onChange={e => setLimits(l => ({...l, messages: e.target.value}))} />
              <span className={styles.effectiveText}>Effective: <strong>{limits.messages}</strong></span>
            </div>
          </div>
          <div className={styles.limitField}>
            <label className={styles.fieldLabel}>Daily Connection Requests</label>
            <div className={styles.limitRow}>
              <input type="number" className={styles.numInput} min={1} max={100}
                value={limits.connections} onChange={e => setLimits(l => ({...l, connections: e.target.value}))} />
              <span className={styles.effectiveText}>Effective: <strong>{limits.connections}</strong></span>
            </div>
          </div>
        </div>

        <div className={styles.saveLimitRow}>
          <button className={styles.limeBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
            Save Limits
          </button>
          <p className={styles.saveLimitNote}>Changes take effect immediately for all new actions.</p>
        </div>
      </div>

      {/* Warm-up card */}
      <div className={styles.card}>
        <div className={styles.cardIconRow}>
          <div className={styles.cardIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
          <div>
            <h2 className={styles.cardHeading}>LinkedIn Warm-Up Status</h2>
            <p className={styles.cardSub}>Automatically enforced based on when your LinkedIn account was connected.</p>
          </div>
        </div>
        <div className={styles.warmupNote}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
          Connect your LinkedIn account to enable automatic warm-up protection.
        </div>
        <div className={styles.warmupInfo}>
          <p className={styles.warmupInfoTitle}>HOW WARM-UP WORKS</p>
          <ul className={styles.warmupList}>
            <li><span className={styles.dot} />Limits are automatically computed from your LinkedIn connection date — no manual setup needed.</li>
            <li><span className={styles.dot} />During Week 1, messaging is fully disabled to protect against LinkedIn's new-account flags.</li>
            <li><span className={styles.dot} />Warm-up caps override your configured limits if they're lower, and reset daily at midnight.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
