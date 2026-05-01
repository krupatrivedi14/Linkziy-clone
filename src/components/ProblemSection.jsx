import { useReveal } from '../hooks/useReveal'
import styles from './ProblemSection.module.css'

const PROBLEMS = [
  'Find the right prospects every day',
  'Send connection requests and personalized outreach manually',
  'Write and publish content consistently',
  'Follow up without losing momentum',
  'Track campaign performance across multiple tools',
  'Send client-ready reports that look professional',
]

export default function ProblemSection() {
  useReveal()

  return (
    <section className={`section-pad ${styles.section}`}>
      <div className={`blob ${styles.blob1}`} />
      <div className="section-max">
        <div className="reveal">
          <h2 className="section-title" style={{ maxWidth: 700, marginBottom: 14 }}>
            You know LinkedIn works.<br />
            <em>But growing on LinkedIn takes too much time.</em>
          </h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Every day you have to find prospects, send connection requests, write outreach messages,
            create content, follow up with leads, track campaign performance, and share results with
            clients. Doing all of this manually slows down your growth.
          </p>
        </div>

        <div className={styles.grid}>
          {PROBLEMS.map((text, i) => (
            <div
              key={i}
              className={`gc prob-card reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.icon}>
                <CheckIcon />
              </div>
              <p className={styles.text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3" />
    </svg>
  )
}
