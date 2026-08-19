import type { ReactNode } from 'react'
import { Nav } from '@/components/nav'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'
import { ui, type Locale } from '@/lib/i18n'

interface PageShellProps {
  locale: Locale
  children: ReactNode
}

export function PageShell({ locale, children }: PageShellProps) {
  return (
    <main id="main-content" lang={locale}>
      <Nav locale={locale} />
      {children}
      <SiteFooter locale={locale} />
      <BackToTop label={ui[locale].common.backToTop} />
    </main>
  )
}
