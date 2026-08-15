# DIGI02 WEBSITE — CODEX MASTER INSTRUCTIONS

## 0. PURPOSE OF THIS FILE

This file contains the permanent engineering, design, workflow, accessibility, performance, and scope-control instructions for the official Digi02 website.

These instructions apply to **every Codex task performed inside this repository** unless the user explicitly overrides a specific rule.

This file is not a one-time prompt.

It is the repository's persistent instruction set.

Before performing any substantial task:

1. Read this `AGENTS.md` completely.
2. Read the current user request.
3. Inspect only the files relevant to that request.
4. Consult the Digi02 design foundation when the task affects visual design.
5. Implement only the requested scope.
6. Validate the work.
7. Stop and wait for review.

---

# 1. PROJECT IDENTITY

You are working on the official **Digi02 company website**.

Digi02 is a serious technology and engineering company.

The company works across areas including:

* custom software engineering
* enterprise systems
* ERP
* payroll automation
* secure payments
* POS systems
* autonomous systems
* UAV systems
* engineering infrastructure
* technology integration

This must not feel like:

* a generic digital agency
* a cheap corporate template
* an AI-generated landing page
* a generic SaaS startup
* a luxury brand
* a crypto project
* a cyberpunk concept website
* a ThemeForest template

The website should communicate:

> Digi02 engineers serious technology.

---

# 2. PROJECT NORTH STAR

The visual and product direction is:

## DIGI02 / PRECISION SYSTEMS

The website should feel:

* engineered
* deliberate
* premium
* technical
* modern
* credible
* restrained
* precise
* confident
* distinctive
* highly intentional

Beauty should come from:

* strong hierarchy
* real technology
* excellent typography
* architecture
* composition
* systems thinking
* interaction
* product imagery
* evidence
* precision
* controlled motion

Beauty must not come from unnecessary decoration.

The visitor should leave thinking:

> These people clearly know how to engineer complex systems.

---

# 3. PRIMARY DESIGN SOURCE OF TRUTH

The repository contains:

`docs/Digi02_Web_Design_Foundation_v1.0.docx`

This document is the primary design-system reference for the website.

When implementing anything involving:

* colors
* typography
* spacing
* grids
* page composition
* surfaces
* radii
* borders
* imagery
* motion
* diagrams
* technical metadata
* responsive behavior
* accessibility
* navigation
* capability-page patterns

consult the design foundation.

Do not casually create an alternative visual system.

If the user's request conflicts materially with the foundation:

1. identify the conflict,
2. explain it briefly,
3. follow the user's explicit instruction if they intentionally override the system.

---

# 4. DEVELOPMENT PHILOSOPHY

This project must be built **incrementally**.

Do not attempt to build the complete Digi02 website in one task.

The project should progress through controlled checkpoints.

Preferred order:

```text
PHASE 0
Project foundation

PHASE 1
Design tokens, typography and global styling

PHASE 2
Navigation shell

PHASE 3
Navigation behavior and responsive navigation

PHASE 4
Homepage hero structure

PHASE 5
Homepage hero visual refinement

PHASE 6
Homepage hero motion

PHASE 7
First systems/capabilities chapter

PHASE 8
Architecture / systems visualization

PHASE 9
Evidence / proof system

PHASE 10
Responsive refinement

PHASE 11
Accessibility refinement

PHASE 12
First capability page

PHASE 13+
Remaining capability pages, case studies, insights and company content
```

Do not skip ahead unless explicitly instructed.

---

# 5. STRICT SCOPE CONTROL

For every Codex task:

1. Understand exactly what was requested.
2. Inspect the existing implementation.
3. Define the minimum required change.
4. Implement only that change.
5. Test it.
6. Report the result.
7. STOP.

Do not automatically continue into another phase.

If the user asks to build:

> the navigation

do not also build:

* the homepage
* hero
* footer
* service sections
* case studies
* animations unrelated to navigation

If the user asks to build:

> the homepage hero

do not automatically create the entire homepage.

Small, controlled progress is mandatory.

---

# 6. DO NOT TRY TO “IMPRESS” BY OVERBUILDING

More code is not automatically better.

More sections are not automatically better.

More animation is not automatically better.

More cards are not automatically better.

When given a narrow task:

**stay narrow.**

Do not create:

* placeholder sections
* speculative pages
* future features
* additional sections “for completeness”
* extra dependencies
* unnecessary abstractions

unless they are essential to the requested work.

---

# 7. REFERENCE WEBSITE PHILOSOPHY

Two websites have influenced the design direction.

They are **references for principles only**.

They must never be cloned.

---

## 7.1 MOBILE HACKING LAB

Reference:

`https://www.mobilehackinglab.com/`

Use its design principles for:

