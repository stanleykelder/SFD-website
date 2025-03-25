import { Metadata, Viewport } from 'next'

// Default viewport configuration (moved from metadata)
export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://stanleyinnovation.nl'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Stanley Innovation',
  },
  twitter: {
    card: 'summary_large_image',
  },
  // Removed viewport from here
}

export function generateMetadata({
  title,
  description,
  keywords,
  images,
  canonical,
}: {
  title: string
  description: string
  keywords?: string[]
  images?: { url: string; width: number; height: number; alt: string }[]
  canonical?: string
}): Metadata {
  return {
    ...defaultMetadata,
    title: `${title} - Stanley Innovation`,
    description,
    keywords: keywords || [],
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} - Stanley Innovation`,
      description,
      images: images || [],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} - Stanley Innovation`,
      description,
      images: images?.map(img => img.url) || [],
    },
    alternates: canonical ? { canonical } : undefined,
  }
} 