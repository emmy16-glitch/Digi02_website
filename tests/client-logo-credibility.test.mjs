import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const read = (path) => readFile(new URL(path, root), 'utf8')

test('homepage credibility section is limited to named selected-work organisations', async () => {
  const source = await read('src/sections/home/HomeBlueprintContent.tsx')

  assert.match(source, /HomeBlueprintSelectedWorkContexts/)
  assert.match(source, /Sterling Payment Gateway/)
  assert.match(source, /Kaduna State e-Management System/)
  assert.match(source, /\/work\/sterling-payment-gateway/)
  assert.match(source, /\/work\/kaduna-state-e-management-system/)
  assert.match(source, /does not imply endorsement/)
  assert.doesNotMatch(source, /100\+ clients|our clients|trusted by/i)
})

test('official mark assets retain full contained display treatment', async () => {
  const [source, styles] = await Promise.all([
    read('src/sections/home/HomeBlueprintContent.tsx'),
    read('src/styles/home-blueprint.css'),
  ])

  assert.match(source, /sterling-bank-official-logo\.png/)
  assert.match(source, /kaduna-state-government-official-insignia\.png/)
  assert.match(styles, /\.home-blueprint-contexts__mark img[\s\S]*?object-fit: contain/)
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/)
})
