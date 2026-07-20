import type { Metadata } from 'next'
import { FormatsIndexPage } from '@/components/pages/formats-index-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Supported Image Formats — ${APP.name}`,
  description:
    'Every image format Void Image Viewer opens on Windows: WebP, AVIF, HEIC, JPEG XL, SVG, TIFF, RAW and more. Preview any format online for free.',
  alternates: {
    canonical: '/supported-formats',
    languages: { en: '/supported-formats', zh: '/zh/supported-formats' },
  },
}

export default function Page() {
  return <FormatsIndexPage locale="en" />
}
