import { useState } from 'react'
import { Container } from '../../components/Container'
import { ProductVisual } from './ProductVisuals'
import { products, type ProductId } from './product-data'
import '../../styles/product-proof.css'

export function ProductProofSection() {
  const showcaseProducts = products.filter(
    (product) => product.id !== 'skygrid' && product.id !== 'digivolt' && product.id !== 'erp-pos',
  )
  const [activeProductId, setActiveProductId] = useState<ProductId>('diginorth')
  const activeProduct = showcaseProducts.find((product) => product.id === activeProductId) ?? showcaseProducts[0]

  return (
    <section className="product-proof" id="work" aria-labelledby="product-proof-title">
      <Container>
        <header className="product-proof__intro">
          <p className="product-proof__label type-tech">Digi02 / Products and platforms</p>
          <h2 id="product-proof-title">Built to work in the real world.</h2>
          <p className="product-proof__summary type-lead">
            Digi02 develops platforms, operational tools and communities around problems we
            understand firsthand.
          </p>
        </header>

        <div className="product-showcase">
          <div className="product-showcase__index" aria-label="Digi02 products">
            {showcaseProducts.map((product, index) => {
              const isActive = product.id === activeProductId

              return (
                <button
                  aria-controls="active-product-panel"
                  aria-pressed={isActive}
                  className="product-index-item"
                  data-active={isActive}
                  key={product.id}
                  onClick={() => setActiveProductId(product.id)}
                  type="button"
                >
                  <span className="product-index-item__number type-tech">0{index + 4}</span>
                  <span>
                    <strong>{product.name}</strong>
                    <small>{product.category}</small>
                  </span>
                  <span aria-hidden="true">→</span>
                </button>
              )
            })}
          </div>

          <article
            className="product-showcase__panel"
            data-product={activeProduct.id}
            data-tone={activeProduct.tone}
            id="active-product-panel"
            aria-live="polite"
          >
            <div className="product-showcase__copy" key={activeProduct.id}>
              <div>
                <div className="product-showcase__meta">
                  <p className="type-tech">{activeProduct.proofLabel}</p>
                  <span>{activeProduct.status}</span>
                </div>
                <h3>{activeProduct.name}</h3>
                <p>{activeProduct.summary}</p>
              </div>
              <ul aria-label={`${activeProduct.name} focus areas`}>
                {activeProduct.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
            <div className="product-showcase__visual" key={`${activeProduct.id}-visual`}>
              <ProductVisual productId={activeProduct.id} />
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
