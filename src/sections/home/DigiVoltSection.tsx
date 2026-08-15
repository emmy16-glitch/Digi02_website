import { useState } from 'react'
import type { KeyboardEvent } from 'react'

import { Container } from '../../components/Container'
import '../../styles/digivolt-section.css'

type StageId = 'request' | 'match' | 'ride' | 'arrive'

type JourneyStage = {
  id: StageId
  number: string
  label: string
  heading: string
  description: string
  progress: number
  vehicleX: number
  vehicleY: number
  status: string
}

const stages: readonly JourneyStage[] = [
  {
    id: 'request',
    number: '01',
    label: 'Request',
    heading: "Choose where you're going.",
    description:
      'Set a pickup point and destination to begin the journey.',
    progress: 14,
    vehicleX: 10,
    vehicleY: 70,
    status: 'Trip requested',
  },
  {
    id: 'match',
    number: '02',
    label: 'Match',
    heading: 'A vehicle is assigned.',
    description:
      'The request connects with an available electric vehicle.',
    progress: 33,
    vehicleX: 27,
    vehicleY: 43,
    status: 'Vehicle matched',
  },
  {
    id: 'ride',
    number: '03',
    label: 'Ride',
    heading: 'Follow the journey.',
    description:
      'Route and trip progress remain visible while the ride is moving.',
    progress: 72,
    vehicleX: 66,
    vehicleY: 50,
    status: 'Ride in progress',
  },
  {
    id: 'arrive',
    number: '04',
    label: 'Arrive',
    heading: 'The journey reaches its destination.',
    description:
      'Arrival completes the trip and keeps the journey details together.',
    progress: 100,
    vehicleX: 91,
    vehicleY: 20,
    status: 'Trip complete',
  },
]

export function DigiVoltSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeStage = stages[activeIndex]

  function selectStage(index: number) {
    setActiveIndex(index)
  }

  function handleStageKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setActiveIndex((current) => (current + 1) % stages.length)
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setActiveIndex(
        (current) => (current - 1 + stages.length) % stages.length,
      )
    }

    if (event.key === 'Home') {
      event.preventDefault()
      setActiveIndex(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      setActiveIndex(stages.length - 1)
    }
  }

  return (
    <section
      className="digivolt-chapter"
      aria-labelledby="digivolt-title"
      data-stage={activeStage.id}
    >
      <Container className="digivolt-chapter__inner">
        <header className="digivolt-chapter__intro">
          <div className="digivolt-chapter__identity">
            <p className="type-tech">02 / DigiVolt</p>
            <span>Electric mobility</span>
          </div>

          <div className="digivolt-chapter__statement">
            <h2 id="digivolt-title">A smarter way to move.</h2>

            <p>
              DigiVolt brings ride booking, vehicle assignment and trip
              progress into one electric mobility journey.
            </p>
          </div>
        </header>

        <div className="digivolt-journey">
          <div className="digivolt-journey__copy" aria-live="polite">
            <p className="digivolt-journey__stage-number type-tech">
              {activeStage.number} / {activeStage.label}
            </p>

            <h3>{activeStage.heading}</h3>

            <p>{activeStage.description}</p>

            <div className="digivolt-journey__status">
              <span aria-hidden="true" />
              {activeStage.status}
            </div>
          </div>

          <div
            className="digivolt-route"
            aria-label="Illustrative DigiVolt journey from pickup to destination"
          >
            <div className="digivolt-route__canvas">
              <div className="digivolt-route__location digivolt-route__location--pickup">
                <span className="digivolt-route__location-dot" />
                <strong>Pickup</strong>
              </div>

              <div className="digivolt-route__location digivolt-route__location--destination">
                <span className="digivolt-route__location-dot" />
                <strong>Destination</strong>
              </div>

              <svg
                aria-hidden="true"
                className="digivolt-route__svg"
                preserveAspectRatio="none"
                viewBox="0 0 1000 360"
              >
                <path
                  className="digivolt-route__base"
                  d="M90 270
                     C180 270 175 145 300 145
                     C430 145 430 200 565 200
                     C690 200 720 95 910 75"
                  pathLength="100"
                />

                <path
                  className="digivolt-route__progress"
                  d="M90 270
                     C180 270 175 145 300 145
                     C430 145 430 200 565 200
                     C690 200 720 95 910 75"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeDashoffset={100 - activeStage.progress}
                />
              </svg>

              <div
                aria-hidden="true"
                className="digivolt-route__vehicle"
                style={{
                  left: `${activeStage.vehicleX}%`,
                  top: `${activeStage.vehicleY}%`,
                }}
              >
                <span>EV</span>
              </div>

              <div
                aria-hidden="true"
                className="digivolt-route__pulse digivolt-route__pulse--pickup"
              />

              <div
                aria-hidden="true"
                className="digivolt-route__pulse digivolt-route__pulse--destination"
              />
            </div>

            <div className="digivolt-route__readout">
              <span>Sample journey</span>

              <strong>{activeStage.status}</strong>

              <span>
                {String(activeIndex + 1).padStart(2, '0')} / 04
              </span>
            </div>
          </div>
        </div>

        <div
          aria-label="DigiVolt journey stages"
          className="digivolt-stage-rail"
          onKeyDown={handleStageKeyDown}
          role="tablist"
        >
          {stages.map((stage, index) => {
            const isActive = index === activeIndex

            return (
              <button
                aria-controls="digivolt-title"
                aria-selected={isActive}
                className="digivolt-stage-rail__item"
                data-active={isActive}
                key={stage.id}
                onClick={() => selectStage(index)}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
              >
                <span className="type-tech">{stage.number}</span>
                <strong>{stage.label}</strong>
              </button>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
