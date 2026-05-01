import styles from './Inner.module.css'

export default function CampaignAnalytics() {
  return (
    <div className={styles.innerPage}>
      <div className={styles.iconTitleRow} style={{marginBottom:'24px'}}>
        <div className={styles.pageIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
        </div>
        <div>
          <h1 className={styles.displayTitle}>Analytics</h1>
          <p className={styles.displaySub}>Track performance across all your LinkedIn activities</p>
        </div>
      </div>

      <div className={`${styles.card} ${styles.emptyCard}`}>
        <div className={styles.emptyCardIcon}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
        </div>
        <h3 className={styles.emptyCardTitle}>No analytics data yet</h3>
        <p className={styles.emptyCardSub}>Connect your LinkedIn account and run campaigns to start seeing analytics here.</p>
      </div>
    </div>
  )
}