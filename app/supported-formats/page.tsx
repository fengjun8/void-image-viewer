import type { Metadata } from 'next'
import { FormatsIndexPage } from '@/components/pages/formats-index-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Supported Image Formats - Open WebP, AVIF, HEIC & More',
    description:
      'All image formats VoidImageViewer opens on Windows: WebP, AVIF, HEIC, JPEG XL, SVG, TIFF, RAW, PNG, JPEG, GIF and more. Preview any format online for free - no install required.',
    path: '/supported-formats',
  }),
}

export default function Page() {
  return <FormatsIndexPage locale="en" />
}
