'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const mq = window.matchMedia?.('(max-width: 768px)')
    const update = () => setIsMobile(!!mq?.matches)
    update()
    mq?.addEventListener?.('change', update)
    return () => mq?.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Keep this subtle; show later on the page.
      if (window.scrollY > 900 && !isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  if (prefersReducedMotion || isMobile) return null

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        >
          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-muted)] hover:text-purple-500 hover:border-purple-500/50 transition-colors"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
          
          {/* Single CTA Button */}
          <Link
            href="/demo"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--cta-primary-bg)] text-[var(--cta-primary-text)] font-semibold text-sm hover:bg-[var(--cta-primary-hover)] shadow-lg shadow-purple-500/25 transition-all"
          >
            <span>Book a Demo</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
