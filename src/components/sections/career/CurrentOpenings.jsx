'use client'

import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react'

export default function CurrentOpenings() {
  return (
    <section id="roles" className="pt-20 pb-5 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] text-cyan-400 mb-2 uppercase">
          Opportunities
        </p>
        <h2 className="text-xl md:text-2xl lg:text-5xl font-extrabold text-white mb-4">
          Current Roles
        </h2>
        <p className="text-gray-400 max-w-3xl leading-relaxed mb-10">
          Join a growing team of engineers building the next generation of
          automation tools.
        </p>

        {/* ================= Job Card 1 ================= */}
        {/* <div
          className="bg-[#0B1220] border border-white/10 rounded-3xl p-10 mb-10
                        transition duration-300 hover:border-cyan-400/30"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="flex-1">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Briefcase size={14} />
                  Product Engineering
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <MapPin size={14} />
                  Remote / Hybrid
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Clock size={14} />
                  Full-time
                </div>
              </div>

              <h3 className="text-xl font-semibold text-cyan-500 mb-6">
                Senior Full-Stack Engineer (React/Node)
              </h3>

              <p className="text-gray-300 text-md leading-relaxed mb-8 max-w-3xl">
                Build production-grade web platforms, dashboards, and internal
                tools. Own features end-to-end with strong engineering
                discipline.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  'React',
                  'Node.js',
                  'PostgreSQL',
                  'API Design',
                  'Testing',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wider uppercase text-gray-400 bg-[#0F172A] border border-white/10 px-4 py-2 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <button
                className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 
                                 text-black font-semibold px-8 py-4 rounded-2xl
                                 transition duration-300 whitespace-nowrap"
              >
                Apply for this role
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div> */}

        {/* ================= Job Card 2 ================= */}
        {/* <div
          className="bg-[#0B1220] border border-white/10 rounded-3xl p-10
                        transition duration-300 hover:border-cyan-400/30"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="flex-1">

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Briefcase size={14} />
                  AI Systems
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <MapPin size={14} />
                  Remote
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Clock size={14} />
                  Full-time
                </div>
              </div>


              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                ML Engineer (Applied AI / Automation)
              </h3>


              <p className="text-gray-300 text-md leading-relaxed mb-8 max-w-3xl">
                Design and deploy AI workflows (OCR, classification, copilots,
                analytics). Optimize for reliability, latency, and measurable
                outcomes.
              </p>


              <div className="flex flex-wrap gap-3">
                {['Python', 'LLMs', 'MLOps', 'OCR', 'Pipelines'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wider uppercase text-gray-400 bg-[#0F172A] border border-white/10 px-4 py-2 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>


            <div>
              <button
                className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 
                                 text-black font-semibold px-8 py-4 rounded-2xl
                                 transition duration-300 whitespace-nowrap"
              >
                Apply for this role
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
