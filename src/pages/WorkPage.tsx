import { useMemo, useState } from 'react'
import enterpriseVisual from '../assets/editorial/work/enterprise-african-operations-team.jpeg'
import fleetVisual from '../assets/editorial/work/fleet-african-truck-driver.jpeg'
import gridVisual from '../assets/editorial/work/grid-african-field-engineer.jpeg'
import kadunaVisual from '../assets/editorial/work/kaduna-african-workflow-team.jpeg'
import sterlingVisual from '../assets/editorial/work/sterling-african-mobile-payment.jpeg'
import workHeroVisual from '../assets/editorial/work/work-hero-black-african-tech-team.jpg'
import thermalVisual from '../assets/user-provided/field-drone-team.png'
import { Container } from '../components/Container'
import '../styles/work-reference.css'

type WorkFilter = 'All Work' | 'Energy' | 'Finance' | 'Public Sector' | 'Mobility' | 'Enterprise'

type NamedCase = {
  industry: Exclude<WorkFilter, 'All Work'>
  category: string
  title: string
  summary: string
  challenge: string
  approach: string
  outcome: string
  tags: readonly string[]
  caseHref: string
  caseLabel: string
  solutionHref: string
  solutionLabel: string
  image: string
  imageAlt: string
  imagePosition: string
}

type Application = {
  industry: Exclude<WorkFilter, 'All Work'>
  category: string
  title: string
  summary: string
  href: string
  label: string
  image: string
  imageAlt: string
  imagePosition: string
}

const filters: readonly WorkFilter[] = ['All Work', 'Energy', 'Finance', 'Public Sector', 'Mobility', 'Enterprise']

const featuredCase: NamedCase = {
  industry: 'Energy',
  category: 'Energy / Automation',
  title: 'Thermal Plant Inspection Automation',
  summary: 'An inspection workflow that brings mission planning, field capture and operational review into one coordinated system.',
  challenge: 'Manual inspection processes created fragmented records, slow review cycles and limited visibility across the operation.',
  approach: 'Digi02 connected mission planning, autonomous capture, inspection workflows and reporting into one operational flow—so field evidence could be reviewed with the context needed for action.',
  outcome: 'Faster inspection review. Clearer operational records. Safer field coordination.',
  tags: ['SkyGrid', 'AI / ML', 'Computer Vision', 'IoT', 'Cloud'],
  caseHref: '/work/thermal-plant-inspection-automation',
  caseLabel: 'Read the inspection automation case study',
  solutionHref: '/solutions/skygrid',
  solutionLabel: 'Explore SkyGrid',
  image: thermalVisual,
  imageAlt: 'Black African drone-inspection team preparing a UAV near power infrastructure',
  imagePosition: 'center 50%',
}

const namedCases: readonly NamedCase[] = [
  {
    industry: 'Finance',
    category: 'Finance / Payments',
    title: 'Sterling Payment Gateway',
    summary: 'Secure, scalable payment infrastructure designed to process high-volume transactions with clear operational visibility.',
    challenge: 'Payment activity needs to remain connected to the records and reporting that give each transaction business meaning.',
    approach: 'The work focused on connecting payment experiences with transaction states, operational records and the context finance teams need for reconciliation.',
    outcome: 'Clearer payment states. Connected transaction records. More useful reporting context.',
    tags: ['Payment Systems', 'Settlement', 'Reconciliation', 'Operations'],
    caseHref: '/work/sterling-payment-gateway',
    caseLabel: 'Read the Sterling payment case study',
    solutionHref: '/solutions/payment-systems',
    solutionLabel: 'Explore Payment Systems',
    image: sterlingVisual,
    imageAlt: 'Black African professional using a payment card beside a laptop',
    imagePosition: 'center 47%',
  },
  {
    industry: 'Public Sector',
    category: 'Public Sector / Platforms',
    title: 'Kaduna State e-Management System',
    summary: 'A unified digital platform for workflows, approvals, records and citizen-facing services.',
    challenge: 'Public-service environments depend on many handoffs. When work and decisions become disconnected, accountability becomes harder to see.',
    approach: 'The platform brings workflows, approvals, records and service delivery into a more coherent institutional system of record.',
    outcome: 'More visible ownership. Connected approvals and records. Clearer service workflows.',
    tags: ['E-Management', 'Workflows', 'Approvals', 'Records'],
    caseHref: '/work/kaduna-state-e-management-system',
    caseLabel: 'Read the Kaduna e-Management case study',
    solutionHref: '/solutions/e-management',
    solutionLabel: 'Explore E-Management',
    image: kadunaVisual,
    imageAlt: 'Black African team collaborating around laptops and documents in a workflow meeting',
    imagePosition: 'center 48%',
  },
]

