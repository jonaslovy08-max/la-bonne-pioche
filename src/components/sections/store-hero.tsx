import Image from 'next/image'
import Link from 'next/link'

import type { StoreConfig } from '@/types/store'

interface StoreHeroProps {
  store: StoreConfig
  eyebrow: string
  primaryCtaHref: string
  primaryCtaLabel: string
  secondaryCtaHref: string
  secondaryCtaLabel: string
}

export function StoreHero({
  store,
  eyebrow,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
}: StoreHeroProps) {
  return (
    <section className="section hero">
      <div className="hero-copy">
        <span className="eyebrow">{eyebrow}</span>

        <div className="brand-lockup">
          <div className="brand-logo-wrap">
            <Image
              alt={store.logo.alt}
              className="brand-logo"
              height={store.logo.height}
              priority
              src={store.logo.src}
              width={store.logo.width}
            />
          </div>

          <div>
            <h1 className="headline">{store.name}</h1>
            <p className="tagline">{store.tagline}</p>
          </div>
        </div>

        <p className="lead">{store.description}</p>

        <div className="cta-row">
          <Link className="button button-primary" href={primaryCtaHref}>
            {primaryCtaLabel}
          </Link>
          <Link className="button button-secondary" href={secondaryCtaHref}>
            {secondaryCtaLabel}
          </Link>
        </div>

        <div className="hero-facts">
          {store.highlights.map((highlight) => (
            <article className="fact-card" key={highlight.label}>
              <span>{highlight.label}</span>
              <strong>{highlight.value}</strong>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-visual">
          <Image
            alt={store.heroImage.alt}
            className="cover-image"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            src={store.heroImage.src}
          />
        </div>

        <div className="hero-caption">
          <span>À Porrentruy</span>
          <p>
            Passez la porte, prenez le temps de regarder et laissez-vous surprendre par ce qui vient
            d’arriver.
          </p>
        </div>
      </div>
    </section>
  )
}
