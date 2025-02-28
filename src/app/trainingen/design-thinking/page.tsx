import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Design Thinking Training - Stanley Innovation',
  description: 'Leer hoe ik je help om gebruikersgericht te innoveren met Design Thinking. Van probleem verkenning tot prototype testing.',
}

const modules = [
  {
    title: 'Introductie Design Thinking',
    description: 'Leer de basis principes en mindset van Design Thinking.',
    topics: [
      'Design Thinking proces en mindset',
      'Wanneer gebruik je Design Thinking?',
      'Praktische voorbeelden en cases'
    ]
  },
  {
    title: 'Empathise & Define',
    description: 'Verdiep je in de gebruiker en definieer het juiste probleem.',
    topics: [
      'Gebruikersonderzoek technieken',
      'Interview vaardigheden',
      'Problem framing',
      'How Might We vragen'
    ]
  },
  {
    title: 'Ideate',
    description: 'Genereer innovatieve oplossingen met creatieve technieken.',
    topics: [
      'Brainstorm methodieken',
      'Creativiteitstechnieken',
      'Idee selectie',
      'Concept ontwikkeling'
    ]
  },
  {
    title: 'Prototype & Test',
    description: 'Maak ideeën tastbaar en leer van gebruikersfeedback.',
    topics: [
      'Verschillende prototype vormen',
      'Snelle experimenten opzetten',
      'Feedback ophalen',
      'Iteratief verbeteren'
    ]
  }
]

export default function DesignThinkingPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Design Thinking Training
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leer innoveren vanuit gebruikersperspectief. In deze hands-on training ga je aan de slag met 
            de Design Thinking methodiek om tot gebruikersgerichte innovaties te komen.
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
              De training duurt twee dagen en is volledig hands-on. Je gaat direct aan de slag met 
              echte cases en leert door te doen. De groepsgrootte is maximaal 12 deelnemers om 
              voldoende persoonlijke aandacht te garanderen.
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
                Werkboek met tools
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Digitale templates
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