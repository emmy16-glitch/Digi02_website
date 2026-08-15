import skyGridOperationsCenter from '../../assets/skygrid/skygrid-operations-center.webp'
import { Container } from '../../components/Container'
import '../../styles/technology-proof.css'

export function TechnologyProofSection() {
  return (
    <section className="technology-proof" aria-labelledby="technology-proof-title">
      <Container className="technology-proof__inner">
        <header className="technology-proof__intro">
          <p>What Digi02 builds</p>
          <h2 id="technology-proof-title">Technology built for real operations.</h2>
          <p>
            From field systems to mobility and enterprise software, each solution is designed
            around the operation it needs to support.
          </p>
        </header>

        <div className="technology-proof__composition">
          <article className="technology-proof__skygrid">
            <div className="technology-proof__skygrid-image">
              <img
                alt="SkyGrid operations interface"
                decoding="async"
                loading="lazy"
                src={skyGridOperationsCenter}
              />
            </div>
            <div className="technology-proof__copy">
              <span>Autonomous systems</span>
              <h3>SkyGrid</h3>
              <p>Mission planning, operational control and review in one UAV environment.</p>
            </div>
          </article>

          <article className="technology-proof__mobility">
            <div className="technology-proof__copy">
              <span>Mobility</span>
              <h3>DigiVolt</h3>
              <p>One journey from ride request to vehicle assignment, route and arrival.</p>
            </div>

            <div className="technology-proof__route" aria-hidden="true">
              <span className="technology-proof__route-point technology-proof__route-point--start" />
              <span className="technology-proof__route-line" />
              <span className="technology-proof__route-vehicle">EV</span>
              <span className="technology-proof__route-point technology-proof__route-point--end" />
            </div>
          </article>

          <article className="technology-proof__enterprise">
            <div className="technology-proof__copy">
              <span>Enterprise operations</span>
              <h3>ERP + POS</h3>
              <p>Sales activity stays connected to inventory, transactions and reporting.</p>
            </div>

            <div className="technology-proof__enterprise-flow" aria-label="Enterprise workflow">
              <span>Sales</span>
              <span>Inventory</span>
              <span>Transactions</span>
              <span>Reporting</span>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
