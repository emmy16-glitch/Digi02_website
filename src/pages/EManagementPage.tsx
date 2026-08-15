import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const workflow = [
  ['Request', 'Work enters the system with its context attached.'],
  ['Review', 'The right people can see what needs attention.'],
  ['Approve', 'Decisions stay connected to the record behind them.'],
  ['Record', 'Completed activity remains available for reporting and follow-up.'],
] as const

export function EManagementPage() {
  return (
    <div className="capability-page capability-page--emanagement">
      <section className="capability-hero">
        <Container className="capability-hero__grid">
          <div className="capability-hero__copy">
            <p>E-management</p>
            <h1>Make operational records easier to act on.</h1>
            <p>
              Digi02 designs e-management systems that bring requests, approvals, records and
              reporting into one controlled flow.
            </p>
            <PrimaryButton href="/contact">Discuss your workflow <span aria-hidden="true">→</span></PrimaryButton>
          </div>

          <div className="emanagement-visual" aria-label="Illustrative e-management workflow">
            <div className="emanagement-visual__context">
              <span>People</span>
              <span>Process</span>
              <span>Reporting</span>
            </div>
            <div className="emanagement-visual__flow">
              {workflow.map(([title], index) => (
                <div className="emanagement-visual__node" key={title} data-active={index === 2}>
                  <strong>{title}</strong>
                </div>
              ))}
            </div>
            <p>Illustrative workflow structure — not live organizational data.</p>
          </div>
        </Container>
      </section>

      <section className="capability-narrative capability-narrative--light">
        <Container className="capability-narrative__grid">
          <div>
            <p>Operational continuity</p>
            <h2>One record should not become four disconnected handoffs.</h2>
          </div>
          <div className="capability-sequence capability-sequence--emanagement">
            {workflow.map(([title, description]) => (
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

      <section className="capability-outcomes">
        <Container className="capability-outcomes__grid">
          <h2>Built around the way the organization actually works.</h2>
          <div>
            <article><h3>Operational records</h3><p>Keep work, decisions and supporting information in a coherent system of record.</p></article>
            <article><h3>Approvals and responsibility</h3><p>Make ownership and decision points visible without relying on disconnected messages and spreadsheets.</p></article>
            <article><h3>Reporting context</h3><p>Carry completed activity into reporting without rebuilding the story from separate sources.</p></article>
          </div>
        </Container>
      </section>
    </div>
  )
}
