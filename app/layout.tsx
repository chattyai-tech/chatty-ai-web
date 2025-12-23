import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ChattyAI - Enterprise Intelligence Platform',
    template: '%s | ChattyAI',
  },
  description: 'ChattyAI is the enterprise AI that works. Unified AI layer for your organization with secure, on-premise deployment. Get trusted answers from your data instantly.',
  keywords: ['enterprise AI', 'business intelligence', 'AI assistant', 'data analysis', 'secure AI', 'on-premise AI', 'ChattyDB', 'enterprise search'],
  authors: [{ name: 'ChattyAI Team' }],
  creator: 'ChattyAI',
  publisher: 'ChattyAI',
  metadataBase: new URL('https://chattyai.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chattyai.com',
    siteName: 'ChattyAI',
    title: 'ChattyAI - Enterprise Intelligence Platform',
    description: 'ChattyAI is the enterprise AI that works. Unified AI layer for your organization with secure, on-premise deployment.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ChattyAI - Enterprise Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChattyAI - Enterprise Intelligence Platform',
    description: 'ChattyAI is the enterprise AI that works. Unified AI layer for your organization with secure, on-premise deployment.',
    images: ['/og-image.png'],
    creator: '@chattyai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#271b3d' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="min-h-screen text-[var(--text-primary)] selection:bg-brand-violet/30 selection:text-[var(--text-primary)] transition-colors duration-300 relative">
            <Navbar />
            <main id="main-content" className="relative z-10 w-full">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
