import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'ChattyDB - Natural Language to SQL Database Queries | ChattyAI',
  description: 'Query databases using plain English with ChattyDB. Convert natural language to SQL instantly. Connect to 40+ databases including PostgreSQL, MySQL, MongoDB. Enterprise-grade security and accuracy.',
  alternates: {
    canonical: '/products/chattydb',
  },
  openGraph: {
    title: 'ChattyDB - Natural Language Database Queries | ChattyAI',
    description: 'Query your databases using plain English. 40+ database support, 100% SQL accuracy, 10x faster than traditional queries.',
    url: 'https://www.chatty-ai.ai/products/chattydb',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChattyDB - Natural Language to SQL | ChattyAI',
    description: 'Query your databases using plain English. Enterprise-grade accuracy and security.',
  },
}
export default function ChattyDBLayout({
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
            name: 'ChattyDB',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Cloud, On-Premise',
            description: 'Query databases using plain English with ChattyDB. Convert natural language to SQL instantly. Connect to 40+ databases including PostgreSQL, MySQL, MongoDB.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: 'Contact for enterprise pricing',
            },
            featureList: [
              'Natural language queries',
              'Multi-database support (40+ databases)',
              'Real-time data visualization',
              'Secure data access controls',
              '100% SQL accuracy',
            ],
          }),
        }}
      />

      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products', href: '/platform' }, { label: 'ChattyDB', href: '/products/chattydb' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
