import { useMemo, useState } from 'react'
import digiVoltShowcase from '../assets/digivolt/digivolt-electric-mobility-showcase.png'
import digiNorthShowcase from '../assets/diginorth/diginorth-community-visual.png'
import emergingTechShowcase from '../assets/emerging-tech/emerging-tech-learning-visual.png'
import enterpriseShowcase from '../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridHero from '../assets/skygrid/skygrid-operations-center.webp'
import skyGridShowcase from '../assets/skygrid/skygrid-showcase-concept.png'
import { Container } from '../components/Container'
import '../styles/solutions-page.css'

type SolutionCategory = 'All Solutions' | 'Autonomous Systems' | 'Enterprise' | 'Finance & Payments' | 'Automation' | 'Digital Platforms'

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
  },
  {
    title: 'Enterprise Systems',
    category: 'Enterprise',
    description: 'ERP, POS, HR, Payroll and custom platforms that power your operations.',
    bullets: ['Integrated modules', 'Real-time reporting', 'Secure & scalable'],
    href: '/solutions/enterprise-systems',
    image: enterpriseShowcase,
    icon: 'enterprise',
  },
  {
    title: 'Payment Systems',
    category: 'Finance & Payments',
    description: 'Secure and scalable payment platforms for businesses and institutions.',
    bullets: ['Multi-channel payments', 'Fraud & risk management', 'Reconciliation & settlement'],
    href: '/solutions/payment-systems',
    image: enterpriseShowcase,
    icon: 'payment',
    className: 'solutions-reference-card--payment',
  },
  {
    title: 'E-Management',
    category: 'Automation',
    description: 'Unified digital platform for workflows, approvals and citizen services.',
    bullets: ['Workflow automation', 'Document management', 'Transparency & accountability'],
    href: '/solutions/e-management',
    image: digiNorthShowcase,
    icon: 'management',
  },
  {
    title: 'Payroll Automation',
    category: 'Automation',
    description: 'Automate payroll, compliance and employee management with ease.',
    bullets: ['Salary processing', 'Tax & pension compliance', 'Self-service portal'],
    href: '/solutions/payroll-automation',
    image: enterpriseShowcase,
    icon: 'payroll',
    className: 'solutions-reference-card--payroll',
  },
  {
    title: 'Custom Software',
    category: 'Digital Platforms',
    description: 'End-to-end software development tailored to your unique needs.',
    bullets: ['Discovery & strategy', 'Modern engineering', 'Support & evolution'],
    href: '/solutions/custom-software',
    image: emergingTechShowcase,
    icon: 'software',
    className: 'solutions-reference-card--software',
  },
]

function SolutionIcon({ kind }: { kind: string }) {
  if (kind === 'energy') return <span aria-hidden="true">ϟ</span>
  if (kind === 'software') return <span aria-hidden="true">&lt;/&gt;</span>

  const paths: Record<string, React.ReactNode> = {
    autonomy: (
      <>
        <circle cx="12" cy="12" r="2.3" />
        <path d="M12 9.7V5M12 19v-4.7M9.7 12H5M19 12h-4.7M8.7 8.7 6 6M18 18l-2.7-2.7M15.3 8.7 18 6M6 18l2.7-2.7" />
      </>
    ),
    enterprise: (
      <>
        <rect x="3" y="4" width="8" height="7" rx="1" />
        <rect x="13" y="4" width="8" height="7" rx="1" />
        <rect x="8" y="14" width="8" height="6" rx="1" />
        <path d="M7 11v2h10v-2M12 13v1" />
      </>
    ),
    payment: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 15h4" />
      </>
    ),
    management: (
      <>
        <path d="M4 19h16M6 17V8h12v9M9 17v-5h6v5" />
        <path d="M5 8 12 4l7 4" />
      </>
    ),
    payroll: (
      <>
        <circle cx="8" cy="9" r="3" />
        <circle cx="16" cy="9" r="3" />
        <path d="M3 20c.4-4 2-6 5-6s4.6 2 5 6M11 20c.4-4 2-6 5-6s4.6 2 5 6" />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[kind]}
    </svg>
  )
}

