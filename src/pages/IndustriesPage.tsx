import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const environments = [
  {
    title: 'Enterprise & multi-site operations',
    body: 'ERP, payroll, workflow and reporting systems for organizations that need one reliable view across teams and locations.',
  },
  {
    title: 'Retail & commerce',
    body: 'POS, inventory and transaction systems that keep the sale connected to stock, records and reporting behind it.',
  },
  {
    title: 'Education & institutions',
    body: 'Payment, administration and management systems shaped around structured institutional processes.',
  },
  {
    title: 'Field & autonomous operations',
    body: 'Mission planning, UAV coordination and data-collection workflows for work that extends beyond the office.',
  },
  {
    title: 'Government & public-sector systems',
    body: 'Digital systems for administrative, data and service workflows where access, accountability and scale matter.',
  },
  {
    title: 'Industry-specific software',
    body: 'Custom applications for operating models that do not fit a generic software package.',
  },
] as const

export function IndustriesPage() {
  return (
    <div className="interior-page interior-page--industries">
      <section className="interior-hero interior-hero--light">
        <Container className="interior-hero__grid">
          <p className="interior-hero__kicker">Industries</p>
          <div className="interior-hero__statement">
            <h1>The work changes from one industry to the next.</h1>
            <p>
              We start with the environment, constraints and people responsible for the work, then
              design the system around those conditions instead of forcing every organization into
              the same product.
            </p>
          </div>
        </Container>
      </section>

      <section className="industry-index" aria-labelledby="industry-index-title">
        <Container>
          <header className="section-heading section-heading--split">
            <p>Operating environments</p>
            <h2 id="industry-index-title">The system should fit the work.</h2>
          </header>

          <div className="industry-index__grid">
            {environments.map((environment) => (
              <article key={environment.title}>
                <h3>{environment.title}</h3>
                <p>{environment.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-cta page-cta--dark">
        <Container className="page-cta__inner">
          <div>
            <p>Have an unusual operating model?</p>
            <h2>Start with the work that needs to improve.</h2>
          </div>
          <PrimaryButton href="/contact">Discuss your requirements <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
