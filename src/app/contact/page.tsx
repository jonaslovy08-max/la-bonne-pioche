import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContentPageShell } from '@/components/layout/content-page-shell'

export const metadata: Metadata = {
  title: 'Contact et horaires',
  description:
    'Une question ou un objet à nous montrer ? Retrouvez l’adresse, les horaires et l’itinéraire de La Bonne Pioche à Porrentruy.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <ContentPageShell activePage="contact">
      <main className="lbp-content-main">
        <section className="lbp-content-hero lbp-contact-hero">
          <div className="lbp-content-hero-copy">
            <p className="lbp-content-eyebrow">La boutique à Porrentruy</p>
            <h1 className="lbp-brush">Nous contacter</h1>
            <Image
              alt="Devanture de La Bonne Pioche à Porrentruy"
              className="lbp-shop-image lbp-contact-inline-image"
              height={1049}
              priority
              src="/images/la-bonne-pioche-boutique-porrentruy.webp"
              width={1448}
            />
            <p className="lbp-content-lead">
              Un objet à nous montrer, un appareil à réparer ou un débarras à préparer ? Passez à la
              boutique : nous prendrons le temps d’en parler avec vous.
            </p>
            <div className="lbp-content-actions">
              <a
                className="lbp-button lbp-button-light"
                href="https://www.google.com/maps/search/?api=1&query=Rue+du+23+Juin+28+2900+Porrentruy"
                rel="noreferrer"
                target="_blank"
              >
                Itinéraire
              </a>
              <Link className="lbp-button lbp-button-dark" href="/qui-sommes-nous">
                Découvrir La Bonne Pioche
              </Link>
            </div>
          </div>

        </section>

        <section className="lbp-contact-grid">
          <article className="lbp-content-card">
            <h2 className="lbp-brush">Adresse</h2>
            <address>
              Rue du 23 Juin 28
              <br />
              2900 Porrentruy
              <br />
              Suisse
            </address>
          </article>

          <article className="lbp-content-card">
            <h2 className="lbp-brush">Horaires</h2>
            <p>
              Lundi : fermé
              <br />
              Mardi-vendredi : 10 h-12 h / 13 h-18 h 30
              <br />
              Samedi : 10 h-17 h
            </p>
          </article>

          <article className="lbp-content-card lbp-contact-preparation">
            <h2 className="lbp-brush">Pour gagner du temps</h2>
            <p>
              Pour une estimation ou une réparation, venez avec l’objet et ses accessoires si vous
              les avez. Pour un débarras, préparez quelques photos, l’adresse et une idée du volume.
            </p>
          </article>
        </section>

        <section className="lbp-contact-map" aria-labelledby="contact-map-title">
          <h2 className="lbp-brush" id="contact-map-title">
            Venir jusqu’à nous
          </h2>
          <p>Rue du 23 Juin 28 · 2900 Porrentruy</p>
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Rue+du+23+Juin+28,+2900+Porrentruy,+Suisse&output=embed"
            title="Plan pour venir à La Bonne Pioche à Porrentruy"
          />
        </section>
      </main>
    </ContentPageShell>
  )
}
