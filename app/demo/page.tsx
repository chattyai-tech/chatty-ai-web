import Link from "next/link"
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Calendar, Clock, Shield, Database, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

const demoHighlights = [
  {
    icon: Database,
    title: "Live Product Demo",
    description: "See ChattyDB, Chatty AI, and AI Agents in action with real data.",
  },
  {
    icon: Shield,
    title: "Security Deep Dive",
    description: "Understand our zero-trust architecture, encryption, and compliance features.",
  },
  {
    icon: Users,
    title: "Custom Use Cases",
    description: "Discuss how ChattyAI fits your specific industry and requirements.",
  },
  {
    icon: Clock,
    title: "30-Minute Session",
    description: "Focused walkthrough tailored to your team's needs and questions.",
  },
]

const whatToExpect = [
  "Product overview and key capabilities",
  "Live demonstration with sample data",
  "Security and compliance discussion",
  "Deployment options (cloud/on-prem)",
  "Pricing and implementation timeline",
  "Q&A session with our team",
]

export default function DemoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-16 bg-[var(--bg-primary)]">
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1200px] h-[800px] bg-gradient-to-b from-purple-500/15 via-violet-500/8 to-transparent rounded-full blur-[150px]" />
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-bold tracking-wide uppercase mb-8">
            <Calendar className="w-4 h-4" />
            Schedule a Demo
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.02em] mb-6 leading-[1.1] text-[var(--text-primary)]">
            See ChattyAI
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">In Action</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-10">
            A focused, technical walkthrough tailored to your environment. See how ChattyAI works with your data, infrastructure, and security requirements.
          </p>
        </div>
      </section>

      {/* Main Booking Section */}
      <ScrollReveal>
        <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--bg-primary)]">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-card)] p-6 sm:p-8 md:p-10 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
                  Book Your Demo
                </h2>
                <p className="text-[var(--text-secondary)]">
                  Choose the option that works best for you
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  className="group flex-1 h-12 sm:h-14 px-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[var(--cta-primary-bg)] to-[var(--accent-violet)] text-[var(--cta-primary-text)] text-sm sm:text-base font-semibold hover:from-[var(--cta-primary-hover)] hover:to-[var(--violet-700)] shadow-lg shadow-purple-500/20 transition-all"
                  href="mailto:sales@chattyai.com?subject=ChattyAI%20Demo%20Request"
                >
                  Email sales@chattyai.com
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  className="h-12 sm:h-14 px-6 inline-flex items-center justify-center rounded-xl border border-[var(--border-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-sm sm:text-base font-semibold hover:border-purple-500/40 hover:bg-purple-500/10 transition-colors"
                  href="/security"
                >
                  Review Security
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-surface)]/50 border border-[var(--border-primary)]">
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Prefer a detailed walkthrough?</strong> In your email, include:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Your data sources (databases, documents, APIs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Infrastructure preference (cloud/on-prem/air-gapped)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Required security controls (SSO/SAML, RBAC, audit logs)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Demo Highlights */}
      <ScrollReveal delay={0.1}>
        <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--bg-primary)]">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                What to Expect
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
                Your Demo Includes
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {demoHighlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group p-6 rounded-xl bg-[var(--bg-surface)]/40 backdrop-blur-sm border border-[var(--border-primary)] hover:border-purple-500/40 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{highlight.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* What to Expect Section */}
      <ScrollReveal delay={0.15}>
        <section className="relative py-12 sm:py-16 md:py-20 pb-16 bg-[var(--bg-primary)]">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-surface)]/40 backdrop-blur-sm p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
                Demo Agenda
              </h3>
              <ul className="space-y-4">
                {whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}


