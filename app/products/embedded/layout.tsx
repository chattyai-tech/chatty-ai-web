import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Embedded AI Solutions - Word Add-in & Microsoft Integrations | ChattyAI',
  description: 'Transform Microsoft Word with AI-powered writing assistance. Real-time suggestions, document summarization, tone adjustment, and company knowledge integration. 3x faster writing, 50% less editing.',
  alternates: {
    canonical: '/products/embedded',
  },
  openGraph: {
    title: 'Embedded AI Solutions - Chatty for Word | ChattyAI',
    description: 'AI-powered Microsoft Word add-in with real-time writing suggestions, summarization, and enterprise knowledge integration.',
    url: 'https://www.chatty-ai.ai/products/embedded',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Embedded AI Solutions - Chatty for Word | ChattyAI',
    description: '3x faster writing, 50% less editing, 100% on-brand with AI writing assistant.',
  },
}
export default function EmbeddedLayout({
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
            name: 'Chatty for Word',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Microsoft Windows, Microsoft Office',
            description: 'Transform Microsoft Word with AI-powered writing assistance. Real-time suggestions, document summarization, tone adjustment, and company knowledge integration.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: 'Contact for enterprise pricing',
            },
            featureList: [
              'Real-time writing suggestions',
              'Document summarization',
              'Tone and style adjustment',
              'Company knowledge integration',
              '3x faster writing',
            ],
          }),
        }}
      />

      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products', href: '/platform' }, { label: 'Embedded Solutions', href: '/products/embedded' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
