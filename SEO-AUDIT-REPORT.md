# SEO 全面审计报告

- **站点**: voidimageviewer.com（Void Image Viewer 资源镜像站）
- **技术栈**: Next.js 16.2.6 + React 19 + Tailwind CSS
- **语言版本**: EN（根路径）+ ZH（/zh 前缀）
- **审计框架**: seo-audit 技能 v2.0.0（marketingskills）
- **审计日期**: 2026-08-19
- **问题总数**: 17 个（Critical 2 / High 4 / Medium 6 / Low 5）

---

## 执行摘要

**整体健康度**: 中上。基础 SEO 架构（canonical、hreflang、sitemap、JSON-LD、多语言）搭建良好，但存在 2 个关键阻断问题和若干中等/低优先级问题。

**Top 5 优先修复**:
1. 图片优化全局禁用（直接拖垮 LCP/CLS）
2. Sitemap 缺少 x-default hreflang（国际化信号不一致）
3. 根布局静态 canonical 与页面级 hreflang 潜在冲突
4. Footer 语言切换器始终跳首页（跨语言导航断裂）
5. About 页面原生 `<img>` 缺少尺寸属性（CLS 风险）

---

## 一、技术 SEO 发现

### 1.1 可爬取性

| 检查项 | 状态 | 备注 |
|--------|------|------|
| Robots.txt | ✅ 正常 | `allow: '/'`, sitemap 引用正确 |
| XML Sitemap | ⚠️ 有问题 | 缺少 x-default，见 Issue 2 |
| 站点架构 | ✅ 正常 | 重要页面均在 3 次点击内 |
| 孤立页面 | ✅ 无 | 所有页面均有入链 |
| noindex | ✅ 正常 | 仅 404 页面设置 noindex |

### 1.2 索引

#### Issue 1 — robots.ts 使用非标准 `host` 属性
- **影响**: Low
- **证据**: `app/robots.ts` 第 8 行 `host: APP.baseUrl`
- **问题**: `host` 是 Yandex 特有的非标准属性，Google 忽略
- **修复**: 移除 `host` 行

#### Issue 2 — Sitemap 缺少 x-default hreflang
- **影响**: High
- **证据**: `app/sitemap.ts` 中 `alternates.languages` 只含 `en` 和 `zh`，但页面级 `lib/seo.ts` 声明了 `'x-default'`
- **问题**: 根据 seo-audit 参考文档："Next.js `alternates.languages` does NOT auto-include a self-referencing `<xhtml:link>` for the `<loc>` URL"。Sitemap 中的 hreflang 与页面级 hreflang 不一致会导致 Google 丢弃该 pair
- **修复**:
```typescript
// app/sitemap.ts
alternates: {
  languages: {
    en: enUrl,
    zh: zhUrl,
    'x-default': enUrl, // 添加 x-default
  },
},
```

### 1.3 站点速度与 Core Web Vitals

#### Issue 3 — 图片优化全局禁用 [CRITICAL]
- **影响**: Critical — 直接影响 LCP、CLS、页面加载速度
- **证据**: `next.config.mjs` 中 `images: { unoptimized: true }`
- **问题**: 所有 `<Image>` 组件（Nav logo、Footer logo、Screenshots）退化为原始 `<img>`，失去：
  - 自动 WebP/AVIF 转换
  - 响应式 `srcset` 生成
  - 自动尺寸优化
- **修复**: 移除 `unoptimized: true`；如需部署到不支持优化的平台，使用 `loader` 配置代替：
```javascript
// next.config.mjs
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  // 删除 images.unoptimized
}
```

#### Issue 4 — Hero 背景图无法预加载
- **影响**: Medium — Hero 背景是首屏最大视觉元素（LCP 候选）
- **证据**: `components/hero.tsx` 通过内联 `<style>` 的 `background-image: url('/hero-bg.jpg')` 加载
- **问题**: 浏览器需解析完 CSS 后才发现该资源，无法并行下载
- **修复**: 在 `app/layout.tsx` 的 metadata 中添加预加载，或直接在 `<head>` 中：
```html
<link rel="preload" href="/hero-bg.jpg" as="image" fetchpriority="high" />
```

### 1.4 移动友好性

| 检查项 | 状态 |
|--------|------|
| 响应式设计 | ✅ Tailwind 断点 md/sm/lg |
| Viewport 配置 | ✅ `width=device-width, initialScale=1` |
| 点击目标 | ⚠️ Nav 链接在移动端被隐藏，缺少替代导航 |
| 水平滚动 | ✅ 无 |

#### Issue 5 — 移动端缺少导航菜单
- **影响**: Medium — 移动端用户体验和 SEO 移动友好性
- **证据**: `components/nav.tsx` 第 48 行 `.hidden md:flex` 隐藏了导航链接
- **修复**: 添加移动端汉堡菜单或折叠导航

