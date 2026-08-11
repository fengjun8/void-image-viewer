import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { WhySection } from '@/components/why-section'
import { FormatsSection } from '@/components/formats-section'
import { FeaturesSection } from '@/components/features-section'
import { DownloadSection } from '@/components/download-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'
import { ui } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: 'VoidimageViewer下载 - Void Image Viewer中文汉化版 免费开源 Windows 图片查看器',
    description:
      '下载最新版 Void Image Viewer。轻量、快速的 Windows 开源图片查看器，支持 PNG、JPEG、GIF、WebP、AVIF、SVG、HEIC、TIFF 等格式，完全免费，MIT 授权。',
    path: '/',
    keywords:
      'VoidimageViewer, Void Image Viewer, 图片查看器, Windows 图片查看器, 免费图片查看器, 开源图片查看器, WebP 查看器, AVIF 查看器',
  }),
}

export default function ZhPage() {
  return (
    <main lang="zh">
      <Nav locale="zh" />
      <Hero locale="zh" />
      <WhySection locale="zh" />
      <FormatsSection locale="zh" />
      <FeaturesSection locale="zh" />
      <DownloadSection locale="zh" />
      <FaqSection locale="zh" />
      <SiteFooter locale="zh" />
      <BackToTop label={ui.zh.common.backToTop} />
    </main>
  )
}
