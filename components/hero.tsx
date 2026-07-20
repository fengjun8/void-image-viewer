import { translations, localePath, type Locale } from '@/lib/i18n'
import Link from 'next/link'

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const t = translations[locale].hero

  const downloadHref = localePath(locale, '/download')

  return (
    <header className="hero-section relative py-24 pb-20 overflow-hidden text-center">
      <div className="hero-bg absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1120px] mx-auto px-7">
        {/* Eyebrow */}
        <span className="eyebrow-badge inline-block font-mono text-[12px] tracking-widest px-3 py-1.5 rounded-full mb-6">
          {t.eyebrow}
        </span>

        {/* Heading */}
        <h1 className="hero-h1 font-display font-semibold text-pretty mx-auto mb-5">
          {t.h1}
        </h1>

        {/* Lead */}
        <p className="hero-lead mx-auto mb-9">
          {t.lead}
        </p>

        {/* CTAs */}
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link href={downloadHref} className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-[9px] text-[14px] font-medium">
            ↓ {t.cta1}
          </Link>
          <a href="#formats" className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-[9px] text-[14px] font-medium">
            {t.cta2} →
          </a>
        </div>

        {/* Meta */}
        <p className="hero-meta mt-5 font-mono text-[12px]">{t.meta}</p>
      </div>

      <style>{`
        .hero-bg {
          background-image: url('/hero-bg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 65% at 50% 50%, color-mix(in srgb, var(--background) 55%, transparent), transparent 75%),
            linear-gradient(to bottom, color-mix(in srgb, var(--background) 30%, transparent), transparent 30%, transparent 70%, var(--background));
        }
        .eyebrow-badge { color: var(--amber); background: var(--amber-dim); }
        .hero-h1 {
          font-size: clamp(34px, 5vw, 54px);
          line-height: 1.08;
          max-width: 760px;
          letter-spacing: -0.02em;
        }
        .hero-lead { color: var(--muted); font-size: 17px; max-width: 560px; }
        .hero-meta { color: var(--muted); }
        .btn-primary {
          background: var(--violet); color: var(--on-brand);
          transition: background .15s; white-space: nowrap;
        }
        .btn-primary:hover { background: #1811b8; }
        .btn-ghost {
          border: 1px solid var(--border); color: var(--foreground);
          transition: border-color .15s; white-space: nowrap;
        }
        .btn-ghost:hover { border-color: var(--violet); }
      `}</style>
    </header>
  )
}
