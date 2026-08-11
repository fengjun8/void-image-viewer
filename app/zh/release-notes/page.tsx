import type { Metadata } from 'next'
import { ReleaseNotesPage } from '@/components/pages/release-notes-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '更新日志 - VoidImageViewer 版本历史',
    description:
      'VoidImageViewer（Void Image Viewer）完整版本历史与更新日志：每次发布的版本、新功能、问题修复与改进。免费开源 Windows 图片查看器。',
    path: '/release-notes',
  }),
}

export default function Page() {
  return <ReleaseNotesPage locale="zh" />
}
