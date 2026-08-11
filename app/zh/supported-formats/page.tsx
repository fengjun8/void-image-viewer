import type { Metadata } from 'next'
import { FormatsIndexPage } from '@/components/pages/formats-index-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: 'VoidImageViewer支持的图片格式 - 打开 WebP、AVIF、HEIC 等',
    description:
      'VoidImageViewer（Void Image Viewer）在 Windows 上支持的所有图片格式：WebP、AVIF、HEIC、JPEG XL、SVG、TIFF、RAW、PNG、JPEG、GIF 等，免费在线预览任意格式，无需安装。',
    path: '/supported-formats',
    keywords: '支持的图片格式, 打开 WebP, AVIF 查看器, HEIC 查看器, 图片格式支持, Windows 看图格式',
  }),
}

export default function Page() {
  return <FormatsIndexPage locale="zh" />
}
