import type { Metadata } from 'next'

import { ShopPage } from '@/components/shop-page'

export const metadata: Metadata = {
  title: 'Boutique vintage et seconde main',
  description:
    'Découvrez les nouveautés et les univers de La Bonne Pioche : vintage, décoration, gaming, collections, hi-fi et objets singuliers à Porrentruy.',
  alternates: { canonical: '/boutique' },
}

export default function BoutiquePage() {
  return <ShopPage />
}
