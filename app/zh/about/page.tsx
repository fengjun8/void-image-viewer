import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/about-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `关于 — ${APP.name}`,
  description: '关于本 Void Image Viewer 独立资源站与下载镜像。与原始作者无关联；所有二进制文件均已对照官方校验值验证。',
  alternates: {
    canonical: '/zh/about',
    languages: { en: '/about', zh: '/zh/about' },
  },
}

export default function Page() {
  return <AboutPage locale="zh" />
}
