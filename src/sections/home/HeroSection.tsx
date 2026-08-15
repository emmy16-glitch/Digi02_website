import { Container } from '../../components/Container'
import { PrimaryButton } from '../../components/PrimaryButton'
import { HeroTechnologyComposition } from './HeroTechnologyComposition'
import '../../styles/home-hero.css'

export function HeroSection() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <Container className="home-hero__inner">
        <div className="home-hero__content">
          <h1 id="home-hero-title">
            <span>Smarter solutions.</span>
            <span>Stronger organizations.</span>
          </h1>

          <p className="home-hero__summary">
            Digi02 designs and builds technology around the way organizations actually work —
            connecting field operations, mobility and business systems into practical tools.
          </p>

          <div className="home-hero__actions">
            <PrimaryButton href="/solutions">
              Explore our solutions <span aria-hidden="true">→</span>
            </PrimaryButton>

            <a className="home-hero__work-link" href="/work">
              View selected work <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <HeroTechnologyComposition />
      </Container>
    </section>
  )
}
