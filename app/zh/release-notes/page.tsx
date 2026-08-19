import type { Metadata } from 'next'
import { ReleaseNotesPage } from '@/components/pages/release-notes-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: 'VoidImageViewer 更新日志 - 完整版本历史',
    description:
      'VoidImageViewer（Void Image Viewer）完整版本历史与更新日志：查看每一次发布的版本号、新增功能、性能改进、Bug 修复与安全更新详情，了解这款免费开源 Windows 图片查看器的持续演进，并找到适合你的稳定版本下载。',
    path: '/release-notes',
    keywords: 'VoidImageViewer 更新日志, Void Image Viewer 版本历史, 看图软件更新, changelog',
  }),
}

export default function Page() {
  return <ReleaseNotesPage locale="zh" />
}
