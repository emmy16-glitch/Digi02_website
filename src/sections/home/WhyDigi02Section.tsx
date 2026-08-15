import { Container } from '../../components/Container'
import '../../styles/home-closing.css'

const principles = [
  {
    title: 'Start with the operation',
    copy: 'We begin with the work people are trying to do, the handoffs slowing them down and the information they need to act.',
  },
  {
    title: 'Engineer the whole connection',
    copy: 'Software, transactions, devices and existing systems are considered together instead of treated as isolated features.',
  },
  {
    title: 'Build for everyday use',
    copy: 'The result has to be understandable, maintainable and useful in the environment where the work actually happens.',
  },
] as const

export function WhyDigi02Section() {
  return (
    <section className="why-digi02" aria-labelledby="why-digi02-title">
      <Container className="why-digi02__layout">
        <div className="why-digi02__statement">
          <p className="why-digi02__eyebrow">How we work</p>
          <h2 id="why-digi02-title">Technology only matters when it improves the way work gets done.</h2>
        </div>

        <ul className="why-digi02__principles">
          {principles.map((principle) => (
            <li key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
