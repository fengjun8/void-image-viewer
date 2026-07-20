'use client'

import { useState } from 'react'

interface CopyTextProps {
  value: string
  display?: string
  label: string
  copiedLabel: string
}

export function CopyText({ value, display, label, copiedLabel }: CopyTextProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <button type="button" onClick={copy} className="copy-text w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-[9px] text-left" aria-label={label}>
      <code className="font-mono text-[12px] truncate" style={{ color: 'var(--foreground)' }}>
        {display ?? value}
      </code>
      <span className="font-mono text-[11px] flex-shrink-0" style={{ color: copied ? 'var(--green)' : 'var(--violet)' }}>
        {copied ? copiedLabel : label}
      </span>
      <style>{`
        .copy-text { background: var(--surface-2); border: 1px solid var(--border); transition: border-color .15s; }
        .copy-text:hover { border-color: var(--violet); }
      `}</style>
    </button>
  )
}
