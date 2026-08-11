import type { Metadata } from 'next'
import { ReleaseNotesPage } from '@/components/pages/release-notes-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '更新日志',
    description: 'Void Image Viewer 的完整版本历史与更新日志。查看每个版本的新增功能和修复内容。',
    path: '/release-notes',
  }),
}

export default function Page() {
  return <ReleaseNotesPage locale="zh" />
}
