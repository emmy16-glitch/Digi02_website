import { useState, type KeyboardEvent } from 'react'

import { Container } from '../../components/Container'
import '../../styles/solutions-transformation.css'

type StageId = 'connect' | 'automate' | 'transact'

type Stage = {
  id: StageId
  number: string
  title: string
  description: string
  outcome: string
}

const stages: readonly Stage[] = [
  {
    id: 'connect',
    number: '01',
    title: 'Connect',
    description:
      'Bring the systems and information behind the operation into one working context.',
    outcome: 'The same request is now visible across the operation.',
  },
  {
    id: 'automate',
    number: '02',
    title: 'Automate',
    description:
      'Remove repeatable handoffs so routine work can move without unnecessary delay.',
    outcome: 'Routine updates move through the same operational thread.',
  },
  {
    id: 'transact',
    number: '03',
    title: 'Transact',
    description:
      'Carry activity through to the records and financial events that complete the work.',
    outcome: 'The transaction and the records behind it resolve together.',
  },
]

const systems = ['Sales', 'Inventory', 'Operations', 'Finance', 'Reporting'] as const

const threadRows = [
  { label: 'Request received', system: 'Sales' },
  { label: 'Approval recorded', system: 'Operations' },
  { label: 'Inventory updated', system: 'Inventory' },
  { label: 'Transaction recorded', system: 'Finance' },
  { label: 'Reporting updated', system: 'Reporting' },
] as const

function getRowState(stage: StageId, index: number) {
  if (stage === 'connect') {
    return index === 0 ? 'active' : 'waiting'
  }

  if (stage === 'automate') {
    if (index <= 2) return 'complete'
    if (index === 3) return 'active'
    return 'waiting'
  }

  return 'complete'
}

export function SolutionsTransformationSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStage = stages[activeIndex]

  function selectStage(index: number) {
    setActiveIndex(index)
  }

  function handleStageKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((current) => (current + 1) % stages.length)
      return
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((current) => (current - 1 + stages.length) % stages.length)
      return
    }

    if (event.key === 'Home') {
      event.preventDefault()
      setActiveIndex(0)
      return
    }

    if (event.key === 'End') {
      event.preventDefault()
      setActiveIndex(stages.length - 1)
    }
  }

  return (
    <section
      className="operations-system"
      aria-labelledby="operations-system-title"
      data-stage={activeStage.id}
    >
      <Container className="operations-system__inner">
        <header className="operations-system__intro">
          <p>Operating philosophy</p>
          <h2 id="operations-system-title">
            Work breaks down when its parts stop working together.
          </h2>
          <p>
            Digi02 connects software, workflows and transactions so the operation can move as one
            system instead of a collection of disconnected tools.
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
                  aria-controls="operations-system-thread"
                  aria-selected={isActive}
                  className="operations-system__stage-button"
                  data-active={isActive}
                  id={`operations-system-tab-${stage.id}`}
                  key={stage.id}
                  onClick={() => selectStage(index)}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  <span>{stage.number}</span>
                  <strong>{stage.title}</strong>
                  <p>{stage.description}</p>
                </button>
              )
            })}
          </div>

          <article
            aria-labelledby={`operations-system-tab-${activeStage.id}`}
            className="operations-thread"
            id="operations-system-thread"
            role="tabpanel"
          >
            <header className="operations-thread__header">
              <div>
                <span>Illustrative workflow</span>
                <strong>REQ-1048</strong>
              </div>

              <p aria-live="polite">{activeStage.outcome}</p>
            </header>

            <div className="operations-thread__record">
              <div className="operations-thread__record-copy">
                <span>Shared operational record</span>
                <h3>Field equipment order</h3>
                <p>
                  One sample request moving through the systems that need to respond to it.
                </p>
              </div>

              <div className="operations-thread__systems" aria-label="Connected systems">
                {systems.map((system, index) => (
                  <div className="operations-thread__system" key={system}>
                    <span aria-hidden="true" data-index={index} />
                    <strong>{system}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="operations-thread__steps" aria-label="Illustrative workflow progress">
              {threadRows.map((row, index) => {
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
              <span>Sample operational sequence only — not live customer data.</span>
              <strong>
                {String(activeIndex + 1).padStart(2, '0')} / 03
              </strong>
            </footer>
          </article>
        </div>
      </Container>
    </section>
  )
}
