import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const transactionPath = [
  ['Initiate', 'A transaction starts from the customer, operator or connected business process.'],
  ['Authorize', 'The payment request moves through the required validation and authorization step.'],
  ['Record', 'The transaction state stays connected to the operational record behind it.'],
  ['Reconcile', 'Payment activity can be matched back to the expected business event.'],
  ['Report', 'Completed activity becomes usable for finance and operational reporting.'],
] as const

export function PaymentSystemsPage() {
  return (
    <div className="capability-page capability-page--payments">
      <section className="capability-hero">
        <Container className="capability-hero__grid">
          <div className="capability-hero__copy">
            <p>Payment systems</p>
            <h1>Transactions should stay connected to the operation behind them.</h1>
            <p>
              Digi02 engineers payment experiences and transaction workflows that connect payment
              activity to the records, approvals and reporting that give it business meaning.
            </p>
            <PrimaryButton href="/contact">Discuss a payment system <span aria-hidden="true">→</span></PrimaryButton>
          </div>

          <div className="payment-path" aria-label="Illustrative payment transaction path">
            <div className="payment-path__source">
              <span>Channel</span>
              <strong>Transaction request</strong>
            </div>
            <div className="payment-path__line" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <div className="payment-path__states">
              <div><span>Authorize</span><strong>Validated</strong></div>
              <div><span>Record</span><strong>Connected</strong></div>
              <div><span>Reconcile</span><strong>Matched</strong></div>
            </div>
            <div className="payment-path__destination">
              <span>Operation</span>
              <strong>Transaction context retained</strong>
            </div>
            <p>Illustrative transaction flow — not a live payment or settlement record.</p>
          </div>
        </Container>
      </section>

      <section className="payment-sequence">
        <Container className="payment-sequence__grid">
          <header>
            <p>Transaction continuity</p>
            <h2>A payment is one event inside a wider business process.</h2>
          </header>
          <div>
            {transactionPath.map(([title, description]) => (
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
          <h2>Design the transaction and the operational record together.</h2>
          <div>
            <article><h3>Payment experience</h3><p>Shape the channel, interaction and transaction states around the people using the system.</p></article>
            <article><h3>Operational integration</h3><p>Connect payment activity to orders, services, accounts or other records that explain why it happened.</p></article>
            <article><h3>Reconciliation context</h3><p>Preserve enough transaction context for finance and operations to understand completed activity.</p></article>
          </div>
        </Container>
      </section>

      <section className="page-cta page-cta--dark">
        <Container className="page-cta__inner">
          <div>
            <p>Connect the transaction</p>
            <h2>Tell us what happens before and after the payment today.</h2>
          </div>
          <PrimaryButton href="/contact">Discuss payments <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
