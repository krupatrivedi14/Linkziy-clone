import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const gridRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (gridRef.current) {
            gridRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background blobs */}
      <div className={`blob ${styles.blobLime1}`} />
      <div className={`blob ${styles.blobLime2}`} />
      <div className={`blob ${styles.blobInk1}`} />

      {/* Animated grid */}
      <div ref={gridRef} className={styles.heroGrid} />

      {/* Rotating circle decoration */}
      <div className={styles.heroCircle} />

      <div className={styles.heroRow}>
        {/* Main headline */}
        <div className={`${styles.heroMain} reveal vis`}>
          <div className={styles.heroEyebrow}>
            <div className={styles.eyebrowTag}>
              <SparkleIcon />
              AI-powered LinkedIn growth.
            </div>
          </div>

          <h1 className={styles.heroH1}>
            <div className={styles.lineFilled}>TURN LINKEDIN</div>
            <div className={styles.lineOutline}>INTO #1 PIPELINE</div>
            <div className={styles.lineAccent}>ON AUTOPILOT</div>
          </h1>

          <div className={styles.heroSubRow}>
            <div className={styles.heroDescCol}>
              <p className={styles.heroDesc}>
                Linkziy finds qualified leads, runs personalized outreach, and grows your personal brand —
                so you book more meetings without spending your day on LinkedIn.
              </p>
            </div>
            <div className={styles.heroActions}>
              <button type="button" className={`${styles.btnHero} ${styles.btnPrimary}`}>
                <span>Start Free</span>
                <span className={styles.btnIcon}><ChevronRight /></span>
              </button>
              <button type="button" className={`${styles.btnHero} ${styles.btnGhost}`}>
                Book a Demo
              </button>
            </div>
          </div>

          <div className={styles.trustBanner} role="note" aria-label="Trial details">
            <span><strong>No credit card.</strong></span>
            <span className={styles.trustDot} aria-hidden="true" />
            <span><strong>14 days</strong> free trial.</span>
            <span className={styles.trustDot} aria-hidden="true" />
            <span>Cancel anytime.</span>
          </div>
        </div>

        {/* Dashboard widget */}
        <div className={`${styles.dashboardWidget} reveal vis`} style={{ transitionDelay: '0.2s' }}>
          <DashboardWidget />
        </div>
      </div>
    </section>
  )
}

function DashboardWidget() {
  return (
    <div className={`gc ${styles.dashCard}`}>
      {/* Window chrome */}
      <div className={styles.dashChrome}>
        <div className={styles.winDots}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <span className={styles.dashTitle}>Linkziy Dashboard</span>
      </div>

      {/* Outreach campaigns */}
      <div className={styles.dashInner}>
        <div className={styles.dashRow}>
          <span className={styles.dashLabel}>Outreach Campaigns</span>
          <SendIcon />
        </div>
        <div className={styles.barBg}><div className={styles.bar} style={{ width: '85%' }} /></div>
        <div className={styles.barBg}><div className={styles.bar} style={{ width: '55%' }} /></div>
        <div className={styles.barBg}><div className={styles.bar} style={{ width: '90%' }} /></div>
        <p className={styles.dashMeta}>1,284 connection requests sent this week</p>
      </div>

      {/* 2-col stats */}
      <div className={styles.dash2col}>
        <div className={styles.dashInner} style={{ margin: 0 }}>
          <div className={styles.dashRow}>
            <span className={styles.dashLabel}>Scheduled Posts</span>
            <CalendarIcon />
          </div>
          <div className={styles.dashStatBig}>24</div>
          <p className={styles.dashMeta}>Queued for the next 3 weeks</p>
        </div>
        <div className={styles.dashInner} style={{ margin: 0 }}>
          <div className={styles.dashRow}>
            <span className={styles.dashLabel}>Reply Rate</span>
            <TrendIcon />
          </div>
          <div className={styles.dashStatBig}>38%</div>
          <p className={styles.dashMeta}>+11% in the last 30 days</p>
        </div>
      </div>

      {/* White-label report */}
      <div className={styles.dashInner} style={{ marginBottom: 0 }}>
        <div className={styles.dashRow}>
          <span className={styles.dashLabel}>White-Label Report Preview</span>
          <ExternalIcon />
        </div>
        <div className={styles.dash3col}>
          <div className={styles.miniStat}><div className={styles.miniLbl}>Leads</div><div className={styles.miniVal}>186</div></div>
          <div className={styles.miniStat}><div className={styles.miniLbl}>Replies</div><div className={styles.miniVal}>71</div></div>
          <div className={styles.miniStat}><div className={styles.miniLbl}>Meetings</div><div className={styles.miniVal}>22</div></div>
        </div>
      </div>
    </div>
  )
}

/* ---- Inline SVG icons ---- */
function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13M22 2 15 22 11 13 2 9l20-7z" />
    </svg>
  )
}
function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  )
}
function TrendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 7-8.5 8.5-5-5L2 17M16 7h6v6" />
    </svg>
  )
}
function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  )
}
