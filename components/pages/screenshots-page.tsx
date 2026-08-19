import Image from 'next/image'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { JsonLd } from '@/components/json-ld'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { APP } from '@/lib/site-data'

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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${APP.name} ${t.title}`,
    description: t.subtitle,
    url: `${APP.baseUrl}${localePath(locale, '/screenshots')}`,
    image: shotImages.map((s) => `${APP.baseUrl}${s}`),
    isPartOf: { '@id': `${APP.baseUrl}/#website` },
  }

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${APP.baseUrl}${localePath(locale, '/screenshots')}`,
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en',
    isPartOf: { '@id': `${APP.baseUrl}/#website` },
  }

  return (
    <PageShell locale={locale}>
      <JsonLd data={[webPageLd, jsonLd]} />
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
