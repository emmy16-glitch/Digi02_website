import { Container } from '../../components/Container'
import '../../styles/technology-proof.css'

function SkyGridProofVisual() {
  return (
    <div className="technology-proof__skygrid-visual" aria-label="Illustrative SkyGrid mission route">
      <svg aria-hidden="true" viewBox="0 0 760 520">
        <path className="technology-proof__contour" d="M40 120 C150 55 245 78 332 138 S520 235 710 128" />
        <path className="technology-proof__contour" d="M20 240 C150 165 260 180 348 235 S548 340 735 238" />
        <path className="technology-proof__contour" d="M65 370 C190 310 300 320 390 372 S555 448 705 382" />
        <path className="technology-proof__mission-route" d="M116 385 C188 305 214 218 322 214 C435 210 478 314 574 268 C627 242 650 176 690 132" />
        <circle className="technology-proof__waypoint" cx="116" cy="385" r="8" />
        <circle className="technology-proof__waypoint" cx="322" cy="214" r="8" />
        <circle className="technology-proof__waypoint" cx="574" cy="268" r="8" />
        <circle className="technology-proof__waypoint technology-proof__waypoint--active" cx="690" cy="132" r="10" />
        <path className="technology-proof__aircraft" d="M449 247 l24 -10 7 4 -16 11 15 11 -7 4 -24 -10 -17 7 -4 -4 11 -8 -11 -8 4 -4z" />
      </svg>

      <div className="technology-proof__mission-labels" aria-hidden="true">
        <span>Mission area</span>
        <span>Waypoints</span>
        <span>Flight path</span>
      </div>
    </div>
  )
}

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
            <SkyGridProofVisual />
            <div className="technology-proof__copy">
              <span>Autonomous systems</span>
              <h3>SkyGrid</h3>
              <p>Mission planning, operational coordination and review for UAV-enabled field work.</p>
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
