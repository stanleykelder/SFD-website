'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

export function SiteFooter() {
  return (
    <footer className="border-t py-8 md:py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-8 md:px-0">
            <Link 
              href="/" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              HOME
            </Link>
            <Link 
              href="/innovatiebegeleiding" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              INNOVATIEBEGELEIDING
            </Link>
            <Link 
              href="/over-stanley" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              OVER STANLEY
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              CONTACT
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 md:items-end">
            <div className="text-sm text-primary-foreground/90 hover:text-primary-foreground">
              <a href="mailto:stanley@stanleyinnovation.nl" className="hover:underline">stanley@stanleyinnovation.nl</a>
            </div>
            <div className="text-sm text-primary-foreground/90 hover:text-primary-foreground">
              <a href="tel:+31620926980" className="hover:underline">+31 6 20 92 69 80</a>
            </div>
            <div className="text-sm text-primary-foreground/80 mt-2">
              © {new Date().getFullYear()} Stanley Innovation. Alle rechten voorbehouden.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 