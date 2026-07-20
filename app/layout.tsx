import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Space_Grotesk, Inter, JetBrains_Mono, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-G1Q6BW37DF'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })
const notoSansSC = Noto_Sans_SC({ subsets: ['latin'], variable: '--font-noto-sans-sc', weight: ['400', '500', '700'] })

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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://voidimageviewer.com',
    languages: {
      'en-US': 'https://voidimageviewer.com',
      'zh-CN': 'https://voidimageviewer.com/zh',
      'x-default': 'https://voidimageviewer.com',
    },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${notoSansSC.variable} bg-[--background]`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'SoftwareApplication',
                  '@id': 'https://voidimageviewer.com/#software',
                  name: 'Void Image Viewer',
                  applicationCategory: 'MultimediaApplication',
                  applicationSubCategory: 'Image Viewer',
                  operatingSystem: 'Windows 10, Windows 11',
                  softwareVersion: '1.0.0.15',
                  datePublished: '2026-01-12',
                  downloadUrl: 'https://voidimageviewer.com/download',
                  installUrl: 'https://voidimageviewer.com/download',
                  fileSize: '268KB',
                  softwareRequirements: 'Windows 10 or Windows 11 (64-bit)',
                  license: 'https://opensource.org/licenses/MIT',
                  isAccessibleForFree: true,
                  url: 'https://voidimageviewer.com',
                  image: 'https://voidimageviewer.com/og-image.png',
                  screenshot: 'https://voidimageviewer.com/og-image.png',
                  description:
                    'A lightweight, open-source image viewer for Windows supporting PNG, JPEG, WebP, AVIF, HEIC, SVG, GIF, TIFF and more.',
                  featureList: [
                    'Opens PNG, JPEG, GIF, BMP, TIFF, WebP, AVIF, HEIC, SVG, ICO and JPEG XL',
                    'Animated GIF and WebP playback',
                    'Lightweight and fast with no ads or telemetry',
                    'Portable no-install version available',
                    'Free and open source (MIT licensed)',
                  ],
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                  },
                  publisher: { '@id': 'https://voidimageviewer.com/#org' },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://voidimageviewer.com/#website',
                  url: 'https://voidimageviewer.com',
                  name: 'Void Image Viewer',
                  description:
                    'Free open-source image viewer for Windows — download page, features, supported formats and documentation.',
                  inLanguage: ['en', 'zh-CN'],
                  publisher: { '@id': 'https://voidimageviewer.com/#org' },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://voidimageviewer.com/#org',
                  name: 'Void Image Viewer',
                  url: 'https://voidimageviewer.com',
                  logo: 'https://voidimageviewer.com/og-image.png',
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
