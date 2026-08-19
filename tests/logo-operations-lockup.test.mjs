import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const read = (path) => readFile(new URL(path, root), 'utf8')

test('shared navigation and footer use the restored Digi02 operations lockup', async () => {
  const [header, footer] = await Promise.all([
    read('./src/components/navigation/SiteHeader.tsx'),
    read('./src/components/SiteFooter.tsx'),
  ])

  for (const source of [header, footer]) {
    assert.match(source, /digi02-logo-operations-light\.png/)
    assert.match(source, /Technology built for real operations/)
  }

  assert.doesNotMatch(footer, /<p>Technology built for/)
})

test('logo presentation uses contain sizing without legacy crop transforms', async () => {
  const [app, styles, mapStyles] = await Promise.all([
    read('./src/App.tsx'),
    read('./src/styles/logo-operations-system.css'),
    read('./src/styles/contact-location-map.css'),
  ])

  assert.match(app, /import '\.\/styles\/logo-operations-system\.css'/)
  assert.match(styles, /aspect-ratio: 3 \/ 2/)
  assert.match(styles, /overflow: visible/)
  assert.match(styles, /object-fit: contain/)
  assert.match(styles, /transform: none/)
  assert.match(mapStyles, /\.digi02-location__identity img[\s\S]*?object-fit: contain/)
})
