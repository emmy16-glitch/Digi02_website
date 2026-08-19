import type { ReactNode } from 'react'
import { Container } from '../../components/Container'
import { HomeBlueprintWorkVisual } from './HomeBlueprintVisuals'

type IconKind = 'skygrid' | 'energy' | 'enterprise' | 'code' | 'automation' | 'security' | 'briefcase' | 'people' | 'globe' | 'award'

function LineIcon({ kind }: { kind: IconKind }) {
  if (kind === 'skygrid' || kind === 'globe') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.2 2.1 3.3 4.9 3.3 8.5S14.2 18.4 12 20.5M12 3.5C9.8 5.6 8.7 8.4 8.7 12s1.1 6.4 3.3 8.5" />
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

  if (kind === 'enterprise') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="4" y="5" width="16" height="4" rx="1" />
        <rect x="4" y="10" width="16" height="4" rx="1" />
        <rect x="4" y="15" width="16" height="4" rx="1" />
        <path d="M7 7h.01M7 12h.01M7 17h.01" />
      </svg>
    )
  }

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
        <path d="M12 9.5V5M12 19v-4.5M9.5 12H5M19 12h-4.5m-6.7-6.7L6.1 6.1m11.8 11.8-2.7-2.7m0-6.4 2.7-2.7M6.1 17.9l2.7-2.7" />
      </svg>
    )
  }

  if (kind === 'security' || kind === 'award') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 3 20 6v5c0 5-3 8.2-8 10-5-1.8-8-5-8-10V6l8-3Z" />
        <path d="m9.2 12 1.8 1.8 3.8-4" />
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

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c.7-4.3 3-6.5 7-6.5s6.3 2.2 7 6.5" />
    </svg>
  )
}

function IconBadge({ kind }: { kind: IconKind }) {
  return (
    <span className="home-blueprint-icon-badge">
      <LineIcon kind={kind} />
    </span>
  )
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="home-blueprint-eyebrow home-blueprint-eyebrow--light">{children}</p>
}

const solutions = [
  {
    href: '/solutions/skygrid',
    title: 'SkyGrid',
    copy: 'Autonomous UAV systems for mapping, inspection, surveillance and logistics.',
    icon: 'skygrid',
  },
  {
    href: '/solutions/digivolt',
    title: 'DigiVolt',
    copy: 'Smart energy technology and infrastructure for a cleaner future.',
    icon: 'energy',
  },
  {
    href: '/solutions/enterprise-systems',
    title: 'Enterprise Systems',
    copy: 'ERP, POS, HR, payroll and custom platforms that power your operations.',
    icon: 'enterprise',
  },
] as const

const capabilities = [
  {
    title: 'We Build',
    copy: 'Custom software and platforms that solve real business problems and scale with you.',
    href: '/solutions/custom-software',
    icon: 'code',
  },
  {
    title: 'We Automate',
    copy: 'Autonomous systems and smart technologies that collect data, reduce risk and save time.',
    href: '/solutions/skygrid',
    icon: 'automation',
  },
  {
    title: 'We Electrify',
    copy: 'Mobility and energy solutions that improve efficiency and enable sustainable operations.',
    href: '/solutions/digivolt',
    icon: 'energy',
  },
  {
    title: 'We Secure',
    copy: 'Cybersecurity and infrastructure that protect systems, data and operational continuity.',
    href: '/solutions',
    icon: 'security',
  },
] as const

const operationalCapabilities = [
  { title: 'Autonomous Systems', label: 'Field orchestration', copy: 'Mission-ready systems for inspection, mapping, surveillance and logistics—connecting planning, field capture and review.', href: '/solutions/skygrid', icon: 'skygrid', visual: 'mission' },
  { title: 'Enterprise Platforms', label: 'Core operations', copy: 'ERP, payments, HR and service platforms built around the workflows that keep organisations moving.', href: '/solutions/enterprise-systems', icon: 'enterprise', visual: 'platform' },
  { title: 'Digital Infrastructure', label: 'Secure by design', copy: 'Connected foundations that protect data, sustain service continuity and support reliable growth.', href: '/solutions', icon: 'security', visual: 'infrastructure' },
  { title: 'Operational Intelligence', label: 'Signals to action', copy: 'Decision-ready insight that brings distributed signals, review cycles and teams into one operating picture.', href: '/solutions/custom-software', icon: 'automation', visual: 'intelligence' },
] as const

const approvedOutcomes = [
  { value: '30%', label: 'efficiency increase', project: 'Thermal Plant Inspection Automation', href: '/work/thermal-plant-inspection-automation' },
  { value: '15%', label: 'error reduction', project: 'Sterling Payment Gateway', href: '/work/sterling-payment-gateway' },
  { value: '40%', label: 'faster workflow', project: 'Kaduna State e-Management System', href: '/work/kaduna-state-e-management-system' },
] as const

