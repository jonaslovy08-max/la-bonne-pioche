export const mainNavigation = [
  { id: 'boutique', label: 'Boutique', href: '/boutique' },
  { id: 'repairs', label: 'Réparations', href: '/reparations' },
  { id: 'sell', label: 'Vendre un objet', href: '/vendre-un-objet' },
  { id: 'clearance', label: 'Débarras', href: '/debarras' },
  { id: 'contact', label: 'Contact', href: '/contact' },
  { id: 'about', label: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
] as const

export type MainNavigationId = (typeof mainNavigation)[number]['id']
