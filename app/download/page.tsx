import type { Metadata } from 'next'
import { DownloadPage } from '@/components/pages/download-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Download VoidImageViewer for Windows - Free & Portable',
    description:
      'Download the latest Void Image Viewer for Windows. SHA256-verified, virus-free, MIT licensed. Includes a portable no-install version.',
    path: '/download',
    keywords:
      'void image viewer download, void image viewer portable, void image viewer windows 10, free image viewer download',
  }),
}

export default function Page() {
  return <DownloadPage locale="en" />
}
