import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const solutionGroups = [
  {
    eyebrow: 'Autonomous systems',
    title: 'SkyGrid',
    body: 'UAV mission planning, operational coordination and field-data workflows designed around demanding flight operations.',
    href: '/#skygrid',
  },
  {
    eyebrow: 'Mobility',
    title: 'DigiVolt',
    body: 'Connected mobility experiences that carry a journey from request and assignment through route progress and arrival.',
    href: '/#digivolt',
  },
  {
    eyebrow: 'Enterprise operations',
    title: 'ERP + POS',
    body: 'Business systems that connect sales, inventory, transactions, reporting and day-to-day operational records.',
    href: '/#erp-pos',
  },
] as const

const supportingCapabilities = [
  ['E-management', 'Centralize operational records, approvals and reporting around the way the organization actually works.'],
  ['Payroll automation', 'Reduce repeated payroll work and keep calculations, records and approvals in one controlled flow.'],
  ['Payment systems', 'Build transaction experiences that connect payment activity to the records and workflows behind it.'],
  ['Custom software', 'Engineer purpose-built applications where an off-the-shelf product cannot represent the operation properly.'],
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
            <h2 id="solution-ledger-title">Three different operational problems. Three different visual languages.</h2>
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
            <p>Beyond the product chapters</p>
            <h2 id="capability-field-title">The wider system matters too.</h2>
            <p>
              Digi02 also engineers the software, automation and transaction layers that keep
              organizations coordinated behind the visible interface.
            </p>
          </div>

          <div className="capability-field__items">
            {supportingCapabilities.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