* cinematic product presentation
* large hardware imagery
* hardware as interface
* immersive section transitions
* technical micro-labels
* numbered chapters
* strong scale contrast
* controlled product overlays
* scroll-driven product explanation
* system progression
* restrained interface chrome

Do NOT copy:

* layout
* green accent color
* typography
* imagery
* certification structure
* cards
* animations
* course structure
* exact interaction timing
* component shapes
* copywriting
* navigation
* page composition

Digi02 must never look like:

> Mobile Hacking Lab with gold instead of green.

---

## 7.2 INTENT HQ / DEEP PRIVACY

Reference:

`https://intenthq.com/deep-privacy`

Use its design principles for:

* architecture-first storytelling
* diagrams that explain technology
* interactive system demonstrations
* evidence-led communication
* restrained editorial composition
* visual explanation of technical systems
* calm information hierarchy
* technical credibility
* proof over vague marketing claims

Do NOT copy:

* brown palette
* typography
* diagrams
* components
* interaction patterns
* page structure
* privacy terminology
* branded demonstrations
* exact card layouts

Digi02 must never look like:

> Intent HQ with a black theme.

---

# 8. DIGI02 MUST REMAIN ORIGINAL

Every substantial design decision should pass this question:

> Does this feel specifically like Digi02?

Avoid direct imitation of:

* Mobile Hacking Lab
* Intent HQ
* Apple
* Palantir
* Anduril
* Linear
* Stripe
* Vercel
* Awwwards showcase sites
* popular SaaS templates

References should influence thinking, not become templates.

The website must become recognizable even when the logo is temporarily removed.

---

# 9. BRAND COLOR SYSTEM

The official website palette is:

```css
:root {
  --bg-950: #050505;
  --bg-900: #0B0B0C;

  --surface-800: #111112;
  --surface-700: #181818;

  --text-primary: #F7F6F2;
  --text-secondary: #AAA8A2;
  --text-muted: #73716C;

  --gold-500: #C9A34A;
  --gold-400: #E0BC67;
  --gold-700: #86672B;

  --line-subtle: rgba(255, 255, 255, 0.10);
  --line-gold: rgba(201, 163, 74, 0.35);
}
```

Do not introduce another brand accent without explicit approval.

---

# 10. COLOR PROPORTION

Approximate screen usage:

```text
80–85%  black / dark neutrals
10–15%  white / near-white
3–7%    gold
```

Gold should communicate:

* focus
* active state
* selected state
* primary action
* current system stage
* technical path
* important annotation
* verified emphasis
* priority

Gold must not become wallpaper.

---

# 11. GOLD USAGE RULES

Gold may be used for:

* primary CTA
* active navigation
* small icons
* focus rings
* technical connectors
* active diagram node
* section label
* selected state
* important metric
* one highlighted headline word
* subtle system path

Avoid simultaneously applying gold to:

* heading
* button
* border
* icon
* background
* glow
* divider

inside the same visual group.

One primary gold focus point per composition is usually enough.

---

# 12. BLACK + GOLD MUST NOT LOOK “LUXURY”

Digi02 is an engineering company.

It is not:

* a watch company
* casino
* luxury hotel
* jewellery company
* cryptocurrency startup
* nightclub
* premium real-estate company

Do not use:

* marble
* crowns
* gold sparkles
* ornamental borders
* shiny metallic gradients everywhere
* excessive serif typography
* champagne colors
* glowing gold dust
* luxury product-showroom styling

Gold must feel **technical**, not luxurious.

---

# 13. TYPOGRAPHY SYSTEM

Three typography roles are approved.

---

## 13.1 DISPLAY

Preferred font:

**Space Grotesk**

Use for:

* hero headlines
* page titles
* major section headings
* large numerical emphasis
* strong editorial statements

Weights:

```text
600
700
```

---

## 13.2 BODY / UI

Preferred font:

**Inter**

Use for:

* paragraphs
* navigation
* buttons
* forms
* readable labels
* supporting text
* content descriptions

Weights:

```text
400
500
600
```

---

## 13.3 TECHNICAL METADATA

Preferred font:

**IBM Plex Mono**

Acceptable fallback:

**JetBrains Mono**

Use for:

* system labels
* chapter numbers
* subsystem names
* stage numbers
* technical metadata
* statuses
* coordinates
* architecture annotations

Examples:

```text
DIGI02 / AUTONOMOUS SYSTEMS

SYSTEM / 04

NAV / AUTONOMOUS

LINK / ACTIVE

TRANSACTION / VERIFIED

01 / FLIGHT CONTROL
```

Never use mono typography for long reading content.

---

# 14. TYPOGRAPHY SCALE

Desktop guidance:

```text
Hero Display    72–104px
H1              56–72px
H2              40–52px
H3              28–36px
Lead            20–24px
Body            16–18px
UI              14–16px
Technical       10–12px
Caption          12–13px
```

