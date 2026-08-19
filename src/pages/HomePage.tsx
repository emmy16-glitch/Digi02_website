import {
  HomeBlueprintCapabilities,
  HomeBlueprintFinalCta,
  HomeBlueprintOperationalBento,
  HomeBlueprintOutcomes,
  HomeBlueprintPhilosophy,
  HomeBlueprintRegionalProof,
  HomeBlueprintSolutions,
  HomeBlueprintWork,
} from '../sections/home/HomeBlueprintContent'
import { HomeBlueprintHero } from '../sections/home/HomeBlueprintHero'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import '../styles/home-blueprint.css'
import '../styles/home-capability-bento.css'
import '../styles/home-hero-interaction.css'
import '../styles/home-scroll-reveal.css'

function HomeSectionReveal({ children, index }: { children: ReactNode; index: number }) {
  const revealRef = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const section = revealRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setIsRevealed(true)
      return
    }

    const revealWhenReached = () => {
      if (section.getBoundingClientRect().top <= window.innerHeight * 1.14) {
        setIsRevealed(true)
        observer.unobserve(section)
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px 14% 0px' })

    observer.observe(section)
    revealWhenReached()
    window.addEventListener('scroll', revealWhenReached, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', revealWhenReached)
    }
  }, [])

  return (
    <div
      ref={revealRef}
      className={`home-section-reveal${isRevealed ? ' is-revealed' : ''}`}
      style={{ '--home-reveal-delay': `${Math.min(index * 45, 180)}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}

export function HomePage() {
  return (
    <div className="home-blueprint">
      <HomeBlueprintHero />
      <HomeSectionReveal index={0}><HomeBlueprintSolutions /></HomeSectionReveal>
      <HomeSectionReveal index={1}><HomeBlueprintCapabilities /></HomeSectionReveal>
      <HomeSectionReveal index={2}><HomeBlueprintOperationalBento /></HomeSectionReveal>
      <HomeSectionReveal index={3}><HomeBlueprintPhilosophy /></HomeSectionReveal>
      <HomeSectionReveal index={4}><HomeBlueprintOutcomes /></HomeSectionReveal>
      <HomeSectionReveal index={5}><HomeBlueprintWork /></HomeSectionReveal>
      <HomeSectionReveal index={6}><HomeBlueprintRegionalProof /></HomeSectionReveal>
      <HomeSectionReveal index={7}><HomeBlueprintFinalCta /></HomeSectionReveal>
    </div>
  )
}
