import type { ReactNode } from 'react'
import { SeoMeta, organizationStructuredData } from './components/SeoMeta'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/navigation/SiteHeader'
import { CompanyPage } from './pages/CompanyPage'
import { ContactPage } from './pages/ContactPage'
import { CustomSoftwarePage } from './pages/CustomSoftwarePage'
import { DigiVoltPage } from './pages/DigiVoltPage'
import { EManagementPage } from './pages/EManagementPage'
import { EnterpriseSystemsPage } from './pages/EnterpriseSystemsPage'
import { FoundationPreviewPage } from './pages/FoundationPreviewPage'
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

const FOUNDATION_PATH = '/foundation'

type RouteDefinition = {
  title: string
  description: string
  content: ReactNode
  noIndex?: boolean
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === FOUNDATION_PATH) {
    return (
      <>
        <SeoMeta
          title="Design foundation — Digi02"
          description="Internal Digi02 design-foundation preview."
          path={FOUNDATION_PATH}
          noIndex
        />
        <FoundationPreviewPage />
      </>
    )
  }

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
        'Digi02 payroll automation structures recurring payroll inputs, review, approval and records into a controlled operational process.',
      content: <PayrollAutomationPage />,
    },
    '/solutions/payment-systems': {
      title: 'Payment systems — Digi02',
      description:
        'Digi02 payment systems connect transactions, authorization, records, reconciliation and reporting to the operation behind each payment.',
      content: <PaymentSystemsPage />,
    },
    '/solutions/custom-software': {
      title: 'Custom software engineering — Digi02',
      description:
        'Digi02 designs custom software around real workflows, integrations, records and operating constraints when off-the-shelf tools are not enough.',
      content: <CustomSoftwarePage />,
    },
    '/industries': {
      title: 'Industries — Digi02',
      description:
        'See how Digi02 approaches operational technology across organizations that need connected systems, controlled workflows and usable information.',
      content: <IndustriesPage />,
    },
    '/work': {
      title: 'Our work — Digi02',
      description:
        'Explore selected Digi02 technology work across autonomous systems, electric mobility and connected enterprise operations.',
      content: <WorkPage />,
    },
    '/company': {
      title: 'Company — Digi02',
      description:
        'Digi02 is a Kaduna-based technology company working across software engineering, cybersecurity, data and operational systems for organizations.',
      content: <CompanyPage />,
    },
    '/insights': {
      title: 'Insights — Digi02',
      description:
        'Digi02 perspectives on enterprise systems, automation, payment technology, UAV operations and the practical design of operational software.',
      content: <InsightsPage />,
    },
    '/contact': {
      title: 'Contact Digi02',
      description:
        'Discuss an operational technology project with Digi02. Share the workflow, constraint or system that needs to work better.',
      content: <ContactPage />,
    },
  }

  const route = routes[path] ?? {
    title: 'Page not found — Digi02',
    description: 'The requested Digi02 page could not be found.',
    content: <NotFoundPage />,
    noIndex: true,
  }

  return (
    <>
      <SeoMeta
        title={route.title}
        description={route.description}
        path={path}
        noIndex={route.noIndex}
      />
      <script type="application/ld+json">{JSON.stringify(organizationStructuredData)}</script>
      <SiteHeader currentPath={path} />
      <main>{route.content}</main>
      <SiteFooter />
    </>
  )
}

export default App