Mobile guidance:

```text
Hero Display    48–64px
H1              40–48px
H2              32–40px
H3              24–30px
Lead            18–20px
Body            16–17px
UI              14–16px
Technical       10–11px
Caption          12px
```

Do not invent random type sizes.

Use the design token scale.

---

# 15. TYPOGRAPHIC BEHAVIOR

Human-facing headings should usually use sentence case.

Example:

```text
Autonomous systems built for demanding operations.
```

Technical metadata may use uppercase:

```text
DIGI02 / AUTONOMOUS SYSTEMS
```

Avoid:

```text
AUTONOMOUS SYSTEMS BUILT FOR DEMANDING OPERATIONS
```

for normal long-form headings.

---

# 16. HEADLINE RULES

Hero headlines should generally remain:

* short
* confident
* clear
* approximately 2–4 lines

Avoid long marketing paragraphs inside the hero.

Do not use gold on several different words in one headline.

One highlighted word may be enough.

---

# 17. BODY COPY

Recommended line length:

```text
55–75 characters
```

Default body alignment:

```text
left
```

Avoid centered paragraphs unless extremely short.

Large sections should not contain giant walls of text.

Use hierarchy.

---

# 18. SPACING SYSTEM

Use an 8px foundational scale.

Approved spacing:

```css
--space-0-5: 4px;
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-8: 64px;
--space-10: 80px;
--space-12: 96px;
--space-15: 120px;
--space-20: 160px;
```

4px may be used only for small optical corrections.

Avoid arbitrary spacing such as:

```text
37px
53px
67px
91px
```

unless technically necessary.

---

# 19. SECTION SPACING

Desktop:

```text
120–160px
```

Tablet:

```text
88–120px
```

Mobile:

```text
64–88px
```

Not every section needs identical spacing.

Visual rhythm matters.

---

# 20. GRID SYSTEM

Desktop:

```text
12 columns
24px gutters
64–96px side margins
1440px maximum normal content width
```

Tablet:

```text
8–12 columns
20–24px gutters
32–56px margins
```

Mobile:

```text
4 columns
16px gutters
20px margins
```

Large cinematic media may intentionally extend beyond the main content container.

---

# 21. COMPOSITION SYSTEM

Do not make every section symmetrical.

Use varied compositions such as:

```text
4 / 8
5 / 7
6 / 6
8 / 4
full bleed
sticky visual + narrative
editorial offset
large image + compact copy
architecture canvas + explanation
```

Do not center every section.

---

# 22. PAGE RHYTHM

Pages should alternate density.

Preferred rhythm:

```text
CINEMATIC

↓

EXPLANATORY

↓

EVIDENCE

↓

INTERACTIVE

↓

BREATHING SPACE

↓

SYSTEM DETAIL

↓

CASE / PROOF
```

Avoid:

```text
heading
3 cards

heading
3 cards

heading
3 cards

heading
3 cards
```

Repeated card grids are a major anti-pattern.

---

# 23. SURFACES

Approved default radii:

```text
buttons / inputs      4px
cards / panels        8px
large media          12px
```

Avoid consumer-app roundness.

Do not use:

```text
24px
28px
32px
```

card radii by default.

---

# 24. SHADOWS AND DEPTH

Prefer:

* tonal separation
* subtle borders
* depth through imagery
* layering
* negative space

Avoid:

* huge shadows
* neon glows
* glassmorphism everywhere
* blur everywhere
* floating soft cards
* bright ambient halos behind every component

---

# 25. BORDERS

One-pixel lines are part of the Digi02 visual language.

They may be used for:

* architectural connections
* dividers
* progress lines
* navigation
* selected nodes
* technical framing

Default subtle border:

```css
1px solid rgba(255,255,255,.10)
```

Gold borders should generally represent:

* focus
* active state
* selected state

not general decoration.

---

# 26. CARDS ARE NOT THE DEFAULT

Do not automatically wrap information in cards.

Cards should represent genuinely bounded objects such as:

* case study
* article
* product module
* dataset
* comparison
* technical demo
* interactive panel

For capability storytelling prefer:

* open compositions
* architecture diagrams
* cinematic imagery
* pipelines
* full-width product scenes
* chapter sequences
* system maps

---

# 27. IMAGERY PRIORITY

Use imagery in this order:

1. Real Digi02 hardware
2. Real Digi02 software/interface
3. Real Digi02 product screenshots
4. High-quality technical render based on a real Digi02 system
5. Architecture diagram
6. Documentary engineering photography
7. Meaningful abstract visual
8. Stock photography only as a last resort

---

# 28. PROHIBITED STOCK IMAGERY

Avoid:

