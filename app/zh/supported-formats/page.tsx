import type { Metadata } from 'next'
import { FormatsIndexPage } from '@/components/pages/formats-index-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '支持的图片格式 - 打开 WebP、AVIF、HEIC 等',
    description:
      'VoidImageViewer（Void Image Viewer）在 Windows 上支持的所有图片格式：WebP、AVIF、HEIC、JPEG XL、SVG、TIFF、RAW、PNG、JPEG、GIF 等，免费在线预览任意格式，无需安装。',
    path: '/supported-formats',
  }),
}

export default function Page() {
  return <FormatsIndexPage locale="zh" />
}
