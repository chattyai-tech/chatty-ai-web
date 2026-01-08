'use client'

import Image from 'next/image'
import { CTASection } from '@/components/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Users, Code, Rocket, Linkedin, ChevronRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

const teamSections = [
  {
    title: 'Leadership',
    icon: Users,
    description: 'Visionary leaders driving our mission forward',
    color: 'purple',
    members: [
      { name: 'Amiram Amsalem', role: 'CEO & Founder', image: '/shared image (1).jpg', linkedin: 'https://www.linkedin.com/in/amiram-amsalem-510953142/' },
      { name: 'Doron Basson', role: 'VP Business Development', image: '/image.png', linkedin: 'https://www.linkedin.com/in/doron-bason-38917231/' },
      { name: 'Amit Avraham', role: 'Chief Operating Officer', image: '/ChatGPT Image Dec 22, 2025, 12_36_58 PM.png', linkedin: 'https://www.linkedin.com/in/amit-avraham-6899b531/' },
    ],
  },
  {
    title: 'Operations & Delivery',
    icon: Rocket,
    description: 'Ensuring excellence in every deployment',
    color: 'emerald',
    members: [
      { name: 'Neria Cohen', role: 'Delivery Manager', image: '/Generated image.png', linkedin: 'https://www.linkedin.com/in/neriyacohen/' },
      { name: 'Eilon Steinberg', role: 'Project Manager', image: '/ChatGPT Image Dec 22, 2025, 12_36_56 PM.png', linkedin: '#' },
      { name: 'Shani Pasov', role: 'Implementation Developer', image: '/Untitled design (1).jpg', linkedin: 'https://www.linkedin.com/in/shani-passov-9038aa254/' },
    ],
  },
  {
    title: 'Research & Development',
    icon: Code,
    description: 'Engineering the future of enterprise AI',
    color: 'blue',
    members: [
      { name: 'Alexander Kozar', role: 'Head of R&D', image: '/1559048617712 (1).jpg', linkedin: 'https://www.linkedin.com/in/olexandr-kozar-69a256185/' },
      { name: 'Ivan Sazanov', role: 'Senior Software Developer', image: '/1757314202937.jpg', linkedin: 'https://www.linkedin.com/in/iwance/' },
    ],
  },
]

function TeamMemberCard({ member, color, index }: { member: typeof teamSections[0]['members'][0], color: string, index: number }) {
  const [imageError, setImageError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const initials = getInitials(member.name)

  const colors = {
    purple: { ring: 'ring-purple-500', bg: 'from-purple-600 to-violet-600', text: 'text-purple-400' },
    blue: { ring: 'ring-blue-500', bg: 'from-blue-600 to-indigo-600', text: 'text-blue-400' },
    emerald: { ring: 'ring-emerald-500', bg: 'from-emerald-600 to-teal-600', text: 'text-emerald-400' },
  }[color] || { ring: 'ring-purple-500', bg: 'from-purple-600 to-violet-600', text: 'text-purple-400' }

  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col items-center text-center"
    >
      {/* Circular Avatar */}
      <div className="relative mb-5">
        <div className={`relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden transition-all duration-300 ${isHovered ? `ring-4 ${colors.ring}/50 shadow-xl` : 'ring-2 ring-[var(--border-primary)]'}`}>
          {member.image && !imageError ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
              sizes="160px"
              style={{ objectPosition: 'center 20%' }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
              <span className="text-4xl font-black text-white/90">{initials}</span>
            </div>
          )}
        </div>

        {/* LinkedIn Badge */}
        <motion.a
          href={member.linkedin}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center shadow-lg border-2 border-[var(--bg-primary)] hover:scale-110 transition-transform cursor-pointer`}
        >
          <Linkedin className="w-5 h-5 text-white" />
        </motion.a>
      </div>

      {/* Member Info */}
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{member.name}</h3>
      <p className={`text-sm font-medium ${colors.text}`}>{member.role}</p>
    </motion.div>
  )
}

export default function TeamsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-16 bg-[var(--bg-primary)] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[500px] bg-gradient-to-b from-[var(--accent-violet)]/20 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/30 text-[var(--accent-violet)] text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-4 h-4" />
              Our Team
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-5 text-[var(--text-primary)]">
              Meet the Team
            </h1>

            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              A diverse team of experts united by a mission to make enterprise AI accessible and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <div className="bg-[var(--bg-primary)] pb-8">
        {teamSections.map((section, sectionIndex) => (
          <section key={section.title} className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header - Centered */}
              <motion.div 
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="text-center mb-12"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4 ${section.color === 'purple' ? 'bg-purple-500/15' :
                    section.color === 'blue' ? 'bg-blue-500/15' :
                      'bg-emerald-500/15'
                  }`}>
                  <section.icon className={`w-6 h-6 ${section.color === 'purple' ? 'text-purple-400' :
                      section.color === 'blue' ? 'text-blue-400' :
                        'text-emerald-400'
                    }`} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                  {section.title}
                </h2>
                <p className="text-base text-[var(--text-muted)]">{section.description}</p>
              </motion.div>

              {/* Team Members - Centered Flex */}
              <div className="flex flex-wrap justify-center gap-12 md:gap-16">
                {section.members.map((member, memberIndex) => (
                  <TeamMemberCard key={member.name} member={member} color={section.color} index={memberIndex} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Join Us Section */}
      <ScrollReveal delay={0.1}>
        <section className="py-16 bg-[var(--bg-primary)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-3xl p-10 text-center">
              <Sparkles className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
                Join Our Team
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                We're looking for talented individuals passionate about enterprise AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:careers@chattyai.com?subject=Career Inquiry"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  View Positions
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:careers@chattyai.com"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] text-[var(--text-primary)] text-sm font-bold hover:border-purple-500/40 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CTASection />
    </>
  )
}
