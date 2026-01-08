import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Chatty AI Assistant - RAG-Powered Enterprise Knowledge Search | ChattyAI',
  description: 'AI-powered knowledge assistant with Retrieval-Augmented Generation. Search 10M+ documents with zero hallucinations, cited sources, and sub-second responses. Context-aware enterprise AI search.',
  alternates: {
    canonical: '/products/assistant',
  },
  openGraph: {
    title: 'Chatty AI Assistant - RAG Knowledge Search | ChattyAI',
    description: 'RAG-powered AI that searches your documents with cited sources, no hallucinations, and sub-second responses.',
    url: 'https://www.chatty-ai.ai/products/assistant',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatty AI Assistant - Enterprise Knowledge Search | ChattyAI',
    description: '10M+ documents, 99.9% accuracy, zero hallucinations with cited sources.',
  },
}
export default function AssistantLayout({
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
            name: 'Chatty AI Assistant',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Cloud, On-Premise',
            description: 'AI-powered knowledge assistant with Retrieval-Augmented Generation. Search 10M+ documents with zero hallucinations, cited sources, and sub-second responses.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: 'Contact for enterprise pricing',
            },
            featureList: [
              'Zero hallucinations with cited sources',
              'Semantic search across millions of documents',
              'Context-aware understanding',
              'Sub-second response times',
              'On-premise deployment option',
            ],
          }),
        }}
      />

      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products', href: '/platform' }, { label: 'Chatty AI Assistant', href: '/products/assistant' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
