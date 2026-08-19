import type { Locale } from '@/lib/i18n'

/* ------------------------------------------------------------------ *
 * SINGLE SOURCE OF TRUTH
 * One dataset, many views. /download, /release-notes, /release/[v]
 * and the format pages all render from the objects below.
 * ------------------------------------------------------------------ */

export const APP = {
  name: 'Void Image Viewer',
  domain: 'voidimageviewer.com',
  baseUrl: 'https://voidimageviewer.com',
  githubUrl: 'https://github.com/voidtools/voidImageViewer',
  virusTotalUrl: 'https://www.virustotal.com/gui/file/7f3a9c2e21b',
  forumUrl: 'https://www.voidtools.com/forum/viewtopic.php?t=5623',
  contactEmail: 'service@voidimageviewer.com',
  license: 'MIT',
  os: 'Windows 10, Windows 11 (64-bit)',
}

export const RELEASE_TAG = '1.0.0.15'
const GH_DL = `https://github.com/voidtools/voidImageViewer/releases/download/${RELEASE_TAG}`
const GH_RELEASES = 'https://github.com/voidtools/voidImageViewer/releases'

export interface DownloadAsset {
  id: string
  arch: 'x64' | 'x86' | 'ARM64' | 'ARM'
  kind: 'installer' | 'portable'
  filename: string
  size: string
  url: string
  recommended?: boolean
}

/* The six official 1.0.0.15 release assets from voidtools/voidImageViewer */
export const downloadAssets: DownloadAsset[] = [
  {
    id: 'x64-exe',
    arch: 'x64',
    kind: 'installer',
    filename: 'voidImageViewer-1.0.0.15.x64.en-US-Setup.exe',
    size: '267.9 KB',
    url: `${GH_DL}/voidImageViewer-1.0.0.15.x64.en-US-Setup.exe`,
    recommended: true,
  },
  {
    id: 'x64-zip',
    arch: 'x64',
    kind: 'portable',
    filename: 'voidImageViewer-1.0.0.15.x64.en-US.zip',
    size: '186.3 KB',
    url: `${GH_DL}/voidImageViewer-1.0.0.15.x64.en-US.zip`,
  },
  {
    id: 'x86-exe',
    arch: 'x86',
    kind: 'installer',
    filename: 'voidImageViewer-1.0.0.15.x86.en-US-Setup.exe',
    size: '252.3 KB',
    url: `${GH_DL}/voidImageViewer-1.0.0.15.x86.en-US-Setup.exe`,
  },
  {
    id: 'x86-zip',
    arch: 'x86',
    kind: 'portable',
    filename: 'voidImageViewer-1.0.0.15.x86.en-US.zip',
    size: '165.5 KB',
    url: `${GH_DL}/voidImageViewer-1.0.0.15.x86.en-US.zip`,
  },
  {
    id: 'arm64-zip',
    arch: 'ARM64',
    kind: 'portable',
    filename: 'voidImageViewer-1.0.0.15.ARM64.en-US.zip',
    size: '170.9 KB',
    url: `${GH_DL}/voidImageViewer-1.0.0.15.ARM64.en-US.zip`,
  },
  {
    id: 'arm-zip',
    arch: 'ARM',
    kind: 'portable',
    filename: 'voidImageViewer-1.0.0.15.ARM.en-US.zip',
    size: '178.0 KB',
    url: `${GH_DL}/voidImageViewer-1.0.0.15.ARM.en-US.zip`,
  },
]

/* Community Simplified-Chinese localized build (shown on the zh download page).
   Hosted locally under /public/downloads so Chinese users can download directly
   without needing to reach GitHub. */
export const cnDownload = {
  arch: 'x64' as const,
  kind: 'installer' as const,
  filename: 'voidImageViewer-1.0.0.15.x64.zh-CN-Setup.exe',
  size: '≈ 270 KB',
  url: '/downloads/voidImageViewer-1.0.0.15.x64.zh-CN-Setup.exe',
}

export interface ReleaseChange {
  type: 'new' | 'fixed' | 'improved' | 'breaking'
  text: { en: string; zh: string }
}

export interface Release {
  version: string // "2.4.1"
  slug: string // "2-4-1"
  date: string // ISO
  sizeMb: string
  sha256: string
  sha256Full: string
  exeUrl: string
  zipUrl: string
  latest?: boolean
  summary: { en: string; zh: string }
  changes: ReleaseChange[]
}

