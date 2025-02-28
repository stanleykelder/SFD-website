import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Training op maat - Stanley Innovation',
  description: 'Ik ontwikkel een training specifiek voor jouw team en uitdagingen. Samen bepalen we de inhoud en aanpak die het beste past bij jouw organisatie.',
}

const benefits = [
  {
    title: 'Volledig op maat',
    description: 'De training wordt specifiek ontwikkeld voor jouw team, rekening houdend met jullie context, uitdagingen en doelen.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    )
  },
  {
    title: 'Praktijkgericht',
    description: 'We werken met echte cases uit jullie praktijk, zodat het geleerde direct toepasbaar is in het dagelijks werk.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    )
  },
  {
    title: 'Flexibele opzet',
    description: 'Van korte workshops tot uitgebreide programma\'s, we stemmen de duur en intensiteit af op jullie behoefte.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    )
  }
]

const process = [
  {
    title: 'Intake gesprek',
    description: 'We bespreken jullie doelen, uitdagingen en wensen voor de training.',
  },
  {
    title: 'Analyse & Ontwerp',
    description: 'We ontwikkelen een programma dat aansluit bij jullie behoeften en organisatiecontext.',
  },
  {
    title: 'Training & Begeleiding',
    description: 'Interactieve sessies waarin theorie en praktijk worden gecombineerd.',
  },
  {
    title: 'Evaluatie & Vervolg',
    description: 'We meten de resultaten en bespreken mogelijke vervolgstappen.',
  }
]

export default function CustomTrainingPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Training op maat
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Elke organisatie is uniek. Daarom ontwikkelen we trainingen die perfect aansluiten bij 
            jouw team en organisatie. We combineren bewezen methoden met jullie specifieke context 
            en doelen.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {benefits.map((benefit) => (
              <AnimatedSection
                key={benefit.title}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
            Hoe werkt het?
          </h2>
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-x-8">
            {process.map((step, index) => (
              <AnimatedSection
                key={step.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Mogelijke onderwerpen</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We kunnen trainingen ontwikkelen over diverse onderwerpen, waaronder:
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Design Thinking & Service Design
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Agile & Scrum
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Innovatie & Creativiteit
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Teamontwikkeling
              </li>
            </ul>
          </div>
          <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Prijs op aanvraag
                </p>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  De investering is afhankelijk van de duur, groepsgrootte en specifieke wensen.
                </p>
                <Button asChild className="mt-10 w-full">
                  <Link href="/contact">
                    Plan een vrijblijvend gesprek
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