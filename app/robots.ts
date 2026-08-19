import type { MetadataRoute } from 'next'
import { APP } from '@/lib/site-data'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${APP.baseUrl}/sitemap.xml`,
  }
}
