import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

export function NotFoundPage() {
  return (
    <section className="not-found">
      <Container className="not-found__inner">
        <p>404</p>
        <h1>Page not found.</h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <div>
          <PrimaryButton href="/">Return home <span aria-hidden="true">→</span></PrimaryButton>
          <a href="/solutions">Explore solutions <span aria-hidden="true">↗</span></a>
        </div>
      </Container>
    </section>
  )
}
