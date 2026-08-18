import enterpriseVisual from '../assets/editorial/industries/enterprise-black-tech-team.jpg'
import energyVisual from '../assets/editorial/industries/energy-african-field-engineer.jpeg'
import fieldVisual from '../assets/editorial/industries/field-african-drone-training.jpg'
import financeVisual from '../assets/editorial/industries/finance-african-mobile-business.jpeg'
import governmentVisual from '../assets/editorial/industries/government-civic-tech-workshop.jpg'
import industriesHero from '../assets/editorial/industries/industries-hero-black-african-tech-team.jpg'
import logisticsVisual from '../assets/editorial/industries/logistics-african-operations-team.jpeg'
import { Container } from '../components/Container'
import '../styles/industries-reference.css'

type Industry = {
  id: string
  index: string
  title: string
  eyebrow: string
  context: string
  howDigi02Helps: string
  outcome: string
  systems: readonly string[]
  href: string
  linkLabel: string
  workHref: string
  workLinkLabel: string
  image: string
  imageAlt: string
  imagePosition?: string
  layout: 'wide' | 'split'
}

const industries: readonly Industry[] = [
  {
    id: 'government',
    index: '01',
    title: 'Government & public sector',
    eyebrow: 'Digital public service, built around people.',
    context: 'Citizen requests, approvals, records and collections often slow down when they move between disconnected desks, forms and systems.',
    howDigi02Helps: 'Digi02 connects requests, approvals, document handling, roles and payments in secure e-management systems shaped around public-sector workflows.',
    outcome: 'Faster service, clearer accountability and audit-ready records.',
    systems: ['E-Management', 'Enterprise Systems', 'Payment Systems'],
    href: '/solutions/e-management',
    linkLabel: 'Explore public-sector systems',
    workHref: '/work/kaduna-state-e-management-system',
    workLinkLabel: 'Read Kaduna e-Management case study',
    image: governmentVisual,
    imageAlt: 'Black African civic-technology participants collaborating at a workshop',
    imagePosition: 'center 46%',
    layout: 'wide',
  },
  {
    id: 'energy',
    index: '02',
    title: 'Energy & utilities',
    eyebrow: 'Critical infrastructure, seen clearly.',
    context: 'Asset conditions, inspections and maintenance priorities are difficult to manage when field evidence and office decisions live in separate places.',
    howDigi02Helps: 'Digi02 combines SkyGrid capture, asset registers and purpose-built dashboards so field observations inform planning, maintenance and reporting.',
    outcome: 'Earlier issue detection and a clearer view of essential infrastructure.',
    systems: ['SkyGrid', 'DigiVolt', 'Custom Software'],
    href: '/solutions/digivolt',
    linkLabel: 'Explore energy operations',
    workHref: '/work/thermal-plant-inspection-automation',
    workLinkLabel: 'Read thermal plant case study',
    image: energyVisual,
    imageAlt: 'Black African field engineer inspecting operational equipment',
    imagePosition: 'center 31%',
    layout: 'split',
  },
  {
    id: 'logistics',
    index: '03',
    title: 'Logistics & transport',
    eyebrow: 'Movement coordinated as one operation.',
    context: 'Routes, requests, vehicles and delivery information can drift apart as work moves between dispatch, operators and the field.',
    howDigi02Helps: 'Digi02 builds connected transport workflows for dispatch, mobile updates, status visibility and reporting around every movement.',
    outcome: 'Fewer manual hand-offs and stronger service visibility.',
    systems: ['SkyGrid', 'Enterprise Systems', 'Custom Software'],
    href: '/solutions/skygrid',
    linkLabel: 'Explore logistics systems',
    workHref: '/work',
    workLinkLabel: 'See logistics work',
    image: logisticsVisual,
    imageAlt: 'Black African operations team coordinating work at an active infrastructure site',
    imagePosition: 'center 44%',
    layout: 'split',
  },
  {
    id: 'finance',
    index: '04',
    title: 'Finance & payments',
    eyebrow: 'Every transaction connected to the business behind it.',
    context: 'Payment activity loses value when reconciliation, merchant operations, risk controls and reporting are treated as separate processes.',
    howDigi02Helps: 'Digi02 engineers payment journeys and enterprise integrations that bring collection, settlement, reconciliation and reporting into one dependable environment.',
    outcome: 'More controlled transactions and faster operational decisions.',
    systems: ['Payment Systems', 'Enterprise Systems', 'Custom Software'],
    href: '/solutions/payment-systems',
    linkLabel: 'Explore payment systems',
    workHref: '/work/sterling-payment-gateway',
    workLinkLabel: 'Read Sterling payment case study',
    image: financeVisual,
    imageAlt: 'Black African business professionals reviewing a mobile device in a commercial setting',
    imagePosition: 'center 40%',
    layout: 'wide',
  },
  {
    id: 'enterprise',
    index: '05',
    title: 'Enterprise & multi-site operations',
    eyebrow: 'One operating picture across teams and locations.',
    context: 'People, transactions and performance data become hard to trust when teams use separate tools and rebuild the same information manually.',
    howDigi02Helps: 'Digi02 connects ERP, payroll, workflow and reporting systems around the way teams already make decisions and manage work.',
    outcome: 'A dependable operating picture that scales with the organisation.',
    systems: ['Enterprise Systems', 'Payroll Automation', 'Custom Software'],
    href: '/solutions/enterprise-systems',
    linkLabel: 'Explore enterprise systems',
    workHref: '/work',
    workLinkLabel: 'See enterprise work',
    image: enterpriseVisual,
    imageAlt: 'Black technology professionals collaborating around a computer with software on screen',
    imagePosition: 'center 48%',
    layout: 'split',
  },
  {
    id: 'field',
    index: '06',
    title: 'Field & autonomous operations',
    eyebrow: 'Technology designed beyond the office.',
    context: 'Distributed teams need more than a field device—they need a trusted path from capture and planning to evidence, decisions and action.',
    howDigi02Helps: 'Digi02 combines autonomous systems, mobile workflows and operational software for inspection, mapping, monitoring and field coordination.',
    outcome: 'Better evidence from the field and more confident mission decisions.',
    systems: ['SkyGrid', 'Custom Software', 'Enterprise Systems'],
    href: '/solutions/skygrid',
    linkLabel: 'Explore autonomous systems',
    workHref: '/work/thermal-plant-inspection-automation',
    workLinkLabel: 'Read inspection automation case study',
    image: fieldVisual,
    imageAlt: 'African drone-training participants working with autonomous aircraft in a field',
    imagePosition: 'center 52%',
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

  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[kind]}</svg>
}

