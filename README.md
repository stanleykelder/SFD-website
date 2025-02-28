# Stanley Innovation Website

This is the official website for Stanley Innovation, built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Email Service**: Brevo
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Development

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
BREVO_API_KEY=your_brevo_api_key
```

## Deployment

The site is automatically deployed to Vercel through GitHub integration. Every push to the main branch will trigger a new deployment.

### Manual Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` to deploy
3. Run `vercel --prod` to deploy to production

## License

Copyright © 2024 Stanley Innovation. All rights reserved.
