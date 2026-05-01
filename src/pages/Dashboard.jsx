import { useState } from 'react'
import DashSidebar from '../components/DashSidebar'
import DashNavbar  from '../components/DashNavbar'
import styles      from './Dashboard.module.css'

/* ── Reusable stat card ── */
function StatCard({ icon, label, value, sub, accent }) {
  return (
    <div className={`${styles.statCard} ${accent ? styles.statCardAccent : ''}`}>
      <div className={styles.statIcon}>{icon}</div>
      <div className={styles.statBody}>
        <p className={styles.statLabel}>{label}</p>
        <p className={styles.statValue}>{value}</p>
        {sub && <p className={styles.statSub}>{sub}</p>}
      </div>
    </div>
  )
}

/* ── Fake prospect rows ── */
const PROSPECTS = [
  { name: 'Alex Morgan',    title: 'VP of Sales',      company: 'Acme Corp',    status: 'Connected',   date: 'Apr 28' },
  { name: 'Sarah Chen',     title: 'Growth Lead',      company: 'TechFlow',     status: 'Pending',     date: 'Apr 27' },
  { name: 'James Patel',    title: 'Founder & CEO',    company: 'LaunchBase',   status: 'Replied',     date: 'Apr 26' },
  { name: 'Nina Okafor',    title: 'Head of Marketing', company: 'BrandStack',  status: 'Pending',     date: 'Apr 25' },
  { name: 'Carlos Rivera',  title: 'CTO',               company: 'DevNest',     status: 'Connected',   date: 'Apr 24' },
  { name: 'Emma Williams',  title: 'Director of BD',   company: 'Nexova',       status: 'Not Sent',    date: 'Apr 23' },
]

const STATUS_COLOR = {
  Connected: '#22c55e',
  Pending:   '#f59e0b',
  Replied:   '#c8f135',
  'Not Sent': 'rgba(255,255,255,0.25)',
}

