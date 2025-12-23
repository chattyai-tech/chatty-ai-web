'use client'

import { FC, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Database,
  BookOpen,
  Bot,
  FileText,
  Code2
} from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { BrandLogo } from './BrandLogo'
import { cn } from '@/lib/utils'

const PLATFORM_LINKS = [
  { name: 'Chatty AI', href: '/products/assistant', icon: BookOpen },
  { name: 'ChattyDB', href: '/products/chattydb', icon: Database },
  { name: 'Chatty Agents', href: '/products/agents', icon: Bot },
  { name: 'Chatty for Word', href: '/products/embedded', icon: FileText },
  { name: 'Chatty Code', href: '/products/code', icon: Code2 }
]

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Platform', href: '/platform', dropdown: true },
  { name: 'Security', href: '/security' },
  { name: 'About', href: '/about' },
  { name: 'Teams', href: '/teams' }
]

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(80)
  const navRef = useRef<HTMLElement>(null)
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate navbar height dynamically
  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight)
    }
  }, [isScrolled])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setMobileDropdownOpen(null)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b',
        isScrolled
          ? 'bg-[var(--bg-primary)]/95 backdrop-blur-xl border-[var(--border-primary)] py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BrandLogo size={48} priority className="w-auto h-12" variant="navbar" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors flex items-center gap-1",
                    pathname === link.href ? "text-[var(--accent-violet)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === link.name && "rotate-180")} />}
                </Link>

                {/* Desktop Dropdown Menu */}
                {link.dropdown && (
                  <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 z-[200]",
                    activeDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  )}>
                    <div className="w-[280px] sm:w-72 max-w-[calc(100vw-2rem)] bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xl rounded-2xl p-2 backdrop-blur-xl">
                      <div className="grid gap-1">
                        {PLATFORM_LINKS.map((item) => (
                          <div key={item.name}>
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--bg-elevated)] transition-colors group/item"
                            >
                              <div className="p-2 rounded-lg bg-[var(--accent-violet)]/10 text-[var(--accent-violet)] group-hover/item:bg-[var(--accent-violet)]/20 transition-colors">
                                <item.icon className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-semibold text-[var(--text-primary)]">{item.name}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--accent-violet)] hover:bg-[var(--bg-elevated)] transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link
              href="/demo"
              className="hidden sm:flex px-6 py-2.5 bg-gradient-to-r from-[var(--purple-600)] to-[var(--violet-600)] text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-[var(--purple-500)]/25 transition-all"
            >
              Book a Demo
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 bottom-0 bg-[var(--bg-primary)] z-[150] transition-all duration-300 overflow-hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        style={{ top: `${navbarHeight}px` }}
      >
        <div className="h-full overflow-y-auto p-6 space-y-2">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="border-b border-[var(--border-primary)] pb-2">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.name ? null : link.name)}
                    className={cn(
                      "w-full flex items-center justify-between py-3 text-lg font-bold",
                      pathname === link.href ? "text-[var(--accent-violet)]" : "text-[var(--text-primary)]"
                    )}
                    aria-expanded={mobileDropdownOpen === link.name}
                    aria-controls={`mobile-menu-${link.name}`}
                  >
                    {link.name}
                    <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", mobileDropdownOpen === link.name && "rotate-180")} />
                  </button>
                  
                  {/* Mobile Dropdown Content */}
                  <div 
                    id={`mobile-menu-${link.name}`}
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      mobileDropdownOpen === link.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="pl-4 pb-3 space-y-2 border-l-2 border-[var(--accent-violet)]/30">
                      {PLATFORM_LINKS.map((item) => (
                        <div key={item.name}>
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 py-2.5 text-[var(--text-secondary)] hover:text-[var(--accent-violet)] transition-colors"
                          >
                            <div className="p-2 rounded-lg bg-[var(--accent-violet)]/10 text-[var(--accent-violet)]">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-3 text-lg font-bold",
                    pathname === link.href ? "text-[var(--accent-violet)]" : "text-[var(--text-primary)]"
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-4">
            <Link
              href="/demo"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 bg-gradient-to-r from-[var(--purple-600)] to-[var(--violet-600)] text-white text-center font-bold rounded-2xl hover:shadow-lg hover:shadow-[var(--purple-500)]/25 transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
