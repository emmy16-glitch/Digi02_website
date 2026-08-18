import { Fragment, useMemo, useState } from 'react'
import customSoftwareShowcase from '../assets/editorial/solutions/custom-software-team.jpg'
import digiVoltShowcase from '../assets/editorial/solutions/digivolt-commercial-charging.jpg'
import eManagementShowcase from '../assets/editorial/solutions/e-management-african-workflow.jpg'
import enterpriseShowcase from '../assets/editorial/solutions/enterprise-engineering-workspace.jpg'
import paymentShowcase from '../assets/editorial/solutions/payment-terminal-contactless.jpg'
import skyGridShowcase from '../assets/editorial/solutions/skygrid-drone-pilot.jpg'
import solutionsHero from '../assets/editorial/solutions/solutions-hero-industrial-sunset.jpg'
import { Container } from '../components/Container'
import '../styles/solutions-page.css'
import '../styles/solutions-reference-tuning.css'
import '../styles/solutions-strict-mockup.css'

type SolutionCategory =
  | 'All Solutions'
  | 'Autonomous Systems'
  | 'Enterprise'
  | 'Finance & Payments'
  | 'Automation'
  | 'Digital Platforms'

type Solution = {
  title: string
  category: Exclude<SolutionCategory, 'All Solutions'>
  description: string
  bullets: readonly string[]
  href: string
  image: string
  icon: string
  className?: string
}

const categories: readonly SolutionCategory[] = [
  'All Solutions',
  'Autonomous Systems',
  'Enterprise',
  'Finance & Payments',
  'Automation',
  'Digital Platforms',
]

const solutions: readonly Solution[] = [
  {
    title: 'SkyGrid',
    category: 'Autonomous Systems',
    description: 'Autonomous UAV systems for mapping, inspection, surveillance and logistics.',
    bullets: ['Real-time data capture', 'AI-powered analytics', 'Mission-ready reliability'],
    href: '/solutions/skygrid',
    image: skyGridShowcase,
    icon: 'autonomy',
    className: 'solutions-reference-card--featured',
  },
  {
    title: 'DigiVolt',
    category: 'Digital Platforms',
    description: 'Smart energy technology and infrastructure for a cleaner future.',
    bullets: ['Smart charging solutions', 'Energy monitoring', 'Grid intelligence'],
    href: '/solutions/digivolt',
    image: digiVoltShowcase,
    icon: 'energy',
    className: 'solutions-reference-card--digivolt',
  },
  {
    title: 'Enterprise Systems',
    category: 'Enterprise',
    description: 'ERP, POS, HR, Payroll and custom platforms that power your operations.',
    bullets: ['Integrated modules', 'Real-time reporting', 'Secure & scalable'],
    href: '/solutions/enterprise-systems',
    image: enterpriseShowcase,
    icon: 'enterprise',
    className: 'solutions-reference-card--enterprise',
  },
  {
    title: 'Payment Systems',
    category: 'Finance & Payments',
    description: 'Secure and scalable payment platforms for businesses and institutions.',
    bullets: ['Multi-channel payments', 'Fraud & risk management', 'Reconciliation & settlement'],
    href: '/solutions/payment-systems',
    image: paymentShowcase,
    icon: 'payment',
    className: 'solutions-reference-card--payment',
  },
  {
    title: 'E-Management',
    category: 'Automation',
    description: 'Unified digital platform for workflows, approvals and citizen services.',
    bullets: ['Workflow automation', 'Document management', 'Transparency & accountability'],
    href: '/solutions/e-management',
    image: eManagementShowcase,
    icon: 'management',
    className: 'solutions-reference-card--management',
  },
  {
    title: 'Custom Software',
    category: 'Digital Platforms',
    description: 'End-to-end software development tailored to your unique needs.',
    bullets: ['Discovery & strategy', 'Modern engineering', 'Support & evolution'],
    href: '/solutions/custom-software',
    image: customSoftwareShowcase,
    icon: 'software',
    className: 'solutions-reference-card--software',
  },
]

const operationalProof = [
  { icon: 'security', title: 'Secure by design', body: 'Security is engineered in at every layer to protect what matters.' },
  { icon: 'scale', title: 'Built to scale', body: 'Systems that scale with your mission, data and ambitions.' },
  { icon: 'people', title: 'Designed around people', body: 'Intuitive experiences that empower teams and drive adoption.' },
  { icon: 'local', title: 'Supported locally', body: 'On-the-ground support with deep understanding of your context.' },
] as const

function SolutionIcon({ kind }: { kind: string }) {
  if (kind === 'energy') return <span aria-hidden="true">ϟ</span>
  if (kind === 'software') return <span aria-hidden="true">&lt;/&gt;</span>

  const paths: Record<string, React.ReactNode> = {
    autonomy: <><circle cx="12" cy="12" r="2.3" /><path d="M12 9.7V5M12 19v-4.7M9.7 12H5M19 12h-4.7M8.7 8.7 6 6M18 18l-2.7-2.7M15.3 8.7 18 6M6 18l2.7-2.7" /></>,
    enterprise: <><rect x="3" y="4" width="8" height="7" rx="1" /><rect x="13" y="4" width="8" height="7" rx="1" /><rect x="8" y="14" width="8" height="6" rx="1" /><path d="M7 11v2h10v-2M12 13v1" /></>,
    payment: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M7 15h4" /></>,
    management: <><path d="M4 19h16M6 17V8h12v9M9 17v-5h6v5" /><path d="M5 8 12 4l7 4" /></>,
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[kind]}</svg>
}

