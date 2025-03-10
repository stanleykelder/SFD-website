import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Innovatiebegeleiding - Stanley Innovation',
  description: 'Professionele innovatiebegeleiding voor teams die willen groeien. Gebruikersgericht, kort-cyclisch en Jouw team is uniek voor jouw organisatie.',
}

const benefits = [
  {
    title: 'Onderdeel van jouw team',
    description: 'Ik werk niet vanaf de zijlijn, maar word tijdelijk onderdeel van jouw team. Zo zetten we samen snel concrete stappen.',
  },
  {
    title: 'Learning while doing',
    description: 'We gaan direct aan de slag met jullie uitdagingen. Zo leer je door te doen.',
  },
  {
    title: 'Jouw team is uniek',
    description: 'Ieder team en iedere uitdaging is uniek. We stemmen de begeleiding daarom volledig samen af op jullie situatie en doelen.',
  },
  {
    title: 'Design Thinking en Agile werken',
    description: 'Combinatie van Design Thinking en Agile technieken voor optimale resultaten en gebruikersgerichte innovatie.',
  }
]

const methods = [
  {
    title: 'Design Thinking',
    features: [
      'Gebruikersgericht ontwikkelen',
      'Probleem verkenning',
      'Idee generatie',
      'Prototype en test cycli'
    ]
  },
  {
    title: 'Agile Werkwijze',
    features: [
      'Kort-cyclisch werken',
      'Snelle feedback loops',
      'Flexibel aanpassen',
      'Meetbare vooruitgang'
    ]
  },
  {
    title: 'Team Empowerment',
    features: [
      'Facilitatie technieken',
      'Creativiteitssessies',
      'Teambuilding',
      'Kennisdeling'
    ]
  }
]

export default function InnovationPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        {/* Hero Section */}
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Werk jij aan innovatie met jouw team?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Innovatie is een reis die je samen maakt. Als innovatiecoach help ik teams om hun innovatieve potentieel volledig te benutten door middel van intensieve procesbegeleiding, gebruikersgerichte aanpak en bewezen methodieken.
            </p>
          </AnimatedSection>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <AnimatedSection
                key={benefit.title}
                className="relative pl-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Approach Section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hoe werk ik?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Door gebruik te maken van verschillende tools en technieken help ik teams om hun volledige potentieel te benutten. De aanpak is altijd gebruikersgericht en kort-cyclisch, zodat we snel kunnen leren en aanpassen.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {methods.map((method) => (
                <AnimatedSection
                  key={method.title}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    {method.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col">
                    <ul className="mt-2 space-y-3 text-base leading-7 text-gray-600">
                      {method.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-primary"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </AnimatedSection>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-24 max-w-7xl sm:mt-32">
          <div className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar om jouw innovatie naar het volgende niveau te tillen?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
              Laten we samen kijken hoe ik jouw team kan helpen om innovatie succesvol te maken.
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild>
                <Link href="/contact">
                  Plan een vrijblijvend gesprek
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 