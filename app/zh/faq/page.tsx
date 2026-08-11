import type { Metadata } from 'next'
import { FaqPage } from '@/components/pages/faq-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '常见问题 - VoidImageViewer 下载安装指南',
    description:
      '关于 VoidImageViewer（Void Image Viewer）的常见问题：下载安装、安全性校验、WebP/AVIF/HEIC 等格式支持、便携版以及 Windows 默认图片查看器设置。',
    path: '/faq',
  }),
}

export default function Page() {
  return <FaqPage locale="zh" />
}
