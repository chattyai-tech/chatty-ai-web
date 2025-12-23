'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MessageSquare, Database, FileText, Sparkles, Zap } from 'lucide-react'

export const ProductUIVisual: React.FC = () => {
  const [activePanel, setActivePanel] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActivePanel((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const panels = [
    {
      title: 'Chatty AI',
      icon: Search,
      color: 'from-rose-500 to-pink-400',
      features: ['Document Search', 'Vector Store', 'Context Retrieval']
    },
    {
      title: 'ChattyDB',
      icon: Database,
      color: 'from-blue-500 to-cyan-400',
      features: ['SQL Generation', 'Schema Intelligence', 'Data Analysis']
    },
    {
      title: 'AI Assistant',
      icon: MessageSquare,
      color: 'from-purple-500 to-indigo-400',
      features: ['Natural Language', 'Multi-Source', 'Real-time']
    }
  ]

  return (
    <div className="relative w-full h-full min-h-[500px] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-2xl overflow-hidden border border-primary/20">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3), transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3), transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3), transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3), transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Main UI Panel */}
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-yellow-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            />
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-white">Chatty AI</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          {panels.map((panel, i) => {
            const Icon = panel.icon
            const isActive = activePanel === i
            return (
              <motion.button
                key={panel.title}
                onClick={() => setActivePanel(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-primary/20 border-primary/50 text-white'
                    : 'bg-zinc-800/30 border-zinc-700/30 text-zinc-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs font-semibold">{panel.title}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Active Panel Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex-1 bg-zinc-900/40 rounded-xl border border-zinc-800/50 p-6 overflow-hidden"
          >
            <div className="space-y-4">
              {panels[activePanel].features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800/30 border border-zinc-700/30"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${panels[activePanel].color}`} />
                  <span className="text-sm text-white font-medium">{feature}</span>
                  <motion.div
                    className="ml-auto"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <Zap className="w-4 h-4 text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Search Bar */}
            <motion.div
              className="mt-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-zinc-400" />
                <motion.div
                  className="flex-1 h-8 bg-zinc-900/50 rounded"
                  animate={{
                    background: [
                      'linear-gradient(90deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
                      'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.2) 50%, rgba(139, 92, 246, 0.1) 100%)',
                      'linear-gradient(90deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

