import type { Metadata } from 'next'
import { ScreenshotsPage } from '@/components/pages/screenshots-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '软件截图',
    description: '查看 Void Image Viewer 简洁无干扰的界面：主查看界面、缩略图、信息面板、动图播放、全屏与主题。',
    path: '/screenshots',
  }),
}

export default function Page() {
  return <ScreenshotsPage locale="zh" />
}
