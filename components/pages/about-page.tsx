import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { APP } from '@/lib/site-data'

export function AboutPage({ locale }: { locale: Locale }) {
  const t = ui[locale].about
  const c = ui[locale].common

  const links = [
    { label: c.download, href: localePath(locale, '/download') },
    { label: ui[locale].releaseNotes.title, href: localePath(locale, '/release-notes') },
    { label: ui[locale].installation.title, href: localePath(locale, '/installation') },
    { label: 'GitHub', href: APP.githubUrl, external: true },
    { label: APP.contactEmail, href: `mailto:${APP.contactEmail}` },
  ]

  const dir = locale === 'zh' ? 'zh' : 'en'
  // Intrinsic sizes (from the compressed WebP/GIF assets) so the browser reserves space.
  const dims =
    locale === 'zh'
      ? { main: { w: 720, h: 450 }, opt: { w: 720, h: 698 } }
      : { main: { w: 502, h: 524 }, opt: { w: 467, h: 467 } }
  const shots = [
    { src: `/readme/${dir}/main.${locale === 'zh' ? 'webp' : 'gif'}`, w: dims.main.w, h: dims.main.h, ...t.shots[0] },
    { src: `/readme/${dir}/general.webp`, w: dims.opt.w, h: dims.opt.h, ...t.shots[1] },
    { src: `/readme/${dir}/view.webp`, w: dims.opt.w, h: dims.opt.h, ...t.shots[2] },
    { src: `/readme/${dir}/controls.webp`, w: dims.opt.w, h: dims.opt.h, ...t.shots[3] },
  ]

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
        <div className="container-v max-w-[720px]">
          <h2 className="h2-v mb-3">{t.whatTitle}</h2>
          <p className="prose-v mb-10">{t.whatBody}</p>

          <h2 className="h2-v mb-2">{t.galleryTitle}</h2>
          <p className="prose-v mb-6">{t.galleryIntro}</p>
          <div className="grid gap-6 sm:grid-cols-2 mb-4">
            {shots.map((s) => (
              <figure key={s.src} className="card-v overflow-hidden">
                <div className="flex items-center justify-center p-3" style={{ background: 'var(--muted-bg, rgba(127,127,127,0.06))' }}>
                  <img
                    src={s.src || "/placeholder.svg"}
                    alt={`Void Image Viewer ${s.t} screenshot — ${s.d}`}
                    title={`Void Image Viewer — ${s.t}`}
                    width={s.w}
                    height={s.h}
                    className="max-w-full h-auto rounded"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="p-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="font-display font-semibold text-[15px] mb-1">{s.t}</div>
                  <p className="prose-v" style={{ margin: 0, fontSize: 13 }}>{s.d}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="prose-v mb-10" style={{ fontSize: 13, opacity: 0.8 }}>{t.galleryCredit}</p>

          <h2 className="h2-v mb-3">{t.mirrorTitle}</h2>
          <p className="prose-v mb-10">{t.mirrorBody}</p>

          <div
            className="card-v p-6 mb-10"
            style={{ background: 'var(--amber-dim, rgba(217,164,65,0.08))', borderColor: 'var(--amber)' }}
          >
            <h2 className="font-display font-semibold text-[17px] mb-2" style={{ color: 'var(--amber)' }}>
              {t.disclaimerTitle}
            </h2>
            <p className="prose-v" style={{ margin: 0 }}>
              {t.disclaimerBody}
            </p>
          </div>

          <h2 className="h2-v mb-4">{t.linksTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {links.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-v-ghost"
                >
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href} className="btn-v-ghost">
                  {l.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
