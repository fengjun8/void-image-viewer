import type { Metadata } from 'next'
import { DownloadPage } from '@/components/pages/download-page'

export const metadata: Metadata = {
  title: '下载 Void Image Viewer Windows 版 — 免费便携',
  description: '下载最新版 Void Image Viewer Windows 版。SHA256 已验证、无病毒、MIT 授权，含免安装便携版。',
  keywords: 'Void Image Viewer 下载, 图片查看器下载, 便携版图片查看器, Windows 图片查看器下载, 免费图片查看器',
  alternates: {
    canonical: 'https://voidimageviewer.com/zh/download',
    languages: {
      en: 'https://voidimageviewer.com/download',
      zh: 'https://voidimageviewer.com/zh/download',
    },
  },
}

export default function Page() {
  return <DownloadPage locale="zh" />
}
