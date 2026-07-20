import type { ReactNode } from 'react'
import { Breadcrumb, type Crumb } from '@/components/breadcrumb'
import { APP } from '@/lib/site-data'

interface PageHeaderProps {
  crumbs: Crumb[]
  eyebrow?: string
  title: string
  lead?: string
  children?: ReactNode
}

export function PageHeader({ crumbs, eyebrow, title, lead, children }: PageHeaderProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${APP.baseUrl}${c.href}` } : {}),
    })),
  }

  return (
    <header className="page-top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="container-v">
        <Breadcrumb items={crumbs} />
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-h1 text-balance">{title}</h1>
        {lead && <p className="page-lead text-pretty">{lead}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </header>
  )
}
