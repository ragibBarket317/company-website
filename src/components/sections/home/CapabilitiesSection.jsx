import {
  MonitorSmartphone,
  BarChart3,
  Code2,
  ShieldCheck,
  Cloud,
  Cpu,
  Smartphone,
  Globe,
} from 'lucide-react'

const capabilities = [
  {
    title: 'IT Consultation',
    description:
      'Strategic roadmap aligning technology with your core business objectives.',
    icon: MonitorSmartphone,
    tag: 'STRATEGY',
    color: 'text-blue-400',
    hoverBg: 'group-hover:bg-blue-500',
  },
  {
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns designed to maximize reach and conversion rates.',
    icon: BarChart3,
    tag: 'GROWTH',
    color: 'text-pink-400',
    hoverBg: 'group-hover:bg-pink-500',
  },
  {
    title: 'Software Dev',
    description:
      'Custom full-stack applications built for performance and infinite scalability.',
    icon: Code2,
    tag: 'ENGINEERING',
    color: 'text-purple-400',
    hoverBg: 'group-hover:bg-purple-500',
  },
  {
    title: 'Cyber Security',
    description:
      'Next-gen threat detection and architectural hardening for digital assets.',
    icon: ShieldCheck,
    tag: 'PROTECTION',
    color: 'text-red-400',
    hoverBg: 'group-hover:bg-red-500',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Analysis and management of robust distributed cloud architecture.',
    icon: Cloud,
    tag: 'INFRA',
    color: 'text-cyan-400',
    hoverBg: 'group-hover:bg-cyan-500',
  },
  {
    title: 'AI & Automation',
    description:
      'Optimizing operations through neural networks and machine process automation.',
    icon: Cpu,
    tag: 'INTELLIGENCE',
    color: 'text-emerald-400',
    hoverBg: 'group-hover:bg-emerald-500',
  },
  {
    title: 'Mobile Apps',
    description:
      'iOS & Android native experiences with a focus on intuitive UX.',
    icon: Smartphone,
    tag: 'MOBILE',
    color: 'text-orange-400',
    hoverBg: 'group-hover:bg-orange-500',
  },
  {
    title: 'Web Ecosystems',
    description:
      'End-to-end web platforms that define modern digital standards.',
    icon: Globe,
    tag: 'PLATFORM',
    color: 'text-indigo-400',
    hoverBg: 'group-hover:bg-indigo-500',
  },
]

export default function CapabilitiesSection() {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto space-y-16">
        {/* Top Header */}
        <div className="">
          <p className="text-sm tracking-[0.4em] text-cyan-400 mb-4">
            OUR CAPABILITIES
          </p>

          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
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
                className="group relative bg-[#0A1428] border border-[#13203B] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,255,255,0.08)]"
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
                <span className="text-sm text-gray-500 transition-all duration-300 group-hover:text-cyan-400">
                  LEARN MORE →
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