const applications: readonly Application[] = [
  { industry: 'Energy', category: 'Operational application / Energy', title: 'Turn field evidence into maintenance decisions.', summary: 'For energy teams that need inspection findings, asset context and operational priorities to reach the same decision-makers without delay.', href: '/solutions/skygrid', label: 'Explore SkyGrid', image: gridVisual, imageAlt: 'Black African field engineer taking a distance measurement in protective equipment', imagePosition: 'center 37%' },
  { industry: 'Mobility', category: 'Operational application / Mobility', title: 'Keep movement visible from dispatch to arrival.', summary: 'For mobility and logistics teams that need vehicle activity, route progress and operating status to remain connected across the day.', href: '/solutions/digivolt', label: 'Explore DigiVolt', image: fleetVisual, imageAlt: 'Black African truck driver at work in a transport vehicle', imagePosition: 'center 50%' },
  { industry: 'Enterprise', category: 'Operational application / Enterprise', title: 'Give every team the same operating picture.', summary: 'For organisations bringing payroll, workflow, records and reporting into one dependable enterprise environment.', href: '/solutions/enterprise-systems', label: 'Explore Enterprise Systems', image: enterpriseVisual, imageAlt: 'Black African business and technology team working together around a laptop and notes', imagePosition: 'center 47%' },
]

const deliverySteps = [
  ['01', 'Understand the environment', 'Map the workflow, constraints, people, assets and decisions that shape the real work.'],
  ['02', 'Engineer the system', 'Connect the right software, automation, field technology and interfaces around that operating model.'],
  ['03', 'Deploy and evolve', 'Put the system into use, learn from the operation and strengthen it as requirements change.'],
] as const

