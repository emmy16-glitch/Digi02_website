type Theme = 'dark' | 'light'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      className="site-header__theme-toggle"
      type="button"
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light appearance' : 'Switch to dark appearance'}
      title={isDark ? 'Switch to light appearance' : 'Switch to dark appearance'}
      onClick={onToggle}
    >
      <span aria-hidden="true">{isDark ? '☾' : '☀'}</span>
      <span className="visually-hidden">{isDark ? 'Dark appearance active' : 'Light appearance active'}</span>
    </button>
  )
}
