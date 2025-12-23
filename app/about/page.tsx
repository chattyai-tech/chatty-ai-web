'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'

export default function AboutPage() {
  const [hoveredFounder, setHoveredFounder] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      {/* Hero - Parallax Effect */}
      <section ref={heroRef} className="relative pt-40 pb-24 bg-[var(--bg-primary)] overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm font-medium tracking-[0.2em] uppercase text-purple-400 mb-6"
              >
                About Chatty AI
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-[var(--text-primary)]"
              >
                We build AI
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-[var(--text-muted)]"
                >
                  for the enterprise.
                </motion.span>
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:pb-4"
            >
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-md">
                Private. Powerful. Built for organizations that refuse to compromise on security or intelligence.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Problem We Solve */}
      <ScrollReveal>
        <section className="py-12 sm:py-16 bg-[var(--bg-primary)] border-t border-[var(--border-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-4"
              >
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">01 / The Challenge</p>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)] leading-tight">
                  Enterprise knowledge is trapped.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 lg:col-start-6 space-y-6"
              >
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  Organizations have decades of institutional knowledge locked in documents, databases, and systems. Traditional search returns links, not answers. Generic AI hallucinates. Cloud solutions fail security audits.
                </p>
                <p className="text-lg text-[var(--text-primary)] leading-relaxed font-medium">
                  We built ChattyAI because enterprises deserve an AI that works on their terms — deployed on their infrastructure, trained on their data, governed by their policies.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Belief Statement - Theme Aware */}
      <ScrollReveal>
        <section className="py-24 bg-[var(--bg-surface)] border-y border-[var(--border-primary)]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--text-muted)] mb-8"
            >
              What We Believe
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[var(--text-primary)] leading-[1.15]"
            >
              AI should amplify human expertise,
              <br />
              <span className="text-[var(--text-muted)]">not replace it.</span>
            </motion.h2>
          </div>
        </section>
      </ScrollReveal>

      {/* How We're Different - Interactive Cards */}
      <ScrollReveal>
        <section className="py-12 sm:py-16 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">02 / Our Approach</p>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  Built differently.
                </h2>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { num: '01', title: 'On-Premise First', desc: 'Your data never leaves your infrastructure. Full sovereignty, zero compromise.' },
                { num: '02', title: 'Answers, Not Links', desc: 'Synthesized responses with source citations. No more endless document hunting.' },
                { num: '03', title: 'Enterprise Security', desc: 'SOC 2 Type II certified. Role-based access. Complete audit trails.' },
                { num: '04', title: 'Deep Integration', desc: 'Connects to 40+ enterprise systems. SharePoint, Confluence, Salesforce, and more.' },
                { num: '05', title: 'Continuous Learning', desc: 'Gets smarter with every interaction. Reflects your organizational evolution.' },
                { num: '06', title: 'Human in the Loop', desc: 'Designed for collaboration between AI and domain experts.' },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-2xl p-8 lg:p-10 transition-all duration-500 ${hoveredCard === i ? 'border-purple-500/50 shadow-lg shadow-purple-500/10 -translate-y-1' : ''}`}
                >
                  <motion.span
                    animate={{ scale: hoveredCard === i ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className={`text-xs font-mono mb-4 block transition-colors duration-300 ${hoveredCard === i ? 'text-purple-400' : 'text-[var(--text-muted)]'}`}
                  >
                    {item.num}
                  </motion.span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Founders - Enhanced Hover */}
      <ScrollReveal>
        <section className="py-32 bg-[var(--bg-primary)] border-t border-[var(--border-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">03 / Leadership</p>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                  The people behind ChattyAI.
                </h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Amiram Amsalem',
                  role: 'CEO & Founder',
                  image: '/shared image (1).jpg',
                  bio: '15+ years building enterprise AI systems. Previously led AI initiatives at Fortune 100 companies. Believes great technology should be invisible.'
                },
                {
                  name: 'Amit Avraham',
                  role: 'Chief Operating Officer',
                  image: '/ChatGPT Image Dec 22, 2025, 12_36_58 PM.png',
                  bio: 'Technical architect specializing in scalable AI infrastructure. Deep expertise in enterprise security and compliance frameworks.'
                }
              ].map((founder, i) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredFounder(i)}
                  onMouseLeave={() => setHoveredFounder(null)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden mb-4 max-w-[200px] sm:max-w-[220px] mx-auto">
                    <motion.div
                      animate={{ scale: hoveredFounder === i ? 1.02 : 1 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center 15%' }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredFounder === i ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"
                    />
                  </div>
                  <motion.div
                    animate={{ y: hoveredFounder === i ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3 text-center"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{founder.name}</h3>
                      <span className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${hoveredFounder === i ? 'text-purple-400' : 'text-[var(--text-muted)]'}`}>{founder.role}</span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{founder.bio}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Numbers - Theme Aware */}
      <ScrollReveal>
        <section className="py-12 sm:py-16 bg-[var(--bg-surface)] border-y border-[var(--border-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[var(--border-primary)]">
              {[
                { value: '100+', label: 'Enterprise Deployments' },
                { value: '50M+', label: 'Documents Indexed' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '2021', label: 'Founded' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center lg:px-8 cursor-default"
                >
                  <motion.div
                    className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-2 tracking-tight"
                    whileHover={{ color: 'rgb(168, 85, 247)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Join Us */}
      <ScrollReveal>
        <section className="py-32 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">04 / Careers</p>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-6">
                  Build the future with us.
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                  We are assembling a team of exceptional engineers, researchers, and operators who believe enterprise AI can be better. Remote-first, globally distributed.
                </p>
                <Link
                  href="/teams"
                  className="inline-flex items-center gap-3 text-[var(--text-primary)] font-medium group"
                >
                  <motion.span
                    className="border-b border-[var(--text-primary)] pb-1 group-hover:border-purple-400 group-hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View open positions
                  </motion.span>
                  <ArrowUpRight className="w-5 h-5 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </motion.div>
              <div className="grid grid-cols-2 gap-4">
                {['Engineering', 'Product', 'Sales', 'Operations'].map((dept, i) => (
                  <motion.div
                    key={dept}
                    initial={{ opacity: 0, y: 30, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)' }}
                    className="bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-xl p-6 hover:border-purple-500/40 transition-colors group cursor-pointer"
                  >
                    <motion.div
                      className="text-2xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      {i + 1}
                    </motion.div>
                    <div className="text-sm text-[var(--text-muted)]">{dept} roles</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CTASection />
    </>
  )
}
