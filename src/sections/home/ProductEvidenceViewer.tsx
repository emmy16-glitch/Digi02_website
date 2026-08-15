import { useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent, PointerEvent } from 'react'

import digiVoltShowcase from '../../assets/digivolt/digivolt-electric-mobility-showcase.png'
import erpPosShowcase from '../../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridMissionPlanner from '../../assets/skygrid/skygrid-gcs-mission-planner.webp'

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
    alt: 'SkyGrid ground control mission planning interface',
    src: skyGridMissionPlanner,
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
const EDGE_ZONE_RATIO = 0.3
const MAX_EDGE_REVEAL = 28

export function ProductEvidenceViewer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverSide, setHoverSide] = useState<HoverSide>(null)
  const [direction, setDirection] = useState<Direction>('next')

  const pointerStartRef = useRef<{ x: number; y: number } | null>(null)
  const viewportRef = useRef<HTMLDivElement>(null)

  const count = products.length
  const activeProduct = products[activeIndex]
  const previousIndex = (activeIndex - 1 + count) % count
  const nextIndex = (activeIndex + 1) % count
  const previousProduct = products[previousIndex]
  const nextProduct = products[nextIndex]

  function applyReveal(side: HoverSide, strength: number) {
    const viewport = viewportRef.current
    if (!viewport) return

    const safeStrength = Math.min(Math.max(strength, 0), 1)
    const shift = safeStrength * MAX_EDGE_REVEAL
    const signedShift = side === 'left' ? shift : side === 'right' ? -shift : 0

    viewport.style.setProperty('--edge-opacity', safeStrength.toFixed(3))
    viewport.style.setProperty('--current-shift', `${signedShift.toFixed(2)}px`)
    setHoverSide(side)
  }

  function resetReveal() {
    applyReveal(null, 0)
  }

  function changeProduct(index: number, nextDirection: Direction) {
    setDirection(nextDirection)
    resetReveal()
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

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return

    const viewport = viewportRef.current
    if (!viewport) return

    const rect = viewport.getBoundingClientRect()
    const x = event.clientX - rect.left
    const edgeZone = rect.width * EDGE_ZONE_RATIO

    if (x <= edgeZone) {
      applyReveal('left', 1 - x / edgeZone)
      return
    }

    if (x >= rect.width - edgeZone) {
      applyReveal('right', (x - (rect.width - edgeZone)) / edgeZone)
      return
    }

    resetReveal()
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

  const viewportStyle = {
    '--edge-opacity': 0,
    '--current-shift': '0px',
  } as CSSProperties

  return (
    <figure className="product-evidence">
      <div
        aria-label="Digi02 product gallery. Move toward either image edge or use the left and right arrow keys to browse."
        className="product-evidence__viewport"
        data-direction={direction}
        data-hover={hoverSide ?? 'none'}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerLeave={resetReveal}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        ref={viewportRef}
        role="group"
        style={viewportStyle}
        tabIndex={0}
      >
        <div
          aria-hidden="true"
          className="product-evidence__adjacent product-evidence__adjacent--previous"
          data-product={previousProduct.id}
        >
          <img alt="" decoding="async" loading="eager" src={previousProduct.src} />
        </div>

        <div
          aria-hidden="true"
          className="product-evidence__adjacent product-evidence__adjacent--next"
          data-product={nextProduct.id}
        >
          <img alt="" decoding="async" loading="eager" src={nextProduct.src} />
        </div>

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

        <button
          aria-label={`Previous product: ${previousProduct.label}`}
          className="product-evidence__hover-zone product-evidence__hover-zone--left"
          onBlur={resetReveal}
          onClick={previous}
          onFocus={() => applyReveal('left', 1)}
          type="button"
        >
          <span
            aria-hidden="true"
            className="product-evidence__reveal-arrow product-evidence__reveal-arrow--left"
          >
            ←
          </span>
        </button>

        <button
          aria-label={`Next product: ${nextProduct.label}`}
          className="product-evidence__hover-zone product-evidence__hover-zone--right"
          onBlur={resetReveal}
          onClick={next}
          onFocus={() => applyReveal('right', 1)}
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

        <span className="product-evidence__counter type-tech">
          <span className="visually-hidden">
            Product {activeIndex + 1} of {count}.{' '}
          </span>
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
