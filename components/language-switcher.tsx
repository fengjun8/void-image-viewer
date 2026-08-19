'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { localePath, type Locale } from '@/lib/i18n'

interface LanguageSwitcherProps {
  locale: Locale
  variant?: 'nav' | 'footer'
}

export function LanguageSwitcher({ locale, variant = 'nav' }: LanguageSwitcherProps) {
  const pathname = usePathname() || '/'

  // Strip the /zh prefix to get the canonical path, then rebuild for each locale,
  // so switching language stays on the same page.
  const basePath = pathname === '/zh' ? '/' : pathname.replace(/^\/zh/, '') || '/'
  const enHref = basePath
  const zhHref = localePath('zh', basePath)

  if (variant === 'footer') {
    return locale === 'en' ? (
      <Link href={zhHref}>中文</Link>
    ) : (
      <Link href={enHref}>English</Link>
    )
  }

  return (
    <div className="lang-toggle flex rounded-lg overflow-hidden text-[12px]">
      <Link href={enHref} className={`lang-btn px-2.5 py-1.5 transition-colors ${locale === 'en' ? 'lang-active' : ''}`}>
        EN
      </Link>
      <Link href={zhHref} className={`lang-btn px-2.5 py-1.5 transition-colors ${locale === 'zh' ? 'lang-active' : ''}`}>
        中文
      </Link>
    </div>
  )
}
