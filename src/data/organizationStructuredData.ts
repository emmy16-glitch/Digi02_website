export const SITE_URL = 'https://digi02.org'

export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Digi02',
  url: SITE_URL,
  email: 'info@digi02.org',
  telephone: '+2348169404088',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 2, The Hub, Industrial Area, Farin Gida, Mando',
    addressLocality: 'Kaduna',
    addressCountry: 'NG',
  },
} as const
