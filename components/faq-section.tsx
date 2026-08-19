'use client'

import { useId, useState } from 'react'
import { translations, type Locale } from '@/lib/i18n'

interface FaqSectionProps {
  locale: Locale
}

export function FaqSection({ locale }: FaqSectionProps) {
  const t = translations[locale].faq
  const [openIndex, setOpenIndex] = useState<number>(0)
  const uid = useId()

  return (
    <section id="faq" className="py-20">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="max-w-[560px] mb-11">
          <span className="font-mono text-[12px] tracking-[0.06em] block mb-2.5" style={{ color: 'var(--violet)' }}>
            {t.tag}
          </span>
          <h2
            className="font-display font-semibold text-pretty"
            style={{ fontSize: 'clamp(26px,3.4vw,36px)', letterSpacing: '-0.02em' }}
          >
            {t.h2}
          </h2>
        </div>

        <div>
          {t.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <button
                  id={`faq-btn-${uid}-${i}`}
                  className="w-full flex justify-between items-center py-5 text-left text-[15px] font-medium cursor-pointer transition-colors hover:text-[--violet]"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${uid}-${i}`}
                >
                  <span>{item.q}</span>
                  <span
                    className="font-mono transition-transform duration-200 flex-shrink-0 ml-4"
                    style={{
                      color: 'var(--violet)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${uid}-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${uid}-${i}`}
                  className="overflow-hidden transition-all duration-250"
                  style={{ maxHeight: isOpen ? '160px' : '0' }}
                >
                  <p className="pb-5 text-[13.5px] leading-relaxed max-w-[640px]" style={{ color: 'var(--muted)' }}>
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
