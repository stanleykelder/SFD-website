'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function getThemeClass(pathname: string) {
  // Ensure we're using normalized paths
  const normalizedPath = pathname.toLowerCase()
  
  if (normalizedPath === '/') return 'theme-home'
  if (normalizedPath.startsWith('/innovatiebegeleiding')) return 'theme-innovation'
  if (normalizedPath.startsWith('/trainingen') || normalizedPath.startsWith('/workshops')) return 'theme-workshops'
  if (normalizedPath.startsWith('/over-stanley')) return 'theme-about'
  if (normalizedPath.startsWith('/contact')) return 'theme-contact'
  return 'theme-home'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const themeClass = getThemeClass(pathname)
    document.documentElement.className = themeClass
  }, [pathname])

  return children
} 