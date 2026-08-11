import type { Metadata } from 'next'
import { ReleaseDetailPage } from '@/components/pages/release-detail-page'
import { APP, releases, getRelease, pick } from '@/lib/site-data'
import { pageMetadata } from '@/lib/seo'

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
  return {
    ...pageMetadata({
      locale: 'en',
      title: `v${rel.version} Release Notes - New Features & Fixes`,
      description: `${pick(rel.summary, 'en')} Download VoidImageViewer for Windows - free and open source.`,
      path: `/release/${rel.slug}`,
    }),
  }
}

export default async function Page({ params }: { params: Promise<{ version: string }> }) {
  const { version } = await params
  return <ReleaseDetailPage locale="en" slug={version} />
}
