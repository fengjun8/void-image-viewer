import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { ui, localePath, type Locale } from '@/lib/i18n'

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = ui[locale].privacy
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
        <div className="container-v max-w-[720px]">
          <p className="font-mono text-[12px] mb-8" style={{ color: 'var(--muted)' }}>
            {t.updated}: 2026-08-19
          </p>
          {t.sections.map((s) => (
            <div key={s.t} className="mb-8">
              <h2 className="h2-v mb-3">{s.t}</h2>
              <p className="prose-v" style={{ margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
