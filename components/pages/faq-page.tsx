import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { FaqSection } from '@/components/faq-section'
import { JsonLd } from '@/components/json-ld'
import { translations, ui, localePath, type Locale } from '@/lib/i18n'

export function FaqPage({ locale }: { locale: Locale }) {
  const t = ui[locale].faqPage
  const c = ui[locale].common
  const items = translations[locale].faq.items

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }

  return (
    <PageShell locale={locale}>
      <JsonLd data={faqLd} />
      <PageHeader
        crumbs={[
          { label: c.home, href: localePath(locale, '/') },
          { label: t.title },
        ]}
        eyebrow="FAQ"
        title={t.title}
        lead={t.subtitle}
      />

      <FaqSection locale={locale} />
    </PageShell>
  )
}
