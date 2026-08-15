import { useState } from 'react'

import { Container } from '../../components/Container'
import '../../styles/academy-section.css'

const learningStages = [
  {
    id: 'learn',
    number: '01',
    label: 'Learn',
    description: 'Workshop with guidance.',
  },
  {
    id: 'build',
    number: '02',
    label: 'Build',
    description: 'Turn instruction into working practice.',
  },
  {
    id: 'review',
    number: '03',
    label: 'Review',
    description: 'Test, explain and improve the result.',
  },
  {
    id: 'ship',
    number: '04',
    label: 'Ship',
    description: 'Finish a working project.',
  },
] as const

type LearningStage = (typeof learningStages)[number]['id']

export function AcademySection() {
  const [activeStage, setActiveStage] = useState<LearningStage>('learn')
  const activeIndex = learningStages.findIndex((stage) => stage.id === activeStage)
  const activeStep = learningStages[activeIndex]

  return (
    <section className="academy-chapter" id="academy" aria-labelledby="academy-title">
      <Container className="academy-chapter__inner">
        <header className="academy-chapter__intro">
          <div className="academy-chapter__identity">
            <p className="type-tech">05 / Emerging Tech Academy</p>
            <span>Practical technology learning</span>
            <div className="academy-chapter__status">
              <span>Learning initiative</span>
              <span>Level C / Learning model</span>
            </div>
          </div>

          <div className="academy-chapter__statement">
            <h2 id="academy-title">Learn technology by building with it.</h2>
          </div>
        </header>

        <div className="academy-builder" data-stage={activeStage}>
          <div className="academy-builder__current" aria-live="polite">
            <p className="type-tech">Builder journey / {activeStep.number}</p>
            <strong>{activeStep.label}</strong>
            <p>{activeStep.description}</p>
          </div>

          <ol className="academy-builder__steps" aria-label="Emerging Tech Academy learning model">
            {learningStages.map((stage) => {
              const isActive = stage.id === activeStage

              return (
                <li data-active={isActive} key={stage.id}>
                  <button
                    aria-pressed={isActive}
                    onClick={() => setActiveStage(stage.id)}
                    onFocus={() => setActiveStage(stage.id)}
                    onPointerEnter={(event) => {
                      if (event.pointerType === 'mouse') setActiveStage(stage.id)
                    }}
                    type="button"
                  >
                    <span className="type-tech">{stage.number}</span>
                    <strong>{stage.label}</strong>
                    <span className="academy-builder__step-description">
                      {stage.description}
                    </span>
                    <span aria-hidden="true" className="academy-builder__step-mark">→</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
