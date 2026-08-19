import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { FeaturesSection } from '@/components/features-section'
import { WhySection } from '@/components/why-section'
import { JsonLd } from '@/components/json-ld'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { APP } from '@/lib/site-data'

export function FeaturesPage({ locale }: { locale: Locale }) {
  const t = ui[locale].features
  const c = ui[locale].common

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP.name,
    operatingSystem: APP.os,
    applicationCategory: 'MultimediaApplication',
    softwareVersion: '1.0.0.15',
    fileSize: '1.1 MB',
    url: `${APP.baseUrl}${localePath(locale, '/features')}`,
    description: t.subtitle,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    license: 'https://opensource.org/licenses/MIT',
    isPartOf: { '@id': `${APP.baseUrl}/#website` },
  }

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${APP.baseUrl}${localePath(locale, '/features')}`,
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en',
    isPartOf: { '@id': `${APP.baseUrl}/#website` },
  }

  return (
    <PageShell locale={locale}>
      <JsonLd data={[webPageLd, jsonLd]} />
      <PageHeader
        crumbs={[
          { label: c.home, href: localePath(locale, '/') },
          { label: t.title },
        ]}
        eyebrow={t.title}
        title={t.title}
        lead={t.subtitle}
      />

      <WhySection locale={locale} />
      <FeaturesSection locale={locale} />

      <section className="py-16" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-v text-center">
          <h2 className="h2-v mb-3 text-balance">{t.ctaTitle}</h2>
          <p className="prose-v max-w-[520px] mx-auto mb-6 text-pretty">{t.ctaBody}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localePath(locale, '/download')} className="btn-v-primary">
              {c.downloadExe}
            </Link>
            <Link href={localePath(locale, '/download#green')} className="btn-v-ghost">
              {c.downloadZip}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
