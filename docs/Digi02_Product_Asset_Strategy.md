# Digi02 Product Asset Strategy

Status: source of truth for website product assets  
Applies to: homepage, product pages, capability pages and campaign material  
Last reviewed: 14 August 2026

## 1. Purpose

Digi02 should present one coherent company without making every product look like the same technical diagram. Consistency comes from typography, spacing, restraint and production quality. The subject matter must determine the visual treatment.

The working rule is:

> One company. Different subject matter. Consistent art direction.

This document governs what can be shown as evidence, how conceptual material must be labelled and which real assets should be collected next.

## 2. Asset authenticity levels

Use exactly one of these levels for every product asset.

### LEVEL A — REAL PRODUCT EVIDENCE

Actual product screenshots, interfaces, deployments, photographs or approved company material.

- May be presented as proof.
- Must not be regenerated, recoloured or visually altered in a way that changes the product.
- Interface values visible inside a screenshot must not be repeated as Digi02 performance claims unless separately verified.

### LEVEL B — PRODUCT VISUALIZATION

Professionally designed interface or system visualizations that explain an existing or developing product when final screenshots are unavailable.

- Must be labelled `Product visualization`, `Interface direction`, `System direction` or `Illustrative`.
- Must not be described as a production screenshot, customer deployment or live system.
- May show qualitative states and safe interface structure; avoid impressive-looking metrics.

### LEVEL C — EDITORIAL / BRAND VISUAL

Typography, diagrams, maps, pathways, curriculum structures, community graphics and other non-photographic storytelling devices.

- Must communicate the initiative without imitating software evidence.
- Must be labelled as editorial, community or learning structure where ambiguity is possible.
- Should be replaced or supported by authentic photography and content as those materials become available.

## 3. Content status labels

Asset level and product maturity are separate. Use the most honest known status:

| Status | Use |
| --- | --- |
| Built product | A working product with authentic product evidence. |
| In development | A product being developed; do not imply general availability. |
| Solution capability | A capability Digi02 can deliver; do not imply a single packaged product. |
| Community initiative | A community programme or platform, not software. |
| Learning initiative | A practical learning initiative, not a generic course marketplace. |

Do not add rankings, customer counts, deployment totals, market coverage, performance statistics or revenue claims without verified source material.

## 4. Global image and illustration policy

### Use

- Real product UI, hardware, deployments and company-approved photography first.
- Designed interface visualizations when screenshots are unavailable.
- Editorial structures for community and learning stories.
- Existing Digi02 black, near-white and controlled gold as the surrounding website system.
- Product-specific colours only inside authentic product assets or an approved product identity.
- Clear captions that state whether an asset is real or illustrative.

### Do not use

- Fake corporate teams smiling at laptops.
- Fake African developers gathered around screens.
- Fake drone operators, EV drivers, students or community crowds.
- Generic handshakes, offices, server rooms or stock classrooms.
- Futuristic holograms, humanoid robots, neon cities or abstract AI brains.
- Purple/blue AI gradients, glass dashboards or generic 3D SaaS illustrations.
- Competitor imagery, DJI photography, Bolt/Uber screens or unlicensed web images.
- Traditional placeholders such as `IMAGE COMING SOON`.

If a real asset does not exist, the page should explain the product with a clearly labelled Level B or Level C composition.

## 5. Cross-product art direction

| Product | Primary visual grammar | Recommended surface | Primary motion |
| --- | --- | --- | --- |
| SkyGrid | Cinematic real product UI | Dark / cinematic | Screenshot and stage reveals |
| DigiVolt | Mobility route and booking visualization | Near-white or split light surface | Route and booking-state progression |
| Custom ERP / POS | Dense operational workspace | Structured dark or neutral | Operational update cascade |
| DigiNorth | Regional editorial and community pathways | Near-white / editorial | Gentle editorial reveal |
| Emerging Tech Academy | Learning path and builder journey | Dark or neutral | Learning-path progression |

Do not solve consistency by repeating black grids, central nodes, gold connector lines, floating cards or generic dashboards across all five products.

## 6. Product strategies

### 6.1 SkyGrid

