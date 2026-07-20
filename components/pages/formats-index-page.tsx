import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { JsonLd } from '@/components/json-ld'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { APP, formatList, getFormat, pick } from '@/lib/site-data'

function priorityRank(p: string) {
  return p === 'high' ? 0 : p === 'medium' ? 1 : 2
}

export function FormatsIndexPage({ locale }: { locale: Locale }) {
  const t = ui[locale].formats
  const c = ui[locale].common
  const sorted = [...formatList].sort((a, b) => priorityRank(a.priority) - priorityRank(b.priority))

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t.title,
    itemListElement: sorted.map((f, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${f.name} ${t.viewerSuffix}`,
      url: `${APP.baseUrl}${localePath(locale, `/supported-formats/${f.slug}`)}`,
    })),
  }

  return (
    <PageShell locale={locale}>
      <JsonLd data={itemListLd} />
      <PageHeader
        crumbs={[
          { label: c.home, href: localePath(locale, '/') },
          { label: t.title },
        ]}
        eyebrow={t.allFormats}
        title={t.title}
        lead={t.subtitle}
      />

      <section className="py-12">
        <div className="container-v">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sorted.map((f) => {
              const isHigh = f.priority === 'high'
              return (
                <Link
                  key={f.slug}
                  href={localePath(locale, `/supported-formats/${f.slug}`)}
                  className="card-v card-v-hover p-5 flex flex-col gap-2 relative"
                >
                  {isHigh && (
                    <span
                      className="absolute top-3 right-3 font-mono text-[9.5px] tracking-[0.05em] px-1.5 py-0.5 rounded"
                      style={{ background: 'var(--violet-dim)', color: 'var(--violet)' }}
                    >
                      {t.priorityHigh}
                    </span>
                  )}
                  <span className="font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
                    {f.ext}
                  </span>
                  <span className="font-display font-semibold text-[19px]">{f.name}</span>
                  <span className="text-[12.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {pick(f.tagline, locale)}
                  </span>
                  <span className="mt-1 font-mono text-[11.5px] inline-flex items-center gap-1" style={{ color: 'var(--violet)' }}>
                    {t.openOnline}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
