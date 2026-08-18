import sterlingVisual from '../assets/editorial/work/sterling-african-mobile-payment.jpeg'
import kadunaVisual from '../assets/editorial/work/kaduna-african-workflow-team.jpeg'
import fieldDroneTeam from '../assets/user-provided/field-drone-team.png'
import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import '../styles/case-study-pages.css'

type Artefact = {
  label: string
  detail: string
}

export type CaseStudy = {
  slug: string
  category: string
  title: string
  summary: string
  image: string
  imageAlt: string
  solution: string
  solutionHref: string
  challenge: string
  approach: string
  impact: readonly string[]
  tags: readonly string[]
  process: readonly string[]
  artefacts: readonly Artefact[]
  evidenceNote: string
}

const quantitativeEvidenceNote = 'The approved project material confirms these qualitative outcomes. Client-approved quantitative results have not been supplied for publication.'

export const caseStudies: Record<string, CaseStudy> = {
  'thermal-plant-inspection-automation': {
    slug: 'thermal-plant-inspection-automation',
    category: 'Energy / Automation',
    title: 'Thermal Plant Inspection Automation',
    summary: 'An inspection workflow that brings mission planning, field capture and operational review into one coordinated system.',
    image: fieldDroneTeam,
    imageAlt: 'Black African UAV inspection team preparing equipment near power infrastructure',
    solution: 'SkyGrid',
    solutionHref: '/solutions/skygrid',
    challenge: 'Manual inspection processes created fragmented records, slow review cycles and limited visibility across the operation.',
    approach: 'Digi02 connected mission planning, autonomous capture, inspection workflows and reporting into one operational flow.',
    impact: ['Faster inspection review', 'Clearer operational records', 'Safer field coordination'],
    tags: ['AI / ML', 'Computer Vision', 'IoT', 'Cloud'],
    process: ['Plan', 'Prepare', 'Capture', 'Review', 'Report'],
    artefacts: [
      { label: 'Mission plan', detail: 'Inspection scope and readiness context.' },
      { label: 'Field capture', detail: 'Evidence collected through an autonomous workflow.' },
      { label: 'Review record', detail: 'Findings organised for operational review.' },
      { label: 'Report handover', detail: 'A clearer path from observation to action.' },
    ],
    evidenceNote: quantitativeEvidenceNote,
  },
  'sterling-payment-gateway': {
    slug: 'sterling-payment-gateway',
    category: 'Finance / Payments',
    title: 'Sterling Payment Gateway',
    summary: 'A secure, scalable payment infrastructure designed to process high-volume transactions with clear operational visibility.',
    image: sterlingVisual,
    imageAlt: 'Black African professional using a payment card beside a laptop',
    solution: 'Payment Systems',
    solutionHref: '/solutions/payment-systems',
    challenge: 'Payment activity needs to remain connected to the records and reporting that give each transaction business meaning.',
    approach: 'The work focused on connecting payment experiences with transaction states, operational records, and the context finance teams need for reconciliation.',
    impact: ['Clearer payment states', 'Connected transaction records', 'More useful reporting context'],
    tags: ['Payments', 'Settlement', 'Reconciliation', 'Operations'],
    process: ['Initiate', 'Authorize', 'Record', 'Reconcile', 'Report'],
    artefacts: [
      { label: 'Payment initiation', detail: 'The start of a connected transaction journey.' },
      { label: 'Authorisation state', detail: 'A clear record of the transaction decision.' },
      { label: 'Transaction record', detail: 'Operational context retained with the activity.' },
      { label: 'Reconciliation queue', detail: 'A structured path to review and settlement.' },
      { label: 'Operational report', detail: 'Reporting context for finance teams.' },
    ],
    evidenceNote: quantitativeEvidenceNote,
  },
  'kaduna-state-e-management-system': {
    slug: 'kaduna-state-e-management-system',
    category: 'Public Sector / Platforms',
    title: 'Kaduna State e-Management System',
    summary: 'A unified digital platform for workflows, approvals, records and citizen-facing services.',
    image: kadunaVisual,
    imageAlt: 'Black African public-service team collaborating around a workflow meeting table',
    solution: 'E-Management',
    solutionHref: '/solutions/e-management',
    challenge: 'Public-service environments depend on many handoffs. When work and decisions become disconnected, accountability becomes harder to see.',
    approach: 'The platform brings workflows, approvals, records and service delivery into a more coherent institutional system of record.',
    impact: ['More visible ownership', 'Connected approvals and records', 'Clearer service workflows'],
    tags: ['Workflows', 'Approvals', 'Records', 'Public services'],
    process: ['Request', 'Route', 'Approve', 'Record', 'Serve'],
    artefacts: [
      { label: 'Service request', detail: 'Work starts with a traceable request.' },
      { label: 'Workflow route', detail: 'The task moves through defined ownership.' },
      { label: 'Approval decision', detail: 'Decisions remain visible and accountable.' },
      { label: 'Institutional record', detail: 'Approvals and documents share one context.' },
      { label: 'Service update', detail: 'A clearer path back to the citizen or user.' },
    ],
    evidenceNote: quantitativeEvidenceNote,
  },
}

