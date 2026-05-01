import { useState } from 'react'
import Logo from './Logo'
import styles from './DashSidebar.module.css'

const NAV = [
  {
    group: null,
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg> },
    ],
  },
  {
    group: 'Inbox',
    items: [
      { id: 'inbox', label: 'LinkedIn Inbox', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg> },
    ],
  },
  {
    group: 'Outreach',
    items: [
      { id: 'prospects', label: 'Prospects', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
      { id: 'sequences', label: 'Sequences', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg> },
      { id: 'campaigns', label: 'Campaign Analytics', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> },
    ],
  },
  {
    group: 'Engagement',
    locked: true,
    items: [
      { id: 'profile-manager', label: 'Profile Manager', locked: true },
      { id: 'post-generator', label: 'Post Generator', locked: true },
      { id: 'upcoming-posts', label: 'Upcoming Posts', locked: true },
      { id: 'post-analytics', label: 'Post Analytics', locked: true },
    ],
  },
  {
    group: 'System',
    items: [
      { id: 'analytics', label: 'Analytics', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg> },
      { id: 'safety', label: 'Account Safety', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg> },
      { id: 'audit-logs', label: 'Audit Logs', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg> },
      { id: 'settings', label: 'Settings', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg> },
      { id: 'dashboard-pricing', label: 'Pricing', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg> },
    ],
  },
]

const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

export default function DashSidebar({ active, onNavigate, mobileOpen, onClose }) {
  const [hovering, setHovering] = useState(false)

  const expanded = hovering || mobileOpen

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && <div className={styles.overlay} onClick={onClose} />}

      <aside
        className={`${styles.sidebar} ${mobileOpen ? styles.mobileOpen : ''}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Header */}
        <div className={styles.header}>
          <button
    type="button"
    className={styles.logoRow}
    onClick={() => {
      if (onNavigate) onNavigate('dashboard')
      if (onClose) onClose()
    }}
  >
    {expanded ? (
      <Logo onNavigate={onNavigate} />
    ) : (
      <Logo compact onNavigate={onNavigate} />
    )}
  </button>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          {NAV.map((section) => (
            <div key={section.group || 'main'} className={styles.section}>
              {section.group && (
                <span className={`${styles.groupLabel} ${expanded ? styles.visible : ''}`}>
                  {section.group}
                </span>
              )}

              {section.items.map((item) => {
                if (item.locked) {
                  return (
                    <div key={item.id} className={styles.lockedItem}>
                      <span className={styles.lockedIcon}>
                        {item.icon || <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                      </span>
                      <span className={`${styles.itemLabel} ${expanded ? styles.visible : ''}`}>{item.label}</span>
                      <span className={`${styles.lockBadge} ${expanded ? styles.visible : ''}`}><LockIcon /></span>
                    </div>
                  )
                }

                return (
                  <button
                    key={item.id}
                    className={`${styles.navItem} ${active === item.id ? styles.navItemActive : ''}`}
                    onClick={() => {
                      if (onNavigate) onNavigate(item.id)
                      if (onClose) onClose()
                    }}
                  >
                    <span className={`${styles.navIcon} ${active === item.id ? styles.navIconActive : ''}`}>
                      {item.icon}
                    </span>
                    <span className={`${styles.itemLabel} ${expanded ? styles.visible : ''}`}>{item.label}</span>
                  </button>
                )
              })}
            </div>
          ))}
        </nav>

        {/* Trial widget — collapsed */}
        <div className={`${styles.trialCollapsed} ${expanded ? styles.hidden : ''}`}>
          <a href="#pricing" className={styles.trialIcon} title="Upgrade Plan">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
          </a>
        </div>

        {/* Trial widget — expanded */}
        <div className={`${styles.trialBox} ${expanded ? styles.visible : ''}`}>
          <div className={styles.trialHeader}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span className={styles.trialBadge}>Free Trial</span>
          </div>
          <p className={styles.trialDays}><span>5</span> days left</p>
          <div className={styles.trialBar}>
            <div className={styles.trialFill} style={{ width: '35.7%' }} />
          </div>
          <button
        className={styles.trialLink}
        onClick={() => {
          onNavigate('dashboard-pricing')
          onClose()
        }}
      >
        Upgrade Plan →
      </button>
        </div>
      </aside>
    </>
  )
}
