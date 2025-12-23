'use client'

import Image from 'next/image'
import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

type BrandLogoProps = {
  className?: string
  size?: number
  priority?: boolean
  variant?: 'navbar' | 'hero' | 'default'
}

export function BrandLogo({ className = "", size = 32, priority = false, variant = 'default' }: BrandLogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to light mode during SSR
  const currentTheme = mounted ? theme : 'light'
  
  // Determine logo source based on theme and variant
  const getLogoSrc = () => {
    // Use PNG logos for both modes
    const darkLogoSrc = '/image 64 (1).png'
    const lightLogoSrc = '/Frame 40917.png'
    
    if (variant === 'navbar') {
      // Navbar: theme-aware logos
      return currentTheme === 'dark' ? darkLogoSrc : lightLogoSrc
    } else if (variant === 'hero') {
      // Hero (inside interactive demo): theme-aware logos
      return currentTheme === 'dark' ? darkLogoSrc : lightLogoSrc
    } else {
      // Default: theme-aware logos
      return currentTheme === 'dark' ? darkLogoSrc : lightLogoSrc
    }
  }
  
  return (
    <div className="relative inline-block">
      <Image
        src={getLogoSrc()}
        alt="ChattyAI"
        width={Math.round(size * 3.11)}
        height={size}
        priority={priority}
        className={className}
        unoptimized={false}
        style={{
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  )
}
