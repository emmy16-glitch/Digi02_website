import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const buildStages = [
  ['Understand', 'Start with the operation, users, constraints and information that already exist.'],
  ['Design', 'Shape the system around the real workflow instead of forcing the workflow into a generic product.'],
  ['Build', 'Implement the interfaces, logic and data model required by the operation.'],
  ['Integrate', 'Connect the new system to the services and records it needs to work with.'],
] as const

export function CustomSoftwarePage() {
  return (
    <div className="capability-page capability-page--custom">
      <section className="capability-hero capability-hero--light">
        <Container className="capability-hero__grid">
          <div className="capability-hero__copy">
            <p>Custom software</p>
            <h1>Build the system the operation actually needs.</h1>
            <p>
              When an off-the-shelf product cannot represent the workflow properly, Digi02 designs
              and engineers purpose-built software around the operation itself.
            </p>
            <PrimaryButton href="/contact">Discuss custom software <span aria-hidden="true">→</span></PrimaryButton>
          </div>

          <div className="software-architecture" aria-label="Illustrative custom software architecture">
            <div className="software-architecture__core">
              <span>Operational system</span>
              <strong>Purpose-built around the workflow</strong>
            </div>
            <div className="software-architecture__layer software-architecture__layer--interface">
              <span>Interface</span><strong>People interact</strong>
            </div>
            <div className="software-architecture__layer software-architecture__layer--workflow">
              <span>Workflow</span><strong>Rules move work</strong>
            </div>
            <div className="software-architecture__layer software-architecture__layer--data">
              <span>Data</span><strong>Records retain context</strong>
            </div>
            <div className="software-architecture__layer software-architecture__layer--integration">
              <span>Integrations</span><strong>Systems connect</strong>
            </div>
          </div>
        </Container>
      </section>

      <section className="software-build">
        <Container className="software-build__grid">
          <header>
            <p>Engineering approach</p>
            <h2>Start from the constraint, not a pre-made feature list.</h2>
            <p>Custom software is useful when the system reflects the real operation closely enough to reduce work rather than create another workaround.</p>
          </header>
          <div className="software-build__stages">
            {buildStages.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="capability-outcomes">
        <Container className="capability-outcomes__grid">
          <h2>Software should remove operational friction, not simply digitize it.</h2>
          <div>
            <article><h3>Workflow design</h3><p>Translate real responsibilities, rules and handoffs into a system people can understand and use.</p></article>
            <article><h3>System integration</h3><p>Connect the product to the data, services and existing technology that the operation depends on.</p></article>
            <article><h3>Operational interfaces</h3><p>Give each user the information and actions needed for their part of the workflow without unnecessary complexity.</p></article>
          </div>
        </Container>
      </section>
    </div>
  )
}
