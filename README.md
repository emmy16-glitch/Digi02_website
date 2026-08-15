# Digi02 website

React, TypeScript and Vite corporate website for Digi02.

## Local development

```sh
npm install
npm run dev
```

Open `http://localhost:5173/` for the website.

The internal design-foundation preview remains available at `/foundation` and is intentionally excluded from search indexing.

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
- `/contact`

Unknown routes render the site 404 experience and receive `noindex, nofollow` metadata.

## Validation

```sh
npm run typecheck
npm run lint
npm run build
```

GitHub Actions also runs route, responsive and production-readiness checks on the staged implementation branches.

## Contact form

The website does not currently send or persist contact-form data through a backend service. Submitting the form prepares a project enquiry in the visitor's email application addressed to `info@digi02.org`. The interface states this explicitly and provides a copy fallback after preparation.

A server-side form endpoint can be connected later once its provider, credentials, spam protection and data-retention requirements are approved.

## SEO and indexing

Public routes receive route-specific title, description, canonical, Open Graph and Twitter metadata. Organization structured data is included in the application shell.

Static indexing files are published from:

- `public/robots.txt`
- `public/sitemap.xml`

Canonical site URL: `https://digi02.org`.

## SPA deployment fallback

The repository includes:

- `vercel.json` for Vercel filesystem-first SPA fallback;
- `public/_redirects` for Netlify-compatible SPA fallback;
- `public/_headers` with baseline static-host security headers.

If the production host changes, verify that direct requests such as `/company` and `/solutions/skygrid` resolve to the application shell without rewriting real static assets.
