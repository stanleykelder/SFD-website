import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Stanley Innovation - Innovatie die ertoe doet',
  description: 'Focus op gebruikersgericht denken en een kort-cyclische aanpak om zo te creëren wat er echt toe doet.',
}

const services = [
  {
    title: 'Innovatiebegeleiding',
    description: 'Strategische ondersteuning bij het ontwikkelen en implementeren van innovatie in jouw organisatie.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop',
    href: '/innovatiebegeleiding'
  },
  {
    title: 'Trainingen',
    description: 'Praktische trainingen die teams helpen groeien in innovatief denken en doen.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop',
    href: '/trainingen'
  },
  {
    title: 'Over Stanley',
    description: 'Leer meer over mijn aanpak en ervaring in het begeleiden van innovatie.',
    image: '/images/stanley.jpg',
    href: '/over-stanley'
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" />
        <div className="container relative py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <div className="absolute -top-4 -left-8 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl xl:text-7xl">
                  De wereld een beetje beter maken door te begrijpen wat er echt nodig is
                </h1>
                <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                  Focus op gebruikersgericht denken en een kort-cyclische aanpak om zo te creëren wat er echt toe doet.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/contact">
                      Neem contact op
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mt-16 sm:mt-20 lg:col-span-5 lg:mt-0 xl:col-span-6">
              <AnimatedSection
                className="relative aspect-[4/3] w-full rounded-2xl bg-gray-50 shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Image
                  src="/images/stanley.jpg"
                  alt="Stanley Innovation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:60px_60px]" />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Hoe kan ik je helpen?
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Van strategische innovatiebegeleiding tot praktische trainingen - samen werken we aan 
              betekenisvolle verandering die impact maakt.
            </p>
          </div>

          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <Link key={service.title} href={service.href}>
                <AnimatedSection
                  className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-64 h-[32rem] transition-transform duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/50" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <h3 className="text-2xl font-semibold leading-6 text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-6 text-gray-300">
                    {service.description}
                  </p>
                </AnimatedSection>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
