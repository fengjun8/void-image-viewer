import type { Metadata } from 'next'
import { FormatsIndexPage } from '@/components/pages/formats-index-page'
import { APP } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `支持的图片格式 — ${APP.name}`,
  description:
    'Void Image Viewer 在 Windows 上支持的所有图片格式：WebP、AVIF、HEIC、JPEG XL、SVG、TIFF、RAW 等。免费在线预览任意格式。',
  alternates: {
    canonical: '/zh/supported-formats',
    languages: { en: '/supported-formats', zh: '/zh/supported-formats' },
  },
}

export default function Page() {
  return <FormatsIndexPage locale="zh" />
}
