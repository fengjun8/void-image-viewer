import type { Metadata } from 'next'
import { ScreenshotsPage } from '@/components/pages/screenshots-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '软件截图 - VoidImageViewer 界面一览',
    description:
      '查看 VoidImageViewer（Void Image Viewer）简洁无干扰的界面：主查看器、文件夹缩略图、格式信息面板、GIF/WebP 动图播放、全屏模式与深色/浅色主题。免费开源。',
    path: '/screenshots',
  }),
}

export default function Page() {
  return <ScreenshotsPage locale="zh" />
}
