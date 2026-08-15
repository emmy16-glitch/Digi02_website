import { Container } from '../../components/Container'
import { PrimaryButton } from '../../components/PrimaryButton'
import '../../styles/home-closing.css'

export function HomeFinalCtaSection() {
  return (
    <section className="home-final-cta" aria-labelledby="home-final-cta-title">
      <Container className="home-final-cta__layout">
        <p className="home-final-cta__eyebrow">Start a conversation</p>
        <div>
          <h2 id="home-final-cta-title">What needs to work better?</h2>
          <p>
            Tell us about the system, workflow or product you are trying to improve. We can start
            from the operation and work out the right technical response from there.
          </p>
        </div>
        <PrimaryButton href="/contact">
          Discuss your project <span aria-hidden="true">→</span>
        </PrimaryButton>
      </Container>
    </section>
  )
}
