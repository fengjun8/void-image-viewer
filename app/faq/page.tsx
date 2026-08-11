import type { Metadata } from 'next'
import { FaqPage } from '@/components/pages/faq-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'FAQ',
    description:
      'Answers to common questions about downloading, installing, security, formats and using Void Image Viewer on Windows.',
    path: '/faq',
  }),
}

export default function Page() {
  return <FaqPage locale="en" />
}
