import digiVoltShowcase from '../../assets/digivolt/digivolt-electric-mobility-showcase.png'
import { Container } from '../../components/Container'
import '../../styles/digivolt-section.css'

const journeyStages = [
  {
    title: 'Request',
    description: 'Choose a pickup point and destination to begin the journey.',
  },
  {
    title: 'Match',
    description: 'Connect the request with an available electric vehicle.',
  },
  {
    title: 'Ride',
    description: 'Keep the route and trip progress visible while the journey is moving.',
  },
  {
    title: 'Arrive',
    description: 'Complete the trip with the journey details kept together.',
  },
] as const

export function DigiVoltSection() {
  return (
    <>
      <section className="digivolt-reveal" id="digivolt" aria-labelledby="digivolt-reveal-title">
        <Container className="digivolt-reveal__inner">
          <header className="digivolt-reveal__copy">
            <p>Mobility technology by Digi02</p>
            <h2 id="digivolt-reveal-title">DigiVolt</h2>
            <p>
              An electric mobility product designed around the complete journey rather than one
              isolated booking screen.
            </p>
          </header>

          <figure className="digivolt-reveal__visual">
            <img
              alt="DigiVolt electric mobility product visualization"
              decoding="async"
              loading="eager"
              src={digiVoltShowcase}
            />
            <figcaption>Product visualization / in development</figcaption>
          </figure>
        </Container>
      </section>

      <section className="digivolt-journey" aria-labelledby="digivolt-journey-title">
        <Container className="digivolt-journey__inner">
          <header className="digivolt-journey__heading">
            <p>Electric mobility</p>
            <h2 id="digivolt-journey-title">A smarter way to move.</h2>
            <p>
              DigiVolt brings ride booking, vehicle assignment and trip progress into one
              continuous experience from request to arrival.
            </p>
          </header>

          <div className="digivolt-journey__route" aria-label="Illustrative DigiVolt journey">
            <div className="digivolt-journey__route-meta digivolt-journey__route-meta--pickup">
              <span>Pickup</span>
              <strong>Journey starts</strong>
            </div>

            <div className="digivolt-journey__route-meta digivolt-journey__route-meta--vehicle">
              <span>Vehicle</span>
              <strong>Available EV</strong>
            </div>

            <div className="digivolt-journey__route-meta digivolt-journey__route-meta--destination">
              <span>Destination</span>
              <strong>Journey completes</strong>
            </div>

            <svg aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 1000 360">
              <path
                d="M75 280 C180 270 175 145 310 145 C450 145 470 220 610 205 C760 190 770 80 925 70"
                pathLength="100"
              />
            </svg>

            <span className="digivolt-journey__point digivolt-journey__point--pickup" aria-hidden="true" />
            <span className="digivolt-journey__vehicle" aria-hidden="true">EV</span>
            <span className="digivolt-journey__point digivolt-journey__point--destination" aria-hidden="true" />
          </div>

          <ol className="digivolt-journey__stages" aria-label="DigiVolt journey stages">
            {journeyStages.map((stage) => (
              <li key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  )
}
