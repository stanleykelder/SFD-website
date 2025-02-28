import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">The page you're looking for doesn't exist.</p>
      <Button asChild className="mt-8">
        <Link href="/">
          Return Home
        </Link>
      </Button>
    </div>
  )
} 