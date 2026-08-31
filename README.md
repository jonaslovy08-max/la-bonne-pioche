# La Bonne Pioche Web

Socle Next.js + TypeScript pour le site de La Bonne Pioche, pense pour accueillir plusieurs magasins sans dupliquer les pages.

## Demarrage local

```bash
npm install
npm run dev
```

Le site demarre ensuite sur `http://localhost:3000`.

## Variables d'environnement

Copier `.env.example` vers `.env.local` si besoin, puis ajuster :

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Arborescence

```text
WEB/
|-- images/                 # visuels source deja presents dans le projet
|-- maquette/               # maquettes Illustrator existantes
|-- public/
|   |-- images/             # copies utilisees par le site
|   `-- logos/
|-- src/
|   |-- app/
|   |   |-- magasins/[storeSlug]/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |   |-- robots.ts
|   |   `-- sitemap.ts
|   |-- components/
|   |   |-- layout/
|   |   |-- sections/
|   |   `-- seo/
|   |-- lib/
|   `-- types/
|-- .env.example
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
`-- tsconfig.json
```

## Ajouter un autre magasin

1. Ajouter un nouvel objet dans [`src/lib/stores.ts`](./src/lib/stores.ts).
2. Deposer ses visuels dans `public/images`.
3. Le site genere automatiquement sa route `/magasins/<slug>` et l'inclut au sitemap.
