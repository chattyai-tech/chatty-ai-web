import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Enterprise AI Security - SOC 2, On-Premise, GDPR Compliant | ChattyAI',
  description: 'ChattyAI enterprise security: On-premise deployment, SOC 2 Type II certified, GDPR compliant, AES-256 encryption. Your data never leaves your infrastructure. Zero-trust architecture built for data sovereignty.',
  alternates: {
    canonical: '/security',
  },
  openGraph: {
    title: 'Enterprise AI Security & Compliance | ChattyAI',
    description: 'Your data never leaves your walls. SOC 2 Type II certified, on-premise deployment, GDPR compliant enterprise AI platform.',
    url: 'https://www.chatty-ai.ai/security',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise AI Security & Compliance | ChattyAI',
    description: 'Your data never leaves your walls. Enterprise-grade security architecture.',
  },
}
export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Breadcrumbs - positioned below navbar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-[110]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Security', href: '/security' }]} />
        </div>
      </div>

      {children}
    </>
  )
}
