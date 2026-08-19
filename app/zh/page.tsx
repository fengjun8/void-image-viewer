import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { WhySection } from '@/components/why-section'
import { FormatsSection } from '@/components/formats-section'
import { FeaturesSection } from '@/components/features-section'
import { DownloadSection } from '@/components/download-section'
import { FaqSection } from '@/components/faq-section'
import { RelatedSitesSection } from '@/components/related-sites-section'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'
import { JsonLd } from '@/components/json-ld'
import { ui } from '@/lib/i18n'
import { APP, latestRelease } from '@/lib/site-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: 'VoidImageViewer 下载 - Void Image Viewer 中文汉化版 免费开源 Windows 图片查看器',
    description:
      '下载最新版 Void Image Viewer。轻量、快速的 Windows 开源图片查看器，支持 PNG、JPEG、GIF、WebP、AVIF、SVG、HEIC、TIFF 等格式，完全免费，MIT 授权。',
    path: '/',
    keywords:
      'VoidImageViewer, Void Image Viewer, 图片查看器下载, Windows 图片查看器, 免费看图软件, 开源图片查看器',
  }),
  // 首页 title 已含品牌名，用 absolute 避免模板重复追加后缀
  title: {
    absolute: 'VoidImageViewer 下载 - Void Image Viewer 中文汉化版 免费开源 Windows 图片查看器',
  },
}

export default function ZhPage() {
  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: `${APP.baseUrl}/zh`,
    inLanguage: 'zh-CN',
    isPartOf: { '@id': `${APP.baseUrl}/#website` },
  }
  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: APP.name,
    operatingSystem: APP.os,
    applicationCategory: 'MultimediaApplication',
    softwareVersion: latestRelease.version,
    fileSize: `${latestRelease.sizeMb} MB`,
    downloadUrl: `${APP.baseUrl}/zh/download`,
    url: `${APP.baseUrl}/zh`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    license: 'https://opensource.org/licenses/MIT',
    isPartOf: { '@id': `${APP.baseUrl}/#website` },
  }
  return (
    <main id="main-content" lang="zh">
      <JsonLd data={[webPageLd, softwareLd]} />
      <Nav locale="zh" />
      <Hero locale="zh" />
      <WhySection locale="zh" />
      <FormatsSection locale="zh" />
      <FeaturesSection locale="zh" />
      <DownloadSection locale="zh" />
      <FaqSection locale="zh" />
      <RelatedSitesSection locale="zh" />
      <SiteFooter locale="zh" />
      <BackToTop label={ui.zh.common.backToTop} />
    </main>
  )
}
