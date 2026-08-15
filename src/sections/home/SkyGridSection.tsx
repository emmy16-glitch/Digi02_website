import { useRef, useState, type KeyboardEvent } from 'react'

import skyGridCinematic from '../../assets/skygrid/skygrid-cinematic-control-room.webp'
import skyGridLogo from '../../assets/skygrid/skygrid-logo.png'
import { Container } from '../../components/Container'
import '../../styles/skygrid-section.css'

type MissionStageId = 'plan' | 'prepare' | 'operate' | 'review'

type MissionStage = {
  id: MissionStageId
  label: string
  title: string
  description: string
}

const missionStages: readonly MissionStage[] = [
  {
    id: 'plan',
    label: 'Plan',
    title: 'Shape the mission before launch.',
    description:
      'Define the operating area, route, waypoints and return path before the aircraft moves.',
  },
  {
    id: 'prepare',
    label: 'Prepare',
    title: 'Confirm the mission is ready to move.',
    description:
      'Bring aircraft readiness, operator responsibility and operating conditions into the same pre-flight picture.',
  },
  {
    id: 'operate',
    label: 'Operate',
    title: 'Follow the mission in its field context.',
    description:
      'Keep the planned route, active sector and aircraft position connected while the mission is underway.',
  },
  {
    id: 'review',
    label: 'Review',
    title: 'Turn the flight into a usable operational record.',
    description:
      'Return to the route, mission events and field observations after the aircraft is back on the ground.',
  },
]

function MissionStageVisual({ stage }: { stage: MissionStageId }) {
  if (stage === 'prepare') {
    return (
      <div className="skygrid-mission-visual skygrid-mission-visual--prepare">
        <div className="skygrid-readiness__aircraft" aria-hidden="true">
          <svg viewBox="0 0 420 220">
            <g className="skygrid-drone-mark">
              <line x1="125" x2="295" y1="110" y2="110" />
              <line x1="210" x2="210" y1="72" y2="148" />
              <circle cx="210" cy="110" r="30" />
              <circle cx="110" cy="110" r="30" />
              <circle cx="310" cy="110" r="30" />
              <circle cx="210" cy="54" r="25" />
              <circle cx="210" cy="166" r="25" />
            </g>
          </svg>
        </div>

        <div className="skygrid-readiness" aria-label="Illustrative mission readiness">
          <div>
            <span aria-hidden="true">✓</span>
            <p><strong>Aircraft</strong><small>Ready for mission</small></p>
          </div>
          <div>
            <span aria-hidden="true">✓</span>
            <p><strong>Operator</strong><small>Responsibility confirmed</small></p>
          </div>
          <div>
            <span aria-hidden="true">✓</span>
            <p><strong>Conditions</strong><small>Operating context reviewed</small></p>
          </div>
        </div>
      </div>
    )
  }

  if (stage === 'review') {
    return (
      <div className="skygrid-mission-visual skygrid-mission-visual--review">
        <svg aria-hidden="true" className="skygrid-mission-map" viewBox="0 0 1000 560">
          <path className="skygrid-map__contour" d="M5 140 C180 55 270 98 420 156 S720 264 990 132" />
          <path className="skygrid-map__contour" d="M-20 298 C160 214 302 225 442 290 S730 414 1020 292" />
          <path className="skygrid-map__contour" d="M10 445 C175 372 310 382 455 438 S735 518 1005 430" />
          <path className="skygrid-map__route skygrid-map__route--complete" d="M92 445 C202 390 213 250 336 237 C470 223 512 351 632 314 C760 275 790 164 902 116" pathLength="100" />
          <circle className="skygrid-map__waypoint" cx="92" cy="445" r="10" />
          <circle className="skygrid-map__event" cx="336" cy="237" r="13" />
          <circle className="skygrid-map__event" cx="632" cy="314" r="13" />
          <circle className="skygrid-map__waypoint skygrid-map__waypoint--active" cx="902" cy="116" r="12" />
        </svg>

        <div className="skygrid-review-strip">
          <span>Route trace</span>
          <span>Field events</span>
          <span>Review notes</span>
        </div>
      </div>
    )
  }

  const isOperate = stage === 'operate'

  return (
    <div className={`skygrid-mission-visual skygrid-mission-visual--${stage}`}>
      <svg aria-hidden="true" className="skygrid-mission-map" viewBox="0 0 1000 560">
        <path className="skygrid-map__contour" d="M5 140 C180 55 270 98 420 156 S720 264 990 132" />
        <path className="skygrid-map__contour" d="M-20 298 C160 214 302 225 442 290 S730 414 1020 292" />
        <path className="skygrid-map__contour" d="M10 445 C175 372 310 382 455 438 S735 518 1005 430" />
        <ellipse className="skygrid-map__zone" cx="535" cy="282" rx="178" ry="112" />
        <path className="skygrid-map__route" d="M92 445 C202 390 213 250 336 237 C470 223 512 351 632 314 C760 275 790 164 902 116" pathLength="100" />
        <circle className="skygrid-map__waypoint" cx="92" cy="445" r="10" />
        <circle className="skygrid-map__waypoint" cx="336" cy="237" r="10" />
        <circle className="skygrid-map__waypoint" cx="632" cy="314" r="10" />
        <circle className="skygrid-map__waypoint skygrid-map__waypoint--active" cx="902" cy="116" r="12" />
        <g className={`skygrid-map__aircraft ${isOperate ? 'skygrid-map__aircraft--active' : ''}`} transform={isOperate ? 'translate(600 286)' : 'translate(300 216)'}>
          <path d="M-30 0 L2 -13 L12 -8 L-8 2 L10 15 L1 19 L-30 7 L-52 15 L-58 9 L-44 2 L-58 -6 L-52 -12 Z" />
        </g>
      </svg>

      <div className="skygrid-map__labels" aria-hidden="true">
        <span className="skygrid-map__label skygrid-map__label--start">Launch</span>
        <span className="skygrid-map__label skygrid-map__label--zone">Mission area</span>
        <span className="skygrid-map__label skygrid-map__label--return">Return</span>
        {isOperate ? <span className="skygrid-map__label skygrid-map__label--active">Aircraft in mission area</span> : null}
      </div>
    </div>
  )
}

