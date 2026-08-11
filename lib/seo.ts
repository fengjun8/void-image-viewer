import type { Metadata } from 'next'
import { APP } from '@/lib/site-data'
import type { Locale } from '@/lib/i18n'

const OG_IMAGE = '/og-image-1200x630.png'
const OG_ALT = 'VoidImageViewer — free open-source image viewer for Windows'

/** Absolute URL for a path in a given locale (path must be the English path). */
export function pageUrl(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path
  return `${APP.baseUrl}${locale === 'zh' ? `/zh${clean}` : clean}`
}

export interface PageSeoOptions {
  locale: Locale
  /** Page title without the site name; the layout template appends it on subpages. */
  title: string
  description: string
  /** English path, e.g. "/download" or "/supported-formats/webp". */
  path: string
  type?: 'website' | 'article'
  keywords?: string
}

/**
 * Builds page-level metadata with correct per-locale canonicals, hreflang
 * (en/zh + x-default), Open Graph and Twitter cards.
 */
export function pageMetadata({
  locale,
  title,
  description,
  path,
  type = 'website',
  keywords,
}: PageSeoOptions): Metadata {
  const canonical = pageUrl(locale, path)
  const ogTitle = path === '/' ? title : `${title} | ${APP.name}`
  const ogImage = `${APP.baseUrl}${OG_IMAGE}`

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        en: pageUrl('en', path),
        zh: pageUrl('zh', path),
        'x-default': `${APP.baseUrl}`,
      },
    },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: APP.name,
      type,
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      alternateLocale: locale === 'zh' ? ['en_US'] : ['zh_CN'],
      images: [{ url: ogImage, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@VoidimageViewer',
      title: ogTitle,
      description,
      images: [ogImage],
    },
  }
}
