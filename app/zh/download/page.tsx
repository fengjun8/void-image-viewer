import type { Metadata } from 'next'
import { DownloadPage } from '@/components/pages/download-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '下载 VoidImageViewer - Void Image Viewer 免费便携版',
    description:
      '下载 VoidImageViewer（Void Image Viewer）Windows 版——免费开源、SHA256 已验证。含安装版与便携版，支持 WebP、AVIF、HEIC、SVG、TIFF 等格式，无广告、无遥测。',
    path: '/download',
    keywords: 'Void Image Viewer 下载, 图片查看器下载, 便携版图片查看器, Windows 图片查看器下载, 免费图片查看器',
  }),
}

export default function Page() {
  return <DownloadPage locale="zh" />
}
