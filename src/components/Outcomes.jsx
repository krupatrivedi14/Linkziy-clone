import { useReveal } from '../hooks/useReveal'
import styles from './Outcomes.module.css'

const OUTCOMES = [
  {
    icon: <TrendIcon />,
    title: 'More meetings',
    desc: 'Book qualified calls from LinkedIn every week.',
    lime: false,
  },
  {
    icon: <CalIcon />,
    title: 'Less time',
    desc: 'Cut outreach from hours to minutes a day.',
    lime: true,
  },
  {
    icon: <SparkIcon />,
    title: 'Real consistency',
    desc: 'Post weekly without staring at a blank page.',
    lime: false,
  },
  {
    icon: <ExtIcon />,
    title: 'A real engine',
    desc: 'Turn LinkedIn into lead-gen, not a time sink.',
    lime: true,
  },
]

export default function Outcomes() {
  useReveal()

  return (
    <section className="section-pad">
      <div className="section-max">
        <div className="reveal">
          <h2 className="section-title-sans" style={{ maxWidth: 900, marginBottom: 0 }}>
            What changes when you use Linkziy
          </h2>
        </div>

        <div className={styles.grid}>
          {OUTCOMES.map((o, i) => (
            <div
              key={i}
              className={`${o.lime ? 'gc-lime' : 'gc'} reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={styles.top}>
                <div className={styles.iconWrap}>{o.icon}</div>
              </div>
              <div className={styles.title}>{o.title}</div>
              <p className={styles.desc}>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrendIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17M16 7h6v6" /></svg>
}
function CalIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" /></svg>
}
function SparkIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
}
function ExtIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
}
