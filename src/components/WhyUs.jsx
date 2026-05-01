import { useReveal } from '../hooks/useReveal'
import styles from './WhyUs.module.css'

const REASONS = [
  {
    icon: <ShieldIcon />,
    title: 'Safer automation',
    desc: 'Mimics human behavior patterns, so your account stays healthy.',
    lime: false,
  },
  {
    icon: <LayersIcon />,
    title: 'All-in-one',
    desc: 'Leads, content, and reporting in one place — not three tools.',
    lime: true,
  },
  {
    icon: <CalIcon />,
    title: 'Built around a habit',
    desc: 'A daily system that compounds, not just another dashboard.',
    lime: false,
  },
  {
    icon: <HeadsetIcon />,
    title: 'Real human support',
    desc: 'Chat and email support from our team, not a chatbot maze.',
    lime: true,
  },
]

export default function WhyUs() {
  useReveal()

  return (
    <section className="section-pad">
      <div className={`blob ${styles.blob1}`} />
      <div className="section-max">
        <div className="reveal">
          <h2 className="section-title-sans" style={{ maxWidth: 900, marginBottom: 0 }}>
            The only LinkedIn tool you'll actually keep
          </h2>
        </div>

        <div className={styles.grid}>
          {REASONS.map((r, i) => (
            <div
              key={i}
              className={`${r.lime ? 'gc-lime' : 'gc'} reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={styles.icon}>{r.icon}</div>
              <div className={styles.title}>{r.title}</div>
              <p className={styles.desc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShieldIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
}
function LayersIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
}
function CalIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /></svg>
}
function HeadsetIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
}
