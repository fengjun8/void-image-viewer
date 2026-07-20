import type { Metadata } from 'next'
import { FeaturesPage } from '@/components/pages/features-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Features — ${APP.name}`,
  description:
    'Fast native decoding, animated GIF/WebP/AVIF playback, RAW and HEIC support, instant folder thumbnails, and a distraction-free viewer. Free and open source.',
  alternates: {
    canonical: '/features',
    languages: { en: '/features', zh: '/zh/features' },
  },
}

export default function Page() {
  return <FeaturesPage locale="en" />
}
