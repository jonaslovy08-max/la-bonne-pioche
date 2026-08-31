import Link from 'next/link'

import { ContentPageShell } from '@/components/layout/content-page-shell'
import { MarketListings } from '@/components/market-listings'

export function ShopPage() {
  return (
    <ContentPageShell activePage="boutique">
      <main className="lbp-shop-main">
        <section className="lbp-shop-hero">
          <div className="lbp-shop-hero-copy">
            <p className="lbp-content-eyebrow">Seconde main · vintage · collection</p>
            <h1 className="lbp-brush">La boutique</h1>
            <p className="lbp-content-lead">
              Des objets choisis un à un, avec du style, une histoire et encore beaucoup à vivre.
            </p>
          </div>
        </section>

        <MarketListings />

        <section className="lbp-shop-visit">
          <p className="lbp-content-eyebrow">La sélection change souvent</p>
          <h2 className="lbp-brush">Le mieux, c’est encore de venir chiner</h2>
          <p>
            Tout n’est pas encore en ligne, et la sélection change souvent. Passez à la boutique de
            Porrentruy : il y a presque toujours quelque chose de nouveau à découvrir.
          </p>
          <div className="lbp-content-actions">
            <a
              className="lbp-button lbp-button-light"
              href="https://www.google.com/maps/search/?api=1&query=Rue+du+23+Juin+28+2900+Porrentruy"
              rel="noreferrer"
              target="_blank"
            >
              Venir en boutique
            </a>
            <Link className="lbp-button lbp-button-dark" href="/contact">
              Nous contacter
            </Link>
          </div>
        </section>
      </main>
    </ContentPageShell>
  )
}
