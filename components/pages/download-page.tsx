import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { FaqAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { APP, releases, latestRelease, downloadAssets, cnDownload, RELEASE_TAG, pick } from '@/lib/site-data'

export function DownloadPage({ locale }: { locale: Locale }) {
  const u = ui[locale]
  const d = u.download
  const r = latestRelease
  const officialReleaseUrl = `https://github.com/voidtools/voidImageViewer/releases/tag/${RELEASE_TAG}`

  const trust = [
    { label: d.trustSource, href: officialReleaseUrl, ext: true },
    { label: u.common.unofficial, href: localePath(locale, '/about'), ext: false },
  ]

  const sysReq = [
    { k: d.sysReqOs, v: 'Windows 10 / 11' },
    { k: d.sysReqArch, v: 'x64 · x86 · ARM64 · ARM' },
    { k: d.sysReqRam, v: '2 GB+' },
    { k: d.sysReqDisk, v: '20 MB' },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP.name,
    operatingSystem: APP.os,
    applicationCategory: 'MultimediaApplication',
    softwareVersion: r.version,
    fileSize: `${r.sizeMb} MB`,
    datePublished: r.date,
    downloadUrl: `${APP.baseUrl}${localePath(locale, '/download')}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    license: APP.githubUrl,
  }
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const DownloadIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
    </svg>
  )

  return (
    <PageShell locale={locale}>
      <JsonLd data={[jsonLd, faqLd]} />

      <PageHeader
        crumbs={[
          { label: u.common.home, href: localePath(locale, '/') },
          { label: u.common.download },
        ]}
        eyebrow={`${APP.name.toUpperCase()} · v${r.version}`}
        title={d.title}
        lead={d.subtitle}
      />

      {/* Download cards */}
      <section className="py-12">
        <div className="container-v">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-6">
            <h2 className="h2-v">{d.cardsTitle}</h2>
            <p className="text-[13px] font-mono" style={{ color: 'var(--muted)' }}>
              {d.cardsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Chinese localized card — zh only, shown first */}
            {locale === 'zh' && (
              <a
                href={cnDownload.url}
                download={cnDownload.filename}
                className="dl-tile dl-tile-cn card-v flex flex-col p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="arch-badge">{cnDownload.arch}</span>
                  <span className="kind-chip kind-cn">{d.cnBadge}</span>
                </div>
                <h3 className="font-display font-semibold text-[16px] mb-1">{d.cnTitle}</h3>
                <p className="text-[12.5px] mb-3" style={{ color: 'var(--muted)' }}>
                  {d.cnHint}
                </p>
                <span className="filename font-mono text-[11px] mb-1">{cnDownload.filename}</span>
                <span className="font-mono text-[11px] mb-4" style={{ color: 'var(--muted)' }}>
                  {d.installer} · {cnDownload.size}
                </span>
                <span className="btn-v-primary mt-auto">
                  <DownloadIcon /> {u.common.download}
                </span>
              </a>
            )}

            {downloadAssets.map((a) => (
              <a
                key={a.id}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`dl-tile card-v flex flex-col p-5 ${a.recommended ? 'dl-tile-rec' : ''}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="arch-badge">{a.arch}</span>
                  <span className={`kind-chip ${a.kind === 'installer' ? 'kind-exe' : 'kind-zip'}`}>
                    {a.kind === 'installer' ? d.installer : d.portable}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-[16px] mb-1 flex items-center gap-2">
                  {a.arch} {a.kind === 'installer' ? d.installer : d.portable}
                  {a.recommended && <span className="rec-tag">{d.recommended}</span>}
                </h3>
                <p className="text-[12.5px] mb-3" style={{ color: 'var(--muted)' }}>
                  {d.archHint[a.arch]}
                </p>
                <span className="filename font-mono text-[11px] mb-1">{a.filename}</span>
                <span className="font-mono text-[11px] mb-4" style={{ color: 'var(--muted)' }}>
                  {a.kind === 'installer' ? d.installer : d.portable} · {a.size}
                </span>
                <span className={`mt-auto ${a.recommended ? 'btn-v-primary' : 'btn-v-ghost'}`}>
                  <DownloadIcon /> {u.common.download}
                </span>
              </a>
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-6 flex gap-2.5 flex-wrap">
            {trust.map((tr) =>
              tr.ext ? (
                <a key={tr.label} href={tr.href} target="_blank" rel="noopener noreferrer" className="chip">
                  {tr.label}
                </a>
              ) : (
                <Link key={tr.label} href={tr.href} className="chip">
                  {tr.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* System requirements + install steps */}
      <section className="pb-6">
        <div className="container-v grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="h2-v mb-5">{d.sysReq}</h2>
            <div className="card-v overflow-hidden">
              {sysReq.map((row, i) => (
                <div
                  key={row.k}
                  className="flex justify-between items-center px-5 py-3.5 text-[14px]"
                  style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}
                >
                  <span style={{ color: 'var(--muted)' }}>{row.k}</span>
                  <span className="font-mono text-[13px]">{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="h2-v mb-5">{d.installSteps}</h2>
            <ol className="flex flex-col gap-4">
              {d.steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="step-num font-mono flex-shrink-0">{i + 1}</span>
                  <div>
                    <h3 className="text-[14.5px] font-medium mb-0.5">{s.t}</h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href={localePath(locale, '/installation')} className="link-v text-[13px] font-mono inline-block mt-4">
              {u.installation.title} →
            </Link>
          </div>
        </div>
      </section>

      {/* Green / portable version explanation */}
      <section id="green" className="py-12 scroll-mt-24">
        <div className="container-v">
          <div className="green-box card-v p-8 md:p-9">
            <h2 className="h2-v mb-3">{d.greenTitle}</h2>
            <p className="prose-v mb-6 max-w-[680px]">{d.greenBody}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {d.greenPoints.map((p, i) => (
                <li key={i} className="flex gap-3 text-[13.5px] leading-relaxed">
                  <span className="check-dot" aria-hidden>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span style={{ color: 'var(--muted)' }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Previous versions */}
      <section className="pb-12">
        <div className="container-v">
          <h2 className="h2-v mb-2">{d.historyTitle}</h2>
          <p className="text-[14px] mb-6" style={{ color: 'var(--muted)' }}>
            {d.historyDesc}
          </p>
          <div className="flex flex-col gap-2.5">
            {releases.map((rel) => (
              <Link
                key={rel.slug}
                href={localePath(locale, `/release/${rel.slug}`)}
                className="ver-row card-v card-v-hover flex items-center justify-between gap-4 px-5 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[14px]" style={{ color: 'var(--amber)' }}>
                    v{rel.version}
                  </span>
                  <span className="text-[13px] hidden sm:block" style={{ color: 'var(--muted)' }}>
                    {pick(rel.summary, locale)}
                  </span>
                </div>
                <span className="font-mono text-[12px] flex-shrink-0" style={{ color: 'var(--muted)' }}>
                  {rel.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Download FAQ */}
      <section className="pb-20">
        <div className="container-v max-w-[760px]">
          <h2 className="h2-v mb-6">{d.faqTitle}</h2>
          <FaqAccordion items={d.faq.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </section>

      <style>{`
        .dl-tile { transition: border-color .2s, transform .2s; }
        .dl-tile:hover { border-color: var(--violet); transform: translateY(-2px); }
        .dl-tile-rec { border-color: color-mix(in oklab, var(--violet) 55%, var(--border)); background: linear-gradient(160deg, var(--card) 0%, var(--surface-2) 100%); }
        .dl-tile-cn { border-color: color-mix(in oklab, var(--amber) 55%, var(--border)); }
        .arch-badge {
          font-family: var(--font-mono); font-weight: 600; font-size: 15px;
          color: var(--foreground);
        }
        .kind-chip {
          font-family: var(--font-mono); font-size: 10.5px; letter-spacing: .04em;
          padding: 3px 9px; border-radius: 999px; border: 1px solid var(--border);
        }
        .kind-exe { color: var(--violet); background: var(--violet-dim); border-color: transparent; }
        .kind-zip { color: var(--muted); }
        .kind-cn { color: var(--amber); background: var(--amber-dim); border-color: transparent; }
        .rec-tag {
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: .05em;
          color: var(--violet); background: var(--violet-dim);
          padding: 2px 7px; border-radius: 999px; text-transform: uppercase;
        }
        .filename { color: var(--foreground); word-break: break-all; opacity: .85; }
        .green-box { background: linear-gradient(160deg, var(--card) 0%, var(--surface-2) 100%); }
        .check-dot {
          flex-shrink: 0; width: 20px; height: 20px; border-radius: 6px; margin-top: 1px;
          display: flex; align-items: center; justify-content: center;
          background: var(--violet-dim); color: var(--violet);
        }
        .step-num {
          width: 30px; height: 30px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: var(--violet-dim); color: var(--violet); font-size: 13px;
        }
      `}</style>
    </PageShell>
  )
}
