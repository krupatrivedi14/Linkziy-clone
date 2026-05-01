import { useReveal } from '../hooks/useReveal'
import styles from './CTA.module.css'

export default function CTA() {
  useReveal()

  return (
    <div id="pricing" className={`gc-ink reveal ${styles.wrap}`}>
      {/* Radial accent */}
      <div className={styles.radial} />

      {/* Decorative asterisk */}
      <span className={styles.asterisk} aria-hidden="true">✦</span>

      {/* Text side */}
      <div className={styles.textSide}>
        <div className={styles.badge}>
          <LightningIcon />
          Start in minutes
        </div>
        <h2 className={styles.title}>
          Your LinkedIn should be<br />working while you sleep.
        </h2>
        <p className={styles.sub}>
          Start free. No credit card. 14 days free trial. Cancel anytime.
        </p>
      </div>

      {/* Action side */}
      <div className={styles.actions}>
  <button
    type="button"
    className={styles.btnLime}
    onClick={() => onNavigate && onNavigate('signup')}
  >
    Start free →
  </button>

  <button
    type="button"
    className={styles.btnGhost}
    onClick={() => onNavigate && onNavigate('pricing')}
  >
    Book a demo
  </button>
</div>

      {/* BG watermark */}
      <span className={styles.watermark} aria-hidden="true">GROW</span>
    </div>
  )
}

function LightningIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#C8F135" stroke="#C8F135" strokeWidth="1">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}
