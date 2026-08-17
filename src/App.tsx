import type { ReactNode } from 'react'
import { SeoMeta } from './components/SeoMeta'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/navigation/SiteHeader'
import { organizationStructuredData } from './data/organizationStructuredData'
import { CompanyPage } from './pages/CompanyPage'
import { ContactPage } from './pages/ContactPage'
import { CustomSoftwarePage } from './pages/CustomSoftwarePage'
import { DigiVoltPage } from './pages/DigiVoltPage'
import { EManagementPage } from './pages/EManagementPage'
import { EnterpriseSystemsPage } from './pages/EnterpriseSystemsPage'
import { HomePage } from './pages/HomePage'
import { IndustriesPage } from './pages/IndustriesPage'
import { InsightsPage } from './pages/InsightsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PaymentSystemsPage } from './pages/PaymentSystemsPage'
import { PayrollAutomationPage } from './pages/PayrollAutomationPage'
import { SkyGridPage } from './pages/SkyGridPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { WorkPage } from './pages/WorkPage'
import './styles/site-pages.css'
import './styles/product-pages.css'
import './styles/capability-pages.css'
import './styles/capability-theme.css'
import './styles/launch-polish.css'
import './styles/final-touch-targets.css'
import './styles/site-tightening.css'
import './styles/site-final-overrides.css'
import './styles/reference-shell.css'
import './styles/home-reference.css'
import './styles/reference-tuning.css'
import './styles/logo-fix.css'

type RouteDefinition = {
  title: string
  description: string
  content: ReactNode
  noIndex?: boolean
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  const routes: Record<string, RouteDefinition> = {
    '/': {
      title: 'Digi02 — Technology for real operations',
      description:
        'Digi02 designs and builds enterprise software, autonomous UAV systems, electric mobility technology, payment systems and custom operational platforms from Kaduna, Nigeria.',
      content: <HomePage />,
    },
    '/solutions': {
      title: 'Technology solutions — Digi02',
      description:
        'Explore Digi02 solutions across autonomous UAV operations, electric mobility, ERP and POS, e-management, payroll automation, payment systems and custom software.',
      content: <SolutionsPage />,
    },
    '/solutions/skygrid': {
      title: 'SkyGrid UAV operations — Digi02',
      description:
        'SkyGrid by Digi02 supports UAV mission planning, flight operations and field-intelligence workflows through a purpose-built autonomous-systems experience.',
      content: <SkyGridPage />,
    },
    '/solutions/digivolt': {
      title: 'DigiVolt electric mobility — Digi02',
      description:
        'DigiVolt is Digi02 electric-mobility technology for connected ride requests, vehicle assignment, journey status and operational mobility workflows.',
      content: <DigiVoltPage />,
    },
    '/solutions/enterprise-systems': {
      title: 'ERP and POS systems — Digi02',
      description:
        'Digi02 builds connected ERP and POS systems that link sales, inventory, transaction records and operational reporting in one working environment.',
      content: <EnterpriseSystemsPage />,
    },
    '/solutions/e-management': {
      title: 'E-management systems — Digi02',
      description:
        'Digi02 e-management systems connect requests, review, approval and operational records so organizations can act on information with more control.',
      content: <EManagementPage />,
    },
    '/solutions/payroll-automation': {
      title: 'Payroll automation — Digi02',
      description:
        'Digi02 payroll automation connects employee data, attendance, allowances, deductions, approvals, payroll processing and reporting in one controlled workflow.',
      content: <PayrollAutomationPage />,
    },
    '/solutions/payment-systems': {
      title: 'Payment systems — Digi02',
      description:
        'Digi02 payment systems support secure payment acceptance, transaction processing, reconciliation and operational reporting for organizations.',
      content: <PaymentSystemsPage />,
    },
    '/solutions/custom-software': {
      title: 'Custom software engineering — Digi02',
      description:
        'Digi02 engineers custom software systems across frontend applications, APIs, services, data, cloud, security, monitoring and integrations.',
      content: <CustomSoftwarePage />,
    },
    '/industries': {
      title: 'Industries — Digi02',
      description:
        'Digi02 applies autonomous systems, enterprise technology, mobility, payments and custom software to operational challenges across sectors.',
      content: <IndustriesPage />,
    },
    '/work': {
      title: 'Selected work — Digi02',
      description:
        'Explore selected Digi02 work across autonomous inspection, payments, enterprise platforms, mobility and public-sector operations.',
      content: <WorkPage />,
    },
    '/company': {
      title: 'Company — Digi02',
      description:
        'Learn about Digi02, a Nigerian technology and engineering company building software, autonomous systems, enterprise platforms and digital infrastructure.',
      content: <CompanyPage />,
    },
    '/insights': {
      title: 'Insights — Digi02',
      description:
        'Explore Digi02 engineering perspectives across autonomous systems, enterprise technology, mobility, software and operational design.',
      content: <InsightsPage />,
    },
    '/contact': {
      title: 'Contact — Digi02',
      description:
        'Discuss a technology project with Digi02 across autonomous systems, enterprise platforms, mobility, payments and custom software engineering.',
      content: <ContactPage />,
    },
  }

  const activeRoute = routes[path]
  const route = activeRoute ?? {
    title: 'Page not found — Digi02',
    description: 'The requested Digi02 page could not be found.',
    content: <NotFoundPage />,
    noIndex: true,
  }

  return (
    <>
      <SeoMeta path={path} title={route.title} description={route.description} noIndex={route.noIndex} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }} />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader currentPath={path} />
      <main id="main-content">{route.content}</main>
      <SiteFooter />
    </>
  )
}

export default App
