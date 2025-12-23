'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { PanInfo } from 'framer-motion'
import { Database, Network, Shield, Lock, Cloud, Users, Activity, Zap, GripVertical, ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react'

interface ArchitectureNode {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  description: string
  connections: string[]
  layer: 'network' | 'api' | 'security' | 'core' | 'storage' | 'monitoring'
}

interface NodePosition {
  x: number
  y: number
}

// Apple-style easing: smooth, natural motion
const APPLE_EASE = [0.16, 1, 0.3, 1] as const
// Material Design easing: snappy, responsive
const MATERIAL_EASE = [0.4, 0, 0.2, 1] as const

// Animation durations (systematic)
const DURATION_MICRO = 0.15
const DURATION_COMPLEX = 0.4
const DURATION_FLOW = 2.0

export const EnterpriseArchitectureVisual: React.FC = () => {
  const [hoveredNode, setHoveredNode] = React.useState<string | null>(null)
  const [activeFlow, setActiveFlow] = React.useState<string | null>(null)
  const [focusedNode, setFocusedNode] = React.useState<string | null>(null)
  const [clickedNode, setClickedNode] = React.useState<string | null>(null)
  const [draggingNode, setDraggingNode] = React.useState<string | null>(null)
  const [hoveredConnection, setHoveredConnection] = React.useState<string | null>(null)
  const [clickedConnection, setClickedConnection] = React.useState<string | null>(null)
  const [zoom, setZoom] = React.useState(1)
  const [pan, setPan] = React.useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = React.useState(false)
  const [lastPanPoint, setLastPanPoint] = React.useState({ x: 0, y: 0 })
  const [isSpacePressed, setIsSpacePressed] = React.useState(false)
  const arrowMarkerId = React.useId()
  const glowFilterId = React.useId()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)

  // Clean horizontal pipeline - left to right flow
  const nodes: ArchitectureNode[] = [
    {
      id: 'users',
      label: 'Enterprise Users',
      icon: Users,
      color: 'blue',
      description: 'Internal teams accessing the platform via secure authentication',
      connections: ['gateway'],
      layer: 'network'
    },
    {
      id: 'gateway',
      label: 'API Gateway',
      icon: Network,
      color: 'emerald',
      description: 'Unified entry point with rate limiting, routing, and load balancing',
      connections: ['security'],
      layer: 'api'
    },
    {
      id: 'security',
      label: 'Security Layer',
      icon: Shield,
      color: 'amber',
      description: 'Zero-trust authentication, authorization, and encryption enforcement',
      connections: ['core'],
      layer: 'security'
    },
    {
      id: 'core',
      label: 'AI Core Engine',
      icon: Zap,
      color: 'violet',
      description: 'Vector search, RAG pipeline, and AI inference engine',
      connections: ['vector', 'storage', 'monitoring'],
      layer: 'core'
    },
    {
      id: 'vector',
      label: 'Vector Store',
      icon: Database,
      color: 'rose',
      description: 'High-performance vector database for semantic search',
      connections: [],
      layer: 'storage'
    },
    {
      id: 'storage',
      label: 'On-Prem Storage',
      icon: Cloud,
      color: 'slate',
      description: 'Customer-controlled data storage with encryption at rest',
      connections: [],
      layer: 'storage'
    },
    {
      id: 'monitoring',
      label: 'Observability',
      icon: Activity,
      color: 'cyan',
      description: 'Real-time monitoring, logging, and audit trails',
      connections: [],
      layer: 'monitoring'
    }
  ]

  // Initial positions for nodes
  const getInitialPosition = React.useCallback((_nodeId: string, index: number, isStorage = false): NodePosition => {
    const cardWidth = 160
    const cardSpacing = 24
    const baseX = 80 + index * (cardWidth + cardSpacing)
    const baseY = isStorage ? 220 : 120
    return { 
      x: baseX, 
      y: baseY
    }
  }, [])

  // Node positions state - initialized with default positions
  const [nodePositions, setNodePositions] = React.useState<Record<string, NodePosition>>(() => {
    const positions: Record<string, NodePosition> = {}
    const mainPipeline = nodes.filter(n => ['users', 'gateway', 'security', 'core', 'monitoring'].includes(n.id))
    const storageNodes = nodes.filter(n => ['vector', 'storage'].includes(n.id))
    
    mainPipeline.forEach((node, index) => {
      positions[node.id] = getInitialPosition(node.id, index, false)
    })
    
    storageNodes.forEach((node, index) => {
      positions[node.id] = getInitialPosition(node.id, 4 + index, true)
    })
    
    return positions
  })

  // Color system using systematic opacity scale
  const getNodeColor = (color: string, isHovered: boolean, isFocused: boolean, isCore: boolean) => {
    const state = isFocused ? 'active' : isHovered ? 'hover' : 'default'
    const baseOpacity = isCore ? 0.12 : 0.06
    const hoverOpacity = isCore ? 0.20 : 0.12
    const activeOpacity = isCore ? 0.24 : 0.18

    const bgOpacity = state === 'active' ? activeOpacity : state === 'hover' ? hoverOpacity : baseOpacity
    const borderOpacity = state === 'active' ? 0.48 : state === 'hover' ? 0.32 : 0.16

    const colors: Record<string, { bg: string; border: string; text: string; iconBg: string; glow: string }> = {
      blue: { 
        bg: `rgba(59, 130, 246, ${bgOpacity})`, 
        border: `rgba(59, 130, 246, ${borderOpacity})`, 
        text: 'rgb(147, 197, 253)',
        iconBg: `rgba(59, 130, 246, ${bgOpacity * 2})`,
        glow: 'rgba(59, 130, 246, 0.3)'
      },
      emerald: { 
        bg: `rgba(16, 185, 129, ${bgOpacity})`, 
        border: `rgba(16, 185, 129, ${borderOpacity})`, 
        text: 'rgb(110, 231, 183)',
        iconBg: `rgba(16, 185, 129, ${bgOpacity * 2})`,
        glow: 'rgba(16, 185, 129, 0.3)'
      },
      amber: { 
        bg: `rgba(245, 158, 11, ${bgOpacity})`, 
        border: `rgba(245, 158, 11, ${borderOpacity})`, 
        text: 'rgb(252, 211, 77)',
        iconBg: `rgba(245, 158, 11, ${bgOpacity * 2})`,
        glow: 'rgba(245, 158, 11, 0.3)'
      },
      violet: { 
        bg: `rgba(139, 92, 246, ${bgOpacity})`, 
        border: `rgba(139, 92, 246, ${borderOpacity})`, 
        text: 'rgb(196, 181, 253)',
        iconBg: `rgba(139, 92, 246, ${bgOpacity * 2})`,
        glow: 'rgba(139, 92, 246, 0.4)'
      },
      rose: { 
        bg: `rgba(244, 63, 94, ${bgOpacity})`, 
        border: `rgba(244, 63, 94, ${borderOpacity})`, 
        text: 'rgb(251, 146, 60)',
        iconBg: `rgba(244, 63, 94, ${bgOpacity * 2})`,
        glow: 'rgba(244, 63, 94, 0.3)'
      },
      slate: { 
        bg: `rgba(148, 163, 184, ${bgOpacity})`, 
        border: `rgba(148, 163, 184, ${borderOpacity})`, 
        text: 'rgb(203, 213, 225)',
        iconBg: `rgba(148, 163, 184, ${bgOpacity * 2})`,
        glow: 'rgba(148, 163, 184, 0.3)'
      },
      cyan: { 
        bg: `rgba(6, 182, 212, ${bgOpacity})`, 
        border: `rgba(6, 182, 212, ${borderOpacity})`, 
        text: 'rgb(103, 232, 249)',
        iconBg: `rgba(6, 182, 212, ${bgOpacity * 2})`,
        glow: 'rgba(6, 182, 212, 0.3)'
      }
    }
    return colors[color] || colors.blue
  }

  // Auto-animate flow with proper timing
  React.useEffect(() => {
    const interval = setInterval(() => {
      const flowOrder = ['users', 'gateway', 'security', 'core']
      let currentIndex = 0
      
      const animateFlow = () => {
        if (currentIndex < flowOrder.length - 1) {
          setActiveFlow(`${flowOrder[currentIndex]}-${flowOrder[currentIndex + 1]}`)
          currentIndex++
          setTimeout(animateFlow, 800)
        } else {
          setActiveFlow(null)
        }
      }
      
      animateFlow()
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  // Main horizontal pipeline nodes
  const mainPipeline = nodes.filter(n => ['users', 'gateway', 'security', 'core', 'monitoring'].includes(n.id))
  const storageNodes = nodes.filter(n => ['vector', 'storage'].includes(n.id))

  // Get connection path between two nodes
  const getConnectionPath = React.useCallback((fromId: string, toId: string): string => {
    const fromPos = nodePositions[fromId]
    const toPos = nodePositions[toId]
    
    if (!fromPos || !toPos) return ''
    
    // Calculate center points of nodes
    const fromX = fromPos.x + 80 // half of card width (160/2)
    const fromY = fromPos.y + 56 // half of card height (112/2)
    const toX = toPos.x + 80
    const toY = toPos.y + 56
    
    // Check if nodes are on same row (horizontal connection)
    if (Math.abs(fromY - toY) < 50) {
      // Horizontal connection with smooth curve
      const midX = (fromX + toX) / 2
      return `M ${fromX} ${fromY} C ${midX} ${fromY}, ${midX} ${toY}, ${toX} ${toY}`
    } else {
      // Vertical connection (L-shaped)
      const midY = (fromY + toY) / 2
      return `M ${fromX} ${fromY} L ${fromX} ${midY} L ${toX} ${midY} L ${toX} ${toY}`
    }
  }, [nodePositions])

  // Handle drag start
  const handleDragStart = React.useCallback((nodeId: string) => {
    setDraggingNode(nodeId)
    setHoveredNode(nodeId)
  }, [])

  // Handle drag end
  const handleDragEnd = React.useCallback((nodeId: string, _event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDraggingNode(null)
    
    // Update position based on drag
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const currentPos = nodePositions[nodeId] || { x: 0, y: 0 }
      const newX = currentPos.x + info.delta.x
      const newY = currentPos.y + info.delta.y
      
      // Constrain to container bounds
      const constrainedX = Math.max(0, Math.min(newX, rect.width - 160))
      const constrainedY = Math.max(0, Math.min(newY, rect.height - 112))
      
      setNodePositions(prev => ({
        ...prev,
        [nodeId]: { x: constrainedX, y: constrainedY }
      }))
    }
  }, [nodePositions])

  // Handle keyboard navigation
  const handleKeyDown = React.useCallback((e: React.KeyboardEvent, nodeId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setFocusedNode(nodeId)
      setHoveredNode(nodeId)
      setClickedNode(nodeId)
      setTimeout(() => setClickedNode(null), 300)
    } else if (e.key === 'Escape') {
      setFocusedNode(null)
      setHoveredNode(null)
      setClickedNode(null)
    }
  }, [])

  // Handle click interaction
  const handleNodeClick = React.useCallback((nodeId: string) => {
    console.log(`✅ CLICKED: ${nodeId}`)
    setClickedNode(nodeId)
    setHoveredNode(nodeId)
    setTimeout(() => setClickedNode(null), 400)
  }, [])

  // Handle connection click
  const handleConnectionClick = React.useCallback((connectionId: string) => {
    console.log(`✅ CONNECTION CLICKED: ${connectionId}`)
    setClickedConnection(connectionId)
    setTimeout(() => setClickedConnection(null), 400)
  }, [])

  // Zoom handlers
  const handleZoomIn = React.useCallback(() => {
    setZoom(prev => Math.min(prev + 0.25, 3))
  }, [])

  const handleZoomOut = React.useCallback(() => {
    setZoom(prev => Math.max(prev - 0.25, 0.5))
  }, [])

  const handleResetView = React.useCallback(() => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }, [])

  // Mouse wheel zoom
  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return
      
      // Check if mouse is over the container
      const rect = containerRef.current.getBoundingClientRect()
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return
      }

      e.preventDefault()
      
      if (e.ctrlKey || e.metaKey) {
        // Zoom with Ctrl/Cmd + Wheel
        const delta = e.deltaY > 0 ? -0.1 : 0.1
        setZoom(prev => Math.max(0.5, Math.min(3, prev + delta)))
      } else if (e.shiftKey) {
        // Horizontal pan with Shift + Wheel
        setPan(prev => ({
          x: prev.x - e.deltaY,
          y: prev.y
        }))
      } else {
        // Vertical pan with Wheel
        setPan(prev => ({
          x: prev.x,
          y: prev.y - e.deltaY
        }))
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      return () => container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  // Track space key for panning
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Space') {
        setIsSpacePressed(true)
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Space') {
        setIsSpacePressed(false)
        setIsPanning(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  // Pan handlers
  const handlePanStart = React.useCallback((e: React.MouseEvent) => {
    if (e.button === 1 || (e.button === 0 && (isSpacePressed || e.altKey))) {
      e.preventDefault()
      setIsPanning(true)
      setLastPanPoint({ x: e.clientX, y: e.clientY })
    }
  }, [isSpacePressed])

  const handlePanMove = React.useCallback((e: MouseEvent) => {
    if (isPanning) {
      const dx = e.clientX - lastPanPoint.x
      const dy = e.clientY - lastPanPoint.y
      setPan(prev => ({
        x: prev.x + dx,
        y: prev.y + dy
      }))
      setLastPanPoint({ x: e.clientX, y: e.clientY })
    }
  }, [isPanning, lastPanPoint])

  const handlePanEnd = React.useCallback(() => {
    setIsPanning(false)
  }, [])

  // Global pan handlers
  React.useEffect(() => {
    if (isPanning) {
      window.addEventListener('mousemove', handlePanMove)
      window.addEventListener('mouseup', handlePanEnd)
      return () => {
        window.removeEventListener('mousemove', handlePanMove)
        window.removeEventListener('mouseup', handlePanEnd)
      }
    }
  }, [isPanning, handlePanMove, handlePanEnd])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-[600px] bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/50"
      style={{ 
        padding: 'var(--space-4, 2rem)',
        isolation: 'isolate',
        cursor: isPanning ? 'grabbing' : (isSpacePressed ? 'grab' : 'default')
      }}
      onMouseDown={(e) => {
        // Only pan if middle mouse button or space + left click
        if (e.button === 1 || (e.button === 0 && isSpacePressed)) {
          handlePanStart(e)
        }
      }}
      role="application"
      aria-label="Interactive architecture diagram with zoom and pan controls"
    >
      {/* Zoom Controls */}
      <div className="absolute top-4 left-4 z-50 flex flex-col gap-2">
        <div className="flex flex-col items-center gap-1 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-1.5 shadow-xl">
          <button
            type="button"
            onClick={handleZoomIn}
            className="w-8 h-8 rounded-md flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
            title="Zoom In (Ctrl + Scroll)"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <div className="w-12 h-6 flex items-center justify-center">
            <span className="text-[10px] font-medium text-zinc-400">
              {Math.round(zoom * 100)}%
            </span>
          </div>
          <button
            type="button"
            onClick={handleZoomOut}
            className="w-8 h-8 rounded-md flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
            title="Zoom Out (Ctrl + Scroll)"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <div className="w-full h-px bg-zinc-800/50 my-1" />
          <button
            type="button"
            onClick={handleResetView}
            className="w-8 h-8 rounded-md flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
            title="Reset View"
            aria-label="Reset zoom and pan"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
        <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-1.5 shadow-xl">
          <div className="w-8 h-8 rounded-md flex items-center justify-center text-zinc-400 pointer-events-none" title="Pan: Space + Drag or Middle Mouse">
            <Move className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Content Container with Transform */}
      <div
        ref={contentRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: 'center center',
          transition: isPanning ? 'none' : 'transform 0.2s ease-out'
        }}
      >
      {/* Connection Lines - Dynamic SVG with real-time updates - INTERACTIVE */}
      <svg 
        className="absolute inset-0 w-full h-full z-[1]" 
        style={{ width: '100%', height: '100%' }}
        viewBox="0 0 1000 320"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Enterprise architecture diagram showing system components and connections"
      >
        <title>Enterprise Architecture Diagram</title>
        <defs>
          <marker
            id={arrowMarkerId}
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <polygon 
              points="0 0, 8 4, 0 8" 
              fill="rgba(139, 92, 246, 0.4)" 
            />
          </marker>
          {/* Glow filter for active connections */}
          <filter id={glowFilterId}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main horizontal pipeline connections - INTERACTIVE */}
        {mainPipeline.map((node, index) => {
          if (index < mainPipeline.length - 1) {
            const nextNode = mainPipeline[index + 1]
            const connectionId = `${node.id}-${nextNode.id}`
            const isNodeHighlighted = hoveredNode === node.id || hoveredNode === nextNode.id || clickedNode === node.id || clickedNode === nextNode.id || draggingNode === node.id || draggingNode === nextNode.id
            const isConnectionHovered = hoveredConnection === connectionId
            const isConnectionClicked = clickedConnection === connectionId
            const isActiveFlow = activeFlow === connectionId
            const isHighlighted = isNodeHighlighted || isConnectionHovered || isConnectionClicked
            
            const path = getConnectionPath(node.id, nextNode.id)
            if (!path) return null
            
            return (
              <g key={connectionId}>
                {/* Invisible wider path for easier interaction */}
                <motion.path
                  d={path}
                  stroke="transparent"
                  strokeWidth="20"
                  fill="none"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredConnection(connectionId)}
                  onMouseLeave={() => setHoveredConnection(null)}
                  onClick={() => handleConnectionClick(connectionId)}
                  style={{ pointerEvents: 'auto' }}
                />
                {/* Visible connection path */}
                <motion.path
                  d={path}
                  stroke={isHighlighted || isActiveFlow ? 'rgba(139, 92, 246, 0.8)' : 'rgba(139, 92, 246, 0.12)'}
                  strokeWidth={isHighlighted || isActiveFlow ? 3 : 1}
                  strokeDasharray={isHighlighted || isActiveFlow ? '0' : '4,4'}
                  fill="none"
                  markerEnd={`url(#${arrowMarkerId})`}
                  filter={isActiveFlow || isConnectionHovered || isConnectionClicked ? `url(#${glowFilterId})` : undefined}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: isHighlighted || isActiveFlow ? 1 : 0.6 
                  }}
                  transition={{ 
                    duration: DURATION_COMPLEX,
                    ease: MATERIAL_EASE
                  }}
                  style={{ pointerEvents: 'none' }}
                />
                {/* Animated flow dot */}
                {(isActiveFlow || isHighlighted) && (
                  <motion.circle
                    r="3"
                    fill="rgba(139, 92, 246, 0.95)"
                    initial={{ offsetDistance: '0%' }}
                    animate={{ offsetDistance: '100%' }}
                    transition={{ 
                      duration: DURATION_FLOW, 
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    style={{ pointerEvents: 'none' }}
                  >
                    <animateMotion
                      dur={`${DURATION_FLOW}s`}
                      repeatCount="indefinite"
                      path={path}
                    />
                  </motion.circle>
                )}
                {/* Connection label on hover */}
                {isConnectionHovered && (() => {
                  const fromPos = nodePositions[node.id] || { x: 0, y: 0 }
                  const toPos = nodePositions[nextNode.id] || { x: 0, y: 0 }
                  const midX = (fromPos.x + toPos.x + 160) / 2
                  const midY = (fromPos.y + toPos.y + 112) / 2
                  return (
                    <motion.text
                      x={midX}
                      y={midY - 8}
                      textAnchor="middle"
                      fill="rgba(139, 92, 246, 0.9)"
                      fontSize="10"
                      fontWeight="600"
                      style={{ pointerEvents: 'none' }}
                      initial={{ opacity: 0, y: midY - 13 }}
                      animate={{ opacity: 1, y: midY - 8 }}
                      transition={{ duration: DURATION_MICRO }}
                    >
                      {node.label} → {nextNode.label}
                    </motion.text>
                  )
                })()}
              </g>
            )
          }
          return null
        })}

        {/* Vertical connections from Core to Storage - INTERACTIVE */}
        {storageNodes.map((node) => {
          const connectionId = `core-${node.id}`
          const isNodeHighlighted = hoveredNode === 'core' || hoveredNode === node.id || clickedNode === 'core' || clickedNode === node.id || draggingNode === 'core' || draggingNode === node.id
          const isConnectionHovered = hoveredConnection === connectionId
          const isConnectionClicked = clickedConnection === connectionId
          const isHighlighted = isNodeHighlighted || isConnectionHovered || isConnectionClicked
          const path = getConnectionPath('core', node.id)
          if (!path) return null
          
          return (
            <g key={connectionId}>
              {/* Invisible wider path for easier interaction */}
              <motion.path
                d={path}
                stroke="transparent"
                strokeWidth="20"
                fill="none"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredConnection(connectionId)}
                onMouseLeave={() => setHoveredConnection(null)}
                onClick={() => handleConnectionClick(connectionId)}
                style={{ pointerEvents: 'auto' }}
              />
              {/* Visible connection path */}
              <motion.path
                d={path}
                stroke={isHighlighted ? 'rgba(139, 92, 246, 0.6)' : 'rgba(139, 92, 246, 0.1)'}
                strokeWidth={isHighlighted ? 2.5 : 0.8}
                strokeDasharray="3,3"
                fill="none"
                markerEnd={`url(#${arrowMarkerId})`}
                filter={isConnectionHovered || isConnectionClicked ? `url(#${glowFilterId})` : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: isHighlighted ? 0.8 : 0.5 
                }}
                transition={{ 
                  duration: DURATION_COMPLEX,
                  ease: MATERIAL_EASE
                }}
                style={{ pointerEvents: 'none' }}
              />
              {/* Connection label on hover */}
              {isConnectionHovered && (() => {
                const fromPos = nodePositions['core'] || { x: 0, y: 0 }
                const toPos = nodePositions[node.id] || { x: 0, y: 0 }
                const midX = (fromPos.x + toPos.x + 160) / 2
                const midY = (fromPos.y + toPos.y + 112) / 2
                return (
                  <motion.text
                    x={midX}
                    y={midY - 8}
                    textAnchor="middle"
                    fill="rgba(139, 92, 246, 0.9)"
                    fontSize="10"
                    fontWeight="600"
                    style={{ pointerEvents: 'none' }}
                    initial={{ opacity: 0, y: midY - 13 }}
                    animate={{ opacity: 1, y: midY - 8 }}
                    transition={{ duration: DURATION_MICRO }}
                  >
                    Core → {node.label}
                  </motion.text>
                )
              })()}
            </g>
          )
        })}
      </svg>

      {/* Architecture Nodes - Draggable */}
      <div className="relative z-[2] h-full flex flex-col justify-center">
        {/* Main Horizontal Pipeline */}
        <div 
          className="flex items-center justify-center gap-6 mb-12"
          style={{ gap: 'var(--space-3, 1.5rem)' }}
        >
          {mainPipeline.map((node) => {
            const isCore = node.id === 'core'
            const isHovered = hoveredNode === node.id
            const isFocused = focusedNode === node.id
            const isClicked = clickedNode === node.id
            const isDragging = draggingNode === node.id
            const isActive = isHovered || isFocused || isClicked || isDragging
            const colors = getNodeColor(node.color, isActive, isFocused, isCore)
            const Icon = node.icon
            const position = nodePositions[node.id] || getInitialPosition(node.id, mainPipeline.indexOf(node), false)
            
            return (
              <motion.button
                key={node.id}
                type="button"
                className="relative flex flex-col items-center justify-center bg-transparent border-none p-0 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-lg touch-manipulation"
                style={{ 
                  width: '160px',
                  height: '112px',
                  backgroundColor: colors.bg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '0.5rem',
                  boxShadow: isActive 
                    ? `0 8px 16px rgba(0, 0, 0, 0.2), 0 0 0 1px ${colors.glow}, 0 0 20px ${colors.glow}40` 
                    : '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: isDragging ? 'none' : `all ${DURATION_MICRO}s cubic-bezier(${MATERIAL_EASE.join(', ')})`,
                  zIndex: isDragging ? 50 : 3,
                  pointerEvents: 'auto',
                  position: 'absolute',
                  left: `${position.x}px`,
                  top: `${position.y}px`
                }}
                drag
                dragMomentum={false}
                dragConstraints={containerRef}
                dragElastic={0.1}
                onDragStart={() => handleDragStart(node.id)}
                onDragEnd={(e, info) => handleDragEnd(node.id, e, info)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => {
                  if (!isFocused && !isDragging) setHoveredNode(null)
                }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleNodeClick(node.id)
                }}
                onFocus={() => setFocusedNode(node.id)}
                onBlur={() => setFocusedNode(null)}
                onKeyDown={(e) => handleKeyDown(e, node.id)}
                aria-label={`${node.label}: ${node.description}. Drag to reposition.`}
                aria-pressed={isActive}
                whileHover={{ scale: isCore ? 1.03 : 1.02 }}
                whileTap={{ scale: 0.96 }}
                whileDrag={{ 
                  scale: 1.05,
                  zIndex: 50,
                  boxShadow: `0 12px 24px rgba(0, 0, 0, 0.3), 0 0 0 2px ${colors.glow}, 0 0 30px ${colors.glow}60`
                }}
              >
                {/* Drag handle indicator */}
                {isHovered && (
                  <div className="absolute top-1 right-1 opacity-50 pointer-events-none">
                    <GripVertical className="w-3 h-3" style={{ color: colors.text }} />
                  </div>
                )}

                {/* Glow effect for core node */}
                {isCore && isActive && (
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${colors.glow} 0%, transparent 70%)`,
                      opacity: 0.6
                    }}
                  />
                )}
                
                <div 
                  className="pointer-events-none"
                  style={{
                    width: isCore ? '48px' : '40px',
                    height: isCore ? '48px' : '40px',
                    backgroundColor: colors.iconBg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: `transform ${DURATION_MICRO}s cubic-bezier(${MATERIAL_EASE.join(', ')})`,
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                    pointerEvents: 'none'
                  }}
                >
                  <div style={{ color: colors.text, pointerEvents: 'none' }}>
                    <Icon className={isCore ? 'w-6 h-6' : 'w-5 h-5'} />
                  </div>
                </div>
                
                <span 
                  className="pointer-events-none"
                  style={{ 
                    color: colors.text,
                    fontSize: isCore ? 'var(--font-size-sm, 0.9375rem)' : 'var(--font-size-xs, 0.875rem)',
                    fontWeight: 500,
                    textAlign: 'center',
                    padding: '0 0.5rem',
                    marginTop: '0.75rem',
                    pointerEvents: 'none'
                  }}
                >
                  {node.label}
                </span>

                {/* Click ripple effect */}
                {isClicked && (
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${colors.glow}60 0%, transparent 70%)`,
                      animation: 'ripple 0.4s ease-out'
                    }}
                  />
                )}

                {/* Premium Tooltip */}
                <AnimatePresence>
                  {isActive && !isDragging && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.96 }}
                      transition={{ 
                        duration: DURATION_MICRO,
                        ease: MATERIAL_EASE
                      }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-3 rounded-lg bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/50 shadow-xl z-30 pointer-events-none"
                      style={{
                        fontSize: 'var(--font-size-xs, 0.875rem)'
                      }}
                    >
                      <p className="text-zinc-300 text-center leading-relaxed">{node.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </div>

        {/* Storage Layer - Below Core */}
        <div className="flex items-center justify-center gap-6">
          {/* Spacers for alignment with main pipeline */}
          <div className="w-40" />
          <div className="w-40" />
          <div className="w-40" />
          <div className="flex gap-6" style={{ gap: 'var(--space-3, 1.5rem)' }}>
            {storageNodes.map((node) => {
              const isHovered = hoveredNode === node.id
              const isFocused = focusedNode === node.id
              const isClicked = clickedNode === node.id
              const isDragging = draggingNode === node.id
              const isActive = isHovered || isFocused || isClicked || isDragging
              const colors = getNodeColor(node.color, isActive, isFocused, false)
              const Icon = node.icon
              const position = nodePositions[node.id] || getInitialPosition(node.id, storageNodes.indexOf(node) + 4, true)
              
              return (
                <motion.button
                  key={node.id}
                  type="button"
                  className="relative flex flex-col items-center justify-center bg-transparent border-none p-0 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-lg touch-manipulation"
                  style={{ 
                    width: '128px',
                    height: '88px',
                    backgroundColor: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: '0.5rem',
                    boxShadow: isActive 
                      ? `0 8px 16px rgba(0, 0, 0, 0.2), 0 0 15px ${colors.glow}40` 
                      : '0 2px 4px rgba(0, 0, 0, 0.1)',
                    transition: isDragging ? 'none' : `all ${DURATION_MICRO}s cubic-bezier(${MATERIAL_EASE.join(', ')})`,
                    zIndex: isDragging ? 50 : 3,
                    pointerEvents: 'auto',
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`
                  }}
                  drag
                  dragMomentum={false}
                  dragConstraints={containerRef}
                  dragElastic={0.1}
                  onDragStart={() => handleDragStart(node.id)}
                  onDragEnd={(e, info) => handleDragEnd(node.id, e, info)}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => {
                    if (!isFocused && !isDragging) setHoveredNode(null)
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNodeClick(node.id)
                  }}
                  onFocus={() => setFocusedNode(node.id)}
                  onBlur={() => setFocusedNode(null)}
                  onKeyDown={(e) => handleKeyDown(e, node.id)}
                  aria-label={`${node.label}: ${node.description}. Drag to reposition.`}
                  aria-pressed={isActive}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  whileDrag={{ 
                    scale: 1.05,
                    zIndex: 50,
                    boxShadow: `0 12px 24px rgba(0, 0, 0, 0.3), 0 0 0 2px ${colors.glow}, 0 0 30px ${colors.glow}60`
                  }}
                >
                  {/* Drag handle indicator */}
                  {isHovered && (
                    <div className="absolute top-1 right-1 opacity-50 pointer-events-none">
                      <GripVertical className="w-3 h-3" style={{ color: colors.text } as React.CSSProperties} />
                    </div>
                  )}

                  <div 
                    className="pointer-events-none"
                    style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: colors.iconBg,
                      border: `1px solid ${colors.border}`,
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: `transform ${DURATION_MICRO}s cubic-bezier(${MATERIAL_EASE.join(', ')})`,
                      transform: isActive ? 'scale(1.1)' : 'scale(1)',
                      pointerEvents: 'none'
                    }}
                  >
                    <div style={{ color: colors.text, pointerEvents: 'none' }}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <span 
                    className="pointer-events-none"
                    style={{ 
                      color: colors.text,
                      fontSize: 'var(--font-size-xs, 0.875rem)',
                      fontWeight: 500,
                      textAlign: 'center',
                      padding: '0 0.5rem',
                      marginTop: '0.5rem',
                      pointerEvents: 'none'
                    }}
                  >
                    {node.label}
                  </span>

                  {/* Click ripple effect */}
                  {isClicked && (
                    <div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${colors.glow}60 0%, transparent 70%)`,
                        animation: 'ripple 0.4s ease-out'
                      }}
                    />
                  )}

                  {/* Tooltip */}
                  <AnimatePresence>
                    {isActive && !isDragging && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.96 }}
                        transition={{ 
                          duration: DURATION_MICRO,
                          ease: MATERIAL_EASE
                        }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 p-3 rounded-lg bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/50 shadow-xl z-30 pointer-events-none"
                        style={{
                          fontSize: 'var(--font-size-xs, 0.875rem)'
                        }}
                      >
                        <p className="text-zinc-300 text-center leading-relaxed">{node.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
      </div>

      {/* Status Indicators - Premium Glassmorphism */}
      <motion.div 
        className="absolute bottom-4 left-4 z-30 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/8 backdrop-blur-sm border border-emerald-500/20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, ease: APPLE_EASE }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-emerald-500"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span 
          className="text-[9px] font-medium text-emerald-400 uppercase tracking-wide"
          style={{ fontSize: 'var(--font-size-xs, 0.75rem)' }}
        >
          Production
        </span>
      </motion.div>

      <motion.div 
        className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/40 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, ease: APPLE_EASE }}
      >
        <Lock className="w-3 h-3 text-primary" />
        <span 
          className="text-[9px] font-medium text-white uppercase tracking-wide"
          style={{ fontSize: 'var(--font-size-xs, 0.75rem)' }}
        >
          On-Premise
        </span>
      </motion.div>
    </div>
  )
}
