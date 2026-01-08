import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Book a Demo - Schedule Your ChattyAI Walkthrough | ChattyAI',
  description: 'Schedule a personalized demo of ChattyAI. See our enterprise AI platform in action with your data. 30-minute focused walkthrough with security deep dive and custom use cases.',
  alternates: {
    canonical: '/demo',
  },
  openGraph: {
    title: 'Book a Demo - ChattyAI Enterprise Platform',
    description: 'Schedule a personalized walkthrough of ChattyAI. See our enterprise AI platform in action.',
    url: 'https://www.chatty-ai.ai/demo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Demo | ChattyAI',
    description: 'Schedule a personalized ChattyAI demo. See the platform in action.',
  },
}
export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Book a Demo', href: '/demo' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
