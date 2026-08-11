import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { CopyText } from '@/components/copy-text'
import { JsonLd } from '@/components/json-ld'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { APP, releases, getRelease, pick, type ReleaseChange } from '@/lib/site-data'

function formatDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const groupOrder: ReleaseChange['type'][] = ['breaking', 'new', 'improved', 'fixed']

export function ReleaseDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const rel = getRelease(slug)
  if (!rel) notFound()

  const t = ui[locale].releasePage
  const c = ui[locale].common
  const tf = ui[locale].releaseNotes

  const idx = releases.findIndex((r) => r.slug === slug)
  const newer = idx > 0 ? releases[idx - 1] : null
  const older = idx < releases.length - 1 ? releases[idx + 1] : null

  const labelFor: Record<ReleaseChange['type'], string> = {
    breaking: t.breakingLabel,
    new: t.newLabel,
    improved: t.improvedLabel,
    fixed: t.fixedLabel,
  }
  const colorFor: Record<ReleaseChange['type'], string> = {
    breaking: 'var(--amber)',
    new: 'var(--violet)',
    improved: 'var(--amber)',
    fixed: 'var(--green)',
  }

  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP.name,
    softwareVersion: rel.version,
    operatingSystem: APP.os,
    applicationCategory: 'MultimediaApplication',
    datePublished: rel.date,
    fileSize: `${rel.sizeMb} MB`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  return (
    <PageShell locale={locale}>
      <JsonLd data={softwareLd} />
      <PageHeader
        crumbs={[
          { label: c.home, href: localePath(locale, '/') },
          { label: tf.title, href: localePath(locale, '/release-notes') },
          { label: `v${rel.version}` },
        ]}
        eyebrow={`${t.releaseNotes}  ·  ${t.released} ${formatDate(rel.date, locale)}`}
        title={`${APP.name} v${rel.version}`}
        lead={pick(rel.summary, locale)}
      />

      <section className="py-12">
        <div className="container-v grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          {/* changes */}
          <div>
            {groupOrder.map((type) => {
              const items = rel.changes.filter((ch) => ch.type === type)
              if (!items.length) return null
              return (
                <div key={type} className="mb-8">
                  <h2 className="font-mono text-[12px] tracking-[0.06em] mb-3" style={{ color: colorFor[type] }}>
                    {labelFor[type].toUpperCase()}
                  </h2>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((ch, i) => (
                      <li key={i} className="flex gap-3 text-[14px] leading-relaxed">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: colorFor[type] }}
                        />
                        <span>{pick(ch.text, locale)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}

            {/* prev / next */}
            <div className="flex justify-between gap-4 mt-10 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
              {older ? (
                <Link href={localePath(locale, `/release/${older.slug}`)} className="link-v font-mono text-[13px]">
                  ← {t.prev} v{older.version}
                </Link>
              ) : (
                <span />
              )}
              {newer ? (
                <Link href={localePath(locale, `/release/${newer.slug}`)} className="link-v font-mono text-[13px]">
                  {t.next} v{newer.version} →
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>

          {/* sidebar: download + checksum */}
          <aside className="lg:sticky lg:top-24 card-v p-6">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-display font-semibold text-[18px]">v{rel.version}</span>
              <span className="font-mono text-[12px]" style={{ color: 'var(--muted)' }}>
                {rel.sizeMb} MB
              </span>
            </div>
            <div className="flex flex-col gap-2.5 mb-5">
              <a href={rel.exeUrl} target="_blank" rel="noopener noreferrer" className="btn-v-primary w-full">
                {c.downloadExe}
              </a>
              <a href={rel.zipUrl} target="_blank" rel="noopener noreferrer" className="btn-v-ghost w-full">
                {c.downloadZip}
              </a>
            </div>
            <div>
              <span className="font-mono text-[10.5px] tracking-[0.05em] block mb-1.5" style={{ color: 'var(--muted)' }}>
                SHA256
              </span>
              {rel.sha256Full === '—' ? (
                <a
                  href={`${APP.githubUrl}/releases/tag/${rel.version}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] inline-block mt-1"
                  style={{ color: 'var(--violet)' }}
                >
                  {locale === 'zh' ? '在 GitHub 查看校验值 →' : 'View checksums on GitHub →'}
                </a>
              ) : (
                <CopyText value={rel.sha256Full} display={rel.sha256} label={c.copy} copiedLabel={c.copied} />
              )}
            </div>
            <Link
              href={localePath(locale, '/release-notes')}
              className="link-v font-mono text-[12px] inline-block mt-5"
            >
              {t.allReleases} →
            </Link>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
