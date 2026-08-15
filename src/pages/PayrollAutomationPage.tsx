import type { CSSProperties } from 'react'
import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const cycle = [
  ['Inputs', 'Bring the payroll inputs into one controlled starting point.'],
  ['Calculate', 'Apply the organization’s payroll rules consistently.'],
  ['Review', 'Give responsible teams a clear place to verify the run.'],
  ['Approve', 'Keep approval attached to the payroll record.'],
  ['Close', 'Retain the completed run for reporting and follow-up.'],
] as const

export function PayrollAutomationPage() {
  return (
    <div className="capability-page capability-page--payroll">
      <section className="capability-hero capability-hero--warm">
        <Container className="capability-hero__grid">
          <div className="capability-hero__copy">
            <p>Payroll automation</p>
            <h1>Payroll should not depend on rebuilding the same process every month.</h1>
            <p>
              Digi02 designs payroll workflows that connect inputs, calculations, review, approval
              and the final payroll record in one controlled cycle.
            </p>
            <PrimaryButton href="/contact">Discuss payroll automation <span aria-hidden="true">→</span></PrimaryButton>
          </div>

          <div className="payroll-cycle" aria-label="Illustrative payroll cycle">
            <div className="payroll-cycle__track" aria-hidden="true" />
            {cycle.map(([title], index) => (
              <div
                className="payroll-cycle__step"
                key={title}
                style={{ '--step': index } as CSSProperties}
              >
                <strong>{title}</strong>
              </div>
            ))}
            <div className="payroll-cycle__center">
              <span>Payroll cycle</span>
              <strong>Controlled from input to record</strong>
            </div>
          </div>
        </Container>
      </section>

      <section className="payroll-ledger">
        <Container>
          <header>
            <p>Monthly process</p>
            <h2>Make every stage visible before the payroll run is closed.</h2>
          </header>
          <div className="payroll-ledger__rows">
            {cycle.map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="capability-outcomes capability-outcomes--light">
        <Container className="capability-outcomes__grid">
          <h2>Automation should improve control, not hide the process.</h2>
          <div>
            <article><h3>Consistent calculations</h3><p>Reduce repeated manual handling while keeping payroll rules and exceptions visible.</p></article>
            <article><h3>Clear review points</h3><p>Give payroll and finance teams a defined place to verify a run before approval.</p></article>
            <article><h3>Traceable records</h3><p>Keep completed payroll activity connected to the record used for reporting and follow-up.</p></article>
          </div>
        </Container>
      </section>

      <section className="page-cta page-cta--dark">
        <Container className="page-cta__inner">
          <div>
            <p>Fix the monthly cycle</p>
            <h2>Show us where payroll still depends on manual reconstruction.</h2>
          </div>
          <PrimaryButton href="/contact">Discuss payroll <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
