import type { Metadata } from 'next'
import { FeaturesPage } from '@/components/pages/features-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `功能特性 — ${APP.name}`,
  description:
    '快速原生解码，GIF/WebP/AVIF 动图播放，支持 RAW 和 HEIC，即时文件夹缩略图，无干扰查看界面。免费开源。',
  alternates: {
    canonical: '/zh/features',
    languages: { en: '/features', zh: '/zh/features' },
  },
}

export default function Page() {
  return <FeaturesPage locale="zh" />
}
