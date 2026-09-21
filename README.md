# Digi02 website

React 19, TypeScript, Tailwind CSS and Vite corporate website for Digi02.

The production application is intentionally kept in one implementation:

- `src/App.tsx` — routing, route metadata and application shell
- `src/premium/` — current UI, pages, content and styles
- `public/` — static images, indexing files and hosting configuration

## Local development

```sh
npm ci
npm run dev
```

Open `http://localhost:5173/`.

## Public routes

- `/`
- `/solutions`
- `/solutions/skygrid`
- `/solutions/digivolt`
- `/solutions/enterprise-systems`
- `/solutions/e-management`
- `/solutions/payroll-automation`
- `/solutions/payment-systems`
- `/solutions/custom-software`
- `/industries`
- `/work`
- `/company`
- `/insights`
- `/insights/erp-solutions-nigeria`
- `/insights/payroll-solutions-nigeria`
- `/insights/payment-solutions-nigeria`
- `/insights/uav-autopilot-nigeria`
- `/contact`
- `/privacy`

Unknown routes and unknown solution/insight slugs render the site 404 experience and receive `noindex, nofollow` metadata.

## Validation

Run the same static checks used by CI:

```sh
npm test
npm run typecheck
npm run lint
npm run build
```

The single GitHub Actions production workflow also starts the built preview and validates the complete route set at phone and desktop widths with Playwright, serious/critical Axe accessibility checks, metadata checks, broken-image checks, mobile-menu interaction checks, reduced-motion checks and DigiVolt store-link checks.

## Contact form

The website does not send or persist contact-form data through a backend service. Submitting the form prepares a project enquiry in the visitor's email application addressed to `info@digi02.org`. The interface states this explicitly and provides a copy fallback.

A server-side endpoint can be connected later once its provider, credentials, spam protection and data-retention requirements are approved.

## SEO and indexing

Every valid route receives a route-specific title, description, canonical URL, robots directive, Open Graph metadata and Twitter metadata. Unknown routes receive `noindex, nofollow`.

Organization structured data is included in `index.html`.

Static indexing files:

- `public/robots.txt`
- `public/sitemap.xml`

Canonical site URL: `https://digi02.org`.

## SPA deployment fallback

The repository includes:

- `vercel.json` for Vercel SPA fallback and response security headers
- `public/_redirects` for Netlify-compatible SPA fallback
- `public/_headers` with corresponding static-host security headers

If the production host changes, verify that direct requests such as `/company` and `/solutions/skygrid` resolve to the application shell without rewriting real static assets.
