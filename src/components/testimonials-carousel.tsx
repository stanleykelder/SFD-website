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
    role: 'Regisseur Innovatie Scheepvaart, Rijkswaterstaat',
    quote: 'Als projectleider heb ik heel nauw samengewerkt met Stanley en hij wist mij altijd uit te dagen om ambitieuze doelen te stellen, maar tegelijkertijd kleine en simpele stappen te zetten. Zijn gedrevenheid en enthousiasme werken aanstekelijk.',
    image: '/images/jelmer-delange.jpg'
  },
  {
    name: 'Benno Bultink',
    role: 'Innovatiemanager en projectmanager, Rijkswaterstaat en Connected River',
    quote: 'Stanley heeft als innovatiecoach met zijn betrokken persoonlijkheid en kennis van innovatieprocessen een belangrijke bijdrage geleverd aan het experimentteam Amsterdam IJ. Stanley kan zowel in de dagelijkse werkzaamheden het team enthousiasmeren en scherp houden, als uitzoomen op projectniveau en adviseren op procesinrichting. Zijn pragmatisme zorgt ervoor dat innovatie niet alleen op post-its bestaat, maar daadwerkelijk in de praktijk wordt toegepast.',
    image: '/images/benno-bultink.png'
  },
  {
    name: 'Berry Gersonius',
    role: 'Resiliense',
    quote: 'Stanley heeft duidelijk veel ervaring met Design Thinking en Agile werken. Als innovatieteam voor groen en water bij gemeente Dordrecht vond ik het belangrijk dat wij ook leerden werken met deze methodieken. Stanley heeft ons hier fantastisch in geholpen door training te geven, workshops te faciliteren en de juiste tools voor ons op te zetten.',
    image: '/images/berry-gersonius.jpeg'
  },
]

export function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  
  // Handle responsive layout
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3)
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }
    }
    
    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])
  
  // Navigate to a specific slide
  const goToSlide = (index: number) => {
    const container = containerRef.current
    if (!container) return
    
    // Calculate valid index range
    const maxIndex = Math.max(0, testimonials.length - visibleCount)
    const targetIndex = Math.min(Math.max(0, index), maxIndex)
    
    // Get all cards
    const cards = container.querySelectorAll('.testimonial-card')
    if (cards.length <= targetIndex) return
    
    // Get target card and scroll to it
    const targetCard = cards[targetIndex] as HTMLElement
    const scrollLeft = targetCard.offsetLeft - container.offsetLeft
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    })
    
    setActiveIndex(targetIndex)
  }
  
  // Handle scroll event
  const handleScroll = () => {
    const container = containerRef.current
    if (!container) return
    
    const scrollPosition = container.scrollLeft
    const cards = container.querySelectorAll('.testimonial-card')
    
    // Find the closest card to the current scroll position
    let closestIndex = 0
    let closestDistance = Infinity
    
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement
      const distance = Math.abs(cardElement.offsetLeft - container.offsetLeft - scrollPosition)
      
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })
    
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex)
    }
  }
  
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [activeIndex])
  
  // Next and previous buttons
  const next = () => goToSlide(activeIndex + visibleCount)
  const prev = () => goToSlide(activeIndex - visibleCount)
  
  // Calculate if we're at the start or end
  const isAtStart = activeIndex === 0
  const isAtEnd = activeIndex >= testimonials.length - visibleCount
  
  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 p-3 text-primary hover:text-primary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed z-10"
        onClick={prev}
        disabled={isAtStart}
        aria-label="Previous testimonials"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 p-3 text-primary hover:text-primary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed z-10"
        onClick={next}
        disabled={isAtEnd}
        aria-label="Next testimonials"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-start px-4 pb-6`}
            >
              <ShadowedCard>
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
                      <p className="text-sm text-gray-600 break-words hyphens-auto" lang="nl">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 leading-relaxed break-words hyphens-auto" lang="nl">
                    "{testimonial.quote}"
                  </blockquote>
                </AnimatedSection>
              </ShadowedCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 