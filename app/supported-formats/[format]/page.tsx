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
  const title = `Open ${fmt.name} Files Free — ${fmt.name} Viewer`
  const rawDesc = [pick(fmt.tagline, 'en'), pick(fmt.intro, 'en')].join(' ').trim()
  const description =
    rawDesc.length > 155
      ? `${rawDesc.slice(0, 152).replace(/\s+\S*$/, '')}…`
      : rawDesc
  return {
    ...pageMetadata({
      locale: 'en',
      title,
      description,
      path: `/supported-formats/${fmt.slug}`,
      type: 'article',
    }),
  }
}

export default async function Page({ params }: { params: Promise<{ format: string }> }) {
  const { format } = await params
  return <FormatDetailPage locale="en" slug={format} />
}