const work = [
  {
    category: 'Energy',
    title: 'Thermal Plant Inspection Automation',
    copy: 'Autonomous drone inspections with AI-assisted review across critical infrastructure.',
    visual: 'thermal',
    href: '/work/thermal-plant-inspection-automation',
  },
  {
    category: 'Finance',
    title: 'Sterling Payment Gateway',
    copy: 'Secure payment infrastructure for high-volume transaction processing and reconciliation.',
    visual: 'payment',
    href: '/work/sterling-payment-gateway',
  },
  {
    category: 'Public Sector',
    title: 'Kaduna State e-Management System',
    copy: 'A unified platform for workflows, approvals, records and digital service delivery.',
    visual: 'public',
    href: '/work/kaduna-state-e-management-system',
  },
] as const

const regionalMetrics = [
  { value: 'LOCAL', label: 'Close to the operating reality', icon: 'briefcase' },
  { value: 'CONNECTED', label: 'Systems, people and decisions in view', icon: 'people' },
  { value: 'PRACTICAL', label: 'Delivery built around real constraints', icon: 'globe' },
  { value: 'DURABLE', label: 'Technology designed to improve in use', icon: 'award' },
] as const

const workflow = [
  { value: '01', label: 'Plan the mission' },
  { value: '02', label: 'Capture field data' },
  { value: '03', label: 'Review operations' },
] as const

export function HomeBlueprintSolutions() {
  return (
    <section className="home-blueprint-solutions" data-home-section="H03" aria-labelledby="home-solutions-title">
      <Container className="home-blueprint-solutions__layout">
        <div className="home-blueprint-solutions__catalog">
          <SectionEyebrow>Our Solutions</SectionEyebrow>
          <h2 id="home-solutions-title">Purpose-built technology.<br />Measurable impact.</h2>
          <div className="home-blueprint-solutions__cards">
            {solutions.map((solution) => (
              <a className="home-blueprint-info-card" href={solution.href} key={solution.title}>
                <IconBadge kind={solution.icon as IconKind} />
                <strong>{solution.title}</strong>
                <span>{solution.copy}</span>
                <small>Learn more <b aria-hidden="true">→</b></small>
              </a>
            ))}
          </div>
        </div>

        <a className="home-blueprint-feature" href="/work/thermal-plant-inspection-automation" aria-label="View Thermal Plant Inspection Automation case study">
          <span className="home-blueprint-feature__copy">
            <SectionEyebrow>Featured Case Study</SectionEyebrow>
            <strong>Thermal Plant<br />Inspection Automation</strong>
            <p>An inspection workflow that brings mission planning, field capture and operational review into one coordinated system.</p>
            <span className="home-blueprint-feature__workflow" aria-label="Operational workflow">
              <b>Operational workflow</b>
              <span>
                {workflow.map((step) => (
                  <i key={step.value}>
                    <strong>{step.value}</strong>
                    <small>{step.label}</small>
                  </i>
                ))}
              </span>
            </span>
            <b className="home-blueprint-feature__action">View case study <i aria-hidden="true">→</i></b>
          </span>
          <span className="home-blueprint-feature__visual" aria-hidden="true">
            <HomeBlueprintWorkVisual kind="thermal" />
          </span>
        </a>
      </Container>
    </section>
  )
}

