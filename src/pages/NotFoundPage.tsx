import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

export function NotFoundPage() {
  return (
    <section className="not-found">
      <Container className="not-found__inner">
        <p>404</p>
        <h1>This route is not part of the system.</h1>
        <p>Return to the Digi02 homepage or continue through the solutions index.</p>
        <div>
          <PrimaryButton href="/">Return home <span aria-hidden="true">→</span></PrimaryButton>
          <a href="/solutions">Explore solutions <span aria-hidden="true">↗</span></a>
        </div>
      </Container>
    </section>
  )
}
