import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/about-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '关于 - VoidImageViewer 镜像站与项目介绍',
    description:
      '关于本站：VoidImageViewer（Void Image Viewer）开源项目的独立资源站与下载镜像。所有二进制文件均对照官方校验值验证，附 GitHub 源码与项目背景。',
    path: '/about',
  }),
}

export default function Page() {
  return <AboutPage locale="zh" />
}
