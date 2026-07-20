import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { APP, releases, pick } from '@/lib/site-data'

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function ReleaseNotesPage({ locale }: { locale: Locale }) {
  const t = ui[locale].releaseNotes
  const c = ui[locale].common

  return (
    <PageShell locale={locale}>
      <PageHeader
        crumbs={[
          { label: c.home, href: localePath(locale, '/') },
          { label: t.title },
        ]}
        eyebrow={t.title}
        title={t.title}
        lead={t.subtitle}
      />

      <section className="py-12">
        <div className="container-v max-w-[760px]">
          <ol className="relative" style={{ borderLeft: '1px solid var(--border)' }}>
            {releases.map((r) => (
              <li key={r.slug} className="relative pl-8 pb-10 last:pb-0">
                <span
                  className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full -translate-x-1/2"
                  style={{ background: r.latest ? 'var(--violet)' : 'var(--border)' }}
                  aria-hidden
                />
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <Link
                    href={localePath(locale, `/release/${r.slug}`)}
                    className="font-display font-semibold text-[20px] hover:underline"
                  >
                    v{r.version}
                  </Link>
                  {r.latest && (
                    <span
                      className="font-mono text-[10px] tracking-[0.05em] px-1.5 py-0.5 rounded"
                      style={{ background: 'var(--violet-dim)', color: 'var(--violet)' }}
                    >
                      {t.latest}
                    </span>
                  )}
                  <span className="font-mono text-[12px]" style={{ color: 'var(--muted)' }}>
                    {formatDate(r.date, locale)}
                  </span>
                </div>
                <p className="prose-v mb-3">{pick(r.summary, locale)}</p>
                <Link
                  href={localePath(locale, `/release/${r.slug}`)}
                  className="font-mono text-[12.5px] inline-flex items-center gap-1"
                  style={{ color: 'var(--violet)' }}
                >
                  {t.viewDetails}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-4 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <a
              href={APP.forumUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-v-ghost"
            >
              {t.viewMore}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
