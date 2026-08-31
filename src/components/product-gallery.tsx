'use client'

import { useState } from 'react'

import type { ShopProductImage } from '@/lib/shop'

interface ProductGalleryProps {
  images: ReadonlyArray<ShopProductImage>
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)
  const image = images[activeImage]

  return (
    <div className="lbp-product-gallery">
      <div
        aria-label={image.alt}
        className={`lbp-product-gallery-main ${image.crop} ${
          image.view === 'detail' ? 'is-detail' : ''
        }`}
        role="img"
      />

      {images.length > 1 ? (
        <div aria-label={`Photos de ${productName}`} className="lbp-product-thumbnails">
          {images.map((galleryImage, index) => (
            <button
              aria-label={`Afficher la photo ${index + 1} sur ${images.length}`}
              aria-pressed={index === activeImage}
              className={index === activeImage ? 'is-active' : undefined}
              key={`${galleryImage.alt}-${index}`}
              onClick={() => setActiveImage(index)}
              type="button"
            >
              <span
                aria-hidden="true"
                className={`lbp-product-thumbnail-image ${galleryImage.crop} ${
                  galleryImage.view === 'detail' ? 'is-detail' : ''
                }`}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