### 1.5 URL 结构

| 检查项 | 状态 |
|--------|------|
| 可读描述性 URL | ✅ `/download`, `/supported-formats/webp` |
| URL 中自然包含关键词 | ✅ |
| 小写 + 连字符 | ✅ |
| 无多余参数 | ✅ |
| 尾部斜杠一致性 | ✅ 统一无尾部斜杠 |

---

## 二、国际化 SEO 发现

### 2.1 Hreflang

| 检查项 | 状态 | 备注 |
|--------|------|------|
| 自引用条目 | ✅ | 每页包含自身 en/zh |
| 互惠链接 | ✅ | A→B, B→A 双向存在 |
| 有效语言代码 | ✅ | `en`, `zh` (ISO 639-1) |
| x-default 存在 | ⚠️ | 页面级有，sitemap 缺失 |
| 所有目标 URL 返回 200 | ✅ | |
| HTML 与 sitemap 一致性 | ⚠️ | sitemap 缺少 x-default |

#### Issue 6 — 根布局静态 canonical 可能干扰页面级 hreflang
- **影响**: Medium
- **证据**: `app/layout.tsx` 第 84-86 行设置了 `alternates: { canonical: 'https://voidimageviewer.com' }`
- **问题**: 根据 seo-audit 参考文档："canonical overrides hreflang when they conflict"。根布局的静态 alternates 与子页面的 alternates（含 languages）在 Next.js metadata 合并中可能产生冲突
- **修复**: 移除根布局的 `alternates`，各页面已通过 `pageMetadata` 正确设置 canonical

### 2.2 多语言 Canonical

| 检查项 | 状态 |
|--------|------|
| 每个 locale 自 canonical | ✅ |
| 无跨语言 canonical | ✅ |
| canonical URL 在 hreflang 集合中 | ✅ |
| 协议/域名一致 | ✅ |

### 2.3 国际化 Sitemap

| 检查项 | 状态 |
|--------|------|
| xmlns:xhtml 命名空间 | ✅ (Next.js 自动添加) |
| 每个 URL 包含所有 locale 的 alternate | ⚠️ 缺 x-default |
| 绝对 URL | ✅ |
| robots.txt 中引用 | ✅ |

### 2.4 Locale URL 结构

#### Issue 7 — Footer 语言切换器始终跳首页
- **影响**: Medium — 跨语言导航断裂，用户在任何子页面切换语言都会跳到首页
- **证据**: `components/site-footer.tsx` 第 66 行硬编码 `<Link href="/zh">` 和 `<Link href="/">`
- **问题**: 在 `/download` 页面点击 footer 的 "中文" 链接会跳到 `/zh` 而不是 `/zh/download`。Nav 组件正确实现了同页语言切换，但 Footer 没有
- **修复**: 复用 Nav 中的 basePath 逻辑（strip `/zh` 前缀后按目标 locale 重建路径），将当前路径传给 Footer 组件

### 2.5 跨语言内容质量

| 检查项 | 状态 |
|--------|------|
| 全量翻译（非仅模板） | ✅ 所有页面完整翻译 |
| 无近似重复内容 | ✅ EN/ZH 内容实质不同 |
| 无薄质量 locale 页面 | ✅ 所有 ZH 页面都有实质内容 |
| 本地化信号 | ✅ 中文下载提供汉化版 |

---

## 三、页面 SEO 发现

### 3.1 Title Tags

#### Issue 8 — 部分中文页面标题缺少空格分隔
- **影响**: Medium — SERP 可读性和 CTR
- **证据**: 以下 7 个 zh 页面标题中 "VoidImageViewer" 与中文之间缺少空格：
  - `app/zh/faq/page.tsx` — "VoidImageViewer常见问题"
  - `app/zh/features/page.tsx` — "VoidImageViewer功能特性"
  - `app/zh/installation/page.tsx` — "VoidImageViewer安装教程"
  - `app/zh/screenshots/page.tsx` — "VoidImageViewer软件截图"
  - `app/zh/release-notes/page.tsx` — "VoidImageViewer更新日志"
  - `app/zh/about/page.tsx` — "VoidImageViewer关于我们"
  - `app/zh/supported-formats/page.tsx` — "VoidImageViewer支持的图片格式"
- **修复**: 统一加空格，如 "VoidImageViewer 常见问题"

#### Issue 9 — 中文首页冗余 title 覆盖
- **影响**: Low
- **证据**: `app/zh/page.tsx` 第 25-27 行用 `title: { absolute: '...' }` 覆盖了 `pageMetadata` 已设置的相同值
- **修复**: 移除冗余的 `title: { absolute: ... }` 块

