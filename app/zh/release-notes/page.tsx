import type { Metadata } from 'next'
import { ReleaseNotesPage } from '@/components/pages/release-notes-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: 'VoidImageViewer更新日志 - 完整版本历史',
    description:
      'VoidImageViewer（Void Image Viewer）完整版本历史与更新日志：每次发布的版本、新功能、问题修复与改进。免费开源 Windows 图片查看器。',
    path: '/release-notes',
    keywords: 'VoidImageViewer 更新日志, Void Image Viewer 版本历史, 看图软件更新, changelog',
  }),
}

export default function Page() {
  return <ReleaseNotesPage locale="zh" />
}
