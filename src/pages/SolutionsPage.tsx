import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const solutionGroups = [
  {
    eyebrow: 'Autonomous systems',
    title: 'SkyGrid',
    body: 'UAV mission planning, operational coordination and field-data workflows designed around demanding flight operations.',
    href: '/solutions/skygrid',
  },
  {
    eyebrow: 'Mobility',
    title: 'DigiVolt',
    body: 'Connected mobility experiences that carry a journey from request and assignment through route progress and arrival.',
    href: '/solutions/digivolt',
  },
  {
    eyebrow: 'Enterprise operations',
    title: 'ERP + POS',
    body: 'Business systems that connect sales, inventory, transactions, reporting and day-to-day operational records.',
    href: '/solutions/enterprise-systems',
  },
] as const

const supportingCapabilities = [
  {
    title: 'E-management',
    body: 'Centralize operational records, approvals and reporting around the way the organization actually works.',
    href: '/solutions/e-management',
  },
  {
    title: 'Payroll automation',
    body: 'Reduce repeated payroll work and keep calculations, records and approvals in one controlled flow.',
    href: '/solutions/payroll-automation',
  },
  {
    title: 'Payment systems',
    body: 'Build transaction experiences that connect payment activity to the records and workflows behind it.',
    href: '/solutions/payment-systems',
  },
  {
    title: 'Custom software',
    body: 'Engineer purpose-built applications where an off-the-shelf product cannot represent the operation properly.',
    href: '/solutions/custom-software',
  },
] as const

export function SolutionsPage() {
  return (
    <div className="interior-page interior-page--solutions">
      <section className="interior-hero">
        <Container className="interior-hero__grid">
          <p className="interior-hero__kicker">Solutions</p>
          <div className="interior-hero__statement">
            <h1>Technology built around the operation.</h1>
            <p>
              Digi02 designs systems for field operations, mobility, enterprise workflows and
              transactions — then connects them to the way people actually work.
            </p>
            <PrimaryButton href="/contact">Discuss your system <span aria-hidden="true">→</span></PrimaryButton>
          </div>
        </Container>
      </section>

      <section className="solution-ledger" aria-labelledby="solution-ledger-title">
        <Container>
          <header className="section-heading section-heading--split">
            <p>Core systems</p>
            <h2 id="solution-ledger-title">From field operations to mobility and enterprise systems.</h2>
          </header>

          <div className="solution-ledger__list">
            {solutionGroups.map((solution) => (
              <article className="solution-ledger__item" key={solution.title}>
                <span>{solution.eyebrow}</span>
                <h3>{solution.title}</h3>
                <p>{solution.body}</p>
                <a href={solution.href}>Explore {solution.title} <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="capability-field" aria-labelledby="capability-field-title">
        <Container className="capability-field__grid">
          <div className="capability-field__statement">
            <p>Supporting capabilities</p>
            <h2 id="capability-field-title">The wider system matters too.</h2>
            <p>
              Digi02 also engineers the software, automation and transaction layers that keep
              organizations coordinated behind the visible interface.
            </p>
          </div>

          <div className="capability-field__items">
            {supportingCapabilities.map((capability) => (
              <article key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
                <a href={capability.href}>
                  Explore capability <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
