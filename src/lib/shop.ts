export const shopCategories = [
  { id: 'vintage-decoration', label: 'Vintage & décoration' },
  { id: 'gaming-retrogaming', label: 'Gaming & rétrogaming' },
  { id: 'instruments-musique', label: 'Instruments de musique' },
  { id: 'art-objets-culturels', label: 'Art & objets culturels' },
  { id: 'meubles', label: 'Meubles' },
  { id: 'pokemon-collections', label: 'Pokémon & collections' },
  { id: 'hifi-audio', label: 'Hi-fi & audio' },
  { id: 'montres-bijoux', label: 'Montres & bijoux' },
] as const

export type ShopCategoryId = (typeof shopCategories)[number]['id']

export interface ShopProductImage {
  alt: string
  crop: string
  view: 'main' | 'detail'
}

export interface ShopProduct {
  category: ShopCategoryId
  condition: string
  description: string
  details: ReadonlyArray<{ label: string; value: string }>
  images: ReadonlyArray<ShopProductImage>
  name: string
  price: string
  shortDescription: string
  slug: string
}

export const shopProducts = [
  {
    slug: 'moulin-poivre-vintage-1935-1937',
    name: 'Moulin à poivre vintage, 1935-1937',
    price: 'CHF 189.-',
    category: 'vintage-decoration',
    condition: 'Objet vintage',
    shortDescription: 'Un bel objet utilitaire devenu une vraie pièce de décoration.',
    description:
      'Ce moulin à poivre ancien séduit par son bois patiné, sa mécanique apparente et sa silhouette pleine de caractère. Une pièce à exposer dans une cuisine ou à intégrer à une collection d’objets du quotidien.',
    details: [
      { label: 'Époque', value: '1935-1937' },
      { label: 'Matière', value: 'Bois et métal' },
      { label: 'Lieu', value: 'Porrentruy' },
      { label: 'Disponibilité', value: 'À confirmer en boutique' },
    ],
    images: [
      { alt: 'Vue principale du moulin à poivre vintage', crop: 'product-crop-1', view: 'main' },
      { alt: 'Détail du moulin à poivre vintage', crop: 'product-crop-1', view: 'detail' },
    ],
  },
  {
    slug: 'carte-pokemon-koraidon-ex',
    name: 'Carte Pokémon Koraidon EX, non gradée',
    price: 'CHF 249.-',
    category: 'pokemon-collections',
    condition: 'Non gradée',
    shortDescription: 'Une carte de collection à examiner tranquillement en boutique.',
    description:
      'Carte Pokémon Koraidon EX proposée non gradée. Son état et ses détails peuvent être observés directement à la boutique avant toute décision, afin que vous sachiez précisément ce que vous achetez.',
    details: [
      { label: 'Type', value: 'Carte de collection' },
      { label: 'Gradation', value: 'Non gradée' },
      { label: 'Lieu', value: 'Porrentruy' },
      { label: 'Disponibilité', value: 'À confirmer en boutique' },
    ],
    images: [
      { alt: 'Vue principale de la carte Pokémon Koraidon EX', crop: 'product-crop-2', view: 'main' },
      { alt: 'Détail de la carte Pokémon Koraidon EX', crop: 'product-crop-2', view: 'detail' },
    ],
  },
  {
    slug: 'guitare-electrique-vintage',
    name: 'Guitare électrique vintage',
    price: "CHF 1'290.-",
    category: 'instruments-musique',
    condition: 'Instrument de seconde main',
    shortDescription: 'Une guitare au fini chaleureux, choisie pour son allure et sa présence.',
    description:
      'Cette guitare électrique vintage attire immédiatement le regard avec son fini chaleureux et ses lignes classiques. Venez la voir de près en boutique pour découvrir son état, sa prise en main et les informations disponibles sur le modèle.',
    details: [
      { label: 'Type', value: 'Guitare électrique' },
      { label: 'État', value: 'Seconde main' },
      { label: 'Lieu', value: 'Porrentruy' },
      { label: 'Disponibilité', value: 'À confirmer en boutique' },
    ],
    images: [
      { alt: 'Vue principale de la guitare électrique vintage', crop: 'product-crop-3', view: 'main' },
      { alt: 'Détail de la guitare électrique vintage', crop: 'product-crop-3', view: 'detail' },
    ],
  },
  {
    slug: 'console-super-nintendo',
    name: 'Console Super Nintendo',
    price: 'CHF 249.-',
    category: 'gaming-retrogaming',
    condition: 'Console de seconde main',
    shortDescription: 'Un classique du rétrogaming prêt à rejoindre une nouvelle collection.',
    description:
      'Une console emblématique pour retrouver le plaisir du jeu rétro ou compléter une collection. Les accessoires visibles et l’état général peuvent être vérifiés avec nous directement à la boutique.',
    details: [
      { label: 'Univers', value: 'Gaming & rétrogaming' },
      { label: 'État', value: 'Seconde main' },
      { label: 'Lieu', value: 'Porrentruy' },
      { label: 'Disponibilité', value: 'À confirmer en boutique' },
    ],
    images: [
      { alt: 'Vue principale de la console Super Nintendo', crop: 'product-crop-4', view: 'main' },
      { alt: 'Détail de la console Super Nintendo', crop: 'product-crop-4', view: 'detail' },
    ],
  },
  {
    slug: 'lampe-vintage-bois',
    name: 'Lampe vintage en bois',
    price: 'CHF 189.-',
    category: 'vintage-decoration',
    condition: 'Luminaire vintage',
    shortDescription: 'Une lampe graphique qui apporte immédiatement de la chaleur à une pièce.',
    description:
      'Cette lampe de table associe un pied en bois aux lignes sobres à un abat-jour clair. Sa silhouette convient aussi bien à un intérieur vintage qu’à une décoration plus contemporaine.',
    details: [
      { label: 'Type', value: 'Lampe de table' },
      { label: 'Matière', value: 'Bois et textile' },
      { label: 'Lieu', value: 'Porrentruy' },
      { label: 'Disponibilité', value: 'À confirmer en boutique' },
    ],
    images: [
      { alt: 'Vue principale de la lampe vintage en bois', crop: 'product-crop-5', view: 'main' },
      { alt: 'Détail de la lampe vintage en bois', crop: 'product-crop-5', view: 'detail' },
    ],
  },
] as const satisfies ReadonlyArray<ShopProduct>

export function getShopCategoryLabel(categoryId: ShopCategoryId) {
  return shopCategories.find((category) => category.id === categoryId)?.label ?? categoryId
}

export function getShopProduct(slug: string) {
  return shopProducts.find((product) => product.slug === slug)
}
