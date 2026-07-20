'use client'

import { useState, useRef, useCallback } from 'react'
import { translations, type Locale } from '@/lib/i18n'

interface PreviewToolProps {
  locale: Locale
  /** input accept attribute, defaults to any image */
  accept?: string
  /** override the drop hint line (e.g. "AVIF · up to 50 MB") */
  hint?: string
  className?: string
}

export function PreviewTool({ locale, accept = 'image/*', hint, className = '' }: PreviewToolProps) {
  const t = translations[locale].formats
  const [preview, setPreview] = useState<string | null>(null)
  const [meta, setMeta] = useState<{ dims?: string; size: string; name: string; ext: string } | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/') && !/\.(cr2|nef|arw|dng|jxl|heic|heif|avif)$/i.test(file.name)) {
      // still attempt to render — browser may or may not support it
    }
    const url = URL.createObjectURL(file)
    setPreview(url)
    const ext = file.name.split('.').pop()?.toUpperCase() ?? ''
    const size = file.size > 1024 * 1024 ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : `${(file.size / 1024).toFixed(1)} KB`
    setMeta({ size, name: file.name, ext })
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile],
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const onImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    setMeta((m) => (m ? { ...m, dims: `${img.naturalWidth}×${img.naturalHeight}` } : m))
  }

  return (
    <div className={`preview-tool card-v p-6 ${className}`}>
      <span className="tool-label font-mono text-[11px] tracking-[0.06em] block mb-1.5">{t.toolLabel}</span>
      <h3 className="font-display font-semibold text-[17px] mb-1.5">{t.toolTitle}</h3>
      <p className="tool-sub text-[13px] mb-4">{t.toolSub}</p>

      <div
        className={`dropzone rounded-[10px] min-h-[220px] flex flex-col items-center justify-center gap-2.5 text-center p-5 cursor-pointer relative overflow-hidden${isDragging ? ' is-dragging' : ''}`}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        aria-label={t.dropText}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            inputRef.current?.click()
          }
        }}
      >
        <input ref={inputRef} type="file" accept={accept} className="hidden" onChange={handleChange} />
        {preview ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview || "/placeholder.svg"}
              alt="Preview of the image file you selected, rendered by the Void Image Viewer format preview tool"
              title="Selected image preview"
              onLoad={onImgLoad}
              decoding="async"
              className="max-w-full max-h-[240px] rounded-md object-contain"
            />
          </>
        ) : (
          <>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="dz-icon">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <p className="text-[13px] dz-text">{t.dropText}</p>
            <span className="font-mono text-[11px] dz-hint">{hint ?? t.dropHint}</span>
          </>
        )}
      </div>

      {meta && (
        <div className="mt-3 grid grid-cols-3 gap-2">
          <MetaCell label={locale === 'zh' ? '格式' : 'FORMAT'} value={meta.ext || '—'} />
          <MetaCell label={locale === 'zh' ? '分辨率' : 'DIMENSIONS'} value={meta.dims ?? '—'} />
          <MetaCell label={locale === 'zh' ? '大小' : 'SIZE'} value={meta.size} />
        </div>
      )}

      <div className="flex items-center gap-1.5 mt-3 text-[11.5px] privacy-note">
        <span className="privacy-dot w-1.5 h-1.5 rounded-full flex-shrink-0" />
        {t.privacy}
      </div>

      <style>{`
        .tool-label { color: var(--amber); }
        .tool-sub { color: var(--muted); }
        .dropzone { border: 1.5px dashed var(--border); transition: border-color .2s, background .2s; }
        .dropzone:hover, .dropzone.is-dragging { border-color: var(--violet); background: var(--violet-dim); }
        .dz-icon { color: var(--muted); opacity: .5; }
        .dz-text { color: var(--muted); }
        .dz-hint { color: var(--muted); opacity: .7; }
        .privacy-note { color: var(--muted); }
        .privacy-dot { background: var(--green); }
      `}</style>
    </div>
  )
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="meta-cell rounded-[8px] px-3 py-2 text-center">
      <span className="block font-mono text-[9.5px] tracking-[0.05em] mb-0.5" style={{ color: 'var(--muted)', opacity: 0.7 }}>
        {label}
      </span>
      <span className="font-mono text-[12px]" style={{ color: 'var(--foreground)' }}>
        {value}
      </span>
      <style>{`.meta-cell { background: var(--surface-2); border: 1px solid var(--border); }`}</style>
    </div>
  )
}
