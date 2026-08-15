import { useRef, useState } from 'react'
import digiVoltShowcase from '../../assets/digivolt/digivolt-electric-mobility-showcase.png'
import erpPosShowcase from '../../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridRoutePlanner from '../../assets/skygrid/skygrid-route-planner.webp'

type ProductId = 'skygrid' | 'digivolt' | 'erp-pos'

type ProductEvidence = {
  alt: string
  context: string
  id: ProductId
  label: string
  src: string
}

const products: readonly ProductEvidence[] = [
  {
    id: 'skygrid',
    label: 'SkyGrid',
    context: 'UAV operations',
    alt: 'SkyGrid UAV mission planning interface',
    src: skyGridRoutePlanner,
  },
  {
    id: 'digivolt',
    label: 'DigiVolt',
    context: 'Electric mobility',
    alt: 'DigiVolt electric mobility product visualization',
    src: digiVoltShowcase,
  },
  {
    id: 'erp-pos',
    label: 'ERP + POS',
    context: 'Business operations',
    alt: 'Digi02 ERP and POS multi-device product visualization',
    src: erpPosShowcase,
  },
]

export function ProductEvidenceViewer() {
  const [activeProductId, setActiveProductId] = useState<ProductId>('skygrid')
  const [loadedProductIds, setLoadedProductIds] = useState<ReadonlySet<ProductId>>(
    () => new Set<ProductId>(['skygrid']),
  )
  const preloadRequestsRef = useRef(new Map<ProductId, Promise<boolean>>())
  const activeProduct = products.find((product) => product.id === activeProductId) ?? products[0]

  function preloadProduct(productId: ProductId) {
    if (loadedProductIds.has(productId)) {
      return Promise.resolve(true)
    }

    const existingRequest = preloadRequestsRef.current.get(productId)

    if (existingRequest) {
      return existingRequest
    }

    const product = products.find((item) => item.id === productId)

    if (!product) {
      return Promise.resolve(false)
    }

    const request = new Promise<boolean>((resolve) => {
      const image = new Image()

      image.onload = () => {
        setLoadedProductIds((currentIds) => new Set(currentIds).add(productId))
        resolve(true)
      }
      image.onerror = () => {
        preloadRequestsRef.current.delete(productId)
        resolve(false)
      }
      image.src = product.src
    })

    preloadRequestsRef.current.set(productId, request)
    return request
  }

  function selectProduct(productId: ProductId) {
    void preloadProduct(productId).then((isLoaded) => {
      if (isLoaded) {
        setActiveProductId(productId)
      }
    })
  }

  return (
    <figure className="product-evidence" aria-labelledby="product-evidence-context">
      <div className="product-evidence__viewport" id="product-evidence-viewer">
        {products.map((product) => {
          if (!loadedProductIds.has(product.id)) {
            return null
          }

          const isActive = product.id === activeProductId

          return (
            <div
              aria-hidden={!isActive}
              className="product-evidence__frame"
              data-active={isActive}
              data-product={product.id}
              key={product.id}
            >
              <img
                alt={isActive ? product.alt : ''}
                decoding="async"
                fetchPriority={product.id === 'skygrid' ? 'high' : 'auto'}
                loading="eager"
                src={product.src}
              />
            </div>
          )
        })}
      </div>

      <figcaption className="product-evidence__footer">
        <div className="product-evidence__selector" aria-label="Choose product evidence">
          {products.map((product, index) => {
            const isActive = product.id === activeProductId

            return (
              <button
                aria-controls="product-evidence-viewer"
                aria-pressed={isActive}
                className="product-evidence__option"
                key={product.id}
                onClick={() => selectProduct(product.id)}
                onFocus={() => void preloadProduct(product.id)}
                onPointerEnter={() => void preloadProduct(product.id)}
                type="button"
              >
                <span className="type-tech">0{index + 1}</span>
                <span>{product.label}</span>
              </button>
            )
          })}
        </div>

        <p aria-live="polite" id="product-evidence-context">
          {activeProduct.context}
        </p>
      </figcaption>
    </figure>
  )
}
