import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import { Space_Grotesk, Inter, JetBrains_Mono, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-G1Q6BW37DF'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })
const notoSansSC = Noto_Sans_SC({ subsets: ['latin'], variable: '--font-noto-sans-sc' })

export const metadata: Metadata = {
  metadataBase: new URL('https://voidimageviewer.com'),
  title: {
    default: 'Void Image Viewer — Free Open Source Image Viewer for Windows',
    template: '%s | Void Image Viewer',
  },
  applicationName: 'Void Image Viewer',
  description: 'Download the latest Void Image Viewer for Windows. A lightweight open-source image viewer supporting PNG, JPEG, GIF, WebP, AVIF, SVG, HEIC, TIFF and more. Free forever, MIT licensed.',
  keywords: 'Void Image Viewer, image viewer, Windows image viewer, free image viewer, open source image viewer, WebP viewer, AVIF viewer, HEIC viewer',
  authors: [{ name: 'Void Image Viewer' }],
  creator: 'Void Image Viewer',
  publisher: 'Void Image Viewer',
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon-167x167.png', sizes: '167x167', type: 'image/png' },
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/safari-pinned-tab.svg', rel: 'mask-icon', color: '#5bbad5' },
    ],
  },
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Void Image Viewer — Free Open Source Image Viewer for Windows',
    description: 'Lightweight, fast, open-source image viewer for Windows. View PNG, WebP, AVIF, HEIC, SVG and more.',
    url: 'https://voidimageviewer.com',
    siteName: 'Void Image Viewer',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Void Image Viewer — free open-source image viewer for Windows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@VoidimageViewer',
    title: 'Void Image Viewer — Free Open Source Image Viewer for Windows',
    description: 'Lightweight, fast, open-source image viewer for Windows.',
    images: ['/og-image-1200x630.png'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#06008b' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerList = await headers()
  const pathname = headerList.get('x-pathname') ?? ''
  const lang = pathname.startsWith('/zh') ? 'zh' : 'en'
  const isHomePage = pathname === '/' || pathname === '/zh'

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${notoSansSC.variable} bg-[--background]`}
    >
      <head>
        {isHomePage && <link rel="preload" href="/hero-bg.jpg" as="image" />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://voidimageviewer.com/#website',
                  url: 'https://voidimageviewer.com',
                  name: 'Void Image Viewer',
                  description:
                    'Free open-source image viewer for Windows — download page, features, supported formats and documentation.',
                  inLanguage: ['en', 'zh-CN'],
                  publisher: { '@id': 'https://voidimageviewer.com/#org' },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://voidimageviewer.com/supported-formats?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://voidimageviewer.com/#org',
                  name: 'Void Image Viewer',
                  url: 'https://voidimageviewer.com',
                  logo: 'https://voidimageviewer.com/logo-icon.png',
                  sameAs: ['https://github.com/voidtools/voidImageViewer'],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </html>
  )
}
