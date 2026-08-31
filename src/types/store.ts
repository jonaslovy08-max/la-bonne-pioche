export interface StoreAsset {
  src: string
  alt: string
}

export interface StoreHighlight {
  label: string
  value: string
}

export interface StoreService {
  title: string
  description: string
}

export interface StoreConfig {
  slug: string
  name: string
  tagline: string
  shortDescription: string
  description: string
  locale: string
  openGraphLocale: string
  city: string
  region: string
  country: string
  domains: string[]
  heroImage: StoreAsset
  logo: StoreAsset & {
    width: number
    height: number
  }
  gallery: StoreAsset[]
  highlights: StoreHighlight[]
  categories: string[]
  services: StoreService[]
  coverage: string[]
  seoKeywords: string[]
}
