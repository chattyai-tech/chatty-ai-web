'use client'

import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { 
  Database, 
  Terminal, 
  BarChart3, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Pause, 
  RotateCcw, 
  Table, 
  PieChart, 
  Code, 
  Zap, 
  Lock,
  Eye,
  FileText,
  Layers,
  GitBranch,
  Search,
  ChevronRight,
  FolderOpen,
  TableProperties,
  Key,
  Clock,
  TrendingUp,
  Users
} from 'lucide-react'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'

// Database schema for demo
interface TableSchema {
  name: string
  icon: string
  columns: Array<{ name: string; type: string; isPrimary?: boolean }>
  rowCount: number
}

const databaseSchema: TableSchema[] = [
  {
    name: 'customers',
    icon: '👤',
    columns: [
      { name: 'id', type: 'uuid', isPrimary: true },
      { name: 'name', type: 'varchar(255)' },
      { name: 'email', type: 'varchar(255)' },
      { name: 'created_at', type: 'timestamp' }
    ],
    rowCount: 15420
  },
  {
    name: 'orders',
    icon: '📦',
    columns: [
      { name: 'id', type: 'uuid', isPrimary: true },
      { name: 'customer_id', type: 'uuid' },
      { name: 'total', type: 'decimal(10,2)' },
      { name: 'status', type: 'varchar(50)' }
    ],
    rowCount: 89234
  },
  {
    name: 'products',
    icon: '🏷️',
    columns: [
      { name: 'id', type: 'uuid', isPrimary: true },
      { name: 'name', type: 'varchar(255)' },
      { name: 'price', type: 'decimal(10,2)' },
      { name: 'category', type: 'varchar(100)' }
    ],
    rowCount: 2847
  },
  {
    name: 'analytics',
    icon: '📊',
    columns: [
      { name: 'id', type: 'uuid', isPrimary: true },
      { name: 'event', type: 'varchar(100)' },
      { name: 'user_id', type: 'uuid' },
      { name: 'timestamp', type: 'timestamp' }
    ],
    rowCount: 1250000
  }
]

// Demo queries
const demoQueries = [
  {
    natural: "Show me top 10 customers by total spending",
    sql: `SELECT c.name, SUM(o.total) as total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.name
ORDER BY total_spent DESC
LIMIT 10;`,
    results: [
      { name: 'Acme Corp', total_spent: '$245,890' },
      { name: 'TechStart Inc', total_spent: '$198,450' },
      { name: 'GlobalTrade', total_spent: '$156,320' },
      { name: 'DataFlow LLC', total_spent: '$134,780' },
      { name: 'CloudNine', total_spent: '$98,650' }
    ],
    chartData: [245890, 198450, 156320, 134780, 98650]
  },
  {
    natural: "Revenue by month for the last quarter",
    sql: `SELECT DATE_TRUNC('month', created_at) as month,
       SUM(total) as revenue
FROM orders
WHERE created_at >= NOW() - INTERVAL '3 months'
GROUP BY month
ORDER BY month;`,
    results: [
      { month: 'October', revenue: '$1.2M' },
      { month: 'November', revenue: '$1.5M' },
      { month: 'December', revenue: '$1.8M' }
    ],
    chartData: [1200000, 1500000, 1800000]
  },
  {
    natural: "Products with low inventory needing restock",
    sql: `SELECT name, stock_count, reorder_level
FROM products
WHERE stock_count < reorder_level
ORDER BY (reorder_level - stock_count) DESC;`,
    results: [
      { name: 'Widget Pro', stock: '12 units', status: '⚠️ Critical' },
      { name: 'Sensor X200', stock: '34 units', status: '⚠️ Low' },
      { name: 'Cable Kit', stock: '56 units', status: '⚠️ Low' }
    ],
    chartData: [12, 34, 56]
  }
]