* handshakes
* smiling corporate teams pointing at laptops
* generic programmers
* glowing cyber hackers
* hoodie hackers
* random server racks
* holographic interfaces
* generic circuit boards
* random robots
* futuristic city stock
* generic business meetings
* abstract AI brains

The subject matter must support the real capability.

---

# 29. CINEMATIC PRODUCT PRESENTATION

Where appropriate:

* allow product/hardware to occupy 50–80% of a hero
* use close crops
* allow partial product views
* use dark negative space
* create visual scale
* use technical annotations carefully

The product does not always need to fit fully inside the viewport.

---

# 30. HARDWARE AS INTERFACE

For physical systems such as:

* UAVs
* POS devices
* engineering hardware

the hardware itself may become the page composition.

Instead of:

```text
small product image
heading
paragraph
button
```

prefer:

```text
large product visual
technical callouts
subsystem states
architecture relationship
controlled narrative
```

---

# 31. TECHNICAL MICRO-LABELS

Technical labels are part of the Digi02 identity.

Examples:

```text
DIGI02 / PRECISION SYSTEMS

01 / SYSTEM

AUTONOMOUS / FLIGHT CONTROL

NETWORK / VERIFIED

TRANSACTION / SECURE

MISSION / ACTIVE
```

Use sparingly.

They should add structure, not fake complexity.

---

# 32. NO FAKE TELEMETRY

Never fabricate operational values.

Do not invent:

* altitude
* coordinates
* transactions
* customers
* deployments
* users
* uptime
* throughput
* flight hours
* regions
* revenue
* savings
* efficiency gains
* accuracy
* response time
* certifications
* standards
* awards

If demonstration data is required, label it clearly:

```text
DEMO
```

or:

```text
ILLUSTRATIVE
```

Never make fake data look live.

---

# 33. ARCHITECTURE DIAGRAM SYSTEM

Technical systems should be visually understandable.

Default node:

* dark surface
* subtle 1px border
* compact radius

Active node:

* gold border or gold dot

Inactive node:

* neutral / muted

Connector:

* thin neutral line

Active path:

* gold

Stage number:

```text
01
02
03
04
```

Technical metadata:

* uppercase
* mono
* small
* restrained

---

# 34. INTERACTIVE DIAGRAM PATTERNS

Approved patterns include:

### Scroll-to-activate pipeline

One system stage becomes active while others remain muted.

### Hover/click subsystem inspection

User can inspect a system without leaving the page.

Must also work with:

* keyboard
* touch

### Sticky architecture canvas

Narrative advances alongside a persistent architecture visual.

### Before/after system view

Useful when demonstrating transformation.

### Clickable node map

For complex systems.

Must provide equivalent structured text.

---

# 35. MOTION PHILOSOPHY

Motion must perform a job.

Motion should:

* orient
* reveal
* connect
* explain
* demonstrate
* acknowledge state

Motion should not exist merely because it looks expensive.

---

# 36. MOTION TOKENS

Use:

```css
--motion-instant: 110ms;
--motion-fast: 160ms;
--motion-ui: 240ms;
--motion-component: 420ms;
--motion-scene: 800ms;
--motion-cinematic: 1000ms;

--ease-standard: cubic-bezier(.22,1,.36,1);
--ease-emphasized: cubic-bezier(.16,1,.3,1);
--ease-exit: cubic-bezier(.4,0,1,1);
```

Typical range for cinematic moments:

```text
800–1200ms
```

---

# 37. MOTION PREFERENCES

Prefer:

* opacity
* translate
* controlled masking
* path progress
* subtle scale
* subsystem activation
* product rotation
* controlled reveal
* sequencing
* scroll-linked technical progression

Avoid:

* everything fading upward
* constant parallax
* bouncing
* random floating objects
* aggressive scale effects
* cursor followers everywhere
* 300px fly-in animations
* looping decorative motion
* excessive blur reveals

---

# 38. PRODUCT ROTATION AND 3D

3D or rotation may be used only when it improves understanding.

Examples:

* UAV rotation
* exploded product view
* POS hardware inspection
* subsystem reveal

Do not use 3D merely because Three.js exists.

Build a strong static version first.

Then progressively enhance.

---

# 39. SCROLL STORYTELLING

Sticky sections may be used for specific technical chapters.

Do not hijack normal scrolling.

Never pin the entire website.

Approved uses:

```text
01 / FLIGHT CONTROL
02 / NAVIGATION
03 / TELEMETRY
04 / PAYLOAD
```

Long sequences should include a subtle progress indicator.

A thin gold line or active number is enough.

---

# 40. BUTTON SYSTEM

## Primary Button

Treatment:

* gold background
* dark text
* 4px radius
* concise label
* optional arrow

Hover:

* slight brightness increase
* arrow moves approximately 3–4px
* approximately 160ms

Use one dominant CTA per major section.

---

## Secondary Button

Treatment:

* transparent
* subtle white border
* white text

