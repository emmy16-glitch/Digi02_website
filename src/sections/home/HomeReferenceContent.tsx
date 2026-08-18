import type { ReactNode } from 'react'
import { Container } from '../../components/Container'
import digiVoltShowcase from '../../assets/digivolt/digivolt-electric-mobility-showcase.png'
import emergingTechVisual from '../../assets/emerging-tech/emerging-tech-learning-visual.png'
import erpPosShowcase from '../../assets/erp-pos/erp-pos-multidevice-showcase.png'
import digi02ControlRoom from '../../assets/generated/digi02-control-room-hero.webp'
import paymentPosVisual from '../../assets/solutions/payment-pos.webp'
import skyGridFieldOperations from '../../assets/solutions/skygrid-field-operations.webp'
import skyGridShowcase from '../../assets/skygrid/skygrid-showcase-concept.png'

type LineIconKind =
  | 'code'
  | 'automation'
  | 'energy'
  | 'security'
  | 'people'
  | 'briefcase'
  | 'globe'
  | 'award'

type LineIconProps = {
  kind: LineIconKind
}

function LineIcon({ kind }: LineIconProps) {
  if (kind === 'code') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m9 6-6 6 6 6M15 6l6 6-6 6M14 3l-4 18" />
      </svg>
    )
  }

  if (kind === 'automation') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 9.5V5M12 19v-4.5M9.5 12H5M19 12h-4.5" />
        <path d="m8.8 8.8-2.7-2.7M17.9 17.9l-2.7-2.7M15.2 8.8l2.7-2.7M6.1 17.9l2.7-2.7" />
      </svg>
    )
  }

  if (kind === 'energy') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m13.5 2-8 12H11l-.5 8 8-12H13l.5-8Z" />
      </svg>
    )
  }

  if (kind === 'security') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3 20 6v5c0 5-3 8.2-8 10-5-1.8-8-5-8-10V6l8-3Z" />
        <rect x="9" y="10" width="6" height="5" rx="1" />
        <path d="M10.5 10V8.8a1.5 1.5 0 0 1 3 0V10" />
      </svg>
    )
  }

  if (kind === 'people') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="8" cy="8" r="3" />
        <circle cx="16.5" cy="9" r="2.5" />
        <path d="M2.5 20c.5-4 2.5-6 5.5-6s5 2 5.5 6M13 15c1-.8 2.1-1.2 3.5-1.2 2.7 0 4.4 1.8 5 5.2" />
      </svg>
    )
  }

  if (kind === 'briefcase') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="12" rx="1.5" />
        <path d="M9 7V5h6v2M3 11h18M10 11v2h4v-2" />
      </svg>
    )
  }

  if (kind === 'globe') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 12h17M12 3c2.3 2.3 3.5 5.3 3.5 9s-1.2 6.7-3.5 9M12 3c-2.3 2.3-3.5 5.3-3.5 9s1.2 6.7 3.5 9" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="9" r="5" />
      <path d="m9 14-2 7 5-2 5 2-2-7M9 9l2 2 4-4" />
    </svg>
  )
}

type SectionHeadingProps = {
  label: string
  action?: ReactNode
}

function SectionHeading({ label, action }: SectionHeadingProps) {
  return (
    <header className="reference-home-section-heading">
      <p>{label}</p>
      {action}
    </header>
  )
}

const flagshipSolutions = [
  {
    href: '/solutions/skygrid',
    title: 'SkyGrid',
    label: '△',
    image: skyGridShowcase,
    imageAlt: 'SkyGrid UAV operations concept',
    copy: 'Autonomous UAV systems for mapping, inspection, surveillance and logistics.',
  },
  {
    href: '/solutions/digivolt',
    title: 'DigiVolt',
    label: 'ϟ',
    image: digiVoltShowcase,
    imageAlt: 'DigiVolt electric mobility technology showcase',
    copy: 'Electric mobility technology and smart charging infrastructure for a cleaner future.',
  },
  {
    href: '/solutions/enterprise-systems',
    title: 'Enterprise Systems',
    label: '▧',
    image: erpPosShowcase,
    imageAlt: 'Enterprise systems interface across multiple devices',
    copy: 'ERP, POS, HR, Payroll and custom platforms that power your operations.',
  },
] as const

const capabilityCards = [
  {
    icon: 'code',
    title: 'We Build',
    copy: 'Custom software and platforms that solve real business problems and scale with you.',
    href: '/solutions/custom-software',
  },
  {
    icon: 'automation',
    title: 'We Automate',
    copy: 'Autonomous systems and smart technologies that collect data, reduce risk and save time.',
    href: '/solutions/skygrid',
  },
  {
    icon: 'energy',
    title: 'We Electrify',
    copy: 'Mobility and energy solutions that drive efficiency and enable sustainable operations.',
    href: '/solutions/digivolt',
  },
  {
    icon: 'security',
    title: 'We Secure',
    copy: 'Cybersecurity and infrastructure that protect your systems, data and reputation.',
    href: '/solutions',
  },
] as const

const selectedWork = [
  {
    href: '/work',
    category: 'Energy',
    title: 'Thermal Plant Inspection Automation',
    copy: 'Autonomous drone inspections with AI analytics across critical infrastructure.',
    image: skyGridFieldOperations,
    imageAlt: 'UAV field operations used for infrastructure inspection',
  },
  {
    href: '/work',
    category: 'Fintech',
    title: 'Sterling Payment Gateway',
    copy: 'A secure, scalable payment infrastructure processing millions of transactions.',
    image: paymentPosVisual,
    imageAlt: 'Point-of-sale payment terminal used for a fintech case study',
  },
  {
    href: '/work',
    category: 'Public Sector',
    title: 'Kaduna State e-Management System',
    copy: 'Unified digital platform for workflows, approvals and citizen services.',
    image: digi02ControlRoom,
    imageAlt: 'Digi02 operational control environment used for a public-sector case study',
  },
] as const

