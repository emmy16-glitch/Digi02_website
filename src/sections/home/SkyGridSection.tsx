import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from 'react'
import { Container } from '../../components/Container'
import routePlanner from '../../assets/skygrid/skygrid-route-planner.webp'
import operationsCenter from '../../assets/skygrid/skygrid-operations-center.webp'
import missionAnalytics from '../../assets/skygrid/skygrid-mission-analytics.webp'
import { SkyGridMissionView } from './SkyGridMissionView'
import '../../styles/skygrid-section.css'

const stages = [
  {
    id: 'plan',
    label: 'Plan',
    title: 'Define the route.',
    description: 'Set the mission area, route and flight parameters before takeoff.',
    image: routePlanner,
    alt: 'SkyGrid route planner showing a River Corridor Inspection mission over Kaduna with waypoint and altitude controls',
  },
  {
    id: 'prepare',
    label: 'Prepare',
    title: "Know what's ready.",
    description: 'Check aircraft readiness, pilot assignment and operating conditions before launch.',
    image: operationsCenter,
    alt: 'SkyGrid Mission Operation Center showing aircraft, pilot assignment, readiness and weather checks',
  },
  {
    id: 'operate',
    label: 'Operate',
    title: 'See the mission in space.',
    description: 'Follow the route, terrain and mission position as the operation moves into the field.',
  },
  {
    id: 'review',
    label: 'Review',
    title: 'Review what happened.',
    description: 'Return to flight activity, mission history and operational events after the mission.',
    image: missionAnalytics,
    alt: 'SkyGrid Mission Overview showing post-flight analytics, flight summary, activity and incident logs',
  },
] as const

type StageId = (typeof stages)[number]['id']

const DESKTOP_STORY_QUERY = '(min-width: 64.0625rem) and (prefers-reduced-motion: no-preference)'

