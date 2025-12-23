'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Server, Monitor, Lock, Globe, Cpu, Database, Shield } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export const ArchitectureDiagram = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeFlow, setActiveFlow] = useState<'request' | 'response'>('request')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlow(prev => prev === 'request' ? 'response' : 'request')
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const isDark = mounted && theme === 'dark'

  // Theme-aware colors
  const colors = {
    // Backgrounds
    containerBg: isDark ? 'bg-[#271b3d]' : 'bg-white',
    gpuEnvBg: isDark ? 'bg-purple-900/20' : 'bg-purple-50',
    gpuEnvBorder: isDark ? 'border-purple-500/30' : 'border-purple-200',
    k8sBg: isDark ? 'bg-[#33214d]' : 'bg-gray-100',
    clientBg: isDark ? 'bg-cyan-900/15' : 'bg-sky-50',
    clientBorder: isDark ? 'border-cyan-500/30' : 'border-sky-200',
    dmzBg: isDark ? 'bg-amber-900/15' : 'bg-amber-50',
    dmzBorder: isDark ? 'border-amber-500/30' : 'border-amber-200',
    cardBg: isDark ? 'bg-[#3a2555]' : 'bg-white',
    cardBorder: isDark ? 'border-[#4a2f6d]' : 'border-gray-200',
    // Text
    titleText: isDark ? 'text-purple-300' : 'text-purple-700',
    labelText: isDark ? 'text-gray-300' : 'text-gray-600',
    subtleText: isDark ? 'text-gray-400' : 'text-gray-500',
    // Accents
    siemBg: isDark ? 'bg-red-900/20' : 'bg-red-50',
    siemBorder: isDark ? 'border-red-500/40' : 'border-red-200',
    siemText: isDark ? 'text-red-300' : 'text-red-600',
    vpnBg: isDark ? 'bg-rose-900/20' : 'bg-rose-50',
    vpnBorder: isDark ? 'border-rose-400/50' : 'border-rose-300',
    vpnText: isDark ? 'text-rose-300' : 'text-rose-600',
    dbColor: isDark ? 'bg-emerald-500/30' : 'bg-emerald-200',
    dbBorder: isDark ? 'border-emerald-500/40' : 'border-emerald-300',
    flowLine: isDark ? 'stroke-purple-400/40' : 'stroke-purple-300',
  }

  return (
    <div 
      className={`w-full ${colors.containerBg} p-4 sm:p-5 rounded-xl border border-[var(--border-primary)] relative overflow-hidden transition-colors duration-300`}
      style={{ minHeight: '480px' }}
    >
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} 
      />

      <div className="relative z-10 flex flex-col gap-3" style={{ minHeight: '450px' }}>
        
        {/* Private GPU Server Environment */}
        <motion.div 
          className={`relative rounded-xl p-4 border ${colors.gpuEnvBg} ${colors.gpuEnvBorder} transition-colors duration-300`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={`text-[10px] font-semibold ${colors.titleText} mb-3 uppercase tracking-widest`}>
            Private GPU Server Environment
          </div>
          
          {/* Kubernetes Cluster */}
          <div className={`rounded-lg p-3 mb-3 ${colors.k8sBg} transition-colors duration-300`}>
            <div className={`text-[9px] font-medium ${colors.subtleText} mb-2 text-center uppercase tracking-wider`}>
              Kubernetes Cluster
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['Client A', 'Client B', 'Client C'].map((client, i) => (
                <motion.div
                  key={client}
                  className={`${colors.cardBg} rounded-lg p-2 text-center border ${colors.cardBorder} transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`text-[8px] font-medium ${colors.labelText}`}>{client} Namespace</div>
                  <div className={`text-[7px] ${colors.subtleText} mt-0.5`}>LLM Container</div>
                  <Cpu className={`w-3 h-3 mx-auto mt-1 ${isDark ? 'text-purple-400' : 'text-purple-500'}`} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* SIEM/Monitoring */}
            <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border ${colors.siemBg} ${colors.siemBorder} transition-colors duration-300`}>
              <Monitor className={`w-3.5 h-3.5 ${colors.siemText}`} />
              <div className={`text-[9px] font-medium ${colors.siemText}`}>SIEM/Monitoring</div>
            </div>

            {/* Flow Labels */}
            <div className="flex flex-col items-end gap-1">
              <motion.div 
                className={`px-2 py-0.5 rounded text-[8px] ${colors.cardBg} ${colors.labelText} border ${colors.cardBorder}`}
                animate={{ opacity: activeFlow === 'response' ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                ← Processed Results
              </motion.div>
              <motion.div 
                className={`px-2 py-0.5 rounded text-[8px] ${colors.cardBg} ${colors.labelText} border ${colors.cardBorder}`}
                animate={{ opacity: activeFlow === 'request' ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                JWT Auth Requests →
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Client Environment + DMZ */}
        <div className="flex gap-3 flex-1">
          
          {/* Client On-Premise Environment */}
          <motion.div 
            className={`flex-1 rounded-xl p-3 border ${colors.clientBg} ${colors.clientBorder} transition-colors duration-300`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className={`text-[10px] font-semibold ${isDark ? 'text-cyan-300' : 'text-sky-700'} mb-3 uppercase tracking-widest text-center`}>
              Client On-Premise Environment
            </div>
            
            {/* Databases */}
            <div className="flex justify-center gap-6 mb-3">
              {[
                { name: 'Documents', icon: Database },
                { name: 'Vector', icon: Database }
              ].map((db, i) => (
                <motion.div
                  key={db.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <div className={`w-10 h-12 rounded-lg ${colors.dbColor} border ${colors.dbBorder} flex items-center justify-center transition-colors duration-300`}>
                    <db.icon className={`w-5 h-5 ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`} />
                  </div>
                  <div className={`text-[8px] ${colors.labelText} text-center mt-1 font-medium`}>{db.name}</div>
                  <div className={`text-[7px] ${colors.subtleText}`}>Database</div>
                </motion.div>
              ))}
            </div>

            {/* TLS Label */}
            <div className="flex justify-center mb-2">
              <div className={`px-2 py-0.5 rounded text-[8px] font-medium ${isDark ? 'bg-yellow-900/20 text-yellow-300 border-yellow-500/30' : 'bg-yellow-50 text-yellow-700 border-yellow-200'} border`}>
                <Lock className="w-2.5 h-2.5 inline mr-1" />
                Encrypted TLS 1.3+
              </div>
            </div>

            {/* Client API Service */}
            <div className={`mx-auto w-fit px-3 py-1.5 rounded-lg border ${colors.cardBg} ${colors.cardBorder} transition-colors duration-300`}>
              <div className="flex items-center gap-1.5">
                <Server className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-sky-500'}`} />
                <span className={`text-[9px] font-medium ${colors.labelText}`}>Client API Service</span>
              </div>
            </div>
          </motion.div>

          {/* DMZ Section */}
          <motion.div 
            className={`w-32 rounded-xl p-3 border ${colors.dmzBg} ${colors.dmzBorder} flex flex-col items-center justify-between transition-colors duration-300`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className={`text-[10px] font-semibold ${isDark ? 'text-amber-300' : 'text-amber-700'} uppercase tracking-widest`}>
              DMZ
            </div>
            
            {/* API Gateway */}
            <div className={`px-2.5 py-2 rounded-lg text-center ${colors.cardBg} border ${colors.cardBorder} transition-colors duration-300`}>
              <Globe className={`w-4 h-4 mx-auto ${isDark ? 'text-amber-400' : 'text-amber-600'} mb-1`} />
              <div className={`text-[8px] font-medium ${colors.labelText}`}>API Gateway</div>
              <div className={`text-[7px] ${colors.subtleText}`}>(Reverse Proxy)</div>
              <div className={`text-[7px] ${isDark ? 'text-amber-300' : 'text-amber-600'} mt-1`}>mTLS + JWT</div>
            </div>

            {/* Connection indicator */}
            <motion.div 
              className={`w-0.5 h-6 ${isDark ? 'bg-amber-500/40' : 'bg-amber-300'} rounded-full`}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* VPN/WireGuard */}
            <div className={`w-14 h-14 flex items-center justify-center border-2 ${colors.vpnBg} ${colors.vpnBorder} transform rotate-45 rounded-sm transition-colors duration-300`}>
              <div className="transform -rotate-45 text-center">
                <Shield className={`w-3 h-3 mx-auto ${colors.vpnText} mb-0.5`} />
                <div className={`text-[7px] font-medium ${colors.vpnText}`}>VPN/</div>
                <div className={`text-[7px] font-medium ${colors.vpnText}`}>WireGuard</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connection Flow Indicator */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <motion.div 
            className={`h-1 rounded-full ${isDark ? 'bg-purple-500' : 'bg-purple-400'}`}
            animate={{ 
              width: activeFlow === 'request' ? [8, 40, 8] : [8, 8, 8],
              opacity: activeFlow === 'request' ? [0.3, 1, 0.3] : 0.3
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className={`text-[8px] ${colors.subtleText}`}>Data Flow</span>
          <motion.div 
            className={`h-1 rounded-full ${isDark ? 'bg-emerald-500' : 'bg-emerald-400'}`}
            animate={{ 
              width: activeFlow === 'response' ? [8, 40, 8] : [8, 8, 8],
              opacity: activeFlow === 'response' ? [0.3, 1, 0.3] : 0.3
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Legend */}
      <div className={`mt-3 pt-3 border-t ${isDark ? 'border-[#4a2f6d]' : 'border-gray-200'} flex flex-wrap gap-4 justify-center text-[9px] transition-colors duration-300`}>
        <div className="flex items-center gap-1.5">
          <div className={`w-2.5 h-2.5 rounded ${isDark ? 'bg-purple-500/40' : 'bg-purple-200'}`} />
          <span className={colors.subtleText}>GPU Processing</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-2.5 h-2.5 rounded ${isDark ? 'bg-cyan-500/40' : 'bg-sky-200'}`} />
          <span className={colors.subtleText}>On-Premise</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-2.5 h-2.5 rounded ${isDark ? 'bg-amber-500/30' : 'bg-amber-200'}`} />
          <span className={colors.subtleText}>DMZ Layer</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`w-2.5 h-2.5 rounded ${isDark ? 'bg-red-500/30' : 'bg-red-200'}`} />
          <span className={colors.subtleText}>Security</span>
        </div>
      </div>
    </div>
  )
}