Hover:

* border transitions toward gold
* text remains stable

Avoid large scaling.

---

## Ghost Action

Text only.

Optional arrow.

Gold may appear during interaction.

Use for low-priority navigation.

---

# 41. LINK INTERACTIONS

Text links may use:

* animated underline
* 2px arrow motion
* subtle gold interaction state

Do not create exaggerated movement.

---

# 42. CARD INTERACTIONS

If a card exists:

* 1–2px lift
* subtle tonal change
* subtle border response

Avoid:

```text
scale(1.08)
```

or dramatic hover motion.

---

# 43. NAVIGATION INFORMATION ARCHITECTURE

Recommended eventual top-level structure:

```text
Capabilities
Systems
Industries
Company
Insights
Talk to Engineering →
```

Keep the main navigation to approximately:

```text
5–6 primary items
```

Do not list every service directly in the header.

---

# 44. DESKTOP NAVIGATION

Desktop may use:

* compact horizontal navigation
* restrained floating dark surface
* subtle border
* optional controlled backdrop blur
* concise mega-menu

The navigation must not dominate the hero.

---

# 45. MEGA-MENU

A future mega-menu may group areas such as:

```text
DIGITAL SYSTEMS
Custom Software
ERP
Payroll

TRANSACTION SYSTEMS
Payments
POS

AUTONOMOUS SYSTEMS
UAV
Flight Control
Mission Systems
```

It should feel like structured engineering taxonomy.

Not an e-commerce menu.

---

# 46. MOBILE NAVIGATION

Mobile navigation should become a deliberate navigation sheet.

Do not squeeze the desktop navigation horizontally.

Requirements:

* large touch targets
* clear hierarchy
* keyboard/touch accessible
* clear close action
* controlled animation
* no hidden critical links

---

# 47. CONTENT VOICE

Digi02 writing should feel:

* technical
* calm
* specific
* confident
* concise

Use verbs such as:

* engineer
* integrate
* deploy
* automate
* monitor
* secure
* reconcile
* control
* optimize
* operate
* connect

---

# 48. WORDS TO AVOID

Avoid empty claims such as:

* cutting-edge
* groundbreaking
* revolutionary
* innovative solution
* next-generation
* seamless
* world-class
* best-in-class
* state-of-the-art

unless immediately supported with proof.

---

# 49. EVIDENCE OVER HYPE

Whenever possible, claims should be supported by:

1. real screenshots
2. architecture
3. deployment visuals
4. measurable case outcomes
5. real integrations
6. verified system metrics
7. current standards
8. certifications
9. customer evidence
10. technical documentation

Never fabricate proof.

---

# 50. HOMEPAGE ROLE

The homepage should eventually introduce Digi02 as one coherent systems company.

It must not feel like:

> six unrelated businesses under one logo.

Recommended eventual choreography:

```text
01 / HERO

02 / PROOF

03 / SYSTEMS

04 / ARCHITECTURE

05 / CASE EVIDENCE

06 / ENGINEERING APPROACH

07 / INSIGHTS

08 / TALK TO ENGINEERING
```

Do not build these sections unless requested in the current phase.

---

# 51. HOMEPAGE HERO RULES

The hero must eventually:

* explain Digi02 clearly
* establish brand tone
* use one primary CTA
* contain meaningful engineering subject matter
* use black / white / controlled gold
* feel visually intentional

Do not use:

* gradient blobs
* random floating cubes
* abstract glowing spheres
* fake dashboard collages
* generic robots
* code rain
* particles
* fake live maps
* generic AI imagery

---

# 52. UAV / AUTONOMOUS SYSTEMS VISUAL GRAMMAR

This may become the site's most cinematic capability.

Possible stages:

```text
FLIGHT CONTROL
NAVIGATION
TELEMETRY
PAYLOAD
GROUND CONTROL
MISSION DATA
```

Potential visuals:

* UAV
* aircraft render
* real aircraft photography
* flight control interface
* mission planning
* route visualization
* autonomy architecture
* ground control UI
* subsystem annotation

Appropriate motion:

* product rotation
* exploded view
* flight path drawing
* subsystem activation

Only real or clearly labelled illustrative data.

---

# 53. SECURE PAYMENTS VISUAL GRAMMAR

Avoid a generic fintech landing page.

Prefer transaction progression:

```text
DEVICE
↓
AUTHENTICATION
↓
TRANSACTION ENGINE
↓
SECURITY
↓
SETTLEMENT
↓
REPORTING
```

Visual meaning:

```text
Gold   = current stage
White  = completed / verified
Muted  = upcoming / inactive
```

---

# 54. ERP VISUAL GRAMMAR

Present ERP as a connected organizational operating system.

Potential modules:

```text
Finance
HR
Inventory
Procurement
Operations
Analytics
```

