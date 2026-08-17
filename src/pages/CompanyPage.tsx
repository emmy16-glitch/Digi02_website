import digiNorthVisual from '../assets/diginorth/diginorth-community-visual.png'
import emergingTechVisual from '../assets/emerging-tech/emerging-tech-learning-visual.png'
import { Container } from '../components/Container'
import '../styles/company-page.css'

type IconKind =
  | 'location'
  | 'network'
  | 'globe'
  | 'software'
  | 'systems'
  | 'impact'
  | 'future'
  | 'mission'
  | 'vision'
  | 'values'
  | 'philosophy'
  | 'people'
  | 'diverse'
  | 'purpose'
  | 'projects'
  | 'states'
  | 'clients'
  | 'uptime'
  | 'security'

function CompanyIcon({ kind }: { kind: IconKind }) {
  const paths: Record<IconKind, React.ReactNode> = {
    location: <><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
    network: <><circle cx="12" cy="6" r="2.5" /><circle cx="6" cy="17" r="2.5" /><circle cx="18" cy="17" r="2.5" /><path d="m10.7 8.1-3.4 6.7m6-6.7 3.4 6.7M8.5 17h7" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9S14.5 18.4 12 21M12 3C9.5 5.6 8.3 8.6 8.3 12S9.5 18.4 12 21" /></>,
    software: <><path d="M8 8 4 12l4 4m8-8 4 4-4 4m-5 3 2-14" /></>,
    systems: <><circle cx="12" cy="12" r="2.5" /><path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8" /></>,
    impact: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="m15 9 5-5m0 0h-4m4 0v4" /></>,
    future: <><path d="m12 3 8 7-8 11L4 10l8-7Z" /><path d="M4 10h16M12 3v18" /></>,
    mission: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="m15 9 6-6m0 0h-4m4 0v4" /></>,
    vision: <><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6S2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="2.8" /></>,
    values: <><path d="m12 3 7 4-3 11H8L5 7l7-4Z" /><path d="m5 7 7 11 7-11M8 18l4-15 4 15" /></>,
    philosophy: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9 7 7m10 10 2.1 2.1m0-14.2L17 7M7 17l-2.1 2.1" /></>,
    people: <><circle cx="9" cy="9" r="3" /><circle cx="17" cy="8" r="2" /><path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6m0-6c3 0 5 1.6 5.5 4.5" /></>,
    diverse: <><circle cx="12" cy="12" r="9" /><path d="M12 3c-3 2.2-4.5 5.2-4.5 9S9 18.8 12 21m0-18c3 2.2 4.5 5.2 4.5 9S15 18.8 12 21M3 12h18" /></>,
    purpose: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="m14.5 9.5 6-6m0 0h-4m4 0v4" /></>,
    projects: <><rect x="3" y="7" width="18" height="12" rx="1" /><path d="M8 7V4h8v3M3 11h18" /></>,
    states: <><path d="m12 3 8 4v10l-8 4-8-4V7l8-4Z" /><path d="M8 12h8M12 8v8" /></>,
    clients: <><path d="M4 19V8l8-5 8 5v11M8 19v-6h8v6" /><path d="M7 10h2m6 0h2" /></>,
    uptime: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    security: <><path d="M12 3 19 6v5c0 4.8-2.4 8-7 10-4.6-2-7-5.2-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[kind]}
    </svg>
  )
}

const principles = [
  ['software', 'Software Excellence'],
  ['systems', 'Systems Thinking'],
  ['impact', 'Operational Impact'],
  ['future', 'Future Ready'],
] as const satisfies readonly [IconKind, string][]

const direction = [
  {
    icon: 'mission' as const,
    title: 'Our Mission',
    body: 'To build technology solutions that solve real problems, improve operations, and create sustainable impact across Africa and beyond.',
  },
  {
    icon: 'vision' as const,
    title: 'Our Vision',
    body: 'To be Africa’s most trusted technology partner—engineering the systems that power a smarter, more connected continent.',
  },
  {
    icon: 'values' as const,
    title: 'Our Values',
    body: 'Integrity\nExcellence\nInnovation\nImpact\nPeople',
  },
  {
    icon: 'philosophy' as const,
    title: 'Our Operating Philosophy',
    body: 'We combine deep domain understanding with modern engineering to deliver technology that is secure, reliable, and built to last.',
  },
] as const

const cultureSignals = [
  ['people', '50+', 'Talented builders and innovators'],
  ['diverse', 'Diverse', 'Multidisciplinary teams across domains'],
  ['purpose', 'Purpose Driven', 'Building technology that matters'],
] as const satisfies readonly [IconKind, string, string][]

const journey = [
  ['2018', 'Company founded in Kaduna'],
  ['2019', 'Delivered first enterprise software solutions'],
  ['2020', 'Expanded into autonomous systems and IoT'],
  ['2021', 'Launched SkyGrid & DigiVolt'],
  ['2022', 'Grew across sectors and states'],
  ['2023', 'Introduced Kaduna State e-Management System'],
  ['2024+', 'Scaling impact. Expanding globally.'],
] as const

const proof = [
  ['projects', '100+', 'Projects delivered across sectors'],
  ['states', '10+', 'States impacted across Nigeria'],
  ['clients', '50+', 'Government & enterprise clients served'],
  ['uptime', '99.9%', 'System uptime across platforms'],
  ['security', 'ISO 27001', 'Security & quality standards'],
] as const satisfies readonly [IconKind, string, string][]

