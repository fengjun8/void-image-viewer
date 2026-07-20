import { translations, type Locale } from '@/lib/i18n'

const featureIcons = [
  <svg key="fast" viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>,
  <svg key="gif" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M4 15l4-4 4 4 8-8"/></svg>,
  <svg key="zoom" viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>,
  <svg key="codec" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6z"/></svg>,
  <svg key="default" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 3v12M6 9l6 6 6-6"/><path d="M4 21h16"/></svg>,
  <svg key="portable" viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
]

interface FeaturesSectionProps {
  locale: Locale
}

export function FeaturesSection({ locale }: FeaturesSectionProps) {
  const t = translations[locale].features

  return (
    <section id="features" className="py-20">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="max-w-[560px] mb-11">
          <span className="section-tag font-mono text-[12px] tracking-[0.06em] block mb-2.5">
            {t.tag}
          </span>
          <h2 className="section-h2 font-display font-semibold text-pretty">
            {t.h2}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.cards.map((card, i) => (
            <div key={card.title} className="feat-card rounded-[var(--radius-lg)] p-6">
              <div className="feat-icon w-[38px] h-[38px] rounded-[9px] flex items-center justify-center mb-4">
                <span className="feat-icon-svg w-[18px] h-[18px] flex">{featureIcons[i]}</span>
              </div>
              <h3 className="font-display font-semibold text-[15.5px] mb-1.5">{card.title}</h3>
              <p className="feat-body text-[13.5px] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .section-tag { color: var(--violet); }
        .section-h2 { font-size: clamp(26px,3.4vw,36px); letter-spacing: -0.02em; }
        .feat-card { background: var(--card); border: 1px solid var(--border); }
        .feat-icon { background: var(--violet-dim); }
        .feat-icon-svg { color: var(--violet); }
        .feat-icon-svg svg { stroke: var(--violet); width: 100%; height: 100%; }
        .feat-body { color: var(--muted); }
      `}</style>
    </section>
  )
}