export function IndustriesPage() {
  return (
    <div className="industries-reference-page">
      <section className="industries-reference-hero" aria-labelledby="industries-reference-title" style={{ backgroundImage: `url(${industriesHero})` }}>
        <Container className="industries-reference-hero__inner">
          <div className="industries-reference-hero__copy">
            <nav className="industries-reference-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a><span aria-hidden="true">›</span><span>Industries</span>
            </nav>
            <p className="industries-reference-kicker">Technology for Africa’s operating environments</p>
            <h1 id="industries-reference-title">Technology for the work that <span>moves Africa.</span></h1>
            <p className="industries-reference-hero__lead">From public-service teams to field operations and multi-site enterprises, Digi02 helps African operators turn disconnected processes into clear, dependable systems.</p>
            <a className="industries-reference-hero__cta" href="#industry-landscape">Explore industries <span aria-hidden="true">↓</span></a>
          </div>
          <aside className="industries-reference-hero__index" aria-label="Industry areas">
            <small>Operating environments</small>
            {industries.map((industry) => <a href={`#${industry.id}`} key={industry.id}><span>{industry.index}</span>{industry.title.replace(' & public sector', '').replace(' & utilities', '').replace(' & transport', '').replace(' & payments', '').replace(' & multi-site operations', '').replace('Field & autonomous operations', 'Field operations')}</a>)}
          </aside>
        </Container>
      </section>

      <nav className="industries-reference-rail" aria-label="Jump to industry">
        <Container className="industries-reference-rail__inner">
          {industries.map((industry) => <a href={`#${industry.id}`} key={industry.id}><span className="industries-reference-rail__icon"><IndustryIcon kind={industry.id} /></span><span>{industry.title}</span></a>)}
        </Container>
      </nav>

      <section className="industries-reference-landscape" id="industry-landscape" aria-labelledby="industry-landscape-title">
        <Container>
          <header className="industries-reference-landscape__heading"><p>Where we work</p><h2 id="industry-landscape-title">The system should fit the operation—not force the operation to fit the system.</h2></header>
          <div className="industries-reference-landscape__grid">
            {industries.map((industry) => (
              <article className={`industries-reference-sector industries-reference-sector--${industry.layout}`} id={industry.id} key={industry.id}>
                <div className="industries-reference-sector__media">
                  <img src={industry.image} alt={industry.imageAlt} loading="eager" decoding="async" style={{ objectPosition: industry.imagePosition }} />
                  <span aria-hidden="true">{industry.index}</span>
                </div>
                <div className="industries-reference-sector__content">
                  <div className="industries-reference-sector__heading"><span className="industries-reference-sector__icon"><IndustryIcon kind={industry.id} /></span><p>{industry.eyebrow}</p></div>
                  <h3>{industry.title}</h3>
                  <p className="industries-reference-sector__context">{industry.context}</p>
                  <dl className="industries-reference-sector__explanation">
                    <div><dt>How Digi02 helps</dt><dd>{industry.howDigi02Helps}</dd></div>
                    <div><dt>Operational outcome</dt><dd>{industry.outcome}</dd></div>
                  </dl>
                  <div className="industries-reference-sector__systems" aria-label={`Related systems for ${industry.title}`}>{industry.systems.map((system) => <span key={system}>{system}</span>)}</div>
                  <div className="industries-reference-sector__links">
                    <a href={industry.href}>{industry.linkLabel} <span aria-hidden="true">→</span></a>
                    <a href={industry.workHref}>{industry.workLinkLabel} <span aria-hidden="true">↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="industries-reference-method" aria-labelledby="industries-method-title">
        <Container className="industries-reference-method__grid">
          <div className="industries-reference-method__intro"><p>How we adapt</p><h2 id="industries-method-title">Start with the operation. Engineer from there.</h2></div>
          <ol className="industries-reference-method__steps">
            <li><span>01</span><div><strong>Understand the environment</strong><p>Map the workflow, constraints, users, assets and decisions that shape the real work.</p></div></li>
            <li><span>02</span><div><strong>Engineer the system</strong><p>Connect the right software, automation, infrastructure and interfaces around that operating model.</p></div></li>
            <li><span>03</span><div><strong>Deploy and evolve</strong><p>Put the system into use, learn from the operation and strengthen it as requirements change.</p></div></li>
          </ol>
        </Container>
      </section>

      <section className="industries-reference-cta" aria-labelledby="industries-reference-cta-title">
        <Container className="industries-reference-cta__inner"><div><h2 id="industries-reference-cta-title">Have an operation that needs a better system?</h2><p>Show us the environment, workflow or constraint.</p></div><a className="industries-reference-cta__button" href="/contact">Discuss your project <span aria-hidden="true">→</span></a></Container>
      </section>
    </div>
  )
}
