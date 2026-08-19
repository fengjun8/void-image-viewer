import type { Metadata } from 'next'
import { PrivacyPage } from '@/components/pages/privacy-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'VoidImageViewer Privacy Policy - No Telemetry, No Sign-up',
    description:
      'Privacy policy for the VoidImageViewer (Void Image Viewer) resource site: what data the software and this website collect, analytics cookies and how the browser preview tool processes your files locally.',
    path: '/privacy',
  }),
}

export default function Page() {
  return <PrivacyPage locale="en" />
}
