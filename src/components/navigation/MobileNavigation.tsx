import { useEffect, useRef, type KeyboardEvent } from 'react'
import { PrimaryButton } from '../PrimaryButton'
import type { NavigationItem } from './DesktopNavigation'
import { ThemeToggle } from './ThemeToggle'

type MobileNavigationProps = {
  currentPath: string
  isOpen: boolean
  items: readonly NavigationItem[]
  onClose: () => void
  onToggle: () => void
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

function isCurrentPath(currentPath: string, href: string) {
  return currentPath === href || currentPath.startsWith(`${href}/`)
}

export function MobileNavigation({
  currentPath,
  isOpen,
  items,
  onClose,
  onToggle,
  theme,
  onThemeToggle,
}: MobileNavigationProps) {
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape' && isOpen) {
      onClose()
      requestAnimationFrame(() => toggleRef.current?.focus())
    }
  }

  return (
    <div className="mobile-navigation" onKeyDown={handleKeyDown}>
      <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      <button
        ref={toggleRef}
        className="mobile-navigation__toggle"
        type="button"
        aria-controls="mobile-navigation-panel"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={onToggle}
      >
        <span>{isOpen ? 'Close' : 'Menu'}</span>
        <span className="mobile-navigation__icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      {isOpen ? (
        <nav
          className="mobile-navigation__panel"
          id="mobile-navigation-panel"
          aria-label="Mobile primary navigation"
        >
          <div className="mobile-navigation__panel-inner">
            <ul className="mobile-navigation__list">
              {items.map((item) => {
                const isCurrent = isCurrentPath(currentPath, item.href)

                return (
                  <li key={item.href}>
                    <a
                      className="mobile-navigation__link"
                      href={item.href}
                      aria-current={isCurrent ? 'page' : undefined}
                      onClick={onClose}
                    >
                      {item.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mobile-navigation__closing">
              <p>Have a system, workflow or product that needs to work better?</p>
              <PrimaryButton className="mobile-navigation__cta" href="/contact" onClick={onClose}>
                Discuss your project <span aria-hidden="true">→</span>
              </PrimaryButton>
            </div>
          </div>
        </nav>
      ) : null}
    </div>
  )
}
