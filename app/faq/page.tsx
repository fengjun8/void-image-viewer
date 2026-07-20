import type { Metadata } from 'next'
import { FaqPage } from '@/components/pages/faq-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `FAQ — ${APP.name}`,
  description: 'Answers to common questions about downloading, installing, security, formats and using Void Image Viewer on Windows.',
  alternates: {
    canonical: '/faq',
    languages: { en: '/faq', zh: '/zh/faq' },
  },
}

export default function Page() {
  return <FaqPage locale="en" />
}
