import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import Logo from "./Logo";

const NAV_LINKS = ['Features', 'Solutions', 'Built for', 'Pricing', 'Contact']

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (page) => {
    setMenuOpen(false)
    if (onNavigate) onNavigate(page)
  }

  const handleLink = (label) => {
    setMenuOpen(false)

    if (label === 'Pricing') {
      go('pricing')
      return
    }

    const map = {
      Features: 'features',
      Solutions: 'solutions',
      'Built for': 'for-who',
      Contact: 'contact',
    }

    const id = map[label]

    if (currentPage !== 'home') {
      go('home')
      setTimeout(() => {
        if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
      return
    }

    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
    <button
      type="button"
      className={styles.logoWrap}
      onClick={() => go('home')}
    >
      <Logo onNavigate={onNavigate} />
    </button>

        <ul className={styles.links}>
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <button
                type="button"
                className={`${styles.linkBtn} ${
                  label === 'Pricing' && currentPage === 'pricing'
                    ? styles.linkBtnActive
                    : ''
                }`}
                onClick={() => handleLink(label)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.ctaDesktop}>
          <button
            type="button"
            className={`${styles.btn} ${styles.ghost}`}
            onClick={() => go('signin')}
          >
            Login
          </button>

          <button
            type="button"
            className={`${styles.btn} ${styles.fill}`}
            onClick={() => go('signup')}
          >
            Start Free
          </button>
        </div>

        <button
          type="button"
          className={styles.hamburger}
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobilePanel}>
          <ul className={styles.mobileLinks}>
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <button
                  type="button"
                  className={`${styles.mobileLinkBtn} ${
                    label === 'Pricing' && currentPage === 'pricing'
                      ? styles.mobileLinkBtnActive
                      : ''
                  }`}
                  onClick={() => handleLink(label)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.mobileCtas}>
            <button
              type="button"
              className={`${styles.btn} ${styles.mobileGhost}`}
              onClick={() => go('signin')}
            >
              Login
            </button>

            <button
              type="button"
              className={`${styles.btn} ${styles.fill}`}
              onClick={() => go('signup')}
            >
              Start Free
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}