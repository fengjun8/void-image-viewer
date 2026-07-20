import type { Metadata } from 'next'
import { FormatDetailPage } from '@/components/pages/format-detail-page'
import { APP, formatList, getFormat, pick } from '@/lib/site-data'

export function generateStaticParams() {
  return formatList.map((f) => ({ format: f.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ format: string }>
}): Promise<Metadata> {
  const { format } = await params
  const fmt = getFormat(format)
  if (!fmt) return { title: APP.name }
  const title = `免费打开 ${fmt.name} 文件 — ${fmt.name} 查看器 | ${APP.name}`
  const description = pick(fmt.tagline, 'zh')
  return {
    title,
    description,
    alternates: {
      canonical: `/zh/supported-formats/${fmt.slug}`,
      languages: {
        en: `/supported-formats/${fmt.slug}`,
        zh: `/zh/supported-formats/${fmt.slug}`,
      },
    },
    openGraph: { title, description, type: 'article' },
  }
}

export default async function Page({ params }: { params: Promise<{ format: string }> }) {
  const { format } = await params
  return <FormatDetailPage locale="zh" slug={format} />
}
