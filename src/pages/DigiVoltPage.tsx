import digiVoltShowcase from '../assets/digivolt/digivolt-electric-mobility-showcase.png'
import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const journey = [
  ['Request', 'Create the trip around a clear pickup point and destination.'],
  ['Match', 'Move the request into an assigned electric vehicle and visible journey state.'],
  ['Ride', 'Keep route progress and trip context available while the vehicle is moving.'],
  ['Arrive', 'Complete the journey without disconnecting the trip from its operational record.'],
] as const

export function DigiVoltPage() {
  return (
    <div className="product-page product-page--digivolt">
      <section className="product-hero product-hero--digivolt">
        <Container className="product-hero__grid">
          <div className="product-hero__identity">
            <strong>DigiVolt</strong>
            <p>Electric mobility by Digi02</p>
          </div>
          <div className="product-hero__statement">
            <h1>A connected journey from request to arrival.</h1>
            <p>
              DigiVolt is designed around the complete mobility experience: request, assignment,
              route progress and arrival in one continuous flow.
            </p>
            <PrimaryButton href="/contact">Discuss mobility technology <span aria-hidden="true">→</span></PrimaryButton>
          </div>
        </Container>

        <Container>
          <figure className="product-cinematic product-cinematic--digivolt">
            <img loading="lazy" decoding="async" src={digiVoltShowcase} alt="DigiVolt electric mobility product visualization" />
            <figcaption>DigiVolt product visualization / in development.</figcaption>
          </figure>
        </Container>
      </section>

      <section className="mobility-route-story" aria-labelledby="mobility-route-title">
        <Container className="mobility-route-story__grid">
          <div>
            <p>Journey state</p>
            <h2 id="mobility-route-title">The route is part of the product, not decoration.</h2>
            <p>
              Each stage changes what the rider and the operation need to know. The journey should
              remain legible from the first request through the completed trip.
            </p>
          </div>

          <div className="mobility-route-story__route" aria-label="Illustrative DigiVolt journey route">
            <svg viewBox="0 0 900 420" aria-hidden="true">
              <path className="product-route product-route--light" d="M70 330 C180 315 188 175 320 175 C470 175 490 250 620 218 C745 188 760 88 830 70" />
            </svg>
            <span className="mobility-point mobility-point--pickup">Pickup</span>
            <span className="mobility-vehicle" aria-hidden="true">EV</span>
            <span className="mobility-point mobility-point--destination">Destination</span>
          </div>
        </Container>
      </section>

      <section className="product-lifecycle product-lifecycle--light" aria-labelledby="digivolt-lifecycle-title">
        <Container>
          <header className="section-heading section-heading--split">
            <p>Mobility flow</p>
            <h2 id="digivolt-lifecycle-title">Request. Match. Ride. Arrive.</h2>
          </header>
          <div className="product-lifecycle__list">
            {journey.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="product-outcome">
        <Container className="product-outcome__grid">
          <div>
            <p>Product direction</p>
            <h2>Mobility software should make the journey easier to follow for everyone involved.</h2>
          </div>
          <div>
            <p>
              DigiVolt is in development. The journey shown here illustrates the intended product
              flow; final capabilities will reflect operating requirements and deployment scope.
            </p>
            <a href="/contact">Talk to Digi02 about DigiVolt <span aria-hidden="true">→</span></a>
          </div>
        </Container>
      </section>
    </div>
  )
}