// Database Logo Components
const DatabaseLogos = {
  PostgreSQL: () => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill="#336791" d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.535 4.406 0 0-44.138-18.213-42.17 22.913.418 8.742 12.035 66.167 25.905 48.826 5.073-6.342 9.968-11.691 9.968-11.691 2.432 1.613 5.344 2.447 8.453 2.149l.238-.022c-.072.728-.096 1.437-.066 2.206-2.698 3.029-1.905 3.561-7.304 4.678-5.462 1.129-2.253 3.137-.159 3.659 2.538.632 8.396 1.527 12.357-4.004l-.219.889c1.467 1.174 2.492 7.634 2.314 13.486-.178 5.852-.357 9.865.484 12.994.841 3.129 1.681 10.14 8.858 8.046 6.022-1.756 9.129-6.311 9.564-13.906.311-5.402.54-4.607.564-9.381l.299-1.008c.345-2.859.178-3.78 2.64-3.355l.623.057c1.875.099 4.325-.264 5.771-.97 3.101-1.512 4.94-4.04 1.883-3.376z"/>
      <path fill="#fff" d="M73.182 34.212c-9.463-.474-15.321 2.063-18.254 4.753l-.126-.063c-.196-12.276 9.242-12.707 18.38-12.694 9.138.013 18.576.013 18.38 12.694l-.063.063c-2.917-2.69-8.84-5.219-18.317-4.753z"/>
      <ellipse cx="45.368" cy="60.587" fill="#fff" rx="5.805" ry="7.635"/>
      <ellipse cx="78.893" cy="60.587" fill="#fff" rx="5.805" ry="7.635"/>
      <ellipse cx="45.368" cy="60.093" fill="#336791" rx="2.952" ry="4.015"/>
      <ellipse cx="78.893" cy="60.093" fill="#336791" rx="2.952" ry="4.015"/>
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
      <path fill="#00618A" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.807 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.79-.79-1.869-1.365-2.731l-2.537-2.537c-2.484-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.292-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513l-6.438-.391c-1.309-.547-2.674-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.109-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"/>
    </svg>
  ),
  BigQuery: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#4285F4" d="M6.636 12.449l-2.47-.854c-.064-.022-.128-.045-.192-.065a10.039 10.039 0 0 0-.126 1.592c0 .604.054 1.195.157 1.769l.007.035 2.616-.921a5.96 5.96 0 0 1-.019-.785c0-.261.01-.519.027-.771z"/>
      <path fill="#4285F4" d="M12 6.051c.266 0 .53.015.79.043l.965-2.545.035-.092A10.022 10.022 0 0 0 12 3.119c-.644 0-1.273.06-1.884.176l.043.117.975 2.569c.284-.032.572-.048.866-.03z"/>
      <path fill="#4285F4" d="M18.177 8.037l-2.139 1.615a5.93 5.93 0 0 1 .575 1.275l.015.04 2.612.903c.069.024.139.047.208.072a10.02 10.02 0 0 0-.48-2.339 10.006 10.006 0 0 0-.791-1.566z"/>
      <path fill="#EA4335" d="M12 17.949a5.929 5.929 0 0 1-3.259-.973l-.03.016-1.983 1.648-.064.053a9.962 9.962 0 0 0 2.959 1.509 9.97 9.97 0 0 0 2.377.422l-.001-.112V17.95z"/>
      <path fill="#FBBC05" d="M6.619 15.22l-2.616.921-.007-.035a9.97 9.97 0 0 0 2.015 3.544l.064-.053 1.983-1.648.03-.016a5.94 5.94 0 0 1-1.469-2.713z"/>
      <path fill="#34A853" d="M12 17.949v2.563l.001.112c.818-.04 1.612-.18 2.369-.412a9.962 9.962 0 0 0 2.959-1.509l-.06-.05-1.965-1.634-.023.015A5.929 5.929 0 0 1 12 17.949z"/>
      <path fill="#4285F4" d="M18.628 11.927l-.015-.04-2.612-.903a5.966 5.966 0 0 1 .05.927c0 .999-.247 1.94-.683 2.768l.023.015 1.965 1.634.06.05a10.026 10.026 0 0 0 1.692-3.379c.069-.35.121-.708.157-1.072-.068-.025-.138-.048-.208-.072l-.429.072z"/>
      <path fill="#EA4335" d="M12 6.051a5.95 5.95 0 0 1 4.039 1.573l2.139-1.615.007-.005a10.02 10.02 0 0 0-6.395-2.58c-.061.016-.122.03-.183.047l-.035.092-.965 2.545c.131-.014.262-.024.393-.057z"/>
      <circle cx="12" cy="12" r="3.5" fill="#4285F4"/>
    </svg>
  ),
  Snowflake: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#29B5E8" d="M12.417 2.002a.858.858 0 0 0-.834.858v4.14l-3.586-2.07a.857.857 0 0 0-.858 1.485l3.587 2.071-3.587 2.07a.857.857 0 0 0 .858 1.486l3.586-2.071v4.143a.857.857 0 0 0 1.714 0V9.97l3.587 2.071a.857.857 0 0 0 .857-1.485l-3.586-2.071 3.586-2.07a.857.857 0 0 0-.857-1.486l-3.587 2.07V2.86a.858.858 0 0 0-.88-.858zm0 9.141a.858.858 0 0 0-.834.858v4.143l-3.586-2.071a.857.857 0 0 0-.858 1.485l3.587 2.071-3.587 2.071a.857.857 0 0 0 .858 1.485l3.586-2.07v4.142a.857.857 0 0 0 1.714 0v-4.143l3.587 2.071a.857.857 0 0 0 .857-1.485l-3.586-2.071 3.586-2.071a.857.857 0 0 0-.857-1.485l-3.587 2.07V12a.858.858 0 0 0-.88-.857z"/>
    </svg>
  ),
  Redshift: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#8C4FFF" d="M7.25 12L2 15.5V8.5L7.25 12z"/>
      <path fill="#8C4FFF" d="M7.25 12l5.25-3.5v7L7.25 12z"/>
      <path fill="#E05243" d="M12.5 8.5l5.25 3.5-5.25 3.5v-7z"/>
      <path fill="#E05243" d="M17.75 12L22 15.5V8.5L17.75 12z"/>
      <path fill="#8C4FFF" d="M12 2l5.25 3.5H6.75L12 2z"/>
      <path fill="#E05243" d="M12 22l-5.25-3.5h10.5L12 22z"/>
    </svg>
  ),
  MSSQL: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#CC2927" d="M4.105 7.717l7.895 4.561 7.895-4.561L12 3.156 4.105 7.717z"/>
      <path fill="#CC2927" d="M12 13.422v7.422l7.895-4.561V8.861L12 13.422z"/>
      <path fill="#A91D22" d="M12 13.422v7.422L4.105 16.283V8.861l7.895 4.561z"/>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <path fill="#00ED64" d="M12.546 24c-.322 0-.646-.053-.978-.152-.332-.098-.492-.302-.492-.621v-1.727c-3.104-.5-5.411-2.496-6.476-5.546C3.536 12.904 4.141 9.704 6.235 7.111c1.194-1.477 2.685-2.619 4.382-3.373.398-.176.747-.227 1.078-.176.331.051.596.227.79.502l.147.227c.116.176.224.377.322.604.098.227.191.453.277.68.087.227.171.444.254.654.082.211.162.41.239.597.077.188.153.362.225.522.073.16.144.302.214.426l.199.36c.102.185.224.297.369.333.145.036.314.02.508-.052.194-.072.445-.22.75-.443.306-.224.704-.561 1.192-1.012 1.229-1.137 2.142-2.533 2.798-4.061.156-.363.375-.604.656-.725.281-.12.589-.11.924.031.335.14.573.383.715.728.143.344.169.754.08 1.228-.21 1.11-.649 2.301-1.319 3.573-.67 1.273-1.565 2.47-2.685 3.593-1.12 1.122-2.456 2.032-4.006 2.73-1.55.699-3.285 1.024-5.206.976v2.168c0 .319-.16.523-.492.621-.332.099-.656.152-.978.152z"/>
    </svg>
  ),
  ClickHouse: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
      <rect fill="#FFCC00" x="2" y="2" width="4" height="20" rx="1"/>
      <rect fill="#FFCC00" x="8" y="6" width="4" height="16" rx="1"/>
      <rect fill="#FFCC00" x="14" y="2" width="4" height="20" rx="1"/>
      <rect fill="#FFCC00" x="20" y="8" width="2" height="8" rx="0.5"/>
    </svg>
  )
}

