import type { Metadata } from 'next'

import { ContentPageShell } from '@/components/layout/content-page-shell'
import { RepairSelector } from '@/components/repair-selector'

export const metadata: Metadata = {
  title: 'Réparation de smartphones, consoles et ordinateurs',
  description:
    'Trouvez votre smartphone, tablette, console ou ordinateur, consultez les prix disponibles et demandez un diagnostic à Porrentruy.',
  alternates: { canonical: '/reparations' },
}

export default function RepairsPage() {
  return (
    <ContentPageShell activePage="repairs">
      <main className="lbp-repair-main">
        <section className="lbp-repair-hero">
          <p className="lbp-content-eyebrow">L’atelier de La Bonne Pioche</p>
          <h1 className="lbp-brush">Réparer, pas remplacer</h1>
          <p>
            Choisissez votre appareil, trouvez votre modèle et consultez les réparations possibles.
            Si vous avez un doute, passez nous le montrer.
          </p>
        </section>

        <RepairSelector />

        <section className="lbp-repair-workshop">
          <p className="lbp-content-eyebrow">À l’atelier de Porrentruy</p>
          <h2 className="lbp-brush">Pas de promesse au hasard</h2>
          <p>
            Nous regardons d’abord l’appareil, puis nous confirmons la panne et le prix. Rien n’est
            réparé sans votre accord.
          </p>
          <div className="lbp-repair-promises">
            <p><strong>01</strong><span>Diagnostic clair</span></p>
            <p><strong>02</strong><span>Devis avant intervention</span></p>
            <p><strong>03</strong><span>Réparation soignée</span></p>
          </div>
        </section>
      </main>
    </ContentPageShell>
  )
}
