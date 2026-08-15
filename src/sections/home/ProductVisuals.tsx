import skyGridAnalytics from '../../assets/skygrid/skygrid-mission-analytics.webp'
import skyGridPlanner from '../../assets/skygrid/skygrid-route-planner.webp'
import type { ProductId } from './product-data'

function SkyGridVisual() {
  return (
    <div className="product-visual product-visual--skygrid">
      <figure className="skygrid-proof__primary">
        <img
          alt="SkyGrid mission route planner showing a UAV route over Kaduna"
          decoding="async"
          loading="lazy"
          src={skyGridPlanner}
        />
      </figure>
      <figure className="skygrid-proof__secondary">
        <img
          alt="SkyGrid command center mission overview and flight analytics interface"
          decoding="async"
          loading="lazy"
          src={skyGridAnalytics}
        />
      </figure>
      <p className="product-visual__caption type-tech">SkyGrid / operational interfaces</p>
    </div>
  )
}

function DigiVoltVisual() {
  return (
    <div className="product-visual product-visual--digivolt" aria-hidden="true">
      <div className="digivolt-route">
        <span className="digivolt-route__stop is-start">Pickup</span>
        <span className="digivolt-route__line" />
        <span className="digivolt-route__stop is-end">Destination</span>
      </div>
      <div className="digivolt-booking">
        <p className="type-tech">Ride request</p>
        <strong>Electric ride</strong>
        <ol>
          <li className="is-current"><span>01</span> Book</li>
          <li><span>02</span> Match</li>
          <li><span>03</span> Ride</li>
          <li><span>04</span> Arrive</li>
        </ol>
      </div>
      <div className="digivolt-readiness">
        <p className="type-tech">Fleet readiness</p>
        <div><span>Vehicle</span><strong>Assigned</strong></div>
        <div><span>Route</span><strong>Prepared</strong></div>
        <div><span>Charge</span><strong>Ready</strong></div>
      </div>
      <p className="product-visual__caption type-tech">Illustrative / interface direction</p>
    </div>
  )
}

const operationsModules = ['Orders', 'Inventory', 'Transactions', 'Reporting'] as const

function ErpPosVisual() {
  return (
    <div className="product-visual product-visual--erp" aria-hidden="true">
      <div className="erp-sidebar">
        <p className="type-tech">Operations</p>
        {operationsModules.map((module, index) => (
          <span className={index === 1 ? 'is-current' : undefined} key={module}>{module}</span>
        ))}
      </div>
      <div className="erp-workspace">
        <div className="erp-workspace__header">
          <div><p className="type-tech">Inventory view</p><strong>Stock movement</strong></div>
          <span>Structured view</span>
        </div>
        <div className="erp-workspace__flow">
          <span>Sale recorded</span><i />
          <span>Stock updated</span><i />
          <span>Report available</span>
        </div>
        <div className="erp-workspace__rows">
          {['Current stock', 'Recent transactions', 'Reorder review'].map((row) => (
            <div key={row}><span>{row}</span><i /></div>
          ))}
        </div>
      </div>
      <p className="product-visual__caption type-tech">Illustrative / system direction</p>
    </div>
  )
}

const communityGroups = ['Builders', 'Founders', 'Learners', 'Technical minds'] as const

function DigiNorthVisual() {
  return (
    <div className="product-visual product-visual--diginorth" aria-hidden="true">
      <p className="diginorth-location type-tech">Kaduna / Northern Nigeria</p>
      <div className="diginorth-statement">
        <span>People building</span>
        <span>technology.</span>
      </div>
      <div className="diginorth-directory">
        <p className="type-tech">Community disciplines</p>
        <ul>
          {communityGroups.map((group) => <li key={group}>{group}</li>)}
        </ul>
      </div>
      <div className="diginorth-pathway">
        <p className="type-tech">Community pathway</p>
        <ol>
          <li><span>01</span> Meet</li>
          <li><span>02</span> Share</li>
          <li><span>03</span> Build</li>
        </ol>
      </div>
      <p className="product-visual__caption type-tech">Editorial / community direction</p>
    </div>
  )
}

const learningStages = [
  ['01', 'Learn', 'Workshop with guidance'],
  ['02', 'Build', 'Turn instruction into working practice'],
  ['03', 'Review', 'Test, explain and improve the result'],
  ['04', 'Ship', 'Finish a working project'],
] as const

function AcademyVisual() {
  return (
    <div className="product-visual product-visual--academy" aria-hidden="true">
      <div className="academy-heading">
        <p className="type-tech">Learning through practice</p>
        <strong>Learn technology by building with it.</strong>
      </div>
      <ol className="academy-path">
        {learningStages.map(([number, title, description]) => (
          <li key={number}>
            <span className="type-tech">{number}</span>
            <strong>{title}</strong>
            <p>{description}</p>
          </li>
        ))}
      </ol>
      <p className="product-visual__caption type-tech">Academy / practical learning model</p>
    </div>
  )
}

export function ProductVisual({ productId }: { productId: ProductId }) {
  switch (productId) {
    case 'skygrid':
      return <SkyGridVisual />
    case 'digivolt':
      return <DigiVoltVisual />
    case 'erp-pos':
      return <ErpPosVisual />
    case 'diginorth':
      return <DigiNorthVisual />
    case 'academy':
      return <AcademyVisual />
  }
}
