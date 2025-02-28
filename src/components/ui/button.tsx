'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center text-base font-semibold transition-all duration-300 transform-gpu focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-background text-primary border-2 border-primary/30 hover:border-primary hover:-translate-y-1 focus-visible:outline-primary',
        outline: 'bg-background border-2 border-primary/30 text-primary hover:border-primary hover:-translate-y-1 focus-visible:outline-primary',
        ghost: 'text-primary hover:bg-primary/5',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-8',
        sm: 'h-9 px-4',
        lg: 'h-14 px-10',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type ButtonProps = {
  className?: string
  variant?: VariantProps<typeof buttonVariants>['variant']
  size?: VariantProps<typeof buttonVariants>['size']
  asChild?: boolean
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

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

export { Button, buttonVariants, type ButtonProps } 