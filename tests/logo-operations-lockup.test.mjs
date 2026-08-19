import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const read = (path) => readFile(new URL(path, root), 'utf8')

test('shared navigation and footer render deliberately proportioned Digi02 wordmarks', async () => {
  const [header, footer] = await Promise.all([
    read('./src/components/navigation/SiteHeader.tsx'),
    read('./src/components/SiteFooter.tsx'),
  ])

  for (const source of [header, footer]) {
    assert.match(source, /Digi<span>02<\/span>/)
    assert.doesNotMatch(source, /digi02-logo-operations-light\.png/)
  }

  assert.match(footer, /<p>Technology built for/)
})

test('visible logo presentation prioritizes readable shared wordmarks and preserve map-logo containment', async () => {
  const [app, styles, mapStyles] = await Promise.all([
    read('./src/App.tsx'),
    read('./src/styles/visible-logo-layout.css'),
    read('./src/styles/contact-location-map.css'),
  ])

  assert.match(app, /import '\.\/styles\/visible-logo-layout\.css'/)
  assert.match(styles, /font-size: clamp\(2rem/)
  assert.match(styles, /font-size: clamp\(2\.45rem/)
  assert.match(styles, /overflow: visible/)
  assert.match(styles, /outline: 2px solid var\(--gold-400\)/)
  assert.match(mapStyles, /\.digi02-location__identity img[\s\S]*?object-fit: contain/)
})
