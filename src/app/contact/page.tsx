import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact.form'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Title } from '@/components/ui/title'
import { generateMetadata, defaultViewport } from '@/config/metadata'

export const metadata: Metadata = generateMetadata({
  title: 'Contact',
  description: 'Neem contact op voor een vrijblijvend gesprek over innovatie, training of samenwerking.',
  keywords: ['contact', 'Stanley Innovation', 'innovatie gesprek', 'vrijblijvend gesprek'],
  canonical: 'https://stanleyinnovation.nl/contact',
})

export const viewport = defaultViewport

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title as="h1" className="mb-6">
              Contact
            </Title>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Of je een vraag hebt over een training, wilt sparren over innovatie, of kennis wilt maken 
              - ik ga graag met je in gesprek over de mogelijkheden.
            </p>

            <div className="mt-12">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
} 