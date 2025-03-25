import Image from 'next/image'
import { cn } from '@/lib/utils'
import React from 'react'

interface ShadowedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  shadowColor?: string
  shadowPosition?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left'
  containerClassName?: string
  size?: 'small' | 'medium' | 'large' | 'full'
}

export function ShadowedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className,
  shadowColor = 'bg-primary',
  shadowPosition = 'bottom-right',
  containerClassName,
  size = 'full'
}: ShadowedImageProps) {
  // Determine shadow position classes
  const shadowPositionClasses = {
    'bottom-right': 'top-6 left-6',
    'top-right': 'bottom-6 left-6',
    'bottom-left': 'top-6 right-6',
    'top-left': 'bottom-6 right-6'
  };

  // Determine size classes
  const sizeClasses = {
    small: 'max-w-[300px]',
    medium: 'max-w-[500px]',
    large: 'max-w-[700px]',
    full: 'w-full'
  };

  const shadowClass = shadowPositionClasses[shadowPosition];
  const sizeClass = sizeClasses[size];
  
  return (
    <div className={cn("relative mx-6 lg:mx-0", containerClassName)}>
      <div className="relative -ml-6">
        <div className={cn("relative", sizeClass)}>
          <div className={cn("absolute w-full h-full", shadowClass, shadowColor)} />
          <div className="relative">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={cn("w-full h-auto", className)}
              sizes={size === 'small' ? '300px' : size === 'medium' ? '500px' : size === 'large' ? '700px' : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
              priority={priority}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface ShadowedContainerProps {
  children: React.ReactNode
  className?: string
  shadowColor?: string
  shadowPosition?: 'bottom-right' | 'top-right' | 'bottom-left' | 'top-left'
  containerClassName?: string
}

export function ShadowedContainer({
  children,
  className,
  shadowColor = 'bg-primary',
  shadowPosition = 'bottom-right',
  containerClassName
}: ShadowedContainerProps) {
  // Determine shadow position classes
  const shadowPositionClasses = {
    'bottom-right': 'top-6 left-6',
    'top-right': 'bottom-6 left-6',
    'bottom-left': 'top-6 right-6',
    'top-left': 'bottom-6 right-6'
  };

  const shadowClass = shadowPositionClasses[shadowPosition];
  
  return (
    <div className={cn("relative mx-6 lg:mx-0", containerClassName)}>
      <div className="relative -ml-6">
        <div className="relative w-full">
          <div className={cn("absolute w-full h-full", shadowClass, shadowColor)} />
          <div className={cn("relative w-full", className)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
} 