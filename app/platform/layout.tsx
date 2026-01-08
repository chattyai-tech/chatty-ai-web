import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'AI Platform Features - ChattyDB, Agents, Assistant & More | ChattyAI',
  description: 'Explore five powerful AI products in one unified enterprise platform: ChattyDB for natural language SQL, AI Agents for workflow automation, AI Assistant with RAG, Code assistant, and embedded solutions.',
  alternates: {
    canonical: '/platform',
  },
  openGraph: {
    title: 'Complete Enterprise AI Platform | ChattyAI',
    description: 'Five powerful AI products, one unified platform. Transform enterprise workflows with ChattyDB, AI Agents, Assistant, Code, and embedded solutions.',
    url: 'https://www.chatty-ai.ai/platform',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Enterprise AI Platform | ChattyAI',
    description: 'Five powerful AI products, one unified platform for enterprise teams.',
  },
}

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Platform', href: '/platform' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
