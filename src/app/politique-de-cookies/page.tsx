import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  description: 'Les cookies et services externes utilisés sur le site de La Bonne Pioche.',
  alternates: { canonical: '/politique-de-cookies' },
}

export default function CookiePolicyPage() {
  return (
    <LegalPage
      sections={[
        {
          title: 'Pas de suivi publicitaire',
          content:
            'Nous n’utilisons actuellement aucun outil publicitaire, aucun système de profilage et aucun outil d’analyse destiné à suivre votre navigation à des fins commerciales.',
        },
        {
          title: 'Google Maps',
          content:
            'La carte intégrée à la page Contact est fournie par Google Maps. Ce service peut déposer ses propres cookies ou recevoir des informations techniques lorsque la carte s’affiche. Vous pouvez limiter ces cookies dans les réglages de votre navigateur.',
        },
        {
          title: 'Si le site évolue',
          content:
            'Si nous ajoutons un outil nécessitant votre accord, nous mettrons cette page à jour et afficherons les réglages nécessaires avant son activation.',
        },
      ]}
      title="Politique de cookies"
    />
  )
}
