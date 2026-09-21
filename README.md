# Digi02 website

React 19, TypeScript and Vite corporate website for Digi02, styled with Tailwind CSS 4.

## Architecture

Single production frontend:

```text
src/main.tsx → src/App.tsx → src/premium/*
```

- `src/premium/pages/` — route pages (Home, Solutions, Industries, Work, Company, Insights, Contact)
- `src/premium/components/` — layout, UI primitives, page heroes
- `src/premium/lib/` — client-side router, route metadata/SEO, phone normalisation
- `src/premium/data/content.ts` — solutions, work, insights, company data (source of truth for routes)
- `src/premium/index.css` — Tailwind 4 theme tokens and global styles

Client-side routing lives in `src/premium/lib/router.ts`. Route validity and
metadata live in `src/premium/lib/seo.ts`, which is the single source of truth
for titles, descriptions, canonicals, robots directives and social meta.

## Local development

```sh
npm ci
npm run dev
```

Open `http://localhost:5173/` for the website.

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

Unknown routes (including unknown `/solutions/*` and `/insights/*` slugs)
render the site 404 experience and receive `noindex, nofollow` metadata.

## Validation

```sh
npm ci
npm test
npm run typecheck
npm run lint
npm run build
npm audit --omit=dev --audit-level=high
```

Production browser matrix (build, serve, Playwright smoke over every
sitemap route plus invalid routes, mobile navigation, reduced motion
and axe checks):

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
SMOKE_BASE=http://127.0.0.1:4173 npm run smoke
```

GitHub Actions runs the single production CI workflow on pushes to `main`,
pull requests into `main` and manual dispatch.

## Contact form

The website does not send or persist contact-form data through a backend
service. Submitting the form prepares a project enquiry in the visitor's
email application addressed to `info@digi02.org`. The interface states this
explicitly and provides a copy fallback after preparation.

A server-side form endpoint can be connected later once its provider,
credentials, spam protection and data-retention requirements are approved.

## SEO and indexing

Every valid route receives a route-specific title, description, canonical,
robots directive, Open Graph and Twitter metadata, applied on each
client-side navigation so tags never go stale. Unknown routes receive
`noindex, nofollow`. Organization structured data is included in the
application shell.

Static indexing files are published from:

- `public/robots.txt`
- `public/sitemap.xml`

Canonical site URL: `https://digi02.org`.

## SPA deployment fallback

The repository includes:

- `vercel.json` for Vercel SPA fallback and response security headers;
- `public/_redirects` for Netlify-compatible SPA fallback;
- `public/_headers` with the corresponding static-host security headers.

If the production host changes, verify that direct requests such as
`/company` and `/solutions/skygrid` resolve to the application shell
without rewriting real static assets.
