import { useEffect, useRef, useState } from 'react'
import { Container } from '../../components/Container'
import { OperationalCanvas } from './ChallengeVisuals'
import { transformationChapters, type TransformationChapterId } from './transformation-data'
import '../../styles/solutions-transformation.css'

export function SolutionsTransformationSection() {
  const storyRef = useRef<HTMLDivElement | null>(null)
  const frameRequestRef = useRef<number | null>(null)
  const [activeChapterId, setActiveChapterId] = useState<TransformationChapterId>('connect')

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 64.0625rem)')

    const updateActiveChapter = () => {
      frameRequestRef.current = null

      if (!desktopQuery.matches || !storyRef.current) {
        return
      }

      const bounds = storyRef.current.getBoundingClientRect()
      const scrollDistance = Math.max(bounds.height - window.innerHeight, 1)
      const progress = Math.min(Math.max(-bounds.top / scrollDistance, 0), 1)
      const chapterIndex = Math.min(
        transformationChapters.length - 1,
        Math.floor(progress * transformationChapters.length),
      )

      setActiveChapterId(transformationChapters[chapterIndex].id)
    }

    const requestUpdate = () => {
      if (frameRequestRef.current === null) {
        frameRequestRef.current = window.requestAnimationFrame(updateActiveChapter)
      }
    }

    updateActiveChapter()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    desktopQuery.addEventListener('change', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      desktopQuery.removeEventListener('change', requestUpdate)

      if (frameRequestRef.current !== null) {
        window.cancelAnimationFrame(frameRequestRef.current)
      }
    }
  }, [])

  return (
    <section className="solutions-transformation" aria-labelledby="solutions-transformation-title">
      <Container>
        <header className="solutions-transformation__intro">
          <p className="solutions-transformation__label type-tech">
            Digi02 / Operational challenges
          </p>
          <h2 id="solutions-transformation-title">
            Work breaks down when its parts stop working together.
          </h2>
          <p className="solutions-transformation__summary">
            Digi02 connects the records, approvals and transactions behind everyday operations.
          </p>
        </header>

        <div className="solutions-transformation__story" ref={storyRef}>
          <div className="solutions-transformation__sticky">
            <div className="solutions-transformation__chapters">
              {transformationChapters.map((chapter) => (
                <article
                  className="transformation-chapter"
                  data-active={chapter.id === activeChapterId}
                  data-chapter-id={chapter.id}
                  key={chapter.id}
                >
                  <p className="transformation-chapter__label type-tech">{chapter.label}</p>
                  <h3>{chapter.headline}</h3>
                  <p className="transformation-chapter__support">{chapter.support}</p>
                  <div className="transformation-chapter__mobile-visual">
                    <OperationalCanvas stageId={chapter.id} />
                  </div>
                </article>
              ))}
            </div>

            <div className="solutions-transformation__persistent-visual">
              <OperationalCanvas stageId={activeChapterId} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
