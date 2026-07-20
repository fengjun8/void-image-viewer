'use client'

import { useEffect, useState } from 'react'

interface BackToTopProps {
  label?: string
}

export function BackToTop({ label = 'Back to top' }: BackToTopProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className="back-to-top"
      data-visible={visible}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
      <style>{`
        .back-to-top {
          position: fixed;
          right: 1.5rem;
          bottom: 1.5rem;
          z-index: 50;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 9999px;
          background: #ffcc00;
          color: #06008b;
          border: 1px solid rgba(6,0,139,0.2);
          box-shadow: 0 6px 20px rgba(6,0,139,0.22);
          cursor: pointer;
          opacity: 0;
          transform: translateY(12px);
          pointer-events: none;
          transition: opacity .2s ease, transform .2s ease, background .15s ease;
        }
        .back-to-top[data-visible="true"] {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .back-to-top:hover { background: #ffd633; }
        .back-to-top:focus-visible {
          outline: 2px solid #06008b;
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .back-to-top { transition: opacity .2s ease; transform: none; }
        }
      `}</style>
    </button>
  )
}
