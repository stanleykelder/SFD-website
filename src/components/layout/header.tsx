import Link from 'next/link'
import { NavMenu } from './nav.menu'
import { Button } from '../ui/button'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">InnovateCoach</span>
          </Link>

          <div className="flex items-center space-x-8">
            <NavMenu />
            <Button asChild>
              <Link href="/contact">
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 