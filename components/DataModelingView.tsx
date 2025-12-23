'use client'

import { useState, useCallback } from 'react'
import type { FC } from 'react'
import { Plus, X, Key, Type } from 'lucide-react'

interface Table {
  id: string
  name: string
  position: { x: number; y: number }
  fields: Array<{
    name: string
    type: string
    primary?: boolean
  }>
}

interface Relationship {
  from: string
  to: string
  field: string
}

interface DataModelingViewProps {
  tables: Table[]
  relationships: Relationship[]
}

export const DataModelingView: FC<DataModelingViewProps> = ({ tables, relationships }) => {
  const [tablePositions, setTablePositions] = useState<Record<string, { x: number; y: number }>>(
    tables.reduce((acc, table) => ({
      ...acc,
      [table.id]: table.position
    }), {})
  )
  const [draggingTable, setDraggingTable] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleMouseDown = useCallback((e: React.MouseEvent, tableId: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    setDraggingTable(tableId)
    e.preventDefault()
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!draggingTable) return

    const container = e.currentTarget.getBoundingClientRect()
    const newX = e.clientX - container.left - dragOffset.x
    const newY = e.clientY - container.top - dragOffset.y

    setTablePositions(prev => ({
      ...prev,
      [draggingTable]: {
        x: Math.max(0, Math.min(newX, container.width - 200)),
        y: Math.max(0, Math.min(newY, container.height - 150))
      }
    }))
  }, [draggingTable, dragOffset])

  const handleMouseUp = useCallback(() => {
    setDraggingTable(null)
  }, [])

  const addNewTable = () => {
    const newTableId = `table_${Date.now()}`
    const newTable: Table = {
      id: newTableId,
      name: 'new_table',
      position: { x: 50, y: 50 },
      fields: [
        { name: 'id', type: 'INT', primary: true },
        { name: 'name', type: 'VARCHAR' }
      ]
    }
    
    setTablePositions(prev => ({
      ...prev,
      [newTableId]: { x: 50, y: 50 }
    }))
  }

  const renderRelationship = (rel: Relationship) => {
    const fromTable = tablePositions[rel.from]
    const toTable = tablePositions[rel.to]
    
    if (!fromTable || !toTable) return null

    const x1 = fromTable.x + 200
    const y1 = fromTable.y + 40
    const x2 = toTable.x
    const y2 = toTable.y + 40

    return (
      <g key={`${rel.from}-${rel.to}`}>
        <defs>
          <marker
            id={`arrowhead-${rel.from}-${rel.to}`}
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
          d={`M ${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}`}
          stroke="#6366F1"
          strokeWidth="2"
          fill="none"
          markerEnd={`url(#arrowhead-${rel.from}-${rel.to})`}
        />
        <text
          x={(x1 + x2) / 2}
          y={(y1 + y2) / 2 - 5}
          fill="#6366F1"
          fontSize="10"
          textAnchor="middle"
        >
          {rel.field}
        </text>
      </g>
    )
  }

  return (
    <div className="h-full relative bg-gray-50">
      {/* Canvas with dot pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      
      {/* SVG for relationships */}
      <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
        {relationships.map(renderRelationship)}
      </svg>

      {/* Tables */}
      {tables.map((table) => (
        <div
          key={table.id}
          className="absolute bg-white border border-gray-300 rounded-lg shadow-sm cursor-move select-none"
          style={{
            left: `${tablePositions[table.id]?.x || 0}px`,
            top: `${tablePositions[table.id]?.y || 0}px`,
            width: '200px',
            zIndex: draggingTable === table.id ? 10 : 1
          }}
          onMouseDown={(e) => handleMouseDown(e, table.id)}
        >
          {/* Table Header */}
          <div className="bg-gray-100 px-3 py-2 border-b border-gray-300 rounded-t-lg">
            <h4 className="font-semibold text-sm text-gray-900">{table.name}</h4>
          </div>
          
          {/* Fields */}
          <div className="p-2 space-y-1">
            {table.fields.map((field) => (
              <div key={field.name} className="flex items-center gap-2 text-xs">
                {field.primary && <Key className="w-3 h-3 text-yellow-500" />}
                <span className="font-medium text-gray-700">{field.name}</span>
                <span className="text-gray-500">{field.type}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Add New Table Button */}
      <button
        onClick={addNewTable}
        className="absolute bottom-4 right-4 w-10 h-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <Plus className="w-4 h-4" />
      </button>

      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-gray-200">
        <p className="text-xs text-gray-600">
          <strong>Data Modeling</strong><br/>
          • Drag tables to reposition<br/>
          • Click "New" to add tables<br/>
          • Relationships shown as arrows
        </p>
      </div>
    </div>
  )
}
