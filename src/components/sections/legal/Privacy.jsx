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
  Lock,
  Globe,
  Fingerprint,
  Mail,
} from 'lucide-react'

const privacyPolicy = [
  {
    title: 'Information Collection',
    description:
      'We collect personal and business information necessary to respond to inquiries, deliver engineering services, and maintain secure project communication.',
    icon: <Lock className="w-6 h-6 text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
  {
    title: 'Data Processing & Storage',
    description:
      'Data is processed in secure cloud environments with role-based access. As a Canadian firm, we ensure cross-border transfers meet PIPEDA and GDPR equivalents.',
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
  {
    title: 'Security Measures',
    description:
      'We apply encrypted communication (AES-256), multi-factor authentication, and secure development lifecycles. We never sell personal or client data.',
    icon: <Fingerprint className="w-6 h-6 text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
  {
    title: 'Rights & Access',
    description:
      'Users retain the right to access, correct, or request deletion of their data. Inquiries should be directed to our compliance team at hello@intexa.com.',
    icon: <Mail className="w-6 h-6 text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="flex gap-2 items-center mb-10">
          <div className={`bg-cyan-500/10 p-3 rounded-xl mr-3`}>
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div>

          <h2 className="text-5xl  font-bold">Privacy Policy</h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {privacyPolicy.map((industry, index) => (
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