// Supported databases with proper branding
const supportedDatabases = [
  { 
    name: 'PostgreSQL', 
    Logo: DatabaseLogos.PostgreSQL,
    description: 'Advanced open-source',
    gradient: 'from-[#336791]/20 to-[#336791]/5',
    borderColor: 'hover:border-[#336791]/50'
  },
  { 
    name: 'MySQL', 
    Logo: DatabaseLogos.MySQL,
    description: 'Most popular RDBMS',
    gradient: 'from-[#00618A]/20 to-[#00618A]/5',
    borderColor: 'hover:border-[#00618A]/50'
  },
  { 
    name: 'BigQuery', 
    Logo: DatabaseLogos.BigQuery,
    description: 'Google Cloud analytics',
    gradient: 'from-[#4285F4]/20 to-[#4285F4]/5',
    borderColor: 'hover:border-[#4285F4]/50'
  },
  { 
    name: 'Snowflake', 
    Logo: DatabaseLogos.Snowflake,
    description: 'Cloud data warehouse',
    gradient: 'from-[#29B5E8]/20 to-[#29B5E8]/5',
    borderColor: 'hover:border-[#29B5E8]/50'
  },
  { 
    name: 'Redshift', 
    Logo: DatabaseLogos.Redshift,
    description: 'AWS data warehouse',
    gradient: 'from-[#8C4FFF]/20 to-[#8C4FFF]/5',
    borderColor: 'hover:border-[#8C4FFF]/50'
  },
  { 
    name: 'MS SQL', 
    Logo: DatabaseLogos.MSSQL,
    description: 'Microsoft SQL Server',
    gradient: 'from-[#CC2927]/20 to-[#CC2927]/5',
    borderColor: 'hover:border-[#CC2927]/50'
  },
  { 
    name: 'MongoDB', 
    Logo: DatabaseLogos.MongoDB,
    description: 'NoSQL document DB',
    gradient: 'from-[#00ED64]/20 to-[#00ED64]/5',
    borderColor: 'hover:border-[#00ED64]/50'
  },
  { 
    name: 'ClickHouse', 
    Logo: DatabaseLogos.ClickHouse,
    description: 'OLAP analytics',
    gradient: 'from-[#FFCC00]/20 to-[#FFCC00]/5',
    borderColor: 'hover:border-[#FFCC00]/50'
  }
]

