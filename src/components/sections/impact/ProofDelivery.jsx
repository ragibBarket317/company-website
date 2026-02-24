import { Gauge, MapPin, ShieldCheck } from 'lucide-react'

export default function ProofDelivery() {
  return (
    <div className="text-white py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <p className="text-[10px] tracking-[0.3em] text-cyan-400 uppercase">
              CASE STUDIES
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Proof of Delivery.
            </h2>

            <p className="text-gray-300 text-[16px] leading-relaxed max-w-xl">
              A snapshot of how we deliver enterprise-grade systems across
              regulated environments. Focused on architecture clarity and
              measurable outcomes.
            </p>

            <div>
              <div className="inline-flex items-center bg-[#111827] border border-gray-800 px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-sky-500 mr-2" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  Toronto, Canada
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Security Card */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 flex flex-col justify-center h-full transition hover:border-cyan-500/40">
              <ShieldCheck className="text-sky-400 w-8 h-8 mb-6" />
              <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                Security-First
              </span>
              <span className="text-white font-semibold text-lg mt-2">
                Built-in
              </span>
            </div>

            {/* Performance Card */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 flex flex-col justify-center h-full transition hover:border-cyan-500/40">
              <Gauge className="text-sky-400 w-8 h-8 mb-6" />
              <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                Performance
              </span>
              <span className="text-white font-semibold text-lg mt-2">
                Optimized
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
