import { useState } from 'react'
import styles from './Inner.module.css'

export default function Prospects() {
  const [lists] = useState([])

  return (
    <div className={styles.innerPage}>
      <div className={styles.pageTopRow}>
        <div>
          <div className={styles.chip}>Prospects</div>
          <h1 className={styles.displayTitle}>Prospect Intelligence</h1>
          <p className={styles.displaySub}>Manage your outreach lists and target campaigns</p>
        </div>
        <button className={styles.primaryBtn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Create New List
        </button>
      </div>

      {lists.length === 0 ? (
        <div className={`${styles.emptyCard} ${styles.card}`}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.emptyCardIcon}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <h3 className={styles.emptyCardTitle}>No lists yet</h3>
          <p className={styles.emptyCardSub}>Create your first list to start managing prospects</p>
          <button className={styles.outlineBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Create My First List
          </button>
        </div>
      ) : null}
    </div>
  )
}
