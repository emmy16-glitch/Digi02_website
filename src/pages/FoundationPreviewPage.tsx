import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import { SecondaryButton } from '../components/SecondaryButton'
import { SectionLabel } from '../components/SectionLabel'
import '../styles/foundation-preview.css'

const colors = [
  ['Black 950', '#050505'],
  ['Black 900', '#0B0B0C'],
  ['Surface 800', '#111112'],
  ['Surface 700', '#181818'],
  ['Text primary', '#F7F6F2'],
  ['Text secondary', '#AAA8A2'],
  ['Text muted', '#73716C'],
  ['Gold 500', '#C9A34A'],
  ['Gold 400', '#E0BC67'],
  ['Gold 700', '#86672B'],
] as const

const typeSamples = [
  ['Hero', 'type-hero', 'Precision systems'],
  ['H1', 'type-h1', 'Engineering clarity'],
  ['H2', 'type-h2', 'System foundations'],
  ['H3', 'type-h3', 'Controlled hierarchy'],
  ['Lead', 'type-lead', 'A restrained type system for technical communication.'],
  ['Body', 'type-body', 'Readable body copy remains at least 16px across every supported viewport.'],
  ['UI', 'type-ui', 'Interface label'],
  ['Technical', 'type-tech', 'DIGI02 / SYSTEM 00'],
  ['Caption', 'type-caption', 'Supporting caption and metadata context.'],
] as const

const spacing = [
  ['04', 'space-0-5'],
  ['08', 'space-1'],
  ['16', 'space-2'],
  ['24', 'space-3'],
  ['32', 'space-4'],
  ['40', 'space-5'],
  ['48', 'space-6'],
  ['64', 'space-8'],
  ['80', 'space-10'],
  ['96', 'space-12'],
] as const

export function FoundationPreviewPage() {
  return (
    <>
      <title>Digi02 — Design foundation preview</title>
      <main className="foundation-preview">
        <header className="preview-header">
          <Container>
            <SectionLabel>Internal / foundation preview</SectionLabel>
            <h1 className="type-h1">Digi02 visual system</h1>
            <p className="type-lead preview-intro">
              A focused reference for color, type, spacing, controls, borders, and keyboard states.
            </p>
          </Container>
        </header>

        <section className="preview-section" aria-labelledby="colors-title">
          <Container>
            <SectionLabel>01 / Color</SectionLabel>
            <h2 className="type-h2" id="colors-title">Black, white, controlled gold.</h2>
            <div className="color-grid">
              {colors.map(([name, value]) => (
                <div className="color-swatch" key={name}>
                  <span className="color-sample" style={{ backgroundColor: value }} aria-hidden="true" />
                  <span className="type-ui">{name}</span>
                  <span className="type-tech">{value}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="preview-section" aria-labelledby="type-title">
          <Container>
            <SectionLabel>02 / Typography</SectionLabel>
            <h2 className="type-h2" id="type-title">Scale and hierarchy</h2>
            <div className="type-stack">
              {typeSamples.map(([label, className, sample]) => (
                <div className="type-row" key={label}>
                  <span className="type-tech type-row__label">{label}</span>
                  <p className={className}>{sample}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="preview-section" aria-labelledby="spacing-title">
          <Container>
            <SectionLabel>03 / Spacing</SectionLabel>
            <h2 className="type-h2" id="spacing-title">Eight-pixel foundation</h2>
            <div className="spacing-list">
              {spacing.map(([label, token]) => (
                <div className="spacing-row" key={token}>
                  <span className="type-tech">{label}px</span>
                  <span className="spacing-bar" style={{ width: `var(--${token})` }} aria-hidden="true" />
                  <span className="type-tech">--{token}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="preview-section" aria-labelledby="controls-title" id="focus-reference">
          <Container>
            <SectionLabel>04 / Controls and surfaces</SectionLabel>
            <h2 className="type-h2" id="controls-title">Precise interaction</h2>
            <p className="preview-copy">
              Use Tab to inspect the gold focus ring. Controls maintain a minimum 44px touch target.
            </p>
            <div className="button-row">
              <PrimaryButton href="#border-reference">
                Primary action <span aria-hidden="true">→</span>
              </PrimaryButton>
              <SecondaryButton href="#border-reference">
                Secondary action <span aria-hidden="true">→</span>
              </SecondaryButton>
            </div>
            <div className="border-reference" id="border-reference">
              <span className="type-tech">Border / subtle</span>
              <p>One-pixel boundaries and tonal separation establish structure without heavy shadow.</p>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