| Field | Direction |
| --- | --- |
| Product status | Built product |
| Authenticity level | LEVEL A — REAL PRODUCT EVIDENCE |
| Current asset type | Four real WebP interface screenshots: mission planning, route planning, mission operations/readiness and command analytics. |
| Preferred treatment | Large meaningful crops; map imagery at cinematic scale; interface-detail crops; PLAN / PREPARE / OPERATE / REVIEW sequence; surrounding Digi02 page remains black, white and gold while SkyGrid purple remains untouched. |
| Forbidden treatment | Recolouring purple to gold; regenerating the UI; tiny screenshot cards; laptop/browser mockups; decorative drones; fake telemetry overlays; black-grid diagrams replacing the product. |
| Homepage usage | Lead with a large route-planning screen and one supporting operations or analytics crop. Label it as real product evidence. Keep interface details readable. |
| Future product-page usage | Use all four screenshots in a controlled sequence: mission plan, readiness, operation and review. Add close crops only when they clarify a real workflow. |
| Motion approach | Crossfade or reveal between actual screenshots; restrained crop movement; optional sticky PLAN / PREPARE / OPERATE / REVIEW stages. No invented live telemetry. |
| Photography / illustration policy | Prefer actual UAV deployment, operator and field photography when available. Do not add generic drone photography merely to decorate the interface. |
| Missing real material | Current production screenshots with approved data; mobile/tablet views if supported; real deployment photography; aircraft/hardware photography; short approved workflow capture; verified product copy and availability status. |

Current files:

- `src/assets/skygrid/gcs-mission-planner.c272911552e0.webp`
- `src/assets/skygrid/uav-route-planner.44f1261fab22.webp`
- `src/assets/skygrid/mission-operation-center.a222b4fdca82.webp`
- `src/assets/skygrid/command-overview-analytics.94e0affaa78d.webp`

The screenshots are authentic product material, but values visible inside them must not be quoted as verified Digi02 operating metrics without separate confirmation.

### 6.2 DigiVolt

| Field | Direction |
| --- | --- |
| Product status | In development |
| Authenticity level | LEVEL B — PRODUCT VISUALIZATION |
| Current asset type | HTML/CSS mobility visualization showing a route, booking flow and qualitative readiness states. |
| Preferred treatment | Abstract map surface; pickup and destination; EV indicator; booking state; driver assignment; rider/driver framing; BOOK → MATCH → RIDE → ARRIVE sequence. Use a lighter surface to separate mobility from Digi02's enterprise visuals. |
| Forbidden treatment | Bolt/Uber imitation; fake production screenshots; fake people; unsupported cities, prices, fleet size or ride counts; neon streets; concept-car styling; decorative charging metrics. |
| Homepage usage | One clear mobility sequence with `LEVEL B / PRODUCT VISUALIZATION` visible near the copy. Keep the value statement short and explicitly say the platform is in development. |
| Future product-page usage | Separate rider, driver and operations views only after those experiences are defined. Use a journey sequence before feature lists. |
| Motion approach | Draw route progress; change BOOK / MATCH / RIDE / ARRIVE state; keep movement short, stable and reversible under reduced-motion preferences. |
| Photography / illustration policy | Do not use fake drivers or riders. A future vehicle image may use neutral commercial automotive presentation with no third-party marks. |
| Missing real material | Approved product identity; rider screens; driver screens; operations/fleet screens; confirmed workflow and terminology; authentic vehicle photography or commissioned neutral vehicle asset. |

### 6.3 Digi02 Custom ERP / POS

| Field | Direction |
| --- | --- |
| Product status | Solution capability |
| Authenticity level | LEVEL B — PRODUCT VISUALIZATION |
| Current asset type | HTML/CSS enterprise workspace showing inventory, transaction flow and reporting structure. |
| Preferred treatment | Practical enterprise workspace; POS transaction → inventory → operations → finance/reporting; dense enough to feel useful; calm tables, rows and operational states. |
| Forbidden treatment | Futuristic dashboards; fintech neon; crypto styling; random charts; fake impressive metrics; pretending one standardized module set exists for every customer. |
| Homepage usage | Show one coherent operational path and label it as a system visualization. Describe the capability as connected business systems, not a finished universal SaaS product. |
| Future product-page usage | Use anonymized authentic screens by deployment or system type. Explain how modules connect and distinguish configurable capability from confirmed implementation. |
| Motion approach | Cascade a sale into stock, operations and reporting states. Avoid animated chart decoration. |
| Photography / illustration policy | Interface evidence is preferred. Later photography may show real POS hardware or an approved customer environment with permission. |
| Missing real material | Anonymized ERP/POS screenshots; confirmed modules; POS transaction flow; inventory and reporting views; branch or location management screen; real hardware photography; approved case context. |

