'use client'

import Link from 'next/link'
import { useDeferredValue, useState } from 'react'

import {
  getShopCategoryLabel,
  shopCategories,
  shopProducts,
  type ShopCategoryId,
} from '@/lib/shop'

function normalizeSearch(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

const featuredProducts = shopProducts.slice(0, 5)

export function MarketListings() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState<'all' | ShopCategoryId>('all')
  const deferredSearchTerm = useDeferredValue(searchTerm)
  const query = normalizeSearch(deferredSearchTerm)
  const visibleProducts = shopProducts.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesQuery =
      !query ||
      normalizeSearch(
        [
          product.name,
          product.price,
          product.condition,
          product.shortDescription,
          getShopCategoryLabel(product.category),
        ].join(' '),
      ).includes(query)

    return matchesCategory && matchesQuery
  })

  return (
    <>
      <section aria-labelledby="shop-featured-title" className="lbp-shop-featured">
        <div className="lbp-section-title-wrap">
          <h2 className="lbp-brush lbp-section-title" id="shop-featured-title">
            Sélection du moment
          </h2>
          <span aria-hidden="true" className="lbp-brush-line" />
        </div>

        <div className="lbp-shop-featured-grid">
          {featuredProducts.map((product) => (
            <article className="lbp-shop-featured-card" key={product.slug}>
              <Link aria-label={`Voir l’annonce : ${product.name}`} href={`/boutique/${product.slug}`}>
                <div
                  aria-label={product.images[0].alt}
                  className={`lbp-market-image ${product.images[0].crop}`}
                  role="img"
                >
                  <span>{product.images.length} photos</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="shop-catalog-title" className="lbp-market-listings" id="articles">
        <div className="lbp-market-listings-heading">
          <p className="lbp-content-eyebrow">Toute la boutique</p>
          <h2 className="lbp-brush" id="shop-catalog-title">
            Tous les articles
          </h2>
        </div>

        <div className="lbp-market-search" role="search">
          <label htmlFor="shop-search">Rechercher dans la boutique</label>
          <div className="lbp-market-search-field">
            <input
              autoComplete="off"
              id="shop-search"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Que cherchez-vous ?"
              type="search"
              value={searchTerm}
            />
            {searchTerm ? (
              <button aria-label="Effacer la recherche" onClick={() => setSearchTerm('')} type="button">
                Effacer
              </button>
            ) : null}
            <span aria-hidden="true" className="lbp-market-search-icon">
              <svg fill="none" viewBox="0 0 32 32">
                <circle cx="14" cy="14" r="9" />
                <path d="m21 21 7 7" />
              </svg>
            </span>
          </div>
        </div>

        <div
          aria-label="Filtrer les articles par catégorie"
          className="lbp-shop-category-filters"
          id="categories"
        >
          <button
            aria-pressed={activeCategory === 'all'}
            className={activeCategory === 'all' ? 'is-active' : ''}
            onClick={() => setActiveCategory('all')}
            type="button"
          >
            Tout voir
          </button>
          {shopCategories.map((category) => (
            <button
              aria-pressed={activeCategory === category.id}
              className={activeCategory === category.id ? 'is-active' : ''}
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              type="button"
            >
              {category.label}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="lbp-market-result-count">
          {visibleProducts.length === 1
            ? '1 objet trouvé'
            : `${visibleProducts.length} objets trouvés`}
        </p>

        {visibleProducts.length > 0 ? (
          <div className="lbp-market-grid">
            {visibleProducts.map((product) => (
              <article className="lbp-market-card" key={product.slug}>
                <Link aria-label={`Voir l’annonce : ${product.name}`} href={`/boutique/${product.slug}`}>
                  <div
                    aria-label={product.images[0].alt}
                    className={`lbp-market-image ${product.images[0].crop}`}
                    role="img"
                  >
                    <span>{product.images.length} photos</span>
                  </div>
                  <div className="lbp-market-card-copy">
                    <p className="lbp-market-category">{getShopCategoryLabel(product.category)}</p>
                    <h3>{product.name}</h3>
                    <p className="lbp-market-summary">{product.shortDescription}</p>
                    <p className="lbp-market-price">{product.price}</p>
                    <p className="lbp-market-location">Porrentruy · Jura</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="lbp-market-no-results">
            <h3 className="lbp-brush">Pas encore de bonne pioche</h3>
            <p>Aucun objet ne correspond à cette sélection pour le moment.</p>
            <button
              className="lbp-button lbp-button-light"
              onClick={() => {
                setActiveCategory('all')
                setSearchTerm('')
              }}
              type="button"
            >
              Voir tous les articles
            </button>
          </div>
        )}
      </section>
    </>
  )
}
