import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function ContactFormEmail({ name, email, phone, message }: ContactFormEmailProps) {
  const htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #111827; font-size: 24px; font-weight: 600; margin-bottom: 24px;">
        New Contact Form Submission
      </h1>
      
      <div style="margin-bottom: 24px;">
        <h2 style="color: #4B5563; font-size: 16px; font-weight: 600; margin-bottom: 8px;">
          Sender Details
        </h2>
        <p style="color: #111827; margin: 0;">Name: ${name}</p>
        <p style="color: #111827; margin: 0;">Email: ${email}</p>
        ${phone ? `<p style="color: #111827; margin: 0;">Phone: ${phone}</p>` : ''}
      </div>

      <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 24px 0;" />

      <div>
        <h2 style="color: #4B5563; font-size: 16px; font-weight: 600; margin-bottom: 8px;">
          Message
        </h2>
        <p style="color: #111827; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  `;

  const textContent = `
New Contact Form Submission

Sender Details
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
  `.trim();

  return { html: htmlContent, text: textContent };
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
}

const section = {
  margin: '24px 0',
}

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '0 0 24px',
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '12px 0',
}

const hr = {
  borderColor: '#dfe1e4',
  margin: '24px 0',
} 