import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Link from 'next/link'

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
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trainingen
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Onze trainingen zijn opgezet vanuit het principe dat mensen het beste leren door te doen. 
            Door actieve werkvormen, directe toepassing en veel interactie maken deelnemers zich de stof 
            echt eigen. We faciliteren het leerproces in plaats van alleen informatie te zenden.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {trainings.map((training) => (
            <AnimatedSection
              key={training.title}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <article className="flex flex-col items-start">
                <div className="w-full">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {training.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {training.description}
                  </p>
                  <div className="mt-4 flex items-center gap-x-4 text-sm text-gray-500">
                    <div className="text-primary font-semibold">Duur: {training.duration}</div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Wat je leert:</h4>
                    <ul className="mt-2 space-y-2">
                      {training.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <svg className="mr-2 h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={training.href}
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                      Lees meer <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Onze trainingsaanpak
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We gebruiken bewezen leerprincipes waarbij deelnemers actief aan de slag gaan met de materie. 
            Door een mix van korte theorie, veel oefening, reflectie en directe toepassing in de praktijk, 
            bereiken we maximaal leerrendement. Deelnemers zijn gemiddeld 70% van de tijd actief bezig met de leerstof.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 