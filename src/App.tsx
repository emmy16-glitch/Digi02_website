import { useEffect } from 'react'
import { Footer, Header } from '@/premium/components/layout'
import { useRoute, useScrollTopOnRoute, linkProps } from '@/premium/lib/router'
import { getInsight, getSolution } from '@/premium/data/content'
import CompanyPage from '@/premium/pages/Company'
import ContactPage from '@/premium/pages/Contact'
import Home from '@/premium/pages/Home'
import { IndustriesPage, WorkPage } from '@/premium/pages/Industries'
import { InsightArticlePage, InsightsPage } from '@/premium/pages/Insights'
import { SolutionDetailPage, SolutionsPage } from '@/premium/pages/Solutions'
import { Btn, Container, Eyebrow, GridBackdrop, Reveal } from '@/premium/components/ui'

const SITE_URL = 'https://digi02.org'
const DEFAULT_DESCRIPTION =
  'Digi02 builds enterprise systems, payment and payroll infrastructure, e-management platforms and UAV mission software for organisations across Nigeria and beyond.'

type RouteMeta = {
  title: string
  description: string
  noIndex?: boolean
  type?: 'website' | 'article'
}

const STATIC_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Digi02 — Software Engineered for Operations | Kaduna, Nigeria',
    description: DEFAULT_DESCRIPTION,
  },
  '/solutions': {
    title: 'Solutions — Digi02',
    description:
      'Explore Digi02 solutions across SkyGrid aerial systems, DigiVolt mobility, enterprise platforms, e-management, payroll, payments and custom software.',
  },
  '/industries': {
    title: 'Industries — Digi02',
    description:
      'See how Digi02 applies operational technology across government, education, retail, hospitality, healthcare, agriculture, security, mobility and energy.',
  },
  '/work': {
    title: 'Our Work — Digi02',
    description:
      'Explore Digi02 work across UAV mission operations, payments, payroll and institutional workflow systems.',
  },
  '/company': {
    title: 'Company — Digi02',
    description:
      'Digi02 Software Solutions is a Kaduna-based technology company engineering dependable operational systems for organisations in Nigeria and beyond.',
  },
  '/insights': {
    title: 'Insights — Digi02',
    description:
      'Practical Digi02 writing on enterprise systems, payroll, payments and aerial operations in Nigeria.',
  },
  '/contact': {
    title: 'Contact — Digi02',
    description:
      'Discuss a project with Digi02 at No. 2, The Hub, Industrial Area, Farin Gida, Mando, Kaduna, Nigeria.',
  },
  '/privacy': {
    title: 'Privacy Policy — Digi02',
    description:
      'Read how the Digi02 website handles contact enquiries and personal information.',
  },
}

function getRouteMeta(path: string): RouteMeta {
  const staticMeta = STATIC_META[path]
  if (staticMeta) return staticMeta

  if (path.startsWith('/solutions/')) {
    const solution = getSolution(path.replace('/solutions/', ''))
    if (solution) {
      return {
        title: `${solution.name} — Digi02`,
        description: solution.summary,
      }
    }
  }

  if (path.startsWith('/insights/')) {
    const insight = getInsight(path.replace('/insights/', ''))
    if (insight) {
      return {
        title: `${insight.title} — Digi02 Insights`,
        description: insight.excerpt,
        type: 'article',
      }
    }
  }

  return {
    title: 'Page Not Found — Digi02',
    description: DEFAULT_DESCRIPTION,
    noIndex: true,
  }
}

function ensureMeta(selector: string, attribute: 'name' | 'property', key: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }
  return tag
}

function ensureCanonical() {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  return link
}

function applyRouteMeta(path: string) {
  const meta = getRouteMeta(path)
  const canonical = `${SITE_URL}${path === '/' ? '/' : path}`
  const robots = meta.noIndex ? 'noindex, nofollow' : 'index, follow'

  document.title = meta.title
  ensureMeta('meta[name="description"]', 'name', 'description').content = meta.description
  ensureMeta('meta[name="robots"]', 'name', 'robots').content = robots
  ensureMeta('meta[property="og:title"]', 'property', 'og:title').content = meta.title
  ensureMeta('meta[property="og:description"]', 'property', 'og:description').content = meta.description
  ensureMeta('meta[property="og:type"]', 'property', 'og:type').content = meta.type ?? 'website'
  ensureMeta('meta[property="og:site_name"]', 'property', 'og:site_name').content = 'Digi02'
  ensureMeta('meta[property="og:url"]', 'property', 'og:url').content = canonical
  ensureMeta('meta[name="twitter:card"]', 'name', 'twitter:card').content = 'summary'
  ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title').content = meta.title
  ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description').content = meta.description
  ensureCanonical().href = canonical
}

function PrivacyPage() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[68px] lg:pt-[76px]">
      <GridBackdrop className="opacity-50" />
      <Container className="relative">
        <div className="py-24 lg:py-32">
          <Reveal>
            <Eyebrow className="justify-center">Privacy Policy</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-8 text-center text-[clamp(2rem,5vw,3.5rem)] text-bone">Privacy Policy</h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-[1.0625rem] leading-[1.8] font-light text-soft">
              The contact form on this website does not submit, transmit, store, or add email addresses anywhere.
              Submitting the form opens your own email application with the enquiry prepared and addressed to
              info@digi02.org — no email was sent or stored by the site itself.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[68px] lg:pt-[76px]">
      <GridBackdrop className="opacity-50" />
      <Container className="relative">
        <div className="flex flex-col items-center py-28 text-center lg:py-40">
          <Reveal>
            <Eyebrow className="justify-center">Error 404</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-8 text-[clamp(2.2rem,6vw,4rem)] leading-[1.05] text-bone">
              This page is not
              <span className="display block text-gold italic">part of the system.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Btn to="/" variant="primary" arrow>
                Back to home
              </Btn>
              <Btn to="/solutions" variant="ghost">
                View solutions
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-14">
              <a {...linkProps('/contact')} className="label text-mute transition-colors hover:text-gold">
                Or contact Digi02 →
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function View({ path }: { path: string }) {
  if (path === '/') return <Home />
  if (path === '/solutions') return <SolutionsPage />
  if (path.startsWith('/solutions/')) {
    const slug = path.replace('/solutions/', '')
    return getSolution(slug) ? <SolutionDetailPage slug={slug} /> : <NotFound />
  }
  if (path === '/industries') return <IndustriesPage />
  if (path === '/work') return <WorkPage />
  if (path === '/company') return <CompanyPage />
  if (path === '/insights') return <InsightsPage />
  if (path.startsWith('/insights/')) {
    const slug = path.replace('/insights/', '')
    return getInsight(slug) ? <InsightArticlePage slug={slug} /> : <NotFound />
  }
  if (path === '/contact') return <ContactPage />
  if (path === '/privacy') return <PrivacyPage />
  return <NotFound />
}

export default function App() {
  const path = useRoute()
  useScrollTopOnRoute(path)

  useEffect(() => {
    applyRouteMeta(path)
  }, [path])

  return (
    <div className="min-h-screen bg-ink">
      <a
        href="#main"
        className="label sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-gold focus:px-4 focus:py-3 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <View path={path} />
      </main>
      <Footer />
    </div>
  )
}
