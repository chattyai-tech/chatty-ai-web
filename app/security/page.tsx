'use client'

import { CTASection } from '@/components/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Shield, Server, Lock, Key, FileCheck, Globe, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

const securityLayers = [
  {
    id: 'infrastructure',
    title: 'Infrastructure Security',
    subtitle: 'Your environment, your control',
    description: 'Deploy ChattyAI entirely within your infrastructure. No cloud dependencies, no external data flows. Complete sovereignty over your data and processing.',
    features: ['On-premise deployment', 'Air-gapped capable', 'No internet egress required', 'Private cloud compatible'],
    icon: Server,
  },
  {
    id: 'encryption',
    title: 'Data Encryption',
    subtitle: 'Protected at every stage',
    description: 'Military-grade encryption protects your data whether it is at rest or in transit. AES-256 encryption standard with customer-managed keys.',
    features: ['AES-256 encryption at rest', 'TLS 1.3 in transit', 'Customer-managed keys', 'Hardware security modules'],
    icon: Lock,
  },
  {
    id: 'access',
    title: 'Access Control',
    subtitle: 'Zero-trust by default',
    description: 'Every request is authenticated and authorized. Fine-grained role-based access control that integrates seamlessly with your existing identity provider.',
    features: ['SAML/OIDC SSO', 'Active Directory sync', 'Role-based permissions', 'Multi-factor authentication'],
    icon: Key,
  },
  {
    id: 'audit',
    title: 'Audit & Compliance',
    subtitle: 'Complete visibility',
    description: 'Immutable audit logs capture every query, access, and administrative action. Built-in compliance reporting for regulatory requirements.',
    features: ['Immutable audit logs', 'SOC 2 Type II compliant', 'GDPR ready', 'Custom retention policies'],
    icon: FileCheck,
  },
]

const certifications = [
  { name: 'SOC 2 Type II', status: 'Certified' },
  { name: 'GDPR', status: 'Compliant' },
  { name: 'HIPAA', status: 'Ready' },
  { name: 'ISO 27001', status: 'In Progress' },
]

export default function SecurityPage() {
  const [activeLayer, setActiveLayer] = useState(0)
  const [hoveredCert, setHoveredCert] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      {/* Hero - With Interactive Shield */}
      <section className="relative pt-40 pb-28 bg-[var(--bg-primary)] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[500px] bg-gradient-to-b from-purple-500/15 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium tracking-[0.2em] uppercase text-purple-400 mb-6"
              >
                Security & Compliance
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1] text-[var(--text-primary)] mb-6"
              >
                Your data never
                <br />
                leaves your walls.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl"
              >
                Enterprise-grade security architecture designed for organizations that cannot compromise on data sovereignty.
              </motion.p>
            </div>

            {/* Right - Interactive Shield Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                {/* Outer Ring - Rotating */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-purple-500/30"
                />

                {/* Middle Ring - Counter Rotating */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-6 rounded-full border border-purple-500/20"
                  style={{ borderStyle: 'dotted' }}
                />

                {/* Inner Ring - Pulsing */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-12 rounded-full bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30"
                />

                {/* Shield Icon Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center shadow-2xl shadow-purple-500/30"
                  >
                    <Shield className="w-12 h-12 text-white" />
                  </motion.div>
                </div>

                {/* Orbiting Nodes */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: i * 3.75 }}
                    className="absolute inset-0"
                    style={{ transformOrigin: 'center center' }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"
                    />
                  </motion.div>
                ))}

                {/* Status Labels */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-4 top-1/4 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs font-medium text-[var(--text-primary)]">Encrypted</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -left-4 bottom-1/4 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs font-medium text-[var(--text-primary)]">Protected</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs font-medium text-[var(--text-primary)]">On-Premise</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Security Layers - Interactive Accordion */}
      <ScrollReveal>
        <section className="py-12 sm:py-16 bg-[var(--bg-primary)] border-t border-[var(--border-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left - Section Header */}
              <div className="lg:col-span-4">
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">Security Layers</p>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-6">
                  Defense in depth.
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  Multiple layers of security work together to protect your data. Click each layer to explore.
                </p>

                {/* Layer Navigation */}
                <div className="space-y-2">
                  {securityLayers.map((layer, i) => (
                    <motion.button
                      key={layer.id}
                      onClick={() => setActiveLayer(i)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${activeLayer === i
                        ? 'bg-purple-500/10 border-purple-500/40 shadow-lg shadow-purple-500/10'
                        : 'bg-transparent border-[var(--border-primary)] hover:border-purple-500/20'
                        }`}
                      whileHover={{ x: activeLayer === i ? 0 : 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <layer.icon className={`w-5 h-5 transition-colors ${activeLayer === i ? 'text-purple-400' : 'text-[var(--text-muted)]'}`} />
                          <span className={`font-medium transition-colors ${activeLayer === i ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                            {layer.title}
                          </span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-all ${activeLayer === i ? 'text-purple-400 rotate-90' : 'text-[var(--text-muted)]'}`} />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right - Active Layer Details */}
              <div className="lg:col-span-8" ref={containerRef}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLayer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-3xl p-8 lg:p-12"
                  >
                    <div className="flex items-start gap-5 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-purple-500/15 flex items-center justify-center shrink-0">
                        {(() => {
                          const IconComponent = securityLayers[activeLayer].icon
                          return <IconComponent className="w-7 h-7 text-purple-400" />
                        })()}
                      </div>
                      <div>
                        <p className="text-sm text-purple-400 font-medium mb-1">{securityLayers[activeLayer].subtitle}</p>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)]">{securityLayers[activeLayer].title}</h3>
                      </div>
                    </div>

                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
                      {securityLayers[activeLayer].description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {securityLayers[activeLayer].features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4 }}
                          className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-primary)]"
                        >
                          <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                          <span className="text-sm font-medium text-[var(--text-primary)]">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Trust Statement */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-[var(--bg-surface)] border-y border-[var(--border-primary)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="w-12 h-12 mx-auto mb-6 text-purple-400" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)] leading-tight mb-4">
                Trusted by security-conscious
                <br />
                enterprises worldwide.
              </h2>
              <p className="text-lg text-[var(--text-muted)]">
                From Fortune 500 companies to government agencies.
              </p>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Certifications */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">Compliance</p>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.02em] text-[var(--text-primary)] mb-6">
                  Built for compliance.
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Meet regulatory requirements with confidence. ChattyAI is designed from the ground up to help you maintain compliance with industry standards.
                </p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      onMouseEnter={() => setHoveredCert(i)}
                      onMouseLeave={() => setHoveredCert(null)}
                      className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${hoveredCert === i
                        ? 'bg-purple-500/10 border-purple-500/40 shadow-lg shadow-purple-500/10 -translate-y-1'
                        : 'bg-[var(--bg-card)] border-[var(--border-primary)]'
                        }`}
                    >
                      <motion.div
                        animate={{ scale: hoveredCert === i ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                        className="text-xl font-bold text-[var(--text-primary)] mb-2"
                      >
                        {cert.name}
                      </motion.div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${cert.status === 'Certified'
                        ? 'bg-purple-500/15 text-purple-400'
                        : cert.status === 'Compliant'
                          ? 'bg-blue-500/15 text-blue-400'
                          : 'bg-[var(--bg-surface)] text-[var(--text-muted)]'
                        }`}>
                        {cert.status === 'Certified' && <CheckCircle2 className="w-3 h-3" />}
                        {cert.status}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>


      <CTASection />
    </>
  )
}
