'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'

interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
}

export function AnimatedSection({ children, ...props }: AnimatedSectionProps) {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  )
} 