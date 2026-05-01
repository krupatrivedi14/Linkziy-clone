import { useState } from 'react'
import styles from './DashNavbar.module.css'

export default function DashNavbar({ onMenuOpen }) {
  const [notifOpen, setNotifOpen] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <header className={styles.navbar}>
      {/* Hamburger (mobile) */}
      <button className={styles.menuBtn} onClick={onMenuOpen} aria-label="Open menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="4" x2="20" y1="6" y2="6"/>
          <line x1="4" x2="20" y1="12" y2="12"/>
          <line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      </button>

      {/* Workspace selector */}
      <div className={styles.workspaceWrap}>
        <button className={styles.workspaceBtn}>
          <span className={styles.workspaceAvatar}>K</span>
          <span className={styles.workspaceName}>Krupa Trivedi's Workspace</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.chevron}>
            <path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>
          </svg>
        </button>
      </div>

      {/* Search */}
      <div className={styles.searchWrap}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.searchIcon}>
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search campaigns, prospects…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <kbd className={styles.kbd}>⌘K</kbd>
      </div>

      {/* Right actions */}
      <div className={styles.actions}>
        {/* Notifications */}
        <div className={styles.notifWrap}>
          <button className={styles.iconBtn} onClick={() => setNotifOpen(v => !v)} aria-label="Notifications">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.268 21a2 2 0 0 0 3.464 0"/>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
            </svg>
            <span className={styles.badge}>1</span>
          </button>

          {notifOpen && (
            <div className={styles.notifPanel}>
              <p className={styles.notifTitle}>Notifications</p>
              <div className={styles.notifItem}>
                <div className={styles.notifDot} />
                <div>
                  <p className={styles.notifMsg}>Your free trial has 5 days remaining.</p>
                  <p className={styles.notifTime}>Just now</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User */}
        <button className={styles.userBtn}>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Krupa Trivedi</p>
            <p className={styles.userRole}>user</p>
          </div>
          <span className={styles.avatar}>KT</span>
        </button>
      </div>
    </header>
  )
}
