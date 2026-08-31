import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { BlendCursor } from '@/components/ui/blend-cursor'

interface LegalSection {
  content: ReactNode
  title: string
}

interface LegalPageProps {
  sections: LegalSection[]
  title: string
}

export function LegalPage({ sections, title }: LegalPageProps) {
  return (
    <div className="lbp-legal-page">
      <BlendCursor />

      <header className="lbp-legal-header">
        <Link aria-label="La Bonne Pioche - Accueil" href="/">
          <Image
            alt="La Bonne Pioche"
            height={101}
            priority
            src="/logos/la-bonne-pioche-logo.svg"
            width={200}
          />
        </Link>
        <Link href="/">Retour à l&apos;accueil</Link>
      </header>

      <main className="lbp-legal-main">
        <h1 className="lbp-brush">{title}</h1>
        {sections.map((section) => (
          <section className="lbp-legal-section" key={section.title}>
            <h2 className="lbp-brush">{section.title}</h2>
            <div className="lbp-legal-section-content">{section.content}</div>
          </section>
        ))}
      </main>

      <footer className="lbp-legal-footer">
        <span>© {new Date().getFullYear()} La Bonne Pioche</span>
        <span>Rue du 23 Juin 28 · 2900 Porrentruy · Suisse</span>
      </footer>
    </div>
  )
}