function ProofIcon({ kind }: { kind: string }) {
  const paths: Record<string, React.ReactNode> = {
    security: <><path d="M12 3 19 6v5c0 4.8-2.4 8-7 10-4.6-2-7-5.2-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    scale: <><path d="M5 20V13M10 20V9M15 20V6M20 20V3" /><path d="M3 20h19" /></>,
    people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c.5-4.3 2.4-6.5 6-6.5S14.5 15.7 15 20M14 14.5c3.9-.2 6 1.7 6.7 5.5" /></>,
    local: <><path d="m4 7 5-3 4 2 7-2v13l-7 3-4-2-5 2V7Z" /><path d="M9 4v14M13 6v14" /></>,
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[kind]}</svg>
}

function OperationalProof() {
  return (
    <section className="solutions-operational-proof" aria-labelledby="solutions-proof-title">
      <p className="solutions-operational-proof__eyebrow" id="solutions-proof-title">Built for real operations</p>
      <div className="solutions-operational-proof__grid">
        {operationalProof.map((item) => (
          <article key={item.title}>
            <span className="solutions-operational-proof__icon"><ProofIcon kind={item.icon} /></span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState<SolutionCategory>('All Solutions')
  const visibleSolutions = useMemo(() => activeCategory === 'All Solutions' ? solutions : solutions.filter((solution) => solution.category === activeCategory), [activeCategory])

  return (
    <div className="solutions-reference-page">
      <section className="solutions-reference-hero" aria-labelledby="solutions-reference-title" style={{ backgroundImage: `url(${solutionsHero})` }}>
        <Container className="solutions-reference-hero__inner">
          <div className="solutions-reference-hero__copy">
            <nav className="solutions-reference-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span>Solutions</span></nav>
            <h1 id="solutions-reference-title">Technology solutions <br />for <span>real operations.</span></h1>
            <p className="solutions-reference-hero__lead">Digi02 builds secure, scalable and intelligent systems that power critical operations across industries.</p>
            <div className="solutions-reference-hero__principles" aria-label="Solution principles">
              <div><span className="solutions-reference-principle-icon" aria-hidden="true">✣</span><p><strong>Built for impact</strong><small>Practical technology that solves real business challenges.</small></p></div>
              <div><span className="solutions-reference-principle-icon" aria-hidden="true">▧</span><p><strong>Engineered for scale</strong><small>Robust, reliable and ready for the future.</small></p></div>
            </div>
          </div>
          <aside className="solutions-reference-trust" aria-label="Trusted organisations"><small>Trusted by</small><strong>NDA</strong><span>Nigerian Defence Academy</span><strong>NCS</strong><span>Nigeria Customs Service</span><strong>NEXIM</strong><span>Export-Import Bank</span><strong>Sterling</strong></aside>
        </Container>
      </section>

      <section className="solutions-reference-filter" aria-label="Filter solutions">
        <Container className="solutions-reference-filter__inner">
          <div className="solutions-reference-filter__buttons">
            {categories.map((category) => <button className={activeCategory === category ? 'is-active' : undefined} key={category} onClick={() => setActiveCategory(category)} type="button">{category}</button>)}
          </div>
          <a href="/industries">Explore by industry <span aria-hidden="true">⌄</span></a>
        </Container>
      </section>

      <section className="solutions-reference-showcase" aria-labelledby="solutions-showcase-title">
        <Container>
          <header className="solutions-reference-showcase__heading"><p>Our flagship solutions</p><h2 id="solutions-showcase-title">Purpose-built technology. Measurable impact.</h2></header>
          <div className="solutions-reference-grid" aria-live="polite">
            {visibleSolutions.map((solution) => {
              const isAllSolutions = activeCategory === 'All Solutions'
              const cardClassName = ['solutions-reference-card', solution.className ?? '', isAllSolutions && solution.title === 'Custom Software' ? 'solutions-reference-card--wide' : ''].filter(Boolean).join(' ')
              return (
                <Fragment key={solution.title}>
                  <article className={cardClassName} style={{ backgroundImage: `url(${solution.image})` }}>
                    <div className="solutions-reference-card__shade" aria-hidden="true" />
                    <div className="solutions-reference-card__content">
                      <div className="solutions-reference-card__title-row"><span className="solutions-reference-card__icon"><SolutionIcon kind={solution.icon} /></span><h3>{solution.title}</h3></div>
                      <p>{solution.description}</p>
                      <ul>{solution.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                      <a href={solution.href}>Learn more <span aria-hidden="true">→</span></a>
                    </div>
                  </article>
                  {isAllSolutions && solution.title === 'E-Management' ? <OperationalProof /> : null}
                </Fragment>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="solutions-reference-cta" aria-labelledby="solutions-reference-cta-title">
        <Container className="solutions-reference-cta__inner"><div><h2 id="solutions-reference-cta-title">Not sure which solution fits?</h2><p>Talk to our experts. We’ll help you find the right fit.</p></div><a className="solutions-reference-cta__button" href="/contact">Discuss your project <span aria-hidden="true">→</span></a></Container>
      </section>
    </div>
  )
}
