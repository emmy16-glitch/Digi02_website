import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const principles = [
  ['Start with the operation', 'Understand the workflow, people and constraints before deciding what the interface should look like.'],
  ['Engineer for control', 'Make important system state, ownership and consequences visible instead of hiding them behind decorative complexity.'],
  ['Design for use', 'The product should remain understandable under real working conditions, not only in a presentation.'],
  ['Prove before claiming', 'Use real product behavior, verified information and clear limitations instead of inflated marketing language.'],
] as const

export function CompanyPage() {
  return (
    <div className="interior-page interior-page--company">
      <section className="company-manifesto">
        <Container className="company-manifesto__grid">
          <p>Digi02</p>
          <div>
            <h1>We engineer technology for organizations with real operational complexity.</h1>
            <p>
              Digi02 works across enterprise systems, payroll automation, payments, POS, custom
              software and autonomous systems. The common thread is simple: technology should make
              the operation clearer, more controlled and easier to run.
            </p>
          </div>
        </Container>
      </section>

      <section className="company-principles" aria-labelledby="company-principles-title">
        <Container>
          <header className="section-heading section-heading--split">
            <p>How we work</p>
            <h2 id="company-principles-title">Precision is a working method, not a visual effect.</h2>
          </header>

          <div className="company-principles__list">
            {principles.map(([title, body], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="company-direction">
        <Container className="company-direction__grid">
          <div>
            <p>Mission</p>
            <h2>Build secure, efficient and scalable systems that solve real organizational problems.</h2>
          </div>
          <div>
            <p>Direction</p>
            <h2>Grow from Nigeria with technology that can operate across institutions, industries and markets.</h2>
          </div>
        </Container>
      </section>

      <section className="page-cta">
        <Container className="page-cta__inner">
          <div>
            <p>Work with Digi02</p>
            <h2>Bring us the operation that needs to work better.</h2>
          </div>
          <PrimaryButton href="/contact">Start a conversation <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
