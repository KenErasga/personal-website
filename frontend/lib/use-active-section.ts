import { useState, useEffect } from 'react'

const SECTION_IDS = ['home', 'experience', 'contacts']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // On initial load, scroll to hash if present
    const hash = window.location.hash.slice(1)
    if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }

    const observer = new IntersectionObserver(
      entries => {
        // Find the entry with the largest intersection ratio
        let bestEntry: IntersectionObserverEntry | null = null
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio)
          ) {
            bestEntry = entry
          }
        }
        if (bestEntry) {
          const id = bestEntry.target.id
          setActiveSection(id)
          window.history.replaceState(null, '', id === 'home' ? '/' : `/#${id}`)
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-80px 0px 0px 0px' }
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return activeSection
}
