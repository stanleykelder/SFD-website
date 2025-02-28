'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Button variants using class-variance-authority
 * Ensures consistent styling and WCAG 2.2 AA compliance
 */
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'text-base font-semibold',
    'transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none',
  ].join(' '),
  {
    variants: {
      variant: {
        default: [
          'bg-background text-primary',
          'border-2 border-primary/30',
          'hover:border-primary hover:-translate-y-1',
          'transform-gpu',
        ].join(' '),
        outline: [
          'border-2 border-primary',
          'bg-background hover:bg-primary/10',
          'text-primary',
        ].join(' '),
        ghost: 'hover:bg-primary/10 text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 min-w-[44px] px-8',
        sm: 'h-11 min-w-[44px] px-4',
        lg: 'h-14 min-w-[44px] px-8',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * When true, the button will be rendered as a child component
   * Useful for creating link buttons with Next.js Link
   */
  asChild?: boolean
}

/**
 * Button component that follows WCAG 2.2 AA guidelines
 * Supports various variants and sizes
 * Can be rendered as a child component using asChild prop
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants } 