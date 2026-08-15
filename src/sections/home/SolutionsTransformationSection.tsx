import { useRef, useState, type KeyboardEvent } from 'react'

import { Container } from '../../components/Container'
import '../../styles/solutions-transformation.css'

type StageId = 'connect' | 'automate' | 'transact'

type Stage = {
  id: StageId
  title: string
  description: string
  outcome: string
}

const stages: readonly Stage[] = [
  {
    id: 'connect',
    title: 'Connect',
    description: 'Bring the systems and information behind the work into one shared context.',
    outcome: 'The people and systems involved in the work can work from the same context.',
  },
  {
    id: 'automate',
    title: 'Automate',
    description: 'Move repeatable work between systems without entering the same information again.',
    outcome: 'Routine handoffs move forward with less repeated manual work.',
  },
  {
    id: 'transact',
    title: 'Transact',
    description: 'Keep approvals, financial events and reporting connected to the work that produced them.',
    outcome: 'The business event and the record behind it finish in the same system.',
  },
]

const systems = ['Requests', 'Operations', 'Finance', 'Reporting'] as const

export function SolutionsTransformationSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const stageButtonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const activeStage = stages[activeIndex]

  function selectStage(index: number, moveFocus = false) {
    setActiveIndex(index)

    if (moveFocus) {
      window.requestAnimationFrame(() => stageButtonRefs.current[index]?.focus())
    }
  }

  function handleStageKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    let nextIndex = activeIndex

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (activeIndex + 1) % stages.length
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (activeIndex - 1 + stages.length) % stages.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = stages.length - 1
    } else {
      return
    }

    event.preventDefault()
    selectStage(nextIndex, true)
  }

  return (
    <section
      className="operations-system"
      aria-labelledby="operations-system-title"
      data-stage={activeStage.id}
    >
      <Container className="operations-system__inner">
        <header className="operations-system__intro">
          <p>What Digi02 does</p>
          <h2 id="operations-system-title">Make the operation work as one system.</h2>
          <p>
            We connect software, workflows and transactions so teams are not forced to manage the
            same work across disconnected tools.
          </p>
        </header>

        <div className="operations-system__body">
          <div
            aria-label="Digi02 operating approach"
            className="operations-system__stage-rail"
            onKeyDown={handleStageKeyDown}
            role="tablist"
          >
            {stages.map((stage, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  aria-controls="operations-system-flow"
                  aria-selected={isActive}
                  className="operations-system__stage-button"
                  data-active={isActive}
                  id={`operations-system-tab-${stage.id}`}
                  key={stage.id}
                  onClick={() => selectStage(index)}
                  ref={(element) => {
                    stageButtonRefs.current[index] = element
                  }}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  <strong>{stage.title}</strong>
                  <span className="operations-system__stage-description">{stage.description}</span>
                </button>
              )
            })}
          </div>

          <article
            aria-labelledby={`operations-system-tab-${activeStage.id}`}
            className="operations-thread"
            id="operations-system-flow"
            role="tabpanel"
          >
            <div className="operations-thread__systems" aria-label="Illustrative connected business systems">
              <span className="operations-thread__line" aria-hidden="true" />
              {systems.map((system, index) => (
                <div className="operations-thread__system" data-index={index} key={system}>
                  <span aria-hidden="true" />
                  <strong>{system}</strong>
                </div>
              ))}
            </div>

            <div className="operations-thread__message" aria-live="polite">
              <span>{activeStage.title}</span>
              <p>{activeStage.outcome}</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
