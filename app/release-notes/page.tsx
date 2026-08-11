import type { Metadata } from 'next'
import { ReleaseNotesPage } from '@/components/pages/release-notes-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Release Notes - VoidImageViewer Version History',
    description:
      'Complete version history for VoidImageViewer (Void Image Viewer): every release, new features, bug fixes and improvements for the free open-source Windows image viewer.',
    path: '/release-notes',
    keywords:
      'VoidImageViewer release notes, Void Image Viewer changelog, image viewer version history, VoidImageViewer updates',
  }),
}

export default function Page() {
  return <ReleaseNotesPage locale="en" />
}
