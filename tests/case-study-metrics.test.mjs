import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const caseStudySource = await readFile(new URL('../src/pages/CaseStudyPage.tsx', import.meta.url), 'utf8')
const workStyles = await readFile(new URL('../src/styles/work-reference.css', import.meta.url), 'utf8')

test('publishes the three client-approved outcome metrics', () => {
  assert.match(caseStudySource, /approvedMetric: \{ value: '30%', label: 'efficiency increase' \}/)
  assert.match(caseStudySource, /approvedMetric: \{ value: '15%', label: 'error reduction' \}/)
  assert.match(caseStudySource, /approvedMetric: \{ value: '40%', label: 'faster workflow' \}/)
  assert.match(caseStudySource, /Client-approved result/)
})

test('keeps Work-card and filter motion smooth and reduced-motion safe', () => {
  assert.match(workStyles, /work-reference-filter__buttons button:hover[\s\S]*translateY\(-2px\)/)
  assert.match(workStyles, /work-reference-featured__card:is\(:hover, :focus-within\)[\s\S]*translateY\(-4px\)/)
  assert.match(workStyles, /@media \(prefers-reduced-motion: reduce\)/)
  assert.match(workStyles, /work-reference-featured__card:is\(:hover, :focus-within\)[\s\S]*transform: none/)
})
