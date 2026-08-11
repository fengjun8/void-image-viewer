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
      locale: 'zh',
      title: `VoidImageViewer v${rel.version} - 更新日志与版本历史`,
      description: `${pick(rel.summary, 'zh')} 下载 VoidImageViewer Windows 版——免费开源图片查看器。`,
      path: `/release/${rel.slug}`,
      keywords: `VoidImageViewer v${rel.version}, Void Image Viewer ${rel.version}, 更新日志, 版本历史`,
    }),
  }
}

export default async function Page({ params }: { params: Promise<{ version: string }> }) {
  const { version } = await params
  return <ReleaseDetailPage locale="zh" slug={version} />
}
