import { type Locale } from '@/lib/i18n'

const sites = [
  { href: 'https://7zip.world', label: '7-zip download' },
  { href: 'https://bandizip.world', label: 'bandizip' },
  { href: 'https://downloadall.app', label: 'downloadall' },
  { href: 'https://favicon.pub', label: 'Favicon Generator' },
  { href: 'https://sharex.best', label: 'sharex' },
  { href: 'https://vlcmediaplayer.online', label: 'vlc media player' },
  { href: 'https://wiztree.world', label: 'wiztree' },
  { href: 'https://voidimageviewer.com', label: 'voidimageviewer' },
  { href: 'https://randompokemon.online', label: 'Pokémon Generator' },
]

const heading: Record<Locale, { tag: string; h2: string }> = {
  en: { tag: '// FRIENDLY LINKS', h2: 'Related Software & Tools' },
  zh: { tag: '// 友情链接', h2: '相关软件推荐' },
}

interface RelatedSitesSectionProps {
  locale: Locale
}

export function RelatedSitesSection({ locale }: RelatedSitesSectionProps) {
  const t = heading[locale]

  return (
    <section className="py-20">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="max-w-[560px] mb-11">
          <span className="related-tag font-mono text-[12px] tracking-[0.06em] block mb-2.5">
            {t.tag}
          </span>
          <h2 className="related-h2 font-display font-semibold text-pretty">
            {t.h2}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sites.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="related-card rounded-[var(--radius-lg)] p-5 flex items-center justify-center text-center"
            >
              <span className="related-label font-display text-[14px] font-medium">
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .related-tag { color: var(--violet); }
        .related-h2 {
          font-size: clamp(26px, 3.4vw, 36px);
          letter-spacing: -0.02em;
        }
        .related-card {
          background: var(--card);
          border: 1px solid var(--border);
          transition: border-color .2s, transform .2s;
          min-height: 64px;
        }
        .related-card:hover {
          border-color: rgba(139,127,255,0.4);
          transform: translateY(-2px);
        }
        .related-label { color: var(--foreground); transition: color .15s; }
        .related-card:hover .related-label { color: var(--violet); }
      `}</style>
    </section>
  )
}
