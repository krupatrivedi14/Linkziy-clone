import { useReveal } from '../hooks/useReveal'
import styles from './HowItWorks.module.css'

const STEPS = [
  { step: 'Step 1', title: 'Connect LinkedIn',  desc: 'Secure, one-click setup.',              lime: false },
  { step: 'Step 2', title: 'Pick your goal',    desc: 'Leads, branding, or both.',              lime: true  },
  { step: 'Step 3', title: 'Let Linkziy run',   desc: 'AI handles outreach and content.',       lime: false },
  { step: 'Step 4', title: 'Track what works',  desc: 'Clear dashboards, no guesswork.',        lime: true  },
]

export default function HowItWorks() {
  useReveal()

  return (
    <section className="section-pad">
      <div className="section-max">
        <div className="reveal">
          <h2 className="section-title-sans" style={{ maxWidth: 900, marginBottom: 0 }}>
            From setup to results in 4 steps
          </h2>
        </div>

        <div className={styles.grid}>
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`${s.lime ? 'gc-lime' : 'gc'} reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={styles.top}>
                <div className={styles.pill}>{s.step}</div>
              </div>
              <div className={styles.title}>{s.title}</div>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
