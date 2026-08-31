import type { Metadata } from 'next'
import Link from 'next/link'

import { ContentPageShell } from '@/components/layout/content-page-shell'

export const metadata: Metadata = {
  title: 'Vendre un objet',
  description:
    'Proposez un objet vintage, de collection ou de seconde main à La Bonne Pioche à Porrentruy et découvrez comment se passe l’estimation.',
  alternates: { canonical: '/vendre-un-objet' },
}

const interests = [
  {
    title: 'Objets choisis',
    text: 'Mobilier, décoration, luminaires ou objets insolites : nous cherchons des pièces qui ont du style, une histoire ou une vraie utilité.',
  },
  {
    title: 'Collections',
    text: 'Jeux vidéo, consoles, cartes Pokémon, hi-fi, montres ou bijoux : apportez-les-nous, même si vous ne connaissez pas leur valeur.',
  },
  {
    title: 'Belles trouvailles',
    text: 'Pas besoin de connaître la valeur de l’objet. Apportez-le avec les informations que vous avez, nous regarderons le reste ensemble.',
  },
]

const steps = [
  ['01', 'Montrez-nous l’objet', 'Passez en boutique avec l’objet. S’il est trop grand, envoyez-nous d’abord quelques photos nettes et ses dimensions.'],
  ['02', 'Nous le regardons', 'Nous vérifions son état, ce que l’on sait de son origine et l’intérêt qu’il peut avoir pour la boutique.'],
  ['03', 'Vous décidez', 'S’il correspond à la boutique, nous vous faisons une proposition claire. Vous êtes libre de l’accepter ou non.'],
] as const

export default function SellPage() {
  return (
    <ContentPageShell activePage="sell">
      <main className="lbp-content-main lbp-service-page-main">
        <section className="lbp-content-hero lbp-service-page-hero">
          <div className="lbp-content-hero-copy">
            <p className="lbp-content-eyebrow">Estimation à Porrentruy</p>
            <h1 className="lbp-brush">Vendre un objet</h1>
            <p className="lbp-content-lead">
              Vous avez un objet dont vous ne connaissez pas la valeur ? Passez nous le montrer. Nous
              le regarderons avec vous, simplement et sans engagement.
            </p>
            <div className="lbp-content-actions">
              <Link className="lbp-button lbp-button-light" href="/contact">
                Faire estimer un objet
              </Link>
              <Link className="lbp-button lbp-button-dark" href="/boutique">
                Voir la boutique
              </Link>
            </div>
          </div>
        </section>

        <section className="lbp-service-page-section" aria-labelledby="sell-interest-title">
          <p className="lbp-content-eyebrow">Notre sélection</p>
          <h2 className="lbp-brush" id="sell-interest-title">Ce qui peut nous intéresser</h2>
          <div className="lbp-service-page-grid">
            {interests.map((item) => (
              <article className="lbp-content-card" key={item.title}>
                <h3 className="lbp-brush">{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lbp-service-page-section" aria-labelledby="sell-steps-title">
          <p className="lbp-content-eyebrow">Simple et transparent</p>
          <h2 className="lbp-brush" id="sell-steps-title">Comment ça se passe ?</h2>
          <div className="lbp-service-page-steps">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <strong>{number}</strong>
                <h3 className="lbp-brush">{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lbp-service-page-note">
          <h2 className="lbp-brush">Une estimation réaliste</h2>
          <p>
            Un prix vu sur internet n’est pas toujours un prix de vente. Nous regardons l’état de
            l’objet, les ventes réelles et le travail nécessaire avant de pouvoir le proposer en boutique.
          </p>
          <Link className="lbp-button lbp-button-light" href="/contact">Préparer ma visite</Link>
        </section>
      </main>
    </ContentPageShell>
  )
}
