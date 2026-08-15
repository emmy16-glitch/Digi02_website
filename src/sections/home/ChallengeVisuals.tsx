import type { TransformationChapterId } from './transformation-data'

type OperationalCanvasProps = {
  stageId: TransformationChapterId
}

type OperationalRecord = {
  area: string
  record: string
  states: Record<TransformationChapterId, string>
}

const operationalRecords: readonly OperationalRecord[] = [
  {
    area: 'Sales',
    record: 'Order #1048',
    states: { connect: 'Open record', automate: 'In workflow', transact: 'Processed' },
  },
  {
    area: 'Inventory',
    record: 'Wireless headset',
    states: { connect: 'Separate record', automate: 'Update queued', transact: 'Inventory updated' },
  },
  {
    area: 'Approvals',
    record: 'Purchase request',
    states: { connect: 'Approval pending', automate: 'Approved', transact: 'Approved' },
  },
  {
    area: 'Finance',
    record: 'Payment record',
    states: { connect: 'Separate record', automate: 'Ready', transact: 'Reconciled' },
  },
  {
    area: 'People',
    record: 'Leave request',
    states: { connect: 'Waiting review', automate: 'Recorded', transact: 'Recorded' },
  },
  {
    area: 'Reporting',
    record: 'Daily activity',
    states: { connect: 'Awaiting update', automate: 'Awaiting record', transact: 'Reported' },
  },
]

const workflowSteps = [
  { label: 'Request received', state: 'Recorded' },
  { label: 'Manual handoff', state: 'Removed', removed: true },
  { label: 'Approval', state: 'Approved' },
  { label: 'System update', state: 'Updated' },
  { label: 'Record', state: 'Complete' },
] as const

const transactionSteps = ['Received', 'Validated', 'Processed', 'Reconciled', 'Reported'] as const

function ConnectActivity({ isActive }: { isActive: boolean }) {
  return (
    <div aria-hidden={!isActive} className="operations-board__activity-view is-connect">
      <p className="operations-board__activity-title">Shared working context</p>
      <dl className="context-summary">
        <div>
          <dt>Primary record</dt>
          <dd>Order #1048</dd>
        </div>
        <div>
          <dt>Related information</dt>
          <dd>Inventory, approval and finance</dd>
        </div>
        <div>
          <dt>Current state</dt>
          <dd>Records connecting</dd>
        </div>
      </dl>
    </div>
  )
}

function AutomateActivity({ isActive }: { isActive: boolean }) {
  return (
    <div aria-hidden={!isActive} className="operations-board__activity-view is-automate">
      <p className="operations-board__activity-title">Purchase request history</p>
      <ol className="workflow-history">
        {workflowSteps.map((step) => (
          <li className={'removed' in step ? 'is-removed' : undefined} key={step.label}>
            <span>{step.label}</span>
            <strong>{step.state}</strong>
          </li>
        ))}
      </ol>
    </div>
  )
}

function TransactActivity({ isActive }: { isActive: boolean }) {
  return (
    <div aria-hidden={!isActive} className="operations-board__activity-view is-transact">
      <p className="operations-board__activity-title">Order #1048 · Payment received</p>
      <ol className="transaction-history">
        {transactionSteps.map((step) => (
          <li key={step}>
            <span aria-hidden="true" />
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function OperationalCanvas({ stageId }: OperationalCanvasProps) {
  return (
    <figure className="operations-board" data-stage={stageId}>
      <figcaption className="operations-board__header">
        <span>Operations desk</span>
        <span>Illustrative</span>
      </figcaption>

      <div className="operations-board__stage" aria-hidden="true">
        <span className="is-connect" />
        <span className="is-automate" />
        <span className="is-transact" />
      </div>

      <div className="operations-board__content">
        <div className="operations-board__records">
          <p className="operations-board__eyebrow">Working records</p>
          <div className="operations-board__record-list">
            {operationalRecords.map((item) => (
              <div className={`operations-board__record is-${item.area.toLowerCase()}`} key={item.area}>
                <span>{item.area}</span>
                <strong>{item.record}</strong>
                <em>{item.states[stageId]}</em>
              </div>
            ))}
          </div>
        </div>

        <div className="operations-board__activity">
          <p className="operations-board__eyebrow">Activity</p>
          <div className="operations-board__activity-stack">
            <ConnectActivity isActive={stageId === 'connect'} />
            <AutomateActivity isActive={stageId === 'automate'} />
            <TransactActivity isActive={stageId === 'transact'} />
          </div>
        </div>
      </div>

      <p className="visually-hidden">
        Illustrative operations view for the {stageId} stage. Records from sales, inventory,
        approvals, finance, people and reporting remain visible as their states change.
      </p>
    </figure>
  )
}