Show relationships.

Show data movement.

Show unification.

Do not create six identical cards.

---

# 55. PAYROLL VISUAL GRAMMAR

Potential flow:

```text
EMPLOYEE DATA
↓
ATTENDANCE
↓
ALLOWANCES
↓
TAX / PAYE
↓
APPROVAL
↓
PAYROLL
↓
REPORTING
```

Prefer process visualization over generic feature cards.

Use real outcomes when available.

---

# 56. POS VISUAL GRAMMAR

Use hardware as interface.

Potential flow:

```text
HARDWARE
↓
PAYMENT
↓
INVENTORY
↓
ANALYTICS
↓
BRANCH MANAGEMENT
```

Use:

* hardware close-ups
* UI
* transaction behavior
* actual operational context
* architecture

Do not make the page look like an online shop.

---

# 57. CUSTOM SOFTWARE VISUAL GRAMMAR

Show systems constructing and communicating.

Potential architecture:

```text
FRONTEND
↓
API
↓
SERVICES
↓
DATA
↓
CLOUD
↓
SECURITY
↓
MONITORING
↓
INTEGRATIONS
```

Prefer real product evidence over technology logo clouds.

Do not list 50 programming languages simply to look technical.

---

# 58. RESPONSIVE PHILOSOPHY

Mobile is not:

> desktop stacked vertically.

Recompose the experience.

Desktop systems may be horizontal.

Mobile systems may become vertical.

Desktop cinematic visuals may become intentionally cropped.

Complex sticky interactions may become:

* stepped sequences
* controlled carousel
* static keyframes

when necessary.

---

# 59. MOBILE REQUIREMENTS

Minimum body text:

```text
16px
```

Minimum touch target:

```text
44px × 44px
```

Avoid hover-only information.

Keep important actions reachable.

Ensure typography does not overflow.

Do not create giant desktop headlines that break awkwardly on mobile.

---

# 60. ACCESSIBILITY STANDARD

Target:

**WCAG 2.2 AA**

Accessibility is mandatory.

Requirements:

* semantic HTML
* one H1 per page
* logical heading hierarchy
* keyboard navigation
* visible focus
* sufficient contrast
* touch support
* alt text
* form labels
* meaningful error messages
* text alternatives for diagrams
* reduced motion
* state not communicated by color alone

---

# 61. FOCUS STYLE

Interactive elements require visible focus.

Recommended:

```text
2px gold focus ring
2px offset
```

Do not remove focus outlines without replacement.

---

# 62. REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Remove or simplify:

* parallax
* scroll-scrub rotation
* long scene transitions
* autoplay animation
* large motion transforms

Maintain meaning using:

* static states
* short opacity transitions
* simplified diagrams

---

# 63. PERFORMANCE PHILOSOPHY

Performance is part of the Digi02 brand.

A technology company cannot have a technically careless website.

Do not sacrifice usability for spectacle.

---

# 64. IMAGE PERFORMANCE

Prefer:

* AVIF
* WebP
* responsive `srcset`
* crop variants
* lazy loading below fold

Optimize media appropriately.

Do not load giant desktop images on small mobile screens.

---

# 65. VIDEO

Use video only if it communicates something that static imagery cannot.

Requirements:

* poster image
* no forced audio
* no unnecessary autoplay
* compression
* responsive delivery

Do not make the hero depend entirely on a huge video file.

---

# 66. WEBGL / THREE.JS

Do not introduce:

* Three.js
* React Three Fiber
* heavy WebGL
* massive canvas effects

during early foundation work.

Use only when:

1. the page concept is already approved,
2. the static version is strong,
3. 3D materially improves understanding.

Progressively enhance.

---

# 67. ANIMATION LIBRARIES

Do not install several motion libraries.

Prefer existing tools.

Use CSS where sufficient.

If a motion dependency is genuinely needed, justify why.

Avoid overlapping libraries such as:

```text
Framer Motion
GSAP
Anime.js
Motion One
```

all being used simultaneously.

---

# 68. ICONOGRAPHY

Use one consistent icon family.

Preferred treatment:

* outline
* approximately 1.5–1.75px stroke
* geometric
* simple
* technical

Do not mix:

* filled icons
* hand-drawn icons
* outline icons
* emoji
* unrelated icon packs

inside the same visual system.

---

# 69. DEPENDENCY POLICY

Before installing any package:

1. check existing dependencies,
2. confirm the capability cannot reasonably be implemented with current tools,
3. ensure the package is maintained and appropriate,
4. avoid duplication.

Do not add dependencies merely because they are popular.

---

# 70. CODE QUALITY

Code should be:

* readable
* maintainable
* accessible
* responsive
* typed where applicable
* sensibly componentized

Avoid:

