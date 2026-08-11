import type { Metadata } from 'next'
import { FaqPage } from '@/components/pages/faq-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'FAQ - Download & Install VoidImageViewer',
    description:
      'Frequently asked questions about VoidImageViewer (Void Image Viewer): download, installation, security and checksums, supported formats like WebP, AVIF and HEIC, the portable version and setting your default image viewer on Windows.',
    path: '/faq',
  }),
}

export default function Page() {
  return <FaqPage locale="en" />
}