export function HomeBlueprintCapabilities() {
  return (
    <section className="home-blueprint-capabilities" data-home-section="H04" aria-labelledby="home-capabilities-title">
      <Container>
        <SectionEyebrow>What Digi02 does</SectionEyebrow>
        <h2 id="home-capabilities-title" className="visually-hidden">What Digi02 does</h2>
        <div className="home-blueprint-capabilities__grid">
          {capabilities.map((card) => (
            <a className="home-blueprint-capability-card" href={card.href} key={card.title}>
              <IconBadge kind={card.icon as IconKind} />
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

export function HomeBlueprintOperationalBento() {
  return (
    <section className="home-blueprint-bento" data-home-section="H04A" aria-labelledby="home-bento-title">
      <Container>
        <header className="home-blueprint-bento__heading">
          <div>
            <SectionEyebrow>Systems in operation</SectionEyebrow>
            <h2 id="home-bento-title">Designed for the work beneath the work.</h2>
          </div>
          <p>Digi02 brings field systems, enterprise workflows, secure foundations and decision intelligence into a coordinated operating model.</p>
        </header>
        <div className="home-blueprint-bento__grid">
          {operationalCapabilities.map((capability) => (
            <a className={`home-blueprint-bento-card home-blueprint-bento-card--${capability.visual}`} href={capability.href} key={capability.title}>
              <span className="home-blueprint-bento-card__topline"><IconBadge kind={capability.icon as IconKind} /><small>{capability.label}</small></span>
              <span className="home-blueprint-bento-card__copy"><strong>{capability.title}</strong><span>{capability.copy}</span></span>
              <span className="home-blueprint-bento-card__visual" aria-hidden="true">
                {capability.visual === 'mission' && <><i /><i /><i /><b>Plan</b><b>Capture</b><b>Review</b></>}
                {capability.visual === 'platform' && <><i>ERP</i><i>PAY</i><i>HR</i><i>OPS</i></>}
                {capability.visual === 'infrastructure' && <><i /><i /><i /><i /><b /></>}
                {capability.visual === 'intelligence' && <><i /><i /><i /><i /><b>Signal review</b></>}
              </span>
              <b className="home-blueprint-bento-card__action">Explore capability <i aria-hidden="true">→</i></b>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function HomeBlueprintPhilosophy() {
  return (
    <section className="home-blueprint-philosophy" data-home-section="H05" aria-labelledby="home-philosophy-title">
      <Container className="home-blueprint-philosophy__layout">
        <p className="home-blueprint-eyebrow">Our Approach</p>
        <h2 id="home-philosophy-title">Technology should fit the operation — not force the operation to fit the technology.</h2>
      </Container>
    </section>
  )
}

export function HomeBlueprintOutcomes() {
  return (
    <section className="home-blueprint-outcomes" data-home-section="H05A" aria-labelledby="home-outcomes-title">
      <Container className="home-blueprint-outcomes__layout">
        <header className="home-blueprint-outcomes__heading">
          <SectionEyebrow>Approved outcomes</SectionEyebrow>
          <h2 id="home-outcomes-title">Evidence from real operations.</h2>
          <p>Client-approved results from the systems Digi02 has helped put into operation.</p>
        </header>
        <div className="home-blueprint-outcomes__grid">
          {approvedOutcomes.map((outcome) => (
            <a href={outcome.href} key={outcome.project}>
              <span>{outcome.project}</span>
              <strong>{outcome.value}</strong>
              <b>{outcome.label}</b>
              <small>Read case study <i aria-hidden="true">→</i></small>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function HomeBlueprintWork() {
  return (
    <section className="home-blueprint-work" data-home-section="H06" aria-labelledby="home-work-title">
      <Container>
        <header className="home-blueprint-work__heading">
          <div>
            <SectionEyebrow>Selected Work</SectionEyebrow>
            <h2 id="home-work-title">Proof from real operations.</h2>
          </div>
          <a href="/work">View all projects <span aria-hidden="true">→</span></a>
        </header>
        <div className="home-blueprint-work__grid">
          {work.map((item) => (
            <a className="home-blueprint-work-card" href={item.href} key={item.title}>
              <span className="home-blueprint-work-card__media" aria-hidden="true">
                <HomeBlueprintWorkVisual kind={item.visual as 'thermal' | 'payment' | 'public'} />
              </span>
              <span className="home-blueprint-work-card__shade" aria-hidden="true" />
              <span className="home-blueprint-work-card__content">
                <small>{item.category}</small>
                <strong>{item.title}</strong>
                <span>{item.copy}</span>
                <b>View case study <i aria-hidden="true">→</i></b>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function HomeBlueprintRegionalProof() {
  return (
    <section className="home-blueprint-regional" data-home-section="H07" aria-labelledby="home-regional-title">
      <Container className="home-blueprint-regional__layout">
        <div className="home-blueprint-regional__intro">
          <svg className="home-blueprint-regional__africa" aria-hidden="true" viewBox="0 0 180 210">
            <path d="M84 8 111 16l13 21 26 15 20 33-10 29-25 12-10 25-22 17-6 29-17 11-13-21-25-20-10-29-19-13 7-28-13-27 17-18 6-26 26-14 28-4Z" />
            <path d="M82 22 69 52l13 25-9 31 22 23-4 43" />
            <path d="m45 65 31 5 31-18 23 19 24 4" />
          </svg>
          <div>
            <p className="home-blueprint-eyebrow">Kaduna-rooted. Operational by design.</p>
            <h2 id="home-regional-title">Built in Kaduna.<br />Building for Africa.</h2>
            <p>Digi02 brings software, autonomous systems and operational technology together around the realities of organisations that need dependable work in the field, office and wider system.</p>
          </div>
        </div>
        <div className="home-blueprint-regional__metrics">
          {regionalMetrics.map((metric) => (
            <div className="home-blueprint-regional__metric" key={metric.value}>
              <span className="home-blueprint-regional__metric-icon"><LineIcon kind={metric.icon as IconKind} /></span>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function HomeBlueprintFinalCta() {
  return (
    <section className="home-blueprint-cta" data-home-section="H08" aria-labelledby="home-cta-title">
      <span className="home-blueprint-cta__wave" aria-hidden="true" />
      <Container className="home-blueprint-cta__layout">
        <div>
          <h2 id="home-cta-title">Start with the operation you need to improve.</h2>
          <p>Bring the workflow, constraint or system question. We&apos;ll help frame the right next step.</p>
        </div>
        <a className="home-blueprint-button home-blueprint-button--primary" href="/contact">
          Start a project brief <span aria-hidden="true">→</span>
        </a>
      </Container>
    </section>
  )
}
