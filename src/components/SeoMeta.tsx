import { useEffect } from 'react'
import { SITE_URL } from '../data/organizationStructuredData'

type SeoMetaProps = {
  title: string
  description: string
  path: string
  noIndex?: boolean
}

function ensureMeta(name: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }

  return element
}

function ensureLink(rel: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }

  return element
}

export function SeoMeta({ title, description, path, noIndex = false }: SeoMetaProps) {
  useEffect(() => {
    const canonicalPath = path === '/' ? '' : path
    const canonicalUrl = `${SITE_URL}${canonicalPath}`

    document.title = title
    ensureMeta('description').content = description
    ensureMeta('robots').content = noIndex ? 'noindex, nofollow' : 'index, follow'

    ensureMeta('og:title', 'property').content = title
    ensureMeta('og:description', 'property').content = description
    ensureMeta('og:type', 'property').content = 'website'
    ensureMeta('og:site_name', 'property').content = 'Digi02'
    ensureMeta('og:url', 'property').content = canonicalUrl

    ensureMeta('twitter:card').content = 'summary'
    ensureMeta('twitter:title').content = title
    ensureMeta('twitter:description').content = description

    ensureLink('canonical').href = canonicalUrl
  }, [description, noIndex, path, title])

  return null
}
