import { PrimaryButton } from '../PrimaryButton'
import { ThemeToggle } from './ThemeToggle'

export type NavigationItem = {
  href: string
  label: string
}

type DesktopNavigationProps = {
  currentPath: string
  items: readonly NavigationItem[]
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

function isCurrentPath(currentPath: string, href: string) {
  return currentPath === href || currentPath.startsWith(`${href}/`)
}

export function DesktopNavigation({ currentPath, items, theme, onThemeToggle }: DesktopNavigationProps) {
  return (
    <nav className="desktop-navigation" aria-label="Primary navigation">
      <ul className="desktop-navigation__list">
        {items.map((item) => {
          const isCurrent = isCurrentPath(currentPath, item.href)

          return (
            <li key={item.href}>
              <a
                className="desktop-navigation__link"
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>

      <ThemeToggle theme={theme} onToggle={onThemeToggle} />

      <PrimaryButton className="site-header__cta" href="/contact">
        Discuss your project <span aria-hidden="true">→</span>
      </PrimaryButton>
    </nav>
  )
}
