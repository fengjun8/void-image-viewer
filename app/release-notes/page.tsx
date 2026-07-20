import type { Metadata } from 'next'
import { ReleaseNotesPage } from '@/components/pages/release-notes-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Release Notes — ${APP.name}`,
  description: 'Full version history and changelog for Void Image Viewer. See what is new and fixed in every release.',
  alternates: {
    canonical: '/release-notes',
    languages: { en: '/release-notes', zh: '/zh/release-notes' },
  },
}

export default function Page() {
  return <ReleaseNotesPage locale="en" />
}