* giant components
* duplicated markup
* magic values
* dead code
* unused imports
* deeply nested unnecessary abstractions
* huge inline style objects
* one component containing an entire site

---

# 71. COMPONENT ARCHITECTURE

Create reusable components only where actual reuse exists.

Potential future organization:

```text
src/
  assets/

  components/
    ui/
    navigation/
    typography/
    media/
    diagrams/
    motion/

  layouts/

  pages/

  sections/
    home/
    capabilities/
    company/
    evidence/

  styles/

  hooks/

  utils/

  data/
```

Do not generate all folders prematurely.

Create structure when needed.

---

# 72. DO NOT PREMATURELY BUILD A HUGE DESIGN SYSTEM

Do not create 50 components before the design is proven.

Start with the minimum.

Examples:

* Container
* Button
* SectionLabel
* Navigation primitives

Then expand only when patterns repeat.

---

# 73. CSS / DESIGN TOKEN POLICY

Core visual values should come from centralized tokens.

Do not scatter:

```css
color: #C9A34A;
margin-top: 47px;
border-radius: 17px;
```

through dozens of files.

Use shared tokens.

---

# 74. SAFE EDITING

Before editing substantial code:

1. inspect the existing files,
2. understand what is already working,
3. identify the minimum modification,
4. preserve unrelated behavior.

Do not rewrite entire files unnecessarily.

Do not delete working code unless the task requires it.

---

# 75. EXISTING DESIGN PRESERVATION

Once a visual section has been approved:

do not casually redesign it while implementing unrelated work.

If working on:

> navigation

do not redesign:

> hero typography

unless required.

Preserve approved decisions.

---

# 76. SOURCE CONTROL DISCIPLINE

When a repository uses Git:

* avoid unrelated file changes
* keep changes scoped
* do not remove `.gitignore`
* do not commit generated build folders unless intentionally tracked
* do not commit secrets

Never expose:

* API keys
* credentials
* tokens
* private secrets

---

# 77. ENVIRONMENT FILES

Never hardcode secrets.

Use appropriate environment variables.

Do not commit:

```text
.env
```

when it contains secrets.

Use `.env.example` where appropriate.

---

# 78. VALIDATION REQUIREMENTS

After significant implementation work, run relevant available checks.

These may include:

```bash
npm run typecheck
npm run lint
npm run build
```

and relevant tests.

Do not claim success if the build fails.

Fix errors introduced by the task.

---

# 79. VISUAL VALIDATION

A successful build is not enough.

For visual work, verify:

* desktop
* tablet
* mobile
* overflow
* typography
* spacing
* contrast
* focus states
* interactions
* console
* reduced-motion behavior where relevant

The design must be visually checked.

---

# 80. BROWSER CONSOLE

Do not leave:

* React errors
* hydration errors
* broken asset errors
* JavaScript exceptions
* missing keys
* network failures caused by the implementation

Fix relevant issues before reporting completion.

---

# 81. LOADING STATES

Avoid unnecessary spinners.

Where loading exists:

* preserve layout
* communicate state clearly
* avoid major layout shift

For large visuals, use progressive loading when appropriate.

---

# 82. ERROR STATES

Errors should be:

* clear
* specific
* readable
* adjacent to the relevant action

Avoid generic:

> Something went wrong.

when better information is available.

---

# 83. FORMS

Forms must include actual labels.

Do not rely solely on placeholders.

Inputs:

* dark surface
* subtle border
* visible gold focus
* accessible states

The future project-enquiry form should feel consultative and engineering-oriented.

Not like a generic newsletter form.

---

# 84. CONTENT PLACEHOLDER POLICY

Do not invent final corporate content.

When verified copy is unavailable:

use clearly labelled temporary content or ask for source material.

Never invent:

* clients
* statistics
* projects
* awards
* locations
* certifications
* executives
* partnerships

---

# 85. NO GENERIC SAAS PATTERNS BY DEFAULT

Do not automatically add:

* logo cloud
* testimonial carousel
* pricing cards
* 3-column features
* FAQ accordion
* giant rounded CTA box
* app dashboard screenshot
* floating gradient blobs

unless the actual content requires them.

---

# 86. DESIGN QA — GENERICNESS TEST

Before completing visual work, ask internally:

> Could this exact screen belong to 100 other SaaS companies?

If yes, improve the design.

Digi02 needs specific visual logic derived from:

* engineering
* systems
* architecture
* hardware
* software
* evidence
* technical operations

---

# 87. DESIGN QA — GOLD TEST

Ask:

> Is gold currently communicating importance, or is it simply decoration?

If decorative usage dominates:

reduce it.

---

# 88. DESIGN QA — CARD TEST

Ask:

> Does this content actually need a card?

If no:

remove the card.

---

# 89. DESIGN QA — MOTION TEST

Ask:

> What does this animation explain?

If the answer is only:

