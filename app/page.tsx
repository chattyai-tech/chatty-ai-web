import type { Metadata } from 'next'
import { HeroInteractive } from '@/components/interactive-hero/HeroInteractive'
import { FeaturesBento } from '@/components/FeaturesBento'
import { SecuritySection } from '@/components/SecuritySection'
import { SystemVideoSection } from '@/components/SystemVideoSection'
import { LogoMarquee } from '@/components/LogoMarquee'
import { CTASection } from '@/components/CTASection'
import { ProductOverview } from '@/components/ProductOverview'
import { UnifiedPlatform } from '@/components/UnifiedPlatform'
import { IntegrationsOrbit } from '@/components/IntegrationsOrbit'
import { Testimonials } from '@/components/Testimonials'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Chatty AI - One clear answer to all your company knowledge',
  description: 'An enterprise-grade AI platform that connects to all organizational data sources (files, systems, databases) to enable secure, internal AI search and workflow automation.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Chatty AI - Enterprise Intelligence Platform',
    description: 'One clear answer to all your company knowledge. Enterprise-grade AI platform with secure, on-premise deployment.',
    url: 'https://chattyai.com',
    siteName: 'Chatty AI',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero - Interactive Product Demo */}
      <HeroInteractive />

      {/* Features/Capabilities - What ChattyAI Does */}
      <ScrollReveal>
        <FeaturesBento />
      </ScrollReveal>

      {/* Unified Platform - Product Areas (ChattyDB, Word, Agents, etc.) */}
      <ScrollReveal delay={0.05}>
        <UnifiedPlatform />
      </ScrollReveal>

      {/* Security - Enterprise Trust */}
      <ScrollReveal delay={0.05}>
        <SecuritySection />
      </ScrollReveal>

      {/* System Video - Calm, system-oriented explainer */}
      <ScrollReveal delay={0.05}>
        <SystemVideoSection />
      </ScrollReveal>

      {/* Integrations - Orbiting Ecosystem */}
      <ScrollReveal delay={0.05}>
        <IntegrationsOrbit />
      </ScrollReveal>

      {/* Product Overview - Technical Specs */}
      <ScrollReveal delay={0.05}>
        <ProductOverview />
      </ScrollReveal>

      {/* Trusted By - Social Proof */}
      <ScrollReveal delay={0.05}>
        <section className="bg-transparent py-4 sm:py-6">
          <div className="text-center mb-6 sm:mb-8 px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">
              Trusted by Forward-Thinking Enterprises
            </h3>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">
              Join organizations already using Chatty AI
            </p>
          </div>
          <LogoMarquee />
        </section>
      </ScrollReveal>

      {/* Final CTA */}
      <CTASection />

      <Testimonials />
    </>
  )
}
