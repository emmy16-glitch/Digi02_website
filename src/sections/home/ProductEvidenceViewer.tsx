import { useRef, useState } from 'react'
import type { KeyboardEvent, PointerEvent } from 'react'

import digiVoltShowcase from '../../assets/digivolt/digivolt-electric-mobility-showcase.png'
import erpPosShowcase from '../../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridOperationsCenter from '../../assets/skygrid/skygrid-operations-center.webp'

type ProductId = 'skygrid' | 'digivolt' | 'erp-pos'
type HoverSide = 'left' | 'right' | null
type Direction = 'previous' | 'next'

type ProductEvidence = {
  id: ProductId
  label: string
  context: string
  alt: string
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

const SWIPE_THRESHOLD = 55

export function ProductEvidenceViewer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverSide, setHoverSide] = useState<HoverSide>(null)
  const [direction, setDirection] = useState<Direction>('next')

  const pointerStartRef = useRef<{ x: number; y: number } | null>(null)

  const count = products.length

  const activeProduct = products[activeIndex]
  const previousIndex = (activeIndex - 1 + count) % count
  const nextIndex = (activeIndex + 1) % count

  const previousProduct = products[previousIndex]
  const nextProduct = products[nextIndex]

  function changeProduct(index: number, nextDirection: Direction) {
    setDirection(nextDirection)
    setHoverSide(null)
    setActiveIndex((index + count) % count)
  }

  function previous() {
    changeProduct(previousIndex, 'previous')
  }

  function next() {
    changeProduct(nextIndex, 'next')
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      previous()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      next()
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse') return

    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
    }
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse') return

    const start = pointerStartRef.current
    pointerStartRef.current = null

    if (!start) return

    const dx = event.clientX - start.x
    const dy = event.clientY - start.y

    if (
      Math.abs(dx) < SWIPE_THRESHOLD ||
      Math.abs(dx) <= Math.abs(dy) * 1.2
    ) {
      return
    }

    if (dx < 0) next()
    else previous()
  }

  return (
    <figure className="product-evidence">
      <div
        aria-label="Digi02 product gallery. Use left and right arrow keys to browse."
        className="product-evidence__viewport"
        data-direction={direction}
        data-hover={hoverSide ?? 'none'}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => setHoverSide(null)}
        role="group"
        tabIndex={0}
      >
        {/* PREVIOUS IMAGE — hidden until left-edge interaction */}
        <div
          aria-hidden="true"
          className="product-evidence__adjacent product-evidence__adjacent--previous"
          data-product={previousProduct.id}
        >
          <img alt="" src={previousProduct.src} />
        </div>

        {/* NEXT IMAGE — hidden until right-edge interaction */}
        <div
          aria-hidden="true"
          className="product-evidence__adjacent product-evidence__adjacent--next"
          data-product={nextProduct.id}
        >
          <img alt="" src={nextProduct.src} />
        </div>

        {/* CURRENT PRODUCT */}
        <div
          className="product-evidence__current"
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

        {/* INVISIBLE LEFT INTERACTION AREA */}
        <button
          aria-label={`Previous product: ${previousProduct.label}`}
          className="product-evidence__hover-zone product-evidence__hover-zone--left"
          onClick={previous}
          onFocus={() => setHoverSide('left')}
          onBlur={() => setHoverSide(null)}
          onPointerEnter={() => setHoverSide('left')}
          type="button"
        >
          <span
            aria-hidden="true"
            className="product-evidence__reveal-arrow product-evidence__reveal-arrow--left"
          >
            ←
          </span>
        </button>

        {/* INVISIBLE RIGHT INTERACTION AREA */}
        <button
          aria-label={`Next product: ${nextProduct.label}`}
          className="product-evidence__hover-zone product-evidence__hover-zone--right"
          onClick={next}
          onFocus={() => setHoverSide('right')}
          onBlur={() => setHoverSide(null)}
          onPointerEnter={() => setHoverSide('right')}
          type="button"
        >
          <span
            aria-hidden="true"
            className="product-evidence__reveal-arrow product-evidence__reveal-arrow--right"
          >
            →
          </span>
        </button>
      </div>

      <figcaption className="product-evidence__footer">
        <div className="product-evidence__identity" aria-live="polite">
          <strong>{activeProduct.label}</strong>
          <span className="product-evidence__identity-divider">/</span>
          <span>{activeProduct.context}</span>
        </div>

        <span
          aria-label={`Product ${activeIndex + 1} of ${count}`}
          className="product-evidence__counter type-tech"
        >
          0{activeIndex + 1} / 0{count}
        </span>
      </figcaption>

      <div className="product-evidence__touch-controls">
        <button
          aria-label={`Previous product: ${previousProduct.label}`}
          onClick={previous}
          type="button"
        >
          ←
        </button>

        <span>{activeProduct.label}</span>

        <button
          aria-label={`Next product: ${nextProduct.label}`}
          onClick={next}
          type="button"
        >
          →
        </button>
      </div>
    </figure>
  )
}
