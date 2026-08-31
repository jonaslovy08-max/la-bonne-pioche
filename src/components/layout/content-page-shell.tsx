import type { ReactNode } from 'react'

import { MainFooter } from '@/components/layout/main-footer'
import { MainHeader } from '@/components/layout/main-header'
import { BlendCursor } from '@/components/ui/blend-cursor'
import type { MainNavigationId } from '@/lib/site-navigation'

interface ContentPageShellProps {
  activePage: MainNavigationId
  children: ReactNode
}

export function ContentPageShell({ activePage, children }: ContentPageShellProps) {
  return (
    <div className="lbp-site">
      <BlendCursor />
      <MainHeader activePage={activePage} />

      <div className="lbp-content-page">{children}</div>
      <MainFooter />
    </div>
  )
}
