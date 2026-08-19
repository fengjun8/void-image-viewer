import type { Metadata } from 'next'
import { InstallationPage } from '@/components/pages/installation-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: 'VoidImageViewer 安装教程 - 快速设置 Windows 默认图片查看器',
    description:
      '在 Windows 10/11 上安装 VoidImageViewer（Void Image Viewer）并设为默认图片查看器的详细图文教程：涵盖安装版与便携版的选择与使用、文件关联设置步骤以及常见问题排查，几分钟即可完成配置。',
    path: '/installation',
    keywords: '安装 VoidImageViewer, Void Image Viewer 安装教程, 设置默认图片查看器, 便携版安装, Windows 看图软件安装',
  }),
}

export default function Page() {
  return <InstallationPage locale="zh" />
}
