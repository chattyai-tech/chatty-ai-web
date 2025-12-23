'use client'

import { useState } from 'react'
import type { FC } from 'react'
import { Zap, Database, Send, Play } from 'lucide-react'

interface Node {
  id: string
  type: 'trigger' | 'agent' | 'tool' | 'action'
  position: { x: number; y: number }
  data: { label: string }
}

interface Edge {
  id: string
  source: string
  target: string
}

interface WorkflowViewProps {
  nodes: Node[]
  edges: Edge[]
}

export const WorkflowView: FC<WorkflowViewProps> = ({ nodes, edges }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'trigger':
        return <Play className="w-4 h-4" />
      case 'agent':
        return <Zap className="w-4 h-4" />
      case 'tool':
        return <Database className="w-4 h-4" />
      case 'action':
        return <Send className="w-4 h-4" />
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded" />
    }
  }

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'trigger':
        return 'bg-green-100 border-green-300 text-green-700'
      case 'agent':
        return 'bg-purple-100 border-purple-300 text-purple-700'
      case 'tool':
        return 'bg-blue-100 border-blue-300 text-blue-700'
      case 'action':
        return 'bg-orange-100 border-orange-300 text-orange-700'
      default:
        return 'bg-gray-100 border-gray-300 text-gray-700'
    }
  }

  const renderEdge = (edge: Edge) => {
    const sourceNode = nodes.find(n => n.id === edge.source)
    const targetNode = nodes.find(n => n.id === edge.target)
    
    if (!sourceNode || !targetNode) return null

    const x1 = sourceNode.position.x + 60
    const y1 = sourceNode.position.y + 30
    const x2 = targetNode.position.x + 60
    const y2 = targetNode.position.y + 30

    return (
      <g key={edge.id}>
        <defs>
          <marker
            id={`arrowhead-${edge.id}`}
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#6366F1"
            />
          </marker>
        </defs>
        <path
          d={`M ${x1} ${y1} L ${x2} ${y2}`}
          stroke="#6366F1"
          strokeWidth="2"
          fill="none"
          markerEnd={`url(#arrowhead-${edge.id})`}
          className="transition-all duration-200"
        />
      </g>
    )
  }

  return (
    <div className="h-full relative bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(156,163,175,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      {/* SVG for edges */}
      <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
        {edges.map(renderEdge)}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className={`absolute flex items-center gap-2 px-3 py-2 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${getNodeColor(node.type)}`}
          style={{
            left: `${node.position.x}px`,
            top: `${node.position.y}px`,
            minWidth: '120px'
          }}
          onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
        >
          <div className="flex-shrink-0">
            {getNodeIcon(node.type)}
          </div>
          <span className="text-sm font-medium">{node.data.label}</span>
        </div>
      ))}

      {/* Instructions Panel */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-sm text-gray-900 mb-2">Workflow Builder</h3>
        <div className="space-y-2 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 border border-green-300 rounded flex items-center justify-center">
              <Play className="w-2 h-2 text-green-700" />
            </div>
            <span>Trigger - Workflow start</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-100 border border-purple-300 rounded flex items-center justify-center">
              <Zap className="w-2 h-2 text-purple-700" />
            </div>
            <span>Agent - AI processing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded flex items-center justify-center">
              <Database className="w-2 h-2 text-blue-700" />
            </div>
            <span>Tool - Data operations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-100 border border-orange-300 rounded flex items-center justify-center">
              <Send className="w-2 h-2 text-orange-700" />
            </div>
            <span>Action - Output tasks</span>
          </div>
        </div>
      </div>

      {/* Selected Node Details */}
      {selectedNode && (
        <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200 max-w-xs">
          <h4 className="font-semibold text-sm text-gray-900 mb-2">
            {nodes.find(n => n.id === selectedNode)?.data.label}
          </h4>
          <p className="text-xs text-gray-600">
            Type: {selectedNode && nodes.find(n => n.id === selectedNode)?.type}<br/>
            Status: Active<br/>
            Last run: 2 minutes ago
          </p>
        </div>
      )}

      {/* Workflow Info */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>Agent Workflow</strong><br/>
          Visual automation builder<br/>
          Based on n8n technology
        </p>
      </div>
    </div>
  )
}
