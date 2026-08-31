import { absoluteUrl, storePath } from '@/lib/seo'
import type { StoreConfig } from '@/types/store'

interface LocalBusinessJsonLdProps {
  store: StoreConfig
}

export function LocalBusinessJsonLd({ store }: LocalBusinessJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: store.name,
    description: store.shortDescription,
    url: absoluteUrl(storePath(store)),
    image: absoluteUrl(store.heroImage.src),
    areaServed: store.coverage,
    address: {
      '@type': 'PostalAddress',
      addressLocality: store.city,
      addressRegion: store.region,
      addressCountry: store.country,
    },
    keywords: store.seoKeywords.join(', '),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Univers ${store.name}`,
      itemListElement: store.categories.map((category) => ({
        '@type': 'OfferCatalog',
        name: category,
      })),
    },
  }

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  )
}
