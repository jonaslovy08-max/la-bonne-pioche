import type { StoreConfig } from '@/types/store'

export const stores = [
  {
    slug: 'la-bonne-pioche',
    name: 'La Bonne Pioche',
    tagline: 'Des objets vintage et de seconde main au cœur de Porrentruy',
    shortDescription:
      'Une sélection pleine de caractère, entre objets utiles, pièces vintage et trouvailles de collection.',
    description:
      'Chez La Bonne Pioche, chaque objet est choisi pour une raison : son style, son histoire, son utilité ou le plaisir qu’il peut encore apporter.',
    locale: 'fr-CH',
    openGraphLocale: 'fr_CH',
    city: 'Porrentruy',
    region: 'Jura',
    country: 'Suisse',
    domains: ['labonnepioche.ch', 'bonnepioche.ch', 'pioche.ch'],
    heroImage: {
      src: '/images/la-bonne-pioche-boutique-porrentruy.jpg',
      alt: 'Vue de la boutique La Bonne Pioche à Porrentruy',
    },
    logo: {
      src: '/logos/la-bonne-pioche-logo.svg',
      alt: 'Logo La Bonne Pioche',
      width: 588,
      height: 391,
    },
    gallery: [
      {
        src: '/images/la-bonne-pioche-boutique-porrentruy.jpg',
        alt: 'Façade et ambiance de La Bonne Pioche',
      },
      {
        src: '/images/canape_la-bonne_pioche.webp',
        alt: 'Sélection de mobilier et de décoration vintage',
      },
      {
        src: '/images/pioches-la-bonne-pioche.webp',
        alt: 'Les deux pioches de l’identité La Bonne Pioche',
      },
      {
        src: '/images/debarras-la-bonne-pioche.webp',
        alt: 'Illustration du service de débarras',
      },
    ],
    highlights: [
      {
        label: 'Chez nous',
        value: 'Porrentruy, Ajoie',
      },
      {
        label: 'À découvrir',
        value: 'Seconde main, vintage, collection',
      },
      {
        label: 'Nos services',
        value: 'Estimation, réparation, débarras',
      },
    ],
    categories: [
      'Mobilier et décoration',
      'Luminaires et vaisselle',
      'Jeux vidéo et consoles',
      'Cartes Pokémon et collection',
      'Hi-fi et électronique vintage',
      'Montres, bijoux et accessoires',
      'Vinyles, livres et affiches',
      'Objets rares ou insolites',
    ],
    services: [
      {
        title: 'Des objets choisis un à un',
        description:
          'Nous retenons les pièces qui ont encore quelque chose à offrir : une belle allure, une vraie utilité ou une histoire à poursuivre.',
      },
      {
        title: 'Un débarras fait avec soin',
        description:
          'Nous regardons ce qui peut être repris, donné ou recyclé, puis nous vous expliquons clairement comment l’estimation est calculée.',
      },
      {
        title: 'Une nouvelle chance pour chaque trouvaille',
        description:
          'Quand c’est possible, les objets sont nettoyés, testés et remis en valeur avant de rejoindre la boutique.',
      },
    ],
    coverage: ['Porrentruy', 'Ajoie', 'Canton du Jura'],
    seoKeywords: [
      'boutique seconde main Porrentruy',
      'magasin vintage Jura',
      'objets de collection Suisse',
      'debarras Porrentruy',
      'brocante contemporaine Ajoie',
    ],
  },
] satisfies StoreConfig[]

export const defaultStoreSlug = stores[0]?.slug ?? ''

export function getPrimaryStore() {
  return stores[0]
}

export function getStoreBySlug(slug: string) {
  return stores.find((store) => store.slug === slug)
}
