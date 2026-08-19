import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { APP } from '@/lib/site-data'

export function ContactPage({ locale }: { locale: Locale }) {
  const t = ui[locale].contact
  const c = ui[locale].common

  const links = [
    { label: 'GitHub', href: APP.githubUrl },
    { label: locale === 'zh' ? 'voidtools 论坛' : 'voidtools forum', href: APP.forumUrl },
    { label: c.download, href: localePath(locale, '/download') },
    { label: ui[locale].faqPage.title, href: localePath(locale, '/faq') },
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
          <h2 className="h2-v mb-3">{t.mirrorTitle}</h2>
          <p className="prose-v mb-10">{t.mirrorBody}</p>

          <h2 className="h2-v mb-3">{t.softwareTitle}</h2>
          <p className="prose-v mb-10">{t.softwareBody}</p>

          <h2 className="h2-v mb-4">{t.linksTitle}</h2>
          <div className="flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.href.startsWith('http')
                  ? { target: '_blank', rel: 'nofollow noopener noreferrer' }
                  : {})}
                className="btn-v-ghost"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
