import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Meet Our Team - ChattyAI Leadership & Engineering Experts',
  description: 'Meet the ChattyAI team building the future of enterprise AI. Expert leadership in AI development, enterprise software, and data security driving innovation for organizations worldwide.',
  alternates: {
    canonical: '/teams',
  },
  openGraph: {
    title: 'Meet Our Team | ChattyAI',
    description: 'Meet the team building the future of enterprise AI. Expert leadership in AI development and enterprise software.',
    url: 'https://www.chatty-ai.ai/teams',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Team | ChattyAI',
    description: 'Meet the team building the future of enterprise AI.',
  },
}
export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Team', href: '/teams' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
