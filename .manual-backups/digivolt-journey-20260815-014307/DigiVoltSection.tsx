import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import digivoltShowcase from '../../assets/digivolt/digivolt-electric-mobility-showcase.png'
import { Container } from '../../components/Container'
import '../../styles/digivolt-section.css'

const journeyStages = [
  {
    id: 'request',
    number: '01',
    label: 'Request',
    title: "Choose where you're going.",
    description: 'Set a pickup point and destination from your phone.',
    progress: 7,
    x: 92,
    y: 128,
    mobileX: 56,
    mobileY: 60,
  },
  {
    id: 'match',
    number: '02',
    label: 'Match',
    title: 'A ride is assigned.',
    description: 'DigiVolt connects the trip request with an available electric vehicle.',
    progress: 31,
    x: 344,
    y: 76,
    mobileX: 300,
    mobileY: 145,
  },
  {
    id: 'ride',
    number: '03',
    label: 'Ride',
    title: 'Follow the trip.',
    description: 'Pickup, route and trip progress stay visible as the ride moves.',
    progress: 70,
    x: 696,
    y: 108,
    mobileX: 84,
    mobileY: 255,
  },
  {
    id: 'arrive',
    number: '04',
    label: 'Arrive',
    title: 'Arrive with the trip recorded.',
    description: 'The journey closes with the ride details in one place.',
    progress: 100,
    x: 914,
    y: 42,
    mobileX: 304,
    mobileY: 360,
  },
] as const

type JourneyStageId = (typeof journeyStages)[number]['id']

export function DigiVoltSection() {
  const [activeStageId, setActiveStageId] = useState<JourneyStageId>('request')
  const stageButtonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeIndex = journeyStages.findIndex((stage) => stage.id === activeStageId)
  const activeStage = journeyStages[activeIndex]

  function activateStage(index: number) {
    setActiveStageId(journeyStages[index].id)
  }

  function handleStageKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % journeyStages.length
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + journeyStages.length) % journeyStages.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = journeyStages.length - 1
    } else {
      return
    }

    event.preventDefault()
    activateStage(nextIndex)
    stageButtonRefs.current[nextIndex]?.focus()
  }

  const routeStyle = {
    '--route-progress': activeStage.progress,
    '--vehicle-x': activeStage.x,
    '--vehicle-y': activeStage.y,
    '--vehicle-mobile-x': activeStage.mobileX,
    '--vehicle-mobile-y': activeStage.mobileY,
  } as CSSProperties

  return (
    <section className="digivolt-chapter" id="digivolt" aria-labelledby="digivolt-title">
      <Container>
        <header className="digivolt-chapter__intro">
          <div className="digivolt-chapter__identity">
            <p className="type-tech">02 / DigiVolt</p>
            <p className="digivolt-chapter__category type-tech">Electric mobility</p>
          </div>
          <div className="digivolt-chapter__statement">
            <h2 id="digivolt-title">A smarter way to move.</h2>
            <p className="type-lead">
              DigiVolt connects ride booking, vehicle assignment and trip progress in one
              electric mobility experience.
            </p>
          </div>
        </header>

        <div className="digivolt-experience" data-stage={activeStage.id}>
          <figure className="digivolt-experience__visual">
            <img
              src={digivoltShowcase}
              alt="DigiVolt electric mobility marketing visualization showing a vehicle, route and ride interface"
            />
            <figcaption className="type-tech">Product visualization / DigiVolt</figcaption>
          </figure>

          <article
            aria-labelledby={`digivolt-tab-${activeStage.id}`}
            className="digivolt-experience__copy"
            id="digivolt-journey-panel"
            role="tabpanel"
          >
            <div className="digivolt-experience__copy-state" key={activeStage.id}>
              <p className="type-tech">{activeStage.number} / {activeStage.label}</p>
              <h3>{activeStage.title}</h3>
              <p>{activeStage.description}</p>
            </div>
          </article>

          <div className="digivolt-journey-route" style={routeStyle} aria-hidden="true">
            <svg className="digivolt-journey-route__desktop" viewBox="0 0 1000 180" role="presentation">
              <path
                className="digivolt-journey-route__base"
                d="M92 128 C210 128 246 76 344 76 S560 108 696 108 S820 42 914 42"
                pathLength="100"
              />
              <path
                className="digivolt-journey-route__progress"
                d="M92 128 C210 128 246 76 344 76 S560 108 696 108 S820 42 914 42"
                pathLength="100"
              />
              {journeyStages.map((stage, index) => (
                <circle
                  className="digivolt-journey-route__waypoint"
                  data-active={index <= activeIndex}
                  cx={stage.x}
                  cy={stage.y}
                  key={stage.id}
                  r="8"
                />
              ))}
              <g className="digivolt-journey-route__vehicle">
                <circle r="22" />
                <text textAnchor="middle" y="4">EV</text>
              </g>
              <text className="digivolt-journey-route__place" x="92" y="164">PICKUP</text>
              <text className="digivolt-journey-route__place" textAnchor="end" x="914" y="78">DESTINATION</text>
            </svg>
            <svg className="digivolt-journey-route__mobile" viewBox="0 0 360 420" role="presentation">
              <path
                className="digivolt-journey-route__base"
                d="M56 60 C56 125 300 80 300 145 S84 190 84 255 S304 292 304 360"
                pathLength="100"
              />
              <path
                className="digivolt-journey-route__progress"
                d="M56 60 C56 125 300 80 300 145 S84 190 84 255 S304 292 304 360"
                pathLength="100"
              />
              {journeyStages.map((stage, index) => (
                <circle
                  className="digivolt-journey-route__waypoint"
                  data-active={index <= activeIndex}
                  cx={stage.mobileX}
                  cy={stage.mobileY}
                  key={stage.id}
                  r="8"
                />
              ))}
              <g className="digivolt-journey-route__vehicle digivolt-journey-route__vehicle--mobile">
                <circle r="22" />
                <text textAnchor="middle" y="4">EV</text>
              </g>
              <text className="digivolt-journey-route__place" x="56" y="28">PICKUP</text>
              <text className="digivolt-journey-route__place" textAnchor="end" x="304" y="398">DESTINATION</text>
            </svg>
          </div>

          <div className="digivolt-journey" role="tablist" aria-label="DigiVolt ride journey">
            {journeyStages.map((stage, index) => {
              const isActive = stage.id === activeStageId
              return (
                <button
                  aria-controls="digivolt-journey-panel"
                  aria-selected={isActive}
                  className="digivolt-journey__stage"
                  data-active={isActive}
                  id={`digivolt-tab-${stage.id}`}
                  key={stage.id}
                  onClick={() => activateStage(index)}
                  onKeyDown={(event) => handleStageKeyDown(event, index)}
                  ref={(element) => { stageButtonRefs.current[index] = element }}
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
        </div>
      </Container>
    </section>
  )
}
