import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const solutionGroups = [
  {
    eyebrow: 'Autonomous systems',
    title: 'SkyGrid',
    body: 'Mission planning, flight operations and field-intelligence workflows for UAV work.',
    href: '/solutions/skygrid',
  },
  {
    eyebrow: 'Mobility',
    title: 'DigiVolt',
    body: 'Electric-mobility technology connecting trip requests, vehicle assignment, route progress and arrival.',
    href: '/solutions/digivolt',
  },
  {
    eyebrow: 'Enterprise systems',
    title: 'ERP + POS',
    body: 'Sales, inventory, payments and reporting kept in one working business system.',
    href: '/solutions/enterprise-systems',
  },
] as const

const supportingCapabilities = [
  {
    title: 'E-management',
    body: 'Requests, approvals, records and reporting built around the organization’s workflow.',
    href: '/solutions/e-management',
  },
  {
    title: 'Payroll automation',
    body: 'A controlled payroll cycle from inputs and calculation through review, approval and record.',
    href: '/solutions/payroll-automation',
  },
  {
    title: 'Payment systems',
    body: 'Transaction flows that remain connected to the service, account or business event behind them.',
    href: '/solutions/payment-systems',
  },
  {
    title: 'Custom software',
    body: 'Purpose-built applications for workflows that cannot be represented properly by an off-the-shelf product.',
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
            <h1>Systems that fit the work.</h1>
            <p>
              Digi02 builds technology for UAV operations, electric mobility, enterprise workflows
              and transactions—then connects it to the way the organization actually works.
            </p>
            <PrimaryButton href="/contact">Discuss your system <span aria-hidden="true">→</span></PrimaryButton>
          </div>
        </Container>
      </section>

      <section className="solution-ledger" aria-labelledby="solution-ledger-title">
        <Container>
          <header className="section-heading section-heading--split">
            <p>Core products</p>
            <h2 id="solution-ledger-title">Three areas of work, each built around its operating context.</h2>
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
            <p>Enterprise capability</p>
            <h2 id="capability-field-title">The systems behind the operation matter too.</h2>
            <p>
              E-management, payroll, payments and custom software cover the systems organizations
              use to run the work behind the customer-facing experience.
            </p>
          </div>

          <div className="capability-field__items">
            {supportingCapabilities.map((capability) => (
              <article key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
                <a href={capability.href}>
                  Explore {capability.title} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-cta page-cta--dark">
        <Container className="page-cta__inner">
          <div>
            <p>Start with the work</p>
            <h2>Tell us what your current system is making difficult.</h2>
          </div>
          <PrimaryButton href="/contact">Discuss your requirements <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
