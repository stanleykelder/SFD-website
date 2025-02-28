'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

type ThemeClass = 'theme-home' | 'theme-innovation' | 'theme-workshops' | 'theme-about' | 'theme-contact'

const THEME_CLASSES: ThemeClass[] = [
  'theme-home',
  'theme-innovation',
  'theme-workshops',
  'theme-about',
  'theme-contact'
]

function getThemeClass(pathname: string): ThemeClass {
  const normalizedPath = pathname.toLowerCase()
  
  if (normalizedPath === '/') return 'theme-home'
  if (normalizedPath.startsWith('/innovatiebegeleiding')) return 'theme-innovation'
  if (normalizedPath.startsWith('/trainingen') || normalizedPath.startsWith('/workshops')) return 'theme-workshops'
  if (normalizedPath.startsWith('/over-stanley')) return 'theme-about'
  if (normalizedPath.startsWith('/contact')) return 'theme-contact'
  return 'theme-home'
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const pathname = usePathname()

  useEffect(() => {
    const themeClass = getThemeClass(pathname)
    const root = document.documentElement
    
    // Remove all theme classes
    THEME_CLASSES.forEach(cls => root.classList.remove(cls))
    
    // Add new theme class
    root.classList.add(themeClass)
  }, [pathname])

  return children
} 