If safe sample values become necessary, mark the composition `DEMO` and ensure the values are not presented as Digi02 business results.

### 6.4 DigiNorth

| Field | Direction |
| --- | --- |
| Product status | Community initiative |
| Authenticity level | LEVEL C — EDITORIAL / BRAND VISUAL |
| Current asset type | Typographic community composition with a Northern Kaduna / Nigeria cue and discipline labels. |
| Preferred treatment | Human editorial typography; Kaduna and Northern Nigeria context; community pathways; disciplines, event structures and names when verified; more near-white space; warmer pacing. |
| Forbidden treatment | SaaS dashboards; central system-core diagrams; fake crowd photography; generic innovation language; unverified regional leadership claims or rankings. |
| Homepage usage | Use the plain positioning: a community for people building technology in Northern Nigeria. Present disciplines and the meet/share/build pathway without pretending it is software. |
| Future product-page usage | Lead with real event photography and actual programme material. Support with event schedules, community pathways, real posters and verified activity. |
| Motion approach | Gentle editorial sequence: location, people/disciplines, then pathway. Avoid technical node activation. |
| Photography / illustration policy | Wait for real community photography. Prioritize natural event, workshop, speaker, member and venue images with permission; do not synthesize people. |
| Missing real material | Real event photography; workshop photography; speaker images; member portraits; venue/community images; real event posters; community activity screenshots. |

Recommended copy direction:

> A community for people building technology in Northern Nigeria.

### 6.5 Emerging Tech Academy

| Field | Direction |
| --- | --- |
| Product status | Learning initiative |
| Authenticity level | LEVEL C — EDITORIAL / BRAND VISUAL |
| Current asset type | HTML/CSS learning architecture showing workshop, guided build and project review. |
| Preferred treatment | LEARN → BUILD → REVIEW → SHIP; practical project milestones; mentor/review checkpoints; proposed tracks clearly marked as proposed until confirmed. |
| Forbidden treatment | Fake students; graduation-cap illustrations; LMS dashboards; stock classrooms; generic course marketplace layouts; unsupported course or career claims. |
| Homepage usage | State `Learn technology by building with it.` Show a vertical or horizontal builder journey and identify it as a learning model. |
| Future product-page usage | Show confirmed workshops, projects, tool stacks, cohort structure and build outcomes. Use real learner work and workshop photography when permission exists. |
| Motion approach | Progress through learning stages; reveal checkpoints and outcomes in sequence; mobile becomes a vertical path. |
| Photography / illustration policy | Prefer real workshops, mentors, project work and hands-on sessions. Do not synthesize students. Use learning graphics while photography is unavailable. |
| Missing real material | Real workshop/project photography; confirmed programmes and track names; facilitator material; learner project screenshots; workshop schedule; review process; approved outcomes or testimonials. |

Recommended copy direction:

> Learn technology by building with it.

## 7. Homepage asset rules

- The product selector may remain a shared navigation device, but the active stage must change with the subject matter.
- Display authenticity level and content status separately.
- SkyGrid should occupy the most visual space because it has Level A evidence.
- Level B and C visuals need explicit labels; they must never inherit a `real product` caption.
- DigiNorth must not use a system-core or hub-and-spoke composition.
- Do not repeat the same dark card, same diagram geometry or same motion for all five states.
- Keep product copy short enough that the asset remains the evidence.

## 8. Responsive asset rules

| Product | Mobile treatment |
| --- | --- |
| SkyGrid | Use a meaningful mission-planning crop with a secondary detail only when it remains readable. Never shrink an entire desktop interface into illegibility. |
| DigiVolt | Turn the route vertical or compact it above a stacked booking and ride-state panel. |
| Custom ERP / POS | Stack operational navigation, flow and rows; allow horizontal scrolling only for bounded enterprise controls. |
| DigiNorth | Use an editorial stack: location, statement, disciplines, pathway. Avoid a compressed node map. |
| Emerging Tech Academy | Use a vertical LEARN / BUILD / REVIEW / SHIP progression. |

All interactive selectors must retain 44px touch targets, visible focus and non-hover access. Reduced-motion mode must preserve the complete story in a static state.

