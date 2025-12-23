'use client'

import { useState, useCallback } from 'react'
import type { FC } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

interface ChartData {
  name: string
  salary: number
  count: number
}

interface ChartViewProps {
  data: ChartData[]
}

const COLORS = ['#8B5CF6', '#6366F1', '#3B82F6', '#0EA5E9', '#06B6D4', '#14B8A6', '#10B981', '#22C55E']

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[var(--bg-card)] p-3 border border-[var(--border-primary)] rounded-lg shadow-lg">
        <p className="font-semibold text-sm text-[var(--text-primary)]">{payload[0].payload.name}</p>
        <p className="text-xs text-[var(--text-secondary)]">
          Salary: ${payload[0].value.toLocaleString()}
        </p>
        <p className="text-xs text-[var(--text-secondary)]">
          Count: {payload[0].payload.count} employees
        </p>
      </div>
    )
  }
  return null
}

export const ChartView: FC<ChartViewProps> = ({ data }) => {
  const [zoomLevel, setZoomLevel] = useState(1)
  const [selectedBar, setSelectedBar] = useState<number | null>(null)

  const handleZoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2))
  }, [])

  const handleZoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5))
  }, [])

  const handleBarClick = useCallback((data: any, index: number) => {
    setSelectedBar(index === selectedBar ? null : index)
  }, [selectedBar])

  const handleReset = useCallback(() => {
    setZoomLevel(1)
    setSelectedBar(null)
  }, [])

  return (
    <div className="w-full h-full flex flex-col">
      {/* Chart Controls */}
      <div className="flex items-center justify-between p-3 border-b border-[var(--border-primary)] bg-[var(--bg-elevated)]">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-sm text-[var(--text-primary)]">Salary Analysis</h4>
          {selectedBar !== null && (
            <span className="text-xs text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded">
              {data[selectedBar]?.name} selected
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-1">
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 0.5}
            className="px-2 py-1 text-xs bg-[var(--bg-card)] border border-[var(--border-primary)] rounded hover:bg-[var(--bg-elevated)] disabled:opacity-50 disabled:cursor-not-allowed text-[var(--text-primary)]"
          >
            Zoom Out
          </button>
          <span className="text-xs text-[var(--text-muted)] px-2">{Math.round(zoomLevel * 100)}%</span>
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 2}
            className="px-2 py-1 text-xs bg-[var(--bg-card)] border border-[var(--border-primary)] rounded hover:bg-[var(--bg-elevated)] disabled:opacity-50 disabled:cursor-not-allowed text-[var(--text-primary)]"
          >
            Zoom In
          </button>
          <button
            onClick={handleReset}
            className="px-2 py-1 text-xs bg-[var(--bg-card)] border border-[var(--border-primary)] rounded hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Chart Container */}
      <div className="flex-1 p-4">
        <div 
          className="w-full h-full"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center',
            transition: 'transform 0.2s ease-in-out',
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              onClick={(e) => {
                if (e && e.activeTooltipIndex !== undefined && e.activeTooltipIndex !== null && typeof e.activeTooltipIndex === 'number') {
                  handleBarClick(data[e.activeTooltipIndex], e.activeTooltipIndex)
                }
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={80}
                tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
                interval={0}
              />
              <YAxis 
                tick={{ fontSize: 10, fill: 'var(--text-muted)' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="salary" 
                radius={[4, 4, 0, 0]}
                cursor="pointer"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={selectedBar === index ? '#6366F1' : COLORS[index % COLORS.length]}
                    style={{
                      filter: selectedBar === index ? 'brightness(1.1)' : 'brightness(1)',
                      transition: 'all 0.2s ease'
                    }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart Summary */}
      <div className="p-3 border-t border-[var(--border-primary)] bg-[var(--bg-elevated)]">
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <span className="text-[var(--text-muted)]">Average:</span>
            <span className="ml-1 font-semibold text-[var(--text-primary)]">
              ${Math.round(data.reduce((sum, item) => sum + item.salary, 0) / data.length).toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-[var(--text-muted)]">Highest:</span>
            <span className="ml-1 font-semibold text-[var(--text-primary)]">
              ${Math.max(...data.map(item => item.salary)).toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-[var(--text-muted)]">Total Roles:</span>
            <span className="ml-1 font-semibold text-[var(--text-primary)]">{data.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
