'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Database, Zap, FileCode, Check, ArrowRight } from 'lucide-react'

const features = [
  {
    id: 'smart-search',
    icon: <FileText className="w-6 h-6" />,
    title: 'Smart Search',
    description: 'Natural language interface (similar to ChatGPT) grounded in company data.',
    points: [
      'ChatGPT-like interface for your company knowledge',
      'Accurate, cited answers from internal sources',
      'Understands context from millions of documents'
    ],
    gradient: 'from-[var(--accent-violet)]/15 to-[var(--accent-electric)]/5',
    iconColor: 'text-[var(--accent-violet)]',
    borderColor: 'hover:border-[var(--accent-violet)]/30',
    accentBg: 'bg-[var(--accent-violet)]/10',
  },
];

export const ProductFeatureGrid: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 relative transition-colors duration-300">
      {/* Background Gradient - Responsive sizing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[900px] h-[300px] sm:h-[450px] md:h-[700px] bg-[var(--accent-violet)]/5 rounded-full blur-[80px] sm:blur-[120px] md:blur-[160px] pointer-events-none" />
      
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header - Enterprise styling */}
        <motion.div variants={headerVariants} className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/20 text-[var(--accent-violet)] text-[10px] sm:text-xs font-bold tracking-wide uppercase mb-4 sm:mb-6 md:mb-8">
            <Zap className="w-3 sm:w-4 h-3 sm:h-4" />
            Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-[var(--text-primary)] mb-4 sm:mb-6 tracking-[-0.02em] leading-[1.1]">
            A Single Intelligent Interface
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
            Every document. Every database. Every system.{' '}
            <span className="text-[var(--text-primary)] font-semibold">All connected.</span>
          </p>
        </motion.div>

          {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                transition: { duration: 0.3, ease: 'easeOut' } 
              }}
              className={`group relative p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-primary)] ${feature.borderColor} hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl ${feature.accentBg} border border-[var(--border-primary)] flex items-center justify-center mb-4 sm:mb-5 md:mb-7 ${feature.iconColor}`}
                >
                  {feature.icon}
                </motion.div>
                
                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-5 sm:mb-6 md:mb-7 leading-relaxed">{feature.description}</p>
                
                {/* Feature Points */}
                <ul className="space-y-2.5 sm:space-y-3 md:space-y-3.5 mb-6 sm:mb-7 md:mb-8">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 sm:gap-3 md:gap-3.5 group/item">
                      <div className={`mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full ${feature.accentBg} border border-[var(--border-primary)] flex items-center justify-center ${feature.iconColor} shrink-0 group-hover/item:scale-110 transition-transform duration-200`}>
                        <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                      </div>
                      <span className="text-[var(--text-secondary)] text-xs sm:text-sm group-hover/item:text-[var(--text-primary)] transition-colors duration-200 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <motion.button 
                  whileHover={{ x: 4 }}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold min-h-[32px] ${feature.iconColor} hover:text-[var(--text-primary)] transition-colors duration-300 group/btn touch-manipulation`}
                >
                  Learn More
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
