import React, { useEffect } from 'react'
import TrustedClients from '../expertise/TrustedClients'
import { useLocation } from 'react-router-dom'

const testimonials = [
  {
    title: 'Architectural Discipline at Enterprise Scale',
    quote:
      'Intexa didn’t just deliver software. They delivered a scalable architecture that transformed our infrastructure into a high-performance digital backbone. Their engineering discipline and governance maturity are world class.',
    author: 'CTO, North American Logistics Enterprise (Canada)',
  },
  {
    title: 'A True Strategic Technology Partner',
    quote:
      'From roadmap strategy to deployment, Intexa operated as an extension of our executive team. Their AI integration and cloud modernization reduced operational overhead while improving performance across global markets.',
    author: 'VP Digital Transformation, Global Retail Group (United States)',
  },
  {
    title: 'Precision. Security. Reliability.',
    quote:
      'Intexa’s low-latency engineering and security-first architecture allowed us to operate mission-critical systems with confidence. 99.99% uptime is not a promise — it’s their standard.',
    author: 'Director of Technology, FinTech Platform (United Kingdom)',
  },
  {
    title: 'Engineering Built for the Long Term',
    quote:
      'What impressed us most was their long-term thinking. They build platforms, not patches. Their governance model and documentation standards reflect a firm ready for global compliance and enterprise procurement.',
    author: 'COO, Healthcare Distribution Network (Australia)',
  },
  {
    title: 'Performance Optimization at Scale',
    quote:
      'Intexa’s AI-driven analytics platform reduced our infrastructure costs and improved system throughput significantly. Their execution velocity matched their architectural rigor.',
    author: 'Head of Infrastructure, Media Streaming Company (Germany)',
  },
]

const ImpactClients = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  return (
    <section
      id="clients"
      className="relative pt-10 pb-32 text-white overflow-hidden"
    >
      <div className="container">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.4em] text-cyan-400 uppercase mb-4">
            The Impact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Client Testimonials
          </h2>
          <div>
            <TrustedClients />
          </div>
          {/* <div className="mt-6 h-[1px] w-24 bg-cyan-500 mx-auto opacity-60"></div> */}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                {item.title}
              </h3>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                “{item.quote}”
              </p>

              {/* Author */}
              <p className="mt-6 text-xs tracking-wide text-gray-400 uppercase">
                — {item.author}
              </p>

              {/* Subtle top glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-cyan-500/5 to-transparent transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactClients
