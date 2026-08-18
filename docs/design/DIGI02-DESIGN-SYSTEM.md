# Digi02 Design System

**Status: LOCKED / APPROVED BASELINE**

This file defines how Digi02 should look and behave across the website. If implementation conflicts with this file, this file wins until it is deliberately updated through the change-control process.

## 1. Brand position

Digi02 should feel like a premium African enterprise / defence / operations technology company with the restraint of a top design studio and the credibility of an infrastructure company.

The visual tone is:

- editorial;
- operational;
- technological;
- African / Kaduna-rooted;
- premium;
- serious, clear and modern.

It must not feel like a recolored startup template, generic cybersecurity site, or dashboard gallery.

## 2. Locked colors

```css
--digi02-black: #050505;
--digi02-black-soft: #0B0B0C;
--digi02-surface: #111112;
--digi02-surface-raised: #181818;
--digi02-white: #F7F6F2;
--digi02-text-secondary: #AAA8A2;
--digi02-text-muted: #85827C;
--digi02-gold: #C9A34A;
--digi02-gold-light: #E0BC67;
--digi02-gold-dark: #86672B;
--digi02-line-subtle: rgba(255,255,255,.10);
--digi02-line-strong: rgba(255,255,255,.18);
--digi02-line-gold: rgba(201,163,74,.35);
```

### Color rules

- Do not introduce random orange, yellow, green or alternative gold values.
- Gold is a premium accent, not a large background color.
- Warm white `#F7F6F2` is preferred over pure white for light editorial sections.
- Deep black and raised black are used to create hierarchy without excessive borders.
- On dark surfaces, body text must be readable and must not disappear into low-contrast gray.

## 3. Surface system

Use only four primary surface families:

### A. Deep black
`#050505`

Use for heroes, operational sections, large case studies, CTA areas and footer.

### B. Raised black
`#0B0B0C` / `#111112`

Use for dark cards, data panels, secondary dark sections and inset surfaces.

### C. Warm white
`#F7F6F2`

Use for editorial explanations, team layouts, forms, FAQs, solution summaries and deliberate visual relief.

### D. Gold accent
Use only for selected buttons, labels, icons, active states, metrics, fine rules and highlighted words.

## 4. Typography

### Roles

- Editorial/display headings: elegant, large, spacious; serif language is allowed where already established in Digi02.
- UI/body: clean sans-serif.
- Technical labels/eyebrows: restrained mono or compact uppercase sans-serif.

### Typography rules

- Let major statements carry the visual hierarchy.
- Avoid tiny body text that only works on desktop screenshots.
- Do not overuse forced line breaks.
- Use one strong statement, one concise supporting paragraph and one primary visual whenever possible.
- Editorial sections should have generous breathing room.

## 5. Buttons

Only three recurring button treatments are approved:

### Primary
Solid Digi02 gold, black text.

### Secondary
Transparent/dark with gold border, warm-white text.

### Tertiary
Text link with arrow.

Rules:

- Minimum interactive height: approximately 44px.
- Hover should be subtle: slight brightness/border change or arrow movement.
- Do not create a new button style for each page.

## 6. Card system

Use a small reusable set rather than page-specific card inventions.

### Information Card
Icon, title, concise copy, action. Usually warm white or quiet dark surface.

### Visual Product Card
Product title, brief capability copy, unique visual, compact action.

### Case Study Card
Strong media area, category, title, concise summary, case-study action.

### Proof/Data Card
Metric, label, icon or small visual. Minimal chrome.

### Team Card
Tall rectangular portrait, gold role label, name, role and short description.

Cards must not all use the same image treatment if the subject matter differs, but their spacing, border logic and typography should still feel related.

## 7. Section rhythm

Background changes must be intentional.

Preferred rhythm examples:

- dark hero → metric strip → warm-white editorial section → dark philosophy / case-study section;
- dark product section → warm-white FAQ / form → dark CTA/footer.

Avoid frequent black → cream → gray → black → cream flips that make the site feel assembled from unrelated templates.

## 8. Navigation

Desktop structure:

`Digi02 | Solutions | Industries | Work | Company | Insights | Discuss your project →`

Rules:

- Digi02 logo remains the home link.
- Header can be transparent over cinematic dark heroes.
- On scroll, settle into `#050505` with a subtle divider.
- Active state: restrained gold underline or indicator.
- CTA: outlined or restrained gold treatment.
- Mobile: full-screen black menu with clear hierarchy and large tap targets.

## 9. Motion

Motion is restrained and purposeful.

Approved examples:

- map/network points pulse subtly;
- lines/data paths move slowly;
- cards lift slightly on hover;
- images reveal gently;
- arrows move a few pixels on hover;
- accordions open smoothly.

Avoid excessive parallax, looping decorative motion, playful bouncing, or animation that competes with content.

Respect `prefers-reduced-motion`.

## 10. Reusable component library

Implementation should converge around these reusable components:

- `EditorialHero`
- `CinematicHero`
- `OperationalMetricStrip`
- `EditorialIntro`
- `FeatureSplit`
- `InfoCard`
- `VisualProductCard`
- `CaseStudyCard`
- `TeamCard`
- `NumberedAccordion`
- `ProcessSteps`
- `ContactForm`
- `AbstractWave`
- `GlobalCTA`
- `GlobalFooter`

Consistency should come from these components, not from manually styling each page to look approximately similar.

## 11. Abstract graphic language

The supplied Haikei/wave references may inspire a reusable Digi02 graphic motif using only:

- `#050505`
- charcoal / raised-black surfaces
- restrained `#C9A34A` / `#E0BC67` highlights

Use for CTA backgrounds, footer horizons, section transitions and subtle data-flow decoration. Do not use the original blue/pink/green reference palettes.

## 12. Global content rule

Borrow systems, not pages.

Borrow:

- layout composition;
- spacing;
- hierarchy;
- grid proportions;
- image sizing;
- card simplicity;
- FAQ behavior;
- form architecture;
- large typography;
- visual rhythm.

Keep Digi02:

- logo;
- black / warm-white / gold identity;
- real team;
- actual solutions;
- real projects;
- Kaduna and African context;
- operational technology imagery;
- enterprise tone.