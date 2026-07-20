'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { translations, localePath, type Locale } from '@/lib/i18n'

interface NavProps {
  locale: Locale
}

export function Nav({ locale }: NavProps) {
  const t = translations[locale].nav
  const pathname = usePathname() || '/'

  // Strip the /zh prefix to get the canonical path, then rebuild for each locale.
  const basePath = pathname === '/zh' ? '/' : pathname.replace(/^\/zh/, '') || '/'
  const enHref = basePath
  const zhHref = localePath('zh', basePath)

  const links = [
    { href: localePath(locale, '/'), label: t.home },
    { href: localePath(locale, '/download'), label: t.download },
    { href: localePath(locale, '/features'), label: t.features },
    { href: localePath(locale, '/supported-formats'), label: t.formats },
    { href: localePath(locale, '/release-notes'), label: t.releaseNotes },
    { href: localePath(locale, '/faq'), label: t.faq },
  ]

  return (
    <nav className="nav-bar sticky top-0 z-50">
      <div className="container-v flex items-center justify-between h-[68px]">
        <Link
          href={localePath(locale, '/')}
          className="nav-logo flex items-center gap-2.5 font-display font-semibold text-[18px]"
        >
          <Image
            src="/logo-icon.png"
            alt="Void Image Viewer logo"
            width={28}
            height={28}
            className="logo-img"
            priority
          />
          Void Image Viewer
        </Link>

        <div className="hidden md:flex gap-7 text-[14px]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="lang-toggle flex rounded-lg overflow-hidden text-[12px]">
            <Link href={enHref} className={`lang-btn px-2.5 py-1.5 transition-colors ${locale === 'en' ? 'lang-active' : ''}`}>
              EN
            </Link>
            <Link href={zhHref} className={`lang-btn px-2.5 py-1.5 transition-colors ${locale === 'zh' ? 'lang-active' : ''}`}>
              中文
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .nav-bar {
          background: rgba(6,0,139,0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .logo-img {
          border-radius: 6px;
          flex-shrink: 0;
        }
        .nav-logo { color: #ffffff; }
        .nav-logo:hover { opacity: 0.85; }
        .nav-link { color: rgba(255,255,255,0.72); transition: color .15s; }
        .nav-link:hover { color: #ffffff; }
        .lang-toggle { border: 1px solid rgba(255,255,255,0.22); }
        .lang-btn { color: rgba(255,255,255,0.7); }
        .lang-btn.lang-active { background: rgba(255,255,255,0.16); color: #ffffff; }
      `}</style>
    </nav>
  )
}
