'use client'

import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Shield, Lock, Zap } from 'lucide-react'
import { StarBackground } from './ui/StarBackground'

export const CTASection: FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia?.('(max-width: 768px)')
    const update = () => setIsMobile(!!mq?.matches)
    update()
    mq?.addEventListener?.('change', update)
    return () => mq?.removeEventListener?.('change', update)
  }, [])

  const motionEnabled = mounted && !prefersReducedMotion && !isMobile

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Star Background - Using brand colors for visibility on light theme */}
      <StarBackground starCount={400} speed={0.2} className="opacity-80 mix-blend-multiply dark:opacity-60" />

      {/* Subtle Background Gradients - Theme Aware */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/40 dark:bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Simple, Clear Headline */}
        {motionEnabled ? (
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Ready to deploy enterprise AI?
          </motion.h2>
        ) : (
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Ready to deploy enterprise AI?
          </h2>
        )}

        {motionEnabled ? (
          <motion.p
            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Schedule a call to see how ChattyAI can fit your environment and security requirements.
          </motion.p>
        ) : (
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Schedule a call to see how ChattyAI can fit your environment and security requirements.
          </p>
        )}

        {/* Single Primary CTA */}
        {motionEnabled ? (
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full"
            >
              <Link
                href="/demo"
                className="min-h-[50px] min-w-[180px] px-8 py-4 rounded-full bg-[var(--cta-primary-bg)] text-white text-lg font-semibold hover:bg-[var(--cta-primary-hover)] transition-all duration-300 shadow-lg shadow-purple-500/20 touch-manipulation inline-flex items-center justify-center"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <div className="flex justify-center mb-10">
            <Link
              href="/demo"
              className="min-h-[50px] min-w-[180px] px-8 py-4 rounded-full bg-[var(--cta-primary-bg)] text-white text-lg font-semibold hover:bg-[var(--cta-primary-hover)] transition-all duration-300 shadow-lg shadow-purple-500/20 touch-manipulation inline-flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        )}

        {/* Enterprise Trust Indicators - Adjusted for Light Theme */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-muted)] font-medium tracking-wide">
          <span>On-Premise</span>
          <span className="text-[var(--border-primary)]">•</span>
          <span>SOC 2 Type II</span>
          <span className="text-[var(--border-primary)]">•</span>
          <span>Zero Trust</span>
        </div>
      </div>
    </section>
  )
}
