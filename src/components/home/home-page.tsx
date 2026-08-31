'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, type PointerEvent } from 'react'

import { MainFooter } from '@/components/layout/main-footer'
import { MainHeader } from '@/components/layout/main-header'
import { BlendCursor } from '@/components/ui/blend-cursor'
import { shopCategories } from '@/lib/shop'

const heroSlides = [
  {
    id: 'boutique',
    label: 'Objets vintage et bonnes pioches',
    imageClass: '',
    images: [
      {
        alt: 'Fauteuil club vintage en cuir',
        height: 1000,
        src: '/images/canape_la-bonne_pioche.webp',
        width: 1000,
      },
      {
        alt: 'Lampe sculpturale vintage en bois et laiton',
        height: 1254,
        src: '/images/hero-boutique-lampe.png',
        width: 1254,
      },
      {
        alt: 'Récepteur hi-fi vintage en bois et aluminium',
        height: 1254,
        src: '/images/hero-boutique-hifi.png',
        width: 1254,
      },
      {
        alt: 'Globe terrestre vintage sur pied en laiton',
        height: 1254,
        src: '/images/hero-boutique-globe.png',
        width: 1254,
      },
    ],
    primaryAction: { label: 'Trouver une pépite', href: '/boutique' },
    secondaryAction: { label: 'Vendre un objet', href: '/vendre-un-objet' },
  },
  {
    id: 'reparation',
    label: 'Réparation d’appareils électroniques',
    imageClass: 'lbp-hero-image-repair',
    images: [
      {
        alt: 'Smartphone ouvert avec outils de réparation de précision',
        height: 1536,
        src: '/images/hero-reparation-smartphone.png',
        width: 1024,
      },
      {
        alt: 'Tablette ouverte avec outils de réparation',
        height: 1254,
        src: '/images/hero-reparation-tablette.png',
        width: 1254,
      },
      {
        alt: 'Manette de jeu ouverte pour une réparation',
        height: 1254,
        src: '/images/hero-reparation-manette.png',
        width: 1254,
      },
      {
        alt: 'Ordinateur portable ouvert pour une réparation',
        height: 1254,
        src: '/images/hero-reparation-ordinateur.png',
        width: 1254,
      },
    ],
    primaryAction: { label: 'Faire réparer mon appareil', href: '/reparations' },
    secondaryAction: { label: 'Choisir mon appareil', href: '/reparations' },
  },
  {
    id: 'gaming',
    label: 'Gaming et rétrogaming',
    imageClass: 'lbp-hero-image-gaming',
    images: [
      {
        alt: 'Console rétro, manettes, cartouches et console portable de collection',
        height: 1254,
        src: '/images/hero-gaming-retrogaming.png',
        width: 1254,
      },
      {
        alt: 'Téléviseur cathodique avec console et manette rétro',
        height: 1254,
        src: '/images/hero-gaming-console-crt.png',
        width: 1254,
      },
      {
        alt: 'Collection de consoles de jeu portables vintage',
        height: 1254,
        src: '/images/hero-gaming-portables.png',
        width: 1254,
      },
      {
        alt: 'Joystick rétro avec manettes et cartouches de jeu',
        height: 1254,
        src: '/images/hero-gaming-joystick.png',
        width: 1254,
      },
    ],
    primaryAction: { label: 'Explorer le gaming', href: '#nouveautes' },
    secondaryAction: { label: 'Voir les nouveautés', href: '#nouveautes' },
  },
] as const

const products = [
  {
    name: 'Moulin à poivre vintage, 1935-1937',
    price: 'CHF 189.-',
    crop: 'product-crop-1',
  },
  {
    name: 'Carte Pokémon Koraidon EX, non gradée',
    price: 'CHF 249.-',
    crop: 'product-crop-2',
  },
  {
    name: 'Guitare électrique vintage',
    price: "CHF 1'290.-",
    crop: 'product-crop-3',
  },
  {
    name: 'Console Super Nintendo',
    price: 'CHF 249.-',
    crop: 'product-crop-4',
  },
  {
    name: 'Lampe vintage en bois',
    price: 'CHF 189.-',
    crop: 'product-crop-5',
  },
]

