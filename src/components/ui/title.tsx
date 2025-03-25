'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TitleProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  lineColor?: string
  showLine?: boolean
}

export function Title({ children, as = 'h2', className, lineColor = 'bg-primary', showLine = true }: TitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [lineWidth, setLineWidth] = useState(0)

  useEffect(() => {
    if (titleRef.current) {
      setLineWidth(titleRef.current.offsetWidth)
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target instanceof HTMLElement) {
          setLineWidth(entry.target.offsetWidth)
        }
      }
    })

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const Component = as

  return (
    <div className="relative block text-left">
      <Component
        ref={titleRef}
        className={cn(
          'relative inline-block text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl',
          className
        )}
      >
        {children}
      </Component>
      {showLine && (
        <div 
          className={cn("absolute h-2 transition-all duration-300", lineColor)}
          style={{ 
            width: lineWidth,
            left: 24,
            bottom: 8
          }} 
        />
      )}
    </div>
  )
} 