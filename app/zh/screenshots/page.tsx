import type { Metadata } from 'next'
import { ScreenshotsPage } from '@/components/pages/screenshots-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: 'VoidImageViewer 软件截图 - 简洁无干扰的界面预览',
    description:
      '查看 VoidImageViewer（Void Image Viewer）简洁无干扰的界面：主查看器、文件夹缩略图、格式信息面板、GIF/WebP 动图播放、全屏模式与深色/浅色主题。免费开源。',
    path: '/screenshots',
    keywords: 'VoidImageViewer 截图, Void Image Viewer 截图, 图片查看器界面, Windows 看图软件截图',
  }),
}

export default function Page() {
  return <ScreenshotsPage locale="zh" />
}
