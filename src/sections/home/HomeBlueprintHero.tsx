import { useEffect, useRef, useState } from 'react'
import { Container } from '../../components/Container'

const metrics = [
  { kind: 'projects', value: '100+', label: 'Projects delivered' },
  { kind: 'clients', value: '50+', label: 'Clients across sectors' },
  { kind: 'states', value: '10+', label: 'States impacted' },
  { kind: 'security', value: 'ISO 27001', label: 'Security & quality' },
] as const

const heroCaseStudies = [
  { signal: 'Field capture', project: 'Thermal Plant inspection', href: '/work/thermal-plant-inspection-automation', mapKey: 'thermal' },
  { signal: 'Workflow context', project: 'Kaduna e-Management', href: '/work/kaduna-state-e-management-system', mapKey: 'kaduna' },
  { signal: 'Secure review', project: 'Sterling Payment Gateway', href: '/work/sterling-payment-gateway', mapKey: 'sterling' },
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

function ProjectMapIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m4 6 5-3 6 3 5-3v15l-5 3-6-3-5 3V6Z" />
      <path d="M9 3v15M15 6v15" />
      <circle cx="12" cy="11" r="1.5" />
    </svg>
  )
}

export function HomeBlueprintHero() {
  const [isMotionPaused, setIsMotionPaused] = useState(false)
  const [isProjectMapOpen, setIsProjectMapOpen] = useState(false)
  const projectMapDialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = projectMapDialogRef.current
    if (!dialog) return

    if (isProjectMapOpen && !dialog.open) dialog.showModal()
    if (!isProjectMapOpen && dialog.open) dialog.close()
  }, [isProjectMapOpen])

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
          <nav className="home-blueprint-hero__mobile-signal-chips" aria-label="Selected Digi02 case studies">
            {heroCaseStudies.map((caseStudy) => (
              <a href={caseStudy.href} key={caseStudy.signal} aria-label={`${caseStudy.signal}: ${caseStudy.project} case study`}>
                <span aria-hidden="true" />
                {caseStudy.signal}
              </a>
            ))}
          </nav>
          <button className="home-blueprint-hero__project-map-trigger" type="button" aria-haspopup="dialog" aria-controls="home-project-map-dialog" aria-expanded={isProjectMapOpen} onClick={() => setIsProjectMapOpen(true)}>
            <ProjectMapIcon />
            View project map <span aria-hidden="true">↗</span>
          </button>
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

      <dialog
        ref={projectMapDialogRef}
        id="home-project-map-dialog"
        className="home-blueprint-project-map"
        aria-labelledby="home-project-map-title"
        onClose={() => setIsProjectMapOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsProjectMapOpen(false)
        }}
      >
        <header className="home-blueprint-project-map__header">
          <div>
            <p>Selected work</p>
            <h2 id="home-project-map-title">Project map</h2>
            <span>Choose an operational signal to open its case study.</span>
          </div>
          <button type="button" onClick={() => setIsProjectMapOpen(false)} aria-label="Close project map">×</button>
        </header>
        <div className="home-blueprint-project-map__canvas" aria-label="Interactive map of selected Digi02 case studies">
          <svg aria-hidden="true" viewBox="0 0 700 360" preserveAspectRatio="none">
            <path d="M84 265C176 245 191 86 335 130s136 133 284 51" />
            <path d="M84 265C202 312 370 322 619 181" />
            <circle cx="84" cy="265" r="4" />
            <circle cx="335" cy="130" r="4" />
            <circle cx="619" cy="181" r="4" />
          </svg>
          {heroCaseStudies.map((caseStudy) => (
            <a className={`home-blueprint-project-map__node home-blueprint-project-map__node--${caseStudy.mapKey}`} href={caseStudy.href} key={caseStudy.signal}>
              <span>{caseStudy.signal}</span>
              <strong>{caseStudy.project}</strong>
              <i aria-hidden="true">Open case study ↗</i>
            </a>
          ))}
        </div>
        <p className="home-blueprint-project-map__note">This map groups selected work by operational signal; it does not represent project geography.</p>
      </dialog>

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
