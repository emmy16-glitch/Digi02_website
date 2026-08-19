import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const read = (path) => readFile(new URL(path, root), 'utf8')

test('provides a sticky shared header with a persistent accessible appearance toggle', async () => {
  const [header, desktopNav, mobileNav, styles] = await Promise.all([
    read('./src/components/navigation/SiteHeader.tsx'),
    read('./src/components/navigation/DesktopNavigation.tsx'),
    read('./src/components/navigation/MobileNavigation.tsx'),
    read('./src/styles/header-theme-system.css'),
  ])

  assert.match(header, /themeStorageKey = 'digi02-theme'/)
  assert.match(header, /return 'dark'/)
  assert.match(header, /window\.localStorage\.setItem/)
  assert.match(header, /document\.documentElement\.dataset\.theme = theme/)
  assert.match(header, /const \[scrollProgress, setScrollProgress\]/)
  assert.match(header, /window\.addEventListener\('scroll', scheduleProgressUpdate, \{ passive: true \}\)/)
  assert.match(header, /role="progressbar"/)
  assert.match(header, /aria-label="Page reading progress"/)
  assert.match(desktopNav, /<ThemeToggle/)
  assert.match(mobileNav, /<ThemeToggle/)
  assert.match(styles, /position: sticky/)
  assert.match(styles, /top: 0/)
  assert.match(styles, /z-index: 200/)
  assert.match(styles, /\.site-header__progress/)
  assert.match(styles, /transform-origin: left center/)
  assert.match(styles, /html\[data-theme='light'\] \.site-header__wordmark/)
  assert.match(styles, /prefers-reduced-motion: reduce/)
})

test('links the compact generated Digi02 favicon in document metadata', async () => {
  const html = await read('./index.html')

  assert.match(html, /rel="icon" type="image\/png" href="\/manus-storage\/digi02-favicon_208c64ed\.png"/)
})
