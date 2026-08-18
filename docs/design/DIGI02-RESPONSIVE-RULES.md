# Digi02 Responsive Rules

**Status: LOCKED / APPROVED BASELINE**

Responsive behavior must be designed deliberately. Desktop layouts must not simply be squeezed until they wrap.

## 1. Required verification widths

Every major page change must be checked at:

- 1440px — wide desktop
- 1280px — desktop
- 1024px — compact desktop
- 768px — tablet
- 430px — large phone
- 390px — common mobile / Android/iPhone width
- 360px — small phone

## 2. Global rules

- No horizontal overflow.
- No clipped headings, buttons, forms or media.
- Minimum interactive target should be approximately 44px high/wide where practical.
- Body copy must remain readable; do not preserve desktop-scale tiny labels on mobile.
- Mobile section order must be intentional.
- Important content must not disappear solely because the screen is smaller.
- Decorative media may simplify on mobile, but meaning must remain.
- Use responsive spacing rather than fixed desktop padding.

## 3. Navigation

Desktop:

- full navigation links;
- visible `Discuss your project` CTA;
- logo on left.

Tablet/mobile:

- logo + menu trigger;
- full-screen or large black navigation panel;
- links have generous spacing;
- CTA remains accessible;
- menu must be keyboard usable and dismissible.

## 4. Hero behavior

Heroes require separate mobile art direction.

Desktop:

- large editorial headline;
- visual may occupy substantial right/background area;
- copy and visual can coexist horizontally.

Mobile:

- copy takes priority;
- visual may move behind/below or use a mobile-specific crop;
- text contrast must remain strong without covering the image with a nearly opaque black layer;
- CTAs stack only when necessary;
- origin/trust signals remain readable.

Never assume `background-size: cover` alone is sufficient.

## 5. Grid transformations

Use these patterns intentionally:

### 3-column content
Desktop: 3 columns.
Tablet: 2 columns.
Mobile: 1 column.

### 3 + 2 team layout
Desktop: first row 3, second row 2 centered.
Tablet: 2 columns with final card aligned deliberately.
Mobile: 1 column.

### 4-card capability row
Desktop: 4 columns.
Tablet: 2 x 2.
Mobile: 1 column or 2 columns only if copy remains comfortably readable.

### 6-card industries grid
Desktop: 3 x 2.
Tablet: 2 x 3.
Mobile: 1 column.

## 6. Feature splits

Desktop:

- copy and visual can sit side by side.

Tablet:

- maintain split only if both columns remain readable.

Mobile:

- stack deliberately;
- copy usually first, visual second;
- do not leave a giant empty visual region above critical copy;
- layered interface graphics should scale/recompose rather than shrink to illegible thumbnails.

## 7. Metric strips

Desktop:

- horizontal strip with restrained dividers.

Tablet:

- 2 x 2 where needed.

Mobile:

- 2 columns or 1 column depending label length;
- ISO 27001 must not overflow;
- values and labels maintain clear hierarchy.

## 8. Filters / category navigation

Desktop: horizontal row.

Mobile: horizontally scrollable chips with visible selected state.

Do not force all filters into multiple cramped lines unless the design explicitly calls for it.

## 9. Forms

Desktop:

- two-column field pairs where appropriate.

Mobile:

- one field per row;
- labels remain above fields;
- input height remains comfortable;
- textarea is large enough to use;
- submit button is full width or clearly prominent;
- no field is narrower than comfortable touch/input size.

## 10. FAQ accordions

Desktop:

- may use a centered constrained column or two-column arrangement only if questions remain easy to scan.

Mobile:

- one column;
- entire row is clickable;
- plus/minus indicator remains visible;
- expanded copy does not overflow.

## 11. Work / case-study cards

Desktop:

- featured project may use 60/40 split;
- grid projects may be 3 columns.

Tablet:

- 2 columns.

Mobile:

- 1 column;
- text overlay must not hide critical visual content;
- if overlay becomes crowded, move copy below the image.

## 12. Footer

Desktop:

- logo/positioning + navigation columns + contact details;
- large background wordmark may appear.

Tablet/mobile:

- collapse columns intentionally;
- keep contact details easy to find;
- large background wordmark must not create overflow;
- legal links remain readable.

## 13. Typography checks

At every required width verify:

- headings do not clip;
- line breaks still read naturally;
- no orphaned one-word lines caused by rigid `<br>` use;
- body copy remains comfortably readable;
- technical labels are not too small;
- CTA labels do not wrap awkwardly.

## 14. Motion and performance

- Respect `prefers-reduced-motion`.
- Avoid heavy continuous animation on mobile.
- SVG/data animation should remain smooth without blocking interaction.
- Avoid large raster assets when SVG or CSS can communicate the same idea more clearly.

## 15. Responsive QA rule

A page is not considered complete because it looks correct at 1440px. It must pass all required widths and the checks in `DIGI02-QA-CHECKLIST.md` before merge.