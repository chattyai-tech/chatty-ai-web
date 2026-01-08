import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Chatty Code - AI-Powered Development Assistant & Code Generator | ChattyAI',
  description: 'Supercharge development with Chatty Code AI. Codebase-aware suggestions, intelligent debugging, code review assistance, and automated documentation. 40% faster coding, 60% fewer bugs.',
  alternates: {
    canonical: '/products/code',
  },
  openGraph: {
    title: 'Chatty Code - AI Code Assistant | ChattyAI',
    description: 'AI that understands your codebase. Intelligent suggestions, debugging, code review, and documentation generation.',
    url: 'https://www.chatty-ai.ai/products/code',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatty Code - AI Development Assistant | ChattyAI',
    description: '40% faster coding, 60% fewer bugs, 2x productivity with AI code assistant.',
  },
}
export default function CodeLayout({
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
            name: 'Chatty Code',
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Web, Cloud, On-Premise',
            description: 'Supercharge development with Chatty Code AI. Codebase-aware suggestions, intelligent debugging, code review assistance, and automated documentation.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: 'Contact for enterprise pricing',
            },
            featureList: [
              'Codebase-aware suggestions',
              'Intelligent debugging',
              'Code review assistance',
              'Documentation generation',
              '40% faster coding',
            ],
          }),
        }}
      />

      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products', href: '/platform' }, { label: 'Chatty Code', href: '/products/code' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
