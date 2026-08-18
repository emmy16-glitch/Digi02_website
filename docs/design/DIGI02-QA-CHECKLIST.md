# Digi02 Redesign QA Checklist

**Status: MANDATORY BEFORE MERGE**

A redesign task is not complete until this checklist is satisfied. Do not report a page as finished before verifying the merged `main` branch.

## A. Blueprint compliance

- [ ] Relevant section IDs from `DIGI02-PAGE-BLUEPRINT.md` were identified before implementation.
- [ ] Implemented section order matches the approved blueprint.
- [ ] No unapproved section was silently added.
- [ ] No approved section was silently removed.
- [ ] Copy hierarchy and visual purpose match the blueprint.
- [ ] Any intentional blueprint change was documented and approved first.

## B. Brand compliance

- [ ] Correct Digi02 logo is used.
- [ ] Logo links to Home where expected.
- [ ] Core black is `#050505`.
- [ ] Warm white is `#F7F6F2`.
- [ ] Main gold is `#C9A34A`.
- [ ] Gold-light/dark variants use approved tokens.
- [ ] No Watermelon/Melon green, logos, copy or branding remains.
- [ ] No random unapproved accent color appears.
- [ ] Typography feels editorial + operational, not generic SaaS.

## C. Asset quality

- [ ] No blurry asset is being stretched or upscaled.
- [ ] No reference screenshot is used as production artwork.
- [ ] No placeholder or temporary screenshot remains.
- [ ] Product visuals are unique and product-specific.
- [ ] Enterprise and Payment visuals are clearly distinct.
- [ ] Hero visual is clear at final rendered size.
- [ ] Team portraits are clear and correctly cropped.
- [ ] Case-study visuals communicate actual project meaning.
- [ ] SVG/HTML is used where it gives better clarity than raster artwork.
- [ ] Asset filenames are descriptive and stored in the correct directory.

## D. Desktop and responsive verification

Check all required widths:

- [ ] 1440px
- [ ] 1280px
- [ ] 1024px
- [ ] 768px
- [ ] 430px
- [ ] 390px
- [ ] 360px

At each width verify:

- [ ] No horizontal overflow.
- [ ] No overlapping cards.
- [ ] No clipped text.
- [ ] No clipped media.
- [ ] Buttons remain usable.
- [ ] Navigation remains usable.
- [ ] Hero composition remains intentional.
- [ ] Section spacing remains consistent.
- [ ] Typography remains readable.
- [ ] Mobile ordering makes sense.

## E. Interaction checks

- [ ] Logo returns to Home.
- [ ] Desktop navigation links work.
- [ ] Mobile menu opens and closes correctly.
- [ ] Active navigation state is correct.
- [ ] Primary CTAs navigate correctly.
- [ ] Secondary/tertiary CTAs navigate correctly.
- [ ] Horizontal filters work and remain scrollable on mobile.
- [ ] FAQ accordions open/close correctly.
- [ ] Keyboard focus is visible.
- [ ] Hover effects do not shift layout unexpectedly.
- [ ] Reduced-motion preferences are respected.

## F. Forms

Where applicable:

- [ ] All labels are visible.
- [ ] Required fields are clear.
- [ ] Fields are easy to use on mobile.
- [ ] Select/date controls are usable.
- [ ] Textarea has sufficient height.
- [ ] Submit CTA is clear and reachable.
- [ ] Validation/error state does not break layout.
- [ ] Contact details are accurate.
- [ ] Map/directions link works if present.

## G. Technical checks

- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Production build passes.
- [ ] Relevant page-specific regression gate passes.
- [ ] No obvious console/page errors in browser checks.
- [ ] No broken asset paths.
- [ ] No accidental unrelated page regressions.
- [ ] Production asset loading is reasonable.

## H. Visual proof

Before merge:

- [ ] Real production-build screenshot captured at 1440px.
- [ ] Real production-build screenshot captured at 390px.
- [ ] Screenshots visually inspected, not merely generated.
- [ ] If page contains important intermediate/tablet layout, 768px was visually inspected too.
- [ ] Screenshot matches the approved blueprint more closely than the previous implementation.

## I. Git / merge discipline

- [ ] Work was done on a feature branch rather than directly on `main`.
- [ ] Diff scope is limited to the intended page/system.
- [ ] Pull request clearly describes the design sections changed.
- [ ] Relevant checks are green before merge, or any intentionally non-blocking global test is explicitly understood.
- [ ] PR is actually merged.
- [ ] `main` is re-read after merge.
- [ ] Final merged commit SHA is recorded.
- [ ] Only after `main` verification is the user told the implementation is complete.

## J. Final sign-off statement

Before saying "done", the implementer should be able to truthfully state:

> The approved Digi02 blueprint was followed, assets are production-quality, desktop/mobile renders were visually inspected, relevant checks passed, the PR was merged, and the final files were verified on `main`.
