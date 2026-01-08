'use client'

import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import {
  Shield,
  Sparkles,
  Brain,
  Bug,
  RefreshCw,
  ArrowRight,
  Terminal,
  Check,
  ChevronRight,
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  GitBranch,
  Lock,
  X,
  MoreHorizontal,
  Send,
  Loader2,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useRef, useEffect } from 'react'

// File system types
interface FileNode {
  name: string
  type: 'file' | 'folder'
  children?: FileNode[]
  content?: string
  language?: string
}

// File icons config
const fileIcons: Record<string, { icon: typeof FileCode; color: string }> = {
  tsx: { icon: FileCode, color: 'text-blue-400' },
  ts: { icon: FileCode, color: 'text-blue-400' },
  js: { icon: FileCode, color: 'text-yellow-400' },
  css: { icon: FileText, color: 'text-pink-400' },
  json: { icon: FileText, color: 'text-yellow-500' },
}

// File system
const fileSystem: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'api',
        type: 'folder',
        children: [
          {
            name: 'users.ts',
            type: 'file',
            language: 'ts',
            content: `export function fetchUsers() {
  return fetch('/api/users')
    .then(res => res.json())
}

export function getUserById(id: string) {
  return fetch(\`/api/users/\${id}\`)
    .then(res => res.json())
}

// TODO: Add error handling
// TODO: Add caching`
          },
        ]
      },
      {
        name: 'components',
        type: 'folder',
        children: [
          {
            name: 'UserCard.tsx',
            type: 'file',
            language: 'tsx',
            content: `interface UserCardProps {
  user: User
  onSelect?: (user: User) => void
}

export function UserCard({ user, onSelect }: UserCardProps) {
  return (
    <div 
      className="p-4 rounded-lg border hover:shadow-lg"
      onClick={() => onSelect?.(user)}
    >
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )
}`
          },
        ]
      },
      {
        name: 'App.tsx',
        type: 'file',
        language: 'tsx',
        content: `import { UserCard } from './components/UserCard'
import { fetchUsers } from './api/users'

export default function App() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetchUsers().then(setUsers)
  }, [])
  
  return (
    <div className="container mx-auto p-4">
      <h1>User Dashboard</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}`
      },
    ]
  },
]

// Demo scenario steps
interface DemoStep {
  type: 'navigate' | 'select-line' | 'ai-prompt' | 'ai-response' | 'terminal' | 'wait' | 'apply-code'
  file?: string
  line?: number
  prompt?: string
  response?: string
  command?: string
  output?: string
  code?: string
  duration?: number
}

const demoScenario: DemoStep[] = [
  { type: 'wait', duration: 1000 },
  { type: 'navigate', file: 'src/api/users.ts' },
  { type: 'wait', duration: 800 },
  { type: 'select-line', line: 2 },
  { type: 'wait', duration: 500 },
  { type: 'select-line', line: 3 },
  { type: 'wait', duration: 300 },
  { 
    type: 'ai-prompt', 
    prompt: 'Add error handling and convert to async/await' 
  },
  { type: 'wait', duration: 600 },
  { 
    type: 'ai-response', 
    response: `I'll refactor this with proper error handling:

\`\`\`typescript
export async function fetchUsers() {
  try {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
}
\`\`\`

✓ Added try-catch block
✓ Converted to async/await  
✓ Added response.ok check
✓ Proper error logging` 
  },
  { type: 'wait', duration: 1500 },
  { type: 'apply-code', code: 'Changes applied to users.ts' },
  { type: 'wait', duration: 800 },
  { type: 'terminal', command: 'npm run typecheck', output: '✓ No type errors found' },
  { type: 'wait', duration: 1000 },
  { type: 'navigate', file: 'src/components/UserCard.tsx' },
  { type: 'wait', duration: 800 },
  { type: 'select-line', line: 7 },
  { 
    type: 'ai-prompt', 
    prompt: 'Add loading and error states to this component' 
  },
  { type: 'wait', duration: 500 },
  { 
    type: 'ai-response', 
    response: `Here's an enhanced version with loading and error states:

\`\`\`tsx
export function UserCard({ user, onSelect, isLoading, error }: UserCardProps) {
  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-24 rounded-lg" />;
  }
  
  if (error) {
    return <div className="text-red-500">Failed to load user</div>;
  }
  
  return (
    <div 
      className="p-4 rounded-lg border hover:shadow-lg transition-shadow"
      onClick={() => onSelect?.(user)}
    >
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}
\`\`\`

✓ Added loading skeleton
✓ Added error state
✓ Improved styling` 
  },
  { type: 'wait', duration: 2000 },
  { type: 'terminal', command: 'npm run build', output: '✓ Build completed successfully\n  Bundle size: 142kb (gzipped: 45kb)' },
]

