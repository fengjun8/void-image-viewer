import type { Metadata } from 'next'
import { FaqPage } from '@/components/pages/faq-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `常见问题 — ${APP.name}`,
  description: '关于在 Windows 上下载、安装、安全性、格式和使用 Void Image Viewer 的常见问题解答。',
  alternates: {
    canonical: '/zh/faq',
    languages: { en: '/faq', zh: '/zh/faq' },
  },
}

export default function Page() {
  return <FaqPage locale="zh" />
}
