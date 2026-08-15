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
    outcome: 'The systems involved in the work can see the same operational context.',
  },
  {
    id: 'automate',
    title: 'Automate',
    description: 'Move repeatable work between systems without entering the same information again.',
    outcome: 'Routine handoffs can move forward without another manual update at every step.',
  },
  {
    id: 'transact',
    title: 'Transact',
    description: 'Keep approvals, financial events and reporting connected to the work that produced them.',
    outcome: 'The activity, transaction and reporting record finish in the same operational thread.',
  },
]

const systems = ['Requests', 'Inventory', 'Operations', 'Finance', 'Reporting'] as const

const flowSteps = [
  { label: 'Request received', system: 'Requests' },
  { label: 'Availability checked', system: 'Inventory' },
  { label: 'Work approved', system: 'Operations' },
  { label: 'Transaction recorded', system: 'Finance' },
  { label: 'Reporting updated', system: 'Reporting' },
] as const

function getRowState(stage: StageId, index: number) {
  if (stage === 'connect') return index === 0 ? 'active' : 'waiting'

  if (stage === 'automate') {
    if (index <= 2) return 'complete'
    if (index === 3) return 'active'
    return 'waiting'
  }

  return 'complete'
}

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
          <p>What Digi02 actually does</p>
          <h2 id="operations-system-title">Make the operation work as one system.</h2>
          <p>
            We connect the software, workflows and transactions behind everyday work so teams are
            not forced to manage the same operation across disconnected tools.
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
            <header className="operations-thread__header">
              <p aria-live="polite">{activeStage.outcome}</p>
            </header>

            <div className="operations-thread__record">
              <div className="operations-thread__record-copy">
                <h3>One operation. Shared context.</h3>
                <p>
                  A simple example of how one piece of work can move through the systems that need
                  to respond to it. No customer or live operational data is represented here.
                </p>
              </div>

              <div className="operations-thread__systems" aria-label="Illustrative connected systems">
                {systems.map((system) => (
                  <div className="operations-thread__system" key={system}>
                    <span aria-hidden="true" />
                    <strong>{system}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="operations-thread__steps" aria-label="Illustrative workflow progress">
              {flowSteps.map((row, index) => {
                const rowState = getRowState(activeStage.id, index)

                return (
                  <div className="operations-thread__step" data-state={rowState} key={row.label}>
                    <span className="operations-thread__step-marker" aria-hidden="true" />
                    <div>
                      <strong>{row.label}</strong>
                      <span>{row.system}</span>
                    </div>
                    <span className="operations-thread__step-state">
                      {rowState === 'complete'
                        ? 'Complete'
                        : rowState === 'active'
                          ? 'In progress'
                          : 'Waiting'}
                    </span>
                  </div>
                )
              })}
            </div>

            <footer className="operations-thread__footer">
              <span>Illustrative operating sequence only.</span>
            </footer>
          </article>
        </div>
      </Container>
    </section>
  )
}
