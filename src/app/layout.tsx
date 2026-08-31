import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import '@/app/globals.css'
import { getBaseUrl } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: 'La Bonne Pioche | Boutique vintage à Porrentruy',
    template: '%s | La Bonne Pioche',
  },
  description:
    'À Porrentruy, La Bonne Pioche sélectionne des objets vintage et de seconde main, et propose aussi estimations, réparations et débarras.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    title: 'La Bonne Pioche | Boutique vintage à Porrentruy',
    description:
      'Des objets vintage et de seconde main choisis avec soin, à découvrir au cœur de Porrentruy.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Bonne Pioche | Boutique vintage à Porrentruy',
    description:
      'Des objets vintage et de seconde main choisis avec soin, à découvrir au cœur de Porrentruy.',
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr-CH" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  )
}
