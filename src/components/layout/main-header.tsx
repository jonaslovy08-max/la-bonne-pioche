'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { mainNavigation, type MainNavigationId } from '@/lib/site-navigation'

interface MainHeaderProps {
  activePage?: MainNavigationId
}

export function MainHeader({ activePage }: MainHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.classList.toggle('lbp-menu-open', menuOpen)

    return () => document.body.classList.remove('lbp-menu-open')
  }, [menuOpen])

  return (
    <header className="lbp-header">
      <div className="lbp-header-inner">
        <Link aria-label="La Bonne Pioche - Accueil" className="lbp-logo-link" href="/">
          <Image
            alt="La Bonne Pioche"
            className="lbp-logo"
            height={101}
            priority
            src="/logos/la-bonne-pioche-logo.svg"
            width={200}
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className={`lbp-nav ${menuOpen ? 'is-open' : ''}`}
          id="main-navigation"
        >
          {mainNavigation.map((item) => (
            <Link
              className={item.id === activePage ? 'is-active' : undefined}
              href={item.href}
              key={item.id}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`lbp-menu-button ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
