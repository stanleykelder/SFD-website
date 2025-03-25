import { cn } from '@/lib/utils'
import React from 'react'

interface ShadowedCardProps {
  children: React.ReactNode
  className?: string
  contentClassName?: string
  shadowColor?: string
  shadowPosition?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left'
  containerClassName?: string
}

export function ShadowedCard({
  children,
  className,
  contentClassName,
  shadowColor = 'bg-primary',
  shadowPosition = 'bottom-right',
  containerClassName
}: ShadowedCardProps) {
  // Determine shadow position classes
  const shadowPositionClasses = {
    'bottom-right': 'top-6 left-6',
    'top-right': 'bottom-6 left-6',
    'bottom-left': 'top-6 right-6',
    'top-left': 'bottom-6 right-6'
  };

  const shadowClass = shadowPositionClasses[shadowPosition];
  
  return (
    <div className={cn("relative mx-6", containerClassName)}>
      <div className="relative">
        <div className="relative w-full">
          <div className={cn("absolute w-full h-full", shadowClass, shadowColor)} />
          <div className={cn("relative w-full bg-white border border-primary/10", className)}>
            <div className={cn("p-8", contentClassName)}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 