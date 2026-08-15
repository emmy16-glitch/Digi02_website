import type { ReactNode } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/navigation/SiteHeader'
import { CompanyPage } from './pages/CompanyPage'
import { ContactPage } from './pages/ContactPage'
import { FoundationPreviewPage } from './pages/FoundationPreviewPage'
import { HomePage } from './pages/HomePage'
import { IndustriesPage } from './pages/IndustriesPage'
import { InsightsPage } from './pages/InsightsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { WorkPage } from './pages/WorkPage'
import './styles/site-pages.css'

const FOUNDATION_PATH = '/foundation'

type RouteDefinition = {
  title: string
  content: ReactNode
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === FOUNDATION_PATH) {
    return <FoundationPreviewPage />
  }

  const routes: Record<string, RouteDefinition> = {
    '/': { title: 'Digi02 — Precision systems', content: <HomePage /> },
    '/solutions': { title: 'Solutions — Digi02', content: <SolutionsPage /> },
    '/industries': { title: 'Industries — Digi02', content: <IndustriesPage /> },
    '/work': { title: 'Our Work — Digi02', content: <WorkPage /> },
    '/company': { title: 'Company — Digi02', content: <CompanyPage /> },
    '/insights': { title: 'Insights — Digi02', content: <InsightsPage /> },
    '/contact': { title: 'Contact — Digi02', content: <ContactPage /> },
  }

  const route = routes[path] ?? {
    title: 'Page not found — Digi02',
    content: <NotFoundPage />,
  }

  return (
    <>
      <title>{route.title}</title>
      <SiteHeader currentPath={path} />
      <main>{route.content}</main>
      <SiteFooter />
    </>
  )
}

export default App
