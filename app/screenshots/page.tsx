import type { Metadata } from 'next'
import { ScreenshotsPage } from '@/components/pages/screenshots-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'VoidImageViewer Screenshots - Clean Interface Preview for Windows',
    description:
      'See VoidImageViewer in action: clean main viewer, instant folder thumbnails, format info panel, animated GIF/WebP playback, fullscreen mode and dark/light themes. Free open-source image viewer for Windows.',
    path: '/screenshots',
    keywords:
      'VoidImageViewer screenshots, Void Image Viewer screenshots, image viewer interface, Windows image viewer UI, image viewer preview',
  }),
}

export default function Page() {
  return <ScreenshotsPage locale="en" />
}
