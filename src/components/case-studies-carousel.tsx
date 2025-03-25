'use client'

import { AnimatedSection } from '@/components/ui/animated-section'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ShadowedCard } from '@/components/ui/shadowed-card'

const caseStudies = [
  {
    title: 'Gemeente Dordrecht',
    subtitle: 'Monitoren klimaatadaptieve maatregelen',
    description: 'De gemeente Dordrecht was op zoek naar een oplossing om klimaatadaptieve maatregelen te monitoren. In een halfjaar heb ik de gemeente begeleid bij het doorlopen van het Design Thinking proces. Het dashboard dat we ontwikkelden was zo\'n succes dat het ministerie dit nu landelijk uitrolt. "Het proces was een ongekend succes: naast een geweldige oplossing heeft het ook ons teams dichter bij eklaar gebracht".',
    image: '/images/gemeentedordrecht.png',
  },
  // {
  //   title: 'Rijkswaterstaat',
  //   subtitle: 'Samenwerken in een complex ecosysteem',
  //   description: 'Het IJ in Amsterdam kent veel verschillende stakeholders en gebruikers op en om het water. Rijkswaterstaat nam de lead om sammen met onder andere Waternet, havenbedrijf Amsterdam en Gemeente Amsterdam op een innovatieve manier samen te werken. Zo blijft het IJ leuk voor de recreant, veilig voor de beroepsvaarders en duurzaam voor de toekomst. "Door de begeleding van Stanley Innovation kunnen we met onze beperkte tijd toch heel effectief aan oplossingen werken".',
  //   image: '/images/rijkswaterstaat.png',
  // },
  // {
  //   title: 'Connected River',
  //   subtitle: 'Nudgen van vaargedrag',
  //   description: 'Veel recreanten varen zonder vaarbewijs en kennen de betekenis van de borden niet goed. Als onderdeel van het Connected River programma ontwikkelen en testen we in korte iteraties meerdere oplossingen. "De app die we maakten leek in eerste instante een succes, maar de noodzaak om deze te downloaden ontbrak. Met roze borden met makkelijke boodschappen hebben we kunnen aantonen dat meer gebruikers de juiste route kiezen. Door de begeleiding van Stanley Innovation hebben we heel snel resultaten opgehaald en niet onnodig veel tijd gestopt in een app die niet nodig was".',
  //   image2: '/images/interreg.svg',
  //   image: '/images/connectedriver.png',
  // }
]

export function CaseStudiesCarousel() {
  const scrollToNextCard = () => {
    const container = document.getElementById('case-studies-container')
    const card = document.querySelector('.case-study-card')
    if (!container || !card) return

    const cardWidth = card.clientWidth
    container.scrollBy({
      left: cardWidth + 48, // card width + gap
      behavior: 'smooth'
    })
  }

  const scrollToPrevCard = () => {
    const container = document.getElementById('case-studies-container')
    const card = document.querySelector('.case-study-card')
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
    const container = document.getElementById('case-studies-container')
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
        id="case-studies-container"
        className="flex gap-12 overflow-x-auto snap-x snap-mandatory case-studies-scroll scroll-smooth pb-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card relative min-w-[calc(100%-3rem)] snap-center">
            <ShadowedCard containerClassName="mx-0" contentClassName="p-8">
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
                  <p className="text-gray-600 mb-6">{study.description}</p>
                </div>
              </div>
            </ShadowedCard>
          </div>
        ))}
      </div>
    </div>
  )
} 