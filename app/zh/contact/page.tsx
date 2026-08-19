import type { Metadata } from 'next'
import { ContactPage } from '@/components/pages/contact-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    locale: 'zh',
    title: '联系我们 - VoidImageViewer 资源站',
    description:
      '如何联系 VoidImageViewer（Void Image Viewer）资源站：镜像下载与文件校验问题的反馈方式，以及如何通过 GitHub 等官方渠道联系上游开源项目、提交 Bug 与功能建议。',
    path: '/contact',
  }),
}

export default function Page() {
  return <ContactPage locale="zh" />
}
