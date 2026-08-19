import { useState } from 'react'
import { Container } from '../../components/Container'

const metrics = [
  { kind: 'projects', value: '100+', label: 'Projects delivered' },
  { kind: 'clients', value: '50+', label: 'Clients across sectors' },
  { kind: 'states', value: '10+', label: 'States impacted' },
  { kind: 'security', value: 'ISO 27001', label: 'Security & quality' },
] as const

const heroCaseStudies = [
  { signal: 'Field capture', project: 'Thermal Plant inspection', href: '/work/thermal-plant-inspection-automation' },
  { signal: 'Workflow context', project: 'Kaduna e-Management', href: '/work/kaduna-state-e-management-system' },
  { signal: 'Secure review', project: 'Sterling Payment Gateway', href: '/work/sterling-payment-gateway' },
] as const

type MetricKind = (typeof metrics)[number]['kind']

function MetricIcon({ kind }: { kind: MetricKind }) {
  if (kind === 'projects') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 20V11h3v9M11 20V6h3v14M17 20V3h3v17M3 20h19" />
      </svg>
    )
  }

  if (kind === 'clients') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20c.7-4.3 3-6.5 7-6.5s6.3 2.2 7 6.5" />
      </svg>
    )
  }

  if (kind === 'states') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3 19 6v5.2c0 4.4-2.5 7.6-7 9.8-4.5-2.2-7-5.4-7-9.8V6l7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.7-4" />
    </svg>
  )
}

export function HomeBlueprintHero() {
  const [isMotionPaused, setIsMotionPaused] = useState(false)

  return (
    <section className="home-blueprint-hero" data-home-section="H01" data-motion={isMotionPaused ? 'paused' : 'active'} aria-labelledby="home-blueprint-title">
      <div className="home-blueprint-hero__visual" aria-hidden="true">
        <span className="home-blueprint-hero__orbital-grid" />
        <span className="home-blueprint-hero__signal-path" />
        <span className="home-blueprint-hero__scanline" />
      </div>
      <Container className="home-blueprint-hero__content">
        <div className="home-blueprint-hero__copy">
          <p className="home-blueprint-eyebrow">Built in Nigeria · Engineered for impact</p>
          <h1 id="home-blueprint-title">
            Technology built
            <br />
            for <span>real operations.</span>
          </h1>
          <p className="home-blueprint-hero__summary">
            We design software and systems that help organisations see clearly, move faster, and operate with confidence.
          </p>
          <div className="home-blueprint-hero__actions" aria-label="Homepage actions">
            <a className="home-blueprint-button home-blueprint-button--primary" href="/work">
              Explore our work <span aria-hidden="true">→</span>
            </a>
            <a className="home-blueprint-button home-blueprint-button--secondary" href="/solutions">
              See our solutions <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="home-blueprint-hero__origin">
            <span aria-hidden="true">✓</span>
            Built in Kaduna. Engineered for impact.
          </p>
          <button className="home-blueprint-hero__motion-control" type="button" aria-pressed={isMotionPaused} onClick={() => setIsMotionPaused((isPaused) => !isPaused)}>
            <span aria-hidden="true">{isMotionPaused ? '▶' : 'Ⅱ'}</span>
            {isMotionPaused ? 'Resume visual movement' : 'Pause visual movement'}
          </button>
        </div>

        <aside className="home-blueprint-hero__operations-view" aria-label="Digi02 operational view">
          <p>Operational view</p>
          <strong>From field signals<br />to clear decisions.</strong>
          <nav className="home-blueprint-hero__signal-links" aria-label="Selected Digi02 case studies">
            {heroCaseStudies.map((caseStudy) => (
              <a href={caseStudy.href} key={caseStudy.signal} aria-label={`${caseStudy.signal}: ${caseStudy.project} case study`}>
                <span>{caseStudy.signal}</span>
                <small>{caseStudy.project}</small>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </nav>
          <small>Selected case studies <span aria-hidden="true">↗</span></small>
        </aside>
      </Container>

      <div className="home-blueprint-proof" data-home-section="H02" aria-label="Digi02 proof metrics">
        <Container className="home-blueprint-proof__grid">
          {metrics.map((metric) => (
            <div className="home-blueprint-proof__item" key={metric.value}>
              <span className="home-blueprint-proof__icon">
                <MetricIcon kind={metric.kind} />
              </span>
              <span className="home-blueprint-proof__copy">
                <strong>{metric.value}</strong>
                <small>{metric.label}</small>
              </span>
            </div>
          ))}
        </Container>
      </div>
    </section>
  )
}
