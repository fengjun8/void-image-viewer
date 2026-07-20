import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { PageHeader } from '@/components/page-header'
import { FaqAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import { ui, localePath, type Locale } from '@/lib/i18n'
import { APP } from '@/lib/site-data'

export function InstallationPage({ locale }: { locale: Locale }) {
  const u = ui[locale]

  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: u.installation.title,
    step: [
      ...u.download.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.t, text: s.d })),
    ],
  }

  return (
    <PageShell locale={locale}>
      <JsonLd data={howToLd} />
      <PageHeader
        crumbs={[
          { label: u.common.home, href: localePath(locale, '/') },
          { label: u.installation.title },
        ]}
        eyebrow="GUIDE"
        title={u.installation.title}
        lead={u.installation.subtitle}
      />

      <section className="py-12">
        <div className="container-v grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Installer */}
          <div>
            <h2 className="h2-v mb-5">{u.installation.installerTitle}</h2>
            <ol className="flex flex-col gap-4">
              {u.download.steps.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="step-num font-mono flex-shrink-0">{i + 1}</span>
                  <div>
                    <h3 className="text-[14.5px] font-medium mb-0.5">{s.t}</h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href={localePath(locale, '/download')} className="btn-v-primary mt-6">
              ↓ {u.common.downloadExe}
            </Link>
          </div>

          {/* Portable + set default */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="h2-v mb-5">{u.installation.portableTitle}</h2>
              <ol className="flex flex-col gap-4">
                {u.portable.steps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="step-num font-mono flex-shrink-0">{i + 1}</span>
                    <div>
                      <h3 className="text-[14.5px] font-medium mb-0.5">{s.t}</h3>
                      <p className="text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                        {s.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link href={localePath(locale, '/download#green')} className="link-v text-[13px] font-mono inline-block mt-4">
                {u.download.portable} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Set as default */}
      <section className="pb-12">
        <div className="container-v">
          <div className="card-v p-7 md:p-8">
            <h2 className="h2-v mb-5">{u.installation.defaultTitle}</h2>
            <ol className="flex flex-col gap-3 max-w-[640px]">
              {u.installation.defaultSteps.map((s, i) => (
                <li key={i} className="flex gap-3 items-start text-[14px]">
                  <span className="font-mono flex-shrink-0" style={{ color: 'var(--violet)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ color: 'var(--muted)' }}>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="pb-20">
        <div className="container-v max-w-[760px]">
          <h2 className="h2-v mb-6">{u.installation.troubleTitle}</h2>
          <FaqAccordion items={u.installation.trouble.map((t) => ({ q: t.q, a: t.a }))} defaultOpen={-1} />
          <p className="text-[12.5px] mt-6" style={{ color: 'var(--muted)' }}>
            {APP.os}
          </p>
        </div>
      </section>

      <style>{`
        .step-num {
          width: 30px; height: 30px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: var(--violet-dim); color: var(--violet); font-size: 13px;
        }
      `}</style>
    </PageShell>
  )
}
