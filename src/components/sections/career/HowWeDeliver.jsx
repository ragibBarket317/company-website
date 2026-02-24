'use client'

import { Code2, ShieldCheck, Zap } from 'lucide-react'

export default function HowWeDeliver() {
  return (
    <section className=" py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top Label */}

        <p className="text-xs tracking-[0.3em] text-cyan-400 mb-2 uppercase">
          Values
        </p>
        <h2 className="text-xl md:text-5xl font-extrabold text-white mb-4">
          How we deliver
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-3xl leading-relaxed mb-10 text-justify">
          Engineering at Intexa is about reliability and measurable outcomes. We
          avoid the hype and focus on the architecture.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="group bg-[#0B1220] border border-white/10 rounded-3xl p-10
                          transition duration-300
                          hover:border-cyan-400/40
                          hover:shadow-[0_0_40px_rgba(0,200,255,0.12)]"
          >
            <div
              className="w-14 h-14 rounded-2xl bg-cyan-500/10 
                            flex items-center justify-center mb-8"
            >
              <Code2 className="text-cyan-400" size={22} />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">
              Technical Rigor
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We ship code that is tested, reviewed, and maintainable. No
              shortcuts on architecture or security.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group bg-[#0B1220] border border-white/10 rounded-3xl p-10
                          transition duration-300
                          hover:border-cyan-400/40
                          hover:shadow-[0_0_40px_rgba(0,200,255,0.12)]"
          >
            <div
              className="w-14 h-14 rounded-2xl bg-cyan-500/10 
                            flex items-center justify-center mb-8"
            >
              <ShieldCheck className="text-cyan-400" size={22} />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">
              Full Ownership
            </h3>

            <p className="text-gray-400 leading-relaxed">
              You own the outcome, not just the task. We trust you to make the
              right calls for the platform.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group bg-[#0B1220] border border-white/10 rounded-3xl p-10
                          transition duration-300
                          hover:border-cyan-400/40
                          hover:shadow-[0_0_40px_rgba(0,200,255,0.12)]"
          >
            <div
              className="w-14 h-14 rounded-2xl bg-cyan-500/10 
                            flex items-center justify-center mb-8"
            >
              <Zap className="text-cyan-400" size={22} />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">
              Iteration Speed
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We ship frequently. High-velocity cycles backed by robust CI/CD
              and observability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
