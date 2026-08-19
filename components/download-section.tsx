import { translations, releaseInfo, localePath, type Locale } from '@/lib/i18n'
import { downloadAssets, cnDownload, RELEASE_TAG } from '@/lib/site-data'

interface DownloadSectionProps {
  locale: Locale
}

const REPO_URL = 'https://github.com/voidtools/voidImageViewer'

export function DownloadSection({ locale }: DownloadSectionProps) {
  const t = translations[locale].download

  const meta = [
    { label: t.released, val: releaseInfo.date },
    { label: t.size, val: `${releaseInfo.sizeMb} MB` },
    { label: t.license, val: releaseInfo.license },
  ]

  const x64Exe = downloadAssets.find((a) => a.id === 'x64-exe')!
  const x64Zip = downloadAssets.find((a) => a.id === 'x64-zip')!

  // On the Chinese site, the primary download is the community localized (汉化)
  // build, hosted locally so it downloads directly without reaching GitHub.
  const isZh = locale === 'zh'
  const primaryHref = isZh ? cnDownload.url : x64Exe.url
  const zipHref = x64Zip.url
  const releasesUrl = `${REPO_URL}/releases/tag/${RELEASE_TAG}`

  return (
    <section id="download" className="py-20">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="max-w-[560px] mb-11">
          <span className="section-tag font-mono text-[12px] tracking-[0.06em] block mb-2.5">
            {t.tag}
          </span>
          <h2 className="section-h2 font-display font-semibold text-pretty">
            {t.h2}
          </h2>
        </div>

        <div className="dl-card rounded-[18px] p-9 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Left */}
          <div>
            <span className="dl-ver font-mono text-[13px] block mb-1">{releaseInfo.version}</span>
            <h3 className="font-display font-semibold text-[22px] mb-5">{t.name}</h3>
            <div className="flex gap-6 flex-wrap">
              {meta.map((m) => (
                <div key={m.label}>
                  <span className="dl-label font-mono text-[10.5px] tracking-[0.05em] block mb-1">{m.label}</span>
                  <span className="font-mono text-[12.5px]">{m.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2.5 min-w-[200px]">
            <a
              href={primaryHref}
              {...(isZh
                ? { download: cnDownload.filename }
                : { target: '_blank', rel: 'nofollow noopener noreferrer' })}
              className="dl-btn-primary flex items-center justify-center gap-2 px-5 py-2.5 rounded-[9px] text-[14px] font-medium"
            >
              ↓ {t.btnExe}
            </a>
            <a href={zipHref} target="_blank" rel="nofollow noopener noreferrer" className="dl-btn-ghost flex items-center justify-center gap-2 px-5 py-2.5 rounded-[9px] text-[14px] font-medium">
              {t.btnZip}
            </a>
            <div className="flex gap-3.5 text-[12px] justify-center mt-1 dl-links">
              <a href={REPO_URL} target="_blank" rel="nofollow noopener noreferrer">{t.github}</a>
              <a href={localePath(locale, '/release-notes')}>{t.allVersions}</a>
              <a href={releasesUrl} target="_blank" rel="nofollow noopener noreferrer">{t.verify}</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .section-tag { color: var(--violet); }
        .section-h2 { font-size: clamp(26px,3.4vw,36px); letter-spacing: -0.02em; }
        .dl-card {
          background: linear-gradient(155deg, var(--card) 0%, var(--surface-2) 100%);
          border: 1px solid var(--border);
        }
        .dl-ver { color: var(--amber); }
        .dl-label { color: var(--muted); }
        .dl-btn-primary {
          background: var(--violet); color: var(--on-brand);
          transition: background .15s; white-space: nowrap;
        }
        .dl-btn-primary:hover { background: #1811b8; }
        .dl-btn-ghost {
          border: 1px solid var(--border); color: var(--foreground);
          transition: border-color .15s; white-space: nowrap;
        }
        .dl-btn-ghost:hover { border-color: var(--violet); }
        .dl-links { color: var(--muted); }
        .dl-links a { transition: color .15s; }
        .dl-links a:hover { color: var(--violet); }
      `}</style>
    </section>
  )
}
