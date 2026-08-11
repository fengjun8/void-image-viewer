import type { Metadata } from 'next'
import { FeaturesPage } from '@/components/pages/features-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'VoidImageViewer Features - Fast Lightweight Image Viewer for Windows',
    description:
      'Fast native decoding, animated GIF/WebP/AVIF playback, RAW and HEIC support, instant folder thumbnails and a distraction-free viewer. VoidImageViewer (Void Image Viewer) is free and open source for Windows.',
    path: '/features',
    keywords:
      'VoidImageViewer features, Void Image Viewer features, image viewer for Windows, animated GIF viewer, WebP viewer, AVIF viewer, HEIC viewer, RAW image viewer',
  }),
}

export default function Page() {
  return <FeaturesPage locale="en" />
}