#### Issue 10 — 产品名称不一致
- **影响**: Low — 品牌一致性和搜索关联
- **证据**: 标题中混用 "VoidImageViewer"（无空格）与 "Void Image Viewer"（有空格）；hero h1 中写 "VoidimageViewer"
- **修复**: 统一品牌名称写法

### 3.2 Meta Descriptions

| 检查项 | 状态 |
|--------|------|
| 每页唯一 | ✅ |
| 150-160 字符 | ✅ format 页截断到 158 |
| 包含主关键词 | ✅ |
| 有价值主张 | ✅ |

### 3.3 标题结构

| 检查项 | 状态 |
|--------|------|
| 每页一个 H1 | ✅ Hero / PageHeader |
| H1 包含主关键词 | ✅ |
| H1→H2→H3 层级 | ✅ 逻辑清晰 |
| 无跳级 | ✅ |

### 3.4 图片优化

| 检查项 | 状态 | 备注 |
|--------|------|------|
| 描述性文件名 | ✅ | |
| Alt text 全覆盖 | ✅ | |
| 压缩文件大小 | ❌ | 见 Issue 3 |
| 现代格式(WebP) | ❌ | 见 Issue 3 |
| 懒加载 | ✅ | screenshots 页 `loading="lazy"` |
| 响应式图片 | ⚠️ | Image fill 模式依赖优化 |

#### Issue 11 — About 页面 `<img>` 缺少 width/height
- **影响**: Medium — CLS (Cumulative Layout Shift)
- **证据**: `components/pages/about-page.tsx` 第 50-57 行使用原生 `<img>` 无 `width`/`height`
- **问题**: 浏览器无法预留空间，图片加载完成后页面内容跳动，恶化 CLS 分数
- **修复**: 添加 `width`/`height` 属性，或改用 Next.js `<Image>` 组件（需先修复 Issue 3）

### 3.5 内链结构

| 检查项 | 状态 |
|--------|------|
| 重要页面链接充分 | ✅ Nav + Footer |
| 描述性锚文本 | ✅ |
| 无断链 | ✅ |
| 相关页面互链 | ✅ format related, prev/next |

#### Issue 12 — 缺少 Skip Navigation 链接
- **影响**: Low — 可访问性（屏幕阅读器用户需 Tab 过所有导航项）
- **修复**: 在 Nav 顶部添加 `<a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>`

---

## 四、内容质量发现

### 4.1 E-E-A-T 信号

| 信号 | 状态 | 备注 |
|------|------|------|
| Experience | ⚠️ | 缺少用户使用体验/评测 |
| Expertise | ✅ | 格式页面内容专业详尽 |
| Authoritativeness | ✅ | 链接到 GitHub、voidtools 论坛 |
| Trustworthiness | ⚠️ | 有 Disclaimer 但缺少 Privacy Policy |

#### Issue 13 — 缺少 Privacy Policy 和 Contact 页面
- **影响**: Medium — E-E-A-T Trustworthiness 信号不完整
- **证据**: `lib/i18n.ts` footer 翻译中定义了 `privacy` 和 `contact` 文本，但实际 footer 未渲染这些链接，页面也不存在
- **修复**: 创建 `/privacy` 和 `/contact` 页面，或从 i18n 翻译中移除占位文本

### 4.2 内容深度

| 页面 | 深度 | 备注 |
|------|------|------|
| Homepage | ✅ 优秀 | Hero + Why + Formats + Features + Download + FAQ |
| Download | ✅ 优秀 | 多架构 + 系统要求 + 安装步骤 + FAQ |
| Features | ⚠️ 偏薄 | 仅复用首页 section，无独有内容 |
| Format Detail | ✅ 优秀 | 格式介绍 + 兼容性 + FAQ + 相关格式 |
| Installation | ✅ 良好 | 安装版/便携版/默认设置/排障 |
| Screenshots | ⚠️ 偏薄 | 仅图片+简短说明 |
| Release Notes | ✅ 良好 | 完整版本历史 |

#### Issue 14 — Features 页面内容较薄
- **影响**: Low — 仅组合了首页已有的两个 section，无独有深度内容
- **修复**: 添加技术架构说明、性能基准数据、与竞品对比等独有内容

### 4.3 关键词覆盖

| 目标关键词 | 覆盖页面 | 状态 |
|-----------|---------|------|
| image viewer for Windows | homepage, features, download | ✅ |
| free image viewer | homepage, download | ✅ |
| WebP viewer | format detail | ✅ |
| AVIF viewer | format detail | ✅ |
| HEIC viewer | format detail | ✅ |
| portable image viewer | download, installation | ✅ |

