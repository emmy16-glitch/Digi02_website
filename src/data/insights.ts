import autonomousInsight from '../assets/editorial/insights/insights-african-electronics-engineering.jpg'
import communityInsight from '../assets/editorial/insights/insights-african-tech-community.jpg'
import engineeringInsight from '../assets/editorial/insights/insights-african-software-engineer.jpg'
import enterpriseInsight from '../assets/editorial/insights/insights-african-laptop-collaboration.jpg'
import insightsFeature from '../assets/editorial/insights/insights-african-developer-pair.jpg'
import mobilityInsight from '../assets/editorial/insights/insights-african-operations-analyst.jpg'

export type InsightCategory = 'Autonomous' | 'Enterprise' | 'Mobility' | 'Engineering' | 'Community'
export type InsightFormat = 'Field note' | 'Perspective'
export type Insight = {
  slug: string
  category: InsightCategory
  format: InsightFormat
  eyebrow: string
  readingTime: string
  title: string
  summary: string
  takeaway: string
  image: string
  imageAlt: string
  relatedCapability: { label: string; href: string }
  author: { name: string; role: string }
  featured?: boolean
  sections: readonly { heading: string; paragraphs: readonly string[] }[]
  relatedSlugs: readonly string[]
}

const editorialByline = { name: 'Digi02 Insights Desk', role: 'Operational technology editorial team' } as const

