import type { Metadata } from 'next'
import { FeaturesPage } from '@/components/pages/features-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '功能特性 - 极速轻量的 Windows 图片查看器',
    description:
      'VoidImageViewer（Void Image Viewer）功能特性：原生快速解码，GIF/WebP/AVIF 动图播放，支持 RAW 和 HEIC，即时文件夹缩略图，无干扰查看界面。免费开源，MIT 授权。',
    path: '/features',
    keywords: 'VoidImageViewer 功能, Void Image Viewer 功能, 图片查看器功能, GIF 动图查看, WebP 查看器, AVIF 查看器, HEIC 查看器, RAW 看图软件',
  }),
}

export default function Page() {
  return <FeaturesPage locale="zh" />
}
