import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Agile werken en Scrum Training - Stanley Innovation',
  description: 'Leer hoe ik je help om effectiever te werken met Agile en Scrum. Een praktische training voor teams die willen groeien in agile werken.',
}

const modules = [
  {
    title: 'Agile Mindset & Principes',
    description: 'Begrijp de fundamenten van Agile werken.',
    topics: [
      'Agile Manifesto en principes',
      'Waarom Agile werken?',
      'Agile vs. traditioneel projectmanagement',
      'Veranderende rol van leiderschap'
    ]
  },
  {
    title: 'Scrum Framework',
    description: 'Leer de Scrum methodiek en rollen kennen.',
    topics: [
      'Scrum rollen en verantwoordelijkheden',
      'Scrum ceremonies en artifacts',
      'Product Backlog management',
      'Sprint planning en review'
    ]
  },
  {
    title: 'Agile Technieken',
    description: 'Praktische tools voor effectief teamwerk.',
    topics: [
      'User Story Mapping',
      'Estimating en planning',
      'Retrospectives faciliteren',
      'Continuous improvement'
    ]
  },
  {
    title: 'Implementatie & Transitie',
    description: 'Breng Agile in praktijk binnen je organisatie.',
    topics: [
      'Transitie naar Agile',
      'Omgaan met weerstand',
      'Scaling Agile',
      'Meetbare resultaten'
    ]
  }
]

export default function AgileScrumPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Agile werken en Scrum Training
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leer hoe je met Agile en Scrum sneller en effectiever kunt werken. Deze hands-on training 
            geeft je de kennis en vaardigheden om direct met je team aan de slag te gaan.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            {modules.map((module) => (
              <AnimatedSection
                key={module.title}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {module.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {module.description}
                </p>
                <ul className="mt-4 space-y-3">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex gap-x-3">
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
                      <span className="text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Praktische informatie</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              De training duurt twee dagen en is volledig hands-on. Je leert door te doen met 
              praktische oefeningen en simulaties. De groepsgrootte is maximaal 12 deelnemers 
              voor optimale interactie en persoonlijke aandacht.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">Inclusief</h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Scrum Guide handboek
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Agile tools templates
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Lunch en versnaperingen
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Certificaat van deelname
              </li>
            </ul>
          </div>
          <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">€1.195</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">p.p.</span>
                </p>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Prijzen zijn exclusief BTW. Incompany tarieven op aanvraag.
                </p>
                <Button asChild className="mt-10 w-full">
                  <Link href="/contact">
                    Neem contact op
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 