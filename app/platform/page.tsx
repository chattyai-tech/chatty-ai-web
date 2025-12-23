'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { 
  MessageSquare, 
  Search, 
  Shield, 
  Zap, 
  Database, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Brain, 
  Sparkles, 
  Bot,
  Globe,
  Lock,
  Rocket,
  TrendingUp,
  Users,
  ChevronRight,
  Code2,
  FileCode,
  Workflow,
  GitBranch,
  Terminal,
  FileSearch,
  CircuitBoard,
  Cpu,
  Server,
  CloudCog,
  Play,
  ExternalLink
} from 'lucide-react'
import { motion, useScroll, useSpring, useTransform, useMotionValue, animate } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: `particle-${i}`,
    left: `${(i * 5) % 100}%`,
    top: `${(i * 7) % 100}%`,
    xOffset: (i % 5) * 4 - 10,
    duration: 4 + (i % 4),
    delay: (i % 8) * 0.3,
  }))
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, particle.xOffset, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Gradient orb component
const GradientOrb = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-[100px] ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
)

// Interactive 3D Card
const Interactive3DCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    setRotateX(-mouseY / 25)
    setRotateY(mouseX / 25)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Products data
const products = [
  {
    id: 'rag',
    name: 'Chatty AI',
    tagline: 'AI-Powered Knowledge Assistant',
    description: 'Retrieval-Augmented Generation that searches your documents, understands context, and delivers cited answers — not hallucinations.',
    icon: Brain,
    gradient: 'from-purple-500 to-violet-600',
    bgGradient: 'from-purple-500/10 to-violet-500/10',
    features: [
      'Zero hallucinations with cited sources',
      'Semantic search across millions of documents',
      'Context-aware understanding',
      'Sub-second response times'
    ],
    stats: [
      { value: '10M+', label: 'Documents' },
      { value: '99.9%', label: 'Accuracy' },
      { value: '<1s', label: 'Response' }
    ],
    link: '/products/assistant'
  },
  {
    id: 'chattydb',
    name: 'ChattyDB',
    tagline: 'Natural Language to SQL',
    description: 'Query your databases using natural language. Connect to any SQL or NoSQL database and get instant insights without writing code.',
    icon: Database,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    features: [
      'Natural language queries',
      'Multi-database support',
      'Real-time data visualization',
      'Secure data access controls'
    ],
    stats: [
      { value: '40+', label: 'Databases' },
      { value: '100%', label: 'SQL Accuracy' },
      { value: '10x', label: 'Faster Queries' }
    ],
    link: '/products/chattydb'
  },
  {
    id: 'agents',
    name: 'Chatty Agents',
    tagline: 'Autonomous AI Workflows',
    description: 'Build AI-powered agents with n8n integration. Create complex workflows that connect systems, make decisions, and automate business processes.',
    icon: Bot,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    features: [
      'n8n workflow integration',
      'Multi-step task automation',
      'Decision-making capabilities',
      'Enterprise system connectors'
    ],
    stats: [
      { value: '500+', label: 'Integrations' },
      { value: '24/7', label: 'Automation' },
      { value: '80%', label: 'Time Saved' }
    ],
    link: '/products/agents'
  },
  {
    id: 'word',
    name: 'Chatty for Word',
    tagline: 'AI Writing Assistant',
    description: 'Transform your Microsoft Word experience with AI-powered writing assistance. Draft, edit, and enhance documents with enterprise knowledge at your fingertips.',
    icon: FileText,
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-500/10 to-amber-500/10',
    features: [
      'Real-time writing suggestions',
      'Document summarization',
      'Tone and style adjustment',
      'Company knowledge integration'
    ],
    stats: [
      { value: '3x', label: 'Faster Writing' },
      { value: '50%', label: 'Less Editing' },
      { value: '100%', label: 'On-Brand' }
    ],
    link: '/products/embedded'
  },
  {
    id: 'code',
    name: 'Chatty Code',
    tagline: 'AI Code Assistant',
    description: 'Supercharge your development workflow with AI that understands your codebase. Get intelligent suggestions, debug faster, and write better code.',
    icon: Code2,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    features: [
      'Codebase-aware suggestions',
      'Intelligent debugging',
      'Code review assistance',
      'Documentation generation'
    ],
    stats: [
      { value: '40%', label: 'Faster Coding' },
      { value: '60%', label: 'Fewer Bugs' },
      { value: '2x', label: 'Productivity' }
    ],
    link: '/products/embedded'
  }
]

