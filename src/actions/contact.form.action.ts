'use server'

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

export async function submitContactForm(prevState: ActionState, formData: FormData): Promise<ActionState> {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string

    // Basic validation
    if (!name || !email || !message) {
      return {
        success: false,
        error: 'Vul alle verplichte velden in.'
      }
    }

    // Create email content
    const emailData = {
      sender: { name: 'Stanley Innovation', email: 'info@savethecity.app' },
      to: [{ email: 'stanley@savethecity.app', name: 'Stanley' }],
      subject: `Nieuw contactformulier van ${name}`,
      htmlContent: `
        <h2>Nieuw contactformulier</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefoon:</strong> ${phone}</p>` : ''}
        <hr>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: { email: email, name: name }
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
      const error = await response.json()
      console.error('Error sending email:', error)
      throw new Error(error.message || 'Failed to send email')
    }

    return {
      success: true
    }
  } catch (error) {
    console.error('Error sending contact form:', error)
    return {
      success: false,
      error: 'Er is iets misgegaan. Probeer het later opnieuw.'
    }
  }
} 