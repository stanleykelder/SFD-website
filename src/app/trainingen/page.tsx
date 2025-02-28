import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Trainingen - Stanley Innovation',
  description: 'Interactieve trainingen die deelnemers activeren om zelf te leren en te groeien. Praktijkgericht en direct toepasbaar.',
}

const trainings = [
  {
    title: 'Design Thinking',
    description: 'Leer de kracht van gebruikersgericht innoveren. Van probleem verkenning tot prototype testing.',
    duration: '2 dagen',
    href: '/trainingen/design-thinking',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2574&auto=format&fit=crop',
    features: [
      'Gebruikersgericht innoveren',
      'Probleem verkenning',
      'Creatieve oplossingen',
      'Prototype en test methodieken'
    ]
  },
  {
    title: 'Agile werken en Scrum',
    description: 'Ontdek hoe je met een agile mindset en Scrum framework effectiever kunt werken en sneller kunt innoveren.',
    duration: '2 dagen',
    href: '/trainingen/agile-scrum',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2574&auto=format&fit=crop',
    features: [
      'Agile principes en mindset',
      'Scrum rollen en events',
      'Sprint planning en review',
      'Continue verbetering'
    ]
  },
  {
    title: 'Training op maat',
    description: 'Een training specifiek ontwikkeld voor jouw team en uitdagingen.',
    duration: 'In overleg',
    href: '/trainingen/op-maat',
    image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2574&auto=format&fit=crop',
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
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Leren door te doen, groeien door te ervaren
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mijn trainingen zijn opgezet vanuit het principe dat mensen het beste leren door te doen. 
            Door actieve werkvormen, directe toepassing en veel interactie maken deelnemers zich de stof 
            echt eigen. Ik faciliteer het leerproces in plaats van alleen informatie te zenden.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="space-y-8">
            {trainings.map((training, index) => (
              <Link
                key={training.title}
                href={training.href}
                className="block group"
              >
                <AnimatedSection
                  className="flex flex-col gap-12 lg:flex-row rounded-3xl border p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:bg-gray-50/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[16/9] w-full lg:w-1/2 overflow-hidden rounded-2xl">
                    <Image
                      src={training.image}
                      alt={training.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center lg:w-1/2">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-primary transition-colors">
                      {training.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                      {training.description}
                    </p>
                    <div className="mt-4 flex items-center gap-x-4 text-sm text-gray-500">
                      <div className="text-primary font-semibold">Duur: {training.duration}</div>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-900">Wat je leert:</h3>
                      <ul className="mt-4 space-y-3">
                        {training.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <svg className="mr-3 h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 flex items-center text-primary group-hover:text-primary/80 font-semibold">
                      <span>Meer informatie</span>
                      <svg className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </AnimatedSection>
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