export const releases: Release[] = [
  {
    version: '1.0.0.15',
    slug: '1-0-0-15',
    date: '2026-01-12',
    sizeMb: '1.1',
    sha256: '—',
    sha256Full: '—',
    exeUrl: `${GH_DL}/voidImageViewer-1.0.0.15.x64.en-US-Setup.exe`,
    zipUrl: `${GH_DL}/voidImageViewer-1.0.0.15.x64.en-US.zip`,
    latest: true,
    summary: {
      en: 'Fixes scrolling of large images and improves numpad-key position offset.',
      zh: '修复大图滚动问题，改进使用小键盘按键时的位置偏移。',
    },
    changes: [
      { type: 'fixed', text: { en: 'Fixed an issue with scrolling large images.', zh: '修复滚动大尺寸图片时的问题。' } },
      { type: 'improved', text: { en: 'Improved position offset when using numpad keys.', zh: '改进使用小键盘（numpad）按键时的位置偏移。' } },
    ],
  },
  {
    version: '1.0.0.14',
    slug: '1-0-0-14',
    date: '2025-08-10',
    sizeMb: '1.1',
    sha256: '—',
    sha256Full: '—',
    exeUrl: `${GH_RELEASES}/tag/1.0.0.14`,
    zipUrl: `${GH_RELEASES}/tag/1.0.0.14`,
    summary: {
      en: 'Several WebP and rendering fixes, plus new title bar format and orientation settings.',
      zh: '多项 WebP 与渲染修复，并新增标题栏格式和方向设置。',
    },
    changes: [
      { type: 'fixed', text: { en: 'Fixed an issue with WebP using the wrong background color.', zh: '修复 WebP 使用了错误背景色的问题。' } },
      { type: 'fixed', text: { en: 'Fixed an issue with tracking the center of the image when resizing.', zh: '修复调整大小时无法正确跟踪图片中心的问题。' } },
      { type: 'fixed', text: { en: 'Fixed an issue with rendering images larger than 65536x65536.', zh: '修复渲染大于 65536x65536 图片时的问题。' } },
      { type: 'fixed', text: { en: 'Fixed the screen saver not being prevented in slide show mode or when there is an animation.', zh: '修复在幻灯片模式或存在动画时未能阻止屏幕保护程序的问题。' } },
      { type: 'improved', text: { en: 'Improved rendering performance.', zh: '提升渲染性能。' } },
      { type: 'improved', text: { en: 'Improved zooming of small images when going fullscreen.', zh: '改进进入全屏时小图片的缩放效果。' } },
      { type: 'improved', text: { en: 'The move window action will now scroll if zoomed.', zh: '"移动窗口"操作在已缩放时现在会进行滚动。' } },
      { type: 'new', text: { en: 'Re-enabled WEBP_MSC_SSE41.', zh: '重新启用 WEBP_MSC_SSE41。' } },
      { type: 'new', text: { en: 'Added title_bar_format ini setting.', zh: '新增 title_bar_format ini 设置项。' } },
      { type: 'new', text: { en: 'Added System.Photo.Orientation support.', zh: '新增 System.Photo.Orientation 支持。' } },
      { type: 'new', text: { en: 'Added command line switch support. Escape with "" or include a . in your switch.', zh: '新增命令行开关支持。可用 "" 转义，或在开关中包含一个点号（.）。' } },
    ],
  },
  {
    version: '1.0.0.13',
    slug: '1-0-0-13',
    date: '2025-08-10',
    sizeMb: '1.1',
    sha256: '—',
    sha256Full: '—',
    exeUrl: `${GH_RELEASES}/tag/1.0.0.13`,
    zipUrl: `${GH_RELEASES}/tag/1.0.0.13`,
    summary: {
      en: 'Fixes image centering and toolbar navigation, adds move-window and auto-size options.',
      zh: '修复图片居中与工具栏导航，新增移动窗口和自动调整窗口大小选项。',
    },
    changes: [
      { type: 'fixed', text: { en: 'Fixed an issue with losing the image center on resize.', zh: '修复调整大小时丢失图片中心的问题。' } },
      { type: 'fixed', text: { en: 'Fixed back/forward mouse buttons not working from toolbars.', zh: '修复鼠标前进/后退键在工具栏中无法使用的问题。' } },
      { type: 'fixed', text: { en: 'Fixed an issue with loading the wrong next image when it was preloaded and changed externally.', zh: '修复当下一张图片已预加载又被外部更改时加载错误图片的问题。' } },
      { type: 'improved', text: { en: 'Improved rendering performance.', zh: '提升渲染性能。' } },
      { type: 'new', text: { en: 'Added left click action: move window.', zh: '新增左键操作：移动窗口。' } },
      { type: 'new', text: { en: 'Added auto size window GUI option.', zh: '新增自动调整窗口大小的界面选项。' } },
    ],
  },
  {
    version: '1.0.0.12',
    slug: '1-0-0-12',
    date: '2025-07-25',
    sizeMb: '1.1',
    sha256: '—',
    sha256Full: '—',
    exeUrl: `${GH_RELEASES}/tag/1.0.0.12`,
    zipUrl: `${GH_RELEASES}/tag/1.0.0.12`,
    summary: {
      en: 'Fixes GDI leaks and next-image loading after sorting, adds natural sort.',
      zh: '修复 GDI 泄漏及排序后加载下一张图片的问题，新增自然排序。',
    },
    changes: [
      { type: 'fixed', text: { en: 'Fixed a GDI leak when freeing mipmaps.', zh: '修复释放 mipmap 时的 GDI 泄漏。' } },
      { type: 'fixed', text: { en: 'Fixed a GDI leak when refreshing.', zh: '修复刷新时的 GDI 泄漏。' } },
      { type: 'fixed', text: { en: 'Fixed an issue with loading the wrong next image after changing the sort.', zh: '修复更改排序后加载错误下一张图片的问题。' } },
      { type: 'new', text: { en: 'Added natural sort.', zh: '新增自然排序（natural sort）。' } },
    ],
  },
  {
    version: '1.0.0.11',
    slug: '1-0-0-11',
    date: '2025-07-20',
    sizeMb: '1.1',
    sha256: '—',
    sha256Full: '—',
    exeUrl: `${GH_RELEASES}/tag/1.0.0.11`,
    zipUrl: `${GH_RELEASES}/tag/1.0.0.11`,
    summary: {
      en: 'Multiple fixes for associations, rotation and view state, plus preloading improvements.',
      zh: '修复文件关联、旋转和视图状态等多项问题，并改进预加载。',
    },
    changes: [
      { type: 'fixed', text: { en: 'Fixed an issue with using the wrong association registry key.', zh: '修复使用了错误的关联注册表键的问题。' } },
      { type: 'fixed', text: { en: 'Fixed a crash when interrupting the loading of a multi-frame image.', zh: '修复中断加载多帧图片时的崩溃问题。' } },
      { type: 'fixed', text: { en: 'Fixed an issue with displaying images after rotating.', zh: '修复旋转后显示图片的问题。' } },
      { type: 'fixed', text: { en: 'Fixed an issue with remembering some view settings.', zh: '修复部分视图设置无法记忆的问题。' } },
      { type: 'fixed', text: { en: 'Fixed an issue with losing the view after toggling fullscreen.', zh: '修复切换全屏后丢失视图的问题。' } },
      { type: 'improved', text: { en: 'Improved preloading of the next/previous image.', zh: '改进下一张/上一张图片的预加载。' } },
      { type: 'new', text: { en: 'Inverted increase/decrease slideshow rate.', zh: '反转幻灯片速率的加/减方向。' } },
      { type: 'new', text: { en: 'Added cache last image.', zh: '新增缓存最后一张图片。' } },
    ],
  },
  {
    version: '1.0.0.10',
    slug: '1-0-0-10',
    date: '2025-06-17',
    sizeMb: '1.1',
    sha256: '—',
    sha256Full: '—',
    exeUrl: `${GH_RELEASES}/tag/1.0.0.10`,
    zipUrl: `${GH_RELEASES}/tag/1.0.0.10`,
    summary: {
      en: 'Reduces WebP memory usage.',
      zh: '降低 WebP 内存占用。',
    },
    changes: [
      { type: 'improved', text: { en: 'Improved WebP memory usage.', zh: '改进 WebP 内存占用。' } },
    ],
  },
  {
    version: '1.0.0.9',
    slug: '1-0-0-9',
    date: '2025-05-22',
    sizeMb: '1.1',
    sha256: '—',
    sha256Full: '—',
    exeUrl: `${GH_RELEASES}/tag/1.0.0.9`,
    zipUrl: `${GH_RELEASES}/tag/1.0.0.9`,
    summary: {
      en: 'Adds WebP and animated WebP support, mipmaps, preloading and copy options.',
      zh: '新增 WebP 与 WebP 动图支持、mipmap、预加载以及复制选项。',
    },
    changes: [
      { type: 'new', text: { en: 'Added WebP support.', zh: '新增 WebP 支持。' } },
      { type: 'new', text: { en: 'Added animated WebP support.', zh: '新增 WebP 动图支持。' } },
      { type: 'new', text: { en: 'Added mipmap support for faster resizing.', zh: '新增 mipmap 支持，加快缩放速度。' } },
      { type: 'new', text: { en: 'Added preload option.', zh: '新增预加载选项。' } },
      { type: 'new', text: { en: 'Added maximized options.', zh: '新增最大化相关选项。' } },
      { type: 'new', text: { en: 'Added option to copy image.', zh: '新增复制图片选项。' } },
      { type: 'new', text: { en: 'Added option to copy filename.', zh: '新增复制文件名选项。' } },
      { type: 'improved', text: { en: 'Improved animation timings.', zh: '改进动画时间控制。' } },
      { type: 'fixed', text: { en: 'Fixed an issue with associations.', zh: '修复文件关联相关的问题。' } },
    ],
  },
]

