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

type RevealTiming = {
  delay: number
  duration: number
  offset: number
}

const revealCadence = {
  solutions: { delay: 0, duration: 460, offset: 15 },
  capabilities: { delay: 35, duration: 400, offset: 12 },
  bento: { delay: 65, duration: 500, offset: 18 },
  philosophy: { delay: 0, duration: 520, offset: 20 },
  outcomes: { delay: 35, duration: 420, offset: 14 },
  work: { delay: 70, duration: 500, offset: 20 },
  regional: { delay: 25, duration: 460, offset: 16 },
  cta: { delay: 55, duration: 540, offset: 18 },
} as const satisfies Record<string, RevealTiming>

function HomeSectionReveal({ children, timing }: { children: ReactNode; timing: RevealTiming }) {
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
      style={{
        '--home-reveal-delay': `${timing.delay}ms`,
        '--home-reveal-duration': `${timing.duration}ms`,
        '--home-reveal-offset': `${timing.offset}px`,
      } as CSSProperties}
    >
      {children}
    </div>
  )
}

export function HomePage() {
  return (
    <div className="home-blueprint">
      <HomeBlueprintHero />
      <HomeSectionReveal timing={revealCadence.solutions}><HomeBlueprintSolutions /></HomeSectionReveal>
      <HomeSectionReveal timing={revealCadence.capabilities}><HomeBlueprintCapabilities /></HomeSectionReveal>
      <HomeSectionReveal timing={revealCadence.bento}><HomeBlueprintOperationalBento /></HomeSectionReveal>
      <HomeSectionReveal timing={revealCadence.philosophy}><HomeBlueprintPhilosophy /></HomeSectionReveal>
      <HomeSectionReveal timing={revealCadence.outcomes}><HomeBlueprintOutcomes /></HomeSectionReveal>
      <HomeSectionReveal timing={revealCadence.work}><HomeBlueprintWork /></HomeSectionReveal>
      <HomeSectionReveal timing={revealCadence.regional}><HomeBlueprintRegionalProof /></HomeSectionReveal>
      <HomeSectionReveal timing={revealCadence.cta}><HomeBlueprintFinalCta /></HomeSectionReveal>
    </div>
  )
}
