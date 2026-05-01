import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.vis)')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