> it looks cool

remove or simplify it.

---

# 90. DESIGN QA — EVIDENCE TEST

Ask:

> Does this claim have evidence nearby?

If not:

either provide real evidence or soften the claim.

---

# 91. DESIGN QA — REFERENCE TEST

Ask:

> Does this look copied from Mobile Hacking Lab or Intent HQ?

If yes:

redesign it into Digi02's own visual language.

---

# 92. DESIGN QA — MOBILE TEST

Ask:

> Was mobile intentionally designed or simply stacked?

If simply stacked:

recompose it.

---

# 93. DESIGN QA — PERFORMANCE TEST

Ask:

> Does the visual effect justify its technical cost?

If not:

remove or simplify it.

---

# 94. DESIGN QA — BRAND TEST

Ask:

> Would this still feel like Digi02 without the logo?

The long-term target is:

**yes.**

---

# 95. ABSOLUTE VISUAL PROHIBITIONS

Do NOT introduce:

* Matrix code
* random binary
* fake terminal windows
* glowing hexagons
* neon hacker graphics
* random world maps
* gold particles
* giant ambient glows
* excessive gradients
* generic circuit-board wallpaper
* luxury gold textures
* holograms
* floating 3D spheres
* generic AI brains
* giant glass cards
* pill-shaped everything

unless explicitly requested and meaningfully justified.

---

# 96. ABSOLUTE CONTENT PROHIBITIONS

Never fabricate:

* client logos
* testimonials
* certifications
* awards
* statistics
* deployment counts
* locations
* team members
* patents
* partnerships
* security claims
* performance claims
* government relationships
* operational metrics

---

# 97. ABSOLUTE UX PROHIBITIONS

Do not use:

* scroll hijacking
* autoplay audio
* hidden navigation
* hover-only critical information
* inaccessible controls
* tiny touch targets
* endless carousels
* forced animation
* excessive modal interruptions
* fake loading screens

---

# 98. TASK START PROCEDURE

Before performing each new substantial task:

### Step 1

Read the current user request carefully.

### Step 2

Read this `AGENTS.md`.

### Step 3

If visual work is involved, consult:

`docs/Digi02_Web_Design_Foundation_v1.0.docx`

### Step 4

Inspect the relevant existing implementation.

### Step 5

State a concise implementation plan.

### Step 6

Make only the necessary changes.

---

# 99. TASK COMPLETION PROCEDURE

Before declaring a task complete, verify where applicable:

```text
[ ] Build passes
[ ] Type checking passes
[ ] Lint passes
[ ] No relevant console errors
[ ] Desktop works
[ ] Tablet works
[ ] Mobile works
[ ] Focus styles work
[ ] Keyboard interaction works
[ ] Reduced-motion behavior is considered
[ ] Gold usage is restrained
[ ] No unnecessary cards were introduced
[ ] No fake data was added
[ ] No unnecessary dependency was installed
[ ] No unrelated section was modified
[ ] Work matches the current requested phase
```

---

# 100. END-OF-TASK REPORTING

At the end of each task, report clearly:

1. What was changed.
2. Which files were changed.
3. What was intentionally left untouched.
4. Which checks were run.
5. Whether all checks passed.
6. How the user can view/test the result.
7. Any known limitation.

Then STOP.

Do not continue to another phase automatically.

---

# 101. WHEN REQUIREMENTS ARE UNCLEAR

Do not guess about major:

* branding
* content
* product facts
* architecture
* navigation
* interactions

If the ambiguity could materially change the result:

ask.

For small implementation choices that do not alter the agreed design direction:

choose the most conservative option consistent with this document.

---

# 102. FINAL PRIORITY ORDER

When two possible approaches conflict, prefer:

```text
clarity
over
complexity

precision
over
decoration

real systems
over
marketing imagery

evidence
over
hype

performance
over
spectacle

accessibility
over
visual tricks

restraint
over
noise

Digi02
over
reference-site imitation
```

---

# 103. FINAL DESIGN STATEMENT

## DIGI02 / PRECISION SYSTEMS

Black canvas.

Monumental white typography.

Controlled gold.

Real technology.

System diagrams.

Technical micro-typography.

Cinematic product presentation.

Architecture-first storytelling.

Evidence over hype.

Motion that explains.

Responsive design that is intentionally recomposed.

Accessibility built in from the beginning.

Performance treated as part of the brand.

Every page should feel engineered.

---

# 104. FINAL RULE

Do not build what was not requested.

Do not imitate the reference websites.

Do not fabricate facts.

Do not sacrifice usability for animation.

Do not use gold as decoration everywhere.

Do not turn every idea into a card.

Do not let the website become generic.

The finished Digi02 website must feel:

**engineered, deliberate, technically credible, premium, restrained, modern, original and unmistakably Digi02.**

