import type { Metadata } from 'next'
import { DownloadPage } from '@/components/pages/download-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'en',
    title: 'Download VoidImageViewer for Windows - Free & Portable',
    description:
      'Download VoidImageViewer (Void Image Viewer) for Windows - free and open source, SHA256 verified. Portable and installer builds, plus WebP, AVIF, HEIC, SVG and more formats.',
    path: '/download',
    keywords:
      'VoidImageViewer download, download Void Image Viewer, free image viewer download Windows, portable image viewer, image viewer installer',
  }),
  // 下载页 title 保持原样（后缀 VoidImageViewer），不受全局模板影响
  title: {
    absolute: 'Download VoidImageViewer for Windows - Free & Portable | VoidImageViewer',
  },
}

export default function Page() {
  return <DownloadPage locale="en" />
}
