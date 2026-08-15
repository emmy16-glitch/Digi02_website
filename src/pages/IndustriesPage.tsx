import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const environments = [
  {
    title: 'Enterprise & multi-site operations',
    body: 'ERP, payroll, workflow and reporting systems for organizations that need one dependable view across teams and locations.',
  },
  {
    title: 'Retail & commerce',
    body: 'POS, inventory and transaction systems that keep the sale connected to stock and reporting.',
  },
  {
    title: 'Education & institutions',
    body: 'Payment, administration and management systems built around structured institutional processes.',
  },
  {
    title: 'Field & autonomous operations',
    body: 'Mission planning, UAV coordination and field-data workflows for work beyond the office.',
  },
  {
    title: 'Government & public-sector systems',
    body: 'Administrative and service systems where access, accountability and clear records matter.',
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
            <h1>Different work needs different systems.</h1>
            <p>
              We start with the environment, people and constraints around the work, then design the
              technology to fit those conditions.
            </p>
          </div>
        </Container>
      </section>

      <section className="industry-index" aria-labelledby="industry-index-title">
        <Container>
          <header className="section-heading section-heading--split">
            <p>Operating environments</p>
            <h2 id="industry-index-title">The system should fit the work—not force the work to fit the system.</h2>
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
            <p>Need something specific?</p>
            <h2>Show us the work that needs to improve.</h2>
          </div>
          <PrimaryButton href="/contact">Discuss your requirements <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
