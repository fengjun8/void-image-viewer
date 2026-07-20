import Link from 'next/link'

export interface Crumb {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex items-center flex-wrap gap-2 text-[12.5px] font-mono">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="link-v">
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: isLast ? 'var(--foreground)' : 'var(--muted)' }}>{item.label}</span>
              )}
              {!isLast && <span style={{ color: 'var(--muted)', opacity: 0.5 }}>/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
