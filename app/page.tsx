import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { WhySection } from '@/components/why-section'
import { FormatsSection } from '@/components/formats-section'
import { FeaturesSection } from '@/components/features-section'
import { DownloadSection } from '@/components/download-section'
import { FaqSection } from '@/components/faq-section'
import { RelatedSitesSection } from '@/components/related-sites-section'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'
import { JsonLd } from '@/components/json-ld'
import { ui } from '@/lib/i18n'
import { APP, latestRelease } from '@/lib/site-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'VoidImageViewer - Void Image Viewer Free Download for Windows',
    description:
      'Download Void Image Viewer for Windows — a free, lightweight open-source image viewer. Supports PNG, JPEG, GIF, WebP, AVIF, HEIC, SVG, TIFF and more. MIT licensed.',
    path: '/',
    keywords:
      'VoidImageViewer, Void Image Viewer, image viewer for Windows, free image viewer download, open source image viewer, Windows 10 image viewer',
  }),
}

export default function HomePage() {
  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${APP.baseUrl}/`,
    inLanguage: 'en',
    isPartOf: { '@id': `${APP.baseUrl}/#website` },
  }
  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP.name,
    operatingSystem: APP.os,
    applicationCategory: 'MultimediaApplication',
    softwareVersion: latestRelease.version,
    fileSize: `${latestRelease.sizeMb} MB`,
    downloadUrl: `${APP.baseUrl}/download`,
    url: `${APP.baseUrl}/`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    license: 'https://opensource.org/licenses/MIT',
    isPartOf: { '@id': `${APP.baseUrl}/#website` },
  }
  return (
    <main id="main-content" lang="en">
      <JsonLd data={[webPageLd, softwareLd]} />
      <Nav locale="en" />
      <Hero locale="en" />
      <WhySection locale="en" />
      <FormatsSection locale="en" />
      <FeaturesSection locale="en" />
      <DownloadSection locale="en" />
      <FaqSection locale="en" />
      <RelatedSitesSection locale="en" />
      <SiteFooter locale="en" />
      <BackToTop label={ui.en.common.backToTop} />
    </main>
  )
}
