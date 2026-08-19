import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const contactPage = await readFile(new URL('./src/pages/ContactPage.tsx', root), 'utf8')
const contactStyles = await readFile(new URL('./src/styles/contact-modernisation.css', root), 'utf8')
const mapComponent = await readFile(new URL('./src/components/Digi02LocationMap.tsx', root), 'utf8')

test('provides a modern contact form with realtime validation and an enquiry-ready modal', () => {
  assert.match(contactPage, /function validateField/)
  assert.match(contactPage, /noValidate/)
  assert.match(contactPage, /aria-invalid/)
  assert.match(contactPage, /isSuccessModalOpen/)
  assert.match(contactPage, /Your project brief is ready/)
  assert.match(contactPage, /Open email draft/)
  assert.match(contactPage, /role="dialog"/)
})

test('publishes office access, verified connection links, and an interactive location map', () => {
  assert.match(contactPage, /Office availability/)
  assert.match(contactPage, /Visits and on-site meetings are arranged in advance/)
  assert.match(contactPage, /https:\/\/ng\.linkedin\.com\/company\/digi02/)
  assert.match(mapComponent, /<iframe/)
  assert.match(mapComponent, /Get directions/)
  assert.match(mapComponent, /Open in Google Maps/)
})

test('keeps contact interactions animated but reduced-motion safe', () => {
  assert.match(contactStyles, /contact-modal-enter/)
  assert.match(contactStyles, /prefers-reduced-motion: reduce/)
  assert.match(contactStyles, /contact-reference-form__label\.is-invalid/)
})

test('adds a native accessible collapsible FAQ directly beneath the Contact form', () => {
  assert.match(contactPage, /const contactFaqs/)
  assert.match(contactPage, /contact-reference-faq/)
  assert.match(contactPage, /<details key=\{faq\.question\}>/)
  assert.match(contactPage, /<summary>/)
  assert.match(contactPage, /How quickly will Digi02 respond to my enquiry\?/) 
  assert.match(contactStyles, /contact-reference-faq details\[open\]/)
})
