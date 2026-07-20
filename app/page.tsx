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

export const metadata: Metadata = {
  title: 'VoidimageViewer download - Void Image Viewer Free Open Source Image Viewer',
  description: 'Download the latest Void Image Viewer for Windows. A lightweight open-source image viewer supporting PNG, JPEG, GIF, WebP, AVIF, SVG, HEIC, TIFF and more. Free forever, MIT licensed.',
  alternates: {
    canonical: 'https://voidimageviewer.com',
    languages: {
      en: 'https://voidimageviewer.com',
      zh: 'https://voidimageviewer.com/zh',
    },
  },
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
