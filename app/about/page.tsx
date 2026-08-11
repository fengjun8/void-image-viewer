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
  }),
}

export default function Page() {
  return <AboutPage locale="en" />
}
