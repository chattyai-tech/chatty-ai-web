'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Server, Database, Network, Shield, Lock, Cloud, Users, FileText, Activity } from 'lucide-react'

export const EnterpriseSystemVisual: React.FC = () => {
  const [hoveredNode, setHoveredNode] = React.useState<string | null>(null)

  const systemNodes = [
    {
      id: 'enterprise',
      label: 'Enterprise',
      icon: Users,
      x: 50,
      y: 50,
      color: 'blue',
      size: 'large'
    },
    {
      id: 'api',
      label: 'API Gateway',
      icon: Network,
      x: 200,
      y: 50,
      color: 'purple',
      size: 'medium'
    },
    {
      id: 'security',
      label: 'Security Layer',
      icon: Shield,
      x: 350,
      y: 50,
      color: 'emerald',
      size: 'medium'
    },
    {
      id: 'core',
      label: 'AI Core',
      icon: Server,
      x: 500,
      y: 50,
      color: 'violet',
      size: 'large'
    },
    {
      id: 'vector',
      label: 'Vector Store',
      icon: Database,
      x: 650,
      y: 30,
      color: 'rose',
      size: 'medium'
    },
    {
      id: 'storage',
      label: 'Data Storage',
      icon: Cloud,
      x: 650,
      y: 70,
      color: 'slate',
      size: 'medium'
    },
    {
      id: 'monitoring',
      label: 'Monitoring',
      icon: Activity,
      x: 500,
      y: 90,
      color: 'amber',
      size: 'small'
    }
  ]

  const connections = [
    { from: 'enterprise', to: 'api' },
    { from: 'api', to: 'security' },
    { from: 'security', to: 'core' },
    { from: 'core', to: 'vector' },
    { from: 'core', to: 'storage' },
    { from: 'core', to: 'monitoring' }
  ]

  const getNodeSize = (size: string) => {
    switch (size) {
      case 'large': return 'w-20 h-20'
      case 'medium': return 'w-16 h-16'
      case 'small': return 'w-12 h-12'
      default: return 'w-16 h-16'
    }
  }

  const getNodeColor = (color: string, isHovered: boolean) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      blue: { bg: isHovered ? 'bg-blue-500/30' : 'bg-blue-500/10', border: 'border-blue-500/50', text: 'text-blue-400' },
      purple: { bg: isHovered ? 'bg-purple-500/30' : 'bg-purple-500/10', border: 'border-purple-500/50', text: 'text-purple-400' },
      emerald: { bg: isHovered ? 'bg-emerald-500/30' : 'bg-emerald-500/10', border: 'border-emerald-500/50', text: 'text-emerald-400' },
      violet: { bg: isHovered ? 'bg-violet-500/30' : 'bg-violet-500/10', border: 'border-violet-500/50', text: 'text-violet-400' },
      rose: { bg: isHovered ? 'bg-rose-500/30' : 'bg-rose-500/10', border: 'border-rose-500/50', text: 'text-rose-400' },
      slate: { bg: isHovered ? 'bg-slate-500/30' : 'bg-slate-500/10', border: 'border-slate-500/50', text: 'text-slate-400' },
      amber: { bg: isHovered ? 'bg-amber-500/30' : 'bg-amber-500/10', border: 'border-amber-500/50', text: 'text-amber-400' }
    }
    return colors[color] || colors.blue
  }

  const getConnectionPath = (fromId: string, toId: string) => {
    const from = systemNodes.find(n => n.id === fromId)
    const to = systemNodes.find(n => n.id === toId)
    if (!from || !to) return ''

    const fromX = from.x + (from.size === 'large' ? 40 : from.size === 'medium' ? 32 : 24)
    const fromY = from.y + (from.size === 'large' ? 40 : from.size === 'medium' ? 32 : 24)
    const toX = to.x + (to.size === 'large' ? 40 : to.size === 'medium' ? 32 : 24)
    const toY = to.y + (to.size === 'large' ? 40 : to.size === 'medium' ? 32 : 24)

    const midX = (fromX + toX) / 2
    const midY = (fromY + toY) / 2

    return `M ${fromX} ${fromY} L ${midX} ${midY} L ${toX} ${toY}`
  }

  return (
    <div className="relative w-full h-full min-h-[500px] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black rounded-2xl overflow-hidden border border-primary/20">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Animated Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ width: '100%', height: '100%' }}>
        <defs>
          <marker
            id="arrowhead-system"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="rgba(139, 92, 246, 0.4)" />
          </marker>
        </defs>
        {connections.map((conn, i) => {
          const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to
          return (
            <motion.path
              key={`${conn.from}-${conn.to}`}
              d={getConnectionPath(conn.from, conn.to)}
              stroke={isHighlighted ? 'rgba(139, 92, 246, 0.8)' : 'rgba(139, 92, 246, 0.2)'}
              strokeWidth={isHighlighted ? 2.5 : 1.5}
              fill="none"
              markerEnd="url(#arrowhead-system)"
              className="transition-all duration-300"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            />
          )
        })}
      </svg>

      {/* Nodes */}
      <div className="relative z-20 p-8" style={{ minHeight: '500px', position: 'relative' }}>
        {systemNodes.map((node) => {
          const colors = getNodeColor(node.color, hoveredNode === node.id)
          const Icon = node.icon
          const size = getNodeSize(node.size)
          return (
            <motion.div
              key={node.id}
              className="absolute"
              style={{ left: `${node.x}px`, top: `${node.y}px` }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: hoveredNode === node.id ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${size} rounded-xl ${colors.bg} border-2 ${colors.border} flex flex-col items-center justify-center transition-all duration-300 cursor-pointer group`}>
                <Icon className={`${node.size === 'large' ? 'w-8 h-8' : node.size === 'medium' ? 'w-6 h-6' : 'w-5 h-5'} ${colors.text} transition-transform group-hover:scale-110`} />
                <span className={`${node.size === 'large' ? 'text-[10px]' : 'text-[9px]'} font-semibold ${colors.text} mt-1 text-center px-1`}>{node.label}</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Status Indicator */}
      <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40">
        <motion.div
          className="w-2 h-2 rounded-full bg-emerald-500"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">System Operational</span>
      </div>
    </div>
  )
}

