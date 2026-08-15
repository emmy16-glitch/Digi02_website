import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const environments = [
  {
    title: 'Enterprise & multi-site operations',
    body: 'ERP, payroll, workflow and reporting systems for organizations that need a reliable operational picture across teams and locations.',
  },
  {
    title: 'Retail & commerce',
    body: 'POS, inventory and transaction systems that keep the customer-facing sale connected to stock and reporting behind it.',
  },
  {
    title: 'Education & institutions',
    body: 'Payment, administrative and management systems designed around structured institutional workflows.',
  },
  {
    title: 'Field & autonomous operations',
    body: 'Mission planning, UAV coordination and data-collection workflows for environments where the operation extends beyond the office.',
  },
  {
    title: 'Government & public-sector systems',
    body: 'Purpose-built digital systems for complex administrative, data and service workflows where security, control and scale matter.',
  },
  {
    title: 'Industry-specific software',
    body: 'Custom applications for operational models that cannot be represented properly by a generic software package.',
  },
] as const

export function IndustriesPage() {
  return (
    <div className="interior-page interior-page--industries">
      <section className="interior-hero interior-hero--light">
        <Container className="interior-hero__grid">
          <p className="interior-hero__kicker">Industries</p>
          <div className="interior-hero__statement">
            <h1>Different industries. Different operational realities.</h1>
            <p>
              We start with the environment, constraints and people doing the work — then design
              the technology around those realities instead of forcing every organization into the same product.
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
            {environments.map((environment, index) => (
              <article key={environment.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
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
            <h2>Start with the problem, not the software category.</h2>
          </div>
          <PrimaryButton href="/contact">Discuss your operation <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
