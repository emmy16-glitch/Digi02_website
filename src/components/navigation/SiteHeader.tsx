import { useState } from 'react'
import { Container } from '../Container'
import { DesktopNavigation, type NavigationItem } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'
import '../../styles/navigation.css'

const navigationItems: readonly NavigationItem[] = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/work', label: 'Our Work' },
  { href: '/company', label: 'Company' },
  { href: '/insights', label: 'Insights' },
]

type SiteHeaderProps = {
  currentPath: string
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="site-header__wordmark" href="/" aria-label="Digi02 home">
          <span aria-hidden="true">Digi<span>02</span></span>
        </a>

        <DesktopNavigation currentPath={currentPath} items={navigationItems} />
        <MobileNavigation
          currentPath={currentPath}
          isOpen={isMobileMenuOpen}
          items={navigationItems}
          onClose={closeMobileMenu}
          onToggle={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        />
      </Container>
    </header>
  )
}
