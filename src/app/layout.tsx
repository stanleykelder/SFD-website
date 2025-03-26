import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SiteHeader } from '@/components/layout/site.header'
import { SiteFooter } from '@/components/layout/site.footer'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import { headers } from 'next/headers'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Stanley Innovation',
    template: '%s | Stanley Innovation'
  },
  description: 'Officiële website van Stanley Innovation',
  keywords: ['stanley innovation', 'innovatie', 'workshops', 'coaching', 'begeleiding'],
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#da532c' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
}

function getThemeClass(pathname: string) {
  // Ensure we're using normalized paths
  const normalizedPath = pathname.toLowerCase()
  
  if (normalizedPath === '/') return 'theme-home'
  if (normalizedPath.startsWith('/innovatiebegeleiding')) return 'theme-innovation'
  if (normalizedPath.startsWith('/trainingen') || normalizedPath.startsWith('/workshops')) return 'theme-workshops'
  if (normalizedPath.startsWith('/over-stanley')) return 'theme-about'
  if (normalizedPath.startsWith('/contact')) return 'theme-contact'
  return 'theme-home'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const pathname = headersList.get('x-invoke-path') || '/'
  const themeClass = getThemeClass(pathname)

  return (
    <html lang="nl" suppressHydrationWarning className={themeClass}>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 pt-28">{children}</main>
            <SiteFooter />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
} 