export const insights: readonly Insight[] = [
  {
    slug: 'from-field-signal-to-decision', category: 'Autonomous', format: 'Field note', eyebrow: 'Systems in operation', readingTime: '6 min read', featured: true,
    title: 'From field signal to decision: what a reliable mission system makes visible.',
    summary: 'Mission planning, readiness, field context and review are more useful when they remain part of the same mission record.',
    takeaway: 'A reliable mission system gives the team a shared view of the objective, the constraints, the evidence collected, and the decision that follows.',
    image: insightsFeature, imageAlt: 'Black African software developers reviewing code together', relatedCapability: { label: 'Explore SkyGrid', href: '/solutions/skygrid' }, author: editorialByline,
    sections: [
      { heading: 'A mission is a chain of decisions', paragraphs: ['A field mission begins when the objective, constraint and expected decision are clear enough to coordinate—not only when equipment is activated.', 'When those details are scattered across messages, files and memories, review becomes slower and evidence loses the context that makes it useful.'] },
      { heading: 'Keep the record close to the work', paragraphs: ['Planning, readiness, capture conditions and review notes belong to the same operating record. Each hand-off should preserve the information the next person needs.', 'That makes it easier to see what happened, what still needs review and who owns the next step.'] },
      { heading: 'Design for the decision after capture', paragraphs: ['Collecting more data is not the same as helping a team decide. The system should make the objective, exceptions, evidence and follow-up visible to the responsible operator.', 'That is the shift from a field activity to a dependable mission system.'] },
    ], relatedSlugs: ['the-mission-is-not-finished-when-the-aircraft-lands', 'when-should-custom-software-replace-a-workaround'],
  },
  {
    slug: 'what-should-stay-connected-after-a-transaction', category: 'Enterprise', format: 'Field note', eyebrow: 'Enterprise systems', readingTime: '4 min read',
    title: 'What should stay connected after a transaction?',
    summary: 'Sales, stock, approvals and reporting are easier to control when the business event and the record behind it remain part of the same operating system.',
    takeaway: 'A transaction is only useful when its surrounding context remains visible to the people responsible for the next decision.',
    image: enterpriseInsight, imageAlt: 'Black African technology professionals reviewing a laptop together', relatedCapability: { label: 'Explore enterprise systems', href: '/solutions/enterprise-systems' }, author: editorialByline,
    sections: [
      { heading: 'The event is not the whole story', paragraphs: ['A payment, sale or request is one event in a wider workflow. It can affect inventory, responsibility, approvals, customer service and financial reporting at the same time.', 'When those connections are lost, the organisation spends effort rebuilding context before it can review or act.'] },
      { heading: 'Design the record around responsibility', paragraphs: ['A useful operating record shows what happened, who owns the next action and what information should travel with the event.', 'Enterprise systems are more than a collection of screens: they are the shared memory of an operation.'] },
      { heading: 'Make review possible without a workaround', paragraphs: ['The right system does not remove every exception. It makes exceptions visible, traceable and easier to resolve.', 'That gives teams a dependable path from transaction to decision without a separate spreadsheet explaining the work.'] },
    ], relatedSlugs: ['designing-mobility-software-around-the-operation', 'when-should-custom-software-replace-a-workaround'],
  },
  {
    slug: 'designing-mobility-software-around-the-operation', category: 'Mobility', format: 'Perspective', eyebrow: 'Mobility systems', readingTime: '5 min read',
    title: 'Designing mobility software around the operation, not just the trip.',
    summary: 'A useful mobility platform has to connect the rider journey with assignment, operational visibility and the systems that keep the service understandable.',
    takeaway: 'The ride is one moment. The operating system must also make dispatch, exceptions, handoffs and review clear.',
    image: mobilityInsight, imageAlt: 'Black African technology professional concentrating at a laptop in an operations office', relatedCapability: { label: 'Explore DigiVolt', href: '/solutions/digivolt' }, author: editorialByline,
    sections: [
      { heading: 'The rider journey sits inside a larger system', paragraphs: ['A trip can look straightforward from the outside, but the operation has to coordinate availability, assignment, status, support and exceptions around it.', 'Designing only for the request screen leaves the people running the service with less context when something changes.'] },
      { heading: 'Make status useful to more than one person', paragraphs: ['Riders, operators and supervisors need different views of the same operating reality. The aim is not to expose every detail everywhere, but to preserve enough shared context for work to move.', 'A strong platform makes the queue, status and exception clear to the person responsible for action.'] },
      { heading: 'Treat exceptions as part of the design', paragraphs: ['Delays, reassignments and incomplete information are normal operating conditions, not edge cases.', 'A system designed around the operation gives teams a controlled way to see, own and resolve those moments.'] },
    ], relatedSlugs: ['what-should-stay-connected-after-a-transaction', 'why-local-context-still-matters'],
  },
  {
    slug: 'when-should-custom-software-replace-a-workaround', category: 'Engineering', format: 'Field note', eyebrow: 'Engineering practice', readingTime: '3 min read',
    title: 'When should custom software replace a workaround?',
    summary: 'The important question is not whether software can be built. It is whether the workflow, ownership and information around the work are clear enough to engineer well.',
    takeaway: 'Before writing code, define the decision, the owner, the record and the point at which a team needs to act.',
    image: engineeringInsight, imageAlt: 'Black African software engineer working at a multi-screen coding desk', relatedCapability: { label: 'Explore custom software', href: '/solutions/custom-software' }, author: editorialByline,
    sections: [
      { heading: 'A workaround can be useful evidence', paragraphs: ['A spreadsheet, email chain or manual checklist often exists because a team is solving a real problem with the tools it has.', 'The first task is to understand what that workaround protects, coordinates or makes visible.'] },
      { heading: 'Look for repeated ownership and risk', paragraphs: ['Custom software becomes more useful when a workflow is repeated, responsibility is unclear, information is fragmented or the cost of an error is meaningful.', 'Those conditions indicate an operating-system problem, not simply a missing interface.'] },
      { heading: 'Engineer the hand-offs before the features', paragraphs: ['Teams should be able to name the decision, the owner, the record and the next action at every important step.', 'That gives engineering a stable operating model to build around.'] },
    ], relatedSlugs: ['what-should-stay-connected-after-a-transaction', 'from-field-signal-to-decision'],
  },
  {
    slug: 'why-local-context-still-matters', category: 'Community', format: 'Perspective', eyebrow: 'Technology community', readingTime: '4 min read',
    title: 'Why local context still matters when the engineering standard is global.',
    summary: 'Technology has to fit the people, constraints and operating environment around it. Local understanding and disciplined engineering are not competing ideas.',
    takeaway: 'Strong engineering becomes more useful when it starts with the realities of the people and institutions it is meant to serve.',
    image: communityInsight, imageAlt: 'Two Black African women technology professionals holding laptops', relatedCapability: { label: 'About Digi02', href: '/company' }, author: editorialByline,
    sections: [
      { heading: 'Context is part of the requirement', paragraphs: ['The operating environment affects how people access information, resolve exceptions, maintain systems and make decisions.', 'Treating those realities as secondary creates technology that is harder to adopt and sustain.'] },
      { heading: 'Use standards without importing assumptions', paragraphs: ['Reliable engineering principles travel well: clear interfaces, security, testing, observability and disciplined delivery matter everywhere.', 'The assumptions around workflows, support and institutional ownership still need to be tested where the system will live.'] },
      { heading: 'Build close to the work', paragraphs: ['Working closely with the operation makes it easier to notice what is difficult, where knowledge sits and which constraints shape the outcome.', 'That proximity is how an ambitious technical standard becomes a useful system in practice.'] },
    ], relatedSlugs: ['when-should-custom-software-replace-a-workaround', 'designing-mobility-software-around-the-operation'],
  },
  {
    slug: 'the-mission-is-not-finished-when-the-aircraft-lands', category: 'Autonomous', format: 'Field note', eyebrow: 'Mission data', readingTime: '6 min read',
    title: 'The mission is not finished when the aircraft lands.',
    summary: 'Review, evidence and operational records are part of the mission system too. The value of collected data depends on how clearly teams can understand and act on it.',
    takeaway: 'The most valuable output of a mission is a record that gives the next operator enough context to decide with confidence.',
    image: autonomousInsight, imageAlt: 'Black African electronics engineers working together at a hardware bench', relatedCapability: { label: 'Explore SkyGrid', href: '/solutions/skygrid' }, author: editorialByline,
    sections: [
      { heading: 'Capture is only one stage of the mission', paragraphs: ['Field capture can create a valuable signal, but the operation still needs to review it, connect it to context and decide what should happen next.', 'If evidence is separated from the mission objective and conditions, the next team has to reconstruct the story before it can act.'] },
      { heading: 'Create a reviewable evidence trail', paragraphs: ['A useful mission record brings the collected material together with purpose, readiness, timing and follow-up.', 'This gives reviewers a clearer basis for identifying findings and assigning action.'] },
      { heading: 'Design a hand-over, not an upload', paragraphs: ['A hand-over is successful when the receiving team can understand what it has received, what it means and what it needs to do next.', 'That is the difference between a completed flight and a mission system that contributes to dependable operations.'] },
    ], relatedSlugs: ['from-field-signal-to-decision', 'when-should-custom-software-replace-a-workaround'],
  },
]

export const insightCategories: readonly ('All' | InsightCategory)[] = ['All', 'Autonomous', 'Enterprise', 'Mobility', 'Engineering', 'Community']
export const insightFormats: readonly ('All' | InsightFormat)[] = ['All', 'Field note', 'Perspective']
export const getInsight = (slug: string) => insights.find((insight) => insight.slug === slug)
export const getFeaturedInsight = () => insights.find((insight) => insight.featured)
export const getRelatedInsights = (insight: Insight) => insight.relatedSlugs.map(getInsight).filter((item): item is Insight => Boolean(item))
