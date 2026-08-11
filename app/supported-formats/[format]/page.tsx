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
  const title = `VoidImageViewer ${fmt.name} Viewer - Open ${fmt.name} Files on Windows`
  const rawDesc = [
    pick(fmt.tagline, 'en'),
    `VoidImageViewer (Void Image Viewer) opens ${fmt.name} files natively on Windows - free and open source.`,
    pick(fmt.intro, 'en'),
  ].join(' ').trim()
  const description =
    rawDesc.length > 158
      ? `${rawDesc.slice(0, 155).replace(/\s+\S*$/, '')}…`
      : rawDesc
  return {
    ...pageMetadata({
      locale: 'en',
      title,
      description,
      path: `/supported-formats/${fmt.slug}`,
      type: 'article',
      keywords: `${fmt.name} viewer, open ${fmt.name} files, ${fmt.name} to JPG, ${fmt.name} Windows, ${fmt.ext} viewer, free ${fmt.name} preview`,
    }),
  }
}

export default async function Page({ params }: { params: Promise<{ format: string }> }) {
  const { format } = await params
  return <FormatDetailPage locale="en" slug={format} />
}
