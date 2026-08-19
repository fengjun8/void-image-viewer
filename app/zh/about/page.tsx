import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/about-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: 'VoidImageViewer 关于我们 - 独立下载镜像与项目介绍',
    description:
      '关于本站：VoidImageViewer（Void Image Viewer）开源项目的独立资源站与下载镜像。所有二进制文件均对照官方校验值验证，附 GitHub 源码与项目背景。',
    path: '/about',
    keywords: 'VoidImageViewer 关于, Void Image Viewer 镜像站, 图片查看器下载站, 开源看图软件',
  }),
}

export default function Page() {
  return <AboutPage locale="zh" />
}
