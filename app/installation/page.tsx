import type { Metadata } from 'next'
import { InstallationPage } from '@/components/pages/installation-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Installation Guide - Set Void Image Viewer as Default on Windows',
    description:
      'Step-by-step guide to install VoidImageViewer (Void Image Viewer) on Windows 10/11 and set it as your default image viewer. Covers the installer, portable version and troubleshooting.',
    path: '/installation',
    keywords: 'install void image viewer, set default image viewer windows, void image viewer setup',
  }),
}

export default function Page() {
  return <InstallationPage locale="en" />
}
