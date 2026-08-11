import type { Metadata } from 'next'
import { FeaturesPage } from '@/components/pages/features-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Features',
    description:
      'Fast native decoding, animated GIF/WebP/AVIF playback, RAW and HEIC support, instant folder thumbnails, and a distraction-free viewer. Free and open source.',
    path: '/features',
  }),
}

export default function Page() {
  return <FeaturesPage locale="en" />
}
