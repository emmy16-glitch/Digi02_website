import { Container } from '../../components/Container'
import { HomeHeroCinematicVisual } from './HomeHeroCinematicVisual'

const heroMetrics = [
  { icon: 'projects', value: '100+', label: 'Projects delivered' },
  { icon: 'clients', value: '50+', label: 'Clients across sectors' },
  { icon: 'states', value: '10+', label: 'States impacted' },
  { icon: 'security', value: 'ISO 27001', label: 'Security & quality' },
] as const

type HeroMetricIconProps = {
  kind: (typeof heroMetrics)[number]['icon']
}

function HeroMetricIcon({ kind }: HeroMetricIconProps) {
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

export function HomeReferenceHero() {
  return (
    <section className="reference-home-hero reference-home-hero--cinematic" aria-labelledby="reference-home-title">
      <div className="reference-home-hero__stage">
        <div className="reference-home-hero__media reference-home-hero__media--vector reference-home-hero__media--cinematic" aria-hidden="true">
          <HomeHeroCinematicVisual />
          <div className="reference-home-hero__media-shade" />
        </div>

        <Container className="reference-home-hero__layout reference-home-hero__layout--cinematic">
          <div className="reference-home-hero__copy reference-home-hero__copy--cinematic">
            <h1 id="reference-home-title" className="reference-home-hero__title">
              Technology built
              <br />
              for <span>real operations.</span>
            </h1>
            <p className="reference-home-hero__summary">
              We design software and systems that help organisations see clearly, move faster, and operate with confidence.
            </p>
            <div className="reference-home-hero__actions" aria-label="Homepage actions">
              <a className="reference-home__button reference-home__button--primary" href="/work">
                Explore our work <span aria-hidden="true">→</span>
              </a>
              <a className="reference-home__button reference-home__button--secondary" href="/solutions">
                See our solutions <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="reference-home-hero__origin">
              <span aria-hidden="true">✓</span>
              Built in Kaduna. Engineered for impact.
            </p>
          </div>
        </Container>
      </div>

      <div className="reference-home-hero__metrics" aria-label="Digi02 impact metrics">
        <Container className="reference-home-hero__metric-grid">
          {heroMetrics.map((metric) => (
            <div className="reference-home-hero__metric" key={metric.value}>
              <span className="reference-home-hero__metric-icon">
                <HeroMetricIcon kind={metric.icon} />
              </span>
              <span>
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
