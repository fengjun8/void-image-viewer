import type { Metadata } from 'next'
import { ScreenshotsPage } from '@/components/pages/screenshots-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Screenshots — ${APP.name}`,
  description: 'See the clean, distraction-free interface of Void Image Viewer: main viewer, thumbnails, info panel, animation playback, fullscreen and themes.',
  alternates: {
    canonical: '/screenshots',
    languages: { en: '/screenshots', zh: '/zh/screenshots' },
  },
}

export default function Page() {
  return <ScreenshotsPage locale="en" />
}
