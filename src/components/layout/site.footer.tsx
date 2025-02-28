'use client'

export function SiteFooter() {
  return (
    <footer className="border-t py-8 md:py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-8 md:px-0">
            <a 
              href="/" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              HOME
            </a>
            <a 
              href="/innovatiebegeleiding" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              INNOVATIEBEGELEIDING
            </a>
            <a 
              href="/workshops" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              WORKSHOPS
            </a>
            <a 
              href="/over-stanley" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              OVER STANLEY
            </a>
            <a 
              href="/contact" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
            >
              CONTACT
            </a>
          </div>
          <div className="text-center text-sm text-primary-foreground/80 md:text-right">
            © {new Date().getFullYear()} Stanley Innovation. Alle rechten voorbehouden.
          </div>
        </div>
      </div>
    </footer>
  )
} 