import { useReveal } from '../hooks/useReveal'
import styles from './Features.module.css'

const FEATURES = [
  {
    icon: <OutreachIcon />,
    title: 'Outreach automation',
    desc: 'Personalized connection requests, follow-ups, and InMails without getting flagged.',
    lime: false,
  },
  {
    icon: <ContentIcon />,
    title: 'AI content & scheduler',
    desc: 'Generate posts in your voice and schedule a full month in under 10 minutes.',
    lime: true,
  },
  {
    icon: <ReportsIcon />,
    title: 'White-label reports',
    desc: 'Send clients polished LinkedIn growth reports with your logo — not ours.',
    lime: false,
  },
  {
    icon: <TeamIcon />,
    title: 'Multi user workspace',
    desc: 'Add your whole team, manage roles, and run LinkedIn from one shared workspace.',
    lime: true,
  },
]

export default function Features() {
  useReveal()

  return (
    <section id="features" className={`section-pad ${styles.section}`}>
      <div className={`blob ${styles.blob1}`} />
      <div className="section-max">
        <div className="reveal">
          <h2 className="section-title" style={{ maxWidth: 900, marginBottom: 14 }}>
            Everything you need to win on LinkedIn
          </h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            One platform replaces your outreach tool, post scheduler, and reporting spreadsheet.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className={`${f.lime ? 'gc-lime' : 'gc'} reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.icon}>{f.icon}</div>
              <div className={styles.title}>{f.title}</div>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OutreachIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17a4 4 0 0 0 4-4V7a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4zM7 17v2a2 2 0 0 0 2 2h6a4 4 0 0 0 4-4v-3" /></svg>
}
function ContentIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>
}
function ReportsIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10M18 20V4M6 20v-4" /></svg>
}
function TeamIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
}
