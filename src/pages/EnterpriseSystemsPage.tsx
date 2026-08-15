import erpPosShowcase from '../assets/erp-pos/erp-pos-multidevice-showcase.png'
import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import { ErpPosSection } from '../sections/home/ErpPosSection'

const systemLayers = [
  ['Sales', 'Capture the customer-facing transaction without losing the business context behind it.'],
  ['Inventory', 'Keep stock movement connected to the sale instead of updating separate records later.'],
  ['Transactions', 'Carry payment choice and completed activity into the same operational record.'],
  ['Reporting', 'Give the organization a clearer view of what happened across the workflow.'],
] as const

export function EnterpriseSystemsPage() {
  return (
    <div className="product-page product-page--enterprise">
      <section className="product-hero product-hero--enterprise">
        <Container className="product-hero__grid">
          <div className="product-hero__identity">
            <strong>ERP + POS</strong>
            <p>Enterprise operations by Digi02</p>
          </div>
          <div className="product-hero__statement">
            <h1>Keep the transaction connected to the operation behind it.</h1>
            <p>
              Digi02 enterprise systems connect sales, inventory, transaction state and reporting
              so everyday business activity does not fragment into separate tools and records.
            </p>
            <PrimaryButton href="/contact">Discuss enterprise software <span aria-hidden="true">→</span></PrimaryButton>
          </div>
        </Container>

        <Container>
          <figure className="product-cinematic product-cinematic--enterprise">
            <img src={erpPosShowcase} alt="Digi02 ERP and POS multi-device system visualization" />
            <figcaption>ERP/POS system visualization. Demo values shown on this site are illustrative.</figcaption>
          </figure>
        </Container>
      </section>

      <section className="enterprise-system-map" aria-labelledby="enterprise-system-map-title">
        <Container>
          <header className="section-heading section-heading--split">
            <p>Connected operation</p>
            <h2 id="enterprise-system-map-title">One business event can affect several systems.</h2>
          </header>

          <div className="enterprise-system-map__flow">
            {systemLayers.map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="enterprise-demo-intro">
        <Container className="enterprise-demo-intro__grid">
          <p>Interactive demonstration</p>
          <div>
            <h2>Follow a sale through the system.</h2>
            <p>
              The demo below is intentionally small: add an item, choose payment, complete the
              sale, and watch inventory and receipt state respond. Product names, prices and stock
              values are sample data only.
            </p>
          </div>
        </Container>
      </section>

      <ErpPosSection />

      <section className="product-outcome product-outcome--light">
        <Container className="product-outcome__grid">
          <div>
            <p>Custom implementation</p>
            <h2>The workflow should match the organization, not the other way around.</h2>
          </div>
          <div>
            <p>
              ERP, POS, payroll, payment and management systems can require different data models,
              approvals, roles and integrations. Digi02 scopes those requirements around the real
              operating process before implementation.
            </p>
            <a href="/contact">Discuss your enterprise system <span aria-hidden="true">→</span></a>
          </div>
        </Container>
      </section>
    </div>
  )
}
