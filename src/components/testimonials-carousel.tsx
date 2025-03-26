'use client'

import { AnimatedSection } from '@/components/ui/animated-section'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ShadowedCard } from '@/components/ui/shadowed-card'

const testimonials = [
  {
    name: 'Ellen Kelder',
    role: 'Programmamanager, Gemeente Dordrecht',
    quote: 'Wij wilden een manier ontwikkelen om klimaatadaptatie te monitoren, iets wat nog niet eerder zo uitgebreid was gedaan. Met de hulp van Stanley hebben we een fantastische oplossing ontwikkeld. Bovendien hebben we er veel plezier in gehad en zijn we als team dichter bij elkaar gekomen.',
    image: '/images/ellen-kelder.png'
  },
  {
    name: 'Jelmer de Lange',
    role: 'Coördinator Scheepvaartinnovaties, Rijkswaterstaat',
    quote: 'Als projectleider heb ik heel nauw samengewerkt met Stanley en hij wist mij altijd uit te dagen om ambitieuze doelen te stellen, maar tegelijkertijd kleine en simpele stappen te zetten. Zijn gedrevenheid en enthousiasme werken aanstekelijk.',
    image: '/images/jelmer-delange.jpg'
  },
  // {
  //   name: 'Benno Bultink',
  //   role: 'Projectleider, Connected River/Rijkswaterstaat',
  //   quote: 'Stanley kan zowel in de dagelijkse werkzaamheden het team enthousiasmeren en scherp houden, als uitzoomen op projectniveau en adviseren op procesinrichting. Zijn pragmatisme zorgt ervoor dat innovatie niet alleen op post-its bestaat, maar daadwerkelijk in de praktijk wordt toegepast.',
  //   image: '/images/benno-bultink.png'
  // },
  {
    name: 'Berry Gersonius',
    role: 'Resiliense',
    quote: 'Stanley heeft duidelijk veel ervaring met Design Thinking en Agile werken. Als innovatieteam voor groen en water bij gemeente Dordrecht vond ik het belangrijk dat wij ook leerden werken met deze methodieken. Stanley heeft ons hier fantastisch in geholpen door training te geven, workshops te faciliteren en de juiste tools voor ons op te zetten.',
    image: '/images/berry-gersonius.jpeg'
  },
]

export function TestimonialsCarousel() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [maxCardHeight, setMaxCardHeight] = useState(0)
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Calculate maximum content height
  useEffect(() => {
    const updateMaxHeight = () => {
      // Reset refs array to match current number of testimonials
      cardsRef.current = cardsRef.current.slice(0, testimonials.length)
      
      // Clear any existing timeout to prevent multiple calls
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      
      // Delay calculation to ensure DOM is fully rendered after resize
      resizeTimeoutRef.current = setTimeout(() => {
        const heights = cardsRef.current
          .filter(Boolean)
          .map(card => card?.scrollHeight || 0)
        
        const maxHeight = Math.max(...heights, 0)
        if (maxHeight > 0 && maxHeight !== maxCardHeight) {
          setMaxCardHeight(maxHeight)
        }
        
        // Schedule another check after a short delay to catch any post-render changes
        setTimeout(checkHeightsAgain, 300)
      }, 50)
    }
    
    // Double-check heights after initial calculation to handle any post-render adjustments
    const checkHeightsAgain = () => {
      const heights = cardsRef.current
        .filter(Boolean)
        .map(card => card?.scrollHeight || 0)
      
      const maxHeight = Math.max(...heights, 0)
      if (maxHeight > 0 && maxHeight !== maxCardHeight) {
        setMaxCardHeight(maxHeight)
      }
    }

    // Initial calculation
    updateMaxHeight()
    
    // Set up resize observer for more reliable resize detection
    const resizeObserver = new ResizeObserver(() => {
      updateMaxHeight()
    })
    
    // Observe the container element
    const container = document.getElementById('testimonials-container')
    if (container) {
      resizeObserver.observe(container)
    }
    
    // Also listen to window resize as a fallback
    window.addEventListener('resize', updateMaxHeight)
    
    return () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      if (container) {
        resizeObserver.unobserve(container)
      }
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateMaxHeight)
    }
  }, [testimonials.length]) // Remove maxCardHeight dependency to prevent infinite updates

  const scrollToNextCard = () => {
    const container = document.getElementById('testimonials-container')
    const card = document.querySelector('.testimonial-card')
    if (!container || !card) return

    const cardWidth = card.clientWidth
    container.scrollBy({
      left: cardWidth + 48, // card width + gap
      behavior: 'smooth'
    })
  }

  const scrollToPrevCard = () => {
    const container = document.getElementById('testimonials-container')
    const card = document.querySelector('.testimonial-card')
    if (!container || !card) return

    const cardWidth = card.clientWidth
    container.scrollBy({
      left: -(cardWidth + 48), // card width + gap
      behavior: 'smooth'
    })
  }

  // Track scroll position to disable buttons appropriately
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  useEffect(() => {
    const container = document.getElementById('testimonials-container')
    if (!container) return

    const handleScroll = () => {
      setIsAtStart(container.scrollLeft <= 0)
      setIsAtEnd(container.scrollLeft >= container.scrollWidth - container.clientWidth - 1)
    }

    container.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative px-8">
      {/* Previous Button */}
      <button 
        className="absolute -left-8 top-1/2 -translate-y-1/2 p-4 text-primary hover:text-primary/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        onClick={scrollToPrevCard}
        disabled={isAtStart}
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button 
        className="absolute -right-8 top-1/2 -translate-y-1/2 p-4 text-primary hover:text-primary/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        onClick={scrollToNextCard}
        disabled={isAtEnd}
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div 
        id="testimonials-container"
        className="flex gap-12 overflow-x-auto snap-x snap-mandatory testimonials-scroll scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="testimonial-card relative min-w-[calc(100%-2rem)] md:min-w-[calc(50%-2rem)] lg:min-w-[calc((100%/3)-2rem)] snap-center"
            ref={el => { cardsRef.current[index] = el }}
            style={{ height: maxCardHeight > 0 ? `${maxCardHeight}px` : 'auto' }}
          >
            <ShadowedCard containerClassName="mx-0">
              <AnimatedSection
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 overflow-hidden flex-shrink-0">
                    {testimonial.image ? (
                      <div className="relative h-full w-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </AnimatedSection>
            </ShadowedCard>
          </div>
        ))}
      </div>
    </div>
  )
} 