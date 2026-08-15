import { useEffect, useRef, useState, type KeyboardEvent } from 'react'

import missionAnalytics from '../../assets/skygrid/skygrid-mission-analytics.webp'
import operationsCenter from '../../assets/skygrid/skygrid-operations-center.webp'
import routePlanner from '../../assets/skygrid/skygrid-route-planner.webp'
import showcaseConcept from '../../assets/skygrid/skygrid-showcase-concept.png'
import { Container } from '../../components/Container'
import { SkyGridMissionView } from './SkyGridMissionView'
import '../../styles/skygrid-section.css'

type MissionStageId = 'plan' | 'prepare' | 'operate' | 'review'

type MissionStage = {
  id: MissionStageId
  number: string
  label: string
  title: string
  description: string
  evidence: string
  image?: string
  alt?: string
}

const missionStages: readonly MissionStage[] = [
  {
    id: 'plan',
    number: '01',
    label: 'Plan',
    title: 'Define the mission before the aircraft moves.',
    description:
      'Set the operating area, route and flight parameters in the same environment used to prepare the mission.',
    evidence: 'Real SkyGrid route-planning interface',
    image: routePlanner,
    alt: 'SkyGrid route planner showing a UAV mission route with waypoint and flight controls',
  },
  {
    id: 'prepare',
    number: '02',
    label: 'Prepare',
    title: 'Know what is ready before launch.',
    description:
      'Bring aircraft readiness, pilot assignment and operating conditions into the pre-flight check.',
    evidence: 'Real SkyGrid mission operations interface',
    image: operationsCenter,
    alt: 'SkyGrid mission operations interface showing aircraft and operational readiness information',
  },
  {
    id: 'operate',
    number: '03',
    label: 'Operate',
    title: 'See the mission in its field context.',
    description:
      'Move from planning into a spatial view of the route, terrain and mission position while the operation is active.',
    evidence: 'Illustrative mission terrain view with real SkyGrid fallback',
  },
  {
    id: 'review',
    number: '04',
    label: 'Review',
    title: 'Return to what happened after the flight.',
    description:
      'Review mission history, flight activity and recorded operational events once the aircraft is back on the ground.',
    evidence: 'Real SkyGrid Mission Overview interface',
    image: missionAnalytics,
    alt: 'SkyGrid Mission Overview showing post-flight analytics, flight summary, mission map and incident navigation',
  },
]

export function SkyGridSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasActivatedOperate, setHasActivatedOperate] = useState(false)
  const stageButtonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeStage = missionStages[activeIndex]

  useEffect(() => {
    if (activeStage.id === 'operate') setHasActivatedOperate(true)
  }, [activeStage.id])

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
          <p>SkyGrid</p>
          <div>
            <span>UAV operations</span>
            <h2 id="skygrid-title">See more. React earlier. Operate smarter.</h2>
            <p>
              Plan missions, coordinate UAV operations and review field activity from one
              operational environment.
            </p>
            <a href="/solutions">
              Explore UAV systems <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <figure className="skygrid-story__cinematic">
          <img
            alt="SkyGrid mission showcase visualization"
            decoding="async"
            loading="eager"
            src={showcaseConcept}
          />
          <figcaption>Mission simulation / product visualization</figcaption>
        </figure>
      </Container>

      <div className="skygrid-dashboard" data-stage={activeStage.id}>
        <Container className="skygrid-dashboard__inner">
          <header className="skygrid-dashboard__heading">
            <p>Mission software</p>
            <h3>One mission. Four operational states.</h3>
            <p>
              Move through the mission sequence to see how planning, readiness, field context and
              after-action review stay connected.
            </p>
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
                  <span>{stage.number}</span>
                  <strong>{stage.label}</strong>
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
              <span>{activeStage.number} / {activeStage.label}</span>
              <h4>{activeStage.title}</h4>
              <p>{activeStage.description}</p>
              <small>{activeStage.evidence}</small>
            </div>

            <div className="skygrid-stage-panel__evidence">
              {activeStage.id === 'operate' ? (
                <SkyGridMissionView isActive shouldInitialize={hasActivatedOperate} />
              ) : (
                <figure className="skygrid-stage-panel__screen" key={activeStage.id}>
                  <img
                    alt={activeStage.alt ?? ''}
                    decoding="async"
                    loading="eager"
                    src={activeStage.image}
                  />
                </figure>
              )}
            </div>
          </article>

          <footer className="skygrid-dashboard__footer">
            <span>Use the stage controls or keyboard arrow keys to move through the mission.</span>
            <strong>{String(activeIndex + 1).padStart(2, '0')} / 04</strong>
          </footer>
        </Container>
      </div>
    </section>
  )
}
