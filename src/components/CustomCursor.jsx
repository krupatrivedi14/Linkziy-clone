import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

const DASHBOARD_PATHS = [
  '/dashboard',
  '/prospects',
  '/sequences',
  '/inbox',
  '/analytics',
  '/campaigns',
  '/safety',
  '/dashboard-pricing',
]

export default function CustomCursor() {
  const currentPath = window.location.pathname.replace(/\/$/, '')

  if (DASHBOARD_PATHS.includes(currentPath)) {
    return null
  }

  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const rafId   = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }

      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.14)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.14)

      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }

      rafId.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      dotRef.current?.classList.add(styles.hov)
      ringRef.current?.classList.add(styles.hov)
    }

    const onLeave = () => {
      dotRef.current?.classList.remove(styles.hov)
      ringRef.current?.classList.remove(styles.hov)
    }

    const hoverEls = document.querySelectorAll('a, button, [data-hover]')

    document.addEventListener('mousemove', onMove)

    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)

      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })

      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}