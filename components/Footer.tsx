'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from '@/components/ui/hover-footer';
import { BrandLogo } from './BrandLogo';
import { link } from 'fs';

const FOOTER_LINKS = {
  Platform: [
    { label: 'Platform Overview', href: '/platform' },
    { label: 'Chatty AI', href: '/products/assistant' },
    { label: 'ChattyDB', href: '/products/chattydb' },
    { label: 'Chatty Agents', href: '/products/agents' },
    { label: 'Chatty for Word', href: '/platform#word' },
    { label: 'Chatty Code', href: '/products/embedded' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Teams', href: '/teams' },
    { label: 'Security', href: '/security' },
    { label: 'Book a Demo', href: '/demo' },
  ],
};

const SOCIAL_LINKS = [
  // {
  //   name: "Twitter",
  //   icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  // },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/109996885/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  // {
  //   name: "GitHub",
  //   icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  // },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-footer-card)] border border-[var(--border-primary)] relative h-fit rounded-[2rem] sm:rounded-[3rem] overflow-hidden m-4 sm:m-8 z-10 transition-colors duration-300">
      {/* Newsletter Section - Styled to match current site */}
      <div className="border-b border-[var(--border-primary)] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
                Stay updated with Chatty AI
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)]">
                Get the latest news, product updates, and enterprise AI
                insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 xl:w-80 h-11 sm:h-12 px-5 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all font-medium"
              />
              <button className="h-11 sm:h-12 px-8 rounded-xl bg-gradient-to-r from-[var(--cta-primary-bg)] to-[var(--accent-violet)] text-[var(--cta-primary-text)] text-sm sm:text-base font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-16 md:py-20 z-20 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-16">
          {/* Brand section */}
          <div className="flex flex-col space-y-6 sm:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <BrandLogo size={34} className="h-8 sm:h-9 w-auto" />
            </Link>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] max-w-xs">
              Enterprise AI that transforms your knowledge into action. Secure,
              on-premise, and intelligent intelligence for the modern
              enterprise.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  aria-label={social.name}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-[var(--bg-card)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-muted)] hover:text-brand-purple hover:border-brand-purple/50 hover:bg-brand-purple/5 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg text-[var(--text-primary)] mb-6">
                {category}
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-[var(--text-secondary)] hover:text-brand-purple transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h4 className="font-bold text-lg text-[var(--text-primary)] mb-6">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-sm sm:text-base text-[var(--text-secondary)]">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-500" />
                </div>
                <a
                  href="mailto:sales@chatty-ai.ai"
                  className="hover:text-blue-500 transition-colors"
                >
                  sales@chatty-ai.ai
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base text-[var(--text-secondary)]">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-purple-500" />
                </div>
                <span>+972 52 871 1122</span>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-[var(--text-secondary)]">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <span>
                  Kibbutz Galuyot 46,
                  <br />
                  <span className="text-xs text-[var(--text-muted)]">
                    Petah Tikva 4944637, Israel
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Bottom Bar */}
        <div className="border-t border-[var(--border-primary)] mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
            <p className="text-sm text-[var(--text-muted)] text-center sm:text-left font-medium">
              © {currentYear} Chatty AI. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 sm:gap-8 text-sm text-[var(--text-muted)] font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Systems Operational
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="hover:text-brand-purple transition-colors"
                >
                  Privacy
                </a>
                <span className="text-[var(--text-muted)]">|</span>
                <a
                  href="#"
                  className="hover:text-brand-purple transition-colors"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Text Hover - Controlled visibility */}
      <div className="lg:flex hidden h-[22rem] sm:h-[28rem] md:h-[34rem] -mt-44 sm:-mt-52 -mb-28 sm:-mb-36 relative z-10 pointer-events-none sm:pointer-events-auto select-none opacity-90 overflow-hidden">
        <TextHoverEffect text="Chatty AI" className="w-full h-full" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};
