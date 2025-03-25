import type { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Title } from '@/components/ui/title'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShadowedImage } from '@/components/ui/shadowed-image'
import { generateMetadata, defaultViewport } from '@/config/metadata'
import { CaseStudiesCarousel } from '@/components/case-studies-carousel'

export const metadata: Metadata = generateMetadata({
  title: 'Innovatiebegeleiding',
  description: 'Professionele innovatiebegeleiding voor teams die willen groeien. Gebruikersgericht, kort-cyclisch en Jouw team is uniek voor jouw organisatie.',
  keywords: ['innovatiebegeleiding', 'innovatiecoach', 'design thinking', 'agile', 'scrum', 'service design', 'innovatie', 'team coaching', 'organisatie ontwikkeling'],
  images: [
    {
      url: '/images/designthinking.png',
      width: 800,
      height: 600,
      alt: 'Design Thinking proces',
    },
  ],
  canonical: 'https://stanleyinnovation.nl/innovatiebegeleiding',
})

export const viewport = defaultViewport

export default function InnovationPage() {
  return (
    <div>
      {/* Design Thinking Section */}
      <div className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" />
        <div className="container relative py-16">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title as="h1" className="mb-6">
                Van idee naar innovatie - Design Thinking
              </Title>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Design Thinking is een methode om ideeën vorm te geven en te ontwikkelen tot innovatie. Dit doe je in 5 stappen: Empathize, Define, Ideate, Prototype en Test. In principe doorloop je deze stappen in deze volgorde, maar het proces is ook iteratief: na elke stap reflecteer je of je de volgende stap kunt starten of dat een vorige stap nog meer aandacht nodig heeft. Als innovaatiebegeleider of innovatiecoach begeleid ik ik deze stappen en help ik als team de resulaten te interpreteren en tussen de stappen te reflecteren. 
              </p>
            </AnimatedSection>
          </div>
          <div className="mt-12 mx-auto max-w-3xl">
            <ShadowedImage
              src="/images/designthinking.png"
              alt="Design Thinking proces"
              width={800}
              height={600}
              priority
            />
          </div>
        </div>
      </div>

       

        {/* Agile Section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 pb-32 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Title as="h2" className="mb-6">
              Duurzaam en flexibel - Agile werken
            </Title>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Waar Design Thinking een effectieve methode is om gebruikersgerichte oplossingen te ontwikkelen, is Agile een flexibele manier om duurzaam samen te werken en te blijven leren. In Agile werk je in korte iteraties (sprints) om zo je innovatie door te blijven ontwikkelen en verbeteren. Ook dit is een proces van vele kleine concrete stappen, waarin je als team blijft reflecteren en je gebruikers nooit uit het oog verliest. Als innovatiebegeleider of innovatiecoach help ik je om deze manier van werken op te zetten met bijvoorbeeld het gebruik van een Kanban bord en het invoeren van standups.
            </p>
          </div>
        </div>

      {/* Casus Section */}
      <div className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" />
        <div className="container relative py-16">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <Title as="h2" className="mb-4">
              Casus voorbeelden
            </Title>
          </div>
          
          <CaseStudiesCarousel />
        </div>
      </div>

    
    </div>
  )
} 