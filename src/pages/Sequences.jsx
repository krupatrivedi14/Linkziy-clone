import styles from './Inner.module.css'

export default function Sequences() {
  return (
    <div className={styles.innerPage}>
      <div className={styles.pageTopRow}>
        <div>
          <h1 className={styles.displayTitle}>Campaigns</h1>
          <p className={styles.displaySub}>Manage your automated Linkziy sequences</p>
        </div>
        <button className={styles.limeBtn}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          New Campaign
        </button>
      </div>

      <div className={styles.emptyGrid}>
        <div className={`${styles.emptyCard} ${styles.card}`}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.emptyCardIcon}><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
          <h3 className={styles.emptyCardTitle}>No campaigns yet</h3>
          <p className={styles.emptyCardSub}>Create your first campaign to start automating outreach</p>
          <button className={styles.limeBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  )
}
