import type { Metadata } from 'next'
import { ContactPage } from '@/components/pages/contact-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Contact - VoidImageViewer Resource Site',
    description:
      'How to contact the VoidImageViewer (Void Image Viewer) resource site for mirror issues, and how to reach the upstream open-source project through its official channels.',
    path: '/contact',
  }),
}

export default function Page() {
  return <ContactPage locale="en" />
}
