import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact.form'
import { AnimatedSection } from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'Contact - Stanley Innovation',
  description: 'Neem contact op voor een vrijblijvend gesprek over innovatie, training of samenwerking.',
}

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
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact
            </h1>
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