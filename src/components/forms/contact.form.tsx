'use client'

import { useFormState } from 'react-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { submitContactForm } from '@/actions/contact.form.action'
import type { ActionState } from '@/actions/contact.form.action'

const initialState: ActionState = {
  success: false,
  error: undefined,
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState)

  if (state.success) {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800">Bedankt voor je bericht!</h3>
        <p className="mt-2 text-green-700">
          Ik neem zo snel mogelijk contact met je op.
        </p>
        <Button
          onClick={() => window.location.reload()}
          className="mt-4"
          variant="outline"
        >
          Nieuw bericht versturen
        </Button>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-8">
      {state.error && (
        <div className="rounded-lg bg-red-50 p-4">
          <p className="text-sm text-red-600">{state.error}</p>
        </div>
      )}

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
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Je naam"
            />
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
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="naam@voorbeeld.nl"
            />
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
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Je bericht"
            />
          </div>
        </div>
      </div>

      <div>
        <Button 
          type="submit" 
          className="w-full sm:w-auto"
        >
          Versturen
        </Button>
      </div>
    </form>
  )
} 