import { getInsight, getSolution, insights, solutions } from "@/premium/data/content";

/**
 * Single source of truth for route validity and route metadata.
 *
 * Valid routes: the static pages below plus one detail route per solution
 * and insight in the content data. Anything else is a 404 and must be
 * marked noindex so unknown URLs are never treated as indexable.
 */

export const SITE_URL = "https://digi02.org";
export const SITE_NAME = "Digi02";

export interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogType: string;
}

const STATIC_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Digi02: Software Engineered for Operations | Kaduna, Nigeria",
    description:
      "Digi02 designs and builds enterprise software, autonomous UAV systems, electric mobility technology, payment systems and custom operational platforms from Kaduna, Nigeria.",
  },
  "/solutions": {
    title: "Solutions | Digi02",
    description:
      "Explore Digi02 solutions across SkyGrid aerial systems, enterprise platforms, e-management, payroll, payments and custom software.",
  },
  "/industries": {
    title: "Industries | Digi02",
    description:
      "Digi02 builds operational software for retail, education, government, hospitality, healthcare and field operations across Nigeria.",
  },
  "/work": {
    title: "Our Work | Digi02",
    description:
      "Selected Digi02 systems and capabilities across unmanned aerial operations, institutional payments and payroll automation.",
  },
  "/company": {
    title: "Company | Digi02",
    description:
      "Digi02 Software Solutions, Kaduna Nigeria. Meet the team and standards behind the systems.",
  },
  "/insights": {
    title: "Insights | Digi02",
    description:
      "Practical writing on enterprise systems, payroll, payments and aerial operations in Nigeria from the Digi02 team.",
  },
  "/contact": {
    title: "Contact | Digi02",
    description:
      "Discuss a project with Digi02: No. 2, The Hub, Mando, Kaduna. info@digi02.org, +234 816 940 4088.",
  },
  "/privacy": {
    title: "Privacy Policy | Digi02",
    description:
      "Digi02 privacy policy. The contact form prepares an email in your own mail application. Nothing is stored by the site itself.",
  },
};

export function isKnownRoute(path: string): boolean {
  if (STATIC_META[path]) return true;
  if (path.startsWith("/solutions/")) {
    return getSolution(path.replace("/solutions/", "")) !== undefined;
  }
  if (path.startsWith("/insights/")) {
    return getInsight(path.replace("/insights/", "")) !== undefined;
  }
  return false;
}

export function solutionSlugs(): string[] {
  return solutions.map((s) => s.slug);
}

export function insightSlugs(): string[] {
  return insights.map((i) => i.slug);
}

export function getRouteMeta(path: string): RouteMeta {
  const canonical = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const staticMeta = STATIC_META[path];
  if (staticMeta) {
    return {
      title: staticMeta.title,
      description: staticMeta.description,
      canonical,
      robots: "index, follow",
      ogType: "website",
    };
  }
  if (path.startsWith("/solutions/")) {
    const s = getSolution(path.replace("/solutions/", ""));
    if (s) {
      return {
        title: `${s.name} | Digi02`,
        description: s.summary,
        canonical,
        robots: "index, follow",
        ogType: "website",
      };
    }
  }
  if (path.startsWith("/insights/")) {
    const a = getInsight(path.replace("/insights/", ""));
    if (a) {
      return {
        title: `${a.title} | Digi02 Insights`,
        description: a.excerpt,
        canonical,
        robots: "index, follow",
        ogType: "article",
      };
    }
  }
  return {
    title: "Page not found | Digi02",
    description: "The page you requested is not part of the Digi02 website.",
    canonical,
    robots: "noindex, nofollow",
    ogType: "website",
  };
}

function upsertMetaByName(name: string, content: string): void {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string): void {
  let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/** Apply route metadata to the document, replacing (never leaving stale) tags. */
export function applyRouteMeta(meta: RouteMeta): void {
  document.title = meta.title;
  upsertMetaByName("description", meta.description);
  upsertMetaByName("robots", meta.robots);
  upsertCanonical(meta.canonical);
  upsertMetaByProperty("og:title", meta.title);
  upsertMetaByProperty("og:description", meta.description);
  upsertMetaByProperty("og:type", meta.ogType);
  upsertMetaByProperty("og:site_name", SITE_NAME);
  upsertMetaByProperty("og:url", meta.canonical);
  upsertMetaByName("twitter:card", "summary");
  upsertMetaByName("twitter:title", meta.title);
  upsertMetaByName("twitter:description", meta.description);
}