// Navigation items for quick access
const navItems = products.map(p => ({ id: p.id, name: p.name, icon: p.icon }))

export default function PlatformPage() {
  const [activeSection, setActiveSection] = useState('rag')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      setActiveSection(hash)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    products.forEach((product) => {
      const element = document.getElementById(product.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div ref={containerRef} className="overflow-x-hidden bg-[var(--bg-primary)]">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <GradientOrb className="w-[800px] h-[800px] -top-60 -left-60 bg-purple-600/20" delay={0} />
          <GradientOrb className="w-[600px] h-[600px] top-1/3 -right-40 bg-violet-600/15" delay={2} />
          <GradientOrb className="w-[500px] h-[500px] bottom-0 left-1/3 bg-indigo-600/10" delay={4} />
          <FloatingParticles />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-card)] border border-purple-500/30 text-sm font-semibold mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
              </motion.div>
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Platform Overview
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[-0.04em] leading-[1.05] mb-8"
            >
              <span className="text-[var(--text-primary)]">The Complete </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                Enterprise AI Platform
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Five powerful AI products, one unified platform. Transform how your enterprise 
              works with documents, databases, workflows, and code.
            </motion.p>

            {/* Quick Navigation Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-500/10 border-purple-500/40 text-purple-400'
                      : 'bg-[var(--bg-card)] border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-purple-500/30'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium text-sm">{item.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual - Modern Product Showcase Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative max-w-4xl mx-auto mt-8 sm:mt-12"
          >
            {/* Decorative background glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            {/* Product Cards Grid - Bento Style */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 px-4">
              {products.map((product, idx) => (
                <motion.button
                  key={product.id}
                  onClick={() => scrollToSection(product.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex flex-col items-center p-4 sm:p-5 md:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-purple-500/40 transition-all duration-300 cursor-pointer touch-manipulation min-h-[120px] sm:min-h-[140px]"
                >
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon container */}
                  <div className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-3`}>
                    <product.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  
                  {/* Product name */}
                  <span className="relative z-10 text-xs sm:text-sm font-semibold text-[var(--text-primary)] text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {product.name}
                  </span>
                  
                  {/* Tagline - hidden on small screens */}
                  <span className="hidden sm:block relative z-10 text-[10px] sm:text-xs text-[var(--text-muted)] text-center mt-1 line-clamp-1">
                    {product.tagline}
                  </span>

                  {/* Connection line indicator */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-3 bg-gradient-to-b from-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              ))}
            </div>

            {/* Center Platform Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex justify-center mt-6 sm:mt-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-lg">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">Unified AI Platform</p>
                  <p className="text-[10px] sm:text-xs text-[var(--text-muted)]">5 Products • 1 Integration</p>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-500"
                />
              </div>
            </motion.div>

            {/* Connecting lines SVG - Desktop only */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none -z-5" style={{ top: '50%', transform: 'translateY(-50%)' }}>
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
                  <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                </linearGradient>
              </defs>
              <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="url(#line-grad)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </motion.div>

        </div>
      </section>

      {/* ==================== PRODUCT SECTIONS ==================== */}
      {products.map((product, idx) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-32 relative overflow-hidden scroll-mt-20 ${
            idx % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-surface)]/50'
          }`}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute ${idx % 2 === 0 ? '-right-40 top-20' : '-left-40 bottom-20'} w-[500px] h-[500px] bg-gradient-to-br ${product.bgGradient} rounded-full blur-[120px] opacity-50`} />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={idx % 2 === 1 ? 'lg:col-start-2' : ''}
              >
                {/* Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${product.bgGradient} border border-white/10 text-sm font-semibold mb-6`}>
                  <product.icon className="w-4 h-4" />
                  <span className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.name}
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black tracking-[-0.03em] text-[var(--text-primary)] mb-4">
                  {product.tagline}
                </h2>

                {/* Description */}
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, fIdx) => (
                    <motion.li
                      key={fIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fIdx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center shrink-0`}>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[var(--text-primary)]">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 mb-8">
                  {product.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="text-center">
                      <div className={`text-3xl font-black bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href={product.link}>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                <Interactive3DCard>
                  <div className="relative">
                    {/* Glow */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${product.bgGradient} rounded-3xl blur-2xl opacity-60`} />
                    
                    {/* Card */}
                    <div className="relative bg-[var(--bg-card)]/90 backdrop-blur-xl border border-[var(--border-primary)] rounded-2xl overflow-hidden shadow-2xl">
                      {/* Header */}
                      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-primary)] bg-[var(--bg-surface)]/50">
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                          </div>
                          <span className="text-sm font-medium text-[var(--text-muted)]">{product.name}</span>
                        </div>
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                          <product.icon className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Content area - product specific demo */}
                      <div className="p-6 min-h-[280px] flex items-center justify-center">
                        <ProductDemo product={product} />
                      </div>
                    </div>
                  </div>
                </Interactive3DCard>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ==================== UNIFIED BENEFITS SECTION ==================== */}
      <ScrollReveal>
        <section className="py-32 bg-[var(--bg-primary)] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <GradientOrb className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10" delay={0} />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold tracking-[0.3em] uppercase text-purple-400 mb-4"
              >
                Why Choose ChattyAI
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-black tracking-[-0.03em] text-[var(--text-primary)] mb-6"
              >
                One Platform, Unlimited Possibilities
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2 Type II certified with on-premise deployment options.', gradient: 'from-emerald-500 to-teal-500' },
                { icon: Zap, title: 'Lightning Fast', desc: 'Sub-second responses across all products.', gradient: 'from-amber-500 to-orange-500' },
                { icon: Globe, title: 'Universal Integration', desc: '500+ integrations with your existing tools.', gradient: 'from-blue-500 to-cyan-500' },
                { icon: Lock, title: 'Data Privacy', desc: 'Your data stays yours. Never used for training.', gradient: 'from-pink-500 to-rose-500' },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[var(--text-muted)]">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CTASection />
    </div>
  )
}

// Product demo component
function ProductDemo({ product }: { product: typeof products[0] }) {
  if (product.id === 'rag') {
    return (
      <div className="w-full space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-primary)] flex items-center justify-center shrink-0">
            👤
          </div>
          <div className="flex-1 bg-[var(--bg-surface)] border border-[var(--border-primary)] rounded-xl px-4 py-3">
            <p className="text-sm text-[var(--text-primary)]">What was Q3 revenue growth?</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shrink-0">
            <Brain className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 bg-purple-500/5 border border-purple-500/20 rounded-xl px-4 py-3">
            <p className="text-sm text-[var(--text-primary)]">Revenue grew 23.4% YoY to $142.5M, exceeding forecast by 4%.</p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-400">📄 Q3-Report.pdf</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (product.id === 'chattydb') {
    return (
      <div className="w-full space-y-4 font-mono text-sm">
        <div className="text-[var(--text-muted)]"># Natural Language Query</div>
        <div className="text-purple-400">&quot;Show top 10 customers by revenue&quot;</div>
        <div className="text-[var(--text-muted)] mt-4"># Generated SQL</div>
        <div className="text-emerald-400 bg-emerald-500/5 rounded-lg p-3 border border-emerald-500/20">
          <code>SELECT customer_name, SUM(amount)</code><br/>
          <code>FROM orders GROUP BY customer_id</code><br/>
          <code>ORDER BY SUM(amount) DESC LIMIT 10;</code>
        </div>
      </div>
    )
  }

  if (product.id === 'agents') {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-[var(--text-primary)]">Invoice Processing Agent</span>
          <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">● Active</span>
        </div>
        <div className="space-y-2">
          {['Extract data from PDF', 'Validate amounts', 'Update database', 'Send confirmation'].map((step, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-[var(--bg-surface)]">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-sm text-[var(--text-secondary)]">{step}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (product.id === 'word') {
    return (
      <div className="w-full">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b">
            <FileText className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-[var(--text-primary)]">Document.docx</span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-[var(--text-secondary)]">The quarterly report shows significant growth...</p>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-xs">AI suggests: Add specific metrics for clarity</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (product.id === 'code') {
    return (
      <div className="w-full font-mono text-sm">
        <div className="flex items-center gap-2 mb-3">
          <Terminal className="w-4 h-4 text-pink-400" />
          <span className="text-[var(--text-muted)]">main.py</span>
        </div>
        <div className="space-y-1 text-xs">
          <div><span className="text-purple-400">def</span> <span className="text-blue-400">process_data</span>(data):</div>
          <div className="pl-4 text-pink-400/60"># AI: Consider adding error handling</div>
          <div className="pl-4 text-pink-400">    <span className="text-purple-400">try</span>:</div>
          <div className="pl-8 text-[var(--text-secondary)]">result = transform(data)</div>
          <div className="pl-4 text-purple-400">    <span>except</span> Exception:</div>
          <div className="pl-8 text-[var(--text-secondary)]">logger.error(&quot;Failed&quot;)</div>
        </div>
      </div>
    )
  }

  return null
}
