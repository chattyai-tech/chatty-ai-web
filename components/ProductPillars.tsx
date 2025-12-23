'use client'

import React from 'react'
import { GlassCard } from './ui/GlassCard'
import { Sparkles, Database, Zap, FileText, ArrowUpRight, Lock, Code2, Server } from 'lucide-react'

export const ProductPillars: React.FC = () => {
  return (
    <section id="features" className="py-32 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--text-primary)] tracking-tight">
            Designed for the <br />
            <span className="text-[var(--text-secondary)]">Modern Enterprise Stack.</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl text-lg">
            A complete intelligence layer that integrates seamlessly with your existing infrastructure.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* CORE RAG ENGINE - Large Feature */}
          <GlassCard className="md:col-span-2 lg:col-span-2 row-span-2 !p-0 overflow-hidden flex flex-col">
             <div className="p-8 pb-0 relative z-10 flex-1">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 bg-brand-turquoise/10 rounded-md border border-brand-turquoise/20">
                      <Sparkles className="w-5 h-5 text-brand-turquoise" />
                   </div>
                   <h3 className="text-lg font-semibold text-[var(--text-primary)]">Chatty AI Engine</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 max-w-sm">
                   Hybrid search combining dense vector embeddings with sparse keyword matching (BM25) for maximum retrieval accuracy.
                </p>
             </div>
             
             {/* Viz Area */}
             <div className="w-full h-48 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent border-t border-[var(--border-primary)] relative mt-auto p-6 font-mono text-xs text-[var(--text-muted)]">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="space-y-2 relative z-10">
                   <div className="flex justify-between border-b border-[var(--border-primary)]/50 pb-2">
                      <span>Index_Status</span>
                      <span className="text-green-400">SYNCED</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Documents</span>
                      <span className="text-[var(--text-primary)]">1,240,592</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Vector_Dim</span>
                      <span className="text-[var(--text-primary)]">1536</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Latency (p99)</span>
                      <span className="text-brand-turquoise">42ms</span>
                   </div>
                </div>
             </div>
          </GlassCard>

          {/* DATABASE CONNECTOR */}
          <GlassCard className="md:col-span-1 lg:col-span-2 row-span-1 group">
             <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-brand-electric/10 rounded-md border border-brand-electric/20">
                   <Database className="w-5 h-5 text-brand-electric" />
                </div>
                <div className="px-2 py-1 rounded bg-[var(--bg-elevated)] border border-[var(--border-primary)] text-[10px] text-[var(--text-muted)] font-mono">
                   READ_ONLY
                </div>
             </div>
             <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">Text-to-SQL</h3>
             <p className="text-sm text-[var(--text-secondary)]">
                Safely query PostgreSQL, Snowflake, and Oracle using natural language. 
                Schema-aware generation with strict permission scoping.
             </p>
          </GlassCard>

          {/* WORKFLOWS */}
          <GlassCard className="md:col-span-1 lg:col-span-1 row-span-1">
             <div className="mb-4">
                <Zap className="w-5 h-5 text-brand-purple mb-4" />
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">Workflows</h3>
             </div>
             <p className="text-sm text-[var(--text-secondary)]">
                Chain logic with n8n or Zapier. Trigger actions from chat.
             </p>
          </GlassCard>

          {/* SECURITY */}
          <GlassCard className="md:col-span-1 lg:col-span-1 row-span-1">
             <div className="mb-4">
                <Lock className="w-5 h-5 text-[var(--text-primary)] mb-4" />
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">RBAC</h3>
             </div>
             <p className="text-sm text-[var(--text-secondary)]">
                Granular access control synced with AD/Okta.
             </p>
          </GlassCard>

          {/* CODE INTERPRETER */}
          <GlassCard className="md:col-span-2 lg:col-span-2 lg:row-span-1 flex items-center justify-between !p-6 group cursor-pointer hover:bg-[var(--bg-hover)]">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--bg-elevated)] rounded-md border border-[var(--border-primary)]">
                   <Code2 className="w-6 h-6 text-[var(--text-primary)]" />
                </div>
                <div>
                   <h3 className="text-lg font-semibold text-[var(--text-primary)]">Sandboxed Code Interpreter</h3>
                   <p className="text-sm text-[var(--text-secondary)] mt-1">Python execution environment for data analysis.</p>
                </div>
             </div>
             <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
          </GlassCard>

           {/* ON-PREM */}
           <GlassCard className="md:col-span-1 lg:col-span-2 row-span-1 flex flex-col justify-center bg-gradient-to-br from-[var(--bg-card)] to-brand-electric/5">
             <div className="flex items-center gap-3 mb-2">
                <Server className="w-5 h-5 text-brand-electric" />
                <h3 className="text-base font-semibold text-[var(--text-primary)]">Air-Gapped Ready</h3>
             </div>
             <p className="text-sm text-[var(--text-secondary)]">
                Deploy on bare metal or Kubernetes. No internet required.
             </p>
          </GlassCard>

        </div>
      </div>
    </section>
  )
}