export default function ChattyCodePage() {
  // File explorer state
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['src', 'src/api', 'src/components']))
  const [activeFile, setActiveFile] = useState<string>('src/api/users.ts')
  const [openTabs, setOpenTabs] = useState<string[]>(['src/api/users.ts'])
  const [selectedLines, setSelectedLines] = useState<Set<number>>(new Set())
  
  // AI Chat state
  const [chatInput, setChatInput] = useState('')
  const [isAiThinking, setIsAiThinking] = useState(false)
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'ai' | 'system'; content: string; isTyping?: boolean }>>([])
  
  // Terminal state
  const terminalIdRef = useRef(0)
  const [terminalOutput, setTerminalOutput] = useState<Array<{ id: number; type: 'command' | 'output' | 'success' | 'error'; content: string }>>([
    { id: 0, type: 'output', content: '~/project $ ' }
  ])
  const [activePanel, setActivePanel] = useState<'chat' | 'terminal'>('chat')
  
  // Demo state
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [demoStep, setDemoStep] = useState(0)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  
  // Refs
  const chatInputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const demoTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Get file content
  const getFileContent = useCallback((path: string): string => {
    const parts = path.split('/')
    let current: FileNode[] | undefined = fileSystem
    
    for (let i = 0; i < parts.length; i++) {
      const foundNode: FileNode | undefined = current?.find(n => n.name === parts[i])
      if (!foundNode) return ''
      if (foundNode.type === 'file') return foundNode.content || ''
      current = foundNode.children
    }
    return ''
  }, [])

  const currentContent = getFileContent(activeFile)
  const currentLines = currentContent.split('\n')

  // Toggle folder
  const toggleFolder = (path: string) => {
    setHasUserInteracted(true)
    setExpandedFolders(prev => {
      const next = new Set(prev)
      if (next.has(path)) next.delete(path)
      else next.add(path)
      return next
    })
  }

  // Open file
  const openFile = (path: string) => {
    setHasUserInteracted(true)
    setActiveFile(path)
    setSelectedLines(new Set())
    if (!openTabs.includes(path)) {
      setOpenTabs([...openTabs, path])
    }
  }

  // Close tab
  const closeTab = (path: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setHasUserInteracted(true)
    const newTabs = openTabs.filter(t => t !== path)
    setOpenTabs(newTabs)
    if (activeFile === path && newTabs.length > 0) {
      setActiveFile(newTabs[newTabs.length - 1])
    }
  }

  // Select line
  const selectLine = (lineNum: number) => {
    setHasUserInteracted(true)
    setSelectedLines(prev => {
      const next = new Set(prev)
      if (next.has(lineNum)) next.delete(lineNum)
      else next.add(lineNum)
      return next
    })
  }

  // Handle AI chat
  const handleSendMessage = async (customPrompt?: string) => {
    const promptText = customPrompt || chatInput.trim()
    if (!promptText || isAiThinking) return
    
    setHasUserInteracted(true)
    setChatInput('')
    setChatMessages(prev => [...prev, { role: 'user', content: promptText }])
    setIsAiThinking(true)

    // Scroll
    setTimeout(() => {
      chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' })
    }, 50)

    // Simulate thinking
    await new Promise(resolve => setTimeout(resolve, 1200))

    // Add AI response with typing
    const response = `I'll help you with that. Here's my analysis:

Based on the selected code, I can see opportunities for improvement:

\`\`\`typescript
// Improved version
export async function improvedFunction() {
  try {
    const result = await fetchData();
    return result;
  } catch (error) {
    handleError(error);
  }
}
\`\`\`

✓ Better error handling
✓ Cleaner async/await syntax
✓ Type-safe implementation`

    setChatMessages(prev => [...prev, { role: 'ai', content: '', isTyping: true }])
    
    await typeTextRef.current(response, (typed) => {
      setChatMessages(prev => {
        const newMessages = [...prev]
        const lastMessage = newMessages[newMessages.length - 1]
        if (lastMessage?.role === 'ai') {
          lastMessage.content = typed
        }
        return [...newMessages]
      })
      chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'auto' })
    }, 15)

    setChatMessages(prev => {
      const newMessages = [...prev]
      const lastMessage = newMessages[newMessages.length - 1]
      if (lastMessage) lastMessage.isTyping = false
      return newMessages
    })
    
    setIsAiThinking(false)
  }

  // Type text with animation - stable reference
  const typeTextRef = useRef(async (text: string, onUpdate: (text: string) => void, speed: number = 20) => {
    let typed = ''
    for (let i = 0; i < text.length; i++) {
      typed += text[i]
      onUpdate(typed)
      await new Promise(resolve => setTimeout(resolve, speed))
    }
  })

  // Add terminal line with unique ID
  const addTerminalLine = useCallback((type: 'command' | 'output' | 'success' | 'error', content: string) => {
    terminalIdRef.current += 1
    const newId = terminalIdRef.current
    setTerminalOutput(prev => [...prev, { id: newId, type, content }])
  }, [])

  // Run terminal command - stable reference
  const runTerminalCommandRef = useRef(async (
    command: string, 
    output: string,
    addLine: (type: 'command' | 'output' | 'success' | 'error', content: string) => void
  ) => {
    setActivePanel('terminal')
    addLine('command', command)
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const lines = output.split('\n')
    for (const line of lines) {
      addLine(
        line.includes('✓') ? 'success' : line.includes('✗') ? 'error' : 'output', 
        line
      )
      await new Promise(resolve => setTimeout(resolve, 200))
    }
    
    addLine('output', '~/project $ ')
    terminalRef.current?.scrollTo({ top: terminalRef.current.scrollHeight, behavior: 'smooth' })
  })

  // Execute demo step
  const executeDemoStep = useCallback(async (step: DemoStep) => {
    const file = step.file
    const line = step.line
    const prompt = step.prompt
    const response = step.response
    
    switch (step.type) {
      case 'navigate':
        if (file) {
          setActiveFile(file)
          setSelectedLines(new Set())
          if (!openTabs.includes(file)) {
            setOpenTabs(prev => [...prev, file])
          }
        }
        break
        
      case 'select-line':
        if (line !== undefined) {
          setSelectedLines(prev => new Set([...prev, line]))
        }
        break
        
      case 'ai-prompt':
        if (prompt) {
          setActivePanel('chat')
          setChatMessages(prev => [...prev, { role: 'user', content: prompt }])
          setIsAiThinking(true)
          setTimeout(() => {
            chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' })
          }, 50)
        }
        break
        
      case 'ai-response':
        if (response) {
          setChatMessages(prev => [...prev, { role: 'ai', content: '', isTyping: true }])
          await typeTextRef.current(response, (typed) => {
            setChatMessages(prev => {
              const newMessages = [...prev]
              const lastMessage = newMessages[newMessages.length - 1]
              if (lastMessage?.role === 'ai') lastMessage.content = typed
              return [...newMessages]
            })
            chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'auto' })
          }, 12)
          setChatMessages(prev => {
            const newMessages = [...prev]
            const lastMessage = newMessages[newMessages.length - 1]
            if (lastMessage) lastMessage.isTyping = false
            return newMessages
          })
          setIsAiThinking(false)
        }
        break
        
      case 'apply-code':
        setChatMessages(prev => [...prev, { role: 'system', content: `✓ ${step.code}` }])
        break
        
      case 'terminal':
        if (step.command && step.output) {
          await runTerminalCommandRef.current(step.command, step.output, addTerminalLine)
        }
        break
        
      case 'wait':
        await new Promise(resolve => setTimeout(resolve, step.duration || 1000))
        break
    }
  }, [openTabs, addTerminalLine])

  // Auto-play demo
  useEffect(() => {
    if (!isAutoPlaying || hasUserInteracted) return
    
    const runDemo = async () => {
      if (demoStep >= demoScenario.length) {
        // Restart demo after delay
        await new Promise(resolve => setTimeout(resolve, 3000))
        setDemoStep(0)
        setChatMessages([])
        terminalIdRef.current = 0
        setTerminalOutput([{ id: 0, type: 'output', content: '~/project $ ' }])
        setSelectedLines(new Set())
        setActivePanel('chat')
        return
      }
      
      const step = demoScenario[demoStep]
      await executeDemoStep(step)
      setDemoStep(prev => prev + 1)
    }
    
    demoTimeoutRef.current = setTimeout(runDemo, 100)
    
    return () => {
      if (demoTimeoutRef.current) clearTimeout(demoTimeoutRef.current)
    }
  }, [isAutoPlaying, demoStep, hasUserInteracted, executeDemoStep])

  // Reset demo
  const resetDemo = () => {
    setHasUserInteracted(false)
    setIsAutoPlaying(true)
    setDemoStep(0)
    setChatMessages([])
    terminalIdRef.current = 0
    setTerminalOutput([{ id: 0, type: 'output', content: '~/project $ ' }])
    setSelectedLines(new Set())
    setActiveFile('src/api/users.ts')
    setOpenTabs(['src/api/users.ts'])
    setActivePanel('chat')
  }

  // Pause/Resume demo
  const toggleAutoPlay = () => {
    if (hasUserInteracted) {
      resetDemo()
    } else {
      setIsAutoPlaying(!isAutoPlaying)
    }
  }

  // Render file tree
  const renderFileTree = (nodes: FileNode[], parentPath: string = '', depth: number = 0) => {
    return nodes.map(node => {
      const path = parentPath ? `${parentPath}/${node.name}` : node.name
      const isExpanded = expandedFolders.has(path)
      const isActive = activeFile === path
      const ext = node.name.split('.').pop() || ''
      const fileConfig = fileIcons[ext] || { icon: FileText, color: 'text-[var(--text-muted)]' }
      const FileIcon = fileConfig.icon

      return (
        <div key={path}>
          <button
            type="button"
            onClick={() => node.type === 'folder' ? toggleFolder(path) : openFile(path)}
            className={`w-full flex items-center gap-1.5 px-2 py-1 text-left text-sm transition-all rounded-sm ${
              isActive 
                ? 'bg-[var(--purple-500)]/15 text-[var(--accent-violet)]' 
                : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
            }`}
            style={{ paddingLeft: `${depth * 12 + 8}px` }}
          >
            {node.type === 'folder' ? (
              <>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                {isExpanded ? <FolderOpen className="w-4 h-4 text-[var(--accent-violet)]" /> : <Folder className="w-4 h-4 text-[var(--accent-violet)]" />}
              </>
            ) : (
              <>
                <span className="w-3.5" />
                <FileIcon className={`w-4 h-4 ${fileConfig.color}`} />
              </>
            )}
            <span className="truncate">{node.name}</span>
          </button>
          {node.type === 'folder' && isExpanded && node.children && (
            <div>{renderFileTree(node.children, path, depth + 1)}</div>
          )}
        </div>
      )
    })
  }

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-[var(--purple-500)]/8 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Hero Text */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--purple-500)]/10 border border-[var(--purple-500)]/20 text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4 text-[var(--accent-violet)]" />
              <span className="text-[var(--accent-violet)]">AI Code Assistant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-5 leading-[1.1]">
              Watch AI transform
              <br />
              <span className="bg-gradient-to-r from-[var(--purple-500)] via-[var(--violet-500)] to-[var(--indigo-500)] bg-clip-text text-transparent">
                how you code
              </span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
              Watch the demo or take control. Click anywhere to interact.
            </p>

            {/* Demo Controls */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <button
                type="button"
                onClick={toggleAutoPlay}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isAutoPlaying && !hasUserInteracted
                    ? 'bg-[var(--purple-500)] text-white'
                    : 'bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--purple-500)]/30'
                }`}
              >
                {hasUserInteracted ? (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    Restart Demo
                  </>
                ) : isAutoPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Play
                  </>
                )}
              </button>
              
              <Link
                href="/demo"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--purple-600)] to-[var(--violet-600)] text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-[var(--purple-500)]/25 transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Status indicator */}
            {isAutoPlaying && !hasUserInteracted && (
              <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)] mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Auto-playing demo - Click to interact</span>
              </div>
            )}
          </div>

          {/* Interactive IDE */}
          <motion.div
            initial={{ opacity: 1, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-b from-[var(--purple-500)]/20 via-[var(--violet-500)]/10 to-transparent rounded-3xl blur-2xl opacity-60" />
            
            {/* IDE Window */}
            <div className="relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-primary)] overflow-hidden shadow-2xl">
              {/* Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-surface)] border-b border-[var(--border-primary)]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
                  <span>Chatty Code</span>
                  <span className="text-[var(--text-disabled)]">—</span>
                  <span className="text-[var(--text-disabled)]">{activeFile.split('/').pop()}</span>
                </div>
                <div className="flex items-center gap-1">
                  {isAiThinking && (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[var(--purple-500)]/10 text-[var(--accent-violet)] text-xs">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex h-[520px]">
                {/* Sidebar */}
                <div className="w-56 border-r border-[var(--border-primary)] bg-[var(--bg-surface)] flex flex-col">
                  <div className="px-3 py-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                    <span>Explorer</span>
                    <MoreHorizontal className="w-4 h-4" />
                  </div>
                  <div className="flex-1 overflow-auto px-1 py-1">
                    {renderFileTree(fileSystem)}
                  </div>
                </div>

                {/* Editor */}
                <div className="flex-1 flex flex-col min-w-0">
                  {/* Tabs */}
                  <div className="flex items-center bg-[var(--bg-surface)] border-b border-[var(--border-primary)] overflow-x-auto">
                    {openTabs.map(tab => {
                      const fileName = tab.split('/').pop() || ''
                      const ext = fileName.split('.').pop() || ''
                      const fileConfig = fileIcons[ext] || { icon: FileText, color: 'text-[var(--text-muted)]' }
                      const TabIcon = fileConfig.icon
                      const isActive = activeFile === tab

                      return (
                        <div
                          key={tab}
                          role="tab"
                          tabIndex={0}
                          onClick={() => openFile(tab)}
                          onKeyDown={(e) => e.key === 'Enter' && openFile(tab)}
                          className={`group flex items-center gap-2 px-3 py-2 text-sm border-r border-[var(--border-primary)] transition-colors cursor-pointer ${
                            isActive ? 'bg-[var(--bg-card)] text-[var(--text-primary)]' : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'
                          }`}
                        >
                          <TabIcon className={`w-4 h-4 ${fileConfig.color}`} />
                          <span>{fileName}</span>
                          <button
                            type="button"
                            onClick={(e) => closeTab(tab, e)}
                            className="ml-1 p-0.5 rounded hover:bg-[var(--bg-active)] opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      )
                    })}
                  </div>

                  {/* Code Editor */}
                  <div className="flex-1 overflow-auto bg-[var(--bg-card)] font-mono text-sm">
                    <div className="min-w-max">
                      {currentLines.map((line, idx) => {
                        const lineNum = idx + 1
                        const isSelected = selectedLines.has(lineNum)

                        return (
                          <button
                            type="button"
                            key={`line-${lineNum}`}
                            onClick={() => selectLine(lineNum)}
                            className={`flex w-full text-left transition-colors ${
                              isSelected ? 'bg-[var(--purple-500)]/15' : 'hover:bg-[var(--bg-hover)]/50'
                            }`}
                          >
                            <div className={`w-12 flex-shrink-0 px-2 py-0.5 text-right select-none border-r border-[var(--border-primary)] ${
                              isSelected ? 'text-[var(--accent-violet)]' : 'text-[var(--text-disabled)]'
                            }`}>
                              {lineNum}
                            </div>
                            <pre className="flex-1 px-4 py-0.5 text-[var(--text-secondary)] whitespace-pre overflow-x-auto">
                              <code>{line || ' '}</code>
                            </pre>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-3 py-1 bg-[var(--bg-surface)] border-t border-[var(--border-primary)] text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-4">
                      <span>TypeScript</span>
                      <span className="text-[var(--accent-violet)]">{selectedLines.size > 0 ? `${selectedLines.size} lines selected` : ''}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span>Chatty AI</span>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Chat & Terminal */}
                <div className="w-80 border-l border-[var(--border-primary)] bg-[var(--bg-surface)] flex flex-col">
                  {/* Panel Tabs */}
                  <div className="flex border-b border-[var(--border-primary)]">
                    <button
                      type="button"
                      onClick={() => { setActivePanel('chat'); setHasUserInteracted(true) }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                        activePanel === 'chat' 
                          ? 'bg-[var(--bg-card)] text-[var(--text-primary)] border-b-2 border-[var(--accent-violet)]' 
                          : 'text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'
                      }`}
                    >
                      <Brain className="w-4 h-4" />
                      Chat
                      {isAiThinking && <Loader2 className="w-3 h-3 animate-spin text-[var(--accent-violet)]" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => { setActivePanel('terminal'); setHasUserInteracted(true) }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                        activePanel === 'terminal' 
                          ? 'bg-[var(--bg-card)] text-[var(--text-primary)] border-b-2 border-[var(--accent-violet)]' 
                          : 'text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'
                      }`}
                    >
                      <Terminal className="w-4 h-4" />
                      Terminal
                    </button>
                  </div>

                  {/* Chat Panel */}
                  <AnimatePresence mode="wait">
                    {activePanel === 'chat' && (
                      <motion.div
                        key="chat"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 flex flex-col"
                      >
                        <div ref={chatContainerRef} className="flex-1 overflow-auto p-3 space-y-3">
                          {chatMessages.length === 0 && (
                            <div className="text-center py-8">
                              <Brain className="w-10 h-10 text-[var(--accent-violet)]/30 mx-auto mb-3" />
                              <p className="text-sm text-[var(--text-muted)]">Ask me anything about your code</p>
                              <div className="flex flex-wrap gap-2 justify-center mt-4">
                                {['Add error handling', 'Explain this code', 'Optimize performance'].map(suggestion => (
                                  <button
                                    key={suggestion}
                                    type="button"
                                    onClick={() => handleSendMessage(suggestion)}
                                    className="px-3 py-1.5 text-xs rounded-full bg-[var(--purple-500)]/10 text-[var(--accent-violet)] hover:bg-[var(--purple-500)]/20 transition-colors"
                                  >
                                    {suggestion}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {chatMessages.map((msg, idx) => (
                            <div key={`msg-${idx}-${msg.role}`} className={msg.role === 'user' ? 'flex justify-end' : ''}>
                              {msg.role === 'user' ? (
                                <div className="max-w-[85%] px-3 py-2 rounded-lg bg-[var(--purple-500)]/20 text-[var(--text-primary)] text-sm">
                                  {msg.content}
                                </div>
                              ) : msg.role === 'system' ? (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 text-green-500 text-sm">
                                  <CheckCircle2 className="w-4 h-4" />
                                  {msg.content}
                                </div>
                              ) : (
                                <div className="space-y-2">
                                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                                    <Brain className="w-3.5 h-3.5 text-[var(--accent-violet)]" />
                                    Chatty AI
                                    {msg.isTyping && <Loader2 className="w-3 h-3 animate-spin ml-1" />}
                                  </div>
                                  <div className="px-3 py-2 rounded-lg bg-[var(--bg-hover)] border border-[var(--border-primary)]">
                                    <pre className="text-sm text-[var(--text-secondary)] whitespace-pre-wrap font-sans leading-relaxed">
                                      {msg.content}
                                      {msg.isTyping && <span className="inline-block w-1.5 h-4 bg-[var(--accent-violet)] ml-0.5 animate-pulse" />}
                                    </pre>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                          
                          {isAiThinking && chatMessages[chatMessages.length - 1]?.role !== 'ai' && (
                            <div className="flex items-center gap-2 text-[var(--text-muted)]">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-[var(--accent-violet)] animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="w-2 h-2 rounded-full bg-[var(--accent-violet)] animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="w-2 h-2 rounded-full bg-[var(--accent-violet)] animate-bounce" style={{ animationDelay: '300ms' }} />
                              </div>
                              <span className="text-sm">Thinking...</span>
                            </div>
                          )}
                        </div>

                        {/* Chat Input */}
                        <div className="p-3 border-t border-[var(--border-primary)]">
                          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-hover)] border border-[var(--border-primary)] focus-within:border-[var(--purple-500)]/50">
                            <Terminal className="w-4 h-4 text-[var(--text-muted)]" />
                            <input
                              ref={chatInputRef}
                              type="text"
                              value={chatInput}
                              onChange={(e) => setChatInput(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                              onFocus={() => setHasUserInteracted(true)}
                              placeholder="Ask about your code..."
                              className="flex-1 bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => handleSendMessage()}
                              disabled={!chatInput.trim() || isAiThinking}
                              className="p-1 rounded hover:bg-[var(--bg-active)] disabled:opacity-50"
                            >
                              <Send className="w-4 h-4 text-[var(--accent-violet)]" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Terminal Panel */}
                    {activePanel === 'terminal' && (
                      <motion.div
                        key="terminal"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 flex flex-col bg-[#0d1117]"
                      >
                        <div ref={terminalRef} className="flex-1 overflow-auto p-3 font-mono text-sm">
                          {terminalOutput.map((line) => (
                            <div 
                              key={`terminal-line-${line.id}`} 
                              className={`${
                                line.type === 'command' ? 'text-white' :
                                line.type === 'success' ? 'text-green-400' :
                                line.type === 'error' ? 'text-red-400' :
                                'text-gray-400'
                              }`}
                            >
                              {line.type === 'command' && <span className="text-green-400">$ </span>}
                              {line.content}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-[var(--border-primary)]" aria-label="Features">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Built for how you actually code
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: 'Context-aware completions', desc: 'Understands your entire codebase.' },
              { icon: Brain, title: 'Codebase chat', desc: 'Ask questions in natural language.' },
              { icon: Bug, title: 'Intelligent debugging', desc: 'Explain errors, suggest fixes.' },
              { icon: RefreshCw, title: 'Refactoring assistant', desc: 'Transform code patterns safely.' },
              { icon: GitBranch, title: 'Multi-file edits', desc: 'Coordinated changes across files.' },
              { icon: Shield, title: 'Enterprise security', desc: 'SOC 2 Type II certified.' },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 1, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--purple-500)]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--purple-500)] to-[var(--violet-600)] flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <ScrollReveal>
        <section className="py-24 border-t border-[var(--border-primary)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--purple-500)] to-[var(--violet-600)] flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Your code stays private
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Enterprise-grade security. SOC 2 Type II certified. Your code is never used for training.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-[var(--text-muted)]">
              {['SOC 2 Type II', 'GDPR Compliant', 'On-premise option'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[var(--accent-violet)]" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CTASection />
    </div>
  )
}
