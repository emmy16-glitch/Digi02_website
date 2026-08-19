import { useEffect, useState } from 'react'
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

type Theme = 'dark' | 'light'

const themeStorageKey = 'digi02-theme'

function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const storedTheme = window.localStorage.getItem(themeStorageKey)
  if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme
  return 'dark'
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(themeStorageKey, theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#050505' : '#f1eee7')
  }, [theme])

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="site-header__wordmark" href="/" aria-label="Digi02 home">
          <span aria-hidden="true">Digi<span>02</span></span>
        </a>

        <DesktopNavigation currentPath={currentPath} items={navigationItems} theme={theme} onThemeToggle={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')} />
        <MobileNavigation
          currentPath={currentPath}
          isOpen={isMobileMenuOpen}
          items={navigationItems}
          onClose={closeMobileMenu}
          onToggle={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          theme={theme}
          onThemeToggle={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
        />
      </Container>
    </header>
  )
}
