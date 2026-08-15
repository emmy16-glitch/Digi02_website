import { useMemo, useState } from 'react'

import { Container } from '../../components/Container'
import '../../styles/erp-pos-section.css'

type PaymentMethod = 'Card' | 'Transfer' | 'Cash'

type Product = {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
}

type Cart = Record<string, number>

type CompletedSale = {
  id: number
  items: Array<{
    name: string
    quantity: number
    total: number
  }>
  payment: PaymentMethod
  total: number
}

const initialProducts: readonly Product[] = [
  {
    id: 'headset',
    name: 'Wireless Headset',
    sku: 'AU-204',
    category: 'Audio',
    price: 48500,
    stock: 24,
  },
  {
    id: 'keyboard',
    name: 'Compact Keyboard',
    sku: 'KB-118',
    category: 'Accessories',
    price: 32750,
    stock: 11,
  },
  {
    id: 'charger',
    name: '65W USB-C Charger',
    sku: 'PW-065',
    category: 'Power',
    price: 18900,
    stock: 31,
  },
  {
    id: 'stand',
    name: 'Laptop Stand',
    sku: 'DS-041',
    category: 'Accessories',
    price: 22500,
    stock: 8,
  },
]

const moneyFormatter = new Intl.NumberFormat('en-NG', {
  currency: 'NGN',
  maximumFractionDigits: 0,
  style: 'currency',
})

function formatMoney(value: number) {
  return moneyFormatter.format(value)
}

