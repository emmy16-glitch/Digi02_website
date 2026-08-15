import { Container } from '../../components/Container'
import { PrimaryButton } from '../../components/PrimaryButton'
import { SecondaryButton } from '../../components/SecondaryButton'
import { ProductEvidenceViewer } from './ProductEvidenceViewer'
import '../../styles/home-hero.css'

export function HeroSection() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <Container className="home-hero__inner">
        <div className="home-hero__main">
          <div className="home-hero__content">
            <p className="home-hero__label type-tech">Digi02 / Technology for real operations</p>
            <h1 id="home-hero-title">
              <span>Smarter solutions.</span>
              <span>Stronger organizations.</span>
            </h1>
            <p className="home-hero__summary">
              Digi02 designs and builds technology around the way organizations actually work —
              from connected business systems to mobility and field operations.
            </p>
            <div className="home-hero__actions">
              <PrimaryButton href="/solutions">
                Explore our solutions <span aria-hidden="true">→</span>
              </PrimaryButton>
              <SecondaryButton href="/work">
                View our work <span aria-hidden="true">→</span>
              </SecondaryButton>
            </div>
          </div>

          <ProductEvidenceViewer />
        </div>

        <p className="home-hero__transition">
          Built across field operations, mobility and connected business systems.
        </p>
      </Container>
    </section>
  )
}
