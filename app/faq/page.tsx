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
    keywords:
      'VoidImageViewer FAQ, Void Image Viewer FAQ, image viewer questions, image viewer help, set default image viewer Windows, portable image viewer',
  }),
}

export default function Page() {
  return <FaqPage locale="en" />
}
