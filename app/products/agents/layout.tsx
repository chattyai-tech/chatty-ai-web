import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Chatty Agents - AI Workflow Automation with n8n Integration | ChattyAI',
  description: 'Build autonomous AI agents that automate complex business workflows. Integrate with n8n for 500+ app connections. Multi-step task automation, decision-making AI, and 24/7 autonomous operation.',
  alternates: {
    canonical: '/products/agents',
  },
  openGraph: {
    title: 'Chatty Agents - Autonomous AI Workflows | ChattyAI',
    description: 'Build AI-powered agents with n8n integration. Create complex workflows that connect systems, make decisions, and automate processes.',
    url: 'https://www.chatty-ai.ai/products/agents',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatty Agents - AI Workflow Automation | ChattyAI',
    description: '500+ integrations, 24/7 automation, 80% time saved with autonomous AI agents.',
  },
}
export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Chatty Agents',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Cloud, On-Premise',
            description: 'Build autonomous AI agents that automate complex business workflows. Integrate with n8n for 500+ app connections. Multi-step task automation, decision-making AI, and 24/7 autonomous operation.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: 'Contact for enterprise pricing',
            },
            featureList: [
              'n8n workflow integration',
              'Multi-step task automation',
              'Decision-making capabilities',
              'Enterprise system connectors',
              '500+ app integrations',
            ],
          }),
        }}
      />

      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products', href: '/platform' }, { label: 'Chatty Agents', href: '/products/agents' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
