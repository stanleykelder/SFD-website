import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Button } from '@/components/ui/button'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { Title } from '@/components/ui/title'
import { ShadowedContainer } from '@/components/ui/shadowed-image'
import { generateMetadata, defaultViewport } from '@/config/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Stanley Innovation - Innovatie die ertoe doet',
  description: 'Focus op gebruikersgericht denken en een kort-cyclische aanpak.',
  keywords: ['innovatie', 'innovatiebegeleiding', 'design thinking', 'Stanley Innovation', 'kort-cyclisch', 'gebruikersgericht'],
  images: [
    {
      url: '/images/eco-not-ego.jpg',
      width: 1920,
      height: 1080,
      alt: 'Eco not Ego - Stanley Innovation',
    },
  ],
  canonical: 'https://stanleyinnovation.nl',
})

export const viewport = defaultViewport

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/eco-not-ego.jpg"
            alt="Stanley Innovation"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-8 lg:max-w-none lg:pt-6 xl:col-span-7">
              <ShadowedContainer 
                shadowColor="bg-primary" 
                shadowPosition="bottom-right"
                containerClassName="mx-auto lg:mx-0"
              >
                <div className="bg-[hsl(14,52%,95%)] p-8">
                  <Title as="h1" className="mb-6 text-[hsl(345,8%,20%)]" lineColor="bg-[hsl(345,8%,20%)]" showLine={false}>
                    Innoveren om de wereld een beetje mooier te maken
                  </Title>
                  <p className="text-xl text-[hsl(345,8%,20%)] leading-relaxed">
                    Innovatie gaat voor mij niet over hogere inkomsten en lagere uitgaven. Waar gaat het wel om?
                    Begrijpen wat jouw gebruikers nodig hebben. Een product of dienst aanbieden waar mensen daadwerkelijk mee geholpen zijn. 
                    En ook natuurinclusief denken en rekening houden met kleinere groepen is daar onderdeel van. Kortom: de 
                    wereld een beetje mooier maken.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <Link href="/contact">
                        Neem contact op
                      </Link>
                    </Button>
                  </div>
                </div>
              </ShadowedContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Innovatiebegeleiding Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:60px_60px]" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Title as="h2" className="mb-6">
                Innovatiebegeleiding
              </Title>
            </AnimatedSection>

            <AnimatedSection
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-600 leading-relaxed mb-6 mt-6">
                Innoveren gaat in kleine stappen. Door veel kleine stappen te zetten en steeds te leren van wat je daarin gedaan hebt bereik je het snelst een duurzaam resultaat. Dit is kort-cyclisch werken. De stappen zet je samen met je team, je stakeholders en je (toekomstige) gebruikers. Zo ontwikkel je samen iets dat breed wordt gedragen en goed wordt gebruikt.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Deze manier van werken vereist een ander proces dan het traditionele projectmanagement. Ik help jullie team dit te doorlopen. Ik begeleid het innovatieproces met het inzetten van de juiste tooling, het faciliteren van sessies en het reflecteren op resultaten. Zo kunnen jullie je focussen op de inhoud en het helpen van jullie gebruikers. Door te doen leren jullie onderweg vanzelf ook deze manier van werken.
              </p>
            </AnimatedSection>

            <AnimatedSection
              className="mt-12 flex justify-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild className="bg-white hover:bg-white/90">
                <Link href="/innovatiebegeleiding">
                  Lees meer over innovatiebegeleiding
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:75px_75px]" />
        <div className="container relative">
          <AnimatedSection
            className="text-left mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Title as="h2" className="mb-6">
              Wat anderen zeggen
            </Title>
          </AnimatedSection>

          <TestimonialsCarousel />
        </div>
      </section>
    </>
  )
}