export function CompanyPage() {
  return (
    <div className="company-reference-page">
      <section className="company-reference-hero" aria-labelledby="company-reference-title">
        <div className="company-reference-hero__visual" aria-hidden="true">
          <img src={digiNorthVisual} alt="" decoding="async" fetchPriority="high" />
        </div>
        <Container className="company-reference-hero__inner">
          <div className="company-reference-hero__copy">
            <nav className="company-reference-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span>Company</span>
            </nav>
            <h1 id="company-reference-title">
              Built in Kaduna.{' '}
              <br />
              <span>Building for Africa.</span>
            </h1>
            <p>
              Digi02 is a Nigerian technology company engineering software, autonomous systems,
              enterprise solutions, and digital infrastructure that solve real problems and unlock progress.
            </p>
            <a className="company-reference-hero__cta" href="/contact">
              Work with us <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="company-reference-hero__signals" aria-label="Company positioning">
            <div><CompanyIcon kind="location" /><span>Headquartered in<br />Kaduna, Nigeria</span></div>
            <div><CompanyIcon kind="network" /><span>Solving real problems<br />across Africa</span></div>
            <div><CompanyIcon kind="globe" /><span>Global standard.<br />Local impact.</span></div>
          </div>
        </Container>
      </section>

      <section className="company-reference-about" aria-labelledby="company-about-title">
        <Container className="company-reference-about__grid">
          <div className="company-reference-about__statement">
            <p>About Digi02</p>
            <h2 id="company-about-title">We build technology that drives operations, empowers people, and strengthens industries.</h2>
          </div>

          <div className="company-reference-about__copy">
            <p>
              Founded with a bold belief in Africa’s potential, Digi02 partners with governments,
              enterprises, and forward-thinking organisations to deliver technology that is secure,
              scalable, and human-centered.
            </p>
            <p>
              From autonomous systems and enterprise platforms to critical infrastructure and digital
              transformation, our work is designed for Africa—built to compete globally.
            </p>
          </div>

          <div className="company-reference-about__principles" aria-label="Digi02 principles">
            {principles.map(([icon, label]) => (
              <div key={label}>
                <CompanyIcon kind={icon} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-reference-direction" aria-label="Mission vision values and operating philosophy">
        <Container className="company-reference-direction__grid">
          {direction.map((item) => (
            <article key={item.title}>
              <CompanyIcon kind={item.icon} />
              <div>
                <h2>{item.title}</h2>
                {item.title === 'Our Values' ? (
                  <ul>
                    {item.body.split('\n').map((value) => <li key={value}>{value}</li>)}
                  </ul>
                ) : (
                  <p>{item.body}</p>
                )}
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="company-reference-culture" aria-labelledby="company-culture-title">
        <div className="company-reference-culture__visual" aria-hidden="true">
          <img src={emergingTechVisual} alt="" loading="lazy" decoding="async" />
        </div>
        <Container className="company-reference-culture__grid">
          <div className="company-reference-culture__spacer" aria-hidden="true" />
          <div className="company-reference-culture__copy">
            <h2 id="company-culture-title">Our People. Our Culture.</h2>
            <p>
              We are builders, problem solvers, and visionaries united by a passion for impact.
              At Digi02, we foster a culture of ownership, continuous learning, and collaboration that brings out the best in our people.
            </p>
            <a href="/contact">Join our team <span aria-hidden="true">→</span></a>
          </div>
          <div className="company-reference-culture__signals">
            {cultureSignals.map(([icon, value, label]) => (
              <div key={value}>
                <CompanyIcon kind={icon} />
                <p><strong>{value}</strong><span>{label}</span></p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-reference-journey" aria-labelledby="company-journey-title">
        <Container className="company-reference-journey__grid">
          <div className="company-reference-journey__intro">
            <h2 id="company-journey-title">Our Journey</h2>
            <p>Key milestones in our growth and product evolution.</p>
          </div>
          <ol className="company-reference-timeline">
            {journey.map(([year, label]) => (
              <li key={year}>
                <span className="company-reference-timeline__dot" aria-hidden="true" />
                <strong>{year}</strong>
                <p>{label}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="company-reference-proof" aria-labelledby="company-proof-title">
        <Container>
          <h2 id="company-proof-title">Trusted by partners. Measured by impact.</h2>
          <div className="company-reference-proof__grid">
            <div className="company-reference-proof__metrics">
              {proof.map(([icon, value, label]) => (
                <div key={value}>
                  <CompanyIcon kind={icon} />
                  <p><strong>{value}</strong><span>{label}</span></p>
                </div>
              ))}
            </div>
            <div className="company-reference-partners">
              <p>Our Partners</p>
              <div aria-label="Partner names">
                <strong>NDA</strong>
                <span>Nigerian Defence Service</span>
                <strong>Sterling</strong>
                <strong>NEXIM</strong>
                <strong>Kaduna State Government</strong>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="company-reference-cta" aria-labelledby="company-reference-cta-title">
        <Container className="company-reference-cta__inner">
          <div>
            <h2 id="company-reference-cta-title">Let’s build what’s next—together.</h2>
            <p>Partner with Digi02 to turn ideas into secure, scalable, and impactful solutions.</p>
          </div>
          <a href="/contact">Discuss your project <span aria-hidden="true">→</span></a>
        </Container>
      </section>
    </div>
  )
}
