import Link from 'next/link'
import { translations, localePath, type Locale } from '@/lib/i18n'
import { formatList } from '@/lib/site-data'
import { PreviewTool } from '@/components/preview-tool'

interface FormatsSectionProps {
  locale: Locale
}

export function FormatsSection({ locale }: FormatsSectionProps) {
  const t = translations[locale].formats

  return (
    <section id="formats" className="py-20">
      <div className="container-v">
        <div className="max-w-[560px] mb-11">
          <span className="section-tag font-mono text-[12px] tracking-[0.06em] block mb-2.5">{t.tag}</span>
          <h2 className="section-h2 font-display font-semibold text-pretty mb-3">{t.h2}</h2>
          <p className="section-desc text-[15px] leading-relaxed">{t.desc}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div className="grid grid-cols-4 gap-2.5">
            {formatList.map((fmt) => (
              <Link
                key={fmt.slug}
                href={localePath(locale, `/supported-formats/${fmt.slug}`)}
                className="fmt-badge rounded-[10px] py-4 px-2 text-center font-mono text-[12.5px]"
              >
                {fmt.name}
              </Link>
            ))}
          </div>

          <PreviewTool locale={locale} />
        </div>
      </div>

      <style>{`
        .section-tag { color: var(--violet); }
        .section-h2 { font-size: clamp(26px,3.4vw,36px); letter-spacing: -0.02em; }
        .section-desc { color: var(--muted); }
        .fmt-badge {
          background: var(--card); border: 1px solid var(--border); color: var(--muted);
          transition: border-color .2s, color .2s, transform .2s;
        }
        .fmt-badge:hover { border-color: var(--violet); color: var(--violet); transform: translateY(-2px); }
      `}</style>
    </section>
  )
}
