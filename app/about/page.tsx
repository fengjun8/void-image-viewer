import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/about-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'About - VoidImageViewer Download Mirror & Resource',
    description:
      'About this independent VoidImageViewer (Void Image Viewer) resource and download mirror: binaries verified against official checksums, GitHub source links and project background. Not affiliated with the original authors.',
    path: '/about',
    keywords:
      'VoidImageViewer about, Void Image Viewer mirror, image viewer download site, open source image viewer project, download mirror',
  }),
}

export default function Page() {
  return <AboutPage locale="en" />
}
