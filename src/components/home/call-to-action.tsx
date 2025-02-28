'use client'

import { cn } from '@/lib/utils'

interface CallToActionProps {
  className?: string
}

export function CallToAction({ className }: CallToActionProps) {
  return (
    <div className={cn('flex flex-wrap gap-x-6 gap-y-4', className)}>
      <a
        href="/contact"
        className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Neem contact op
      </a>
    </div>
  )
} 