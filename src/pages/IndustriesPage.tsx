import digiNorthVisual from '../assets/diginorth/diginorth-community-visual.png'
import digiVoltVisual from '../assets/digivolt/digivolt-electric-mobility-showcase.png'
import enterpriseVisual from '../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridHero from '../assets/skygrid/skygrid-operations-center.webp'
import skyGridMission from '../assets/skygrid/skygrid-gcs-mission-planner.webp'
import skyGridRoute from '../assets/skygrid/skygrid-route-planner.webp'
import { Container } from '../components/Container'
import '../styles/industries-reference.css'

type Industry = {
  id: string
  index: string
  title: string
  eyebrow: string
  description: string
  systems: readonly string[]
  href: string
  linkLabel: string
  image: string
  imagePosition?: string
  layout: 'wide' | 'split'
}

const industries: readonly Industry[] = [
  {
    id: 'government',
    index: '01',
    title: 'Government & public sector',
    eyebrow: 'Structured services. Clear accountability.',
    description:
      'Administrative, workflow and service systems designed around approvals, records, access and the realities of public-sector operations.',
    systems: ['E-Management', 'Enterprise Systems', 'Payment Systems'],
    href: '/solutions/e-management',
    linkLabel: 'Explore public-sector systems',
    image: digiNorthVisual,
    imagePosition: 'center 43%',
    layout: 'wide',
  },
  {
    id: 'energy',
    index: '02',
    title: 'Energy & utilities',
    eyebrow: 'Field visibility for critical infrastructure.',
    description:
      'Inspection, mapping and operational systems that connect field activity with the teams responsible for infrastructure, assets and service continuity.',
    systems: ['SkyGrid', 'Custom Software', 'Enterprise Systems'],
    href: '/solutions/skygrid',
    linkLabel: 'Explore energy operations',
    image: skyGridMission,
    imagePosition: 'center 48%',
    layout: 'split',
  },
  {
    id: 'logistics',
    index: '03',
    title: 'Logistics & transport',
    eyebrow: 'Movement coordinated as one operation.',
    description:
      'Mobility, routing and operational software that helps teams coordinate requests, vehicles, routes and the information around every movement.',
    systems: ['DigiVolt', 'Custom Software', 'Enterprise Systems'],
    href: '/solutions/digivolt',
    linkLabel: 'Explore mobility systems',
    image: digiVoltVisual,
    imagePosition: 'center 54%',
    layout: 'split',
  },
  {
    id: 'finance',
    index: '04',
    title: 'Finance & payments',
    eyebrow: 'Transactions connected to the business behind them.',
    description:
      'Payment and enterprise systems that keep transaction flow, reconciliation, reporting and operational records inside one dependable environment.',
    systems: ['Payment Systems', 'Enterprise Systems', 'Custom Software'],
    href: '/solutions/payment-systems',
    linkLabel: 'Explore payment systems',
    image: enterpriseVisual,
    imagePosition: 'center 42%',
    layout: 'wide',
  },
  {
    id: 'enterprise',
    index: '05',
    title: 'Enterprise & multi-site operations',
    eyebrow: 'One operating picture across teams and locations.',
    description:
      'ERP, payroll, workflow and reporting systems for organisations that need their people, transactions and operational records to stay connected.',
    systems: ['Enterprise Systems', 'Payroll Automation', 'Custom Software'],
    href: '/solutions/enterprise-systems',
    linkLabel: 'Explore enterprise systems',
    image: enterpriseVisual,
    imagePosition: '68% 45%',
    layout: 'split',
  },
  {
    id: 'field',
    index: '06',
    title: 'Field & autonomous operations',
    eyebrow: 'Technology designed beyond the office.',
    description:
      'Mission planning, autonomous coordination and field-data workflows for teams operating across physical environments and distributed assets.',
    systems: ['SkyGrid', 'Custom Software', 'Enterprise Systems'],
    href: '/solutions/skygrid',
    linkLabel: 'Explore autonomous systems',
    image: skyGridRoute,
    imagePosition: 'center 48%',
    layout: 'split',
  },
]

function IndustryIcon({ kind }: { kind: string }) {
  const paths: Record<string, React.ReactNode> = {
    government: <><path d="M4 20h16M6 18V9h12v9M4 9l8-5 8 5M9 12v4M15 12v4" /></>,
    energy: <><path d="m13 2-7 11h6l-1 9 7-12h-6z" /></>,
    logistics: <><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>,
    finance: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M7 15h4" /></>,
    enterprise: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h3v3H8zM14 8h2M14 11h2M8 15h8" /></>,
    field: <><circle cx="12" cy="12" r="2" /><path d="M12 9.5V5M12 19v-4.5M9.5 12H5M19 12h-4.5M8.8 8.8 6 6M18 18l-2.8-2.8M15.2 8.8 18 6M6 18l2.8-2.8" /></>,
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[kind]}
    </svg>
  )
}

