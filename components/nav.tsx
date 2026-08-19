'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { translations, localePath, type Locale } from '@/lib/i18n'
import { LanguageSwitcher } from '@/components/language-switcher'

interface NavProps {
  locale: Locale
}

export function Nav({ locale }: NavProps) {
  const t = translations[locale].nav
  const [open, setOpen] = useState(false)

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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[14px] focus:font-semibold focus:text-[#06008b] focus:shadow-lg"
      >
        {t.skipToContent}
      </a>

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
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="inline-flex md:hidden hamburger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden mobile-menu">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

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
        .hamburger {
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          color: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.22);
        }
        .hamburger:hover { background: rgba(255,255,255,0.12); }
        .mobile-menu {
          background: #06008b;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding: 0.75rem 1.25rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .mobile-link {
          color: rgba(255,255,255,0.85);
          padding: 0.6rem 0.5rem;
          border-radius: 8px;
          font-size: 15px;
        }
        .mobile-link:hover { background: rgba(255,255,255,0.1); color: #ffffff; }
      `}</style>
    </nav>
  )
}
