import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ChattyAI - Enterprise Intelligence Platform',
    template: '%s | ChattyAI',
  },
  description:
    'ChattyAI is the enterprise AI that works. Unified AI layer for your organization with secure, on-premise deployment. Get trusted answers from your data instantly.',
  authors: [{ name: 'ChattyAI Team' }],
  creator: 'ChattyAI',
  publisher: 'ChattyAI',
  metadataBase: new URL('https://www.chatty-ai.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chatty-ai.ai',
    siteName: 'ChattyAI',
    title: 'ChattyAI - Enterprise Intelligence Platform',
    description:
      'ChattyAI is the enterprise AI that works. Unified AI layer for your organization with secure, on-premise deployment.',
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
    description:
      'ChattyAI is the enterprise AI that works. Unified AI layer for your organization with secure, on-premise deployment.',
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#271b3d' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MBW5BDXMJG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MBW5BDXMJG');
          `}
        </Script>
      </head>
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Chatty AI',
              url: 'https://www.chatty-ai.ai',
              logo: 'https://www.chatty-ai.ai/logo.png',
              description:
                'Enterprise AI platform with secure, on-premise deployment. Unified AI layer for your organization.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Shabazi 26',
                addressLocality: 'Rosh HaAyin',
                addressCountry: 'IL',
              },
              sameAs: ['https://www.linkedin.com/company/chattyai-ai'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                url: 'https://www.chatty-ai.ai/demo',
              },
            }),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ChattyAI',
              url: 'https://www.chatty-ai.ai',
              description:
                'Enterprise Intelligence Platform - Unified AI layer for your organization',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate:
                    'https://www.chatty-ai.ai/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="light">
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
  );
}