export const latestRelease = releases.find((r) => r.latest) ?? releases[0]

export function getRelease(slug: string): Release | undefined {
  return releases.find((r) => r.slug === slug)
}

/* ------------------------------------------------------------------ *
 * FORMATS
 * ------------------------------------------------------------------ */

export interface FormatSupport {
  chrome: boolean
  safari: boolean
  firefox: boolean
  windowsExplorer: boolean
}

export interface FormatFaqItem {
  q: { en: string; zh: string }
  a: { en: string; zh: string }
}

export interface FormatInfo {
  slug: string
  name: string // "AVIF"
  ext: string // ".avif"
  accept: string // input accept / mime hint
  priority: 'high' | 'medium' | 'low'
  supportedSince?: string
  tagline: { en: string; zh: string }
  intro: { en: string; zh: string }
  support: FormatSupport
  related: string[]
  faq: FormatFaqItem[]
}

export const formatList: FormatInfo[] = [
  {
    slug: 'webp',
    name: 'WebP',
    ext: '.webp',
    accept: 'image/webp',
    priority: 'high',
    supportedSince: '1.0.0.9',
    tagline: {
      en: 'Open WebP images online, free — no upload, no install.',
      zh: '在线免费打开 WebP 图片——无需上传，无需安装。',
    },
    intro: {
      en: 'WebP is a modern image format developed by Google that provides superior lossless and lossy compression for images on the web. A WebP file is typically 25–35% smaller than a comparable JPEG or PNG at equivalent visual quality, and it supports transparency and animation in a single format.',
      zh: 'WebP 是 Google 开发的现代图片格式，为网页图片提供更优的有损和无损压缩。在同等视觉质量下，WebP 文件通常比 JPEG 或 PNG 小 25–35%，并且在单一格式中同时支持透明通道和动画。',
    },
    support: { chrome: true, safari: true, firefox: true, windowsExplorer: false },
    related: ['avif', 'png', 'jpeg'],
    faq: [
      {
        q: { en: 'Is WebP smaller than JPEG?', zh: 'WebP 比 JPEG 体积更小吗？' },
        a: { en: 'Yes. At the same visual quality WebP files are usually 25–35% smaller than JPEG, which is why it is widely used on the web.', zh: '是的。在相同视觉质量下，WebP 通常比 JPEG 小 25–35%，因此被网页广泛采用。' },
      },
      {
        q: { en: 'Why can\u2019t Windows open WebP by default?', zh: '为什么 Windows 默认打不开 WebP？' },
        a: { en: 'Windows Explorer preview and Photos have limited WebP support. A dedicated viewer like Void opens WebP natively without codec packs.', zh: 'Windows 资源管理器和照片应用对 WebP 支持有限。像 Void 这样的专用查看器无需编解码包即可原生打开 WebP。' },
      },
      {
        q: { en: 'Can I convert WebP to JPG?', zh: '可以把 WebP 转成 JPG 吗？' },
        a: { en: 'The desktop app can export WebP to JPG, PNG and other formats. The online preview here only displays the image locally.', zh: '桌面版可将 WebP 导出为 JPG、PNG 等格式。此处的在线预览仅在本地显示图片。' },
      },
    ],
  },
  {
    slug: 'avif',
    name: 'AVIF',
    ext: '.avif',
    accept: 'image/avif',
    priority: 'high',
    tagline: {
      en: 'Open AVIF images instantly in your browser, free.',
      zh: '在浏览器中即时打开 AVIF 图片，完全免费。',
    },
    intro: {
      en: 'AVIF (AV1 Image File Format) is a next-generation image format based on the AV1 video codec. It delivers dramatically smaller files than JPEG and WebP at the same quality, with support for HDR, wide color gamut, transparency and animation. It is quickly becoming the format of choice for high-efficiency web images.',
      zh: 'AVIF（AV1 图像文件格式）是基于 AV1 视频编解码器的下一代图片格式。在相同质量下，它比 JPEG 和 WebP 的体积小得多，并支持 HDR、广色域、透明通道和动画，正迅速成为高效网页图片的首选格式。',
    },
    support: { chrome: true, safari: true, firefox: true, windowsExplorer: false },
    related: ['webp', 'heic', 'jxl'],
    faq: [
      {
        q: { en: 'Is AVIF smaller than WebP?', zh: 'AVIF 比 WebP 体积更小吗？' },
        a: { en: 'Generally yes — AVIF often produces 20–50% smaller files than WebP at similar quality, especially for photographic content.', zh: '通常是的——在相似质量下，AVIF 往往比 WebP 小 20–50%，尤其是照片类内容。' },
      },
      {
        q: { en: 'Are phone photos AVIF?', zh: '手机拍的照片是 AVIF 吗？' },
        a: { en: 'Most phones save photos as HEIC or JPEG. AVIF is more common for images delivered by websites and apps.', zh: '大多数手机将照片保存为 HEIC 或 JPEG。AVIF 更常见于网站和应用分发的图片。' },
      },
      {
        q: { en: 'Can I convert AVIF to JPG?', zh: '可以把 AVIF 转成 JPG 吗？' },
        a: { en: 'Yes, the Void desktop app exports AVIF to JPG or PNG. This online tool only previews the file locally.', zh: '可以，Void 桌面版可将 AVIF 导出为 JPG 或 PNG。此在线工具仅在本地预览文件。' },
      },
    ],
  },
  {
    slug: 'heic',
    name: 'HEIC',
    ext: '.heic',
    accept: 'image/heic,image/heif',
    priority: 'high',
    tagline: {
      en: 'Open HEIC / HEIF photos from your iPhone, free.',
      zh: '免费打开 iPhone 拍摄的 HEIC / HEIF 照片。',
    },
    intro: {
      en: 'HEIC (High Efficiency Image Container) is the default photo format on modern iPhones and iPads. Built on the HEIF standard, it stores high-quality images at roughly half the size of JPEG. Because Windows lacks built-in HEIC support, a dedicated viewer is the easiest way to open these files on a PC.',
      zh: 'HEIC（高效图像容器）是现代 iPhone 和 iPad 的默认照片格式。它基于 HEIF 标准，以约为 JPEG 一半的体积存储高质量图片。由于 Windows 缺乏内置 HEIC 支持，专用查看器是在 PC 上打开这些文件最简单的方式。',
    },
    support: { chrome: false, safari: true, firefox: false, windowsExplorer: false },
    related: ['avif', 'jpeg', 'raw'],
    faq: [
      {
        q: { en: 'Why won\u2019t my HEIC photos open on Windows?', zh: '为什么 HEIC 照片在 Windows 上打不开？' },
        a: { en: 'Windows requires a paid codec extension to open HEIC in Photos. Void decodes HEIC natively, so no extension is needed.', zh: 'Windows 需要付费编解码扩展才能在照片应用中打开 HEIC。Void 原生解码 HEIC，无需任何扩展。' },
      },
      {
        q: { en: 'Can I convert HEIC to JPG?', zh: '可以把 HEIC 转成 JPG 吗？' },
        a: { en: 'Yes. The desktop app converts HEIC to JPG or PNG in one click, including batch conversion.', zh: '可以。桌面版一键将 HEIC 转为 JPG 或 PNG，并支持批量转换。' },
      },
      {
        q: { en: 'Does it keep photo metadata?', zh: '会保留照片元数据吗？' },
        a: { en: 'Yes, EXIF data such as date, camera model and location is preserved and viewable.', zh: '会，日期、相机型号、位置等 EXIF 数据均会保留并可查看。' },
      },
    ],
  },
  {
    slug: 'svg',
    name: 'SVG',
    ext: '.svg',
    accept: 'image/svg+xml',
    priority: 'medium',
    tagline: {
      en: 'Preview scalable SVG vector graphics online, free.',
      zh: '在线免费预览可缩放的 SVG 矢量图形。',
    },
    intro: {
      en: 'SVG (Scalable Vector Graphics) is an XML-based vector image format. Unlike raster formats, SVG stays perfectly sharp at any zoom level, making it ideal for logos, icons and illustrations. Because SVG is text-based it can be small, styled with CSS and animated.',
      zh: 'SVG（可缩放矢量图形）是基于 XML 的矢量图片格式。与位图格式不同，SVG 在任意缩放级别下都保持清晰，非常适合徽标、图标和插画。由于 SVG 基于文本，它体积小、可用 CSS 设置样式并支持动画。',
    },
    support: { chrome: true, safari: true, firefox: true, windowsExplorer: true },
    related: ['png', 'webp', 'ico'],
    faq: [
      {
        q: { en: 'Does zooming an SVG lose quality?', zh: '放大 SVG 会损失质量吗？' },
        a: { en: 'No. SVG is vector-based, so it renders crisply at any size or zoom level.', zh: '不会。SVG 基于矢量，在任何尺寸或缩放级别下都清晰渲染。' },
      },
      {
        q: { en: 'Can I export SVG to PNG?', zh: '可以把 SVG 导出为 PNG 吗？' },
        a: { en: 'Yes, the desktop app rasterizes SVG to PNG at any resolution you choose.', zh: '可以，桌面版可按你选择的任意分辨率将 SVG 栅格化为 PNG。' },
      },
    ],
  },
  {
    slug: 'tiff',
    name: 'TIFF',
    ext: '.tiff',
    accept: 'image/tiff',
    priority: 'medium',
    tagline: {
      en: 'Open large multi-page TIFF images, free.',
      zh: '免费打开大尺寸、多页 TIFF 图片。',
    },
    intro: {
      en: 'TIFF (Tagged Image File Format) is a flexible, high-quality raster format widely used in photography, publishing, scanning and archival work. It supports lossless compression, multiple pages and high bit depths — but files can be very large, which is where hardware-accelerated decoding matters.',
      zh: 'TIFF（标签图像文件格式）是一种灵活的高质量位图格式，广泛用于摄影、出版、扫描和归档。它支持无损压缩、多页和高位深——但文件可能非常大，这正是硬件加速解码的价值所在。',
    },
    support: { chrome: false, safari: true, firefox: false, windowsExplorer: true },
    related: ['raw', 'png', 'heic'],
    faq: [
      {
        q: { en: 'Can it open multi-page TIFF files?', zh: '能打开多页 TIFF 文件吗？' },
        a: { en: 'Yes, Void lets you page through every image inside a multi-page TIFF.', zh: '可以，Void 支持在多页 TIFF 中逐页浏览每一张图片。' },
      },
      {
        q: { en: 'Why is my TIFF so large?', zh: '为什么我的 TIFF 文件这么大？' },
        a: { en: 'TIFF is often uncompressed or losslessly compressed to preserve full quality, so files are much larger than JPEG.', zh: 'TIFF 通常不压缩或采用无损压缩以保留完整质量，因此比 JPEG 大得多。' },
      },
    ],
  },
  {
    slug: 'jxl',
    name: 'JPEG XL',
    ext: '.jxl',
    accept: 'image/jxl',
    priority: 'medium',
    tagline: {
      en: 'Preview JPEG XL (JXL) images online, free.',
      zh: '在线免费预览 JPEG XL（JXL）图片。',
    },
    intro: {
      en: 'JPEG XL (JXL) is a modern royalty-free image format designed to replace legacy JPEG. It offers excellent compression, lossless JPEG transcoding, progressive decoding and support for wide color gamut and HDR. Browser support is still limited, so a native desktop viewer is the reliable way to open JXL today.',
      zh: 'JPEG XL（JXL）是一种现代、免版税的图片格式，旨在取代传统 JPEG。它具备出色的压缩率、无损 JPEG 转码、渐进式解码，并支持广色域和 HDR。目前浏览器支持仍有限，因此原生桌面查看器是当下打开 JXL 最可靠的方式。',
    },
    support: { chrome: false, safari: false, firefox: false, windowsExplorer: false },
    related: ['avif', 'webp', 'jpeg'],
    faq: [
      {
        q: { en: 'Do browsers support JPEG XL?', zh: '浏览器支持 JPEG XL 吗？' },
        a: { en: 'Support is still experimental in most browsers. A native viewer like Void opens JXL without relying on browser support.', zh: '大多数浏览器的支持仍处于实验阶段。像 Void 这样的原生查看器无需依赖浏览器即可打开 JXL。' },
      },
      {
        q: { en: 'Is JXL better than JPEG?', zh: 'JXL 比 JPEG 更好吗？' },
        a: { en: 'Yes — JXL offers better compression and can losslessly transcode existing JPEGs to save space.', zh: '是的——JXL 压缩更优，并可将现有 JPEG 无损转码以节省空间。' },
      },
    ],
  },
  {
    slug: 'png',
    name: 'PNG',
    ext: '.png',
    accept: 'image/png',
    priority: 'low',
    tagline: { en: 'Open PNG images with full transparency, free.', zh: '免费打开支持完整透明通道的 PNG 图片。' },
    intro: {
      en: 'PNG (Portable Network Graphics) is a lossless raster format with full alpha transparency, ideal for screenshots, logos and graphics with sharp edges. It is universally supported and remains the go-to format when quality must be preserved exactly.',
      zh: 'PNG（便携式网络图形）是一种支持完整透明通道的无损位图格式，非常适合截图、徽标和边缘清晰的图形。它被广泛支持，是需要完全保留质量时的首选格式。',
    },
    support: { chrome: true, safari: true, firefox: true, windowsExplorer: true },
    related: ['webp', 'svg', 'jpeg'],
    faq: [
      {
        q: { en: 'Is PNG lossless?', zh: 'PNG 是无损的吗？' },
        a: { en: 'Yes, PNG uses lossless compression, so no image quality is lost when saving.', zh: '是的，PNG 采用无损压缩，保存时不会损失图片质量。' },
      },
    ],
  },
  {
    slug: 'jpeg',
    name: 'JPEG',
    ext: '.jpg',
    accept: 'image/jpeg',
    priority: 'low',
    tagline: { en: 'Open JPEG / JPG photos quickly, free.', zh: '快速免费打开 JPEG / JPG 照片。' },
    intro: {
      en: 'JPEG (or JPG) is the most widely used photographic image format in the world. It uses lossy compression to keep file sizes small, which makes it perfect for photos shared online. Void opens JPEG instantly with correct color profiles and EXIF metadata.',
      zh: 'JPEG（或 JPG）是全球使用最广泛的照片图片格式。它采用有损压缩以保持较小的文件体积，非常适合在线分享照片。Void 可即时打开 JPEG，并正确处理色彩配置和 EXIF 元数据。',
    },
    support: { chrome: true, safari: true, firefox: true, windowsExplorer: true },
    related: ['png', 'webp', 'heic'],
    faq: [
      {
        q: { en: 'Does JPEG lose quality?', zh: 'JPEG 会损失质量吗？' },
        a: { en: 'JPEG uses lossy compression, so some quality is traded for smaller files. Re-saving repeatedly reduces quality further.', zh: 'JPEG 采用有损压缩，会以牺牲部分质量换取更小的体积。反复保存会进一步降低质量。' },
      },
    ],
  },
  {
    slug: 'gif',
    name: 'GIF',
    ext: '.gif',
    accept: 'image/gif',
    priority: 'low',
    tagline: { en: 'Play animated GIFs frame by frame, free.', zh: '免费逐帧播放 GIF 动图。' },
    intro: {
      en: 'GIF (Graphics Interchange Format) is best known for short looping animations. Void plays animated GIFs with full playback control — pause, scrub and step through individual frames — and also opens static GIFs instantly.',
      zh: 'GIF（图形交换格式）以短循环动画而闻名。Void 支持完整播放控制播放 GIF 动图——暂停、拖动和逐帧步进——同时也能即时打开静态 GIF。',
    },
    support: { chrome: true, safari: true, firefox: true, windowsExplorer: true },
    related: ['webp', 'avif', 'png'],
    faq: [
      {
        q: { en: 'Can I step through GIF frames?', zh: '可以逐帧查看 GIF 吗？' },
        a: { en: 'Yes, Void lets you pause and step frame by frame through any animated GIF.', zh: '可以，Void 支持暂停并逐帧查看任意 GIF 动图。' },
      },
    ],
  },
  {
    slug: 'bmp',
    name: 'BMP',
    ext: '.bmp',
    accept: 'image/bmp',
    priority: 'low',
    tagline: { en: 'Open uncompressed BMP bitmaps, free.', zh: '免费打开未压缩的 BMP 位图。' },
    intro: {
      en: 'BMP (Bitmap) is a simple, uncompressed raster format native to Windows. Files are large because pixel data is stored directly, but they are fast to read and lossless. Void opens BMP images of any size without fuss.',
      zh: 'BMP（位图）是 Windows 原生的简单、未压缩位图格式。由于像素数据直接存储，文件较大，但读取快且无损。Void 可轻松打开任意尺寸的 BMP 图片。',
    },
    support: { chrome: true, safari: true, firefox: true, windowsExplorer: true },
    related: ['png', 'tiff', 'jpeg'],
    faq: [],
  },
  {
    slug: 'ico',
    name: 'ICO',
    ext: '.ico',
    accept: 'image/x-icon,image/vnd.microsoft.icon',
    priority: 'low',
    tagline: { en: 'Open Windows ICO icon files, free.', zh: '免费打开 Windows ICO 图标文件。' },
    intro: {
      en: 'ICO is the icon format used by Windows for application and file icons. A single ICO file can contain multiple resolutions. Void displays every embedded size so you can inspect an icon at each resolution.',
      zh: 'ICO 是 Windows 用于应用程序和文件图标的图标格式。单个 ICO 文件可包含多种分辨率。Void 会显示每个内嵌尺寸，便于你在各分辨率下检查图标。',
    },
    support: { chrome: true, safari: true, firefox: true, windowsExplorer: true },
    related: ['png', 'svg', 'bmp'],
    faq: [],
  },
  {
    slug: 'raw',
    name: 'RAW',
    ext: '.cr2 / .nef / .arw / .dng',
    accept: 'image/*',
    priority: 'low',
    tagline: { en: 'Open camera RAW files (CR2, NEF, ARW, DNG), free.', zh: '免费打开相机 RAW 文件（CR2、NEF、ARW、DNG）。' },
    intro: {
      en: 'RAW files store unprocessed sensor data straight from a camera, preserving maximum detail and dynamic range for editing. Void decodes common RAW formats — Canon CR2, Nikon NEF, Sony ARW and Adobe DNG — with hardware acceleration for smooth previews.',
      zh: 'RAW 文件直接存储来自相机传感器的未处理数据，为后期编辑保留最大的细节和动态范围。Void 通过硬件加速解码常见 RAW 格式——佳能 CR2、尼康 NEF、索尼 ARW 和 Adobe DNG——预览流畅。',
    },
    support: { chrome: false, safari: false, firefox: false, windowsExplorer: false },
    related: ['tiff', 'heic', 'jpeg'],
    faq: [
      {
        q: { en: 'Which RAW formats are supported?', zh: '支持哪些 RAW 格式？' },
        a: { en: 'Canon CR2/CR3, Nikon NEF, Sony ARW, Adobe DNG and many others are supported.', zh: '支持佳能 CR2/CR3、尼康 NEF、索尼 ARW、Adobe DNG 等多种格式。' },
      },
    ],
  },
]

export const highPriorityFormats = formatList.filter((f) => f.priority === 'high')

export function getFormat(slug: string): FormatInfo | undefined {
  return formatList.find((f) => f.slug === slug)
}

export function pick<T>(value: { en: T; zh: T }, locale: Locale): T {
  return value[locale]
}
