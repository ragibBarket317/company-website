import React from 'react'
import {
  Landmark,
  HeartPulse,
  Building2,
  Truck,
  ShoppingCart,
  Zap,
  Factory,
  Radio,
  Home,
  Film,
  Plane,
  Car,
  Cloud,
  Users,
  ShieldCheck,
} from 'lucide-react'

const sectors = [
  {
    icon: Landmark,
    title: 'Financial Services & FinTech',
    desc: 'High-performance financial platforms designed for secure transactions and real-time analytics.',
    points: [
      'Digital banking systems',
      'Payment infrastructures',
      'Trading dashboards',
      'Compliance automation',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & HealthTech',
    desc: 'Digital health solutions focused on compliance, data security, and clinical efficiency.',
    points: [
      'Telemedicine platforms',
      'Hospital information systems',
      'AI-driven diagnostics',
      'Patient data protection',
    ],
  },
  {
    icon: Building2,
    title: 'Government & Public Sector',
    desc: 'Secure digital infrastructure for public services and citizen engagement at scale.',
    points: [
      'E-governance portals',
      'Identity management systems',
      'Public data platforms',
      'Secure service apps',
    ],
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    desc: 'Operational visibility from warehouse management to final delivery.',
    points: [
      'Fleet tracking',
      'Warehouse automation',
      'Route optimization',
      'Predictive analytics',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Retail',
    desc: 'Scalable and high-conversion e-commerce platforms integrated with scale.',
    points: [
      'Inventory systems',
      'Secure checkout',
      'Performance optimization',
      'Customer analytics',
    ],
  },
  {
    icon: Home,
    title: 'Real Estate & PropTech',
    desc: 'Property operations, CRM, and analytics built for speed and clarity.',
    points: [
      'Property management',
      'Lead & CRM systems',
      'Tenant portals',
      'Smart analytics',
    ],
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    desc: 'Monitoring IoT dashboards and performance analytics for resilience.',
    points: [
      'Smart grid tools',
      'Monitoring dashboards',
      'IoT integrations',
      'Performance analytics',
    ],
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industrial Automation',
    desc: 'Digitize production with real-time visibility and predictive systems.',
    points: [
      'ERP & MES layers',
      'IoT factory data',
      'Production monitoring',
      'Predictive maintenance',
    ],
  },
  {
    icon: Radio,
    title: 'Telecommunications',
    desc: 'High-scale systems for billing, customers, and data pipelines.',
    points: [
      'Billing platforms',
      'Customer management',
      'Network monitoring',
      'Data processing pipelines',
    ],
  },
  {
    icon: Film,
    title: 'Media & Entertainment',
    desc: 'Scalable content platforms and audience analytics tools built for performance and engagement.',
    points: [
      'Content streaming platforms',
      'Audience analytics tools',
      'Performance optimization',
      'Engagement tracking systems',
    ],
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    desc: 'Booking engines and operational dashboards tailored for seamless travel experiences.',
    points: [
      'Booking systems',
      'Operational dashboards',
      'Customer engagement tools',
      'Real-time availability tracking',
    ],
  },
  {
    icon: Car,
    title: 'Automotive & Mobility',
    desc: 'Fleet intelligence and connected mobility systems with real-time automation.',
    points: [
      'Fleet tracking systems',
      'Mobility platforms',
      'Real-time telemetry',
      'Operational automation tools',
    ],
  },
  {
    icon: Cloud,
    title: 'SaaS & Enterprise Software',
    desc: 'Cloud-native SaaS platforms engineered for scale, security, and enterprise reliability.',
    points: [
      'Multi-tenant architecture',
      'Enterprise integrations',
      'High availability systems',
      'Scalable infrastructure',
    ],
  },
  {
    icon: Users,
    title: 'IT Services & Staff Augmentation',
    desc: 'Dedicated engineering teams and digital transformation expertise for rapid scaling.',
    points: [
      'Dedicated development teams',
      'DevOps support',
      'AI integration',
      'Cloud migration services',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity & Digital Risk Management',
    desc: 'Enterprise security systems protecting digital infrastructure and sensitive data.',
    points: [
      'Threat detection systems',
      'Security monitoring dashboards',
      'Identity management',
      'Compliance reporting frameworks',
    ],
  },
]

export default function Specialized() {
  return (
    <section className=" text-white py-24 px-6">
      <div className="container">
        {/* Heading */}
        <div className=" mb-20">
          <p className="text-[10px] tracking-[0.3em] text-cyan-400 mb-2 uppercase">
            our expertise
          </p>
          <h2 className="text-xl md:text-4xl font-extrabold dark:text-white">
            Specialized in Scale.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We don't just build apps; we engineer vertical-specific ecosystems
            that handle high traffic, strict compliance, and complex operational
            logic.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {sectors.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0c2035] to-[#091a2b] 
                           border border-cyan-500/20 
                           rounded-2xl p-8 
                           flex flex-col justify-between
                           hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                           transition duration-300"
              >
                <div>
                  {/* Icon */}
                  <div
                    className="w-12 h-12 bg-cyan-500/15 text-cyan-400 
                                  rounded-xl flex items-center justify-center mb-6"
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deep Dive */}
                <div className="mt-auto pt-6">
                  <a href="#details">
                    <span className="inline-flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 group-hover:text-cyan-400 group-hover:cursor-pointer">
                      Deep Drive
                      <span className="transition-transform duration-300 group-hover:translate-x-2 ">
                        →
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
