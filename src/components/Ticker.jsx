import styles from './Ticker.module.css'

const ITEMS = [
  'Find leads with advanced filters',
  'Outreach that feels human',
  'AI posts, scheduled for you',
  'Client-ready white-label reports',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <div key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
