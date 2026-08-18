# Digi02 Asset Rules

**Status: LOCKED / APPROVED BASELINE**

This file exists because image quality and image reuse have previously caused major visual inconsistency. These rules are mandatory for all future Digi02 implementation work.

## 1. References are not production assets

The Watermelon UI screenshots, component-library screenshots, Haikei examples, and other supplied inspiration are design references only.

Do not:

- crop a reference screenshot and use it as a production image;
- copy Watermelon/Melon branding, green palette, logos, names or UI copy;
- embed reference-page screenshots into Digi02 pages;
- treat a reference screenshot as a substitute for a properly built component or visual.

Use references for:

- layout;
- spacing;
- visual hierarchy;
- component proportions;
- interaction patterns;
- image treatment ideas;
- section rhythm.

## 2. Never upscale weak source images

Do not enlarge a small or blurry screenshot to fill a hero or product card.

If a visual is not clear enough at its final rendered size:

1. Find the original high-resolution Digi02 source if one exists.
2. Rebuild the visual as HTML/SVG if it is interface/data driven.
3. Create a fresh Digi02-specific visual if the concept is illustrative.
4. Replace the asset rather than hiding the problem with overlays, blur, darkness or cropping.

## 3. Product visuals must be unique

Do not reuse one dashboard/image for multiple products.

Required distinct visual directions:

- SkyGrid — UAV, mapping, inspection, mission/field operations;
- DigiVolt — mobility, charging, energy infrastructure;
- Enterprise Systems — workflows, ERP/business operations/reporting;
- Payment Systems — POS, transaction, settlement, reconciliation;
- E-Management — institutional workflows, approvals, citizen/service delivery;
- Custom Software — engineering/product system, modular interfaces, application architecture.

If two products look visually interchangeable, the asset system is wrong.

## 4. Preferred asset types

### SVG / HTML/CSS
Preferred for:

- diagrams;
- operational maps;
- network graphics;
- data-flow visuals;
- abstract waves;
- simple dashboards reconstructed for marketing;
- icon systems;
- decorative geometry.

Benefits: crisp at every size, controllable, lightweight, responsive.

### High-resolution photography
Use only when it communicates a real environment or operation.

Requirements:

- clear source;
- consistent crop;
- correct aspect ratio;
- no visible compression artifacts;
- no random stock-photo aesthetic that conflicts with Digi02's operational tone.

### Product screenshots
Use when the product UI itself is evidence.

Requirements:

- original/full-resolution source;
- crop intentionally around the point being explained;
- do not stretch;
- do not use a screenshot as generic decoration;
- detailed screenshots belong mainly on product/case-study pages rather than every homepage card.

## 5. Hero asset rules

Hero visuals must remain clear at desktop and mobile sizes.

Before merge, test at minimum:

- 1440px;
- 1280px;
- 1024px;
- 768px;
- 430px;
- 390px;
- 360px.

Mobile may require a different crop/composition. Do not merely squeeze the desktop artwork.

Hero text must retain strong contrast without darkening the entire image until the visual becomes unreadable.

## 6. Team photography

Use the real Digi02 team images.

Approved treatment:

- tall rectangular portraits;
- consistent aspect ratio;
- clean crop;
- no circular portraits for the approved Company design;
- subtle desaturation is allowed;
- hover may gently restore brightness/color or add a restrained gold border.

Do not replace real team members with stock portraits.

## 7. Case-study imagery

Case studies should communicate the project, not merely reuse the same brand background.

Each case-study visual should answer at least one of these questions:

- What environment was being operated?
- What system was built?
- What workflow was improved?
- What information became visible?
- What operational result did the system support?

A visually attractive image with no project meaning is insufficient.

## 8. Abstract Digi02 graphic language

Haikei/wave references may inspire a reusable motif, but production graphics must be recreated in Digi02 colors.

Approved palette:

- `#050505`
- `#0B0B0C`
- `#111112`
- `#C9A34A`
- `#E0BC67`

Use sparingly for:

- footer horizon;
- CTA backgrounds;
- section transitions;
- quiet data-flow decoration.

## 9. Naming and storage

Production assets should use meaningful repository names.

Recommended structure:

```text
src/assets/
  brand/
  generated/
  skygrid/
  digivolt/
  enterprise/
  payments/
  e-management/
  work/
  team/
```

Avoid names such as `image1.png`, `final2.webp`, `screenshot-new.png`.

Prefer descriptive names such as:

- `skygrid-field-inspection.webp`
- `payments-pos-settlement.webp`
- `enterprise-operations-overview.webp`
- `thermal-plant-inspection-map.svg`

## 10. Reference archive rule

Design-reference screenshots must not live inside production asset directories.

If reference images are later committed to the repository, they belong under a clearly separated path such as:

```text
docs/design/references/
```

with a note that they are inspiration only and must not be imported by application code.

## 11. Pre-merge asset checklist

Before any visual change is merged:

- [ ] Source is clear at final rendered size.
- [ ] No reference screenshot is used as production art.
- [ ] No Watermelon/Melon branding remains.
- [ ] No low-resolution asset has been enlarged.
- [ ] No product visual is duplicated across unrelated products.
- [ ] Desktop crop has been visually inspected.
- [ ] Mobile crop/composition has been visually inspected.
- [ ] Asset filename is descriptive.
- [ ] Image loading does not introduce layout shift or broken paths.
- [ ] The visual communicates actual Digi02/product/project meaning.