export function IndustriesPage() {
  return (
    <div className="industries-reference-page">
      <section className="industries-reference-hero" aria-labelledby="industries-reference-title">
        <div className="industries-reference-hero__media" aria-hidden="true">
          <img src={skyGridHero} alt="" decoding="async" fetchPriority="high" />
        </div>

        <Container className="industries-reference-hero__inner">
          <div className="industries-reference-hero__copy">
            <nav className="industries-reference-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <span>Industries</span>
            </nav>

            <p className="industries-reference-kicker">Technology shaped around the work</p>
            <h1 id="industries-reference-title">
              Different environments.
              <br />
              Systems <span>engineered to fit.</span>
            </h1>
            <p className="industries-reference-hero__lead">
              Digi02 starts with the operating environment, people and constraints around the work, then engineers the technology to fit those conditions.
            </p>
            <a className="industries-reference-hero__cta" href="#industry-landscape">
              Explore industries <span aria-hidden="true">↓</span>
            </a>
          </div>

          <aside className="industries-reference-hero__index" aria-label="Industry areas">
            <small>Operating environments</small>
            <a href="#government"><span>01</span> Government</a>
            <a href="#energy"><span>02</span> Energy & utilities</a>
            <a href="#logistics"><span>03</span> Logistics & transport</a>
            <a href="#finance"><span>04</span> Finance & payments</a>
            <a href="#enterprise"><span>05</span> Enterprise</a>
            <a href="#field"><span>06</span> Field operations</a>
          </aside>
        </Container>
      </section>

      <nav className="industries-reference-rail" aria-label="Jump to industry">
        <Container className="industries-reference-rail__inner">
          {industries.slice(0, 5).map((industry) => (
            <a href={`#${industry.id}`} key={industry.id}>
              <span className="industries-reference-rail__icon"><IndustryIcon kind={industry.id} /></span>
              <span>{industry.title}</span>
            </a>
          ))}
        </Container>
      </nav>

      <section className="industries-reference-landscape" id="industry-landscape" aria-labelledby="industry-landscape-title">
        <Container>
          <header className="industries-reference-landscape__heading">
            <p>Where we work</p>
            <h2 id="industry-landscape-title">The system should fit the operation—not force the operation to fit the system.</h2>
          </header>

          <div className="industries-reference-landscape__grid">
            {industries.map((industry) => (
              <article
                className={`industries-reference-sector industries-reference-sector--${industry.layout}`}
                id={industry.id}
                key={industry.id}
              >
                <div className="industries-reference-sector__media">
                  <img
                    src={industry.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: industry.imagePosition }}
                  />
                  <span aria-hidden="true">{industry.index}</span>
                </div>

                <div className="industries-reference-sector__content">
                  <div className="industries-reference-sector__heading">
                    <span className="industries-reference-sector__icon"><IndustryIcon kind={industry.id} /></span>
                    <p>{industry.eyebrow}</p>
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <div className="industries-reference-sector__systems" aria-label={`Related systems for ${industry.title}`}>
                    {industry.systems.map((system) => <span key={system}>{system}</span>)}
                  </div>
                  <a href={industry.href}>{industry.linkLabel} <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="industries-reference-method" aria-labelledby="industries-method-title">
        <Container className="industries-reference-method__grid">
          <div className="industries-reference-method__intro">
            <p>How we adapt</p>
            <h2 id="industries-method-title">Start with the operation. Engineer from there.</h2>
          </div>

          <ol className="industries-reference-method__steps">
            <li>
              <span>01</span>
              <div><strong>Understand the environment</strong><p>Map the workflow, constraints, users, assets and decisions that shape the real work.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><strong>Engineer the system</strong><p>Connect the right software, automation, infrastructure and interfaces around that operating model.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><strong>Deploy and evolve</strong><p>Put the system into use, learn from the operation and strengthen it as requirements change.</p></div>
            </li>
          </ol>
        </Container>
      </section>

      <section className="industries-reference-cta" aria-labelledby="industries-reference-cta-title">
        <Container className="industries-reference-cta__inner">
          <div>
            <h2 id="industries-reference-cta-title">Have an operation that needs a better system?</h2>
            <p>Show us the environment, workflow or constraint.</p>
          </div>
          <a className="industries-reference-cta__button" href="/contact">Discuss your project <span aria-hidden="true">→</span></a>
        </Container>
      </section>
    </div>
  )
}