export function SkyGridSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const stageButtonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeStage = missionStages[activeIndex]

  function selectStage(index: number, moveFocus = false) {
    setActiveIndex(index)

    if (moveFocus) {
      window.requestAnimationFrame(() => stageButtonRefs.current[index]?.focus())
    }
  }

  function handleStageKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    let nextIndex = activeIndex

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (activeIndex + 1) % missionStages.length
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (activeIndex - 1 + missionStages.length) % missionStages.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = missionStages.length - 1
    } else {
      return
    }

    event.preventDefault()
    selectStage(nextIndex, true)
  }

  return (
    <section className="skygrid-story" id="skygrid" aria-labelledby="skygrid-title">
      <Container className="skygrid-story__intro">
        <header className="skygrid-story__heading">
          <div className="skygrid-story__brand">
            <img alt="SkyGrid" src={skyGridLogo} />
            <span>UAV operations by Digi02</span>
          </div>

          <div className="skygrid-story__statement">
            <h2 id="skygrid-title">See more. React earlier. Operate smarter.</h2>
            <p>
              SkyGrid brings mission planning, flight operations and field intelligence into one
              operational story — before, during and after the aircraft moves.
            </p>
            <a href="/solutions/skygrid">
              Explore SkyGrid <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <figure className="skygrid-story__cinematic">
          <img
            alt="Illustrative SkyGrid UAV operations environment with drones and an operations control room"
            decoding="async"
            loading="eager"
            src={skyGridCinematic}
          />
          <figcaption>SkyGrid concept visualization — illustrative scene, not a photographed Digi02 deployment.</figcaption>
        </figure>

        <div className="skygrid-story__capabilities" aria-label="SkyGrid capabilities">
          <p><strong>Mission planning</strong><span>Shape routes, mission areas and waypoints before launch.</span></p>
          <p><strong>Flight operations</strong><span>Keep the aircraft, route and operating context connected during the mission.</span></p>
          <p><strong>Field intelligence</strong><span>Bring mission events and observations back into the operational record.</span></p>
        </div>
      </Container>

      <div className="skygrid-mission-sequence" data-stage={activeStage.id}>
        <Container className="skygrid-mission-sequence__inner">
          <header className="skygrid-mission-sequence__heading">
            <p>From mission idea to operational review.</p>
            <h3>Plan. Prepare. Operate. Review.</h3>
          </header>

          <div
            aria-label="SkyGrid mission stages"
            className="skygrid-stage-rail"
            onKeyDown={handleStageKeyDown}
            role="tablist"
          >
            {missionStages.map((stage, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  aria-controls="skygrid-stage-panel"
                  aria-selected={isActive}
                  className="skygrid-stage-rail__item"
                  data-active={isActive}
                  id={`skygrid-stage-tab-${stage.id}`}
                  key={stage.id}
                  onClick={() => selectStage(index)}
                  ref={(element) => {
                    stageButtonRefs.current[index] = element
                  }}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  {stage.label}
                </button>
              )
            })}
          </div>

          <article
            aria-labelledby={`skygrid-stage-tab-${activeStage.id}`}
            className="skygrid-stage-panel"
            id="skygrid-stage-panel"
            role="tabpanel"
          >
            <div className="skygrid-stage-panel__copy" key={activeStage.id}>
              <h4>{activeStage.title}</h4>
              <p>{activeStage.description}</p>
            </div>

            <div className="skygrid-stage-panel__visual" key={`visual-${activeStage.id}`}>
              <MissionStageVisual stage={activeStage.id} />
              <p className="skygrid-stage-panel__note">Capability visualization — not live operational data.</p>
            </div>
          </article>

          <p className="skygrid-mission-sequence__hint">
            Select a mission stage or use the keyboard arrow keys to move through the sequence.
          </p>
        </Container>
      </div>
    </section>
  )
}
