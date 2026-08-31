import Link from 'next/link'

import { SiteShell } from '@/components/layout/site-shell'

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section narrow-section">
        <div className="section-heading">
          <span className="eyebrow">Oups</span>
          <h1 className="section-title">Cette page n&apos;existe pas</h1>
          <p className="section-copy">
            Le lien est peut-être ancien ou l’adresse a été mal saisie. Revenez à l’accueil pour
            retrouver votre chemin.
          </p>
        </div>

        <Link className="button button-primary" href="/">
          Revenir à l&apos;accueil
        </Link>
      </section>
    </SiteShell>
  )
}
