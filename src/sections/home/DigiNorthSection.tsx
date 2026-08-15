import { useState } from 'react'

import { Container } from '../../components/Container'
import '../../styles/diginorth-section.css'

const communityRoles = ['Builders', 'Learners', 'Founders', 'Collaborators'] as const

const communityPath = [
  { id: 'meet', number: '01', label: 'Meet' },
  { id: 'share', number: '02', label: 'Share' },
  { id: 'build', number: '03', label: 'Build' },
] as const

type CommunityStage = (typeof communityPath)[number]['id']

export function DigiNorthSection() {
  const [activeStage, setActiveStage] = useState<CommunityStage>('meet')
  const activeIndex = communityPath.findIndex((stage) => stage.id === activeStage)
  const activePath = communityPath[activeIndex]

  return (
    <section className="diginorth-chapter" id="diginorth" aria-labelledby="diginorth-title">
      <Container className="diginorth-chapter__inner">
        <header className="diginorth-chapter__intro">
          <div className="diginorth-chapter__identity">
            <p className="type-tech">04 / DigiNorth</p>
            <span>Technology community</span>
            <div className="diginorth-chapter__status">
              <span>Community initiative</span>
              <span>Level C / Editorial</span>
            </div>
          </div>

          <div className="diginorth-chapter__statement">
            <h2 id="diginorth-title">
              A community for people building technology in Northern Nigeria.
            </h2>
          </div>
        </header>

        <div className="diginorth-editorial" data-stage={activeStage}>
          <div className="diginorth-editorial__place">
            <p className="type-tech">Kaduna / Northern Nigeria</p>
            <strong aria-hidden="true">NORTH</strong>
          </div>

          <div className="diginorth-editorial__directory">
            <p className="type-tech">Community disciplines</p>
            <ul>
              {communityRoles.map((role, index) => (
                <li key={role}>
                  <span className="type-tech">0{index + 1}</span>
                  <strong>{role}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="diginorth-editorial__active" aria-live="polite">
            <span className="type-tech">Community pathway / {activePath.number}</span>
            <strong>{activePath.label}</strong>
          </div>
        </div>

        <div className="diginorth-path" aria-label="DigiNorth community pathway">
          {communityPath.map((stage) => {
            const isActive = stage.id === activeStage

            return (
              <button
                aria-pressed={isActive}
                data-active={isActive}
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                onFocus={() => setActiveStage(stage.id)}
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse') setActiveStage(stage.id)
                }}
                type="button"
              >
                <span className="type-tech">{stage.number}</span>
                <strong>{stage.label}</strong>
              </button>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
