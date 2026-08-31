import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Conditions générales de vente et de services',
  description:
    'Les règles applicables aux ventes, reprises, réparations et débarras de La Bonne Pioche à Porrentruy.',
  alternates: { canonical: '/conditions-generales' },
}

export default function TermsPage() {
  return (
    <LegalPage
      sections={[
        {
          title: '1. À qui s’appliquent ces conditions ?',
          content: (
            <>
              <p>
                Ces conditions encadrent les relations entre l’association La Bonne Pioche, qui
                exploite la boutique située Rue du 23 Juin 28, 2900 Porrentruy, et toute personne
                qui achète, vend, confie un objet ou nous commande un service.
              </p>
              <p>
                Pour rendre la lecture plus simple, « nous » désigne La Bonne Pioche et « vous » la
                personne concernée. Ces conditions couvrent les ventes, estimations, reprises,
                réparations, débarras, réservations, livraisons et éventuelles commandes à distance.
                Un devis ou un accord particulier accepté ensemble reste prioritaire s’il prévoit
                autre chose.
              </p>
            </>
          ),
        },
        {
          title: '2. Quand l’accord devient-il définitif ?',
          content:
            'Les photos, descriptions et estimations servent à vous informer au mieux, mais une erreur peut être corrigée avant l’accord final. Le contrat est conclu lorsque vous acceptez une offre ou un devis, effectuez le paiement, nous remettez l’objet ou recevez notre confirmation. Une commande à distance n’est définitive qu’après notre confirmation.',
        },
        {
          title: '3. Prix et paiement',
          content:
            'Tous les prix sont indiqués en francs suisses (CHF). Avant que vous vous engagiez, nous vous annonçons les éventuels frais de livraison, de diagnostic ou autres suppléments. Le paiement suit les modalités convenues lors de la vente ou indiquées sur le devis. Un acompte peut être demandé pour une réservation, une commande spéciale, une réparation ou un débarras.',
        },
        {
          title: '4. Des objets qui ont déjà vécu',
          content:
            'Sauf indication contraire, les objets vendus sont d’occasion. Une patine, des traces d’usage, une ancienne réparation ou de petites variations font parfois partie de leur histoire. Elles ne constituent pas un défaut lorsqu’elles sont visibles, annoncées ou normales compte tenu de l’âge de l’objet. Prenez le temps de l’examiner avant l’achat et posez-nous toutes vos questions.',
        },
        {
          title: '5. Si un objet présente un défaut',
          content:
            'Vos droits sont régis par le Code suisse des obligations. Sauf garantie écrite plus favorable, le délai convenu est d’un an dès la livraison pour un objet d’occasion destiné à un usage personnel ou familial, et de deux ans pour un objet neuf relevant de ce régime. Ne sont pas couverts les défauts déjà connus ou signalés, l’usure normale, une mauvaise utilisation, un accident ou une intervention non autorisée. Signalez-nous tout problème sans délai, avec votre preuve d’achat.',
        },
        {
          title: '6. Réservation, retrait et livraison',
          content:
            'Une réservation est garantie après notre confirmation et, si nous le demandons, le versement d’un acompte. L’objet doit être retiré dans le délai convenu. Pour une livraison, nous précisons à l’avance le coût, le délai et les conditions. Si un objet n’est pas retiré à temps, nous vous adressons d’abord un rappel avant d’appliquer les mesures prévues par notre accord ou par la loi.',
        },
        {
          title: '7. Retours et annulations',
          content:
            'En Suisse, il n’existe pas de droit général de révocation pour un achat effectué en magasin ou sur Internet. Un retour, un échange ou une annulation est donc possible si nous l’acceptons par écrit, si une garantie particulière le prévoit ou si la loi l’impose. Lorsqu’un retour volontaire est accepté, nous vous indiquons clairement son délai et ses conditions.',
        },
        {
          title: '8. Estimation et reprise',
          content:
            'Une première estimation reste indicative tant que nous n’avons pas examiné l’objet. Le prix de reprise tient compte de son état, de son authenticité, de la demande, du temps nécessaire pour le contrôler ou le remettre en valeur, du délai probable de revente et de la marge indispensable à la boutique. Il est donc différent du futur prix affiché. Nous pouvons refuser une reprise ou demander l’avis d’un spécialiste.',
        },
        {
          title: '9. Provenance et authenticité',
          content:
            'En nous vendant ou en nous confiant un objet, vous confirmez qu’il vous appartient ou que vous êtes autorisé à en disposer. Merci de nous signaler tout ce que vous savez sur son origine, son état, ses transformations et son authenticité. En cas de doute sur un objet volé, contrefait, dangereux ou réglementé, nous pouvons suspendre ou refuser l’opération.',
        },
        {
          title: '10. Réparations',
          content: (
            <>
              <p>
                Nous intervenons sur la base du diagnostic, du devis ou des instructions que vous
                avez acceptés. Si nous découvrons un autre défaut, une pièce indisponible ou un
                travail supplémentaire important, nous vous demandons votre accord avant de dépasser
                le montant convenu.
              </p>
              <p>
                Pensez à sauvegarder vos données et à retirer les cartes, accessoires ou informations
                confidentielles qui ne sont pas nécessaires à la réparation. Nous répondons de notre
                travail conformément au droit suisse. Les pièces remplacées peuvent être restituées
                sur demande, sauf si elles doivent être retournées au fournisseur, recyclées ou
                éliminées pour des raisons de sécurité.
              </p>
            </>
          ),
        },
        {
          title: '11. Objets non retirés',
          content:
            'Nous vous prévenons lorsque le diagnostic ou la réparation est terminé, ou si nous ne pouvons pas intervenir. L’objet doit alors être retiré dans le délai annoncé. Après un rappel puis une mise en demeure, des frais de garde raisonnables peuvent être facturés s’ils vous ont été annoncés. Un objet non retiré ne devient pas automatiquement notre propriété.',
        },
        {
          title: '12. Débarras',
          content:
            'Le devis dépend du volume, de l’accès, du tri, du transport et des filières d’élimination connues au moment de l’estimation. Sauf accord écrit, nous ne prenons pas en charge les produits dangereux, matériaux pollués, armes, substances illicites ou éléments qui exigent un spécialiste. Si le volume ou les conditions d’accès changent sensiblement, nous convenons avec vous d’une éventuelle adaptation du prix.',
        },
        {
          title: '13. Objets repris pendant un débarras',
          content:
            'La valeur d’un objet peut être déduite du prix du débarras uniquement si nous l’avons identifié et accepté ensemble. Vous confirmez être autorisé à disposer des biens présents. Selon notre accord, les objets sont repris, donnés, recyclés ou éliminés. Une estimation de reprise ne garantit jamais un futur prix de revente.',
        },
        {
          title: '14. Responsabilité',
          content:
            'Nous répondons des dommages directs qui nous sont imputables, dans les limites du droit impératif. Aucune limitation ne s’applique en cas de faute intentionnelle ou de négligence grave. Sous réserve de vos droits obligatoires, nous ne répondons pas des conséquences d’une information inexacte, d’un défaut préexistant impossible à détecter, d’une incompatibilité annoncée, d’une absence de sauvegarde ou d’un événement indépendant de notre volonté.',
        },
        {
          title: '15. Vos données',
          content:
            'Nous utilisons les informations nécessaires pour répondre à votre demande, réaliser la vente ou la prestation, assurer le suivi et respecter nos obligations légales. La page Confidentialité explique plus précisément comment ces données sont traitées.',
        },
        {
          title: '16. En cas de désaccord',
          content:
            'Le droit suisse s’applique. Si un problème survient, nous cherchons d’abord une solution avec vous. Lorsque la loi ne prévoit pas un autre tribunal obligatoire, les tribunaux compétents sont ceux du canton du Jura. Si une clause de ces conditions devait être déclarée nulle, les autres resteraient valables.',
        },
        {
          title: '17. Version actuelle',
          content:
            'La version qui s’applique est celle mise à votre disposition au moment de l’accord. Nous pouvons modifier ces conditions pour les contrats futurs. Version du 28 août 2026.',
        },
      ]}
      title="Conditions générales"
    />
  )
}
