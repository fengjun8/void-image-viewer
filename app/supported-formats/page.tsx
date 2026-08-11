import type { Metadata } from 'next'
import { FormatsIndexPage } from '@/components/pages/formats-index-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Supported Image Formats',
    description:
      'Every image format Void Image Viewer opens on Windows: WebP, AVIF, HEIC, JPEG XL, SVG, TIFF, RAW and more. Preview any format online for free.',
    path: '/supported-formats',
  }),
}

export default function Page() {
  return <FormatsIndexPage locale="en" />
}
