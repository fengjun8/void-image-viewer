import type { MetadataRoute } from 'next'
import { APP, formatList, releases, getRelease } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = APP.baseUrl

  const staticPaths = [
    '',
    '/download',
    '/installation',
    '/features',
    '/supported-formats',
    '/screenshots',
    '/faq',
    '/release-notes',
    '/about',
  ]

  const formatPaths = formatList.map((f) => `/supported-formats/${f.slug}`)
  const releasePaths = releases.map((r) => `/release/${r.slug}`)
  const allPaths = [...staticPaths, ...formatPaths, ...releasePaths]

  const latestDate = releases.find((r) => r.latest)?.date ?? new Date().toISOString().split('T')[0]

  return allPaths.flatMap((path) => {
    const enUrl = `${base}${path}`
    const zhUrl = `${base}/zh${path}`
    const priority = path === '' ? 1 : path.startsWith('/download') ? 0.9 : 0.7
    const rel = path.startsWith('/release/') ? getRelease(path.slice('/release/'.length)) : undefined
    const lastModified = rel?.date ?? latestDate
    return [
      {
        url: enUrl,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority,
        alternates: { languages: { en: enUrl, zh: zhUrl } },
      },
      {
        url: zhUrl,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: priority * 0.9,
        alternates: { languages: { en: enUrl, zh: zhUrl } },
      },
    ]
  })
}
