import Link from 'next/link'
import Image from 'next/image'
import { translations, ui, localePath, type Locale } from '@/lib/i18n'
import { APP, highPriorityFormats } from '@/lib/site-data'

interface SiteFooterProps {
  locale: Locale
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const t = translations[locale].footer
  const u = ui[locale]

  const productLinks = [
    { href: localePath(locale, '/download'), label: u.common.download },
    { href: localePath(locale, '/download#green'), label: u.download.portable },
    { href: localePath(locale, '/features'), label: u.features.title },
    { href: localePath(locale, '/installation'), label: u.installation.title },
  ]
  const resourceLinks = [
    { href: localePath(locale, '/release-notes'), label: u.releaseNotes.title },
    { href: localePath(locale, '/screenshots'), label: u.screenshots.title },
    { href: localePath(locale, '/faq'), label: u.faqPage.title },
    { href: localePath(locale, '/about'), label: u.about.title },
  ]
  const formatLinks = highPriorityFormats.map((f) => ({
    href: localePath(locale, `/supported-formats/${f.slug}`),
    label: `${f.name} ${u.formats.viewerSuffix}`,
  }))

  return (
    <>
      <div className="container-v mb-8">
        <div className="disclaimer-box px-5 py-3.5 rounded-[10px] text-[12px] leading-relaxed">
          {t.disclaimer}
        </div>
      </div>

      <footer className="site-footer pt-11 pb-10">
        <div className="container-v">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-9">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 font-display font-semibold text-[16px]">
                <Image
                  src="/logo-icon.png"
                  alt="Void Image Viewer logo"
                  width={24}
                  height={24}
                  className="logo-img-sm"
                />
                Void Image Viewer
              </div>
              <p className="footer-copy text-[12.5px] leading-relaxed max-w-[220px]">{t.copy}</p>
              <span className="chip mt-1 w-fit">{t.mit}</span>
            </div>

            <FooterCol title={u.footer.product} links={productLinks} />
            <FooterCol title={u.footer.resources} links={resourceLinks} />
            <FooterCol title={u.footer.formats} links={formatLinks} />
          </div>

          <div className="footer-bottom flex justify-between flex-wrap gap-4 items-center pt-6">
            <p className="footer-copy text-[12px]">{APP.baseUrl.replace('https://', '')} · Independent resource site</p>
            <div className="flex gap-5 text-[12.5px] footer-links">
              <a href={APP.githubUrl} target="_blank" rel="noopener noreferrer">{t.github}</a>
              {locale === 'en' ? <Link href="/zh">中文</Link> : <Link href="/">English</Link>}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .disclaimer-box {
          background: var(--card);
          border: 1px solid var(--border);
          color: var(--muted);
        }
        .site-footer {
          background: #06008b;
          color: rgba(255,255,255,0.85);
        }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.15); }
        .logo-img-sm {
          border-radius: 5px;
          flex-shrink: 0;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.35);
        }
        .site-footer .font-display { color: #ffffff; }
        .footer-copy { color: rgba(255,255,255,0.6); }
        .footer-heading { color: rgba(255,255,255,0.55) !important; opacity: 1 !important; }
        .site-footer .link-v { color: rgba(255,255,255,0.72); }
        .site-footer .link-v:hover { color: #ffffff; }
        .site-footer .chip { color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.25); }
        .footer-links { color: rgba(255,255,255,0.72); }
        .footer-links a { transition: color .15s; }
        .footer-links a:hover { color: #ffffff; }
      `}</style>
    </>
  )
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[11px] tracking-[0.06em] footer-heading">{title}</span>
      <div className="flex flex-col gap-2.5">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="link-v text-[13px]">
            {l.label}
          </Link>
        ))}
      </div>
      <style>{`.footer-heading { color: var(--muted); opacity: .6; }`}</style>
    </div>
  )
}
