import { useRef, useState } from 'react'
import type { KeyboardEvent, PointerEvent } from 'react'

import digiVoltShowcase from '../../assets/digivolt/digivolt-electric-mobility-showcase.png'
import erpPosShowcase from '../../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridOperationsCenter from '../../assets/skygrid/skygrid-operations-center.webp'

type ProductId = 'skygrid' | 'digivolt' | 'erp-pos'
type Direction = 'next' | 'previous'
type HoverSide = 'left' | 'right' | null

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
    alt: 'SkyGrid UAV operations interface',
    src: skyGridOperationsCenter,
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

const SWIPE_THRESHOLD = 52

export function ProductEvidenceViewer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<Direction>('next')
  const [hoverSide, setHoverSide] = useState<HoverSide>(null)

  const pointerStartRef = useRef<{ x: number; y: number } | null>(null)

  const totalProducts = products.length

  const activeProduct = products[activeIndex]
  const previousIndex = (activeIndex - 1 + totalProducts) % totalProducts
  const nextIndex = (activeIndex + 1) % totalProducts

  const previousProduct = products[previousIndex]
  const nextProduct = products[nextIndex]

  function goToProduct(index: number, nextDirection: Direction) {
    setDirection(nextDirection)
    setHoverSide(null)

    setActiveIndex((index + totalProducts) % totalProducts)
  }

  function goPrevious() {
    goToProduct(previousIndex, 'previous')
  }

  function goNext() {
    goToProduct(nextIndex, 'next')
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse') {
      return
    }

    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
    }
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse') {
      return
    }

    const start = pointerStartRef.current
    pointerStartRef.current = null

    if (!start) {
      return
    }

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y

    const horizontalGesture =
      Math.abs(deltaX) >= SWIPE_THRESHOLD &&
      Math.abs(deltaX) > Math.abs(deltaY) * 1.2

    if (!horizontalGesture) {
      return
    }

    if (deltaX < 0) {
      goNext()
      return
    }

    goPrevious()
  }

  return (
    <figure
      aria-label="Digi02 product evidence gallery"
      className="product-evidence"
    >
      <div
        aria-label="Product gallery. Use left and right arrow keys to browse."
        className="product-evidence__viewport"
        data-direction={direction}
        data-hover={hoverSide ?? 'none'}
        id="product-evidence-viewer"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerLeave={() => setHoverSide(null)}
        onPointerUp={handlePointerUp}
        role="group"
        tabIndex={0}
      >
        <div
          aria-hidden="true"
          className="product-evidence__peek product-evidence__peek--previous"
          data-product={previousProduct.id}
        >
          <img
            alt=""
            decoding="async"
            loading="eager"
            src={previousProduct.src}
          />
        </div>

        <div
          className="product-evidence__current-frame"
          data-direction={direction}
          data-product={activeProduct.id}
          key={activeProduct.id}
        >
          <img
            alt={activeProduct.alt}
            decoding="async"
            fetchPriority={activeProduct.id === 'skygrid' ? 'high' : 'auto'}
            loading="eager"
            src={activeProduct.src}
          />
        </div>

        <div
          aria-hidden="true"
          className="product-evidence__peek product-evidence__peek--next"
          data-product={nextProduct.id}
        >
          <img
            alt=""
            decoding="async"
            loading="eager"
            src={nextProduct.src}
          />
        </div>

        <button
          aria-controls="product-evidence-viewer"
          aria-label={`Previous product: ${previousProduct.label}`}
          className="product-evidence__edge product-evidence__edge--previous"
          onBlur={() => setHoverSide(null)}
          onClick={goPrevious}
          onFocus={() => setHoverSide('left')}
          onPointerEnter={() => setHoverSide('left')}
          onPointerLeave={() => setHoverSide(null)}
          type="button"
        >
          <span
            aria-hidden="true"
            className="product-evidence__edge-arrow"
          >
            ←
          </span>
        </button>

        <button
          aria-controls="product-evidence-viewer"
          aria-label={`Next product: ${nextProduct.label}`}
          className="product-evidence__edge product-evidence__edge--next"
          onBlur={() => setHoverSide(null)}
          onClick={goNext}
          onFocus={() => setHoverSide('right')}
          onPointerEnter={() => setHoverSide('right')}
          onPointerLeave={() => setHoverSide(null)}
          type="button"
        >
          <span
            aria-hidden="true"
            className="product-evidence__edge-arrow"
          >
            →
          </span>
        </button>
      </div>

      <figcaption className="product-evidence__footer">
        <div
          aria-live="polite"
          className="product-evidence__meta"
        >
          <strong>{activeProduct.label}</strong>

          <span aria-hidden="true" className="product-evidence__meta-separator">
            /
          </span>

          <span>{activeProduct.context}</span>
        </div>

        <div className="product-evidence__footer-end">
          <div className="product-evidence__mobile-nav">
            <button
              aria-label={`Previous product: ${previousProduct.label}`}
              onClick={goPrevious}
              type="button"
            >
              ←
            </button>

            <button
              aria-label={`Next product: ${nextProduct.label}`}
              onClick={goNext}
              type="button"
            >
              →
            </button>
          </div>

          <span
            aria-label={`Product ${activeIndex + 1} of ${totalProducts}`}
            className="product-evidence__counter type-tech"
          >
            0{activeIndex + 1} / 0{totalProducts}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