## 9. Asset production and file organization

- Keep current SkyGrid evidence in `src/assets/skygrid/`.
- Create `digivolt/`, `enterprise/`, `diginorth/` or `academy/` only when a real file is ready to enter the repository.
- Use descriptive names: `{product}-{workflow}-{viewport}-{version}.{ext}`.
- Prefer WebP or AVIF for website photography and screenshots; retain an approved master outside the web build.
- Record asset owner, source, approval status, date and usage restrictions alongside production handoff.
- Do not download unapproved external images to fill gaps.

## 10. Future Generated Asset Briefs

Generated assets are not evidence. Any future generated material requires explicit approval and must be presented as marketing/editorial imagery, never as a real deployment.

### DigiVolt vehicle brief

- **Product:** DigiVolt
- **Purpose:** Homepage mobility visual supporting a Level B route/interface composition.
- **Composition:** Clean modern electric vehicle from an elevated three-quarter perspective with sufficient negative space for route and interface overlays.
- **Aspect ratio:** 16:10 desktop master, with a planned 4:5 mobile crop.
- **Subject:** Realistically proportioned, unbranded electric vehicle; no people required.
- **Background:** Minimal urban context or controlled studio/editorial setting.
- **Lighting:** Natural commercial automotive lighting; calm and premium, not theatrical.
- **Reserved space:** Open area above or beside the vehicle for route state and concise copy.
- **Must not appear:** Tesla, BYD, Hyundai, Bolt, Uber or other third-party marks; fake driver portraits; neon cities; glowing wheels; concept-car proportions; holograms; AI-futurist styling.

### ERP / POS assessment

A generated image is not recommended. Invest in a strong Level B interface composition now and replace it with anonymized Level A product screens and real POS hardware photography when available.

### DigiNorth assessment

A generated people image is not recommended. Wait for real community, event, workshop, speaker and venue photography. Continue with Level C editorial typography and regional context until then.

### Emerging Tech Academy assessment

A generated student image is not recommended. Use learning architecture, project milestones and real learner work; prioritize authentic workshop and project photography.

## 11. Collection priorities

- **P0:** Keep all four SkyGrid screenshots correctly presented and obtain approved current versions where possible.
- **P1:** Collect DigiVolt rider, driver and operations screenshots when the product is ready.
- **P1:** Collect anonymized ERP/POS transaction, inventory and reporting screens.
- **P1:** Photograph real DigiNorth events, workshops, speakers, members and venues.
- **P1:** Photograph Emerging Tech Academy workshops and completed project work.
- **P2:** Commission additional marketing/editorial assets only after the evidence gaps above are addressed.

## 12. Production checklist

| Product | Current real assets | Current visualization type | Missing assets | Priority | Future action |
| --- | --- | --- | --- | --- | --- |
| SkyGrid | Four real product UI WebP screenshots covering mission planning, route planning, operations/readiness and analytics. | LEVEL A — REAL PRODUCT EVIDENCE; cinematic UI crop with secondary detail. | Current approved screens, mobile views, deployment and hardware photography, workflow capture. | P0 | Confirm approval/data treatment, keep product colours intact and expand PLAN / PREPARE / OPERATE / REVIEW evidence. |
| DigiVolt | None found. | LEVEL B — PRODUCT VISUALIZATION; mobility route and booking-state composition. | Rider, driver and operations screens; confirmed workflow; approved identity; authentic vehicle asset. | P1 | Replace Level B states with authentic screens as development reaches reviewable milestones. |
| Custom ERP / POS | None found. | LEVEL B — PRODUCT VISUALIZATION; structured enterprise operations workspace. | Anonymized transaction, inventory, reporting and management screens; hardware and approved case context. | P1 | Collect representative deployment evidence and document which modules are confirmed per system. |
| DigiNorth | None found. | LEVEL C — EDITORIAL / BRAND VISUAL; regional community typography and pathways. | Event/workshop photography, speakers, member portraits, venues, posters and activity captures. | P1 | Build a permission-cleared community photo library and replace conceptual graphics progressively. |
| Emerging Tech Academy | None found. | LEVEL C — EDITORIAL / BRAND VISUAL; practical learning progression. | Workshop/project photography, confirmed programmes, facilitator material, learner work and approved outcomes. | P1 | Document real learning activity and replace generic learning structures with confirmed programme evidence. |
