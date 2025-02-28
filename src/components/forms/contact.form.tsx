'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { isValidEmail } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mailadres is verplicht'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Voer een geldig e-mailadres in'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bericht is verplicht'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    try {
      setIsSubmitting(true)
      // Handle form submission
      console.log('Form submitted:', formData)
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Naam <span className="text-red-500">*</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={cn(
                "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                errors.name && "ring-red-500"
              )}
              placeholder="Je naam"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
                if (errors.name) setErrors({ ...errors, name: undefined })
              }}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-500" id="name-error">
                {errors.name}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            E-mailadres <span className="text-red-500">*</span>
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={cn(
                "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                errors.email && "ring-red-500"
              )}
              placeholder="naam@voorbeeld.nl"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                if (errors.email) setErrors({ ...errors, email: undefined })
              }}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500" id="email-error">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
            Telefoonnummer (optioneel)
          </label>
          <div className="mt-2">
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="+31 6 12345678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
            Bericht <span className="text-red-500">*</span>
          </label>
          <div className="mt-2">
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={cn(
                "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                errors.message && "ring-red-500"
              )}
              placeholder="Je bericht"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value })
                if (errors.message) setErrors({ ...errors, message: undefined })
              }}
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-500" id="message-error">
                {errors.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Bezig met versturen...' : 'Versturen'}
        </Button>
      </div>
    </form>
  )
} 