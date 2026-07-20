import type { Metadata } from 'next'
import { ReleaseDetailPage } from '@/components/pages/release-detail-page'
import { APP, releases, getRelease, pick } from '@/lib/site-data'

export function generateStaticParams() {
  return releases.map((r) => ({ version: r.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>
}): Promise<Metadata> {
  const { version } = await params
  const rel = getRelease(version)
  if (!rel) return { title: APP.name }
  const title = `${APP.name} v${rel.version} — 更新日志`
  const description = pick(rel.summary, 'zh')
  return {
    title,
    description,
    alternates: {
      canonical: `/zh/release/${rel.slug}`,
      languages: { en: `/release/${rel.slug}`, zh: `/zh/release/${rel.slug}` },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ version: string }> }) {
  const { version } = await params
  return <ReleaseDetailPage locale="zh" slug={version} />
}
