import type { Metadata } from 'next'
import { PrivacyPage } from '@/components/pages/privacy-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: 'VoidImageViewer 隐私政策 - 无遥测、无需注册',
    description:
      'VoidImageViewer（Void Image Viewer）资源站隐私政策：详细说明软件与本网站收集的数据、统计 Cookie 的使用，以及浏览器预览工具如何完全在本地处理你的文件。我们不收集任何个人信息。',
    path: '/privacy',
  }),
}

export default function Page() {
  return <PrivacyPage locale="zh" />
}
