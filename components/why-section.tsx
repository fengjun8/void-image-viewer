import { translations, type Locale } from '@/lib/i18n'

interface WhySectionProps {
  locale: Locale
}

export function WhySection({ locale }: WhySectionProps) {
  const t = translations[locale].why

  return (
    <section id="why" className="py-20">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="max-w-[560px] mb-11">
          <span className="section-tag font-mono text-[12px] tracking-[0.06em] block mb-2.5">
            {t.tag}
          </span>
          <h2 className="section-h2 font-display font-semibold text-pretty">
            {t.h2}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.cards.map((card) => (
            <div key={card.num} className="why-card rounded-[var(--radius-lg)] p-6">
              <span className="why-num font-mono text-[12px] block mb-3.5">{card.num}</span>
              <h3 className="font-display font-semibold text-[16px] mb-2">{card.title}</h3>
              <p className="why-body text-[13.5px] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-tag { color: var(--violet); }
        .section-h2 {
          font-size: clamp(26px, 3.4vw, 36px);
          letter-spacing: -0.02em;
        }
        .why-card {
          background: var(--card);
          border: 1px solid var(--border);
          transition: border-color .2s;
        }
        .why-card:hover { border-color: rgba(139,127,255,0.4); }
        .why-num { color: var(--amber); }
        .why-body { color: var(--muted); }
      `}</style>
    </section>
  )
}
