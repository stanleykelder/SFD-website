'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CallToActionProps {
  className?: string
}

export function CallToAction({ className }: CallToActionProps) {
  return (
    <div className={cn('flex flex-wrap gap-x-6 gap-y-4', className)}>
      <Button asChild>
        <Link href="/contact">
          Neem contact op
        </Link>
      </Button>
    </div>
  )
} 