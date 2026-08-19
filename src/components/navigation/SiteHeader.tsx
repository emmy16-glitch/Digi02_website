import { useEffect, useState } from 'react'
import { Container } from '../Container'
import { DesktopNavigation, type NavigationItem } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'
import globeMark from '../../assets/brand/digi02-globe-mark.png'
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
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(themeStorageKey, theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#050505' : '#f1eee7')
  }, [theme])

  useEffect(() => {
    let frame = 0

    function updateProgress() {
      const maximumScroll = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = maximumScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maximumScroll) * 100)) : 100
      setScrollProgress((currentProgress) => Math.abs(currentProgress - nextProgress) < 0.1 ? currentProgress : nextProgress)
    }

    function scheduleProgressUpdate() {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(updateProgress)
    }

    scheduleProgressUpdate()
    window.addEventListener('scroll', scheduleProgressUpdate, { passive: true })
    window.addEventListener('resize', scheduleProgressUpdate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleProgressUpdate)
      window.removeEventListener('resize', scheduleProgressUpdate)
    }
  }, [currentPath])

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="site-header__wordmark" href="/" aria-label="Digi02 home">
          <span className="digi02-brand-lockup" aria-hidden="true">
            <span className="digi02-brand-lockup__globe"><img src={globeMark} alt="" /></span>
            <span className="digi02-brand-lockup__name">Digi<span>02</span></span>
          </span>
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
      <div className="site-header__progress" role="progressbar" aria-label="Page reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(scrollProgress)}>
        <span style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      </div>
    </header>
  )
}
