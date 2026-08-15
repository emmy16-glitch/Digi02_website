import { Container } from '../../components/Container'
import { PrimaryButton } from '../../components/PrimaryButton'
import { ProductEvidenceViewer } from './ProductEvidenceViewer'
import '../../styles/home-hero.css'

export function HeroSection() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <Container className="home-hero__inner">
        <div className="home-hero__main">
          <div className="home-hero__content">
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
              <a className="home-hero__text-link" href="/work">
                View selected work <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <ProductEvidenceViewer />
        </div>
      </Container>
    </section>
  )
}