export function ErpPosSection() {
  const [products, setProducts] = useState<Product[]>(() =>
    initialProducts.map((product) => ({ ...product })),
  )
  const [cart, setCart] = useState<Cart>({})
  const [query, setQuery] = useState('')
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>('Card')
  const [saleNumber, setSaleNumber] = useState(1042)
  const [lastSale, setLastSale] = useState<CompletedSale | null>(null)
  const [receiptOpen, setReceiptOpen] = useState(false)
  const [statusMessage, setStatusMessage] = useState(
    'Demo ready. Add an item to begin.',
  )

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return products
    }

    return products.filter((product) =>
      [product.name, product.sku, product.category]
        .join(' ')
        .toLowerCase()
        .includes(normalized),
    )
  }, [products, query])

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, quantity]) => quantity > 0)
        .map(([productId, quantity]) => {
          const product = products.find(
            (item) => item.id === productId,
          )

          if (!product) {
            return null
          }

          return {
            product,
            quantity,
            lineTotal: product.price * quantity,
          }
        })
        .filter(
          (
            item,
          ): item is {
            product: Product
            quantity: number
            lineTotal: number
          } => item !== null,
        ),
    [cart, products],
  )

  const itemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const orderTotal = cartItems.reduce(
    (total, item) => total + item.lineTotal,
    0,
  )

  function addProduct(productId: string) {
    const product = products.find((item) => item.id === productId)

    if (!product) {
      return
    }

    const quantity = cart[productId] ?? 0

    if (quantity >= product.stock) {
      setStatusMessage(
        `${product.name} has reached the available demo stock.`,
      )
      return
    }

    setCart((current) => ({
      ...current,
      [productId]: quantity + 1,
    }))

    setStatusMessage(`${product.name} added to the current sale.`)
  }

  function changeQuantity(productId: string, difference: number) {
    const product = products.find((item) => item.id === productId)

    if (!product) {
      return
    }

    const currentQuantity = cart[productId] ?? 0
    const nextQuantity = currentQuantity + difference

    if (nextQuantity > product.stock) {
      return
    }

    if (nextQuantity <= 0) {
      setCart((current) => {
        const next = { ...current }
        delete next[productId]
        return next
      })

      return
    }

    setCart((current) => ({
      ...current,
      [productId]: nextQuantity,
    }))
  }

  function completeSale() {
    if (cartItems.length === 0) {
      return
    }

    const nextSaleNumber = saleNumber + 1

    const completedItems = cartItems.map(
      ({ product, quantity, lineTotal }) => ({
        name: product.name,
        quantity,
        total: lineTotal,
      }),
    )

    setProducts((current) =>
      current.map((product) => {
        const soldQuantity = cart[product.id] ?? 0

        return {
          ...product,
          stock: Math.max(0, product.stock - soldQuantity),
        }
      }),
    )

    setLastSale({
      id: nextSaleNumber,
      items: completedItems,
      payment: paymentMethod,
      total: orderTotal,
    })

    setSaleNumber(nextSaleNumber)
    setCart({})
    setReceiptOpen(true)

    setStatusMessage(
      `Sale #${nextSaleNumber} completed. Inventory and activity updated.`,
    )
  }

  function resetDemo() {
    setProducts(
      initialProducts.map((product) => ({ ...product })),
    )
    setCart({})
    setQuery('')
    setPaymentMethod('Card')
    setLastSale(null)
    setReceiptOpen(false)
    setSaleNumber(1042)
    setStatusMessage('Demo reset. Add an item to begin.')
  }

  return (
    <section
      className="erp-pos-chapter"
      aria-labelledby="erp-pos-title"
    >
      <Container className="erp-pos-chapter__inner">
        <header className="erp-pos-chapter__intro">
          <div className="erp-pos-chapter__identity">
            <p className="type-tech">03 / Custom ERP + POS</p>
            <span>Business operations</span>
          </div>

          <div className="erp-pos-chapter__statement">
            <h2 id="erp-pos-title">
              One sale. One connected system.
            </h2>

            <p>
              Sales, stock and transaction records should not need
              separate stories. Try the demo and watch one sale update
              the operation behind it.
            </p>
          </div>
        </header>

        <div className="erp-pos-workspace">
          <section
            aria-labelledby="erp-pos-products-title"
            className="erp-pos-catalog"
          >
            <div className="erp-pos-workspace__topbar">
              <div>
                <span className="erp-pos-workspace__kicker">
                  Digi02 Retail / Demo
                </span>
                <h3 id="erp-pos-products-title">Point of sale</h3>
              </div>

              <div className="erp-pos-workspace__online">
                <span aria-hidden="true" />
                Counter 02
              </div>
            </div>

            <div className="erp-pos-search">
              <label htmlFor="erp-pos-search-input">
                Find a product
              </label>

              <input
                autoComplete="off"
                id="erp-pos-search-input"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search name, SKU or category"
                type="search"
                value={query}
              />
            </div>

            <div className="erp-pos-product-list">
              <div
                aria-hidden="true"
                className="erp-pos-product-list__head"
              >
                <span>Product</span>
                <span>Stock</span>
                <span>Price</span>
                <span />
              </div>

              {filteredProducts.map((product) => (
                <div
                  className="erp-pos-product-row"
                  key={product.id}
                >
                  <div className="erp-pos-product-row__identity">
                    <strong>{product.name}</strong>

                    <span>
                      {product.sku} · {product.category}
                    </span>
                  </div>

                  <div
                    className="erp-pos-product-row__stock"
                    data-low={product.stock <= 5}
                  >
                    <strong>{product.stock}</strong>
                    <span>available</span>
                  </div>

                  <strong className="erp-pos-product-row__price">
                    {formatMoney(product.price)}
                  </strong>

                  <button
                    disabled={product.stock === 0}
                    onClick={() => addProduct(product.id)}
                    type="button"
                  >
                    Add
                  </button>
                </div>
              ))}

              {filteredProducts.length === 0 ? (
                <p className="erp-pos-empty">
                  No sample products match that search.
                </p>
              ) : null}
            </div>
          </section>

          <aside
            aria-labelledby="erp-pos-order-title"
            className="erp-pos-order"
          >
            <div className="erp-pos-order__header">
              <div>
                <span>Current sale</span>
                <h3 id="erp-pos-order-title">
                  {itemCount === 0
                    ? 'No items yet'
                    : `${itemCount} ${
                        itemCount === 1 ? 'item' : 'items'
                      }`}
                </h3>
              </div>

              <button
                className="erp-pos-order__clear"
                disabled={cartItems.length === 0}
                onClick={() => setCart({})}
                type="button"
              >
                Clear
              </button>
            </div>

            <div className="erp-pos-order__items">
              {cartItems.length === 0 ? (
                <div className="erp-pos-order__empty">
                  <p>Add a product from the list.</p>
                  <span>
                    The order, inventory and receipt will respond here.
                  </span>
                </div>
              ) : (
                cartItems.map(
                  ({ product, quantity, lineTotal }) => (
                    <div
                      className="erp-pos-order-row"
                      key={product.id}
                    >
                      <div>
                        <strong>{product.name}</strong>
                        <span>{formatMoney(lineTotal)}</span>
                      </div>

                      <div
                        aria-label={`Quantity for ${product.name}`}
                        className="erp-pos-quantity"
                      >
                        <button
                          aria-label={`Remove one ${product.name}`}
                          onClick={() =>
                            changeQuantity(product.id, -1)
                          }
                          type="button"
                        >
                          −
                        </button>

                        <span>{quantity}</span>

                        <button
                          aria-label={`Add one ${product.name}`}
                          disabled={quantity >= product.stock}
                          onClick={() =>
                            changeQuantity(product.id, 1)
                          }
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ),
                )
              )}
            </div>

            <fieldset className="erp-pos-payment">
              <legend>Payment</legend>

              <div>
                {(
                  [
                    'Card',
                    'Transfer',
                    'Cash',
                  ] as const
                ).map((method) => (
                  <label
                    data-active={paymentMethod === method}
                    key={method}
                  >
                    <input
                      checked={paymentMethod === method}
                      name="erp-pos-payment"
                      onChange={() => setPaymentMethod(method)}
                      type="radio"
                      value={method}
                    />

                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="erp-pos-order__total">
              <span>Total</span>
              <strong>{formatMoney(orderTotal)}</strong>
            </div>

            <button
              className="erp-pos-complete"
              disabled={cartItems.length === 0}
              onClick={completeSale}
              type="button"
            >
              Complete sale
              <span aria-hidden="true">→</span>
            </button>
          </aside>

          <aside
            aria-hidden={!receiptOpen}
            className="erp-pos-receipt-drawer"
            data-open={receiptOpen}
          >
            <div className="erp-pos-receipt-drawer__header">
              <div>
                <span>Transaction complete</span>
                <strong>
                  {lastSale
                    ? `Sale #${lastSale.id}`
                    : 'Receipt'}
                </strong>
              </div>

              <button
                aria-label="Close receipt"
                onClick={() => setReceiptOpen(false)}
                type="button"
              >
                ×
              </button>
            </div>

            {lastSale ? (
              <div className="erp-pos-receipt">
                <div className="erp-pos-receipt__brand">
                  <strong>Digi02 Retail</strong>
                  <span>Sample transaction</span>
                </div>

                <div className="erp-pos-receipt__items">
                  {lastSale.items.map((item) => (
                    <div key={item.name}>
                      <span>
                        {item.quantity} × {item.name}
                      </span>

                      <strong>{formatMoney(item.total)}</strong>
                    </div>
                  ))}
                </div>

                <div className="erp-pos-receipt__payment">
                  <span>{lastSale.payment}</span>
                  <strong>{formatMoney(lastSale.total)}</strong>
                </div>

                <p>
                  Inventory updated with the same transaction.
                </p>
              </div>
            ) : null}
          </aside>
        </div>

        <div className="erp-pos-activity">
          <div className="erp-pos-activity__status">
            <span className="type-tech">System activity</span>

            <p aria-live="polite">{statusMessage}</p>
          </div>

          <div className="erp-pos-activity__actions">
            {lastSale ? (
              <button
                onClick={() => setReceiptOpen(true)}
                type="button"
              >
                View last receipt
              </button>
            ) : null}

            <button onClick={resetDemo} type="button">
              Reset demo
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