const impactMetrics = [
  { icon: 'people', value: '50+', label: 'Team of builders and innovators' },
  { icon: 'briefcase', value: '100+', label: 'Projects delivered across sectors' },
  { icon: 'globe', value: '10+', label: 'States impacted across Nigeria' },
  { icon: 'award', value: 'ISO 27001', label: 'Security and quality standards' },
] as const

export function HomeReferenceSolutions() {
  return (
    <section className="reference-home-solutions" aria-labelledby="reference-solutions-title">
      <Container>
        <SectionHeading
          label="Our flagship solutions"
          action={
            <a href="/solutions">
              Explore all solutions <span aria-hidden="true">→</span>
            </a>
          }
        />
        <h2 id="reference-solutions-title" className="visually-hidden">
          Digi02 flagship solutions
        </h2>

        <div className="reference-home-solutions__grid">
          {flagshipSolutions.map((solution) => (
            <a
              className="reference-home-solution-card"
              href={solution.href}
              key={solution.title}
              data-solution={solution.title}
            >
              <img src={solution.image} alt={solution.imageAlt} loading="lazy" decoding="async" />
              <span className="reference-home-solution-card__shade" aria-hidden="true" />
              <span className="reference-home-solution-card__content">
                <strong>
                  <i aria-hidden="true">{solution.label}</i> {solution.title}
                </strong>
                <span>{solution.copy}</span>
                <small>
                  Learn more <b aria-hidden="true">→</b>
                </small>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function HomeReferenceCapabilities() {
  return (
    <section className="reference-home-capabilities" aria-labelledby="reference-capabilities-title">
      <Container>
        <SectionHeading label="What Digi02 does" />
        <h2 id="reference-capabilities-title" className="visually-hidden">
          What Digi02 does
        </h2>

        <div className="reference-home-capabilities__grid">
          {capabilityCards.map((card) => (
            <a className="reference-home-capability-card" href={card.href} key={card.title}>
              <span className="reference-home-capability-card__icon reference-home-icon-badge">
                <LineIcon kind={card.icon as LineIconKind} />
              </span>
              <strong>{card.title}</strong>
              <span>{card.copy}</span>
              <b aria-hidden="true">→</b>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function HomeReferenceWork() {
  return (
    <section className="reference-home-work" aria-labelledby="reference-work-title">
      <Container>
        <SectionHeading
          label="Selected work"
          action={
            <a href="/work">
              View all projects <span aria-hidden="true">→</span>
            </a>
          }
        />
        <h2 id="reference-work-title" className="visually-hidden">
          Selected Digi02 work
        </h2>

        <div className="reference-home-work__grid">
          {selectedWork.map((item) => (
            <a
              className="reference-home-work-card"
              href={item.href}
              key={item.title}
              data-work={item.title}
            >
              <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
              <span className="reference-home-work-card__shade" aria-hidden="true" />
              <span className="reference-home-work-card__content">
                <small>{item.category}</small>
                <strong>{item.title}</strong>
                <span>{item.copy}</span>
                <b>
                  View case study <i aria-hidden="true">→</i>
                </b>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function HomeReferenceImpact() {
  return (
    <section className="reference-home-impact" aria-labelledby="reference-impact-title">
      <Container className="reference-home-impact__layout">
        <div className="reference-home-impact__intro">
          <svg className="reference-home-impact__africa" aria-hidden="true" viewBox="0 0 180 210">
            <path d="M84 8 111 16l13 21 26 15 20 33-10 29-25 12-10 25-22 17-6 29-17 11-13-21-25-20-10-29-19-13 7-28-13-27 17-18 6-26 26-14 28-4Z" />
            <path d="M82 22 69 52l13 25-9 31 22 23-4 43" />
            <path d="m45 65 31 5 31-18 23 19 24 4" />
          </svg>
          <div>
            <h2 id="reference-impact-title">Built in Kaduna.<br />Building for Africa.</h2>
            <p>
              Digi02 is a Nigerian technology company headquartered in Kaduna. We partner with
              organisations across Africa and beyond to design technology that drives progress.
            </p>
          </div>
        </div>

        <div className="reference-home-impact__metrics">
          {impactMetrics.map((metric) => (
            <div className="reference-home-impact__metric" key={metric.value}>
              <span className="reference-home-impact__metric-icon">
                <LineIcon kind={metric.icon as LineIconKind} />
              </span>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function HomeReferenceFinalCta() {
  return (
    <section className="reference-home-final-cta" aria-labelledby="reference-final-cta-title">
      <Container className="reference-home-final-cta__layout">
        <div>
          <h2 id="reference-final-cta-title">Have a project in mind?</h2>
          <p>Let&apos;s build technology that drives real results.</p>
        </div>
        <a className="reference-home__button reference-home__button--primary" href="/contact">
          Discuss your project <span aria-hidden="true">→</span>
        </a>
      </Container>
    </section>
  )
}

export function HomeReferenceLightSections() {
  return (
    <div className="reference-home-light">
      <HomeReferenceSolutions />
      <HomeReferenceCapabilities />
      <HomeReferenceWork />
      <img className="reference-home-light__ghost" src={emergingTechVisual} alt="" aria-hidden="true" />
    </div>
  )
}
