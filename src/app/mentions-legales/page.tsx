import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Qui publie le site de La Bonne Pioche et comment ses contenus peuvent être utilisés.',
  alternates: { canonical: '/mentions-legales' },
}

export default function LegalNoticePage() {
  return (
    <LegalPage
      sections={[
        {
          title: 'Qui publie ce site ?',
          content:
            'Ce site est publié par l’association La Bonne Pioche, qui exploite la boutique située Rue du 23 Juin 28, 2900 Porrentruy, Suisse. La Bonne Pioche est le nom commercial utilisé pour présenter nos activités.',
        },
        {
          title: 'Textes, images et identité visuelle',
          content:
            'Les textes, photographies, illustrations, logos et éléments graphiques de ce site nous appartiennent ou sont utilisés avec autorisation. Merci de nous demander notre accord avant de les reproduire ou de les réutiliser.',
        },
        {
          title: 'Des informations qui peuvent évoluer',
          content:
            'Nous faisons de notre mieux pour garder le site à jour. Comme la boutique vit au rythme des arrivages, les objets disponibles, les prix, les horaires ou certains services peuvent toutefois changer.',
        },
      ]}
      title="Mentions légales"
    />
  )
}
