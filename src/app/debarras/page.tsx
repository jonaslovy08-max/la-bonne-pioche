import type { Metadata } from 'next'
import Link from 'next/link'

import { ContentPageShell } from '@/components/layout/content-page-shell'

export const metadata: Metadata = {
  title: 'Service de débarras',
  description:
    'Service de débarras de maisons, appartements, caves et locaux à Porrentruy et dans le Jura, avec tri et valorisation des objets.',
  alternates: { canonical: '/debarras' },
}

const steps = [
  ['01', 'Premier échange', 'Envoyez-nous quelques photos, l’adresse du lieu et une idée du volume. Cela nous aide à préparer la suite.'],
  ['02', 'Visite et estimation', 'Nous venons voir le lieu, son accès, le volume à vider et les objets qui pourraient être repris.'],
  ['03', 'Débarras organisé', 'Après votre accord, nous fixons une date. Ce qui peut encore servir est revendu, donné ou recyclé ; le reste est évacué correctement.'],
] as const

export default function ClearancePage() {
  return (
    <ContentPageShell activePage="clearance">
      <main className="lbp-content-main lbp-service-page-main">
        <section className="lbp-content-hero lbp-service-page-hero">
          <div className="lbp-content-hero-copy">
            <p className="lbp-content-eyebrow">Maisons, appartements et locaux</p>
            <h1 className="lbp-brush">Service de débarras</h1>
            <p className="lbp-content-lead">
              Une maison, un appartement, une cave ou un local à vider ? Nous vous aidons à faire le
              tri, sans tout jeter et sans vous laisser seul face au volume.
            </p>
            <div className="lbp-content-actions">
              <Link className="lbp-button lbp-button-light" href="/contact">
                Demander une estimation
              </Link>
              <Link className="lbp-button lbp-button-dark" href="/qui-sommes-nous">
                Découvrir l’association
              </Link>
            </div>
          </div>
        </section>

        <section className="lbp-service-page-section" aria-labelledby="clearance-steps-title">
          <p className="lbp-content-eyebrow">Un déroulement clair</p>
          <h2 className="lbp-brush" id="clearance-steps-title">Comment ça se passe ?</h2>
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

        <section className="lbp-service-page-section" aria-labelledby="clearance-scope-title">
          <p className="lbp-content-eyebrow">Chaque lieu est différent</p>
          <h2 className="lbp-brush" id="clearance-scope-title">Ce que nous pouvons vider</h2>
          <div className="lbp-service-page-grid">
            <article className="lbp-content-card">
              <h3 className="lbp-brush">Habitations</h3>
              <p>Maisons et appartements à vider après un déménagement, un départ ou une succession.</p>
            </article>
            <article className="lbp-content-card">
              <h3 className="lbp-brush">Espaces annexes</h3>
              <p>Caves, greniers, garages et dépendances, après vérification de l’accès et du contenu.</p>
            </article>
            <article className="lbp-content-card">
              <h3 className="lbp-brush">Locaux</h3>
              <p>Petits commerces, bureaux et autres locaux, après une première visite.</p>
            </article>
          </div>
        </section>

        <section className="lbp-service-page-note">
          <h2 className="lbp-brush">Trier avant de jeter</h2>
          <p>
            Certains objets peuvent être repris et leur valeur déduite du prix du débarras. Nous vous
            l’expliquons clairement avant l’intervention. Le reste est donné, recyclé ou évacué correctement.
          </p>
          <Link className="lbp-button lbp-button-light" href="/contact">Parler de mon débarras</Link>
        </section>
      </main>
    </ContentPageShell>
  )
}
