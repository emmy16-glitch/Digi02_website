import { useEffect } from 'react'
import { Footer, Header } from '@/premium/components/layout'
import { useRoute, useScrollTopOnRoute } from '@/premium/lib/router'
import CompanyPage from '@/premium/pages/Company'
import ContactPage from '@/premium/pages/Contact'
import Home from '@/premium/pages/Home'
import { IndustriesPage, WorkPage } from '@/premium/pages/Industries'
import { InsightArticlePage, InsightsPage } from '@/premium/pages/Insights'
import { SolutionDetailPage, SolutionsPage } from '@/premium/pages/Solutions'
import { Btn, Container, Eyebrow, GridBackdrop, Reveal } from '@/premium/components/ui'
import { linkProps } from '@/premium/lib/router'

const TITLES: Record<string, string> = {
  '/': 'Digi02 — Software Engineered for Operations | Kaduna, Nigeria',
  '/solutions': 'Solutions — Digi02',
  '/industries': 'Industries — Digi02',
  '/work': 'Our Work — Digi02',
  '/company': 'Company — Digi02',
  '/insights': 'Insights — Digi02',
  '/contact': 'Contact — Digi02',
  '/privacy': 'Privacy Policy — Digi02',
}

const DESCRIPTIONS: Record<string, string> = {
  '/': 'Digi02 builds enterprise systems, payment and payroll infrastructure, e-management platforms and UAV mission software for organisations across Nigeria and beyond.',
  '/solutions': 'Explore Digi02 solutions across SkyGrid aerial systems, enterprise platforms, e-management, payroll, payments and custom software.',
  '/company': 'Digi02 Software Solutions, Kaduna Nigeria. Meet the team and standards behind the systems.',
  '/contact': 'Discuss a project with Digi02 — No. 2, The Hub, Mando, Kaduna. info@digi02.org, +234 816 940 4088.',
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
    return <SolutionDetailPage slug={path.replace('/solutions/', '')} />
  }
  if (path === '/industries') return <IndustriesPage />
  if (path === '/work') return <WorkPage />
  if (path === '/company') return <CompanyPage />
  if (path === '/insights') return <InsightsPage />
  if (path.startsWith('/insights/')) {
    return <InsightArticlePage slug={path.replace('/insights/', '')} />
  }
  if (path === '/contact') return <ContactPage />
  if (path === '/privacy') return <PrivacyPage />
  return <NotFound />
}

export default function App() {
  const path = useRoute()
  useScrollTopOnRoute(path)

  useEffect(() => {
    document.title = TITLES[path] ?? (path.startsWith('/solutions/') ? 'Solution — Digi02' : path.startsWith('/insights/') ? 'Insight — Digi02' : 'Digi02')
    const desc = DESCRIPTIONS[path]
    if (desc) {
      let tag = document.querySelector('meta[name="description"]')
      if (tag) tag.setAttribute('content', desc)
    }
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
