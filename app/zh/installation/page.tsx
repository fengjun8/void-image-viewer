import type { Metadata } from 'next'
import { InstallationPage } from '@/components/pages/installation-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '安装教程 - 将 Void Image Viewer 设为 Windows 默认图片查看器',
    description:
      '在 Windows 10/11 上安装 VoidImageViewer（Void Image Viewer）并设为默认图片查看器的详细教程，涵盖安装版、便携版及常见问题排查。',
    path: '/installation',
    keywords: '安装 VoidImageViewer, Void Image Viewer 安装教程, 设置默认图片查看器, 便携版安装, Windows 看图软件安装',
  }),
}

export default function Page() {
  return <InstallationPage locale="zh" />
}
