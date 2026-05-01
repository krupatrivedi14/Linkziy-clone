import { useReveal } from '../hooks/useReveal'
import styles from './BuiltFor.module.css'

const WHO = [
  { icon: <FounderIcon />, title: 'Founders',    desc: 'Closing your first 100 customers' },
  { icon: <TeamIcon />,    title: 'Sales teams', desc: 'Hitting quota every month' },
  { icon: <FreelIcon />,   title: 'Freelancers', desc: 'Landing premium clients' },
  { icon: <RecruIcon />,   title: 'Recruiters',  desc: 'Sourcing top talent faster' },
  { icon: <AgencyIcon />,  title: 'Agencies',    desc: 'Scaling client delivery' },
]

export default function BuiltFor() {
  useReveal()

  return (
    <section id="for-who" className={`section-pad ${styles.section}`}>
      <div className="section-max">
        <div className="reveal">
          <h2 className="section-title-sans" style={{ maxWidth: 920, marginBottom: 0 }}>
            Whoever lives in LinkedIn DMs
          </h2>
        </div>

        <div className={styles.grid}>
          {WHO.map((w, i) => (
            <div
              key={i}
              className={`gc reveal ${styles.card}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.icon}>{w.icon}</div>
              <div className={styles.title}>{w.title}</div>
              <p className={styles.desc}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FounderIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
}
function TeamIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
}
function FreelIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z" /></svg>
}
function RecruIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 11l-4 4M21 21l-4.35-4.35" /></svg>
}
function AgencyIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18zM6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 0-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4" /></svg>
}
