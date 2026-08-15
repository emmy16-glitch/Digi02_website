import { useEffect, useRef, useState } from 'react'
import erpPosShowcase from '../../assets/erp-pos/erp-pos-multidevice-showcase.png'
import { Container } from '../../components/Container'
import '../../styles/erp-pos-section.css'

const demoSequence = [
  { step: 2, delay: 150 },
  { step: 3, delay: 300 },
  { step: 4, delay: 450 },
  { step: 5, delay: 600 },
] as const

const businessFlow = ['Sell', 'Update stock', 'Record transaction', 'Report'] as const
type DemoStep = 0 | 1 | 2 | 3 | 4 | 5

export function ErpPosSection() {
  const [demoStep, setDemoStep] = useState<DemoStep>(0)
  const timersRef = useRef<number[]>([])
  const isProcessing = demoStep === 1
  const isComplete = demoStep === 5

  function clearTimers() {
    timersRef.current.forEach((timerId) => window.clearTimeout(timerId))
    timersRef.current = []
  }

  useEffect(() => () => {
    timersRef.current.forEach((timerId) => window.clearTimeout(timerId))
  }, [])

  function recordSampleSale() {
    if (demoStep !== 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDemoStep(5)
      return
    }

    setDemoStep(1)
    timersRef.current = demoSequence.map(({ step, delay }) =>
      window.setTimeout(() => setDemoStep(step), delay),
    )
  }

  function resetDemo() {
    clearTimers()
    setDemoStep(0)
  }

  const announcement = isProcessing
    ? 'Recording sample sale.'
    : isComplete
      ? 'Sample sale recorded. Inventory is now 23. Transaction logged. Report available.'
      : 'Demonstration ready.'

  return (
    <section className="erp-pos-chapter" id="erp-pos" aria-labelledby="erp-pos-title">
      <Container>
        <header className="erp-pos-chapter__intro">
          <div className="erp-pos-chapter__identity">
            <p className="type-tech">03 / Custom ERP + POS</p>
            <p className="erp-pos-chapter__category type-tech">Business operations</p>
          </div>
          <div className="erp-pos-chapter__statement">
            <h2 id="erp-pos-title">One sale. One connected system.</h2>
            <p className="type-lead">
              Digi02 connects sales, inventory, transactions and reporting so everyday
              operations stay in sync.
            </p>
          </div>
        </header>

        <figure className="erp-pos-product">
          <img
            src={erpPosShowcase}
            alt="Custom ERP and POS product visualization across desktop, tablet and mobile interfaces"
          />
          <figcaption className="type-tech">Product visualization / Custom ERP + POS</figcaption>
        </figure>

        <div className="erp-pos-demo" data-step={demoStep}>
          <header className="erp-pos-demo__header">
            <div>
              <p className="type-tech">Illustrative demonstration</p>
              <h3>Record one sample sale.</h3>
            </div>
            <p className="erp-pos-demo__announcement" role="status" aria-live="polite">
              {announcement}
            </p>
          </header>

          <div className="erp-pos-demo__body">
            <section className="erp-pos-demo__product" aria-labelledby="erp-pos-sample-product">
              <p className="type-tech">Sample product</p>
              <h4 id="erp-pos-sample-product">Wireless headset</h4>
              <dl>
                <div>
                  <dt>Current stock</dt>
                  <dd aria-label={demoStep >= 3 ? 'Stock changed from 24 to 23' : 'Current stock 24'}>
                    {demoStep >= 3 ? (
                      <><span>24</span><strong>23</strong></>
                    ) : <strong>24</strong>}
                  </dd>
                </div>
                <div>
                  <dt>Sample event</dt>
                  <dd>1 item sold</dd>
                </div>
              </dl>

              <div className="erp-pos-demo__actions">
                <button
                  className="erp-pos-demo__record"
                  disabled={demoStep !== 0}
                  onClick={recordSampleSale}
                  type="button"
                >
                  {isProcessing ? 'Recording…' : demoStep >= 2 ? 'Sale recorded' : 'Record sample sale'}
                </button>
                <button
                  className="erp-pos-demo__reset"
                  disabled={demoStep === 0}
                  onClick={resetDemo}
                  type="button"
                >
                  Reset demo
                </button>
              </div>
            </section>

            <div className="erp-pos-demo__responses" aria-label="Connected system response">
              <div className="erp-pos-response" data-complete={demoStep >= 2}>
                <p className="type-tech">Sale</p>
                <strong>{demoStep >= 2 ? 'Recorded' : isProcessing ? 'Processing' : 'Ready'}</strong>
                <span>{demoStep >= 2 ? 'Sale recorded' : 'Waiting for sample sale'}</span>
              </div>
              <div className="erp-pos-response" data-complete={demoStep >= 3}>
                <p className="type-tech">Inventory</p>
                <strong>{demoStep >= 3 ? '24 → 23' : 'Stock 24'}</strong>
                <span>{demoStep >= 3 ? 'Inventory updated' : 'No change yet'}</span>
              </div>
              <div className="erp-pos-response" data-complete={demoStep >= 4}>
                <p className="type-tech">Transaction</p>
                <strong>{demoStep >= 4 ? 'New entry added' : 'Waiting'}</strong>
                <span>{demoStep >= 4 ? 'Transaction logged' : 'No entry yet'}</span>
              </div>
              <div className="erp-pos-response" data-complete={demoStep >= 5}>
                <p className="type-tech">Reporting</p>
                <strong>{demoStep >= 5 ? 'Latest activity updated' : 'Waiting'}</strong>
                <span>{demoStep >= 5 ? 'Report available' : 'No update yet'}</span>
              </div>
            </div>
          </div>
        </div>

        <ol className="erp-pos-flow" aria-label="Connected business event flow">
          {businessFlow.map((item, index) => (
            <li key={item}>
              <span className="type-tech">0{index + 1}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
