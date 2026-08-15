import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import '../styles/company-page.css'

const disciplines = [
  {
    title: 'Software engineering',
    body: 'Design and build the applications, platforms and integrations that carry operational work from interface to record.',
  },
  {
    title: 'Cybersecurity',
    body: 'Treat access, system boundaries and operational risk as part of the product architecture rather than an afterthought.',
  },
  {
    title: 'Data & analytics',
    body: 'Turn operational records into information that can support review, reporting and better decisions.',
  },
] as const

const capabilityLines = [
  ['Enterprise operations', 'ERP, e-management and connected operational records.', '/solutions/enterprise-systems'],
  ['Payroll automation', 'Controlled payroll workflows from input through approval and record.', '/solutions/payroll-automation'],
  ['Payment systems', 'Transaction systems connected to the workflows and records behind them.', '/solutions/payment-systems'],
  ['Autonomous systems', 'UAV mission planning, flight operations and field-intelligence workflows.', '/solutions/skygrid'],
  ['Custom software', 'Purpose-built systems for operations that cannot be represented properly by off-the-shelf software.', '/solutions/custom-software'],
] as const

const workingMethod = [
  ['Understand', 'Start with the operation, the people responsible for it and the constraints around it.'],
  ['Design', 'Define the workflow, information structure and system states before decorating the interface.'],
  ['Build', 'Engineer the product around the real sequence of work and the records the organization needs to retain.'],
  ['Integrate', 'Connect the product to the wider systems, transactions and reporting that surround the operation.'],
] as const

export function CompanyPage() {
  return (
    <div className="company-page">
      <section className="company-identity">
        <Container className="company-identity__grid">
          <p className="company-identity__kicker">Digi02 / Kaduna, Nigeria</p>
          <div className="company-identity__statement">
            <h1>Built around the operation, not around the template.</h1>
            <p>
              Digi02 is a technology company based in Kaduna, Nigeria, building software systems
              for businesses, institutions and operational environments that need more control,
              clearer information and better-connected workflows.
            </p>
            <div className="company-identity__actions">
              <PrimaryButton href="/contact">Discuss a project <span aria-hidden="true">→</span></PrimaryButton>
              <a href="/solutions">Explore our systems <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </Container>
      </section>

      <section className="company-definition" aria-labelledby="company-definition-title">
        <Container className="company-definition__grid">
          <div className="company-definition__lead">
            <p>Who we are</p>
            <h2 id="company-definition-title">A technology partner for systems that have to work beyond the demo.</h2>
          </div>
          <div className="company-definition__copy">
            <p>
              Digi02 works across enterprise software, payroll automation, payment systems,
              autonomous UAV operations and custom applications. Different products, but the same
              responsibility: understand the operation first, then engineer the technology around it.
            </p>
            <p>
              Our public company profile identifies software engineering, cybersecurity and data
              analytics as core disciplines inside the team. Those disciplines shape how we think
              about product architecture, system control and the information an organization needs
              to act on.
            </p>
          </div>
        </Container>
      </section>

      <section className="company-disciplines" aria-labelledby="company-disciplines-title">
        <Container>
          <header className="company-disciplines__heading">
            <p>Inside Digi02</p>
            <h2 id="company-disciplines-title">Three disciplines working on the same operational problem.</h2>
          </header>

          <div className="company-disciplines__list">
            {disciplines.map((discipline, index) => (
              <article key={discipline.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{discipline.title}</h3>
                <p>{discipline.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-systems" aria-labelledby="company-systems-title">
        <Container>
          <header className="company-systems__heading">
            <p>What we build</p>
            <h2 id="company-systems-title">The company is wider than any single product.</h2>
          </header>

          <div className="company-systems__list">
            {capabilityLines.map(([title, description, href]) => (
              <a href={href} key={title}>
                <strong>{title}</strong>
                <span>{description}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-method" aria-labelledby="company-method-title">
        <Container className="company-method__grid">
          <div className="company-method__statement">
            <p>How we work</p>
            <h2 id="company-method-title">Start with the operation. Keep the system understandable.</h2>
            <p>
              The point is not to make every project look the same. The point is to give each
              operation a clear structure, visible state and technology that can support the work.
            </p>
          </div>

          <div className="company-method__sequence">
            {workingMethod.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-direction" aria-labelledby="company-direction-title">
        <Container className="company-direction__grid company-direction__grid--deep">
          <div>
            <p>Mission</p>
            <h2 id="company-direction-title">Build secure, efficient and scalable systems that solve real organizational problems.</h2>
          </div>
          <div>
            <p>Direction</p>
            <h2>Build from Nigeria for organizations that need technology they can actually operate.</h2>
          </div>
        </Container>
      </section>

      <section className="company-base" aria-labelledby="company-base-title">
        <Container className="company-base__grid">
          <div className="company-base__statement">
            <p>Our base</p>
            <h2 id="company-base-title">Kaduna, Nigeria.</h2>
            <p>
              No. 2, The Hub<br />
              Industrial Area, Farin Gida<br />
              Mando, Kaduna, Nigeria
            </p>
          </div>

          <div className="company-base__contact">
            <div>
              <span>Call</span>
              <a href="tel:+2348169404088">+234 (0)81 6940 4088</a>
              <a href="tel:+2349067879766">+234 (0)90 6787 9766</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:info@digi02.org">info@digi02.org</a>
              <a href="mailto:support@digi02.org">support@digi02.org</a>
            </div>
            <div>
              <span>Office hours</span>
              <p>Monday–Friday / 9:00–18:00</p>
              <p>Saturday / 10:00–16:00</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="company-project-cta">
        <Container className="company-project-cta__inner">
          <div>
            <p>Work with Digi02</p>
            <h2>Bring us the operation that needs to work better.</h2>
          </div>
          <PrimaryButton href="/contact">Start a conversation <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
