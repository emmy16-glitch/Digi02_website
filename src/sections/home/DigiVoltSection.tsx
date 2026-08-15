import { useCallback, useEffect, useRef, useState } from 'react'

import { Container } from '../../components/Container'
import digivoltCar from '../../assets/digivolt/digivolt-car-right.webp'
import '../../styles/digivolt-section.css'

type StageId = 'request' | 'match' | 'navigate' | 'charge' | 'arrive'
type InteractionMode = 'pending' | 'scroll' | 'autoplay' | 'static'

type JourneyStage = {
  id: StageId
  number: string
  label: string
  heading: string
  description: string
  status: string
  progress: number
  distance: string
  eta: string
  battery: number
}

type Waypoint = { x: number; y: number }

const DESKTOP_QUERY = '(min-width: 64.0625rem)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const MOBILE_PLAYBACK_MS = 4600
const ROUTE_PATH =
  'M 54 306 C 164 306 178 250 286 242 C 410 233 430 142 532 151 C 640 160 626 278 746 250 C 836 230 838 156 948 128'

const stages: readonly JourneyStage[] = [
  {
    id: 'request',
    number: '01',
    label: 'Request',
    heading: 'Choose where the journey begins.',
    description:
      'Set the pickup point and destination to begin the illustrative DigiVolt journey.',
    status: 'Trip requested',
    progress: 0,
    distance: '12.4 km',
    eta: '18 min',
    battery: 92,
  },
  {
    id: 'match',
    number: '02',
    label: 'Match',
    heading: 'A vehicle is assigned.',
    description:
      'The request connects with an available electric vehicle and the route is prepared.',
    status: 'Vehicle matched',
    progress: 0.22,
    distance: '9.8 km',
    eta: '14 min',
    battery: 88,
  },
  {
    id: 'navigate',
    number: '03',
    label: 'Navigate',
    heading: 'The route stays visible.',
    description:
      'Journey progress, remaining distance and battery state move with the vehicle.',
    status: 'Route active',
    progress: 0.48,
    distance: '6.1 km',
    eta: '9 min',
    battery: 74,
  },
  {
    id: 'charge',
    number: '04',
    label: 'Charge',
    heading: 'Charging becomes part of the route.',
    description:
      'At the charging stop, the illustrative battery state recovers before the vehicle continues.',
    status: 'Charging stop',
    progress: 0.72,
    distance: '2.9 km',
    eta: '4 min',
    battery: 96,
  },
  {
    id: 'arrive',
    number: '05',
    label: 'Arrive',
    heading: 'The journey reaches its destination.',
    description:
      'Arrival completes the route with journey state and vehicle information still connected.',
    status: 'Trip complete',
    progress: 1,
    distance: '0.0 km',
    eta: 'Arrived',
    battery: 94,
  },
]

const waypoints: readonly Waypoint[] = [
  { x: 54, y: 306 },
  { x: 286, y: 242 },
  { x: 532, y: 151 },
  { x: 746, y: 250 },
  { x: 948, y: 128 },
]

function clamp(value: number) {
  return Math.min(1, Math.max(0, value))
}

function stageIndexForProgress(progress: number) {
  let index = 0

  for (let stageIndex = 1; stageIndex < stages.length; stageIndex += 1) {
    const previous = stages[stageIndex - 1]
    const current = stages[stageIndex]
    const midpoint = previous.progress + (current.progress - previous.progress) / 2

    if (progress >= midpoint) index = stageIndex
  }

  return index
}

