'use client'

import type { FC } from 'react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: "Chatty AI transformed how our analysts work. What used to take hours of SQL writing now happens in seconds with natural language.",
    author: "Sarah Levi",
    role: "VP of Data Analytics",
    company: "Fortune 500 Financial Services",
    avatar: "SL",
    rating: 5
  },
  {
    quote: "The on-premise deployment was crucial for us. Our legal team was comfortable knowing no data leaves our infrastructure.",
    author: "Michael Ben-Ari",
    role: "Chief Information Security Officer",
    company: "Global Healthcare Provider",
    avatar: "MB",
    rating: 5
  },
  {
    quote: "We connected 15 different data sources in a week. Now our entire organization can access insights without waiting for IT.",
    author: "Avital Cohen",
    role: "Director of Operations",
    company: "Enterprise SaaS Company",
    avatar: "AC",
    rating: 5
  },
  {
    quote: "The ROI was immediate. Our customer support team reduced ticket resolution time by 60% using Chatty AI's knowledge base.",
    author: "Daniel Peretz",
    role: "Head of Customer Success",
    company: "Tech Unicorn",
    avatar: "DP",
    rating: 5
  },
  {
    quote: "Finally, an AI solution that understands enterprise security requirements. SOC 2 compliance out of the box was a game-changer.",
    author: "Michal Katz",
    role: "Compliance Director",
    company: "Insurance Leader",
    avatar: "MK",
    rating: 5
  },
  {
    quote: "Our sales team uses Chatty AI to instantly pull customer data and generate reports. It's like having a data analyst for everyone.",
    author: "Ron Avraham",
    role: "Sales Operations Manager",
    company: "B2B Enterprise",
    avatar: "RA",
    rating: 5
  }
]

// Shape Badge Component
const ShapeBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4 sm:mb-6">
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-violet-500 w-3.5 sm:w-4 h-3.5 sm:h-4" aria-hidden="true">
      <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="currentColor"/>
    </svg>
    <span className="text-xs sm:text-sm font-semibold text-violet-400">{children}</span>
  </div>
)

export const Founders: FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[var(--bg-surface)] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-violet-500/5 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <ShapeBadge>Testimonials</ShapeBadge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 px-2">
            Trusted by enterprise leaders
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
            See how leading organizations are transforming their operations with Chatty AI.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-violet-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Rating */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={`${testimonial.author}-star-${i}`} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-[var(--text-muted)] text-[var(--text-muted)]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">&ldquo;{testimonial.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[var(--bg-surface)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-muted)] font-medium text-xs sm:text-sm">
                  {testimonial.avatar}
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-sm text-[var(--text-primary)] truncate">{testimonial.author}</div>
                  <div className="text-xs text-[var(--text-muted)] truncate">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[var(--text-primary)] text-[var(--bg-primary)]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: "500+", label: "Enterprise Clients" },
            { value: "99.9%", label: "Customer Satisfaction" },
            { value: "50M+", label: "Queries Processed" },
            { value: "24/7", label: "Enterprise Support" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="opacity-70 text-[10px] sm:text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
