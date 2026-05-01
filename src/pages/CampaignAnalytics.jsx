import { useState } from 'react'
import styles from './Inner.module.css'

const STATS = [
  { label: 'Invitations Sent',      value: 0, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>, accent: 'lime' },
  { label: 'Total Accepted',        value: 0, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>, accent: 'lime' },
  { label: '1st Message Sent',      value: 0, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, accent: 'dark' },
  { label: 'Total Replies',         value: 0, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>, accent: 'muted' },
  { label: 'Positive Leads',        value: 0, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>, accent: 'lime' },
  { label: 'Prospects Engaged',     value: 0, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, accent: 'dark' },
  { label: 'Pending Actions',       value: 0, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, accent: 'muted' },
  { label: 'Acceptance Rate',       value: '0%', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>, accent: 'lime' },
  { label: 'Reply Rate',            value: '0%', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>, accent: 'muted' },
]

export default function CampaignAnalytics() {
  const [period, setPeriod] = useState('Last 30 Days')
  const [tab, setTab] = useState('overview')

  return (
    <div className={styles.innerPage}>
      {/* Header */}
      <div className={styles.pageTopRow}>
        <div className={styles.iconTitleRow}>
          <div className={styles.pageIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
          </div>
          <div>
            <h1 className={styles.displayTitle}>Workspace Performance</h1>
            <p className={styles.displaySub}>Real-time overview of the entire team's efforts</p>
          </div>
        </div>
        <div className={styles.filterRow}>
          <select className={styles.filterSelect} value={period} onChange={e => setPeriod(e.target.value)}>
            {['Today', 'Last 7 Days', 'Last 30 Days', 'All Time'].map(p => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      {/* Stats grid */}
      <div className={styles.statsGrid9}>
        {STATS.map(s => (
          <div key={s.label} className={`${styles.statCard2} ${styles[`accent_${s.accent}`]}`}>
            <div className={styles.stat2Top}>
              <div className={styles.stat2Icon}>{s.icon}</div>
            </div>
            <p className={styles.stat2Label}>{s.label}</p>
            <h3 className={styles.stat2Value}>{s.value}</h3>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className={styles.tabBar}>
        {['overview', 'content', 'outreach'].map(t => (
          <button key={t} className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}{t === 'content' ? ' Performance' : t === 'outreach' ? ' Performance' : ''}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className={styles.analyticsGrid}>
          {/* Funnel card */}
          <div className={`${styles.card} ${styles.colSpan2}`}>
            <h3 className={styles.cardTitle}>Linkziy Funnel</h3>
            <div className={styles.funnelWrap}>
              {[
                { label: 'Total Prospects', val: 0, w: '100%', color: '#c8f135' },
                { label: 'Contacted',       val: 0, w: '0%',   color: '#0a0a0a' },
                { label: 'Replied',         val: 0, w: '0%',   color: 'rgba(10,10,10,0.35)' },
              ].map(f => (
                <div key={f.label} className={styles.funnelRow}>
                  <span className={styles.funnelLabel}>{f.label}</span>
                  <div className={styles.funnelBarBg}>
                    <div className={styles.funnelBar} style={{ width: f.w, background: f.color }} />
                  </div>
                  <span className={styles.funnelVal}>{f.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status breakdown */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Status Breakdown</h3>
            <div className={styles.donutEmpty}>
              <p className={styles.emptySub}>No data yet</p>
              <div className={styles.donutLegend}>
                {['Connected','1st Message Sent','Follow-up','Replied','Positive','Not Interested'].map((l,i) => (
                  <div key={l} className={styles.legendItem}>
                    <span className={styles.legendDot} style={{ background: ['#0a0a0a','#c8f135','#6b7f12','rgba(10,10,10,0.35)','#64748b','rgba(10,10,10,0.15)'][i] }} />
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className={`${styles.card} ${styles.colSpan3}`}>
            <h3 className={styles.cardTitle}>Recent Activity</h3>
            <p className={styles.emptyText}>No recent activity found.</p>
          </div>

          {/* Sequence performance table */}
          <div className={`${styles.card} ${styles.colSpan3}`}>
            <h3 className={styles.cardTitle}>Active Sequence Performance</h3>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Sequence Name</th>
                    <th className={styles.textRight}>Active Prospects</th>
                    <th className={styles.textRight}>Engagement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td colSpan={3} className={styles.tableEmpty}>No active sequences found.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab !== 'overview' && (
        <div className={styles.card}>
          <p className={styles.emptyText}>No data available for this tab yet.</p>
        </div>
      )}
    </div>
  )
}
