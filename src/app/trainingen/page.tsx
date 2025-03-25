import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'

export const metadata: Metadata = {
  title: 'Trainingen - Stanley Innovation',
  description: 'Interactieve trainingen die deelnemers activeren om zelf te leren en te groeien. Praktijkgericht en direct toepasbaar.',
}

const trainings = [
  {
    title: 'Design Thinking',
    description: 'Leer hoe je gebruikersgerichte oplossingen ontwikkelt met Design Thinking. Van probleem verkenning tot prototype en test.',
    duration: '2 dagen',
    href: '/trainingen/design-thinking',
    image: '/images/design-thinking.jpg',
    features: [
      'Gebruikersgericht innoveren',
      'Probleem verkenning',
      'Creatieve oplossingen',
      'Prototype en test methodieken'
    ]
  },
  {
    title: 'Agile & Scrum',
    description: 'Ontdek hoe je met Agile en Scrum kort-cyclisch kunt werken aan innovatie. Focus op waarde en leren van feedback.',
    duration: '2 dagen',
    href: '/trainingen/agile-scrum',
    image: '/images/agile-scrum.jpg',
    features: [
      'Agile principes en mindset',
      'Scrum rollen en events',
      'Sprint planning en review',
      'Continue verbetering'
    ]
  },
  {
    title: 'Training op maat',
    description: 'Een training die perfect aansluit bij jouw team en organisatie. We combineren bewezen methoden met jullie context.',
    duration: 'In overleg',
    href: '/trainingen/op-maat',
    image: '/images/op-maat.jpg',
    features: [
      'Analyse van leerbehoefte',
      'Maatwerk programma',
      'Praktijkgerichte aanpak',
      'Focus op jouw context'
    ]
  }
]

export default function TrainingenPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <Title as="h1" className="mb-6">
            Trainingen
          </Title>
          <p className="text-lg leading-8 text-gray-600">
            Leer hoe je innovatie in de praktijk brengt met onze trainingen. 
            Van Design Thinking tot Agile werken, we bieden verschillende modules aan 
            die je helpen om innovatie succesvol te maken in jouw organisatie.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {trainings.map((training, index) => (
              <Link
                key={training.title}
                href={training.href}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <AnimatedSection
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <img
                    src={training.image}
                    alt={training.title}
                    className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </AnimatedSection>

                <div className="relative">
                  <Title as="h3" className="text-lg font-semibold leading-6 text-white">
                    {training.title}
                  </Title>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {training.description}
                  </p>
                  <div className="mt-8 flex items-center text-primary group-hover:text-primary/80 font-semibold">
                    <span>Meer informatie</span>
                    <svg className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center">
          <Button asChild>
            <Link href="/contact">
              Neem contact op voor meer informatie
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 