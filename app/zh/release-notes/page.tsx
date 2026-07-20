import type { Metadata } from 'next'
import { ReleaseNotesPage } from '@/components/pages/release-notes-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `更新日志 — ${APP.name}`,
  description: 'Void Image Viewer 的完整版本历史与更新日志。查看每个版本的新增功能和修复内容。',
  alternates: {
    canonical: '/zh/release-notes',
    languages: { en: '/release-notes', zh: '/zh/release-notes' },
  },
}

export default function Page() {
  return <ReleaseNotesPage locale="zh" />
}
