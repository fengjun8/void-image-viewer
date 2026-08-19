import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { SiteFooter } from '@/components/site-footer'
import { BackToTop } from '@/components/back-to-top'
import { ui } from '@/lib/i18n'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist. Go back to the VoidImageViewer homepage or try the download page.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main id="main-content" lang="en">
      <Nav locale="en" />

      <section className="min-h-[60vh] flex items-center justify-center py-24">
        <div className="container-v flex flex-col items-center text-center">
          <span
            className="font-display font-semibold leading-none text-balance"
            style={{ fontSize: 'clamp(72px, 14vw, 140px)', color: 'var(--violet)' }}
          >
            404
          </span>
          <h1 className="page-h1 text-balance mt-2">Page not found</h1>
          <p className="page-lead text-pretty mx-auto mt-3">
            {"The page you're looking for doesn't exist or has been moved. Try one of the links below instead."}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/download" className="btn-v-primary">
              Download
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
            </Link>
            <Link href="/supported-formats" className="btn-v-ghost">
              Supported formats
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
      <BackToTop label={ui.en.common.backToTop} />
    </main>
  )
}
