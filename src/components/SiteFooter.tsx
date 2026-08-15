import digi02LogoLight from '../assets/brand/digi02-logo-light.png'
import { Container } from './Container'

const footerLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/work', label: 'Our Work' },
  { href: '/company', label: 'Company' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
] as const

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <a href="/" aria-label="Digi02 home">
            <img src={digi02LogoLight} alt="Digi02" />
          </a>
          <p>Software, mobility and autonomous systems from Kaduna, Nigeria.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__contact">
          <a href="mailto:info@digi02.org">info@digi02.org</a>
          <a href="tel:+2348169404088">+234 (0)81 6940 4088</a>
          <span>Mando, Kaduna, Nigeria</span>
        </div>

        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} Digi02</span>
        </div>
      </Container>
    </footer>
  )
}
