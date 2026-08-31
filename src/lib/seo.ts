import type { Metadata } from 'next'

import type { StoreConfig } from '@/types/store'

const DEFAULT_SITE_URL = 'http://localhost:3000'

function trimTrailingSlash(value: string) {
  return value.endsWith('/') ? value.slice(0, -1) : value
}

export function getBaseUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
  const deploymentUrl = vercelUrl ? `https://${vercelUrl}` : undefined

  return trimTrailingSlash(configuredUrl || deploymentUrl || DEFAULT_SITE_URL)
}

export function absoluteUrl(path: string) {
  return new URL(path, `${getBaseUrl()}/`).toString()
}

export function storePath(store: StoreConfig) {
  return `/magasins/${store.slug}`
}

export function buildStoreMetadata(store: StoreConfig): Metadata {
  const title = `${store.name} | ${store.city}`
  const path = storePath(store)

  return {
    title,
    description: store.shortDescription,
    keywords: store.seoKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description: store.shortDescription,
      url: path,
      siteName: store.name,
      type: 'website',
      locale: store.openGraphLocale,
      images: [
        {
          url: store.heroImage.src,
          alt: store.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: store.shortDescription,
      images: [store.heroImage.src],
    },
    other: {
      'geo.region': 'CH-JU',
      'geo.placename': `${store.city}, ${store.region}`,
    },
  }
}
