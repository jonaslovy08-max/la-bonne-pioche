import clikClakCatalogData from '@/data/clikclak-repairs.json'

export interface RepairBrand {
  id: string
  name: string
  models: string[]
  icon?: string
}

export interface RepairDevice {
  id: string
  name: string
  shortName: string
  brands: RepairBrand[]
}

export interface RepairPrice {
  label: string
  price: string
}

interface CatalogModel {
  model: string
  prices: RepairPrice[]
}

interface CatalogGroup {
  id: string
  models: CatalogModel[]
}

const clikClakCatalog = clikClakCatalogData as CatalogGroup[]
const catalogGroup = (id: string) => clikClakCatalog.find((group) => group.id === id)
const catalogModels = (id: string) => catalogGroup(id)?.models.map(({ model }) => model) ?? []

const brandIcons = {
  apple: '/icons/icon-iphone.svg',
  google: '/icons/icon-google-pixel.svg',
  huawei: '/icons/icon-huawei.svg',
  oppo: '/icons/icon-oppo.svg',
  samsung: '/icons/icon-samsung.svg',
  sony: '/icons/icon-sony-xperia.svg',
  xiaomi: '/icons/icon-xiaomi.svg',
} as const

export const repairDevices: RepairDevice[] = [
  {
    id: 'smartphone',
    name: 'Smartphone',
    shortName: 'Téléphone',
    brands: [
      { id: 'apple', name: 'Apple', icon: brandIcons.apple, models: catalogModels('apple') },
      { id: 'samsung', name: 'Samsung', icon: brandIcons.samsung, models: catalogModels('samsung') },
      { id: 'huawei', name: 'Huawei', icon: brandIcons.huawei, models: catalogModels('huawei') },
      {
        id: 'google',
        name: 'Google Pixel',
        icon: brandIcons.google,
        models: ['Google Pixel · modèle à préciser'],
      },
      { id: 'oppo', name: 'Oppo', icon: brandIcons.oppo, models: catalogModels('oppo') },
      {
        id: 'xiaomi',
        name: 'Xiaomi',
        icon: brandIcons.xiaomi,
        models: ['Xiaomi · modèle à préciser'],
      },
      {
        id: 'sony',
        name: 'Sony Xperia',
        icon: brandIcons.sony,
        models: ['Sony Xperia · modèle à préciser'],
      },
    ],
  },
  {
    id: 'tablet',
    name: 'Tablette',
    shortName: 'Tablette',
    brands: [
      { id: 'apple', name: 'iPad', icon: brandIcons.apple, models: catalogModels('ipad') },
      {
        id: 'samsung',
        name: 'Samsung Galaxy Tab',
        icon: brandIcons.samsung,
        models: ['Samsung Galaxy Tab · modèle à préciser'],
      },
      {
        id: 'other-tablet',
        name: 'Autres tablettes',
        models: ['Surface Pro, Lenovo, Xiaomi ou autre tablette'],
      },
    ],
  },
  {
    id: 'console',
    name: 'Console de jeu',
    shortName: 'Console',
    brands: [
      {
        id: 'nintendo',
        name: 'Nintendo',
        models: ['Switch OLED', 'Switch', 'Switch Lite', 'New Nintendo 3DS XL', 'Wii U'],
      },
      {
        id: 'playstation',
        name: 'PlayStation',
        models: ['PlayStation 5 Slim', 'PlayStation 5', 'PlayStation 4 Pro', 'PlayStation 4', 'PS Vita'],
      },
      {
        id: 'xbox',
        name: 'Xbox',
        models: ['Xbox Series X', 'Xbox Series S', 'Xbox One X', 'Xbox One S'],
      },
      { id: 'valve', name: 'Valve', models: ['Steam Deck OLED', 'Steam Deck'] },
    ],
  },
  {
    id: 'computer',
    name: 'Ordinateur',
    shortName: 'Ordinateur',
    brands: [
      {
        id: 'apple',
        name: 'MacBook et iMac',
        icon: brandIcons.apple,
        models: catalogModels('mac'),
      },
      {
        id: 'pc-laptop',
        name: 'PC portable',
        models: ['PC portable · Dell, HP, Lenovo, Asus, Acer ou autre'],
      },
      {
        id: 'pc-desktop',
        name: 'Ordinateur fixe',
        models: ['Ordinateur fixe · PC et autres marques'],
      },
    ],
  },
  {
    id: 'other-electronic',
    name: 'Autre appareil électronique',
    shortName: 'Autre appareil électronique',
    brands: [
      {
        id: 'other-electronic',
        name: 'Appareil à identifier',
        models: ['Autre appareil électronique'],
      },
    ],
  },
]

export const repairIssues = [
  'Écran ou vitre',
  'Batterie',
  'Charge ou connecteur',
  'Caméra, son ou boutons',
  'Logiciel ou données',
  'Je ne sais pas encore',
] as const

const normalizePrice = (price: string) => {
  if (/sur devis/i.test(price)) return 'Sur devis'

  const amount = price.match(/\d+(?:[.,]\d+)?/)?.[0]
  return amount ? `CHF ${amount.replace(',', '.')}` : price
}

// Catalogue public ClikClak relevé le 31 août 2026. Les montants restent indicatifs.
export const repairPricesByModel: Record<string, RepairPrice[]> = Object.fromEntries(
  clikClakCatalog.flatMap(({ models }) =>
    models.map(({ model, prices }) => [
      model,
      prices.map(({ label, price }) => ({ label, price: normalizePrice(price) })),
    ]),
  ),
)
