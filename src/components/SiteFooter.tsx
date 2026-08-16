import digi02LogoLight from '../assets/brand/digi02-logo-light.png'
import { Container } from './Container'

const footerGroups = [
  {
    label: 'Solutions',
    links: [
      { href: '/solutions/skygrid', label: 'SkyGrid' },
      { href: '/solutions/digivolt', label: 'DigiVolt' },
      { href: '/solutions/enterprise-systems', label: 'Enterprise Systems' },
      { href: '/solutions', label: 'All Solutions' },
    ],
  },
  {
    label: 'Industries',
    links: [
      { href: '/industries', label: 'Government' },
      { href: '/industries', label: 'Energy & Utilities' },
      { href: '/industries', label: 'Logistics' },
      { href: '/industries', label: 'Finance' },
      { href: '/industries', label: 'More Industries' },
    ],
  },
  {
    label: 'Company',
    links: [
      { href: '/company', label: 'About Us' },
      { href: '/company', label: 'Careers' },
      { href: '/company', label: 'Partners' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
  {
    label: 'Insights',
    links: [
      { href: '/insights', label: 'Blog' },
      { href: '/work', label: 'Case Studies' },
      { href: '/insights', label: 'News' },
      { href: '/insights', label: 'Resources' },
    ],
  },
] as const

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <a href="/" aria-label="Digi02 home">
            <img src={digi02LogoLight} alt="Digi02" />
          </a>
          <p>Technology built for<br />real operations.</p>
        </div>

        <div className="site-footer__groups">
          {footerGroups.map((group) => (
            <nav className="site-footer__group" aria-label={`${group.label} footer navigation`} key={group.label}>
              <strong>{group.label}</strong>
              {group.links.map((link) => (
                <a href={link.href} key={`${group.label}-${link.label}`}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="site-footer__contact">
          <strong>Let&apos;s connect</strong>
          <a href="mailto:hello@digi02.com">hello@digi02.com</a>
          <a href="tel:+2347001230202">+234 700 123 0202</a>
          <div className="site-footer__socials" aria-label="Social channels">
            <span aria-label="LinkedIn">in</span>
            <span aria-label="X">𝕏</span>
            <span aria-label="YouTube">▶</span>
            <span aria-label="Instagram">◎</span>
          </div>
        </div>

        <div className="site-footer__legal">
          <span>© 2024 Digi02 Technologies Ltd. All rights reserved.</span>
          <span className="site-footer__legal-links">
            <a href="/company">Privacy Policy</a>
            <a href="/company">Terms of Service</a>
          </span>
        </div>
      </Container>
    </footer>
  )
}
