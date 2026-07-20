import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { PreviewTool } from '@/components/preview-tool'
import { FaqAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { getFormat, formatList, pick } from '@/lib/site-data'

function supportEntries(support: { chrome: boolean; safari: boolean; firefox: boolean; windowsExplorer: boolean }) {
  return [
    { key: 'chrome', label: 'Chrome / Edge', ok: support.chrome, _: null },
    { key: 'firefox', label: 'Firefox', ok: support.firefox, _: null },
    { key: 'safari', label: 'Safari', ok: support.safari, _: null },
    { key: 'windowsExplorer', label: 'Windows Explorer', ok: support.windowsExplorer, _: null },
  ] as const
}

export function FormatDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const fmt = getFormat(slug)
  if (!fmt) notFound()

  const t = ui[locale].formatPage
  const tf = ui[locale].formats
  const c = ui[locale].common
  const related = fmt.related.map((s) => getFormat(s)).filter(Boolean)

  const faqItems = fmt.faq.map((f) => ({ q: pick(f.q, locale), a: pick(f.a, locale) }))

  const faqLd = faqItems.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <PageShell locale={locale}>
      {faqLd && <JsonLd data={faqLd} />}
      <PageHeader
        crumbs={[
          { label: c.home, href: localePath(locale, '/') },
          { label: tf.title, href: localePath(locale, '/supported-formats') },
          { label: fmt.name },
        ]}
        eyebrow={`${fmt.ext}  ·  ${fmt.name}`}
        title={`${fmt.name} ${tf.viewerSuffix}`}
        lead={pick(fmt.tagline, locale)}
      />

      <section className="py-12">
        <div className="container-v grid lg:grid-cols-[1fr_400px] gap-10 items-start">
          {/* Left: content */}
          <div className="order-2 lg:order-1">
            <h2 className="h2-v mb-4">{t.aboutTitle}</h2>
            <p className="prose-v mb-10">{pick(fmt.intro, locale)}</p>

            {/* Support table */}
            <h2 className="h2-v mb-4">{t.supportTitle}</h2>
            <div className="card-v overflow-hidden mb-10">
              <table className="w-full text-[14px]">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th className="text-left font-medium px-5 py-3" style={{ color: 'var(--muted)' }}>
                      {t.col}
                    </th>
                    <th className="text-right font-medium px-5 py-3" style={{ color: 'var(--muted)' }}>
                      {t.status}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {supportEntries(fmt.support).map((e, i, arr) => (
                    <tr key={e.key} style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <td className="px-5 py-3">{e.label}</td>
                      <td className="px-5 py-3 text-right">
                        <span
                          className="inline-flex items-center gap-1.5 font-mono text-[12px]"
                          style={{ color: e.ok ? 'var(--green)' : 'var(--muted)' }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: e.ok ? 'var(--green)' : 'var(--border)' }}
                          />
                          {e.ok ? t.supported : t.notSupported}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Void open-with CTA */}
            <div
              className="card-v p-6 mb-10"
              style={{ background: 'var(--violet-dim)', borderColor: 'var(--violet)' }}
            >
              <h2 className="h2-v mb-2" style={{ fontSize: '20px' }}>
                {t.openWithTitle} {fmt.name} {locale === 'zh' ? '文件' : 'files'}
              </h2>
              <p className="prose-v mb-4">{t.openWithBody}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={localePath(locale, '/download')} className="btn-v-primary">
                  {t.openWithCta}
                </Link>
                {fmt.supportedSince && (
                  <span className="chip">
                    {t.supportedSince} v{fmt.supportedSince}
                  </span>
                )}
              </div>
            </div>

            {/* FAQ */}
            {faqItems.length > 0 && (
              <>
                <h2 className="h2-v mb-2">{t.faqTitle}</h2>
                <FaqAccordion items={faqItems} />
              </>
            )}

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-10">
                <h2 className="h2-v mb-4">{t.relatedTitle}</h2>
                <div className="flex flex-wrap gap-3">
                  {related.map((r) => (
                    <Link
                      key={r!.slug}
                      href={localePath(locale, `/supported-formats/${r!.slug}`)}
                      className="chip card-v-hover"
                      style={{ padding: '0.5rem 1rem' }}
                    >
                      <span style={{ color: 'var(--foreground)' }}>{r!.name}</span>
                      <span style={{ opacity: 0.6 }}>{r!.ext}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: sticky preview tool */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <PreviewTool locale={locale} accept={fmt.accept} hint={`${fmt.name}${fmt.ext ? ` · ${fmt.ext}` : ''}`} />
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export function allFormatSlugs() {
  return formatList.map((f) => ({ slug: f.slug }))
}
