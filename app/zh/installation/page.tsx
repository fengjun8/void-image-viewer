import type { Metadata } from 'next'
import { InstallationPage } from '@/components/pages/installation-page'

export const metadata: Metadata = {
  title: '安装教程 — Void Image Viewer Windows 版',
  description: '在 Windows 10/11 上安装 Void Image Viewer 并设为默认图片查看器的详细教程，涵盖安装版、便携版及常见问题排查。',
  keywords: '安装 Void Image Viewer, 设置默认图片查看器, Void Image Viewer 安装教程',
  alternates: {
    canonical: 'https://voidimageviewer.com/zh/installation',
    languages: {
      en: 'https://voidimageviewer.com/installation',
      zh: 'https://voidimageviewer.com/zh/installation',
    },
  },
}

export default function Page() {
  return <InstallationPage locale="zh" />
}
