import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment La Bonne Pioche utilise et protège les données liées à son site et à ses activités.',
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
          title: 'Les données que nous utilisons',
          content:
            'Selon votre demande, nous pouvons traiter vos coordonnées, les informations utiles à une vente, une reprise, un débarras ou une réparation, ainsi que la description, l’état, les photographies et les numéros de série des objets ou appareils concernés. Lors d’un achat auprès d’un particulier, nous pouvons également noter la date de naissance du vendeur et la référence du document d’identité original présenté. Nous ne conservons une copie du document que si elle est nécessaire et autorisée.',
        },
        {
          title: 'Pourquoi ces informations sont-elles nécessaires ?',
          content:
            'Nous les utilisons pour répondre à vos demandes, préparer et exécuter un devis ou un contrat, assurer la traçabilité des objets, gérer les paiements, le stock et les garanties, prévenir les abus, établir les documents commerciaux et respecter nos obligations légales et comptables. Elles ne sont pas vendues et ne sont pas utilisées pour une décision entièrement automatisée.',
        },
        {
          title: 'Dossiers de réparation',
          content:
            'Une fiche de réparation peut contenir vos coordonnées, les caractéristiques de l’appareil, son état à la remise, les accessoires confiés, le diagnostic, le devis, les interventions, les paiements et les signatures nécessaires à la prise en charge ou à la restitution. Nous vous invitons à sauvegarder vos données et à retirer toute information qui n’est pas utile à la réparation.',
        },
        {
          title: 'Ventes et achats auprès de particuliers',
          content:
            'Lorsque La Bonne Pioche achète ou reprend un objet, nous constituons un bordereau qui relie le vendeur, la transaction et chaque objet. Ces informations servent à prouver l’origine de l’objet, à documenter le paiement, à alimenter le stock et à répondre à une demande légitime d’une autorité. L’accès au registre est limité aux personnes qui en ont besoin.',
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
          title: 'Qui peut recevoir ces données ?',
          content:
            'Les données sont accessibles aux personnes autorisées de La Bonne Pioche et, lorsque cela est nécessaire, à nos prestataires d’hébergement, de stockage, de messagerie, de paiement, de comptabilité ou de maintenance informatique. Ils ne peuvent les utiliser que pour le service confié. Une communication peut aussi avoir lieu si la loi l’exige, pour défendre nos droits ou à la demande d’une autorité compétente.',
        },
        {
          title: 'Combien de temps les conservons-nous ?',
          content:
            'Nous conservons les données seulement pendant la durée nécessaire au suivi de la relation, aux garanties, à la traçabilité et à la défense de droits. Les contrats, bordereaux, factures et autres pièces comptables peuvent être conservés dix ans à compter de la fin de l’exercice concerné. Les informations qui ne sont plus nécessaires sont supprimées ou anonymisées, sous réserve d’une obligation légale ou d’un litige en cours.',
        },
        {
          title: 'Sécurité et espace de gestion',
          content:
            'Les dossiers internes sont destinés à être stockés dans un espace de gestion protégé par des accès individuels. Nous appliquons des mesures organisationnelles et techniques raisonnables pour limiter les accès, éviter les pertes et conserver un historique des modifications. Aucun système n’étant totalement infaillible, nous réévaluons ces mesures au fil de l’évolution de nos services.',
        },
        {
          title: 'Vos droits',
          content:
            'Vous pouvez nous demander quelles données nous détenons à votre sujet, les faire corriger, obtenir leur remise lorsque les conditions légales sont remplies ou demander leur suppression lorsque la loi le permet. Écrivez à contact@labonnepioche.ch ou à La Bonne Pioche, Rue du 23 Juin 28, 2900 Porrentruy. Nous pouvons demander une preuve d’identité avant de répondre.',
        },
        {
          title: 'Version actuelle',
          content:
            'Cette politique peut évoluer lorsque nos services ou nos outils changent. Version du 31 août 2026.',
        },
      ]}
      title="Confidentialité"
    />
  )
}