export function HomePage() {
  const [heroState, setHeroState] = useState({ image: 0, slide: 0 })
  const productTrack = useRef<HTMLDivElement>(null)
  const heroSwipeStart = useRef<{ x: number; y: number } | null>(null)
  const activeHeroSlide = heroState.slide
  const activeHeroImage = heroState.image
  const heroSlide = heroSlides[activeHeroSlide]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroState((current) => ({
        image: 0,
        slide: (current.slide + 1) % heroSlides.length,
      }))
    }, 9000)

    return () => window.clearInterval(interval)
  }, [activeHeroSlide])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroState((current) => ({
        ...current,
        image: (current.image + 1) % heroSlide.images.length,
      }))
    }, 2100)

    return () => window.clearInterval(interval)
  }, [activeHeroSlide, heroSlide.images.length])

  const moveProducts = (direction: number) => {
    productTrack.current?.scrollBy({
      left: direction * Math.min(productTrack.current.clientWidth, 720),
      behavior: 'smooth',
    })
  }

  const moveHero = (direction: number) => {
    setHeroState((current) => ({
      image: 0,
      slide: (current.slide + direction + heroSlides.length) % heroSlides.length,
    }))
  }

  const handleHeroPointerDown = (event: PointerEvent<HTMLElement>) => {
    heroSwipeStart.current = { x: event.clientX, y: event.clientY }
  }

  const handleHeroPointerUp = (event: PointerEvent<HTMLElement>) => {
    const start = heroSwipeStart.current
    heroSwipeStart.current = null

    if (!start) return

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      moveHero(deltaX < 0 ? 1 : -1)
    }
  }

  return (
    <div className="lbp-site">
      <BlendCursor />
      <MainHeader />

      <main>
        <section
          aria-label={heroSlide.label}
          aria-live="polite"
          className="lbp-hero"
          id="boutique"
          key={heroSlide.id}
          onPointerCancel={() => { heroSwipeStart.current = null }}
          onPointerDown={handleHeroPointerDown}
          onPointerUp={handleHeroPointerUp}
        >
          <div
            aria-label={heroSlide.images[activeHeroImage].alt}
            className="lbp-hero-visual"
            role="img"
          >
            {heroSlide.images.map((heroImage, imageIndex) => (
              <Image
                alt=""
                aria-hidden="true"
                className={`lbp-hero-image ${heroSlide.imageClass} ${
                  imageIndex === activeHeroImage ? 'is-active' : ''
                }`}
                height={heroImage.height}
                key={heroImage.src}
                loading={imageIndex === 0 ? 'eager' : undefined}
                priority={activeHeroSlide === 0 && imageIndex === 0}
                src={heroImage.src}
                width={heroImage.width}
              />
            ))}
          </div>

          <div className="lbp-hero-title-wrap">
            {activeHeroSlide === 0 ? (
              <h1 className="lbp-brush lbp-hero-title">
                Objets
                <br />
                vintage
                <br />
                <span className="lbp-hero-ampersand">&amp;</span>
                <br />
                bonnes
                <br />
                pioches
              </h1>
            ) : activeHeroSlide === 1 ? (
              <h1 className="lbp-brush lbp-hero-title lbp-hero-title-repair">
                <span className="lbp-hero-title-kicker">Réparation</span>
                <span className="lbp-hero-title-main">
                  Smart
                  <br />
                  phones
                </span>
                <span className="lbp-hero-title-subtitle">
                  Consoles, tablettes,
                  <br />
                  ordinateurs
                </span>
              </h1>
            ) : (
              <h1 className="lbp-brush lbp-hero-title lbp-hero-title-gaming">
                <span>Gaming</span>
                <span className="lbp-hero-gaming-ampersand">&amp;</span>
                <span>Retro</span>
                <span>gaming</span>
              </h1>
            )}
          </div>

          <div className="lbp-hero-actions">
            <Link className="lbp-button lbp-button-light" href={heroSlide.primaryAction.href}>
              {heroSlide.primaryAction.label}
            </Link>
            <Link className="lbp-button lbp-button-dark" href={heroSlide.secondaryAction.href}>
              {heroSlide.secondaryAction.label}
            </Link>
            <div aria-label="Choisir une image d’accueil" className="lbp-dots">
              {heroSlides.map((slide, index) => (
                <button
                  aria-label={`Afficher la présentation ${index + 1} : ${slide.label}`}
                  aria-pressed={index === activeHeroSlide}
                  className={index === activeHeroSlide ? 'is-active' : undefined}
                  key={slide.id}
                  onClick={() => setHeroState({ image: 0, slide: index })}
                  type="button"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="lbp-section lbp-products" id="nouveautes">
          <SectionTitle>Nouveautés</SectionTitle>

          <div className="lbp-carousel-shell">
            <button
              aria-label="Voir les produits précédents"
              className="lbp-carousel-arrow lbp-carousel-arrow-left"
              onClick={() => moveProducts(-1)}
              type="button"
            >
              <Image
                alt=""
                aria-hidden="true"
                className="lbp-slider-arrow-image"
                height={59}
                src="/icons/brush-arrow.svg"
                width={33}
              />
            </button>

            <div className="lbp-product-track" ref={productTrack}>
              {products.map((product) => (
                <article className="lbp-product-card" key={product.name}>
                  <div className={`lbp-product-image ${product.crop}`} role="img" aria-label={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </article>
              ))}
            </div>

            <button
              aria-label="Voir les produits suivants"
              className="lbp-carousel-arrow lbp-carousel-arrow-right"
              onClick={() => moveProducts(1)}
              type="button"
            >
              <Image
                alt=""
                aria-hidden="true"
                className="lbp-slider-arrow-image"
                height={59}
                src="/icons/brush-arrow.svg"
                width={33}
              />
            </button>
          </div>
        </section>

        <section className="lbp-section lbp-categories" aria-labelledby="categories-title">
          <SectionTitle id="categories-title">Explorer la boutique</SectionTitle>
          <div className="lbp-category-grid">
            {shopCategories.map((category) => (
              <Link className="lbp-category-button lbp-brush" href="/boutique#categories" key={category.id}>
                {category.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="lbp-service" id="vendre">
          <div className="lbp-service-art">
            <Image
              alt="Illustration de deux objets à faire estimer"
              height={1254}
              loading="eager"
              src="/images/achat-la-bonne-pioche.webp"
              width={1254}
            />
          </div>
          <div className="lbp-service-copy">
            <SectionTitle>Vendre un objet</SectionTitle>
            <p>Vous avez un objet dont vous ne savez que faire ? Passez nous le montrer.</p>
          </div>
          <div className="lbp-service-actions">
            <Link className="lbp-button lbp-button-light" href="/vendre-un-objet">
              Faire estimer un objet
            </Link>
          </div>
        </section>

        <section className="lbp-service" id="reparations">
          <div className="lbp-service-art">
            <Image
              alt="Illustration d'appareils électroniques à réparer"
              height={1254}
              loading="eager"
              src="/images/reparations-la-bonne-pioche.webp"
              width={1254}
            />
          </div>
          <div className="lbp-service-copy">
            <SectionTitle>L&apos;atelier de réparations</SectionTitle>
            <p>Écran cassé, batterie fatiguée ou appareil capricieux ? Nous regarderons ce qu’il a.</p>
          </div>
          <div className="lbp-service-actions lbp-service-actions-stack">
            <Link className="lbp-button lbp-button-light" href="/reparations">
              Faire réparer mon appareil
            </Link>
            <Link className="lbp-button lbp-button-dark" href="/reparations">
              Choisir mon appareil
            </Link>
          </div>
        </section>

        <section className="lbp-service" id="debarras">
          <div className="lbp-service-art">
            <Image
              alt="Illustration du service de débarras"
              height={1254}
              loading="eager"
              src="/images/debarras-la-bonne-pioche.webp"
              width={1254}
            />
          </div>
          <div className="lbp-service-copy">
            <SectionTitle>Service de débarras</SectionTitle>
            <p>Une maison, une cave ou un local à vider ? Nous vous aidons à trier et à faire de la place.</p>
          </div>
          <div className="lbp-service-actions">
            <Link className="lbp-button lbp-button-light" href="/debarras">
              Demander une estimation
            </Link>
          </div>
        </section>

        <section className="lbp-infos" id="infos">
          <Image
            alt="La Bonne Pioche"
            className="lbp-infos-logo"
            height={252}
            loading="eager"
            src="/logos/la-bonne-pioche-logo.svg"
            width={500}
          />

          <SectionTitle>La boutique à Porrentruy</SectionTitle>

          <Image
            alt="La devanture de La Bonne Pioche à Porrentruy"
            className="lbp-shop-image"
            height={1049}
            loading="eager"
            src="/images/la-bonne-pioche-boutique-porrentruy.webp"
            width={1448}
          />

          <div className="lbp-infos-copy">
            <address className="lbp-address">
              Rue du 23 Juin 28
              <br />
              2900 Porrentruy
            </address>

            <div className="lbp-hours">
              <h3 className="lbp-brush">Horaires :</h3>
              <p>
                Lundi : fermé
                <br />
                Mardi-vendredi :
                <br />
                10 h-12 h / 13 h-18 h 30
                <br />
                Samedi : 10 h-17 h
              </p>
            </div>
          </div>

          <div className="lbp-visit">
            <h2 className="lbp-brush">Venir en boutique</h2>
            <span aria-hidden="true" className="lbp-visit-arrow">
              <Image alt="" height={59} src="/icons/brush-arrow.svg" width={33} />
            </span>
            <div className="lbp-visit-actions">
              <a
                className="lbp-button lbp-button-light"
                href="https://www.google.com/maps/search/?api=1&query=Rue+du+23+Juin+28+2900+Porrentruy"
                rel="noreferrer"
                target="_blank"
              >
                Itinéraire
              </a>
              <Link className="lbp-button lbp-button-light" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  )
}

interface SectionTitleProps {
  children: React.ReactNode
  id?: string
}

function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <div className="lbp-section-title-wrap">
      <h2 className="lbp-brush lbp-section-title" id={id}>
        {children}
      </h2>
      <span aria-hidden="true" className="lbp-brush-line" />
    </div>
  )
}
