'use client'

import { useState, useEffect } from 'react'

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 400px
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[var(--cta-primary-bg)] flex items-center justify-center hover:bg-[var(--cta-primary-hover)] transition-colors duration-200 shadow-lg shadow-purple-500/20 touch-manipulation"
      aria-label="Back to top"
    >
      {/* Custom SVG Arrow with explicit dimensions to override global CSS */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '20px',
          height: '20px',
          minWidth: '20px',
          minHeight: '20px',
          flexShrink: 0,
        }}
      >
        <path
          d="M12 19V5M5 12l7-7 7 7"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
