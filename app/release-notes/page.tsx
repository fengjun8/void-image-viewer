import type { Metadata } from 'next'
import { ReleaseNotesPage } from '@/components/pages/release-notes-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Release Notes',
    description:
      'Full version history and changelog for Void Image Viewer. See what is new and fixed in every release.',
    path: '/release-notes',
  }),
}

export default function Page() {
  return <ReleaseNotesPage locale="en" />
}
