import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContentPageShell } from '@/components/layout/content-page-shell'

export const metadata: Metadata = {
  title: 'Qui sommes-nous ?',
  description:
    'Découvrez l’histoire et l’esprit de La Bonne Pioche, association et boutique de seconde main à Porrentruy.',
  alternates: { canonical: '/qui-sommes-nous' },
}

const activities = [
  {
    title: 'La boutique',
    text: 'Nous choisissons des objets qui ont du style, une histoire ou simplement encore beaucoup à offrir.',
  },
  {
    title: 'La remise en valeur',
    text: 'Avant de rejoindre les rayons, chaque trouvaille est examinée, nettoyée et, lorsque c’est possible, testée.',
  },
  {
    title: 'Les services',
    text: 'Vous pouvez aussi venir nous voir pour une estimation, une réparation ou un débarras à organiser.',
  },
]

export default function AboutPage() {
  return (
    <ContentPageShell activePage="about">
      <main className="lbp-content-main">
        <section className="lbp-content-hero lbp-about-hero">
          <div className="lbp-content-hero-copy">
            <p className="lbp-content-eyebrow">Une association à Porrentruy</p>
            <h1 className="lbp-brush">Qui sommes-nous ?</h1>
            <p className="lbp-content-lead">
              Derrière La Bonne Pioche, il y a une association et une idée simple : donner une
              nouvelle place aux objets qui méritent de continuer leur histoire.
            </p>
            <div className="lbp-content-actions">
              <Link className="lbp-button lbp-button-light" href="/boutique">
                Explorer la boutique
              </Link>
              <Link className="lbp-button lbp-button-dark" href="/contact">
                Nous contacter
              </Link>
            </div>
          </div>

        </section>

        <section className="lbp-about-statement">
          <h2 className="lbp-brush">Donner envie d’une seconde vie</h2>
          <p>
            Nous aimons les objets qui ont quelque chose à raconter : une belle ligne, une vraie
            utilité, un souvenir ou ce petit détail qui attire l’œil. Nous les choisissons un à un,
            puis nous les présentons avec soin pour qu’ils donnent envie d’être adoptés à nouveau.
          </p>
        </section>

        <section className="lbp-activity-grid" aria-label="Nos activités">
          {activities.map((activity) => (
            <article className="lbp-content-card" key={activity.title}>
              <h2 className="lbp-brush">{activity.title}</h2>
              <p>{activity.text}</p>
            </article>
          ))}
        </section>

        <section className="lbp-about-local">
          <Image
            alt="Illustration de l’identité La Bonne Pioche"
            height={1254}
            src="/images/pioches-la-bonne-pioche.webp"
            width={1254}
          />
          <div>
            <h2 className="lbp-brush">Ancrée dans le Jura</h2>
            <p>
              La Bonne Pioche vit à Porrentruy, au cœur de l’Ajoie. Lors d’un débarras, nous gardons
              ce qui peut encore servir, être vendu ou donné, puis nous confions le reste aux bonnes
              filières de recyclage.
            </p>
          </div>
        </section>
      </main>
    </ContentPageShell>
  )
}
