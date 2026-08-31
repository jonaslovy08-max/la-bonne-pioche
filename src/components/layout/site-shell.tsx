import Link from 'next/link'
import type { ReactNode } from 'react'

import { getPrimaryStore, stores } from '@/lib/stores'

interface SiteShellProps {
  children: ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  const primaryStore = getPrimaryStore()
  const year = new Date().getFullYear()

  return (
    <div className="app-frame">
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand-link" href="/">
            <span className="brand-kicker">Porrentruy · Jura</span>
            <span className="brand-name">La Bonne Pioche</span>
          </Link>

          <nav aria-label="Navigation principale" className="site-nav">
            <Link href="/">Accueil</Link>
            <Link href="/#nouveautes">Nouveautés</Link>
            {stores.map((store) => (
              <Link href={`/magasins/${store.slug}`} key={store.slug}>
                {store.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-shell">{children}</main>

      <footer className="site-footer">
        <div className="footer-copy">
          <p>
            Des objets vintage et de seconde main choisis avec soin, au cœur de Porrentruy.
          </p>
          <p>
            {primaryStore.city}, {primaryStore.region}, {primaryStore.country}.
          </p>
        </div>

        <div className="footer-domains">
          <span>Nos adresses sur le web</span>
          <div className="domain-list">
            {primaryStore.domains.map((domain) => (
              <span className="domain-pill" key={domain}>
                {domain}
              </span>
            ))}
          </div>
        </div>

        <p className="footer-meta">© {year} La Bonne Pioche</p>
      </footer>
    </div>
  )
}
