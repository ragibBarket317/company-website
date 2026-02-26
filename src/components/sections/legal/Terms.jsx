'use client'

import React from 'react'
import { Scale, ShieldCheck, CircleCheckBig, Gavel } from 'lucide-react'

const termsAndConditions = [
  {
    title: 'Scope of Services',
    description:
      'All professional engagements are governed by signed Master Service Agreements (MSA). Website content is for informational purposes and does not constitute a binding offer.',
    icon: <Scale className="w-6 h-6 text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
  {
    title: 'Intellectual Property',
    description:
      'Client ownership of deliverables is established upon final payment. Intexa retains ownership of its pre-existing proprietary frameworks and methodologies.',
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
  {
    title: 'Proof of Delivery (PoD)',
    description:
      'Delivery is verified via secure digital artifacts. A project is deemed accepted upon the issuance of a PoD certificate or a client-signed verification of completion.',
    icon: <CircleCheckBig className="w-6 h-6 text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
  {
    title: 'Limitation of Liability',
    description:
      'Our professional liability is limited to the extent defined in governing contracts, specifically to the value of fees paid for the relevant service module.',
    icon: <Gavel className="w-6 h-6 text-cyan-400" />,
    bgColor: 'bg-cyan-500/10',
  },
]

export default function Terms() {
  return (
    <div id="terms-service" className="min-h-screen text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="flex gap-2 items-center mb-10">
          <div className={`bg-cyan-500/10 p-3 rounded-xl mr-3`}>
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div>

          <h2 className="text-5xl  font-bold">Terms & Conditions</h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {termsAndConditions.map((industry, index) => (
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