// Enterprise features
const enterpriseFeatures = [
  {
    icon: Lock,
    title: 'Row-Level Security',
    description: 'Respects your existing database permissions. Users only see what they should.'
  },
  {
    icon: Eye,
    title: 'Full Audit Logging',
    description: 'Every query tracked with user, timestamp, and data accessed.'
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II',
    description: 'Enterprise-grade compliance for regulated industries.'
  },
  {
    icon: Layers,
    title: 'On-Premise Deploy',
    description: 'Runs entirely on your infrastructure. Data never leaves your network.'
  }
]

export default function ChattyDBPage() {
  // Demo state
  const [activeQuery, setActiveQuery] = useState(0)
  const [demoStage, setDemoStage] = useState<'idle' | 'typing' | 'processing' | 'sql' | 'results'>('idle')
  const [typedQuery, setTypedQuery] = useState('')
  const [showSQL, setShowSQL] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  
  // Schema explorer state
  const [expandedTable, setExpandedTable] = useState<string | null>('customers')
  const [selectedTable, setSelectedTable] = useState<string>('customers')
  
  // Refs
  const demoTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Type query animation
  const typeQuery = useCallback((query: string, onComplete: () => void) => {
    let i = 0
    setTypedQuery('')
    
    const type = () => {
      if (i < query.length) {
        setTypedQuery(query.slice(0, i + 1))
        i++
        typingTimeoutRef.current = setTimeout(type, 30)
      } else {
        onComplete()
      }
    }
    
    type()
  }, [])

  // Run demo sequence
  const runDemo = useCallback(() => {
    const currentQuery = demoQueries[activeQuery]
    
    setDemoStage('typing')
    setShowSQL(false)
    setShowResults(false)
    
    typeQuery(currentQuery.natural, () => {
      setDemoStage('processing')
      
      demoTimeoutRef.current = setTimeout(() => {
        setShowSQL(true)
        setDemoStage('sql')
        
        demoTimeoutRef.current = setTimeout(() => {
          setShowResults(true)
          setDemoStage('results')
          
          // Move to next query after showing results
          if (isAutoPlaying && !hasUserInteracted) {
            demoTimeoutRef.current = setTimeout(() => {
              setActiveQuery((prev) => (prev + 1) % demoQueries.length)
            }, 4000)
          }
        }, 1500)
      }, 1200)
    })
  }, [activeQuery, typeQuery, isAutoPlaying, hasUserInteracted])

  // Auto-play demo
  useEffect(() => {
    if (isAutoPlaying && !hasUserInteracted) {
      runDemo()
    }

    return () => {
      if (demoTimeoutRef.current) clearTimeout(demoTimeoutRef.current)
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    }
  }, [activeQuery, isAutoPlaying, hasUserInteracted, runDemo])

  // Handle query selection
  const selectQuery = (index: number) => {
    setHasUserInteracted(true)
    setActiveQuery(index)
    runDemo()
  }

  // Toggle auto-play
  const toggleAutoPlay = () => {
    if (hasUserInteracted) {
      setHasUserInteracted(false)
      setIsAutoPlaying(true)
      setActiveQuery(0)
      } else {
      setIsAutoPlaying(!isAutoPlaying)
    }
  }

  const currentQuery = demoQueries[activeQuery]
  const currentTable = databaseSchema.find(t => t.name === selectedTable)

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      {/* Hero Section - Interactive Database Demo */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[var(--purple-500)]/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[var(--violet-500)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Hero Header */}
          <div className="text-center mb-10">
              <motion.div
              initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--purple-500)]/10 border border-[var(--purple-500)]/20 text-sm font-semibold mb-5"
              >
              <Database className="w-4 h-4 text-[var(--accent-violet)]" />
              <span className="text-[var(--accent-violet)]">Natural Language to SQL</span>
              </motion.div>

              <motion.h1
              initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-5 leading-[1.1]"
              >
                Talk to your
                <br />
              <span className="bg-gradient-to-r from-[var(--purple-500)] via-[var(--violet-500)] to-[var(--indigo-500)] bg-clip-text text-transparent">
                databases
              </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-6"
              >
              Ask questions in plain English. Get instant SQL queries, visualizations, and insights.
              No SQL expertise required.
              </motion.p>

            {/* Demo Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
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
                    Resume Auto
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
                Try ChattyDB
                <ArrowRight className="w-4 h-4" />
                </Link>
            </motion.div>

            {/* Status */}
            {isAutoPlaying && !hasUserInteracted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)]"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Live demo • Click to interact</span>
              </motion.div>
            )}
            </div>

          {/* Interactive Demo */}
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-b from-[var(--purple-500)]/20 via-[var(--violet-500)]/10 to-transparent rounded-3xl blur-2xl opacity-60" />

            {/* Main Interface */}
            <div className="relative bg-[var(--bg-card)] rounded-xl border border-[var(--border-primary)] overflow-hidden shadow-2xl">
              {/* Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-surface)] border-b border-[var(--border-primary)]">
                  <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                  <span className="ml-4 text-sm text-[var(--text-muted)]">ChattyDB</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 text-green-500 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span>Connected to PostgreSQL</span>
                  </div>
                  </div>
                </div>

              <div className="flex h-[550px]">
                {/* Left: Schema Explorer */}
                <div className="w-64 border-r border-[var(--border-primary)] bg-[var(--bg-surface)] flex flex-col">
                  <div className="px-3 py-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border-primary)]">
                    Database Schema
                  </div>
                  <div className="flex-1 overflow-auto p-2">
                    {databaseSchema.map((table) => (
                      <div key={table.name} className="mb-1">
                        <button
                      type="button"
                      onClick={() => {
                            setExpandedTable(expandedTable === table.name ? null : table.name)
                            setSelectedTable(table.name)
                            setHasUserInteracted(true)
                          }}
                          className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-all ${
                            selectedTable === table.name
                              ? 'bg-[var(--purple-500)]/15 text-[var(--accent-violet)]'
                              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]'
                          }`}
                        >
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${expandedTable === table.name ? 'rotate-90' : ''}`} />
                          <span>{table.icon}</span>
                          <span className="flex-1 text-left">{table.name}</span>
                          <span className="text-xs text-[var(--text-muted)]">{table.rowCount.toLocaleString()}</span>
                        </button>
                        
                        <AnimatePresence>
                          {expandedTable === table.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-6 pl-2 border-l border-[var(--border-primary)] py-1">
                                {table.columns.map((col) => (
                                  <div key={col.name} className="flex items-center gap-2 px-2 py-1 text-xs">
                                    {col.isPrimary ? (
                                      <Key className="w-3 h-3 text-yellow-500" />
                                    ) : (
                                      <TableProperties className="w-3 h-3 text-[var(--text-muted)]" />
                                    )}
                                    <span className="text-[var(--text-primary)]">{col.name}</span>
                                    <span className="text-[var(--text-muted)]">{col.type}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="p-3 border-t border-[var(--border-primary)] bg-[var(--bg-card)]">
                    <div className="text-xs text-[var(--text-muted)] mb-2">Quick Stats</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[var(--bg-surface)] rounded-lg px-2 py-1.5 text-center">
                        <div className="text-lg font-bold text-[var(--text-primary)]">4</div>
                        <div className="text-[10px] text-[var(--text-muted)]">Tables</div>
                      </div>
                      <div className="bg-[var(--bg-surface)] rounded-lg px-2 py-1.5 text-center">
                        <div className="text-lg font-bold text-[var(--text-primary)]">1.3M</div>
                        <div className="text-[10px] text-[var(--text-muted)]">Rows</div>
                      </div>
                    </div>
                  </div>
                    </div>

                {/* Center: Query & Results */}
                <div className="flex-1 flex flex-col">
                  {/* Query Input */}
                  <div className="p-4 border-b border-[var(--border-primary)] bg-[var(--bg-surface)]">
                            <div className="flex items-center gap-2 mb-2">
                      <Search className="w-4 h-4 text-[var(--accent-violet)]" />
                      <span className="text-xs text-[var(--text-muted)] font-medium">Ask in natural language</span>
                      {demoStage === 'processing' && (
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--purple-500)]/10 text-[var(--accent-violet)] text-xs">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-3 h-3 border-2 border-[var(--accent-violet)]/30 border-t-[var(--accent-violet)] rounded-full"
                          />
                          <span>Generating SQL...</span>
                            </div>
                      )}
                    </div>
                    <div className="bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg px-4 py-3 min-h-[48px]">
                      <span className="text-[var(--text-primary)]">
                                {typedQuery}
                                {demoStage === 'typing' && (
                                  <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.6, repeat: Infinity }}
                            className="inline-block w-0.5 h-5 bg-[var(--accent-violet)] ml-0.5 align-middle"
                                  />
                                )}
                              </span>
                            </div>
                          </div>

                  {/* SQL Output */}
                      <AnimatePresence>
                        {showSQL && (
                          <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-b border-[var(--border-primary)]"
                      >
                        <div className="px-4 py-2 bg-[var(--bg-surface)] flex items-center justify-between">
                              <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs text-[var(--text-muted)] font-medium">Generated SQL</span>
                              </div>
                          <div className="flex items-center gap-1.5 text-emerald-500 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Optimized</span>
                              </div>
                            </div>
                        <div className="p-4 bg-[#0d1117] overflow-auto max-h-[150px]">
                          <pre className="text-xs font-mono text-emerald-400 leading-relaxed whitespace-pre">
                            {currentQuery.sql}
                          </pre>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                  {/* Results */}
                  <AnimatePresence>
                    {showResults && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 flex flex-col overflow-hidden"
                      >
                        <div className="px-4 py-2 bg-[var(--bg-surface)] flex items-center justify-between border-b border-[var(--border-primary)]">
                            <div className="flex items-center gap-2">
                            <Table className="w-4 h-4 text-[var(--accent-violet)]" />
                            <span className="text-xs text-[var(--text-muted)] font-medium">Results</span>
                            </div>
                          <span className="text-xs text-[var(--text-muted)]">{currentQuery.results.length} rows</span>
                            </div>
                        
                        <div className="flex-1 flex">
                          {/* Table Results */}
                          <div className="flex-1 p-4 overflow-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="text-left text-[var(--text-muted)] border-b border-[var(--border-primary)]">
                                  {Object.keys(currentQuery.results[0]).map((key) => (
                                    <th key={key} className="pb-2 font-medium">{key}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {currentQuery.results.map((row, i) => (
                                  <motion.tr
                                    key={`row-${i}`}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                    className="border-b border-[var(--border-primary)]/50 hover:bg-[var(--bg-hover)]"
                                  >
                                    {Object.values(row).map((val, j) => (
                                      <td key={`cell-${i}-${j}`} className="py-2 text-[var(--text-primary)]">
                                        {val as string}
                                      </td>
                                    ))}
                                  </motion.tr>
                                ))}
                              </tbody>
                            </table>
                </div>

                          {/* Mini Chart */}
                          <div className="w-48 border-l border-[var(--border-primary)] p-4 bg-[var(--bg-surface)]">
                            <div className="text-xs text-[var(--text-muted)] mb-3">Visualization</div>
                            <div className="space-y-2">
                              {currentQuery.chartData.slice(0, 5).map((value, i) => {
                                const max = Math.max(...currentQuery.chartData)
                                const width = (value / max) * 100
                                return (
                      <motion.div
                                    key={`bar-${i}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${width}%` }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="h-5 bg-gradient-to-r from-[var(--purple-500)] to-[var(--violet-500)] rounded flex items-center justify-end px-2"
                                  >
                                    <span className="text-[10px] text-white font-medium">{i + 1}</span>
                                  </motion.div>
                                )
                              })}
                  </div>
                </div>
              </div>
            </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Idle State */}
                  {demoStage === 'idle' && (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <Database className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-3" />
                        <p className="text-sm text-[var(--text-muted)]">Select a query to start</p>
            </div>
                  </div>
                  )}
              </div>

                {/* Right: Query Templates */}
                <div className="w-72 border-l border-[var(--border-primary)] bg-[var(--bg-surface)] flex flex-col">
                  <div className="px-3 py-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border-primary)]">
                    Example Queries
                  </div>
                  <div className="flex-1 overflow-auto p-2 space-y-2">
                    {demoQueries.map((query, i) => (
                      <button
                        key={`query-${i}`}
                        type="button"
                        onClick={() => selectQuery(i)}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          activeQuery === i
                            ? 'bg-[var(--purple-500)]/10 border-[var(--purple-500)]/30 shadow-lg shadow-[var(--purple-500)]/5'
                            : 'bg-[var(--bg-card)] border-[var(--border-primary)] hover:border-[var(--purple-500)]/20'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <Terminal className={`w-4 h-4 mt-0.5 shrink-0 ${activeQuery === i ? 'text-[var(--accent-violet)]' : 'text-[var(--text-muted)]'}`} />
                          <span className={`text-sm ${activeQuery === i ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                            {query.natural}
                          </span>
                        </div>
                      </button>
                    ))}
                </div>

                  {/* Query Stats */}
                  <div className="p-3 border-t border-[var(--border-primary)] bg-[var(--bg-card)]">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[var(--text-muted)]">Avg Response</span>
                      <span className="text-[var(--accent-violet)] font-medium">0.8s</span>
                  </div>
                    <div className="flex items-center justify-between text-xs mt-1">
                      <span className="text-[var(--text-muted)]">Query Accuracy</span>
                      <span className="text-emerald-500 font-medium">98.5%</span>
                </div>
                    </div>
                      </div>
              </div>

              {/* Status Bar */}
              <div className="px-4 py-1.5 bg-[var(--purple-600)] text-white text-xs font-medium flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>ChattyDB Active</span>
                                </span>
                  <span className="opacity-70">PostgreSQL 15.2</span>
                      </div>
                <div className="flex items-center gap-4 opacity-70">
                  <span>Tables: 4</span>
                  <span>Rows: 1.3M</span>
                    </div>
                    </div>
              </div>
            </motion.div>
          </div>
        </section>

      {/* Supported Databases */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-b from-[var(--bg-surface)] via-[var(--bg-primary)] to-[var(--bg-surface)] border-y border-[var(--border-primary)] overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--purple-500)]/5 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--purple-500)]/10 border border-[var(--purple-500)]/20 text-sm font-semibold mb-5"
              >
                <Database className="w-4 h-4 text-[var(--accent-violet)]" />
                <span className="text-[var(--accent-violet)]">Universal Compatibility</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4"
              >
                Works with your existing
                <br />
                <span className="bg-gradient-to-r from-[var(--purple-500)] via-[var(--violet-500)] to-[var(--indigo-500)] bg-clip-text text-transparent">
                  database infrastructure
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto"
              >
                Connect to 40+ database types in minutes. Zero migration required.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {supportedDatabases.map((db, i) => (
                <motion.div
                  key={db.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, type: "spring" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative p-6 rounded-2xl bg-gradient-to-br ${db.gradient} backdrop-blur-sm border border-[var(--border-primary)] ${db.borderColor} transition-all duration-300 cursor-default overflow-hidden`}
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Logo */}
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mb-4 p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] group-hover:border-[var(--purple-500)]/30 transition-colors shadow-lg"
                    >
                      <db.Logo />
                    </motion.div>
                    
                    {/* Name */}
                    <h3 className="font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-violet)] transition-colors">
                      {db.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-[var(--text-muted)]">
                      {db.description}
                    </p>
                    
                    {/* Connection indicator */}
                    <div className="mt-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-medium text-green-500">Ready</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional databases note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--bg-card)] border border-[var(--border-primary)]">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--purple-500)] to-[var(--violet-600)] border-2 border-[var(--bg-card)] flex items-center justify-center">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-[var(--text-secondary)]">
                  <span className="font-bold text-[var(--text-primary)]">+32 more</span> databases supported
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Enterprise Security */}
      <ScrollReveal>
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--purple-500)]/10 border border-[var(--purple-500)]/20 text-sm font-semibold mb-5"
              >
                <Shield className="w-4 h-4 text-[var(--accent-violet)]" />
                <span className="text-[var(--accent-violet)]">Enterprise Security</span>
                        </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Built for regulated industries
                </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Your data never leaves your infrastructure. Full audit logging, row-level security, and SOC 2 compliance.
                </p>
              </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterpriseFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--purple-500)]/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--purple-500)] to-[var(--violet-600)] flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                        </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Use Cases */}
      <ScrollReveal>
        <section className="py-24 bg-[var(--bg-surface)] border-t border-[var(--border-primary)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Empower every team
              </h2>
              <p className="text-[var(--text-secondary)]">From analysts to executives, everyone gets instant data access.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, title: 'Business Analysts', desc: 'Answer ad-hoc questions instantly without SQL knowledge.', color: 'from-blue-500 to-blue-600' },
                { icon: Users, title: 'Data Teams', desc: 'Accelerate query development and validate data faster.', color: 'from-purple-500 to-purple-600' },
                { icon: BarChart3, title: 'Executives', desc: 'Instant access to key business metrics and trends.', color: 'from-violet-500 to-violet-600' },
                { icon: Clock, title: 'Support Teams', desc: 'Real-time customer data for faster issue resolution.', color: 'from-pink-500 to-pink-600' }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--purple-500)]/30 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                      </motion.div>
                    ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '40+', label: 'Database Types' },
                { value: '98.5%', label: 'Query Accuracy' },
                { value: '<1s', label: 'Avg Response' },
                { value: '100%', label: 'On-Premise' }
              ].map((stat, i) => (
            <motion.div
                  key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-[var(--purple-500)] to-[var(--violet-500)] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
            </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <CTASection />
    </div>
  )
}
