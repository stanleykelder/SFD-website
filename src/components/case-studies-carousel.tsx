'use client'

import { AnimatedSection } from '@/components/ui/animated-section'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { ShadowedCard } from '@/components/ui/shadowed-card'

const caseStudies = [
  {
    title: 'Gemeente Dordrecht',
    subtitle: 'Monitoren klimaatadaptieve maatregelen',
    description: 'De gemeente Dordrecht was op zoek naar een oplossing om klimaatadaptieve maatregelen te monitoren. In een halfjaar heb ik de gemeente begeleid bij het doorlopen van het Design Thinking proces. Het dashboard dat we ontwikkelden was zo\'n succes dat het ministerie dit nu landelijk uitrolt. "Het proces was een ongekend succes: naast een geweldige oplossing heeft het ook ons teams dichter bij elkaar gebracht".',
    image: '/images/gemeentedordrecht.png',
    image2: '',
  },
  {
    title: 'Rijkswaterstaat',
    subtitle: 'Samenwerken in een complex ecosysteem',
    description: 'Het IJ in Amsterdam kent veel verschillende stakeholders en gebruikers op en om het water. Rijkswaterstaat nam de lead om samen met onder andere Waternet, havenbedrijf Amsterdam en Gemeente Amsterdam op een innovatieve manier samen te werken aan duurzame veiligheidsoplossingen voor beroepsmatig en recreatief scheepvaartverkeer op het IJ. "Door de begeleding van Stanley Innovation kunnen we met onze beperkte tijd toch heel effectief aan oplossingen werken".',
    image: '/images/rijkswaterstaat.png',
  },
  {
    title: 'Connected River',
    subtitle: 'Nudgen van vaargedrag',
    description: 'Veel recreanten varen zonder vaarbewijs en kennen de betekenis van de borden niet goed. Als onderdeel van het Connected River programma ontwikkelen en testen we in korte iteraties meerdere oplossingen. "De app die we maakten leek in eerste instante een succes, maar de noodzaak om deze te downloaden ontbrak. Met roze borden met aantrekkelijke boodschappen hebben we kunnen aantonen dat meer gebruikers de juiste route kiezen. Stanley liet ons inzien wat \'fail fast\' in de praktijk betekent en hielp ons stapgewijs een betere oplossing in de praktijk brengen".',
    image2: '/images/interreg.svg',
    image: '/images/connectedriver.png',
  },
]

export function CaseStudiesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Navigate to a specific case study
  const goToSlide = (index: number) => {
    const container = containerRef.current
    if (!container) return
    
    // Calculate valid index range
    const maxIndex = Math.max(0, caseStudies.length - 1)
    const targetIndex = Math.min(Math.max(0, index), maxIndex)
    
    // Get all cards
    const cards = container.querySelectorAll('.case-study-card')
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
    const cards = container.querySelectorAll('.case-study-card')
    
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
  const next = () => goToSlide(activeIndex + 1)
  const prev = () => goToSlide(activeIndex - 1)
  
  // Calculate if we're at the start or end
  const isAtStart = activeIndex === 0
  const isAtEnd = activeIndex >= caseStudies.length - 1
  
  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 p-3 text-primary hover:text-primary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed z-10"
        onClick={prev}
        disabled={isAtStart}
        aria-label="Previous case study"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 p-3 text-primary hover:text-primary/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed z-10"
        onClick={next}
        disabled={isAtEnd}
        aria-label="Next case study"
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
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="case-study-card flex-shrink-0 w-full snap-start px-4 pb-6"
            >
              <ShadowedCard contentClassName="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="relative w-full md:w-1/3 aspect-[4/3]">
                    {study.image2 ? (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center mt-12">
                          <div className="h-[100%] w-full flex flex-col gap-8">
                            <div className="h-[45%] flex items-center justify-center">
                              <div className="w-[80%] relative h-[90%]">
                                <Image
                                  src={study.image}
                                  alt={`${study.title} - primary logo`}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 26vw"
                                />
                              </div>
                            </div>
                            <div className="h-[55%]">
                              <Image
                                src={study.image2}
                                alt={`${study.title} - secondary logo`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-lg text-gray-600">{study.subtitle}</p>
                    </div>
                    <p className="text-gray-600 mb-6 break-words hyphens-auto" lang="nl">{study.description}</p>
                  </div>
                </div>
              </ShadowedCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 