关键词无严重蚕食问题。

---

## 五、结构化数据发现

### 5.1 现有 JSON-LD 覆盖

| 页面 | Schema 类型 | 状态 |
|------|------------|------|
| 全局 (layout) | WebSite + Organization | ✅ |
| Download | SoftwareApplication + FAQPage | ✅ |
| FAQ | FAQPage | ✅ |
| Installation | HowTo | ✅ |
| Format Detail | FAQPage | ✅ |
| Format Index | ItemList | ✅ |
| Release Detail | SoftwareApplication | ✅ |
| 所有页面 | BreadcrumbList | ✅ (PageHeader) |

#### Issue 15 — 全局 WebSite schema 缺少 SearchAction
- **影响**: Medium — 无法触发 Google Sitelinks Search Box
- **证据**: `app/layout.tsx` 第 121-129 行
- **修复**:
```json
{
  "@type": "WebSite",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://voidimageviewer.com/supported-formats?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### Issue 16 — Organization schema 缺少 sameAs
- **影响**: Low
- **修复**: 添加 `"sameAs": ["https://github.com/voidtools/voidImageViewer"]`

#### Issue 17 — Features/Screenshots 页面缺少结构化数据
- **影响**: Low
- **修复**: Features 添加 `SoftwareApplication` schema；Screenshots 添加 `ImageGallery` schema

---

## 六、其他代码质量问题

| 问题 | 文件 | 说明 |
|------|------|------|
| 装饰性 SVG 缺 `aria-hidden` | `features-section.tsx` 等 | 影响可访问性评分 |
| `site.webmanifest` 缺 `start_url` | `public/site.webmanifest` | PWA 审计项 |
| `Noto_Sans_SC` 字体配置冗余 | `layout.tsx` | `subsets: ['latin']` 对 CJK 无意义 |
| `releaseInfo` 占位 URL | `lib/i18n.ts` | `githubUrl: 'https://github.com'`、`allVersionsUrl: '#'` |
| FAQ 手风琴 ARIA 不完整 | `faq-section.tsx` | 缺 `aria-controls`/`id` 关联 |

---

## 七、优先行动计划

### 第一优先级: Critical Fixes（阻断索引/排名）

| # | 问题 | 文件 | 修复 |
|---|------|------|------|
| 3 | 图片优化全局禁用 | `next.config.mjs` | 移除 `unoptimized: true` |
| 2 | Sitemap 缺 x-default hreflang | `app/sitemap.ts` | 添加 `'x-default'` 到 languages |

### 第二优先级: High-Impact Improvements

| # | 问题 | 文件 | 修复 |
|---|------|------|------|
| 6 | 根布局 alternates 冲突 | `app/layout.tsx` | 移除 `alternates.canonical` |
| 7 | Footer 语言切换器跳首页 | `components/site-footer.tsx` | 改为同页面跨语言 URL |
| 4 | Hero 背景图无法预加载 | `app/layout.tsx` | 添加 `<link rel="preload">` |
| 15 | WebSite JSON-LD 缺 SearchAction | `app/layout.tsx` | 添加 `potentialAction` |

### 第三优先级: Quick Wins（简单且即时见效）

| # | 问题 | 文件 | 修复 |
|---|------|------|------|
| 8 | 中文标题缺空格 | 7 个 `app/zh/*/page.tsx` | 加空格 |
| 9 | 中文首页冗余 title | `app/zh/page.tsx` | 移除重复覆盖 |
| 11 | About 页 img 缺尺寸 | `components/pages/about-page.tsx` | 添加 width/height |
| 1 | robots.ts 非标准 host | `app/robots.ts` | 移除 host 行 |
| 10 | 产品名称不一致 | 多处 | 统一品牌名称写法 |

### 第四优先级: Long-Term Recommendations

| # | 问题 | 修复 |
|---|------|------|
| 5 | 移动端缺少导航 | 添加汉堡菜单 |
| 14 | Features 页面内容薄 | 添加独有深度内容 |
| 13 | 缺 Privacy/Contact 页面 | 创建或移除占位文本 |
| 16 | Organization 缺 sameAs | 添加 GitHub 链接 |
| 17 | Features/Screenshots 缺 schema | 补充结构化数据 |
| 12 | 缺 Skip Navigation | 添加 sr-only 跳转链接 |

---

## 审计依据

- seo-audit skill v2.0.0: https://github.com/coreyhaines31/marketingskills/tree/main/skills/seo-audit
- International SEO reference: hreflang 互惠要求、canonical 覆盖 hreflang、Next.js sitemap 自引用要求
- Google Search Central: Localized Versions / Consolidate Duplicate URLs / Build and Submit a Sitemap
