import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/about-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'About',
    description:
      'About this independent Void Image Viewer resource and download mirror. Not affiliated with the original authors; all binaries verified against official checksums.',
    path: '/about',
  }),
}

export default function Page() {
  return <AboutPage locale="en" />
}
