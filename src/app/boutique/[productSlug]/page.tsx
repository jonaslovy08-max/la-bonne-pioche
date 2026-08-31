import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ContentPageShell } from '@/components/layout/content-page-shell'
import { ProductGallery } from '@/components/product-gallery'
import { getShopCategoryLabel, getShopProduct, shopProducts } from '@/lib/shop'

export const dynamicParams = false

interface ProductPageProps {
  params: Promise<{ productSlug: string }>
}

export function generateStaticParams() {
  return shopProducts.map((product) => ({ productSlug: product.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params
  const product = getShopProduct(productSlug)

  if (!product) {
    return { title: 'Objet introuvable' }
  }

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/boutique/${product.slug}` },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productSlug } = await params
  const product = getShopProduct(productSlug)

  if (!product) {
    notFound()
  }

  return (
    <ContentPageShell activePage="boutique">
      <main className="lbp-product-page">
        <Link className="lbp-product-back" href="/boutique#articles">
          Retour à la boutique
        </Link>

        <div className="lbp-product-layout">
          <ProductGallery images={product.images} productName={product.name} />

          <section className="lbp-product-info">
            <p className="lbp-content-eyebrow">{getShopCategoryLabel(product.category)}</p>
            <h1>{product.name}</h1>
            <p className="lbp-product-page-price">{product.price}</p>
            <p className="lbp-product-condition">{product.condition} · Porrentruy</p>
            <p className="lbp-product-description">{product.description}</p>

            <dl className="lbp-product-details">
              {product.details.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>

            <div className="lbp-product-actions">
              <Link className="lbp-button lbp-button-light" href="/contact">
                Contacter la boutique
              </Link>
              <a
                className="lbp-button lbp-button-dark"
                href="https://www.google.com/maps/search/?api=1&query=Rue+du+23+Juin+28+2900+Porrentruy"
                rel="noreferrer"
                target="_blank"
              >
                Voir l’itinéraire
              </a>
            </div>
          </section>
        </div>
      </main>
    </ContentPageShell>
  )
}
