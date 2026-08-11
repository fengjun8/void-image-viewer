import type { Metadata } from 'next'
import { ScreenshotsPage } from '@/components/pages/screenshots-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Screenshots',
    description:
      'See the clean, distraction-free interface of Void Image Viewer: main viewer, thumbnails, info panel, animation playback, fullscreen and themes.',
    path: '/screenshots',
  }),
}

export default function Page() {
  return <ScreenshotsPage locale="en" />
}
