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
  ShieldCheck,
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
    icon: <Stethoscope className="w-6 h-6  text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
  {
    title: 'Government & Public Sector',
    description:
      'E-governance platforms, citizen portals, data infrastructure, secure digital services.',
    icon: <Shield className="w-6 h-6  text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
  {
    title: 'Logistics & Supply Chain',
    description:
      'Fleet management, warehouse systems, tracking platforms, automation and analytics.',
    icon: <Truck className="w-6 h-6  text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
]

export default function DevelopmentCulture() {
  return (
    <div className="min-h-screen text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">
            The Forge
          </p>
          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold mb-4">
            Our Development Centre
          </h2>
          <p className="text-gray-200 font-body text-[16px] text-justify max-w-4xl">
            Our high-intensity development hub is where raw concepts are forged
            into enterprise-grade solutions. Equipped with state-of-the-art
            infrastructure, our engineers push the boundaries of what's possible
            in real-time processing.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-[#0B1220] border border-white/10 rounded-3xl p-10
                          transition duration-300
                          hover:border-cyan-400/40
                          hover:shadow-[0_0_40px_rgba(0,200,255,0.12)]"
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
