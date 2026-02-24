import { ShieldCheck, Layers, Cpu, CheckCircle, GitBranch } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function WhatSetsUsApart() {
  const navigate = useNavigate()
  return (
    <section className="text-white py-20">
      <div className="container mx-auto space-y-12">
        {/* Top Heading */}
        <div>
          <p className="text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase">
            Intexa
          </p>
          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold">
            What Sets Us Apart
          </h2>
          <p className="text-gray-400 leading-relaxed text-justify max-w-3xl mt-2">
            At Intexa, engineering discipline, security first delivery, and
            artificial intelligence driven thinking guide every architectural
            decision. We design systems to handle scale, complexity, and real
            world operational demands, embedding governance, performance
            optimization, and infrastructure resilience into every layer. The
            result is technology that performs reliably, adapts confidently, and
            sustains long term enterprise growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 bg-[#0A1428] border border-[#13203B] rounded-3xl overflow-hidden">
          {/* LEFT SIDE */}
          <div className="p-10 space-y-10">
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              Engineering discipline, security-first delivery, and AI-native
              thinking — built for scale, complexity, and operational
              reliability.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="group bg-[#0F1B35] border border-[#13203B] rounded-2xl p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10">
                <Layers className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition" />
                <h4 className="font-semibold transition group-hover:text-cyan-400">
                  Architecture-led delivery
                </h4>
                <p className="text-sm text-gray-400">
                  Systems designed to scale cleanly.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-[#0F1B35] border border-[#13203B] rounded-2xl p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10">
                <ShieldCheck className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition" />
                <h4 className="font-semibold transition group-hover:text-cyan-400">
                  Security by design
                </h4>
                <p className="text-sm text-gray-400">
                  Threat-aware engineering practices.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-[#0F1B35] border border-[#13203B] rounded-2xl p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10">
                <Cpu className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition" />
                <h4 className="font-semibold transition group-hover:text-cyan-400">
                  AI that ships
                </h4>
                <p className="text-sm text-gray-400">
                  Automation built for production, not demos.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group bg-[#0F1B35] border border-[#13203B] rounded-2xl p-6 space-y-4 transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10">
                <GitBranch className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition" />
                <h4 className="font-semibold transition group-hover:text-cyan-400">
                  Clear accountability
                </h4>
                <p className="text-sm text-gray-400">
                  Milestones, demos, and ownership.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <button
                onClick={() => navigate('/contact')}
                className="bg-cyan-500 shadow-lg font-bold shadow-cyan-500/50 py-3 px-7 rounded-lg hover:scale-105 transition cursor-pointer"
              >
                Discuss your project
              </button>
              <button className="border border-cyan-500 font-bold py-3 px-7 rounded-lg text-white hover:bg-cyan-500/10 transition">
                <a href="#services" className="hover:text-cyan-400 transition">
                  Our Expertise
                </a>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-10 bg-gradient-to-br from-[#0A1428] via-[#0F1B35] to-[#0A1428] border-l border-[#13203B] flex flex-col justify-center space-y-8">
            <div>
              <p className="text-xs tracking-widest text-cyan-400 mb-3">
                EXECUTIVE-READY DELIVERY
              </p>
              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                Designed to look premium. <br />
                Built to perform.
              </h3>
            </div>

            <div className="space-y-4">
              {['Governance', 'Quality', 'Scale'].map((item, i) => (
                <div
                  key={i}
                  className="group bg-[#111C33] border border-[#13203B] rounded-xl p-4 flex items-start gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <CheckCircle className="w-5 h-5 text-gray-400 mt-1 group-hover:text-cyan-400 transition" />
                  <div>
                    <p className="font-semibold transition group-hover:text-cyan-400">
                      {item}
                    </p>
                    <p className="text-sm text-gray-400">
                      {item === 'Governance' && 'Clear scope and milestones'}
                      {item === 'Quality' && 'Testing + review discipline'}
                      {item === 'Scale' && 'Cloud-native architecture'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
