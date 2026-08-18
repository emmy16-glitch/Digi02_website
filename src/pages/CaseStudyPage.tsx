import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import fieldDroneTeam from '../assets/user-provided/field-drone-team.png'
import operationsCentre from '../assets/user-provided/operations-centre.png'
import engineeringTeam from '../assets/user-provided/engineering-team.png'

export type CaseStudy = {
  slug: string
  category: string
  title: string
  summary: string
  image: string
  solution: string
  solutionHref: string
  challenge: string
  approach: string
  impact: readonly string[]
  tags: readonly string[]
}

export const caseStudies: Record<string, CaseStudy> = {
  'thermal-plant-inspection-automation': {
    slug: 'thermal-plant-inspection-automation',
    category: 'Energy / Automation',
    title: 'Thermal Plant Inspection Automation',
    summary: 'An inspection workflow that brings mission planning, field capture and operational review into one coordinated system.',
    image: fieldDroneTeam,
    solution: 'SkyGrid',
    solutionHref: '/solutions/skygrid',
    challenge: 'Manual inspection processes created fragmented records, slow review cycles and limited visibility across the operation.',
    approach: 'Digi02 connected mission planning, autonomous capture, inspection workflows and reporting into one operational flow.',
    impact: ['Faster inspection review', 'Clearer operational records', 'Safer field coordination'],
    tags: ['AI / ML', 'Computer Vision', 'IoT', 'Cloud'],
  },
  'sterling-payment-gateway': {
    slug: 'sterling-payment-gateway',
    category: 'Finance / Payments',
    title: 'Sterling Payment Gateway',
    summary: 'A secure, scalable payment infrastructure designed to process high-volume transactions with clear operational visibility.',
    image: operationsCentre,
    solution: 'Payment Systems',
    solutionHref: '/solutions/payment-systems',
    challenge: 'Payment activity needs to remain connected to the records and reporting that give each transaction business meaning.',
    approach: 'The work focused on connecting payment experiences with transaction states, operational records, and the context finance teams need for reconciliation.',
    impact: ['Clearer payment states', 'Connected transaction records', 'More useful reporting context'],
    tags: ['Payments', 'Settlement', 'Reconciliation', 'Operations'],
  },
  'kaduna-state-e-management-system': {
    slug: 'kaduna-state-e-management-system',
    category: 'Public Sector / Platforms',
    title: 'Kaduna State e-Management System',
    summary: 'A unified digital platform for workflows, approvals, records and citizen-facing services.',
    image: engineeringTeam,
    solution: 'E-Management',
    solutionHref: '/solutions/e-management',
    challenge: 'Public-service environments depend on many handoffs. When work and decisions become disconnected, accountability becomes harder to see.',
    approach: 'The platform brings workflows, approvals, records and service delivery into a more coherent institutional system of record.',
    impact: ['More visible ownership', 'Connected approvals and records', 'Clearer service workflows'],
    tags: ['Workflows', 'Approvals', 'Records', 'Public services'],
  },
}

export function CaseStudyPage({ slug }: { slug: string }) {
  const item = caseStudies[slug]
  if (!item) return <section className="case-study-missing"><Container><p>Case study not found.</p><a href="/work">Back to selected work →</a></Container></section>

  return (
    <div className="case-study-page">
      <section className="case-study-page__hero">
        <img src={item.image} alt="" />
        <div className="case-study-page__shade" aria-hidden="true" />
        <Container className="case-study-page__hero-copy">
          <p className="eyebrow">{item.category}</p>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>
          <PrimaryButton href={item.solutionHref}>Explore {item.solution} <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>

      <section className="case-study-page__story">
        <Container>
          <header><p className="eyebrow">Featured case study</p><h2>Operational impact starts with context.</h2></header>
          <div className="case-study-page__grid">
            <article><span>01</span><h3>The challenge</h3><p>{item.challenge}</p></article>
            <article><span>02</span><h3>Our solution</h3><p>{item.approach}</p></article>
            <article><span>03</span><h3>The impact</h3>{item.impact.map((impact) => <strong key={impact}>{impact}</strong>)}</article>
          </div>
          <div className="case-study-page__tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </Container>
      </section>

      <section className="case-study-page__next"><Container><p className="eyebrow">Continue exploring</p><h2>See the solution behind the work.</h2><PrimaryButton href={item.solutionHref}>View {item.solution} <span aria-hidden="true">→</span></PrimaryButton><a href="/contact">Discuss a related project →</a></Container></section>
    </div>
  )
}
