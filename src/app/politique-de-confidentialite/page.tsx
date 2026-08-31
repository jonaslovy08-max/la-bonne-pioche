import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment La Bonne Pioche protège les données liées à la consultation de son site.',
  alternates: { canonical: '/politique-de-confidentialite' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      sections={[
        {
          title: 'Qui est responsable ?',
          content:
            'L’association La Bonne Pioche, Rue du 23 Juin 28, 2900 Porrentruy, est responsable des données traitées dans le cadre de ce site et de ses activités.',
        },
        {
          title: 'Ce que le site recueille',
          content:
            'Le site ne propose actuellement ni compte client, ni achat en ligne, ni formulaire de contact. Notre hébergeur peut néanmoins enregistrer des informations techniques, comme l’adresse IP, le navigateur utilisé ou l’heure de consultation, afin de faire fonctionner le site et de le protéger.',
        },
        {
          title: 'La carte Google Maps',
          content:
            'La page Contact affiche une carte Google Maps. Lorsque cette page est ouverte, certaines données techniques, notamment l’adresse IP, peuvent être transmises à Google. Les liens qui ouvrent Google Maps sont ensuite soumis aux règles de confidentialité de Google.',
        },
        {
          title: 'Quand vous nous contactez',
          content:
            'Si vous nous écrivez, nous appelez ou passez à la boutique, nous utilisons uniquement les informations que vous choisissez de nous communiquer pour répondre à votre demande, préparer une estimation ou assurer le suivi d’une prestation.',
        },
        {
          title: 'Vos droits',
          content:
            'Vous pouvez nous demander quelles données nous détenons à votre sujet, les faire corriger ou demander leur suppression lorsque la loi le permet. Pour cela, contactez-nous ou écrivez-nous à l’adresse de la boutique.',
        },
      ]}
      title="Confidentialité"
    />
  )
}
