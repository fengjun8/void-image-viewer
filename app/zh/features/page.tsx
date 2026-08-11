import type { Metadata } from 'next'
import { FeaturesPage } from '@/components/pages/features-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '功能特性',
    description:
      '快速原生解码，GIF/WebP/AVIF 动图播放，支持 RAW 和 HEIC，即时文件夹缩略图，无干扰查看界面。免费开源。',
    path: '/features',
  }),
}

export default function Page() {
  return <FeaturesPage locale="zh" />
}
