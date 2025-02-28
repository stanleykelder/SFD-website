'use client'

import Link from 'next/link'
import { LightBulbIcon, PresentationChartBarIcon, UsersIcon } from '@heroicons/react/24/outline'
import { AnimatedSection } from '@/components/ui/animated-section'

const features = [
  {
    name: 'Innovation Coaching',
    description: 'One-on-one guidance to help you navigate complex challenges and drive innovation in your organization.',
    icon: LightBulbIcon,
  },
  {
    name: 'Design Thinking Workshops',
    description: 'Hands-on workshops that teach your team how to solve problems creatively and user-centrically.',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Team Development',
    description: 'Build high-performing teams that embrace agile methodologies and innovative thinking.',
    icon: UsersIcon,
  },
]

const services = [
  {
    title: 'Innovation Coaching',
    description: 'Long-term strategic partnership to guide your organization through transformative innovation initiatives.',
  },
  {
    title: 'Design Thinking Workshops',
    description: 'Hands-on workshops that teach your team how to solve complex problems using design thinking methodology.',
  },
  {
    title: 'Agile Transformation',
    description: 'Expert guidance in implementing and optimizing Agile methodologies for improved project delivery.',
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Innovation Coach</h1>
      <p className="mt-4 text-lg text-gray-600">Transform your business through innovation</p>
    </div>
  )
}
