import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About ChattyAI - Enterprise AI Built for Data Sovereignty',
  description: 'Learn about ChattyAI\'s mission to build private, powerful AI for enterprises. On-premise AI platform designed for organizations that refuse to compromise on security or intelligence.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About ChattyAI - Enterprise AI Platform',
    description: 'Private, powerful AI built for organizations that refuse to compromise on security or intelligence.',
    url: 'https://www.chatty-ai.ai/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ChattyAI - Enterprise AI Platform',
    description: 'Private, powerful AI built for organizations that refuse to compromise on security or intelligence.',
  },
}
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