/* ── Mini bar chart ── */
function MiniBar({ values = [2, 4, 3, 6, 5, 8, 7, 10, 9, 12, 11, 14] }) {
  const max = Math.max(...values)
  return (
    <div className={styles.miniBar}>
      {values.map((v, i) => (
        <div
          key={i}
          className={styles.bar}
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  )
}

/* ── Donut progress ── */
function Donut({ pct = 0, size = 110, stroke = 9 }) {
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  return (
    <svg width={size} height={size} className={styles.donut}>
      <circle cx={size/2} cy={size/2} r={r} stroke="rgba(255,255,255,0.12)" strokeWidth={stroke} fill="none" />
      <circle
        cx={size/2} cy={size/2} r={r}
        stroke="#c8f135" strokeWidth={stroke} fill="none"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 1s ease' }}
      />
      <text x="50%" y="53%" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="15" fontWeight="800" fontFamily="Manrope,sans-serif">
        {pct}%
      </text>
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────── */
export default function Dashboard({ onNavigate, activePage = 'dashboard', children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const [period, setPeriod] = useState('Today')


  return (
    <div className={styles.shell}>
        <DashSidebar
        active={activePage}
        onNavigate={onNavigate}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onExpandChange={setSidebarExpanded}
      />

      <div className={`${styles.main} ${sidebarExpanded ? styles.mainShifted : ''}`}>
        <DashNavbar onMenuOpen={() => setMobileOpen(true)} />

        <main className={styles.content}>
        {children ? (
          children
        ) : (
        <>

          {/* ── Page header ── */}
          <div className={styles.pageHeader}>
            <div>
              <h1 className={styles.pageTitle}>Hello Krupa,</h1>
              <p className={styles.pageSubtitle}>Welcome to your dashboard</p>
            </div>
            <div className={styles.headerActions}>
              <select
                className={styles.periodSelect}
                value={period}
                onChange={e => setPeriod(e.target.value)}
              >
                {['Today', 'Last 7 days', 'Last 30 days', 'All time'].map(p => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <button className={styles.outlineBtn}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                Customize Widgets
              </button>
            </div>
          </div>

          {/* ── LinkedIn Outreach hero card ── */}
          <div className={styles.heroCard}>
            <div className={styles.heroLeft}>
              <div className={styles.heroMeta}>
                <div className={styles.heroTitle}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  <span>LinkedIn Outreach</span>
                </div>
                <span className={styles.liveBadge}>Live</span>
              </div>
              <div className={styles.heroStats}>
                {[
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>, label: 'Messages sent', val: 0 },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, label: 'Replies received', val: 0 },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>, label: 'Response rate', val: '0%' },
                ].map(s => (
                  <div key={s.label} className={styles.heroStat}>
                    <div className={styles.heroStatIcon}>{s.icon}</div>
                    <div>
                      <p className={styles.heroStatLabel}>{s.label}</p>
                      <p className={styles.heroStatVal}>{s.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Donut pct={0} />
          </div>

          {/* ── 4-col grid: profile + status + quota + streak ── */}
          <div className={styles.gridFour}>
            {/* Profile */}
            <div className={styles.darkCard}>
              <p className={styles.cardTitle}>Your profile</p>
              <div className={styles.profileCenter}>
                <div className={styles.profileAvatarWrap}>
                  <div className={styles.profileAvatar}>K</div>
                  <div className={styles.liIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                </div>
                <h3 className={styles.profileName}>Krupa Trivedi</h3>
                <p className={styles.profileRole}>LinkedIn User</p>
                <div className={styles.profileNums}>
                  <div><p className={styles.numVal}>0</p><p className={styles.numLbl}>Connections</p></div>
                  <div><p className={`${styles.numVal} ${styles.lime}`}>0</p><p className={styles.numLbl}>Pending</p></div>
                </div>
              </div>
            </div>

            {/* Prospecting status */}
            <div className={styles.darkCard}>
              <div className={styles.cardRow}>
                <p className={styles.cardTitle}>Prospecting status</p>
                <span className={styles.runningBadge}>Running</span>
              </div>
              <div className={styles.statusList}>
                <div className={styles.statusItem}>
                  <div className={styles.statusItemLeft}>
                    <div className={`${styles.statusItemIcon} ${styles.limeIcon}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                    </div>
                    <span className={styles.statusVal}>0</span>
                  </div>
                  <span className={styles.statusLbl}>Active campaigns</span>
                </div>
                <div className={styles.statusItem}>
                  <div className={styles.statusItemLeft}>
                    <div className={styles.statusItemIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <span className={styles.statusVal}>0</span>
                  </div>
                  <span className={styles.statusLbl}>Queued actions</span>
                </div>
              </div>
              <button className={styles.limeBtn} onClick={() => onNavigate && onNavigate('sequences')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                See my campaigns
              </button>
            </div>

            {/* Daily quota */}
            <div className={styles.darkCard}>
              <div className={styles.quotaHeader}>
                <div className={styles.quotaIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
                </div>
              </div>
              <p className={styles.cardTitle}>Daily Quota Usage</p>
              {[
                { label: 'Connections', used: 0, max: 20 },
                { label: 'Messages',   used: 0, max: 50 },
              ].map(q => (
                <div key={q.label} className={styles.quotaRow}>
                  <div className={styles.quotaMeta}>
                    <span className={styles.quotaLbl}>{q.label}</span>
                    <span className={styles.quotaNum}>{q.used} / {q.max}</span>
                  </div>
                  <div className={styles.quotaBar}>
                    <div className={styles.quotaFill} style={{ width: `${(q.used/q.max)*100}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Streak */}
            <div className={styles.darkCard}>
              <div className={styles.streakTop}>
                <div className={styles.streakCalIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                </div>
                <span className={styles.keepBadge}>Keep it up!</span>
              </div>
              <p className={styles.cardTitle}>Activity Streak</p>
              <p className={styles.streakNum}>0 <span className={styles.streakUnit}>days</span></p>
              <p className={styles.streakRecord}>Longest: 0 days</p>
            </div>
          </div>

          {/* ── Bottom grid: performance + chart + prospects table ── */}
          <div className={styles.gridThree}>

            {/* LinkedIn Performance */}
            <div className={`${styles.darkCard} ${styles.span2}`}>
              <div className={styles.cardRow}>
                <div className={styles.cardTitleRow}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color:'#c8f135'}}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  <p className={styles.cardTitle}>LinkedIn Performance</p>
                </div>
                <span className={styles.mutedBadge}>{period}</span>
              </div>

              <div className={styles.perfGrid}>
                {[
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>, label: "Today's Requests", val: 0 },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, label: 'Replies Received', val: 0, sub: '0% rate' },
                  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>, label: 'Active Campaigns', val: 0 },
                ].map(s => (
                  <div key={s.label} className={styles.perfItem}>
                    <div className={styles.perfItemIcon}>{s.icon}</div>
                    <p className={styles.perfVal}>{s.val}</p>
                    <p className={styles.perfLbl}>{s.label}</p>
                    {s.sub && <p className={styles.perfSub}>{s.sub}</p>}
                  </div>
                ))}
              </div>

              <div className={styles.liveRow}>
                <div className={styles.liveDot} />
                <span className={styles.liveText}>Live tracking active</span>
                <span className={styles.liveCount}>0 actions today</span>
              </div>

              {/* Mini chart area */}
              <div className={styles.chartArea}>
                <div className={styles.chartHeader}>
                  <p className={styles.chartTitle}>Connection Requests Trend</p>
                  <span className={styles.mutedBadge}>{period}</span>
                </div>
                <MiniBar />
              </div>
            </div>

            {/* Prospects table */}
            <div className={`${styles.darkCard} ${styles.span3}`}>
              <div className={styles.tableHeader}>
                <p className={styles.cardTitle}>Recent Prospects</p>
                <button className={styles.outlineSmBtn} onClick={() => onNavigate && onNavigate('prospects')}>View all</button>
              </div>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Title</th>
                      <th className={styles.hideXs}>Company</th>
                      <th>Status</th>
                      <th className={styles.hideSm}>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROSPECTS.map((p) => (
                      <tr key={p.name}>
                        <td>
                          <div className={styles.prospectName}>
                            <div className={styles.prospectAvatar}>{p.name[0]}</div>
                            <span>{p.name}</span>
                          </div>
                        </td>
                        <td className={styles.dimText}>{p.title}</td>
                        <td className={`${styles.dimText} ${styles.hideXs}`}>{p.company}</td>
                        <td>
                          <span
                            className={styles.statusChip}
                            style={{ '--chip-color': STATUS_COLOR[p.status] }}
                          >{p.status}</span>
                        </td>
                        <td className={`${styles.dimText} ${styles.hideSm}`}>{p.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
       </>
      )}

        </main>
      </div>
    </div>
  )
}
