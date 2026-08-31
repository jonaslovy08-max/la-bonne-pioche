import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { SiteShell } from '@/components/layout/site-shell'
import { StoreHero } from '@/components/sections/store-hero'
import { StoreOverview } from '@/components/sections/store-overview'
import { LocalBusinessJsonLd } from '@/components/seo/local-business-json-ld'
import { buildStoreMetadata } from '@/lib/seo'
import { getStoreBySlug, stores } from '@/lib/stores'

export const dynamicParams = false

interface StorePageProps {
  params: Promise<{
    storeSlug: string
  }>
}

export function generateStaticParams() {
  return stores.map((store) => ({
    storeSlug: store.slug,
  }))
}

export async function generateMetadata({ params }: StorePageProps): Promise<Metadata> {
  const { storeSlug } = await params
  const store = getStoreBySlug(storeSlug)

  if (!store) {
    return {
      title: 'Magasin introuvable',
    }
  }

  return buildStoreMetadata(store)
}

export default async function StorePage({ params }: StorePageProps) {
  const { storeSlug } = await params
  const store = getStoreBySlug(storeSlug)

  if (!store) {
    notFound()
  }

  return (
    <SiteShell>
      <LocalBusinessJsonLd store={store} />

      <StoreHero
        eyebrow="Notre boutique"
        primaryCtaHref="/#infos"
        primaryCtaLabel="Venir à la boutique"
        secondaryCtaHref="/"
        secondaryCtaLabel="Retour à l’accueil"
        store={store}
      />

      <StoreOverview store={store} />
    </SiteShell>
  )
}
