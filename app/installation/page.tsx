import type { Metadata } from 'next'
import { InstallationPage } from '@/components/pages/installation-page'

export const metadata: Metadata = {
  title: 'Installation Guide — Void Image Viewer for Windows',
  description: 'Step-by-step guide to install Void Image Viewer on Windows 10/11 and set it as your default image viewer. Covers installer, portable version and troubleshooting.',
  keywords: 'install void image viewer, set default image viewer windows, void image viewer setup',
  alternates: {
    canonical: 'https://voidimageviewer.com/installation',
    languages: {
      en: 'https://voidimageviewer.com/installation',
      zh: 'https://voidimageviewer.com/zh/installation',
    },
  },
}

export default function Page() {
  return <InstallationPage locale="en" />
}
