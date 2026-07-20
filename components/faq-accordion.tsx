'use client'

import { useState } from 'react'

export interface QaItem {
  q: string
  a: string
}

export function FaqAccordion({ items, defaultOpen = 0 }: { items: QaItem[]; defaultOpen?: number }) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen)

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
            <button
              className="w-full flex justify-between items-center py-5 text-left text-[15px] font-medium cursor-pointer transition-colors"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span
                className="font-mono transition-transform duration-200 flex-shrink-0 ml-4"
                style={{ color: 'var(--violet)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </button>
            <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? '260px' : '0' }}>
              <p className="pb-5 text-[13.5px] leading-relaxed max-w-[680px]" style={{ color: 'var(--muted)' }}>
                {item.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
