import Image from 'next/image'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { ui, localePath, type Locale } from '@/lib/i18n'

const shotImages = [
  '/screenshots/main-viewer.jpg',
  '/screenshots/thumbnails.jpg',
  '/screenshots/info-panel.jpg',
  '/screenshots/playback.jpg',
  '/screenshots/fullscreen.jpg',
  '/screenshots/themes.jpg',
]

export function ScreenshotsPage({ locale }: { locale: Locale }) {
  const t = ui[locale].screenshots
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
        <div className="container-v">
          <div className="grid md:grid-cols-2 gap-6">
            {t.shots.map((shot, i) => (
              <figure key={i} className="card-v card-v-hover overflow-hidden">
                <div className="relative aspect-[16/10] w-full" style={{ background: 'var(--surface-2)' }}>
                  <Image
                    src={shotImages[i] || '/placeholder.svg'}
                    alt={`Void Image Viewer — ${shot.t}: ${shot.d}`}
                    title={`Void Image Viewer — ${shot.t}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading={i < 2 ? 'eager' : 'lazy'}
                  />
                </div>
                <figcaption className="p-5">
                  <h2 className="font-display font-semibold text-[16px] mb-1">{shot.t}</h2>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {shot.d}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={localePath(locale, '/download')} className="btn-v-primary">
              {c.download}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
