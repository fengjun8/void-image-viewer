import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/about-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `About — ${APP.name}`,
  description: 'About this independent Void Image Viewer resource and download mirror. Not affiliated with the original authors; all binaries verified against official checksums.',
  alternates: {
    canonical: '/about',
    languages: { en: '/about', zh: '/zh/about' },
  },
}

export default function Page() {
  return <AboutPage locale="en" />
}