function ProcessDiagram({ item }: { item: CaseStudy }) {
  return (
    <section className="case-study-page__process" aria-labelledby="process-title">
      <Container>
        <header>
          <p className="eyebrow">Operational sequence</p>
          <h2 id="process-title">The system makes the hand-offs visible.</h2>
          <p>{item.summary}</p>
        </header>
        <ol>
          {item.process.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function ArtefactPanel({ item }: { item: CaseStudy }) {
  return (
    <section className="case-study-page__artefacts" aria-labelledby="artefacts-title">
      <Container>
        <header>
          <p className="eyebrow">Process artefacts</p>
          <h2 id="artefacts-title">A clearer operating record at every stage.</h2>
        </header>
        <div>
          {item.artefacts.map((artefact, index) => (
            <article key={artefact.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{artefact.label}</h3>
              <p>{artefact.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function CaseStudyPage({ slug }: { slug: string }) {
  const item = caseStudies[slug]

  if (!item) {
    return <section className="case-study-missing"><Container><p>Case study not found.</p><a href="/work">Back to selected work →</a></Container></section>
  }

  return (
    <main className="case-study-page">
      <section className="case-study-page__hero">
        <img src={item.image} alt={item.imageAlt} loading="eager" decoding="async" />
        <div className="case-study-page__shade" aria-hidden="true" />
        <Container className="case-study-page__hero-copy">
          <p className="eyebrow">{item.category}</p>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>
          <div>
            <PrimaryButton href={item.solutionHref}>Explore {item.solution} <span aria-hidden="true">→</span></PrimaryButton>
            <a href="/work">Back to Our Work <span aria-hidden="true">↑</span></a>
          </div>
        </Container>
      </section>

      <section className="case-study-page__story">
        <Container>
          <header><p className="eyebrow">Case study evidence</p><h2>Operational impact starts with context.</h2></header>
          <div className="case-study-page__grid">
            <article><span>01</span><h3>The challenge</h3><p>{item.challenge}</p></article>
            <article><span>02</span><h3>How Digi02 helped</h3><p>{item.approach}</p></article>
            <article><span>03</span><h3>Verified outcomes</h3>{item.impact.map((impact) => <strong key={impact}>{impact}</strong>)}</article>
          </div>
          <div className="case-study-page__tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <p className="case-study-page__evidence-note">{item.evidenceNote}</p>
        </Container>
      </section>

      <ProcessDiagram item={item} />
      <ArtefactPanel item={item} />

      <section className="case-study-page__next">
        <Container>
          <p className="eyebrow">Continue exploring</p>
          <h2>See the solution behind the work.</h2>
          <PrimaryButton href={item.solutionHref}>View {item.solution} <span aria-hidden="true">→</span></PrimaryButton>
          <a href="/contact">Discuss a related project →</a>
        </Container>
      </section>
    </main>
  )
}
