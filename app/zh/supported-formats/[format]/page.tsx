import type { Metadata } from 'next'
import { FormatDetailPage } from '@/components/pages/format-detail-page'
import { APP, formatList, getFormat, pick } from '@/lib/site-data'
import { pageMetadata } from '@/lib/seo'

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
  const title = `VoidImageViewer ${fmt.name} 查看器 - Windows 免费打开 ${fmt.name} 文件`
  const rawDesc = [
    pick(fmt.tagline, 'zh'),
    `VoidImageViewer（Void Image Viewer）可在 Windows 上原生打开 ${fmt.name} 文件，免费开源。`,
    pick(fmt.intro, 'zh'),
  ].join(' ').trim()
  const description =
    rawDesc.length > 158
      ? `${rawDesc.slice(0, 155).replace(/\s+\S*$/, '')}…`
      : rawDesc
  return {
    ...pageMetadata({
      locale: 'zh',
      title,
      description,
      path: `/supported-formats/${fmt.slug}`,
      type: 'article',
      keywords: `${fmt.name} 查看器, 打开 ${fmt.name} 文件, ${fmt.name} 转 JPG, ${fmt.name} Windows, ${fmt.ext} 预览`,
    }),
  }
}

export default async function Page({ params }: { params: Promise<{ format: string }> }) {
  const { format } = await params
  return <FormatDetailPage locale="zh" slug={format} />
}
