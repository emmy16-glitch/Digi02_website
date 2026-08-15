import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import '../styles/company-page.css'

const disciplines = [
  {
    title: 'Software engineering',
    body: 'Applications, platforms and integrations designed around the work they need to carry.',
  },
  {
    title: 'Cybersecurity',
    body: 'Access, system boundaries and operational risk considered as part of the architecture from the start.',
  },
  {
    title: 'Data & analytics',
    body: 'Operational records turned into information teams can use for review, reporting and decisions.',
  },
] as const

const capabilityLines = [
  ['Enterprise operations', 'ERP, e-management and connected operational records.', '/solutions/enterprise-systems'],
  ['Payroll automation', 'Controlled payroll workflows from input through approval and record.', '/solutions/payroll-automation'],
  ['Payment systems', 'Transaction systems connected to the workflows and records behind them.', '/solutions/payment-systems'],
  ['Autonomous systems', 'UAV mission planning, flight operations and field-intelligence workflows.', '/solutions/skygrid'],
  ['Custom software', 'Software designed for operating models that do not fit an off-the-shelf product.', '/solutions/custom-software'],
] as const

const workingMethod = [
  ['Understand', 'Start with the work, the people responsible for it and the constraints around it.'],
  ['Design', 'Define the workflow, information structure and system states before the interface is polished.'],
  ['Build', 'Engineer the product around the sequence of work and the records the organization needs to retain.'],
  ['Integrate', 'Connect the product to the systems, transactions and reporting that surround the operation.'],
] as const

export function CompanyPage() {
  return (
    <div className="company-page">
      <section className="company-identity">
        <Container className="company-identity__grid">
          <p className="company-identity__kicker">Digi02 / Kaduna, Nigeria</p>
          <div className="company-identity__statement">
            <h1>We build technology for work that has to run reliably.</h1>
            <p>
              Digi02 is a technology company based in Kaduna, Nigeria. We build software and
              connected systems for businesses, institutions and operational teams that need better
              control, clearer information and fewer disconnected tools.
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
            <h2 id="company-definition-title">Software, systems and engineering under one company.</h2>
          </div>
          <div className="company-definition__copy">
            <p>
              Our work spans enterprise software, payroll automation, payment systems, autonomous
              UAV operations and custom applications. The products differ, but the approach is the
              same: understand the work first, then build the technology around it.
            </p>
            <p>
              Digi02&apos;s public company profile identifies software engineering, cybersecurity and
              data analytics as core disciplines. Together they shape how we approach architecture,
              system control and the information an organization needs to act on.
            </p>
          </div>
        </Container>
      </section>

      <section className="company-disciplines" aria-labelledby="company-disciplines-title">
        <Container>
          <header className="company-disciplines__heading">
            <p>Inside Digi02</p>
            <h2 id="company-disciplines-title">Different disciplines, one operating problem.</h2>
          </header>

          <div className="company-disciplines__list">
            {disciplines.map((discipline) => (
              <article key={discipline.title}>
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
            <h2 id="company-systems-title">Digi02 is wider than any single product.</h2>
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
            <h2 id="company-method-title">Understand the work before choosing the technology.</h2>
            <p>
              A payroll system, UAV platform and mobility product should not look or behave the
              same. Each needs a structure that fits the people, decisions and information around it.
            </p>
          </div>

          <div className="company-method__sequence">
            {workingMethod.map(([title, description]) => (
              <article key={title}>
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
            <h2 id="company-direction-title">Build systems that improve control, visibility and execution inside organizations.</h2>
          </div>
          <div>
            <p>Direction</p>
            <h2>Build from Nigeria for organizations that need dependable technology they can operate every day.</h2>
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
            <h2>Tell us what needs to work better.</h2>
          </div>
          <PrimaryButton href="/contact">Start a conversation <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
