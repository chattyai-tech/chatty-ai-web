'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
  amount?: number
}

const directionVariants = {
  up: { y: 20, opacity: 0 },
  down: { y: -20, opacity: 0 },
  left: { x: 20, opacity: 0 },
  right: { x: -20, opacity: 0 },
  none: { opacity: 0 },
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.4,
  once = true,
  amount = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia?.('(max-width: 768px)')
    const update = () => setIsMobile(!!mq?.matches)
    update()
    mq?.addEventListener?.('change', update)
    return () => mq?.removeEventListener?.('change', update)
  }, [])

  // Use IntersectionObserver directly to avoid SSR issues
  useEffect(() => {
    if (!mounted || !ref.current) return

    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once && entry.isIntersecting) {
          setIsInView(true)
        } else if (!once) {
          setIsInView(entry.isIntersecting)
        }
      },
      { threshold: amount }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [mounted, amount, once])

  const motionEnabled = mounted && !prefersReducedMotion && !isMobile

  const variants: Variants = {
    hidden: directionVariants[direction],
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  // On mobile, reduced motion, or before mount, render immediately visible
  if (!motionEnabled) {
    return <div ref={ref} className={className} style={{ opacity: 1 }}>{children}</div>
  }

  // On desktop: Show content immediately, animate position when scrolling into view
  // For content not in view, show it at final position (no offset) but with opacity 1
  const visibleVariants: Variants = {
    hidden: { 
      x: 0,
      y: 0,
      opacity: 1, // Always visible, no position offset
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  // If content is already in view, show immediately without animation
  if (isInView) {
    return <div ref={ref} className={className} style={{ opacity: 1 }}>{children}</div>
  }

  // For content below the fold, show immediately but prepare for animation
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={visibleVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation wrapper
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia?.('(max-width: 768px)')
    const update = () => setIsMobile(!!mq?.matches)
    update()
    mq?.addEventListener?.('change', update)
    return () => mq?.removeEventListener?.('change', update)
  }, [])

  // Use IntersectionObserver directly to avoid SSR issues
  useEffect(() => {
    if (!mounted || !ref.current) return

    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [mounted])

  const motionEnabled = mounted && !prefersReducedMotion && !isMobile

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }

  // On mobile, reduced motion, or before mount, render immediately visible
  if (!motionEnabled) {
    return <div ref={ref} className={className} style={{ opacity: 1 }}>{children}</div>
  }

  // On desktop: Always show content (opacity: 1), animate when scrolling into view
  const visibleContainerVariants: Variants = {
    hidden: { opacity: 1 }, // Always visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={visibleContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Item for stagger container
interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  direction = 'up',
}) => {
  const prefersReducedMotion = useReducedMotion()
  const itemVariants: Variants = {
    hidden: directionVariants[direction],
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