export function DigiVoltSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mode, setMode] = useState<InteractionMode>('pending')
  const [mobileComplete, setMobileComplete] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const routePathRef = useRef<SVGPathElement>(null)
  const routeProgressRef = useRef<SVGPathElement>(null)
  const vehicleRef = useRef<SVGGElement>(null)
  const routeLengthRef = useRef(0)
  const progressRef = useRef(0)
  const activeIndexRef = useRef(0)
  const scrollRafRef = useRef<number | null>(null)
  const mobileRafRef = useRef<number | null>(null)
  const mobileHasPlayedRef = useRef(false)

  const activeStage = stages[activeIndex]

  const renderProgress = useCallback((rawProgress: number) => {
    const path = routePathRef.current
    const progressPath = routeProgressRef.current
    const vehicle = vehicleRef.current
    if (!path || !progressPath || !vehicle) return

    const progress = clamp(rawProgress)
    const totalLength = routeLengthRef.current || path.getTotalLength()
    const length = totalLength * progress
    const point = path.getPointAtLength(length)
    const before = path.getPointAtLength(Math.max(0, length - 2))
    const after = path.getPointAtLength(Math.min(totalLength, length + 2))
    const tangentAngle =
      (Math.atan2(after.y - before.y, after.x - before.x) * 180) / Math.PI
    const visualAngle = Math.max(-16, Math.min(16, tangentAngle))
    const nextActiveIndex = stageIndexForProgress(progress)

    routeLengthRef.current = totalLength
    progressRef.current = progress
    progressPath.style.strokeDasharray = `${totalLength}`
    progressPath.style.strokeDashoffset = `${totalLength * (1 - progress)}`
    vehicle.setAttribute(
      'transform',
      `translate(${point.x} ${point.y}) rotate(${visualAngle})`,
    )

    if (nextActiveIndex !== activeIndexRef.current) {
      activeIndexRef.current = nextActiveIndex
      setActiveIndex(nextActiveIndex)
    }
  }, [])

  const playMobileJourney = useCallback(() => {
    if (mobileRafRef.current !== null) {
      window.cancelAnimationFrame(mobileRafRef.current)
    }

    setMobileComplete(false)
    renderProgress(0)
    const startedAt = performance.now()

    const frame = (now: number) => {
      const linear = clamp((now - startedAt) / MOBILE_PLAYBACK_MS)
      const eased = linear * linear * (3 - 2 * linear)
      renderProgress(eased)

      if (linear < 1) {
        mobileRafRef.current = window.requestAnimationFrame(frame)
      } else {
        mobileRafRef.current = null
        setMobileComplete(true)
      }
    }

    mobileRafRef.current = window.requestAnimationFrame(frame)
  }, [renderProgress])

  useEffect(() => {
    const path = routePathRef.current
    if (!path) return

    routeLengthRef.current = path.getTotalLength()
    const desktopQuery = window.matchMedia(DESKTOP_QUERY)
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY)

    const syncMode = () => {
      if (reducedMotionQuery.matches) {
        setMode('static')
        renderProgress(1)
        return
      }

      setMode(desktopQuery.matches ? 'scroll' : 'autoplay')
      renderProgress(progressRef.current)
    }

    syncMode()
    desktopQuery.addEventListener('change', syncMode)
    reducedMotionQuery.addEventListener('change', syncMode)

    return () => {
      desktopQuery.removeEventListener('change', syncMode)
      reducedMotionQuery.removeEventListener('change', syncMode)
    }
  }, [renderProgress])

  useEffect(() => {
    if (mode !== 'scroll') return

    const update = () => {
      scrollRafRef.current = null
      const scrollArea = scrollAreaRef.current
      if (!scrollArea) return

      const rect = scrollArea.getBoundingClientRect()
      const distance = Math.max(1, rect.height - window.innerHeight)
      renderProgress(-rect.top / distance)
    }

    const requestUpdate = () => {
      if (scrollRafRef.current === null) {
        scrollRafRef.current = window.requestAnimationFrame(update)
      }
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current)
        scrollRafRef.current = null
      }
    }
  }, [mode, renderProgress])

  useEffect(() => {
    if (mode !== 'autoplay') return
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !mobileHasPlayedRef.current) {
          mobileHasPlayedRef.current = true
          playMobileJourney()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(section)
    return () => {
      observer.disconnect()
      if (mobileRafRef.current !== null) {
        window.cancelAnimationFrame(mobileRafRef.current)
        mobileRafRef.current = null
      }
    }
  }, [mode, playMobileJourney])

  function selectStage(index: number) {
    const target = stages[index].progress

    if (mode === 'scroll') {
      const area = scrollAreaRef.current
      if (!area) return

      const rect = area.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const distance = Math.max(0, area.offsetHeight - window.innerHeight)
      window.scrollTo({
        top: sectionTop + target * distance,
        behavior: 'smooth',
      })
      return
    }

    if (mobileRafRef.current !== null) {
      window.cancelAnimationFrame(mobileRafRef.current)
      mobileRafRef.current = null
    }
    mobileHasPlayedRef.current = true
    setMobileComplete(index === stages.length - 1)
    renderProgress(target)
  }

  function replayMobileJourney() {
    mobileHasPlayedRef.current = true
    playMobileJourney()
  }

  return (
    <section
      aria-labelledby="digivolt-title"
      className="digivolt-chapter"
      data-mode={mode}
      data-stage={activeStage.id}
      ref={sectionRef}
    >
      <div className="digivolt-chapter__scroll-area" ref={scrollAreaRef}>
        <div className="digivolt-chapter__sticky">
          <Container className="digivolt-chapter__inner">
            <div className="digivolt-chapter__layout">
              <div className="digivolt-chapter__copy">
                <div className="digivolt-chapter__identity">
                  <p className="type-tech">02 / DigiVolt</p>
                  <span>Electric mobility</span>
                </div>

                <h2 id="digivolt-title">
                  Smarter electric mobility, from request to arrival.
                </h2>
                <p className="digivolt-chapter__summary">
                  DigiVolt connects ride requests, electric vehicle assignment,
                  route progress and charging into one visible journey.
                </p>

                <div
                  aria-atomic="true"
                  aria-live="polite"
                  className="digivolt-journey__copy"
                >
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
              </div>

              <div className="digivolt-route">
                <div
                  aria-label="Illustrative journey telemetry"
                  className="digivolt-route__telemetry"
                >
                  <div className="digivolt-route__telemetry-head">
                    <span className="type-tech">Illustrative journey</span>
                    <strong>{activeStage.status}</strong>
                  </div>
                  <dl>
                    <div>
                      <dt>ETA</dt>
                      <dd>{activeStage.eta}</dd>
                    </div>
                    <div>
                      <dt>Distance</dt>
                      <dd>{activeStage.distance}</dd>
                    </div>
                    <div>
                      <dt>Battery</dt>
                      <dd>{activeStage.battery}%</dd>
                    </div>
                  </dl>
                  <div className="digivolt-route__battery" aria-hidden="true">
                    <span style={{ width: `${activeStage.battery}%` }} />
                  </div>
                </div>

                <div
                  aria-label="Illustrative DigiVolt journey: Request, Match, Navigate, Charge and Arrive"
                  className="digivolt-route__canvas"
                  role="img"
                >
                  <svg
                    aria-hidden="true"
                    className="digivolt-route__svg"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 1000 430"
                  >
                    <g className="digivolt-route__terrain">
                      <path d="M78 84 C208 34 322 76 428 52 C566 20 664 58 790 30 C870 12 928 30 986 22" />
                      <path d="M28 126 C156 84 276 118 390 94 C520 68 660 108 782 80 C862 62 930 74 992 62" />
                      <path d="M42 356 C164 320 272 360 392 334 C530 304 638 344 770 312 C860 290 930 304 990 286" />
                      <path d="M96 396 C224 356 334 402 458 370 C574 340 704 378 822 346 C894 326 952 334 998 322" />
                    </g>

                    <path className="digivolt-route__road-edge" d={ROUTE_PATH} />
                    <path className="digivolt-route__road" d={ROUTE_PATH} />
                    <path className="digivolt-route__lane" d={ROUTE_PATH} />
                    <path
                      className="digivolt-route__progress"
                      d={ROUTE_PATH}
                      ref={routeProgressRef}
                    />
                    <path
                      className="digivolt-route__measure"
                      d={ROUTE_PATH}
                      ref={routePathRef}
                    />

                    {waypoints.map((point, index) => {
                      const stage = stages[index]
                      const state =
                        index < activeIndex
                          ? 'complete'
                          : index === activeIndex
                            ? 'active'
                            : 'upcoming'

                      return (
                        <g
                          className="digivolt-route__waypoint"
                          data-state={state}
                          key={stage.id}
                          transform={`translate(${point.x} ${point.y})`}
                        >
                          <circle className="digivolt-route__waypoint-ring" r="11" />
                          <circle className="digivolt-route__waypoint-dot" r="4" />
                          <text
                            className="digivolt-route__waypoint-number"
                            textAnchor="middle"
                            x="0"
                            y="-28"
                          >
                            {stage.number}
                          </text>
                          <text
                            className="digivolt-route__waypoint-label"
                            textAnchor="middle"
                            x="0"
                            y="-12"
                          >
                            {stage.label}
                          </text>
                        </g>
                      )
                    })}

                    <g
                      className="digivolt-route__charger"
                      transform="translate(726 178)"
                    >
                      <rect height="60" rx="6" width="34" />
                      <rect height="34" rx="3" width="18" x="8" y="9" />
                      <path d="M19 14 L13 25 H18 L15 35 L24 22 H19 L22 14 Z" />
                      <line x1="17" x2="20" y1="60" y2="70" />
                    </g>

                    <g className="digivolt-route__vehicle-group" ref={vehicleRef}>
                      <ellipse
                        className="digivolt-route__vehicle-shadow"
                        cx="0"
                        cy="35"
                        rx="112"
                        ry="20"
                      />
                      <image
                        className="digivolt-route__vehicle-image"
                        height="118"
                        href={digivoltCar}
                        preserveAspectRatio="xMidYMid meet"
                        width="254"
                        x="-127"
                        y="-64"
                      />
                    </g>
                  </svg>
                </div>

                <p className="digivolt-route__hint type-tech">
                  {mode === 'scroll'
                    ? 'Scroll to move the journey'
                    : mode === 'autoplay'
                      ? 'Plays once when this section enters view'
                      : mode === 'static'
                        ? 'Reduced motion / completed journey'
                        : 'Journey ready'}
                </p>
              </div>
            </div>

            <div aria-label="DigiVolt journey stages" className="digivolt-stage-rail">
              {stages.map((stage, index) => {
                const isActive = index === activeIndex
                const isComplete = index < activeIndex
                return (
                  <button
                    aria-current={isActive ? 'step' : undefined}
                    className="digivolt-stage-rail__item"
                    data-active={isActive}
                    data-complete={isComplete}
                    key={stage.id}
                    onClick={() => selectStage(index)}
                    type="button"
                  >
                    <span className="digivolt-stage-rail__state" aria-hidden="true" />
                    <span className="digivolt-stage-rail__text">
                      <span className="type-tech">{stage.number}</span>
                      <strong>{stage.label}</strong>
                    </span>
                  </button>
                )
              })}
            </div>

            {mode === 'autoplay' && mobileComplete ? (
              <button
                className="digivolt-replay"
                onClick={replayMobileJourney}
                type="button"
              >
                Replay journey
              </button>
            ) : null}
          </Container>
        </div>
      </div>
    </section>
  )
}
