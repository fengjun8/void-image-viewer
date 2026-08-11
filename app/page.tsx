import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { WhySection } from '@/components/why-section'
import { FormatsSection } from '@/components/formats-section'
import { FeaturesSection } from '@/components/features-section'
import { DownloadSection } from '@/components/download-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'
import { ui } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'VoidimageViewer - Void Image Viewer Free Download for Windows',
    description:
      'Download Void Image Viewer for Windows — a free, lightweight open-source image viewer. Supports PNG, JPEG, GIF, WebP, AVIF, HEIC, SVG, TIFF and more. MIT licensed.',
    path: '/',
    keywords:
      'VoidimageViewer, Void Image Viewer, image viewer, Windows image viewer, free image viewer, open source image viewer, WebP viewer, AVIF viewer, HEIC viewer',
  }),
}

export default function HomePage() {
  return (
    <main>
      <Nav locale="en" />
      <Hero locale="en" />
      <WhySection locale="en" />
      <FormatsSection locale="en" />
      <FeaturesSection locale="en" />
      <DownloadSection locale="en" />
      <FaqSection locale="en" />
      <SiteFooter locale="en" />
      <BackToTop label={ui.en.common.backToTop} />
    </main>
  )
}
