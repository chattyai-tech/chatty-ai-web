'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Clear any old theme preferences on mount to ensure fresh start
  React.useEffect(() => {
    // Only run on client
    if (typeof window !== 'undefined') {
      // Clear old storage keys that might exist
      try {
        const oldKeys = ['theme', 'next-themes', 'chatty-theme']
        oldKeys.forEach(key => {
          if (localStorage.getItem(key)) {
            localStorage.removeItem(key)
          }
        })
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }, [])

  return (
    <NextThemesProvider 
      {...props}
      storageKey="chatty-ai-theme"
      enableSystem={false}
      disableTransitionOnChange={false}
      forcedTheme={undefined}
    >
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme()
  
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }
  
  return {
    theme: resolvedTheme || theme,
    setTheme,
    toggleTheme
  }
}
