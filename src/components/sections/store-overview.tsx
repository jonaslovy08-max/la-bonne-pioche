import Image from 'next/image'

import type { StoreConfig } from '@/types/store'

interface StoreOverviewProps {
  store: StoreConfig
}

export function StoreOverview({ store }: StoreOverviewProps) {
  return (
    <>
      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Notre façon de faire</span>
          <h2 className="section-title">Une boutique où chaque objet a sa place</h2>
          <p className="section-copy">{store.shortDescription}</p>
        </div>

        <div className="card-grid card-grid-three">
          {store.services.map((service) => (
            <article className="surface-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <article className="surface-panel">
          <div className="section-heading section-heading-compact">
            <span className="eyebrow">À chiner</span>
            <h2 className="section-title">Ce que vous pouvez trouver</h2>
          </div>

          <div className="category-cloud">
            {store.categories.map((category) => (
              <span className="category-pill" key={category}>
                {category}
              </span>
            ))}
          </div>
        </article>

        <article className="surface-panel">
          <div className="section-heading section-heading-compact">
            <span className="eyebrow">Ici, chez nous</span>
            <h2 className="section-title">La Bonne Pioche dans le Jura</h2>
          </div>

          <div className="coverage-list">
            {store.coverage.map((area) => (
              <span className="coverage-pill" key={area}>
                {area}
              </span>
            ))}
          </div>

          <p className="section-copy">
            Notre quotidien se joue à Porrentruy et dans l’Ajoie, au plus près des personnes qui
            viennent vendre, réparer, débarrasser ou simplement chiner.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">En images</span>
          <h2 className="section-title">Un aperçu de notre univers</h2>
          <p className="section-copy">
            La devanture, quelques objets et l’esprit de la maison. Le reste change au fil des
            arrivages et des bonnes trouvailles.
          </p>
        </div>

        <div className="gallery-grid">
          {store.gallery.map((asset) => (
            <figure className="gallery-card" key={asset.src}>
              <div className="gallery-image-wrap">
                <Image
                  alt={asset.alt}
                  className="cover-image"
                  fill
                  sizes="(max-width: 900px) 100vw, 25vw"
                  src={asset.src}
                />
              </div>
              <figcaption>{asset.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
