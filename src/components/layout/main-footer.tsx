import Image from 'next/image'
import Link from 'next/link'

import { mainNavigation } from '@/lib/site-navigation'

export function MainFooter() {
  return (
    <footer className="lbp-footer">
      <div className="lbp-footer-grid">
        <div className="lbp-footer-brand">
          <Link aria-label="La Bonne Pioche - Accueil" href="/">
            <Image
              alt="La Bonne Pioche"
              className="lbp-footer-logo"
              height={101}
              src="/logos/la-bonne-pioche-logo.svg"
              width={200}
            />
          </Link>
          <p>Des objets choisis avec soin et le plaisir de tomber sur la bonne pioche.</p>
          <address>
            Rue du 23 Juin 28
            <br />
            2900 Porrentruy, Suisse
          </address>
        </div>

        <nav aria-label="Menu du pied de page" className="lbp-footer-column">
          <h2 className="lbp-brush">Menu</h2>
          {mainNavigation.map((item) => (
            <Link href={item.href} key={item.id}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Informations pratiques" className="lbp-footer-column">
          <h2 className="lbp-brush">Nous trouver</h2>
          <Link href="/contact">Contact</Link>
          <Link href="/#infos">Horaires</Link>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rue+du+23+Juin+28+2900+Porrentruy"
            rel="noreferrer"
            target="_blank"
          >
            Itinéraire
          </a>
        </nav>

        <nav aria-label="Informations légales" className="lbp-footer-column">
          <h2 className="lbp-brush">Informations</h2>
          <Link href="/conditions-generales">Conditions générales</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-confidentialite">Confidentialité</Link>
          <Link href="/politique-de-cookies">Politique de cookies</Link>
        </nav>
      </div>

      <div className="lbp-footer-bottom">
        <p>© {new Date().getFullYear()} La Bonne Pioche</p>
        <p>Porrentruy · Jura · Suisse</p>
      </div>
    </footer>
  )
}
