import type { MetadataRoute } from 'next'

import { absoluteUrl, storePath } from '@/lib/seo'
import { shopProducts } from '@/lib/shop'
import { stores } from '@/lib/stores'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const routes = [
    '/',
    '/boutique',
    '/reparations',
    '/vendre-un-objet',
    '/debarras',
    '/contact',
    '/qui-sommes-nous',
    '/conditions-generales',
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/politique-de-cookies',
    ...shopProducts.map((product) => `/boutique/${product.slug}`),
    ...stores.map((store) => storePath(store)),
  ]

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
