import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = '/home/ubuntu/Digi02_website-reference'
const work = await readFile(`${root}/src/pages/WorkPage.tsx`, 'utf8')

test('uses distinct Work overview photography rather than the three case-study detail images', () => {
  assert.match(work, /work-thermal-field-inspector/)
  assert.match(work, /work-payment-terminal-professional/)
  assert.match(work, /work-workflow-collaboration/)
  assert.doesNotMatch(work, /field-drone-team\.png/)
  assert.doesNotMatch(work, /sterling-african-mobile-payment/)
  assert.doesNotMatch(work, /kaduna-african-workflow-team/)
})
