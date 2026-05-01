import styles from './Footer.module.css'

const LINKS = {
  Product:   ['Features', 'Pricing', 'Integrations'],
  Company:   ['About', 'Contact'],
  Resources: ['Blog', 'LinkedIn Growth Guide'],
  Legal:     ['Privacy Policy', 'Terms'],
}

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div>
          <a href="#" className={styles.logoWrap}>
            <span className={styles.logoText}>Linkziy</span>
          </a>
          <p className={styles.tagline}>
            LinkedIn growth and automation platform for lead generation, content, and client reporting.
          </p>
        </div>

        {/* Link columns */}
        <div className={styles.cols}>
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading} className={styles.col}>
              <h4 className={styles.colHead}>{heading}</h4>
              {links.map(l => (
                <button key={l} type="button" className={styles.link}>{l}</button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.copy}>
        © 2026 Linkziy. All rights reserved.
      </div>
    </footer>
  )
}
