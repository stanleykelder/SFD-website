'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'INNOVATIEBEGELEIDING', href: '/innovatiebegeleiding' },
    { name: 'TRAININGEN', href: '/trainingen' },
    { name: 'OVER STANLEY', href: '/over-stanley' },
    { name: 'CONTACT', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-6">
          <Link href="/" className="text-2xl font-bold text-primary mb-6">
            STANLEY INNOVATION
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-base font-medium transition-all duration-300 hover:text-primary relative group',
                  pathname === item.href ? 'text-primary' : 'text-primary'
                )}
              >
                {item.name}
                <span className={cn(
                  'absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300',
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                )} />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block py-2 text-base font-medium transition-colors relative group',
                    pathname === item.href ? 'text-primary' : 'text-primary hover:text-primary'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className={cn(
                    'absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300',
                    pathname === item.href ? 'scale-x-100' : 'scale-x-0'
                  )} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 