import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/about-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '关于',
    description: '关于本 Void Image Viewer 独立资源站与下载镜像。与原始作者无关联；所有二进制文件均已对照官方校验值验证。',
    path: '/about',
  }),
}

export default function Page() {
  return <AboutPage locale="zh" />
}
