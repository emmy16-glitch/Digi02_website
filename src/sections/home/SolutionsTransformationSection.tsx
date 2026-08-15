import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent } from 'react'

import { Container } from '../../components/Container'
import '../../styles/solutions-transformation.css'

const stages = [
  {
    id: 'connect',
    number: '01',
    label: 'Connect',
    title: 'Bring the pieces into one context.',
    description: 'The same order stops living as separate fragments across the operation.',
  },
  {
    id: 'automate',
    number: '02',
    label: 'Automate',
    title: 'Remove the handoffs that add no value.',
    description: 'The record moves through the necessary steps without repeating the same work by hand.',
  },
  {
    id: 'transact',
    number: '03',
    label: 'Transact',
    title: 'Let one event update the operation behind it.',
    description: 'The transaction resolves through verification, inventory, recording and reporting as one connected event.',
  },
] as const

type StageId = (typeof stages)[number]['id']

const connectFragments = [
  ['Stock', '24 available'],
  ['Payment', 'Received'],
  ['Approval', 'Waiting'],
  ['Reporting', 'Separate'],
] as const

const automateSteps = [
  { label: 'Request received', manual: false },
  { label: 'Staff handoff', manual: true },
  { label: 'Approved', manual: false },
  { label: 'Manual stock update', manual: true },
  { label: 'Inventory updated', manual: false },
  { label: 'Finance notification', manual: true },
  { label: 'Recorded', manual: false },
] as const

const transactionSteps = [
  'Received',
  'Verified',
  'Inventory updated',
  'Recorded',
  'Reported',
] as const

const DESKTOP_STORY_QUERY = '(min-width: 64.0625rem) and (prefers-reduced-motion: no-preference)'

export function SolutionsTransformationSection() {
  const [activeStageId, setActiveStageId] = useState<StageId>('connect')
  const scrollRef = useRef<HTMLDivElement>(null)
  const stageButtonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeIndex = stages.findIndex((stage) => stage.id === activeStageId)
  const activeStage = stages[activeIndex]

  useEffect(() => {
    const desktopStory = window.matchMedia(DESKTOP_STORY_QUERY)
    let frameId = 0

    function updateFromScroll() {
      const chapter = scrollRef.current
      if (!chapter || !desktopStory.matches) return

      const rect = chapter.getBoundingClientRect()
      const travel = Math.max(chapter.offsetHeight - window.innerHeight, 1)
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1)
      const nextIndex = Math.min(Math.floor(progress * stages.length), stages.length - 1)
      const nextStage = stages[nextIndex].id

      setActiveStageId((current) => (current === nextStage ? current : nextStage))
    }

    function requestUpdate() {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateFromScroll)
    }

    updateFromScroll()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    desktopStory.addEventListener('change', requestUpdate)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      desktopStory.removeEventListener('change', requestUpdate)
    }
  }, [])

  function activateStage(index: number) {
    const stage = stages[index]
    const chapter = scrollRef.current
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

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % stages.length
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + stages.length) % stages.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = stages.length - 1
    } else {
      return
    }

    event.preventDefault()
    activateStage(nextIndex)
    stageButtonRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="operations-bridge" aria-labelledby="operations-bridge-title">
      <Container className="operations-bridge__intro">
        <p className="operations-bridge__eyebrow type-tech">
          Digi02 / Operational challenges
        </p>

        <h2 id="operations-bridge-title">
          Work breaks down when its parts stop working together.
        </h2>

        <p className="operations-bridge__summary">
          One sample record shows how connection, automation and transaction handling change the same operation.
        </p>
      </Container>

      <div className="operations-thread__scroll" ref={scrollRef}>
        <div className="operations-thread__sticky">
          <Container className="operations-thread__presentation">
            <div
              aria-label="Connected operations stages"
              className="operations-thread__rail"
              role="tablist"
              style={{ '--stage-index': activeIndex } as CSSProperties}
            >
              <span aria-hidden="true" className="operations-thread__rail-track" />
              <span aria-hidden="true" className="operations-thread__rail-marker" />

              {stages.map((stage, index) => {
                const isActive = stage.id === activeStageId

                return (
                  <button
                    aria-controls="operations-thread-panel"
                    aria-selected={isActive}
                    data-active={isActive}
                    key={stage.id}
                    onClick={() => activateStage(index)}
                    onKeyDown={(event) => handleStageKeyDown(event, index)}
                    ref={(element) => {
                      stageButtonRefs.current[index] = element
                    }}
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

            <article
              aria-live="polite"
              className="operations-thread"
              data-stage={activeStageId}
              id="operations-thread-panel"
              role="tabpanel"
            >
              <div className="operations-thread__copy" key={activeStageId}>
                <p className="type-tech">{activeStage.number} / {activeStage.label}</p>
                <h3>{activeStage.title}</h3>
                <p>{activeStage.description}</p>
              </div>

              <div className="operations-record">
                <header className="operations-record__header">
                  <div>
                    <p className="type-tech">Demo / Order #1048</p>
                    <strong>Wireless headset</strong>
                  </div>
                  <span>Same record / three stages</span>
                </header>

                <div className="operations-record__body">
                  <div className="operations-state operations-state--connect" aria-hidden={activeStageId !== 'connect'}>
                    <div className="operations-connect__anchor">
                      <span className="type-tech">Order #1048</span>
                      <strong>One record</strong>
                    </div>

                    <div className="operations-connect__fragments">
                      {connectFragments.map(([label, value]) => (
                        <div className="operations-connect__fragment" key={label}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="operations-state operations-state--automate" aria-hidden={activeStageId !== 'automate'}>
                    <p className="type-tech">Manual handoffs collapse</p>
                    <ol>
                      {automateSteps.map((step) => (
                        <li data-manual={step.manual} key={step.label}>
                          <span aria-hidden="true" />
                          <strong>{step.label}</strong>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="operations-state operations-state--transact" aria-hidden={activeStageId !== 'transact'}>
                    <p className="type-tech">Transaction resolution</p>
                    <ol>
                      {transactionSteps.map((step, index) => (
                        <li key={step} style={{ '--event-index': index } as CSSProperties}>
                          <span className="type-tech">0{index + 1}</span>
                          <strong>{step}</strong>
                          <span aria-hidden="true" className="operations-transact__status">✓</span>
                        </li>
                      ))}
                    </ol>
                    <div className="operations-transact__complete">
                      <span className="type-tech">Order #1048 / Complete</span>
                      <strong>One event. One connected record.</strong>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Container>
        </div>
      </div>
    </section>
  )
}
