import { useState, type KeyboardEvent } from 'react'

import digiVoltShowcase from '../../assets/digivolt/digivolt-electric-mobility-showcase.png'
import { Container } from '../../components/Container'
import '../../styles/digivolt-section.css'

type JourneyStageId = 'request' | 'match' | 'ride' | 'arrive'

type JourneyStage = {
  id: JourneyStageId
  number: string
  title: string
  heading: string
  description: string
  status: string
  progress: number
  vehicleX: number
  vehicleY: number
}

const journeyStages: readonly JourneyStage[] = [
  {
    id: 'request',
    number: '01',
    title: 'Request',
    heading: 'Choose where the journey begins and ends.',
    description: 'Set a pickup point and destination to create the trip request.',
    status: 'Trip requested',
    progress: 9,
    vehicleX: 9,
    vehicleY: 78,
  },
  {
    id: 'match',
    number: '02',
    title: 'Match',
    heading: 'Connect the request with an available EV.',
    description: 'The trip moves from a request into an assigned electric vehicle.',
    status: 'Vehicle matched',
    progress: 31,
    vehicleX: 29,
    vehicleY: 43,
  },
  {
    id: 'ride',
    number: '03',
    title: 'Ride',
    heading: 'Keep route and trip progress visible.',
    description: 'The same journey stays legible while the vehicle is moving.',
    status: 'Ride in progress',
    progress: 70,
    vehicleX: 65,
    vehicleY: 52,
  },
  {
    id: 'arrive',
    number: '04',
    title: 'Arrive',
    heading: 'Complete the journey without losing its context.',
    description: 'Arrival closes the trip with the journey details still connected.',
    status: 'Trip complete',
    progress: 100,
    vehicleX: 92,
    vehicleY: 19,
  },
]

export function DigiVoltSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStage = journeyStages[activeIndex]

  function handleStageKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((current) => (current + 1) % journeyStages.length)
      return
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((current) => (current - 1 + journeyStages.length) % journeyStages.length)
      return
    }

    if (event.key === 'Home') {
      event.preventDefault()
      setActiveIndex(0)
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      setActiveIndex(journeyStages.length - 1)
    }
  }

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

      <section
        className="digivolt-journey"
        aria-labelledby="digivolt-journey-title"
        data-stage={activeStage.id}
      >
        <Container className="digivolt-journey__inner">
          <header className="digivolt-journey__heading">
            <p>Electric mobility</p>
            <h2 id="digivolt-journey-title">A smarter way to move.</h2>
            <p>
              DigiVolt brings ride booking, vehicle assignment and trip progress into one
              continuous experience from request to arrival.
            </p>
          </header>

          <div className="digivolt-journey__interaction">
            <div className="digivolt-journey__stage-copy" aria-live="polite">
              <span>{activeStage.number} / {activeStage.title}</span>
              <h3>{activeStage.heading}</h3>
              <p>{activeStage.description}</p>
              <strong>{activeStage.status}</strong>
            </div>

            <div className="digivolt-journey__route" aria-label="Illustrative DigiVolt journey">
              <div className="digivolt-journey__route-meta digivolt-journey__route-meta--pickup">
                <span>Pickup</span>
                <strong>Journey starts</strong>
              </div>

              <div className="digivolt-journey__route-meta digivolt-journey__route-meta--vehicle">
                <span>Vehicle</span>
                <strong>{activeStage.status}</strong>
              </div>

              <div className="digivolt-journey__route-meta digivolt-journey__route-meta--destination">
                <span>Destination</span>
                <strong>Journey completes</strong>
              </div>

              <svg aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 1000 360">
                <path
                  className="digivolt-journey__route-base"
                  d="M75 280 C180 270 175 145 310 145 C450 145 470 220 610 205 C760 190 770 80 925 70"
                  pathLength="100"
                />
                <path
                  className="digivolt-journey__route-progress"
                  d="M75 280 C180 270 175 145 310 145 C450 145 470 220 610 205 C760 190 770 80 925 70"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeDashoffset={100 - activeStage.progress}
                />
              </svg>

              <span
                className="digivolt-journey__point digivolt-journey__point--pickup"
                aria-hidden="true"
              />
              <span
                className="digivolt-journey__vehicle"
                aria-hidden="true"
                style={{ left: `${activeStage.vehicleX}%`, top: `${activeStage.vehicleY}%` }}
              >
                EV
              </span>
              <span
                className="digivolt-journey__point digivolt-journey__point--destination"
                aria-hidden="true"
              />
            </div>
          </div>

          <div
            aria-label="DigiVolt journey stages"
            className="digivolt-journey__stages"
            onKeyDown={handleStageKeyDown}
            role="tablist"
          >
            {journeyStages.map((stage, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  aria-controls="digivolt-journey-title"
                  aria-selected={isActive}
                  data-active={isActive}
                  key={stage.id}
                  onClick={() => setActiveIndex(index)}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  <span>{stage.number}</span>
                  <strong>{stage.title}</strong>
                  <span className="digivolt-journey__stage-description">{stage.description}</span>
                </button>
              )
            })}
          </div>

          <footer className="digivolt-journey__footer">
            <span>Illustrative journey state — not live trip data.</span>
            <strong>{String(activeIndex + 1).padStart(2, '0')} / 04</strong>
          </footer>
        </Container>
      </section>
    </>
  )
}
