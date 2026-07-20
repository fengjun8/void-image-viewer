import type { Metadata } from 'next'
import { DownloadPage } from '@/components/pages/download-page'

export const metadata: Metadata = {
  title: 'Download Void Image Viewer for Windows — Free & Portable',
  description: 'Download the latest Void Image Viewer for Windows. SHA256-verified, virus-free, MIT licensed. Includes a portable no-install version.',
  keywords: 'void image viewer download, void image viewer portable, void image viewer windows 10, free image viewer download',
  alternates: {
    canonical: 'https://voidimageviewer.com/download',
    languages: {
      en: 'https://voidimageviewer.com/download',
      zh: 'https://voidimageviewer.com/zh/download',
    },
  },
}

export default function Page() {
  return <DownloadPage locale="en" />
}
