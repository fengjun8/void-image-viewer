import type { Metadata } from 'next'
import { FormatsIndexPage } from '@/components/pages/formats-index-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'VoidImageViewer Supported Formats - Open WebP, AVIF, HEIC & More',
    description:
      'All image formats VoidImageViewer opens on Windows: WebP, AVIF, HEIC, JPEG XL, SVG, TIFF, RAW, PNG, JPEG, GIF and more. Preview any format online for free - no install required.',
    path: '/supported-formats',
    keywords:
      'supported image formats, open WebP files, AVIF viewer, HEIC viewer, image format support Windows, JPEG XL viewer',
  }),
}

export default function Page() {
  return <FormatsIndexPage locale="en" />
}