function CaseLinks({ item }: { item: NamedCase }) {
  return <div className="work-reference-links"><a href={item.caseHref}>{item.caseLabel} <span aria-hidden="true">→</span></a><a href={item.solutionHref}>{item.solutionLabel} <span aria-hidden="true">↗</span></a></div>
}

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>('All Work')
  const visibleNamed = useMemo(() => namedCases.filter((item) => activeFilter === 'All Work' || item.industry === activeFilter), [activeFilter])
  const visibleApplications = useMemo(() => applications.filter((item) => activeFilter === 'All Work' || item.industry === activeFilter), [activeFilter])
  const showFeatured = activeFilter === 'All Work' || activeFilter === 'Energy'
  const visibleCount = visibleNamed.length + visibleApplications.length + (showFeatured ? 1 : 0)

  return (
    <main className="work-reference-page">
      <section className="work-reference-hero" aria-labelledby="work-reference-title" style={{ backgroundImage: `url(${workHeroVisual})` }}>
        <Container className="work-reference-hero__inner"><p className="work-reference-kicker">Our Work</p><h1 id="work-reference-title">Technology proven where the <span>work is real.</span></h1><p>Digi02 partners with organisations that need clearer operations—not more disconnected tools. These selected engagements show how field intelligence, payments, public-service workflows and enterprise systems can be engineered around the way work actually moves.</p><a className="work-reference-hero__cta" href="#work-filter">Explore selected work <span aria-hidden="true">↓</span></a></Container>
      </section>

      <section className="work-reference-filter" id="work-filter" aria-label="Filter work by industry"><Container className="work-reference-filter__inner"><div className="work-reference-filter__buttons" role="group" aria-label="Industry categories">{filters.map((filter) => <button className={filter === activeFilter ? 'is-active' : ''} key={filter} type="button" aria-pressed={filter === activeFilter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><p aria-live="polite">{visibleCount} {visibleCount === 1 ? 'item' : 'items'} shown</p></Container></section>

      {showFeatured && <section className="work-reference-featured" id="featured-work" aria-labelledby="featured-case-title"><Container><header className="work-reference-section-heading"><p>Featured case study</p><h2 id="featured-case-title">See the field. Understand the operation.</h2></header><article className="work-reference-featured__card"><div className="work-reference-featured__media"><img src={featuredCase.image} alt={featuredCase.imageAlt} loading="eager" decoding="async" style={{ objectPosition: featuredCase.imagePosition }} /><span>{featuredCase.category}</span></div><div className="work-reference-featured__content"><h3>{featuredCase.title}</h3><p className="work-reference-summary">{featuredCase.summary}</p><div className="work-reference-story"><div><span>01</span><strong>The challenge</strong><p>{featuredCase.challenge}</p></div><div><span>02</span><strong>How Digi02 helped</strong><p>{featuredCase.approach}</p></div><div><span>03</span><strong>Operational outcome</strong><p>{featuredCase.outcome}</p></div></div><div className="work-reference-tags" aria-label="Systems used">{featuredCase.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><CaseLinks item={featuredCase} /></div></article></Container></section>}

      {visibleNamed.length > 0 && <section className="work-reference-named" aria-labelledby="named-case-title"><Container><header className="work-reference-section-heading"><p>Selected engagements</p><h2 id="named-case-title">One delivery discipline. Different operating realities.</h2></header><div className="work-reference-named__grid">{visibleNamed.map((item) => <article className="work-reference-named__card" key={item.title}><div className="work-reference-named__media"><img src={item.image} alt={item.imageAlt} loading="eager" decoding="async" style={{ objectPosition: item.imagePosition }} /><span>{item.category}</span></div><div className="work-reference-named__content"><h3>{item.title}</h3><p className="work-reference-summary">{item.summary}</p><dl><div><dt>The challenge</dt><dd>{item.challenge}</dd></div><div><dt>How Digi02 helped</dt><dd>{item.approach}</dd></div><div><dt>Operational outcome</dt><dd>{item.outcome}</dd></div></dl><div className="work-reference-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><CaseLinks item={item} /></div></article>)}</div></Container></section>}

      {visibleApplications.length > 0 && <section className="work-reference-applications" aria-labelledby="applications-title"><Container><header className="work-reference-section-heading"><p>Operational applications</p><h2 id="applications-title">Built for the operations still taking shape.</h2></header><div className="work-reference-applications__grid">{visibleApplications.map((item) => <article className="work-reference-applications__card" key={item.title}><div className="work-reference-applications__media" role="img" aria-label={item.imageAlt} style={{ backgroundImage: `url(${item.image})`, backgroundPosition: item.imagePosition }} /><div className="work-reference-applications__content"><p>{item.category}</p><h3>{item.title}</h3><span>{item.summary}</span><a href={item.href}>{item.label} <b aria-hidden="true">→</b></a></div></article>)}</div></Container></section>}

      {visibleCount === 0 && <section className="work-reference-empty"><Container><p>No work is currently listed for this industry.</p><button type="button" onClick={() => setActiveFilter('All Work')}>Show all work →</button></Container></section>}

      <section className="work-reference-method" aria-labelledby="method-title"><Container className="work-reference-method__inner"><header><p>How Digi02 delivers</p><h2 id="method-title">Start with the operation. Engineer from there.</h2></header><ol>{deliverySteps.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></Container></section>
      <section className="work-reference-cta" aria-labelledby="work-cta-title"><Container className="work-reference-cta__inner"><div><p>Start a conversation</p><h2 id="work-cta-title">Have an operation that needs a better system?</h2><span>Show us the environment, workflow or constraint. We will help identify the system that can move the work forward.</span></div><a href="/contact">Discuss your project <b aria-hidden="true">→</b></a></Container></section>
    </main>
  )
}
