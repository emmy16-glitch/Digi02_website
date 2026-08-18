import { Container } from '../../components/Container'
import homeReferenceHero from '../../assets/skygrid/skygrid-operations-center.webp'

const trustMarks = [
  { mark: 'NDA', detail: 'National partner' },
  { mark: 'NCS', detail: 'Nigeria Customs Service' },
  { mark: 'NEXIM', detail: 'Export-Import Bank' },
  { mark: 'Sterling', detail: 'Bank' },
  { mark: 'KDSG', detail: 'Kaduna State Government' },
] as const

const capabilityStrip = [
  { icon: 'autonomy', title: 'Autonomous Systems', detail: 'Intelligent. Reliable. Scalable.' },
  { icon: 'software', title: 'Software Engineering', detail: 'Modern. Secure. Purpose-built.' },
  { icon: 'enterprise', title: 'Enterprise Technology', detail: 'Systems that run operations.' },
  { icon: 'mobility', title: 'Mobility', detail: 'Electric. Smart. Sustainable.' },
  { icon: 'security', title: 'Cybersecurity', detail: 'Protect. Detect. Respond.' },
] as const

type HeroIconProps = {
  kind: (typeof capabilityStrip)[number]['icon']
}

function HeroIcon({ kind }: HeroIconProps) {
  if (kind === 'software') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13.5 4l-3 16" />
      </svg>
    )
  }

  if (kind === 'enterprise') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="3" y="4" width="8" height="7" rx="1" />
        <rect x="13" y="4" width="8" height="7" rx="1" />
        <rect x="8" y="14" width="8" height="6" rx="1" />
        <path d="M7 11v2h10v-2M12 13v1" />
      </svg>
    )
  }

  if (kind === 'mobility') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 15h14l-1.5-5.2A2.5 2.5 0 0 0 15.1 8H8.9a2.5 2.5 0 0 0-2.4 1.8L5 15Z" />
        <path d="M4 15v3h2M20 15v3h-2M8 18h8" />
        <circle cx="8" cy="15" r="1" />
        <circle cx="16" cy="15" r="1" />
      </svg>
    )
  }

  if (kind === 'security') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3 19 6v5c0 4.8-2.7 8-7 10-4.3-2-7-5.2-7-10V6l7-3Z" />
        <path d="m9.5 12 1.6 1.7 3.7-4" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5V5M12 19v-4.5M9.5 12H5M19 12h-4.5" />
      <path d="m8.8 8.8-2.4-2.4M17.6 17.6l-2.4-2.4M15.2 8.8l2.4-2.4M6.4 17.6l2.4-2.4" />
    </svg>
  )
}

export function HomeReferenceHero() {
  return (
    <section className="reference-home-hero" aria-labelledby="reference-home-title">
      <Container className="reference-home-hero__layout">
        <div className="reference-home-hero__copy">
          <p className="reference-home__eyebrow">Built in Nigeria. Engineered for impact.</p>
          <h1 id="reference-home-title" className="reference-home-hero__title">
            Technology built{' '}
            <br />
            for <span>real operations.</span>
          </h1>
          <p className="reference-home-hero__summary">
            Digi02 designs and builds software, autonomous systems, mobility technology and digital
            infrastructure that help organizations operate smarter, move faster and scale with confidence.
          </p>
          <div className="reference-home-hero__actions" aria-label="Homepage actions">
            <a className="reference-home__button reference-home__button--primary" href="/work">
              Explore our work <span aria-hidden="true">→</span>
            </a>
            <a className="reference-home__button reference-home__button--secondary" href="/solutions">
              View solutions <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="reference-home-hero__trust" aria-label="Trusted organisations">
            <p>Trusted by organisations across Africa</p>
            <div className="reference-home-hero__trust-row">
              {trustMarks.map((item) => (
                <div className="reference-home-hero__trust-mark" key={item.mark}>
                  <strong>{item.mark}</strong>
                  <span>{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reference-home-hero__media" aria-label="Illustrative SkyGrid UAV operations scene">
          <img
            className="reference-home-hero__image"
            src={homeReferenceHero}
            alt="Illustrative SkyGrid UAV operations control environment"
            decoding="async"
            fetchPriority="high"
          />
          <div className="reference-home-hero__media-shade" aria-hidden="true" />

          <div className="reference-home-hud reference-home-hud--status" aria-hidden="true">
            <span>SkyGrid</span>
            <strong>UAV-02</strong>
            <small>Status</small>
            <b>Active</b>
          </div>

          <div className="reference-home-hud reference-home-hud--telemetry" aria-hidden="true">
            <span>Telemetry</span>
            <div>
              <small>Altitude</small>
              <small>Speed</small>
              <strong>120 m</strong>
              <strong>45 km/h</strong>
              <small>Battery</small>
              <small>Accuracy</small>
              <strong>87%</strong>
              <strong>RTK</strong>
            </div>
          </div>
        </div>
      </Container>

      <div className="reference-home-hero__capabilities">
        <Container className="reference-home-hero__capability-grid">
          {capabilityStrip.map((item) => (
            <div className="reference-home-hero__capability" key={item.title}>
              <span className="reference-home-hero__capability-icon">
                <HeroIcon kind={item.icon} />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
              </span>
            </div>
          ))}
        </Container>
      </div>
    </section>
  )
}