export function SkyGridSection() {
  const [activeStageId, setActiveStageId] = useState<StageId>('plan')
  const [hasActivatedOperate, setHasActivatedOperate] = useState(false)
  const scrollChapterRef = useRef<HTMLDivElement>(null)
  const stageButtonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const hasMountedStageRailRef = useRef(false)
  const activeIndex = stages.findIndex((stage) => stage.id === activeStageId)
  const activeStage = stages[activeIndex]

  useEffect(() => {
    const desktopStory = window.matchMedia(DESKTOP_STORY_QUERY)
    let frameId = 0

    function updateStageFromScroll() {
      const chapter = scrollChapterRef.current
      if (!chapter || !desktopStory.matches) return

      const rect = chapter.getBoundingClientRect()
      const travel = Math.max(chapter.offsetHeight - window.innerHeight, 1)
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1)
      const nextIndex = Math.min(Math.floor(progress * stages.length), stages.length - 1)
      const nextStageId = stages[nextIndex].id

      setActiveStageId((currentStageId) =>
        currentStageId === nextStageId ? currentStageId : nextStageId,
      )
    }

    function requestStageUpdate() {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateStageFromScroll)
    }

    updateStageFromScroll()
    window.addEventListener('scroll', requestStageUpdate, { passive: true })
    window.addEventListener('resize', requestStageUpdate)
    desktopStory.addEventListener('change', requestStageUpdate)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestStageUpdate)
      window.removeEventListener('resize', requestStageUpdate)
      desktopStory.removeEventListener('change', requestStageUpdate)
    }
  }, [])

  useEffect(() => {
    if (activeStageId === 'operate') setHasActivatedOperate(true)
  }, [activeStageId])

  useEffect(() => {
    if (!hasMountedStageRailRef.current) {
      hasMountedStageRailRef.current = true
      return
    }

    if (window.matchMedia(DESKTOP_STORY_QUERY).matches) return
    stageButtonRefs.current[activeIndex]?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [activeIndex])

  function activateStage(index: number) {
    const stage = stages[index]
    const chapter = scrollChapterRef.current
    const desktopStory = window.matchMedia(DESKTOP_STORY_QUERY)

    setActiveStageId(stage.id)

    if (!chapter || !desktopStory.matches) return

    const chapterTop = window.scrollY + chapter.getBoundingClientRect().top
    const travel = Math.max(chapter.offsetHeight - window.innerHeight, 0)
    const stageCenter = (index + 0.5) / stages.length

    window.scrollTo({
      top: chapterTop + travel * stageCenter,
      behavior: 'smooth',
    })
  }

  function handleStageKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % stages.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + stages.length) % stages.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = stages.length - 1
    else return

    event.preventDefault()
    activateStage(nextIndex)
    stageButtonRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="skygrid-chapter" id="skygrid" aria-labelledby="skygrid-title">
      <div className="skygrid-chapter__scroll" ref={scrollChapterRef}>
        <div className="skygrid-chapter__sticky">
          <Container className="skygrid-chapter__presentation">
            <header className="skygrid-chapter__masthead">
              <div className="skygrid-chapter__identity">
                <strong>SkyGrid</strong>
                <span>UAV operations</span>
              </div>

              <div className="skygrid-chapter__statement">
                <h2 id="skygrid-title">One operational picture from planning to review.</h2>
                <p>
                  Plan missions, check readiness, follow operations in the field and return to the
                  record afterwards.
                </p>
                <a href="/solutions">Explore SkyGrid <span aria-hidden="true">→</span></a>
              </div>
            </header>

            <div
              className="skygrid-stage-rail"
              role="tablist"
              aria-label="SkyGrid mission stages"
              style={{ '--stage-index': activeIndex } as CSSProperties}
            >
              <span className="skygrid-stage-rail__track" aria-hidden="true" />
              <span className="skygrid-stage-rail__marker" aria-hidden="true" />
              {stages.map((stage, index) => {
                const isActive = stage.id === activeStageId
                return (
                  <button
                    aria-controls="skygrid-stage-panel"
                    aria-selected={isActive}
                    className="skygrid-stage-rail__item"
                    data-active={isActive}
                    id={`skygrid-tab-${stage.id}`}
                    key={stage.id}
                    onClick={() => activateStage(index)}
                    onKeyDown={(event) => handleStageKeyDown(event, index)}
                    ref={(element) => { stageButtonRefs.current[index] = element }}
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    type="button"
                  >
                    <strong>{stage.label}</strong>
                  </button>
                )
              })}
            </div>

            <article
              aria-labelledby={`skygrid-tab-${activeStage.id}`}
              className="skygrid-stage"
              data-stage={activeStage.id}
              id="skygrid-stage-panel"
              role="tabpanel"
            >
              <div className="skygrid-stage__copy">
                <div className="skygrid-stage__copy-state" key={activeStage.id}>
                  <p className="skygrid-stage__phase">{activeStage.label}</p>
                  <h3>{activeStage.title}</h3>
                  <p>{activeStage.description}</p>
                </div>
              </div>

              <div className="skygrid-product-canvas" data-stage={activeStage.id}>
                {stages.filter((stage) => 'image' in stage).map((stage, index) => {
                  const isActive = stage.id === activeStageId
                  return (
                    <figure
                      aria-hidden={!isActive}
                      className="skygrid-product-canvas__layer skygrid-product-canvas__screen"
                      data-active={isActive}
                      data-view={stage.id}
                      key={stage.id}
                    >
                      <img
                        alt={isActive ? stage.alt : ''}
                        decoding="async"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        src={stage.image}
                      />
                    </figure>
                  )
                })}

                <div
                  aria-hidden={activeStageId !== 'operate'}
                  className="skygrid-product-canvas__layer skygrid-product-canvas__operate"
                  data-active={activeStageId === 'operate'}
                >
                  <SkyGridMissionView
                    isActive={activeStageId === 'operate'}
                    shouldInitialize={hasActivatedOperate}
                  />
                </div>
              </div>
            </article>
          </Container>
        </div>
      </div>
    </section>
  )
}
