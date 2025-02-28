import * as React from 'react'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const menuItems = [
  { href: '/services', label: 'Services' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
] as const

export function NavMenu() {
  return (
    <NavigationMenu.Root className="relative z-10">
      <NavigationMenu.List className="flex items-center gap-6">
        {menuItems.map((item) => (
          <NavigationMenu.Item key={item.href}>
            <NavigationMenu.Link asChild>
              <Link 
                href={item.href}
                className={cn(
                  'text-base font-medium text-gray-600 transition-colors hover:text-gray-900',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'
                )}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
} 