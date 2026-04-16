'use server'

import { escapeHtml, isValidEmail } from '@/lib/utils'

const BREVO_API_KEY = process.env.BREVO_API_KEY
if (!BREVO_API_KEY) {
  throw new Error('Missing BREVO_API_KEY environment variable')
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export interface ActionState {
  success: boolean
  error?: string
}

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_PHONE_LENGTH = 20
const MAX_MESSAGE_LENGTH = 5000

// Simple in-memory rate limiter (per server instance)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 3 // max 3 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

/** Strip characters that could be used for header injection */
function sanitizeForHeader(str: string): string {
  return str.replace(/[\r\n]/g, '')
}

export async function submitContactForm(prevState: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const name = (formData.get('name') as string ?? '').slice(0, MAX_NAME_LENGTH)
    const email = (formData.get('email') as string ?? '').slice(0, MAX_EMAIL_LENGTH)
    const phone = (formData.get('phone') as string ?? '').slice(0, MAX_PHONE_LENGTH)
    const message = (formData.get('message') as string ?? '').slice(0, MAX_MESSAGE_LENGTH)

    // Required field validation
    if (!name || !email || !message) {
      return {
        success: false,
        error: 'Vul alle verplichte velden in.'
      }
    }

    // Email format validation
    if (!isValidEmail(email)) {
      return {
        success: false,
        error: 'Voer een geldig e-mailadres in.'
      }
    }

    // Rate limiting
    // Use a fallback IP since headers() is async in Next.js 16
    const ip = 'global'
    if (isRateLimited(ip)) {
      return {
        success: false,
        error: 'Te veel verzoeken. Probeer het over een minuut opnieuw.'
      }
    }

    // Escape all user input for safe HTML embedding
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeMessage = escapeHtml(message)

    // Sanitize values used in email headers
    const headerEmail = sanitizeForHeader(email)
    const headerName = sanitizeForHeader(name)

    // Create email content
    const emailData = {
      sender: { name: 'Stanley Innovation', email: 'info@savethecity.app' },
      to: [{ email: 'stanley@stanleyinnovation.nl', name: 'Stanley' }],
      subject: `Nieuw contactformulier van ${headerName}`,
      htmlContent: `
        <h2>Nieuw contactformulier</h2>
        <p><strong>Naam:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Telefoon:</strong> ${safePhone}</p>` : ''}
        <hr>
        <p><strong>Bericht:</strong></p>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: { email: headerEmail, name: headerName }
    }

    // Send email using Brevo API
    const headers: Record<string, string> = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY!
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers,
      body: JSON.stringify(emailData)
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    return {
      success: true
    }
  } catch (error) {
    console.error('Error sending contact form:', error instanceof Error ? error.message : 'Unknown error')
    return {
      success: false,
      error: 'Er is iets misgegaan. Je kunt me ook een mailtje sturen op stanley@stanleyinnovation.nl.'
    }
  }
} 