export function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState<SolutionCategory>('All Solutions')

  const visibleSolutions = useMemo(
    () =>
      activeCategory === 'All Solutions'
        ? solutions
        : solutions.filter((solution) => solution.category === activeCategory),
    [activeCategory],
  )

  return (
    <div className="solutions-reference-page">
      <section className="solutions-reference-hero" aria-labelledby="solutions-reference-title">
        <div className="solutions-reference-hero__media" aria-hidden="true">
          <img src={skyGridHero} alt="" decoding="async" fetchPriority="high" />
        </div>
        <Container className="solutions-reference-hero__inner">
          <div className="solutions-reference-hero__copy">
            <nav className="solutions-reference-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <span>Solutions</span>
            </nav>

            <h1 id="solutions-reference-title">
              Technology solutions
              <br />
              for <span>real operations.</span>
            </h1>
            <p className="solutions-reference-hero__lead">
              Digi02 builds secure, scalable and intelligent systems that power critical operations across industries.
            </p>

            <div className="solutions-reference-hero__principles" aria-label="Solution principles">
              <div>
                <span className="solutions-reference-principle-icon" aria-hidden="true">✣</span>
                <p><strong>Built for impact</strong><small>Practical technology that solves real business challenges.</small></p>
              </div>
              <div>
                <span className="solutions-reference-principle-icon" aria-hidden="true">▧</span>
                <p><strong>Engineered for scale</strong><small>Robust, reliable and ready for the future.</small></p>
              </div>
            </div>
          </div>

          <aside className="solutions-reference-trust" aria-label="Trusted organisations">
            <small>Trusted by</small>
            <strong>NDA</strong>
            <span>Nigerian Defence Academy</span>
            <strong>NCS</strong>
            <span>Nigeria Customs Service</span>
            <strong>NEXIM</strong>
            <span>Export-Import Bank</span>
            <strong>Sterling</strong>
          </aside>
        </Container>
      </section>

      <section className="solutions-reference-filter" aria-label="Filter solutions">
        <Container className="solutions-reference-filter__inner">
          <div className="solutions-reference-filter__buttons">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? 'is-active' : undefined}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
          <a href="/industries">Explore by industry <span aria-hidden="true">⌄</span></a>
        </Container>
      </section>

      <section className="solutions-reference-showcase" aria-labelledby="solutions-showcase-title">
        <Container>
          <header className="solutions-reference-showcase__heading">
            <p>Our flagship solutions</p>
            <h2 id="solutions-showcase-title">Purpose-built technology. Measurable impact.</h2>
          </header>

          <div className="solutions-reference-grid" aria-live="polite">
            {visibleSolutions.map((solution) => (
              <article className={`solutions-reference-card ${solution.className ?? ''}`} key={solution.title}>
                <img src={solution.image} alt="" loading="lazy" decoding="async" />
                <div className="solutions-reference-card__shade" aria-hidden="true" />
                <div className="solutions-reference-card__content">
                  <div className="solutions-reference-card__title-row">
                    <span className="solutions-reference-card__icon"><SolutionIcon kind={solution.icon} /></span>
                    <h3>{solution.title}</h3>
                  </div>
                  <p>{solution.description}</p>
                  <ul>
                    {solution.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <a href={solution.href}>Learn more <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="solutions-reference-cta" aria-labelledby="solutions-reference-cta-title">
        <Container className="solutions-reference-cta__inner">
          <div>
            <h2 id="solutions-reference-cta-title">Not sure which solution fits?</h2>
            <p>Talk to our experts. We’ll help you find the right fit.</p>
          </div>
          <a className="solutions-reference-cta__button" href="/contact">Discuss your project <span aria-hidden="true">→</span></a>
        </Container>
      </section>
    </div>
  )
}
