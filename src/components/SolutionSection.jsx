import { useReveal } from '../hooks/useReveal'
import styles from './SolutionSection.module.css'

const SOLUTIONS = [
  'Automate outreach without losing personalization.',
  'Generate posts that match your voice in seconds.',
  'See campaign performance and client-ready reports instantly.',
]

export default function SolutionSection() {
  useReveal()

  return (
    <section id="solutions" className={`section-pad ${styles.section}`}>
      <div className={`blob ${styles.blob1}`} />
      <div className="section-max">
        <div className="reveal">
          <h2 className="section-title" style={{ maxWidth: 700, marginBottom: 14 }}>
            TURN YOUR LINKEDIN INTO AN<br />
            <em>AUTOMATED GROWTH SYSTEM</em>
          </h2>
          <p className="section-sub">
            Linkziy helps you turn LinkedIn into a consistent lead generation and personal branding
            engine. Instead of juggling multiple tools, everything works together in one platform.
            Automate outreach. Create content faster. Track results easily.
          </p>
        </div>

        <div className={styles.grid}>
          {SOLUTIONS.map((text, i) => (
            <div
              key={i}
              className={`gc reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className={styles.text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
