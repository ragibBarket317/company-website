'use client'

import React from 'react'
import {
  CreditCard,
  Stethoscope,
  Shield,
  Home,
  Truck,
  ShoppingCart,
  BookOpen,
  Zap,
  Cpu,
  Phone,
  Film,
  Airplay,
  Car,
  Layers,
  Users,
} from 'lucide-react'

const industries = [
  {
    title: 'Financial Services & FinTech',
    description:
      'Banking, payments, digital wallets, lending platforms, trading systems, compliance tools.',
    icon: <CreditCard className="w-6 h-6 text-blue-400" />,
    bgColor: 'bg-blue-100/10',
  },
  {
    title: 'Healthcare & HealthTech',
    description:
      'Telemedicine, hospital systems, diagnostics platforms, pharmacy systems, AI-assisted healthcare workflows.',
    icon: <Stethoscope className="w-6 h-6 text-green-400" />,
    bgColor: 'bg-green-100/10',
  },
  {
    title: 'Government & Public Sector',
    description:
      'E-governance platforms, citizen portals, data infrastructure, secure digital services.',
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    bgColor: 'bg-yellow-100/10',
  },
  {
    title: 'Logistics & Supply Chain',
    description:
      'Fleet management, warehouse systems, tracking platforms, automation and analytics.',
    icon: <Truck className="w-6 h-6 text-indigo-400" />,
    bgColor: 'bg-indigo-100/10',
  },
  {
    title: 'E-commerce & Retail',
    description:
      'Marketplace platforms, inventory systems, customer portals, payment integrations.',
    icon: <ShoppingCart className="w-6 h-6 text-pink-400" />,
    bgColor: 'bg-pink-100/10',
  },
  {
    title: 'Education & EdTech',
    description:
      'Learning management systems, AI tutoring platforms, assessment engines, analytics dashboards.',
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    bgColor: 'bg-purple-100/10',
  },
  {
    title: 'Real Estate & PropTech',
    description:
      'Property management platforms, CRM systems, smart analytics tools.',
    icon: <Home className="w-6 h-6 text-red-400" />,
    bgColor: 'bg-red-100/10',
  },
  {
    title: 'Energy & Utilities',
    description:
      'Smart grid solutions, monitoring systems, IoT dashboards, performance analytics.',
    icon: <Zap className="w-6 h-6 text-orange-400" />,
    bgColor: 'bg-orange-100/10',
  },
  {
    title: 'Manufacturing & Industrial Automation',
    description:
      'ERP systems, IoT integration, production monitoring, predictive maintenance tools.',
    icon: <Cpu className="w-6 h-6 text-teal-400" />,
    bgColor: 'bg-teal-100/10',
  },
  {
    title: 'Telecommunications',
    description:
      'Billing systems, customer management platforms, data processing pipelines.',
    icon: <Phone className="w-6 h-6 text-blue-500" />,
    bgColor: 'bg-blue-100/10',
  },
  {
    title: 'Media & Entertainment',
    description:
      'Streaming platforms, digital content systems, audience analytics tools.',
    icon: <Film className="w-6 h-6 text-purple-500" />,
    bgColor: 'bg-purple-100/10',
  },
  {
    title: 'Travel & Hospitality',
    description:
      'Booking systems, operational dashboards, customer engagement platforms.',
    icon: <Airplay className="w-6 h-6 text-pink-500" />,
    bgColor: 'bg-pink-100/10',
  },
  {
    title: 'Automotive & Mobility',
    description:
      'Fleet tracking, connected vehicle platforms, operational automation systems.',
    icon: <Car className="w-6 h-6 text-gray-400" />,
    bgColor: 'bg-gray-100/10',
  },
  {
    title: 'SaaS & Enterprise Software',
    description:
      'Custom SaaS platforms, internal enterprise tools, workflow automation systems.',
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    bgColor: 'bg-cyan-100/10',
  },
  {
    title: 'IT Services & Staff Augmentation',
    description:
      'Engineering team extension, cloud migration, AI integration, DevOps support.',
    icon: <Users className="w-6 h-6 text-green-500" />,
    bgColor: 'bg-green-100/10',
  },
]

export default function IndustrySectors() {
  return (
    <div className="min-h-screen text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center font-bold mb-4">
            Industries We Serve with Engineering Excellence
          </h2>
          <p className="text-gray-400 text-center mb-10">
            Intexa delivers advanced AI systems, scalable software platforms,
            and secure digital infrastructure across a broad spectrum of
            industries. We partner with startups, scale-ups, IT agencies, and
            large enterprises to modernize operations, automate workflows, and
            build future-ready systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-6 border border-gray-800 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`${industry.bgColor} p-3 rounded-xl mr-3`}>
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold">{industry.title}</h3>
              <p className="text-gray-400 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
