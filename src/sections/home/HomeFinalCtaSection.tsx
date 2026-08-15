import { Container } from '../../components/Container'
import { PrimaryButton } from '../../components/PrimaryButton'

export function HomeFinalCtaSection() {
  return (
    <section className="home-final-cta" aria-labelledby="home-final-cta-title">
      <Container className="home-final-cta__layout">
        <p className="type-tech">Digi02 / Start a conversation</p>
        <div>
          <h2 id="home-final-cta-title">Bring us the operational problem.</h2>
          <p>
            We’ll help you define the right system, integration or product response.
          </p>
        </div>
        <PrimaryButton href="/contact">
          Discuss your project <span aria-hidden="true">→</span>
        </PrimaryButton>
      </Container>
    </section>
  )
}
