import { useState } from 'react'
import styles from './DashSidebar.module.css'

const NAV = [
  {
    group: null,
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: '▦' },
    ],
  },
  {
    group: 'Inbox',
    items: [
      { id: 'inbox', label: 'LinkedIn Inbox', icon: '✉' },
    ],
  },
  {
    group: 'Outreach',
    items: [
      { id: 'prospects', label: 'Prospects', icon: '◎' },
      { id: 'sequences', label: 'Sequences', icon: '⎇' },
      { id: 'campaigns', label: 'Campaign Analytics', icon: '◉' },
    ],
  },
  {
    group: 'System',
    items: [
      { id: 'analytics', label: 'Analytics', icon: '▥' },
      { id: 'safety', label: 'Account Safety', icon: '盾' },
      { id: 'dashboard-pricing', label: 'Pricing', icon: '▭' },
    ],
  },
]

export default function DashSidebar({
  active = 'dashboard',
  onNavigate,
  mobileOpen = false,
  onClose,
}) {
  const [hovering, setHovering] = useState(false)
  const expanded = hovering || mobileOpen

  const go = (id) => {
    if (onNavigate) onNavigate(id)
    if (onClose) onClose()
  }

  return (
    <>
      {mobileOpen && <div className={styles.overlay} onClick={onClose} />}

      <aside
        className={`${styles.sidebar} ${mobileOpen ? styles.mobileOpen : ''}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className={styles.header}>
          <button
            type="button"
            className={styles.logoRow}
            onClick={() => go('dashboard')}
          >
            <div className={styles.logoMark} />
            <span className={`${styles.brandLabel} ${expanded ? styles.visible : ''}`}>
              Linkziy
            </span>
          </button>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className={styles.nav}>
          {NAV.map((section) => (
            <div key={section.group || 'main'} className={styles.section}>
              {section.group && (
                <span className={`${styles.groupLabel} ${expanded ? styles.visible : ''}`}>
                  {section.group}
                </span>
              )}

              {section.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.navItem} ${
                    active === item.id ? styles.navItemActive : ''
                  }`}
                  onClick={() => go(item.id)}
                  title={item.label}
                >
                  <span
                    className={`${styles.navIcon} ${
                      active === item.id ? styles.navIconActive : ''
                    }`}
                  >
                    {item.icon}
                  </span>

                  <span className={`${styles.itemLabel} ${expanded ? styles.visible : ''}`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className={`${styles.trialBox} ${expanded ? styles.visible : ''}`}>
          <div className={styles.trialHeader}>
            <span className={styles.trialBadge}>Free Trial</span>
          </div>

          <p className={styles.trialDays}>
            <span>5</span> days left
          </p>

          <div className={styles.trialBar}>
            <div className={styles.trialFill} style={{ width: '35.7%' }} />
          </div>

          <button
            type="button"
            className={styles.trialLink}
            onClick={() => go('dashboard-pricing')}
          >
            Upgrade Plan →
          </button>
        </div>
      </aside>
    </>
  )
}