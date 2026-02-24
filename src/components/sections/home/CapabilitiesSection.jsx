import {
  MonitorSmartphone,
  BarChart3,
  Code2,
  ShieldCheck,
  Cloud,
  Cpu,
  Smartphone,
  Globe,
  CreditCard,
  Stethoscope,
  Shield,
  Home,
  Truck,
  ShoppingCart,
  BookOpen,
  Zap,
  Phone,
  Film,
  Airplay,
  Car,
  Layers,
  Users,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// const capabilities = [
//   {
//     title: 'IT Consultation',
//     description:
//       'Strategic roadmap aligning technology with your core business objectives.',
//     icon: MonitorSmartphone,
//     tag: 'STRATEGY',
//     color: 'text-blue-400',
//     hoverBg: 'group-hover:bg-blue-500',
//   },
//   {
//     title: 'Digital Marketing',
//     description:
//       'Data-driven campaigns designed to maximize reach and conversion rates.',
//     icon: BarChart3,
//     tag: 'GROWTH',
//     color: 'text-pink-400',
//     hoverBg: 'group-hover:bg-pink-500',
//   },
//   {
//     title: 'Software Dev',
//     description:
//       'Custom full-stack applications built for performance and infinite scalability.',
//     icon: Code2,
//     tag: 'ENGINEERING',
//     color: 'text-purple-400',
//     hoverBg: 'group-hover:bg-purple-500',
//   },
//   {
//     title: 'Cyber Security',
//     description:
//       'Next-gen threat detection and architectural hardening for digital assets.',
//     icon: ShieldCheck,
//     tag: 'PROTECTION',
//     color: 'text-red-400',
//     hoverBg: 'group-hover:bg-red-500',
//   },
//   {
//     title: 'Cloud Solutions',
//     description:
//       'Analysis and management of robust distributed cloud architecture.',
//     icon: Cloud,
//     tag: 'INFRA',
//     color: 'text-cyan-400',
//     hoverBg: 'group-hover:bg-cyan-500',
//   },
//   {
//     title: 'AI & Automation',
//     description:
//       'Optimizing operations through neural networks and machine process automation.',
//     icon: Cpu,
//     tag: 'INTELLIGENCE',
//     color: 'text-emerald-400',
//     hoverBg: 'group-hover:bg-emerald-500',
//   },
//   {
//     title: 'Mobile Apps',
//     description:
//       'iOS & Android native experiences with a focus on intuitive UX.',
//     icon: Smartphone,
//     tag: 'MOBILE',
//     color: 'text-orange-400',
//     hoverBg: 'group-hover:bg-orange-500',
//   },
//   {
//     title: 'Web Ecosystems',
//     description:
//       'End-to-end web platforms that define modern digital standards.',
//     icon: Globe,
//     tag: 'PLATFORM',
//     color: 'text-indigo-400',
//     hoverBg: 'group-hover:bg-indigo-500',
//   },
// ]

const capabilities = [
  {
    title: 'Financial Services & FinTech',
    description:
      'Banking, payments, digital wallets, lending platforms, trading systems, compliance tools.',
    icon: CreditCard,
    tag: 'FINTECH',
    color: 'text-blue-400',
    hoverBg: 'group-hover:bg-blue-500',
    id: 'fintech',
  },
  {
    title: 'Healthcare & HealthTech',
    description:
      'Telemedicine, hospital systems, diagnostics platforms, pharmacy systems, AI-assisted healthcare workflows.',
    icon: Stethoscope,
    tag: 'HEALTHTECH',
    color: 'text-green-400',
    hoverBg: 'group-hover:bg-green-500',
    id: 'healthtech',
  },
  {
    title: 'Government & Public Sector',
    description:
      'E-governance platforms, citizen portals, data infrastructure, secure digital services.',
    icon: Shield,
    tag: 'PUBLIC',
    color: 'text-yellow-400',
    hoverBg: 'group-hover:bg-yellow-500',
  },
  {
    title: 'Logistics & Supply Chain',
    description:
      'Fleet management, warehouse systems, tracking platforms, automation and analytics.',
    icon: Truck,
    tag: 'LOGISTICS',
    color: 'text-indigo-400',
    hoverBg: 'group-hover:bg-indigo-500',
  },
  {
    title: 'E-commerce & Retail',
    description:
      'Marketplace platforms, inventory systems, customer portals, payment integrations.',
    icon: ShoppingCart,
    tag: 'RETAIL',
    color: 'text-pink-400',
    hoverBg: 'group-hover:bg-pink-500',
  },
  {
    title: 'Education & EdTech',
    description:
      'Learning management systems, AI tutoring platforms, assessment engines, analytics dashboards.',
    icon: BookOpen,
    tag: 'EDTECH',
    color: 'text-purple-400',
    hoverBg: 'group-hover:bg-purple-500',
  },
  {
    title: 'Real Estate & PropTech',
    description:
      'Property management platforms, CRM systems, smart analytics tools.',
    icon: Home,
    tag: 'PROPTECH',
    color: 'text-red-400',
    hoverBg: 'group-hover:bg-red-500',
  },
  {
    title: 'Energy & Utilities',
    description:
      'Smart grid solutions, monitoring systems, IoT dashboards, performance analytics.',
    icon: Zap,
    tag: 'ENERGY',
    color: 'text-orange-400',
    hoverBg: 'group-hover:bg-orange-500',
    id: 'energy',
  },
  // {
  //   title: 'Manufacturing & Industrial Automation',
  //   description:
  //     'ERP systems, IoT integration, production monitoring, predictive maintenance tools.',
  //   icon: Cpu,
  //   tag: 'INDUSTRIAL',
  //   color: 'text-teal-400',
  //   hoverBg: 'group-hover:bg-teal-500',
  // },
  // {
  //   title: 'Telecommunications',
  //   description:
  //     'Billing systems, customer management platforms, data processing pipelines.',
  //   icon: Phone,
  //   tag: 'TELECOM',
  //   color: 'text-blue-500',
  //   hoverBg: 'group-hover:bg-blue-600',
  // },
  // {
  //   title: 'Media & Entertainment',
  //   description:
  //     'Streaming platforms, digital content systems, audience analytics tools.',
  //   icon: Film,
  //   tag: 'MEDIA',
  //   color: 'text-purple-500',
  //   hoverBg: 'group-hover:bg-purple-600',
  // },
  // {
  //   title: 'Travel & Hospitality',
  //   description:
  //     'Booking systems, operational dashboards, customer engagement platforms.',
  //   icon: Airplay,
  //   tag: 'HOSPITALITY',
  //   color: 'text-pink-500',
  //   hoverBg: 'group-hover:bg-pink-600',
  // },
  // {
  //   title: 'Automotive & Mobility',
  //   description:
  //     'Fleet tracking, connected vehicle platforms, operational automation systems.',
  //   icon: Car,
  //   tag: 'MOBILITY',
  //   color: 'text-gray-400',
  //   hoverBg: 'group-hover:bg-gray-500',
  // },
  // {
  //   title: 'SaaS & Enterprise Software',
  //   description:
  //     'Custom SaaS platforms, internal enterprise tools, workflow automation systems.',
  //   icon: Layers,
  //   tag: 'SAAS',
  //   color: 'text-cyan-400',
  //   hoverBg: 'group-hover:bg-cyan-500',
  // },
  // {
  //   title: 'IT Services & Staff Augmentation',
  //   description:
  //     'Engineering team extension, cloud migration, AI integration, DevOps support.',
  //   icon: Users,
  //   tag: 'IT SERVICES',
  //   color: 'text-green-500',
  //   hoverBg: 'group-hover:bg-green-600',
  // },
]

export default function CapabilitiesSection() {
  const navigate = useNavigate()
  return (
    <section id="services" className="text-white py-20">
      <div className="container mx-auto space-y-16">
        {/* Top Header */}
        <div className="">
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">
            OUR CAPABILITIES
          </p>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <h2 className="text-xl md:text-2xl lg:text-5xl font-bold leading-tight">
              Technical excellence across <br />
              every touchpoint.
            </h2>

            <p className="text-gray-400 max-w-md">
              Every solution we deploy is built on a foundation of security,
              scalability, and user-centric logic.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="group relative bg-[#0A1428] border border-[#13203B] rounded-2xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-500 ${item.hoverBg} group-hover:scale-110`}
                  >
                    <Icon
                      className={`w-6 h-6 transition-all duration-500 ${item.color} group-hover:text-white`}
                    />
                  </div>
                  <div>
                    {/* Tag */}
                    <p className="text-[10px] tracking-widest text-cyan-400">
                      {item.tag}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Learn More */}
                <div className="mt-auto pt-6">
                  <span
                    onClick={() => navigate(`/expertise#${item.id}`)}
                    className="inline-flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 group-hover:text-cyan-400 group-hover:cursor-pointer"
                  >
                    LEARN MORE
                    <span className="transition-transform duration-300 group-hover:translate-x-2 ">
                      →
                    </span>
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
